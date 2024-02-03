import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateApiResponse {
		ApiEndpoint?: string;
		ApiGatewayManaged?: boolean | null;
		ApiId?: string;
		ApiKeySelectionExpression?: string;
		CorsConfiguration?: Cors;
		CreatedDate?: Date;
		Description?: string;
		DisableSchemaValidation?: boolean | null;
		DisableExecuteApiEndpoint?: boolean | null;
		ImportInfo?: Array<string>;
		Name?: string;
		ProtocolType?: ProtocolType;
		RouteSelectionExpression?: string;
		Tags?: Tags;
		Version?: string;
		Warnings?: Array<string>;
	}
	export interface CreateApiResponseFormProperties {
		ApiEndpoint: FormControl<string | null | undefined>,
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		ApiId: FormControl<string | null | undefined>,
		ApiKeySelectionExpression: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisableSchemaValidation: FormControl<boolean | null | undefined>,
		DisableExecuteApiEndpoint: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ProtocolType: FormControl<ProtocolType | null | undefined>,
		RouteSelectionExpression: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateCreateApiResponseFormGroup() {
		return new FormGroup<CreateApiResponseFormProperties>({
			ApiEndpoint: new FormControl<string | null | undefined>(undefined),
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiKeySelectionExpression: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisableSchemaValidation: new FormControl<boolean | null | undefined>(undefined),
			DisableExecuteApiEndpoint: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ProtocolType: new FormControl<ProtocolType | null | undefined>(undefined),
			RouteSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
	export interface Cors {
		AllowCredentials?: boolean | null;
		AllowHeaders?: Array<string>;
		AllowMethods?: Array<string>;
		AllowOrigins?: Array<string>;
		ExposeHeaders?: Array<string>;
		MaxAge?: number | null;
	}

	/** Represents a CORS configuration. Supported only for HTTP APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html">Configuring CORS</a> for more information. */
	export interface CorsFormProperties {
		AllowCredentials: FormControl<boolean | null | undefined>,
		MaxAge: FormControl<number | null | undefined>,
	}
	export function CreateCorsFormGroup() {
		return new FormGroup<CorsFormProperties>({
			AllowCredentials: new FormControl<boolean | null | undefined>(undefined),
			MaxAge: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a protocol type. */
	export enum ProtocolType { WEBSOCKET = 'WEBSOCKET', HTTP = 'HTTP' }


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
		ApiId?: string;
		ApiMappingId?: string;
		ApiMappingKey?: string;
		Stage?: string;
	}
	export interface CreateApiMappingResponseFormProperties {
		ApiId: FormControl<string | null | undefined>,
		ApiMappingId: FormControl<string | null | undefined>,
		ApiMappingKey: FormControl<string | null | undefined>,
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
		AuthorizerCredentialsArn?: string;
		AuthorizerId?: string;
		AuthorizerPayloadFormatVersion?: string;
		AuthorizerResultTtlInSeconds?: number | null;
		AuthorizerType?: AuthorizerType;
		AuthorizerUri?: string;
		EnableSimpleResponses?: boolean | null;
		IdentitySource?: Array<string>;
		IdentityValidationExpression?: string;
		JwtConfiguration?: JWTConfiguration;
		Name?: string;
	}
	export interface CreateAuthorizerResponseFormProperties {
		AuthorizerCredentialsArn: FormControl<string | null | undefined>,
		AuthorizerId: FormControl<string | null | undefined>,
		AuthorizerPayloadFormatVersion: FormControl<string | null | undefined>,
		AuthorizerResultTtlInSeconds: FormControl<number | null | undefined>,
		AuthorizerType: FormControl<AuthorizerType | null | undefined>,
		AuthorizerUri: FormControl<string | null | undefined>,
		EnableSimpleResponses: FormControl<boolean | null | undefined>,
		IdentityValidationExpression: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuthorizerResponseFormGroup() {
		return new FormGroup<CreateAuthorizerResponseFormProperties>({
			AuthorizerCredentialsArn: new FormControl<string | null | undefined>(undefined),
			AuthorizerId: new FormControl<string | null | undefined>(undefined),
			AuthorizerPayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			AuthorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			AuthorizerType: new FormControl<AuthorizerType | null | undefined>(undefined),
			AuthorizerUri: new FormControl<string | null | undefined>(undefined),
			EnableSimpleResponses: new FormControl<boolean | null | undefined>(undefined),
			IdentityValidationExpression: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs). */
	export enum AuthorizerType { REQUEST = 'REQUEST', JWT = 'JWT' }


	/** Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
	export interface JWTConfiguration {
		Audience?: Array<string>;
		Issuer?: string;
	}

	/** Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs. */
	export interface JWTConfigurationFormProperties {
		Issuer: FormControl<string | null | undefined>,
	}
	export function CreateJWTConfigurationFormGroup() {
		return new FormGroup<JWTConfigurationFormProperties>({
			Issuer: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeploymentResponse {
		AutoDeployed?: boolean | null;
		CreatedDate?: Date;
		DeploymentId?: string;
		DeploymentStatus?: DeploymentStatus;
		DeploymentStatusMessage?: string;
		Description?: string;
	}
	export interface CreateDeploymentResponseFormProperties {
		AutoDeployed: FormControl<boolean | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		DeploymentId: FormControl<string | null | undefined>,
		DeploymentStatus: FormControl<DeploymentStatus | null | undefined>,
		DeploymentStatusMessage: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentResponseFormGroup() {
		return new FormGroup<CreateDeploymentResponseFormProperties>({
			AutoDeployed: new FormControl<boolean | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			DeploymentStatus: new FormControl<DeploymentStatus | null | undefined>(undefined),
			DeploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a deployment status. */
	export enum DeploymentStatus { PENDING = 'PENDING', FAILED = 'FAILED', DEPLOYED = 'DEPLOYED' }

	export interface CreateDomainNameResponse {
		ApiMappingSelectionExpression?: string;
		DomainName?: string;
		DomainNameConfigurations?: Array<DomainNameConfiguration>;
		MutualTlsAuthentication?: MutualTlsAuthentication;
		Tags?: Tags;
	}
	export interface CreateDomainNameResponseFormProperties {
		ApiMappingSelectionExpression: FormControl<string | null | undefined>,
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
		ApiGatewayDomainName?: string;
		CertificateArn?: string;
		CertificateName?: string;
		CertificateUploadDate?: Date;
		DomainNameStatus?: DomainNameStatus;
		DomainNameStatusMessage?: string;
		EndpointType?: EndpointType;
		HostedZoneId?: string;
		SecurityPolicy?: SecurityPolicy;
		OwnershipVerificationCertificateArn?: string;
	}

	/** The domain name configuration. */
	export interface DomainNameConfigurationFormProperties {
		ApiGatewayDomainName: FormControl<string | null | undefined>,
		CertificateArn: FormControl<string | null | undefined>,
		CertificateName: FormControl<string | null | undefined>,
		CertificateUploadDate: FormControl<Date | null | undefined>,
		DomainNameStatus: FormControl<DomainNameStatus | null | undefined>,
		DomainNameStatusMessage: FormControl<string | null | undefined>,
		EndpointType: FormControl<EndpointType | null | undefined>,
		HostedZoneId: FormControl<string | null | undefined>,
		SecurityPolicy: FormControl<SecurityPolicy | null | undefined>,
		OwnershipVerificationCertificateArn: FormControl<string | null | undefined>,
	}
	export function CreateDomainNameConfigurationFormGroup() {
		return new FormGroup<DomainNameConfigurationFormProperties>({
			ApiGatewayDomainName: new FormControl<string | null | undefined>(undefined),
			CertificateArn: new FormControl<string | null | undefined>(undefined),
			CertificateName: new FormControl<string | null | undefined>(undefined),
			CertificateUploadDate: new FormControl<Date | null | undefined>(undefined),
			DomainNameStatus: new FormControl<DomainNameStatus | null | undefined>(undefined),
			DomainNameStatusMessage: new FormControl<string | null | undefined>(undefined),
			EndpointType: new FormControl<EndpointType | null | undefined>(undefined),
			HostedZoneId: new FormControl<string | null | undefined>(undefined),
			SecurityPolicy: new FormControl<SecurityPolicy | null | undefined>(undefined),
			OwnershipVerificationCertificateArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of the domain name migration. The valid values are AVAILABLE, UPDATING, PENDING_CERTIFICATE_REIMPORT, and PENDING_OWNERSHIP_VERIFICATION. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated. */
	export enum DomainNameStatus { AVAILABLE = 'AVAILABLE', UPDATING = 'UPDATING', PENDING_CERTIFICATE_REIMPORT = 'PENDING_CERTIFICATE_REIMPORT', PENDING_OWNERSHIP_VERIFICATION = 'PENDING_OWNERSHIP_VERIFICATION' }


	/** Represents an endpoint type. */
	export enum EndpointType { REGIONAL = 'REGIONAL', EDGE = 'EDGE' }


	/** The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2. */
	export enum SecurityPolicy { TLS_1_0 = 'TLS_1_0', TLS_1_2 = 'TLS_1_2' }

	export interface MutualTlsAuthentication {
		TruststoreUri?: string;
		TruststoreVersion?: string;
		TruststoreWarnings?: Array<string>;
	}
	export interface MutualTlsAuthenticationFormProperties {
		TruststoreUri: FormControl<string | null | undefined>,
		TruststoreVersion: FormControl<string | null | undefined>,
	}
	export function CreateMutualTlsAuthenticationFormGroup() {
		return new FormGroup<MutualTlsAuthenticationFormProperties>({
			TruststoreUri: new FormControl<string | null | undefined>(undefined),
			TruststoreVersion: new FormControl<string | null | undefined>(undefined),
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

	export interface CreateIntegrationResult {
		ApiGatewayManaged?: boolean | null;
		ConnectionId?: string;
		ConnectionType?: ConnectionType;
		ContentHandlingStrategy?: ContentHandlingStrategy;
		CredentialsArn?: string;
		Description?: string;
		IntegrationId?: string;
		IntegrationMethod?: string;
		IntegrationResponseSelectionExpression?: string;
		IntegrationSubtype?: string;
		IntegrationType?: IntegrationType;
		IntegrationUri?: string;
		PassthroughBehavior?: PassthroughBehavior;
		PayloadFormatVersion?: string;
		RequestParameters?: IntegrationParameters;
		RequestTemplates?: TemplateMap;
		ResponseParameters?: ResponseParameters;
		TemplateSelectionExpression?: string;
		TimeoutInMillis?: number | null;
		TlsConfig?: TlsConfig;
	}
	export interface CreateIntegrationResultFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		ConnectionId: FormControl<string | null | undefined>,
		ConnectionType: FormControl<ConnectionType | null | undefined>,
		ContentHandlingStrategy: FormControl<ContentHandlingStrategy | null | undefined>,
		CredentialsArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		IntegrationId: FormControl<string | null | undefined>,
		IntegrationMethod: FormControl<string | null | undefined>,
		IntegrationResponseSelectionExpression: FormControl<string | null | undefined>,
		IntegrationSubtype: FormControl<string | null | undefined>,
		IntegrationType: FormControl<IntegrationType | null | undefined>,
		IntegrationUri: FormControl<string | null | undefined>,
		PassthroughBehavior: FormControl<PassthroughBehavior | null | undefined>,
		PayloadFormatVersion: FormControl<string | null | undefined>,
		TemplateSelectionExpression: FormControl<string | null | undefined>,
		TimeoutInMillis: FormControl<number | null | undefined>,
	}
	export function CreateCreateIntegrationResultFormGroup() {
		return new FormGroup<CreateIntegrationResultFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ConnectionId: new FormControl<string | null | undefined>(undefined),
			ConnectionType: new FormControl<ConnectionType | null | undefined>(undefined),
			ContentHandlingStrategy: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
			CredentialsArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IntegrationId: new FormControl<string | null | undefined>(undefined),
			IntegrationMethod: new FormControl<string | null | undefined>(undefined),
			IntegrationResponseSelectionExpression: new FormControl<string | null | undefined>(undefined),
			IntegrationSubtype: new FormControl<string | null | undefined>(undefined),
			IntegrationType: new FormControl<IntegrationType | null | undefined>(undefined),
			IntegrationUri: new FormControl<string | null | undefined>(undefined),
			PassthroughBehavior: new FormControl<PassthroughBehavior | null | undefined>(undefined),
			PayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
			TimeoutInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a connection type. */
	export enum ConnectionType { INTERNET = 'INTERNET', VPC_LINK = 'VPC_LINK' }


	/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
	export enum ContentHandlingStrategy { CONVERT_TO_BINARY = 'CONVERT_TO_BINARY', CONVERT_TO_TEXT = 'CONVERT_TO_TEXT' }


	/** Represents an API method integration type. */
	export enum IntegrationType { AWS = 'AWS', HTTP = 'HTTP', MOCK = 'MOCK', HTTP_PROXY = 'HTTP_PROXY', AWS_PROXY = 'AWS_PROXY' }


	/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
	export enum PassthroughBehavior { WHEN_NO_MATCH = 'WHEN_NO_MATCH', NEVER = 'NEVER', WHEN_NO_TEMPLATES = 'WHEN_NO_TEMPLATES' }


	/**
	 * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
	 *           , where 
	 *             <replaceable>{location}</replaceable>
	 *            is querystring, path, or header; and 
	 *             <replaceable>{name}</replaceable>
	 *            must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
	 */
	export interface IntegrationParameters {
	}

	/**
	 * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
	 *           , where 
	 *             <replaceable>{location}</replaceable>
	 *            is querystring, path, or header; and 
	 *             <replaceable>{name}</replaceable>
	 *            must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
	 */
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


	/** Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. */
	export interface ResponseParameters {
	}

	/** Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. */
	export interface ResponseParametersFormProperties {
	}
	export function CreateResponseParametersFormGroup() {
		return new FormGroup<ResponseParametersFormProperties>({
		});

	}


	/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
	export interface TlsConfig {
		ServerNameToVerify?: string;
	}

	/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
	export interface TlsConfigFormProperties {
		ServerNameToVerify: FormControl<string | null | undefined>,
	}
	export function CreateTlsConfigFormGroup() {
		return new FormGroup<TlsConfigFormProperties>({
			ServerNameToVerify: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateIntegrationResponseResponse {
		ContentHandlingStrategy?: ContentHandlingStrategy;
		IntegrationResponseId?: string;
		IntegrationResponseKey?: string;
		ResponseParameters?: IntegrationParameters;
		ResponseTemplates?: TemplateMap;
		TemplateSelectionExpression?: string;
	}
	export interface CreateIntegrationResponseResponseFormProperties {
		ContentHandlingStrategy: FormControl<ContentHandlingStrategy | null | undefined>,
		IntegrationResponseId: FormControl<string | null | undefined>,
		IntegrationResponseKey: FormControl<string | null | undefined>,
		TemplateSelectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateCreateIntegrationResponseResponseFormGroup() {
		return new FormGroup<CreateIntegrationResponseResponseFormProperties>({
			ContentHandlingStrategy: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
			IntegrationResponseId: new FormControl<string | null | undefined>(undefined),
			IntegrationResponseKey: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateModelResponse {
		ContentType?: string;
		Description?: string;
		ModelId?: string;
		Name?: string;
		Schema?: string;
	}
	export interface CreateModelResponseFormProperties {
		ContentType: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ModelId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
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
		AuthorizationScopes?: Array<string>;
		AuthorizationType?: AuthorizationType;
		AuthorizerId?: string;
		ModelSelectionExpression?: string;
		OperationName?: string;
		RequestModels?: RouteModels;
		RequestParameters?: RouteParameters;
		RouteId?: string;
		RouteKey?: string;
		RouteResponseSelectionExpression?: string;
		Target?: string;
	}
	export interface CreateRouteResultFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		ApiKeyRequired: FormControl<boolean | null | undefined>,
		AuthorizationType: FormControl<AuthorizationType | null | undefined>,
		AuthorizerId: FormControl<string | null | undefined>,
		ModelSelectionExpression: FormControl<string | null | undefined>,
		OperationName: FormControl<string | null | undefined>,
		RouteId: FormControl<string | null | undefined>,
		RouteKey: FormControl<string | null | undefined>,
		RouteResponseSelectionExpression: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
	}
	export function CreateCreateRouteResultFormGroup() {
		return new FormGroup<CreateRouteResultFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ApiKeyRequired: new FormControl<boolean | null | undefined>(undefined),
			AuthorizationType: new FormControl<AuthorizationType | null | undefined>(undefined),
			AuthorizerId: new FormControl<string | null | undefined>(undefined),
			ModelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			OperationName: new FormControl<string | null | undefined>(undefined),
			RouteId: new FormControl<string | null | undefined>(undefined),
			RouteKey: new FormControl<string | null | undefined>(undefined),
			RouteResponseSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. */
	export enum AuthorizationType { NONE = 'NONE', AWS_IAM = 'AWS_IAM', CUSTOM = 'CUSTOM', JWT = 'JWT' }


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
		ModelSelectionExpression?: string;
		ResponseModels?: RouteModels;
		ResponseParameters?: RouteParameters;
		RouteResponseId?: string;
		RouteResponseKey?: string;
	}
	export interface CreateRouteResponseResponseFormProperties {
		ModelSelectionExpression: FormControl<string | null | undefined>,
		RouteResponseId: FormControl<string | null | undefined>,
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
		AccessLogSettings?: AccessLogSettings;
		ApiGatewayManaged?: boolean | null;
		AutoDeploy?: boolean | null;
		ClientCertificateId?: string;
		CreatedDate?: Date;
		DefaultRouteSettings?: RouteSettings;
		DeploymentId?: string;
		Description?: string;
		LastDeploymentStatusMessage?: string;
		LastUpdatedDate?: Date;
		RouteSettings?: RouteSettingsMap;
		StageName?: string;
		StageVariables?: StageVariablesMap;
		Tags?: Tags;
	}
	export interface CreateStageResponseFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		AutoDeploy: FormControl<boolean | null | undefined>,
		ClientCertificateId: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		DeploymentId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LastDeploymentStatusMessage: FormControl<string | null | undefined>,
		LastUpdatedDate: FormControl<Date | null | undefined>,
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
		DestinationArn?: string;
		Format?: string;
	}

	/** Settings for logging access in a stage. */
	export interface AccessLogSettingsFormProperties {
		DestinationArn: FormControl<string | null | undefined>,
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
		LoggingLevel?: LoggingLevel;
		ThrottlingBurstLimit?: number | null;
		ThrottlingRateLimit?: number | null;
	}

	/** Represents a collection of route settings. */
	export interface RouteSettingsFormProperties {
		DataTraceEnabled: FormControl<boolean | null | undefined>,
		DetailedMetricsEnabled: FormControl<boolean | null | undefined>,
		LoggingLevel: FormControl<LoggingLevel | null | undefined>,
		ThrottlingBurstLimit: FormControl<number | null | undefined>,
		ThrottlingRateLimit: FormControl<number | null | undefined>,
	}
	export function CreateRouteSettingsFormGroup() {
		return new FormGroup<RouteSettingsFormProperties>({
			DataTraceEnabled: new FormControl<boolean | null | undefined>(undefined),
			DetailedMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			LoggingLevel: new FormControl<LoggingLevel | null | undefined>(undefined),
			ThrottlingBurstLimit: new FormControl<number | null | undefined>(undefined),
			ThrottlingRateLimit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The logging level. */
	export enum LoggingLevel { ERROR = 'ERROR', INFO = 'INFO', OFF = 'OFF' }


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

	export interface CreateVpcLinkResponse {
		CreatedDate?: Date;
		Name?: string;
		SecurityGroupIds?: Array<string>;
		SubnetIds?: Array<string>;
		Tags?: Tags;
		VpcLinkId?: string;
		VpcLinkStatus?: VpcLinkStatus;
		VpcLinkStatusMessage?: string;
		VpcLinkVersion?: VpcLinkVersion;
	}
	export interface CreateVpcLinkResponseFormProperties {
		CreatedDate: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		VpcLinkId: FormControl<string | null | undefined>,
		VpcLinkStatus: FormControl<VpcLinkStatus | null | undefined>,
		VpcLinkStatusMessage: FormControl<string | null | undefined>,
		VpcLinkVersion: FormControl<VpcLinkVersion | null | undefined>,
	}
	export function CreateCreateVpcLinkResponseFormGroup() {
		return new FormGroup<CreateVpcLinkResponseFormProperties>({
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VpcLinkId: new FormControl<string | null | undefined>(undefined),
			VpcLinkStatus: new FormControl<VpcLinkStatus | null | undefined>(undefined),
			VpcLinkStatusMessage: new FormControl<string | null | undefined>(undefined),
			VpcLinkVersion: new FormControl<VpcLinkVersion | null | undefined>(undefined),
		});

	}


	/** The status of the VPC link. */
	export enum VpcLinkStatus { PENDING = 'PENDING', AVAILABLE = 'AVAILABLE', DELETING = 'DELETING', FAILED = 'FAILED', INACTIVE = 'INACTIVE' }


	/** The version of the VPC link. */
	export enum VpcLinkVersion { V2 = 'V2' }

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
		ApiEndpoint?: string;
		ApiGatewayManaged?: boolean | null;
		ApiId?: string;
		ApiKeySelectionExpression?: string;
		CorsConfiguration?: Cors;
		CreatedDate?: Date;
		Description?: string;
		DisableSchemaValidation?: boolean | null;
		DisableExecuteApiEndpoint?: boolean | null;
		ImportInfo?: Array<string>;
		Name?: string;
		ProtocolType?: ProtocolType;
		RouteSelectionExpression?: string;
		Tags?: Tags;
		Version?: string;
		Warnings?: Array<string>;
	}
	export interface GetApiResponseFormProperties {
		ApiEndpoint: FormControl<string | null | undefined>,
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		ApiId: FormControl<string | null | undefined>,
		ApiKeySelectionExpression: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisableSchemaValidation: FormControl<boolean | null | undefined>,
		DisableExecuteApiEndpoint: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ProtocolType: FormControl<ProtocolType | null | undefined>,
		RouteSelectionExpression: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateGetApiResponseFormGroup() {
		return new FormGroup<GetApiResponseFormProperties>({
			ApiEndpoint: new FormControl<string | null | undefined>(undefined),
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiKeySelectionExpression: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisableSchemaValidation: new FormControl<boolean | null | undefined>(undefined),
			DisableExecuteApiEndpoint: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ProtocolType: new FormControl<ProtocolType | null | undefined>(undefined),
			RouteSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetApiMappingResponse {
		ApiId?: string;
		ApiMappingId?: string;
		ApiMappingKey?: string;
		Stage?: string;
	}
	export interface GetApiMappingResponseFormProperties {
		ApiId: FormControl<string | null | undefined>,
		ApiMappingId: FormControl<string | null | undefined>,
		ApiMappingKey: FormControl<string | null | undefined>,
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
		NextToken?: string;
	}
	export interface GetApiMappingsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetApiMappingsResponseFormGroup() {
		return new FormGroup<GetApiMappingsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an API mapping. */
	export interface ApiMapping {

		/** Required */
		ApiId: string;
		ApiMappingId?: string;
		ApiMappingKey?: string;

		/** Required */
		Stage: string;
	}

	/** Represents an API mapping. */
	export interface ApiMappingFormProperties {

		/** Required */
		ApiId: FormControl<string | null | undefined>,
		ApiMappingId: FormControl<string | null | undefined>,
		ApiMappingKey: FormControl<string | null | undefined>,

		/** Required */
		Stage: FormControl<string | null | undefined>,
	}
	export function CreateApiMappingFormGroup() {
		return new FormGroup<ApiMappingFormProperties>({
			ApiId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApiMappingId: new FormControl<string | null | undefined>(undefined),
			ApiMappingKey: new FormControl<string | null | undefined>(undefined),
			Stage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetApisResponse {
		Items?: Array<Api>;
		NextToken?: string;
	}
	export interface GetApisResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetApisResponseFormGroup() {
		return new FormGroup<GetApisResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an API. */
	export interface Api {
		ApiEndpoint?: string;
		ApiGatewayManaged?: boolean | null;
		ApiId?: string;
		ApiKeySelectionExpression?: string;
		CorsConfiguration?: Cors;
		CreatedDate?: Date;
		Description?: string;
		DisableSchemaValidation?: boolean | null;
		DisableExecuteApiEndpoint?: boolean | null;
		ImportInfo?: Array<string>;

		/** Required */
		Name: string;

		/** Required */
		ProtocolType: ProtocolType;

		/** Required */
		RouteSelectionExpression: string;
		Tags?: Tags;
		Version?: string;
		Warnings?: Array<string>;
	}

	/** Represents an API. */
	export interface ApiFormProperties {
		ApiEndpoint: FormControl<string | null | undefined>,
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		ApiId: FormControl<string | null | undefined>,
		ApiKeySelectionExpression: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisableSchemaValidation: FormControl<boolean | null | undefined>,
		DisableExecuteApiEndpoint: FormControl<boolean | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ProtocolType: FormControl<ProtocolType | null | undefined>,

		/** Required */
		RouteSelectionExpression: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateApiFormGroup() {
		return new FormGroup<ApiFormProperties>({
			ApiEndpoint: new FormControl<string | null | undefined>(undefined),
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiKeySelectionExpression: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisableSchemaValidation: new FormControl<boolean | null | undefined>(undefined),
			DisableExecuteApiEndpoint: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProtocolType: new FormControl<ProtocolType | null | undefined>(undefined, [Validators.required]),
			RouteSelectionExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAuthorizerResponse {
		AuthorizerCredentialsArn?: string;
		AuthorizerId?: string;
		AuthorizerPayloadFormatVersion?: string;
		AuthorizerResultTtlInSeconds?: number | null;
		AuthorizerType?: AuthorizerType;
		AuthorizerUri?: string;
		EnableSimpleResponses?: boolean | null;
		IdentitySource?: Array<string>;
		IdentityValidationExpression?: string;
		JwtConfiguration?: JWTConfiguration;
		Name?: string;
	}
	export interface GetAuthorizerResponseFormProperties {
		AuthorizerCredentialsArn: FormControl<string | null | undefined>,
		AuthorizerId: FormControl<string | null | undefined>,
		AuthorizerPayloadFormatVersion: FormControl<string | null | undefined>,
		AuthorizerResultTtlInSeconds: FormControl<number | null | undefined>,
		AuthorizerType: FormControl<AuthorizerType | null | undefined>,
		AuthorizerUri: FormControl<string | null | undefined>,
		EnableSimpleResponses: FormControl<boolean | null | undefined>,
		IdentityValidationExpression: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetAuthorizerResponseFormGroup() {
		return new FormGroup<GetAuthorizerResponseFormProperties>({
			AuthorizerCredentialsArn: new FormControl<string | null | undefined>(undefined),
			AuthorizerId: new FormControl<string | null | undefined>(undefined),
			AuthorizerPayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			AuthorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			AuthorizerType: new FormControl<AuthorizerType | null | undefined>(undefined),
			AuthorizerUri: new FormControl<string | null | undefined>(undefined),
			EnableSimpleResponses: new FormControl<boolean | null | undefined>(undefined),
			IdentityValidationExpression: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAuthorizersResponse {
		Items?: Array<Authorizer>;
		NextToken?: string;
	}
	export interface GetAuthorizersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAuthorizersResponseFormGroup() {
		return new FormGroup<GetAuthorizersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an authorizer. */
	export interface Authorizer {
		AuthorizerCredentialsArn?: string;
		AuthorizerId?: string;
		AuthorizerPayloadFormatVersion?: string;
		AuthorizerResultTtlInSeconds?: number | null;
		AuthorizerType?: AuthorizerType;
		AuthorizerUri?: string;
		EnableSimpleResponses?: boolean | null;
		IdentitySource?: Array<string>;
		IdentityValidationExpression?: string;
		JwtConfiguration?: JWTConfiguration;

		/** Required */
		Name: string;
	}

	/** Represents an authorizer. */
	export interface AuthorizerFormProperties {
		AuthorizerCredentialsArn: FormControl<string | null | undefined>,
		AuthorizerId: FormControl<string | null | undefined>,
		AuthorizerPayloadFormatVersion: FormControl<string | null | undefined>,
		AuthorizerResultTtlInSeconds: FormControl<number | null | undefined>,
		AuthorizerType: FormControl<AuthorizerType | null | undefined>,
		AuthorizerUri: FormControl<string | null | undefined>,
		EnableSimpleResponses: FormControl<boolean | null | undefined>,
		IdentityValidationExpression: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizerFormGroup() {
		return new FormGroup<AuthorizerFormProperties>({
			AuthorizerCredentialsArn: new FormControl<string | null | undefined>(undefined),
			AuthorizerId: new FormControl<string | null | undefined>(undefined),
			AuthorizerPayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			AuthorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			AuthorizerType: new FormControl<AuthorizerType | null | undefined>(undefined),
			AuthorizerUri: new FormControl<string | null | undefined>(undefined),
			EnableSimpleResponses: new FormControl<boolean | null | undefined>(undefined),
			IdentityValidationExpression: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDeploymentResponse {
		AutoDeployed?: boolean | null;
		CreatedDate?: Date;
		DeploymentId?: string;
		DeploymentStatus?: DeploymentStatus;
		DeploymentStatusMessage?: string;
		Description?: string;
	}
	export interface GetDeploymentResponseFormProperties {
		AutoDeployed: FormControl<boolean | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		DeploymentId: FormControl<string | null | undefined>,
		DeploymentStatus: FormControl<DeploymentStatus | null | undefined>,
		DeploymentStatusMessage: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateGetDeploymentResponseFormGroup() {
		return new FormGroup<GetDeploymentResponseFormProperties>({
			AutoDeployed: new FormControl<boolean | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			DeploymentStatus: new FormControl<DeploymentStatus | null | undefined>(undefined),
			DeploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDeploymentsResponse {
		Items?: Array<Deployment>;
		NextToken?: string;
	}
	export interface GetDeploymentsResponseFormProperties {
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
		CreatedDate?: Date;
		DeploymentId?: string;
		DeploymentStatus?: DeploymentStatus;
		DeploymentStatusMessage?: string;
		Description?: string;
	}

	/** An immutable representation of an API that can be called by users. A Deployment must be associated with a Stage for it to be callable over the internet. */
	export interface DeploymentFormProperties {
		AutoDeployed: FormControl<boolean | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		DeploymentId: FormControl<string | null | undefined>,
		DeploymentStatus: FormControl<DeploymentStatus | null | undefined>,
		DeploymentStatusMessage: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentFormGroup() {
		return new FormGroup<DeploymentFormProperties>({
			AutoDeployed: new FormControl<boolean | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			DeploymentStatus: new FormControl<DeploymentStatus | null | undefined>(undefined),
			DeploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDomainNameResponse {
		ApiMappingSelectionExpression?: string;
		DomainName?: string;
		DomainNameConfigurations?: Array<DomainNameConfiguration>;
		MutualTlsAuthentication?: MutualTlsAuthentication;
		Tags?: Tags;
	}
	export interface GetDomainNameResponseFormProperties {
		ApiMappingSelectionExpression: FormControl<string | null | undefined>,
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
		NextToken?: string;
	}
	export interface GetDomainNamesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetDomainNamesResponseFormGroup() {
		return new FormGroup<GetDomainNamesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a domain name. */
	export interface DomainName {
		ApiMappingSelectionExpression?: string;

		/** Required */
		DomainName1: string;
		DomainNameConfigurations?: Array<DomainNameConfiguration>;
		MutualTlsAuthentication?: MutualTlsAuthentication;
		Tags?: Tags;
	}

	/** Represents a domain name. */
	export interface DomainNameFormProperties {
		ApiMappingSelectionExpression: FormControl<string | null | undefined>,

		/** Required */
		DomainName1: FormControl<string | null | undefined>,
	}
	export function CreateDomainNameFormGroup() {
		return new FormGroup<DomainNameFormProperties>({
			ApiMappingSelectionExpression: new FormControl<string | null | undefined>(undefined),
			DomainName1: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetIntegrationResult {
		ApiGatewayManaged?: boolean | null;
		ConnectionId?: string;
		ConnectionType?: ConnectionType;
		ContentHandlingStrategy?: ContentHandlingStrategy;
		CredentialsArn?: string;
		Description?: string;
		IntegrationId?: string;
		IntegrationMethod?: string;
		IntegrationResponseSelectionExpression?: string;
		IntegrationSubtype?: string;
		IntegrationType?: IntegrationType;
		IntegrationUri?: string;
		PassthroughBehavior?: PassthroughBehavior;
		PayloadFormatVersion?: string;
		RequestParameters?: IntegrationParameters;
		RequestTemplates?: TemplateMap;
		ResponseParameters?: ResponseParameters;
		TemplateSelectionExpression?: string;
		TimeoutInMillis?: number | null;
		TlsConfig?: TlsConfig;
	}
	export interface GetIntegrationResultFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		ConnectionId: FormControl<string | null | undefined>,
		ConnectionType: FormControl<ConnectionType | null | undefined>,
		ContentHandlingStrategy: FormControl<ContentHandlingStrategy | null | undefined>,
		CredentialsArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		IntegrationId: FormControl<string | null | undefined>,
		IntegrationMethod: FormControl<string | null | undefined>,
		IntegrationResponseSelectionExpression: FormControl<string | null | undefined>,
		IntegrationSubtype: FormControl<string | null | undefined>,
		IntegrationType: FormControl<IntegrationType | null | undefined>,
		IntegrationUri: FormControl<string | null | undefined>,
		PassthroughBehavior: FormControl<PassthroughBehavior | null | undefined>,
		PayloadFormatVersion: FormControl<string | null | undefined>,
		TemplateSelectionExpression: FormControl<string | null | undefined>,
		TimeoutInMillis: FormControl<number | null | undefined>,
	}
	export function CreateGetIntegrationResultFormGroup() {
		return new FormGroup<GetIntegrationResultFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ConnectionId: new FormControl<string | null | undefined>(undefined),
			ConnectionType: new FormControl<ConnectionType | null | undefined>(undefined),
			ContentHandlingStrategy: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
			CredentialsArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IntegrationId: new FormControl<string | null | undefined>(undefined),
			IntegrationMethod: new FormControl<string | null | undefined>(undefined),
			IntegrationResponseSelectionExpression: new FormControl<string | null | undefined>(undefined),
			IntegrationSubtype: new FormControl<string | null | undefined>(undefined),
			IntegrationType: new FormControl<IntegrationType | null | undefined>(undefined),
			IntegrationUri: new FormControl<string | null | undefined>(undefined),
			PassthroughBehavior: new FormControl<PassthroughBehavior | null | undefined>(undefined),
			PayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
			TimeoutInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetIntegrationResponseResponse {
		ContentHandlingStrategy?: ContentHandlingStrategy;
		IntegrationResponseId?: string;
		IntegrationResponseKey?: string;
		ResponseParameters?: IntegrationParameters;
		ResponseTemplates?: TemplateMap;
		TemplateSelectionExpression?: string;
	}
	export interface GetIntegrationResponseResponseFormProperties {
		ContentHandlingStrategy: FormControl<ContentHandlingStrategy | null | undefined>,
		IntegrationResponseId: FormControl<string | null | undefined>,
		IntegrationResponseKey: FormControl<string | null | undefined>,
		TemplateSelectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateGetIntegrationResponseResponseFormGroup() {
		return new FormGroup<GetIntegrationResponseResponseFormProperties>({
			ContentHandlingStrategy: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
			IntegrationResponseId: new FormControl<string | null | undefined>(undefined),
			IntegrationResponseKey: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetIntegrationResponsesResponse {
		Items?: Array<IntegrationResponse>;
		NextToken?: string;
	}
	export interface GetIntegrationResponsesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetIntegrationResponsesResponseFormGroup() {
		return new FormGroup<GetIntegrationResponsesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an integration response. */
	export interface IntegrationResponse {
		ContentHandlingStrategy?: ContentHandlingStrategy;
		IntegrationResponseId?: string;

		/** Required */
		IntegrationResponseKey: string;
		ResponseParameters?: IntegrationParameters;
		ResponseTemplates?: TemplateMap;
		TemplateSelectionExpression?: string;
	}

	/** Represents an integration response. */
	export interface IntegrationResponseFormProperties {
		ContentHandlingStrategy: FormControl<ContentHandlingStrategy | null | undefined>,
		IntegrationResponseId: FormControl<string | null | undefined>,

		/** Required */
		IntegrationResponseKey: FormControl<string | null | undefined>,
		TemplateSelectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationResponseFormGroup() {
		return new FormGroup<IntegrationResponseFormProperties>({
			ContentHandlingStrategy: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
			IntegrationResponseId: new FormControl<string | null | undefined>(undefined),
			IntegrationResponseKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetIntegrationsResponse {
		Items?: Array<Integration>;
		NextToken?: string;
	}
	export interface GetIntegrationsResponseFormProperties {
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
		ConnectionId?: string;
		ConnectionType?: ConnectionType;
		ContentHandlingStrategy?: ContentHandlingStrategy;
		CredentialsArn?: string;
		Description?: string;
		IntegrationId?: string;
		IntegrationMethod?: string;
		IntegrationResponseSelectionExpression?: string;
		IntegrationSubtype?: string;
		IntegrationType?: IntegrationType;
		IntegrationUri?: string;
		PassthroughBehavior?: PassthroughBehavior;
		PayloadFormatVersion?: string;
		RequestParameters?: IntegrationParameters;
		RequestTemplates?: TemplateMap;
		ResponseParameters?: ResponseParameters;
		TemplateSelectionExpression?: string;
		TimeoutInMillis?: number | null;
		TlsConfig?: TlsConfig;
	}

	/** Represents an integration. */
	export interface IntegrationFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		ConnectionId: FormControl<string | null | undefined>,
		ConnectionType: FormControl<ConnectionType | null | undefined>,
		ContentHandlingStrategy: FormControl<ContentHandlingStrategy | null | undefined>,
		CredentialsArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		IntegrationId: FormControl<string | null | undefined>,
		IntegrationMethod: FormControl<string | null | undefined>,
		IntegrationResponseSelectionExpression: FormControl<string | null | undefined>,
		IntegrationSubtype: FormControl<string | null | undefined>,
		IntegrationType: FormControl<IntegrationType | null | undefined>,
		IntegrationUri: FormControl<string | null | undefined>,
		PassthroughBehavior: FormControl<PassthroughBehavior | null | undefined>,
		PayloadFormatVersion: FormControl<string | null | undefined>,
		TemplateSelectionExpression: FormControl<string | null | undefined>,
		TimeoutInMillis: FormControl<number | null | undefined>,
	}
	export function CreateIntegrationFormGroup() {
		return new FormGroup<IntegrationFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ConnectionId: new FormControl<string | null | undefined>(undefined),
			ConnectionType: new FormControl<ConnectionType | null | undefined>(undefined),
			ContentHandlingStrategy: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
			CredentialsArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IntegrationId: new FormControl<string | null | undefined>(undefined),
			IntegrationMethod: new FormControl<string | null | undefined>(undefined),
			IntegrationResponseSelectionExpression: new FormControl<string | null | undefined>(undefined),
			IntegrationSubtype: new FormControl<string | null | undefined>(undefined),
			IntegrationType: new FormControl<IntegrationType | null | undefined>(undefined),
			IntegrationUri: new FormControl<string | null | undefined>(undefined),
			PassthroughBehavior: new FormControl<PassthroughBehavior | null | undefined>(undefined),
			PayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
			TimeoutInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetModelResponse {
		ContentType?: string;
		Description?: string;
		ModelId?: string;
		Name?: string;
		Schema?: string;
	}
	export interface GetModelResponseFormProperties {
		ContentType: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ModelId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
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
		Value?: string;
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
		NextToken?: string;
	}
	export interface GetModelsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetModelsResponseFormGroup() {
		return new FormGroup<GetModelsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a data model for an API. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Create Models and Mapping Templates for Request and Response Mappings</a>. */
	export interface Model {
		ContentType?: string;
		Description?: string;
		ModelId?: string;

		/** Required */
		Name: string;
		Schema?: string;
	}

	/** Represents a data model for an API. Supported only for WebSocket APIs. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html">Create Models and Mapping Templates for Request and Response Mappings</a>. */
	export interface ModelFormProperties {
		ContentType: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ModelId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Schema: FormControl<string | null | undefined>,
	}
	export function CreateModelFormGroup() {
		return new FormGroup<ModelFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ModelId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Schema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRouteResult {
		ApiGatewayManaged?: boolean | null;
		ApiKeyRequired?: boolean | null;
		AuthorizationScopes?: Array<string>;
		AuthorizationType?: AuthorizationType;
		AuthorizerId?: string;
		ModelSelectionExpression?: string;
		OperationName?: string;
		RequestModels?: RouteModels;
		RequestParameters?: RouteParameters;
		RouteId?: string;
		RouteKey?: string;
		RouteResponseSelectionExpression?: string;
		Target?: string;
	}
	export interface GetRouteResultFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		ApiKeyRequired: FormControl<boolean | null | undefined>,
		AuthorizationType: FormControl<AuthorizationType | null | undefined>,
		AuthorizerId: FormControl<string | null | undefined>,
		ModelSelectionExpression: FormControl<string | null | undefined>,
		OperationName: FormControl<string | null | undefined>,
		RouteId: FormControl<string | null | undefined>,
		RouteKey: FormControl<string | null | undefined>,
		RouteResponseSelectionExpression: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
	}
	export function CreateGetRouteResultFormGroup() {
		return new FormGroup<GetRouteResultFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ApiKeyRequired: new FormControl<boolean | null | undefined>(undefined),
			AuthorizationType: new FormControl<AuthorizationType | null | undefined>(undefined),
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
		ModelSelectionExpression?: string;
		ResponseModels?: RouteModels;
		ResponseParameters?: RouteParameters;
		RouteResponseId?: string;
		RouteResponseKey?: string;
	}
	export interface GetRouteResponseResponseFormProperties {
		ModelSelectionExpression: FormControl<string | null | undefined>,
		RouteResponseId: FormControl<string | null | undefined>,
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
		NextToken?: string;
	}
	export interface GetRouteResponsesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetRouteResponsesResponseFormGroup() {
		return new FormGroup<GetRouteResponsesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a route response. */
	export interface RouteResponse {
		ModelSelectionExpression?: string;
		ResponseModels?: RouteModels;
		ResponseParameters?: RouteParameters;
		RouteResponseId?: string;

		/** Required */
		RouteResponseKey: string;
	}

	/** Represents a route response. */
	export interface RouteResponseFormProperties {
		ModelSelectionExpression: FormControl<string | null | undefined>,
		RouteResponseId: FormControl<string | null | undefined>,

		/** Required */
		RouteResponseKey: FormControl<string | null | undefined>,
	}
	export function CreateRouteResponseFormGroup() {
		return new FormGroup<RouteResponseFormProperties>({
			ModelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			RouteResponseId: new FormControl<string | null | undefined>(undefined),
			RouteResponseKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetRoutesResponse {
		Items?: Array<Route>;
		NextToken?: string;
	}
	export interface GetRoutesResponseFormProperties {
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
		AuthorizationScopes?: Array<string>;
		AuthorizationType?: AuthorizationType;
		AuthorizerId?: string;
		ModelSelectionExpression?: string;
		OperationName?: string;
		RequestModels?: RouteModels;
		RequestParameters?: RouteParameters;
		RouteId?: string;

		/** Required */
		RouteKey: string;
		RouteResponseSelectionExpression?: string;
		Target?: string;
	}

	/** Represents a route. */
	export interface RouteFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		ApiKeyRequired: FormControl<boolean | null | undefined>,
		AuthorizationType: FormControl<AuthorizationType | null | undefined>,
		AuthorizerId: FormControl<string | null | undefined>,
		ModelSelectionExpression: FormControl<string | null | undefined>,
		OperationName: FormControl<string | null | undefined>,
		RouteId: FormControl<string | null | undefined>,

		/** Required */
		RouteKey: FormControl<string | null | undefined>,
		RouteResponseSelectionExpression: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
	}
	export function CreateRouteFormGroup() {
		return new FormGroup<RouteFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ApiKeyRequired: new FormControl<boolean | null | undefined>(undefined),
			AuthorizationType: new FormControl<AuthorizationType | null | undefined>(undefined),
			AuthorizerId: new FormControl<string | null | undefined>(undefined),
			ModelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			OperationName: new FormControl<string | null | undefined>(undefined),
			RouteId: new FormControl<string | null | undefined>(undefined),
			RouteKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RouteResponseSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetStageResponse {
		AccessLogSettings?: AccessLogSettings;
		ApiGatewayManaged?: boolean | null;
		AutoDeploy?: boolean | null;
		ClientCertificateId?: string;
		CreatedDate?: Date;
		DefaultRouteSettings?: RouteSettings;
		DeploymentId?: string;
		Description?: string;
		LastDeploymentStatusMessage?: string;
		LastUpdatedDate?: Date;
		RouteSettings?: RouteSettingsMap;
		StageName?: string;
		StageVariables?: StageVariablesMap;
		Tags?: Tags;
	}
	export interface GetStageResponseFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		AutoDeploy: FormControl<boolean | null | undefined>,
		ClientCertificateId: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		DeploymentId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LastDeploymentStatusMessage: FormControl<string | null | undefined>,
		LastUpdatedDate: FormControl<Date | null | undefined>,
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
		NextToken?: string;
	}
	export interface GetStagesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetStagesResponseFormGroup() {
		return new FormGroup<GetStagesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an API stage. */
	export interface Stage {
		AccessLogSettings?: AccessLogSettings;
		ApiGatewayManaged?: boolean | null;
		AutoDeploy?: boolean | null;
		ClientCertificateId?: string;
		CreatedDate?: Date;
		DefaultRouteSettings?: RouteSettings;
		DeploymentId?: string;
		Description?: string;
		LastDeploymentStatusMessage?: string;
		LastUpdatedDate?: Date;
		RouteSettings?: RouteSettingsMap;

		/** Required */
		StageName: string;
		StageVariables?: StageVariablesMap;
		Tags?: Tags;
	}

	/** Represents an API stage. */
	export interface StageFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		AutoDeploy: FormControl<boolean | null | undefined>,
		ClientCertificateId: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		DeploymentId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LastDeploymentStatusMessage: FormControl<string | null | undefined>,
		LastUpdatedDate: FormControl<Date | null | undefined>,

		/** Required */
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
			StageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTagsResponse {
		Tags?: Tags;
	}
	export interface GetTagsResponseFormProperties {
	}
	export function CreateGetTagsResponseFormGroup() {
		return new FormGroup<GetTagsResponseFormProperties>({
		});

	}

	export interface GetVpcLinkResponse {
		CreatedDate?: Date;
		Name?: string;
		SecurityGroupIds?: Array<string>;
		SubnetIds?: Array<string>;
		Tags?: Tags;
		VpcLinkId?: string;
		VpcLinkStatus?: VpcLinkStatus;
		VpcLinkStatusMessage?: string;
		VpcLinkVersion?: VpcLinkVersion;
	}
	export interface GetVpcLinkResponseFormProperties {
		CreatedDate: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		VpcLinkId: FormControl<string | null | undefined>,
		VpcLinkStatus: FormControl<VpcLinkStatus | null | undefined>,
		VpcLinkStatusMessage: FormControl<string | null | undefined>,
		VpcLinkVersion: FormControl<VpcLinkVersion | null | undefined>,
	}
	export function CreateGetVpcLinkResponseFormGroup() {
		return new FormGroup<GetVpcLinkResponseFormProperties>({
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VpcLinkId: new FormControl<string | null | undefined>(undefined),
			VpcLinkStatus: new FormControl<VpcLinkStatus | null | undefined>(undefined),
			VpcLinkStatusMessage: new FormControl<string | null | undefined>(undefined),
			VpcLinkVersion: new FormControl<VpcLinkVersion | null | undefined>(undefined),
		});

	}

	export interface GetVpcLinksResponse {
		Items?: Array<VpcLink>;
		NextToken?: string;
	}
	export interface GetVpcLinksResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetVpcLinksResponseFormGroup() {
		return new FormGroup<GetVpcLinksResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a VPC link. */
	export interface VpcLink {
		CreatedDate?: Date;

		/** Required */
		Name: string;

		/** Required */
		SecurityGroupIds: Array<string>;

		/** Required */
		SubnetIds: Array<string>;
		Tags?: Tags;

		/** Required */
		VpcLinkId: string;
		VpcLinkStatus?: VpcLinkStatus;
		VpcLinkStatusMessage?: string;
		VpcLinkVersion?: VpcLinkVersion;
	}

	/** Represents a VPC link. */
	export interface VpcLinkFormProperties {
		CreatedDate: FormControl<Date | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		VpcLinkId: FormControl<string | null | undefined>,
		VpcLinkStatus: FormControl<VpcLinkStatus | null | undefined>,
		VpcLinkStatusMessage: FormControl<string | null | undefined>,
		VpcLinkVersion: FormControl<VpcLinkVersion | null | undefined>,
	}
	export function CreateVpcLinkFormGroup() {
		return new FormGroup<VpcLinkFormProperties>({
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VpcLinkId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VpcLinkStatus: new FormControl<VpcLinkStatus | null | undefined>(undefined),
			VpcLinkStatusMessage: new FormControl<string | null | undefined>(undefined),
			VpcLinkVersion: new FormControl<VpcLinkVersion | null | undefined>(undefined),
		});

	}

	export interface ImportApiResponse {
		ApiEndpoint?: string;
		ApiGatewayManaged?: boolean | null;
		ApiId?: string;
		ApiKeySelectionExpression?: string;
		CorsConfiguration?: Cors;
		CreatedDate?: Date;
		Description?: string;
		DisableSchemaValidation?: boolean | null;
		DisableExecuteApiEndpoint?: boolean | null;
		ImportInfo?: Array<string>;
		Name?: string;
		ProtocolType?: ProtocolType;
		RouteSelectionExpression?: string;
		Tags?: Tags;
		Version?: string;
		Warnings?: Array<string>;
	}
	export interface ImportApiResponseFormProperties {
		ApiEndpoint: FormControl<string | null | undefined>,
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		ApiId: FormControl<string | null | undefined>,
		ApiKeySelectionExpression: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisableSchemaValidation: FormControl<boolean | null | undefined>,
		DisableExecuteApiEndpoint: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ProtocolType: FormControl<ProtocolType | null | undefined>,
		RouteSelectionExpression: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateImportApiResponseFormGroup() {
		return new FormGroup<ImportApiResponseFormProperties>({
			ApiEndpoint: new FormControl<string | null | undefined>(undefined),
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiKeySelectionExpression: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisableSchemaValidation: new FormControl<boolean | null | undefined>(undefined),
			DisableExecuteApiEndpoint: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ProtocolType: new FormControl<ProtocolType | null | undefined>(undefined),
			RouteSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReimportApiResponse {
		ApiEndpoint?: string;
		ApiGatewayManaged?: boolean | null;
		ApiId?: string;
		ApiKeySelectionExpression?: string;
		CorsConfiguration?: Cors;
		CreatedDate?: Date;
		Description?: string;
		DisableSchemaValidation?: boolean | null;
		DisableExecuteApiEndpoint?: boolean | null;
		ImportInfo?: Array<string>;
		Name?: string;
		ProtocolType?: ProtocolType;
		RouteSelectionExpression?: string;
		Tags?: Tags;
		Version?: string;
		Warnings?: Array<string>;
	}
	export interface ReimportApiResponseFormProperties {
		ApiEndpoint: FormControl<string | null | undefined>,
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		ApiId: FormControl<string | null | undefined>,
		ApiKeySelectionExpression: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisableSchemaValidation: FormControl<boolean | null | undefined>,
		DisableExecuteApiEndpoint: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ProtocolType: FormControl<ProtocolType | null | undefined>,
		RouteSelectionExpression: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateReimportApiResponseFormGroup() {
		return new FormGroup<ReimportApiResponseFormProperties>({
			ApiEndpoint: new FormControl<string | null | undefined>(undefined),
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiKeySelectionExpression: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisableSchemaValidation: new FormControl<boolean | null | undefined>(undefined),
			DisableExecuteApiEndpoint: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ProtocolType: new FormControl<ProtocolType | null | undefined>(undefined),
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
		ApiEndpoint?: string;
		ApiGatewayManaged?: boolean | null;
		ApiId?: string;
		ApiKeySelectionExpression?: string;
		CorsConfiguration?: Cors;
		CreatedDate?: Date;
		Description?: string;
		DisableSchemaValidation?: boolean | null;
		DisableExecuteApiEndpoint?: boolean | null;
		ImportInfo?: Array<string>;
		Name?: string;
		ProtocolType?: ProtocolType;
		RouteSelectionExpression?: string;
		Tags?: Tags;
		Version?: string;
		Warnings?: Array<string>;
	}
	export interface UpdateApiResponseFormProperties {
		ApiEndpoint: FormControl<string | null | undefined>,
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		ApiId: FormControl<string | null | undefined>,
		ApiKeySelectionExpression: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisableSchemaValidation: FormControl<boolean | null | undefined>,
		DisableExecuteApiEndpoint: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ProtocolType: FormControl<ProtocolType | null | undefined>,
		RouteSelectionExpression: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApiResponseFormGroup() {
		return new FormGroup<UpdateApiResponseFormProperties>({
			ApiEndpoint: new FormControl<string | null | undefined>(undefined),
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ApiId: new FormControl<string | null | undefined>(undefined),
			ApiKeySelectionExpression: new FormControl<string | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisableSchemaValidation: new FormControl<boolean | null | undefined>(undefined),
			DisableExecuteApiEndpoint: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ProtocolType: new FormControl<ProtocolType | null | undefined>(undefined),
			RouteSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateApiMappingResponse {
		ApiId?: string;
		ApiMappingId?: string;
		ApiMappingKey?: string;
		Stage?: string;
	}
	export interface UpdateApiMappingResponseFormProperties {
		ApiId: FormControl<string | null | undefined>,
		ApiMappingId: FormControl<string | null | undefined>,
		ApiMappingKey: FormControl<string | null | undefined>,
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
		AuthorizerCredentialsArn?: string;
		AuthorizerId?: string;
		AuthorizerPayloadFormatVersion?: string;
		AuthorizerResultTtlInSeconds?: number | null;
		AuthorizerType?: AuthorizerType;
		AuthorizerUri?: string;
		EnableSimpleResponses?: boolean | null;
		IdentitySource?: Array<string>;
		IdentityValidationExpression?: string;
		JwtConfiguration?: JWTConfiguration;
		Name?: string;
	}
	export interface UpdateAuthorizerResponseFormProperties {
		AuthorizerCredentialsArn: FormControl<string | null | undefined>,
		AuthorizerId: FormControl<string | null | undefined>,
		AuthorizerPayloadFormatVersion: FormControl<string | null | undefined>,
		AuthorizerResultTtlInSeconds: FormControl<number | null | undefined>,
		AuthorizerType: FormControl<AuthorizerType | null | undefined>,
		AuthorizerUri: FormControl<string | null | undefined>,
		EnableSimpleResponses: FormControl<boolean | null | undefined>,
		IdentityValidationExpression: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAuthorizerResponseFormGroup() {
		return new FormGroup<UpdateAuthorizerResponseFormProperties>({
			AuthorizerCredentialsArn: new FormControl<string | null | undefined>(undefined),
			AuthorizerId: new FormControl<string | null | undefined>(undefined),
			AuthorizerPayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			AuthorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			AuthorizerType: new FormControl<AuthorizerType | null | undefined>(undefined),
			AuthorizerUri: new FormControl<string | null | undefined>(undefined),
			EnableSimpleResponses: new FormControl<boolean | null | undefined>(undefined),
			IdentityValidationExpression: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDeploymentResponse {
		AutoDeployed?: boolean | null;
		CreatedDate?: Date;
		DeploymentId?: string;
		DeploymentStatus?: DeploymentStatus;
		DeploymentStatusMessage?: string;
		Description?: string;
	}
	export interface UpdateDeploymentResponseFormProperties {
		AutoDeployed: FormControl<boolean | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		DeploymentId: FormControl<string | null | undefined>,
		DeploymentStatus: FormControl<DeploymentStatus | null | undefined>,
		DeploymentStatusMessage: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeploymentResponseFormGroup() {
		return new FormGroup<UpdateDeploymentResponseFormProperties>({
			AutoDeployed: new FormControl<boolean | null | undefined>(undefined),
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			DeploymentStatus: new FormControl<DeploymentStatus | null | undefined>(undefined),
			DeploymentStatusMessage: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDomainNameResponse {
		ApiMappingSelectionExpression?: string;
		DomainName?: string;
		DomainNameConfigurations?: Array<DomainNameConfiguration>;
		MutualTlsAuthentication?: MutualTlsAuthentication;
		Tags?: Tags;
	}
	export interface UpdateDomainNameResponseFormProperties {
		ApiMappingSelectionExpression: FormControl<string | null | undefined>,
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
		ConnectionId?: string;
		ConnectionType?: ConnectionType;
		ContentHandlingStrategy?: ContentHandlingStrategy;
		CredentialsArn?: string;
		Description?: string;
		IntegrationId?: string;
		IntegrationMethod?: string;
		IntegrationResponseSelectionExpression?: string;
		IntegrationSubtype?: string;
		IntegrationType?: IntegrationType;
		IntegrationUri?: string;
		PassthroughBehavior?: PassthroughBehavior;
		PayloadFormatVersion?: string;
		RequestParameters?: IntegrationParameters;
		RequestTemplates?: TemplateMap;
		ResponseParameters?: ResponseParameters;
		TemplateSelectionExpression?: string;
		TimeoutInMillis?: number | null;
		TlsConfig?: TlsConfig;
	}
	export interface UpdateIntegrationResultFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		ConnectionId: FormControl<string | null | undefined>,
		ConnectionType: FormControl<ConnectionType | null | undefined>,
		ContentHandlingStrategy: FormControl<ContentHandlingStrategy | null | undefined>,
		CredentialsArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		IntegrationId: FormControl<string | null | undefined>,
		IntegrationMethod: FormControl<string | null | undefined>,
		IntegrationResponseSelectionExpression: FormControl<string | null | undefined>,
		IntegrationSubtype: FormControl<string | null | undefined>,
		IntegrationType: FormControl<IntegrationType | null | undefined>,
		IntegrationUri: FormControl<string | null | undefined>,
		PassthroughBehavior: FormControl<PassthroughBehavior | null | undefined>,
		PayloadFormatVersion: FormControl<string | null | undefined>,
		TemplateSelectionExpression: FormControl<string | null | undefined>,
		TimeoutInMillis: FormControl<number | null | undefined>,
	}
	export function CreateUpdateIntegrationResultFormGroup() {
		return new FormGroup<UpdateIntegrationResultFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ConnectionId: new FormControl<string | null | undefined>(undefined),
			ConnectionType: new FormControl<ConnectionType | null | undefined>(undefined),
			ContentHandlingStrategy: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
			CredentialsArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IntegrationId: new FormControl<string | null | undefined>(undefined),
			IntegrationMethod: new FormControl<string | null | undefined>(undefined),
			IntegrationResponseSelectionExpression: new FormControl<string | null | undefined>(undefined),
			IntegrationSubtype: new FormControl<string | null | undefined>(undefined),
			IntegrationType: new FormControl<IntegrationType | null | undefined>(undefined),
			IntegrationUri: new FormControl<string | null | undefined>(undefined),
			PassthroughBehavior: new FormControl<PassthroughBehavior | null | undefined>(undefined),
			PayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
			TimeoutInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateIntegrationResponseResponse {
		ContentHandlingStrategy?: ContentHandlingStrategy;
		IntegrationResponseId?: string;
		IntegrationResponseKey?: string;
		ResponseParameters?: IntegrationParameters;
		ResponseTemplates?: TemplateMap;
		TemplateSelectionExpression?: string;
	}
	export interface UpdateIntegrationResponseResponseFormProperties {
		ContentHandlingStrategy: FormControl<ContentHandlingStrategy | null | undefined>,
		IntegrationResponseId: FormControl<string | null | undefined>,
		IntegrationResponseKey: FormControl<string | null | undefined>,
		TemplateSelectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIntegrationResponseResponseFormGroup() {
		return new FormGroup<UpdateIntegrationResponseResponseFormProperties>({
			ContentHandlingStrategy: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
			IntegrationResponseId: new FormControl<string | null | undefined>(undefined),
			IntegrationResponseKey: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateModelResponse {
		ContentType?: string;
		Description?: string;
		ModelId?: string;
		Name?: string;
		Schema?: string;
	}
	export interface UpdateModelResponseFormProperties {
		ContentType: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ModelId: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
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
		AuthorizationScopes?: Array<string>;
		AuthorizationType?: AuthorizationType;
		AuthorizerId?: string;
		ModelSelectionExpression?: string;
		OperationName?: string;
		RequestModels?: RouteModels;
		RequestParameters?: RouteParameters;
		RouteId?: string;
		RouteKey?: string;
		RouteResponseSelectionExpression?: string;
		Target?: string;
	}
	export interface UpdateRouteResultFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		ApiKeyRequired: FormControl<boolean | null | undefined>,
		AuthorizationType: FormControl<AuthorizationType | null | undefined>,
		AuthorizerId: FormControl<string | null | undefined>,
		ModelSelectionExpression: FormControl<string | null | undefined>,
		OperationName: FormControl<string | null | undefined>,
		RouteId: FormControl<string | null | undefined>,
		RouteKey: FormControl<string | null | undefined>,
		RouteResponseSelectionExpression: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRouteResultFormGroup() {
		return new FormGroup<UpdateRouteResultFormProperties>({
			ApiGatewayManaged: new FormControl<boolean | null | undefined>(undefined),
			ApiKeyRequired: new FormControl<boolean | null | undefined>(undefined),
			AuthorizationType: new FormControl<AuthorizationType | null | undefined>(undefined),
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
		ModelSelectionExpression?: string;
		ResponseModels?: RouteModels;
		ResponseParameters?: RouteParameters;
		RouteResponseId?: string;
		RouteResponseKey?: string;
	}
	export interface UpdateRouteResponseResponseFormProperties {
		ModelSelectionExpression: FormControl<string | null | undefined>,
		RouteResponseId: FormControl<string | null | undefined>,
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
		AccessLogSettings?: AccessLogSettings;
		ApiGatewayManaged?: boolean | null;
		AutoDeploy?: boolean | null;
		ClientCertificateId?: string;
		CreatedDate?: Date;
		DefaultRouteSettings?: RouteSettings;
		DeploymentId?: string;
		Description?: string;
		LastDeploymentStatusMessage?: string;
		LastUpdatedDate?: Date;
		RouteSettings?: RouteSettingsMap;
		StageName?: string;
		StageVariables?: StageVariablesMap;
		Tags?: Tags;
	}
	export interface UpdateStageResponseFormProperties {
		ApiGatewayManaged: FormControl<boolean | null | undefined>,
		AutoDeploy: FormControl<boolean | null | undefined>,
		ClientCertificateId: FormControl<string | null | undefined>,
		CreatedDate: FormControl<Date | null | undefined>,
		DeploymentId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LastDeploymentStatusMessage: FormControl<string | null | undefined>,
		LastUpdatedDate: FormControl<Date | null | undefined>,
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
		CreatedDate?: Date;
		Name?: string;
		SecurityGroupIds?: Array<string>;
		SubnetIds?: Array<string>;
		Tags?: Tags;
		VpcLinkId?: string;
		VpcLinkStatus?: VpcLinkStatus;
		VpcLinkStatusMessage?: string;
		VpcLinkVersion?: VpcLinkVersion;
	}
	export interface UpdateVpcLinkResponseFormProperties {
		CreatedDate: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		VpcLinkId: FormControl<string | null | undefined>,
		VpcLinkStatus: FormControl<VpcLinkStatus | null | undefined>,
		VpcLinkStatusMessage: FormControl<string | null | undefined>,
		VpcLinkVersion: FormControl<VpcLinkVersion | null | undefined>,
	}
	export function CreateUpdateVpcLinkResponseFormGroup() {
		return new FormGroup<UpdateVpcLinkResponseFormProperties>({
			CreatedDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VpcLinkId: new FormControl<string | null | undefined>(undefined),
			VpcLinkStatus: new FormControl<VpcLinkStatus | null | undefined>(undefined),
			VpcLinkStatusMessage: new FormControl<string | null | undefined>(undefined),
			VpcLinkVersion: new FormControl<VpcLinkVersion | null | undefined>(undefined),
		});

	}


	/** Creates a new ApiMapping resource to represent an API mapping. */
	export interface CreateApiMappingRequest {

		/** Required */
		ApiId: string;
		ApiMappingKey?: string;

		/** Required */
		Stage: string;
	}

	/** Creates a new ApiMapping resource to represent an API mapping. */
	export interface CreateApiMappingRequestFormProperties {

		/** Required */
		ApiId: FormControl<string | null | undefined>,
		ApiMappingKey: FormControl<string | null | undefined>,

		/** Required */
		Stage: FormControl<string | null | undefined>,
	}
	export function CreateCreateApiMappingRequestFormGroup() {
		return new FormGroup<CreateApiMappingRequestFormProperties>({
			ApiId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApiMappingKey: new FormControl<string | null | undefined>(undefined),
			Stage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Creates a new Api resource to represent an API. */
	export interface CreateApiRequest {
		ApiKeySelectionExpression?: string;
		CorsConfiguration?: Cors;
		CredentialsArn?: string;
		Description?: string;
		DisableSchemaValidation?: boolean | null;
		DisableExecuteApiEndpoint?: boolean | null;

		/** Required */
		Name: string;

		/** Required */
		ProtocolType: ProtocolType;
		RouteKey?: string;
		RouteSelectionExpression?: string;
		Tags?: Tags;
		Target?: string;
		Version?: string;
	}

	/** Creates a new Api resource to represent an API. */
	export interface CreateApiRequestFormProperties {
		ApiKeySelectionExpression: FormControl<string | null | undefined>,
		CredentialsArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisableSchemaValidation: FormControl<boolean | null | undefined>,
		DisableExecuteApiEndpoint: FormControl<boolean | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ProtocolType: FormControl<ProtocolType | null | undefined>,
		RouteKey: FormControl<string | null | undefined>,
		RouteSelectionExpression: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateCreateApiRequestFormGroup() {
		return new FormGroup<CreateApiRequestFormProperties>({
			ApiKeySelectionExpression: new FormControl<string | null | undefined>(undefined),
			CredentialsArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisableSchemaValidation: new FormControl<boolean | null | undefined>(undefined),
			DisableExecuteApiEndpoint: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProtocolType: new FormControl<ProtocolType | null | undefined>(undefined, [Validators.required]),
			RouteKey: new FormControl<string | null | undefined>(undefined),
			RouteSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a new Authorizer resource to represent an authorizer. */
	export interface CreateAuthorizerRequest {
		AuthorizerCredentialsArn?: string;
		AuthorizerPayloadFormatVersion?: string;
		AuthorizerResultTtlInSeconds?: number | null;

		/** Required */
		AuthorizerType: AuthorizerType;
		AuthorizerUri?: string;
		EnableSimpleResponses?: boolean | null;

		/** Required */
		IdentitySource: Array<string>;
		IdentityValidationExpression?: string;
		JwtConfiguration?: JWTConfiguration;

		/** Required */
		Name: string;
	}

	/** Creates a new Authorizer resource to represent an authorizer. */
	export interface CreateAuthorizerRequestFormProperties {
		AuthorizerCredentialsArn: FormControl<string | null | undefined>,
		AuthorizerPayloadFormatVersion: FormControl<string | null | undefined>,
		AuthorizerResultTtlInSeconds: FormControl<number | null | undefined>,

		/** Required */
		AuthorizerType: FormControl<AuthorizerType | null | undefined>,
		AuthorizerUri: FormControl<string | null | undefined>,
		EnableSimpleResponses: FormControl<boolean | null | undefined>,
		IdentityValidationExpression: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateAuthorizerRequestFormGroup() {
		return new FormGroup<CreateAuthorizerRequestFormProperties>({
			AuthorizerCredentialsArn: new FormControl<string | null | undefined>(undefined),
			AuthorizerPayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			AuthorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			AuthorizerType: new FormControl<AuthorizerType | null | undefined>(undefined, [Validators.required]),
			AuthorizerUri: new FormControl<string | null | undefined>(undefined),
			EnableSimpleResponses: new FormControl<boolean | null | undefined>(undefined),
			IdentityValidationExpression: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Creates a new Deployment resource to represent a deployment. */
	export interface CreateDeploymentRequest {
		Description?: string;
		StageName?: string;
	}

	/** Creates a new Deployment resource to represent a deployment. */
	export interface CreateDeploymentRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		StageName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentRequestFormGroup() {
		return new FormGroup<CreateDeploymentRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			StageName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MutualTlsAuthenticationInput {
		TruststoreUri?: string;
		TruststoreVersion?: string;
	}
	export interface MutualTlsAuthenticationInputFormProperties {
		TruststoreUri: FormControl<string | null | undefined>,
		TruststoreVersion: FormControl<string | null | undefined>,
	}
	export function CreateMutualTlsAuthenticationInputFormGroup() {
		return new FormGroup<MutualTlsAuthenticationInputFormProperties>({
			TruststoreUri: new FormControl<string | null | undefined>(undefined),
			TruststoreVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a new DomainName resource to represent a domain name. */
	export interface CreateDomainNameRequest {

		/** Required */
		DomainName: string;
		DomainNameConfigurations?: Array<DomainNameConfiguration>;
		MutualTlsAuthentication?: MutualTlsAuthenticationInput;
		Tags?: Tags;
	}

	/** Creates a new DomainName resource to represent a domain name. */
	export interface CreateDomainNameRequestFormProperties {

		/** Required */
		DomainName: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainNameRequestFormGroup() {
		return new FormGroup<CreateDomainNameRequestFormProperties>({
			DomainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
	export interface TlsConfigInput {
		ServerNameToVerify?: string;
	}

	/** The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs. */
	export interface TlsConfigInputFormProperties {
		ServerNameToVerify: FormControl<string | null | undefined>,
	}
	export function CreateTlsConfigInputFormGroup() {
		return new FormGroup<TlsConfigInputFormProperties>({
			ServerNameToVerify: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a new Integration resource to represent an integration. */
	export interface CreateIntegrationRequest {
		ConnectionId?: string;
		ConnectionType?: ConnectionType;
		ContentHandlingStrategy?: ContentHandlingStrategy;
		CredentialsArn?: string;
		Description?: string;
		IntegrationMethod?: string;
		IntegrationSubtype?: string;

		/** Required */
		IntegrationType: IntegrationType;
		IntegrationUri?: string;
		PassthroughBehavior?: PassthroughBehavior;
		PayloadFormatVersion?: string;
		RequestParameters?: IntegrationParameters;
		RequestTemplates?: TemplateMap;
		ResponseParameters?: ResponseParameters;
		TemplateSelectionExpression?: string;
		TimeoutInMillis?: number | null;
		TlsConfig?: TlsConfigInput;
	}

	/** Creates a new Integration resource to represent an integration. */
	export interface CreateIntegrationRequestFormProperties {
		ConnectionId: FormControl<string | null | undefined>,
		ConnectionType: FormControl<ConnectionType | null | undefined>,
		ContentHandlingStrategy: FormControl<ContentHandlingStrategy | null | undefined>,
		CredentialsArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		IntegrationMethod: FormControl<string | null | undefined>,
		IntegrationSubtype: FormControl<string | null | undefined>,

		/** Required */
		IntegrationType: FormControl<IntegrationType | null | undefined>,
		IntegrationUri: FormControl<string | null | undefined>,
		PassthroughBehavior: FormControl<PassthroughBehavior | null | undefined>,
		PayloadFormatVersion: FormControl<string | null | undefined>,
		TemplateSelectionExpression: FormControl<string | null | undefined>,
		TimeoutInMillis: FormControl<number | null | undefined>,
	}
	export function CreateCreateIntegrationRequestFormGroup() {
		return new FormGroup<CreateIntegrationRequestFormProperties>({
			ConnectionId: new FormControl<string | null | undefined>(undefined),
			ConnectionType: new FormControl<ConnectionType | null | undefined>(undefined),
			ContentHandlingStrategy: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
			CredentialsArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IntegrationMethod: new FormControl<string | null | undefined>(undefined),
			IntegrationSubtype: new FormControl<string | null | undefined>(undefined),
			IntegrationType: new FormControl<IntegrationType | null | undefined>(undefined, [Validators.required]),
			IntegrationUri: new FormControl<string | null | undefined>(undefined),
			PassthroughBehavior: new FormControl<PassthroughBehavior | null | undefined>(undefined),
			PayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
			TimeoutInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Creates a new IntegrationResponse resource to represent an integration response. */
	export interface CreateIntegrationResponseRequest {
		ContentHandlingStrategy?: ContentHandlingStrategy;

		/** Required */
		IntegrationResponseKey: string;
		ResponseParameters?: IntegrationParameters;
		ResponseTemplates?: TemplateMap;
		TemplateSelectionExpression?: string;
	}

	/** Creates a new IntegrationResponse resource to represent an integration response. */
	export interface CreateIntegrationResponseRequestFormProperties {
		ContentHandlingStrategy: FormControl<ContentHandlingStrategy | null | undefined>,

		/** Required */
		IntegrationResponseKey: FormControl<string | null | undefined>,
		TemplateSelectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateCreateIntegrationResponseRequestFormGroup() {
		return new FormGroup<CreateIntegrationResponseRequestFormProperties>({
			ContentHandlingStrategy: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
			IntegrationResponseKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a new Model. */
	export interface CreateModelRequest {
		ContentType?: string;
		Description?: string;

		/** Required */
		Name: string;

		/** Required */
		Schema: string;
	}

	/** Creates a new Model. */
	export interface CreateModelRequestFormProperties {
		ContentType: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Schema: FormControl<string | null | undefined>,
	}
	export function CreateCreateModelRequestFormGroup() {
		return new FormGroup<CreateModelRequestFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Schema: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Creates a new Route resource to represent a route. */
	export interface CreateRouteRequest {
		ApiKeyRequired?: boolean | null;
		AuthorizationScopes?: Array<string>;
		AuthorizationType?: AuthorizationType;
		AuthorizerId?: string;
		ModelSelectionExpression?: string;
		OperationName?: string;
		RequestModels?: RouteModels;
		RequestParameters?: RouteParameters;

		/** Required */
		RouteKey: string;
		RouteResponseSelectionExpression?: string;
		Target?: string;
	}

	/** Creates a new Route resource to represent a route. */
	export interface CreateRouteRequestFormProperties {
		ApiKeyRequired: FormControl<boolean | null | undefined>,
		AuthorizationType: FormControl<AuthorizationType | null | undefined>,
		AuthorizerId: FormControl<string | null | undefined>,
		ModelSelectionExpression: FormControl<string | null | undefined>,
		OperationName: FormControl<string | null | undefined>,

		/** Required */
		RouteKey: FormControl<string | null | undefined>,
		RouteResponseSelectionExpression: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
	}
	export function CreateCreateRouteRequestFormGroup() {
		return new FormGroup<CreateRouteRequestFormProperties>({
			ApiKeyRequired: new FormControl<boolean | null | undefined>(undefined),
			AuthorizationType: new FormControl<AuthorizationType | null | undefined>(undefined),
			AuthorizerId: new FormControl<string | null | undefined>(undefined),
			ModelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			OperationName: new FormControl<string | null | undefined>(undefined),
			RouteKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RouteResponseSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Creates a new RouteResponse resource to represent a route response. */
	export interface CreateRouteResponseRequest {
		ModelSelectionExpression?: string;
		ResponseModels?: RouteModels;
		ResponseParameters?: RouteParameters;

		/** Required */
		RouteResponseKey: string;
	}

	/** Creates a new RouteResponse resource to represent a route response. */
	export interface CreateRouteResponseRequestFormProperties {
		ModelSelectionExpression: FormControl<string | null | undefined>,

		/** Required */
		RouteResponseKey: FormControl<string | null | undefined>,
	}
	export function CreateCreateRouteResponseRequestFormGroup() {
		return new FormGroup<CreateRouteResponseRequestFormProperties>({
			ModelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			RouteResponseKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Creates a new Stage resource to represent a stage. */
	export interface CreateStageRequest {
		AccessLogSettings?: AccessLogSettings;
		AutoDeploy?: boolean | null;
		ClientCertificateId?: string;
		DefaultRouteSettings?: RouteSettings;
		DeploymentId?: string;
		Description?: string;
		RouteSettings?: RouteSettingsMap;

		/** Required */
		StageName: string;
		StageVariables?: StageVariablesMap;
		Tags?: Tags;
	}

	/** Creates a new Stage resource to represent a stage. */
	export interface CreateStageRequestFormProperties {
		AutoDeploy: FormControl<boolean | null | undefined>,
		ClientCertificateId: FormControl<string | null | undefined>,
		DeploymentId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		StageName: FormControl<string | null | undefined>,
	}
	export function CreateCreateStageRequestFormGroup() {
		return new FormGroup<CreateStageRequestFormProperties>({
			AutoDeploy: new FormControl<boolean | null | undefined>(undefined),
			ClientCertificateId: new FormControl<string | null | undefined>(undefined),
			DeploymentId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			StageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Creates a VPC link */
	export interface CreateVpcLinkRequest {

		/** Required */
		Name: string;
		SecurityGroupIds?: Array<string>;

		/** Required */
		SubnetIds: Array<string>;
		Tags?: Tags;
	}

	/** Creates a VPC link */
	export interface CreateVpcLinkRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateVpcLinkRequestFormGroup() {
		return new FormGroup<CreateVpcLinkRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

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

	export interface ExportApiRequest {
	}
	export interface ExportApiRequestFormProperties {
	}
	export function CreateExportApiRequestFormGroup() {
		return new FormGroup<ExportApiRequestFormProperties>({
		});

	}

	export interface ResetAuthorizersCacheRequest {
	}
	export interface ResetAuthorizersCacheRequestFormProperties {
	}
	export function CreateResetAuthorizersCacheRequestFormGroup() {
		return new FormGroup<ResetAuthorizersCacheRequestFormProperties>({
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

		/** Required */
		Body: string;
	}
	export interface ImportApiRequestFormProperties {

		/** Required */
		Body: FormControl<string | null | undefined>,
	}
	export function CreateImportApiRequestFormGroup() {
		return new FormGroup<ImportApiRequestFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ReimportApiRequest {

		/** Required */
		Body: string;
	}
	export interface ReimportApiRequestFormProperties {

		/** Required */
		Body: FormControl<string | null | undefined>,
	}
	export function CreateReimportApiRequestFormGroup() {
		return new FormGroup<ReimportApiRequestFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Creates a new Tag resource to represent a tag. */
	export interface TagResourceRequest {
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

		/** Required */
		ApiId: string;
		ApiMappingKey?: string;
		Stage?: string;
	}

	/** Updates an ApiMapping. */
	export interface UpdateApiMappingRequestFormProperties {

		/** Required */
		ApiId: FormControl<string | null | undefined>,
		ApiMappingKey: FormControl<string | null | undefined>,
		Stage: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApiMappingRequestFormGroup() {
		return new FormGroup<UpdateApiMappingRequestFormProperties>({
			ApiId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApiMappingKey: new FormControl<string | null | undefined>(undefined),
			Stage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates an Api. */
	export interface UpdateApiRequest {
		ApiKeySelectionExpression?: string;
		CorsConfiguration?: Cors;
		CredentialsArn?: string;
		Description?: string;
		DisableSchemaValidation?: boolean | null;
		DisableExecuteApiEndpoint?: boolean | null;
		Name?: string;
		RouteKey?: string;
		RouteSelectionExpression?: string;
		Target?: string;
		Version?: string;
	}

	/** Updates an Api. */
	export interface UpdateApiRequestFormProperties {
		ApiKeySelectionExpression: FormControl<string | null | undefined>,
		CredentialsArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		DisableSchemaValidation: FormControl<boolean | null | undefined>,
		DisableExecuteApiEndpoint: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RouteKey: FormControl<string | null | undefined>,
		RouteSelectionExpression: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApiRequestFormGroup() {
		return new FormGroup<UpdateApiRequestFormProperties>({
			ApiKeySelectionExpression: new FormControl<string | null | undefined>(undefined),
			CredentialsArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			DisableSchemaValidation: new FormControl<boolean | null | undefined>(undefined),
			DisableExecuteApiEndpoint: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RouteKey: new FormControl<string | null | undefined>(undefined),
			RouteSelectionExpression: new FormControl<string | null | undefined>(undefined),
			Target: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates an Authorizer. */
	export interface UpdateAuthorizerRequest {
		AuthorizerCredentialsArn?: string;
		AuthorizerPayloadFormatVersion?: string;
		AuthorizerResultTtlInSeconds?: number | null;
		AuthorizerType?: AuthorizerType;
		AuthorizerUri?: string;
		EnableSimpleResponses?: boolean | null;
		IdentitySource?: Array<string>;
		IdentityValidationExpression?: string;
		JwtConfiguration?: JWTConfiguration;
		Name?: string;
	}

	/** Updates an Authorizer. */
	export interface UpdateAuthorizerRequestFormProperties {
		AuthorizerCredentialsArn: FormControl<string | null | undefined>,
		AuthorizerPayloadFormatVersion: FormControl<string | null | undefined>,
		AuthorizerResultTtlInSeconds: FormControl<number | null | undefined>,
		AuthorizerType: FormControl<AuthorizerType | null | undefined>,
		AuthorizerUri: FormControl<string | null | undefined>,
		EnableSimpleResponses: FormControl<boolean | null | undefined>,
		IdentityValidationExpression: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAuthorizerRequestFormGroup() {
		return new FormGroup<UpdateAuthorizerRequestFormProperties>({
			AuthorizerCredentialsArn: new FormControl<string | null | undefined>(undefined),
			AuthorizerPayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			AuthorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined),
			AuthorizerType: new FormControl<AuthorizerType | null | undefined>(undefined),
			AuthorizerUri: new FormControl<string | null | undefined>(undefined),
			EnableSimpleResponses: new FormControl<boolean | null | undefined>(undefined),
			IdentityValidationExpression: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates a Deployment. */
	export interface UpdateDeploymentRequest {
		Description?: string;
	}

	/** Updates a Deployment. */
	export interface UpdateDeploymentRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeploymentRequestFormGroup() {
		return new FormGroup<UpdateDeploymentRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates a DomainName. */
	export interface UpdateDomainNameRequest {
		DomainNameConfigurations?: Array<DomainNameConfiguration>;
		MutualTlsAuthentication?: MutualTlsAuthenticationInput;
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
		ConnectionId?: string;
		ConnectionType?: ConnectionType;
		ContentHandlingStrategy?: ContentHandlingStrategy;
		CredentialsArn?: string;
		Description?: string;
		IntegrationMethod?: string;
		IntegrationSubtype?: string;
		IntegrationType?: IntegrationType;
		IntegrationUri?: string;
		PassthroughBehavior?: PassthroughBehavior;
		PayloadFormatVersion?: string;
		RequestParameters?: IntegrationParameters;
		RequestTemplates?: TemplateMap;
		ResponseParameters?: ResponseParameters;
		TemplateSelectionExpression?: string;
		TimeoutInMillis?: number | null;
		TlsConfig?: TlsConfigInput;
	}

	/** Updates an Integration. */
	export interface UpdateIntegrationRequestFormProperties {
		ConnectionId: FormControl<string | null | undefined>,
		ConnectionType: FormControl<ConnectionType | null | undefined>,
		ContentHandlingStrategy: FormControl<ContentHandlingStrategy | null | undefined>,
		CredentialsArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		IntegrationMethod: FormControl<string | null | undefined>,
		IntegrationSubtype: FormControl<string | null | undefined>,
		IntegrationType: FormControl<IntegrationType | null | undefined>,
		IntegrationUri: FormControl<string | null | undefined>,
		PassthroughBehavior: FormControl<PassthroughBehavior | null | undefined>,
		PayloadFormatVersion: FormControl<string | null | undefined>,
		TemplateSelectionExpression: FormControl<string | null | undefined>,
		TimeoutInMillis: FormControl<number | null | undefined>,
	}
	export function CreateUpdateIntegrationRequestFormGroup() {
		return new FormGroup<UpdateIntegrationRequestFormProperties>({
			ConnectionId: new FormControl<string | null | undefined>(undefined),
			ConnectionType: new FormControl<ConnectionType | null | undefined>(undefined),
			ContentHandlingStrategy: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
			CredentialsArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			IntegrationMethod: new FormControl<string | null | undefined>(undefined),
			IntegrationSubtype: new FormControl<string | null | undefined>(undefined),
			IntegrationType: new FormControl<IntegrationType | null | undefined>(undefined),
			IntegrationUri: new FormControl<string | null | undefined>(undefined),
			PassthroughBehavior: new FormControl<PassthroughBehavior | null | undefined>(undefined),
			PayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
			TimeoutInMillis: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Updates an IntegrationResponses. */
	export interface UpdateIntegrationResponseRequest {
		ContentHandlingStrategy?: ContentHandlingStrategy;
		IntegrationResponseKey?: string;
		ResponseParameters?: IntegrationParameters;
		ResponseTemplates?: TemplateMap;
		TemplateSelectionExpression?: string;
	}

	/** Updates an IntegrationResponses. */
	export interface UpdateIntegrationResponseRequestFormProperties {
		ContentHandlingStrategy: FormControl<ContentHandlingStrategy | null | undefined>,
		IntegrationResponseKey: FormControl<string | null | undefined>,
		TemplateSelectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIntegrationResponseRequestFormGroup() {
		return new FormGroup<UpdateIntegrationResponseRequestFormProperties>({
			ContentHandlingStrategy: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
			IntegrationResponseKey: new FormControl<string | null | undefined>(undefined),
			TemplateSelectionExpression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates a Model. */
	export interface UpdateModelRequest {
		ContentType?: string;
		Description?: string;
		Name?: string;
		Schema?: string;
	}

	/** Updates a Model. */
	export interface UpdateModelRequestFormProperties {
		ContentType: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
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
		AuthorizationScopes?: Array<string>;
		AuthorizationType?: AuthorizationType;
		AuthorizerId?: string;
		ModelSelectionExpression?: string;
		OperationName?: string;
		RequestModels?: RouteModels;
		RequestParameters?: RouteParameters;
		RouteKey?: string;
		RouteResponseSelectionExpression?: string;
		Target?: string;
	}

	/** Updates a Route. */
	export interface UpdateRouteRequestFormProperties {
		ApiKeyRequired: FormControl<boolean | null | undefined>,
		AuthorizationType: FormControl<AuthorizationType | null | undefined>,
		AuthorizerId: FormControl<string | null | undefined>,
		ModelSelectionExpression: FormControl<string | null | undefined>,
		OperationName: FormControl<string | null | undefined>,
		RouteKey: FormControl<string | null | undefined>,
		RouteResponseSelectionExpression: FormControl<string | null | undefined>,
		Target: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRouteRequestFormGroup() {
		return new FormGroup<UpdateRouteRequestFormProperties>({
			ApiKeyRequired: new FormControl<boolean | null | undefined>(undefined),
			AuthorizationType: new FormControl<AuthorizationType | null | undefined>(undefined),
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
		ModelSelectionExpression?: string;
		ResponseModels?: RouteModels;
		ResponseParameters?: RouteParameters;
		RouteResponseKey?: string;
	}

	/** Updates a RouteResponse. */
	export interface UpdateRouteResponseRequestFormProperties {
		ModelSelectionExpression: FormControl<string | null | undefined>,
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
		AccessLogSettings?: AccessLogSettings;
		AutoDeploy?: boolean | null;
		ClientCertificateId?: string;
		DefaultRouteSettings?: RouteSettings;
		DeploymentId?: string;
		Description?: string;
		RouteSettings?: RouteSettingsMap;
		StageVariables?: StageVariablesMap;
	}

	/** Updates a Stage. */
	export interface UpdateStageRequestFormProperties {
		AutoDeploy: FormControl<boolean | null | undefined>,
		ClientCertificateId: FormControl<string | null | undefined>,
		DeploymentId: FormControl<string | null | undefined>,
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
		Name?: string;
	}

	/** Updates a VPC link. */
	export interface UpdateVpcLinkRequestFormProperties {
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
		 * Deletes a route request parameter. Supported only for WebSocket APIs.
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
		 * @param {string} stageName The stage name. Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.
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
		 * Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.
		 * Delete v2/apis/{apiId}/stages/{stageName}/cache/authorizers
		 * @param {string} apiId The API identifier.
		 * @param {string} stageName The stage name. Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.
		 * @return {void} 
		 */
		ResetAuthorizersCache(apiId: string, stageName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/apis/' + (apiId == null ? '' : encodeURIComponent(apiId)) + '/stages/' + (stageName == null ? '' : encodeURIComponent(stageName)) + '/cache/authorizers', { observe: 'response', responseType: 'text' });
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
			return this.http.get<GetTagsResponse>(this.baseUri + 'v2/tags/{resource_arn}', {});
		}

		/**
		 * Creates a new Tag resource to represent a tag.
		 * Post v2/tags/{resource_arn}
		 * @param {string} resource_arn The resource ARN for the tag.
		 * @return {void} 
		 */
		TagResource(resource_arn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/tags/{resource_arn}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Tag.
		 * Delete v2/tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn The resource ARN for the tag.
		 * @param {Array<string>} tagKeys The Tag keys to delete
		 * @return {void} 
		 */
		UntagResource(resource_arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/tags/{resource_arn}#tagKeys?' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
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

		/** Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint. */
		disableExecuteApiEndpoint?: boolean | null;

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		name: string;

		/**
		 * Represents a protocol type.
		 * Required
		 */
		protocolType: ProtocolType;

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

		/** Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint. */
		disableExecuteApiEndpoint: FormControl<boolean | null | undefined>,

		/**
		 * A string with a length between [1-128].
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Represents a protocol type.
		 * Required
		 */
		protocolType: FormControl<ProtocolType | null | undefined>,

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
			disableExecuteApiEndpoint: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			protocolType: new FormControl<ProtocolType | null | undefined>(undefined, [Validators.required]),
			routeKey: new FormControl<string | null | undefined>(undefined),
			routeSelectionExpression: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateApiPostBodyCorsConfiguration {
		AllowCredentials?: boolean | null;
		AllowHeaders?: Array<string>;
		AllowMethods?: Array<string>;
		AllowOrigins?: Array<string>;
		ExposeHeaders?: Array<string>;
		MaxAge?: number | null;
	}
	export interface CreateApiPostBodyCorsConfigurationFormProperties {
		AllowCredentials: FormControl<boolean | null | undefined>,
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
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
			apiId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			apiMappingKey: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAuthorizerPostBody {

		/** Represents an Amazon Resource Name (ARN). */
		authorizerCredentialsArn?: string | null;

		/** A string with a length between [1-64]. */
		authorizerPayloadFormatVersion?: string | null;

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		authorizerResultTtlInSeconds?: number | null;

		/**
		 * The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).
		 * Required
		 */
		authorizerType: AuthorizerType;

		/** A string representation of a URI with a length between [1-2048]. */
		authorizerUri?: string | null;

		/** Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a> */
		enableSimpleResponses?: boolean | null;

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

		/** A string with a length between [1-64]. */
		authorizerPayloadFormatVersion: FormControl<string | null | undefined>,

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		authorizerResultTtlInSeconds: FormControl<number | null | undefined>,

		/**
		 * The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).
		 * Required
		 */
		authorizerType: FormControl<AuthorizerType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		authorizerUri: FormControl<string | null | undefined>,

		/** Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a> */
		enableSimpleResponses: FormControl<boolean | null | undefined>,

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
			authorizerPayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			authorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(3600)]),
			authorizerType: new FormControl<AuthorizerType | null | undefined>(undefined, [Validators.required]),
			authorizerUri: new FormControl<string | null | undefined>(undefined),
			enableSimpleResponses: new FormControl<boolean | null | undefined>(undefined),
			identityValidationExpression: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAuthorizerPostBodyJwtConfiguration {
		Audience?: Array<string>;
		Issuer?: string;
	}
	export interface CreateAuthorizerPostBodyJwtConfigurationFormProperties {
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

		/** The mutual TLS authentication configuration for a custom domain name. */
		mutualTlsAuthentication?: CreateDomainNamePostBodyMutualTlsAuthentication;

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
			domainName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateDomainNamePostBodyMutualTlsAuthentication {
		TruststoreUri?: string;
		TruststoreVersion?: string;
	}
	export interface CreateDomainNamePostBodyMutualTlsAuthenticationFormProperties {
		TruststoreUri: FormControl<string | null | undefined>,
		TruststoreVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateDomainNamePostBodyMutualTlsAuthenticationFormGroup() {
		return new FormGroup<CreateDomainNamePostBodyMutualTlsAuthenticationFormProperties>({
			TruststoreUri: new FormControl<string | null | undefined>(undefined),
			TruststoreVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateIntegrationPostBody {

		/** A string with a length between [1-1024]. */
		connectionId?: string | null;

		/** Represents a connection type. */
		connectionType?: ConnectionType | null;

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		contentHandlingStrategy?: ContentHandlingStrategy | null;

		/** Represents an Amazon Resource Name (ARN). */
		credentialsArn?: string | null;

		/** A string with a length between [0-1024]. */
		description?: string | null;

		/** A string with a length between [1-64]. */
		integrationMethod?: string | null;

		/** A string with a length between [1-128]. */
		integrationSubtype?: string | null;

		/**
		 * Represents an API method integration type.
		 * Required
		 */
		integrationType: IntegrationType;

		/** A string representation of a URI with a length between [1-2048]. */
		integrationUri?: string | null;

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		passthroughBehavior?: PassthroughBehavior | null;

		/** A string with a length between [1-64]. */
		payloadFormatVersion?: string | null;

		/**
		 * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
		 * , where
		 * <replaceable>{location}</replaceable>
		 * is querystring, path, or header; and
		 * <replaceable>{name}</replaceable>
		 * must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
		 */
		requestParameters?: {[id: string]: string };

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		requestTemplates?: {[id: string]: string };

		/** Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. */
		responseParameters?: {[id: string]: IntegrationParameters };

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
		connectionType: FormControl<ConnectionType | null | undefined>,

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		contentHandlingStrategy: FormControl<ContentHandlingStrategy | null | undefined>,

		/** Represents an Amazon Resource Name (ARN). */
		credentialsArn: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		description: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		integrationMethod: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		integrationSubtype: FormControl<string | null | undefined>,

		/**
		 * Represents an API method integration type.
		 * Required
		 */
		integrationType: FormControl<IntegrationType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		integrationUri: FormControl<string | null | undefined>,

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		passthroughBehavior: FormControl<PassthroughBehavior | null | undefined>,

		/** A string with a length between [1-64]. */
		payloadFormatVersion: FormControl<string | null | undefined>,

		/**
		 * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
		 * , where
		 * <replaceable>{location}</replaceable>
		 * is querystring, path, or header; and
		 * <replaceable>{name}</replaceable>
		 * must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
		 */
		requestParameters: FormControl<{[id: string]: string } | null | undefined>,

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		requestTemplates: FormControl<{[id: string]: string } | null | undefined>,

		/** Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. */
		responseParameters: FormControl<{[id: string]: IntegrationParameters } | null | undefined>,

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
			connectionType: new FormControl<ConnectionType | null | undefined>(undefined),
			contentHandlingStrategy: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
			credentialsArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			integrationMethod: new FormControl<string | null | undefined>(undefined),
			integrationSubtype: new FormControl<string | null | undefined>(undefined),
			integrationType: new FormControl<IntegrationType | null | undefined>(undefined, [Validators.required]),
			integrationUri: new FormControl<string | null | undefined>(undefined),
			passthroughBehavior: new FormControl<PassthroughBehavior | null | undefined>(undefined),
			payloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			requestParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			requestTemplates: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			responseParameters: new FormControl<{[id: string]: IntegrationParameters } | null | undefined>(undefined),
			templateSelectionExpression: new FormControl<string | null | undefined>(undefined),
			timeoutInMillis: new FormControl<number | null | undefined>(undefined, [Validators.min(50), Validators.max(30000)]),
		});

	}

	export interface CreateIntegrationPostBodyTlsConfig {
		ServerNameToVerify?: string;
	}
	export interface CreateIntegrationPostBodyTlsConfigFormProperties {
		ServerNameToVerify: FormControl<string | null | undefined>,
	}
	export function CreateCreateIntegrationPostBodyTlsConfigFormGroup() {
		return new FormGroup<CreateIntegrationPostBodyTlsConfigFormProperties>({
			ServerNameToVerify: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateIntegrationResponsePostBody {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		contentHandlingStrategy?: ContentHandlingStrategy | null;

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		integrationResponseKey: string;

		/**
		 * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
		 * , where
		 * <replaceable>{location}</replaceable>
		 * is querystring, path, or header; and
		 * <replaceable>{name}</replaceable>
		 * must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
		 */
		responseParameters?: {[id: string]: string };

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		responseTemplates?: {[id: string]: string };

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		templateSelectionExpression?: string | null;
	}
	export interface CreateIntegrationResponsePostBodyFormProperties {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		contentHandlingStrategy: FormControl<ContentHandlingStrategy | null | undefined>,

		/**
		 * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
		 * Required
		 */
		integrationResponseKey: FormControl<string | null | undefined>,

		/**
		 * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
		 * , where
		 * <replaceable>{location}</replaceable>
		 * is querystring, path, or header; and
		 * <replaceable>{name}</replaceable>
		 * must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
		 */
		responseParameters: FormControl<{[id: string]: string } | null | undefined>,

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		responseTemplates: FormControl<{[id: string]: string } | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		templateSelectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateCreateIntegrationResponsePostBodyFormGroup() {
		return new FormGroup<CreateIntegrationResponsePostBodyFormProperties>({
			contentHandlingStrategy: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
			integrationResponseKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			schema: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRoutePostBody {

		/** Specifies whether an API key is required for the route. Supported only for WebSocket APIs. */
		apiKeyRequired?: boolean | null;

		/** A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes. */
		authorizationScopes?: Array<string>;

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. */
		authorizationType?: AuthorizationType | null;

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

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. */
		authorizationType: FormControl<AuthorizationType | null | undefined>,

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
			authorizationType: new FormControl<AuthorizationType | null | undefined>(undefined),
			authorizerId: new FormControl<string | null | undefined>(undefined),
			modelSelectionExpression: new FormControl<string | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
			requestModels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			requestParameters: new FormControl<{[id: string]: ParameterConstraints } | null | undefined>(undefined),
			routeKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
			routeResponseKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
			stageName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stageVariables: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateStagePostBodyAccessLogSettings {
		DestinationArn?: string;
		Format?: string;
	}
	export interface CreateStagePostBodyAccessLogSettingsFormProperties {
		DestinationArn: FormControl<string | null | undefined>,
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
		LoggingLevel?: LoggingLevel;
		ThrottlingBurstLimit?: number | null;
		ThrottlingRateLimit?: number | null;
	}
	export interface CreateStagePostBodyDefaultRouteSettingsFormProperties {
		DataTraceEnabled: FormControl<boolean | null | undefined>,
		DetailedMetricsEnabled: FormControl<boolean | null | undefined>,
		LoggingLevel: FormControl<LoggingLevel | null | undefined>,
		ThrottlingBurstLimit: FormControl<number | null | undefined>,
		ThrottlingRateLimit: FormControl<number | null | undefined>,
	}
	export function CreateCreateStagePostBodyDefaultRouteSettingsFormGroup() {
		return new FormGroup<CreateStagePostBodyDefaultRouteSettingsFormProperties>({
			DataTraceEnabled: new FormControl<boolean | null | undefined>(undefined),
			DetailedMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			LoggingLevel: new FormControl<LoggingLevel | null | undefined>(undefined),
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
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/** Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint. */
		disableExecuteApiEndpoint?: boolean | null;

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

		/** Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint. */
		disableExecuteApiEndpoint: FormControl<boolean | null | undefined>,

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
			disableExecuteApiEndpoint: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			routeKey: new FormControl<string | null | undefined>(undefined),
			routeSelectionExpression: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateApiPatchBodyCorsConfiguration {
		AllowCredentials?: boolean | null;
		AllowHeaders?: Array<string>;
		AllowMethods?: Array<string>;
		AllowOrigins?: Array<string>;
		ExposeHeaders?: Array<string>;
		MaxAge?: number | null;
	}
	export interface UpdateApiPatchBodyCorsConfigurationFormProperties {
		AllowCredentials: FormControl<boolean | null | undefined>,
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
			apiId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			apiMappingKey: new FormControl<string | null | undefined>(undefined),
			stage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAuthorizerPatchBody {

		/** Represents an Amazon Resource Name (ARN). */
		authorizerCredentialsArn?: string | null;

		/** A string with a length between [1-64]. */
		authorizerPayloadFormatVersion?: string | null;

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		authorizerResultTtlInSeconds?: number | null;

		/** The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs). */
		authorizerType?: AuthorizerType | null;

		/** A string representation of a URI with a length between [1-2048]. */
		authorizerUri?: string | null;

		/** Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a> */
		enableSimpleResponses?: boolean | null;

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

		/** A string with a length between [1-64]. */
		authorizerPayloadFormatVersion: FormControl<string | null | undefined>,

		/**
		 * An integer with a value between [0-3600].
		 * Minimum: 0
		 * Maximum: 3600
		 */
		authorizerResultTtlInSeconds: FormControl<number | null | undefined>,

		/** The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs). */
		authorizerType: FormControl<AuthorizerType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		authorizerUri: FormControl<string | null | undefined>,

		/** Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a> */
		enableSimpleResponses: FormControl<boolean | null | undefined>,

		/** A string with a length between [0-1024]. */
		identityValidationExpression: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAuthorizerPatchBodyFormGroup() {
		return new FormGroup<UpdateAuthorizerPatchBodyFormProperties>({
			authorizerCredentialsArn: new FormControl<string | null | undefined>(undefined),
			authorizerPayloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			authorizerResultTtlInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(3600)]),
			authorizerType: new FormControl<AuthorizerType | null | undefined>(undefined),
			authorizerUri: new FormControl<string | null | undefined>(undefined),
			enableSimpleResponses: new FormControl<boolean | null | undefined>(undefined),
			identityValidationExpression: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAuthorizerPatchBodyJwtConfiguration {
		Audience?: Array<string>;
		Issuer?: string;
	}
	export interface UpdateAuthorizerPatchBodyJwtConfigurationFormProperties {
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

		/** The mutual TLS authentication configuration for a custom domain name. */
		mutualTlsAuthentication?: UpdateDomainNamePatchBodyMutualTlsAuthentication;
	}
	export interface UpdateDomainNamePatchBodyFormProperties {
	}
	export function CreateUpdateDomainNamePatchBodyFormGroup() {
		return new FormGroup<UpdateDomainNamePatchBodyFormProperties>({
		});

	}

	export interface UpdateDomainNamePatchBodyMutualTlsAuthentication {
		TruststoreUri?: string;
		TruststoreVersion?: string;
	}
	export interface UpdateDomainNamePatchBodyMutualTlsAuthenticationFormProperties {
		TruststoreUri: FormControl<string | null | undefined>,
		TruststoreVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDomainNamePatchBodyMutualTlsAuthenticationFormGroup() {
		return new FormGroup<UpdateDomainNamePatchBodyMutualTlsAuthenticationFormProperties>({
			TruststoreUri: new FormControl<string | null | undefined>(undefined),
			TruststoreVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateIntegrationPatchBody {

		/** A string with a length between [1-1024]. */
		connectionId?: string | null;

		/** Represents a connection type. */
		connectionType?: ConnectionType | null;

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		contentHandlingStrategy?: ContentHandlingStrategy | null;

		/** Represents an Amazon Resource Name (ARN). */
		credentialsArn?: string | null;

		/** A string with a length between [0-1024]. */
		description?: string | null;

		/** A string with a length between [1-64]. */
		integrationMethod?: string | null;

		/** A string with a length between [1-128]. */
		integrationSubtype?: string | null;

		/** Represents an API method integration type. */
		integrationType?: IntegrationType | null;

		/** A string representation of a URI with a length between [1-2048]. */
		integrationUri?: string | null;

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		passthroughBehavior?: PassthroughBehavior | null;

		/** A string with a length between [1-64]. */
		payloadFormatVersion?: string | null;

		/**
		 * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
		 * , where
		 * <replaceable>{location}</replaceable>
		 * is querystring, path, or header; and
		 * <replaceable>{name}</replaceable>
		 * must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
		 */
		requestParameters?: {[id: string]: string };

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		requestTemplates?: {[id: string]: string };

		/** Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. */
		responseParameters?: {[id: string]: IntegrationParameters };

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
		connectionType: FormControl<ConnectionType | null | undefined>,

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		contentHandlingStrategy: FormControl<ContentHandlingStrategy | null | undefined>,

		/** Represents an Amazon Resource Name (ARN). */
		credentialsArn: FormControl<string | null | undefined>,

		/** A string with a length between [0-1024]. */
		description: FormControl<string | null | undefined>,

		/** A string with a length between [1-64]. */
		integrationMethod: FormControl<string | null | undefined>,

		/** A string with a length between [1-128]. */
		integrationSubtype: FormControl<string | null | undefined>,

		/** Represents an API method integration type. */
		integrationType: FormControl<IntegrationType | null | undefined>,

		/** A string representation of a URI with a length between [1-2048]. */
		integrationUri: FormControl<string | null | undefined>,

		/** Represents passthrough behavior for an integration response. Supported only for WebSocket APIs. */
		passthroughBehavior: FormControl<PassthroughBehavior | null | undefined>,

		/** A string with a length between [1-64]. */
		payloadFormatVersion: FormControl<string | null | undefined>,

		/**
		 * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
		 * , where
		 * <replaceable>{location}</replaceable>
		 * is querystring, path, or header; and
		 * <replaceable>{name}</replaceable>
		 * must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
		 */
		requestParameters: FormControl<{[id: string]: string } | null | undefined>,

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		requestTemplates: FormControl<{[id: string]: string } | null | undefined>,

		/** Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. */
		responseParameters: FormControl<{[id: string]: IntegrationParameters } | null | undefined>,

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
			connectionType: new FormControl<ConnectionType | null | undefined>(undefined),
			contentHandlingStrategy: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
			credentialsArn: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			integrationMethod: new FormControl<string | null | undefined>(undefined),
			integrationSubtype: new FormControl<string | null | undefined>(undefined),
			integrationType: new FormControl<IntegrationType | null | undefined>(undefined),
			integrationUri: new FormControl<string | null | undefined>(undefined),
			passthroughBehavior: new FormControl<PassthroughBehavior | null | undefined>(undefined),
			payloadFormatVersion: new FormControl<string | null | undefined>(undefined),
			requestParameters: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			requestTemplates: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			responseParameters: new FormControl<{[id: string]: IntegrationParameters } | null | undefined>(undefined),
			templateSelectionExpression: new FormControl<string | null | undefined>(undefined),
			timeoutInMillis: new FormControl<number | null | undefined>(undefined, [Validators.min(50), Validators.max(30000)]),
		});

	}

	export interface UpdateIntegrationPatchBodyTlsConfig {
		ServerNameToVerify?: string;
	}
	export interface UpdateIntegrationPatchBodyTlsConfigFormProperties {
		ServerNameToVerify: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIntegrationPatchBodyTlsConfigFormGroup() {
		return new FormGroup<UpdateIntegrationPatchBodyTlsConfigFormProperties>({
			ServerNameToVerify: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateIntegrationResponsePatchBody {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		contentHandlingStrategy?: ContentHandlingStrategy | null;

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		integrationResponseKey?: string | null;

		/**
		 * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
		 * , where
		 * <replaceable>{location}</replaceable>
		 * is querystring, path, or header; and
		 * <replaceable>{name}</replaceable>
		 * must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
		 */
		responseParameters?: {[id: string]: string };

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		responseTemplates?: {[id: string]: string };

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		templateSelectionExpression?: string | null;
	}
	export interface UpdateIntegrationResponsePatchBodyFormProperties {

		/** Specifies how to handle response payload content type conversions. Supported only for WebSocket APIs. */
		contentHandlingStrategy: FormControl<ContentHandlingStrategy | null | undefined>,

		/** After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type. */
		integrationResponseKey: FormControl<string | null | undefined>,

		/**
		 * <p>For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.<replaceable>{location}</replaceable>.<replaceable>{name}</replaceable>
		 * , where
		 * <replaceable>{location}</replaceable>
		 * is querystring, path, or header; and
		 * <replaceable>{name}</replaceable>
		 * must be a valid and unique method request parameter name.</p> <p>For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html">Working with AWS service integrations for HTTP APIs</a>.</p> <p>For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html">Transforming API requests and responses</a>.</p>
		 */
		responseParameters: FormControl<{[id: string]: string } | null | undefined>,

		/** A mapping of identifier keys to templates. The value is an actual template script. The key is typically a SelectionKey which is chosen based on evaluating a selection expression. */
		responseTemplates: FormControl<{[id: string]: string } | null | undefined>,

		/** An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information. */
		templateSelectionExpression: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIntegrationResponsePatchBodyFormGroup() {
		return new FormGroup<UpdateIntegrationResponsePatchBodyFormProperties>({
			contentHandlingStrategy: new FormControl<ContentHandlingStrategy | null | undefined>(undefined),
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

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. */
		authorizationType?: AuthorizationType | null;

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

		/** The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. */
		authorizationType: FormControl<AuthorizationType | null | undefined>,

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
			authorizationType: new FormControl<AuthorizationType | null | undefined>(undefined),
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
		DestinationArn?: string;
		Format?: string;
	}
	export interface UpdateStagePatchBodyAccessLogSettingsFormProperties {
		DestinationArn: FormControl<string | null | undefined>,
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
		LoggingLevel?: LoggingLevel;
		ThrottlingBurstLimit?: number | null;
		ThrottlingRateLimit?: number | null;
	}
	export interface UpdateStagePatchBodyDefaultRouteSettingsFormProperties {
		DataTraceEnabled: FormControl<boolean | null | undefined>,
		DetailedMetricsEnabled: FormControl<boolean | null | undefined>,
		LoggingLevel: FormControl<LoggingLevel | null | undefined>,
		ThrottlingBurstLimit: FormControl<number | null | undefined>,
		ThrottlingRateLimit: FormControl<number | null | undefined>,
	}
	export function CreateUpdateStagePatchBodyDefaultRouteSettingsFormGroup() {
		return new FormGroup<UpdateStagePatchBodyDefaultRouteSettingsFormProperties>({
			DataTraceEnabled: new FormControl<boolean | null | undefined>(undefined),
			DetailedMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			LoggingLevel: new FormControl<LoggingLevel | null | undefined>(undefined),
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

