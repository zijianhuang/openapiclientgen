import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateApiResponse {
		apiAssociation?: ApiAssociation;
	}
	export interface AssociateApiResponseFormProperties {
	}
	export function CreateAssociateApiResponseFormGroup() {
		return new FormGroup<AssociateApiResponseFormProperties>({
		});

	}


	/** Describes an <code>ApiAssociation</code> object. */
	export interface ApiAssociation {
		domainName?: string;
		apiId?: string;
		associationStatus?: AssociationStatus;
		deploymentDetail?: string;
	}

	/** Describes an <code>ApiAssociation</code> object. */
	export interface ApiAssociationFormProperties {
		domainName: FormControl<string | null | undefined>,
		apiId: FormControl<string | null | undefined>,
		associationStatus: FormControl<AssociationStatus | null | undefined>,
		deploymentDetail: FormControl<string | null | undefined>,
	}
	export function CreateApiAssociationFormGroup() {
		return new FormGroup<ApiAssociationFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			apiId: new FormControl<string | null | undefined>(undefined),
			associationStatus: new FormControl<AssociationStatus | null | undefined>(undefined),
			deploymentDetail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssociationStatus { PROCESSING = 'PROCESSING', FAILED = 'FAILED', SUCCESS = 'SUCCESS' }

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
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

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface AssociateMergedGraphqlApiResponse {
		sourceApiAssociation?: SourceApiAssociation;
	}
	export interface AssociateMergedGraphqlApiResponseFormProperties {
	}
	export function CreateAssociateMergedGraphqlApiResponseFormGroup() {
		return new FormGroup<AssociateMergedGraphqlApiResponseFormProperties>({
		});

	}


	/** <p>Describes the configuration of a source API. A source API is a GraphQL API that is linked to a merged API. There can be multiple source APIs attached to each merged API. When linked to a merged API, the source API's schema, data sources, and resolvers will be combined with other linked source API data to form a new, singular API. </p> <p>Source APIs can originate from your account or from other accounts via Amazon Web Services Resource Access Manager. For more information about sharing resources from other accounts, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/what-is.html">What is Amazon Web Services Resource Access Manager?</a> in the <i>Amazon Web Services Resource Access Manager</i> guide.</p> */
	export interface SourceApiAssociation {
		associationId?: string;
		associationArn?: string;
		sourceApiId?: string;
		sourceApiArn?: string;
		mergedApiArn?: string;
		mergedApiId?: string;
		description?: string;
		sourceApiAssociationConfig?: SourceApiAssociationConfig;
		sourceApiAssociationStatus?: SourceApiAssociationStatus;
		sourceApiAssociationStatusDetail?: string;
		lastSuccessfulMergeDate?: Date;
	}

	/** <p>Describes the configuration of a source API. A source API is a GraphQL API that is linked to a merged API. There can be multiple source APIs attached to each merged API. When linked to a merged API, the source API's schema, data sources, and resolvers will be combined with other linked source API data to form a new, singular API. </p> <p>Source APIs can originate from your account or from other accounts via Amazon Web Services Resource Access Manager. For more information about sharing resources from other accounts, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/what-is.html">What is Amazon Web Services Resource Access Manager?</a> in the <i>Amazon Web Services Resource Access Manager</i> guide.</p> */
	export interface SourceApiAssociationFormProperties {
		associationId: FormControl<string | null | undefined>,
		associationArn: FormControl<string | null | undefined>,
		sourceApiId: FormControl<string | null | undefined>,
		sourceApiArn: FormControl<string | null | undefined>,
		mergedApiArn: FormControl<string | null | undefined>,
		mergedApiId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		sourceApiAssociationStatus: FormControl<SourceApiAssociationStatus | null | undefined>,
		sourceApiAssociationStatusDetail: FormControl<string | null | undefined>,
		lastSuccessfulMergeDate: FormControl<Date | null | undefined>,
	}
	export function CreateSourceApiAssociationFormGroup() {
		return new FormGroup<SourceApiAssociationFormProperties>({
			associationId: new FormControl<string | null | undefined>(undefined),
			associationArn: new FormControl<string | null | undefined>(undefined),
			sourceApiId: new FormControl<string | null | undefined>(undefined),
			sourceApiArn: new FormControl<string | null | undefined>(undefined),
			mergedApiArn: new FormControl<string | null | undefined>(undefined),
			mergedApiId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			sourceApiAssociationStatus: new FormControl<SourceApiAssociationStatus | null | undefined>(undefined),
			sourceApiAssociationStatusDetail: new FormControl<string | null | undefined>(undefined),
			lastSuccessfulMergeDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes properties used to specify configurations related to a source API. */
	export interface SourceApiAssociationConfig {
		mergeType?: MergeType;
	}

	/** Describes properties used to specify configurations related to a source API. */
	export interface SourceApiAssociationConfigFormProperties {
		mergeType: FormControl<MergeType | null | undefined>,
	}
	export function CreateSourceApiAssociationConfigFormGroup() {
		return new FormGroup<SourceApiAssociationConfigFormProperties>({
			mergeType: new FormControl<MergeType | null | undefined>(undefined),
		});

	}

	export enum MergeType { MANUAL_MERGE = 'MANUAL_MERGE', AUTO_MERGE = 'AUTO_MERGE' }

	export enum SourceApiAssociationStatus { MERGE_SCHEDULED = 'MERGE_SCHEDULED', MERGE_FAILED = 'MERGE_FAILED', MERGE_SUCCESS = 'MERGE_SUCCESS', MERGE_IN_PROGRESS = 'MERGE_IN_PROGRESS', AUTO_MERGE_SCHEDULE_FAILED = 'AUTO_MERGE_SCHEDULE_FAILED', DELETION_SCHEDULED = 'DELETION_SCHEDULED', DELETION_IN_PROGRESS = 'DELETION_IN_PROGRESS', DELETION_FAILED = 'DELETION_FAILED' }

	export interface UnauthorizedException {
	}
	export interface UnauthorizedExceptionFormProperties {
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
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

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
		});

	}

	export interface AssociateSourceGraphqlApiResponse {
		sourceApiAssociation?: SourceApiAssociation;
	}
	export interface AssociateSourceGraphqlApiResponseFormProperties {
	}
	export function CreateAssociateSourceGraphqlApiResponseFormGroup() {
		return new FormGroup<AssociateSourceGraphqlApiResponseFormProperties>({
		});

	}


	/** Represents the output of a <code>CreateApiCache</code> operation. */
	export interface CreateApiCacheResponse {
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
		apiCachingBehavior?: ApiCachingBehavior;
		transitEncryptionEnabled?: boolean | null;
		atRestEncryptionEnabled?: boolean | null;
		type?: ApiCacheType;
		status?: ApiCacheStatus;
	}

	/** The <code>ApiCache</code> object. */
	export interface ApiCacheFormProperties {
		ttl: FormControl<number | null | undefined>,
		apiCachingBehavior: FormControl<ApiCachingBehavior | null | undefined>,
		transitEncryptionEnabled: FormControl<boolean | null | undefined>,
		atRestEncryptionEnabled: FormControl<boolean | null | undefined>,
		type: FormControl<ApiCacheType | null | undefined>,
		status: FormControl<ApiCacheStatus | null | undefined>,
	}
	export function CreateApiCacheFormGroup() {
		return new FormGroup<ApiCacheFormProperties>({
			ttl: new FormControl<number | null | undefined>(undefined),
			apiCachingBehavior: new FormControl<ApiCachingBehavior | null | undefined>(undefined),
			transitEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			atRestEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<ApiCacheType | null | undefined>(undefined),
			status: new FormControl<ApiCacheStatus | null | undefined>(undefined),
		});

	}

	export enum ApiCachingBehavior { FULL_REQUEST_CACHING = 'FULL_REQUEST_CACHING', PER_RESOLVER_CACHING = 'PER_RESOLVER_CACHING' }

	export enum ApiCacheType { T2_SMALL = 'T2_SMALL', T2_MEDIUM = 'T2_MEDIUM', R4_LARGE = 'R4_LARGE', R4_XLARGE = 'R4_XLARGE', R4_2XLARGE = 'R4_2XLARGE', R4_4XLARGE = 'R4_4XLARGE', R4_8XLARGE = 'R4_8XLARGE', SMALL = 'SMALL', MEDIUM = 'MEDIUM', LARGE = 'LARGE', XLARGE = 'XLARGE', LARGE_2X = 'LARGE_2X', LARGE_4X = 'LARGE_4X', LARGE_8X = 'LARGE_8X', LARGE_12X = 'LARGE_12X' }

	export enum ApiCacheStatus { AVAILABLE = 'AVAILABLE', CREATING = 'CREATING', DELETING = 'DELETING', MODIFYING = 'MODIFYING', FAILED = 'FAILED' }

	export interface CreateApiKeyResponse {
		apiKey?: ApiKey;
	}
	export interface CreateApiKeyResponseFormProperties {
	}
	export function CreateCreateApiKeyResponseFormGroup() {
		return new FormGroup<CreateApiKeyResponseFormProperties>({
		});

	}


	/** <p>Describes an API key.</p> <p>Customers invoke AppSync GraphQL API operations with API keys as an identity mechanism. There are two key versions:</p> <p> <b>da1</b>: We introduced this version at launch in November 2017. These keys always expire after 7 days. Amazon DynamoDB TTL manages key expiration. These keys ceased to be valid after February 21, 2018, and they should no longer be used.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>UpdateApiKey</code> is not available for this key version.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in DynamoDB as milliseconds. This results in a bug where keys are not automatically deleted because DynamoDB expects the TTL to be stored in seconds. As a one-time action, we deleted these keys from the table on February 21, 2018.</p> </li> </ul> <p> <b>da2</b>: We introduced this version in February 2018 when AppSync added support to extend key expiration.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time and deletion time in seconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time and deletion time in seconds and accepts a user-provided expiration time in seconds.</p> </li> <li> <p> <code>UpdateApiKey</code> returns the expiration time and and deletion time in seconds and accepts a user-provided expiration time in seconds. Expired API keys are kept for 60 days after the expiration time. You can update the key expiration time as long as the key isn't deleted.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in DynamoDB as seconds. After the expiration time, using the key to authenticate will fail. However, you can reinstate the key before deletion.</p> </li> <li> <p>Deletion is stored in DynamoDB as seconds. The key is deleted after deletion time.</p> </li> </ul> */
	export interface ApiKey {
		id?: string;
		description?: string;
		expires?: number | null;
		deletes?: number | null;
	}

	/** <p>Describes an API key.</p> <p>Customers invoke AppSync GraphQL API operations with API keys as an identity mechanism. There are two key versions:</p> <p> <b>da1</b>: We introduced this version at launch in November 2017. These keys always expire after 7 days. Amazon DynamoDB TTL manages key expiration. These keys ceased to be valid after February 21, 2018, and they should no longer be used.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time in milliseconds.</p> </li> <li> <p> <code>UpdateApiKey</code> is not available for this key version.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in DynamoDB as milliseconds. This results in a bug where keys are not automatically deleted because DynamoDB expects the TTL to be stored in seconds. As a one-time action, we deleted these keys from the table on February 21, 2018.</p> </li> </ul> <p> <b>da2</b>: We introduced this version in February 2018 when AppSync added support to extend key expiration.</p> <ul> <li> <p> <code>ListApiKeys</code> returns the expiration time and deletion time in seconds.</p> </li> <li> <p> <code>CreateApiKey</code> returns the expiration time and deletion time in seconds and accepts a user-provided expiration time in seconds.</p> </li> <li> <p> <code>UpdateApiKey</code> returns the expiration time and and deletion time in seconds and accepts a user-provided expiration time in seconds. Expired API keys are kept for 60 days after the expiration time. You can update the key expiration time as long as the key isn't deleted.</p> </li> <li> <p> <code>DeleteApiKey</code> deletes the item from the table.</p> </li> <li> <p>Expiration is stored in DynamoDB as seconds. After the expiration time, using the key to authenticate will fail. However, you can reinstate the key before deletion.</p> </li> <li> <p>Deletion is stored in DynamoDB as seconds. The key is deleted after deletion time.</p> </li> </ul> */
	export interface ApiKeyFormProperties {
		id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		expires: FormControl<number | null | undefined>,
		deletes: FormControl<number | null | undefined>,
	}
	export function CreateApiKeyFormGroup() {
		return new FormGroup<ApiKeyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			expires: new FormControl<number | null | undefined>(undefined),
			deletes: new FormControl<number | null | undefined>(undefined),
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
		dataSourceArn?: string;
		name?: string;
		description?: string;
		type?: DataSourceType;
		serviceRoleArn?: string;
		dynamodbConfig?: DynamodbDataSourceConfig;
		lambdaConfig?: LambdaDataSourceConfig;
		elasticsearchConfig?: ElasticsearchDataSourceConfig;
		openSearchServiceConfig?: OpenSearchServiceDataSourceConfig;
		httpConfig?: HttpDataSourceConfig;
		relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
		eventBridgeConfig?: EventBridgeDataSourceConfig;
	}

	/** Describes a data source. */
	export interface DataSourceFormProperties {
		dataSourceArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		type: FormControl<DataSourceType | null | undefined>,
		serviceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
			dataSourceArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DataSourceType | null | undefined>(undefined),
			serviceRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataSourceType { AWS_LAMBDA = 'AWS_LAMBDA', AMAZON_DYNAMODB = 'AMAZON_DYNAMODB', AMAZON_ELASTICSEARCH = 'AMAZON_ELASTICSEARCH', NONE = 'NONE', HTTP = 'HTTP', RELATIONAL_DATABASE = 'RELATIONAL_DATABASE', AMAZON_OPENSEARCH_SERVICE = 'AMAZON_OPENSEARCH_SERVICE', AMAZON_EVENTBRIDGE = 'AMAZON_EVENTBRIDGE' }


	/** Describes an Amazon DynamoDB data source configuration. */
	export interface DynamodbDataSourceConfig {

		/** Required */
		tableName: string;

		/** Required */
		awsRegion: string;
		useCallerCredentials?: boolean | null;
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
		deltaSyncTableName?: string;
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


	/** Describes an Lambda data source configuration. */
	export interface LambdaDataSourceConfig {

		/** Required */
		lambdaFunctionArn: string;
	}

	/** Describes an Lambda data source configuration. */
	export interface LambdaDataSourceConfigFormProperties {

		/** Required */
		lambdaFunctionArn: FormControl<string | null | undefined>,
	}
	export function CreateLambdaDataSourceConfigFormGroup() {
		return new FormGroup<LambdaDataSourceConfigFormProperties>({
			lambdaFunctionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Describes an OpenSearch data source configuration.</p> <p>As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This configuration is deprecated. For new data sources, use <a>OpenSearchServiceDataSourceConfig</a> to specify an OpenSearch data source.</p> */
	export interface ElasticsearchDataSourceConfig {

		/** Required */
		endpoint: string;

		/** Required */
		awsRegion: string;
	}

	/** <p>Describes an OpenSearch data source configuration.</p> <p>As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This configuration is deprecated. For new data sources, use <a>OpenSearchServiceDataSourceConfig</a> to specify an OpenSearch data source.</p> */
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


	/** Describes an OpenSearch data source configuration. */
	export interface OpenSearchServiceDataSourceConfig {

		/** Required */
		endpoint: string;

		/** Required */
		awsRegion: string;
	}

	/** Describes an OpenSearch data source configuration. */
	export interface OpenSearchServiceDataSourceConfigFormProperties {

		/** Required */
		endpoint: FormControl<string | null | undefined>,

		/** Required */
		awsRegion: FormControl<string | null | undefined>,
	}
	export function CreateOpenSearchServiceDataSourceConfigFormGroup() {
		return new FormGroup<OpenSearchServiceDataSourceConfigFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			awsRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes an HTTP data source configuration. */
	export interface HttpDataSourceConfig {
		endpoint?: string;
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


	/** The authorization configuration in case the HTTP endpoint requires authorization. */
	export interface AuthorizationConfig {

		/** Required */
		authorizationType: AuthorizationType;
		awsIamConfig?: AwsIamConfig;
	}

	/** The authorization configuration in case the HTTP endpoint requires authorization. */
	export interface AuthorizationConfigFormProperties {

		/** Required */
		authorizationType: FormControl<AuthorizationType | null | undefined>,
	}
	export function CreateAuthorizationConfigFormGroup() {
		return new FormGroup<AuthorizationConfigFormProperties>({
			authorizationType: new FormControl<AuthorizationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AuthorizationType { AWS_IAM = 'AWS_IAM' }


	/** The Identity and Access Management (IAM) configuration. */
	export interface AwsIamConfig {
		signingRegion?: string;
		signingServiceName?: string;
	}

	/** The Identity and Access Management (IAM) configuration. */
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
		relationalDatabaseSourceType?: RelationalDatabaseSourceType;
		rdsHttpEndpointConfig?: RdsHttpEndpointConfig;
	}

	/** Describes a relational database data source configuration. */
	export interface RelationalDatabaseDataSourceConfigFormProperties {
		relationalDatabaseSourceType: FormControl<RelationalDatabaseSourceType | null | undefined>,
	}
	export function CreateRelationalDatabaseDataSourceConfigFormGroup() {
		return new FormGroup<RelationalDatabaseDataSourceConfigFormProperties>({
			relationalDatabaseSourceType: new FormControl<RelationalDatabaseSourceType | null | undefined>(undefined),
		});

	}

	export enum RelationalDatabaseSourceType { RDS_HTTP_ENDPOINT = 'RDS_HTTP_ENDPOINT' }


	/** The Amazon Relational Database Service (Amazon RDS) HTTP endpoint configuration. */
	export interface RdsHttpEndpointConfig {
		awsRegion?: string;
		dbClusterIdentifier?: string;
		databaseName?: string;
		schema?: string;
		awsSecretStoreArn?: string;
	}

	/** The Amazon Relational Database Service (Amazon RDS) HTTP endpoint configuration. */
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


	/** Describes an Amazon EventBridge bus data source configuration. */
	export interface EventBridgeDataSourceConfig {

		/** Required */
		eventBusArn: string;
	}

	/** Describes an Amazon EventBridge bus data source configuration. */
	export interface EventBridgeDataSourceConfigFormProperties {

		/** Required */
		eventBusArn: FormControl<string | null | undefined>,
	}
	export function CreateEventBridgeDataSourceConfigFormGroup() {
		return new FormGroup<EventBridgeDataSourceConfigFormProperties>({
			eventBusArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDomainNameResponse {
		domainNameConfig?: DomainNameConfig;
	}
	export interface CreateDomainNameResponseFormProperties {
	}
	export function CreateCreateDomainNameResponseFormGroup() {
		return new FormGroup<CreateDomainNameResponseFormProperties>({
		});

	}


	/** Describes a configuration for a custom domain. */
	export interface DomainNameConfig {
		domainName?: string;
		description?: string;
		certificateArn?: string;
		appsyncDomainName?: string;
		hostedZoneId?: string;
	}

	/** Describes a configuration for a custom domain. */
	export interface DomainNameConfigFormProperties {
		domainName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		certificateArn: FormControl<string | null | undefined>,
		appsyncDomainName: FormControl<string | null | undefined>,
		hostedZoneId: FormControl<string | null | undefined>,
	}
	export function CreateDomainNameConfigFormGroup() {
		return new FormGroup<DomainNameConfigFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			certificateArn: new FormControl<string | null | undefined>(undefined),
			appsyncDomainName: new FormControl<string | null | undefined>(undefined),
			hostedZoneId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFunctionResponse {
		functionConfiguration?: FunctionConfiguration;
	}
	export interface CreateFunctionResponseFormProperties {
	}
	export function CreateCreateFunctionResponseFormGroup() {
		return new FormGroup<CreateFunctionResponseFormProperties>({
		});

	}


	/** A function is a reusable entity. You can use multiple functions to compose the resolver logic. */
	export interface FunctionConfiguration {
		functionId?: string;
		functionArn?: string;
		name?: string;
		description?: string;
		dataSourceName?: string;
		requestMappingTemplate?: string;
		responseMappingTemplate?: string;
		functionVersion?: string;

		/** <p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p> */
		syncConfig?: SyncConfig;
		maxBatchSize?: number | null;

		/** Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. */
		runtime?: AppSyncRuntime;
		code?: string;
	}

	/** A function is a reusable entity. You can use multiple functions to compose the resolver logic. */
	export interface FunctionConfigurationFormProperties {
		functionId: FormControl<string | null | undefined>,
		functionArn: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		dataSourceName: FormControl<string | null | undefined>,
		requestMappingTemplate: FormControl<string | null | undefined>,
		responseMappingTemplate: FormControl<string | null | undefined>,
		functionVersion: FormControl<string | null | undefined>,
		maxBatchSize: FormControl<number | null | undefined>,
		code: FormControl<string | null | undefined>,
	}
	export function CreateFunctionConfigurationFormGroup() {
		return new FormGroup<FunctionConfigurationFormProperties>({
			functionId: new FormControl<string | null | undefined>(undefined),
			functionArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			dataSourceName: new FormControl<string | null | undefined>(undefined),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined),
			functionVersion: new FormControl<string | null | undefined>(undefined),
			maxBatchSize: new FormControl<number | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p> */
	export interface SyncConfig {
		conflictHandler?: ConflictHandlerType;
		conflictDetection?: ConflictDetectionType;
		lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
	}

	/** <p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p> */
	export interface SyncConfigFormProperties {
		conflictHandler: FormControl<ConflictHandlerType | null | undefined>,
		conflictDetection: FormControl<ConflictDetectionType | null | undefined>,
	}
	export function CreateSyncConfigFormGroup() {
		return new FormGroup<SyncConfigFormProperties>({
			conflictHandler: new FormControl<ConflictHandlerType | null | undefined>(undefined),
			conflictDetection: new FormControl<ConflictDetectionType | null | undefined>(undefined),
		});

	}

	export enum ConflictHandlerType { OPTIMISTIC_CONCURRENCY = 'OPTIMISTIC_CONCURRENCY', LAMBDA = 'LAMBDA', AUTOMERGE = 'AUTOMERGE', NONE = 'NONE' }

	export enum ConflictDetectionType { VERSION = 'VERSION', NONE = 'NONE' }


	/** The <code>LambdaConflictHandlerConfig</code> object when configuring <code>LAMBDA</code> as the Conflict Handler. */
	export interface LambdaConflictHandlerConfig {
		lambdaConflictHandlerArn?: string;
	}

	/** The <code>LambdaConflictHandlerConfig</code> object when configuring <code>LAMBDA</code> as the Conflict Handler. */
	export interface LambdaConflictHandlerConfigFormProperties {
		lambdaConflictHandlerArn: FormControl<string | null | undefined>,
	}
	export function CreateLambdaConflictHandlerConfigFormGroup() {
		return new FormGroup<LambdaConflictHandlerConfigFormProperties>({
			lambdaConflictHandlerArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. */
	export interface AppSyncRuntime {

		/** Required */
		name: RuntimeName;

		/** Required */
		runtimeVersion: string;
	}

	/** Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. */
	export interface AppSyncRuntimeFormProperties {

		/** Required */
		name: FormControl<RuntimeName | null | undefined>,

		/** Required */
		runtimeVersion: FormControl<string | null | undefined>,
	}
	export function CreateAppSyncRuntimeFormGroup() {
		return new FormGroup<AppSyncRuntimeFormProperties>({
			name: new FormControl<RuntimeName | null | undefined>(undefined, [Validators.required]),
			runtimeVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RuntimeName { APPSYNC_JS = 'APPSYNC_JS' }

	export interface CreateGraphqlApiResponse {
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
		name?: string;
		apiId?: string;
		authenticationType?: AuthenticationType;
		logConfig?: LogConfig;
		userPoolConfig?: UserPoolConfig;
		openIDConnectConfig?: OpenIDConnectConfig;
		arn?: string;
		uris?: MapOfStringToString;
		tags?: TagMap;
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;
		xrayEnabled?: boolean | null;
		wafWebAclArn?: string;
		lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
		dns?: MapOfStringToString;
		visibility?: GraphQLApiVisibility;
		apiType?: GraphQLApiType;
		mergedApiExecutionRoleArn?: string;
		owner?: string;
		ownerContact?: string;
	}

	/** Describes a GraphQL API. */
	export interface GraphqlApiFormProperties {
		name: FormControl<string | null | undefined>,
		apiId: FormControl<string | null | undefined>,
		authenticationType: FormControl<AuthenticationType | null | undefined>,
		arn: FormControl<string | null | undefined>,
		xrayEnabled: FormControl<boolean | null | undefined>,
		wafWebAclArn: FormControl<string | null | undefined>,
		visibility: FormControl<GraphQLApiVisibility | null | undefined>,
		apiType: FormControl<GraphQLApiType | null | undefined>,
		mergedApiExecutionRoleArn: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		ownerContact: FormControl<string | null | undefined>,
	}
	export function CreateGraphqlApiFormGroup() {
		return new FormGroup<GraphqlApiFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			apiId: new FormControl<string | null | undefined>(undefined),
			authenticationType: new FormControl<AuthenticationType | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			xrayEnabled: new FormControl<boolean | null | undefined>(undefined),
			wafWebAclArn: new FormControl<string | null | undefined>(undefined),
			visibility: new FormControl<GraphQLApiVisibility | null | undefined>(undefined),
			apiType: new FormControl<GraphQLApiType | null | undefined>(undefined),
			mergedApiExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			ownerContact: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AuthenticationType { API_KEY = 'API_KEY', AWS_IAM = 'AWS_IAM', AMAZON_COGNITO_USER_POOLS = 'AMAZON_COGNITO_USER_POOLS', OPENID_CONNECT = 'OPENID_CONNECT', AWS_LAMBDA = 'AWS_LAMBDA' }


	/** The Amazon CloudWatch Logs configuration. */
	export interface LogConfig {

		/** Required */
		fieldLogLevel: FieldLogLevel;

		/** Required */
		cloudWatchLogsRoleArn: string;
		excludeVerboseContent?: boolean | null;
	}

	/** The Amazon CloudWatch Logs configuration. */
	export interface LogConfigFormProperties {

		/** Required */
		fieldLogLevel: FormControl<FieldLogLevel | null | undefined>,

		/** Required */
		cloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		excludeVerboseContent: FormControl<boolean | null | undefined>,
	}
	export function CreateLogConfigFormGroup() {
		return new FormGroup<LogConfigFormProperties>({
			fieldLogLevel: new FormControl<FieldLogLevel | null | undefined>(undefined, [Validators.required]),
			cloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			excludeVerboseContent: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum FieldLogLevel { NONE = 'NONE', ERROR = 'ERROR', ALL = 'ALL' }


	/** Describes an Amazon Cognito user pool configuration. */
	export interface UserPoolConfig {

		/** Required */
		userPoolId: string;

		/** Required */
		awsRegion: string;

		/** Required */
		defaultAction: DefaultAction;
		appIdClientRegex?: string;
	}

	/** Describes an Amazon Cognito user pool configuration. */
	export interface UserPoolConfigFormProperties {

		/** Required */
		userPoolId: FormControl<string | null | undefined>,

		/** Required */
		awsRegion: FormControl<string | null | undefined>,

		/** Required */
		defaultAction: FormControl<DefaultAction | null | undefined>,
		appIdClientRegex: FormControl<string | null | undefined>,
	}
	export function CreateUserPoolConfigFormGroup() {
		return new FormGroup<UserPoolConfigFormProperties>({
			userPoolId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			awsRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			defaultAction: new FormControl<DefaultAction | null | undefined>(undefined, [Validators.required]),
			appIdClientRegex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DefaultAction { ALLOW = 'ALLOW', DENY = 'DENY' }


	/** Describes an OpenID Connect (OIDC) configuration. */
	export interface OpenIDConnectConfig {

		/** Required */
		issuer: string;
		clientId?: string;
		iatTTL?: number | null;
		authTTL?: number | null;
	}

	/** Describes an OpenID Connect (OIDC) configuration. */
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
		authenticationType?: AuthenticationType;
		openIDConnectConfig?: OpenIDConnectConfig;
		userPoolConfig?: CognitoUserPoolConfig;
		lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
	}

	/** Describes an additional authentication provider. */
	export interface AdditionalAuthenticationProviderFormProperties {
		authenticationType: FormControl<AuthenticationType | null | undefined>,
	}
	export function CreateAdditionalAuthenticationProviderFormGroup() {
		return new FormGroup<AdditionalAuthenticationProviderFormProperties>({
			authenticationType: new FormControl<AuthenticationType | null | undefined>(undefined),
		});

	}


	/** Describes an Amazon Cognito user pool configuration. */
	export interface CognitoUserPoolConfig {

		/** Required */
		userPoolId: string;

		/** Required */
		awsRegion: string;
		appIdClientRegex?: string;
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


	/** A <code>LambdaAuthorizerConfig</code> specifies how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a time. */
	export interface LambdaAuthorizerConfig {
		authorizerResultTtlInSeconds?: number | null;

		/** Required */
		authorizerUri: string;
		identityValidationExpression?: string;
	}

	/** A <code>LambdaAuthorizerConfig</code> specifies how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a time. */
	export interface LambdaAuthorizerConfigFormProperties {
		authorizerResultTtlInSeconds: FormControl<number | null | undefined>,

		/** Required */
		authorizerUri: FormControl<string | null | undefined>,
		identityValidationExpression: FormControl<string | null | undefined>,
	}
	export function CreateLambdaAuthorizerConfigFormGroup() {
		return new FormGroup<LambdaAuthorizerConfigFormProperties>({
			authorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			authorizerUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			identityValidationExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GraphQLApiVisibility { GLOBAL = 'GLOBAL', PRIVATE = 'PRIVATE' }

	export enum GraphQLApiType { GRAPHQL = 'GRAPHQL', MERGED = 'MERGED' }

	export interface ApiLimitExceededException {
	}
	export interface ApiLimitExceededExceptionFormProperties {
	}
	export function CreateApiLimitExceededExceptionFormGroup() {
		return new FormGroup<ApiLimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateResolverResponse {
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
		typeName?: string;
		fieldName?: string;
		dataSourceName?: string;
		resolverArn?: string;
		requestMappingTemplate?: string;
		responseMappingTemplate?: string;
		kind?: ResolverKind;
		pipelineConfig?: PipelineConfig;
		syncConfig?: SyncConfig;
		cachingConfig?: CachingConfig;
		maxBatchSize?: number | null;

		/** Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. */
		runtime?: AppSyncRuntime;
		code?: string;
	}

	/** Describes a resolver. */
	export interface ResolverFormProperties {
		typeName: FormControl<string | null | undefined>,
		fieldName: FormControl<string | null | undefined>,
		dataSourceName: FormControl<string | null | undefined>,
		resolverArn: FormControl<string | null | undefined>,
		requestMappingTemplate: FormControl<string | null | undefined>,
		responseMappingTemplate: FormControl<string | null | undefined>,
		kind: FormControl<ResolverKind | null | undefined>,
		maxBatchSize: FormControl<number | null | undefined>,
		code: FormControl<string | null | undefined>,
	}
	export function CreateResolverFormGroup() {
		return new FormGroup<ResolverFormProperties>({
			typeName: new FormControl<string | null | undefined>(undefined),
			fieldName: new FormControl<string | null | undefined>(undefined),
			dataSourceName: new FormControl<string | null | undefined>(undefined),
			resolverArn: new FormControl<string | null | undefined>(undefined),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<ResolverKind | null | undefined>(undefined),
			maxBatchSize: new FormControl<number | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResolverKind { UNIT = 'UNIT', PIPELINE = 'PIPELINE' }


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


	/** The caching configuration for a resolver that has caching activated. */
	export interface CachingConfig {

		/** Required */
		ttl: number;
		cachingKeys?: Array<string>;
	}

	/** The caching configuration for a resolver that has caching activated. */
	export interface CachingConfigFormProperties {

		/** Required */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateCachingConfigFormGroup() {
		return new FormGroup<CachingConfigFormProperties>({
			ttl: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTypeResponse {
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
		name?: string;
		description?: string;
		arn?: string;
		definition?: string;
		format?: TypeDefinitionFormat;
	}

	/** Describes a type. */
	export interface TypeFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		arn: FormControl<string | null | undefined>,
		definition: FormControl<string | null | undefined>,
		format: FormControl<TypeDefinitionFormat | null | undefined>,
	}
	export function CreateTypeFormGroup() {
		return new FormGroup<TypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			arn: new FormControl<string | null | undefined>(undefined),
			definition: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<TypeDefinitionFormat | null | undefined>(undefined),
		});

	}

	export enum TypeDefinitionFormat { SDL = 'SDL', JSON = 'JSON' }


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

	export interface DeleteDomainNameResponse {
	}
	export interface DeleteDomainNameResponseFormProperties {
	}
	export function CreateDeleteDomainNameResponseFormGroup() {
		return new FormGroup<DeleteDomainNameResponseFormProperties>({
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

	export interface DisassociateApiResponse {
	}
	export interface DisassociateApiResponseFormProperties {
	}
	export function CreateDisassociateApiResponseFormGroup() {
		return new FormGroup<DisassociateApiResponseFormProperties>({
		});

	}

	export interface DisassociateMergedGraphqlApiResponse {
		sourceApiAssociationStatus?: SourceApiAssociationStatus;
	}
	export interface DisassociateMergedGraphqlApiResponseFormProperties {
		sourceApiAssociationStatus: FormControl<SourceApiAssociationStatus | null | undefined>,
	}
	export function CreateDisassociateMergedGraphqlApiResponseFormGroup() {
		return new FormGroup<DisassociateMergedGraphqlApiResponseFormProperties>({
			sourceApiAssociationStatus: new FormControl<SourceApiAssociationStatus | null | undefined>(undefined),
		});

	}

	export interface DisassociateSourceGraphqlApiResponse {
		sourceApiAssociationStatus?: SourceApiAssociationStatus;
	}
	export interface DisassociateSourceGraphqlApiResponseFormProperties {
		sourceApiAssociationStatus: FormControl<SourceApiAssociationStatus | null | undefined>,
	}
	export function CreateDisassociateSourceGraphqlApiResponseFormGroup() {
		return new FormGroup<DisassociateSourceGraphqlApiResponseFormProperties>({
			sourceApiAssociationStatus: new FormControl<SourceApiAssociationStatus | null | undefined>(undefined),
		});

	}

	export interface EvaluateCodeResponse {
		evaluationResult?: string;
		error?: EvaluateCodeErrorDetail;
		logs?: Array<string>;
	}
	export interface EvaluateCodeResponseFormProperties {
		evaluationResult: FormControl<string | null | undefined>,
	}
	export function CreateEvaluateCodeResponseFormGroup() {
		return new FormGroup<EvaluateCodeResponseFormProperties>({
			evaluationResult: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the list of errors from a code evaluation response. */
	export interface EvaluateCodeErrorDetail {
		message?: string;
		codeErrors?: Array<CodeError>;
	}

	/** Contains the list of errors from a code evaluation response. */
	export interface EvaluateCodeErrorDetailFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateEvaluateCodeErrorDetailFormGroup() {
		return new FormGroup<EvaluateCodeErrorDetailFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an AppSync error. */
	export interface CodeError {
		errorType?: string;
		value?: string;
		location?: CodeErrorLocation;
	}

	/** Describes an AppSync error. */
	export interface CodeErrorFormProperties {
		errorType: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateCodeErrorFormGroup() {
		return new FormGroup<CodeErrorFormProperties>({
			errorType: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the location of the error in a code sample. */
	export interface CodeErrorLocation {
		line?: number | null;
		column?: number | null;
		span?: number | null;
	}

	/** Describes the location of the error in a code sample. */
	export interface CodeErrorLocationFormProperties {
		line: FormControl<number | null | undefined>,
		column: FormControl<number | null | undefined>,
		span: FormControl<number | null | undefined>,
	}
	export function CreateCodeErrorLocationFormGroup() {
		return new FormGroup<CodeErrorLocationFormProperties>({
			line: new FormControl<number | null | undefined>(undefined),
			column: new FormControl<number | null | undefined>(undefined),
			span: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EvaluateMappingTemplateResponse {
		evaluationResult?: string;
		error?: ErrorDetail;
		logs?: Array<string>;
	}
	export interface EvaluateMappingTemplateResponseFormProperties {
		evaluationResult: FormControl<string | null | undefined>,
	}
	export function CreateEvaluateMappingTemplateResponseFormGroup() {
		return new FormGroup<EvaluateMappingTemplateResponseFormProperties>({
			evaluationResult: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the list of errors generated. When using JavaScript, this will apply to the request or response function evaluation. */
	export interface ErrorDetail {
		message?: string;
	}

	/** Contains the list of errors generated. When using JavaScript, this will apply to the request or response function evaluation. */
	export interface ErrorDetailFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
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

	export interface GetApiAssociationResponse {
		apiAssociation?: ApiAssociation;
	}
	export interface GetApiAssociationResponseFormProperties {
	}
	export function CreateGetApiAssociationResponseFormGroup() {
		return new FormGroup<GetApiAssociationResponseFormProperties>({
		});

	}


	/** Represents the output of a <code>GetApiCache</code> operation. */
	export interface GetApiCacheResponse {
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
		dataSource?: DataSource;
	}
	export interface GetDataSourceResponseFormProperties {
	}
	export function CreateGetDataSourceResponseFormGroup() {
		return new FormGroup<GetDataSourceResponseFormProperties>({
		});

	}

	export interface GetDomainNameResponse {
		domainNameConfig?: DomainNameConfig;
	}
	export interface GetDomainNameResponseFormProperties {
	}
	export function CreateGetDomainNameResponseFormGroup() {
		return new FormGroup<GetDomainNameResponseFormProperties>({
		});

	}

	export interface GetFunctionResponse {
		functionConfiguration?: FunctionConfiguration;
	}
	export interface GetFunctionResponseFormProperties {
	}
	export function CreateGetFunctionResponseFormGroup() {
		return new FormGroup<GetFunctionResponseFormProperties>({
		});

	}

	export interface GetGraphqlApiResponse {
		graphqlApi?: GraphqlApi;
	}
	export interface GetGraphqlApiResponseFormProperties {
	}
	export function CreateGetGraphqlApiResponseFormGroup() {
		return new FormGroup<GetGraphqlApiResponseFormProperties>({
		});

	}

	export interface GetIntrospectionSchemaResponse {
		schema?: string;
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
		resolver?: Resolver;
	}
	export interface GetResolverResponseFormProperties {
	}
	export function CreateGetResolverResponseFormGroup() {
		return new FormGroup<GetResolverResponseFormProperties>({
		});

	}

	export interface GetSchemaCreationStatusResponse {
		status?: SchemaStatus;
		details?: string;
	}
	export interface GetSchemaCreationStatusResponseFormProperties {
		status: FormControl<SchemaStatus | null | undefined>,
		details: FormControl<string | null | undefined>,
	}
	export function CreateGetSchemaCreationStatusResponseFormGroup() {
		return new FormGroup<GetSchemaCreationStatusResponseFormProperties>({
			status: new FormControl<SchemaStatus | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SchemaStatus { PROCESSING = 'PROCESSING', ACTIVE = 'ACTIVE', DELETING = 'DELETING', FAILED = 'FAILED', SUCCESS = 'SUCCESS', NOT_APPLICABLE = 'NOT_APPLICABLE' }

	export interface GetSourceApiAssociationResponse {
		sourceApiAssociation?: SourceApiAssociation;
	}
	export interface GetSourceApiAssociationResponseFormProperties {
	}
	export function CreateGetSourceApiAssociationResponseFormGroup() {
		return new FormGroup<GetSourceApiAssociationResponseFormProperties>({
		});

	}

	export interface GetTypeResponse {
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
		nextToken?: string;
	}
	export interface ListApiKeysResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApiKeysResponseFormGroup() {
		return new FormGroup<ListApiKeysResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDataSourcesResponse {
		dataSources?: Array<DataSource>;
		nextToken?: string;
	}
	export interface ListDataSourcesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataSourcesResponseFormGroup() {
		return new FormGroup<ListDataSourcesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDomainNamesResponse {
		domainNameConfigs?: Array<DomainNameConfig>;
		nextToken?: string;
	}
	export interface ListDomainNamesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDomainNamesResponseFormGroup() {
		return new FormGroup<ListDomainNamesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFunctionsResponse {
		functions?: Array<FunctionConfiguration>;
		nextToken?: string;
	}
	export interface ListFunctionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFunctionsResponseFormGroup() {
		return new FormGroup<ListFunctionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGraphqlApisResponse {
		graphqlApis?: Array<GraphqlApi>;
		nextToken?: string;
	}
	export interface ListGraphqlApisResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGraphqlApisResponseFormGroup() {
		return new FormGroup<ListGraphqlApisResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResolversResponse {
		resolvers?: Array<Resolver>;
		nextToken?: string;
	}
	export interface ListResolversResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResolversResponseFormGroup() {
		return new FormGroup<ListResolversResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResolversByFunctionResponse {
		resolvers?: Array<Resolver>;
		nextToken?: string;
	}
	export interface ListResolversByFunctionResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResolversByFunctionResponseFormGroup() {
		return new FormGroup<ListResolversByFunctionResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSourceApiAssociationsResponse {
		sourceApiAssociationSummaries?: Array<SourceApiAssociationSummary>;
		nextToken?: string;
	}
	export interface ListSourceApiAssociationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSourceApiAssociationsResponseFormGroup() {
		return new FormGroup<ListSourceApiAssociationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the ARNs and IDs of associations, Merged APIs, and source APIs. */
	export interface SourceApiAssociationSummary {
		associationId?: string;
		associationArn?: string;
		sourceApiId?: string;
		sourceApiArn?: string;
		mergedApiId?: string;
		mergedApiArn?: string;
		description?: string;
	}

	/** Describes the ARNs and IDs of associations, Merged APIs, and source APIs. */
	export interface SourceApiAssociationSummaryFormProperties {
		associationId: FormControl<string | null | undefined>,
		associationArn: FormControl<string | null | undefined>,
		sourceApiId: FormControl<string | null | undefined>,
		sourceApiArn: FormControl<string | null | undefined>,
		mergedApiId: FormControl<string | null | undefined>,
		mergedApiArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateSourceApiAssociationSummaryFormGroup() {
		return new FormGroup<SourceApiAssociationSummaryFormProperties>({
			associationId: new FormControl<string | null | undefined>(undefined),
			associationArn: new FormControl<string | null | undefined>(undefined),
			sourceApiId: new FormControl<string | null | undefined>(undefined),
			sourceApiArn: new FormControl<string | null | undefined>(undefined),
			mergedApiId: new FormControl<string | null | undefined>(undefined),
			mergedApiArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
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
		nextToken?: string;
	}
	export interface ListTypesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTypesResponseFormGroup() {
		return new FormGroup<ListTypesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTypesByAssociationResponse {
		types?: Array<Type>;
		nextToken?: string;
	}
	export interface ListTypesByAssociationResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTypesByAssociationResponseFormGroup() {
		return new FormGroup<ListTypesByAssociationResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartSchemaCreationResponse {
		status?: SchemaStatus;
	}
	export interface StartSchemaCreationResponseFormProperties {
		status: FormControl<SchemaStatus | null | undefined>,
	}
	export function CreateStartSchemaCreationResponseFormGroup() {
		return new FormGroup<StartSchemaCreationResponseFormProperties>({
			status: new FormControl<SchemaStatus | null | undefined>(undefined),
		});

	}

	export interface StartSchemaMergeResponse {
		sourceApiAssociationStatus?: SourceApiAssociationStatus;
	}
	export interface StartSchemaMergeResponseFormProperties {
		sourceApiAssociationStatus: FormControl<SourceApiAssociationStatus | null | undefined>,
	}
	export function CreateStartSchemaMergeResponseFormGroup() {
		return new FormGroup<StartSchemaMergeResponseFormProperties>({
			sourceApiAssociationStatus: new FormControl<SourceApiAssociationStatus | null | undefined>(undefined),
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
		apiKey?: ApiKey;
	}
	export interface UpdateApiKeyResponseFormProperties {
	}
	export function CreateUpdateApiKeyResponseFormGroup() {
		return new FormGroup<UpdateApiKeyResponseFormProperties>({
		});

	}

	export interface UpdateDataSourceResponse {
		dataSource?: DataSource;
	}
	export interface UpdateDataSourceResponseFormProperties {
	}
	export function CreateUpdateDataSourceResponseFormGroup() {
		return new FormGroup<UpdateDataSourceResponseFormProperties>({
		});

	}

	export interface UpdateDomainNameResponse {
		domainNameConfig?: DomainNameConfig;
	}
	export interface UpdateDomainNameResponseFormProperties {
	}
	export function CreateUpdateDomainNameResponseFormGroup() {
		return new FormGroup<UpdateDomainNameResponseFormProperties>({
		});

	}

	export interface UpdateFunctionResponse {
		functionConfiguration?: FunctionConfiguration;
	}
	export interface UpdateFunctionResponseFormProperties {
	}
	export function CreateUpdateFunctionResponseFormGroup() {
		return new FormGroup<UpdateFunctionResponseFormProperties>({
		});

	}

	export interface UpdateGraphqlApiResponse {
		graphqlApi?: GraphqlApi;
	}
	export interface UpdateGraphqlApiResponseFormProperties {
	}
	export function CreateUpdateGraphqlApiResponseFormGroup() {
		return new FormGroup<UpdateGraphqlApiResponseFormProperties>({
		});

	}

	export interface UpdateResolverResponse {
		resolver?: Resolver;
	}
	export interface UpdateResolverResponseFormProperties {
	}
	export function CreateUpdateResolverResponseFormGroup() {
		return new FormGroup<UpdateResolverResponseFormProperties>({
		});

	}

	export interface UpdateSourceApiAssociationResponse {
		sourceApiAssociation?: SourceApiAssociation;
	}
	export interface UpdateSourceApiAssociationResponseFormProperties {
	}
	export function CreateUpdateSourceApiAssociationResponseFormGroup() {
		return new FormGroup<UpdateSourceApiAssociationResponseFormProperties>({
		});

	}

	export interface UpdateTypeResponse {
		type?: Type;
	}
	export interface UpdateTypeResponseFormProperties {
	}
	export function CreateUpdateTypeResponseFormGroup() {
		return new FormGroup<UpdateTypeResponseFormProperties>({
		});

	}

	export interface AssociateApiRequest {

		/** Required */
		apiId: string;
	}
	export interface AssociateApiRequestFormProperties {

		/** Required */
		apiId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateApiRequestFormGroup() {
		return new FormGroup<AssociateApiRequestFormProperties>({
			apiId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateMergedGraphqlApiRequest {

		/** Required */
		mergedApiIdentifier: string;
		description?: string;
		sourceApiAssociationConfig?: SourceApiAssociationConfig;
	}
	export interface AssociateMergedGraphqlApiRequestFormProperties {

		/** Required */
		mergedApiIdentifier: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateAssociateMergedGraphqlApiRequestFormGroup() {
		return new FormGroup<AssociateMergedGraphqlApiRequestFormProperties>({
			mergedApiIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateSourceGraphqlApiRequest {

		/** Required */
		sourceApiIdentifier: string;
		description?: string;
		sourceApiAssociationConfig?: SourceApiAssociationConfig;
	}
	export interface AssociateSourceGraphqlApiRequestFormProperties {

		/** Required */
		sourceApiIdentifier: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateAssociateSourceGraphqlApiRequestFormGroup() {
		return new FormGroup<AssociateSourceGraphqlApiRequestFormProperties>({
			sourceApiIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the input of a <code>CreateApiCache</code> operation. */
	export interface CreateApiCacheRequest {

		/** Required */
		ttl: number;
		transitEncryptionEnabled?: boolean | null;
		atRestEncryptionEnabled?: boolean | null;

		/** Required */
		apiCachingBehavior: ApiCachingBehavior;

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
		apiCachingBehavior: FormControl<ApiCachingBehavior | null | undefined>,

		/** Required */
		type: FormControl<ApiCacheType | null | undefined>,
	}
	export function CreateCreateApiCacheRequestFormGroup() {
		return new FormGroup<CreateApiCacheRequestFormProperties>({
			ttl: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			transitEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			atRestEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			apiCachingBehavior: new FormControl<ApiCachingBehavior | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ApiCacheType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateApiKeyRequest {
		description?: string;
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

		/** Required */
		name: string;
		description?: string;

		/** Required */
		type: DataSourceType;
		serviceRoleArn?: string;
		dynamodbConfig?: DynamodbDataSourceConfig;
		lambdaConfig?: LambdaDataSourceConfig;
		elasticsearchConfig?: ElasticsearchDataSourceConfig;
		openSearchServiceConfig?: OpenSearchServiceDataSourceConfig;
		httpConfig?: HttpDataSourceConfig;
		relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
		eventBridgeConfig?: EventBridgeDataSourceConfig;
	}
	export interface CreateDataSourceRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<DataSourceType | null | undefined>,
		serviceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourceRequestFormGroup() {
		return new FormGroup<CreateDataSourceRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DataSourceType | null | undefined>(undefined, [Validators.required]),
			serviceRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDomainNameRequest {

		/** Required */
		domainName: string;

		/** Required */
		certificateArn: string;
		description?: string;
	}
	export interface CreateDomainNameRequestFormProperties {

		/** Required */
		domainName: FormControl<string | null | undefined>,

		/** Required */
		certificateArn: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainNameRequestFormGroup() {
		return new FormGroup<CreateDomainNameRequestFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFunctionRequest {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		dataSourceName: string;
		requestMappingTemplate?: string;
		responseMappingTemplate?: string;
		functionVersion?: string;

		/** <p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p> */
		syncConfig?: SyncConfig;
		maxBatchSize?: number | null;

		/** Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. */
		runtime?: AppSyncRuntime;
		code?: string;
	}
	export interface CreateFunctionRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		dataSourceName: FormControl<string | null | undefined>,
		requestMappingTemplate: FormControl<string | null | undefined>,
		responseMappingTemplate: FormControl<string | null | undefined>,
		functionVersion: FormControl<string | null | undefined>,
		maxBatchSize: FormControl<number | null | undefined>,
		code: FormControl<string | null | undefined>,
	}
	export function CreateCreateFunctionRequestFormGroup() {
		return new FormGroup<CreateFunctionRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			dataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined),
			functionVersion: new FormControl<string | null | undefined>(undefined),
			maxBatchSize: new FormControl<number | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGraphqlApiRequest {

		/** Required */
		name: string;
		logConfig?: LogConfig;

		/** Required */
		authenticationType: AuthenticationType;
		userPoolConfig?: UserPoolConfig;
		openIDConnectConfig?: OpenIDConnectConfig;
		tags?: TagMap;
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;
		xrayEnabled?: boolean | null;
		lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
		visibility?: GraphQLApiVisibility;
		apiType?: GraphQLApiType;
		mergedApiExecutionRoleArn?: string;
		ownerContact?: string;
	}
	export interface CreateGraphqlApiRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		authenticationType: FormControl<AuthenticationType | null | undefined>,
		xrayEnabled: FormControl<boolean | null | undefined>,
		visibility: FormControl<GraphQLApiVisibility | null | undefined>,
		apiType: FormControl<GraphQLApiType | null | undefined>,
		mergedApiExecutionRoleArn: FormControl<string | null | undefined>,
		ownerContact: FormControl<string | null | undefined>,
	}
	export function CreateCreateGraphqlApiRequestFormGroup() {
		return new FormGroup<CreateGraphqlApiRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authenticationType: new FormControl<AuthenticationType | null | undefined>(undefined, [Validators.required]),
			xrayEnabled: new FormControl<boolean | null | undefined>(undefined),
			visibility: new FormControl<GraphQLApiVisibility | null | undefined>(undefined),
			apiType: new FormControl<GraphQLApiType | null | undefined>(undefined),
			mergedApiExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			ownerContact: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateResolverRequest {

		/** Required */
		fieldName: string;
		dataSourceName?: string;
		requestMappingTemplate?: string;
		responseMappingTemplate?: string;
		kind?: ResolverKind;
		pipelineConfig?: PipelineConfig;
		syncConfig?: SyncConfig;
		cachingConfig?: CachingConfig;
		maxBatchSize?: number | null;

		/** Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. */
		runtime?: AppSyncRuntime;
		code?: string;
	}
	export interface CreateResolverRequestFormProperties {

		/** Required */
		fieldName: FormControl<string | null | undefined>,
		dataSourceName: FormControl<string | null | undefined>,
		requestMappingTemplate: FormControl<string | null | undefined>,
		responseMappingTemplate: FormControl<string | null | undefined>,
		kind: FormControl<ResolverKind | null | undefined>,
		maxBatchSize: FormControl<number | null | undefined>,
		code: FormControl<string | null | undefined>,
	}
	export function CreateCreateResolverRequestFormGroup() {
		return new FormGroup<CreateResolverRequestFormProperties>({
			fieldName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSourceName: new FormControl<string | null | undefined>(undefined),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<ResolverKind | null | undefined>(undefined),
			maxBatchSize: new FormControl<number | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTypeRequest {

		/** Required */
		definition: string;

		/** Required */
		format: TypeDefinitionFormat;
	}
	export interface CreateTypeRequestFormProperties {

		/** Required */
		definition: FormControl<string | null | undefined>,

		/** Required */
		format: FormControl<TypeDefinitionFormat | null | undefined>,
	}
	export function CreateCreateTypeRequestFormGroup() {
		return new FormGroup<CreateTypeRequestFormProperties>({
			definition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<TypeDefinitionFormat | null | undefined>(undefined, [Validators.required]),
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

	export interface DeleteDomainNameRequest {
	}
	export interface DeleteDomainNameRequestFormProperties {
	}
	export function CreateDeleteDomainNameRequestFormGroup() {
		return new FormGroup<DeleteDomainNameRequestFormProperties>({
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

	export interface DisassociateApiRequest {
	}
	export interface DisassociateApiRequestFormProperties {
	}
	export function CreateDisassociateApiRequestFormGroup() {
		return new FormGroup<DisassociateApiRequestFormProperties>({
		});

	}

	export interface DisassociateMergedGraphqlApiRequest {
	}
	export interface DisassociateMergedGraphqlApiRequestFormProperties {
	}
	export function CreateDisassociateMergedGraphqlApiRequestFormGroup() {
		return new FormGroup<DisassociateMergedGraphqlApiRequestFormProperties>({
		});

	}

	export interface DisassociateSourceGraphqlApiRequest {
	}
	export interface DisassociateSourceGraphqlApiRequestFormProperties {
	}
	export function CreateDisassociateSourceGraphqlApiRequestFormGroup() {
		return new FormGroup<DisassociateSourceGraphqlApiRequestFormProperties>({
		});

	}

	export interface EvaluateCodeRequest {

		/** Required */
		runtime: AppSyncRuntime;

		/** Required */
		code: string;

		/** Required */
		context: string;
		function?: string;
	}
	export interface EvaluateCodeRequestFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		context: FormControl<string | null | undefined>,
		function: FormControl<string | null | undefined>,
	}
	export function CreateEvaluateCodeRequestFormGroup() {
		return new FormGroup<EvaluateCodeRequestFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			context: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			function: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EvaluateMappingTemplateRequest {

		/** Required */
		template: string;

		/** Required */
		context: string;
	}
	export interface EvaluateMappingTemplateRequestFormProperties {

		/** Required */
		template: FormControl<string | null | undefined>,

		/** Required */
		context: FormControl<string | null | undefined>,
	}
	export function CreateEvaluateMappingTemplateRequestFormGroup() {
		return new FormGroup<EvaluateMappingTemplateRequestFormProperties>({
			template: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			context: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface GetApiAssociationRequest {
	}
	export interface GetApiAssociationRequestFormProperties {
	}
	export function CreateGetApiAssociationRequestFormGroup() {
		return new FormGroup<GetApiAssociationRequestFormProperties>({
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

	export interface GetDomainNameRequest {
	}
	export interface GetDomainNameRequestFormProperties {
	}
	export function CreateGetDomainNameRequestFormGroup() {
		return new FormGroup<GetDomainNameRequestFormProperties>({
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

	export enum OutputType { SDL = 'SDL', JSON = 'JSON' }

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

	export interface GetSourceApiAssociationRequest {
	}
	export interface GetSourceApiAssociationRequestFormProperties {
	}
	export function CreateGetSourceApiAssociationRequestFormGroup() {
		return new FormGroup<GetSourceApiAssociationRequestFormProperties>({
		});

	}

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

	export interface ListDomainNamesRequest {
	}
	export interface ListDomainNamesRequestFormProperties {
	}
	export function CreateListDomainNamesRequestFormGroup() {
		return new FormGroup<ListDomainNamesRequestFormProperties>({
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

	export enum Ownership { CURRENT_ACCOUNT = 'CURRENT_ACCOUNT', OTHER_ACCOUNTS = 'OTHER_ACCOUNTS' }

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

	export interface ListSourceApiAssociationsRequest {
	}
	export interface ListSourceApiAssociationsRequestFormProperties {
	}
	export function CreateListSourceApiAssociationsRequestFormGroup() {
		return new FormGroup<ListSourceApiAssociationsRequestFormProperties>({
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

	export interface ListTypesByAssociationRequest {
	}
	export interface ListTypesByAssociationRequestFormProperties {
	}
	export function CreateListTypesByAssociationRequestFormGroup() {
		return new FormGroup<ListTypesByAssociationRequestFormProperties>({
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

	export interface StartSchemaMergeRequest {
	}
	export interface StartSchemaMergeRequestFormProperties {
	}
	export function CreateStartSchemaMergeRequestFormGroup() {
		return new FormGroup<StartSchemaMergeRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
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
		apiCachingBehavior: ApiCachingBehavior;

		/** Required */
		type: ApiCacheType;
	}

	/** Represents the input of a <code>UpdateApiCache</code> operation. */
	export interface UpdateApiCacheRequestFormProperties {

		/** Required */
		ttl: FormControl<number | null | undefined>,

		/** Required */
		apiCachingBehavior: FormControl<ApiCachingBehavior | null | undefined>,

		/** Required */
		type: FormControl<ApiCacheType | null | undefined>,
	}
	export function CreateUpdateApiCacheRequestFormGroup() {
		return new FormGroup<UpdateApiCacheRequestFormProperties>({
			ttl: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			apiCachingBehavior: new FormControl<ApiCachingBehavior | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ApiCacheType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateApiKeyRequest {
		description?: string;
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
		description?: string;

		/** Required */
		type: DataSourceType;
		serviceRoleArn?: string;
		dynamodbConfig?: DynamodbDataSourceConfig;
		lambdaConfig?: LambdaDataSourceConfig;
		elasticsearchConfig?: ElasticsearchDataSourceConfig;
		openSearchServiceConfig?: OpenSearchServiceDataSourceConfig;
		httpConfig?: HttpDataSourceConfig;
		relationalDatabaseConfig?: RelationalDatabaseDataSourceConfig;
		eventBridgeConfig?: EventBridgeDataSourceConfig;
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

	export interface UpdateDomainNameRequest {
		description?: string;
	}
	export interface UpdateDomainNameRequestFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainNameRequestFormGroup() {
		return new FormGroup<UpdateDomainNameRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionRequest {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		dataSourceName: string;
		requestMappingTemplate?: string;
		responseMappingTemplate?: string;
		functionVersion?: string;

		/** <p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p> */
		syncConfig?: SyncConfig;
		maxBatchSize?: number | null;

		/** Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. */
		runtime?: AppSyncRuntime;
		code?: string;
	}
	export interface UpdateFunctionRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		dataSourceName: FormControl<string | null | undefined>,
		requestMappingTemplate: FormControl<string | null | undefined>,
		responseMappingTemplate: FormControl<string | null | undefined>,
		functionVersion: FormControl<string | null | undefined>,
		maxBatchSize: FormControl<number | null | undefined>,
		code: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFunctionRequestFormGroup() {
		return new FormGroup<UpdateFunctionRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			dataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined),
			functionVersion: new FormControl<string | null | undefined>(undefined),
			maxBatchSize: new FormControl<number | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGraphqlApiRequest {

		/** Required */
		name: string;
		logConfig?: LogConfig;
		authenticationType?: AuthenticationType;
		userPoolConfig?: UserPoolConfig;
		openIDConnectConfig?: OpenIDConnectConfig;
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;
		xrayEnabled?: boolean | null;
		lambdaAuthorizerConfig?: LambdaAuthorizerConfig;
		mergedApiExecutionRoleArn?: string;
		ownerContact?: string;
	}
	export interface UpdateGraphqlApiRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		authenticationType: FormControl<AuthenticationType | null | undefined>,
		xrayEnabled: FormControl<boolean | null | undefined>,
		mergedApiExecutionRoleArn: FormControl<string | null | undefined>,
		ownerContact: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGraphqlApiRequestFormGroup() {
		return new FormGroup<UpdateGraphqlApiRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authenticationType: new FormControl<AuthenticationType | null | undefined>(undefined),
			xrayEnabled: new FormControl<boolean | null | undefined>(undefined),
			mergedApiExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			ownerContact: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateResolverRequest {
		dataSourceName?: string;
		requestMappingTemplate?: string;
		responseMappingTemplate?: string;
		kind?: ResolverKind;
		pipelineConfig?: PipelineConfig;
		syncConfig?: SyncConfig;
		cachingConfig?: CachingConfig;
		maxBatchSize?: number | null;

		/** Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. */
		runtime?: AppSyncRuntime;
		code?: string;
	}
	export interface UpdateResolverRequestFormProperties {
		dataSourceName: FormControl<string | null | undefined>,
		requestMappingTemplate: FormControl<string | null | undefined>,
		responseMappingTemplate: FormControl<string | null | undefined>,
		kind: FormControl<ResolverKind | null | undefined>,
		maxBatchSize: FormControl<number | null | undefined>,
		code: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResolverRequestFormGroup() {
		return new FormGroup<UpdateResolverRequestFormProperties>({
			dataSourceName: new FormControl<string | null | undefined>(undefined),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<ResolverKind | null | undefined>(undefined),
			maxBatchSize: new FormControl<number | null | undefined>(undefined),
			code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSourceApiAssociationRequest {
		description?: string;
		sourceApiAssociationConfig?: SourceApiAssociationConfig;
	}
	export interface UpdateSourceApiAssociationRequestFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSourceApiAssociationRequestFormGroup() {
		return new FormGroup<UpdateSourceApiAssociationRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTypeRequest {
		definition?: string;

		/** Required */
		format: TypeDefinitionFormat;
	}
	export interface UpdateTypeRequestFormProperties {
		definition: FormControl<string | null | undefined>,

		/** Required */
		format: FormControl<TypeDefinitionFormat | null | undefined>,
	}
	export function CreateUpdateTypeRequestFormGroup() {
		return new FormGroup<UpdateTypeRequestFormProperties>({
			definition: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<TypeDefinitionFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Maps an endpoint to your custom domain.
		 * Post v1/domainnames/{domainName}/apiassociation
		 * @param {string} domainName The domain name.
		 *     Min length: 1    Max length: 253
		 * @return {AssociateApiResponse} Success
		 */
		AssociateApi(domainName: string, requestBody: AssociateApiPostBody): Observable<AssociateApiResponse> {
			return this.http.post<AssociateApiResponse>(this.baseUri + 'v1/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/apiassociation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes an <code>ApiAssociation</code> object from a custom domain.
		 * Delete v1/domainnames/{domainName}/apiassociation
		 * @param {string} domainName The domain name.
		 *     Min length: 1    Max length: 253
		 * @return {DisassociateApiResponse} Success
		 */
		DisassociateApi(domainName: string): Observable<DisassociateApiResponse> {
			return this.http.delete<DisassociateApiResponse>(this.baseUri + 'v1/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/apiassociation', {});
		}

		/**
		 * Retrieves an <code>ApiAssociation</code> object.
		 * Get v1/domainnames/{domainName}/apiassociation
		 * @param {string} domainName The domain name.
		 *     Min length: 1    Max length: 253
		 * @return {GetApiAssociationResponse} Success
		 */
		GetApiAssociation(domainName: string): Observable<GetApiAssociationResponse> {
			return this.http.get<GetApiAssociationResponse>(this.baseUri + 'v1/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/apiassociation', {});
		}

		/**
		 * Creates an association between a Merged API and source API using the source API's identifier.
		 * Post v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations
		 * @param {string} sourceApiIdentifier The identifier of the AppSync Source API. This is generated by the AppSync service. In most cases, source APIs (especially in your account) only require the API ID value or ARN of the source API. However, source APIs from other accounts (cross-account use cases) strictly require the full resource ARN of the source API.
		 * @return {AssociateMergedGraphqlApiResponse} Success
		 */
		AssociateMergedGraphqlApi(sourceApiIdentifier: string, requestBody: AssociateMergedGraphqlApiPostBody): Observable<AssociateMergedGraphqlApiResponse> {
			return this.http.post<AssociateMergedGraphqlApiResponse>(this.baseUri + 'v1/sourceApis/' + (sourceApiIdentifier == null ? '' : encodeURIComponent(sourceApiIdentifier)) + '/mergedApiAssociations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an association between a Merged API and source API using the Merged API's identifier.
		 * Post v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations
		 * @param {string} mergedApiIdentifier The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.
		 * @return {AssociateSourceGraphqlApiResponse} Success
		 */
		AssociateSourceGraphqlApi(mergedApiIdentifier: string, requestBody: AssociateSourceGraphqlApiPostBody): Observable<AssociateSourceGraphqlApiResponse> {
			return this.http.post<AssociateSourceGraphqlApiResponse>(this.baseUri + 'v1/mergedApis/' + (mergedApiIdentifier == null ? '' : encodeURIComponent(mergedApiIdentifier)) + '/sourceApiAssociations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a cache for the GraphQL API.
		 * Post v1/apis/{apiId}/ApiCaches
		 * @param {string} apiId The GraphQL API ID.
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
		 * Creates a unique key that you can distribute to clients who invoke your API.
		 * Post v1/apis/{apiId}/apikeys
		 * @param {string} apiId The ID for your GraphQL API.
		 * @return {CreateApiKeyResponse} Success
		 */
		CreateApiKey(apiId: string, requestBody: CreateApiKeyPostBody): Observable<CreateApiKeyResponse> {
			return this.http.post<CreateApiKeyResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/apikeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the API keys for a given API.</p> <note> <p>API keys are deleted automatically 60 days after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually delete a key before it's automatically deleted.</p> </note>
		 * Get v1/apis/{apiId}/apikeys
		 * @param {string} apiId The API ID.
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
		 *     Min length: 1    Max length: 65536
		 * @param {number} maxResults The maximum number of results that you want the request to return.
		 *     Minimum: 0    Maximum: 25
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
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
		 *     Min length: 1    Max length: 65536
		 * @param {number} maxResults The maximum number of results that you want the request to return.
		 *     Minimum: 0    Maximum: 25
		 * @return {ListDataSourcesResponse} Success
		 */
		ListDataSources(apiId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDataSourcesResponse> {
			return this.http.get<ListDataSourcesResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/datasources&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a custom <code>DomainName</code> object.
		 * Post v1/domainnames
		 * @return {CreateDomainNameResponse} Success
		 */
		CreateDomainName(requestBody: CreateDomainNamePostBody): Observable<CreateDomainNameResponse> {
			return this.http.post<CreateDomainNameResponse>(this.baseUri + 'v1/domainnames', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists multiple custom domain names.
		 * Get v1/domainnames
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
		 *     Min length: 1    Max length: 65536
		 * @param {number} maxResults The maximum number of results that you want the request to return.
		 *     Minimum: 0    Maximum: 25
		 * @return {ListDomainNamesResponse} Success
		 */
		ListDomainNames(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDomainNamesResponse> {
			return this.http.get<ListDomainNamesResponse>(this.baseUri + 'v1/domainnames?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Creates a <code>Function</code> object.</p> <p>A function is a reusable entity. You can use multiple functions to compose the resolver logic.</p>
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
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
		 *     Min length: 1    Max length: 65536
		 * @param {number} maxResults The maximum number of results that you want the request to return.
		 *     Minimum: 0    Maximum: 25
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
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
		 *     Min length: 1    Max length: 65536
		 * @param {number} maxResults The maximum number of results that you want the request to return.
		 *     Minimum: 0    Maximum: 25
		 * @param {GraphQLApiType} apiType The value that indicates whether the GraphQL API is a standard API (<code>GRAPHQL</code>) or merged API (<code>MERGED</code>).
		 * @param {Ownership} owner The account owner of the GraphQL API.
		 * @return {ListGraphqlApisResponse} Success
		 */
		ListGraphqlApis(nextToken: string | null | undefined, maxResults: number | null | undefined, apiType: GraphQLApiType | null | undefined, owner: Ownership | null | undefined): Observable<ListGraphqlApisResponse> {
			return this.http.get<ListGraphqlApisResponse>(this.baseUri + 'v1/apis?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&apiType=' + apiType + '&owner=' + owner, {});
		}

		/**
		 * <p>Creates a <code>Resolver</code> object.</p> <p>A resolver converts incoming requests into a format that a data source can understand, and converts the data source's responses into GraphQL.</p>
		 * Post v1/apis/{apiId}/types/{typeName}/resolvers
		 * @param {string} apiId The ID for the GraphQL API for which the resolver is being created.
		 * @param {string} typeName The name of the <code>Type</code>.
		 *     Min length: 1    Max length: 65536
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
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
		 *     Min length: 1    Max length: 65536
		 * @param {number} maxResults The maximum number of results that you want the request to return.
		 *     Minimum: 0    Maximum: 25
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
		 * Updates an API key. You can update the key as long as it's not deleted.
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
		 *     Min length: 1    Max length: 65536
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
		 *     Min length: 1    Max length: 65536
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
		 *     Min length: 1    Max length: 65536
		 * @return {UpdateDataSourceResponse} Success
		 */
		UpdateDataSource(apiId: string, name: string, requestBody: UpdateDataSourcePostBody): Observable<UpdateDataSourceResponse> {
			return this.http.post<UpdateDataSourceResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/datasources/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a custom <code>DomainName</code> object.
		 * Delete v1/domainnames/{domainName}
		 * @param {string} domainName The domain name.
		 *     Min length: 1    Max length: 253
		 * @return {DeleteDomainNameResponse} Success
		 */
		DeleteDomainName(domainName: string): Observable<DeleteDomainNameResponse> {
			return this.http.delete<DeleteDomainNameResponse>(this.baseUri + 'v1/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)), {});
		}

		/**
		 * Retrieves a custom <code>DomainName</code> object.
		 * Get v1/domainnames/{domainName}
		 * @param {string} domainName The domain name.
		 *     Min length: 1    Max length: 253
		 * @return {GetDomainNameResponse} Success
		 */
		GetDomainName(domainName: string): Observable<GetDomainNameResponse> {
			return this.http.get<GetDomainNameResponse>(this.baseUri + 'v1/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)), {});
		}

		/**
		 * Updates a custom <code>DomainName</code> object.
		 * Post v1/domainnames/{domainName}
		 * @param {string} domainName The domain name.
		 *     Min length: 1    Max length: 253
		 * @return {UpdateDomainNameResponse} Success
		 */
		UpdateDomainName(domainName: string, requestBody: UpdateDomainNamePostBody): Observable<UpdateDomainNameResponse> {
			return this.http.post<UpdateDomainNameResponse>(this.baseUri + 'v1/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a <code>Function</code>.
		 * Delete v1/apis/{apiId}/functions/{functionId}
		 * @param {string} apiId The GraphQL API ID.
		 * @param {string} functionId The <code>Function</code> ID.
		 *     Min length: 1    Max length: 65536
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
		 *     Min length: 1    Max length: 65536
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
		 *     Min length: 1    Max length: 65536
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
		 *     Min length: 1    Max length: 65536
		 * @param {string} fieldName The resolver field name.
		 *     Min length: 1    Max length: 65536
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
		 *     Min length: 1    Max length: 65536
		 * @param {string} fieldName The resolver field name.
		 *     Min length: 1    Max length: 65536
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
		 *     Min length: 1    Max length: 65536
		 * @param {string} fieldName The new field name.
		 *     Min length: 1    Max length: 65536
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
		 *     Min length: 1    Max length: 65536
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
		 *     Min length: 1    Max length: 65536
		 * @return {UpdateTypeResponse} Success
		 */
		UpdateType(apiId: string, typeName: string, requestBody: UpdateTypePostBody): Observable<UpdateTypeResponse> {
			return this.http.post<UpdateTypeResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types/' + (typeName == null ? '' : encodeURIComponent(typeName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an association between a Merged API and source API using the source API's identifier and the association ID.
		 * Delete v1/sourceApis/{sourceApiIdentifier}/mergedApiAssociations/{associationId}
		 * @param {string} sourceApiIdentifier The identifier of the AppSync Source API. This is generated by the AppSync service. In most cases, source APIs (especially in your account) only require the API ID value or ARN of the source API. However, source APIs from other accounts (cross-account use cases) strictly require the full resource ARN of the source API.
		 * @param {string} associationId The ID generated by the AppSync service for the source API association.
		 * @return {DisassociateMergedGraphqlApiResponse} Success
		 */
		DisassociateMergedGraphqlApi(sourceApiIdentifier: string, associationId: string): Observable<DisassociateMergedGraphqlApiResponse> {
			return this.http.delete<DisassociateMergedGraphqlApiResponse>(this.baseUri + 'v1/sourceApis/' + (sourceApiIdentifier == null ? '' : encodeURIComponent(sourceApiIdentifier)) + '/mergedApiAssociations/' + (associationId == null ? '' : encodeURIComponent(associationId)), {});
		}

		/**
		 * Deletes an association between a Merged API and source API using the Merged API's identifier and the association ID.
		 * Delete v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}
		 * @param {string} mergedApiIdentifier The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.
		 * @param {string} associationId The ID generated by the AppSync service for the source API association.
		 * @return {DisassociateSourceGraphqlApiResponse} Success
		 */
		DisassociateSourceGraphqlApi(mergedApiIdentifier: string, associationId: string): Observable<DisassociateSourceGraphqlApiResponse> {
			return this.http.delete<DisassociateSourceGraphqlApiResponse>(this.baseUri + 'v1/mergedApis/' + (mergedApiIdentifier == null ? '' : encodeURIComponent(mergedApiIdentifier)) + '/sourceApiAssociations/' + (associationId == null ? '' : encodeURIComponent(associationId)), {});
		}

		/**
		 * Retrieves a <code>SourceApiAssociation</code> object.
		 * Get v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}
		 * @param {string} mergedApiIdentifier The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.
		 * @param {string} associationId The ID generated by the AppSync service for the source API association.
		 * @return {GetSourceApiAssociationResponse} Success
		 */
		GetSourceApiAssociation(mergedApiIdentifier: string, associationId: string): Observable<GetSourceApiAssociationResponse> {
			return this.http.get<GetSourceApiAssociationResponse>(this.baseUri + 'v1/mergedApis/' + (mergedApiIdentifier == null ? '' : encodeURIComponent(mergedApiIdentifier)) + '/sourceApiAssociations/' + (associationId == null ? '' : encodeURIComponent(associationId)), {});
		}

		/**
		 * Updates some of the configuration choices of a particular source API association.
		 * Post v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}
		 * @param {string} associationId The ID generated by the AppSync service for the source API association.
		 * @param {string} mergedApiIdentifier The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.
		 * @return {UpdateSourceApiAssociationResponse} Success
		 */
		UpdateSourceApiAssociation(associationId: string, mergedApiIdentifier: string, requestBody: UpdateSourceApiAssociationPostBody): Observable<UpdateSourceApiAssociationResponse> {
			return this.http.post<UpdateSourceApiAssociationResponse>(this.baseUri + 'v1/mergedApis/' + (mergedApiIdentifier == null ? '' : encodeURIComponent(mergedApiIdentifier)) + '/sourceApiAssociations/' + (associationId == null ? '' : encodeURIComponent(associationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Evaluates the given code and returns the response. The code definition requirements depend on the specified runtime. For <code>APPSYNC_JS</code> runtimes, the code defines the request and response functions. The request function takes the incoming request after a GraphQL operation is parsed and converts it into a request configuration for the selected data source operation. The response function interprets responses from the data source and maps it to the shape of the GraphQL field output type.
		 * Post v1/dataplane-evaluatecode
		 * @return {EvaluateCodeResponse} Success
		 */
		EvaluateCode(requestBody: EvaluateCodePostBody): Observable<EvaluateCodeResponse> {
			return this.http.post<EvaluateCodeResponse>(this.baseUri + 'v1/dataplane-evaluatecode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Evaluates a given template and returns the response. The mapping template can be a request or response template.</p> <p>Request templates take the incoming request after a GraphQL operation is parsed and convert it into a request configuration for the selected data source operation. Response templates interpret responses from the data source and map it to the shape of the GraphQL field output type.</p> <p>Mapping templates are written in the Apache Velocity Template Language (VTL).</p>
		 * Post v1/dataplane-evaluatetemplate
		 * @return {EvaluateMappingTemplateResponse} Success
		 */
		EvaluateMappingTemplate(requestBody: EvaluateMappingTemplatePostBody): Observable<EvaluateMappingTemplateResponse> {
			return this.http.post<EvaluateMappingTemplateResponse>(this.baseUri + 'v1/dataplane-evaluatetemplate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		 * @param {TypeDefinitionFormat} format The schema format: SDL or JSON.
		 * @param {boolean} includeDirectives A flag that specifies whether the schema introspection should contain directives.
		 * @return {GetIntrospectionSchemaResponse} Success
		 */
		GetIntrospectionSchema(apiId: string, format: TypeDefinitionFormat, includeDirectives: boolean | null | undefined): Observable<GetIntrospectionSchemaResponse> {
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
		 *     Min length: 1    Max length: 65536
		 * @param {TypeDefinitionFormat} format The type format: SDL or JSON.
		 * @return {GetTypeResponse} Success
		 */
		GetType(apiId: string, typeName: string, format: TypeDefinitionFormat): Observable<GetTypeResponse> {
			return this.http.get<GetTypeResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types/' + (typeName == null ? '' : encodeURIComponent(typeName)) + '#format&format=' + format, {});
		}

		/**
		 * List the resolvers that are associated with a specific function.
		 * Get v1/apis/{apiId}/functions/{functionId}/resolvers
		 * @param {string} apiId The API ID.
		 * @param {string} functionId The function ID.
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
		 *     Min length: 1    Max length: 65536
		 * @param {number} maxResults The maximum number of results that you want the request to return.
		 *     Minimum: 0    Maximum: 25
		 * @return {ListResolversByFunctionResponse} Success
		 */
		ListResolversByFunction(apiId: string, functionId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListResolversByFunctionResponse> {
			return this.http.get<ListResolversByFunctionResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/functions/' + (functionId == null ? '' : encodeURIComponent(functionId)) + '/resolvers&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the <code>SourceApiAssociationSummary</code> data.
		 * Get v1/apis/{apiId}/sourceApiAssociations
		 * @param {string} apiId The API ID.
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
		 *     Min length: 1    Max length: 65536
		 * @param {number} maxResults The maximum number of results that you want the request to return.
		 *     Minimum: 0    Maximum: 25
		 * @return {ListSourceApiAssociationsResponse} Success
		 */
		ListSourceApiAssociations(apiId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListSourceApiAssociationsResponse> {
			return this.http.get<ListSourceApiAssociationsResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/sourceApiAssociations&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists the tags for a resource.
		 * Get v1/tags/{resourceArn}
		 * @param {string} resourceArn The <code>GraphqlApi</code> Amazon Resource Name (ARN).
		 *     Min length: 70    Max length: 75
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Tags a resource with user-supplied tags.
		 * Post v1/tags/{resourceArn}
		 * @param {string} resourceArn The <code>GraphqlApi</code> Amazon Resource Name (ARN).
		 *     Min length: 70    Max length: 75
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the types for a given API.
		 * Get v1/apis/{apiId}/types#format
		 * @param {string} apiId The API ID.
		 * @param {TypeDefinitionFormat} format The type format: SDL or JSON.
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
		 *     Min length: 1    Max length: 65536
		 * @param {number} maxResults The maximum number of results that you want the request to return.
		 *     Minimum: 0    Maximum: 25
		 * @return {ListTypesResponse} Success
		 */
		ListTypes(apiId: string, format: TypeDefinitionFormat, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListTypesResponse> {
			return this.http.get<ListTypesResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/types#format&format=' + format + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists <code>Type</code> objects by the source API association ID.
		 * Get v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/types#format
		 * @param {string} mergedApiIdentifier The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.
		 * @param {string} associationId The ID generated by the AppSync service for the source API association.
		 * @param {TypeDefinitionFormat} format The format type.
		 * @param {string} nextToken An identifier that was returned from the previous call to this operation, which you can use to return the next set of items in the list.
		 *     Min length: 1    Max length: 65536
		 * @param {number} maxResults The maximum number of results that you want the request to return.
		 *     Minimum: 0    Maximum: 25
		 * @return {ListTypesByAssociationResponse} Success
		 */
		ListTypesByAssociation(mergedApiIdentifier: string, associationId: string, format: TypeDefinitionFormat, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListTypesByAssociationResponse> {
			return this.http.get<ListTypesByAssociationResponse>(this.baseUri + 'v1/mergedApis/' + (mergedApiIdentifier == null ? '' : encodeURIComponent(mergedApiIdentifier)) + '/sourceApiAssociations/' + (associationId == null ? '' : encodeURIComponent(associationId)) + '/types#format&format=' + format + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Initiates a merge operation. Returns a status that shows the result of the merge operation.
		 * Post v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/merge
		 * @param {string} associationId The ID generated by the AppSync service for the source API association.
		 * @param {string} mergedApiIdentifier The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.
		 * @return {StartSchemaMergeResponse} Success
		 */
		StartSchemaMerge(associationId: string, mergedApiIdentifier: string): Observable<StartSchemaMergeResponse> {
			return this.http.post<StartSchemaMergeResponse>(this.baseUri + 'v1/mergedApis/' + (mergedApiIdentifier == null ? '' : encodeURIComponent(mergedApiIdentifier)) + '/sourceApiAssociations/' + (associationId == null ? '' : encodeURIComponent(associationId)) + '/merge', null, {});
		}

		/**
		 * Untags a resource.
		 * Delete v1/tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The <code>GraphqlApi</code> Amazon Resource Name (ARN).
		 *     Min length: 70    Max length: 75
		 * @param {Array<string>} tagKeys A list of <code>TagKey</code> objects.
		 *     Minimum items: 1    Maximum items: 50
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'v1/tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates the cache for the GraphQL API.
		 * Post v1/apis/{apiId}/ApiCaches/update
		 * @param {string} apiId The GraphQL API ID.
		 * @return {UpdateApiCacheResponse} Success
		 */
		UpdateApiCache(apiId: string, requestBody: UpdateApiCachePostBody): Observable<UpdateApiCacheResponse> {
			return this.http.post<UpdateApiCacheResponse>(this.baseUri + 'v1/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/ApiCaches/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AssociateApiPostBody {

		/**
		 * The API ID. Private APIs can not be associated with custom domains.
		 * Required
		 */
		apiId: string;
	}
	export interface AssociateApiPostBodyFormProperties {

		/**
		 * The API ID. Private APIs can not be associated with custom domains.
		 * Required
		 */
		apiId: FormControl<string | null | undefined>,
	}
	export function CreateAssociateApiPostBodyFormGroup() {
		return new FormGroup<AssociateApiPostBodyFormProperties>({
			apiId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AssociateMergedGraphqlApiPostBody {

		/**
		 * The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.
		 * Required
		 */
		mergedApiIdentifier: string;

		/** The description field. */
		description?: string | null;

		/** Describes properties used to specify configurations related to a source API. */
		sourceApiAssociationConfig?: AssociateMergedGraphqlApiPostBodySourceApiAssociationConfig;
	}
	export interface AssociateMergedGraphqlApiPostBodyFormProperties {

		/**
		 * The identifier of the AppSync Merged API. This is generated by the AppSync service. In most cases, Merged APIs (especially in your account) only require the API ID value or ARN of the merged API. However, Merged APIs in other accounts (cross-account use cases) strictly require the full resource ARN of the merged API.
		 * Required
		 */
		mergedApiIdentifier: FormControl<string | null | undefined>,

		/** The description field. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateAssociateMergedGraphqlApiPostBodyFormGroup() {
		return new FormGroup<AssociateMergedGraphqlApiPostBodyFormProperties>({
			mergedApiIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateMergedGraphqlApiPostBodySourceApiAssociationConfig {
		mergeType?: MergeType;
	}
	export interface AssociateMergedGraphqlApiPostBodySourceApiAssociationConfigFormProperties {
		mergeType: FormControl<MergeType | null | undefined>,
	}
	export function CreateAssociateMergedGraphqlApiPostBodySourceApiAssociationConfigFormGroup() {
		return new FormGroup<AssociateMergedGraphqlApiPostBodySourceApiAssociationConfigFormProperties>({
			mergeType: new FormControl<MergeType | null | undefined>(undefined),
		});

	}

	export interface AssociateSourceGraphqlApiPostBody {

		/**
		 * The identifier of the AppSync Source API. This is generated by the AppSync service. In most cases, source APIs (especially in your account) only require the API ID value or ARN of the source API. However, source APIs from other accounts (cross-account use cases) strictly require the full resource ARN of the source API.
		 * Required
		 */
		sourceApiIdentifier: string;

		/** The description field. */
		description?: string | null;

		/** Describes properties used to specify configurations related to a source API. */
		sourceApiAssociationConfig?: AssociateSourceGraphqlApiPostBodySourceApiAssociationConfig;
	}
	export interface AssociateSourceGraphqlApiPostBodyFormProperties {

		/**
		 * The identifier of the AppSync Source API. This is generated by the AppSync service. In most cases, source APIs (especially in your account) only require the API ID value or ARN of the source API. However, source APIs from other accounts (cross-account use cases) strictly require the full resource ARN of the source API.
		 * Required
		 */
		sourceApiIdentifier: FormControl<string | null | undefined>,

		/** The description field. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateAssociateSourceGraphqlApiPostBodyFormGroup() {
		return new FormGroup<AssociateSourceGraphqlApiPostBodyFormProperties>({
			sourceApiIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateSourceGraphqlApiPostBodySourceApiAssociationConfig {
		mergeType?: MergeType;
	}
	export interface AssociateSourceGraphqlApiPostBodySourceApiAssociationConfigFormProperties {
		mergeType: FormControl<MergeType | null | undefined>,
	}
	export function CreateAssociateSourceGraphqlApiPostBodySourceApiAssociationConfigFormGroup() {
		return new FormGroup<AssociateSourceGraphqlApiPostBodySourceApiAssociationConfigFormProperties>({
			mergeType: new FormControl<MergeType | null | undefined>(undefined),
		});

	}

	export interface CreateApiCachePostBody {

		/**
		 * <p>TTL in seconds for cache entries.</p> <p>Valid values are 1–3,600 seconds.</p>
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ttl: number;

		/** Transit encryption flag when connecting to cache. You cannot update this setting after creation. */
		transitEncryptionEnabled?: boolean | null;

		/** At-rest encryption flag for cache. You cannot update this setting after creation. */
		atRestEncryptionEnabled?: boolean | null;

		/**
		 * <p>Caching behavior.</p> <ul> <li> <p> <b>FULL_REQUEST_CACHING</b>: All requests are fully cached.</p> </li> <li> <p> <b>PER_RESOLVER_CACHING</b>: Individual resolvers that you specify are cached.</p> </li> </ul>
		 * Required
		 */
		apiCachingBehavior: ApiCachingBehavior;

		/**
		 * <p>The cache instance type. Valid values are </p> <ul> <li> <p> <code>SMALL</code> </p> </li> <li> <p> <code>MEDIUM</code> </p> </li> <li> <p> <code>LARGE</code> </p> </li> <li> <p> <code>XLARGE</code> </p> </li> <li> <p> <code>LARGE_2X</code> </p> </li> <li> <p> <code>LARGE_4X</code> </p> </li> <li> <p> <code>LARGE_8X</code> (not available in all regions)</p> </li> <li> <p> <code>LARGE_12X</code> </p> </li> </ul> <p>Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used.</p> <p>The following legacy instance types are available, but their use is discouraged:</p> <ul> <li> <p> <b>T2_SMALL</b>: A t2.small instance type.</p> </li> <li> <p> <b>T2_MEDIUM</b>: A t2.medium instance type.</p> </li> <li> <p> <b>R4_LARGE</b>: A r4.large instance type.</p> </li> <li> <p> <b>R4_XLARGE</b>: A r4.xlarge instance type.</p> </li> <li> <p> <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p> </li> <li> <p> <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p> </li> <li> <p> <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p> </li> </ul>
		 * Required
		 */
		type: ApiCacheType;
	}
	export interface CreateApiCachePostBodyFormProperties {

		/**
		 * <p>TTL in seconds for cache entries.</p> <p>Valid values are 1–3,600 seconds.</p>
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ttl: FormControl<number | null | undefined>,

		/** Transit encryption flag when connecting to cache. You cannot update this setting after creation. */
		transitEncryptionEnabled: FormControl<boolean | null | undefined>,

		/** At-rest encryption flag for cache. You cannot update this setting after creation. */
		atRestEncryptionEnabled: FormControl<boolean | null | undefined>,

		/**
		 * <p>Caching behavior.</p> <ul> <li> <p> <b>FULL_REQUEST_CACHING</b>: All requests are fully cached.</p> </li> <li> <p> <b>PER_RESOLVER_CACHING</b>: Individual resolvers that you specify are cached.</p> </li> </ul>
		 * Required
		 */
		apiCachingBehavior: FormControl<ApiCachingBehavior | null | undefined>,

		/**
		 * <p>The cache instance type. Valid values are </p> <ul> <li> <p> <code>SMALL</code> </p> </li> <li> <p> <code>MEDIUM</code> </p> </li> <li> <p> <code>LARGE</code> </p> </li> <li> <p> <code>XLARGE</code> </p> </li> <li> <p> <code>LARGE_2X</code> </p> </li> <li> <p> <code>LARGE_4X</code> </p> </li> <li> <p> <code>LARGE_8X</code> (not available in all regions)</p> </li> <li> <p> <code>LARGE_12X</code> </p> </li> </ul> <p>Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used.</p> <p>The following legacy instance types are available, but their use is discouraged:</p> <ul> <li> <p> <b>T2_SMALL</b>: A t2.small instance type.</p> </li> <li> <p> <b>T2_MEDIUM</b>: A t2.medium instance type.</p> </li> <li> <p> <b>R4_LARGE</b>: A r4.large instance type.</p> </li> <li> <p> <b>R4_XLARGE</b>: A r4.xlarge instance type.</p> </li> <li> <p> <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p> </li> <li> <p> <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p> </li> <li> <p> <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p> </li> </ul>
		 * Required
		 */
		type: FormControl<ApiCacheType | null | undefined>,
	}
	export function CreateCreateApiCachePostBodyFormGroup() {
		return new FormGroup<CreateApiCachePostBodyFormProperties>({
			ttl: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			transitEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			atRestEncryptionEnabled: new FormControl<boolean | null | undefined>(undefined),
			apiCachingBehavior: new FormControl<ApiCachingBehavior | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ApiCacheType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateApiKeyPostBody {

		/** A description of the purpose of the API key. */
		description?: string | null;

		/**
		 * From the creation time, the time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour. The default value for this parameter is 7 days from creation time. For more information, see .
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires?: number | null;
	}
	export interface CreateApiKeyPostBodyFormProperties {

		/** A description of the purpose of the API key. */
		description: FormControl<string | null | undefined>,

		/**
		 * From the creation time, the time after which the API key expires. The date is represented as seconds since the epoch, rounded down to the nearest hour. The default value for this parameter is 7 days from creation time. For more information, see .
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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
		 * Min length: 1
		 * Max length: 65536
		 */
		name: string;

		/** A description of the <code>DataSource</code>. */
		description?: string | null;

		/**
		 * The type of the <code>DataSource</code>.
		 * Required
		 */
		type: DataSourceType;

		/** The Identity and Access Management (IAM) service role Amazon Resource Name (ARN) for the data source. The system assumes this role when accessing the data source. */
		serviceRoleArn?: string | null;

		/** Describes an Amazon DynamoDB data source configuration. */
		dynamodbConfig?: CreateDataSourcePostBodyDynamodbConfig;

		/** Describes an Lambda data source configuration. */
		lambdaConfig?: CreateDataSourcePostBodyLambdaConfig;

		/** <p>Describes an OpenSearch data source configuration.</p> <p>As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This configuration is deprecated. For new data sources, use <a>OpenSearchServiceDataSourceConfig</a> to specify an OpenSearch data source.</p> */
		elasticsearchConfig?: CreateDataSourcePostBodyElasticsearchConfig;

		/** Describes an OpenSearch data source configuration. */
		openSearchServiceConfig?: CreateDataSourcePostBodyOpenSearchServiceConfig;

		/** Describes an HTTP data source configuration. */
		httpConfig?: CreateDataSourcePostBodyHttpConfig;

		/** Describes a relational database data source configuration. */
		relationalDatabaseConfig?: CreateDataSourcePostBodyRelationalDatabaseConfig;

		/** Describes an Amazon EventBridge bus data source configuration. */
		eventBridgeConfig?: CreateDataSourcePostBodyEventBridgeConfig;
	}
	export interface CreateDataSourcePostBodyFormProperties {

		/**
		 * A user-supplied name for the <code>DataSource</code>.
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		name: FormControl<string | null | undefined>,

		/** A description of the <code>DataSource</code>. */
		description: FormControl<string | null | undefined>,

		/**
		 * The type of the <code>DataSource</code>.
		 * Required
		 */
		type: FormControl<DataSourceType | null | undefined>,

		/** The Identity and Access Management (IAM) service role Amazon Resource Name (ARN) for the data source. The system assumes this role when accessing the data source. */
		serviceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourcePostBodyFormGroup() {
		return new FormGroup<CreateDataSourcePostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('[_A-Za-z][_0-9A-Za-z]*')]),
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DataSourceType | null | undefined>(undefined, [Validators.required]),
			serviceRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDataSourcePostBodyDynamodbConfig {
		tableName?: string;
		awsRegion?: string;
		useCallerCredentials?: boolean | null;
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
		lambdaFunctionArn?: string;
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
		endpoint?: string;
		awsRegion?: string;
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

	export interface CreateDataSourcePostBodyOpenSearchServiceConfig {
		endpoint?: string;
		awsRegion?: string;
	}
	export interface CreateDataSourcePostBodyOpenSearchServiceConfigFormProperties {
		endpoint: FormControl<string | null | undefined>,
		awsRegion: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourcePostBodyOpenSearchServiceConfigFormGroup() {
		return new FormGroup<CreateDataSourcePostBodyOpenSearchServiceConfigFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDataSourcePostBodyHttpConfig {
		endpoint?: string;
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
		relationalDatabaseSourceType?: RelationalDatabaseSourceType;
		rdsHttpEndpointConfig?: RdsHttpEndpointConfig;
	}
	export interface CreateDataSourcePostBodyRelationalDatabaseConfigFormProperties {
		relationalDatabaseSourceType: FormControl<RelationalDatabaseSourceType | null | undefined>,
	}
	export function CreateCreateDataSourcePostBodyRelationalDatabaseConfigFormGroup() {
		return new FormGroup<CreateDataSourcePostBodyRelationalDatabaseConfigFormProperties>({
			relationalDatabaseSourceType: new FormControl<RelationalDatabaseSourceType | null | undefined>(undefined),
		});

	}

	export interface CreateDataSourcePostBodyEventBridgeConfig {
		eventBusArn?: string;
	}
	export interface CreateDataSourcePostBodyEventBridgeConfigFormProperties {
		eventBusArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourcePostBodyEventBridgeConfigFormGroup() {
		return new FormGroup<CreateDataSourcePostBodyEventBridgeConfigFormProperties>({
			eventBusArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDomainNamePostBody {

		/**
		 * The domain name.
		 * Required
		 * Min length: 1
		 * Max length: 253
		 */
		domainName: string;

		/**
		 * The Amazon Resource Name (ARN) of the certificate. This can be an Certificate Manager (ACM) certificate or an Identity and Access Management (IAM) server certificate.
		 * Required
		 * Min length: 20
		 * Max length: 2048
		 */
		certificateArn: string;

		/**
		 * A description of the <code>DomainName</code>.
		 * Min length: 0
		 * Max length: 255
		 */
		description?: string | null;
	}
	export interface CreateDomainNamePostBodyFormProperties {

		/**
		 * The domain name.
		 * Required
		 * Min length: 1
		 * Max length: 253
		 */
		domainName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the certificate. This can be an Certificate Manager (ACM) certificate or an Identity and Access Management (IAM) server certificate.
		 * Required
		 * Min length: 20
		 * Max length: 2048
		 */
		certificateArn: FormControl<string | null | undefined>,

		/**
		 * A description of the <code>DomainName</code>.
		 * Min length: 0
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainNamePostBodyFormGroup() {
		return new FormGroup<CreateDomainNamePostBodyFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(253), Validators.pattern('^(\*[\w\d-]*\.)?([\w\d-]+\.)+[\w\d-]+$')]),
			certificateArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:[a-z-]*:(acm|iam):[a-z0-9-]*:\d{12}:(certificate|server-certificate)/[0-9A-Za-z_/-]*$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255), Validators.pattern('^.*$')]),
		});

	}

	export interface CreateFunctionPostBody {

		/**
		 * The <code>Function</code> name. The function name does not have to be unique.
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		name: string;

		/** The <code>Function</code> description. */
		description?: string | null;

		/**
		 * The <code>Function</code> <code>DataSource</code> name.
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		dataSourceName: string;

		/**
		 * The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
		 * Min length: 1
		 * Max length: 65536
		 */
		requestMappingTemplate?: string | null;

		/**
		 * The <code>Function</code> response mapping template.
		 * Min length: 1
		 * Max length: 65536
		 */
		responseMappingTemplate?: string | null;

		/** The <code>version</code> of the request mapping template. Currently, the supported value is 2018-05-29. Note that when using VTL and mapping templates, the <code>functionVersion</code> is required. */
		functionVersion?: string | null;

		/** <p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p> */
		syncConfig?: CreateFunctionPostBodySyncConfig;

		/**
		 * The maximum batching size for a resolver.
		 * Minimum: 0
		 * Maximum: 2000
		 */
		maxBatchSize?: number | null;

		/** Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. */
		runtime?: CreateFunctionPostBodyRuntime;

		/**
		 * The <code>function</code> code that contains the request and response functions. When code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be <code>APPSYNC_JS</code>.
		 * Min length: 1
		 * Max length: 32768
		 */
		code?: string | null;
	}
	export interface CreateFunctionPostBodyFormProperties {

		/**
		 * The <code>Function</code> name. The function name does not have to be unique.
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		name: FormControl<string | null | undefined>,

		/** The <code>Function</code> description. */
		description: FormControl<string | null | undefined>,

		/**
		 * The <code>Function</code> <code>DataSource</code> name.
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		dataSourceName: FormControl<string | null | undefined>,

		/**
		 * The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
		 * Min length: 1
		 * Max length: 65536
		 */
		requestMappingTemplate: FormControl<string | null | undefined>,

		/**
		 * The <code>Function</code> response mapping template.
		 * Min length: 1
		 * Max length: 65536
		 */
		responseMappingTemplate: FormControl<string | null | undefined>,

		/** The <code>version</code> of the request mapping template. Currently, the supported value is 2018-05-29. Note that when using VTL and mapping templates, the <code>functionVersion</code> is required. */
		functionVersion: FormControl<string | null | undefined>,

		/**
		 * The maximum batching size for a resolver.
		 * Minimum: 0
		 * Maximum: 2000
		 */
		maxBatchSize: FormControl<number | null | undefined>,

		/**
		 * The <code>function</code> code that contains the request and response functions. When code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be <code>APPSYNC_JS</code>.
		 * Min length: 1
		 * Max length: 32768
		 */
		code: FormControl<string | null | undefined>,
	}
	export function CreateCreateFunctionPostBodyFormGroup() {
		return new FormGroup<CreateFunctionPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('[_A-Za-z][_0-9A-Za-z]*')]),
			description: new FormControl<string | null | undefined>(undefined),
			dataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('[_A-Za-z][_0-9A-Za-z]*')]),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('^.*$')]),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('^.*$')]),
			functionVersion: new FormControl<string | null | undefined>(undefined),
			maxBatchSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2000)]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32768)]),
		});

	}

	export interface CreateFunctionPostBodySyncConfig {
		conflictHandler?: ConflictHandlerType;
		conflictDetection?: ConflictDetectionType;
		lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
	}
	export interface CreateFunctionPostBodySyncConfigFormProperties {
		conflictHandler: FormControl<ConflictHandlerType | null | undefined>,
		conflictDetection: FormControl<ConflictDetectionType | null | undefined>,
	}
	export function CreateCreateFunctionPostBodySyncConfigFormGroup() {
		return new FormGroup<CreateFunctionPostBodySyncConfigFormProperties>({
			conflictHandler: new FormControl<ConflictHandlerType | null | undefined>(undefined),
			conflictDetection: new FormControl<ConflictDetectionType | null | undefined>(undefined),
		});

	}

	export interface CreateFunctionPostBodyRuntime {
		name?: RuntimeName;
		runtimeVersion?: string;
	}
	export interface CreateFunctionPostBodyRuntimeFormProperties {
		name: FormControl<RuntimeName | null | undefined>,
		runtimeVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateFunctionPostBodyRuntimeFormGroup() {
		return new FormGroup<CreateFunctionPostBodyRuntimeFormProperties>({
			name: new FormControl<RuntimeName | null | undefined>(undefined),
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGraphqlApiPostBody {

		/**
		 * A user-supplied name for the <code>GraphqlApi</code>.
		 * Required
		 */
		name: string;

		/** The Amazon CloudWatch Logs configuration. */
		logConfig?: CreateGraphqlApiPostBodyLogConfig;

		/**
		 * The authentication type: API key, Identity and Access Management (IAM), OpenID Connect (OIDC), Amazon Cognito user pools, or Lambda.
		 * Required
		 */
		authenticationType: AuthenticationType;

		/** Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: CreateGraphqlApiPostBodyUserPoolConfig;

		/** Describes an OpenID Connect (OIDC) configuration. */
		openIDConnectConfig?: CreateGraphqlApiPostBodyOpenIDConnectConfig;

		/** A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
		tags?: {[id: string]: string };

		/** A list of additional authentication providers for the <code>GraphqlApi</code> API. */
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;

		/** A flag indicating whether to use X-Ray tracing for the <code>GraphqlApi</code>. */
		xrayEnabled?: boolean | null;

		/** A <code>LambdaAuthorizerConfig</code> specifies how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a time. */
		lambdaAuthorizerConfig?: CreateGraphqlApiPostBodyLambdaAuthorizerConfig;

		/** Sets the value of the GraphQL API to public (<code>GLOBAL</code>) or private (<code>PRIVATE</code>). If no value is provided, the visibility will be set to <code>GLOBAL</code> by default. This value cannot be changed once the API has been created. */
		visibility?: GraphQLApiVisibility | null;

		/** The value that indicates whether the GraphQL API is a standard API (<code>GRAPHQL</code>) or merged API (<code>MERGED</code>). */
		apiType?: GraphQLApiType | null;

		/** The Identity and Access Management service role ARN for a merged API. The AppSync service assumes this role on behalf of the Merged API to validate access to source APIs at runtime and to prompt the <code>AUTO_MERGE</code> to update the merged API endpoint with the source API changes automatically. */
		mergedApiExecutionRoleArn?: string | null;

		/** <p>The owner contact information for an API resource.</p> <p>This field accepts any string input with a length of 0 - 256 characters.</p> */
		ownerContact?: string | null;
	}
	export interface CreateGraphqlApiPostBodyFormProperties {

		/**
		 * A user-supplied name for the <code>GraphqlApi</code>.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The authentication type: API key, Identity and Access Management (IAM), OpenID Connect (OIDC), Amazon Cognito user pools, or Lambda.
		 * Required
		 */
		authenticationType: FormControl<AuthenticationType | null | undefined>,

		/** A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** A flag indicating whether to use X-Ray tracing for the <code>GraphqlApi</code>. */
		xrayEnabled: FormControl<boolean | null | undefined>,

		/** Sets the value of the GraphQL API to public (<code>GLOBAL</code>) or private (<code>PRIVATE</code>). If no value is provided, the visibility will be set to <code>GLOBAL</code> by default. This value cannot be changed once the API has been created. */
		visibility: FormControl<GraphQLApiVisibility | null | undefined>,

		/** The value that indicates whether the GraphQL API is a standard API (<code>GRAPHQL</code>) or merged API (<code>MERGED</code>). */
		apiType: FormControl<GraphQLApiType | null | undefined>,

		/** The Identity and Access Management service role ARN for a merged API. The AppSync service assumes this role on behalf of the Merged API to validate access to source APIs at runtime and to prompt the <code>AUTO_MERGE</code> to update the merged API endpoint with the source API changes automatically. */
		mergedApiExecutionRoleArn: FormControl<string | null | undefined>,

		/** <p>The owner contact information for an API resource.</p> <p>This field accepts any string input with a length of 0 - 256 characters.</p> */
		ownerContact: FormControl<string | null | undefined>,
	}
	export function CreateCreateGraphqlApiPostBodyFormGroup() {
		return new FormGroup<CreateGraphqlApiPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authenticationType: new FormControl<AuthenticationType | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			xrayEnabled: new FormControl<boolean | null | undefined>(undefined),
			visibility: new FormControl<GraphQLApiVisibility | null | undefined>(undefined),
			apiType: new FormControl<GraphQLApiType | null | undefined>(undefined),
			mergedApiExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			ownerContact: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGraphqlApiPostBodyLogConfig {
		fieldLogLevel?: FieldLogLevel;
		cloudWatchLogsRoleArn?: string;
		excludeVerboseContent?: boolean | null;
	}
	export interface CreateGraphqlApiPostBodyLogConfigFormProperties {
		fieldLogLevel: FormControl<FieldLogLevel | null | undefined>,
		cloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		excludeVerboseContent: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateGraphqlApiPostBodyLogConfigFormGroup() {
		return new FormGroup<CreateGraphqlApiPostBodyLogConfigFormProperties>({
			fieldLogLevel: new FormControl<FieldLogLevel | null | undefined>(undefined),
			cloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined),
			excludeVerboseContent: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateGraphqlApiPostBodyUserPoolConfig {
		userPoolId?: string;
		awsRegion?: string;
		defaultAction?: DefaultAction;
		appIdClientRegex?: string;
	}
	export interface CreateGraphqlApiPostBodyUserPoolConfigFormProperties {
		userPoolId: FormControl<string | null | undefined>,
		awsRegion: FormControl<string | null | undefined>,
		defaultAction: FormControl<DefaultAction | null | undefined>,
		appIdClientRegex: FormControl<string | null | undefined>,
	}
	export function CreateCreateGraphqlApiPostBodyUserPoolConfigFormGroup() {
		return new FormGroup<CreateGraphqlApiPostBodyUserPoolConfigFormProperties>({
			userPoolId: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
			defaultAction: new FormControl<DefaultAction | null | undefined>(undefined),
			appIdClientRegex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGraphqlApiPostBodyOpenIDConnectConfig {
		issuer?: string;
		clientId?: string;
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

	export interface CreateGraphqlApiPostBodyLambdaAuthorizerConfig {
		authorizerResultTtlInSeconds?: number | null;
		authorizerUri?: string;
		identityValidationExpression?: string;
	}
	export interface CreateGraphqlApiPostBodyLambdaAuthorizerConfigFormProperties {
		authorizerResultTtlInSeconds: FormControl<number | null | undefined>,
		authorizerUri: FormControl<string | null | undefined>,
		identityValidationExpression: FormControl<string | null | undefined>,
	}
	export function CreateCreateGraphqlApiPostBodyLambdaAuthorizerConfigFormGroup() {
		return new FormGroup<CreateGraphqlApiPostBodyLambdaAuthorizerConfigFormProperties>({
			authorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			authorizerUri: new FormControl<string | null | undefined>(undefined),
			identityValidationExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateResolverPostBody {

		/**
		 * The name of the field to attach the resolver to.
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		fieldName: string;

		/**
		 * The name of the data source for which the resolver is being created.
		 * Min length: 1
		 * Max length: 65536
		 */
		dataSourceName?: string | null;

		/**
		 * <p>The mapping template to use for requests.</p> <p>A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL).</p> <p>VTL request mapping templates are optional when using an Lambda data source. For all other data sources, VTL request and response mapping templates are required.</p>
		 * Min length: 1
		 * Max length: 65536
		 */
		requestMappingTemplate?: string | null;

		/**
		 * The mapping template to use for responses from the data source.
		 * Min length: 1
		 * Max length: 65536
		 */
		responseMappingTemplate?: string | null;

		/** <p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of <code>Function</code> objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.</p> </li> </ul> */
		kind?: ResolverKind | null;

		/** The pipeline configuration for a resolver of kind <code>PIPELINE</code>. */
		pipelineConfig?: CreateResolverPostBodyPipelineConfig;

		/** <p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p> */
		syncConfig?: CreateResolverPostBodySyncConfig;

		/** The caching configuration for a resolver that has caching activated. */
		cachingConfig?: CreateResolverPostBodyCachingConfig;

		/**
		 * The maximum batching size for a resolver.
		 * Minimum: 0
		 * Maximum: 2000
		 */
		maxBatchSize?: number | null;

		/** Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. */
		runtime?: CreateResolverPostBodyRuntime;

		/**
		 * The <code>resolver</code> code that contains the request and response functions. When code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be <code>APPSYNC_JS</code>.
		 * Min length: 1
		 * Max length: 32768
		 */
		code?: string | null;
	}
	export interface CreateResolverPostBodyFormProperties {

		/**
		 * The name of the field to attach the resolver to.
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		fieldName: FormControl<string | null | undefined>,

		/**
		 * The name of the data source for which the resolver is being created.
		 * Min length: 1
		 * Max length: 65536
		 */
		dataSourceName: FormControl<string | null | undefined>,

		/**
		 * <p>The mapping template to use for requests.</p> <p>A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL).</p> <p>VTL request mapping templates are optional when using an Lambda data source. For all other data sources, VTL request and response mapping templates are required.</p>
		 * Min length: 1
		 * Max length: 65536
		 */
		requestMappingTemplate: FormControl<string | null | undefined>,

		/**
		 * The mapping template to use for responses from the data source.
		 * Min length: 1
		 * Max length: 65536
		 */
		responseMappingTemplate: FormControl<string | null | undefined>,

		/** <p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of <code>Function</code> objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.</p> </li> </ul> */
		kind: FormControl<ResolverKind | null | undefined>,

		/**
		 * The maximum batching size for a resolver.
		 * Minimum: 0
		 * Maximum: 2000
		 */
		maxBatchSize: FormControl<number | null | undefined>,

		/**
		 * The <code>resolver</code> code that contains the request and response functions. When code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be <code>APPSYNC_JS</code>.
		 * Min length: 1
		 * Max length: 32768
		 */
		code: FormControl<string | null | undefined>,
	}
	export function CreateCreateResolverPostBodyFormGroup() {
		return new FormGroup<CreateResolverPostBodyFormProperties>({
			fieldName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('[_A-Za-z][_0-9A-Za-z]*')]),
			dataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('[_A-Za-z][_0-9A-Za-z]*')]),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('^.*$')]),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('^.*$')]),
			kind: new FormControl<ResolverKind | null | undefined>(undefined),
			maxBatchSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2000)]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32768)]),
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
		conflictHandler?: ConflictHandlerType;
		conflictDetection?: ConflictDetectionType;
		lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
	}
	export interface CreateResolverPostBodySyncConfigFormProperties {
		conflictHandler: FormControl<ConflictHandlerType | null | undefined>,
		conflictDetection: FormControl<ConflictDetectionType | null | undefined>,
	}
	export function CreateCreateResolverPostBodySyncConfigFormGroup() {
		return new FormGroup<CreateResolverPostBodySyncConfigFormProperties>({
			conflictHandler: new FormControl<ConflictHandlerType | null | undefined>(undefined),
			conflictDetection: new FormControl<ConflictDetectionType | null | undefined>(undefined),
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

	export interface CreateResolverPostBodyRuntime {
		name?: RuntimeName;
		runtimeVersion?: string;
	}
	export interface CreateResolverPostBodyRuntimeFormProperties {
		name: FormControl<RuntimeName | null | undefined>,
		runtimeVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateResolverPostBodyRuntimeFormGroup() {
		return new FormGroup<CreateResolverPostBodyRuntimeFormProperties>({
			name: new FormControl<RuntimeName | null | undefined>(undefined),
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
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
		format: TypeDefinitionFormat;
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
		format: FormControl<TypeDefinitionFormat | null | undefined>,
	}
	export function CreateCreateTypePostBodyFormGroup() {
		return new FormGroup<CreateTypePostBodyFormProperties>({
			definition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<TypeDefinitionFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateApiKeyPostBody {

		/** A description of the purpose of the API key. */
		description?: string | null;

		/**
		 * From the update time, the time after which the API key expires. The date is represented as seconds since the epoch. For more information, see .
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expires?: number | null;
	}
	export interface UpdateApiKeyPostBodyFormProperties {

		/** A description of the purpose of the API key. */
		description: FormControl<string | null | undefined>,

		/**
		 * From the update time, the time after which the API key expires. The date is represented as seconds since the epoch. For more information, see .
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

		/** The new service role Amazon Resource Name (ARN) for the data source. */
		serviceRoleArn?: string | null;

		/** Describes an Amazon DynamoDB data source configuration. */
		dynamodbConfig?: UpdateDataSourcePostBodyDynamodbConfig;

		/** Describes an Lambda data source configuration. */
		lambdaConfig?: UpdateDataSourcePostBodyLambdaConfig;

		/** <p>Describes an OpenSearch data source configuration.</p> <p>As of September 2021, Amazon Elasticsearch service is Amazon OpenSearch Service. This configuration is deprecated. For new data sources, use <a>OpenSearchServiceDataSourceConfig</a> to specify an OpenSearch data source.</p> */
		elasticsearchConfig?: UpdateDataSourcePostBodyElasticsearchConfig;

		/** Describes an OpenSearch data source configuration. */
		openSearchServiceConfig?: UpdateDataSourcePostBodyOpenSearchServiceConfig;

		/** Describes an HTTP data source configuration. */
		httpConfig?: UpdateDataSourcePostBodyHttpConfig;

		/** Describes a relational database data source configuration. */
		relationalDatabaseConfig?: UpdateDataSourcePostBodyRelationalDatabaseConfig;

		/** Describes an Amazon EventBridge bus data source configuration. */
		eventBridgeConfig?: UpdateDataSourcePostBodyEventBridgeConfig;
	}
	export interface UpdateDataSourcePostBodyFormProperties {

		/** The new description for the data source. */
		description: FormControl<string | null | undefined>,

		/**
		 * The new data source type.
		 * Required
		 */
		type: FormControl<DataSourceType | null | undefined>,

		/** The new service role Amazon Resource Name (ARN) for the data source. */
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
		tableName?: string;
		awsRegion?: string;
		useCallerCredentials?: boolean | null;
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
		lambdaFunctionArn?: string;
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
		endpoint?: string;
		awsRegion?: string;
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

	export interface UpdateDataSourcePostBodyOpenSearchServiceConfig {
		endpoint?: string;
		awsRegion?: string;
	}
	export interface UpdateDataSourcePostBodyOpenSearchServiceConfigFormProperties {
		endpoint: FormControl<string | null | undefined>,
		awsRegion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSourcePostBodyOpenSearchServiceConfigFormGroup() {
		return new FormGroup<UpdateDataSourcePostBodyOpenSearchServiceConfigFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDataSourcePostBodyHttpConfig {
		endpoint?: string;
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
		relationalDatabaseSourceType?: RelationalDatabaseSourceType;
		rdsHttpEndpointConfig?: RdsHttpEndpointConfig;
	}
	export interface UpdateDataSourcePostBodyRelationalDatabaseConfigFormProperties {
		relationalDatabaseSourceType: FormControl<RelationalDatabaseSourceType | null | undefined>,
	}
	export function CreateUpdateDataSourcePostBodyRelationalDatabaseConfigFormGroup() {
		return new FormGroup<UpdateDataSourcePostBodyRelationalDatabaseConfigFormProperties>({
			relationalDatabaseSourceType: new FormControl<RelationalDatabaseSourceType | null | undefined>(undefined),
		});

	}

	export interface UpdateDataSourcePostBodyEventBridgeConfig {
		eventBusArn?: string;
	}
	export interface UpdateDataSourcePostBodyEventBridgeConfigFormProperties {
		eventBusArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSourcePostBodyEventBridgeConfigFormGroup() {
		return new FormGroup<UpdateDataSourcePostBodyEventBridgeConfigFormProperties>({
			eventBusArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainNamePostBody {

		/**
		 * A description of the <code>DomainName</code>.
		 * Min length: 0
		 * Max length: 255
		 */
		description?: string | null;
	}
	export interface UpdateDomainNamePostBodyFormProperties {

		/**
		 * A description of the <code>DomainName</code>.
		 * Min length: 0
		 * Max length: 255
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainNamePostBodyFormGroup() {
		return new FormGroup<UpdateDomainNamePostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255), Validators.pattern('^.*$')]),
		});

	}

	export interface UpdateFunctionPostBody {

		/**
		 * The <code>Function</code> name.
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		name: string;

		/** The <code>Function</code> description. */
		description?: string | null;

		/**
		 * The <code>Function</code> <code>DataSource</code> name.
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		dataSourceName: string;

		/**
		 * The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
		 * Min length: 1
		 * Max length: 65536
		 */
		requestMappingTemplate?: string | null;

		/**
		 * The <code>Function</code> request mapping template.
		 * Min length: 1
		 * Max length: 65536
		 */
		responseMappingTemplate?: string | null;

		/** The <code>version</code> of the request mapping template. Currently, the supported value is 2018-05-29. Note that when using VTL and mapping templates, the <code>functionVersion</code> is required. */
		functionVersion?: string | null;

		/** <p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p> */
		syncConfig?: UpdateFunctionPostBodySyncConfig;

		/**
		 * The maximum batching size for a resolver.
		 * Minimum: 0
		 * Maximum: 2000
		 */
		maxBatchSize?: number | null;

		/** Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. */
		runtime?: UpdateFunctionPostBodyRuntime;

		/**
		 * The <code>function</code> code that contains the request and response functions. When code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be <code>APPSYNC_JS</code>.
		 * Min length: 1
		 * Max length: 32768
		 */
		code?: string | null;
	}
	export interface UpdateFunctionPostBodyFormProperties {

		/**
		 * The <code>Function</code> name.
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		name: FormControl<string | null | undefined>,

		/** The <code>Function</code> description. */
		description: FormControl<string | null | undefined>,

		/**
		 * The <code>Function</code> <code>DataSource</code> name.
		 * Required
		 * Min length: 1
		 * Max length: 65536
		 */
		dataSourceName: FormControl<string | null | undefined>,

		/**
		 * The <code>Function</code> request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
		 * Min length: 1
		 * Max length: 65536
		 */
		requestMappingTemplate: FormControl<string | null | undefined>,

		/**
		 * The <code>Function</code> request mapping template.
		 * Min length: 1
		 * Max length: 65536
		 */
		responseMappingTemplate: FormControl<string | null | undefined>,

		/** The <code>version</code> of the request mapping template. Currently, the supported value is 2018-05-29. Note that when using VTL and mapping templates, the <code>functionVersion</code> is required. */
		functionVersion: FormControl<string | null | undefined>,

		/**
		 * The maximum batching size for a resolver.
		 * Minimum: 0
		 * Maximum: 2000
		 */
		maxBatchSize: FormControl<number | null | undefined>,

		/**
		 * The <code>function</code> code that contains the request and response functions. When code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be <code>APPSYNC_JS</code>.
		 * Min length: 1
		 * Max length: 32768
		 */
		code: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFunctionPostBodyFormGroup() {
		return new FormGroup<UpdateFunctionPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('[_A-Za-z][_0-9A-Za-z]*')]),
			description: new FormControl<string | null | undefined>(undefined),
			dataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('[_A-Za-z][_0-9A-Za-z]*')]),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('^.*$')]),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('^.*$')]),
			functionVersion: new FormControl<string | null | undefined>(undefined),
			maxBatchSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2000)]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32768)]),
		});

	}

	export interface UpdateFunctionPostBodySyncConfig {
		conflictHandler?: ConflictHandlerType;
		conflictDetection?: ConflictDetectionType;
		lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
	}
	export interface UpdateFunctionPostBodySyncConfigFormProperties {
		conflictHandler: FormControl<ConflictHandlerType | null | undefined>,
		conflictDetection: FormControl<ConflictDetectionType | null | undefined>,
	}
	export function CreateUpdateFunctionPostBodySyncConfigFormGroup() {
		return new FormGroup<UpdateFunctionPostBodySyncConfigFormProperties>({
			conflictHandler: new FormControl<ConflictHandlerType | null | undefined>(undefined),
			conflictDetection: new FormControl<ConflictDetectionType | null | undefined>(undefined),
		});

	}

	export interface UpdateFunctionPostBodyRuntime {
		name?: RuntimeName;
		runtimeVersion?: string;
	}
	export interface UpdateFunctionPostBodyRuntimeFormProperties {
		name: FormControl<RuntimeName | null | undefined>,
		runtimeVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFunctionPostBodyRuntimeFormGroup() {
		return new FormGroup<UpdateFunctionPostBodyRuntimeFormProperties>({
			name: new FormControl<RuntimeName | null | undefined>(undefined),
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGraphqlApiPostBody {

		/**
		 * The new name for the <code>GraphqlApi</code> object.
		 * Required
		 */
		name: string;

		/** The Amazon CloudWatch Logs configuration. */
		logConfig?: UpdateGraphqlApiPostBodyLogConfig;

		/** The new authentication type for the <code>GraphqlApi</code> object. */
		authenticationType?: AuthenticationType | null;

		/** Describes an Amazon Cognito user pool configuration. */
		userPoolConfig?: UpdateGraphqlApiPostBodyUserPoolConfig;

		/** Describes an OpenID Connect (OIDC) configuration. */
		openIDConnectConfig?: UpdateGraphqlApiPostBodyOpenIDConnectConfig;

		/** A list of additional authentication providers for the <code>GraphqlApi</code> API. */
		additionalAuthenticationProviders?: Array<AdditionalAuthenticationProvider>;

		/** A flag indicating whether to use X-Ray tracing for the <code>GraphqlApi</code>. */
		xrayEnabled?: boolean | null;

		/** A <code>LambdaAuthorizerConfig</code> specifies how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a time. */
		lambdaAuthorizerConfig?: UpdateGraphqlApiPostBodyLambdaAuthorizerConfig;

		/** The Identity and Access Management service role ARN for a merged API. The AppSync service assumes this role on behalf of the Merged API to validate access to source APIs at runtime and to prompt the <code>AUTO_MERGE</code> to update the merged API endpoint with the source API changes automatically. */
		mergedApiExecutionRoleArn?: string | null;

		/** <p>The owner contact information for an API resource.</p> <p>This field accepts any string input with a length of 0 - 256 characters.</p> */
		ownerContact?: string | null;
	}
	export interface UpdateGraphqlApiPostBodyFormProperties {

		/**
		 * The new name for the <code>GraphqlApi</code> object.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The new authentication type for the <code>GraphqlApi</code> object. */
		authenticationType: FormControl<AuthenticationType | null | undefined>,

		/** A flag indicating whether to use X-Ray tracing for the <code>GraphqlApi</code>. */
		xrayEnabled: FormControl<boolean | null | undefined>,

		/** The Identity and Access Management service role ARN for a merged API. The AppSync service assumes this role on behalf of the Merged API to validate access to source APIs at runtime and to prompt the <code>AUTO_MERGE</code> to update the merged API endpoint with the source API changes automatically. */
		mergedApiExecutionRoleArn: FormControl<string | null | undefined>,

		/** <p>The owner contact information for an API resource.</p> <p>This field accepts any string input with a length of 0 - 256 characters.</p> */
		ownerContact: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGraphqlApiPostBodyFormGroup() {
		return new FormGroup<UpdateGraphqlApiPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authenticationType: new FormControl<AuthenticationType | null | undefined>(undefined),
			xrayEnabled: new FormControl<boolean | null | undefined>(undefined),
			mergedApiExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			ownerContact: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGraphqlApiPostBodyLogConfig {
		fieldLogLevel?: FieldLogLevel;
		cloudWatchLogsRoleArn?: string;
		excludeVerboseContent?: boolean | null;
	}
	export interface UpdateGraphqlApiPostBodyLogConfigFormProperties {
		fieldLogLevel: FormControl<FieldLogLevel | null | undefined>,
		cloudWatchLogsRoleArn: FormControl<string | null | undefined>,
		excludeVerboseContent: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateGraphqlApiPostBodyLogConfigFormGroup() {
		return new FormGroup<UpdateGraphqlApiPostBodyLogConfigFormProperties>({
			fieldLogLevel: new FormControl<FieldLogLevel | null | undefined>(undefined),
			cloudWatchLogsRoleArn: new FormControl<string | null | undefined>(undefined),
			excludeVerboseContent: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateGraphqlApiPostBodyUserPoolConfig {
		userPoolId?: string;
		awsRegion?: string;
		defaultAction?: DefaultAction;
		appIdClientRegex?: string;
	}
	export interface UpdateGraphqlApiPostBodyUserPoolConfigFormProperties {
		userPoolId: FormControl<string | null | undefined>,
		awsRegion: FormControl<string | null | undefined>,
		defaultAction: FormControl<DefaultAction | null | undefined>,
		appIdClientRegex: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGraphqlApiPostBodyUserPoolConfigFormGroup() {
		return new FormGroup<UpdateGraphqlApiPostBodyUserPoolConfigFormProperties>({
			userPoolId: new FormControl<string | null | undefined>(undefined),
			awsRegion: new FormControl<string | null | undefined>(undefined),
			defaultAction: new FormControl<DefaultAction | null | undefined>(undefined),
			appIdClientRegex: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGraphqlApiPostBodyOpenIDConnectConfig {
		issuer?: string;
		clientId?: string;
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

	export interface UpdateGraphqlApiPostBodyLambdaAuthorizerConfig {
		authorizerResultTtlInSeconds?: number | null;
		authorizerUri?: string;
		identityValidationExpression?: string;
	}
	export interface UpdateGraphqlApiPostBodyLambdaAuthorizerConfigFormProperties {
		authorizerResultTtlInSeconds: FormControl<number | null | undefined>,
		authorizerUri: FormControl<string | null | undefined>,
		identityValidationExpression: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGraphqlApiPostBodyLambdaAuthorizerConfigFormGroup() {
		return new FormGroup<UpdateGraphqlApiPostBodyLambdaAuthorizerConfigFormProperties>({
			authorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			authorizerUri: new FormControl<string | null | undefined>(undefined),
			identityValidationExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateResolverPostBody {

		/**
		 * The new data source name.
		 * Min length: 1
		 * Max length: 65536
		 */
		dataSourceName?: string | null;

		/**
		 * <p>The new request mapping template.</p> <p>A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL).</p> <p>VTL request mapping templates are optional when using an Lambda data source. For all other data sources, VTL request and response mapping templates are required.</p>
		 * Min length: 1
		 * Max length: 65536
		 */
		requestMappingTemplate?: string | null;

		/**
		 * The new response mapping template.
		 * Min length: 1
		 * Max length: 65536
		 */
		responseMappingTemplate?: string | null;

		/** <p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of <code>Function</code> objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.</p> </li> </ul> */
		kind?: ResolverKind | null;

		/** The pipeline configuration for a resolver of kind <code>PIPELINE</code>. */
		pipelineConfig?: UpdateResolverPostBodyPipelineConfig;

		/** <p>Describes a Sync configuration for a resolver.</p> <p>Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.</p> */
		syncConfig?: UpdateResolverPostBodySyncConfig;

		/** The caching configuration for a resolver that has caching activated. */
		cachingConfig?: UpdateResolverPostBodyCachingConfig;

		/**
		 * The maximum batching size for a resolver.
		 * Minimum: 0
		 * Maximum: 2000
		 */
		maxBatchSize?: number | null;

		/** Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified. */
		runtime?: UpdateResolverPostBodyRuntime;

		/**
		 * The <code>resolver</code> code that contains the request and response functions. When code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be <code>APPSYNC_JS</code>.
		 * Min length: 1
		 * Max length: 32768
		 */
		code?: string | null;
	}
	export interface UpdateResolverPostBodyFormProperties {

		/**
		 * The new data source name.
		 * Min length: 1
		 * Max length: 65536
		 */
		dataSourceName: FormControl<string | null | undefined>,

		/**
		 * <p>The new request mapping template.</p> <p>A resolver uses a request mapping template to convert a GraphQL expression into a format that a data source can understand. Mapping templates are written in Apache Velocity Template Language (VTL).</p> <p>VTL request mapping templates are optional when using an Lambda data source. For all other data sources, VTL request and response mapping templates are required.</p>
		 * Min length: 1
		 * Max length: 65536
		 */
		requestMappingTemplate: FormControl<string | null | undefined>,

		/**
		 * The new response mapping template.
		 * Min length: 1
		 * Max length: 65536
		 */
		responseMappingTemplate: FormControl<string | null | undefined>,

		/** <p>The resolver type.</p> <ul> <li> <p> <b>UNIT</b>: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.</p> </li> <li> <p> <b>PIPELINE</b>: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of <code>Function</code> objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.</p> </li> </ul> */
		kind: FormControl<ResolverKind | null | undefined>,

		/**
		 * The maximum batching size for a resolver.
		 * Minimum: 0
		 * Maximum: 2000
		 */
		maxBatchSize: FormControl<number | null | undefined>,

		/**
		 * The <code>resolver</code> code that contains the request and response functions. When code is used, the <code>runtime</code> is required. The <code>runtime</code> value must be <code>APPSYNC_JS</code>.
		 * Min length: 1
		 * Max length: 32768
		 */
		code: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResolverPostBodyFormGroup() {
		return new FormGroup<UpdateResolverPostBodyFormProperties>({
			dataSourceName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('[_A-Za-z][_0-9A-Za-z]*')]),
			requestMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('^.*$')]),
			responseMappingTemplate: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536), Validators.pattern('^.*$')]),
			kind: new FormControl<ResolverKind | null | undefined>(undefined),
			maxBatchSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(2000)]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32768)]),
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
		conflictHandler?: ConflictHandlerType;
		conflictDetection?: ConflictDetectionType;
		lambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
	}
	export interface UpdateResolverPostBodySyncConfigFormProperties {
		conflictHandler: FormControl<ConflictHandlerType | null | undefined>,
		conflictDetection: FormControl<ConflictDetectionType | null | undefined>,
	}
	export function CreateUpdateResolverPostBodySyncConfigFormGroup() {
		return new FormGroup<UpdateResolverPostBodySyncConfigFormProperties>({
			conflictHandler: new FormControl<ConflictHandlerType | null | undefined>(undefined),
			conflictDetection: new FormControl<ConflictDetectionType | null | undefined>(undefined),
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

	export interface UpdateResolverPostBodyRuntime {
		name?: RuntimeName;
		runtimeVersion?: string;
	}
	export interface UpdateResolverPostBodyRuntimeFormProperties {
		name: FormControl<RuntimeName | null | undefined>,
		runtimeVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResolverPostBodyRuntimeFormGroup() {
		return new FormGroup<UpdateResolverPostBodyRuntimeFormProperties>({
			name: new FormControl<RuntimeName | null | undefined>(undefined),
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTypePostBody {

		/** The new definition. */
		definition?: string | null;

		/**
		 * The new type format: SDL or JSON.
		 * Required
		 */
		format: TypeDefinitionFormat;
	}
	export interface UpdateTypePostBodyFormProperties {

		/** The new definition. */
		definition: FormControl<string | null | undefined>,

		/**
		 * The new type format: SDL or JSON.
		 * Required
		 */
		format: FormControl<TypeDefinitionFormat | null | undefined>,
	}
	export function CreateUpdateTypePostBodyFormGroup() {
		return new FormGroup<UpdateTypePostBodyFormProperties>({
			definition: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<TypeDefinitionFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSourceApiAssociationPostBody {

		/** The description field. */
		description?: string | null;

		/** Describes properties used to specify configurations related to a source API. */
		sourceApiAssociationConfig?: UpdateSourceApiAssociationPostBodySourceApiAssociationConfig;
	}
	export interface UpdateSourceApiAssociationPostBodyFormProperties {

		/** The description field. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSourceApiAssociationPostBodyFormGroup() {
		return new FormGroup<UpdateSourceApiAssociationPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSourceApiAssociationPostBodySourceApiAssociationConfig {
		mergeType?: MergeType;
	}
	export interface UpdateSourceApiAssociationPostBodySourceApiAssociationConfigFormProperties {
		mergeType: FormControl<MergeType | null | undefined>,
	}
	export function CreateUpdateSourceApiAssociationPostBodySourceApiAssociationConfigFormGroup() {
		return new FormGroup<UpdateSourceApiAssociationPostBodySourceApiAssociationConfigFormProperties>({
			mergeType: new FormControl<MergeType | null | undefined>(undefined),
		});

	}

	export interface EvaluateCodePostBody {

		/**
		 * Describes a runtime used by an Amazon Web Services AppSync pipeline resolver or Amazon Web Services AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
		 * Required
		 */
		runtime: EvaluateCodePostBodyRuntime;

		/**
		 * The code definition to be evaluated. Note that <code>code</code> and <code>runtime</code> are both required for this action. The <code>runtime</code> value must be <code>APPSYNC_JS</code>.
		 * Required
		 * Min length: 1
		 * Max length: 32768
		 */
		code: string;

		/**
		 * The map that holds all of the contextual information for your resolver invocation. A <code>context</code> is required for this action.
		 * Required
		 * Min length: 2
		 * Max length: 28000
		 */
		context: string;

		/** The function within the code to be evaluated. If provided, the valid values are <code>request</code> and <code>response</code>. */
		function?: string | null;
	}
	export interface EvaluateCodePostBodyFormProperties {

		/**
		 * The code definition to be evaluated. Note that <code>code</code> and <code>runtime</code> are both required for this action. The <code>runtime</code> value must be <code>APPSYNC_JS</code>.
		 * Required
		 * Min length: 1
		 * Max length: 32768
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * The map that holds all of the contextual information for your resolver invocation. A <code>context</code> is required for this action.
		 * Required
		 * Min length: 2
		 * Max length: 28000
		 */
		context: FormControl<string | null | undefined>,

		/** The function within the code to be evaluated. If provided, the valid values are <code>request</code> and <code>response</code>. */
		function: FormControl<string | null | undefined>,
	}
	export function CreateEvaluateCodePostBodyFormGroup() {
		return new FormGroup<EvaluateCodePostBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32768)]),
			context: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(28000), Validators.pattern('^[\s\S]*$')]),
			function: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EvaluateCodePostBodyRuntime {
		name?: RuntimeName;
		runtimeVersion?: string;
	}
	export interface EvaluateCodePostBodyRuntimeFormProperties {
		name: FormControl<RuntimeName | null | undefined>,
		runtimeVersion: FormControl<string | null | undefined>,
	}
	export function CreateEvaluateCodePostBodyRuntimeFormGroup() {
		return new FormGroup<EvaluateCodePostBodyRuntimeFormProperties>({
			name: new FormControl<RuntimeName | null | undefined>(undefined),
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EvaluateMappingTemplatePostBody {

		/**
		 * The mapping template; this can be a request or response template. A <code>template</code> is required for this action.
		 * Required
		 * Min length: 2
		 * Max length: 65536
		 */
		template: string;

		/**
		 * The map that holds all of the contextual information for your resolver invocation. A <code>context</code> is required for this action.
		 * Required
		 * Min length: 2
		 * Max length: 28000
		 */
		context: string;
	}
	export interface EvaluateMappingTemplatePostBodyFormProperties {

		/**
		 * The mapping template; this can be a request or response template. A <code>template</code> is required for this action.
		 * Required
		 * Min length: 2
		 * Max length: 65536
		 */
		template: FormControl<string | null | undefined>,

		/**
		 * The map that holds all of the contextual information for your resolver invocation. A <code>context</code> is required for this action.
		 * Required
		 * Min length: 2
		 * Max length: 28000
		 */
		context: FormControl<string | null | undefined>,
	}
	export function CreateEvaluateMappingTemplatePostBodyFormGroup() {
		return new FormGroup<EvaluateMappingTemplatePostBodyFormProperties>({
			template: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(65536), Validators.pattern('^[\s\S]*$')]),
			context: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(28000), Validators.pattern('^[\s\S]*$')]),
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
		 * <p>TTL in seconds for cache entries.</p> <p>Valid values are 1–3,600 seconds.</p>
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ttl: number;

		/**
		 * <p>Caching behavior.</p> <ul> <li> <p> <b>FULL_REQUEST_CACHING</b>: All requests are fully cached.</p> </li> <li> <p> <b>PER_RESOLVER_CACHING</b>: Individual resolvers that you specify are cached.</p> </li> </ul>
		 * Required
		 */
		apiCachingBehavior: ApiCachingBehavior;

		/**
		 * <p>The cache instance type. Valid values are </p> <ul> <li> <p> <code>SMALL</code> </p> </li> <li> <p> <code>MEDIUM</code> </p> </li> <li> <p> <code>LARGE</code> </p> </li> <li> <p> <code>XLARGE</code> </p> </li> <li> <p> <code>LARGE_2X</code> </p> </li> <li> <p> <code>LARGE_4X</code> </p> </li> <li> <p> <code>LARGE_8X</code> (not available in all regions)</p> </li> <li> <p> <code>LARGE_12X</code> </p> </li> </ul> <p>Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used.</p> <p>The following legacy instance types are available, but their use is discouraged:</p> <ul> <li> <p> <b>T2_SMALL</b>: A t2.small instance type.</p> </li> <li> <p> <b>T2_MEDIUM</b>: A t2.medium instance type.</p> </li> <li> <p> <b>R4_LARGE</b>: A r4.large instance type.</p> </li> <li> <p> <b>R4_XLARGE</b>: A r4.xlarge instance type.</p> </li> <li> <p> <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p> </li> <li> <p> <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p> </li> <li> <p> <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p> </li> </ul>
		 * Required
		 */
		type: ApiCacheType;
	}
	export interface UpdateApiCachePostBodyFormProperties {

		/**
		 * <p>TTL in seconds for cache entries.</p> <p>Valid values are 1–3,600 seconds.</p>
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ttl: FormControl<number | null | undefined>,

		/**
		 * <p>Caching behavior.</p> <ul> <li> <p> <b>FULL_REQUEST_CACHING</b>: All requests are fully cached.</p> </li> <li> <p> <b>PER_RESOLVER_CACHING</b>: Individual resolvers that you specify are cached.</p> </li> </ul>
		 * Required
		 */
		apiCachingBehavior: FormControl<ApiCachingBehavior | null | undefined>,

		/**
		 * <p>The cache instance type. Valid values are </p> <ul> <li> <p> <code>SMALL</code> </p> </li> <li> <p> <code>MEDIUM</code> </p> </li> <li> <p> <code>LARGE</code> </p> </li> <li> <p> <code>XLARGE</code> </p> </li> <li> <p> <code>LARGE_2X</code> </p> </li> <li> <p> <code>LARGE_4X</code> </p> </li> <li> <p> <code>LARGE_8X</code> (not available in all regions)</p> </li> <li> <p> <code>LARGE_12X</code> </p> </li> </ul> <p>Historically, instance types were identified by an EC2-style value. As of July 2020, this is deprecated, and the generic identifiers above should be used.</p> <p>The following legacy instance types are available, but their use is discouraged:</p> <ul> <li> <p> <b>T2_SMALL</b>: A t2.small instance type.</p> </li> <li> <p> <b>T2_MEDIUM</b>: A t2.medium instance type.</p> </li> <li> <p> <b>R4_LARGE</b>: A r4.large instance type.</p> </li> <li> <p> <b>R4_XLARGE</b>: A r4.xlarge instance type.</p> </li> <li> <p> <b>R4_2XLARGE</b>: A r4.2xlarge instance type.</p> </li> <li> <p> <b>R4_4XLARGE</b>: A r4.4xlarge instance type.</p> </li> <li> <p> <b>R4_8XLARGE</b>: A r4.8xlarge instance type.</p> </li> </ul>
		 * Required
		 */
		type: FormControl<ApiCacheType | null | undefined>,
	}
	export function CreateUpdateApiCachePostBodyFormGroup() {
		return new FormGroup<UpdateApiCachePostBodyFormProperties>({
			ttl: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			apiCachingBehavior: new FormControl<ApiCachingBehavior | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ApiCacheType | null | undefined>(undefined, [Validators.required]),
		});

	}

}

