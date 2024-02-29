import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A resource that can be distributed to callers for executing Method resources that require an API key. API keys can be mapped to any Stage on any RestApi, which indicates that the callers with the API key can make requests to that stage. */
	export interface ApiKey {
		id?: string;
		value?: string;
		name?: string;
		customerId?: string;
		description?: string;
		enabled?: boolean | null;
		createdDate?: Date;
		lastUpdatedDate?: Date;
		stageKeys?: Array<string>;
		tags?: MapOfStringToString;
	}

	/** A resource that can be distributed to callers for executing Method resources that require an API key. API keys can be mapped to any Stage on any RestApi, which indicates that the callers with the API key can make requests to that stage. */
	export interface ApiKeyFormProperties {
		id: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		customerId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,
		lastUpdatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateApiKeyFormGroup() {
		return new FormGroup<ApiKeyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
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


	/** A reference to a unique stage identified in the format <code>{restApiId}/{stage}</code>. */
	export interface StageKey {
		restApiId?: string;
		stageName?: string;
	}

	/** A reference to a unique stage identified in the format <code>{restApiId}/{stage}</code>. */
	export interface StageKeyFormProperties {
		restApiId: FormControl<string | null | undefined>,
		stageName: FormControl<string | null | undefined>,
	}
	export function CreateStageKeyFormGroup() {
		return new FormGroup<StageKeyFormProperties>({
			restApiId: new FormControl<string | null | undefined>(undefined),
			stageName: new FormControl<string | null | undefined>(undefined),
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}


	/** Represents an authorization layer for methods. If enabled on a method, API Gateway will activate the authorizer when a client calls the method. */
	export interface Authorizer {
		id?: string;
		name?: string;
		type?: AuthorizerType;
		providerARNs?: Array<string>;
		authType?: string;
		authorizerUri?: string;
		authorizerCredentials?: string;
		identitySource?: string;
		identityValidationExpression?: string;
		authorizerResultTtlInSeconds?: number | null;
	}

	/** Represents an authorization layer for methods. If enabled on a method, API Gateway will activate the authorizer when a client calls the method. */
	export interface AuthorizerFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<AuthorizerType | null | undefined>,
		authType: FormControl<string | null | undefined>,
		authorizerUri: FormControl<string | null | undefined>,
		authorizerCredentials: FormControl<string | null | undefined>,
		identitySource: FormControl<string | null | undefined>,
		identityValidationExpression: FormControl<string | null | undefined>,
		authorizerResultTtlInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateAuthorizerFormGroup() {
		return new FormGroup<AuthorizerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AuthorizerType | null | undefined>(undefined),
			authType: new FormControl<string | null | undefined>(undefined),
			authorizerUri: new FormControl<string | null | undefined>(undefined),
			authorizerCredentials: new FormControl<string | null | undefined>(undefined),
			identitySource: new FormControl<string | null | undefined>(undefined),
			identityValidationExpression: new FormControl<string | null | undefined>(undefined),
			authorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool. */
	export enum AuthorizerType { TOKEN = 'TOKEN', REQUEST = 'REQUEST', COGNITO_USER_POOLS = 'COGNITO_USER_POOLS' }


	/** Represents the base path that callers of the API must provide as part of the URL after the domain name. */
	export interface BasePathMapping {
		basePath?: string;
		restApiId?: string;
		stage?: string;
	}

	/** Represents the base path that callers of the API must provide as part of the URL after the domain name. */
	export interface BasePathMappingFormProperties {
		basePath: FormControl<string | null | undefined>,
		restApiId: FormControl<string | null | undefined>,
		stage: FormControl<string | null | undefined>,
	}
	export function CreateBasePathMappingFormGroup() {
		return new FormGroup<BasePathMappingFormProperties>({
			basePath: new FormControl<string | null | undefined>(undefined),
			restApiId: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An immutable representation of a RestApi resource that can be called by users using Stages. A deployment must be associated with a Stage for it to be callable over the Internet. */
	export interface Deployment {
		id?: string;
		description?: string;
		createdDate?: Date;
		apiSummary?: PathToMapOfMethodSnapshot;
	}

	/** An immutable representation of a RestApi resource that can be called by users using Stages. A deployment must be associated with a Stage for it to be callable over the Internet. */
	export interface DeploymentFormProperties {
		id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,
	}
	export function CreateDeploymentFormGroup() {
		return new FormGroup<DeploymentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PathToMapOfMethodSnapshot {
	}
	export interface PathToMapOfMethodSnapshotFormProperties {
	}
	export function CreatePathToMapOfMethodSnapshotFormGroup() {
		return new FormGroup<PathToMapOfMethodSnapshotFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}


	/** A documentation part for a targeted API entity. */
	export interface DocumentationPart {
		id?: string;
		location?: DocumentationPartLocation;

		/** A content map of API-specific key-value pairs describing the targeted API entity. The map must be encoded as a JSON string, e.g., <code>"{ \"description\": \"The API does ...\" }"</code>. Only OpenAPI-compliant documentation-related fields from the properties map are exported and, hence, published as part of the API entity definitions, while the original documentation parts are exported in a OpenAPI extension of <code>x-amazon-apigateway-documentation</code>. */
		properties?: any;
	}

	/** A documentation part for a targeted API entity. */
	export interface DocumentationPartFormProperties {
		id: FormControl<string | null | undefined>,

		/** A content map of API-specific key-value pairs describing the targeted API entity. The map must be encoded as a JSON string, e.g., <code>"{ \"description\": \"The API does ...\" }"</code>. Only OpenAPI-compliant documentation-related fields from the properties map are exported and, hence, published as part of the API entity definitions, while the original documentation parts are exported in a OpenAPI extension of <code>x-amazon-apigateway-documentation</code>. */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateDocumentationPartFormGroup() {
		return new FormGroup<DocumentationPartFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Specifies the target API entity to which the documentation applies. */
	export interface DocumentationPartLocation {

		/** Required */
		type: DocumentationPartType;
		path?: string;
		method?: string;
		statusCode?: string;
		name?: string;
	}

	/** Specifies the target API entity to which the documentation applies. */
	export interface DocumentationPartLocationFormProperties {

		/** Required */
		type: FormControl<DocumentationPartType | null | undefined>,
		path: FormControl<string | null | undefined>,
		method: FormControl<string | null | undefined>,
		statusCode: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateDocumentationPartLocationFormGroup() {
		return new FormGroup<DocumentationPartLocationFormProperties>({
			type: new FormControl<DocumentationPartType | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DocumentationPartType { API = 'API', AUTHORIZER = 'AUTHORIZER', MODEL = 'MODEL', RESOURCE = 'RESOURCE', METHOD = 'METHOD', PATH_PARAMETER = 'PATH_PARAMETER', QUERY_PARAMETER = 'QUERY_PARAMETER', REQUEST_HEADER = 'REQUEST_HEADER', REQUEST_BODY = 'REQUEST_BODY', RESPONSE = 'RESPONSE', RESPONSE_HEADER = 'RESPONSE_HEADER', RESPONSE_BODY = 'RESPONSE_BODY' }


	/** A snapshot of the documentation of an API. */
	export interface DocumentationVersion {
		version?: string;
		createdDate?: Date;
		description?: string;
	}

	/** A snapshot of the documentation of an API. */
	export interface DocumentationVersionFormProperties {
		version: FormControl<string | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateDocumentationVersionFormGroup() {
		return new FormGroup<DocumentationVersionFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a custom domain name as a user-friendly host name of an API (RestApi). */
	export interface DomainName {
		domainName?: string;
		certificateName?: string;
		certificateArn?: string;
		certificateUploadDate?: Date;
		regionalDomainName?: string;
		regionalHostedZoneId?: string;
		regionalCertificateName?: string;
		regionalCertificateArn?: string;
		distributionDomainName?: string;
		distributionHostedZoneId?: string;
		endpointConfiguration?: EndpointConfiguration;
		domainNameStatus?: DomainNameStatus;
		domainNameStatusMessage?: string;
		securityPolicy?: SecurityPolicy;
		tags?: MapOfStringToString;
		mutualTlsAuthentication?: MutualTlsAuthentication;
		ownershipVerificationCertificateArn?: string;
	}

	/** Represents a custom domain name as a user-friendly host name of an API (RestApi). */
	export interface DomainNameFormProperties {
		domainName: FormControl<string | null | undefined>,
		certificateName: FormControl<string | null | undefined>,
		certificateArn: FormControl<string | null | undefined>,
		certificateUploadDate: FormControl<Date | null | undefined>,
		regionalDomainName: FormControl<string | null | undefined>,
		regionalHostedZoneId: FormControl<string | null | undefined>,
		regionalCertificateName: FormControl<string | null | undefined>,
		regionalCertificateArn: FormControl<string | null | undefined>,
		distributionDomainName: FormControl<string | null | undefined>,
		distributionHostedZoneId: FormControl<string | null | undefined>,
		domainNameStatus: FormControl<DomainNameStatus | null | undefined>,
		domainNameStatusMessage: FormControl<string | null | undefined>,
		securityPolicy: FormControl<SecurityPolicy | null | undefined>,
		ownershipVerificationCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateDomainNameFormGroup() {
		return new FormGroup<DomainNameFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			certificateName: new FormControl<string | null | undefined>(undefined),
			certificateArn: new FormControl<string | null | undefined>(undefined),
			certificateUploadDate: new FormControl<Date | null | undefined>(undefined),
			regionalDomainName: new FormControl<string | null | undefined>(undefined),
			regionalHostedZoneId: new FormControl<string | null | undefined>(undefined),
			regionalCertificateName: new FormControl<string | null | undefined>(undefined),
			regionalCertificateArn: new FormControl<string | null | undefined>(undefined),
			distributionDomainName: new FormControl<string | null | undefined>(undefined),
			distributionHostedZoneId: new FormControl<string | null | undefined>(undefined),
			domainNameStatus: new FormControl<DomainNameStatus | null | undefined>(undefined),
			domainNameStatusMessage: new FormControl<string | null | undefined>(undefined),
			securityPolicy: new FormControl<SecurityPolicy | null | undefined>(undefined),
			ownershipVerificationCertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has.  */
	export interface EndpointConfiguration {
		types?: Array<EndpointType>;
		vpcEndpointIds?: Array<string>;
	}

	/** The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has.  */
	export interface EndpointConfigurationFormProperties {
	}
	export function CreateEndpointConfigurationFormGroup() {
		return new FormGroup<EndpointConfigurationFormProperties>({
		});

	}


	/** The endpoint type. The valid values are <code>EDGE</code> for edge-optimized API setup, most suitable for mobile applications; <code>REGIONAL</code> for regional API endpoint setup, most suitable for calling from AWS Region; and <code>PRIVATE</code> for private APIs. */
	export enum EndpointType { REGIONAL = 'REGIONAL', EDGE = 'EDGE', PRIVATE = 'PRIVATE' }

	export enum DomainNameStatus { AVAILABLE = 'AVAILABLE', UPDATING = 'UPDATING', PENDING = 'PENDING', PENDING_CERTIFICATE_REIMPORT = 'PENDING_CERTIFICATE_REIMPORT', PENDING_OWNERSHIP_VERIFICATION = 'PENDING_OWNERSHIP_VERIFICATION' }

	export enum SecurityPolicy { TLS_1_0 = 'TLS_1_0', TLS_1_2 = 'TLS_1_2' }


	/** The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API. */
	export interface MutualTlsAuthentication {
		truststoreUri?: string;
		truststoreVersion?: string;
		truststoreWarnings?: Array<string>;
	}

	/** The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API. */
	export interface MutualTlsAuthenticationFormProperties {
		truststoreUri: FormControl<string | null | undefined>,
		truststoreVersion: FormControl<string | null | undefined>,
	}
	export function CreateMutualTlsAuthenticationFormGroup() {
		return new FormGroup<MutualTlsAuthenticationFormProperties>({
			truststoreUri: new FormControl<string | null | undefined>(undefined),
			truststoreVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the data structure of a method's request or response payload. */
	export interface Model {
		id?: string;
		name?: string;
		description?: string;
		schema?: string;
		contentType?: string;
	}

	/** Represents the data structure of a method's request or response payload. */
	export interface ModelFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		schema: FormControl<string | null | undefined>,
		contentType: FormControl<string | null | undefined>,
	}
	export function CreateModelFormGroup() {
		return new FormGroup<ModelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of validation rules for incoming Method requests. */
	export interface RequestValidator {
		id?: string;
		name?: string;
		validateRequestBody?: boolean | null;
		validateRequestParameters?: boolean | null;
	}

	/** A set of validation rules for incoming Method requests. */
	export interface RequestValidatorFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		validateRequestBody: FormControl<boolean | null | undefined>,
		validateRequestParameters: FormControl<boolean | null | undefined>,
	}
	export function CreateRequestValidatorFormGroup() {
		return new FormGroup<RequestValidatorFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			validateRequestBody: new FormControl<boolean | null | undefined>(undefined),
			validateRequestParameters: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents an API resource. */
	export interface Resource {
		id?: string;
		parentId?: string;
		pathPart?: string;
		path?: string;
		resourceMethods?: MapOfMethod;
	}

	/** Represents an API resource. */
	export interface ResourceFormProperties {
		id: FormControl<string | null | undefined>,
		parentId: FormControl<string | null | undefined>,
		pathPart: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			parentId: new FormControl<string | null | undefined>(undefined),
			pathPart: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MapOfMethod {
	}
	export interface MapOfMethodFormProperties {
	}
	export function CreateMapOfMethodFormGroup() {
		return new FormGroup<MapOfMethodFormProperties>({
		});

	}


	/** Represents a REST API. */
	export interface RestApi {
		id?: string;
		name?: string;
		description?: string;
		createdDate?: Date;
		version?: string;
		warnings?: Array<string>;
		binaryMediaTypes?: Array<string>;
		minimumCompressionSize?: number | null;
		apiKeySource?: ApiKeySourceType;
		endpointConfiguration?: EndpointConfiguration;
		policy?: string;
		tags?: MapOfStringToString;
		disableExecuteApiEndpoint?: boolean | null;
	}

	/** Represents a REST API. */
	export interface RestApiFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,
		version: FormControl<string | null | undefined>,
		minimumCompressionSize: FormControl<number | null | undefined>,
		apiKeySource: FormControl<ApiKeySourceType | null | undefined>,
		policy: FormControl<string | null | undefined>,
		disableExecuteApiEndpoint: FormControl<boolean | null | undefined>,
	}
	export function CreateRestApiFormGroup() {
		return new FormGroup<RestApiFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			minimumCompressionSize: new FormControl<number | null | undefined>(undefined),
			apiKeySource: new FormControl<ApiKeySourceType | null | undefined>(undefined),
			policy: new FormControl<string | null | undefined>(undefined),
			disableExecuteApiEndpoint: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ApiKeySourceType { HEADER = 'HEADER', AUTHORIZER = 'AUTHORIZER' }


	/** Represents a unique identifier for a version of a deployed RestApi that is callable by users. */
	export interface Stage {
		deploymentId?: string;
		clientCertificateId?: string;
		stageName?: string;
		description?: string;
		cacheClusterEnabled?: boolean | null;
		cacheClusterSize?: CacheClusterSize;
		cacheClusterStatus?: CacheClusterStatus;
		methodSettings?: MapOfMethodSettings;
		variables?: MapOfStringToString;
		documentationVersion?: string;
		accessLogSettings?: AccessLogSettings;
		canarySettings?: CanarySettings;
		tracingEnabled?: boolean | null;
		webAclArn?: string;
		tags?: MapOfStringToString;
		createdDate?: Date;
		lastUpdatedDate?: Date;
	}

	/** Represents a unique identifier for a version of a deployed RestApi that is callable by users. */
	export interface StageFormProperties {
		deploymentId: FormControl<string | null | undefined>,
		clientCertificateId: FormControl<string | null | undefined>,
		stageName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		cacheClusterEnabled: FormControl<boolean | null | undefined>,
		cacheClusterSize: FormControl<CacheClusterSize | null | undefined>,
		cacheClusterStatus: FormControl<CacheClusterStatus | null | undefined>,
		documentationVersion: FormControl<string | null | undefined>,
		tracingEnabled: FormControl<boolean | null | undefined>,
		webAclArn: FormControl<string | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,
		lastUpdatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateStageFormGroup() {
		return new FormGroup<StageFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined),
			clientCertificateId: new FormControl<string | null | undefined>(undefined),
			stageName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			cacheClusterEnabled: new FormControl<boolean | null | undefined>(undefined),
			cacheClusterSize: new FormControl<CacheClusterSize | null | undefined>(undefined),
			cacheClusterStatus: new FormControl<CacheClusterStatus | null | undefined>(undefined),
			documentationVersion: new FormControl<string | null | undefined>(undefined),
			tracingEnabled: new FormControl<boolean | null | undefined>(undefined),
			webAclArn: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Returns the size of the CacheCluster. */
	export enum CacheClusterSize { _0_5 = '0.5', _1_6 = '1.6', _6_1 = '6.1', _13_5 = '13.5', _28_4 = '28.4', _58_2 = '58.2', _118 = '118', _237 = '237' }


	/** Returns the status of the CacheCluster. */
	export enum CacheClusterStatus { CREATE_IN_PROGRESS = 'CREATE_IN_PROGRESS', AVAILABLE = 'AVAILABLE', DELETE_IN_PROGRESS = 'DELETE_IN_PROGRESS', NOT_AVAILABLE = 'NOT_AVAILABLE', FLUSH_IN_PROGRESS = 'FLUSH_IN_PROGRESS' }

	export interface MapOfMethodSettings {
	}
	export interface MapOfMethodSettingsFormProperties {
	}
	export function CreateMapOfMethodSettingsFormGroup() {
		return new FormGroup<MapOfMethodSettingsFormProperties>({
		});

	}


	/** Access log settings, including the access log format and access log destination ARN. */
	export interface AccessLogSettings {
		format?: string;
		destinationArn?: string;
	}

	/** Access log settings, including the access log format and access log destination ARN. */
	export interface AccessLogSettingsFormProperties {
		format: FormControl<string | null | undefined>,
		destinationArn: FormControl<string | null | undefined>,
	}
	export function CreateAccessLogSettingsFormGroup() {
		return new FormGroup<AccessLogSettingsFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
			destinationArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration settings of a canary deployment. */
	export interface CanarySettings {
		percentTraffic?: number | null;
		deploymentId?: string;
		stageVariableOverrides?: MapOfStringToString;
		useStageCache?: boolean | null;
	}

	/** Configuration settings of a canary deployment. */
	export interface CanarySettingsFormProperties {
		percentTraffic: FormControl<number | null | undefined>,
		deploymentId: FormControl<string | null | undefined>,
		useStageCache: FormControl<boolean | null | undefined>,
	}
	export function CreateCanarySettingsFormGroup() {
		return new FormGroup<CanarySettingsFormProperties>({
			percentTraffic: new FormControl<number | null | undefined>(undefined),
			deploymentId: new FormControl<string | null | undefined>(undefined),
			useStageCache: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a usage plan used to specify who can assess associated API stages. Optionally, target request rate and quota limits can be set. In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html">Amazon Web Services Budgets</a> to monitor costs and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF</a> to manage API requests. */
	export interface UsagePlan {
		id?: string;
		name?: string;
		description?: string;
		apiStages?: Array<ApiStage>;
		throttle?: ThrottleSettings;
		quota?: QuotaSettings;
		productCode?: string;
		tags?: MapOfStringToString;
	}

	/** Represents a usage plan used to specify who can assess associated API stages. Optionally, target request rate and quota limits can be set. In some cases clients can exceed the targets that you set. Don’t rely on usage plans to control costs. Consider using <a href="https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html">Amazon Web Services Budgets</a> to monitor costs and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF</a> to manage API requests. */
	export interface UsagePlanFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		productCode: FormControl<string | null | undefined>,
	}
	export function CreateUsagePlanFormGroup() {
		return new FormGroup<UsagePlanFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			productCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** API stage name of the associated API stage in a usage plan. */
	export interface ApiStage {
		apiId?: string;
		stage?: string;
		throttle?: MapOfApiStageThrottleSettings;
	}

	/** API stage name of the associated API stage in a usage plan. */
	export interface ApiStageFormProperties {
		apiId: FormControl<string | null | undefined>,
		stage: FormControl<string | null | undefined>,
	}
	export function CreateApiStageFormGroup() {
		return new FormGroup<ApiStageFormProperties>({
			apiId: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MapOfApiStageThrottleSettings {
	}
	export interface MapOfApiStageThrottleSettingsFormProperties {
	}
	export function CreateMapOfApiStageThrottleSettingsFormGroup() {
		return new FormGroup<MapOfApiStageThrottleSettingsFormProperties>({
		});

	}


	/**  The API request rate limits. */
	export interface ThrottleSettings {
		burstLimit?: number | null;
		rateLimit?: number | null;
	}

	/**  The API request rate limits. */
	export interface ThrottleSettingsFormProperties {
		burstLimit: FormControl<number | null | undefined>,
		rateLimit: FormControl<number | null | undefined>,
	}
	export function CreateThrottleSettingsFormGroup() {
		return new FormGroup<ThrottleSettingsFormProperties>({
			burstLimit: new FormControl<number | null | undefined>(undefined),
			rateLimit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Quotas configured for a usage plan. */
	export interface QuotaSettings {
		limit?: number | null;
		offset?: number | null;
		period?: QuotaPeriodType;
	}

	/** Quotas configured for a usage plan. */
	export interface QuotaSettingsFormProperties {
		limit: FormControl<number | null | undefined>,
		offset: FormControl<number | null | undefined>,
		period: FormControl<QuotaPeriodType | null | undefined>,
	}
	export function CreateQuotaSettingsFormGroup() {
		return new FormGroup<QuotaSettingsFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			period: new FormControl<QuotaPeriodType | null | undefined>(undefined),
		});

	}

	export enum QuotaPeriodType { DAY = 'DAY', WEEK = 'WEEK', MONTH = 'MONTH' }


	/** Represents a usage plan key to identify a plan customer. */
	export interface UsagePlanKey {
		id?: string;
		type?: string;
		value?: string;
		name?: string;
	}

	/** Represents a usage plan key to identify a plan customer. */
	export interface UsagePlanKeyFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUsagePlanKeyFormGroup() {
		return new FormGroup<UsagePlanKeyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An API Gateway VPC link for a RestApi to access resources in an Amazon Virtual Private Cloud (VPC). */
	export interface VpcLink {
		id?: string;
		name?: string;
		description?: string;
		targetArns?: Array<string>;
		status?: VpcLinkStatus;
		statusMessage?: string;
		tags?: MapOfStringToString;
	}

	/** An API Gateway VPC link for a RestApi to access resources in an Amazon Virtual Private Cloud (VPC). */
	export interface VpcLinkFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		status: FormControl<VpcLinkStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateVpcLinkFormGroup() {
		return new FormGroup<VpcLinkFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<VpcLinkStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VpcLinkStatus { AVAILABLE = 'AVAILABLE', PENDING = 'PENDING', DELETING = 'DELETING', FAILED = 'FAILED' }


	/** Represents a client certificate used to configure client-side SSL authentication while sending requests to the integration endpoint. */
	export interface ClientCertificate {
		clientCertificateId?: string;
		description?: string;
		pemEncodedCertificate?: string;
		createdDate?: Date;
		expirationDate?: Date;
		tags?: MapOfStringToString;
	}

	/** Represents a client certificate used to configure client-side SSL authentication while sending requests to the integration endpoint. */
	export interface ClientCertificateFormProperties {
		clientCertificateId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		pemEncodedCertificate: FormControl<string | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,
		expirationDate: FormControl<Date | null | undefined>,
	}
	export function CreateClientCertificateFormGroup() {
		return new FormGroup<ClientCertificateFormProperties>({
			clientCertificateId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			pemEncodedCertificate: new FormControl<string | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			expirationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents an AWS account that is associated with API Gateway. */
	export interface Account {
		cloudwatchRoleArn?: string;
		throttleSettings?: ThrottleSettings;
		features?: Array<string>;
		apiKeyVersion?: string;
	}

	/** Represents an AWS account that is associated with API Gateway. */
	export interface AccountFormProperties {
		cloudwatchRoleArn: FormControl<string | null | undefined>,
		apiKeyVersion: FormControl<string | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			cloudwatchRoleArn: new FormControl<string | null | undefined>(undefined),
			apiKeyVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a collection of API keys as represented by an ApiKeys resource. */
	export interface ApiKeys {
		warnings?: Array<string>;
		position?: string | null;
		items?: Array<ApiKey>;
	}

	/** Represents a collection of API keys as represented by an ApiKeys resource. */
	export interface ApiKeysFormProperties {
		position: FormControl<string | null | undefined>,
	}
	export function CreateApiKeysFormGroup() {
		return new FormGroup<ApiKeysFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a collection of Authorizer resources. */
	export interface Authorizers {
		position?: string | null;
		items?: Array<Authorizer>;
	}

	/** Represents a collection of Authorizer resources. */
	export interface AuthorizersFormProperties {
		position: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizersFormGroup() {
		return new FormGroup<AuthorizersFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a collection of BasePathMapping resources. */
	export interface BasePathMappings {
		position?: string | null;
		items?: Array<BasePathMapping>;
	}

	/** Represents a collection of BasePathMapping resources. */
	export interface BasePathMappingsFormProperties {
		position: FormControl<string | null | undefined>,
	}
	export function CreateBasePathMappingsFormGroup() {
		return new FormGroup<BasePathMappingsFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a collection of ClientCertificate resources. */
	export interface ClientCertificates {
		position?: string | null;
		items?: Array<ClientCertificate>;
	}

	/** Represents a collection of ClientCertificate resources. */
	export interface ClientCertificatesFormProperties {
		position: FormControl<string | null | undefined>,
	}
	export function CreateClientCertificatesFormGroup() {
		return new FormGroup<ClientCertificatesFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a collection resource that contains zero or more references to your existing deployments, and links that guide you on how to interact with your collection. The collection offers a paginated view of the contained deployments. */
	export interface Deployments {
		position?: string | null;
		items?: Array<Deployment>;
	}

	/** Represents a collection resource that contains zero or more references to your existing deployments, and links that guide you on how to interact with your collection. The collection offers a paginated view of the contained deployments. */
	export interface DeploymentsFormProperties {
		position: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentsFormGroup() {
		return new FormGroup<DeploymentsFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The collection of documentation parts of an API. */
	export interface DocumentationParts {
		position?: string | null;
		items?: Array<DocumentationPart>;
	}

	/** The collection of documentation parts of an API. */
	export interface DocumentationPartsFormProperties {
		position: FormControl<string | null | undefined>,
	}
	export function CreateDocumentationPartsFormGroup() {
		return new FormGroup<DocumentationPartsFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The collection of documentation snapshots of an API.  */
	export interface DocumentationVersions {
		position?: string | null;
		items?: Array<DocumentationVersion>;
	}

	/** The collection of documentation snapshots of an API.  */
	export interface DocumentationVersionsFormProperties {
		position: FormControl<string | null | undefined>,
	}
	export function CreateDocumentationVersionsFormGroup() {
		return new FormGroup<DocumentationVersionsFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a collection of DomainName resources. */
	export interface DomainNames {
		position?: string | null;
		items?: Array<DomainName>;
	}

	/** Represents a collection of DomainName resources. */
	export interface DomainNamesFormProperties {
		position: FormControl<string | null | undefined>,
	}
	export function CreateDomainNamesFormGroup() {
		return new FormGroup<DomainNamesFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The binary blob response to GetExport, which contains the generated SDK. */
	export interface ExportResponse {
		body?: string;
	}

	/** The binary blob response to GetExport, which contains the generated SDK. */
	export interface ExportResponseFormProperties {
		body: FormControl<string | null | undefined>,
	}
	export function CreateExportResponseFormGroup() {
		return new FormGroup<ExportResponseFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A gateway response of a given response type and status code, with optional response parameters and mapping templates. */
	export interface GatewayResponse {
		responseType?: GatewayResponseType;
		statusCode?: string;
		responseParameters?: MapOfStringToString;
		responseTemplates?: MapOfStringToString;
		defaultResponse?: boolean | null;
	}

	/** A gateway response of a given response type and status code, with optional response parameters and mapping templates. */
	export interface GatewayResponseFormProperties {
		responseType: FormControl<GatewayResponseType | null | undefined>,
		statusCode: FormControl<string | null | undefined>,
		defaultResponse: FormControl<boolean | null | undefined>,
	}
	export function CreateGatewayResponseFormGroup() {
		return new FormGroup<GatewayResponseFormProperties>({
			responseType: new FormControl<GatewayResponseType | null | undefined>(undefined),
			statusCode: new FormControl<string | null | undefined>(undefined),
			defaultResponse: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GatewayResponseType { DEFAULT_4XX = 'DEFAULT_4XX', DEFAULT_5XX = 'DEFAULT_5XX', RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND', UNAUTHORIZED = 'UNAUTHORIZED', INVALID_API_KEY = 'INVALID_API_KEY', ACCESS_DENIED = 'ACCESS_DENIED', AUTHORIZER_FAILURE = 'AUTHORIZER_FAILURE', AUTHORIZER_CONFIGURATION_ERROR = 'AUTHORIZER_CONFIGURATION_ERROR', INVALID_SIGNATURE = 'INVALID_SIGNATURE', EXPIRED_TOKEN = 'EXPIRED_TOKEN', MISSING_AUTHENTICATION_TOKEN = 'MISSING_AUTHENTICATION_TOKEN', INTEGRATION_FAILURE = 'INTEGRATION_FAILURE', INTEGRATION_TIMEOUT = 'INTEGRATION_TIMEOUT', API_CONFIGURATION_ERROR = 'API_CONFIGURATION_ERROR', UNSUPPORTED_MEDIA_TYPE = 'UNSUPPORTED_MEDIA_TYPE', BAD_REQUEST_PARAMETERS = 'BAD_REQUEST_PARAMETERS', BAD_REQUEST_BODY = 'BAD_REQUEST_BODY', REQUEST_TOO_LARGE = 'REQUEST_TOO_LARGE', THROTTLED = 'THROTTLED', QUOTA_EXCEEDED = 'QUOTA_EXCEEDED', WAF_FILTERED = 'WAF_FILTERED' }


	/** The collection of the GatewayResponse instances of a RestApi as a <code>responseType</code>-to-GatewayResponse object map of key-value pairs. As such, pagination is not supported for querying this collection. */
	export interface GatewayResponses {
		position?: string | null;
		items?: Array<GatewayResponse>;
	}

	/** The collection of the GatewayResponse instances of a RestApi as a <code>responseType</code>-to-GatewayResponse object map of key-value pairs. As such, pagination is not supported for querying this collection. */
	export interface GatewayResponsesFormProperties {
		position: FormControl<string | null | undefined>,
	}
	export function CreateGatewayResponsesFormGroup() {
		return new FormGroup<GatewayResponsesFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an HTTP, HTTP_PROXY, AWS, AWS_PROXY, or Mock integration. */
	export interface Integration {
		type?: IntegrationType;
		httpMethod?: string;
		uri?: string;
		connectionType?: ConnectionType;
		connectionId?: string;
		credentials?: string;
		requestParameters?: MapOfStringToString;
		requestTemplates?: MapOfStringToString;
		passthroughBehavior?: string;
		contentHandling?: ContentHandlingStrategy;
		timeoutInMillis?: number | null;
		cacheNamespace?: string;
		cacheKeyParameters?: Array<string>;
		integrationResponses?: MapOfIntegrationResponse;
		tlsConfig?: TlsConfig;
	}

	/** Represents an HTTP, HTTP_PROXY, AWS, AWS_PROXY, or Mock integration. */
	export interface IntegrationFormProperties {
		type: FormControl<IntegrationType | null | undefined>,
		httpMethod: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
		connectionType: FormControl<ConnectionType | null | undefined>,
		connectionId: FormControl<string | null | undefined>,
		credentials: FormControl<string | null | undefined>,
		passthroughBehavior: FormControl<string | null | undefined>,
		contentHandling: FormControl<ContentHandlingStrategy | null | undefined>,
		timeoutInMillis: FormControl<number | null | undefined>,
		cacheNamespace: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationFormGroup() {
		return new FormGroup<IntegrationFormProperties>({
			type: new FormControl<IntegrationType | null | undefined>(undefined),
			httpMethod: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			connectionType: new FormControl<ConnectionType | null | undefined>(undefined),
			connectionId: new FormControl<string | null | undefined>(undefined),
			credentials: new FormControl<string | null | undefined>(undefined),
			passthroughBehavior: new FormControl<string | null | undefined>(undefined),
			contentHandling: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
			timeoutInMillis: new FormControl<number | null | undefined>(undefined),
			cacheNamespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The integration type. The valid value is <code>HTTP</code> for integrating an API method with an HTTP backend; <code>AWS</code> with any AWS service endpoints; <code>MOCK</code> for testing without actually invoking the backend; <code>HTTP_PROXY</code> for integrating with the HTTP proxy integration; <code>AWS_PROXY</code> for integrating with the Lambda proxy integration.  */
	export enum IntegrationType { HTTP = 'HTTP', AWS = 'AWS', MOCK = 'MOCK', HTTP_PROXY = 'HTTP_PROXY', AWS_PROXY = 'AWS_PROXY' }

	export enum ConnectionType { INTERNET = 'INTERNET', VPC_LINK = 'VPC_LINK' }

	export enum ContentHandlingStrategy { CONVERT_TO_BINARY = 'CONVERT_TO_BINARY', CONVERT_TO_TEXT = 'CONVERT_TO_TEXT' }

	export interface MapOfIntegrationResponse {
	}
	export interface MapOfIntegrationResponseFormProperties {
	}
	export function CreateMapOfIntegrationResponseFormGroup() {
		return new FormGroup<MapOfIntegrationResponseFormProperties>({
		});

	}


	/** Specifies the TLS configuration for an integration. */
	export interface TlsConfig {
		insecureSkipVerification?: boolean | null;
	}

	/** Specifies the TLS configuration for an integration. */
	export interface TlsConfigFormProperties {
		insecureSkipVerification: FormControl<boolean | null | undefined>,
	}
	export function CreateTlsConfigFormGroup() {
		return new FormGroup<TlsConfigFormProperties>({
			insecureSkipVerification: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents an integration response. The status code must map to an existing MethodResponse, and parameters and templates can be used to transform the back-end response. */
	export interface IntegrationResponse {
		statusCode?: string;
		selectionPattern?: string;
		responseParameters?: MapOfStringToString;
		responseTemplates?: MapOfStringToString;
		contentHandling?: ContentHandlingStrategy;
	}

	/** Represents an integration response. The status code must map to an existing MethodResponse, and parameters and templates can be used to transform the back-end response. */
	export interface IntegrationResponseFormProperties {
		statusCode: FormControl<string | null | undefined>,
		selectionPattern: FormControl<string | null | undefined>,
		contentHandling: FormControl<ContentHandlingStrategy | null | undefined>,
	}
	export function CreateIntegrationResponseFormGroup() {
		return new FormGroup<IntegrationResponseFormProperties>({
			statusCode: new FormControl<string | null | undefined>(undefined),
			selectionPattern: new FormControl<string | null | undefined>(undefined),
			contentHandling: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
		});

	}


	/**  Represents a client-facing interface by which the client calls the API to access back-end resources. A Method resource is integrated with an Integration resource. Both consist of a request and one or more responses. The method request takes the client input that is passed to the back end through the integration request. A method response returns the output from the back end to the client through an integration response. A method request is embodied in a Method resource, whereas an integration request is embodied in an Integration resource. On the other hand, a method response is represented by a MethodResponse resource, whereas an integration response is represented by an IntegrationResponse resource.  */
	export interface Method {
		httpMethod?: string;
		authorizationType?: string;
		authorizerId?: string;
		apiKeyRequired?: boolean | null;
		requestValidatorId?: string;
		operationName?: string;
		requestParameters?: MapOfStringToBoolean;
		requestModels?: MapOfStringToString;
		methodResponses?: MapOfMethodResponse;
		methodIntegration?: Integration;
		authorizationScopes?: Array<string>;
	}

	/**  Represents a client-facing interface by which the client calls the API to access back-end resources. A Method resource is integrated with an Integration resource. Both consist of a request and one or more responses. The method request takes the client input that is passed to the back end through the integration request. A method response returns the output from the back end to the client through an integration response. A method request is embodied in a Method resource, whereas an integration request is embodied in an Integration resource. On the other hand, a method response is represented by a MethodResponse resource, whereas an integration response is represented by an IntegrationResponse resource.  */
	export interface MethodFormProperties {
		httpMethod: FormControl<string | null | undefined>,
		authorizationType: FormControl<string | null | undefined>,
		authorizerId: FormControl<string | null | undefined>,
		apiKeyRequired: FormControl<boolean | null | undefined>,
		requestValidatorId: FormControl<string | null | undefined>,
		operationName: FormControl<string | null | undefined>,
	}
	export function CreateMethodFormGroup() {
		return new FormGroup<MethodFormProperties>({
			httpMethod: new FormControl<string | null | undefined>(undefined),
			authorizationType: new FormControl<string | null | undefined>(undefined),
			authorizerId: new FormControl<string | null | undefined>(undefined),
			apiKeyRequired: new FormControl<boolean | null | undefined>(undefined),
			requestValidatorId: new FormControl<string | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MapOfStringToBoolean {
	}
	export interface MapOfStringToBooleanFormProperties {
	}
	export function CreateMapOfStringToBooleanFormGroup() {
		return new FormGroup<MapOfStringToBooleanFormProperties>({
		});

	}

	export interface MapOfMethodResponse {
	}
	export interface MapOfMethodResponseFormProperties {
	}
	export function CreateMapOfMethodResponseFormGroup() {
		return new FormGroup<MapOfMethodResponseFormProperties>({
		});

	}


	/** Represents a method response of a given HTTP status code returned to the client. The method response is passed from the back end through the associated integration response that can be transformed using a mapping template.  */
	export interface MethodResponse {
		statusCode?: string;
		responseParameters?: MapOfStringToBoolean;
		responseModels?: MapOfStringToString;
	}

	/** Represents a method response of a given HTTP status code returned to the client. The method response is passed from the back end through the associated integration response that can be transformed using a mapping template.  */
	export interface MethodResponseFormProperties {
		statusCode: FormControl<string | null | undefined>,
	}
	export function CreateMethodResponseFormGroup() {
		return new FormGroup<MethodResponseFormProperties>({
			statusCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a mapping template used to transform a payload. */
	export interface Template {
		value?: string;
	}

	/** Represents a mapping template used to transform a payload. */
	export interface TemplateFormProperties {
		value: FormControl<string | null | undefined>,
	}
	export function CreateTemplateFormGroup() {
		return new FormGroup<TemplateFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a collection of Model resources. */
	export interface Models {
		position?: string | null;
		items?: Array<Model>;
	}

	/** Represents a collection of Model resources. */
	export interface ModelsFormProperties {
		position: FormControl<string | null | undefined>,
	}
	export function CreateModelsFormGroup() {
		return new FormGroup<ModelsFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of RequestValidator resources of a given RestApi. */
	export interface RequestValidators {
		position?: string | null;
		items?: Array<RequestValidator>;
	}

	/** A collection of RequestValidator resources of a given RestApi. */
	export interface RequestValidatorsFormProperties {
		position: FormControl<string | null | undefined>,
	}
	export function CreateRequestValidatorsFormGroup() {
		return new FormGroup<RequestValidatorsFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a collection of Resource resources. */
	export interface Resources {
		position?: string | null;
		items?: Array<Resource>;
	}

	/** Represents a collection of Resource resources. */
	export interface ResourcesFormProperties {
		position: FormControl<string | null | undefined>,
	}
	export function CreateResourcesFormGroup() {
		return new FormGroup<ResourcesFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains references to your APIs and links that guide you in how to interact with your collection. A collection offers a paginated view of your APIs. */
	export interface RestApis {
		position?: string | null;
		items?: Array<RestApi>;
	}

	/** Contains references to your APIs and links that guide you in how to interact with your collection. A collection offers a paginated view of your APIs. */
	export interface RestApisFormProperties {
		position: FormControl<string | null | undefined>,
	}
	export function CreateRestApisFormGroup() {
		return new FormGroup<RestApisFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The binary blob response to GetSdk, which contains the generated SDK. */
	export interface SdkResponse {
		body?: string;
	}

	/** The binary blob response to GetSdk, which contains the generated SDK. */
	export interface SdkResponseFormProperties {
		body: FormControl<string | null | undefined>,
	}
	export function CreateSdkResponseFormGroup() {
		return new FormGroup<SdkResponseFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A type of SDK that API Gateway can generate. */
	export interface SdkType {
		id?: string;
		friendlyName?: string;
		description?: string;
		configurationProperties?: Array<SdkConfigurationProperty>;
	}

	/** A type of SDK that API Gateway can generate. */
	export interface SdkTypeFormProperties {
		id: FormControl<string | null | undefined>,
		friendlyName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateSdkTypeFormGroup() {
		return new FormGroup<SdkTypeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A configuration property of an SDK type. */
	export interface SdkConfigurationProperty {
		name?: string;
		friendlyName?: string;
		description?: string;
		required?: boolean | null;
		defaultValue?: string;
	}

	/** A configuration property of an SDK type. */
	export interface SdkConfigurationPropertyFormProperties {
		name: FormControl<string | null | undefined>,
		friendlyName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		required: FormControl<boolean | null | undefined>,
		defaultValue: FormControl<string | null | undefined>,
	}
	export function CreateSdkConfigurationPropertyFormGroup() {
		return new FormGroup<SdkConfigurationPropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The collection of SdkType instances. */
	export interface SdkTypes {
		position?: string | null;
		items?: Array<SdkType>;
	}

	/** The collection of SdkType instances. */
	export interface SdkTypesFormProperties {
		position: FormControl<string | null | undefined>,
	}
	export function CreateSdkTypesFormGroup() {
		return new FormGroup<SdkTypesFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of Stage resources that are associated with the ApiKey resource. */
	export interface Stages {
		item?: Array<Stage>;
	}

	/** A list of Stage resources that are associated with the ApiKey resource. */
	export interface StagesFormProperties {
	}
	export function CreateStagesFormGroup() {
		return new FormGroup<StagesFormProperties>({
		});

	}


	/** The collection of tags. Each tag element is associated with a given resource. */
	export interface Tags {
		tags?: MapOfStringToString;
	}

	/** The collection of tags. Each tag element is associated with a given resource. */
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}


	/** Represents the usage data of a usage plan. */
	export interface Usage {
		usagePlanId?: string;
		startDate?: string;
		endDate?: string;
		position?: string | null;
		items?: MapOfKeyUsages;
	}

	/** Represents the usage data of a usage plan. */
	export interface UsageFormProperties {
		usagePlanId: FormControl<string | null | undefined>,
		startDate: FormControl<string | null | undefined>,
		endDate: FormControl<string | null | undefined>,
		position: FormControl<string | null | undefined>,
	}
	export function CreateUsageFormGroup() {
		return new FormGroup<UsageFormProperties>({
			usagePlanId: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MapOfKeyUsages {
	}
	export interface MapOfKeyUsagesFormProperties {
	}
	export function CreateMapOfKeyUsagesFormGroup() {
		return new FormGroup<MapOfKeyUsagesFormProperties>({
		});

	}


	/** Represents the collection of usage plan keys added to usage plans for the associated API keys and, possibly, other types of keys. */
	export interface UsagePlanKeys {
		position?: string | null;
		items?: Array<UsagePlanKey>;
	}

	/** Represents the collection of usage plan keys added to usage plans for the associated API keys and, possibly, other types of keys. */
	export interface UsagePlanKeysFormProperties {
		position: FormControl<string | null | undefined>,
	}
	export function CreateUsagePlanKeysFormGroup() {
		return new FormGroup<UsagePlanKeysFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a collection of usage plans for an AWS account. */
	export interface UsagePlans {
		position?: string | null;
		items?: Array<UsagePlan>;
	}

	/** Represents a collection of usage plans for an AWS account. */
	export interface UsagePlansFormProperties {
		position: FormControl<string | null | undefined>,
	}
	export function CreateUsagePlansFormGroup() {
		return new FormGroup<UsagePlansFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The collection of VPC links under the caller's account in a region. */
	export interface VpcLinks {
		position?: string | null;
		items?: Array<VpcLink>;
	}

	/** The collection of VPC links under the caller's account in a region. */
	export interface VpcLinksFormProperties {
		position: FormControl<string | null | undefined>,
	}
	export function CreateVpcLinksFormGroup() {
		return new FormGroup<VpcLinksFormProperties>({
			position: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The identifier of an ApiKey used in a UsagePlan. */
	export interface ApiKeyIds {
		ids?: Array<string>;
		warnings?: Array<string>;
	}

	/** The identifier of an ApiKey used in a UsagePlan. */
	export interface ApiKeyIdsFormProperties {
	}
	export function CreateApiKeyIdsFormGroup() {
		return new FormGroup<ApiKeyIdsFormProperties>({
		});

	}


	/** A collection of the imported DocumentationPart identifiers. */
	export interface DocumentationPartIds {
		ids?: Array<string>;
		warnings?: Array<string>;
	}

	/** A collection of the imported DocumentationPart identifiers. */
	export interface DocumentationPartIdsFormProperties {
	}
	export function CreateDocumentationPartIdsFormGroup() {
		return new FormGroup<DocumentationPartIdsFormProperties>({
		});

	}


	/** Represents the response of the test invoke request for a custom Authorizer */
	export interface TestInvokeAuthorizerResponse {
		clientStatus?: number | null;
		log?: string;
		latency?: number | null;
		principalId?: string;
		policy?: string;
		authorization?: MapOfStringToList;
		claims?: MapOfStringToString;
	}

	/** Represents the response of the test invoke request for a custom Authorizer */
	export interface TestInvokeAuthorizerResponseFormProperties {
		clientStatus: FormControl<number | null | undefined>,
		log: FormControl<string | null | undefined>,
		latency: FormControl<number | null | undefined>,
		principalId: FormControl<string | null | undefined>,
		policy: FormControl<string | null | undefined>,
	}
	export function CreateTestInvokeAuthorizerResponseFormGroup() {
		return new FormGroup<TestInvokeAuthorizerResponseFormProperties>({
			clientStatus: new FormControl<number | null | undefined>(undefined),
			log: new FormControl<string | null | undefined>(undefined),
			latency: new FormControl<number | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
			policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MapOfStringToList {
	}
	export interface MapOfStringToListFormProperties {
	}
	export function CreateMapOfStringToListFormGroup() {
		return new FormGroup<MapOfStringToListFormProperties>({
		});

	}


	/** Represents the response of the test invoke request in the HTTP method. */
	export interface TestInvokeMethodResponse {
		status?: number | null;
		body?: string;
		headers?: MapOfStringToString;
		multiValueHeaders?: MapOfStringToList;
		log?: string;
		latency?: number | null;
	}

	/** Represents the response of the test invoke request in the HTTP method. */
	export interface TestInvokeMethodResponseFormProperties {
		status: FormControl<number | null | undefined>,
		body: FormControl<string | null | undefined>,
		log: FormControl<string | null | undefined>,
		latency: FormControl<number | null | undefined>,
	}
	export function CreateTestInvokeMethodResponseFormGroup() {
		return new FormGroup<TestInvokeMethodResponseFormProperties>({
			status: new FormControl<number | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			log: new FormControl<string | null | undefined>(undefined),
			latency: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>. */
	export interface PatchOperation {
		op?: Op;
		path?: string;
		value?: string;
		from?: string;
	}

	/** For more information about supported patch operations, see <a href="https://docs.aws.amazon.com/apigateway/latest/api/patch-operations.html">Patch Operations</a>. */
	export interface PatchOperationFormProperties {
		op: FormControl<Op | null | undefined>,
		path: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
		from: FormControl<string | null | undefined>,
	}
	export function CreatePatchOperationFormGroup() {
		return new FormGroup<PatchOperationFormProperties>({
			op: new FormControl<Op | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Op { add = 'add', remove = 'remove', replace = 'replace', move = 'move', copy = 'copy', test = 'test' }

	export enum ApiKeysFormat { csv = 'csv' }


	/** Request to create an ApiKey resource. */
	export interface CreateApiKeyRequest {
		name?: string;
		description?: string;
		enabled?: boolean | null;
		generateDistinctId?: boolean | null;
		value?: string;
		stageKeys?: Array<StageKey>;
		customerId?: string;
		tags?: MapOfStringToString;
	}

	/** Request to create an ApiKey resource. */
	export interface CreateApiKeyRequestFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		generateDistinctId: FormControl<boolean | null | undefined>,
		value: FormControl<string | null | undefined>,
		customerId: FormControl<string | null | undefined>,
	}
	export function CreateCreateApiKeyRequestFormGroup() {
		return new FormGroup<CreateApiKeyRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			generateDistinctId: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to add a new Authorizer to an existing RestApi resource. */
	export interface CreateAuthorizerRequest {

		/** Required */
		name: string;

		/** Required */
		type: AuthorizerType;
		providerARNs?: Array<string>;
		authType?: string;
		authorizerUri?: string;
		authorizerCredentials?: string;
		identitySource?: string;
		identityValidationExpression?: string;
		authorizerResultTtlInSeconds?: number | null;
	}

	/** Request to add a new Authorizer to an existing RestApi resource. */
	export interface CreateAuthorizerRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<AuthorizerType | null | undefined>,
		authType: FormControl<string | null | undefined>,
		authorizerUri: FormControl<string | null | undefined>,
		authorizerCredentials: FormControl<string | null | undefined>,
		identitySource: FormControl<string | null | undefined>,
		identityValidationExpression: FormControl<string | null | undefined>,
		authorizerResultTtlInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateAuthorizerRequestFormGroup() {
		return new FormGroup<CreateAuthorizerRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AuthorizerType | null | undefined>(undefined, [Validators.required]),
			authType: new FormControl<string | null | undefined>(undefined),
			authorizerUri: new FormControl<string | null | undefined>(undefined),
			authorizerCredentials: new FormControl<string | null | undefined>(undefined),
			identitySource: new FormControl<string | null | undefined>(undefined),
			identityValidationExpression: new FormControl<string | null | undefined>(undefined),
			authorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Requests API Gateway to create a new BasePathMapping resource. */
	export interface CreateBasePathMappingRequest {
		basePath?: string;

		/** Required */
		restApiId: string;
		stage?: string;
	}

	/** Requests API Gateway to create a new BasePathMapping resource. */
	export interface CreateBasePathMappingRequestFormProperties {
		basePath: FormControl<string | null | undefined>,

		/** Required */
		restApiId: FormControl<string | null | undefined>,
		stage: FormControl<string | null | undefined>,
	}
	export function CreateCreateBasePathMappingRequestFormGroup() {
		return new FormGroup<CreateBasePathMappingRequestFormProperties>({
			basePath: new FormControl<string | null | undefined>(undefined),
			restApiId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input configuration for a canary deployment. */
	export interface DeploymentCanarySettings {
		percentTraffic?: number | null;
		stageVariableOverrides?: MapOfStringToString;
		useStageCache?: boolean | null;
	}

	/** The input configuration for a canary deployment. */
	export interface DeploymentCanarySettingsFormProperties {
		percentTraffic: FormControl<number | null | undefined>,
		useStageCache: FormControl<boolean | null | undefined>,
	}
	export function CreateDeploymentCanarySettingsFormGroup() {
		return new FormGroup<DeploymentCanarySettingsFormProperties>({
			percentTraffic: new FormControl<number | null | undefined>(undefined),
			useStageCache: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Requests API Gateway to create a Deployment resource. */
	export interface CreateDeploymentRequest {
		stageName?: string;
		stageDescription?: string;
		description?: string;
		cacheClusterEnabled?: boolean | null;
		cacheClusterSize?: CacheClusterSize;
		variables?: MapOfStringToString;
		canarySettings?: DeploymentCanarySettings;
		tracingEnabled?: boolean | null;
	}

	/** Requests API Gateway to create a Deployment resource. */
	export interface CreateDeploymentRequestFormProperties {
		stageName: FormControl<string | null | undefined>,
		stageDescription: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		cacheClusterEnabled: FormControl<boolean | null | undefined>,
		cacheClusterSize: FormControl<CacheClusterSize | null | undefined>,
		tracingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDeploymentRequestFormGroup() {
		return new FormGroup<CreateDeploymentRequestFormProperties>({
			stageName: new FormControl<string | null | undefined>(undefined),
			stageDescription: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			cacheClusterEnabled: new FormControl<boolean | null | undefined>(undefined),
			cacheClusterSize: new FormControl<CacheClusterSize | null | undefined>(undefined),
			tracingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Creates a new documentation part of a given API. */
	export interface CreateDocumentationPartRequest {

		/** Required */
		location: DocumentationPartLocation;

		/**
		 * The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only OpenAPI-compliant key-value pairs can be exported and, hence, published.
		 * Required
		 */
		properties: any;
	}

	/** Creates a new documentation part of a given API. */
	export interface CreateDocumentationPartRequestFormProperties {

		/**
		 * The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only OpenAPI-compliant key-value pairs can be exported and, hence, published.
		 * Required
		 */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateCreateDocumentationPartRequestFormGroup() {
		return new FormGroup<CreateDocumentationPartRequestFormProperties>({
			properties: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Creates a new documentation version of a given API. */
	export interface CreateDocumentationVersionRequest {

		/** Required */
		documentationVersion: string;
		stageName?: string;
		description?: string;
	}

	/** Creates a new documentation version of a given API. */
	export interface CreateDocumentationVersionRequestFormProperties {

		/** Required */
		documentationVersion: FormControl<string | null | undefined>,
		stageName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateDocumentationVersionRequestFormGroup() {
		return new FormGroup<CreateDocumentationVersionRequestFormProperties>({
			documentationVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stageName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API. */
	export interface MutualTlsAuthenticationInput {
		truststoreUri?: string;
		truststoreVersion?: string;
	}

	/** The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API. */
	export interface MutualTlsAuthenticationInputFormProperties {
		truststoreUri: FormControl<string | null | undefined>,
		truststoreVersion: FormControl<string | null | undefined>,
	}
	export function CreateMutualTlsAuthenticationInputFormGroup() {
		return new FormGroup<MutualTlsAuthenticationInputFormProperties>({
			truststoreUri: new FormControl<string | null | undefined>(undefined),
			truststoreVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to create a new domain name. */
	export interface CreateDomainNameRequest {

		/** Required */
		domainName: string;
		certificateName?: string;
		certificateBody?: string;
		certificatePrivateKey?: string;
		certificateChain?: string;
		certificateArn?: string;
		regionalCertificateName?: string;
		regionalCertificateArn?: string;
		endpointConfiguration?: EndpointConfiguration;
		tags?: MapOfStringToString;
		securityPolicy?: SecurityPolicy;

		/** The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API. */
		mutualTlsAuthentication?: MutualTlsAuthenticationInput;
		ownershipVerificationCertificateArn?: string;
	}

	/** A request to create a new domain name. */
	export interface CreateDomainNameRequestFormProperties {

		/** Required */
		domainName: FormControl<string | null | undefined>,
		certificateName: FormControl<string | null | undefined>,
		certificateBody: FormControl<string | null | undefined>,
		certificatePrivateKey: FormControl<string | null | undefined>,
		certificateChain: FormControl<string | null | undefined>,
		certificateArn: FormControl<string | null | undefined>,
		regionalCertificateName: FormControl<string | null | undefined>,
		regionalCertificateArn: FormControl<string | null | undefined>,
		securityPolicy: FormControl<SecurityPolicy | null | undefined>,
		ownershipVerificationCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainNameRequestFormGroup() {
		return new FormGroup<CreateDomainNameRequestFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certificateName: new FormControl<string | null | undefined>(undefined),
			certificateBody: new FormControl<string | null | undefined>(undefined),
			certificatePrivateKey: new FormControl<string | null | undefined>(undefined),
			certificateChain: new FormControl<string | null | undefined>(undefined),
			certificateArn: new FormControl<string | null | undefined>(undefined),
			regionalCertificateName: new FormControl<string | null | undefined>(undefined),
			regionalCertificateArn: new FormControl<string | null | undefined>(undefined),
			securityPolicy: new FormControl<SecurityPolicy | null | undefined>(undefined),
			ownershipVerificationCertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to add a new Model to an existing RestApi resource. */
	export interface CreateModelRequest {

		/** Required */
		name: string;
		description?: string;
		schema?: string;

		/** Required */
		contentType: string;
	}

	/** Request to add a new Model to an existing RestApi resource. */
	export interface CreateModelRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		schema: FormControl<string | null | undefined>,

		/** Required */
		contentType: FormControl<string | null | undefined>,
	}
	export function CreateCreateModelRequestFormGroup() {
		return new FormGroup<CreateModelRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Creates a RequestValidator of a given RestApi. */
	export interface CreateRequestValidatorRequest {
		name?: string;
		validateRequestBody?: boolean | null;
		validateRequestParameters?: boolean | null;
	}

	/** Creates a RequestValidator of a given RestApi. */
	export interface CreateRequestValidatorRequestFormProperties {
		name: FormControl<string | null | undefined>,
		validateRequestBody: FormControl<boolean | null | undefined>,
		validateRequestParameters: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateRequestValidatorRequestFormGroup() {
		return new FormGroup<CreateRequestValidatorRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			validateRequestBody: new FormControl<boolean | null | undefined>(undefined),
			validateRequestParameters: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Requests API Gateway to create a Resource resource. */
	export interface CreateResourceRequest {

		/** Required */
		pathPart: string;
	}

	/** Requests API Gateway to create a Resource resource. */
	export interface CreateResourceRequestFormProperties {

		/** Required */
		pathPart: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourceRequestFormGroup() {
		return new FormGroup<CreateResourceRequestFormProperties>({
			pathPart: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The POST Request to add a new RestApi resource to your collection. */
	export interface CreateRestApiRequest {

		/** Required */
		name: string;
		description?: string;
		version?: string;
		cloneFrom?: string;
		binaryMediaTypes?: Array<string>;
		minimumCompressionSize?: number | null;
		apiKeySource?: ApiKeySourceType;
		endpointConfiguration?: EndpointConfiguration;
		policy?: string;
		tags?: MapOfStringToString;
		disableExecuteApiEndpoint?: boolean | null;
	}

	/** The POST Request to add a new RestApi resource to your collection. */
	export interface CreateRestApiRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
		cloneFrom: FormControl<string | null | undefined>,
		minimumCompressionSize: FormControl<number | null | undefined>,
		apiKeySource: FormControl<ApiKeySourceType | null | undefined>,
		policy: FormControl<string | null | undefined>,
		disableExecuteApiEndpoint: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateRestApiRequestFormGroup() {
		return new FormGroup<CreateRestApiRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			cloneFrom: new FormControl<string | null | undefined>(undefined),
			minimumCompressionSize: new FormControl<number | null | undefined>(undefined),
			apiKeySource: new FormControl<ApiKeySourceType | null | undefined>(undefined),
			policy: new FormControl<string | null | undefined>(undefined),
			disableExecuteApiEndpoint: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Requests API Gateway to create a Stage resource. */
	export interface CreateStageRequest {

		/** Required */
		stageName: string;

		/** Required */
		deploymentId: string;
		description?: string;
		cacheClusterEnabled?: boolean | null;
		cacheClusterSize?: CacheClusterSize;
		variables?: MapOfStringToString;
		documentationVersion?: string;
		canarySettings?: CanarySettings;
		tracingEnabled?: boolean | null;
		tags?: MapOfStringToString;
	}

	/** Requests API Gateway to create a Stage resource. */
	export interface CreateStageRequestFormProperties {

		/** Required */
		stageName: FormControl<string | null | undefined>,

		/** Required */
		deploymentId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		cacheClusterEnabled: FormControl<boolean | null | undefined>,
		cacheClusterSize: FormControl<CacheClusterSize | null | undefined>,
		documentationVersion: FormControl<string | null | undefined>,
		tracingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateStageRequestFormGroup() {
		return new FormGroup<CreateStageRequestFormProperties>({
			stageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deploymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			cacheClusterEnabled: new FormControl<boolean | null | undefined>(undefined),
			cacheClusterSize: new FormControl<CacheClusterSize | null | undefined>(undefined),
			documentationVersion: new FormControl<string | null | undefined>(undefined),
			tracingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The POST request to create a usage plan key for adding an existing API key to a usage plan. */
	export interface CreateUsagePlanKeyRequest {

		/** Required */
		keyId: string;

		/** Required */
		keyType: string;
	}

	/** The POST request to create a usage plan key for adding an existing API key to a usage plan. */
	export interface CreateUsagePlanKeyRequestFormProperties {

		/** Required */
		keyId: FormControl<string | null | undefined>,

		/** Required */
		keyType: FormControl<string | null | undefined>,
	}
	export function CreateCreateUsagePlanKeyRequestFormGroup() {
		return new FormGroup<CreateUsagePlanKeyRequestFormProperties>({
			keyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The POST request to create a usage plan with the name, description, throttle limits and quota limits, as well as the associated API stages, specified in the payload. */
	export interface CreateUsagePlanRequest {

		/** Required */
		name: string;
		description?: string;
		apiStages?: Array<ApiStage>;
		throttle?: ThrottleSettings;
		quota?: QuotaSettings;
		tags?: MapOfStringToString;
	}

	/** The POST request to create a usage plan with the name, description, throttle limits and quota limits, as well as the associated API stages, specified in the payload. */
	export interface CreateUsagePlanRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateUsagePlanRequestFormGroup() {
		return new FormGroup<CreateUsagePlanRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services. */
	export interface CreateVpcLinkRequest {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		targetArns: Array<string>;
		tags?: MapOfStringToString;
	}

	/** Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services. */
	export interface CreateVpcLinkRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateVpcLinkRequestFormGroup() {
		return new FormGroup<CreateVpcLinkRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to delete the ApiKey resource. */
	export interface DeleteApiKeyRequest {
	}

	/** A request to delete the ApiKey resource. */
	export interface DeleteApiKeyRequestFormProperties {
	}
	export function CreateDeleteApiKeyRequestFormGroup() {
		return new FormGroup<DeleteApiKeyRequestFormProperties>({
		});

	}


	/** Request to delete an existing Authorizer resource. */
	export interface DeleteAuthorizerRequest {
	}

	/** Request to delete an existing Authorizer resource. */
	export interface DeleteAuthorizerRequestFormProperties {
	}
	export function CreateDeleteAuthorizerRequestFormGroup() {
		return new FormGroup<DeleteAuthorizerRequestFormProperties>({
		});

	}


	/** A request to delete the BasePathMapping resource. */
	export interface DeleteBasePathMappingRequest {
	}

	/** A request to delete the BasePathMapping resource. */
	export interface DeleteBasePathMappingRequestFormProperties {
	}
	export function CreateDeleteBasePathMappingRequestFormGroup() {
		return new FormGroup<DeleteBasePathMappingRequestFormProperties>({
		});

	}


	/** A request to delete the ClientCertificate resource. */
	export interface DeleteClientCertificateRequest {
	}

	/** A request to delete the ClientCertificate resource. */
	export interface DeleteClientCertificateRequestFormProperties {
	}
	export function CreateDeleteClientCertificateRequestFormGroup() {
		return new FormGroup<DeleteClientCertificateRequestFormProperties>({
		});

	}


	/** Requests API Gateway to delete a Deployment resource. */
	export interface DeleteDeploymentRequest {
	}

	/** Requests API Gateway to delete a Deployment resource. */
	export interface DeleteDeploymentRequestFormProperties {
	}
	export function CreateDeleteDeploymentRequestFormGroup() {
		return new FormGroup<DeleteDeploymentRequestFormProperties>({
		});

	}


	/** Deletes an existing documentation part of an API. */
	export interface DeleteDocumentationPartRequest {
	}

	/** Deletes an existing documentation part of an API. */
	export interface DeleteDocumentationPartRequestFormProperties {
	}
	export function CreateDeleteDocumentationPartRequestFormGroup() {
		return new FormGroup<DeleteDocumentationPartRequestFormProperties>({
		});

	}


	/** Deletes an existing documentation version of an API. */
	export interface DeleteDocumentationVersionRequest {
	}

	/** Deletes an existing documentation version of an API. */
	export interface DeleteDocumentationVersionRequestFormProperties {
	}
	export function CreateDeleteDocumentationVersionRequestFormGroup() {
		return new FormGroup<DeleteDocumentationVersionRequestFormProperties>({
		});

	}


	/** A request to delete the DomainName resource. */
	export interface DeleteDomainNameRequest {
	}

	/** A request to delete the DomainName resource. */
	export interface DeleteDomainNameRequestFormProperties {
	}
	export function CreateDeleteDomainNameRequestFormGroup() {
		return new FormGroup<DeleteDomainNameRequestFormProperties>({
		});

	}


	/** Clears any customization of a GatewayResponse of a specified response type on the given RestApi and resets it with the default settings. */
	export interface DeleteGatewayResponseRequest {
	}

	/** Clears any customization of a GatewayResponse of a specified response type on the given RestApi and resets it with the default settings. */
	export interface DeleteGatewayResponseRequestFormProperties {
	}
	export function CreateDeleteGatewayResponseRequestFormGroup() {
		return new FormGroup<DeleteGatewayResponseRequestFormProperties>({
		});

	}


	/** Represents a delete integration request. */
	export interface DeleteIntegrationRequest {
	}

	/** Represents a delete integration request. */
	export interface DeleteIntegrationRequestFormProperties {
	}
	export function CreateDeleteIntegrationRequestFormGroup() {
		return new FormGroup<DeleteIntegrationRequestFormProperties>({
		});

	}


	/** Represents a delete integration response request. */
	export interface DeleteIntegrationResponseRequest {
	}

	/** Represents a delete integration response request. */
	export interface DeleteIntegrationResponseRequestFormProperties {
	}
	export function CreateDeleteIntegrationResponseRequestFormGroup() {
		return new FormGroup<DeleteIntegrationResponseRequestFormProperties>({
		});

	}


	/** Request to delete an existing Method resource. */
	export interface DeleteMethodRequest {
	}

	/** Request to delete an existing Method resource. */
	export interface DeleteMethodRequestFormProperties {
	}
	export function CreateDeleteMethodRequestFormGroup() {
		return new FormGroup<DeleteMethodRequestFormProperties>({
		});

	}


	/** A request to delete an existing MethodResponse resource. */
	export interface DeleteMethodResponseRequest {
	}

	/** A request to delete an existing MethodResponse resource. */
	export interface DeleteMethodResponseRequestFormProperties {
	}
	export function CreateDeleteMethodResponseRequestFormGroup() {
		return new FormGroup<DeleteMethodResponseRequestFormProperties>({
		});

	}


	/** Request to delete an existing model in an existing RestApi resource. */
	export interface DeleteModelRequest {
	}

	/** Request to delete an existing model in an existing RestApi resource. */
	export interface DeleteModelRequestFormProperties {
	}
	export function CreateDeleteModelRequestFormGroup() {
		return new FormGroup<DeleteModelRequestFormProperties>({
		});

	}


	/** Deletes a specified RequestValidator of a given RestApi. */
	export interface DeleteRequestValidatorRequest {
	}

	/** Deletes a specified RequestValidator of a given RestApi. */
	export interface DeleteRequestValidatorRequestFormProperties {
	}
	export function CreateDeleteRequestValidatorRequestFormGroup() {
		return new FormGroup<DeleteRequestValidatorRequestFormProperties>({
		});

	}


	/** Request to delete a Resource. */
	export interface DeleteResourceRequest {
	}

	/** Request to delete a Resource. */
	export interface DeleteResourceRequestFormProperties {
	}
	export function CreateDeleteResourceRequestFormGroup() {
		return new FormGroup<DeleteResourceRequestFormProperties>({
		});

	}


	/** Request to delete the specified API from your collection. */
	export interface DeleteRestApiRequest {
	}

	/** Request to delete the specified API from your collection. */
	export interface DeleteRestApiRequestFormProperties {
	}
	export function CreateDeleteRestApiRequestFormGroup() {
		return new FormGroup<DeleteRestApiRequestFormProperties>({
		});

	}


	/** Requests API Gateway to delete a Stage resource. */
	export interface DeleteStageRequest {
	}

	/** Requests API Gateway to delete a Stage resource. */
	export interface DeleteStageRequestFormProperties {
	}
	export function CreateDeleteStageRequestFormGroup() {
		return new FormGroup<DeleteStageRequestFormProperties>({
		});

	}


	/** The DELETE request to delete a usage plan key and remove the underlying API key from the associated usage plan. */
	export interface DeleteUsagePlanKeyRequest {
	}

	/** The DELETE request to delete a usage plan key and remove the underlying API key from the associated usage plan. */
	export interface DeleteUsagePlanKeyRequestFormProperties {
	}
	export function CreateDeleteUsagePlanKeyRequestFormGroup() {
		return new FormGroup<DeleteUsagePlanKeyRequestFormProperties>({
		});

	}


	/** The DELETE request to delete a usage plan of a given plan Id. */
	export interface DeleteUsagePlanRequest {
	}

	/** The DELETE request to delete a usage plan of a given plan Id. */
	export interface DeleteUsagePlanRequestFormProperties {
	}
	export function CreateDeleteUsagePlanRequestFormGroup() {
		return new FormGroup<DeleteUsagePlanRequestFormProperties>({
		});

	}


	/** Deletes an existing VpcLink of a specified identifier. */
	export interface DeleteVpcLinkRequest {
	}

	/** Deletes an existing VpcLink of a specified identifier. */
	export interface DeleteVpcLinkRequestFormProperties {
	}
	export function CreateDeleteVpcLinkRequestFormGroup() {
		return new FormGroup<DeleteVpcLinkRequestFormProperties>({
		});

	}


	/** Request to flush authorizer cache entries on a specified stage. */
	export interface FlushStageAuthorizersCacheRequest {
	}

	/** Request to flush authorizer cache entries on a specified stage. */
	export interface FlushStageAuthorizersCacheRequestFormProperties {
	}
	export function CreateFlushStageAuthorizersCacheRequestFormGroup() {
		return new FormGroup<FlushStageAuthorizersCacheRequestFormProperties>({
		});

	}


	/** Requests API Gateway to flush a stage's cache. */
	export interface FlushStageCacheRequest {
	}

	/** Requests API Gateway to flush a stage's cache. */
	export interface FlushStageCacheRequestFormProperties {
	}
	export function CreateFlushStageCacheRequestFormGroup() {
		return new FormGroup<FlushStageCacheRequestFormProperties>({
		});

	}


	/** A request to generate a ClientCertificate resource. */
	export interface GenerateClientCertificateRequest {
		description?: string;
		tags?: MapOfStringToString;
	}

	/** A request to generate a ClientCertificate resource. */
	export interface GenerateClientCertificateRequestFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateGenerateClientCertificateRequestFormGroup() {
		return new FormGroup<GenerateClientCertificateRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Requests API Gateway to get information about the current Account resource. */
	export interface GetAccountRequest {
	}

	/** Requests API Gateway to get information about the current Account resource. */
	export interface GetAccountRequestFormProperties {
	}
	export function CreateGetAccountRequestFormGroup() {
		return new FormGroup<GetAccountRequestFormProperties>({
		});

	}


	/** A request to get information about the current ApiKey resource. */
	export interface GetApiKeyRequest {
	}

	/** A request to get information about the current ApiKey resource. */
	export interface GetApiKeyRequestFormProperties {
	}
	export function CreateGetApiKeyRequestFormGroup() {
		return new FormGroup<GetApiKeyRequestFormProperties>({
		});

	}


	/** A request to get information about the current ApiKeys resource. */
	export interface GetApiKeysRequest {
	}

	/** A request to get information about the current ApiKeys resource. */
	export interface GetApiKeysRequestFormProperties {
	}
	export function CreateGetApiKeysRequestFormGroup() {
		return new FormGroup<GetApiKeysRequestFormProperties>({
		});

	}


	/** Request to describe an existing Authorizer resource. */
	export interface GetAuthorizerRequest {
	}

	/** Request to describe an existing Authorizer resource. */
	export interface GetAuthorizerRequestFormProperties {
	}
	export function CreateGetAuthorizerRequestFormGroup() {
		return new FormGroup<GetAuthorizerRequestFormProperties>({
		});

	}


	/** Request to describe an existing Authorizers resource. */
	export interface GetAuthorizersRequest {
	}

	/** Request to describe an existing Authorizers resource. */
	export interface GetAuthorizersRequestFormProperties {
	}
	export function CreateGetAuthorizersRequestFormGroup() {
		return new FormGroup<GetAuthorizersRequestFormProperties>({
		});

	}


	/** Request to describe a BasePathMapping resource. */
	export interface GetBasePathMappingRequest {
	}

	/** Request to describe a BasePathMapping resource. */
	export interface GetBasePathMappingRequestFormProperties {
	}
	export function CreateGetBasePathMappingRequestFormGroup() {
		return new FormGroup<GetBasePathMappingRequestFormProperties>({
		});

	}


	/** A request to get information about a collection of BasePathMapping resources. */
	export interface GetBasePathMappingsRequest {
	}

	/** A request to get information about a collection of BasePathMapping resources. */
	export interface GetBasePathMappingsRequestFormProperties {
	}
	export function CreateGetBasePathMappingsRequestFormGroup() {
		return new FormGroup<GetBasePathMappingsRequestFormProperties>({
		});

	}


	/** A request to get information about the current ClientCertificate resource. */
	export interface GetClientCertificateRequest {
	}

	/** A request to get information about the current ClientCertificate resource. */
	export interface GetClientCertificateRequestFormProperties {
	}
	export function CreateGetClientCertificateRequestFormGroup() {
		return new FormGroup<GetClientCertificateRequestFormProperties>({
		});

	}


	/** A request to get information about a collection of ClientCertificate resources. */
	export interface GetClientCertificatesRequest {
	}

	/** A request to get information about a collection of ClientCertificate resources. */
	export interface GetClientCertificatesRequestFormProperties {
	}
	export function CreateGetClientCertificatesRequestFormGroup() {
		return new FormGroup<GetClientCertificatesRequestFormProperties>({
		});

	}


	/** Requests API Gateway to get information about a Deployment resource. */
	export interface GetDeploymentRequest {
	}

	/** Requests API Gateway to get information about a Deployment resource. */
	export interface GetDeploymentRequestFormProperties {
	}
	export function CreateGetDeploymentRequestFormGroup() {
		return new FormGroup<GetDeploymentRequestFormProperties>({
		});

	}


	/** Requests API Gateway to get information about a Deployments collection. */
	export interface GetDeploymentsRequest {
	}

	/** Requests API Gateway to get information about a Deployments collection. */
	export interface GetDeploymentsRequestFormProperties {
	}
	export function CreateGetDeploymentsRequestFormGroup() {
		return new FormGroup<GetDeploymentsRequestFormProperties>({
		});

	}


	/** Gets a specified documentation part of a given API. */
	export interface GetDocumentationPartRequest {
	}

	/** Gets a specified documentation part of a given API. */
	export interface GetDocumentationPartRequestFormProperties {
	}
	export function CreateGetDocumentationPartRequestFormGroup() {
		return new FormGroup<GetDocumentationPartRequestFormProperties>({
		});

	}

	export enum LocationStatusType { DOCUMENTED = 'DOCUMENTED', UNDOCUMENTED = 'UNDOCUMENTED' }


	/** Gets the documentation parts of an API. The result may be filtered by the type, name, or path of API entities (targets). */
	export interface GetDocumentationPartsRequest {
	}

	/** Gets the documentation parts of an API. The result may be filtered by the type, name, or path of API entities (targets). */
	export interface GetDocumentationPartsRequestFormProperties {
	}
	export function CreateGetDocumentationPartsRequestFormGroup() {
		return new FormGroup<GetDocumentationPartsRequestFormProperties>({
		});

	}


	/** Gets a documentation snapshot of an API. */
	export interface GetDocumentationVersionRequest {
	}

	/** Gets a documentation snapshot of an API. */
	export interface GetDocumentationVersionRequestFormProperties {
	}
	export function CreateGetDocumentationVersionRequestFormGroup() {
		return new FormGroup<GetDocumentationVersionRequestFormProperties>({
		});

	}


	/** Gets the documentation versions of an API. */
	export interface GetDocumentationVersionsRequest {
	}

	/** Gets the documentation versions of an API. */
	export interface GetDocumentationVersionsRequestFormProperties {
	}
	export function CreateGetDocumentationVersionsRequestFormGroup() {
		return new FormGroup<GetDocumentationVersionsRequestFormProperties>({
		});

	}


	/** Request to get the name of a DomainName resource. */
	export interface GetDomainNameRequest {
	}

	/** Request to get the name of a DomainName resource. */
	export interface GetDomainNameRequestFormProperties {
	}
	export function CreateGetDomainNameRequestFormGroup() {
		return new FormGroup<GetDomainNameRequestFormProperties>({
		});

	}


	/** Request to describe a collection of DomainName resources. */
	export interface GetDomainNamesRequest {
	}

	/** Request to describe a collection of DomainName resources. */
	export interface GetDomainNamesRequestFormProperties {
	}
	export function CreateGetDomainNamesRequestFormGroup() {
		return new FormGroup<GetDomainNamesRequestFormProperties>({
		});

	}


	/** Request a new export of a RestApi for a particular Stage. */
	export interface GetExportRequest {
	}

	/** Request a new export of a RestApi for a particular Stage. */
	export interface GetExportRequestFormProperties {
	}
	export function CreateGetExportRequestFormGroup() {
		return new FormGroup<GetExportRequestFormProperties>({
		});

	}


	/** Gets a GatewayResponse of a specified response type on the given RestApi. */
	export interface GetGatewayResponseRequest {
	}

	/** Gets a GatewayResponse of a specified response type on the given RestApi. */
	export interface GetGatewayResponseRequestFormProperties {
	}
	export function CreateGetGatewayResponseRequestFormGroup() {
		return new FormGroup<GetGatewayResponseRequestFormProperties>({
		});

	}


	/** Gets the GatewayResponses collection on the given RestApi. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default GatewayResponses collection for the supported response types. */
	export interface GetGatewayResponsesRequest {
	}

	/** Gets the GatewayResponses collection on the given RestApi. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default GatewayResponses collection for the supported response types. */
	export interface GetGatewayResponsesRequestFormProperties {
	}
	export function CreateGetGatewayResponsesRequestFormGroup() {
		return new FormGroup<GetGatewayResponsesRequestFormProperties>({
		});

	}


	/** Represents a request to get the integration configuration. */
	export interface GetIntegrationRequest {
	}

	/** Represents a request to get the integration configuration. */
	export interface GetIntegrationRequestFormProperties {
	}
	export function CreateGetIntegrationRequestFormGroup() {
		return new FormGroup<GetIntegrationRequestFormProperties>({
		});

	}


	/** Represents a get integration response request. */
	export interface GetIntegrationResponseRequest {
	}

	/** Represents a get integration response request. */
	export interface GetIntegrationResponseRequestFormProperties {
	}
	export function CreateGetIntegrationResponseRequestFormGroup() {
		return new FormGroup<GetIntegrationResponseRequestFormProperties>({
		});

	}


	/** Request to describe an existing Method resource. */
	export interface GetMethodRequest {
	}

	/** Request to describe an existing Method resource. */
	export interface GetMethodRequestFormProperties {
	}
	export function CreateGetMethodRequestFormGroup() {
		return new FormGroup<GetMethodRequestFormProperties>({
		});

	}


	/** Request to describe a MethodResponse resource. */
	export interface GetMethodResponseRequest {
	}

	/** Request to describe a MethodResponse resource. */
	export interface GetMethodResponseRequestFormProperties {
	}
	export function CreateGetMethodResponseRequestFormGroup() {
		return new FormGroup<GetMethodResponseRequestFormProperties>({
		});

	}


	/** Request to list information about a model in an existing RestApi resource. */
	export interface GetModelRequest {
	}

	/** Request to list information about a model in an existing RestApi resource. */
	export interface GetModelRequestFormProperties {
	}
	export function CreateGetModelRequestFormGroup() {
		return new FormGroup<GetModelRequestFormProperties>({
		});

	}


	/** Request to generate a sample mapping template used to transform the payload. */
	export interface GetModelTemplateRequest {
	}

	/** Request to generate a sample mapping template used to transform the payload. */
	export interface GetModelTemplateRequestFormProperties {
	}
	export function CreateGetModelTemplateRequestFormGroup() {
		return new FormGroup<GetModelTemplateRequestFormProperties>({
		});

	}


	/** Request to list existing Models defined for a RestApi resource. */
	export interface GetModelsRequest {
	}

	/** Request to list existing Models defined for a RestApi resource. */
	export interface GetModelsRequestFormProperties {
	}
	export function CreateGetModelsRequestFormGroup() {
		return new FormGroup<GetModelsRequestFormProperties>({
		});

	}


	/** Gets a RequestValidator of a given RestApi. */
	export interface GetRequestValidatorRequest {
	}

	/** Gets a RequestValidator of a given RestApi. */
	export interface GetRequestValidatorRequestFormProperties {
	}
	export function CreateGetRequestValidatorRequestFormGroup() {
		return new FormGroup<GetRequestValidatorRequestFormProperties>({
		});

	}


	/** Gets the RequestValidators collection of a given RestApi. */
	export interface GetRequestValidatorsRequest {
	}

	/** Gets the RequestValidators collection of a given RestApi. */
	export interface GetRequestValidatorsRequestFormProperties {
	}
	export function CreateGetRequestValidatorsRequestFormGroup() {
		return new FormGroup<GetRequestValidatorsRequestFormProperties>({
		});

	}


	/** Request to list information about a resource. */
	export interface GetResourceRequest {
	}

	/** Request to list information about a resource. */
	export interface GetResourceRequestFormProperties {
	}
	export function CreateGetResourceRequestFormGroup() {
		return new FormGroup<GetResourceRequestFormProperties>({
		});

	}


	/** Request to list information about a collection of resources. */
	export interface GetResourcesRequest {
	}

	/** Request to list information about a collection of resources. */
	export interface GetResourcesRequestFormProperties {
	}
	export function CreateGetResourcesRequestFormGroup() {
		return new FormGroup<GetResourcesRequestFormProperties>({
		});

	}


	/** The GET request to list an existing RestApi defined for your collection.  */
	export interface GetRestApiRequest {
	}

	/** The GET request to list an existing RestApi defined for your collection.  */
	export interface GetRestApiRequestFormProperties {
	}
	export function CreateGetRestApiRequestFormGroup() {
		return new FormGroup<GetRestApiRequestFormProperties>({
		});

	}


	/** The GET request to list existing RestApis defined for your collection. */
	export interface GetRestApisRequest {
	}

	/** The GET request to list existing RestApis defined for your collection. */
	export interface GetRestApisRequestFormProperties {
	}
	export function CreateGetRestApisRequestFormGroup() {
		return new FormGroup<GetRestApisRequestFormProperties>({
		});

	}


	/** Request a new generated client SDK for a RestApi and Stage. */
	export interface GetSdkRequest {
	}

	/** Request a new generated client SDK for a RestApi and Stage. */
	export interface GetSdkRequestFormProperties {
	}
	export function CreateGetSdkRequestFormGroup() {
		return new FormGroup<GetSdkRequestFormProperties>({
		});

	}


	/** Get an SdkType instance. */
	export interface GetSdkTypeRequest {
	}

	/** Get an SdkType instance. */
	export interface GetSdkTypeRequestFormProperties {
	}
	export function CreateGetSdkTypeRequestFormGroup() {
		return new FormGroup<GetSdkTypeRequestFormProperties>({
		});

	}


	/** Get the SdkTypes collection. */
	export interface GetSdkTypesRequest {
	}

	/** Get the SdkTypes collection. */
	export interface GetSdkTypesRequestFormProperties {
	}
	export function CreateGetSdkTypesRequestFormGroup() {
		return new FormGroup<GetSdkTypesRequestFormProperties>({
		});

	}


	/** Requests API Gateway to get information about a Stage resource. */
	export interface GetStageRequest {
	}

	/** Requests API Gateway to get information about a Stage resource. */
	export interface GetStageRequestFormProperties {
	}
	export function CreateGetStageRequestFormGroup() {
		return new FormGroup<GetStageRequestFormProperties>({
		});

	}


	/** Requests API Gateway to get information about one or more Stage resources. */
	export interface GetStagesRequest {
	}

	/** Requests API Gateway to get information about one or more Stage resources. */
	export interface GetStagesRequestFormProperties {
	}
	export function CreateGetStagesRequestFormGroup() {
		return new FormGroup<GetStagesRequestFormProperties>({
		});

	}


	/** Gets the Tags collection for a given resource. */
	export interface GetTagsRequest {
	}

	/** Gets the Tags collection for a given resource. */
	export interface GetTagsRequestFormProperties {
	}
	export function CreateGetTagsRequestFormGroup() {
		return new FormGroup<GetTagsRequestFormProperties>({
		});

	}


	/** The GET request to get a usage plan key of a given key identifier. */
	export interface GetUsagePlanKeyRequest {
	}

	/** The GET request to get a usage plan key of a given key identifier. */
	export interface GetUsagePlanKeyRequestFormProperties {
	}
	export function CreateGetUsagePlanKeyRequestFormGroup() {
		return new FormGroup<GetUsagePlanKeyRequestFormProperties>({
		});

	}


	/** The GET request to get all the usage plan keys representing the API keys added to a specified usage plan. */
	export interface GetUsagePlanKeysRequest {
	}

	/** The GET request to get all the usage plan keys representing the API keys added to a specified usage plan. */
	export interface GetUsagePlanKeysRequestFormProperties {
	}
	export function CreateGetUsagePlanKeysRequestFormGroup() {
		return new FormGroup<GetUsagePlanKeysRequestFormProperties>({
		});

	}


	/** The GET request to get a usage plan of a given plan identifier. */
	export interface GetUsagePlanRequest {
	}

	/** The GET request to get a usage plan of a given plan identifier. */
	export interface GetUsagePlanRequestFormProperties {
	}
	export function CreateGetUsagePlanRequestFormGroup() {
		return new FormGroup<GetUsagePlanRequestFormProperties>({
		});

	}


	/** The GET request to get all the usage plans of the caller's account. */
	export interface GetUsagePlansRequest {
	}

	/** The GET request to get all the usage plans of the caller's account. */
	export interface GetUsagePlansRequestFormProperties {
	}
	export function CreateGetUsagePlansRequestFormGroup() {
		return new FormGroup<GetUsagePlansRequestFormProperties>({
		});

	}


	/** The GET request to get the usage data of a usage plan in a specified time interval. */
	export interface GetUsageRequest {
	}

	/** The GET request to get the usage data of a usage plan in a specified time interval. */
	export interface GetUsageRequestFormProperties {
	}
	export function CreateGetUsageRequestFormGroup() {
		return new FormGroup<GetUsageRequestFormProperties>({
		});

	}


	/** Gets a specified VPC link under the caller's account in a region. */
	export interface GetVpcLinkRequest {
	}

	/** Gets a specified VPC link under the caller's account in a region. */
	export interface GetVpcLinkRequestFormProperties {
	}
	export function CreateGetVpcLinkRequestFormGroup() {
		return new FormGroup<GetVpcLinkRequestFormProperties>({
		});

	}


	/** Gets the VpcLinks collection under the caller's account in a selected region. */
	export interface GetVpcLinksRequest {
	}

	/** Gets the VpcLinks collection under the caller's account in a selected region. */
	export interface GetVpcLinksRequestFormProperties {
	}
	export function CreateGetVpcLinksRequestFormGroup() {
		return new FormGroup<GetVpcLinksRequestFormProperties>({
		});

	}


	/** The POST request to import API keys from an external source, such as a CSV-formatted file. */
	export interface ImportApiKeysRequest {

		/** Required */
		body: string;
	}

	/** The POST request to import API keys from an external source, such as a CSV-formatted file. */
	export interface ImportApiKeysRequestFormProperties {

		/** Required */
		body: FormControl<string | null | undefined>,
	}
	export function CreateImportApiKeysRequestFormGroup() {
		return new FormGroup<ImportApiKeysRequestFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PutMode { merge = 'merge', overwrite = 'overwrite' }


	/** Import documentation parts from an external (e.g., OpenAPI) definition file.  */
	export interface ImportDocumentationPartsRequest {

		/** Required */
		body: string;
	}

	/** Import documentation parts from an external (e.g., OpenAPI) definition file.  */
	export interface ImportDocumentationPartsRequestFormProperties {

		/** Required */
		body: FormControl<string | null | undefined>,
	}
	export function CreateImportDocumentationPartsRequestFormGroup() {
		return new FormGroup<ImportDocumentationPartsRequestFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A POST request to import an API to API Gateway using an input of an API definition file. */
	export interface ImportRestApiRequest {

		/** Required */
		body: string;
	}

	/** A POST request to import an API to API Gateway using an input of an API definition file. */
	export interface ImportRestApiRequestFormProperties {

		/** Required */
		body: FormControl<string | null | undefined>,
	}
	export function CreateImportRestApiRequestFormGroup() {
		return new FormGroup<ImportRestApiRequestFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the method setting properties. */
	export interface MethodSetting {
		metricsEnabled?: boolean | null;
		loggingLevel?: string;
		dataTraceEnabled?: boolean | null;
		throttlingBurstLimit?: number | null;
		throttlingRateLimit?: number | null;
		cachingEnabled?: boolean | null;
		cacheTtlInSeconds?: number | null;
		cacheDataEncrypted?: boolean | null;
		requireAuthorizationForCacheControl?: boolean | null;
		unauthorizedCacheControlHeaderStrategy?: UnauthorizedCacheControlHeaderStrategy;
	}

	/** Specifies the method setting properties. */
	export interface MethodSettingFormProperties {
		metricsEnabled: FormControl<boolean | null | undefined>,
		loggingLevel: FormControl<string | null | undefined>,
		dataTraceEnabled: FormControl<boolean | null | undefined>,
		throttlingBurstLimit: FormControl<number | null | undefined>,
		throttlingRateLimit: FormControl<number | null | undefined>,
		cachingEnabled: FormControl<boolean | null | undefined>,
		cacheTtlInSeconds: FormControl<number | null | undefined>,
		cacheDataEncrypted: FormControl<boolean | null | undefined>,
		requireAuthorizationForCacheControl: FormControl<boolean | null | undefined>,
		unauthorizedCacheControlHeaderStrategy: FormControl<UnauthorizedCacheControlHeaderStrategy | null | undefined>,
	}
	export function CreateMethodSettingFormGroup() {
		return new FormGroup<MethodSettingFormProperties>({
			metricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			loggingLevel: new FormControl<string | null | undefined>(undefined),
			dataTraceEnabled: new FormControl<boolean | null | undefined>(undefined),
			throttlingBurstLimit: new FormControl<number | null | undefined>(undefined),
			throttlingRateLimit: new FormControl<number | null | undefined>(undefined),
			cachingEnabled: new FormControl<boolean | null | undefined>(undefined),
			cacheTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			cacheDataEncrypted: new FormControl<boolean | null | undefined>(undefined),
			requireAuthorizationForCacheControl: new FormControl<boolean | null | undefined>(undefined),
			unauthorizedCacheControlHeaderStrategy: new FormControl<UnauthorizedCacheControlHeaderStrategy | null | undefined>(undefined),
		});

	}

	export enum UnauthorizedCacheControlHeaderStrategy { FAIL_WITH_403 = 'FAIL_WITH_403', SUCCEED_WITH_RESPONSE_HEADER = 'SUCCEED_WITH_RESPONSE_HEADER', SUCCEED_WITHOUT_RESPONSE_HEADER = 'SUCCEED_WITHOUT_RESPONSE_HEADER' }


	/** Represents a summary of a Method resource, given a particular date and time. */
	export interface MethodSnapshot {
		authorizationType?: string;
		apiKeyRequired?: boolean | null;
	}

	/** Represents a summary of a Method resource, given a particular date and time. */
	export interface MethodSnapshotFormProperties {
		authorizationType: FormControl<string | null | undefined>,
		apiKeyRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateMethodSnapshotFormGroup() {
		return new FormGroup<MethodSnapshotFormProperties>({
			authorizationType: new FormControl<string | null | undefined>(undefined),
			apiKeyRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MapOfMethodSnapshot {
	}
	export interface MapOfMethodSnapshotFormProperties {
	}
	export function CreateMapOfMethodSnapshotFormGroup() {
		return new FormGroup<MapOfMethodSnapshotFormProperties>({
		});

	}


	/** Creates a customization of a GatewayResponse of a specified response type and status code on the given RestApi. */
	export interface PutGatewayResponseRequest {
		statusCode?: string;
		responseParameters?: MapOfStringToString;
		responseTemplates?: MapOfStringToString;
	}

	/** Creates a customization of a GatewayResponse of a specified response type and status code on the given RestApi. */
	export interface PutGatewayResponseRequestFormProperties {
		statusCode: FormControl<string | null | undefined>,
	}
	export function CreatePutGatewayResponseRequestFormGroup() {
		return new FormGroup<PutGatewayResponseRequestFormProperties>({
			statusCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sets up a method's integration. */
	export interface PutIntegrationRequest {

		/** Required */
		type: IntegrationType;
		integrationHttpMethod?: string;
		uri?: string;
		connectionType?: ConnectionType;
		connectionId?: string;
		credentials?: string;
		requestParameters?: MapOfStringToString;
		requestTemplates?: MapOfStringToString;
		passthroughBehavior?: string;
		cacheNamespace?: string;
		cacheKeyParameters?: Array<string>;
		contentHandling?: ContentHandlingStrategy;
		timeoutInMillis?: number | null;

		/** Specifies the TLS configuration for an integration. */
		tlsConfig?: TlsConfig;
	}

	/** Sets up a method's integration. */
	export interface PutIntegrationRequestFormProperties {

		/** Required */
		type: FormControl<IntegrationType | null | undefined>,
		integrationHttpMethod: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
		connectionType: FormControl<ConnectionType | null | undefined>,
		connectionId: FormControl<string | null | undefined>,
		credentials: FormControl<string | null | undefined>,
		passthroughBehavior: FormControl<string | null | undefined>,
		cacheNamespace: FormControl<string | null | undefined>,
		contentHandling: FormControl<ContentHandlingStrategy | null | undefined>,
		timeoutInMillis: FormControl<number | null | undefined>,
	}
	export function CreatePutIntegrationRequestFormGroup() {
		return new FormGroup<PutIntegrationRequestFormProperties>({
			type: new FormControl<IntegrationType | null | undefined>(undefined, [Validators.required]),
			integrationHttpMethod: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			connectionType: new FormControl<ConnectionType | null | undefined>(undefined),
			connectionId: new FormControl<string | null | undefined>(undefined),
			credentials: new FormControl<string | null | undefined>(undefined),
			passthroughBehavior: new FormControl<string | null | undefined>(undefined),
			cacheNamespace: new FormControl<string | null | undefined>(undefined),
			contentHandling: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
			timeoutInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a put integration response request. */
	export interface PutIntegrationResponseRequest {
		selectionPattern?: string;
		responseParameters?: MapOfStringToString;
		responseTemplates?: MapOfStringToString;
		contentHandling?: ContentHandlingStrategy;
	}

	/** Represents a put integration response request. */
	export interface PutIntegrationResponseRequestFormProperties {
		selectionPattern: FormControl<string | null | undefined>,
		contentHandling: FormControl<ContentHandlingStrategy | null | undefined>,
	}
	export function CreatePutIntegrationResponseRequestFormGroup() {
		return new FormGroup<PutIntegrationResponseRequestFormProperties>({
			selectionPattern: new FormControl<string | null | undefined>(undefined),
			contentHandling: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
		});

	}


	/** Request to add a method to an existing Resource resource. */
	export interface PutMethodRequest {

		/** Required */
		authorizationType: string;
		authorizerId?: string;
		apiKeyRequired?: boolean | null;
		operationName?: string;
		requestParameters?: MapOfStringToBoolean;
		requestModels?: MapOfStringToString;
		requestValidatorId?: string;
		authorizationScopes?: Array<string>;
	}

	/** Request to add a method to an existing Resource resource. */
	export interface PutMethodRequestFormProperties {

		/** Required */
		authorizationType: FormControl<string | null | undefined>,
		authorizerId: FormControl<string | null | undefined>,
		apiKeyRequired: FormControl<boolean | null | undefined>,
		operationName: FormControl<string | null | undefined>,
		requestValidatorId: FormControl<string | null | undefined>,
	}
	export function CreatePutMethodRequestFormGroup() {
		return new FormGroup<PutMethodRequestFormProperties>({
			authorizationType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authorizerId: new FormControl<string | null | undefined>(undefined),
			apiKeyRequired: new FormControl<boolean | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
			requestValidatorId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to add a MethodResponse to an existing Method resource. */
	export interface PutMethodResponseRequest {
		responseParameters?: MapOfStringToBoolean;
		responseModels?: MapOfStringToString;
	}

	/** Request to add a MethodResponse to an existing Method resource. */
	export interface PutMethodResponseRequestFormProperties {
	}
	export function CreatePutMethodResponseRequestFormGroup() {
		return new FormGroup<PutMethodResponseRequestFormProperties>({
		});

	}


	/** A PUT request to update an existing API, with external API definitions specified as the request body. */
	export interface PutRestApiRequest {

		/** Required */
		body: string;
	}

	/** A PUT request to update an existing API, with external API definitions specified as the request body. */
	export interface PutRestApiRequestFormProperties {

		/** Required */
		body: FormControl<string | null | undefined>,
	}
	export function CreatePutRestApiRequestFormGroup() {
		return new FormGroup<PutRestApiRequestFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Adds or updates a tag on a given resource. */
	export interface TagResourceRequest {

		/** Required */
		tags: MapOfStringToString;
	}

	/** Adds or updates a tag on a given resource. */
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}


	/** Make a request to simulate the invocation of an Authorizer. */
	export interface TestInvokeAuthorizerRequest {
		headers?: MapOfStringToString;
		multiValueHeaders?: MapOfStringToList;
		pathWithQueryString?: string;
		body?: string;
		stageVariables?: MapOfStringToString;
		additionalContext?: MapOfStringToString;
	}

	/** Make a request to simulate the invocation of an Authorizer. */
	export interface TestInvokeAuthorizerRequestFormProperties {
		pathWithQueryString: FormControl<string | null | undefined>,
		body: FormControl<string | null | undefined>,
	}
	export function CreateTestInvokeAuthorizerRequestFormGroup() {
		return new FormGroup<TestInvokeAuthorizerRequestFormProperties>({
			pathWithQueryString: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Make a request to simulate the invocation of a Method. */
	export interface TestInvokeMethodRequest {
		pathWithQueryString?: string;
		body?: string;
		headers?: MapOfStringToString;
		multiValueHeaders?: MapOfStringToList;
		clientCertificateId?: string;
		stageVariables?: MapOfStringToString;
	}

	/** Make a request to simulate the invocation of a Method. */
	export interface TestInvokeMethodRequestFormProperties {
		pathWithQueryString: FormControl<string | null | undefined>,
		body: FormControl<string | null | undefined>,
		clientCertificateId: FormControl<string | null | undefined>,
	}
	export function CreateTestInvokeMethodRequestFormGroup() {
		return new FormGroup<TestInvokeMethodRequestFormProperties>({
			pathWithQueryString: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			clientCertificateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Removes a tag from a given resource. */
	export interface UntagResourceRequest {
	}

	/** Removes a tag from a given resource. */
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}


	/** Requests API Gateway to change information about the current Account resource. */
	export interface UpdateAccountRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** Requests API Gateway to change information about the current Account resource. */
	export interface UpdateAccountRequestFormProperties {
	}
	export function CreateUpdateAccountRequestFormGroup() {
		return new FormGroup<UpdateAccountRequestFormProperties>({
		});

	}


	/** A request to change information about an ApiKey resource. */
	export interface UpdateApiKeyRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** A request to change information about an ApiKey resource. */
	export interface UpdateApiKeyRequestFormProperties {
	}
	export function CreateUpdateApiKeyRequestFormGroup() {
		return new FormGroup<UpdateApiKeyRequestFormProperties>({
		});

	}


	/** Request to update an existing Authorizer resource. */
	export interface UpdateAuthorizerRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** Request to update an existing Authorizer resource. */
	export interface UpdateAuthorizerRequestFormProperties {
	}
	export function CreateUpdateAuthorizerRequestFormGroup() {
		return new FormGroup<UpdateAuthorizerRequestFormProperties>({
		});

	}


	/** A request to change information about the BasePathMapping resource. */
	export interface UpdateBasePathMappingRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** A request to change information about the BasePathMapping resource. */
	export interface UpdateBasePathMappingRequestFormProperties {
	}
	export function CreateUpdateBasePathMappingRequestFormGroup() {
		return new FormGroup<UpdateBasePathMappingRequestFormProperties>({
		});

	}


	/** A request to change information about an ClientCertificate resource. */
	export interface UpdateClientCertificateRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** A request to change information about an ClientCertificate resource. */
	export interface UpdateClientCertificateRequestFormProperties {
	}
	export function CreateUpdateClientCertificateRequestFormGroup() {
		return new FormGroup<UpdateClientCertificateRequestFormProperties>({
		});

	}


	/** Requests API Gateway to change information about a Deployment resource. */
	export interface UpdateDeploymentRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** Requests API Gateway to change information about a Deployment resource. */
	export interface UpdateDeploymentRequestFormProperties {
	}
	export function CreateUpdateDeploymentRequestFormGroup() {
		return new FormGroup<UpdateDeploymentRequestFormProperties>({
		});

	}


	/** Updates an existing documentation part of a given API. */
	export interface UpdateDocumentationPartRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** Updates an existing documentation part of a given API. */
	export interface UpdateDocumentationPartRequestFormProperties {
	}
	export function CreateUpdateDocumentationPartRequestFormGroup() {
		return new FormGroup<UpdateDocumentationPartRequestFormProperties>({
		});

	}


	/** Updates an existing documentation version of an API. */
	export interface UpdateDocumentationVersionRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** Updates an existing documentation version of an API. */
	export interface UpdateDocumentationVersionRequestFormProperties {
	}
	export function CreateUpdateDocumentationVersionRequestFormGroup() {
		return new FormGroup<UpdateDocumentationVersionRequestFormProperties>({
		});

	}


	/** A request to change information about the DomainName resource. */
	export interface UpdateDomainNameRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** A request to change information about the DomainName resource. */
	export interface UpdateDomainNameRequestFormProperties {
	}
	export function CreateUpdateDomainNameRequestFormGroup() {
		return new FormGroup<UpdateDomainNameRequestFormProperties>({
		});

	}


	/** Updates a GatewayResponse of a specified response type on the given RestApi. */
	export interface UpdateGatewayResponseRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** Updates a GatewayResponse of a specified response type on the given RestApi. */
	export interface UpdateGatewayResponseRequestFormProperties {
	}
	export function CreateUpdateGatewayResponseRequestFormGroup() {
		return new FormGroup<UpdateGatewayResponseRequestFormProperties>({
		});

	}


	/** Represents an update integration request. */
	export interface UpdateIntegrationRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** Represents an update integration request. */
	export interface UpdateIntegrationRequestFormProperties {
	}
	export function CreateUpdateIntegrationRequestFormGroup() {
		return new FormGroup<UpdateIntegrationRequestFormProperties>({
		});

	}


	/** Represents an update integration response request. */
	export interface UpdateIntegrationResponseRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** Represents an update integration response request. */
	export interface UpdateIntegrationResponseRequestFormProperties {
	}
	export function CreateUpdateIntegrationResponseRequestFormGroup() {
		return new FormGroup<UpdateIntegrationResponseRequestFormProperties>({
		});

	}


	/** Request to update an existing Method resource. */
	export interface UpdateMethodRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** Request to update an existing Method resource. */
	export interface UpdateMethodRequestFormProperties {
	}
	export function CreateUpdateMethodRequestFormGroup() {
		return new FormGroup<UpdateMethodRequestFormProperties>({
		});

	}


	/** A request to update an existing MethodResponse resource. */
	export interface UpdateMethodResponseRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** A request to update an existing MethodResponse resource. */
	export interface UpdateMethodResponseRequestFormProperties {
	}
	export function CreateUpdateMethodResponseRequestFormGroup() {
		return new FormGroup<UpdateMethodResponseRequestFormProperties>({
		});

	}


	/** Request to update an existing model in an existing RestApi resource. */
	export interface UpdateModelRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** Request to update an existing model in an existing RestApi resource. */
	export interface UpdateModelRequestFormProperties {
	}
	export function CreateUpdateModelRequestFormGroup() {
		return new FormGroup<UpdateModelRequestFormProperties>({
		});

	}


	/** Updates a RequestValidator of a given RestApi. */
	export interface UpdateRequestValidatorRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** Updates a RequestValidator of a given RestApi. */
	export interface UpdateRequestValidatorRequestFormProperties {
	}
	export function CreateUpdateRequestValidatorRequestFormGroup() {
		return new FormGroup<UpdateRequestValidatorRequestFormProperties>({
		});

	}


	/** Request to change information about a Resource resource. */
	export interface UpdateResourceRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** Request to change information about a Resource resource. */
	export interface UpdateResourceRequestFormProperties {
	}
	export function CreateUpdateResourceRequestFormGroup() {
		return new FormGroup<UpdateResourceRequestFormProperties>({
		});

	}


	/** Request to update an existing RestApi resource in your collection. */
	export interface UpdateRestApiRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** Request to update an existing RestApi resource in your collection. */
	export interface UpdateRestApiRequestFormProperties {
	}
	export function CreateUpdateRestApiRequestFormGroup() {
		return new FormGroup<UpdateRestApiRequestFormProperties>({
		});

	}


	/** Requests API Gateway to change information about a Stage resource. */
	export interface UpdateStageRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** Requests API Gateway to change information about a Stage resource. */
	export interface UpdateStageRequestFormProperties {
	}
	export function CreateUpdateStageRequestFormGroup() {
		return new FormGroup<UpdateStageRequestFormProperties>({
		});

	}


	/** The PATCH request to update a usage plan of a given plan Id. */
	export interface UpdateUsagePlanRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** The PATCH request to update a usage plan of a given plan Id. */
	export interface UpdateUsagePlanRequestFormProperties {
	}
	export function CreateUpdateUsagePlanRequestFormGroup() {
		return new FormGroup<UpdateUsagePlanRequestFormProperties>({
		});

	}


	/** The PATCH request to grant a temporary extension to the remaining quota of a usage plan associated with a specified API key. */
	export interface UpdateUsageRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** The PATCH request to grant a temporary extension to the remaining quota of a usage plan associated with a specified API key. */
	export interface UpdateUsageRequestFormProperties {
	}
	export function CreateUpdateUsageRequestFormGroup() {
		return new FormGroup<UpdateUsageRequestFormProperties>({
		});

	}


	/** Updates an existing VpcLink of a specified identifier. */
	export interface UpdateVpcLinkRequest {
		patchOperations?: Array<PatchOperation>;
	}

	/** Updates an existing VpcLink of a specified identifier. */
	export interface UpdateVpcLinkRequestFormProperties {
	}
	export function CreateUpdateVpcLinkRequestFormGroup() {
		return new FormGroup<UpdateVpcLinkRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create an ApiKey resource.
		 * Post apikeys
		 * @return {void} 
		 */
		CreateApiKey(requestBody: CreateApiKeyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apikeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the current ApiKeys resource.
		 * Get apikeys
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} name The name of queried API keys.
		 * @param {string} customerId The identifier of a customer in AWS Marketplace or an external system, such as a developer portal.
		 * @param {boolean} includeValues A boolean flag to specify whether (<code>true</code>) or not (<code>false</code>) the result contains key values.
		 * @return {ApiKeys} Success
		 */
		GetApiKeys(position: string | null | undefined, limit: number | null | undefined, name: string | null | undefined, customerId: string | null | undefined, includeValues: boolean | null | undefined): Observable<ApiKeys> {
			return this.http.get<ApiKeys>(this.baseUri + 'apikeys?position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&customerId=' + (customerId == null ? '' : encodeURIComponent(customerId)) + '&includeValues=' + includeValues, {});
		}

		/**
		 * Adds a new Authorizer resource to an existing RestApi resource.
		 * Post restapis/{restapi_id}/authorizers
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @return {void} 
		 */
		CreateAuthorizer(restapi_id: string, requestBody: CreateAuthorizerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/authorizers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Describe an existing Authorizers resource.
		 * Get restapis/{restapi_id}/authorizers
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Authorizers} Success
		 */
		GetAuthorizers(restapi_id: string, position: string | null | undefined, limit: number | null | undefined): Observable<Authorizers> {
			return this.http.get<Authorizers>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/authorizers&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, {});
		}

		/**
		 * Creates a new BasePathMapping resource.
		 * Post domainnames/{domain_name}/basepathmappings
		 * @param {string} domain_name The domain name of the BasePathMapping resource to create.
		 * @return {void} 
		 */
		CreateBasePathMapping(domain_name: string, requestBody: CreateBasePathMappingPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'domainnames/' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '/basepathmappings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Represents a collection of BasePathMapping resources.
		 * Get domainnames/{domain_name}/basepathmappings
		 * @param {string} domain_name The domain name of a BasePathMapping resource.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {BasePathMappings} Success
		 */
		GetBasePathMappings(domain_name: string, position: string | null | undefined, limit: number | null | undefined): Observable<BasePathMappings> {
			return this.http.get<BasePathMappings>(this.baseUri + 'domainnames/' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '/basepathmappings&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, {});
		}

		/**
		 * Creates a Deployment resource, which makes a specified RestApi callable over the internet.
		 * Post restapis/{restapi_id}/deployments
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @return {void} 
		 */
		CreateDeployment(restapi_id: string, requestBody: CreateDeploymentPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/deployments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a Deployments collection.
		 * Get restapis/{restapi_id}/deployments
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Deployments} Success
		 */
		GetDeployments(restapi_id: string, position: string | null | undefined, limit: number | null | undefined): Observable<Deployments> {
			return this.http.get<Deployments>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/deployments&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, {});
		}

		/**
		 * Creates a documentation part.
		 * Post restapis/{restapi_id}/documentation/parts
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @return {void} 
		 */
		CreateDocumentationPart(restapi_id: string, requestBody: CreateDocumentationPartPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/parts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets documentation parts.
		 * Get restapis/{restapi_id}/documentation/parts
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {DocumentationPartType} type The type of API entities of the to-be-retrieved documentation parts. 
		 * @param {string} name The name of API entities of the to-be-retrieved documentation parts.
		 * @param {string} path The path of API entities of the to-be-retrieved documentation parts.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {LocationStatusType} locationStatus The status of the API documentation parts to retrieve. Valid values are <code>DOCUMENTED</code> for retrieving DocumentationPart resources with content and <code>UNDOCUMENTED</code> for DocumentationPart resources without content.
		 * @return {DocumentationParts} Success
		 */
		GetDocumentationParts(restapi_id: string, type: DocumentationPartType | null | undefined, name: string | null | undefined, path: string | null | undefined, position: string | null | undefined, limit: number | null | undefined, locationStatus: LocationStatusType | null | undefined): Observable<DocumentationParts> {
			return this.http.get<DocumentationParts>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/parts&type=' + type + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&path=' + (path == null ? '' : encodeURIComponent(path)) + '&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit + '&locationStatus=' + locationStatus, {});
		}

		/**
		 * Imports documentation parts
		 * Put restapis/{restapi_id}/documentation/parts
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {PutMode} mode A query parameter to indicate whether to overwrite (<code>OVERWRITE</code>) any existing DocumentationParts definition or to merge (<code>MERGE</code>) the new definition into the existing one. The default value is <code>MERGE</code>.
		 * @param {boolean} failonwarnings A query parameter to specify whether to rollback the documentation importation (<code>true</code>) or not (<code>false</code>) when a warning is encountered. The default value is <code>false</code>.
		 * @return {DocumentationPartIds} Success
		 */
		ImportDocumentationParts(restapi_id: string, mode: PutMode | null | undefined, failonwarnings: boolean | null | undefined, requestBody: ImportDocumentationPartsPutBody): Observable<DocumentationPartIds> {
			return this.http.put<DocumentationPartIds>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/parts&mode=' + mode + '&failonwarnings=' + failonwarnings, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a documentation version
		 * Post restapis/{restapi_id}/documentation/versions
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @return {void} 
		 */
		CreateDocumentationVersion(restapi_id: string, requestBody: CreateDocumentationVersionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets documentation versions.
		 * Get restapis/{restapi_id}/documentation/versions
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DocumentationVersions} Success
		 */
		GetDocumentationVersions(restapi_id: string, position: string | null | undefined, limit: number | null | undefined): Observable<DocumentationVersions> {
			return this.http.get<DocumentationVersions>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/versions&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, {});
		}

		/**
		 * Creates a new domain name.
		 * Post domainnames
		 * @return {void} 
		 */
		CreateDomainName(requestBody: CreateDomainNamePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'domainnames', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Represents a collection of DomainName resources.
		 * Get domainnames
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DomainNames} Success
		 */
		GetDomainNames(position: string | null | undefined, limit: number | null | undefined): Observable<DomainNames> {
			return this.http.get<DomainNames>(this.baseUri + 'domainnames?position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, {});
		}

		/**
		 * Adds a new Model resource to an existing RestApi resource.
		 * Post restapis/{restapi_id}/models
		 * @param {string} restapi_id The RestApi identifier under which the Model will be created.
		 * @return {void} 
		 */
		CreateModel(restapi_id: string, requestBody: CreateModelPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/models', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes existing Models defined for a RestApi resource.
		 * Get restapis/{restapi_id}/models
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Models} Success
		 */
		GetModels(restapi_id: string, position: string | null | undefined, limit: number | null | undefined): Observable<Models> {
			return this.http.get<Models>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/models&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, {});
		}

		/**
		 * Creates a RequestValidator of a given RestApi.
		 * Post restapis/{restapi_id}/requestvalidators
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @return {void} 
		 */
		CreateRequestValidator(restapi_id: string, requestBody: CreateRequestValidatorPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/requestvalidators', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the RequestValidators collection of a given RestApi.
		 * Get restapis/{restapi_id}/requestvalidators
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {RequestValidators} Success
		 */
		GetRequestValidators(restapi_id: string, position: string | null | undefined, limit: number | null | undefined): Observable<RequestValidators> {
			return this.http.get<RequestValidators>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/requestvalidators&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, {});
		}

		/**
		 * Creates a Resource resource.
		 * Post restapis/{restapi_id}/resources/{parent_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} parent_id The parent resource's identifier.
		 * @return {void} 
		 */
		CreateResource(restapi_id: string, parent_id: string, requestBody: CreateResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (parent_id == null ? '' : encodeURIComponent(parent_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new RestApi resource.
		 * Post restapis
		 * @return {void} 
		 */
		CreateRestApi(requestBody: CreateRestApiPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'restapis', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the RestApis resources for your collection.
		 * Get restapis
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {RestApis} Success
		 */
		GetRestApis(position: string | null | undefined, limit: number | null | undefined): Observable<RestApis> {
			return this.http.get<RestApis>(this.baseUri + 'restapis?position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, {});
		}

		/**
		 * Creates a new Stage resource that references a pre-existing Deployment for the API.
		 * Post restapis/{restapi_id}/stages
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @return {void} 
		 */
		CreateStage(restapi_id: string, requestBody: CreateStagePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/stages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about one or more Stage resources.
		 * Get restapis/{restapi_id}/stages
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} deploymentId The stages' deployment identifiers.
		 * @return {Stages} Success
		 */
		GetStages(restapi_id: string, deploymentId: string | null | undefined): Observable<Stages> {
			return this.http.get<Stages>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/stages&deploymentId=' + (deploymentId == null ? '' : encodeURIComponent(deploymentId)), {});
		}

		/**
		 * Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload.
		 * Post usageplans
		 * @return {void} 
		 */
		CreateUsagePlan(requestBody: CreateUsagePlanPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'usageplans', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all the usage plans of the caller's account.
		 * Get usageplans
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {string} keyId The identifier of the API key associated with the usage plans.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {UsagePlans} Success
		 */
		GetUsagePlans(position: string | null | undefined, keyId: string | null | undefined, limit: number | null | undefined): Observable<UsagePlans> {
			return this.http.get<UsagePlans>(this.baseUri + 'usageplans?position=' + (position == null ? '' : encodeURIComponent(position)) + '&keyId=' + (keyId == null ? '' : encodeURIComponent(keyId)) + '&limit=' + limit, {});
		}

		/**
		 * Creates a usage plan key for adding an existing API key to a usage plan.
		 * Post usageplans/{usageplanId}/keys
		 * @param {string} usageplanId The Id of the UsagePlan resource representing the usage plan containing the to-be-created UsagePlanKey resource representing a plan customer.
		 * @return {void} 
		 */
		CreateUsagePlanKey(usageplanId: string, requestBody: CreateUsagePlanKeyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'usageplans/' + (usageplanId == null ? '' : encodeURIComponent(usageplanId)) + '/keys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all the usage plan keys representing the API keys added to a specified usage plan.
		 * Get usageplans/{usageplanId}/keys
		 * @param {string} usageplanId The Id of the UsagePlan resource representing the usage plan containing the to-be-retrieved UsagePlanKey resource representing a plan customer.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} name A query parameter specifying the name of the to-be-returned usage plan keys.
		 * @return {UsagePlanKeys} Success
		 */
		GetUsagePlanKeys(usageplanId: string, position: string | null | undefined, limit: number | null | undefined, name: string | null | undefined): Observable<UsagePlanKeys> {
			return this.http.get<UsagePlanKeys>(this.baseUri + 'usageplans/' + (usageplanId == null ? '' : encodeURIComponent(usageplanId)) + '/keys&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit + '&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.
		 * Post vpclinks
		 * @return {void} 
		 */
		CreateVpcLink(requestBody: CreateVpcLinkPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'vpclinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the VpcLinks collection under the caller's account in a selected region.
		 * Get vpclinks
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {VpcLinks} Success
		 */
		GetVpcLinks(position: string | null | undefined, limit: number | null | undefined): Observable<VpcLinks> {
			return this.http.get<VpcLinks>(this.baseUri + 'vpclinks?position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, {});
		}

		/**
		 * Deletes the ApiKey resource.
		 * Delete apikeys/{api_Key}
		 * @param {string} api_Key The identifier of the ApiKey resource to be deleted.
		 * @return {void} 
		 */
		DeleteApiKey(api_Key: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'apikeys/' + (api_Key == null ? '' : encodeURIComponent(api_Key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the current ApiKey resource.
		 * Get apikeys/{api_Key}
		 * @param {string} api_Key The identifier of the ApiKey resource.
		 * @param {boolean} includeValue A boolean flag to specify whether (<code>true</code>) or not (<code>false</code>) the result contains the key value.
		 * @return {ApiKey} Success
		 */
		GetApiKey(api_Key: string, includeValue: boolean | null | undefined): Observable<ApiKey> {
			return this.http.get<ApiKey>(this.baseUri + 'apikeys/' + (api_Key == null ? '' : encodeURIComponent(api_Key)) + '&includeValue=' + includeValue, {});
		}

		/**
		 * Changes information about an ApiKey resource.
		 * Patch apikeys/{api_Key}
		 * @param {string} api_Key The identifier of the ApiKey resource to be updated.
		 * @return {ApiKey} Success
		 */
		UpdateApiKey(api_Key: string, requestBody: UpdateApiKeyPatchBody): Observable<ApiKey> {
			return this.http.patch<ApiKey>(this.baseUri + 'apikeys/' + (api_Key == null ? '' : encodeURIComponent(api_Key)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing Authorizer resource.
		 * Delete restapis/{restapi_id}/authorizers/{authorizer_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} authorizer_id The identifier of the Authorizer resource.
		 * @return {void} 
		 */
		DeleteAuthorizer(restapi_id: string, authorizer_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/authorizers/' + (authorizer_id == null ? '' : encodeURIComponent(authorizer_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describe an existing Authorizer resource.
		 * Get restapis/{restapi_id}/authorizers/{authorizer_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} authorizer_id The identifier of the Authorizer resource.
		 * @return {Authorizer} Success
		 */
		GetAuthorizer(restapi_id: string, authorizer_id: string): Observable<Authorizer> {
			return this.http.get<Authorizer>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/authorizers/' + (authorizer_id == null ? '' : encodeURIComponent(authorizer_id)), {});
		}

		/**
		 * Simulate the execution of an Authorizer in your RestApi with headers, parameters, and an incoming request body.
		 * Post restapis/{restapi_id}/authorizers/{authorizer_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} authorizer_id Specifies a test invoke authorizer request's Authorizer ID.
		 * @return {TestInvokeAuthorizerResponse} Success
		 */
		TestInvokeAuthorizer(restapi_id: string, authorizer_id: string, requestBody: TestInvokeAuthorizerPostBody): Observable<TestInvokeAuthorizerResponse> {
			return this.http.post<TestInvokeAuthorizerResponse>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/authorizers/' + (authorizer_id == null ? '' : encodeURIComponent(authorizer_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing Authorizer resource.
		 * Patch restapis/{restapi_id}/authorizers/{authorizer_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} authorizer_id The identifier of the Authorizer resource.
		 * @return {Authorizer} Success
		 */
		UpdateAuthorizer(restapi_id: string, authorizer_id: string, requestBody: UpdateAuthorizerPatchBody): Observable<Authorizer> {
			return this.http.patch<Authorizer>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/authorizers/' + (authorizer_id == null ? '' : encodeURIComponent(authorizer_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the BasePathMapping resource.
		 * Delete domainnames/{domain_name}/basepathmappings/{base_path}
		 * @param {string} domain_name The domain name of the BasePathMapping resource to delete.
		 * @param {string} base_path <p>The base path name of the BasePathMapping resource to delete.</p> <p>To specify an empty base path, set this parameter to <code>'(none)'</code>.</p>
		 * @return {void} 
		 */
		DeleteBasePathMapping(domain_name: string, base_path: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'domainnames/' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '/basepathmappings/' + (base_path == null ? '' : encodeURIComponent(base_path)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describe a BasePathMapping resource.
		 * Get domainnames/{domain_name}/basepathmappings/{base_path}
		 * @param {string} domain_name The domain name of the BasePathMapping resource to be described.
		 * @param {string} base_path The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify any base path name after the domain name.
		 * @return {BasePathMapping} Success
		 */
		GetBasePathMapping(domain_name: string, base_path: string): Observable<BasePathMapping> {
			return this.http.get<BasePathMapping>(this.baseUri + 'domainnames/' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '/basepathmappings/' + (base_path == null ? '' : encodeURIComponent(base_path)), {});
		}

		/**
		 * Changes information about the BasePathMapping resource.
		 * Patch domainnames/{domain_name}/basepathmappings/{base_path}
		 * @param {string} domain_name The domain name of the BasePathMapping resource to change.
		 * @param {string} base_path <p>The base path of the BasePathMapping resource to change.</p> <p>To specify an empty base path, set this parameter to <code>'(none)'</code>.</p>
		 * @return {BasePathMapping} Success
		 */
		UpdateBasePathMapping(domain_name: string, base_path: string, requestBody: UpdateBasePathMappingPatchBody): Observable<BasePathMapping> {
			return this.http.patch<BasePathMapping>(this.baseUri + 'domainnames/' + (domain_name == null ? '' : encodeURIComponent(domain_name)) + '/basepathmappings/' + (base_path == null ? '' : encodeURIComponent(base_path)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the ClientCertificate resource.
		 * Delete clientcertificates/{clientcertificate_id}
		 * @param {string} clientcertificate_id The identifier of the ClientCertificate resource to be deleted.
		 * @return {void} 
		 */
		DeleteClientCertificate(clientcertificate_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'clientcertificates/' + (clientcertificate_id == null ? '' : encodeURIComponent(clientcertificate_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about the current ClientCertificate resource.
		 * Get clientcertificates/{clientcertificate_id}
		 * @param {string} clientcertificate_id The identifier of the ClientCertificate resource to be described.
		 * @return {ClientCertificate} Success
		 */
		GetClientCertificate(clientcertificate_id: string): Observable<ClientCertificate> {
			return this.http.get<ClientCertificate>(this.baseUri + 'clientcertificates/' + (clientcertificate_id == null ? '' : encodeURIComponent(clientcertificate_id)), {});
		}

		/**
		 * Changes information about an ClientCertificate resource.
		 * Patch clientcertificates/{clientcertificate_id}
		 * @param {string} clientcertificate_id The identifier of the ClientCertificate resource to be updated.
		 * @return {ClientCertificate} Success
		 */
		UpdateClientCertificate(clientcertificate_id: string, requestBody: UpdateClientCertificatePatchBody): Observable<ClientCertificate> {
			return this.http.patch<ClientCertificate>(this.baseUri + 'clientcertificates/' + (clientcertificate_id == null ? '' : encodeURIComponent(clientcertificate_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Deployment resource. Deleting a deployment will only succeed if there are no Stage resources associated with it.
		 * Delete restapis/{restapi_id}/deployments/{deployment_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} deployment_id The identifier of the Deployment resource to delete.
		 * @return {void} 
		 */
		DeleteDeployment(restapi_id: string, deployment_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/deployments/' + (deployment_id == null ? '' : encodeURIComponent(deployment_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a Deployment resource.
		 * Get restapis/{restapi_id}/deployments/{deployment_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} deployment_id The identifier of the Deployment resource to get information about.
		 * @param {Array<string>} embed A query parameter to retrieve the specified embedded resources of the returned Deployment resource in the response. In a REST API call, this <code>embed</code> parameter value is a list of comma-separated strings, as in <code>GET /restapis/{restapi_id}/deployments/{deployment_id}?embed=var1,var2</code>. The SDK and other platform-dependent libraries might use a different format for the list. Currently, this request supports only retrieval of the embedded API summary this way. Hence, the parameter value must be a single-valued list containing only the <code>"apisummary"</code> string. For example, <code>GET /restapis/{restapi_id}/deployments/{deployment_id}?embed=apisummary</code>.
		 * @return {Deployment} Success
		 */
		GetDeployment(restapi_id: string, deployment_id: string, embed: Array<string> | null | undefined): Observable<Deployment> {
			return this.http.get<Deployment>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/deployments/' + (deployment_id == null ? '' : encodeURIComponent(deployment_id)) + '&' + embed?.map(z => `embed=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Changes information about a Deployment resource.
		 * Patch restapis/{restapi_id}/deployments/{deployment_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} deployment_id The replacement identifier for the Deployment resource to change information about.
		 * @return {Deployment} Success
		 */
		UpdateDeployment(restapi_id: string, deployment_id: string, requestBody: UpdateDeploymentPatchBody): Observable<Deployment> {
			return this.http.patch<Deployment>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/deployments/' + (deployment_id == null ? '' : encodeURIComponent(deployment_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a documentation part
		 * Delete restapis/{restapi_id}/documentation/parts/{part_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} part_id The identifier of the to-be-deleted documentation part.
		 * @return {void} 
		 */
		DeleteDocumentationPart(restapi_id: string, part_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/parts/' + (part_id == null ? '' : encodeURIComponent(part_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a documentation part.
		 * Get restapis/{restapi_id}/documentation/parts/{part_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} part_id The string identifier of the associated RestApi.
		 * @return {DocumentationPart} Success
		 */
		GetDocumentationPart(restapi_id: string, part_id: string): Observable<DocumentationPart> {
			return this.http.get<DocumentationPart>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/parts/' + (part_id == null ? '' : encodeURIComponent(part_id)), {});
		}

		/**
		 * Updates a documentation part.
		 * Patch restapis/{restapi_id}/documentation/parts/{part_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} part_id The identifier of the to-be-updated documentation part.
		 * @return {DocumentationPart} Success
		 */
		UpdateDocumentationPart(restapi_id: string, part_id: string, requestBody: UpdateDocumentationPartPatchBody): Observable<DocumentationPart> {
			return this.http.patch<DocumentationPart>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/parts/' + (part_id == null ? '' : encodeURIComponent(part_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a documentation version.
		 * Delete restapis/{restapi_id}/documentation/versions/{doc_version}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} doc_version The version identifier of a to-be-deleted documentation snapshot.
		 * @return {void} 
		 */
		DeleteDocumentationVersion(restapi_id: string, doc_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/versions/' + (doc_version == null ? '' : encodeURIComponent(doc_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a documentation version.
		 * Get restapis/{restapi_id}/documentation/versions/{doc_version}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} doc_version The version identifier of the to-be-retrieved documentation snapshot.
		 * @return {DocumentationVersion} Success
		 */
		GetDocumentationVersion(restapi_id: string, doc_version: string): Observable<DocumentationVersion> {
			return this.http.get<DocumentationVersion>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/versions/' + (doc_version == null ? '' : encodeURIComponent(doc_version)), {});
		}

		/**
		 * Updates a documentation version.
		 * Patch restapis/{restapi_id}/documentation/versions/{doc_version}
		 * @param {string} restapi_id The string identifier of the associated RestApi..
		 * @param {string} doc_version The version identifier of the to-be-updated documentation version.
		 * @return {DocumentationVersion} Success
		 */
		UpdateDocumentationVersion(restapi_id: string, doc_version: string, requestBody: UpdateDocumentationVersionPatchBody): Observable<DocumentationVersion> {
			return this.http.patch<DocumentationVersion>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/documentation/versions/' + (doc_version == null ? '' : encodeURIComponent(doc_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the DomainName resource.
		 * Delete domainnames/{domain_name}
		 * @param {string} domain_name The name of the DomainName resource to be deleted.
		 * @return {void} 
		 */
		DeleteDomainName(domain_name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'domainnames/' + (domain_name == null ? '' : encodeURIComponent(domain_name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Represents a domain name that is contained in a simpler, more intuitive URL that can be called.
		 * Get domainnames/{domain_name}
		 * @param {string} domain_name The name of the DomainName resource.
		 * @return {DomainName} Success
		 */
		GetDomainName(domain_name: string): Observable<DomainName> {
			return this.http.get<DomainName>(this.baseUri + 'domainnames/' + (domain_name == null ? '' : encodeURIComponent(domain_name)), {});
		}

		/**
		 * Changes information about the DomainName resource.
		 * Patch domainnames/{domain_name}
		 * @param {string} domain_name The name of the DomainName resource to be changed.
		 * @return {DomainName} Success
		 */
		UpdateDomainName(domain_name: string, requestBody: UpdateDomainNamePatchBody): Observable<DomainName> {
			return this.http.patch<DomainName>(this.baseUri + 'domainnames/' + (domain_name == null ? '' : encodeURIComponent(domain_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Clears any customization of a GatewayResponse of a specified response type on the given RestApi and resets it with the default settings.
		 * Delete restapis/{restapi_id}/gatewayresponses/{response_type}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {GatewayResponseType} response_type The response type of the associated GatewayResponse.
		 * @return {void} 
		 */
		DeleteGatewayResponse(restapi_id: string, response_type: GatewayResponseType): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/gatewayresponses/' + response_type, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a GatewayResponse of a specified response type on the given RestApi.
		 * Get restapis/{restapi_id}/gatewayresponses/{response_type}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {GatewayResponseType} response_type The response type of the associated GatewayResponse.
		 * @return {GatewayResponse} Success
		 */
		GetGatewayResponse(restapi_id: string, response_type: GatewayResponseType): Observable<GatewayResponse> {
			return this.http.get<GatewayResponse>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/gatewayresponses/' + response_type, {});
		}

		/**
		 * Creates a customization of a GatewayResponse of a specified response type and status code on the given RestApi.
		 * Put restapis/{restapi_id}/gatewayresponses/{response_type}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {GatewayResponseType} response_type The response type of the associated GatewayResponse
		 * @return {void} 
		 */
		PutGatewayResponse(restapi_id: string, response_type: GatewayResponseType, requestBody: PutGatewayResponsePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/gatewayresponses/' + response_type, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a GatewayResponse of a specified response type on the given RestApi.
		 * Patch restapis/{restapi_id}/gatewayresponses/{response_type}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {GatewayResponseType} response_type The response type of the associated GatewayResponse.
		 * @return {GatewayResponse} Success
		 */
		UpdateGatewayResponse(restapi_id: string, response_type: GatewayResponseType, requestBody: UpdateGatewayResponsePatchBody): Observable<GatewayResponse> {
			return this.http.patch<GatewayResponse>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/gatewayresponses/' + response_type, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Represents a delete integration.
		 * Delete restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id Specifies a delete integration request's resource identifier.
		 * @param {string} http_method Specifies a delete integration request's HTTP method.
		 * @return {void} 
		 */
		DeleteIntegration(restapi_id: string, resource_id: string, http_method: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/integration', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the integration settings.
		 * Get restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id Specifies a get integration request's resource identifier
		 * @param {string} http_method Specifies a get integration request's HTTP method.
		 * @return {Integration} Success
		 */
		GetIntegration(restapi_id: string, resource_id: string, http_method: string): Observable<Integration> {
			return this.http.get<Integration>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/integration', {});
		}

		/**
		 * Sets up a method's integration.
		 * Put restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id Specifies a put integration request's resource ID.
		 * @param {string} http_method Specifies the HTTP method for the integration.
		 * @return {void} 
		 */
		PutIntegration(restapi_id: string, resource_id: string, http_method: string, requestBody: PutIntegrationPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/integration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Represents an update integration.
		 * Patch restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id Represents an update integration request's resource identifier.
		 * @param {string} http_method Represents an update integration request's HTTP method.
		 * @return {Integration} Success
		 */
		UpdateIntegration(restapi_id: string, resource_id: string, http_method: string, requestBody: UpdateIntegrationPatchBody): Observable<Integration> {
			return this.http.patch<Integration>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/integration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Represents a delete integration response.
		 * Delete restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id Specifies a delete integration response request's resource identifier.
		 * @param {string} http_method Specifies a delete integration response request's HTTP method.
		 * @param {string} status_code Specifies a delete integration response request's status code.
		 * @return {void} 
		 */
		DeleteIntegrationResponse(restapi_id: string, resource_id: string, http_method: string, status_code: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/integration/responses/' + (status_code == null ? '' : encodeURIComponent(status_code)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Represents a get integration response.
		 * Get restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id Specifies a get integration response request's resource identifier.
		 * @param {string} http_method Specifies a get integration response request's HTTP method.
		 * @param {string} status_code Specifies a get integration response request's status code.
		 * @return {IntegrationResponse} Success
		 */
		GetIntegrationResponse(restapi_id: string, resource_id: string, http_method: string, status_code: string): Observable<IntegrationResponse> {
			return this.http.get<IntegrationResponse>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/integration/responses/' + (status_code == null ? '' : encodeURIComponent(status_code)), {});
		}

		/**
		 * Represents a put integration.
		 * Put restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id Specifies a put integration response request's resource identifier.
		 * @param {string} http_method Specifies a put integration response request's HTTP method.
		 * @param {string} status_code Specifies the status code that is used to map the integration response to an existing MethodResponse.
		 * @return {void} 
		 */
		PutIntegrationResponse(restapi_id: string, resource_id: string, http_method: string, status_code: string, requestBody: PutIntegrationResponsePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/integration/responses/' + (status_code == null ? '' : encodeURIComponent(status_code)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Represents an update integration response.
		 * Patch restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id Specifies an update integration response request's resource identifier.
		 * @param {string} http_method Specifies an update integration response request's HTTP method.
		 * @param {string} status_code Specifies an update integration response request's status code.
		 * @return {IntegrationResponse} Success
		 */
		UpdateIntegrationResponse(restapi_id: string, resource_id: string, http_method: string, status_code: string, requestBody: UpdateIntegrationResponsePatchBody): Observable<IntegrationResponse> {
			return this.http.patch<IntegrationResponse>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/integration/responses/' + (status_code == null ? '' : encodeURIComponent(status_code)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing Method resource.
		 * Delete restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id The Resource identifier for the Method resource.
		 * @param {string} http_method The HTTP verb of the Method resource.
		 * @return {void} 
		 */
		DeleteMethod(restapi_id: string, resource_id: string, http_method: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describe an existing Method resource.
		 * Get restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id The Resource identifier for the Method resource.
		 * @param {string} http_method Specifies the method request's HTTP method type.
		 * @return {Method} Success
		 */
		GetMethod(restapi_id: string, resource_id: string, http_method: string): Observable<Method> {
			return this.http.get<Method>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)), {});
		}

		/**
		 * Add a method to an existing Resource resource.
		 * Put restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id The Resource identifier for the new Method resource.
		 * @param {string} http_method Specifies the method request's HTTP method type.
		 * @return {void} 
		 */
		PutMethod(restapi_id: string, resource_id: string, http_method: string, requestBody: PutMethodPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Simulate the invocation of a Method in your RestApi with headers, parameters, and an incoming request body.
		 * Post restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id Specifies a test invoke method request's resource ID.
		 * @param {string} http_method Specifies a test invoke method request's HTTP method.
		 * @return {TestInvokeMethodResponse} Success
		 */
		TestInvokeMethod(restapi_id: string, resource_id: string, http_method: string, requestBody: TestInvokeMethodPostBody): Observable<TestInvokeMethodResponse> {
			return this.http.post<TestInvokeMethodResponse>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an existing Method resource.
		 * Patch restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id The Resource identifier for the Method resource.
		 * @param {string} http_method The HTTP verb of the Method resource.
		 * @return {Method} Success
		 */
		UpdateMethod(restapi_id: string, resource_id: string, http_method: string, requestBody: UpdateMethodPatchBody): Observable<Method> {
			return this.http.patch<Method>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing MethodResponse resource.
		 * Delete restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id The Resource identifier for the MethodResponse resource.
		 * @param {string} http_method The HTTP verb of the Method resource.
		 * @param {string} status_code The status code identifier for the MethodResponse resource.
		 * @return {void} 
		 */
		DeleteMethodResponse(restapi_id: string, resource_id: string, http_method: string, status_code: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/responses/' + (status_code == null ? '' : encodeURIComponent(status_code)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes a MethodResponse resource.
		 * Get restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id The Resource identifier for the MethodResponse resource.
		 * @param {string} http_method The HTTP verb of the Method resource.
		 * @param {string} status_code The status code for the MethodResponse resource.
		 * @return {MethodResponse} Success
		 */
		GetMethodResponse(restapi_id: string, resource_id: string, http_method: string, status_code: string): Observable<MethodResponse> {
			return this.http.get<MethodResponse>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/responses/' + (status_code == null ? '' : encodeURIComponent(status_code)), {});
		}

		/**
		 * Adds a MethodResponse to an existing Method resource.
		 * Put restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id The Resource identifier for the Method resource.
		 * @param {string} http_method The HTTP verb of the Method resource.
		 * @param {string} status_code The method response's status code.
		 * @return {void} 
		 */
		PutMethodResponse(restapi_id: string, resource_id: string, http_method: string, status_code: string, requestBody: PutMethodResponsePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/responses/' + (status_code == null ? '' : encodeURIComponent(status_code)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing MethodResponse resource.
		 * Patch restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id The Resource identifier for the MethodResponse resource.
		 * @param {string} http_method The HTTP verb of the Method resource.
		 * @param {string} status_code The status code for the MethodResponse resource.
		 * @return {void} 
		 */
		UpdateMethodResponse(restapi_id: string, resource_id: string, http_method: string, status_code: string, requestBody: UpdateMethodResponsePatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '/methods/' + (http_method == null ? '' : encodeURIComponent(http_method)) + '/responses/' + (status_code == null ? '' : encodeURIComponent(status_code)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a model.
		 * Delete restapis/{restapi_id}/models/{model_name}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} model_name The name of the model to delete.
		 * @return {void} 
		 */
		DeleteModel(restapi_id: string, model_name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/models/' + (model_name == null ? '' : encodeURIComponent(model_name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes an existing model defined for a RestApi resource.
		 * Get restapis/{restapi_id}/models/{model_name}
		 * @param {string} restapi_id The RestApi identifier under which the Model exists.
		 * @param {string} model_name The name of the model as an identifier.
		 * @param {boolean} flatten A query parameter of a Boolean value to resolve (<code>true</code>) all external model references and returns a flattened model schema or not (<code>false</code>) The default is <code>false</code>.
		 * @return {Model} Success
		 */
		GetModel(restapi_id: string, model_name: string, flatten: boolean | null | undefined): Observable<Model> {
			return this.http.get<Model>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/models/' + (model_name == null ? '' : encodeURIComponent(model_name)) + '&flatten=' + flatten, {});
		}

		/**
		 * Changes information about a model.
		 * Patch restapis/{restapi_id}/models/{model_name}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} model_name The name of the model to update.
		 * @return {Model} Success
		 */
		UpdateModel(restapi_id: string, model_name: string, requestBody: UpdateModelPatchBody): Observable<Model> {
			return this.http.patch<Model>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/models/' + (model_name == null ? '' : encodeURIComponent(model_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a RequestValidator of a given RestApi.
		 * Delete restapis/{restapi_id}/requestvalidators/{requestvalidator_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} requestvalidator_id The identifier of the RequestValidator to be deleted.
		 * @return {void} 
		 */
		DeleteRequestValidator(restapi_id: string, requestvalidator_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/requestvalidators/' + (requestvalidator_id == null ? '' : encodeURIComponent(requestvalidator_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a RequestValidator of a given RestApi.
		 * Get restapis/{restapi_id}/requestvalidators/{requestvalidator_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} requestvalidator_id The identifier of the RequestValidator to be retrieved.
		 * @return {RequestValidator} Success
		 */
		GetRequestValidator(restapi_id: string, requestvalidator_id: string): Observable<RequestValidator> {
			return this.http.get<RequestValidator>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/requestvalidators/' + (requestvalidator_id == null ? '' : encodeURIComponent(requestvalidator_id)), {});
		}

		/**
		 * Updates a RequestValidator of a given RestApi.
		 * Patch restapis/{restapi_id}/requestvalidators/{requestvalidator_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} requestvalidator_id The identifier of RequestValidator to be updated.
		 * @return {RequestValidator} Success
		 */
		UpdateRequestValidator(restapi_id: string, requestvalidator_id: string, requestBody: UpdateRequestValidatorPatchBody): Observable<RequestValidator> {
			return this.http.patch<RequestValidator>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/requestvalidators/' + (requestvalidator_id == null ? '' : encodeURIComponent(requestvalidator_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Resource resource.
		 * Delete restapis/{restapi_id}/resources/{resource_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id The identifier of the Resource resource.
		 * @return {void} 
		 */
		DeleteResource(restapi_id: string, resource_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists information about a resource.
		 * Get restapis/{restapi_id}/resources/{resource_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id The identifier for the Resource resource.
		 * @param {Array<string>} embed A query parameter to retrieve the specified resources embedded in the returned Resource representation in the response. This <code>embed</code> parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded Method resources this way. The query parameter value must be a single-valued list and contain the <code>"methods"</code> string. For example, <code>GET /restapis/{restapi_id}/resources/{resource_id}?embed=methods</code>.
		 * @return {Resource} Success
		 */
		GetResource(restapi_id: string, resource_id: string, embed: Array<string> | null | undefined): Observable<Resource> {
			return this.http.get<Resource>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '&' + embed?.map(z => `embed=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Changes information about a Resource resource.
		 * Patch restapis/{restapi_id}/resources/{resource_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} resource_id The identifier of the Resource resource.
		 * @return {Resource} Success
		 */
		UpdateResource(restapi_id: string, resource_id: string, requestBody: UpdateResourcePatchBody): Observable<Resource> {
			return this.http.patch<Resource>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources/' + (resource_id == null ? '' : encodeURIComponent(resource_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified API.
		 * Delete restapis/{restapi_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @return {void} 
		 */
		DeleteRestApi(restapi_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the RestApi resource in the collection.
		 * Get restapis/{restapi_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @return {RestApi} Success
		 */
		GetRestApi(restapi_id: string): Observable<RestApi> {
			return this.http.get<RestApi>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)), {});
		}

		/**
		 * A feature of the API Gateway control service for updating an existing API with an input of external API definitions. The update can take the form of merging the supplied definition into the existing API or overwriting the existing API.
		 * Put restapis/{restapi_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {PutMode} mode The <code>mode</code> query parameter to specify the update mode. Valid values are "merge" and "overwrite". By default, the update mode is "merge".
		 * @param {boolean} failonwarnings A query parameter to indicate whether to rollback the API update (<code>true</code>) or not (<code>false</code>) when a warning is encountered. The default value is <code>false</code>.
		 * @param {{[id: string]: string }} parameters Custom header parameters as part of the request. For example, to exclude DocumentationParts from an imported API, set <code>ignore=documentation</code> as a <code>parameters</code> value, as in the AWS CLI command of <code>aws apigateway import-rest-api --parameters ignore=documentation --body 'file:///path/to/imported-api-body.json'</code>.
		 * @return {RestApi} Success
		 */
		PutRestApi(restapi_id: string, mode: PutMode | null | undefined, failonwarnings: boolean | null | undefined, parameters: {[id: string]: string } | null | undefined, requestBody: PutRestApiPutBody): Observable<RestApi> {
			return this.http.put<RestApi>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '&mode=' + mode + '&failonwarnings=' + failonwarnings + '&parameters=' + parameters, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Changes information about the specified API.
		 * Patch restapis/{restapi_id}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @return {RestApi} Success
		 */
		UpdateRestApi(restapi_id: string, requestBody: UpdateRestApiPatchBody): Observable<RestApi> {
			return this.http.patch<RestApi>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Stage resource.
		 * Delete restapis/{restapi_id}/stages/{stage_name}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} stage_name The name of the Stage resource to delete.
		 * @return {void} 
		 */
		DeleteStage(restapi_id: string, stage_name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/stages/' + (stage_name == null ? '' : encodeURIComponent(stage_name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a Stage resource.
		 * Get restapis/{restapi_id}/stages/{stage_name}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} stage_name The name of the Stage resource to get information about.
		 * @return {Stage} Success
		 */
		GetStage(restapi_id: string, stage_name: string): Observable<Stage> {
			return this.http.get<Stage>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/stages/' + (stage_name == null ? '' : encodeURIComponent(stage_name)), {});
		}

		/**
		 * Changes information about a Stage resource.
		 * Patch restapis/{restapi_id}/stages/{stage_name}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} stage_name The name of the Stage resource to change information about.
		 * @return {Stage} Success
		 */
		UpdateStage(restapi_id: string, stage_name: string, requestBody: UpdateStagePatchBody): Observable<Stage> {
			return this.http.patch<Stage>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/stages/' + (stage_name == null ? '' : encodeURIComponent(stage_name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a usage plan of a given plan Id.
		 * Delete usageplans/{usageplanId}
		 * @param {string} usageplanId The Id of the to-be-deleted usage plan.
		 * @return {void} 
		 */
		DeleteUsagePlan(usageplanId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'usageplans/' + (usageplanId == null ? '' : encodeURIComponent(usageplanId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a usage plan of a given plan identifier.
		 * Get usageplans/{usageplanId}
		 * @param {string} usageplanId The identifier of the UsagePlan resource to be retrieved.
		 * @return {UsagePlan} Success
		 */
		GetUsagePlan(usageplanId: string): Observable<UsagePlan> {
			return this.http.get<UsagePlan>(this.baseUri + 'usageplans/' + (usageplanId == null ? '' : encodeURIComponent(usageplanId)), {});
		}

		/**
		 * Updates a usage plan of a given plan Id.
		 * Patch usageplans/{usageplanId}
		 * @param {string} usageplanId The Id of the to-be-updated usage plan.
		 * @return {UsagePlan} Success
		 */
		UpdateUsagePlan(usageplanId: string, requestBody: UpdateUsagePlanPatchBody): Observable<UsagePlan> {
			return this.http.patch<UsagePlan>(this.baseUri + 'usageplans/' + (usageplanId == null ? '' : encodeURIComponent(usageplanId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a usage plan key and remove the underlying API key from the associated usage plan.
		 * Delete usageplans/{usageplanId}/keys/{keyId}
		 * @param {string} usageplanId The Id of the UsagePlan resource representing the usage plan containing the to-be-deleted UsagePlanKey resource representing a plan customer.
		 * @param {string} keyId The Id of the UsagePlanKey resource to be deleted.
		 * @return {void} 
		 */
		DeleteUsagePlanKey(usageplanId: string, keyId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'usageplans/' + (usageplanId == null ? '' : encodeURIComponent(usageplanId)) + '/keys/' + (keyId == null ? '' : encodeURIComponent(keyId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a usage plan key of a given key identifier.
		 * Get usageplans/{usageplanId}/keys/{keyId}
		 * @param {string} usageplanId The Id of the UsagePlan resource representing the usage plan containing the to-be-retrieved UsagePlanKey resource representing a plan customer.
		 * @param {string} keyId The key Id of the to-be-retrieved UsagePlanKey resource representing a plan customer.
		 * @return {UsagePlanKey} Success
		 */
		GetUsagePlanKey(usageplanId: string, keyId: string): Observable<UsagePlanKey> {
			return this.http.get<UsagePlanKey>(this.baseUri + 'usageplans/' + (usageplanId == null ? '' : encodeURIComponent(usageplanId)) + '/keys/' + (keyId == null ? '' : encodeURIComponent(keyId)), {});
		}

		/**
		 * Deletes an existing VpcLink of a specified identifier.
		 * Delete vpclinks/{vpclink_id}
		 * @param {string} vpclink_id The identifier of the VpcLink. It is used in an Integration to reference this VpcLink.
		 * @return {void} 
		 */
		DeleteVpcLink(vpclink_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'vpclinks/' + (vpclink_id == null ? '' : encodeURIComponent(vpclink_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a specified VPC link under the caller's account in a region.
		 * Get vpclinks/{vpclink_id}
		 * @param {string} vpclink_id The identifier of the VpcLink. It is used in an Integration to reference this VpcLink.
		 * @return {VpcLink} Success
		 */
		GetVpcLink(vpclink_id: string): Observable<VpcLink> {
			return this.http.get<VpcLink>(this.baseUri + 'vpclinks/' + (vpclink_id == null ? '' : encodeURIComponent(vpclink_id)), {});
		}

		/**
		 * Updates an existing VpcLink of a specified identifier.
		 * Patch vpclinks/{vpclink_id}
		 * @param {string} vpclink_id The identifier of the VpcLink. It is used in an Integration to reference this VpcLink.
		 * @return {VpcLink} Success
		 */
		UpdateVpcLink(vpclink_id: string, requestBody: UpdateVpcLinkPatchBody): Observable<VpcLink> {
			return this.http.patch<VpcLink>(this.baseUri + 'vpclinks/' + (vpclink_id == null ? '' : encodeURIComponent(vpclink_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Flushes all authorizer cache entries on a stage.
		 * Delete restapis/{restapi_id}/stages/{stage_name}/cache/authorizers
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} stage_name The name of the stage to flush.
		 * @return {void} 
		 */
		FlushStageAuthorizersCache(restapi_id: string, stage_name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/stages/' + (stage_name == null ? '' : encodeURIComponent(stage_name)) + '/cache/authorizers', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Flushes a stage's cache.
		 * Delete restapis/{restapi_id}/stages/{stage_name}/cache/data
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} stage_name The name of the stage to flush its cache.
		 * @return {void} 
		 */
		FlushStageCache(restapi_id: string, stage_name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/stages/' + (stage_name == null ? '' : encodeURIComponent(stage_name)) + '/cache/data', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates a ClientCertificate resource.
		 * Post clientcertificates
		 * @return {void} 
		 */
		GenerateClientCertificate(requestBody: GenerateClientCertificatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'clientcertificates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a collection of ClientCertificate resources.
		 * Get clientcertificates
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ClientCertificates} Success
		 */
		GetClientCertificates(position: string | null | undefined, limit: number | null | undefined): Observable<ClientCertificates> {
			return this.http.get<ClientCertificates>(this.baseUri + 'clientcertificates?position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, {});
		}

		/**
		 * Gets information about the current Account resource.
		 * Get account
		 * @return {Account} Success
		 */
		GetAccount(): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'account', {});
		}

		/**
		 * Changes information about the current Account resource.
		 * Patch account
		 * @return {Account} Success
		 */
		UpdateAccount(requestBody: UpdateAccountPatchBody): Observable<Account> {
			return this.http.patch<Account>(this.baseUri + 'account', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exports a deployed version of a RestApi in a specified format.
		 * Get restapis/{restapi_id}/stages/{stage_name}/exports/{export_type}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} stage_name The name of the Stage that will be exported.
		 * @param {string} export_type The type of export. Acceptable values are 'oas30' for OpenAPI 3.0.x and 'swagger' for Swagger/OpenAPI 2.0.
		 * @param {{[id: string]: string }} parameters A key-value map of query string parameters that specify properties of the export, depending on the requested <code>exportType</code>. For <code>exportType</code> <code>oas30</code> and <code>swagger</code>, any combination of the following parameters are supported: <code>extensions='integrations'</code> or <code>extensions='apigateway'</code> will export the API with x-amazon-apigateway-integration extensions. <code>extensions='authorizers'</code> will export the API with x-amazon-apigateway-authorizer extensions. <code>postman</code> will export the API with Postman extensions, allowing for import to the Postman tool
		 * @return {ExportResponse} Success
		 */
		GetExport(restapi_id: string, stage_name: string, export_type: string, parameters: {[id: string]: string } | null | undefined): Observable<ExportResponse> {
			return this.http.get<ExportResponse>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/stages/' + (stage_name == null ? '' : encodeURIComponent(stage_name)) + '/exports/' + (export_type == null ? '' : encodeURIComponent(export_type)) + '&parameters=' + parameters, {});
		}

		/**
		 * Gets the GatewayResponses collection on the given RestApi. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default GatewayResponses collection for the supported response types.
		 * Get restapis/{restapi_id}/gatewayresponses
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} position The current pagination position in the paged result set. The GatewayResponse collection does not support pagination and the position does not apply here.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500. The GatewayResponses collection does not support pagination and the limit does not apply here.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {GatewayResponses} Success
		 */
		GetGatewayResponses(restapi_id: string, position: string | null | undefined, limit: number | null | undefined): Observable<GatewayResponses> {
			return this.http.get<GatewayResponses>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/gatewayresponses&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, {});
		}

		/**
		 * Generates a sample mapping template that can be used to transform a payload into the structure of a model.
		 * Get restapis/{restapi_id}/models/{model_name}/default_template
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} model_name The name of the model for which to generate a template.
		 * @return {Template} Success
		 */
		GetModelTemplate(restapi_id: string, model_name: string): Observable<Template> {
			return this.http.get<Template>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/models/' + (model_name == null ? '' : encodeURIComponent(model_name)) + '/default_template', {});
		}

		/**
		 * Lists information about a collection of Resource resources.
		 * Get restapis/{restapi_id}/resources
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} embed A query parameter used to retrieve the specified resources embedded in the returned Resources resource in the response. This <code>embed</code> parameter value is a list of comma-separated strings. Currently, the request supports only retrieval of the embedded Method resources this way. The query parameter value must be a single-valued list and contain the <code>"methods"</code> string. For example, <code>GET /restapis/{restapi_id}/resources?embed=methods</code>.
		 * @return {Resources} Success
		 */
		GetResources(restapi_id: string, position: string | null | undefined, limit: number | null | undefined, embed: Array<string> | null | undefined): Observable<Resources> {
			return this.http.get<Resources>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/resources&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit + '&' + embed?.map(z => `embed=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Generates a client SDK for a RestApi and Stage.
		 * Get restapis/{restapi_id}/stages/{stage_name}/sdks/{sdk_type}
		 * @param {string} restapi_id The string identifier of the associated RestApi.
		 * @param {string} stage_name The name of the Stage that the SDK will use.
		 * @param {string} sdk_type The language for the generated SDK. Currently <code>java</code>, <code>javascript</code>, <code>android</code>, <code>objectivec</code> (for iOS), <code>swift</code> (for iOS), and <code>ruby</code> are supported.
		 * @param {{[id: string]: string }} parameters A string-to-string key-value map of query parameters <code>sdkType</code>-dependent properties of the SDK. For <code>sdkType</code> of <code>objectivec</code> or <code>swift</code>, a parameter named <code>classPrefix</code> is required. For <code>sdkType</code> of <code>android</code>, parameters named <code>groupId</code>, <code>artifactId</code>, <code>artifactVersion</code>, and <code>invokerPackage</code> are required. For <code>sdkType</code> of <code>java</code>, parameters named <code>serviceName</code> and <code>javaPackageName</code> are required. 
		 * @return {SdkResponse} Success
		 */
		GetSdk(restapi_id: string, stage_name: string, sdk_type: string, parameters: {[id: string]: string } | null | undefined): Observable<SdkResponse> {
			return this.http.get<SdkResponse>(this.baseUri + 'restapis/' + (restapi_id == null ? '' : encodeURIComponent(restapi_id)) + '/stages/' + (stage_name == null ? '' : encodeURIComponent(stage_name)) + '/sdks/' + (sdk_type == null ? '' : encodeURIComponent(sdk_type)) + '&parameters=' + parameters, {});
		}

		/**
		 * Gets an SDK type.
		 * Get sdktypes/{sdktype_id}
		 * @param {string} sdktype_id The identifier of the queried SdkType instance.
		 * @return {SdkType} Success
		 */
		GetSdkType(sdktype_id: string): Observable<SdkType> {
			return this.http.get<SdkType>(this.baseUri + 'sdktypes/' + (sdktype_id == null ? '' : encodeURIComponent(sdktype_id)), {});
		}

		/**
		 * Gets SDK types
		 * Get sdktypes
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {SdkTypes} Success
		 */
		GetSdkTypes(position: string | null | undefined, limit: number | null | undefined): Observable<SdkTypes> {
			return this.http.get<SdkTypes>(this.baseUri + 'sdktypes?position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, {});
		}

		/**
		 * Gets the Tags collection for a given resource.
		 * Get tags/{resource_arn}
		 * @param {string} resource_arn The ARN of a resource that can be tagged.
		 * @param {string} position (Not currently supported) The current pagination position in the paged result set.
		 * @param {number} limit (Not currently supported) The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Tags} Success
		 */
		GetTags(resource_arn: string, position: string | null | undefined, limit: number | null | undefined): Observable<Tags> {
			return this.http.get<Tags>(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)) + '&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, {});
		}

		/**
		 * Adds or updates a tag on a given resource.
		 * Put tags/{resource_arn}
		 * @param {string} resource_arn The ARN of a resource that can be tagged.
		 * @return {void} 
		 */
		TagResource(resource_arn: string, requestBody: TagResourcePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the usage data of a usage plan in a specified time interval.
		 * Get usageplans/{usageplanId}/usage#startDate&endDate
		 * @param {string} usageplanId The Id of the usage plan associated with the usage data.
		 * @param {string} keyId The Id of the API key associated with the resultant usage data.
		 * @param {string} startDate The starting date (e.g., 2016-01-01) of the usage data.
		 * @param {string} endDate The ending date (e.g., 2016-12-31) of the usage data.
		 * @param {string} position The current pagination position in the paged result set.
		 * @param {number} limit The maximum number of returned results per page. The default value is 25 and the maximum value is 500.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Usage} Success
		 */
		GetUsage(usageplanId: string, keyId: string | null | undefined, startDate: string, endDate: string, position: string | null | undefined, limit: number | null | undefined): Observable<Usage> {
			return this.http.get<Usage>(this.baseUri + 'usageplans/' + (usageplanId == null ? '' : encodeURIComponent(usageplanId)) + '/usage#startDate&endDate&keyId=' + (keyId == null ? '' : encodeURIComponent(keyId)) + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&position=' + (position == null ? '' : encodeURIComponent(position)) + '&limit=' + limit, {});
		}

		/**
		 * Import API keys from an external source, such as a CSV-formatted file.
		 * Post apikeys#mode=import&format
		 * @param {ApiKeysFormat} format A query parameter to specify the input format to imported API keys. Currently, only the <code>csv</code> format is supported.
		 * @param {boolean} failonwarnings A query parameter to indicate whether to rollback ApiKey importation (<code>true</code>) or not (<code>false</code>) when error is encountered.
		 * @return {void} 
		 */
		ImportApiKeys(format: ApiKeysFormat, failonwarnings: boolean | null | undefined, mode: ImportApiKeysMode, requestBody: ImportApiKeysPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'apikeys#mode=import&format?format=' + format + '&failonwarnings=' + failonwarnings + '&mode=' + mode, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * A feature of the API Gateway control service for creating a new API from an external API definition file.
		 * Post restapis#mode=import
		 * @param {boolean} failonwarnings A query parameter to indicate whether to rollback the API creation (<code>true</code>) or not (<code>false</code>) when a warning is encountered. The default value is <code>false</code>.
		 * @param {{[id: string]: string }} parameters <p>A key-value map of context-specific query string parameters specifying the behavior of different API importing operations. The following shows operation-specific parameters and their supported values.</p> <p> To exclude DocumentationParts from the import, set <code>parameters</code> as <code>ignore=documentation</code>.</p> <p> To configure the endpoint type, set <code>parameters</code> as <code>endpointConfigurationTypes=EDGE</code>, <code>endpointConfigurationTypes=REGIONAL</code>, or <code>endpointConfigurationTypes=PRIVATE</code>. The default endpoint type is <code>EDGE</code>.</p> <p> To handle imported <code>basepath</code>, set <code>parameters</code> as <code>basepath=ignore</code>, <code>basepath=prepend</code> or <code>basepath=split</code>.</p> <p>For example, the AWS CLI command to exclude documentation from the imported API is:</p> <p>The AWS CLI command to set the regional endpoint on the imported API is:</p>
		 * @return {void} 
		 */
		ImportRestApi(failonwarnings: boolean | null | undefined, parameters: {[id: string]: string } | null | undefined, mode: ImportApiKeysMode, requestBody: ImportRestApiPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'restapis#mode=import?failonwarnings=' + failonwarnings + '&parameters=' + parameters + '&mode=' + mode, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a tag from a given resource.
		 * Delete tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn The ARN of a resource that can be tagged.
		 * @param {Array<string>} tagKeys The Tag keys to delete.
		 * @return {void} 
		 */
		UntagResource(resource_arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.
		 * Patch usageplans/{usageplanId}/keys/{keyId}/usage
		 * @param {string} usageplanId The Id of the usage plan associated with the usage data.
		 * @param {string} keyId The identifier of the API key associated with the usage plan in which a temporary extension is granted to the remaining quota.
		 * @return {Usage} Success
		 */
		UpdateUsage(usageplanId: string, keyId: string, requestBody: UpdateUsagePatchBody): Observable<Usage> {
			return this.http.patch<Usage>(this.baseUri + 'usageplans/' + (usageplanId == null ? '' : encodeURIComponent(usageplanId)) + '/keys/' + (keyId == null ? '' : encodeURIComponent(keyId)) + '/usage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateApiKeyPostBody {

		/** The name of the ApiKey. */
		name?: string | null;

		/** The description of the ApiKey. */
		description?: string | null;

		/** Specifies whether the ApiKey can be used by callers. */
		enabled?: boolean | null;

		/** Specifies whether (<code>true</code>) or not (<code>false</code>) the key identifier is distinct from the created API key value. This parameter is deprecated and should not be used. */
		generateDistinctId?: boolean | null;

		/** Specifies a value of the API key. */
		value?: string | null;

		/** DEPRECATED FOR USAGE PLANS - Specifies stages associated with the API key. */
		stageKeys?: Array<StageKey>;

		/** An AWS Marketplace customer identifier , when integrating with the AWS SaaS Marketplace. */
		customerId?: string | null;

		/** The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags?: {[id: string]: string };
	}
	export interface CreateApiKeyPostBodyFormProperties {

		/** The name of the ApiKey. */
		name: FormControl<string | null | undefined>,

		/** The description of the ApiKey. */
		description: FormControl<string | null | undefined>,

		/** Specifies whether the ApiKey can be used by callers. */
		enabled: FormControl<boolean | null | undefined>,

		/** Specifies whether (<code>true</code>) or not (<code>false</code>) the key identifier is distinct from the created API key value. This parameter is deprecated and should not be used. */
		generateDistinctId: FormControl<boolean | null | undefined>,

		/** Specifies a value of the API key. */
		value: FormControl<string | null | undefined>,

		/** An AWS Marketplace customer identifier , when integrating with the AWS SaaS Marketplace. */
		customerId: FormControl<string | null | undefined>,

		/** The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateApiKeyPostBodyFormGroup() {
		return new FormGroup<CreateApiKeyPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			generateDistinctId: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateAuthorizerPostBody {

		/**
		 * The name of the authorizer.
		 * Required
		 */
		name: string;

		/**
		 * The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.
		 * Required
		 */
		type: AuthorizerType;

		/** A list of the Amazon Cognito user pool ARNs for the <code>COGNITO_USER_POOLS</code> authorizer. Each element is of this format: <code>arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}</code>. For a <code>TOKEN</code> or <code>REQUEST</code> authorizer, this is not defined. */
		providerARNs?: Array<string>;

		/** Optional customer-defined field, used in OpenAPI imports and exports without functional impact. */
		authType?: string | null;

		/** Specifies the authorizer's Uniform Resource Identifier (URI). For <code>TOKEN</code> or <code>REQUEST</code> authorizers, this must be a well-formed Lambda function URI, for example, <code>arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations</code>. In general, the URI has this form <code>arn:aws:apigateway:{region}:lambda:path/{service_api}</code>, where <code>{region}</code> is the same as the region hosting the Lambda function, <code>path</code> indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial <code>/</code>. For Lambda functions, this is usually of the form <code>/2015-03-31/functions/[FunctionARN]/invocations</code>. */
		authorizerUri?: string | null;

		/** Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. */
		authorizerCredentials?: string | null;

		/** The identity source for which authorization is requested. For a <code>TOKEN</code> or <code>COGNITO_USER_POOLS</code> authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is <code>Auth</code>, the header mapping expression is <code>method.request.header.Auth</code>. For the <code>REQUEST</code> authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an <code>Auth</code> header, a <code>Name</code> query string parameter are defined as identity sources, this value is <code>method.request.header.Auth, method.request.querystring.Name</code>. These parameters will be used to derive the authorization caching key and to perform runtime validation of the <code>REQUEST</code> authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional. */
		identitySource?: string | null;

		/** A validation expression for the incoming identity token. For <code>TOKEN</code> authorizers, this value is a regular expression. For <code>COGNITO_USER_POOLS</code> authorizers, API Gateway will match the <code>aud</code> field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the <code>REQUEST</code> authorizer. */
		identityValidationExpression?: string | null;

		/**
		 * The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		authorizerResultTtlInSeconds?: number | null;
	}
	export interface CreateAuthorizerPostBodyFormProperties {

		/**
		 * The name of the authorizer.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The authorizer type. Valid values are <code>TOKEN</code> for a Lambda function using a single authorization token submitted in a custom header, <code>REQUEST</code> for a Lambda function using incoming request parameters, and <code>COGNITO_USER_POOLS</code> for using an Amazon Cognito user pool.
		 * Required
		 */
		type: FormControl<AuthorizerType | null | undefined>,

		/** Optional customer-defined field, used in OpenAPI imports and exports without functional impact. */
		authType: FormControl<string | null | undefined>,

		/** Specifies the authorizer's Uniform Resource Identifier (URI). For <code>TOKEN</code> or <code>REQUEST</code> authorizers, this must be a well-formed Lambda function URI, for example, <code>arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations</code>. In general, the URI has this form <code>arn:aws:apigateway:{region}:lambda:path/{service_api}</code>, where <code>{region}</code> is the same as the region hosting the Lambda function, <code>path</code> indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial <code>/</code>. For Lambda functions, this is usually of the form <code>/2015-03-31/functions/[FunctionARN]/invocations</code>. */
		authorizerUri: FormControl<string | null | undefined>,

		/** Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. */
		authorizerCredentials: FormControl<string | null | undefined>,

		/** The identity source for which authorization is requested. For a <code>TOKEN</code> or <code>COGNITO_USER_POOLS</code> authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is <code>Auth</code>, the header mapping expression is <code>method.request.header.Auth</code>. For the <code>REQUEST</code> authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an <code>Auth</code> header, a <code>Name</code> query string parameter are defined as identity sources, this value is <code>method.request.header.Auth, method.request.querystring.Name</code>. These parameters will be used to derive the authorization caching key and to perform runtime validation of the <code>REQUEST</code> authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional. */
		identitySource: FormControl<string | null | undefined>,

		/** A validation expression for the incoming identity token. For <code>TOKEN</code> authorizers, this value is a regular expression. For <code>COGNITO_USER_POOLS</code> authorizers, API Gateway will match the <code>aud</code> field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the <code>REQUEST</code> authorizer. */
		identityValidationExpression: FormControl<string | null | undefined>,

		/**
		 * The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		authorizerResultTtlInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateCreateAuthorizerPostBodyFormGroup() {
		return new FormGroup<CreateAuthorizerPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<AuthorizerType | null | undefined>(undefined, [Validators.required]),
			authType: new FormControl<string | null | undefined>(undefined),
			authorizerUri: new FormControl<string | null | undefined>(undefined),
			authorizerCredentials: new FormControl<string | null | undefined>(undefined),
			identitySource: new FormControl<string | null | undefined>(undefined),
			identityValidationExpression: new FormControl<string | null | undefined>(undefined),
			authorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateBasePathMappingPostBody {

		/** The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify a base path name after the domain name. */
		basePath?: string | null;

		/**
		 * The string identifier of the associated RestApi.
		 * Required
		 */
		restApiId: string;

		/** The name of the API's stage that you want to use for this mapping. Specify '(none)' if you want callers to explicitly specify the stage name after any base path name. */
		stage?: string | null;
	}
	export interface CreateBasePathMappingPostBodyFormProperties {

		/** The base path name that callers of the API must provide as part of the URL after the domain name. This value must be unique for all of the mappings across a single API. Specify '(none)' if you do not want callers to specify a base path name after the domain name. */
		basePath: FormControl<string | null | undefined>,

		/**
		 * The string identifier of the associated RestApi.
		 * Required
		 */
		restApiId: FormControl<string | null | undefined>,

		/** The name of the API's stage that you want to use for this mapping. Specify '(none)' if you want callers to explicitly specify the stage name after any base path name. */
		stage: FormControl<string | null | undefined>,
	}
	export function CreateCreateBasePathMappingPostBodyFormGroup() {
		return new FormGroup<CreateBasePathMappingPostBodyFormProperties>({
			basePath: new FormControl<string | null | undefined>(undefined),
			restApiId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeploymentPostBody {

		/** The name of the Stage resource for the Deployment resource to create. */
		stageName?: string | null;

		/** The description of the Stage resource for the Deployment resource to create. */
		stageDescription?: string | null;

		/** The description for the Deployment resource to create. */
		description?: string | null;

		/** Enables a cache cluster for the Stage resource specified in the input. */
		cacheClusterEnabled?: boolean | null;

		/** Returns the size of the CacheCluster. */
		cacheClusterSize?: CacheClusterSize | null;

		/** A map that defines the stage variables for the Stage resource that is associated with the new deployment. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>. */
		variables?: {[id: string]: string };

		/** The input configuration for a canary deployment. */
		canarySettings?: CreateDeploymentPostBodyCanarySettings;

		/** Specifies whether active tracing with X-ray is enabled for the Stage. */
		tracingEnabled?: boolean | null;
	}
	export interface CreateDeploymentPostBodyFormProperties {

		/** The name of the Stage resource for the Deployment resource to create. */
		stageName: FormControl<string | null | undefined>,

		/** The description of the Stage resource for the Deployment resource to create. */
		stageDescription: FormControl<string | null | undefined>,

		/** The description for the Deployment resource to create. */
		description: FormControl<string | null | undefined>,

		/** Enables a cache cluster for the Stage resource specified in the input. */
		cacheClusterEnabled: FormControl<boolean | null | undefined>,

		/** Returns the size of the CacheCluster. */
		cacheClusterSize: FormControl<CacheClusterSize | null | undefined>,

		/** A map that defines the stage variables for the Stage resource that is associated with the new deployment. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>. */
		variables: FormControl<{[id: string]: string } | null | undefined>,

		/** Specifies whether active tracing with X-ray is enabled for the Stage. */
		tracingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDeploymentPostBodyFormGroup() {
		return new FormGroup<CreateDeploymentPostBodyFormProperties>({
			stageName: new FormControl<string | null | undefined>(undefined),
			stageDescription: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			cacheClusterEnabled: new FormControl<boolean | null | undefined>(undefined),
			cacheClusterSize: new FormControl<CacheClusterSize | null | undefined>(undefined),
			variables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			tracingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDeploymentPostBodyCanarySettings {
		percentTraffic?: number | null;
		stageVariableOverrides?: MapOfStringToString;
		useStageCache?: boolean | null;
	}
	export interface CreateDeploymentPostBodyCanarySettingsFormProperties {
		percentTraffic: FormControl<number | null | undefined>,
		useStageCache: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDeploymentPostBodyCanarySettingsFormGroup() {
		return new FormGroup<CreateDeploymentPostBodyCanarySettingsFormProperties>({
			percentTraffic: new FormControl<number | null | undefined>(undefined),
			useStageCache: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateDocumentationPartPostBody {

		/**
		 * Specifies the target API entity to which the documentation applies.
		 * Required
		 */
		location: CreateDocumentationPartPostBodyLocation;

		/**
		 * The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only OpenAPI-compliant key-value pairs can be exported and, hence, published.
		 * Required
		 */
		properties: string;
	}
	export interface CreateDocumentationPartPostBodyFormProperties {

		/**
		 * The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only OpenAPI-compliant key-value pairs can be exported and, hence, published.
		 * Required
		 */
		properties: FormControl<string | null | undefined>,
	}
	export function CreateCreateDocumentationPartPostBodyFormGroup() {
		return new FormGroup<CreateDocumentationPartPostBodyFormProperties>({
			properties: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDocumentationPartPostBodyLocation {
		type?: DocumentationPartType;
		path?: string;
		method?: string;
		statusCode?: string;
		name?: string;
	}
	export interface CreateDocumentationPartPostBodyLocationFormProperties {
		type: FormControl<DocumentationPartType | null | undefined>,
		path: FormControl<string | null | undefined>,
		method: FormControl<string | null | undefined>,
		statusCode: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateDocumentationPartPostBodyLocationFormGroup() {
		return new FormGroup<CreateDocumentationPartPostBodyLocationFormProperties>({
			type: new FormControl<DocumentationPartType | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportDocumentationPartsPutBody {

		/**
		 * Raw byte array representing the to-be-imported documentation parts. To import from an OpenAPI file, this is a JSON object.
		 * Required
		 */
		body: string;
	}
	export interface ImportDocumentationPartsPutBodyFormProperties {

		/**
		 * Raw byte array representing the to-be-imported documentation parts. To import from an OpenAPI file, this is a JSON object.
		 * Required
		 */
		body: FormControl<string | null | undefined>,
	}
	export function CreateImportDocumentationPartsPutBodyFormGroup() {
		return new FormGroup<ImportDocumentationPartsPutBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDocumentationVersionPostBody {

		/**
		 * The version identifier of the new snapshot.
		 * Required
		 */
		documentationVersion: string;

		/** The stage name to be associated with the new documentation snapshot. */
		stageName?: string | null;

		/** A description about the new documentation snapshot. */
		description?: string | null;
	}
	export interface CreateDocumentationVersionPostBodyFormProperties {

		/**
		 * The version identifier of the new snapshot.
		 * Required
		 */
		documentationVersion: FormControl<string | null | undefined>,

		/** The stage name to be associated with the new documentation snapshot. */
		stageName: FormControl<string | null | undefined>,

		/** A description about the new documentation snapshot. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateDocumentationVersionPostBodyFormGroup() {
		return new FormGroup<CreateDocumentationVersionPostBodyFormProperties>({
			documentationVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stageName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDomainNamePostBody {

		/**
		 * The name of the DomainName resource.
		 * Required
		 */
		domainName: string;

		/** The user-friendly name of the certificate that will be used by edge-optimized endpoint for this domain name. */
		certificateName?: string | null;

		/** [Deprecated] The body of the server certificate that will be used by edge-optimized endpoint for this domain name provided by your certificate authority. */
		certificateBody?: string | null;

		/** [Deprecated] Your edge-optimized endpoint's domain name certificate's private key. */
		certificatePrivateKey?: string | null;

		/** [Deprecated] The intermediate certificates and optionally the root certificate, one after the other without any blank lines, used by an edge-optimized endpoint for this domain name. If you include the root certificate, your certificate chain must start with intermediate certificates and end with the root certificate. Use the intermediate certificates that were provided by your certificate authority. Do not include any intermediaries that are not in the chain of trust path. */
		certificateChain?: string | null;

		/** The reference to an AWS-managed certificate that will be used by edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source. */
		certificateArn?: string | null;

		/** The user-friendly name of the certificate that will be used by regional endpoint for this domain name. */
		regionalCertificateName?: string | null;

		/** The reference to an AWS-managed certificate that will be used by regional endpoint for this domain name. AWS Certificate Manager is the only supported source. */
		regionalCertificateArn?: string | null;

		/** The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has. */
		endpointConfiguration?: CreateDomainNamePostBodyEndpointConfiguration;

		/** The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags?: {[id: string]: string };

		/** The Transport Layer Security (TLS) version + cipher suite for this DomainName. The valid values are <code>TLS_1_0</code> and <code>TLS_1_2</code>. */
		securityPolicy?: SecurityPolicy | null;

		/** The mutual TLS authentication configuration for a custom domain name. If specified, API Gateway performs two-way authentication between the client and the server. Clients must present a trusted certificate to access your API. */
		mutualTlsAuthentication?: CreateDomainNamePostBodyMutualTlsAuthentication;

		/** The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the regionalCertificateArn. */
		ownershipVerificationCertificateArn?: string | null;
	}
	export interface CreateDomainNamePostBodyFormProperties {

		/**
		 * The name of the DomainName resource.
		 * Required
		 */
		domainName: FormControl<string | null | undefined>,

		/** The user-friendly name of the certificate that will be used by edge-optimized endpoint for this domain name. */
		certificateName: FormControl<string | null | undefined>,

		/** [Deprecated] The body of the server certificate that will be used by edge-optimized endpoint for this domain name provided by your certificate authority. */
		certificateBody: FormControl<string | null | undefined>,

		/** [Deprecated] Your edge-optimized endpoint's domain name certificate's private key. */
		certificatePrivateKey: FormControl<string | null | undefined>,

		/** [Deprecated] The intermediate certificates and optionally the root certificate, one after the other without any blank lines, used by an edge-optimized endpoint for this domain name. If you include the root certificate, your certificate chain must start with intermediate certificates and end with the root certificate. Use the intermediate certificates that were provided by your certificate authority. Do not include any intermediaries that are not in the chain of trust path. */
		certificateChain: FormControl<string | null | undefined>,

		/** The reference to an AWS-managed certificate that will be used by edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source. */
		certificateArn: FormControl<string | null | undefined>,

		/** The user-friendly name of the certificate that will be used by regional endpoint for this domain name. */
		regionalCertificateName: FormControl<string | null | undefined>,

		/** The reference to an AWS-managed certificate that will be used by regional endpoint for this domain name. AWS Certificate Manager is the only supported source. */
		regionalCertificateArn: FormControl<string | null | undefined>,

		/** The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The Transport Layer Security (TLS) version + cipher suite for this DomainName. The valid values are <code>TLS_1_0</code> and <code>TLS_1_2</code>. */
		securityPolicy: FormControl<SecurityPolicy | null | undefined>,

		/** The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the regionalCertificateArn. */
		ownershipVerificationCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainNamePostBodyFormGroup() {
		return new FormGroup<CreateDomainNamePostBodyFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certificateName: new FormControl<string | null | undefined>(undefined),
			certificateBody: new FormControl<string | null | undefined>(undefined),
			certificatePrivateKey: new FormControl<string | null | undefined>(undefined),
			certificateChain: new FormControl<string | null | undefined>(undefined),
			certificateArn: new FormControl<string | null | undefined>(undefined),
			regionalCertificateName: new FormControl<string | null | undefined>(undefined),
			regionalCertificateArn: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			securityPolicy: new FormControl<SecurityPolicy | null | undefined>(undefined),
			ownershipVerificationCertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDomainNamePostBodyEndpointConfiguration {
		types?: Array<EndpointType>;
		vpcEndpointIds?: Array<string>;
	}
	export interface CreateDomainNamePostBodyEndpointConfigurationFormProperties {
	}
	export function CreateCreateDomainNamePostBodyEndpointConfigurationFormGroup() {
		return new FormGroup<CreateDomainNamePostBodyEndpointConfigurationFormProperties>({
		});

	}

	export interface CreateDomainNamePostBodyMutualTlsAuthentication {
		truststoreUri?: string;
		truststoreVersion?: string;
	}
	export interface CreateDomainNamePostBodyMutualTlsAuthenticationFormProperties {
		truststoreUri: FormControl<string | null | undefined>,
		truststoreVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainNamePostBodyMutualTlsAuthenticationFormGroup() {
		return new FormGroup<CreateDomainNamePostBodyMutualTlsAuthenticationFormProperties>({
			truststoreUri: new FormControl<string | null | undefined>(undefined),
			truststoreVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateModelPostBody {

		/**
		 * The name of the model. Must be alphanumeric.
		 * Required
		 */
		name: string;

		/** The description of the model. */
		description?: string | null;

		/** The schema for the model. For <code>application/json</code> models, this should be JSON schema draft 4 model. */
		schema?: string | null;

		/**
		 * The content-type for the model.
		 * Required
		 */
		contentType: string;
	}
	export interface CreateModelPostBodyFormProperties {

		/**
		 * The name of the model. Must be alphanumeric.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The description of the model. */
		description: FormControl<string | null | undefined>,

		/** The schema for the model. For <code>application/json</code> models, this should be JSON schema draft 4 model. */
		schema: FormControl<string | null | undefined>,

		/**
		 * The content-type for the model.
		 * Required
		 */
		contentType: FormControl<string | null | undefined>,
	}
	export function CreateCreateModelPostBodyFormGroup() {
		return new FormGroup<CreateModelPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRequestValidatorPostBody {

		/** The name of the to-be-created RequestValidator. */
		name?: string | null;

		/** A Boolean flag to indicate whether to validate request body according to the configured model schema for the method (<code>true</code>) or not (<code>false</code>). */
		validateRequestBody?: boolean | null;

		/** A Boolean flag to indicate whether to validate request parameters, <code>true</code>, or not <code>false</code>. */
		validateRequestParameters?: boolean | null;
	}
	export interface CreateRequestValidatorPostBodyFormProperties {

		/** The name of the to-be-created RequestValidator. */
		name: FormControl<string | null | undefined>,

		/** A Boolean flag to indicate whether to validate request body according to the configured model schema for the method (<code>true</code>) or not (<code>false</code>). */
		validateRequestBody: FormControl<boolean | null | undefined>,

		/** A Boolean flag to indicate whether to validate request parameters, <code>true</code>, or not <code>false</code>. */
		validateRequestParameters: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateRequestValidatorPostBodyFormGroup() {
		return new FormGroup<CreateRequestValidatorPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			validateRequestBody: new FormControl<boolean | null | undefined>(undefined),
			validateRequestParameters: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateResourcePostBody {

		/**
		 * The last path segment for this resource.
		 * Required
		 */
		pathPart: string;
	}
	export interface CreateResourcePostBodyFormProperties {

		/**
		 * The last path segment for this resource.
		 * Required
		 */
		pathPart: FormControl<string | null | undefined>,
	}
	export function CreateCreateResourcePostBodyFormGroup() {
		return new FormGroup<CreateResourcePostBodyFormProperties>({
			pathPart: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRestApiPostBody {

		/**
		 * The name of the RestApi.
		 * Required
		 */
		name: string;

		/** The description of the RestApi. */
		description?: string | null;

		/** A version identifier for the API. */
		version?: string | null;

		/** The ID of the RestApi that you want to clone from. */
		cloneFrom?: string | null;

		/** The list of binary media types supported by the RestApi. By default, the RestApi supports only UTF-8-encoded text payloads. */
		binaryMediaTypes?: Array<string>;

		/**
		 * A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimumCompressionSize?: number | null;

		/** The source of the API key for metering requests according to a usage plan. Valid values are: &gt;<code>HEADER</code> to read the API key from the <code>X-API-Key</code> header of a request. <code>AUTHORIZER</code> to read the API key from the <code>UsageIdentifierKey</code> from a custom authorizer. */
		apiKeySource?: ApiKeySourceType | null;

		/** The endpoint configuration to indicate the types of endpoints an API (RestApi) or its custom domain name (DomainName) has. */
		endpointConfiguration?: CreateRestApiPostBodyEndpointConfiguration;

		/** A stringified JSON policy document that applies to this RestApi regardless of the caller and Method configuration. */
		policy?: string | null;

		/** The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags?: {[id: string]: string };

		/** Specifies whether clients can invoke your API by using the default <code>execute-api</code> endpoint. By default, clients can invoke your API with the default <code>https://{api_id}.execute-api.{region}.amazonaws.com</code> endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint */
		disableExecuteApiEndpoint?: boolean | null;
	}
	export interface CreateRestApiPostBodyFormProperties {

		/**
		 * The name of the RestApi.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The description of the RestApi. */
		description: FormControl<string | null | undefined>,

		/** A version identifier for the API. */
		version: FormControl<string | null | undefined>,

		/** The ID of the RestApi that you want to clone from. */
		cloneFrom: FormControl<string | null | undefined>,

		/**
		 * A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minimumCompressionSize: FormControl<number | null | undefined>,

		/** The source of the API key for metering requests according to a usage plan. Valid values are: &gt;<code>HEADER</code> to read the API key from the <code>X-API-Key</code> header of a request. <code>AUTHORIZER</code> to read the API key from the <code>UsageIdentifierKey</code> from a custom authorizer. */
		apiKeySource: FormControl<ApiKeySourceType | null | undefined>,

		/** A stringified JSON policy document that applies to this RestApi regardless of the caller and Method configuration. */
		policy: FormControl<string | null | undefined>,

		/** The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Specifies whether clients can invoke your API by using the default <code>execute-api</code> endpoint. By default, clients can invoke your API with the default <code>https://{api_id}.execute-api.{region}.amazonaws.com</code> endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint */
		disableExecuteApiEndpoint: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateRestApiPostBodyFormGroup() {
		return new FormGroup<CreateRestApiPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			cloneFrom: new FormControl<string | null | undefined>(undefined),
			minimumCompressionSize: new FormControl<number | null | undefined>(undefined),
			apiKeySource: new FormControl<ApiKeySourceType | null | undefined>(undefined),
			policy: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			disableExecuteApiEndpoint: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateRestApiPostBodyEndpointConfiguration {
		types?: Array<EndpointType>;
		vpcEndpointIds?: Array<string>;
	}
	export interface CreateRestApiPostBodyEndpointConfigurationFormProperties {
	}
	export function CreateCreateRestApiPostBodyEndpointConfigurationFormGroup() {
		return new FormGroup<CreateRestApiPostBodyEndpointConfigurationFormProperties>({
		});

	}

	export interface CreateStagePostBody {

		/**
		 * The name for the Stage resource. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
		 * Required
		 */
		stageName: string;

		/**
		 * The identifier of the Deployment resource for the Stage resource.
		 * Required
		 */
		deploymentId: string;

		/** The description of the Stage resource. */
		description?: string | null;

		/** Whether cache clustering is enabled for the stage. */
		cacheClusterEnabled?: boolean | null;

		/** Returns the size of the CacheCluster. */
		cacheClusterSize?: CacheClusterSize | null;

		/** A map that defines the stage variables for the new Stage resource. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>. */
		variables?: {[id: string]: string };

		/** The version of the associated API documentation. */
		documentationVersion?: string | null;

		/** Configuration settings of a canary deployment. */
		canarySettings?: CreateStagePostBodyCanarySettings;

		/** Specifies whether active tracing with X-ray is enabled for the Stage. */
		tracingEnabled?: boolean | null;

		/** The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags?: {[id: string]: string };
	}
	export interface CreateStagePostBodyFormProperties {

		/**
		 * The name for the Stage resource. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
		 * Required
		 */
		stageName: FormControl<string | null | undefined>,

		/**
		 * The identifier of the Deployment resource for the Stage resource.
		 * Required
		 */
		deploymentId: FormControl<string | null | undefined>,

		/** The description of the Stage resource. */
		description: FormControl<string | null | undefined>,

		/** Whether cache clustering is enabled for the stage. */
		cacheClusterEnabled: FormControl<boolean | null | undefined>,

		/** Returns the size of the CacheCluster. */
		cacheClusterSize: FormControl<CacheClusterSize | null | undefined>,

		/** A map that defines the stage variables for the new Stage resource. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>. */
		variables: FormControl<{[id: string]: string } | null | undefined>,

		/** The version of the associated API documentation. */
		documentationVersion: FormControl<string | null | undefined>,

		/** Specifies whether active tracing with X-ray is enabled for the Stage. */
		tracingEnabled: FormControl<boolean | null | undefined>,

		/** The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateStagePostBodyFormGroup() {
		return new FormGroup<CreateStagePostBodyFormProperties>({
			stageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deploymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			cacheClusterEnabled: new FormControl<boolean | null | undefined>(undefined),
			cacheClusterSize: new FormControl<CacheClusterSize | null | undefined>(undefined),
			variables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			documentationVersion: new FormControl<string | null | undefined>(undefined),
			tracingEnabled: new FormControl<boolean | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateStagePostBodyCanarySettings {
		percentTraffic?: number | null;
		deploymentId?: string;
		stageVariableOverrides?: MapOfStringToString;
		useStageCache?: boolean | null;
	}
	export interface CreateStagePostBodyCanarySettingsFormProperties {
		percentTraffic: FormControl<number | null | undefined>,
		deploymentId: FormControl<string | null | undefined>,
		useStageCache: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateStagePostBodyCanarySettingsFormGroup() {
		return new FormGroup<CreateStagePostBodyCanarySettingsFormProperties>({
			percentTraffic: new FormControl<number | null | undefined>(undefined),
			deploymentId: new FormControl<string | null | undefined>(undefined),
			useStageCache: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateUsagePlanPostBody {

		/**
		 * The name of the usage plan.
		 * Required
		 */
		name: string;

		/** The description of the usage plan. */
		description?: string | null;

		/** The associated API stages of the usage plan. */
		apiStages?: Array<ApiStage>;

		/** The API request rate limits. */
		throttle?: CreateUsagePlanPostBodyThrottle;

		/** Quotas configured for a usage plan. */
		quota?: CreateUsagePlanPostBodyQuota;

		/** The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags?: {[id: string]: string };
	}
	export interface CreateUsagePlanPostBodyFormProperties {

		/**
		 * The name of the usage plan.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The description of the usage plan. */
		description: FormControl<string | null | undefined>,

		/** The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateUsagePlanPostBodyFormGroup() {
		return new FormGroup<CreateUsagePlanPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateUsagePlanPostBodyThrottle {
		burstLimit?: number | null;
		rateLimit?: number | null;
	}
	export interface CreateUsagePlanPostBodyThrottleFormProperties {
		burstLimit: FormControl<number | null | undefined>,
		rateLimit: FormControl<number | null | undefined>,
	}
	export function CreateCreateUsagePlanPostBodyThrottleFormGroup() {
		return new FormGroup<CreateUsagePlanPostBodyThrottleFormProperties>({
			burstLimit: new FormControl<number | null | undefined>(undefined),
			rateLimit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateUsagePlanPostBodyQuota {
		limit?: number | null;
		offset?: number | null;
		period?: QuotaPeriodType;
	}
	export interface CreateUsagePlanPostBodyQuotaFormProperties {
		limit: FormControl<number | null | undefined>,
		offset: FormControl<number | null | undefined>,
		period: FormControl<QuotaPeriodType | null | undefined>,
	}
	export function CreateCreateUsagePlanPostBodyQuotaFormGroup() {
		return new FormGroup<CreateUsagePlanPostBodyQuotaFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			period: new FormControl<QuotaPeriodType | null | undefined>(undefined),
		});

	}

	export interface CreateUsagePlanKeyPostBody {

		/**
		 * The identifier of a UsagePlanKey resource for a plan customer.
		 * Required
		 */
		keyId: string;

		/**
		 * The type of a UsagePlanKey resource for a plan customer.
		 * Required
		 */
		keyType: string;
	}
	export interface CreateUsagePlanKeyPostBodyFormProperties {

		/**
		 * The identifier of a UsagePlanKey resource for a plan customer.
		 * Required
		 */
		keyId: FormControl<string | null | undefined>,

		/**
		 * The type of a UsagePlanKey resource for a plan customer.
		 * Required
		 */
		keyType: FormControl<string | null | undefined>,
	}
	export function CreateCreateUsagePlanKeyPostBodyFormGroup() {
		return new FormGroup<CreateUsagePlanKeyPostBodyFormProperties>({
			keyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			keyType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateVpcLinkPostBody {

		/**
		 * The name used to label and identify the VPC link.
		 * Required
		 */
		name: string;

		/** The description of the VPC link. */
		description?: string | null;

		/**
		 * The ARN of the network load balancer of the VPC targeted by the VPC link. The network load balancer must be owned by the same AWS account of the API owner.
		 * Required
		 */
		targetArns: Array<string>;

		/** The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags?: {[id: string]: string };
	}
	export interface CreateVpcLinkPostBodyFormProperties {

		/**
		 * The name used to label and identify the VPC link.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The description of the VPC link. */
		description: FormControl<string | null | undefined>,

		/** The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateVpcLinkPostBodyFormGroup() {
		return new FormGroup<CreateVpcLinkPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateApiKeyPatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateApiKeyPatchBodyFormProperties {
	}
	export function CreateUpdateApiKeyPatchBodyFormGroup() {
		return new FormGroup<UpdateApiKeyPatchBodyFormProperties>({
		});

	}

	export interface TestInvokeAuthorizerPostBody {

		/** A key-value map of headers to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, should be specified. */
		headers?: {[id: string]: string };

		/** The headers as a map from string to list of values to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, may be specified. */
		multiValueHeaders?: {[id: string]: Array<string> };

		/** The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters. */
		pathWithQueryString?: string | null;

		/** The simulated request body of an incoming invocation request. */
		body?: string | null;

		/** A key-value map of stage variables to simulate an invocation on a deployed Stage. */
		stageVariables?: {[id: string]: string };

		/** A key-value map of additional context variables. */
		additionalContext?: {[id: string]: string };
	}
	export interface TestInvokeAuthorizerPostBodyFormProperties {

		/** A key-value map of headers to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, should be specified. */
		headers: FormControl<{[id: string]: string } | null | undefined>,

		/** The headers as a map from string to list of values to simulate an incoming invocation request. This is where the incoming authorization token, or identity source, may be specified. */
		multiValueHeaders: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/** The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters. */
		pathWithQueryString: FormControl<string | null | undefined>,

		/** The simulated request body of an incoming invocation request. */
		body: FormControl<string | null | undefined>,

		/** A key-value map of stage variables to simulate an invocation on a deployed Stage. */
		stageVariables: FormControl<{[id: string]: string } | null | undefined>,

		/** A key-value map of additional context variables. */
		additionalContext: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTestInvokeAuthorizerPostBodyFormGroup() {
		return new FormGroup<TestInvokeAuthorizerPostBodyFormProperties>({
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			multiValueHeaders: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			pathWithQueryString: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			stageVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			additionalContext: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateAuthorizerPatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateAuthorizerPatchBodyFormProperties {
	}
	export function CreateUpdateAuthorizerPatchBodyFormGroup() {
		return new FormGroup<UpdateAuthorizerPatchBodyFormProperties>({
		});

	}

	export interface UpdateBasePathMappingPatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateBasePathMappingPatchBodyFormProperties {
	}
	export function CreateUpdateBasePathMappingPatchBodyFormGroup() {
		return new FormGroup<UpdateBasePathMappingPatchBodyFormProperties>({
		});

	}

	export interface UpdateClientCertificatePatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateClientCertificatePatchBodyFormProperties {
	}
	export function CreateUpdateClientCertificatePatchBodyFormGroup() {
		return new FormGroup<UpdateClientCertificatePatchBodyFormProperties>({
		});

	}

	export interface UpdateDeploymentPatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateDeploymentPatchBodyFormProperties {
	}
	export function CreateUpdateDeploymentPatchBodyFormGroup() {
		return new FormGroup<UpdateDeploymentPatchBodyFormProperties>({
		});

	}

	export interface UpdateDocumentationPartPatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateDocumentationPartPatchBodyFormProperties {
	}
	export function CreateUpdateDocumentationPartPatchBodyFormGroup() {
		return new FormGroup<UpdateDocumentationPartPatchBodyFormProperties>({
		});

	}

	export interface UpdateDocumentationVersionPatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateDocumentationVersionPatchBodyFormProperties {
	}
	export function CreateUpdateDocumentationVersionPatchBodyFormGroup() {
		return new FormGroup<UpdateDocumentationVersionPatchBodyFormProperties>({
		});

	}

	export interface UpdateDomainNamePatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateDomainNamePatchBodyFormProperties {
	}
	export function CreateUpdateDomainNamePatchBodyFormGroup() {
		return new FormGroup<UpdateDomainNamePatchBodyFormProperties>({
		});

	}

	export interface PutGatewayResponsePutBody {

		/** The status code. */
		statusCode?: string | null;

		/** Response parameters (paths, query strings and headers) of the GatewayResponse as a string-to-string map of key-value pairs. */
		responseParameters?: {[id: string]: string };

		/** Response templates of the GatewayResponse as a string-to-string map of key-value pairs. */
		responseTemplates?: {[id: string]: string };
	}
	export interface PutGatewayResponsePutBodyFormProperties {

		/** The status code. */
		statusCode: FormControl<string | null | undefined>,

		/** Response parameters (paths, query strings and headers) of the GatewayResponse as a string-to-string map of key-value pairs. */
		responseParameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Response templates of the GatewayResponse as a string-to-string map of key-value pairs. */
		responseTemplates: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePutGatewayResponsePutBodyFormGroup() {
		return new FormGroup<PutGatewayResponsePutBodyFormProperties>({
			statusCode: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[1-5]\d\d')]),
			responseParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			responseTemplates: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateGatewayResponsePatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateGatewayResponsePatchBodyFormProperties {
	}
	export function CreateUpdateGatewayResponsePatchBodyFormGroup() {
		return new FormGroup<UpdateGatewayResponsePatchBodyFormProperties>({
		});

	}

	export interface PutIntegrationPutBody {

		/**
		 * The integration type. The valid value is <code>HTTP</code> for integrating an API method with an HTTP backend; <code>AWS</code> with any AWS service endpoints; <code>MOCK</code> for testing without actually invoking the backend; <code>HTTP_PROXY</code> for integrating with the HTTP proxy integration; <code>AWS_PROXY</code> for integrating with the Lambda proxy integration.
		 * Required
		 */
		type: IntegrationType;

		/** The HTTP method for the integration. */
		httpMethod?: string | null;

		/** Specifies Uniform Resource Identifier (URI) of the integration endpoint. For HTTP or <code>HTTP_PROXY</code> integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the RFC-3986 specification, for either standard integration, where <code>connectionType</code> is not <code>VPC_LINK</code>, or private integration, where <code>connectionType</code> is <code>VPC_LINK</code>. For a private HTTP integration, the URI is not used for routing. For <code>AWS</code> or <code>AWS_PROXY</code> integrations, the URI is of the form <code>arn:aws:apigateway:{region}:{subdomain.service|service}:path|action/{service_api</code>}. Here, {Region} is the API Gateway region (e.g., us-east-1); {service} is the name of the integrated Amazon Web Services service (e.g., s3); and {subdomain} is a designated subdomain supported by certain Amazon Web Services service for fast host-name lookup. action can be used for an Amazon Web Services service action-based API, using an Action={name}&amp;{p1}={v1}&amp;p2={v2}... query string. The ensuing {service_api} refers to a supported action {name} plus any required input parameters. Alternatively, path can be used for an Amazon Web Services service path-based API. The ensuing service_api refers to the path to an Amazon Web Services service resource, including the region of the integrated Amazon Web Services service, if applicable. For example, for integration with the S3 API of <code>GetObject</code>, the <code>uri</code> can be either <code>arn:aws:apigateway:us-west-2:s3:action/GetObject&amp;Bucket={bucket}&amp;Key={key}</code> or <code>arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}</code>. */
		uri?: string | null;

		/** The type of the network connection to the integration endpoint. The valid value is <code>INTERNET</code> for connections through the public routable internet or <code>VPC_LINK</code> for private connections between API Gateway and a network load balancer in a VPC. The default value is <code>INTERNET</code>. */
		connectionType?: ConnectionType | null;

		/** The ID of the VpcLink used for the integration. Specify this value only if you specify <code>VPC_LINK</code> as the connection type. */
		connectionId?: string | null;

		/** Specifies whether credentials are required for a put integration. */
		credentials?: string | null;

		/** A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> must be a valid and unique method request parameter name. */
		requestParameters?: {[id: string]: string };

		/** Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. */
		requestTemplates?: {[id: string]: string };

		/** Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the <code>requestTemplates</code> property on the Integration resource. There are three valid values: <code>WHEN_NO_MATCH</code>, <code>WHEN_NO_TEMPLATES</code>, and <code>NEVER</code>. */
		passthroughBehavior?: string | null;

		/** Specifies a group of related cached parameters. By default, API Gateway uses the resource ID as the <code>cacheNamespace</code>. You can specify the same <code>cacheNamespace</code> across resources to return the same cached data for requests to different resources. */
		cacheNamespace?: string | null;

		/** A list of request parameters whose values API Gateway caches. To be valid values for <code>cacheKeyParameters</code>, these parameters must also be specified for Method <code>requestParameters</code>. */
		cacheKeyParameters?: Array<string>;

		/** <p>Specifies how to handle request payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <p>If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the <code>passthroughBehavior</code> is configured to support payload pass-through.</p> */
		contentHandling?: ContentHandlingStrategy | null;

		/**
		 * Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeoutInMillis?: number | null;

		/** Specifies the TLS configuration for an integration. */
		tlsConfig?: PutIntegrationPutBodyTlsConfig;
	}
	export interface PutIntegrationPutBodyFormProperties {

		/**
		 * The integration type. The valid value is <code>HTTP</code> for integrating an API method with an HTTP backend; <code>AWS</code> with any AWS service endpoints; <code>MOCK</code> for testing without actually invoking the backend; <code>HTTP_PROXY</code> for integrating with the HTTP proxy integration; <code>AWS_PROXY</code> for integrating with the Lambda proxy integration.
		 * Required
		 */
		type: FormControl<IntegrationType | null | undefined>,

		/** The HTTP method for the integration. */
		httpMethod: FormControl<string | null | undefined>,

		/** Specifies Uniform Resource Identifier (URI) of the integration endpoint. For HTTP or <code>HTTP_PROXY</code> integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the RFC-3986 specification, for either standard integration, where <code>connectionType</code> is not <code>VPC_LINK</code>, or private integration, where <code>connectionType</code> is <code>VPC_LINK</code>. For a private HTTP integration, the URI is not used for routing. For <code>AWS</code> or <code>AWS_PROXY</code> integrations, the URI is of the form <code>arn:aws:apigateway:{region}:{subdomain.service|service}:path|action/{service_api</code>}. Here, {Region} is the API Gateway region (e.g., us-east-1); {service} is the name of the integrated Amazon Web Services service (e.g., s3); and {subdomain} is a designated subdomain supported by certain Amazon Web Services service for fast host-name lookup. action can be used for an Amazon Web Services service action-based API, using an Action={name}&amp;{p1}={v1}&amp;p2={v2}... query string. The ensuing {service_api} refers to a supported action {name} plus any required input parameters. Alternatively, path can be used for an Amazon Web Services service path-based API. The ensuing service_api refers to the path to an Amazon Web Services service resource, including the region of the integrated Amazon Web Services service, if applicable. For example, for integration with the S3 API of <code>GetObject</code>, the <code>uri</code> can be either <code>arn:aws:apigateway:us-west-2:s3:action/GetObject&amp;Bucket={bucket}&amp;Key={key}</code> or <code>arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}</code>. */
		uri: FormControl<string | null | undefined>,

		/** The type of the network connection to the integration endpoint. The valid value is <code>INTERNET</code> for connections through the public routable internet or <code>VPC_LINK</code> for private connections between API Gateway and a network load balancer in a VPC. The default value is <code>INTERNET</code>. */
		connectionType: FormControl<ConnectionType | null | undefined>,

		/** The ID of the VpcLink used for the integration. Specify this value only if you specify <code>VPC_LINK</code> as the connection type. */
		connectionId: FormControl<string | null | undefined>,

		/** Specifies whether credentials are required for a put integration. */
		credentials: FormControl<string | null | undefined>,

		/** A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> must be a valid and unique method request parameter name. */
		requestParameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. */
		requestTemplates: FormControl<{[id: string]: string } | null | undefined>,

		/** Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the <code>requestTemplates</code> property on the Integration resource. There are three valid values: <code>WHEN_NO_MATCH</code>, <code>WHEN_NO_TEMPLATES</code>, and <code>NEVER</code>. */
		passthroughBehavior: FormControl<string | null | undefined>,

		/** Specifies a group of related cached parameters. By default, API Gateway uses the resource ID as the <code>cacheNamespace</code>. You can specify the same <code>cacheNamespace</code> across resources to return the same cached data for requests to different resources. */
		cacheNamespace: FormControl<string | null | undefined>,

		/** <p>Specifies how to handle request payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <p>If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the <code>passthroughBehavior</code> is configured to support payload pass-through.</p> */
		contentHandling: FormControl<ContentHandlingStrategy | null | undefined>,

		/**
		 * Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeoutInMillis: FormControl<number | null | undefined>,
	}
	export function CreatePutIntegrationPutBodyFormGroup() {
		return new FormGroup<PutIntegrationPutBodyFormProperties>({
			type: new FormControl<IntegrationType | null | undefined>(undefined, [Validators.required]),
			httpMethod: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
			connectionType: new FormControl<ConnectionType | null | undefined>(undefined),
			connectionId: new FormControl<string | null | undefined>(undefined),
			credentials: new FormControl<string | null | undefined>(undefined),
			requestParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			requestTemplates: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			passthroughBehavior: new FormControl<string | null | undefined>(undefined),
			cacheNamespace: new FormControl<string | null | undefined>(undefined),
			contentHandling: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
			timeoutInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutIntegrationPutBodyTlsConfig {
		insecureSkipVerification?: boolean | null;
	}
	export interface PutIntegrationPutBodyTlsConfigFormProperties {
		insecureSkipVerification: FormControl<boolean | null | undefined>,
	}
	export function CreatePutIntegrationPutBodyTlsConfigFormGroup() {
		return new FormGroup<PutIntegrationPutBodyTlsConfigFormProperties>({
			insecureSkipVerification: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateIntegrationPatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateIntegrationPatchBodyFormProperties {
	}
	export function CreateUpdateIntegrationPatchBodyFormGroup() {
		return new FormGroup<UpdateIntegrationPatchBodyFormProperties>({
		});

	}

	export interface PutIntegrationResponsePutBody {

		/** Specifies the selection pattern of a put integration response. */
		selectionPattern?: string | null;

		/** A key-value map specifying response parameters that are passed to the method response from the back end. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The mapped non-static value must match the pattern of <code>integration.response.header.{name}</code> or <code>integration.response.body.{JSON-expression}</code>, where <code>name</code> must be a valid and unique response header name and <code>JSON-expression</code> a valid JSON expression without the <code>$</code> prefix. */
		responseParameters?: {[id: string]: string };

		/** Specifies a put integration response's templates. */
		responseTemplates?: {[id: string]: string };

		/** <p>Specifies how to handle response payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.</p> */
		contentHandling?: ContentHandlingStrategy | null;
	}
	export interface PutIntegrationResponsePutBodyFormProperties {

		/** Specifies the selection pattern of a put integration response. */
		selectionPattern: FormControl<string | null | undefined>,

		/** A key-value map specifying response parameters that are passed to the method response from the back end. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The mapped non-static value must match the pattern of <code>integration.response.header.{name}</code> or <code>integration.response.body.{JSON-expression}</code>, where <code>name</code> must be a valid and unique response header name and <code>JSON-expression</code> a valid JSON expression without the <code>$</code> prefix. */
		responseParameters: FormControl<{[id: string]: string } | null | undefined>,

		/** Specifies a put integration response's templates. */
		responseTemplates: FormControl<{[id: string]: string } | null | undefined>,

		/** <p>Specifies how to handle response payload content type conversions. Supported values are <code>CONVERT_TO_BINARY</code> and <code>CONVERT_TO_TEXT</code>, with the following behaviors:</p> <p>If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.</p> */
		contentHandling: FormControl<ContentHandlingStrategy | null | undefined>,
	}
	export function CreatePutIntegrationResponsePutBodyFormGroup() {
		return new FormGroup<PutIntegrationResponsePutBodyFormProperties>({
			selectionPattern: new FormControl<string | null | undefined>(undefined),
			responseParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			responseTemplates: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			contentHandling: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
		});

	}

	export interface UpdateIntegrationResponsePatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateIntegrationResponsePatchBodyFormProperties {
	}
	export function CreateUpdateIntegrationResponsePatchBodyFormGroup() {
		return new FormGroup<UpdateIntegrationResponsePatchBodyFormProperties>({
		});

	}

	export interface PutMethodPutBody {

		/**
		 * The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.
		 * Required
		 */
		authorizationType: string;

		/** Specifies the identifier of an Authorizer to use on this Method, if the type is CUSTOM or COGNITO_USER_POOLS. The authorizer identifier is generated by API Gateway when you created the authorizer. */
		authorizerId?: string | null;

		/** Specifies whether the method required a valid ApiKey. */
		apiKeyRequired?: boolean | null;

		/** A human-friendly operation identifier for the method. For example, you can assign the <code>operationName</code> of <code>ListPets</code> for the <code>GET /pets</code> method in the <code>PetStore</code> example. */
		operationName?: string | null;

		/** A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key defines a method request parameter name matching the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (<code>true</code>) or optional (<code>false</code>). The method request parameter names defined here are available in Integration to be mapped to integration request parameters or body-mapping templates. */
		requestParameters?: {[id: string]: boolean };

		/** Specifies the Model resources used for the request's content type. Request models are represented as a key/value map, with a content type as the key and a Model name as the value. */
		requestModels?: {[id: string]: string };

		/** The identifier of a RequestValidator for validating the method request. */
		requestValidatorId?: string | null;

		/** A list of authorization scopes configured on the method. The scopes are used with a <code>COGNITO_USER_POOLS</code> authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		authorizationScopes?: Array<string>;
	}
	export interface PutMethodPutBodyFormProperties {

		/**
		 * The method's authorization type. Valid values are <code>NONE</code> for open access, <code>AWS_IAM</code> for using AWS IAM permissions, <code>CUSTOM</code> for using a custom authorizer, or <code>COGNITO_USER_POOLS</code> for using a Cognito user pool.
		 * Required
		 */
		authorizationType: FormControl<string | null | undefined>,

		/** Specifies the identifier of an Authorizer to use on this Method, if the type is CUSTOM or COGNITO_USER_POOLS. The authorizer identifier is generated by API Gateway when you created the authorizer. */
		authorizerId: FormControl<string | null | undefined>,

		/** Specifies whether the method required a valid ApiKey. */
		apiKeyRequired: FormControl<boolean | null | undefined>,

		/** A human-friendly operation identifier for the method. For example, you can assign the <code>operationName</code> of <code>ListPets</code> for the <code>GET /pets</code> method in the <code>PetStore</code> example. */
		operationName: FormControl<string | null | undefined>,

		/** A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key defines a method request parameter name matching the pattern of <code>method.request.{location}.{name}</code>, where <code>location</code> is <code>querystring</code>, <code>path</code>, or <code>header</code> and <code>name</code> is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (<code>true</code>) or optional (<code>false</code>). The method request parameter names defined here are available in Integration to be mapped to integration request parameters or body-mapping templates. */
		requestParameters: FormControl<{[id: string]: boolean } | null | undefined>,

		/** Specifies the Model resources used for the request's content type. Request models are represented as a key/value map, with a content type as the key and a Model name as the value. */
		requestModels: FormControl<{[id: string]: string } | null | undefined>,

		/** The identifier of a RequestValidator for validating the method request. */
		requestValidatorId: FormControl<string | null | undefined>,
	}
	export function CreatePutMethodPutBodyFormGroup() {
		return new FormGroup<PutMethodPutBodyFormProperties>({
			authorizationType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authorizerId: new FormControl<string | null | undefined>(undefined),
			apiKeyRequired: new FormControl<boolean | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
			requestParameters: new FormControl<{[id: string]: boolean } | null | undefined>(undefined),
			requestModels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			requestValidatorId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TestInvokeMethodPostBody {

		/** The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters. */
		pathWithQueryString?: string | null;

		/** The simulated request body of an incoming invocation request. */
		body?: string | null;

		/** A key-value map of headers to simulate an incoming invocation request. */
		headers?: {[id: string]: string };

		/** The headers as a map from string to list of values to simulate an incoming invocation request. */
		multiValueHeaders?: {[id: string]: Array<string> };

		/** A ClientCertificate identifier to use in the test invocation. API Gateway will use the certificate when making the HTTPS request to the defined back-end endpoint. */
		clientCertificateId?: string | null;

		/** A key-value map of stage variables to simulate an invocation on a deployed Stage. */
		stageVariables?: {[id: string]: string };
	}
	export interface TestInvokeMethodPostBodyFormProperties {

		/** The URI path, including query string, of the simulated invocation request. Use this to specify path parameters and query string parameters. */
		pathWithQueryString: FormControl<string | null | undefined>,

		/** The simulated request body of an incoming invocation request. */
		body: FormControl<string | null | undefined>,

		/** A key-value map of headers to simulate an incoming invocation request. */
		headers: FormControl<{[id: string]: string } | null | undefined>,

		/** The headers as a map from string to list of values to simulate an incoming invocation request. */
		multiValueHeaders: FormControl<{[id: string]: Array<string> } | null | undefined>,

		/** A ClientCertificate identifier to use in the test invocation. API Gateway will use the certificate when making the HTTPS request to the defined back-end endpoint. */
		clientCertificateId: FormControl<string | null | undefined>,

		/** A key-value map of stage variables to simulate an invocation on a deployed Stage. */
		stageVariables: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTestInvokeMethodPostBodyFormGroup() {
		return new FormGroup<TestInvokeMethodPostBodyFormProperties>({
			pathWithQueryString: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			multiValueHeaders: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			clientCertificateId: new FormControl<string | null | undefined>(undefined),
			stageVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateMethodPatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateMethodPatchBodyFormProperties {
	}
	export function CreateUpdateMethodPatchBodyFormGroup() {
		return new FormGroup<UpdateMethodPatchBodyFormProperties>({
		});

	}

	export interface PutMethodResponsePutBody {

		/** A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header name and the associated value is a Boolean flag indicating whether the method response parameter is required or not. The method response header names must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The response parameter names defined here are available in the integration response to be mapped from an integration response header expressed in <code>integration.response.header.{name}</code>, a static value enclosed within a pair of single quotes (e.g., <code>'application/json'</code>), or a JSON expression from the back-end response payload in the form of <code>integration.response.body.{JSON-expression}</code>, where <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.) */
		responseParameters?: {[id: string]: boolean };

		/** Specifies the Model resources used for the response's content type. Response models are represented as a key/value map, with a content type as the key and a Model name as the value. */
		responseModels?: {[id: string]: string };
	}
	export interface PutMethodResponsePutBodyFormProperties {

		/** A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header name and the associated value is a Boolean flag indicating whether the method response parameter is required or not. The method response header names must match the pattern of <code>method.response.header.{name}</code>, where <code>name</code> is a valid and unique header name. The response parameter names defined here are available in the integration response to be mapped from an integration response header expressed in <code>integration.response.header.{name}</code>, a static value enclosed within a pair of single quotes (e.g., <code>'application/json'</code>), or a JSON expression from the back-end response payload in the form of <code>integration.response.body.{JSON-expression}</code>, where <code>JSON-expression</code> is a valid JSON expression without the <code>$</code> prefix.) */
		responseParameters: FormControl<{[id: string]: boolean } | null | undefined>,

		/** Specifies the Model resources used for the response's content type. Response models are represented as a key/value map, with a content type as the key and a Model name as the value. */
		responseModels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePutMethodResponsePutBodyFormGroup() {
		return new FormGroup<PutMethodResponsePutBodyFormProperties>({
			responseParameters: new FormControl<{[id: string]: boolean } | null | undefined>(undefined),
			responseModels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateMethodResponsePatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateMethodResponsePatchBodyFormProperties {
	}
	export function CreateUpdateMethodResponsePatchBodyFormGroup() {
		return new FormGroup<UpdateMethodResponsePatchBodyFormProperties>({
		});

	}

	export interface UpdateModelPatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateModelPatchBodyFormProperties {
	}
	export function CreateUpdateModelPatchBodyFormGroup() {
		return new FormGroup<UpdateModelPatchBodyFormProperties>({
		});

	}

	export interface UpdateRequestValidatorPatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateRequestValidatorPatchBodyFormProperties {
	}
	export function CreateUpdateRequestValidatorPatchBodyFormGroup() {
		return new FormGroup<UpdateRequestValidatorPatchBodyFormProperties>({
		});

	}

	export interface UpdateResourcePatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateResourcePatchBodyFormProperties {
	}
	export function CreateUpdateResourcePatchBodyFormGroup() {
		return new FormGroup<UpdateResourcePatchBodyFormProperties>({
		});

	}

	export interface PutRestApiPutBody {

		/**
		 * The PUT request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB.
		 * Required
		 */
		body: string;
	}
	export interface PutRestApiPutBodyFormProperties {

		/**
		 * The PUT request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB.
		 * Required
		 */
		body: FormControl<string | null | undefined>,
	}
	export function CreatePutRestApiPutBodyFormGroup() {
		return new FormGroup<PutRestApiPutBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRestApiPatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateRestApiPatchBodyFormProperties {
	}
	export function CreateUpdateRestApiPatchBodyFormGroup() {
		return new FormGroup<UpdateRestApiPatchBodyFormProperties>({
		});

	}

	export interface UpdateStagePatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateStagePatchBodyFormProperties {
	}
	export function CreateUpdateStagePatchBodyFormGroup() {
		return new FormGroup<UpdateStagePatchBodyFormProperties>({
		});

	}

	export interface UpdateUsagePlanPatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateUsagePlanPatchBodyFormProperties {
	}
	export function CreateUpdateUsagePlanPatchBodyFormGroup() {
		return new FormGroup<UpdateUsagePlanPatchBodyFormProperties>({
		});

	}

	export interface UpdateVpcLinkPatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateVpcLinkPatchBodyFormProperties {
	}
	export function CreateUpdateVpcLinkPatchBodyFormGroup() {
		return new FormGroup<UpdateVpcLinkPatchBodyFormProperties>({
		});

	}

	export interface GenerateClientCertificatePostBody {

		/** The description of the ClientCertificate. */
		description?: string | null;

		/** The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags?: {[id: string]: string };
	}
	export interface GenerateClientCertificatePostBodyFormProperties {

		/** The description of the ClientCertificate. */
		description: FormControl<string | null | undefined>,

		/** The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGenerateClientCertificatePostBodyFormGroup() {
		return new FormGroup<GenerateClientCertificatePostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateAccountPatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateAccountPatchBodyFormProperties {
	}
	export function CreateUpdateAccountPatchBodyFormGroup() {
		return new FormGroup<UpdateAccountPatchBodyFormProperties>({
		});

	}

	export interface TagResourcePutBody {

		/**
		 * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePutBodyFormProperties {

		/**
		 * The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePutBodyFormGroup() {
		return new FormGroup<TagResourcePutBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ImportApiKeysMode { import = 'import' }

	export interface ImportApiKeysPostBody {

		/**
		 * The payload of the POST request to import API keys. For the payload format, see API Key File Format.
		 * Required
		 */
		body: string;
	}
	export interface ImportApiKeysPostBodyFormProperties {

		/**
		 * The payload of the POST request to import API keys. For the payload format, see API Key File Format.
		 * Required
		 */
		body: FormControl<string | null | undefined>,
	}
	export function CreateImportApiKeysPostBodyFormGroup() {
		return new FormGroup<ImportApiKeysPostBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportRestApiPostBody {

		/**
		 * The POST request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB.
		 * Required
		 */
		body: string;
	}
	export interface ImportRestApiPostBodyFormProperties {

		/**
		 * The POST request body containing external API definitions. Currently, only OpenAPI definition JSON/YAML files are supported. The maximum size of the API definition file is 6MB.
		 * Required
		 */
		body: FormControl<string | null | undefined>,
	}
	export function CreateImportRestApiPostBodyFormGroup() {
		return new FormGroup<ImportRestApiPostBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateUsagePatchBody {

		/** A list of operations describing the updates to apply to the specified resource. The patches are applied in the order specified in the list. */
		patchOperations?: Array<PatchOperation>;
	}
	export interface UpdateUsagePatchBodyFormProperties {
	}
	export function CreateUpdateUsagePatchBodyFormGroup() {
		return new FormGroup<UpdateUsagePatchBodyFormProperties>({
		});

	}

}

