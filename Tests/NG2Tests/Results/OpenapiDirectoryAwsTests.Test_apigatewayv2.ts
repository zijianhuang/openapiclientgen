import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateApiResponse {
		ApiEndpoint?: string | null;

		/** The identifier. */
		ApiId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string | null;

		/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors;
		CreatedDate?: Date | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		DisableSchemaValidation?: boolean | null;
		ImportInfo?: Array<string>;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** Represents a protocol type. */
		ProtocolType?: CreateApiResponseProtocolType | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression?: string | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;

		/** A string with a length between [1-64]. */
		Version?: string | null;
		Warnings?: Array<string>;
	}
	export interface CreateApiResponseFormProperties {
		ApiEndpoint: FormControl<string | null | undefined>,

		/** The identifier. */
		ApiId: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,
		DisableSchemaValidation: FormControl<boolean | null | undefined>,

		/** A string with a length between [1-128]. */
		Name: FormControl<string | null | undefined>,

		/** Represents a protocol type. */
		ProtocolType: FormControl<CreateApiResponseProtocolType | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateCreateApiResponseFormGroup() {
		return new FormGroup<CreateApiResponseFormProperties>({
			ApiEndpoint: new FormControl<string | null | undefined>(undefined),
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiKeySelectionExpression: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisableSchemaValidation: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ProtocolType: new FormControl<CreateApiResponseProtocolType | null | undefined>(undefined),
			RouteSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
	export interface Cors {
		AllowCredentials?: boolean | null;

		/** Represents a collection of allowed headers. Supported only for HTTP APIs. */
		AllowHeaders?: Array<string>;

		/** Represents a collection of methods. Supported only for HTTP APIs. */
		AllowMethods?: Array<string>;

		/** Represents a collection of origins. Supported only for HTTP APIs. */
		AllowOrigins?: Array<string>;

		/** Represents a collection of allowed headers. Supported only for HTTP APIs. */
		ExposeHeaders?: Array<string>;

		/**
		 * An integer with a value between -1 and 86400. Supported only for HTTP APIs.
		 * Minimum: -1
		 * Maximum: 86400
		 */
		MaxAge?: number | null;
	}

	/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
	export interface CorsFormProperties {
		AllowCredentials: FormControl<boolean | null | undefined>,

		/**
		 * An integer with a value between -1 and 86400. Supported only for HTTP APIs.
		 * Minimum: -1
		 * Maximum: 86400
		 */
		MaxAge: FormControl<number | null | undefined>,
	}
	export function CreateCorsFormGroup() {
		return new FormGroup<CorsFormProperties>({
			AllowCredentials: new FormControl<boolean | null | undefined>(undefined),
			MaxAge: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CreateApiResponseProtocolType { WEBSOCKET = 0, HTTP = 1 }


	/** Represents a collection of tags associated with the resource. */
	export interface Tags {
	}

	/** Represents a collection of tags associated with the resource. */
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
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

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
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
	export interface CreateApiMappingResponseFormProperties {

		/** The identifier. */
		ApiId: FormControl<string | null | undefined>,

		/** The identifier. */
		ApiMappingId: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		ApiMappingKey: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		Stage: FormControl<string | null | undefined>,
	}
	export function CreateCreateApiMappingResponseFormGroup() {
		return new FormGroup<CreateApiMappingResponseFormProperties>({
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiMappingId: new FormControl<string | null | undefined>(undefined),
			ApiMappingKey: new FormControl<string | null | undefined>(undefined),
			Stage: new FormControl<string | null | undefined>(undefined),
		});

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
		IdentitySource?: Array<string>;

		/** A string with a length between [0-1024]. */
		IdentityValidationExpression?: string | null;

		/** Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		JwtConfiguration?: JWTConfiguration;

		/** A string with a length between [1-128]. */
		Name?: string | null;
	}
	export interface CreateAuthorizerResponseFormProperties {

		/** Represents an Amazon Resource Name (ARN). */
		AuthorizerCredentialsArn: FormControl<string | null | undefined>,

		/** The identifier. */
		AuthorizerId: FormControl<string | null | undefined>,

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		AuthorizerResultTtlInSeconds: FormControl<number | null | undefined>,

		/** The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
		AuthorizerType: FormControl<CreateAuthorizerResponseAuthorizerType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		AuthorizerUri: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		IdentityValidationExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuthorizerResponseFormGroup() {
		return new FormGroup<CreateAuthorizerResponseFormProperties>({
			AuthorizerCredentialsArn: new FormControl<string | null | undefined>(undefined),
			AuthorizerId: new FormControl<string | null | undefined>(undefined),
			AuthorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			AuthorizerType: new FormControl<CreateAuthorizerResponseAuthorizerType | null | undefined>(undefined),
			AuthorizerUri: new FormControl<string | null | undefined>(undefined),
			IdentityValidationExpression: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateAuthorizerResponseAuthorizerType { REQUEST = 0, JWT = 1 }


	/** Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
	export interface JWTConfiguration {
		Audience?: Array<string>;

		/** A string representation of a URI with a length between [1-2048]. */
		Issuer?: string | null;
	}

	/** Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
	export interface JWTConfigurationFormProperties {

		/** A string representation of a URI with a length between [1-2048]. */
		Issuer: FormControl<string | null | undefined>,
	}
	export function CreateJWTConfigurationFormGroup() {
		return new FormGroup<JWTConfigurationFormProperties>({
			Issuer: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface CreateDeploymentResponseFormProperties {
		AutoDeployed: FormControl<boolean | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,

		/** The identifier. */
		DeploymentId: FormControl<string | null | undefined>,

		/** Represents a deployment status. */
		DeploymentStatus: FormControl<CreateDeploymentResponseDeploymentStatus | null | undefined>,
		DeploymentStatusMessage: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentResponseFormGroup() {
		return new FormGroup<CreateDeploymentResponseFormProperties>({
			AutoDeployed: new FormControl<boolean | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			DeploymentStatus: new FormControl<CreateDeploymentResponseDeploymentStatus | null | undefined>(undefined),
			DeploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateDeploymentResponseDeploymentStatus { PENDING = 0, FAILED = 1, DEPLOYED = 2 }

	export interface CreateDomainNameResponse {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiMappingSelectionExpression?: string | null;

		/** A string with a length between [1-512]. */
		DomainName?: string | null;

		/** The domain name configurations. */
		DomainNameConfigurations?: Array<DomainNameConfiguration>;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}
	export interface CreateDomainNameResponseFormProperties {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiMappingSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-512]. */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainNameResponseFormGroup() {
		return new FormGroup<CreateDomainNameResponseFormProperties>({
			ApiMappingSelectionExpression: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
		});

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

	/** The domain name configuration. */
	export interface DomainNameConfigurationFormProperties {
		ApiGatewayDomainName: FormControl<string | null | undefined>,

		/** Represents an Amazon Resource Name (ARN). */
		CertificateArn: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		CertificateName: FormControl<string | null | undefined>,
		CertificateUploadDate: FormControl<Date | null | undefined>,

		/** The status of the domain name migration. The valid values are AVAILABLE and UPDATING. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated. */
		DomainNameStatus: FormControl<DomainNameConfigurationDomainNameStatus | null | undefined>,
		DomainNameStatusMessage: FormControl<string | null | undefined>,

		/** Represents an endpoint type. */
		EndpointType: FormControl<DomainNameConfigurationEndpointType | null | undefined>,
		HostedZoneId: FormControl<string | null | undefined>,

		/** The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2. */
		SecurityPolicy: FormControl<DomainNameConfigurationSecurityPolicy | null | undefined>,
	}
	export function CreateDomainNameConfigurationFormGroup() {
		return new FormGroup<DomainNameConfigurationFormProperties>({
			ApiGatewayDomainName: new FormControl<string | null | undefined>(undefined),
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			CertificateName: new FormControl<string | null | undefined>(undefined),
			CertificateUploadDate: new FormControl<Date | null | undefined>(undefined),
			DomainNameStatus: new FormControl<DomainNameConfigurationDomainNameStatus | null | undefined>(undefined),
			DomainNameStatusMessage: new FormControl<string | null | undefined>(undefined),
			EndpointType: new FormControl<DomainNameConfigurationEndpointType | null | undefined>(undefined),
			HostedZoneId: new FormControl<string | null | undefined>(undefined),
			SecurityPolicy: new FormControl<DomainNameConfigurationSecurityPolicy | null | undefined>(undefined),
		});

	}

	export enum DomainNameConfigurationDomainNameStatus { AVAILABLE = 0, UPDATING = 1 }

	export enum DomainNameConfigurationEndpointType { REGIONAL = 0, EDGE = 1 }

	export enum DomainNameConfigurationSecurityPolicy { TLS_1_0 = 0, TLS_1_2 = 1 }

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

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
		RequestParameters?: IntegrationParameters;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		RequestTemplates?: TemplateMap;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis?: number | null;

		/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		TlsConfig?: TlsConfig;
	}
	export interface CreateIntegrationResultFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,

		/** A string with a length between [1-1024]. */
		ConnectionId: FormControl<string | null | undefined>,

		/** Represents a connection type. */
		ConnectionType: FormControl<CreateIntegrationResultConnectionType | null | undefined>,

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy: FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>,

		/** Represents an Amazon Resource Name (ARN). */
		CredentialsArn: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,

		/** The identifier. */
		IntegrationId: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		IntegrationMethod: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		IntegrationResponseSelectionExpression: FormControl<string | null | undefined>,

		/** Represents an API method integration type. */
		IntegrationType: FormControl<CreateIntegrationResultIntegrationType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		IntegrationUri: FormControl<string | null | undefined>,

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		PassthroughBehavior: FormControl<CreateIntegrationResultPassthroughBehavior | null | undefined>,

		/** A string with a length between [1-64]. */
		PayloadFormatVersion: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression: FormControl<string | null | undefined>,

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis: FormControl<number | null | undefined>,
	}
	export function CreateCreateIntegrationResultFormGroup() {
		return new FormGroup<CreateIntegrationResultFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ConnectionId: new FormControl<string | null | undefined>(undefined),
			ConnectionType: new FormControl<CreateIntegrationResultConnectionType | null | undefined>(undefined),
			ContentHandlingStrategy: new FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>(undefined),
			CredentialsArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IntegrationId: new FormControl<string | null | undefined>(undefined),
			IntegrationMethod: new FormControl<string | null | undefined>(undefined),
			IntegrationResponseSelectionExpression: new FormControl<string | null | undefined>(undefined),
			IntegrationType: new FormControl<CreateIntegrationResultIntegrationType | null | undefined>(undefined),
			IntegrationUri: new FormControl<string | null | undefined>(undefined),
			PassthroughBehavior: new FormControl<CreateIntegrationResultPassthroughBehavior | null | undefined>(undefined),
			PayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
			TimeoutInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CreateIntegrationResultConnectionType { INTERNET = 0, VPC_LINK = 1 }

	export enum CreateIntegrationResultContentHandlingStrategy { CONVERT_TO_BINARY = 0, CONVERT_TO_TEXT = 1 }

	export enum CreateIntegrationResultIntegrationType { AWS = 0, HTTP = 1, MOCK = 2, HTTP_PROXY = 3, AWS_PROXY = 4 }

	export enum CreateIntegrationResultPassthroughBehavior { WHEN_NO_MATCH = 0, NEVER = 1, WHEN_NO_TEMPLATES = 2 }


	/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
	export interface IntegrationParameters {
	}

	/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
	export interface IntegrationParametersFormProperties {
	}
	export function CreateIntegrationParametersFormGroup() {
		return new FormGroup<IntegrationParametersFormProperties>({
		});

	}


	/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
	export interface TemplateMap {
	}

	/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
	export interface TemplateMapFormProperties {
	}
	export function CreateTemplateMapFormGroup() {
		return new FormGroup<TemplateMapFormProperties>({
		});

	}


	/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
	export interface TlsConfig {

		/** A string with a length between [1-512]. */
		ServerNameToVerify?: string | null;
	}

	/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
	export interface TlsConfigFormProperties {

		/** A string with a length between [1-512]. */
		ServerNameToVerify: FormControl<string | null | undefined>,
	}
	export function CreateTlsConfigFormGroup() {
		return new FormGroup<TlsConfigFormProperties>({
			ServerNameToVerify: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateIntegrationResponseResponse {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/** The identifier. */
		IntegrationResponseId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		IntegrationResponseKey?: string | null;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		ResponseParameters?: IntegrationParameters;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		ResponseTemplates?: TemplateMap;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;
	}
	export interface CreateIntegrationResponseResponseFormProperties {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy: FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>,

		/** The identifier. */
		IntegrationResponseId: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		IntegrationResponseKey: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateCreateIntegrationResponseResponseFormGroup() {
		return new FormGroup<CreateIntegrationResponseResponseFormProperties>({
			ContentHandlingStrategy: new FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>(undefined),
			IntegrationResponseId: new FormControl<string | null | undefined>(undefined),
			IntegrationResponseKey: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface CreateModelResponseFormProperties {

		/** A string with a length between [1-256]. */
		ContentType: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,

		/** The identifier. */
		ModelId: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		Name: FormControl<string | null | undefined>,

		/** A string with a length between [0-32768]. */
		Schema: FormControl<string | null | undefined>,
	}
	export function CreateCreateModelResponseFormGroup() {
		return new FormGroup<CreateModelResponseFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ModelId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Schema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRouteResult {
		ApiGatewayManaged?: boolean | null;
		ApiKeyRequired?: boolean | null;

		/** A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		AuthorizationScopes?: Array<string>;

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType?: CreateRouteResultAuthorizationType | null;

		/** The identifier. */
		AuthorizerId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** A string with a length between [1-64]. */
		OperationName?: string | null;

		/** The route models. */
		RequestModels?: RouteModels;

		/** The route parameters. */
		RequestParameters?: RouteParameters;

		/** The identifier. */
		RouteId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression?: string | null;

		/** A string with a length between [1-128]. */
		Target?: string | null;
	}
	export interface CreateRouteResultFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		ApiKeyRequired: FormControl<boolean | null | undefined>,

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType: FormControl<CreateRouteResultAuthorizationType | null | undefined>,

		/** The identifier. */
		AuthorizerId: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		OperationName: FormControl<string | null | undefined>,

		/** The identifier. */
		RouteId: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		Target: FormControl<string | null | undefined>,
	}
	export function CreateCreateRouteResultFormGroup() {
		return new FormGroup<CreateRouteResultFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ApiKeyRequired: new FormControl<boolean | null | undefined>(undefined),
			AuthorizationType: new FormControl<CreateRouteResultAuthorizationType | null | undefined>(undefined),
			AuthorizerId: new FormControl<string | null | undefined>(undefined),
			ModelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			OperationName: new FormControl<string | null | undefined>(undefined),
			RouteId: new FormControl<string | null | undefined>(undefined),
			RouteKey: new FormControl<string | null | undefined>(undefined),
			RouteResponseSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateRouteResultAuthorizationType { NONE = 0, AWS_IAM = 1, CUSTOM = 2, JWT = 3 }


	/** The route models. */
	export interface RouteModels {
	}

	/** The route models. */
	export interface RouteModelsFormProperties {
	}
	export function CreateRouteModelsFormGroup() {
		return new FormGroup<RouteModelsFormProperties>({
		});

	}


	/** The route parameters. */
	export interface RouteParameters {
	}

	/** The route parameters. */
	export interface RouteParametersFormProperties {
	}
	export function CreateRouteParametersFormGroup() {
		return new FormGroup<RouteParametersFormProperties>({
		});

	}


	/** Validation constraints imposed on parameters of a request (path, query string, headers). */
	export interface ParameterConstraints {
		Required?: boolean | null;
	}

	/** Validation constraints imposed on parameters of a request (path, query string, headers). */
	export interface ParameterConstraintsFormProperties {
		Required: FormControl<boolean | null | undefined>,
	}
	export function CreateParameterConstraintsFormGroup() {
		return new FormGroup<ParameterConstraintsFormProperties>({
			Required: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateRouteResponseResponse {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** The route models. */
		ResponseModels?: RouteModels;

		/** The route parameters. */
		ResponseParameters?: RouteParameters;

		/** The identifier. */
		RouteResponseId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteResponseKey?: string | null;
	}
	export interface CreateRouteResponseResponseFormProperties {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression: FormControl<string | null | undefined>,

		/** The identifier. */
		RouteResponseId: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteResponseKey: FormControl<string | null | undefined>,
	}
	export function CreateCreateRouteResponseResponseFormGroup() {
		return new FormGroup<CreateRouteResponseResponseFormProperties>({
			ModelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			RouteResponseId: new FormControl<string | null | undefined>(undefined),
			RouteResponseKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateStageResponse {

		/** Settings for logging access in a stage. */
		AccessLogSettings?: AccessLogSettings;
		ApiGatewayManaged?: boolean | null;
		AutoDeploy?: boolean | null;

		/** The identifier. */
		ClientCertificateId?: string | null;
		CreatedDate?: Date | null;

		/** Represents a collection of route settings. */
		DefaultRouteSettings?: RouteSettings;

		/** The identifier. */
		DeploymentId?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		LastDeploymentStatusMessage?: string | null;
		LastUpdatedDate?: Date | null;

		/** The route settings map. */
		RouteSettings?: RouteSettingsMap;

		/** A string with a length between [1-128]. */
		StageName?: string | null;

		/** The stage variable map. */
		StageVariables?: StageVariablesMap;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}
	export interface CreateStageResponseFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		AutoDeploy: FormControl<boolean | null | undefined>,

		/** The identifier. */
		ClientCertificateId: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,

		/** The identifier. */
		DeploymentId: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,
		LastDeploymentStatusMessage: FormControl<string | null | undefined>,
		LastUpdatedDate: FormControl<Date | null | undefined>,

		/** A string with a length between [1-128]. */
		StageName: FormControl<string | null | undefined>,
	}
	export function CreateCreateStageResponseFormGroup() {
		return new FormGroup<CreateStageResponseFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			AutoDeploy: new FormControl<boolean | null | undefined>(undefined),
			ClientCertificateId: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LastDeploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			LastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			StageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings for logging access in a stage. */
	export interface AccessLogSettings {

		/** Represents an Amazon Resource Name (ARN). */
		DestinationArn?: string | null;

		/** A string with a length between [1-1024]. */
		Format?: string | null;
	}

	/** Settings for logging access in a stage. */
	export interface AccessLogSettingsFormProperties {

		/** Represents an Amazon Resource Name (ARN). */
		DestinationArn: FormControl<string | null | undefined>,

		/** A string with a length between [1-1024]. */
		Format: FormControl<string | null | undefined>,
	}
	export function CreateAccessLogSettingsFormGroup() {
		return new FormGroup<AccessLogSettingsFormProperties>({
			DestinationArn: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Represents a collection of route settings. */
	export interface RouteSettingsFormProperties {
		DataTraceEnabled: FormControl<boolean | null | undefined>,
		DetailedMetricsEnabled: FormControl<boolean | null | undefined>,

		/** The logging level. */
		LoggingLevel: FormControl<RouteSettingsLoggingLevel | null | undefined>,
		ThrottlingBurstLimit: FormControl<number | null | undefined>,
		ThrottlingRateLimit: FormControl<number | null | undefined>,
	}
	export function CreateRouteSettingsFormGroup() {
		return new FormGroup<RouteSettingsFormProperties>({
			DataTraceEnabled: new FormControl<boolean | null | undefined>(undefined),
			DetailedMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			LoggingLevel: new FormControl<RouteSettingsLoggingLevel | null | undefined>(undefined),
			ThrottlingBurstLimit: new FormControl<number | null | undefined>(undefined),
			ThrottlingRateLimit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum RouteSettingsLoggingLevel { ERROR = 0, INFO = 1, OFF = 2 }


	/** The route settings map. */
	export interface RouteSettingsMap {
	}

	/** The route settings map. */
	export interface RouteSettingsMapFormProperties {
	}
	export function CreateRouteSettingsMapFormGroup() {
		return new FormGroup<RouteSettingsMapFormProperties>({
		});

	}


	/** The stage variable map. */
	export interface StageVariablesMap {
	}

	/** The stage variable map. */
	export interface StageVariablesMapFormProperties {
	}
	export function CreateStageVariablesMapFormGroup() {
		return new FormGroup<StageVariablesMapFormProperties>({
		});

	}


	/** The logging level. */
	export enum LoggingLevel { ERROR = 0, INFO = 1, OFF = 2 }

	export interface CreateVpcLinkResponse {
		CreatedDate?: Date | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** A list of security group IDs for the VPC link. */
		SecurityGroupIds?: Array<string>;

		/** A list of subnet IDs to include in the VPC link. */
		SubnetIds?: Array<string>;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;

		/** The identifier. */
		VpcLinkId?: string | null;

		/** The status of the VPC link. */
		VpcLinkStatus?: CreateVpcLinkResponseVpcLinkStatus | null;

		/** A string with a length between [0-1024]. */
		VpcLinkStatusMessage?: string | null;

		/** The version of the VPC link. */
		VpcLinkVersion?: CreateVpcLinkResponseVpcLinkVersion | null;
	}
	export interface CreateVpcLinkResponseFormProperties {
		CreatedDate: FormControl<Date | null | undefined>,

		/** A string with a length between [1-128]. */
		Name: FormControl<string | null | undefined>,

		/** The identifier. */
		VpcLinkId: FormControl<string | null | undefined>,

		/** The status of the VPC link. */
		VpcLinkStatus: FormControl<CreateVpcLinkResponseVpcLinkStatus | null | undefined>,

		/** A string with a length between [0-1024]. */
		VpcLinkStatusMessage: FormControl<string | null | undefined>,

		/** The version of the VPC link. */
		VpcLinkVersion: FormControl<CreateVpcLinkResponseVpcLinkVersion | null | undefined>,
	}
	export function CreateCreateVpcLinkResponseFormGroup() {
		return new FormGroup<CreateVpcLinkResponseFormProperties>({
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VpcLinkId: new FormControl<string | null | undefined>(undefined),
			VpcLinkStatus: new FormControl<CreateVpcLinkResponseVpcLinkStatus | null | undefined>(undefined),
			VpcLinkStatusMessage: new FormControl<string | null | undefined>(undefined),
			VpcLinkVersion: new FormControl<CreateVpcLinkResponseVpcLinkVersion | null | undefined>(undefined),
		});

	}

	export enum CreateVpcLinkResponseVpcLinkStatus { PENDING = 0, AVAILABLE = 1, DELETING = 2, FAILED = 3, INACTIVE = 4 }

	export enum CreateVpcLinkResponseVpcLinkVersion { V2 = 0 }

	export interface DeleteVpcLinkResponse {
	}
	export interface DeleteVpcLinkResponseFormProperties {
	}
	export function CreateDeleteVpcLinkResponseFormGroup() {
		return new FormGroup<DeleteVpcLinkResponseFormProperties>({
		});

	}

	export interface ExportApiResponse {

		/** Represents an exported definition of an API in a particular output format, for example, YAML. The API is serialized to the requested specification, for example, OpenAPI 3.0. */
		body?: string | null;
	}
	export interface ExportApiResponseFormProperties {

		/** Represents an exported definition of an API in a particular output format, for example, YAML. The API is serialized to the requested specification, for example, OpenAPI 3.0. */
		body: FormControl<string | null | undefined>,
	}
	export function CreateExportApiResponseFormGroup() {
		return new FormGroup<ExportApiResponseFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetApiResponse {
		ApiEndpoint?: string | null;

		/** The identifier. */
		ApiId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string | null;

		/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors;
		CreatedDate?: Date | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		DisableSchemaValidation?: boolean | null;
		ImportInfo?: Array<string>;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** Represents a protocol type. */
		ProtocolType?: CreateApiResponseProtocolType | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression?: string | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;

		/** A string with a length between [1-64]. */
		Version?: string | null;
		Warnings?: Array<string>;
	}
	export interface GetApiResponseFormProperties {
		ApiEndpoint: FormControl<string | null | undefined>,

		/** The identifier. */
		ApiId: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,
		DisableSchemaValidation: FormControl<boolean | null | undefined>,

		/** A string with a length between [1-128]. */
		Name: FormControl<string | null | undefined>,

		/** Represents a protocol type. */
		ProtocolType: FormControl<CreateApiResponseProtocolType | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateGetApiResponseFormGroup() {
		return new FormGroup<GetApiResponseFormProperties>({
			ApiEndpoint: new FormControl<string | null | undefined>(undefined),
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiKeySelectionExpression: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisableSchemaValidation: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ProtocolType: new FormControl<CreateApiResponseProtocolType | null | undefined>(undefined),
			RouteSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface GetApiMappingResponseFormProperties {

		/** The identifier. */
		ApiId: FormControl<string | null | undefined>,

		/** The identifier. */
		ApiMappingId: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		ApiMappingKey: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		Stage: FormControl<string | null | undefined>,
	}
	export function CreateGetApiMappingResponseFormGroup() {
		return new FormGroup<GetApiMappingResponseFormProperties>({
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiMappingId: new FormControl<string | null | undefined>(undefined),
			ApiMappingKey: new FormControl<string | null | undefined>(undefined),
			Stage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetApiMappingsResponse {
		Items?: Array<ApiMapping>;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}
	export interface GetApiMappingsResponseFormProperties {

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetApiMappingsResponseFormGroup() {
		return new FormGroup<GetApiMappingsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Represents an API mapping. */
	export interface ApiMappingFormProperties {

		/**
		 * The identifier.
		 * Required
		 */
		ApiId: FormControl<string | null | undefined>,

		/** The identifier. */
		ApiMappingId: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		ApiMappingKey: FormControl<string | null | undefined>,

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Stage: FormControl<string | null | undefined>,
	}
	export function CreateApiMappingFormGroup() {
		return new FormGroup<ApiMappingFormProperties>({
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiMappingId: new FormControl<string | null | undefined>(undefined),
			ApiMappingKey: new FormControl<string | null | undefined>(undefined),
			Stage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetApisResponse {
		Items?: Array<Api>;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}
	export interface GetApisResponseFormProperties {

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetApisResponseFormGroup() {
		return new FormGroup<GetApisResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an API. */
	export interface Api {
		ApiEndpoint?: string | null;

		/** The identifier. */
		ApiId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string | null;

		/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors;
		CreatedDate?: Date | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		DisableSchemaValidation?: boolean | null;
		ImportInfo?: Array<string>;

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
		Tags?: Tags;

		/** A string with a length between [1-64]. */
		Version?: string | null;
		Warnings?: Array<string>;
	}

	/** Represents an API. */
	export interface ApiFormProperties {
		ApiEndpoint: FormControl<string | null | undefined>,

		/** The identifier. */
		ApiId: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,
		DisableSchemaValidation: FormControl<boolean | null | undefined>,

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Represents a protocol type.
		 * Required
		 */
		ProtocolType: FormControl<CreateApiResponseProtocolType | null | undefined>,

		/**
		 * An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
		 * Required
		 */
		RouteSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateApiFormGroup() {
		return new FormGroup<ApiFormProperties>({
			ApiEndpoint: new FormControl<string | null | undefined>(undefined),
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiKeySelectionExpression: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisableSchemaValidation: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ProtocolType: new FormControl<CreateApiResponseProtocolType | null | undefined>(undefined),
			RouteSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

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
		IdentitySource?: Array<string>;

		/** A string with a length between [0-1024]. */
		IdentityValidationExpression?: string | null;

		/** Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		JwtConfiguration?: JWTConfiguration;

		/** A string with a length between [1-128]. */
		Name?: string | null;
	}
	export interface GetAuthorizerResponseFormProperties {

		/** Represents an Amazon Resource Name (ARN). */
		AuthorizerCredentialsArn: FormControl<string | null | undefined>,

		/** The identifier. */
		AuthorizerId: FormControl<string | null | undefined>,

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		AuthorizerResultTtlInSeconds: FormControl<number | null | undefined>,

		/** The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
		AuthorizerType: FormControl<CreateAuthorizerResponseAuthorizerType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		AuthorizerUri: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		IdentityValidationExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetAuthorizerResponseFormGroup() {
		return new FormGroup<GetAuthorizerResponseFormProperties>({
			AuthorizerCredentialsArn: new FormControl<string | null | undefined>(undefined),
			AuthorizerId: new FormControl<string | null | undefined>(undefined),
			AuthorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			AuthorizerType: new FormControl<CreateAuthorizerResponseAuthorizerType | null | undefined>(undefined),
			AuthorizerUri: new FormControl<string | null | undefined>(undefined),
			IdentityValidationExpression: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAuthorizersResponse {
		Items?: Array<Authorizer>;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}
	export interface GetAuthorizersResponseFormProperties {

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAuthorizersResponseFormGroup() {
		return new FormGroup<GetAuthorizersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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
		IdentitySource?: Array<string>;

		/** A string with a length between [0-1024]. */
		IdentityValidationExpression?: string | null;

		/** Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		JwtConfiguration?: JWTConfiguration;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Name: string;
	}

	/** Represents an authorizer. */
	export interface AuthorizerFormProperties {

		/** Represents an Amazon Resource Name (ARN). */
		AuthorizerCredentialsArn: FormControl<string | null | undefined>,

		/** The identifier. */
		AuthorizerId: FormControl<string | null | undefined>,

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		AuthorizerResultTtlInSeconds: FormControl<number | null | undefined>,

		/** The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
		AuthorizerType: FormControl<CreateAuthorizerResponseAuthorizerType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		AuthorizerUri: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		IdentityValidationExpression: FormControl<string | null | undefined>,

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizerFormGroup() {
		return new FormGroup<AuthorizerFormProperties>({
			AuthorizerCredentialsArn: new FormControl<string | null | undefined>(undefined),
			AuthorizerId: new FormControl<string | null | undefined>(undefined),
			AuthorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			AuthorizerType: new FormControl<CreateAuthorizerResponseAuthorizerType | null | undefined>(undefined),
			AuthorizerUri: new FormControl<string | null | undefined>(undefined),
			IdentityValidationExpression: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface GetDeploymentResponseFormProperties {
		AutoDeployed: FormControl<boolean | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,

		/** The identifier. */
		DeploymentId: FormControl<string | null | undefined>,

		/** Represents a deployment status. */
		DeploymentStatus: FormControl<CreateDeploymentResponseDeploymentStatus | null | undefined>,
		DeploymentStatusMessage: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateGetDeploymentResponseFormGroup() {
		return new FormGroup<GetDeploymentResponseFormProperties>({
			AutoDeployed: new FormControl<boolean | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			DeploymentStatus: new FormControl<CreateDeploymentResponseDeploymentStatus | null | undefined>(undefined),
			DeploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDeploymentsResponse {
		Items?: Array<Deployment>;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}
	export interface GetDeploymentsResponseFormProperties {

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDeploymentsResponseFormGroup() {
		return new FormGroup<GetDeploymentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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

	/** An immutable representation of an API that can be called by users. A Deployment must be associated with a Stage for it to be callable over the internet. */
	export interface DeploymentFormProperties {
		AutoDeployed: FormControl<boolean | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,

		/** The identifier. */
		DeploymentId: FormControl<string | null | undefined>,

		/** Represents a deployment status. */
		DeploymentStatus: FormControl<CreateDeploymentResponseDeploymentStatus | null | undefined>,
		DeploymentStatusMessage: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentFormGroup() {
		return new FormGroup<DeploymentFormProperties>({
			AutoDeployed: new FormControl<boolean | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			DeploymentStatus: new FormControl<CreateDeploymentResponseDeploymentStatus | null | undefined>(undefined),
			DeploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDomainNameResponse {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiMappingSelectionExpression?: string | null;

		/** A string with a length between [1-512]. */
		DomainName?: string | null;

		/** The domain name configurations. */
		DomainNameConfigurations?: Array<DomainNameConfiguration>;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}
	export interface GetDomainNameResponseFormProperties {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiMappingSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-512]. */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateGetDomainNameResponseFormGroup() {
		return new FormGroup<GetDomainNameResponseFormProperties>({
			ApiMappingSelectionExpression: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDomainNamesResponse {
		Items?: Array<DomainName>;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}
	export interface GetDomainNamesResponseFormProperties {

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDomainNamesResponseFormGroup() {
		return new FormGroup<GetDomainNamesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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
		DomainNameConfigurations?: Array<DomainNameConfiguration>;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}

	/** Represents a domain name. */
	export interface DomainNameFormProperties {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiMappingSelectionExpression: FormControl<string | null | undefined>,

		/**
		 * A string with a length between [1-512].
		 * Required
		 */
		DomainName1: FormControl<string | null | undefined>,
	}
	export function CreateDomainNameFormGroup() {
		return new FormGroup<DomainNameFormProperties>({
			ApiMappingSelectionExpression: new FormControl<string | null | undefined>(undefined),
			DomainName1: new FormControl<string | null | undefined>(undefined),
		});

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
		RequestParameters?: IntegrationParameters;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		RequestTemplates?: TemplateMap;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis?: number | null;

		/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		TlsConfig?: TlsConfig;
	}
	export interface GetIntegrationResultFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,

		/** A string with a length between [1-1024]. */
		ConnectionId: FormControl<string | null | undefined>,

		/** Represents a connection type. */
		ConnectionType: FormControl<CreateIntegrationResultConnectionType | null | undefined>,

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy: FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>,

		/** Represents an Amazon Resource Name (ARN). */
		CredentialsArn: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,

		/** The identifier. */
		IntegrationId: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		IntegrationMethod: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		IntegrationResponseSelectionExpression: FormControl<string | null | undefined>,

		/** Represents an API method integration type. */
		IntegrationType: FormControl<CreateIntegrationResultIntegrationType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		IntegrationUri: FormControl<string | null | undefined>,

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		PassthroughBehavior: FormControl<CreateIntegrationResultPassthroughBehavior | null | undefined>,

		/** A string with a length between [1-64]. */
		PayloadFormatVersion: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression: FormControl<string | null | undefined>,

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis: FormControl<number | null | undefined>,
	}
	export function CreateGetIntegrationResultFormGroup() {
		return new FormGroup<GetIntegrationResultFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ConnectionId: new FormControl<string | null | undefined>(undefined),
			ConnectionType: new FormControl<CreateIntegrationResultConnectionType | null | undefined>(undefined),
			ContentHandlingStrategy: new FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>(undefined),
			CredentialsArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IntegrationId: new FormControl<string | null | undefined>(undefined),
			IntegrationMethod: new FormControl<string | null | undefined>(undefined),
			IntegrationResponseSelectionExpression: new FormControl<string | null | undefined>(undefined),
			IntegrationType: new FormControl<CreateIntegrationResultIntegrationType | null | undefined>(undefined),
			IntegrationUri: new FormControl<string | null | undefined>(undefined),
			PassthroughBehavior: new FormControl<CreateIntegrationResultPassthroughBehavior | null | undefined>(undefined),
			PayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
			TimeoutInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetIntegrationResponseResponse {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/** The identifier. */
		IntegrationResponseId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		IntegrationResponseKey?: string | null;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		ResponseParameters?: IntegrationParameters;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		ResponseTemplates?: TemplateMap;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;
	}
	export interface GetIntegrationResponseResponseFormProperties {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy: FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>,

		/** The identifier. */
		IntegrationResponseId: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		IntegrationResponseKey: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateGetIntegrationResponseResponseFormGroup() {
		return new FormGroup<GetIntegrationResponseResponseFormProperties>({
			ContentHandlingStrategy: new FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>(undefined),
			IntegrationResponseId: new FormControl<string | null | undefined>(undefined),
			IntegrationResponseKey: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetIntegrationResponsesResponse {
		Items?: Array<IntegrationResponse>;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}
	export interface GetIntegrationResponsesResponseFormProperties {

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetIntegrationResponsesResponseFormGroup() {
		return new FormGroup<GetIntegrationResponsesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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
		ResponseParameters?: IntegrationParameters;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		ResponseTemplates?: TemplateMap;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;
	}

	/** Represents an integration response. */
	export interface IntegrationResponseFormProperties {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy: FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>,

		/** The identifier. */
		IntegrationResponseId: FormControl<string | null | undefined>,

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		IntegrationResponseKey: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationResponseFormGroup() {
		return new FormGroup<IntegrationResponseFormProperties>({
			ContentHandlingStrategy: new FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>(undefined),
			IntegrationResponseId: new FormControl<string | null | undefined>(undefined),
			IntegrationResponseKey: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetIntegrationsResponse {
		Items?: Array<Integration>;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}
	export interface GetIntegrationsResponseFormProperties {

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetIntegrationsResponseFormGroup() {
		return new FormGroup<GetIntegrationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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
		RequestParameters?: IntegrationParameters;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		RequestTemplates?: TemplateMap;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis?: number | null;

		/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		TlsConfig?: TlsConfig;
	}

	/** Represents an integration. */
	export interface IntegrationFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,

		/** A string with a length between [1-1024]. */
		ConnectionId: FormControl<string | null | undefined>,

		/** Represents a connection type. */
		ConnectionType: FormControl<CreateIntegrationResultConnectionType | null | undefined>,

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy: FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>,

		/** Represents an Amazon Resource Name (ARN). */
		CredentialsArn: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,

		/** The identifier. */
		IntegrationId: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		IntegrationMethod: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		IntegrationResponseSelectionExpression: FormControl<string | null | undefined>,

		/** Represents an API method integration type. */
		IntegrationType: FormControl<CreateIntegrationResultIntegrationType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		IntegrationUri: FormControl<string | null | undefined>,

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		PassthroughBehavior: FormControl<CreateIntegrationResultPassthroughBehavior | null | undefined>,

		/** A string with a length between [1-64]. */
		PayloadFormatVersion: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression: FormControl<string | null | undefined>,

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis: FormControl<number | null | undefined>,
	}
	export function CreateIntegrationFormGroup() {
		return new FormGroup<IntegrationFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ConnectionId: new FormControl<string | null | undefined>(undefined),
			ConnectionType: new FormControl<CreateIntegrationResultConnectionType | null | undefined>(undefined),
			ContentHandlingStrategy: new FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>(undefined),
			CredentialsArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IntegrationId: new FormControl<string | null | undefined>(undefined),
			IntegrationMethod: new FormControl<string | null | undefined>(undefined),
			IntegrationResponseSelectionExpression: new FormControl<string | null | undefined>(undefined),
			IntegrationType: new FormControl<CreateIntegrationResultIntegrationType | null | undefined>(undefined),
			IntegrationUri: new FormControl<string | null | undefined>(undefined),
			PassthroughBehavior: new FormControl<CreateIntegrationResultPassthroughBehavior | null | undefined>(undefined),
			PayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
			TimeoutInMillis: new FormControl<number | null | undefined>(undefined),
		});

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
	export interface GetModelResponseFormProperties {

		/** A string with a length between [1-256]. */
		ContentType: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,

		/** The identifier. */
		ModelId: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		Name: FormControl<string | null | undefined>,

		/** A string with a length between [0-32768]. */
		Schema: FormControl<string | null | undefined>,
	}
	export function CreateGetModelResponseFormGroup() {
		return new FormGroup<GetModelResponseFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ModelId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Schema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetModelTemplateResponse {
		Value?: string | null;
	}
	export interface GetModelTemplateResponseFormProperties {
		Value: FormControl<string | null | undefined>,
	}
	export function CreateGetModelTemplateResponseFormGroup() {
		return new FormGroup<GetModelTemplateResponseFormProperties>({
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetModelsResponse {
		Items?: Array<Model>;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}
	export interface GetModelsResponseFormProperties {

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetModelsResponseFormGroup() {
		return new FormGroup<GetModelsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Represents a data model for an API. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Create Models and Mapping Templates for Request and Response Mappings</a>. */
	export interface ModelFormProperties {

		/** A string with a length between [1-256]. */
		ContentType: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,

		/** The identifier. */
		ModelId: FormControl<string | null | undefined>,

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/** A string with a length between [0-32768]. */
		Schema: FormControl<string | null | undefined>,
	}
	export function CreateModelFormGroup() {
		return new FormGroup<ModelFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ModelId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Schema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRouteResult {
		ApiGatewayManaged?: boolean | null;
		ApiKeyRequired?: boolean | null;

		/** A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		AuthorizationScopes?: Array<string>;

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType?: CreateRouteResultAuthorizationType | null;

		/** The identifier. */
		AuthorizerId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** A string with a length between [1-64]. */
		OperationName?: string | null;

		/** The route models. */
		RequestModels?: RouteModels;

		/** The route parameters. */
		RequestParameters?: RouteParameters;

		/** The identifier. */
		RouteId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression?: string | null;

		/** A string with a length between [1-128]. */
		Target?: string | null;
	}
	export interface GetRouteResultFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		ApiKeyRequired: FormControl<boolean | null | undefined>,

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType: FormControl<CreateRouteResultAuthorizationType | null | undefined>,

		/** The identifier. */
		AuthorizerId: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		OperationName: FormControl<string | null | undefined>,

		/** The identifier. */
		RouteId: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		Target: FormControl<string | null | undefined>,
	}
	export function CreateGetRouteResultFormGroup() {
		return new FormGroup<GetRouteResultFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ApiKeyRequired: new FormControl<boolean | null | undefined>(undefined),
			AuthorizationType: new FormControl<CreateRouteResultAuthorizationType | null | undefined>(undefined),
			AuthorizerId: new FormControl<string | null | undefined>(undefined),
			ModelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			OperationName: new FormControl<string | null | undefined>(undefined),
			RouteId: new FormControl<string | null | undefined>(undefined),
			RouteKey: new FormControl<string | null | undefined>(undefined),
			RouteResponseSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRouteResponseResponse {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** The route models. */
		ResponseModels?: RouteModels;

		/** The route parameters. */
		ResponseParameters?: RouteParameters;

		/** The identifier. */
		RouteResponseId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteResponseKey?: string | null;
	}
	export interface GetRouteResponseResponseFormProperties {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression: FormControl<string | null | undefined>,

		/** The identifier. */
		RouteResponseId: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteResponseKey: FormControl<string | null | undefined>,
	}
	export function CreateGetRouteResponseResponseFormGroup() {
		return new FormGroup<GetRouteResponseResponseFormProperties>({
			ModelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			RouteResponseId: new FormControl<string | null | undefined>(undefined),
			RouteResponseKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRouteResponsesResponse {
		Items?: Array<RouteResponse>;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}
	export interface GetRouteResponsesResponseFormProperties {

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRouteResponsesResponseFormGroup() {
		return new FormGroup<GetRouteResponsesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a route response. */
	export interface RouteResponse {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** The route models. */
		ResponseModels?: RouteModels;

		/** The route parameters. */
		ResponseParameters?: RouteParameters;

		/** The identifier. */
		RouteResponseId?: string | null;

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		RouteResponseKey: string;
	}

	/** Represents a route response. */
	export interface RouteResponseFormProperties {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression: FormControl<string | null | undefined>,

		/** The identifier. */
		RouteResponseId: FormControl<string | null | undefined>,

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		RouteResponseKey: FormControl<string | null | undefined>,
	}
	export function CreateRouteResponseFormGroup() {
		return new FormGroup<RouteResponseFormProperties>({
			ModelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			RouteResponseId: new FormControl<string | null | undefined>(undefined),
			RouteResponseKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRoutesResponse {
		Items?: Array<Route>;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}
	export interface GetRoutesResponseFormProperties {

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRoutesResponseFormGroup() {
		return new FormGroup<GetRoutesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a route. */
	export interface Route {
		ApiGatewayManaged?: boolean | null;
		ApiKeyRequired?: boolean | null;

		/** A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		AuthorizationScopes?: Array<string>;

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType?: CreateRouteResultAuthorizationType | null;

		/** The identifier. */
		AuthorizerId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** A string with a length between [1-64]. */
		OperationName?: string | null;

		/** The route models. */
		RequestModels?: RouteModels;

		/** The route parameters. */
		RequestParameters?: RouteParameters;

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

	/** Represents a route. */
	export interface RouteFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		ApiKeyRequired: FormControl<boolean | null | undefined>,

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType: FormControl<CreateRouteResultAuthorizationType | null | undefined>,

		/** The identifier. */
		AuthorizerId: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		OperationName: FormControl<string | null | undefined>,

		/** The identifier. */
		RouteId: FormControl<string | null | undefined>,

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		RouteKey: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		Target: FormControl<string | null | undefined>,
	}
	export function CreateRouteFormGroup() {
		return new FormGroup<RouteFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ApiKeyRequired: new FormControl<boolean | null | undefined>(undefined),
			AuthorizationType: new FormControl<CreateRouteResultAuthorizationType | null | undefined>(undefined),
			AuthorizerId: new FormControl<string | null | undefined>(undefined),
			ModelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			OperationName: new FormControl<string | null | undefined>(undefined),
			RouteId: new FormControl<string | null | undefined>(undefined),
			RouteKey: new FormControl<string | null | undefined>(undefined),
			RouteResponseSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetStageResponse {

		/** Settings for logging access in a stage. */
		AccessLogSettings?: AccessLogSettings;
		ApiGatewayManaged?: boolean | null;
		AutoDeploy?: boolean | null;

		/** The identifier. */
		ClientCertificateId?: string | null;
		CreatedDate?: Date | null;

		/** Represents a collection of route settings. */
		DefaultRouteSettings?: RouteSettings;

		/** The identifier. */
		DeploymentId?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		LastDeploymentStatusMessage?: string | null;
		LastUpdatedDate?: Date | null;

		/** The route settings map. */
		RouteSettings?: RouteSettingsMap;

		/** A string with a length between [1-128]. */
		StageName?: string | null;

		/** The stage variable map. */
		StageVariables?: StageVariablesMap;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}
	export interface GetStageResponseFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		AutoDeploy: FormControl<boolean | null | undefined>,

		/** The identifier. */
		ClientCertificateId: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,

		/** The identifier. */
		DeploymentId: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,
		LastDeploymentStatusMessage: FormControl<string | null | undefined>,
		LastUpdatedDate: FormControl<Date | null | undefined>,

		/** A string with a length between [1-128]. */
		StageName: FormControl<string | null | undefined>,
	}
	export function CreateGetStageResponseFormGroup() {
		return new FormGroup<GetStageResponseFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			AutoDeploy: new FormControl<boolean | null | undefined>(undefined),
			ClientCertificateId: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LastDeploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			LastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			StageName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetStagesResponse {
		Items?: Array<Stage>;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}
	export interface GetStagesResponseFormProperties {

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetStagesResponseFormGroup() {
		return new FormGroup<GetStagesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an API stage. */
	export interface Stage {

		/** Settings for logging access in a stage. */
		AccessLogSettings?: AccessLogSettings;
		ApiGatewayManaged?: boolean | null;
		AutoDeploy?: boolean | null;

		/** The identifier. */
		ClientCertificateId?: string | null;
		CreatedDate?: Date | null;

		/** Represents a collection of route settings. */
		DefaultRouteSettings?: RouteSettings;

		/** The identifier. */
		DeploymentId?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		LastDeploymentStatusMessage?: string | null;
		LastUpdatedDate?: Date | null;

		/** The route settings map. */
		RouteSettings?: RouteSettingsMap;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		StageName: string;

		/** The stage variable map. */
		StageVariables?: StageVariablesMap;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}

	/** Represents an API stage. */
	export interface StageFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		AutoDeploy: FormControl<boolean | null | undefined>,

		/** The identifier. */
		ClientCertificateId: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,

		/** The identifier. */
		DeploymentId: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,
		LastDeploymentStatusMessage: FormControl<string | null | undefined>,
		LastUpdatedDate: FormControl<Date | null | undefined>,

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		StageName: FormControl<string | null | undefined>,
	}
	export function CreateStageFormGroup() {
		return new FormGroup<StageFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			AutoDeploy: new FormControl<boolean | null | undefined>(undefined),
			ClientCertificateId: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LastDeploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			LastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			StageName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTagsResponse {

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}
	export interface GetTagsResponseFormProperties {
	}
	export function CreateGetTagsResponseFormGroup() {
		return new FormGroup<GetTagsResponseFormProperties>({
		});

	}

	export interface GetVpcLinkResponse {
		CreatedDate?: Date | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** A list of security group IDs for the VPC link. */
		SecurityGroupIds?: Array<string>;

		/** A list of subnet IDs to include in the VPC link. */
		SubnetIds?: Array<string>;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;

		/** The identifier. */
		VpcLinkId?: string | null;

		/** The status of the VPC link. */
		VpcLinkStatus?: CreateVpcLinkResponseVpcLinkStatus | null;

		/** A string with a length between [0-1024]. */
		VpcLinkStatusMessage?: string | null;

		/** The version of the VPC link. */
		VpcLinkVersion?: CreateVpcLinkResponseVpcLinkVersion | null;
	}
	export interface GetVpcLinkResponseFormProperties {
		CreatedDate: FormControl<Date | null | undefined>,

		/** A string with a length between [1-128]. */
		Name: FormControl<string | null | undefined>,

		/** The identifier. */
		VpcLinkId: FormControl<string | null | undefined>,

		/** The status of the VPC link. */
		VpcLinkStatus: FormControl<CreateVpcLinkResponseVpcLinkStatus | null | undefined>,

		/** A string with a length between [0-1024]. */
		VpcLinkStatusMessage: FormControl<string | null | undefined>,

		/** The version of the VPC link. */
		VpcLinkVersion: FormControl<CreateVpcLinkResponseVpcLinkVersion | null | undefined>,
	}
	export function CreateGetVpcLinkResponseFormGroup() {
		return new FormGroup<GetVpcLinkResponseFormProperties>({
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VpcLinkId: new FormControl<string | null | undefined>(undefined),
			VpcLinkStatus: new FormControl<CreateVpcLinkResponseVpcLinkStatus | null | undefined>(undefined),
			VpcLinkStatusMessage: new FormControl<string | null | undefined>(undefined),
			VpcLinkVersion: new FormControl<CreateVpcLinkResponseVpcLinkVersion | null | undefined>(undefined),
		});

	}

	export interface GetVpcLinksResponse {
		Items?: Array<VpcLink>;

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken?: string | null;
	}
	export interface GetVpcLinksResponseFormProperties {

		/** The next page of elements from this collection. Not valid for the last element of the collection. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetVpcLinksResponseFormGroup() {
		return new FormGroup<GetVpcLinksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

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
		Tags?: Tags;

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

	/** Represents a VPC link. */
	export interface VpcLinkFormProperties {
		CreatedDate: FormControl<Date | null | undefined>,

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The identifier.
		 * Required
		 */
		VpcLinkId: FormControl<string | null | undefined>,

		/** The status of the VPC link. */
		VpcLinkStatus: FormControl<CreateVpcLinkResponseVpcLinkStatus | null | undefined>,

		/** A string with a length between [0-1024]. */
		VpcLinkStatusMessage: FormControl<string | null | undefined>,

		/** The version of the VPC link. */
		VpcLinkVersion: FormControl<CreateVpcLinkResponseVpcLinkVersion | null | undefined>,
	}
	export function CreateVpcLinkFormGroup() {
		return new FormGroup<VpcLinkFormProperties>({
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VpcLinkId: new FormControl<string | null | undefined>(undefined),
			VpcLinkStatus: new FormControl<CreateVpcLinkResponseVpcLinkStatus | null | undefined>(undefined),
			VpcLinkStatusMessage: new FormControl<string | null | undefined>(undefined),
			VpcLinkVersion: new FormControl<CreateVpcLinkResponseVpcLinkVersion | null | undefined>(undefined),
		});

	}

	export interface ImportApiResponse {
		ApiEndpoint?: string | null;

		/** The identifier. */
		ApiId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string | null;

		/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors;
		CreatedDate?: Date | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		DisableSchemaValidation?: boolean | null;
		ImportInfo?: Array<string>;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** Represents a protocol type. */
		ProtocolType?: CreateApiResponseProtocolType | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression?: string | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;

		/** A string with a length between [1-64]. */
		Version?: string | null;
		Warnings?: Array<string>;
	}
	export interface ImportApiResponseFormProperties {
		ApiEndpoint: FormControl<string | null | undefined>,

		/** The identifier. */
		ApiId: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,
		DisableSchemaValidation: FormControl<boolean | null | undefined>,

		/** A string with a length between [1-128]. */
		Name: FormControl<string | null | undefined>,

		/** Represents a protocol type. */
		ProtocolType: FormControl<CreateApiResponseProtocolType | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateImportApiResponseFormGroup() {
		return new FormGroup<ImportApiResponseFormProperties>({
			ApiEndpoint: new FormControl<string | null | undefined>(undefined),
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiKeySelectionExpression: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisableSchemaValidation: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ProtocolType: new FormControl<CreateApiResponseProtocolType | null | undefined>(undefined),
			RouteSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReimportApiResponse {
		ApiEndpoint?: string | null;

		/** The identifier. */
		ApiId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string | null;

		/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors;
		CreatedDate?: Date | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		DisableSchemaValidation?: boolean | null;
		ImportInfo?: Array<string>;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** Represents a protocol type. */
		ProtocolType?: CreateApiResponseProtocolType | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression?: string | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;

		/** A string with a length between [1-64]. */
		Version?: string | null;
		Warnings?: Array<string>;
	}
	export interface ReimportApiResponseFormProperties {
		ApiEndpoint: FormControl<string | null | undefined>,

		/** The identifier. */
		ApiId: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,
		DisableSchemaValidation: FormControl<boolean | null | undefined>,

		/** A string with a length between [1-128]. */
		Name: FormControl<string | null | undefined>,

		/** Represents a protocol type. */
		ProtocolType: FormControl<CreateApiResponseProtocolType | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateReimportApiResponseFormGroup() {
		return new FormGroup<ReimportApiResponseFormProperties>({
			ApiEndpoint: new FormControl<string | null | undefined>(undefined),
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiKeySelectionExpression: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisableSchemaValidation: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ProtocolType: new FormControl<CreateApiResponseProtocolType | null | undefined>(undefined),
			RouteSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
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

	export interface UpdateApiResponse {
		ApiEndpoint?: string | null;

		/** The identifier. */
		ApiId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string | null;

		/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors;
		CreatedDate?: Date | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		DisableSchemaValidation?: boolean | null;
		ImportInfo?: Array<string>;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** Represents a protocol type. */
		ProtocolType?: CreateApiResponseProtocolType | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression?: string | null;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;

		/** A string with a length between [1-64]. */
		Version?: string | null;
		Warnings?: Array<string>;
	}
	export interface UpdateApiResponseFormProperties {
		ApiEndpoint: FormControl<string | null | undefined>,

		/** The identifier. */
		ApiId: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,
		DisableSchemaValidation: FormControl<boolean | null | undefined>,

		/** A string with a length between [1-128]. */
		Name: FormControl<string | null | undefined>,

		/** Represents a protocol type. */
		ProtocolType: FormControl<CreateApiResponseProtocolType | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApiResponseFormGroup() {
		return new FormGroup<UpdateApiResponseFormProperties>({
			ApiEndpoint: new FormControl<string | null | undefined>(undefined),
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiKeySelectionExpression: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisableSchemaValidation: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ProtocolType: new FormControl<CreateApiResponseProtocolType | null | undefined>(undefined),
			RouteSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface UpdateApiMappingResponseFormProperties {

		/** The identifier. */
		ApiId: FormControl<string | null | undefined>,

		/** The identifier. */
		ApiMappingId: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		ApiMappingKey: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		Stage: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApiMappingResponseFormGroup() {
		return new FormGroup<UpdateApiMappingResponseFormProperties>({
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiMappingId: new FormControl<string | null | undefined>(undefined),
			ApiMappingKey: new FormControl<string | null | undefined>(undefined),
			Stage: new FormControl<string | null | undefined>(undefined),
		});

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
		IdentitySource?: Array<string>;

		/** A string with a length between [0-1024]. */
		IdentityValidationExpression?: string | null;

		/** Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		JwtConfiguration?: JWTConfiguration;

		/** A string with a length between [1-128]. */
		Name?: string | null;
	}
	export interface UpdateAuthorizerResponseFormProperties {

		/** Represents an Amazon Resource Name (ARN). */
		AuthorizerCredentialsArn: FormControl<string | null | undefined>,

		/** The identifier. */
		AuthorizerId: FormControl<string | null | undefined>,

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		AuthorizerResultTtlInSeconds: FormControl<number | null | undefined>,

		/** The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
		AuthorizerType: FormControl<CreateAuthorizerResponseAuthorizerType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		AuthorizerUri: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		IdentityValidationExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAuthorizerResponseFormGroup() {
		return new FormGroup<UpdateAuthorizerResponseFormProperties>({
			AuthorizerCredentialsArn: new FormControl<string | null | undefined>(undefined),
			AuthorizerId: new FormControl<string | null | undefined>(undefined),
			AuthorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			AuthorizerType: new FormControl<CreateAuthorizerResponseAuthorizerType | null | undefined>(undefined),
			AuthorizerUri: new FormControl<string | null | undefined>(undefined),
			IdentityValidationExpression: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface UpdateDeploymentResponseFormProperties {
		AutoDeployed: FormControl<boolean | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,

		/** The identifier. */
		DeploymentId: FormControl<string | null | undefined>,

		/** Represents a deployment status. */
		DeploymentStatus: FormControl<CreateDeploymentResponseDeploymentStatus | null | undefined>,
		DeploymentStatusMessage: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeploymentResponseFormGroup() {
		return new FormGroup<UpdateDeploymentResponseFormProperties>({
			AutoDeployed: new FormControl<boolean | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			DeploymentStatus: new FormControl<CreateDeploymentResponseDeploymentStatus | null | undefined>(undefined),
			DeploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainNameResponse {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiMappingSelectionExpression?: string | null;

		/** A string with a length between [1-512]. */
		DomainName?: string | null;

		/** The domain name configurations. */
		DomainNameConfigurations?: Array<DomainNameConfiguration>;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}
	export interface UpdateDomainNameResponseFormProperties {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiMappingSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-512]. */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainNameResponseFormGroup() {
		return new FormGroup<UpdateDomainNameResponseFormProperties>({
			ApiMappingSelectionExpression: new FormControl<string | null | undefined>(undefined),
			DomainName: new FormControl<string | null | undefined>(undefined),
		});

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
		RequestParameters?: IntegrationParameters;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		RequestTemplates?: TemplateMap;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis?: number | null;

		/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		TlsConfig?: TlsConfig;
	}
	export interface UpdateIntegrationResultFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,

		/** A string with a length between [1-1024]. */
		ConnectionId: FormControl<string | null | undefined>,

		/** Represents a connection type. */
		ConnectionType: FormControl<CreateIntegrationResultConnectionType | null | undefined>,

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy: FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>,

		/** Represents an Amazon Resource Name (ARN). */
		CredentialsArn: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,

		/** The identifier. */
		IntegrationId: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		IntegrationMethod: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		IntegrationResponseSelectionExpression: FormControl<string | null | undefined>,

		/** Represents an API method integration type. */
		IntegrationType: FormControl<CreateIntegrationResultIntegrationType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		IntegrationUri: FormControl<string | null | undefined>,

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		PassthroughBehavior: FormControl<CreateIntegrationResultPassthroughBehavior | null | undefined>,

		/** A string with a length between [1-64]. */
		PayloadFormatVersion: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression: FormControl<string | null | undefined>,

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis: FormControl<number | null | undefined>,
	}
	export function CreateUpdateIntegrationResultFormGroup() {
		return new FormGroup<UpdateIntegrationResultFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ConnectionId: new FormControl<string | null | undefined>(undefined),
			ConnectionType: new FormControl<CreateIntegrationResultConnectionType | null | undefined>(undefined),
			ContentHandlingStrategy: new FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>(undefined),
			CredentialsArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IntegrationId: new FormControl<string | null | undefined>(undefined),
			IntegrationMethod: new FormControl<string | null | undefined>(undefined),
			IntegrationResponseSelectionExpression: new FormControl<string | null | undefined>(undefined),
			IntegrationType: new FormControl<CreateIntegrationResultIntegrationType | null | undefined>(undefined),
			IntegrationUri: new FormControl<string | null | undefined>(undefined),
			PassthroughBehavior: new FormControl<CreateIntegrationResultPassthroughBehavior | null | undefined>(undefined),
			PayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
			TimeoutInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateIntegrationResponseResponse {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/** The identifier. */
		IntegrationResponseId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		IntegrationResponseKey?: string | null;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		ResponseParameters?: IntegrationParameters;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		ResponseTemplates?: TemplateMap;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;
	}
	export interface UpdateIntegrationResponseResponseFormProperties {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy: FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>,

		/** The identifier. */
		IntegrationResponseId: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		IntegrationResponseKey: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIntegrationResponseResponseFormGroup() {
		return new FormGroup<UpdateIntegrationResponseResponseFormProperties>({
			ContentHandlingStrategy: new FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>(undefined),
			IntegrationResponseId: new FormControl<string | null | undefined>(undefined),
			IntegrationResponseKey: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface UpdateModelResponseFormProperties {

		/** A string with a length between [1-256]. */
		ContentType: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,

		/** The identifier. */
		ModelId: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		Name: FormControl<string | null | undefined>,

		/** A string with a length between [0-32768]. */
		Schema: FormControl<string | null | undefined>,
	}
	export function CreateUpdateModelResponseFormGroup() {
		return new FormGroup<UpdateModelResponseFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ModelId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Schema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRouteResult {
		ApiGatewayManaged?: boolean | null;
		ApiKeyRequired?: boolean | null;

		/** A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		AuthorizationScopes?: Array<string>;

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType?: CreateRouteResultAuthorizationType | null;

		/** The identifier. */
		AuthorizerId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** A string with a length between [1-64]. */
		OperationName?: string | null;

		/** The route models. */
		RequestModels?: RouteModels;

		/** The route parameters. */
		RequestParameters?: RouteParameters;

		/** The identifier. */
		RouteId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression?: string | null;

		/** A string with a length between [1-128]. */
		Target?: string | null;
	}
	export interface UpdateRouteResultFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		ApiKeyRequired: FormControl<boolean | null | undefined>,

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType: FormControl<CreateRouteResultAuthorizationType | null | undefined>,

		/** The identifier. */
		AuthorizerId: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		OperationName: FormControl<string | null | undefined>,

		/** The identifier. */
		RouteId: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		Target: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRouteResultFormGroup() {
		return new FormGroup<UpdateRouteResultFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ApiKeyRequired: new FormControl<boolean | null | undefined>(undefined),
			AuthorizationType: new FormControl<CreateRouteResultAuthorizationType | null | undefined>(undefined),
			AuthorizerId: new FormControl<string | null | undefined>(undefined),
			ModelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			OperationName: new FormControl<string | null | undefined>(undefined),
			RouteId: new FormControl<string | null | undefined>(undefined),
			RouteKey: new FormControl<string | null | undefined>(undefined),
			RouteResponseSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRouteResponseResponse {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** The route models. */
		ResponseModels?: RouteModels;

		/** The route parameters. */
		ResponseParameters?: RouteParameters;

		/** The identifier. */
		RouteResponseId?: string | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteResponseKey?: string | null;
	}
	export interface UpdateRouteResponseResponseFormProperties {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression: FormControl<string | null | undefined>,

		/** The identifier. */
		RouteResponseId: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteResponseKey: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRouteResponseResponseFormGroup() {
		return new FormGroup<UpdateRouteResponseResponseFormProperties>({
			ModelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			RouteResponseId: new FormControl<string | null | undefined>(undefined),
			RouteResponseKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateStageResponse {

		/** Settings for logging access in a stage. */
		AccessLogSettings?: AccessLogSettings;
		ApiGatewayManaged?: boolean | null;
		AutoDeploy?: boolean | null;

		/** The identifier. */
		ClientCertificateId?: string | null;
		CreatedDate?: Date | null;

		/** Represents a collection of route settings. */
		DefaultRouteSettings?: RouteSettings;

		/** The identifier. */
		DeploymentId?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;
		LastDeploymentStatusMessage?: string | null;
		LastUpdatedDate?: Date | null;

		/** The route settings map. */
		RouteSettings?: RouteSettingsMap;

		/** A string with a length between [1-128]. */
		StageName?: string | null;

		/** The stage variable map. */
		StageVariables?: StageVariablesMap;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}
	export interface UpdateStageResponseFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		AutoDeploy: FormControl<boolean | null | undefined>,

		/** The identifier. */
		ClientCertificateId: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,

		/** The identifier. */
		DeploymentId: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,
		LastDeploymentStatusMessage: FormControl<string | null | undefined>,
		LastUpdatedDate: FormControl<Date | null | undefined>,

		/** A string with a length between [1-128]. */
		StageName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStageResponseFormGroup() {
		return new FormGroup<UpdateStageResponseFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			AutoDeploy: new FormControl<boolean | null | undefined>(undefined),
			ClientCertificateId: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LastDeploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			LastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			StageName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVpcLinkResponse {
		CreatedDate?: Date | null;

		/** A string with a length between [1-128]. */
		Name?: string | null;

		/** A list of security group IDs for the VPC link. */
		SecurityGroupIds?: Array<string>;

		/** A list of subnet IDs to include in the VPC link. */
		SubnetIds?: Array<string>;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;

		/** The identifier. */
		VpcLinkId?: string | null;

		/** The status of the VPC link. */
		VpcLinkStatus?: CreateVpcLinkResponseVpcLinkStatus | null;

		/** A string with a length between [0-1024]. */
		VpcLinkStatusMessage?: string | null;

		/** The version of the VPC link. */
		VpcLinkVersion?: CreateVpcLinkResponseVpcLinkVersion | null;
	}
	export interface UpdateVpcLinkResponseFormProperties {
		CreatedDate: FormControl<Date | null | undefined>,

		/** A string with a length between [1-128]. */
		Name: FormControl<string | null | undefined>,

		/** The identifier. */
		VpcLinkId: FormControl<string | null | undefined>,

		/** The status of the VPC link. */
		VpcLinkStatus: FormControl<CreateVpcLinkResponseVpcLinkStatus | null | undefined>,

		/** A string with a length between [0-1024]. */
		VpcLinkStatusMessage: FormControl<string | null | undefined>,

		/** The version of the VPC link. */
		VpcLinkVersion: FormControl<CreateVpcLinkResponseVpcLinkVersion | null | undefined>,
	}
	export function CreateUpdateVpcLinkResponseFormGroup() {
		return new FormGroup<UpdateVpcLinkResponseFormProperties>({
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VpcLinkId: new FormControl<string | null | undefined>(undefined),
			VpcLinkStatus: new FormControl<CreateVpcLinkResponseVpcLinkStatus | null | undefined>(undefined),
			VpcLinkStatusMessage: new FormControl<string | null | undefined>(undefined),
			VpcLinkVersion: new FormControl<CreateVpcLinkResponseVpcLinkVersion | null | undefined>(undefined),
		});

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

	/** Creates a new ApiMapping resource to represent an API mapping. */
	export interface CreateApiMappingRequestFormProperties {

		/**
		 * The identifier.
		 * Required
		 */
		ApiId: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		ApiMappingKey: FormControl<string | null | undefined>,

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Stage: FormControl<string | null | undefined>,
	}
	export function CreateCreateApiMappingRequestFormGroup() {
		return new FormGroup<CreateApiMappingRequestFormProperties>({
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiMappingKey: new FormControl<string | null | undefined>(undefined),
			Stage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a new Api resource to represent an API. */
	export interface CreateApiRequest {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string | null;

		/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors;

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
		Tags?: Tags;

		/** A string representation of a URI with a length between [1-2048]. */
		Target?: string | null;

		/** A string with a length between [1-64]. */
		Version?: string | null;
	}

	/** Creates a new Api resource to represent an API. */
	export interface CreateApiRequestFormProperties {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression: FormControl<string | null | undefined>,

		/** Represents an Amazon Resource Name (ARN). */
		CredentialsArn: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,
		DisableSchemaValidation: FormControl<boolean | null | undefined>,

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Represents a protocol type.
		 * Required
		 */
		ProtocolType: FormControl<CreateApiResponseProtocolType | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression: FormControl<string | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		Target: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateCreateApiRequestFormGroup() {
		return new FormGroup<CreateApiRequestFormProperties>({
			ApiKeySelectionExpression: new FormControl<string | null | undefined>(undefined),
			CredentialsArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisableSchemaValidation: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ProtocolType: new FormControl<CreateApiResponseProtocolType | null | undefined>(undefined),
			RouteKey: new FormControl<string | null | undefined>(undefined),
			RouteSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

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
		JwtConfiguration?: JWTConfiguration;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Name: string;
	}

	/** Creates a new Authorizer resource to represent an authorizer. */
	export interface CreateAuthorizerRequestFormProperties {

		/** Represents an Amazon Resource Name (ARN). */
		AuthorizerCredentialsArn: FormControl<string | null | undefined>,

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		AuthorizerResultTtlInSeconds: FormControl<number | null | undefined>,

		/**
		 * The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens.
		 * Required
		 */
		AuthorizerType: FormControl<CreateAuthorizerResponseAuthorizerType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		AuthorizerUri: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		IdentityValidationExpression: FormControl<string | null | undefined>,

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuthorizerRequestFormGroup() {
		return new FormGroup<CreateAuthorizerRequestFormProperties>({
			AuthorizerCredentialsArn: new FormControl<string | null | undefined>(undefined),
			AuthorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			AuthorizerType: new FormControl<CreateAuthorizerResponseAuthorizerType | null | undefined>(undefined),
			AuthorizerUri: new FormControl<string | null | undefined>(undefined),
			IdentityValidationExpression: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a new Deployment resource to represent a deployment. */
	export interface CreateDeploymentRequest {

		/** A string with a length between [0-1024]. */
		Description?: string | null;

		/** A string with a length between [1-128]. */
		StageName?: string | null;
	}

	/** Creates a new Deployment resource to represent a deployment. */
	export interface CreateDeploymentRequestFormProperties {

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		StageName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentRequestFormGroup() {
		return new FormGroup<CreateDeploymentRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			StageName: new FormControl<string | null | undefined>(undefined),
		});

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
		DomainNameConfigurations?: Array<DomainNameConfiguration>;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}

	/** Creates a new DomainName resource to represent a domain name. */
	export interface CreateDomainNameRequestFormProperties {

		/**
		 * A string with a length between [1-512].
		 * Required
		 */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainNameRequestFormGroup() {
		return new FormGroup<CreateDomainNameRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined),
		});

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

	/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
	export interface TlsConfigInputFormProperties {

		/** A string with a length between [1-512]. */
		ServerNameToVerify: FormControl<string | null | undefined>,
	}
	export function CreateTlsConfigInputFormGroup() {
		return new FormGroup<TlsConfigInputFormProperties>({
			ServerNameToVerify: new FormControl<string | null | undefined>(undefined),
		});

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
		RequestParameters?: IntegrationParameters;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		RequestTemplates?: TemplateMap;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis?: number | null;

		/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		TlsConfig?: TlsConfigInput;
	}

	/** Creates a new Integration resource to represent an integration. */
	export interface CreateIntegrationRequestFormProperties {

		/** A string with a length between [1-1024]. */
		ConnectionId: FormControl<string | null | undefined>,

		/** Represents a connection type. */
		ConnectionType: FormControl<CreateIntegrationResultConnectionType | null | undefined>,

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy: FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>,

		/** Represents an Amazon Resource Name (ARN). */
		CredentialsArn: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		IntegrationMethod: FormControl<string | null | undefined>,

		/**
		 * Represents an API method integration type.
		 * Required
		 */
		IntegrationType: FormControl<CreateIntegrationResultIntegrationType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		IntegrationUri: FormControl<string | null | undefined>,

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		PassthroughBehavior: FormControl<CreateIntegrationResultPassthroughBehavior | null | undefined>,

		/** A string with a length between [1-64]. */
		PayloadFormatVersion: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression: FormControl<string | null | undefined>,

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis: FormControl<number | null | undefined>,
	}
	export function CreateCreateIntegrationRequestFormGroup() {
		return new FormGroup<CreateIntegrationRequestFormProperties>({
			ConnectionId: new FormControl<string | null | undefined>(undefined),
			ConnectionType: new FormControl<CreateIntegrationResultConnectionType | null | undefined>(undefined),
			ContentHandlingStrategy: new FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>(undefined),
			CredentialsArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IntegrationMethod: new FormControl<string | null | undefined>(undefined),
			IntegrationType: new FormControl<CreateIntegrationResultIntegrationType | null | undefined>(undefined),
			IntegrationUri: new FormControl<string | null | undefined>(undefined),
			PassthroughBehavior: new FormControl<CreateIntegrationResultPassthroughBehavior | null | undefined>(undefined),
			PayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
			TimeoutInMillis: new FormControl<number | null | undefined>(undefined),
		});

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
		ResponseParameters?: IntegrationParameters;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		ResponseTemplates?: TemplateMap;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;
	}

	/** Creates a new IntegrationResponse resource to represent an integration response. */
	export interface CreateIntegrationResponseRequestFormProperties {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy: FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>,

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		IntegrationResponseKey: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateCreateIntegrationResponseRequestFormGroup() {
		return new FormGroup<CreateIntegrationResponseRequestFormProperties>({
			ContentHandlingStrategy: new FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>(undefined),
			IntegrationResponseKey: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Creates a new Model. */
	export interface CreateModelRequestFormProperties {

		/** A string with a length between [1-256]. */
		ContentType: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A string with a length between [0-32768].
		 * Required
		 */
		Schema: FormControl<string | null | undefined>,
	}
	export function CreateCreateModelRequestFormGroup() {
		return new FormGroup<CreateModelRequestFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Schema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a new Route resource to represent a route. */
	export interface CreateRouteRequest {
		ApiKeyRequired?: boolean | null;

		/** A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		AuthorizationScopes?: Array<string>;

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType?: CreateRouteResultAuthorizationType | null;

		/** The identifier. */
		AuthorizerId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** A string with a length between [1-64]. */
		OperationName?: string | null;

		/** The route models. */
		RequestModels?: RouteModels;

		/** The route parameters. */
		RequestParameters?: RouteParameters;

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

	/** Creates a new Route resource to represent a route. */
	export interface CreateRouteRequestFormProperties {
		ApiKeyRequired: FormControl<boolean | null | undefined>,

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType: FormControl<CreateRouteResultAuthorizationType | null | undefined>,

		/** The identifier. */
		AuthorizerId: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		OperationName: FormControl<string | null | undefined>,

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		RouteKey: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		Target: FormControl<string | null | undefined>,
	}
	export function CreateCreateRouteRequestFormGroup() {
		return new FormGroup<CreateRouteRequestFormProperties>({
			ApiKeyRequired: new FormControl<boolean | null | undefined>(undefined),
			AuthorizationType: new FormControl<CreateRouteResultAuthorizationType | null | undefined>(undefined),
			AuthorizerId: new FormControl<string | null | undefined>(undefined),
			ModelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			OperationName: new FormControl<string | null | undefined>(undefined),
			RouteKey: new FormControl<string | null | undefined>(undefined),
			RouteResponseSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a new RouteResponse resource to represent a route response. */
	export interface CreateRouteResponseRequest {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** The route models. */
		ResponseModels?: RouteModels;

		/** The route parameters. */
		ResponseParameters?: RouteParameters;

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		RouteResponseKey: string;
	}

	/** Creates a new RouteResponse resource to represent a route response. */
	export interface CreateRouteResponseRequestFormProperties {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression: FormControl<string | null | undefined>,

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		RouteResponseKey: FormControl<string | null | undefined>,
	}
	export function CreateCreateRouteResponseRequestFormGroup() {
		return new FormGroup<CreateRouteResponseRequestFormProperties>({
			ModelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			RouteResponseKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a new Stage resource to represent a stage. */
	export interface CreateStageRequest {

		/** Settings for logging access in a stage. */
		AccessLogSettings?: AccessLogSettings;
		AutoDeploy?: boolean | null;

		/** The identifier. */
		ClientCertificateId?: string | null;

		/** Represents a collection of route settings. */
		DefaultRouteSettings?: RouteSettings;

		/** The identifier. */
		DeploymentId?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;

		/** The route settings map. */
		RouteSettings?: RouteSettingsMap;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		StageName: string;

		/** The stage variable map. */
		StageVariables?: StageVariablesMap;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}

	/** Creates a new Stage resource to represent a stage. */
	export interface CreateStageRequestFormProperties {
		AutoDeploy: FormControl<boolean | null | undefined>,

		/** The identifier. */
		ClientCertificateId: FormControl<string | null | undefined>,

		/** The identifier. */
		DeploymentId: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		StageName: FormControl<string | null | undefined>,
	}
	export function CreateCreateStageRequestFormGroup() {
		return new FormGroup<CreateStageRequestFormProperties>({
			AutoDeploy: new FormControl<boolean | null | undefined>(undefined),
			ClientCertificateId: new FormControl<string | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			StageName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a VPC link */
	export interface CreateVpcLinkRequest {

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Name: string;

		/** A list of security group IDs for the VPC link. */
		SecurityGroupIds?: Array<string>;

		/**
		 * A list of subnet IDs to include in the VPC link.
		 * Required
		 */
		SubnetIds: Array<string>;

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}

	/** Creates a VPC link */
	export interface CreateVpcLinkRequestFormProperties {

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateVpcLinkRequestFormGroup() {
		return new FormGroup<CreateVpcLinkRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of the VPC link. */
	export enum VpcLinkStatus { PENDING = 0, AVAILABLE = 1, DELETING = 2, FAILED = 3, INACTIVE = 4 }


	/** The version of the VPC link. */
	export enum VpcLinkVersion { V2 = 0 }

	export interface DeleteAccessLogSettingsRequest {
	}
	export interface DeleteAccessLogSettingsRequestFormProperties {
	}
	export function CreateDeleteAccessLogSettingsRequestFormGroup() {
		return new FormGroup<DeleteAccessLogSettingsRequestFormProperties>({
		});

	}

	export interface DeleteApiMappingRequest {
	}
	export interface DeleteApiMappingRequestFormProperties {
	}
	export function CreateDeleteApiMappingRequestFormGroup() {
		return new FormGroup<DeleteApiMappingRequestFormProperties>({
		});

	}

	export interface DeleteApiRequest {
	}
	export interface DeleteApiRequestFormProperties {
	}
	export function CreateDeleteApiRequestFormGroup() {
		return new FormGroup<DeleteApiRequestFormProperties>({
		});

	}

	export interface DeleteAuthorizerRequest {
	}
	export interface DeleteAuthorizerRequestFormProperties {
	}
	export function CreateDeleteAuthorizerRequestFormGroup() {
		return new FormGroup<DeleteAuthorizerRequestFormProperties>({
		});

	}

	export interface DeleteCorsConfigurationRequest {
	}
	export interface DeleteCorsConfigurationRequestFormProperties {
	}
	export function CreateDeleteCorsConfigurationRequestFormGroup() {
		return new FormGroup<DeleteCorsConfigurationRequestFormProperties>({
		});

	}

	export interface DeleteDeploymentRequest {
	}
	export interface DeleteDeploymentRequestFormProperties {
	}
	export function CreateDeleteDeploymentRequestFormGroup() {
		return new FormGroup<DeleteDeploymentRequestFormProperties>({
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

	export interface DeleteIntegrationRequest {
	}
	export interface DeleteIntegrationRequestFormProperties {
	}
	export function CreateDeleteIntegrationRequestFormGroup() {
		return new FormGroup<DeleteIntegrationRequestFormProperties>({
		});

	}

	export interface DeleteIntegrationResponseRequest {
	}
	export interface DeleteIntegrationResponseRequestFormProperties {
	}
	export function CreateDeleteIntegrationResponseRequestFormGroup() {
		return new FormGroup<DeleteIntegrationResponseRequestFormProperties>({
		});

	}

	export interface DeleteModelRequest {
	}
	export interface DeleteModelRequestFormProperties {
	}
	export function CreateDeleteModelRequestFormGroup() {
		return new FormGroup<DeleteModelRequestFormProperties>({
		});

	}

	export interface DeleteRouteRequest {
	}
	export interface DeleteRouteRequestFormProperties {
	}
	export function CreateDeleteRouteRequestFormGroup() {
		return new FormGroup<DeleteRouteRequestFormProperties>({
		});

	}

	export interface DeleteRouteRequestParameterRequest {
	}
	export interface DeleteRouteRequestParameterRequestFormProperties {
	}
	export function CreateDeleteRouteRequestParameterRequestFormGroup() {
		return new FormGroup<DeleteRouteRequestParameterRequestFormProperties>({
		});

	}

	export interface DeleteRouteResponseRequest {
	}
	export interface DeleteRouteResponseRequestFormProperties {
	}
	export function CreateDeleteRouteResponseRequestFormGroup() {
		return new FormGroup<DeleteRouteResponseRequestFormProperties>({
		});

	}

	export interface DeleteRouteSettingsRequest {
	}
	export interface DeleteRouteSettingsRequestFormProperties {
	}
	export function CreateDeleteRouteSettingsRequestFormGroup() {
		return new FormGroup<DeleteRouteSettingsRequestFormProperties>({
		});

	}

	export interface DeleteStageRequest {
	}
	export interface DeleteStageRequestFormProperties {
	}
	export function CreateDeleteStageRequestFormGroup() {
		return new FormGroup<DeleteStageRequestFormProperties>({
		});

	}

	export interface DeleteVpcLinkRequest {
	}
	export interface DeleteVpcLinkRequestFormProperties {
	}
	export function CreateDeleteVpcLinkRequestFormGroup() {
		return new FormGroup<DeleteVpcLinkRequestFormProperties>({
		});

	}


	/** The status of the domain name migration. The valid values are AVAILABLE and UPDATING. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated. */
	export enum DomainNameStatus { AVAILABLE = 0, UPDATING = 1 }


	/** Represents an endpoint type. */
	export enum EndpointType { REGIONAL = 0, EDGE = 1 }


	/** The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2. */
	export enum SecurityPolicy { TLS_1_0 = 0, TLS_1_2 = 1 }

	export interface ExportApiRequest {
	}
	export interface ExportApiRequestFormProperties {
	}
	export function CreateExportApiRequestFormGroup() {
		return new FormGroup<ExportApiRequestFormProperties>({
		});

	}

	export interface GetApiMappingRequest {
	}
	export interface GetApiMappingRequestFormProperties {
	}
	export function CreateGetApiMappingRequestFormGroup() {
		return new FormGroup<GetApiMappingRequestFormProperties>({
		});

	}

	export interface GetApiMappingsRequest {
	}
	export interface GetApiMappingsRequestFormProperties {
	}
	export function CreateGetApiMappingsRequestFormGroup() {
		return new FormGroup<GetApiMappingsRequestFormProperties>({
		});

	}

	export interface GetApiRequest {
	}
	export interface GetApiRequestFormProperties {
	}
	export function CreateGetApiRequestFormGroup() {
		return new FormGroup<GetApiRequestFormProperties>({
		});

	}

	export interface GetApisRequest {
	}
	export interface GetApisRequestFormProperties {
	}
	export function CreateGetApisRequestFormGroup() {
		return new FormGroup<GetApisRequestFormProperties>({
		});

	}

	export interface GetAuthorizerRequest {
	}
	export interface GetAuthorizerRequestFormProperties {
	}
	export function CreateGetAuthorizerRequestFormGroup() {
		return new FormGroup<GetAuthorizerRequestFormProperties>({
		});

	}

	export interface GetAuthorizersRequest {
	}
	export interface GetAuthorizersRequestFormProperties {
	}
	export function CreateGetAuthorizersRequestFormGroup() {
		return new FormGroup<GetAuthorizersRequestFormProperties>({
		});

	}

	export interface GetDeploymentRequest {
	}
	export interface GetDeploymentRequestFormProperties {
	}
	export function CreateGetDeploymentRequestFormGroup() {
		return new FormGroup<GetDeploymentRequestFormProperties>({
		});

	}

	export interface GetDeploymentsRequest {
	}
	export interface GetDeploymentsRequestFormProperties {
	}
	export function CreateGetDeploymentsRequestFormGroup() {
		return new FormGroup<GetDeploymentsRequestFormProperties>({
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

	export interface GetDomainNamesRequest {
	}
	export interface GetDomainNamesRequestFormProperties {
	}
	export function CreateGetDomainNamesRequestFormGroup() {
		return new FormGroup<GetDomainNamesRequestFormProperties>({
		});

	}

	export interface GetIntegrationRequest {
	}
	export interface GetIntegrationRequestFormProperties {
	}
	export function CreateGetIntegrationRequestFormGroup() {
		return new FormGroup<GetIntegrationRequestFormProperties>({
		});

	}

	export interface GetIntegrationResponseRequest {
	}
	export interface GetIntegrationResponseRequestFormProperties {
	}
	export function CreateGetIntegrationResponseRequestFormGroup() {
		return new FormGroup<GetIntegrationResponseRequestFormProperties>({
		});

	}

	export interface GetIntegrationResponsesRequest {
	}
	export interface GetIntegrationResponsesRequestFormProperties {
	}
	export function CreateGetIntegrationResponsesRequestFormGroup() {
		return new FormGroup<GetIntegrationResponsesRequestFormProperties>({
		});

	}

	export interface GetIntegrationsRequest {
	}
	export interface GetIntegrationsRequestFormProperties {
	}
	export function CreateGetIntegrationsRequestFormGroup() {
		return new FormGroup<GetIntegrationsRequestFormProperties>({
		});

	}

	export interface GetModelRequest {
	}
	export interface GetModelRequestFormProperties {
	}
	export function CreateGetModelRequestFormGroup() {
		return new FormGroup<GetModelRequestFormProperties>({
		});

	}

	export interface GetModelTemplateRequest {
	}
	export interface GetModelTemplateRequestFormProperties {
	}
	export function CreateGetModelTemplateRequestFormGroup() {
		return new FormGroup<GetModelTemplateRequestFormProperties>({
		});

	}

	export interface GetModelsRequest {
	}
	export interface GetModelsRequestFormProperties {
	}
	export function CreateGetModelsRequestFormGroup() {
		return new FormGroup<GetModelsRequestFormProperties>({
		});

	}

	export interface GetRouteRequest {
	}
	export interface GetRouteRequestFormProperties {
	}
	export function CreateGetRouteRequestFormGroup() {
		return new FormGroup<GetRouteRequestFormProperties>({
		});

	}

	export interface GetRouteResponseRequest {
	}
	export interface GetRouteResponseRequestFormProperties {
	}
	export function CreateGetRouteResponseRequestFormGroup() {
		return new FormGroup<GetRouteResponseRequestFormProperties>({
		});

	}

	export interface GetRouteResponsesRequest {
	}
	export interface GetRouteResponsesRequestFormProperties {
	}
	export function CreateGetRouteResponsesRequestFormGroup() {
		return new FormGroup<GetRouteResponsesRequestFormProperties>({
		});

	}

	export interface GetRoutesRequest {
	}
	export interface GetRoutesRequestFormProperties {
	}
	export function CreateGetRoutesRequestFormGroup() {
		return new FormGroup<GetRoutesRequestFormProperties>({
		});

	}

	export interface GetStageRequest {
	}
	export interface GetStageRequestFormProperties {
	}
	export function CreateGetStageRequestFormGroup() {
		return new FormGroup<GetStageRequestFormProperties>({
		});

	}

	export interface GetStagesRequest {
	}
	export interface GetStagesRequestFormProperties {
	}
	export function CreateGetStagesRequestFormGroup() {
		return new FormGroup<GetStagesRequestFormProperties>({
		});

	}

	export interface GetTagsRequest {
	}
	export interface GetTagsRequestFormProperties {
	}
	export function CreateGetTagsRequestFormGroup() {
		return new FormGroup<GetTagsRequestFormProperties>({
		});

	}

	export interface GetVpcLinkRequest {
	}
	export interface GetVpcLinkRequestFormProperties {
	}
	export function CreateGetVpcLinkRequestFormGroup() {
		return new FormGroup<GetVpcLinkRequestFormProperties>({
		});

	}

	export interface GetVpcLinksRequest {
	}
	export interface GetVpcLinksRequestFormProperties {
	}
	export function CreateGetVpcLinksRequestFormGroup() {
		return new FormGroup<GetVpcLinksRequestFormProperties>({
		});

	}

	export interface ImportApiRequest {
		Body: string;
	}
	export interface ImportApiRequestFormProperties {
		Body: FormControl<string | null | undefined>,
	}
	export function CreateImportApiRequestFormGroup() {
		return new FormGroup<ImportApiRequestFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReimportApiRequest {
		Body: string;
	}
	export interface ReimportApiRequestFormProperties {
		Body: FormControl<string | null | undefined>,
	}
	export function CreateReimportApiRequestFormGroup() {
		return new FormGroup<ReimportApiRequestFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a new Tag resource to represent a tag. */
	export interface TagResourceRequest {

		/** Represents a collection of tags associated with the resource. */
		Tags?: Tags;
	}

	/** Creates a new Tag resource to represent a tag. */
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

	/** Updates an ApiMapping. */
	export interface UpdateApiMappingRequestFormProperties {

		/**
		 * The identifier.
		 * Required
		 */
		ApiId: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		ApiMappingKey: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		Stage: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApiMappingRequestFormGroup() {
		return new FormGroup<UpdateApiMappingRequestFormProperties>({
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiMappingKey: new FormControl<string | null | undefined>(undefined),
			Stage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates an Api. */
	export interface UpdateApiRequest {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression?: string | null;

		/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		CorsConfiguration?: Cors;

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

	/** Updates an Api. */
	export interface UpdateApiRequestFormProperties {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ApiKeySelectionExpression: FormControl<string | null | undefined>,

		/** Represents an Amazon Resource Name (ARN). */
		CredentialsArn: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,
		DisableSchemaValidation: FormControl<boolean | null | undefined>,

		/** A string with a length between [1-128]. */
		Name: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteSelectionExpression: FormControl<string | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		Target: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		Version: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApiRequestFormGroup() {
		return new FormGroup<UpdateApiRequestFormProperties>({
			ApiKeySelectionExpression: new FormControl<string | null | undefined>(undefined),
			CredentialsArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisableSchemaValidation: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RouteKey: new FormControl<string | null | undefined>(undefined),
			RouteSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

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
		IdentitySource?: Array<string>;

		/** A string with a length between [0-1024]. */
		IdentityValidationExpression?: string | null;

		/** Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		JwtConfiguration?: JWTConfiguration;

		/** A string with a length between [1-128]. */
		Name?: string | null;
	}

	/** Updates an Authorizer. */
	export interface UpdateAuthorizerRequestFormProperties {

		/** Represents an Amazon Resource Name (ARN). */
		AuthorizerCredentialsArn: FormControl<string | null | undefined>,

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		AuthorizerResultTtlInSeconds: FormControl<number | null | undefined>,

		/** The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
		AuthorizerType: FormControl<CreateAuthorizerResponseAuthorizerType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		AuthorizerUri: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		IdentityValidationExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAuthorizerRequestFormGroup() {
		return new FormGroup<UpdateAuthorizerRequestFormProperties>({
			AuthorizerCredentialsArn: new FormControl<string | null | undefined>(undefined),
			AuthorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			AuthorizerType: new FormControl<CreateAuthorizerResponseAuthorizerType | null | undefined>(undefined),
			AuthorizerUri: new FormControl<string | null | undefined>(undefined),
			IdentityValidationExpression: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates a Deployment. */
	export interface UpdateDeploymentRequest {

		/** A string with a length between [0-1024]. */
		Description?: string | null;
	}

	/** Updates a Deployment. */
	export interface UpdateDeploymentRequestFormProperties {

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeploymentRequestFormGroup() {
		return new FormGroup<UpdateDeploymentRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates a DomainName. */
	export interface UpdateDomainNameRequest {

		/** The domain name configurations. */
		DomainNameConfigurations?: Array<DomainNameConfiguration>;
	}

	/** Updates a DomainName. */
	export interface UpdateDomainNameRequestFormProperties {
	}
	export function CreateUpdateDomainNameRequestFormGroup() {
		return new FormGroup<UpdateDomainNameRequestFormProperties>({
		});

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
		RequestParameters?: IntegrationParameters;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		RequestTemplates?: TemplateMap;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis?: number | null;

		/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		TlsConfig?: TlsConfigInput;
	}

	/** Updates an Integration. */
	export interface UpdateIntegrationRequestFormProperties {

		/** A string with a length between [1-1024]. */
		ConnectionId: FormControl<string | null | undefined>,

		/** Represents a connection type. */
		ConnectionType: FormControl<CreateIntegrationResultConnectionType | null | undefined>,

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy: FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>,

		/** Represents an Amazon Resource Name (ARN). */
		CredentialsArn: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		IntegrationMethod: FormControl<string | null | undefined>,

		/** Represents an API method integration type. */
		IntegrationType: FormControl<CreateIntegrationResultIntegrationType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		IntegrationUri: FormControl<string | null | undefined>,

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		PassthroughBehavior: FormControl<CreateIntegrationResultPassthroughBehavior | null | undefined>,

		/** A string with a length between [1-64]. */
		PayloadFormatVersion: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression: FormControl<string | null | undefined>,

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		TimeoutInMillis: FormControl<number | null | undefined>,
	}
	export function CreateUpdateIntegrationRequestFormGroup() {
		return new FormGroup<UpdateIntegrationRequestFormProperties>({
			ConnectionId: new FormControl<string | null | undefined>(undefined),
			ConnectionType: new FormControl<CreateIntegrationResultConnectionType | null | undefined>(undefined),
			ContentHandlingStrategy: new FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>(undefined),
			CredentialsArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IntegrationMethod: new FormControl<string | null | undefined>(undefined),
			IntegrationType: new FormControl<CreateIntegrationResultIntegrationType | null | undefined>(undefined),
			IntegrationUri: new FormControl<string | null | undefined>(undefined),
			PassthroughBehavior: new FormControl<CreateIntegrationResultPassthroughBehavior | null | undefined>(undefined),
			PayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
			TimeoutInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Updates an IntegrationResponses. */
	export interface UpdateIntegrationResponseRequest {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		IntegrationResponseKey?: string | null;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		ResponseParameters?: IntegrationParameters;

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		ResponseTemplates?: TemplateMap;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression?: string | null;
	}

	/** Updates an IntegrationResponses. */
	export interface UpdateIntegrationResponseRequestFormProperties {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		ContentHandlingStrategy: FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		IntegrationResponseKey: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		TemplateSelectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIntegrationResponseRequestFormGroup() {
		return new FormGroup<UpdateIntegrationResponseRequestFormProperties>({
			ContentHandlingStrategy: new FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>(undefined),
			IntegrationResponseKey: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Updates a Model. */
	export interface UpdateModelRequestFormProperties {

		/** A string with a length between [1-256]. */
		ContentType: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		Name: FormControl<string | null | undefined>,

		/** A string with a length between [0-32768]. */
		Schema: FormControl<string | null | undefined>,
	}
	export function CreateUpdateModelRequestFormGroup() {
		return new FormGroup<UpdateModelRequestFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Schema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates a Route. */
	export interface UpdateRouteRequest {
		ApiKeyRequired?: boolean | null;

		/** A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		AuthorizationScopes?: Array<string>;

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType?: CreateRouteResultAuthorizationType | null;

		/** The identifier. */
		AuthorizerId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** A string with a length between [1-64]. */
		OperationName?: string | null;

		/** The route models. */
		RequestModels?: RouteModels;

		/** The route parameters. */
		RequestParameters?: RouteParameters;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression?: string | null;

		/** A string with a length between [1-128]. */
		Target?: string | null;
	}

	/** Updates a Route. */
	export interface UpdateRouteRequestFormProperties {
		ApiKeyRequired: FormControl<boolean | null | undefined>,

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		AuthorizationType: FormControl<CreateRouteResultAuthorizationType | null | undefined>,

		/** The identifier. */
		AuthorizerId: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		OperationName: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteKey: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		RouteResponseSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		Target: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRouteRequestFormGroup() {
		return new FormGroup<UpdateRouteRequestFormProperties>({
			ApiKeyRequired: new FormControl<boolean | null | undefined>(undefined),
			AuthorizationType: new FormControl<CreateRouteResultAuthorizationType | null | undefined>(undefined),
			AuthorizerId: new FormControl<string | null | undefined>(undefined),
			ModelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			OperationName: new FormControl<string | null | undefined>(undefined),
			RouteKey: new FormControl<string | null | undefined>(undefined),
			RouteResponseSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates a RouteResponse. */
	export interface UpdateRouteResponseRequest {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression?: string | null;

		/** The route models. */
		ResponseModels?: RouteModels;

		/** The route parameters. */
		ResponseParameters?: RouteParameters;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteResponseKey?: string | null;
	}

	/** Updates a RouteResponse. */
	export interface UpdateRouteResponseRequestFormProperties {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		ModelSelectionExpression: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		RouteResponseKey: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRouteResponseRequestFormGroup() {
		return new FormGroup<UpdateRouteResponseRequestFormProperties>({
			ModelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			RouteResponseKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates a Stage. */
	export interface UpdateStageRequest {

		/** Settings for logging access in a stage. */
		AccessLogSettings?: AccessLogSettings;
		AutoDeploy?: boolean | null;

		/** The identifier. */
		ClientCertificateId?: string | null;

		/** Represents a collection of route settings. */
		DefaultRouteSettings?: RouteSettings;

		/** The identifier. */
		DeploymentId?: string | null;

		/** A string with a length between [0-1024]. */
		Description?: string | null;

		/** The route settings map. */
		RouteSettings?: RouteSettingsMap;

		/** The stage variable map. */
		StageVariables?: StageVariablesMap;
	}

	/** Updates a Stage. */
	export interface UpdateStageRequestFormProperties {
		AutoDeploy: FormControl<boolean | null | undefined>,

		/** The identifier. */
		ClientCertificateId: FormControl<string | null | undefined>,

		/** The identifier. */
		DeploymentId: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStageRequestFormGroup() {
		return new FormGroup<UpdateStageRequestFormProperties>({
			AutoDeploy: new FormControl<boolean | null | undefined>(undefined),
			ClientCertificateId: new FormControl<string | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates a VPC link. */
	export interface UpdateVpcLinkRequest {

		/** A string with a length between [1-128]. */
		Name?: string | null;
	}

	/** Updates a VPC link. */
	export interface UpdateVpcLinkRequestFormProperties {

		/** A string with a length between [1-128]. */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVpcLinkRequestFormGroup() {
		return new FormGroup<UpdateVpcLinkRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

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
		GetApis(maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<GetApisResponse> {
			return this.http.get<GetApisResponse>(this.baseUri + 'v2/apis?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Imports an API.
		 * Put v2/apis
		 * @param {string} basepath Specifies how to interpret the base path of the API during import. Valid values are ignore, prepend, and split. The default value is ignore. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html">Set the OpenAPI basePath Property</a>. Supported only for HTTP APIs.
		 * @param {boolean} failOnWarnings Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.
		 * @return {void} 
		 */
		ImportApi(basepath: string | null | undefined, failOnWarnings: boolean | null | undefined, requestBody: ImportApiPutBody): Observable<HttpResponse<string>> {
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
		GetApiMappings(domainName: string, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<GetApiMappingsResponse> {
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
		GetAuthorizers(apiId: string, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<GetAuthorizersResponse> {
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
		GetDeployments(apiId: string, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<GetDeploymentsResponse> {
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
		GetDomainNames(maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<GetDomainNamesResponse> {
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
		GetIntegrations(apiId: string, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<GetIntegrationsResponse> {
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
		GetIntegrationResponses(apiId: string, integrationId: string, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<GetIntegrationResponsesResponse> {
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
		GetModels(apiId: string, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<GetModelsResponse> {
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
		GetRoutes(apiId: string, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<GetRoutesResponse> {
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
		GetRouteResponses(apiId: string, maxResults: string | null | undefined, nextToken: string | null | undefined, routeId: string): Observable<GetRouteResponsesResponse> {
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
		GetStages(apiId: string, maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<GetStagesResponse> {
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
		GetVpcLinks(maxResults: string | null | undefined, nextToken: string | null | undefined): Observable<GetVpcLinksResponse> {
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
		ReimportApi(apiId: string, basepath: string | null | undefined, failOnWarnings: boolean | null | undefined, requestBody: ReimportApiPutBody): Observable<HttpResponse<string>> {
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
		ExportApi(apiId: string, exportVersion: string | null | undefined, includeExtensions: boolean | null | undefined, outputType: string, specification: string, stageName: string | null | undefined): Observable<ExportApiResponse> {
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
		corsConfiguration?: CreateApiPostBodyCorsConfiguration;

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
		tags?: {[id: string]: string };

		/** A string representation of a URI with a length between [1-2048]. */
		target?: string | null;

		/** A string with a length between [1-64]. */
		version?: string | null;
	}
	export interface CreateApiPostBodyFormProperties {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		apiKeySelectionExpression: FormControl<string | null | undefined>,

		/** Represents an Amazon Resource Name (ARN). */
		credentialsArn: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		description: FormControl<string | null | undefined>,

		/** Avoid validating models when creating a deployment. Supported only for WebSocket APIs. */
		disableSchemaValidation: FormControl<boolean | null | undefined>,

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Represents a protocol type.
		 * Required
		 */
		protocolType: FormControl<CreateApiResponseProtocolType | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		routeKey: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		routeSelectionExpression: FormControl<string | null | undefined>,

		/** Represents a collection of tags associated with the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		target: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateCreateApiPostBodyFormGroup() {
		return new FormGroup<CreateApiPostBodyFormProperties>({
			apiKeySelectionExpression: new FormControl<string | null | undefined>(undefined),
			credentialsArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			disableSchemaValidation: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protocolType: new FormControl<CreateApiResponseProtocolType | null | undefined>(undefined),
			routeKey: new FormControl<string | null | undefined>(undefined),
			routeSelectionExpression: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateApiPostBodyCorsConfiguration {
		AllowCredentials?: boolean | null;

		/** Represents a collection of allowed headers. Supported only for HTTP APIs. */
		AllowHeaders?: Array<string>;

		/** Represents a collection of methods. Supported only for HTTP APIs. */
		AllowMethods?: Array<string>;

		/** Represents a collection of origins. Supported only for HTTP APIs. */
		AllowOrigins?: Array<string>;

		/** Represents a collection of allowed headers. Supported only for HTTP APIs. */
		ExposeHeaders?: Array<string>;

		/**
		 * An integer with a value between -1 and 86400. Supported only for HTTP APIs.
		 * Minimum: -1
		 * Maximum: 86400
		 */
		MaxAge?: number | null;
	}
	export interface CreateApiPostBodyCorsConfigurationFormProperties {
		AllowCredentials: FormControl<boolean | null | undefined>,

		/**
		 * An integer with a value between -1 and 86400. Supported only for HTTP APIs.
		 * Minimum: -1
		 * Maximum: 86400
		 */
		MaxAge: FormControl<number | null | undefined>,
	}
	export function CreateCreateApiPostBodyCorsConfigurationFormGroup() {
		return new FormGroup<CreateApiPostBodyCorsConfigurationFormProperties>({
			AllowCredentials: new FormControl<boolean | null | undefined>(undefined),
			MaxAge: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ImportApiPutBody {

		/**
		 * The OpenAPI definition. Supported only for HTTP APIs.
		 * Required
		 */
		body: string;
	}
	export interface ImportApiPutBodyFormProperties {

		/**
		 * The OpenAPI definition. Supported only for HTTP APIs.
		 * Required
		 */
		body: FormControl<string | null | undefined>,
	}
	export function CreateImportApiPutBodyFormGroup() {
		return new FormGroup<ImportApiPutBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface CreateApiMappingPostBodyFormProperties {

		/**
		 * The identifier.
		 * Required
		 */
		apiId: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		apiMappingKey: FormControl<string | null | undefined>,

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		stage: FormControl<string | null | undefined>,
	}
	export function CreateCreateApiMappingPostBodyFormGroup() {
		return new FormGroup<CreateApiMappingPostBodyFormProperties>({
			apiId: new FormControl<string | null | undefined>(undefined),
			apiMappingKey: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<string | null | undefined>(undefined),
		});

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
		jwtConfiguration?: CreateAuthorizerPostBodyJwtConfiguration;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		name: string;
	}
	export interface CreateAuthorizerPostBodyFormProperties {

		/** Represents an Amazon Resource Name (ARN). */
		authorizerCredentialsArn: FormControl<string | null | undefined>,

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		authorizerResultTtlInSeconds: FormControl<number | null | undefined>,

		/**
		 * The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens.
		 * Required
		 */
		authorizerType: FormControl<CreateAuthorizerResponseAuthorizerType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		authorizerUri: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		identityValidationExpression: FormControl<string | null | undefined>,

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuthorizerPostBodyFormGroup() {
		return new FormGroup<CreateAuthorizerPostBodyFormProperties>({
			authorizerCredentialsArn: new FormControl<string | null | undefined>(undefined),
			authorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			authorizerType: new FormControl<CreateAuthorizerResponseAuthorizerType | null | undefined>(undefined),
			authorizerUri: new FormControl<string | null | undefined>(undefined),
			identityValidationExpression: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAuthorizerPostBodyJwtConfiguration {
		Audience?: Array<string>;

		/** A string representation of a URI with a length between [1-2048]. */
		Issuer?: string | null;
	}
	export interface CreateAuthorizerPostBodyJwtConfigurationFormProperties {

		/** A string representation of a URI with a length between [1-2048]. */
		Issuer: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuthorizerPostBodyJwtConfigurationFormGroup() {
		return new FormGroup<CreateAuthorizerPostBodyJwtConfigurationFormProperties>({
			Issuer: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeploymentPostBody {

		/** A string with a length between [0-1024]. */
		description?: string | null;

		/** A string with a length between [1-128]. */
		stageName?: string | null;
	}
	export interface CreateDeploymentPostBodyFormProperties {

		/** A string with a length between [0-1024]. */
		description: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		stageName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentPostBodyFormGroup() {
		return new FormGroup<CreateDeploymentPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			stageName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDomainNamePostBody {

		/**
		 * A string with a length between [1-512].
		 * Required
		 */
		domainName: string;

		/** The domain name configurations. */
		domainNameConfigurations?: Array<DomainNameConfiguration>;

		/** Represents a collection of tags associated with the resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateDomainNamePostBodyFormProperties {

		/**
		 * A string with a length between [1-512].
		 * Required
		 */
		domainName: FormControl<string | null | undefined>,

		/** Represents a collection of tags associated with the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDomainNamePostBodyFormGroup() {
		return new FormGroup<CreateDomainNamePostBodyFormProperties>({
			domainName: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

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
		requestParameters?: {[id: string]: string };

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		requestTemplates?: {[id: string]: string };

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		templateSelectionExpression?: string | null;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		timeoutInMillis?: number | null;

		/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		tlsConfig?: CreateIntegrationPostBodyTlsConfig;
	}
	export interface CreateIntegrationPostBodyFormProperties {

		/** A string with a length between [1-1024]. */
		connectionId: FormControl<string | null | undefined>,

		/** Represents a connection type. */
		connectionType: FormControl<CreateIntegrationResultConnectionType | null | undefined>,

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		contentHandlingStrategy: FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>,

		/** Represents an Amazon Resource Name (ARN). */
		credentialsArn: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		description: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		integrationMethod: FormControl<string | null | undefined>,

		/**
		 * Represents an API method integration type.
		 * Required
		 */
		integrationType: FormControl<CreateIntegrationResultIntegrationType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		integrationUri: FormControl<string | null | undefined>,

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		passthroughBehavior: FormControl<CreateIntegrationResultPassthroughBehavior | null | undefined>,

		/** A string with a length between [1-64]. */
		payloadFormatVersion: FormControl<string | null | undefined>,

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		requestParameters: FormControl<{[id: string]: string } | null | undefined>,

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		requestTemplates: FormControl<{[id: string]: string } | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		templateSelectionExpression: FormControl<string | null | undefined>,

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		timeoutInMillis: FormControl<number | null | undefined>,
	}
	export function CreateCreateIntegrationPostBodyFormGroup() {
		return new FormGroup<CreateIntegrationPostBodyFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined),
			connectionType: new FormControl<CreateIntegrationResultConnectionType | null | undefined>(undefined),
			contentHandlingStrategy: new FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>(undefined),
			credentialsArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			integrationMethod: new FormControl<string | null | undefined>(undefined),
			integrationType: new FormControl<CreateIntegrationResultIntegrationType | null | undefined>(undefined),
			integrationUri: new FormControl<string | null | undefined>(undefined),
			passthroughBehavior: new FormControl<CreateIntegrationResultPassthroughBehavior | null | undefined>(undefined),
			payloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			requestParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			requestTemplates: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			templateSelectionExpression: new FormControl<string | null | undefined>(undefined),
			timeoutInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateIntegrationPostBodyTlsConfig {

		/** A string with a length between [1-512]. */
		ServerNameToVerify?: string | null;
	}
	export interface CreateIntegrationPostBodyTlsConfigFormProperties {

		/** A string with a length between [1-512]. */
		ServerNameToVerify: FormControl<string | null | undefined>,
	}
	export function CreateCreateIntegrationPostBodyTlsConfigFormGroup() {
		return new FormGroup<CreateIntegrationPostBodyTlsConfigFormProperties>({
			ServerNameToVerify: new FormControl<string | null | undefined>(undefined),
		});

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
		responseParameters?: {[id: string]: string };

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		responseTemplates?: {[id: string]: string };

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		templateSelectionExpression?: string | null;
	}
	export interface CreateIntegrationResponsePostBodyFormProperties {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		contentHandlingStrategy: FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>,

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		integrationResponseKey: FormControl<string | null | undefined>,

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		responseParameters: FormControl<{[id: string]: string } | null | undefined>,

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		responseTemplates: FormControl<{[id: string]: string } | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		templateSelectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateCreateIntegrationResponsePostBodyFormGroup() {
		return new FormGroup<CreateIntegrationResponsePostBodyFormProperties>({
			contentHandlingStrategy: new FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>(undefined),
			integrationResponseKey: new FormControl<string | null | undefined>(undefined),
			responseParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			responseTemplates: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			templateSelectionExpression: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface CreateModelPostBodyFormProperties {

		/** A string with a length between [1-256]. */
		contentType: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		description: FormControl<string | null | undefined>,

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A string with a length between [0-32768].
		 * Required
		 */
		schema: FormControl<string | null | undefined>,
	}
	export function CreateCreateModelPostBodyFormGroup() {
		return new FormGroup<CreateModelPostBodyFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRoutePostBody {

		/** Specifies whether an API key is required for the route. Supported only for WebSocket APIs. */
		apiKeyRequired?: boolean | null;

		/** A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		authorizationScopes?: Array<string>;

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		authorizationType?: CreateRouteResultAuthorizationType | null;

		/** The identifier. */
		authorizerId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		modelSelectionExpression?: string | null;

		/** A string with a length between [1-64]. */
		operationName?: string | null;

		/** The route models. */
		requestModels?: {[id: string]: string };

		/** The route parameters. */
		requestParameters?: {[id: string]: ParameterConstraints };

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
	export interface CreateRoutePostBodyFormProperties {

		/** Specifies whether an API key is required for the route. Supported only for WebSocket APIs. */
		apiKeyRequired: FormControl<boolean | null | undefined>,

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		authorizationType: FormControl<CreateRouteResultAuthorizationType | null | undefined>,

		/** The identifier. */
		authorizerId: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		modelSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		operationName: FormControl<string | null | undefined>,

		/** The route models. */
		requestModels: FormControl<{[id: string]: string } | null | undefined>,

		/** The route parameters. */
		requestParameters: FormControl<{[id: string]: ParameterConstraints } | null | undefined>,

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		routeKey: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		routeResponseSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCreateRoutePostBodyFormGroup() {
		return new FormGroup<CreateRoutePostBodyFormProperties>({
			apiKeyRequired: new FormControl<boolean | null | undefined>(undefined),
			authorizationType: new FormControl<CreateRouteResultAuthorizationType | null | undefined>(undefined),
			authorizerId: new FormControl<string | null | undefined>(undefined),
			modelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
			requestModels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			requestParameters: new FormControl<{[id: string]: ParameterConstraints } | null | undefined>(undefined),
			routeKey: new FormControl<string | null | undefined>(undefined),
			routeResponseSelectionExpression: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRouteResponsePostBody {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		modelSelectionExpression?: string | null;

		/** The route models. */
		responseModels?: {[id: string]: string };

		/** The route parameters. */
		responseParameters?: {[id: string]: ParameterConstraints };

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		routeResponseKey: string;
	}
	export interface CreateRouteResponsePostBodyFormProperties {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		modelSelectionExpression: FormControl<string | null | undefined>,

		/** The route models. */
		responseModels: FormControl<{[id: string]: string } | null | undefined>,

		/** The route parameters. */
		responseParameters: FormControl<{[id: string]: ParameterConstraints } | null | undefined>,

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		routeResponseKey: FormControl<string | null | undefined>,
	}
	export function CreateCreateRouteResponsePostBodyFormGroup() {
		return new FormGroup<CreateRouteResponsePostBodyFormProperties>({
			modelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			responseModels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			responseParameters: new FormControl<{[id: string]: ParameterConstraints } | null | undefined>(undefined),
			routeResponseKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateStagePostBody {

		/** Settings for logging access in a stage. */
		accessLogSettings?: CreateStagePostBodyAccessLogSettings;

		/** Specifies whether updates to an API automatically trigger a new deployment. The default value is false. */
		autoDeploy?: boolean | null;

		/** The identifier. */
		clientCertificateId?: string | null;

		/** Represents a collection of route settings. */
		defaultRouteSettings?: CreateStagePostBodyDefaultRouteSettings;

		/** The identifier. */
		deploymentId?: string | null;

		/** A string with a length between [0-1024]. */
		description?: string | null;

		/** The route settings map. */
		routeSettings?: {[id: string]: RouteSettings };

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		stageName: string;

		/** The stage variable map. */
		stageVariables?: {[id: string]: string };

		/** Represents a collection of tags associated with the resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateStagePostBodyFormProperties {

		/** Specifies whether updates to an API automatically trigger a new deployment. The default value is false. */
		autoDeploy: FormControl<boolean | null | undefined>,

		/** The identifier. */
		clientCertificateId: FormControl<string | null | undefined>,

		/** The identifier. */
		deploymentId: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		description: FormControl<string | null | undefined>,

		/** The route settings map. */
		routeSettings: FormControl<{[id: string]: RouteSettings } | null | undefined>,

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		stageName: FormControl<string | null | undefined>,

		/** The stage variable map. */
		stageVariables: FormControl<{[id: string]: string } | null | undefined>,

		/** Represents a collection of tags associated with the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateStagePostBodyFormGroup() {
		return new FormGroup<CreateStagePostBodyFormProperties>({
			autoDeploy: new FormControl<boolean | null | undefined>(undefined),
			clientCertificateId: new FormControl<string | null | undefined>(undefined),
			deploymentId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			routeSettings: new FormControl<{[id: string]: RouteSettings } | null | undefined>(undefined),
			stageName: new FormControl<string | null | undefined>(undefined),
			stageVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateStagePostBodyAccessLogSettings {

		/** Represents an Amazon Resource Name (ARN). */
		DestinationArn?: string | null;

		/** A string with a length between [1-1024]. */
		Format?: string | null;
	}
	export interface CreateStagePostBodyAccessLogSettingsFormProperties {

		/** Represents an Amazon Resource Name (ARN). */
		DestinationArn: FormControl<string | null | undefined>,

		/** A string with a length between [1-1024]. */
		Format: FormControl<string | null | undefined>,
	}
	export function CreateCreateStagePostBodyAccessLogSettingsFormGroup() {
		return new FormGroup<CreateStagePostBodyAccessLogSettingsFormProperties>({
			DestinationArn: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateStagePostBodyDefaultRouteSettings {
		DataTraceEnabled?: boolean | null;
		DetailedMetricsEnabled?: boolean | null;

		/** The logging level. */
		LoggingLevel?: RouteSettingsLoggingLevel | null;
		ThrottlingBurstLimit?: number | null;
		ThrottlingRateLimit?: number | null;
	}
	export interface CreateStagePostBodyDefaultRouteSettingsFormProperties {
		DataTraceEnabled: FormControl<boolean | null | undefined>,
		DetailedMetricsEnabled: FormControl<boolean | null | undefined>,

		/** The logging level. */
		LoggingLevel: FormControl<RouteSettingsLoggingLevel | null | undefined>,
		ThrottlingBurstLimit: FormControl<number | null | undefined>,
		ThrottlingRateLimit: FormControl<number | null | undefined>,
	}
	export function CreateCreateStagePostBodyDefaultRouteSettingsFormGroup() {
		return new FormGroup<CreateStagePostBodyDefaultRouteSettingsFormProperties>({
			DataTraceEnabled: new FormControl<boolean | null | undefined>(undefined),
			DetailedMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			LoggingLevel: new FormControl<RouteSettingsLoggingLevel | null | undefined>(undefined),
			ThrottlingBurstLimit: new FormControl<number | null | undefined>(undefined),
			ThrottlingRateLimit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateVpcLinkPostBody {

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		name: string;

		/** A list of security group IDs for the VPC link. */
		securityGroupIds?: Array<string>;

		/**
		 * A list of subnet IDs to include in the VPC link.
		 * Required
		 */
		subnetIds: Array<string>;

		/** Represents a collection of tags associated with the resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateVpcLinkPostBodyFormProperties {

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Represents a collection of tags associated with the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateVpcLinkPostBodyFormGroup() {
		return new FormGroup<CreateVpcLinkPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface ReimportApiPutBody {

		/**
		 * The OpenAPI definition. Supported only for HTTP APIs.
		 * Required
		 */
		body: string;
	}
	export interface ReimportApiPutBodyFormProperties {

		/**
		 * The OpenAPI definition. Supported only for HTTP APIs.
		 * Required
		 */
		body: FormControl<string | null | undefined>,
	}
	export function CreateReimportApiPutBodyFormGroup() {
		return new FormGroup<ReimportApiPutBodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateApiPatchBody {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		apiKeySelectionExpression?: string | null;

		/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
		corsConfiguration?: UpdateApiPatchBodyCorsConfiguration;

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
	export interface UpdateApiPatchBodyFormProperties {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		apiKeySelectionExpression: FormControl<string | null | undefined>,

		/** Represents an Amazon Resource Name (ARN). */
		credentialsArn: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		description: FormControl<string | null | undefined>,

		/** Avoid validating models when creating a deployment. Supported only for WebSocket APIs. */
		disableSchemaValidation: FormControl<boolean | null | undefined>,

		/** A string with a length between [1-128]. */
		name: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		routeKey: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		routeSelectionExpression: FormControl<string | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		target: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApiPatchBodyFormGroup() {
		return new FormGroup<UpdateApiPatchBodyFormProperties>({
			apiKeySelectionExpression: new FormControl<string | null | undefined>(undefined),
			credentialsArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			disableSchemaValidation: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			routeKey: new FormControl<string | null | undefined>(undefined),
			routeSelectionExpression: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateApiPatchBodyCorsConfiguration {
		AllowCredentials?: boolean | null;

		/** Represents a collection of allowed headers. Supported only for HTTP APIs. */
		AllowHeaders?: Array<string>;

		/** Represents a collection of methods. Supported only for HTTP APIs. */
		AllowMethods?: Array<string>;

		/** Represents a collection of origins. Supported only for HTTP APIs. */
		AllowOrigins?: Array<string>;

		/** Represents a collection of allowed headers. Supported only for HTTP APIs. */
		ExposeHeaders?: Array<string>;

		/**
		 * An integer with a value between -1 and 86400. Supported only for HTTP APIs.
		 * Minimum: -1
		 * Maximum: 86400
		 */
		MaxAge?: number | null;
	}
	export interface UpdateApiPatchBodyCorsConfigurationFormProperties {
		AllowCredentials: FormControl<boolean | null | undefined>,

		/**
		 * An integer with a value between -1 and 86400. Supported only for HTTP APIs.
		 * Minimum: -1
		 * Maximum: 86400
		 */
		MaxAge: FormControl<number | null | undefined>,
	}
	export function CreateUpdateApiPatchBodyCorsConfigurationFormGroup() {
		return new FormGroup<UpdateApiPatchBodyCorsConfigurationFormProperties>({
			AllowCredentials: new FormControl<boolean | null | undefined>(undefined),
			MaxAge: new FormControl<number | null | undefined>(undefined),
		});

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
	export interface UpdateApiMappingPatchBodyFormProperties {

		/**
		 * The identifier.
		 * Required
		 */
		apiId: FormControl<string | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		apiMappingKey: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		stage: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApiMappingPatchBodyFormGroup() {
		return new FormGroup<UpdateApiMappingPatchBodyFormProperties>({
			apiId: new FormControl<string | null | undefined>(undefined),
			apiMappingKey: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<string | null | undefined>(undefined),
		});

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
		identitySource?: Array<string>;

		/** A string with a length between [0-1024]. */
		identityValidationExpression?: string | null;

		/** Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
		jwtConfiguration?: UpdateAuthorizerPatchBodyJwtConfiguration;

		/** A string with a length between [1-128]. */
		name?: string | null;
	}
	export interface UpdateAuthorizerPatchBodyFormProperties {

		/** Represents an Amazon Resource Name (ARN). */
		authorizerCredentialsArn: FormControl<string | null | undefined>,

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		authorizerResultTtlInSeconds: FormControl<number | null | undefined>,

		/** The authorizer type. For WebSocket APIs, specify REQUEST for a Lambda function using incoming request parameters. For HTTP APIs, specify JWT to use JSON Web Tokens. */
		authorizerType: FormControl<CreateAuthorizerResponseAuthorizerType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		authorizerUri: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		identityValidationExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAuthorizerPatchBodyFormGroup() {
		return new FormGroup<UpdateAuthorizerPatchBodyFormProperties>({
			authorizerCredentialsArn: new FormControl<string | null | undefined>(undefined),
			authorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			authorizerType: new FormControl<CreateAuthorizerResponseAuthorizerType | null | undefined>(undefined),
			authorizerUri: new FormControl<string | null | undefined>(undefined),
			identityValidationExpression: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAuthorizerPatchBodyJwtConfiguration {
		Audience?: Array<string>;

		/** A string representation of a URI with a length between [1-2048]. */
		Issuer?: string | null;
	}
	export interface UpdateAuthorizerPatchBodyJwtConfigurationFormProperties {

		/** A string representation of a URI with a length between [1-2048]. */
		Issuer: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAuthorizerPatchBodyJwtConfigurationFormGroup() {
		return new FormGroup<UpdateAuthorizerPatchBodyJwtConfigurationFormProperties>({
			Issuer: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDeploymentPatchBody {

		/** A string with a length between [0-1024]. */
		description?: string | null;
	}
	export interface UpdateDeploymentPatchBodyFormProperties {

		/** A string with a length between [0-1024]. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeploymentPatchBodyFormGroup() {
		return new FormGroup<UpdateDeploymentPatchBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainNamePatchBody {

		/** The domain name configurations. */
		domainNameConfigurations?: Array<DomainNameConfiguration>;
	}
	export interface UpdateDomainNamePatchBodyFormProperties {
	}
	export function CreateUpdateDomainNamePatchBodyFormGroup() {
		return new FormGroup<UpdateDomainNamePatchBodyFormProperties>({
		});

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
		requestParameters?: {[id: string]: string };

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		requestTemplates?: {[id: string]: string };

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		templateSelectionExpression?: string | null;

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		timeoutInMillis?: number | null;

		/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
		tlsConfig?: UpdateIntegrationPatchBodyTlsConfig;
	}
	export interface UpdateIntegrationPatchBodyFormProperties {

		/** A string with a length between [1-1024]. */
		connectionId: FormControl<string | null | undefined>,

		/** Represents a connection type. */
		connectionType: FormControl<CreateIntegrationResultConnectionType | null | undefined>,

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		contentHandlingStrategy: FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>,

		/** Represents an Amazon Resource Name (ARN). */
		credentialsArn: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		description: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		integrationMethod: FormControl<string | null | undefined>,

		/** Represents an API method integration type. */
		integrationType: FormControl<CreateIntegrationResultIntegrationType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		integrationUri: FormControl<string | null | undefined>,

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		passthroughBehavior: FormControl<CreateIntegrationResultPassthroughBehavior | null | undefined>,

		/** A string with a length between [1-64]. */
		payloadFormatVersion: FormControl<string | null | undefined>,

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		requestParameters: FormControl<{[id: string]: string } | null | undefined>,

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		requestTemplates: FormControl<{[id: string]: string } | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		templateSelectionExpression: FormControl<string | null | undefined>,

		/**
		 * An integer with a value between [50-30000].
		 * Minimum: 50
		 * Maximum: 30000
		 */
		timeoutInMillis: FormControl<number | null | undefined>,
	}
	export function CreateUpdateIntegrationPatchBodyFormGroup() {
		return new FormGroup<UpdateIntegrationPatchBodyFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined),
			connectionType: new FormControl<CreateIntegrationResultConnectionType | null | undefined>(undefined),
			contentHandlingStrategy: new FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>(undefined),
			credentialsArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			integrationMethod: new FormControl<string | null | undefined>(undefined),
			integrationType: new FormControl<CreateIntegrationResultIntegrationType | null | undefined>(undefined),
			integrationUri: new FormControl<string | null | undefined>(undefined),
			passthroughBehavior: new FormControl<CreateIntegrationResultPassthroughBehavior | null | undefined>(undefined),
			payloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			requestParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			requestTemplates: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			templateSelectionExpression: new FormControl<string | null | undefined>(undefined),
			timeoutInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateIntegrationPatchBodyTlsConfig {

		/** A string with a length between [1-512]. */
		ServerNameToVerify?: string | null;
	}
	export interface UpdateIntegrationPatchBodyTlsConfigFormProperties {

		/** A string with a length between [1-512]. */
		ServerNameToVerify: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIntegrationPatchBodyTlsConfigFormGroup() {
		return new FormGroup<UpdateIntegrationPatchBodyTlsConfigFormProperties>({
			ServerNameToVerify: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateIntegrationResponsePatchBody {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		contentHandlingStrategy?: CreateIntegrationResultContentHandlingStrategy | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		integrationResponseKey?: string | null;

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		responseParameters?: {[id: string]: string };

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		responseTemplates?: {[id: string]: string };

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		templateSelectionExpression?: string | null;
	}
	export interface UpdateIntegrationResponsePatchBodyFormProperties {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		contentHandlingStrategy: FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		integrationResponseKey: FormControl<string | null | undefined>,

		/** A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.{name}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.{name} or integration.response.body.{JSON-expression}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix. */
		responseParameters: FormControl<{[id: string]: string } | null | undefined>,

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		responseTemplates: FormControl<{[id: string]: string } | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		templateSelectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIntegrationResponsePatchBodyFormGroup() {
		return new FormGroup<UpdateIntegrationResponsePatchBodyFormProperties>({
			contentHandlingStrategy: new FormControl<CreateIntegrationResultContentHandlingStrategy | null | undefined>(undefined),
			integrationResponseKey: new FormControl<string | null | undefined>(undefined),
			responseParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			responseTemplates: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			templateSelectionExpression: new FormControl<string | null | undefined>(undefined),
		});

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
	export interface UpdateModelPatchBodyFormProperties {

		/** A string with a length between [1-256]. */
		contentType: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		description: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		name: FormControl<string | null | undefined>,

		/** A string with a length between [0-32768]. */
		schema: FormControl<string | null | undefined>,
	}
	export function CreateUpdateModelPatchBodyFormGroup() {
		return new FormGroup<UpdateModelPatchBodyFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRoutePatchBody {

		/** Specifies whether an API key is required for the route. Supported only for WebSocket APIs. */
		apiKeyRequired?: boolean | null;

		/** A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		authorizationScopes?: Array<string>;

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		authorizationType?: CreateRouteResultAuthorizationType | null;

		/** The identifier. */
		authorizerId?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		modelSelectionExpression?: string | null;

		/** A string with a length between [1-64]. */
		operationName?: string | null;

		/** The route models. */
		requestModels?: {[id: string]: string };

		/** The route parameters. */
		requestParameters?: {[id: string]: ParameterConstraints };

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		routeKey?: string | null;

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		routeResponseSelectionExpression?: string | null;

		/** A string with a length between [1-128]. */
		target?: string | null;
	}
	export interface UpdateRoutePatchBodyFormProperties {

		/** Specifies whether an API key is required for the route. Supported only for WebSocket APIs. */
		apiKeyRequired: FormControl<boolean | null | undefined>,

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, or JWT for using JSON Web Tokens. */
		authorizationType: FormControl<CreateRouteResultAuthorizationType | null | undefined>,

		/** The identifier. */
		authorizerId: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		modelSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		operationName: FormControl<string | null | undefined>,

		/** The route models. */
		requestModels: FormControl<{[id: string]: string } | null | undefined>,

		/** The route parameters. */
		requestParameters: FormControl<{[id: string]: ParameterConstraints } | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		routeKey: FormControl<string | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		routeResponseSelectionExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRoutePatchBodyFormGroup() {
		return new FormGroup<UpdateRoutePatchBodyFormProperties>({
			apiKeyRequired: new FormControl<boolean | null | undefined>(undefined),
			authorizationType: new FormControl<CreateRouteResultAuthorizationType | null | undefined>(undefined),
			authorizerId: new FormControl<string | null | undefined>(undefined),
			modelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
			requestModels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			requestParameters: new FormControl<{[id: string]: ParameterConstraints } | null | undefined>(undefined),
			routeKey: new FormControl<string | null | undefined>(undefined),
			routeResponseSelectionExpression: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRouteResponsePatchBody {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		modelSelectionExpression?: string | null;

		/** The route models. */
		responseModels?: {[id: string]: string };

		/** The route parameters. */
		responseParameters?: {[id: string]: ParameterConstraints };

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		routeResponseKey?: string | null;
	}
	export interface UpdateRouteResponsePatchBodyFormProperties {

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		modelSelectionExpression: FormControl<string | null | undefined>,

		/** The route models. */
		responseModels: FormControl<{[id: string]: string } | null | undefined>,

		/** The route parameters. */
		responseParameters: FormControl<{[id: string]: ParameterConstraints } | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		routeResponseKey: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRouteResponsePatchBodyFormGroup() {
		return new FormGroup<UpdateRouteResponsePatchBodyFormProperties>({
			modelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			responseModels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			responseParameters: new FormControl<{[id: string]: ParameterConstraints } | null | undefined>(undefined),
			routeResponseKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateStagePatchBody {

		/** Settings for logging access in a stage. */
		accessLogSettings?: UpdateStagePatchBodyAccessLogSettings;

		/** Specifies whether updates to an API automatically trigger a new deployment. The default value is false. */
		autoDeploy?: boolean | null;

		/** The identifier. */
		clientCertificateId?: string | null;

		/** Represents a collection of route settings. */
		defaultRouteSettings?: UpdateStagePatchBodyDefaultRouteSettings;

		/** The identifier. */
		deploymentId?: string | null;

		/** A string with a length between [0-1024]. */
		description?: string | null;

		/** The route settings map. */
		routeSettings?: {[id: string]: RouteSettings };

		/** The stage variable map. */
		stageVariables?: {[id: string]: string };
	}
	export interface UpdateStagePatchBodyFormProperties {

		/** Specifies whether updates to an API automatically trigger a new deployment. The default value is false. */
		autoDeploy: FormControl<boolean | null | undefined>,

		/** The identifier. */
		clientCertificateId: FormControl<string | null | undefined>,

		/** The identifier. */
		deploymentId: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		description: FormControl<string | null | undefined>,

		/** The route settings map. */
		routeSettings: FormControl<{[id: string]: RouteSettings } | null | undefined>,

		/** The stage variable map. */
		stageVariables: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateStagePatchBodyFormGroup() {
		return new FormGroup<UpdateStagePatchBodyFormProperties>({
			autoDeploy: new FormControl<boolean | null | undefined>(undefined),
			clientCertificateId: new FormControl<string | null | undefined>(undefined),
			deploymentId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			routeSettings: new FormControl<{[id: string]: RouteSettings } | null | undefined>(undefined),
			stageVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateStagePatchBodyAccessLogSettings {

		/** Represents an Amazon Resource Name (ARN). */
		DestinationArn?: string | null;

		/** A string with a length between [1-1024]. */
		Format?: string | null;
	}
	export interface UpdateStagePatchBodyAccessLogSettingsFormProperties {

		/** Represents an Amazon Resource Name (ARN). */
		DestinationArn: FormControl<string | null | undefined>,

		/** A string with a length between [1-1024]. */
		Format: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStagePatchBodyAccessLogSettingsFormGroup() {
		return new FormGroup<UpdateStagePatchBodyAccessLogSettingsFormProperties>({
			DestinationArn: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateStagePatchBodyDefaultRouteSettings {
		DataTraceEnabled?: boolean | null;
		DetailedMetricsEnabled?: boolean | null;

		/** The logging level. */
		LoggingLevel?: RouteSettingsLoggingLevel | null;
		ThrottlingBurstLimit?: number | null;
		ThrottlingRateLimit?: number | null;
	}
	export interface UpdateStagePatchBodyDefaultRouteSettingsFormProperties {
		DataTraceEnabled: FormControl<boolean | null | undefined>,
		DetailedMetricsEnabled: FormControl<boolean | null | undefined>,

		/** The logging level. */
		LoggingLevel: FormControl<RouteSettingsLoggingLevel | null | undefined>,
		ThrottlingBurstLimit: FormControl<number | null | undefined>,
		ThrottlingRateLimit: FormControl<number | null | undefined>,
	}
	export function CreateUpdateStagePatchBodyDefaultRouteSettingsFormGroup() {
		return new FormGroup<UpdateStagePatchBodyDefaultRouteSettingsFormProperties>({
			DataTraceEnabled: new FormControl<boolean | null | undefined>(undefined),
			DetailedMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			LoggingLevel: new FormControl<RouteSettingsLoggingLevel | null | undefined>(undefined),
			ThrottlingBurstLimit: new FormControl<number | null | undefined>(undefined),
			ThrottlingRateLimit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateVpcLinkPatchBody {

		/** A string with a length between [1-128]. */
		name?: string | null;
	}
	export interface UpdateVpcLinkPatchBodyFormProperties {

		/** A string with a length between [1-128]. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVpcLinkPatchBodyFormGroup() {
		return new FormGroup<UpdateVpcLinkPatchBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/** Represents a collection of tags associated with the resource. */
		tags?: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/** Represents a collection of tags associated with the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

}

