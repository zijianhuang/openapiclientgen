import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateApiResponse {
		ApiEndpoint?: string | null;

		/** The identifier. */
		ApiId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string | null;

		/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors | null;
		CreatedDate?: Date | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		DisableSchemaValidation?: boolean | null;
		ImportInfo?: Array<string> | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** Represents a protocol type. */
		ProtocolType?: CreateApiResponseProtocolType | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression?: string | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;

		/** A string with a length between [1-64]. */
		Version?: string | null;
		Warnings?: Array<string> | null;
	}


	/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
	export interface Cors {
		AllowCredentials?: boolean | null;

		/** Represents a collection of allowed headers. Supported only for HTTP APIs. */
		AllowHeaders?: Array<string> | null;

		/** Represents a collection of methods. Supported only for HTTP APIs. */
		AllowMethods?: Array<string> | null;

		/** Represents a collection of origins. Supported only for HTTP APIs. */
		AllowOrigins?: Array<string> | null;

		/** Represents a collection of allowed headers. Supported only for HTTP APIs. */
		ExposeHeaders?: Array<string> | null;

		/**
		 * An integer with a value between -1 and 86400. Supported only for HTTP APIs.
		 * Minimum: -1
		 * Maximum: 86400
		 */
		MaxAge?: number | null;
	}

	export enum CreateApiResponseProtocolType { WEBSOCKET = 0, HTTP = 1 }


	/** Represents a collection of tags associated with the resource. */
	export interface Tags {
	}

	export interface NotFoundException {
	}

	export interface TooManyRequestsException {
	}

	export interface BadRequestException {
	}

	export interface ConflictException {
	}

	export interface CreateApiMappingResponse {

		/** The identifier. */
		ApiId?: string | null;

		/** The identifier. */
		ApiMappingId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		ApiMappingKey?: string | null;

		/** A string with a length between [1-128]. */
		Stage?: string | null;
	}

	export interface CreateAuthorizerResponse {

		/** Represents an Amazon Resource Name (ARN). */
		AuthorizerCredentialsArn?: string | null;

		/** The identifier. */
		AuthorizerId?: string | null;

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		AuthorizerResultTtlInSeconds?: number | null;

		/** The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
		AuthorizerType?: CreateAuthorizerResponseAuthorizerType | null;

		/** A string representation of a URI with a length between [1-2048]. */
		AuthorizerUri?: string | null;

		/** The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional. */
		IdentitySource?: Array<string> | null;

		/** A string with a length between [0-1024]. */
		IdentityValidationExpression?: string | null;

		/** Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		JwtConfiguration?: JWTConfiguration | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;
	}

	export enum CreateAuthorizerResponseAuthorizerType { REQUEST = 0, JWT = 1 }


	/** Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
	export interface JWTConfiguration {
		Audience?: Array<string> | null;

		/** A string representation of a URI with a length between [1-2048]. */
		Issuer?: string | null;
	}

	export interface CreateDeploymentResponse {
		AutoDeployed?: boolean | null;
		CreatedDate?: Date | null;

		/** The identifier. */
		DeploymentId?: string | null;

		/** Represents a deployment status. */
		DeploymentStatus?: CreateDeploymentResponseDeploymentStatus | null;
		DeploymentStatusMessage?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
	}

	export enum CreateDeploymentResponseDeploymentStatus { PENDING = 0, FAILED = 1, DEPLOYED = 2 }

	export interface CreateDomainNameResponse {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiMappingSelectionExpression?: string | null;

		/** A string with a length between [1-512]. */
		DomainName?: string | null;

		/** The domain name configurations. */
		DomainNameConfigurations?: Array<DomainNameConfiguration> | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;
	}


	/** The domain name configuration. */
	export interface DomainNameConfiguration {
		ApiGatewayDomainName?: string | null;

		/** Represents an Amazon Resource Name (ARN). */
		CertificateArn?: string | null;

		/** A string with a length between [1-128]. */
		CertificateName?: string | null;
		CertificateUploadDate?: Date | null;

		/** The status of the domain name migration. The valid values are AVAILABLE and UPDATING. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated. */
		DomainNameStatus?: DomainNameConfigurationDomainNameStatus | null;
		DomainNameStatusMessage?: string | null;

		/** Represents an endpoint type. */
		EndpointType?: DomainNameConfigurationEndpointType | null;
		HostedZoneId?: string | null;

		/** The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2. */
		SecurityPolicy?: DomainNameConfigurationSecurityPolicy | null;
	}

	export enum DomainNameConfigurationDomainNameStatus { AVAILABLE = 0, UPDATING = 1 }

	export enum DomainNameConfigurationEndpointType { REGIONAL = 0, EDGE = 1 }

	export enum DomainNameConfigurationSecurityPolicy { TLS_1_0 = 0, TLS_1_2 = 1 }

	export interface AccessDeniedException {
	}

	export interface CreateIntegrationResult {
		ApiGatewayManaged?: boolean | null;

		/** A string with a length between [1-1024]. */
		ConnectionId?: string | null;

		/** Represents a connection type. */
		ConnectionType?: CreateIntegrationResultConnectionType | null;

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/** Represents an Amazon Resource Name (ARN). */
		CredentialsArn?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;

		/** The identifier. */
		IntegrationId?: string | null;

		/** A string with a length between [1-64]. */
		IntegrationMethod?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		IntegrationResponseSelectionExpression?: string | null;

		/** Represents an API method integration type. */
		IntegrationType?: CreateIntegrationResultIntegrationType | null;

		/** A string representation of a URI with a length between [1-2048]. */
		IntegrationUri?: string | null;

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		PassthroughBehavior?: CreateIntegrationResultPassthroughBehavior | null;

		/** A string with a length between [1-64]. */
		PayloadFormatVersion?: string | null;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		RequestParameters?: IntegrationParameters | null;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		RequestTemplates?: TemplateMap | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis?: number | null;

		/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		TlsConfig?: TlsConfig | null;
	}

	export enum CreateIntegrationResultConnectionType { INTERNET = 0, VPC_LINK = 1 }

	export enum CreateIntegrationResultContentHandlingStrategy { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }

	export enum CreateIntegrationResultIntegrationType { AWS = 0, HTTP = 1, MOCK = 2, HTTP_PROXY = 3, AWS_PROXY = 4 }

	export enum CreateIntegrationResultPassthroughBehavior { WHEN_NO_MATCH = 0, NEVER = 1, WHEN_NO_TEMPLATES = 2 }


	/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
	export interface IntegrationParameters {
	}


	/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
	export interface TemplateMap {
	}


	/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
	export interface TlsConfig {

		/** A string with a length between [1-512]. */
		ServerNameToVerify?: string | null;
	}

	export interface CreateIntegrationResponseResponse {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/** The identifier. */
		IntegrationResponseId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		IntegrationResponseKey?: string | null;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		ResponseParameters?: IntegrationParameters | null;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		ResponseTemplates?: TemplateMap | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;
	}

	export interface CreateModelResponse {

		/** A string with a length between [1-256]. */
		ContentType?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;

		/** The identifier. */
		ModelId?: string | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** A string with a length between [0-32768]. */
		Schema?: string | null;
	}

	export interface CreateRouteResult {
		ApiGatewayManaged?: boolean | null;
		ApiKeyRequired?: boolean | null;

		/** A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		AuthorizationScopes?: Array<string> | null;

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType?: CreateRouteResultAuthorizationType | null;

		/** The identifier. */
		AuthorizerId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** A string with a length between [1-64]. */
		OperationName?: string | null;

		/** The route models. */
		RequestModels?: RouteModels | null;

		/** The route parameters. */
		RequestParameters?: RouteParameters | null;

		/** The identifier. */
		RouteId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression?: string | null;

		/** A string with a length between [1-128]. */
		Target?: string | null;
	}

	export enum CreateRouteResultAuthorizationType { NONE = 0, AWS_IAM = 1, CUSTOM = 2, JWT = 3 }


	/** The route models. */
	export interface RouteModels {
	}


	/** The route parameters. */
	export interface RouteParameters {
	}


	/** Validation constraints imposed on parameters of a request (path, query string, headers). */
	export interface ParameterConstraints {
		Required?: boolean | null;
	}

	export interface CreateRouteResponseResponse {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** The route models. */
		ResponseModels?: RouteModels | null;

		/** The route parameters. */
		ResponseParameters?: RouteParameters | null;

		/** The identifier. */
		RouteResponseId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteResponseKey?: string | null;
	}

	export interface CreateStageResponse {

		/** Settings for logging access in a stage. */
		AccessLogSettings?: AccessLogSettings | null;
		ApiGatewayManaged?: boolean | null;
		AutoDeploy?: boolean | null;

		/** The identifier. */
		ClientCertificateId?: string | null;
		CreatedDate?: Date | null;

		/** Represents a collection of route settings. */
		DefaultRouteSettings?: RouteSettings | null;

		/** The identifier. */
		DeploymentId?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		LastDeploymentStatusMessage?: string | null;
		LastUpdatedDate?: Date | null;

		/** The route settings map. */
		RouteSettings?: RouteSettingsMap | null;

		/** A string with a length between [1-128]. */
		StageName?: string | null;

		/** The stage variable map. */
		StageVariables?: StageVariablesMap | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;
	}


	/** Settings for logging access in a stage. */
	export interface AccessLogSettings {

		/** Represents an Amazon Resource Name (ARN). */
		DestinationArn?: string | null;

		/** A string with a length between [1-1024]. */
		Format?: string | null;
	}


	/** Represents a collection of route settings. */
	export interface RouteSettings {
		DataTraceEnabled?: boolean | null;
		DetailedMetricsEnabled?: boolean | null;

		/** The logging level. */
		LoggingLevel?: RouteSettingsLoggingLevel | null;
		ThrottlingBurstLimit?: number | null;
		ThrottlingRateLimit?: number | null;
	}

	export enum RouteSettingsLoggingLevel { ERROR = 0, INFO = 1, OFF = 2 }


	/** The route settings map. */
	export interface RouteSettingsMap {
	}


	/** The stage variable map. */
	export interface StageVariablesMap {
	}


	/** The logging level. */
	export enum LoggingLevel { ERROR = 0, INFO = 1, OFF = 2 }

	export interface CreateVpcLinkResponse {
		CreatedDate?: Date | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** A list of security group IDs for the VPC link. */
		SecurityGroupIds?: Array<string> | null;

		/** A list of subnet IDs to include in the VPC link. */
		SubnetIds?: Array<string> | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;

		/** The identifier. */
		VpcLinkId?: string | null;

		/** The status of the VPC link. */
		VpcLinkStatus?: CreateVpcLinkResponseVpcLinkStatus | null;

		/** A string with a length between [0-1024]. */
		VpcLinkStatusMessage?: string | null;

		/** The version of the VPC link. */
		VpcLinkVersion?: CreateVpcLinkResponseVpcLinkVersion | null;
	}

	export enum CreateVpcLinkResponseVpcLinkStatus { PENDING = 0, AVAILABLE = 1, DELETING = 2, FAILED = 3, INACTIVE = 4 }

	export enum CreateVpcLinkResponseVpcLinkVersion { V2 = 0 }

	export interface DeleteVpcLinkResponse {
	}

	export interface ExportApiResponse {

		/** Represents an exported definition of an API in a particular output format, for example, YAML. The API is serialized to the requested specification, for example, OpenAPI 3.0. */
		body?: string | null;
	}

	export interface GetApiResponse {
		ApiEndpoint?: string | null;

		/** The identifier. */
		ApiId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string | null;

		/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors | null;
		CreatedDate?: Date | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		DisableSchemaValidation?: boolean | null;
		ImportInfo?: Array<string> | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** Represents a protocol type. */
		ProtocolType?: CreateApiResponseProtocolType | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression?: string | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;

		/** A string with a length between [1-64]. */
		Version?: string | null;
		Warnings?: Array<string> | null;
	}

	export interface GetApiMappingResponse {

		/** The identifier. */
		ApiId?: string | null;

		/** The identifier. */
		ApiMappingId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		ApiMappingKey?: string | null;

		/** A string with a length between [1-128]. */
		Stage?: string | null;
	}

	export interface GetApiMappingsResponse {
		Items?: Array<ApiMapping> | null;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}


	/** Represents an API mapping. */
	export interface ApiMapping {

		/**
		 * The identifier.
		 * Required
		 */
		ApiId: string;

		/** The identifier. */
		ApiMappingId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		ApiMappingKey?: string | null;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Stage: string;
	}

	export interface GetApisResponse {
		Items?: Array<Api> | null;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}


	/** Represents an API. */
	export interface Api {
		ApiEndpoint?: string | null;

		/** The identifier. */
		ApiId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string | null;

		/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors | null;
		CreatedDate?: Date | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		DisableSchemaValidation?: boolean | null;
		ImportInfo?: Array<string> | null;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Name: string;

		/**
		 * Represents a protocol type.
		 * Required
		 */
		ProtocolType: CreateApiResponseProtocolType;

		/**
		 * An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
		 * Required
		 */
		RouteSelectionExpression: string;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;

		/** A string with a length between [1-64]. */
		Version?: string | null;
		Warnings?: Array<string> | null;
	}

	export interface GetAuthorizerResponse {

		/** Represents an Amazon Resource Name (ARN). */
		AuthorizerCredentialsArn?: string | null;

		/** The identifier. */
		AuthorizerId?: string | null;

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		AuthorizerResultTtlInSeconds?: number | null;

		/** The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
		AuthorizerType?: CreateAuthorizerResponseAuthorizerType | null;

		/** A string representation of a URI with a length between [1-2048]. */
		AuthorizerUri?: string | null;

		/** The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional. */
		IdentitySource?: Array<string> | null;

		/** A string with a length between [0-1024]. */
		IdentityValidationExpression?: string | null;

		/** Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		JwtConfiguration?: JWTConfiguration | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;
	}

	export interface GetAuthorizersResponse {
		Items?: Array<Authorizer> | null;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}


	/** Represents an authorizer. */
	export interface Authorizer {

		/** Represents an Amazon Resource Name (ARN). */
		AuthorizerCredentialsArn?: string | null;

		/** The identifier. */
		AuthorizerId?: string | null;

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		AuthorizerResultTtlInSeconds?: number | null;

		/** The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
		AuthorizerType?: CreateAuthorizerResponseAuthorizerType | null;

		/** A string representation of a URI with a length between [1-2048]. */
		AuthorizerUri?: string | null;

		/** The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional. */
		IdentitySource?: Array<string> | null;

		/** A string with a length between [0-1024]. */
		IdentityValidationExpression?: string | null;

		/** Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		JwtConfiguration?: JWTConfiguration | null;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Name: string;
	}

	export interface GetDeploymentResponse {
		AutoDeployed?: boolean | null;
		CreatedDate?: Date | null;

		/** The identifier. */
		DeploymentId?: string | null;

		/** Represents a deployment status. */
		DeploymentStatus?: CreateDeploymentResponseDeploymentStatus | null;
		DeploymentStatusMessage?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
	}

	export interface GetDeploymentsResponse {
		Items?: Array<Deployment> | null;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}


	/** An immutable representation of an API that can be called by users. A Deployment must be associated with a Stage for it to be callable over the internet. */
	export interface Deployment {
		AutoDeployed?: boolean | null;
		CreatedDate?: Date | null;

		/** The identifier. */
		DeploymentId?: string | null;

		/** Represents a deployment status. */
		DeploymentStatus?: CreateDeploymentResponseDeploymentStatus | null;
		DeploymentStatusMessage?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
	}

	export interface GetDomainNameResponse {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiMappingSelectionExpression?: string | null;

		/** A string with a length between [1-512]. */
		DomainName?: string | null;

		/** The domain name configurations. */
		DomainNameConfigurations?: Array<DomainNameConfiguration> | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;
	}

	export interface GetDomainNamesResponse {
		Items?: Array<DomainName> | null;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}


	/** Represents a domain name. */
	export interface DomainName {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiMappingSelectionExpression?: string | null;

		/**
		 * A string with a length between [1-512].
		 * Required
		 */
		DomainName1: string;

		/** The domain name configurations. */
		DomainNameConfigurations?: Array<DomainNameConfiguration> | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;
	}

	export interface GetIntegrationResult {
		ApiGatewayManaged?: boolean | null;

		/** A string with a length between [1-1024]. */
		ConnectionId?: string | null;

		/** Represents a connection type. */
		ConnectionType?: CreateIntegrationResultConnectionType | null;

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/** Represents an Amazon Resource Name (ARN). */
		CredentialsArn?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;

		/** The identifier. */
		IntegrationId?: string | null;

		/** A string with a length between [1-64]. */
		IntegrationMethod?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		IntegrationResponseSelectionExpression?: string | null;

		/** Represents an API method integration type. */
		IntegrationType?: CreateIntegrationResultIntegrationType | null;

		/** A string representation of a URI with a length between [1-2048]. */
		IntegrationUri?: string | null;

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		PassthroughBehavior?: CreateIntegrationResultPassthroughBehavior | null;

		/** A string with a length between [1-64]. */
		PayloadFormatVersion?: string | null;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		RequestParameters?: IntegrationParameters | null;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		RequestTemplates?: TemplateMap | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis?: number | null;

		/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		TlsConfig?: TlsConfig | null;
	}

	export interface GetIntegrationResponseResponse {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/** The identifier. */
		IntegrationResponseId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		IntegrationResponseKey?: string | null;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		ResponseParameters?: IntegrationParameters | null;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		ResponseTemplates?: TemplateMap | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;
	}

	export interface GetIntegrationResponsesResponse {
		Items?: Array<IntegrationResponse> | null;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}


	/** Represents an integration response. */
	export interface IntegrationResponse {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/** The identifier. */
		IntegrationResponseId?: string | null;

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		IntegrationResponseKey: string;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		ResponseParameters?: IntegrationParameters | null;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		ResponseTemplates?: TemplateMap | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;
	}

	export interface GetIntegrationsResponse {
		Items?: Array<Integration> | null;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}


	/** Represents an integration. */
	export interface Integration {
		ApiGatewayManaged?: boolean | null;

		/** A string with a length between [1-1024]. */
		ConnectionId?: string | null;

		/** Represents a connection type. */
		ConnectionType?: CreateIntegrationResultConnectionType | null;

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/** Represents an Amazon Resource Name (ARN). */
		CredentialsArn?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;

		/** The identifier. */
		IntegrationId?: string | null;

		/** A string with a length between [1-64]. */
		IntegrationMethod?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		IntegrationResponseSelectionExpression?: string | null;

		/** Represents an API method integration type. */
		IntegrationType?: CreateIntegrationResultIntegrationType | null;

		/** A string representation of a URI with a length between [1-2048]. */
		IntegrationUri?: string | null;

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		PassthroughBehavior?: CreateIntegrationResultPassthroughBehavior | null;

		/** A string with a length between [1-64]. */
		PayloadFormatVersion?: string | null;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		RequestParameters?: IntegrationParameters | null;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		RequestTemplates?: TemplateMap | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis?: number | null;

		/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		TlsConfig?: TlsConfig | null;
	}

	export interface GetModelResponse {

		/** A string with a length between [1-256]. */
		ContentType?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;

		/** The identifier. */
		ModelId?: string | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** A string with a length between [0-32768]. */
		Schema?: string | null;
	}

	export interface GetModelTemplateResponse {
		Value?: string | null;
	}

	export interface GetModelsResponse {
		Items?: Array<Model> | null;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}


	/** Represents a data model for an API. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Create Models and Mapping Templates for Request and Response Mappings</a>. */
	export interface Model {

		/** A string with a length between [1-256]. */
		ContentType?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;

		/** The identifier. */
		ModelId?: string | null;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Name: string;

		/** A string with a length between [0-32768]. */
		Schema?: string | null;
	}

	export interface GetRouteResult {
		ApiGatewayManaged?: boolean | null;
		ApiKeyRequired?: boolean | null;

		/** A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		AuthorizationScopes?: Array<string> | null;

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType?: CreateRouteResultAuthorizationType | null;

		/** The identifier. */
		AuthorizerId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** A string with a length between [1-64]. */
		OperationName?: string | null;

		/** The route models. */
		RequestModels?: RouteModels | null;

		/** The route parameters. */
		RequestParameters?: RouteParameters | null;

		/** The identifier. */
		RouteId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression?: string | null;

		/** A string with a length between [1-128]. */
		Target?: string | null;
	}

	export interface GetRouteResponseResponse {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** The route models. */
		ResponseModels?: RouteModels | null;

		/** The route parameters. */
		ResponseParameters?: RouteParameters | null;

		/** The identifier. */
		RouteResponseId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteResponseKey?: string | null;
	}

	export interface GetRouteResponsesResponse {
		Items?: Array<RouteResponse> | null;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}


	/** Represents a route response. */
	export interface RouteResponse {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** The route models. */
		ResponseModels?: RouteModels | null;

		/** The route parameters. */
		ResponseParameters?: RouteParameters | null;

		/** The identifier. */
		RouteResponseId?: string | null;

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		RouteResponseKey: string;
	}

	export interface GetRoutesResponse {
		Items?: Array<Route> | null;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}


	/** Represents a route. */
	export interface Route {
		ApiGatewayManaged?: boolean | null;
		ApiKeyRequired?: boolean | null;

		/** A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		AuthorizationScopes?: Array<string> | null;

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType?: CreateRouteResultAuthorizationType | null;

		/** The identifier. */
		AuthorizerId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** A string with a length between [1-64]. */
		OperationName?: string | null;

		/** The route models. */
		RequestModels?: RouteModels | null;

		/** The route parameters. */
		RequestParameters?: RouteParameters | null;

		/** The identifier. */
		RouteId?: string | null;

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		RouteKey: string;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression?: string | null;

		/** A string with a length between [1-128]. */
		Target?: string | null;
	}

	export interface GetStageResponse {

		/** Settings for logging access in a stage. */
		AccessLogSettings?: AccessLogSettings | null;
		ApiGatewayManaged?: boolean | null;
		AutoDeploy?: boolean | null;

		/** The identifier. */
		ClientCertificateId?: string | null;
		CreatedDate?: Date | null;

		/** Represents a collection of route settings. */
		DefaultRouteSettings?: RouteSettings | null;

		/** The identifier. */
		DeploymentId?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		LastDeploymentStatusMessage?: string | null;
		LastUpdatedDate?: Date | null;

		/** The route settings map. */
		RouteSettings?: RouteSettingsMap | null;

		/** A string with a length between [1-128]. */
		StageName?: string | null;

		/** The stage variable map. */
		StageVariables?: StageVariablesMap | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;
	}

	export interface GetStagesResponse {
		Items?: Array<Stage> | null;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}


	/** Represents an API stage. */
	export interface Stage {

		/** Settings for logging access in a stage. */
		AccessLogSettings?: AccessLogSettings | null;
		ApiGatewayManaged?: boolean | null;
		AutoDeploy?: boolean | null;

		/** The identifier. */
		ClientCertificateId?: string | null;
		CreatedDate?: Date | null;

		/** Represents a collection of route settings. */
		DefaultRouteSettings?: RouteSettings | null;

		/** The identifier. */
		DeploymentId?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		LastDeploymentStatusMessage?: string | null;
		LastUpdatedDate?: Date | null;

		/** The route settings map. */
		RouteSettings?: RouteSettingsMap | null;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		StageName: string;

		/** The stage variable map. */
		StageVariables?: StageVariablesMap | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;
	}

	export interface GetTagsResponse {

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;
	}

	export interface GetVpcLinkResponse {
		CreatedDate?: Date | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** A list of security group IDs for the VPC link. */
		SecurityGroupIds?: Array<string> | null;

		/** A list of subnet IDs to include in the VPC link. */
		SubnetIds?: Array<string> | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;

		/** The identifier. */
		VpcLinkId?: string | null;

		/** The status of the VPC link. */
		VpcLinkStatus?: CreateVpcLinkResponseVpcLinkStatus | null;

		/** A string with a length between [0-1024]. */
		VpcLinkStatusMessage?: string | null;

		/** The version of the VPC link. */
		VpcLinkVersion?: CreateVpcLinkResponseVpcLinkVersion | null;
	}

	export interface GetVpcLinksResponse {
		Items?: Array<VpcLink> | null;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}


	/** Represents a VPC link. */
	export interface VpcLink {
		CreatedDate?: Date | null;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Name: string;

		/**
		 * A list of security group IDs for the VPC link.
		 * Required
		 */
		SecurityGroupIds: Array<string>;

		/**
		 * A list of subnet IDs to include in the VPC link.
		 * Required
		 */
		SubnetIds: Array<string>;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;

		/**
		 * The identifier.
		 * Required
		 */
		VpcLinkId: string;

		/** The status of the VPC link. */
		VpcLinkStatus?: CreateVpcLinkResponseVpcLinkStatus | null;

		/** A string with a length between [0-1024]. */
		VpcLinkStatusMessage?: string | null;

		/** The version of the VPC link. */
		VpcLinkVersion?: CreateVpcLinkResponseVpcLinkVersion | null;
	}

	export interface ImportApiResponse {
		ApiEndpoint?: string | null;

		/** The identifier. */
		ApiId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string | null;

		/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors | null;
		CreatedDate?: Date | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		DisableSchemaValidation?: boolean | null;
		ImportInfo?: Array<string> | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** Represents a protocol type. */
		ProtocolType?: CreateApiResponseProtocolType | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression?: string | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;

		/** A string with a length between [1-64]. */
		Version?: string | null;
		Warnings?: Array<string> | null;
	}

	export interface ReimportApiResponse {
		ApiEndpoint?: string | null;

		/** The identifier. */
		ApiId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string | null;

		/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors | null;
		CreatedDate?: Date | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		DisableSchemaValidation?: boolean | null;
		ImportInfo?: Array<string> | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** Represents a protocol type. */
		ProtocolType?: CreateApiResponseProtocolType | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression?: string | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;

		/** A string with a length between [1-64]. */
		Version?: string | null;
		Warnings?: Array<string> | null;
	}

	export interface TagResourceResponse {
	}

	export interface UpdateApiResponse {
		ApiEndpoint?: string | null;

		/** The identifier. */
		ApiId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string | null;

		/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors | null;
		CreatedDate?: Date | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		DisableSchemaValidation?: boolean | null;
		ImportInfo?: Array<string> | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** Represents a protocol type. */
		ProtocolType?: CreateApiResponseProtocolType | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression?: string | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;

		/** A string with a length between [1-64]. */
		Version?: string | null;
		Warnings?: Array<string> | null;
	}

	export interface UpdateApiMappingResponse {

		/** The identifier. */
		ApiId?: string | null;

		/** The identifier. */
		ApiMappingId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		ApiMappingKey?: string | null;

		/** A string with a length between [1-128]. */
		Stage?: string | null;
	}

	export interface UpdateAuthorizerResponse {

		/** Represents an Amazon Resource Name (ARN). */
		AuthorizerCredentialsArn?: string | null;

		/** The identifier. */
		AuthorizerId?: string | null;

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		AuthorizerResultTtlInSeconds?: number | null;

		/** The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
		AuthorizerType?: CreateAuthorizerResponseAuthorizerType | null;

		/** A string representation of a URI with a length between [1-2048]. */
		AuthorizerUri?: string | null;

		/** The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional. */
		IdentitySource?: Array<string> | null;

		/** A string with a length between [0-1024]. */
		IdentityValidationExpression?: string | null;

		/** Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		JwtConfiguration?: JWTConfiguration | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;
	}

	export interface UpdateDeploymentResponse {
		AutoDeployed?: boolean | null;
		CreatedDate?: Date | null;

		/** The identifier. */
		DeploymentId?: string | null;

		/** Represents a deployment status. */
		DeploymentStatus?: CreateDeploymentResponseDeploymentStatus | null;
		DeploymentStatusMessage?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
	}

	export interface UpdateDomainNameResponse {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiMappingSelectionExpression?: string | null;

		/** A string with a length between [1-512]. */
		DomainName?: string | null;

		/** The domain name configurations. */
		DomainNameConfigurations?: Array<DomainNameConfiguration> | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;
	}

	export interface UpdateIntegrationResult {
		ApiGatewayManaged?: boolean | null;

		/** A string with a length between [1-1024]. */
		ConnectionId?: string | null;

		/** Represents a connection type. */
		ConnectionType?: CreateIntegrationResultConnectionType | null;

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/** Represents an Amazon Resource Name (ARN). */
		CredentialsArn?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;

		/** The identifier. */
		IntegrationId?: string | null;

		/** A string with a length between [1-64]. */
		IntegrationMethod?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		IntegrationResponseSelectionExpression?: string | null;

		/** Represents an API method integration type. */
		IntegrationType?: CreateIntegrationResultIntegrationType | null;

		/** A string representation of a URI with a length between [1-2048]. */
		IntegrationUri?: string | null;

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		PassthroughBehavior?: CreateIntegrationResultPassthroughBehavior | null;

		/** A string with a length between [1-64]. */
		PayloadFormatVersion?: string | null;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		RequestParameters?: IntegrationParameters | null;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		RequestTemplates?: TemplateMap | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis?: number | null;

		/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		TlsConfig?: TlsConfig | null;
	}

	export interface UpdateIntegrationResponseResponse {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/** The identifier. */
		IntegrationResponseId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		IntegrationResponseKey?: string | null;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		ResponseParameters?: IntegrationParameters | null;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		ResponseTemplates?: TemplateMap | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;
	}

	export interface UpdateModelResponse {

		/** A string with a length between [1-256]. */
		ContentType?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;

		/** The identifier. */
		ModelId?: string | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** A string with a length between [0-32768]. */
		Schema?: string | null;
	}

	export interface UpdateRouteResult {
		ApiGatewayManaged?: boolean | null;
		ApiKeyRequired?: boolean | null;

		/** A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		AuthorizationScopes?: Array<string> | null;

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType?: CreateRouteResultAuthorizationType | null;

		/** The identifier. */
		AuthorizerId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** A string with a length between [1-64]. */
		OperationName?: string | null;

		/** The route models. */
		RequestModels?: RouteModels | null;

		/** The route parameters. */
		RequestParameters?: RouteParameters | null;

		/** The identifier. */
		RouteId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression?: string | null;

		/** A string with a length between [1-128]. */
		Target?: string | null;
	}

	export interface UpdateRouteResponseResponse {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** The route models. */
		ResponseModels?: RouteModels | null;

		/** The route parameters. */
		ResponseParameters?: RouteParameters | null;

		/** The identifier. */
		RouteResponseId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteResponseKey?: string | null;
	}

	export interface UpdateStageResponse {

		/** Settings for logging access in a stage. */
		AccessLogSettings?: AccessLogSettings | null;
		ApiGatewayManaged?: boolean | null;
		AutoDeploy?: boolean | null;

		/** The identifier. */
		ClientCertificateId?: string | null;
		CreatedDate?: Date | null;

		/** Represents a collection of route settings. */
		DefaultRouteSettings?: RouteSettings | null;

		/** The identifier. */
		DeploymentId?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		LastDeploymentStatusMessage?: string | null;
		LastUpdatedDate?: Date | null;

		/** The route settings map. */
		RouteSettings?: RouteSettingsMap | null;

		/** A string with a length between [1-128]. */
		StageName?: string | null;

		/** The stage variable map. */
		StageVariables?: StageVariablesMap | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;
	}

	export interface UpdateVpcLinkResponse {
		CreatedDate?: Date | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** A list of security group IDs for the VPC link. */
		SecurityGroupIds?: Array<string> | null;

		/** A list of subnet IDs to include in the VPC link. */
		SubnetIds?: Array<string> | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;

		/** The identifier. */
		VpcLinkId?: string | null;

		/** The status of the VPC link. */
		VpcLinkStatus?: CreateVpcLinkResponseVpcLinkStatus | null;

		/** A string with a length between [0-1024]. */
		VpcLinkStatusMessage?: string | null;

		/** The version of the VPC link. */
		VpcLinkVersion?: CreateVpcLinkResponseVpcLinkVersion | null;
	}


	/** Represents a protocol type. */
	export enum ProtocolType { WEBSOCKET = 0, HTTP = 1 }


	/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
	export enum AuthorizationType { NONE = 0, AWS_IAM = 1, CUSTOM = 2, JWT = 3 }


	/** The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
	export enum AuthorizerType { REQUEST = 0, JWT = 1 }


	/** Represents a connection type. */
	export enum ConnectionType { INTERNET = 0, VPC_LINK = 1 }


	/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
	export enum ContentHandlingStrategy { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }


	/** Creates a new ApiMapping resource to represent an API mapping. */
	export interface CreateApiMappingRequest {

		/**
		 * The identifier.
		 * Required
		 */
		ApiId: string;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		ApiMappingKey?: string | null;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Stage: string;
	}


	/** Creates a new Api resource to represent an API. */
	export interface CreateApiRequest {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string | null;

		/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors | null;

		/** Represents an Amazon Resource Name (ARN). */
		CredentialsArn?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		DisableSchemaValidation?: boolean | null;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Name: string;

		/**
		 * Represents a protocol type.
		 * Required
		 */
		ProtocolType: CreateApiResponseProtocolType;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression?: string | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;

		/** A string representation of a URI with a length between [1-2048]. */
		Target?: string | null;

		/** A string with a length between [1-64]. */
		Version?: string | null;
	}


	/** Creates a new Authorizer resource to represent an authorizer. */
	export interface CreateAuthorizerRequest {

		/** Represents an Amazon Resource Name (ARN). */
		AuthorizerCredentialsArn?: string | null;

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		AuthorizerResultTtlInSeconds?: number | null;

		/**
		 * The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens.
		 * Required
		 */
		AuthorizerType: CreateAuthorizerResponseAuthorizerType;

		/** A string representation of a URI with a length between [1-2048]. */
		AuthorizerUri?: string | null;

		/**
		 * The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.
		 * Required
		 */
		IdentitySource: Array<string>;

		/** A string with a length between [0-1024]. */
		IdentityValidationExpression?: string | null;

		/** Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		JwtConfiguration?: JWTConfiguration | null;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Name: string;
	}


	/** Creates a new Deployment resource to represent a deployment. */
	export interface CreateDeploymentRequest {

		/** A string with a length between [0-1024]. */
		Description?: string | null;

		/** A string with a length between [1-128]. */
		StageName?: string | null;
	}


	/** Represents a deployment status. */
	export enum DeploymentStatus { PENDING = 0, FAILED = 1, DEPLOYED = 2 }


	/** Creates a new DomainName resource to represent a domain name. */
	export interface CreateDomainNameRequest {

		/**
		 * A string with a length between [1-512].
		 * Required
		 */
		DomainName: string;

		/** The domain name configurations. */
		DomainNameConfigurations?: Array<DomainNameConfiguration> | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;
	}


	/** Represents an API method integration type. */
	export enum IntegrationType { AWS = 0, HTTP = 1, MOCK = 2, HTTP_PROXY = 3, AWS_PROXY = 4 }


	/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
	export enum PassthroughBehavior { WHEN_NO_MATCH = 0, NEVER = 1, WHEN_NO_TEMPLATES = 2 }


	/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
	export interface TlsConfigInput {

		/** A string with a length between [1-512]. */
		ServerNameToVerify?: string | null;
	}


	/** Creates a new Integration resource to represent an integration. */
	export interface CreateIntegrationRequest {

		/** A string with a length between [1-1024]. */
		ConnectionId?: string | null;

		/** Represents a connection type. */
		ConnectionType?: CreateIntegrationResultConnectionType | null;

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/** Represents an Amazon Resource Name (ARN). */
		CredentialsArn?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;

		/** A string with a length between [1-64]. */
		IntegrationMethod?: string | null;

		/**
		 * Represents an API method integration type.
		 * Required
		 */
		IntegrationType: CreateIntegrationResultIntegrationType;

		/** A string representation of a URI with a length between [1-2048]. */
		IntegrationUri?: string | null;

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		PassthroughBehavior?: CreateIntegrationResultPassthroughBehavior | null;

		/** A string with a length between [1-64]. */
		PayloadFormatVersion?: string | null;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		RequestParameters?: IntegrationParameters | null;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		RequestTemplates?: TemplateMap | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis?: number | null;

		/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		TlsConfig?: TlsConfigInput | null;
	}


	/** Creates a new IntegrationResponse resource to represent an integration response. */
	export interface CreateIntegrationResponseRequest {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		IntegrationResponseKey: string;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		ResponseParameters?: IntegrationParameters | null;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		ResponseTemplates?: TemplateMap | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;
	}


	/** Creates a new Model. */
	export interface CreateModelRequest {

		/** A string with a length between [1-256]. */
		ContentType?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Name: string;

		/**
		 * A string with a length between [0-32768].
		 * Required
		 */
		Schema: string;
	}


	/** Creates a new Route resource to represent a route. */
	export interface CreateRouteRequest {
		ApiKeyRequired?: boolean | null;

		/** A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		AuthorizationScopes?: Array<string> | null;

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType?: CreateRouteResultAuthorizationType | null;

		/** The identifier. */
		AuthorizerId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** A string with a length between [1-64]. */
		OperationName?: string | null;

		/** The route models. */
		RequestModels?: RouteModels | null;

		/** The route parameters. */
		RequestParameters?: RouteParameters | null;

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		RouteKey: string;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression?: string | null;

		/** A string with a length between [1-128]. */
		Target?: string | null;
	}


	/** Creates a new RouteResponse resource to represent a route response. */
	export interface CreateRouteResponseRequest {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** The route models. */
		ResponseModels?: RouteModels | null;

		/** The route parameters. */
		ResponseParameters?: RouteParameters | null;

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		RouteResponseKey: string;
	}


	/** Creates a new Stage resource to represent a stage. */
	export interface CreateStageRequest {

		/** Settings for logging access in a stage. */
		AccessLogSettings?: AccessLogSettings | null;
		AutoDeploy?: boolean | null;

		/** The identifier. */
		ClientCertificateId?: string | null;

		/** Represents a collection of route settings. */
		DefaultRouteSettings?: RouteSettings | null;

		/** The identifier. */
		DeploymentId?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;

		/** The route settings map. */
		RouteSettings?: RouteSettingsMap | null;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		StageName: string;

		/** The stage variable map. */
		StageVariables?: StageVariablesMap | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;
	}


	/** Creates a VPC link */
	export interface CreateVpcLinkRequest {

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Name: string;

		/** A list of security group IDs for the VPC link. */
		SecurityGroupIds?: Array<string> | null;

		/**
		 * A list of subnet IDs to include in the VPC link.
		 * Required
		 */
		SubnetIds: Array<string>;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;
	}


	/** The status of the VPC link. */
	export enum VpcLinkStatus { PENDING = 0, AVAILABLE = 1, DELETING = 2, FAILED = 3, INACTIVE = 4 }


	/** The version of the VPC link. */
	export enum VpcLinkVersion { V2 = 0 }

	export interface DeleteAccessLogSettingsRequest {
	}

	export interface DeleteApiMappingRequest {
	}

	export interface DeleteApiRequest {
	}

	export interface DeleteAuthorizerRequest {
	}

	export interface DeleteCorsConfigurationRequest {
	}

	export interface DeleteDeploymentRequest {
	}

	export interface DeleteDomainNameRequest {
	}

	export interface DeleteIntegrationRequest {
	}

	export interface DeleteIntegrationResponseRequest {
	}

	export interface DeleteModelRequest {
	}

	export interface DeleteRouteRequest {
	}

	export interface DeleteRouteRequestParameterRequest {
	}

	export interface DeleteRouteResponseRequest {
	}

	export interface DeleteRouteSettingsRequest {
	}

	export interface DeleteStageRequest {
	}

	export interface DeleteVpcLinkRequest {
	}


	/** The status of the domain name migration. The valid values are AVAILABLE and UPDATING. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated. */
	export enum DomainNameStatus { AVAILABLE = 0, UPDATING = 1 }


	/** Represents an endpoint type. */
	export enum EndpointType { REGIONAL = 0, EDGE = 1 }


	/** The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2. */
	export enum SecurityPolicy { TLS_1_0 = 0, TLS_1_2 = 1 }

	export interface ExportApiRequest {
	}

	export interface GetApiMappingRequest {
	}

	export interface GetApiMappingsRequest {
	}

	export interface GetApiRequest {
	}

	export interface GetApisRequest {
	}

	export interface GetAuthorizerRequest {
	}

	export interface GetAuthorizersRequest {
	}

	export interface GetDeploymentRequest {
	}

	export interface GetDeploymentsRequest {
	}

	export interface GetDomainNameRequest {
	}

	export interface GetDomainNamesRequest {
	}

	export interface GetIntegrationRequest {
	}

	export interface GetIntegrationResponseRequest {
	}

	export interface GetIntegrationResponsesRequest {
	}

	export interface GetIntegrationsRequest {
	}

	export interface GetModelRequest {
	}

	export interface GetModelTemplateRequest {
	}

	export interface GetModelsRequest {
	}

	export interface GetRouteRequest {
	}

	export interface GetRouteResponseRequest {
	}

	export interface GetRouteResponsesRequest {
	}

	export interface GetRoutesRequest {
	}

	export interface GetStageRequest {
	}

	export interface GetStagesRequest {
	}

	export interface GetTagsRequest {
	}

	export interface GetVpcLinkRequest {
	}

	export interface GetVpcLinksRequest {
	}

	export interface ImportApiRequest {
		Body: string;
	}

	export interface ReimportApiRequest {
		Body: string;
	}


	/** Creates a new Tag resource to represent a tag. */
	export interface TagResourceRequest {

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags | null;
	}

	export interface UntagResourceRequest {
	}


	/** Updates an ApiMapping. */
	export interface UpdateApiMappingRequest {

		/**
		 * The identifier.
		 * Required
		 */
		ApiId: string;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		ApiMappingKey?: string | null;

		/** A string with a length between [1-128]. */
		Stage?: string | null;
	}


	/** Updates an Api. */
	export interface UpdateApiRequest {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string | null;

		/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors | null;

		/** Represents an Amazon Resource Name (ARN). */
		CredentialsArn?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		DisableSchemaValidation?: boolean | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression?: string | null;

		/** A string representation of a URI with a length between [1-2048]. */
		Target?: string | null;

		/** A string with a length between [1-64]. */
		Version?: string | null;
	}


	/** Updates an Authorizer. */
	export interface UpdateAuthorizerRequest {

		/** Represents an Amazon Resource Name (ARN). */
		AuthorizerCredentialsArn?: string | null;

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		AuthorizerResultTtlInSeconds?: number | null;

		/** The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
		AuthorizerType?: CreateAuthorizerResponseAuthorizerType | null;

		/** A string representation of a URI with a length between [1-2048]. */
		AuthorizerUri?: string | null;

		/** The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional. */
		IdentitySource?: Array<string> | null;

		/** A string with a length between [0-1024]. */
		IdentityValidationExpression?: string | null;

		/** Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		JwtConfiguration?: JWTConfiguration | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;
	}


	/** Updates a Deployment. */
	export interface UpdateDeploymentRequest {

		/** A string with a length between [0-1024]. */
		Description?: string | null;
	}


	/** Updates a DomainName. */
	export interface UpdateDomainNameRequest {

		/** The domain name configurations. */
		DomainNameConfigurations?: Array<DomainNameConfiguration> | null;
	}


	/** Updates an Integration. */
	export interface UpdateIntegrationRequest {

		/** A string with a length between [1-1024]. */
		ConnectionId?: string | null;

		/** Represents a connection type. */
		ConnectionType?: CreateIntegrationResultConnectionType | null;

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/** Represents an Amazon Resource Name (ARN). */
		CredentialsArn?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;

		/** A string with a length between [1-64]. */
		IntegrationMethod?: string | null;

		/** Represents an API method integration type. */
		IntegrationType?: CreateIntegrationResultIntegrationType | null;

		/** A string representation of a URI with a length between [1-2048]. */
		IntegrationUri?: string | null;

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		PassthroughBehavior?: CreateIntegrationResultPassthroughBehavior | null;

		/** A string with a length between [1-64]. */
		PayloadFormatVersion?: string | null;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		RequestParameters?: IntegrationParameters | null;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		RequestTemplates?: TemplateMap | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis?: number | null;

		/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		TlsConfig?: TlsConfigInput | null;
	}


	/** Updates an IntegrationResponses. */
	export interface UpdateIntegrationResponseRequest {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		IntegrationResponseKey?: string | null;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		ResponseParameters?: IntegrationParameters | null;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		ResponseTemplates?: TemplateMap | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;
	}


	/** Updates a Model. */
	export interface UpdateModelRequest {

		/** A string with a length between [1-256]. */
		ContentType?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** A string with a length between [0-32768]. */
		Schema?: string | null;
	}


	/** Updates a Route. */
	export interface UpdateRouteRequest {
		ApiKeyRequired?: boolean | null;

		/** A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		AuthorizationScopes?: Array<string> | null;

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType?: CreateRouteResultAuthorizationType | null;

		/** The identifier. */
		AuthorizerId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** A string with a length between [1-64]. */
		OperationName?: string | null;

		/** The route models. */
		RequestModels?: RouteModels | null;

		/** The route parameters. */
		RequestParameters?: RouteParameters | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression?: string | null;

		/** A string with a length between [1-128]. */
		Target?: string | null;
	}


	/** Updates a RouteResponse. */
	export interface UpdateRouteResponseRequest {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** The route models. */
		ResponseModels?: RouteModels | null;

		/** The route parameters. */
		ResponseParameters?: RouteParameters | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteResponseKey?: string | null;
	}


	/** Updates a Stage. */
	export interface UpdateStageRequest {

		/** Settings for logging access in a stage. */
		AccessLogSettings?: AccessLogSettings | null;
		AutoDeploy?: boolean | null;

		/** The identifier. */
		ClientCertificateId?: string | null;

		/** Represents a collection of route settings. */
		DefaultRouteSettings?: RouteSettings | null;

		/** The identifier. */
		DeploymentId?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;

		/** The route settings map. */
		RouteSettings?: RouteSettingsMap | null;

		/** The stage variable map. */
		StageVariables?: StageVariablesMap | null;
	}


	/** Updates a VPC link. */
	export interface UpdateVpcLinkRequest {

		/** A string with a length between [1-128]. */
		Name?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an Api resource.
		 * Post v2/apis
		 * @return {void} 
		 */
		CreateApi(requestBody: CreateApiPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/apis', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a collection of Api resources.
		 * Get v2/apis
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetApisResponse} Success
		 */
		GetApis(maxResults: string, nextToken: string): Observable<GetApisResponse> {
			return this.http.get<GetApisResponse>(this.baseUri + 'v2/apis?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Imports an API.
		 * Put v2/apis
		 * @param {string} basepath Specifies how to interpret the base path of the API during import. Valid values are ignore, prepend, and split. The default value is ignore. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html">Set the OpenAPI basePath Property</a>. Supported only for HTTP APIs.
		 * @param {boolean} failOnWarnings Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.
		 * @return {void} 
		 */
		ImportApi(basepath: string, failOnWarnings: boolean, requestBody: ImportApiPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v2/apis?basepath=' + (basepath == null ? '' : encodeURIComponent(basepath)) + '&failOnWarnings=' + failOnWarnings, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an API mapping.
		 * Post v2/domainnames/{domainName}/apimappings
		 * @param {string} domainName The domain name.
		 * @return {void} 
		 */
		CreateApiMapping(domainName: string, requestBody: CreateApiMappingPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/apimappings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets API mappings.
		 * Get v2/domainnames/{domainName}/apimappings
		 * @param {string} domainName The domain name.
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetApiMappingsResponse} Success
		 */
		GetApiMappings(domainName: string, maxResults: string, nextToken: string): Observable<GetApiMappingsResponse> {
			return this.http.get<GetApiMappingsResponse>(this.baseUri + 'v2/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/apimappings&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates an Authorizer for an API.
		 * Post v2/apis/{apiId}/authorizers
		 * @param {string} apiId The API identifier.
		 * @return {void} 
		 */
		CreateAuthorizer(apiId: string, requestBody: CreateAuthorizerPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/authorizers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Authorizers for an API.
		 * Get v2/apis/{apiId}/authorizers
		 * @param {string} apiId The API identifier.
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetAuthorizersResponse} Success
		 */
		GetAuthorizers(apiId: string, maxResults: string, nextToken: string): Observable<GetAuthorizersResponse> {
			return this.http.get<GetAuthorizersResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/authorizers&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a Deployment for an API.
		 * Post v2/apis/{apiId}/deployments
		 * @param {string} apiId The API identifier.
		 * @return {void} 
		 */
		CreateDeployment(apiId: string, requestBody: CreateDeploymentPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/deployments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Deployments for an API.
		 * Get v2/apis/{apiId}/deployments
		 * @param {string} apiId The API identifier.
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetDeploymentsResponse} Success
		 */
		GetDeployments(apiId: string, maxResults: string, nextToken: string): Observable<GetDeploymentsResponse> {
			return this.http.get<GetDeploymentsResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/deployments&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a domain name.
		 * Post v2/domainnames
		 * @return {void} 
		 */
		CreateDomainName(requestBody: CreateDomainNamePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/domainnames', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the domain names for an AWS account.
		 * Get v2/domainnames
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetDomainNamesResponse} Success
		 */
		GetDomainNames(maxResults: string, nextToken: string): Observable<GetDomainNamesResponse> {
			return this.http.get<GetDomainNamesResponse>(this.baseUri + 'v2/domainnames?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates an Integration.
		 * Post v2/apis/{apiId}/integrations
		 * @param {string} apiId The API identifier.
		 * @return {void} 
		 */
		CreateIntegration(apiId: string, requestBody: CreateIntegrationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/integrations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Integrations for an API.
		 * Get v2/apis/{apiId}/integrations
		 * @param {string} apiId The API identifier.
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetIntegrationsResponse} Success
		 */
		GetIntegrations(apiId: string, maxResults: string, nextToken: string): Observable<GetIntegrationsResponse> {
			return this.http.get<GetIntegrationsResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/integrations&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates an IntegrationResponses.
		 * Post v2/apis/{apiId}/integrations/{integrationId}/integrationresponses
		 * @param {string} apiId The API identifier.
		 * @param {string} integrationId The integration ID.
		 * @return {void} 
		 */
		CreateIntegrationResponse(apiId: string, integrationId: string, requestBody: CreateIntegrationResponsePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/integrations/' + (integrationId == null ? '' : encodeURIComponent(integrationId)) + '/integrationresponses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the IntegrationResponses for an Integration.
		 * Get v2/apis/{apiId}/integrations/{integrationId}/integrationresponses
		 * @param {string} apiId The API identifier.
		 * @param {string} integrationId The integration ID.
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetIntegrationResponsesResponse} Success
		 */
		GetIntegrationResponses(apiId: string, integrationId: string, maxResults: string, nextToken: string): Observable<GetIntegrationResponsesResponse> {
			return this.http.get<GetIntegrationResponsesResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/integrations/' + (integrationId == null ? '' : encodeURIComponent(integrationId)) + '/integrationresponses&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a Model for an API.
		 * Post v2/apis/{apiId}/models
		 * @param {string} apiId The API identifier.
		 * @return {void} 
		 */
		CreateModel(apiId: string, requestBody: CreateModelPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/models', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Models for an API.
		 * Get v2/apis/{apiId}/models
		 * @param {string} apiId The API identifier.
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetModelsResponse} Success
		 */
		GetModels(apiId: string, maxResults: string, nextToken: string): Observable<GetModelsResponse> {
			return this.http.get<GetModelsResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/models&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a Route for an API.
		 * Post v2/apis/{apiId}/routes
		 * @param {string} apiId The API identifier.
		 * @return {void} 
		 */
		CreateRoute(apiId: string, requestBody: CreateRoutePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Routes for an API.
		 * Get v2/apis/{apiId}/routes
		 * @param {string} apiId The API identifier.
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetRoutesResponse} Success
		 */
		GetRoutes(apiId: string, maxResults: string, nextToken: string): Observable<GetRoutesResponse> {
			return this.http.get<GetRoutesResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a RouteResponse for a Route.
		 * Post v2/apis/{apiId}/routes/{routeId}/routeresponses
		 * @param {string} apiId The API identifier.
		 * @param {string} routeId The route ID.
		 * @return {void} 
		 */
		CreateRouteResponse(apiId: string, routeId: string, requestBody: CreateRouteResponsePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes/' + (routeId == null ? '' : encodeURIComponent(routeId)) + '/routeresponses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the RouteResponses for a Route.
		 * Get v2/apis/{apiId}/routes/{routeId}/routeresponses
		 * @param {string} apiId The API identifier.
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @param {string} routeId The route ID.
		 * @return {GetRouteResponsesResponse} Success
		 */
		GetRouteResponses(apiId: string, maxResults: string, nextToken: string, routeId: string): Observable<GetRouteResponsesResponse> {
			return this.http.get<GetRouteResponsesResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes/' + (routeId == null ? '' : encodeURIComponent(routeId)) + '/routeresponses&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a Stage for an API.
		 * Post v2/apis/{apiId}/stages
		 * @param {string} apiId The API identifier.
		 * @return {void} 
		 */
		CreateStage(apiId: string, requestBody: CreateStagePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/stages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the Stages for an API.
		 * Get v2/apis/{apiId}/stages
		 * @param {string} apiId The API identifier.
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetStagesResponse} Success
		 */
		GetStages(apiId: string, maxResults: string, nextToken: string): Observable<GetStagesResponse> {
			return this.http.get<GetStagesResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/stages&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a VPC link.
		 * Post v2/vpclinks
		 * @return {void} 
		 */
		CreateVpcLink(requestBody: CreateVpcLinkPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/vpclinks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a collection of VPC links.
		 * Get v2/vpclinks
		 * @param {string} maxResults The maximum number of elements to be returned for this resource.
		 * @param {string} nextToken The next page of elements from this collection. Not valid for the last element of the collection.
		 * @return {GetVpcLinksResponse} Success
		 */
		GetVpcLinks(maxResults: string, nextToken: string): Observable<GetVpcLinksResponse> {
			return this.http.get<GetVpcLinksResponse>(this.baseUri + 'v2/vpclinks?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.
		 * Delete v2/apis/{apiId}/stages/{stageName}/accesslogsettings
		 * @param {string} apiId The API identifier.
		 * @param {string} stageName The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
		 * @return {void} 
		 */
		DeleteAccessLogSettings(apiId: string, stageName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/stages/' + (stageName == null ? '' : encodeURIComponent(stageName)) + '/accesslogsettings', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an Api resource.
		 * Delete v2/apis/{apiId}
		 * @param {string} apiId The API identifier.
		 * @return {void} 
		 */
		DeleteApi(apiId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an Api resource.
		 * Get v2/apis/{apiId}
		 * @param {string} apiId The API identifier.
		 * @return {GetApiResponse} Success
		 */
		GetApi(apiId: string): Observable<GetApiResponse> {
			return this.http.get<GetApiResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)), {});
		}

		/**
		 * Puts an Api resource.
		 * Put v2/apis/{apiId}
		 * @param {string} apiId The API identifier.
		 * @param {string} basepath Specifies how to interpret the base path of the API during import. Valid values are ignore, prepend, and split. The default value is ignore. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html">Set the OpenAPI basePath Property</a>. Supported only for HTTP APIs.
		 * @param {boolean} failOnWarnings Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.
		 * @return {void} 
		 */
		ReimportApi(apiId: string, basepath: string, failOnWarnings: boolean, requestBody: ReimportApiPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '&basepath=' + (basepath == null ? '' : encodeURIComponent(basepath)) + '&failOnWarnings=' + failOnWarnings, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an Api resource.
		 * Patch v2/apis/{apiId}
		 * @param {string} apiId The API identifier.
		 * @return {UpdateApiResponse} Success
		 */
		UpdateApi(apiId: string, requestBody: UpdateApiPatchBody): Observable<UpdateApiResponse> {
			return this.http.patch<UpdateApiResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an API mapping.
		 * Delete v2/domainnames/{domainName}/apimappings/{apiMappingId}
		 * @param {string} apiMappingId The API mapping identifier.
		 * @param {string} domainName The domain name.
		 * @return {void} 
		 */
		DeleteApiMapping(apiMappingId: string, domainName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/apimappings/' + (apiMappingId == null ? '' : encodeURIComponent(apiMappingId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an API mapping.
		 * Get v2/domainnames/{domainName}/apimappings/{apiMappingId}
		 * @param {string} apiMappingId The API mapping identifier.
		 * @param {string} domainName The domain name.
		 * @return {GetApiMappingResponse} Success
		 */
		GetApiMapping(apiMappingId: string, domainName: string): Observable<GetApiMappingResponse> {
			return this.http.get<GetApiMappingResponse>(this.baseUri + 'v2/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/apimappings/' + (apiMappingId == null ? '' : encodeURIComponent(apiMappingId)), {});
		}

		/**
		 * The API mapping.
		 * Patch v2/domainnames/{domainName}/apimappings/{apiMappingId}
		 * @param {string} apiMappingId The API mapping identifier.
		 * @param {string} domainName The domain name.
		 * @return {UpdateApiMappingResponse} Success
		 */
		UpdateApiMapping(apiMappingId: string, domainName: string, requestBody: UpdateApiMappingPatchBody): Observable<UpdateApiMappingResponse> {
			return this.http.patch<UpdateApiMappingResponse>(this.baseUri + 'v2/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)) + '/apimappings/' + (apiMappingId == null ? '' : encodeURIComponent(apiMappingId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Authorizer.
		 * Delete v2/apis/{apiId}/authorizers/{authorizerId}
		 * @param {string} apiId The API identifier.
		 * @param {string} authorizerId The authorizer identifier.
		 * @return {void} 
		 */
		DeleteAuthorizer(apiId: string, authorizerId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/authorizers/' + (authorizerId == null ? '' : encodeURIComponent(authorizerId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an Authorizer.
		 * Get v2/apis/{apiId}/authorizers/{authorizerId}
		 * @param {string} apiId The API identifier.
		 * @param {string} authorizerId The authorizer identifier.
		 * @return {GetAuthorizerResponse} Success
		 */
		GetAuthorizer(apiId: string, authorizerId: string): Observable<GetAuthorizerResponse> {
			return this.http.get<GetAuthorizerResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/authorizers/' + (authorizerId == null ? '' : encodeURIComponent(authorizerId)), {});
		}

		/**
		 * Updates an Authorizer.
		 * Patch v2/apis/{apiId}/authorizers/{authorizerId}
		 * @param {string} apiId The API identifier.
		 * @param {string} authorizerId The authorizer identifier.
		 * @return {UpdateAuthorizerResponse} Success
		 */
		UpdateAuthorizer(apiId: string, authorizerId: string, requestBody: UpdateAuthorizerPatchBody): Observable<UpdateAuthorizerResponse> {
			return this.http.patch<UpdateAuthorizerResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/authorizers/' + (authorizerId == null ? '' : encodeURIComponent(authorizerId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a CORS configuration.
		 * Delete v2/apis/{apiId}/cors
		 * @param {string} apiId The API identifier.
		 * @return {void} 
		 */
		DeleteCorsConfiguration(apiId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/cors', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Deployment.
		 * Delete v2/apis/{apiId}/deployments/{deploymentId}
		 * @param {string} apiId The API identifier.
		 * @param {string} deploymentId The deployment ID.
		 * @return {void} 
		 */
		DeleteDeployment(apiId: string, deploymentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/deployments/' + (deploymentId == null ? '' : encodeURIComponent(deploymentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a Deployment.
		 * Get v2/apis/{apiId}/deployments/{deploymentId}
		 * @param {string} apiId The API identifier.
		 * @param {string} deploymentId The deployment ID.
		 * @return {GetDeploymentResponse} Success
		 */
		GetDeployment(apiId: string, deploymentId: string): Observable<GetDeploymentResponse> {
			return this.http.get<GetDeploymentResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/deployments/' + (deploymentId == null ? '' : encodeURIComponent(deploymentId)), {});
		}

		/**
		 * Updates a Deployment.
		 * Patch v2/apis/{apiId}/deployments/{deploymentId}
		 * @param {string} apiId The API identifier.
		 * @param {string} deploymentId The deployment ID.
		 * @return {UpdateDeploymentResponse} Success
		 */
		UpdateDeployment(apiId: string, deploymentId: string, requestBody: UpdateDeploymentPatchBody): Observable<UpdateDeploymentResponse> {
			return this.http.patch<UpdateDeploymentResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/deployments/' + (deploymentId == null ? '' : encodeURIComponent(deploymentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a domain name.
		 * Delete v2/domainnames/{domainName}
		 * @param {string} domainName The domain name.
		 * @return {void} 
		 */
		DeleteDomainName(domainName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a domain name.
		 * Get v2/domainnames/{domainName}
		 * @param {string} domainName The domain name.
		 * @return {GetDomainNameResponse} Success
		 */
		GetDomainName(domainName: string): Observable<GetDomainNameResponse> {
			return this.http.get<GetDomainNameResponse>(this.baseUri + 'v2/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)), {});
		}

		/**
		 * Updates a domain name.
		 * Patch v2/domainnames/{domainName}
		 * @param {string} domainName The domain name.
		 * @return {UpdateDomainNameResponse} Success
		 */
		UpdateDomainName(domainName: string, requestBody: UpdateDomainNamePatchBody): Observable<UpdateDomainNameResponse> {
			return this.http.patch<UpdateDomainNameResponse>(this.baseUri + 'v2/domainnames/' + (domainName == null ? '' : encodeURIComponent(domainName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Integration.
		 * Delete v2/apis/{apiId}/integrations/{integrationId}
		 * @param {string} apiId The API identifier.
		 * @param {string} integrationId The integration ID.
		 * @return {void} 
		 */
		DeleteIntegration(apiId: string, integrationId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/integrations/' + (integrationId == null ? '' : encodeURIComponent(integrationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an Integration.
		 * Get v2/apis/{apiId}/integrations/{integrationId}
		 * @param {string} apiId The API identifier.
		 * @param {string} integrationId The integration ID.
		 * @return {GetIntegrationResult} Success
		 */
		GetIntegration(apiId: string, integrationId: string): Observable<GetIntegrationResult> {
			return this.http.get<GetIntegrationResult>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/integrations/' + (integrationId == null ? '' : encodeURIComponent(integrationId)), {});
		}

		/**
		 * Updates an Integration.
		 * Patch v2/apis/{apiId}/integrations/{integrationId}
		 * @param {string} apiId The API identifier.
		 * @param {string} integrationId The integration ID.
		 * @return {UpdateIntegrationResult} Success
		 */
		UpdateIntegration(apiId: string, integrationId: string, requestBody: UpdateIntegrationPatchBody): Observable<UpdateIntegrationResult> {
			return this.http.patch<UpdateIntegrationResult>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/integrations/' + (integrationId == null ? '' : encodeURIComponent(integrationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an IntegrationResponses.
		 * Delete v2/apis/{apiId}/integrations/{integrationId}/integrationresponses/{integrationResponseId}
		 * @param {string} apiId The API identifier.
		 * @param {string} integrationId The integration ID.
		 * @param {string} integrationResponseId The integration response ID.
		 * @return {void} 
		 */
		DeleteIntegrationResponse(apiId: string, integrationId: string, integrationResponseId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/integrations/' + (integrationId == null ? '' : encodeURIComponent(integrationId)) + '/integrationresponses/' + (integrationResponseId == null ? '' : encodeURIComponent(integrationResponseId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets an IntegrationResponses.
		 * Get v2/apis/{apiId}/integrations/{integrationId}/integrationresponses/{integrationResponseId}
		 * @param {string} apiId The API identifier.
		 * @param {string} integrationId The integration ID.
		 * @param {string} integrationResponseId The integration response ID.
		 * @return {GetIntegrationResponseResponse} Success
		 */
		GetIntegrationResponse(apiId: string, integrationId: string, integrationResponseId: string): Observable<GetIntegrationResponseResponse> {
			return this.http.get<GetIntegrationResponseResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/integrations/' + (integrationId == null ? '' : encodeURIComponent(integrationId)) + '/integrationresponses/' + (integrationResponseId == null ? '' : encodeURIComponent(integrationResponseId)), {});
		}

		/**
		 * Updates an IntegrationResponses.
		 * Patch v2/apis/{apiId}/integrations/{integrationId}/integrationresponses/{integrationResponseId}
		 * @param {string} apiId The API identifier.
		 * @param {string} integrationId The integration ID.
		 * @param {string} integrationResponseId The integration response ID.
		 * @return {UpdateIntegrationResponseResponse} Success
		 */
		UpdateIntegrationResponse(apiId: string, integrationId: string, integrationResponseId: string, requestBody: UpdateIntegrationResponsePatchBody): Observable<UpdateIntegrationResponseResponse> {
			return this.http.patch<UpdateIntegrationResponseResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/integrations/' + (integrationId == null ? '' : encodeURIComponent(integrationId)) + '/integrationresponses/' + (integrationResponseId == null ? '' : encodeURIComponent(integrationResponseId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Model.
		 * Delete v2/apis/{apiId}/models/{modelId}
		 * @param {string} apiId The API identifier.
		 * @param {string} modelId The model ID.
		 * @return {void} 
		 */
		DeleteModel(apiId: string, modelId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/models/' + (modelId == null ? '' : encodeURIComponent(modelId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a Model.
		 * Get v2/apis/{apiId}/models/{modelId}
		 * @param {string} apiId The API identifier.
		 * @param {string} modelId The model ID.
		 * @return {GetModelResponse} Success
		 */
		GetModel(apiId: string, modelId: string): Observable<GetModelResponse> {
			return this.http.get<GetModelResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/models/' + (modelId == null ? '' : encodeURIComponent(modelId)), {});
		}

		/**
		 * Updates a Model.
		 * Patch v2/apis/{apiId}/models/{modelId}
		 * @param {string} apiId The API identifier.
		 * @param {string} modelId The model ID.
		 * @return {UpdateModelResponse} Success
		 */
		UpdateModel(apiId: string, modelId: string, requestBody: UpdateModelPatchBody): Observable<UpdateModelResponse> {
			return this.http.patch<UpdateModelResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/models/' + (modelId == null ? '' : encodeURIComponent(modelId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Route.
		 * Delete v2/apis/{apiId}/routes/{routeId}
		 * @param {string} apiId The API identifier.
		 * @param {string} routeId The route ID.
		 * @return {void} 
		 */
		DeleteRoute(apiId: string, routeId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes/' + (routeId == null ? '' : encodeURIComponent(routeId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a Route.
		 * Get v2/apis/{apiId}/routes/{routeId}
		 * @param {string} apiId The API identifier.
		 * @param {string} routeId The route ID.
		 * @return {GetRouteResult} Success
		 */
		GetRoute(apiId: string, routeId: string): Observable<GetRouteResult> {
			return this.http.get<GetRouteResult>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes/' + (routeId == null ? '' : encodeURIComponent(routeId)), {});
		}

		/**
		 * Updates a Route.
		 * Patch v2/apis/{apiId}/routes/{routeId}
		 * @param {string} apiId The API identifier.
		 * @param {string} routeId The route ID.
		 * @return {UpdateRouteResult} Success
		 */
		UpdateRoute(apiId: string, routeId: string, requestBody: UpdateRoutePatchBody): Observable<UpdateRouteResult> {
			return this.http.patch<UpdateRouteResult>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes/' + (routeId == null ? '' : encodeURIComponent(routeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a route request parameter.
		 * Delete v2/apis/{apiId}/routes/{routeId}/requestparameters/{requestParameterKey}
		 * @param {string} apiId The API identifier.
		 * @param {string} requestParameterKey The route request parameter key.
		 * @param {string} routeId The route ID.
		 * @return {void} 
		 */
		DeleteRouteRequestParameter(apiId: string, requestParameterKey: string, routeId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes/' + (routeId == null ? '' : encodeURIComponent(routeId)) + '/requestparameters/' + (requestParameterKey == null ? '' : encodeURIComponent(requestParameterKey)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a RouteResponse.
		 * Delete v2/apis/{apiId}/routes/{routeId}/routeresponses/{routeResponseId}
		 * @param {string} apiId The API identifier.
		 * @param {string} routeId The route ID.
		 * @param {string} routeResponseId The route response ID.
		 * @return {void} 
		 */
		DeleteRouteResponse(apiId: string, routeId: string, routeResponseId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes/' + (routeId == null ? '' : encodeURIComponent(routeId)) + '/routeresponses/' + (routeResponseId == null ? '' : encodeURIComponent(routeResponseId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a RouteResponse.
		 * Get v2/apis/{apiId}/routes/{routeId}/routeresponses/{routeResponseId}
		 * @param {string} apiId The API identifier.
		 * @param {string} routeId The route ID.
		 * @param {string} routeResponseId The route response ID.
		 * @return {GetRouteResponseResponse} Success
		 */
		GetRouteResponse(apiId: string, routeId: string, routeResponseId: string): Observable<GetRouteResponseResponse> {
			return this.http.get<GetRouteResponseResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes/' + (routeId == null ? '' : encodeURIComponent(routeId)) + '/routeresponses/' + (routeResponseId == null ? '' : encodeURIComponent(routeResponseId)), {});
		}

		/**
		 * Updates a RouteResponse.
		 * Patch v2/apis/{apiId}/routes/{routeId}/routeresponses/{routeResponseId}
		 * @param {string} apiId The API identifier.
		 * @param {string} routeId The route ID.
		 * @param {string} routeResponseId The route response ID.
		 * @return {UpdateRouteResponseResponse} Success
		 */
		UpdateRouteResponse(apiId: string, routeId: string, routeResponseId: string, requestBody: UpdateRouteResponsePatchBody): Observable<UpdateRouteResponseResponse> {
			return this.http.patch<UpdateRouteResponseResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/routes/' + (routeId == null ? '' : encodeURIComponent(routeId)) + '/routeresponses/' + (routeResponseId == null ? '' : encodeURIComponent(routeResponseId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the RouteSettings for a stage.
		 * Delete v2/apis/{apiId}/stages/{stageName}/routesettings/{routeKey}
		 * @param {string} apiId The API identifier.
		 * @param {string} routeKey The route key.
		 * @param {string} stageName The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
		 * @return {void} 
		 */
		DeleteRouteSettings(apiId: string, routeKey: string, stageName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/stages/' + (stageName == null ? '' : encodeURIComponent(stageName)) + '/routesettings/' + (routeKey == null ? '' : encodeURIComponent(routeKey)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Stage.
		 * Delete v2/apis/{apiId}/stages/{stageName}
		 * @param {string} apiId The API identifier.
		 * @param {string} stageName The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
		 * @return {void} 
		 */
		DeleteStage(apiId: string, stageName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/stages/' + (stageName == null ? '' : encodeURIComponent(stageName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a Stage.
		 * Get v2/apis/{apiId}/stages/{stageName}
		 * @param {string} apiId The API identifier.
		 * @param {string} stageName The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
		 * @return {GetStageResponse} Success
		 */
		GetStage(apiId: string, stageName: string): Observable<GetStageResponse> {
			return this.http.get<GetStageResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/stages/' + (stageName == null ? '' : encodeURIComponent(stageName)), {});
		}

		/**
		 * Updates a Stage.
		 * Patch v2/apis/{apiId}/stages/{stageName}
		 * @param {string} apiId The API identifier.
		 * @param {string} stageName The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
		 * @return {UpdateStageResponse} Success
		 */
		UpdateStage(apiId: string, stageName: string, requestBody: UpdateStagePatchBody): Observable<UpdateStageResponse> {
			return this.http.patch<UpdateStageResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/stages/' + (stageName == null ? '' : encodeURIComponent(stageName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a VPC link.
		 * Delete v2/vpclinks/{vpcLinkId}
		 * @param {string} vpcLinkId The ID of the VPC link.
		 * @return {void} 
		 */
		DeleteVpcLink(vpcLinkId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/vpclinks/' + (vpcLinkId == null ? '' : encodeURIComponent(vpcLinkId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a VPC link.
		 * Get v2/vpclinks/{vpcLinkId}
		 * @param {string} vpcLinkId The ID of the VPC link.
		 * @return {GetVpcLinkResponse} Success
		 */
		GetVpcLink(vpcLinkId: string): Observable<GetVpcLinkResponse> {
			return this.http.get<GetVpcLinkResponse>(this.baseUri + 'v2/vpclinks/' + (vpcLinkId == null ? '' : encodeURIComponent(vpcLinkId)), {});
		}

		/**
		 * Updates a VPC link.
		 * Patch v2/vpclinks/{vpcLinkId}
		 * @param {string} vpcLinkId The ID of the VPC link.
		 * @return {UpdateVpcLinkResponse} Success
		 */
		UpdateVpcLink(vpcLinkId: string, requestBody: UpdateVpcLinkPatchBody): Observable<UpdateVpcLinkResponse> {
			return this.http.patch<UpdateVpcLinkResponse>(this.baseUri + 'v2/vpclinks/' + (vpcLinkId == null ? '' : encodeURIComponent(vpcLinkId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get v2/apis/{apiId}/exports/{specification}#outputType
		 * @param {string} apiId The API identifier.
		 * @param {string} exportVersion The version of the API Gateway export algorithm. API Gateway uses the latest version by default. Currently, the only supported version is 1.0.
		 * @param {boolean} includeExtensions Specifies whether to include <a href="https://docs.aws.amazon.com//apigateway/latest/developerguide/api-gateway-swagger-extensions.html">API Gateway extensions</a> in the exported API definition. API Gateway extensions are included by default.
		 * @param {string} outputType The output type of the exported definition file. Valid values are JSON and YAML.
		 * @param {string} specification The version of the API specification to use. OAS30, for OpenAPI 3.0, is the only supported value.
		 * @param {string} stageName The name of the API stage to export. If you don't specify this property, a representation of the latest API configuration is exported.
		 * @return {ExportApiResponse} Success
		 */
		ExportApi(apiId: string, exportVersion: string, includeExtensions: boolean, outputType: string, specification: string, stageName: string): Observable<ExportApiResponse> {
			return this.http.get<ExportApiResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/exports/' + (specification == null ? '' : encodeURIComponent(specification)) + '#outputType&exportVersion=' + (exportVersion == null ? '' : encodeURIComponent(exportVersion)) + '&includeExtensions=' + includeExtensions + '&outputType=' + (outputType == null ? '' : encodeURIComponent(outputType)) + '&stageName=' + (stageName == null ? '' : encodeURIComponent(stageName)), {});
		}

		/**
		 * Gets a model template.
		 * Get v2/apis/{apiId}/models/{modelId}/template
		 * @param {string} apiId The API identifier.
		 * @param {string} modelId The model ID.
		 * @return {GetModelTemplateResponse} Success
		 */
		GetModelTemplate(apiId: string, modelId: string): Observable<GetModelTemplateResponse> {
			return this.http.get<GetModelTemplateResponse>(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/models/' + (modelId == null ? '' : encodeURIComponent(modelId)) + '/template', {});
		}

		/**
		 * Gets a collection of Tag resources.
		 * Get v2/tags/{resource_arn}
		 * @param {string} resource_arn The resource ARN for the tag.
		 * @return {GetTagsResponse} Success
		 */
		GetTags(resource_arn: string): Observable<GetTagsResponse> {
			return this.http.get<GetTagsResponse>(this.baseUri + 'v2/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), {});
		}

		/**
		 * Creates a new Tag resource to represent a tag.
		 * Post v2/tags/{resource_arn}
		 * @param {string} resource_arn The resource ARN for the tag.
		 * @return {void} 
		 */
		TagResource(resource_arn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Tag.
		 * Delete v2/tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn The resource ARN for the tag.
		 * @param {Array<string>} tagKeys The Tag keys to delete
		 * @return {void} 
		 */
		UntagResource(resource_arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateApiPostBody {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		apiKeySelectionExpression?: string | null;

		/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		corsConfiguration?: CreateApiPostBodyCorsConfiguration | null;

		/** Represents an Amazon Resource Name (ARN). */
		credentialsArn?: string | null;

		/** A string with a length between [0-1024]. */
		description?: string | null;

		/** Avoid validating models when creating a deployment. Supported only for WebSocket APIs. */
		disableSchemaValidation?: boolean | null;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		name: string;

		/**
		 * Represents a protocol type.
		 * Required
		 */
		protocolType: CreateApiResponseProtocolType;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		routeKey?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		routeSelectionExpression?: string | null;

		/** Represents a collection of tags associated with the resource. */
		tags?: {[id: string]: string } | null;

		/** A string representation of a URI with a length between [1-2048]. */
		target?: string | null;

		/** A string with a length between [1-64]. */
		version?: string | null;
	}

	export interface CreateApiPostBodyCorsConfiguration {
		AllowCredentials?: boolean | null;

		/** Represents a collection of allowed headers. Supported only for HTTP APIs. */
		AllowHeaders?: Array<string> | null;

		/** Represents a collection of methods. Supported only for HTTP APIs. */
		AllowMethods?: Array<string> | null;

		/** Represents a collection of origins. Supported only for HTTP APIs. */
		AllowOrigins?: Array<string> | null;

		/** Represents a collection of allowed headers. Supported only for HTTP APIs. */
		ExposeHeaders?: Array<string> | null;

		/**
		 * An integer with a value between -1 and 86400. Supported only for HTTP APIs.
		 * Minimum: -1
		 * Maximum: 86400
		 */
		MaxAge?: number | null;
	}

	export interface ImportApiPutBody {

		/**
		 * The OpenAPI definition. Supported only for HTTP APIs.
		 * Required
		 */
		body: string;
	}

	export interface CreateApiMappingPostBody {

		/**
		 * The identifier.
		 * Required
		 */
		apiId: string;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		apiMappingKey?: string | null;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		stage: string;
	}

	export interface CreateAuthorizerPostBody {

		/** Represents an Amazon Resource Name (ARN). */
		authorizerCredentialsArn?: string | null;

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		authorizerResultTtlInSeconds?: number | null;

		/**
		 * The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens.
		 * Required
		 */
		authorizerType: CreateAuthorizerResponseAuthorizerType;

		/** A string representation of a URI with a length between [1-2048]. */
		authorizerUri?: string | null;

		/**
		 * The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.
		 * Required
		 */
		identitySource: Array<string>;

		/** A string with a length between [0-1024]. */
		identityValidationExpression?: string | null;

		/** Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		jwtConfiguration?: CreateAuthorizerPostBodyJwtConfiguration | null;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		name: string;
	}

	export interface CreateAuthorizerPostBodyJwtConfiguration {
		Audience?: Array<string> | null;

		/** A string representation of a URI with a length between [1-2048]. */
		Issuer?: string | null;
	}

	export interface CreateDeploymentPostBody {

		/** A string with a length between [0-1024]. */
		description?: string | null;

		/** A string with a length between [1-128]. */
		stageName?: string | null;
	}

	export interface CreateDomainNamePostBody {

		/**
		 * A string with a length between [1-512].
		 * Required
		 */
		domainName: string;

		/** The domain name configurations. */
		domainNameConfigurations?: Array<DomainNameConfiguration> | null;

		/** Represents a collection of tags associated with the resource. */
		tags?: {[id: string]: string } | null;
	}

	export interface CreateIntegrationPostBody {

		/** A string with a length between [1-1024]. */
		connectionId?: string | null;

		/** Represents a connection type. */
		connectionType?: CreateIntegrationResultConnectionType | null;

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		contentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/** Represents an Amazon Resource Name (ARN). */
		credentialsArn?: string | null;

		/** A string with a length between [0-1024]. */
		description?: string | null;

		/** A string with a length between [1-64]. */
		integrationMethod?: string | null;

		/**
		 * Represents an API method integration type.
		 * Required
		 */
		integrationType: CreateIntegrationResultIntegrationType;

		/** A string representation of a URI with a length between [1-2048]. */
		integrationUri?: string | null;

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		passthroughBehavior?: CreateIntegrationResultPassthroughBehavior | null;

		/** A string with a length between [1-64]. */
		payloadFormatVersion?: string | null;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		requestParameters?: {[id: string]: string } | null;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		requestTemplates?: {[id: string]: string } | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		templateSelectionExpression?: string | null;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		timeoutInMillis?: number | null;

		/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		tlsConfig?: CreateIntegrationPostBodyTlsConfig | null;
	}

	export interface CreateIntegrationPostBodyTlsConfig {

		/** A string with a length between [1-512]. */
		ServerNameToVerify?: string | null;
	}

	export interface CreateIntegrationResponsePostBody {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		contentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		integrationResponseKey: string;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		responseParameters?: {[id: string]: string } | null;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		responseTemplates?: {[id: string]: string } | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		templateSelectionExpression?: string | null;
	}

	export interface CreateModelPostBody {

		/** A string with a length between [1-256]. */
		contentType?: string | null;

		/** A string with a length between [0-1024]. */
		description?: string | null;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		name: string;

		/**
		 * A string with a length between [0-32768].
		 * Required
		 */
		schema: string;
	}

	export interface CreateRoutePostBody {

		/** Specifies whether an API key is required for the route. Supported only for WebSocket APIs. */
		apiKeyRequired?: boolean | null;

		/** A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		authorizationScopes?: Array<string> | null;

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		authorizationType?: CreateRouteResultAuthorizationType | null;

		/** The identifier. */
		authorizerId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		modelSelectionExpression?: string | null;

		/** A string with a length between [1-64]. */
		operationName?: string | null;

		/** The route models. */
		requestModels?: {[id: string]: string } | null;

		/** The route parameters. */
		requestParameters?: {[id: string]: ParameterConstraints } | null;

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		routeKey: string;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		routeResponseSelectionExpression?: string | null;

		/** A string with a length between [1-128]. */
		target?: string | null;
	}

	export interface CreateRouteResponsePostBody {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		modelSelectionExpression?: string | null;

		/** The route models. */
		responseModels?: {[id: string]: string } | null;

		/** The route parameters. */
		responseParameters?: {[id: string]: ParameterConstraints } | null;

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		routeResponseKey: string;
	}

	export interface CreateStagePostBody {

		/** Settings for logging access in a stage. */
		accessLogSettings?: CreateStagePostBodyAccessLogSettings | null;

		/** Specifies whether updates to an API automatically trigger a new deployment. The default value is false. */
		autoDeploy?: boolean | null;

		/** The identifier. */
		clientCertificateId?: string | null;

		/** Represents a collection of route settings. */
		defaultRouteSettings?: CreateStagePostBodyDefaultRouteSettings | null;

		/** The identifier. */
		deploymentId?: string | null;

		/** A string with a length between [0-1024]. */
		description?: string | null;

		/** The route settings map. */
		routeSettings?: {[id: string]: RouteSettings } | null;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		stageName: string;

		/** The stage variable map. */
		stageVariables?: {[id: string]: string } | null;

		/** Represents a collection of tags associated with the resource. */
		tags?: {[id: string]: string } | null;
	}

	export interface CreateStagePostBodyAccessLogSettings {

		/** Represents an Amazon Resource Name (ARN). */
		DestinationArn?: string | null;

		/** A string with a length between [1-1024]. */
		Format?: string | null;
	}

	export interface CreateStagePostBodyDefaultRouteSettings {
		DataTraceEnabled?: boolean | null;
		DetailedMetricsEnabled?: boolean | null;

		/** The logging level. */
		LoggingLevel?: RouteSettingsLoggingLevel | null;
		ThrottlingBurstLimit?: number | null;
		ThrottlingRateLimit?: number | null;
	}

	export interface CreateVpcLinkPostBody {

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		name: string;

		/** A list of security group IDs for the VPC link. */
		securityGroupIds?: Array<string> | null;

		/**
		 * A list of subnet IDs to include in the VPC link.
		 * Required
		 */
		subnetIds: Array<string>;

		/** Represents a collection of tags associated with the resource. */
		tags?: {[id: string]: string } | null;
	}

	export interface ReimportApiPutBody {

		/**
		 * The OpenAPI definition. Supported only for HTTP APIs.
		 * Required
		 */
		body: string;
	}

	export interface UpdateApiPatchBody {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		apiKeySelectionExpression?: string | null;

		/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		corsConfiguration?: UpdateApiPatchBodyCorsConfiguration | null;

		/** Represents an Amazon Resource Name (ARN). */
		credentialsArn?: string | null;

		/** A string with a length between [0-1024]. */
		description?: string | null;

		/** Avoid validating models when creating a deployment. Supported only for WebSocket APIs. */
		disableSchemaValidation?: boolean | null;

		/** A string with a length between [1-128]. */
		name?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		routeKey?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		routeSelectionExpression?: string | null;

		/** A string representation of a URI with a length between [1-2048]. */
		target?: string | null;

		/** A string with a length between [1-64]. */
		version?: string | null;
	}

	export interface UpdateApiPatchBodyCorsConfiguration {
		AllowCredentials?: boolean | null;

		/** Represents a collection of allowed headers. Supported only for HTTP APIs. */
		AllowHeaders?: Array<string> | null;

		/** Represents a collection of methods. Supported only for HTTP APIs. */
		AllowMethods?: Array<string> | null;

		/** Represents a collection of origins. Supported only for HTTP APIs. */
		AllowOrigins?: Array<string> | null;

		/** Represents a collection of allowed headers. Supported only for HTTP APIs. */
		ExposeHeaders?: Array<string> | null;

		/**
		 * An integer with a value between -1 and 86400. Supported only for HTTP APIs.
		 * Minimum: -1
		 * Maximum: 86400
		 */
		MaxAge?: number | null;
	}

	export interface UpdateApiMappingPatchBody {

		/**
		 * The identifier.
		 * Required
		 */
		apiId: string;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		apiMappingKey?: string | null;

		/** A string with a length between [1-128]. */
		stage?: string | null;
	}

	export interface UpdateAuthorizerPatchBody {

		/** Represents an Amazon Resource Name (ARN). */
		authorizerCredentialsArn?: string | null;

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		authorizerResultTtlInSeconds?: number | null;

		/** The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
		authorizerType?: CreateAuthorizerResponseAuthorizerType | null;

		/** A string representation of a URI with a length between [1-2048]. */
		authorizerUri?: string | null;

		/** The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional. */
		identitySource?: Array<string> | null;

		/** A string with a length between [0-1024]. */
		identityValidationExpression?: string | null;

		/** Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		jwtConfiguration?: UpdateAuthorizerPatchBodyJwtConfiguration | null;

		/** A string with a length between [1-128]. */
		name?: string | null;
	}

	export interface UpdateAuthorizerPatchBodyJwtConfiguration {
		Audience?: Array<string> | null;

		/** A string representation of a URI with a length between [1-2048]. */
		Issuer?: string | null;
	}

	export interface UpdateDeploymentPatchBody {

		/** A string with a length between [0-1024]. */
		description?: string | null;
	}

	export interface UpdateDomainNamePatchBody {

		/** The domain name configurations. */
		domainNameConfigurations?: Array<DomainNameConfiguration> | null;
	}

	export interface UpdateIntegrationPatchBody {

		/** A string with a length between [1-1024]. */
		connectionId?: string | null;

		/** Represents a connection type. */
		connectionType?: CreateIntegrationResultConnectionType | null;

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		contentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/** Represents an Amazon Resource Name (ARN). */
		credentialsArn?: string | null;

		/** A string with a length between [0-1024]. */
		description?: string | null;

		/** A string with a length between [1-64]. */
		integrationMethod?: string | null;

		/** Represents an API method integration type. */
		integrationType?: CreateIntegrationResultIntegrationType | null;

		/** A string representation of a URI with a length between [1-2048]. */
		integrationUri?: string | null;

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		passthroughBehavior?: CreateIntegrationResultPassthroughBehavior | null;

		/** A string with a length between [1-64]. */
		payloadFormatVersion?: string | null;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		requestParameters?: {[id: string]: string } | null;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		requestTemplates?: {[id: string]: string } | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		templateSelectionExpression?: string | null;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		timeoutInMillis?: number | null;

		/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		tlsConfig?: UpdateIntegrationPatchBodyTlsConfig | null;
	}

	export interface UpdateIntegrationPatchBodyTlsConfig {

		/** A string with a length between [1-512]. */
		ServerNameToVerify?: string | null;
	}

	export interface UpdateIntegrationResponsePatchBody {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		contentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		integrationResponseKey?: string | null;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		responseParameters?: {[id: string]: string } | null;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		responseTemplates?: {[id: string]: string } | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		templateSelectionExpression?: string | null;
	}

	export interface UpdateModelPatchBody {

		/** A string with a length between [1-256]. */
		contentType?: string | null;

		/** A string with a length between [0-1024]. */
		description?: string | null;

		/** A string with a length between [1-128]. */
		name?: string | null;

		/** A string with a length between [0-32768]. */
		schema?: string | null;
	}

	export interface UpdateRoutePatchBody {

		/** Specifies whether an API key is required for the route. Supported only for WebSocket APIs. */
		apiKeyRequired?: boolean | null;

		/** A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		authorizationScopes?: Array<string> | null;

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		authorizationType?: CreateRouteResultAuthorizationType | null;

		/** The identifier. */
		authorizerId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		modelSelectionExpression?: string | null;

		/** A string with a length between [1-64]. */
		operationName?: string | null;

		/** The route models. */
		requestModels?: {[id: string]: string } | null;

		/** The route parameters. */
		requestParameters?: {[id: string]: ParameterConstraints } | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		routeKey?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		routeResponseSelectionExpression?: string | null;

		/** A string with a length between [1-128]. */
		target?: string | null;
	}

	export interface UpdateRouteResponsePatchBody {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		modelSelectionExpression?: string | null;

		/** The route models. */
		responseModels?: {[id: string]: string } | null;

		/** The route parameters. */
		responseParameters?: {[id: string]: ParameterConstraints } | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		routeResponseKey?: string | null;
	}

	export interface UpdateStagePatchBody {

		/** Settings for logging access in a stage. */
		accessLogSettings?: UpdateStagePatchBodyAccessLogSettings | null;

		/** Specifies whether updates to an API automatically trigger a new deployment. The default value is false. */
		autoDeploy?: boolean | null;

		/** The identifier. */
		clientCertificateId?: string | null;

		/** Represents a collection of route settings. */
		defaultRouteSettings?: UpdateStagePatchBodyDefaultRouteSettings | null;

		/** The identifier. */
		deploymentId?: string | null;

		/** A string with a length between [0-1024]. */
		description?: string | null;

		/** The route settings map. */
		routeSettings?: {[id: string]: RouteSettings } | null;

		/** The stage variable map. */
		stageVariables?: {[id: string]: string } | null;
	}

	export interface UpdateStagePatchBodyAccessLogSettings {

		/** Represents an Amazon Resource Name (ARN). */
		DestinationArn?: string | null;

		/** A string with a length between [1-1024]. */
		Format?: string | null;
	}

	export interface UpdateStagePatchBodyDefaultRouteSettings {
		DataTraceEnabled?: boolean | null;
		DetailedMetricsEnabled?: boolean | null;

		/** The logging level. */
		LoggingLevel?: RouteSettingsLoggingLevel | null;
		ThrottlingBurstLimit?: number | null;
		ThrottlingRateLimit?: number | null;
	}

	export interface UpdateVpcLinkPatchBody {

		/** A string with a length between [1-128]. */
		name?: string | null;
	}

	export interface TagResourcePostBody {

		/** Represents a collection of tags associated with the resource. */
		tags?: {[id: string]: string } | null;
	}

}

