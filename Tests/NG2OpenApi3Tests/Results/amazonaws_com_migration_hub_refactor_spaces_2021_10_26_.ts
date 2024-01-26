import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateApplicationResponse {
		ApiGatewayProxy?: ApiGatewayProxyInput;
		ApplicationId?: string;
		Arn?: string;
		CreatedByAccountId?: string;
		CreatedTime?: Date;
		EnvironmentId?: string;
		LastUpdatedTime?: Date;
		Name?: string;
		OwnerAccountId?: string;
		ProxyType?: ProxyType;
		State?: ApplicationState;
		Tags?: TagMap;
		VpcId?: string;
	}
	export interface CreateApplicationResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		CreatedByAccountId: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		ProxyType: FormControl<ProxyType | null | undefined>,
		State: FormControl<ApplicationState | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationResponseFormGroup() {
		return new FormGroup<CreateApplicationResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedByAccountId: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			ProxyType: new FormControl<ProxyType | null | undefined>(undefined),
			State: new FormControl<ApplicationState | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A wrapper object holding the Amazon API Gateway endpoint input.  */
	export interface ApiGatewayProxyInput {
		EndpointType?: ApiGatewayEndpointType;
		StageName?: string;
	}

	/** A wrapper object holding the Amazon API Gateway endpoint input.  */
	export interface ApiGatewayProxyInputFormProperties {
		EndpointType: FormControl<ApiGatewayEndpointType | null | undefined>,
		StageName: FormControl<string | null | undefined>,
	}
	export function CreateApiGatewayProxyInputFormGroup() {
		return new FormGroup<ApiGatewayProxyInputFormProperties>({
			EndpointType: new FormControl<ApiGatewayEndpointType | null | undefined>(undefined),
			StageName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApiGatewayEndpointType { REGIONAL = 0, PRIVATE = 1 }

	export enum ProxyType { API_GATEWAY = 0 }

	export enum ApplicationState { CREATING = 0, ACTIVE = 1, DELETING = 2, FAILED = 3, UPDATING = 4 }


	/** A collection of up to 50 unique tags */
	export interface TagMap {
	}

	/** A collection of up to 50 unique tags */
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface CreateEnvironmentResponse {
		Arn?: string;
		CreatedTime?: Date;
		Description?: string;
		EnvironmentId?: string;
		LastUpdatedTime?: Date;
		Name?: string;
		NetworkFabricType?: NetworkFabricType;
		OwnerAccountId?: string;
		State?: EnvironmentState;
		Tags?: TagMap;
	}
	export interface CreateEnvironmentResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		NetworkFabricType: FormControl<NetworkFabricType | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		State: FormControl<EnvironmentState | null | undefined>,
	}
	export function CreateCreateEnvironmentResponseFormGroup() {
		return new FormGroup<CreateEnvironmentResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			NetworkFabricType: new FormControl<NetworkFabricType | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EnvironmentState | null | undefined>(undefined),
		});

	}

	export enum NetworkFabricType { TRANSIT_GATEWAY = 0, NONE = 1 }

	export enum EnvironmentState { CREATING = 0, ACTIVE = 1, DELETING = 2, FAILED = 3 }

	export interface CreateRouteResponse {
		ApplicationId?: string;
		Arn?: string;
		CreatedByAccountId?: string;
		CreatedTime?: Date;
		LastUpdatedTime?: Date;
		OwnerAccountId?: string;
		RouteId?: string;
		RouteType?: RouteType;
		ServiceId?: string;
		State?: RouteState;
		Tags?: TagMap;
		UriPathRoute?: UriPathRouteInput;
	}
	export interface CreateRouteResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		CreatedByAccountId: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		RouteId: FormControl<string | null | undefined>,
		RouteType: FormControl<RouteType | null | undefined>,
		ServiceId: FormControl<string | null | undefined>,
		State: FormControl<RouteState | null | undefined>,
	}
	export function CreateCreateRouteResponseFormGroup() {
		return new FormGroup<CreateRouteResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedByAccountId: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			RouteId: new FormControl<string | null | undefined>(undefined),
			RouteType: new FormControl<RouteType | null | undefined>(undefined),
			ServiceId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<RouteState | null | undefined>(undefined),
		});

	}

	export enum RouteType { DEFAULT = 0, URI_PATH = 1 }

	export enum RouteState { CREATING = 0, ACTIVE = 1, DELETING = 2, FAILED = 3, UPDATING = 4, INACTIVE = 5 }


	/** The configuration for the URI path route type.  */
	export interface UriPathRouteInput {

		/** Required */
		ActivationState: RouteActivationState;
		AppendSourcePath?: boolean | null;
		IncludeChildPaths?: boolean | null;
		Methods?: Array<HttpMethod>;

		/** Required */
		SourcePath: string;
	}

	/** The configuration for the URI path route type.  */
	export interface UriPathRouteInputFormProperties {

		/** Required */
		ActivationState: FormControl<RouteActivationState | null | undefined>,
		AppendSourcePath: FormControl<boolean | null | undefined>,
		IncludeChildPaths: FormControl<boolean | null | undefined>,

		/** Required */
		SourcePath: FormControl<string | null | undefined>,
	}
	export function CreateUriPathRouteInputFormGroup() {
		return new FormGroup<UriPathRouteInputFormProperties>({
			ActivationState: new FormControl<RouteActivationState | null | undefined>(undefined, [Validators.required]),
			AppendSourcePath: new FormControl<boolean | null | undefined>(undefined),
			IncludeChildPaths: new FormControl<boolean | null | undefined>(undefined),
			SourcePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RouteActivationState { ACTIVE = 0, INACTIVE = 1 }

	export enum HttpMethod { DELETE = 0, GET = 1, HEAD = 2, OPTIONS = 3, PATCH = 4, POST = 5, PUT = 6 }

	export interface CreateServiceResponse {
		ApplicationId?: string;
		Arn?: string;
		CreatedByAccountId?: string;
		CreatedTime?: Date;
		Description?: string;
		EndpointType?: ServiceEndpointType;
		EnvironmentId?: string;
		LambdaEndpoint?: LambdaEndpointInput;
		LastUpdatedTime?: Date;
		Name?: string;
		OwnerAccountId?: string;
		ServiceId?: string;
		State?: EnvironmentState;
		Tags?: TagMap;
		UrlEndpoint?: UrlEndpointInput;
		VpcId?: string;
	}
	export interface CreateServiceResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		CreatedByAccountId: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EndpointType: FormControl<ServiceEndpointType | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		ServiceId: FormControl<string | null | undefined>,
		State: FormControl<EnvironmentState | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceResponseFormGroup() {
		return new FormGroup<CreateServiceResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedByAccountId: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EndpointType: new FormControl<ServiceEndpointType | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			ServiceId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EnvironmentState | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServiceEndpointType { LAMBDA = 0, URL = 1 }


	/** The input for the Lambda endpoint type.  */
	export interface LambdaEndpointInput {

		/** Required */
		Arn: string;
	}

	/** The input for the Lambda endpoint type.  */
	export interface LambdaEndpointInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateLambdaEndpointInputFormGroup() {
		return new FormGroup<LambdaEndpointInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The configuration for the URL endpoint type.  */
	export interface UrlEndpointInput {
		HealthUrl?: string;

		/** Required */
		Url: string;
	}

	/** The configuration for the URL endpoint type.  */
	export interface UrlEndpointInputFormProperties {
		HealthUrl: FormControl<string | null | undefined>,

		/** Required */
		Url: FormControl<string | null | undefined>,
	}
	export function CreateUrlEndpointInputFormGroup() {
		return new FormGroup<UrlEndpointInputFormProperties>({
			HealthUrl: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteApplicationResponse {
		ApplicationId?: string;
		Arn?: string;
		EnvironmentId?: string;
		LastUpdatedTime?: Date;
		Name?: string;
		State?: ApplicationState;
	}
	export interface DeleteApplicationResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<ApplicationState | null | undefined>,
	}
	export function CreateDeleteApplicationResponseFormGroup() {
		return new FormGroup<DeleteApplicationResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ApplicationState | null | undefined>(undefined),
		});

	}

	export interface DeleteEnvironmentResponse {
		Arn?: string;
		EnvironmentId?: string;
		LastUpdatedTime?: Date;
		Name?: string;
		State?: EnvironmentState;
	}
	export interface DeleteEnvironmentResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<EnvironmentState | null | undefined>,
	}
	export function CreateDeleteEnvironmentResponseFormGroup() {
		return new FormGroup<DeleteEnvironmentResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EnvironmentState | null | undefined>(undefined),
		});

	}

	export interface DeleteResourcePolicyResponse {
	}
	export interface DeleteResourcePolicyResponseFormProperties {
	}
	export function CreateDeleteResourcePolicyResponseFormGroup() {
		return new FormGroup<DeleteResourcePolicyResponseFormProperties>({
		});

	}

	export interface DeleteRouteResponse {
		ApplicationId?: string;
		Arn?: string;
		LastUpdatedTime?: Date;
		RouteId?: string;
		ServiceId?: string;
		State?: RouteState;
	}
	export interface DeleteRouteResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		RouteId: FormControl<string | null | undefined>,
		ServiceId: FormControl<string | null | undefined>,
		State: FormControl<RouteState | null | undefined>,
	}
	export function CreateDeleteRouteResponseFormGroup() {
		return new FormGroup<DeleteRouteResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			RouteId: new FormControl<string | null | undefined>(undefined),
			ServiceId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<RouteState | null | undefined>(undefined),
		});

	}

	export interface DeleteServiceResponse {
		ApplicationId?: string;
		Arn?: string;
		EnvironmentId?: string;
		LastUpdatedTime?: Date;
		Name?: string;
		ServiceId?: string;
		State?: EnvironmentState;
	}
	export interface DeleteServiceResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ServiceId: FormControl<string | null | undefined>,
		State: FormControl<EnvironmentState | null | undefined>,
	}
	export function CreateDeleteServiceResponseFormGroup() {
		return new FormGroup<DeleteServiceResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ServiceId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EnvironmentState | null | undefined>(undefined),
		});

	}

	export interface GetApplicationResponse {
		ApiGatewayProxy?: ApiGatewayProxyConfig;
		ApplicationId?: string;
		Arn?: string;
		CreatedByAccountId?: string;
		CreatedTime?: Date;
		EnvironmentId?: string;
		Error?: ErrorResponse;
		LastUpdatedTime?: Date;
		Name?: string;
		OwnerAccountId?: string;
		ProxyType?: ProxyType;
		State?: ApplicationState;
		Tags?: TagMap;
		VpcId?: string;
	}
	export interface GetApplicationResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		CreatedByAccountId: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		ProxyType: FormControl<ProxyType | null | undefined>,
		State: FormControl<ApplicationState | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateGetApplicationResponseFormGroup() {
		return new FormGroup<GetApplicationResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedByAccountId: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			ProxyType: new FormControl<ProxyType | null | undefined>(undefined),
			State: new FormControl<ApplicationState | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A wrapper object holding the Amazon API Gateway proxy configuration.  */
	export interface ApiGatewayProxyConfig {
		ApiGatewayId?: string;
		EndpointType?: ApiGatewayEndpointType;
		NlbArn?: string;
		NlbName?: string;
		ProxyUrl?: string;
		StageName?: string;
		VpcLinkId?: string;
	}

	/** A wrapper object holding the Amazon API Gateway proxy configuration.  */
	export interface ApiGatewayProxyConfigFormProperties {
		ApiGatewayId: FormControl<string | null | undefined>,
		EndpointType: FormControl<ApiGatewayEndpointType | null | undefined>,
		NlbArn: FormControl<string | null | undefined>,
		NlbName: FormControl<string | null | undefined>,
		ProxyUrl: FormControl<string | null | undefined>,
		StageName: FormControl<string | null | undefined>,
		VpcLinkId: FormControl<string | null | undefined>,
	}
	export function CreateApiGatewayProxyConfigFormGroup() {
		return new FormGroup<ApiGatewayProxyConfigFormProperties>({
			ApiGatewayId: new FormControl<string | null | undefined>(undefined),
			EndpointType: new FormControl<ApiGatewayEndpointType | null | undefined>(undefined),
			NlbArn: new FormControl<string | null | undefined>(undefined),
			NlbName: new FormControl<string | null | undefined>(undefined),
			ProxyUrl: new FormControl<string | null | undefined>(undefined),
			StageName: new FormControl<string | null | undefined>(undefined),
			VpcLinkId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error associated with a resource returned for a Get or List resource response.  */
	export interface ErrorResponse {
		AccountId?: string;
		AdditionalDetails?: AdditionalDetails;
		Code?: ErrorCode;
		Message?: string;
		ResourceIdentifier?: string;
		ResourceType?: ErrorResourceType;
	}

	/** Error associated with a resource returned for a Get or List resource response.  */
	export interface ErrorResponseFormProperties {
		AccountId: FormControl<string | null | undefined>,
		Code: FormControl<ErrorCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
		ResourceIdentifier: FormControl<string | null | undefined>,
		ResourceType: FormControl<ErrorResourceType | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			Code: new FormControl<ErrorCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			ResourceIdentifier: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ErrorResourceType | null | undefined>(undefined),
		});

	}

	export interface AdditionalDetails {
	}
	export interface AdditionalDetailsFormProperties {
	}
	export function CreateAdditionalDetailsFormGroup() {
		return new FormGroup<AdditionalDetailsFormProperties>({
		});

	}

	export enum ErrorCode { INVALID_RESOURCE_STATE = 0, RESOURCE_LIMIT_EXCEEDED = 1, RESOURCE_CREATION_FAILURE = 2, RESOURCE_UPDATE_FAILURE = 3, SERVICE_ENDPOINT_HEALTH_CHECK_FAILURE = 4, RESOURCE_DELETION_FAILURE = 5, RESOURCE_RETRIEVAL_FAILURE = 6, RESOURCE_IN_USE = 7, RESOURCE_NOT_FOUND = 8, STATE_TRANSITION_FAILURE = 9, REQUEST_LIMIT_EXCEEDED = 10, NOT_AUTHORIZED = 11 }

	export enum ErrorResourceType { ENVIRONMENT = 0, APPLICATION = 1, ROUTE = 2, SERVICE = 3, TRANSIT_GATEWAY = 4, TRANSIT_GATEWAY_ATTACHMENT = 5, API_GATEWAY = 6, NLB = 7, TARGET_GROUP = 8, LOAD_BALANCER_LISTENER = 9, VPC_LINK = 10, LAMBDA = 11, VPC = 12, SUBNET = 13, ROUTE_TABLE = 14, SECURITY_GROUP = 15, VPC_ENDPOINT_SERVICE_CONFIGURATION = 16, RESOURCE_SHARE = 17, IAM_ROLE = 18 }

	export interface GetEnvironmentResponse {
		Arn?: string;
		CreatedTime?: Date;
		Description?: string;
		EnvironmentId?: string;
		Error?: ErrorResponse;
		LastUpdatedTime?: Date;
		Name?: string;
		NetworkFabricType?: NetworkFabricType;
		OwnerAccountId?: string;
		State?: EnvironmentState;
		Tags?: TagMap;
		TransitGatewayId?: string;
	}
	export interface GetEnvironmentResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		NetworkFabricType: FormControl<NetworkFabricType | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		State: FormControl<EnvironmentState | null | undefined>,
		TransitGatewayId: FormControl<string | null | undefined>,
	}
	export function CreateGetEnvironmentResponseFormGroup() {
		return new FormGroup<GetEnvironmentResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			NetworkFabricType: new FormControl<NetworkFabricType | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EnvironmentState | null | undefined>(undefined),
			TransitGatewayId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetResourcePolicyResponse {
		Policy?: string;
	}
	export interface GetResourcePolicyResponseFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePolicyResponseFormGroup() {
		return new FormGroup<GetResourcePolicyResponseFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRouteResponse {
		AppendSourcePath?: boolean | null;
		ApplicationId?: string;
		Arn?: string;
		CreatedByAccountId?: string;
		CreatedTime?: Date;
		EnvironmentId?: string;
		Error?: ErrorResponse;
		IncludeChildPaths?: boolean | null;
		LastUpdatedTime?: Date;
		Methods?: Array<HttpMethod>;
		OwnerAccountId?: string;
		PathResourceToId?: PathResourceToId;
		RouteId?: string;
		RouteType?: RouteType;
		ServiceId?: string;
		SourcePath?: string;
		State?: RouteState;
		Tags?: TagMap;
	}
	export interface GetRouteResponseFormProperties {
		AppendSourcePath: FormControl<boolean | null | undefined>,
		ApplicationId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		CreatedByAccountId: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		IncludeChildPaths: FormControl<boolean | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		RouteId: FormControl<string | null | undefined>,
		RouteType: FormControl<RouteType | null | undefined>,
		ServiceId: FormControl<string | null | undefined>,
		SourcePath: FormControl<string | null | undefined>,
		State: FormControl<RouteState | null | undefined>,
	}
	export function CreateGetRouteResponseFormGroup() {
		return new FormGroup<GetRouteResponseFormProperties>({
			AppendSourcePath: new FormControl<boolean | null | undefined>(undefined),
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedByAccountId: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			IncludeChildPaths: new FormControl<boolean | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			RouteId: new FormControl<string | null | undefined>(undefined),
			RouteType: new FormControl<RouteType | null | undefined>(undefined),
			ServiceId: new FormControl<string | null | undefined>(undefined),
			SourcePath: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<RouteState | null | undefined>(undefined),
		});

	}

	export interface PathResourceToId {
	}
	export interface PathResourceToIdFormProperties {
	}
	export function CreatePathResourceToIdFormGroup() {
		return new FormGroup<PathResourceToIdFormProperties>({
		});

	}

	export interface GetServiceResponse {
		ApplicationId?: string;
		Arn?: string;
		CreatedByAccountId?: string;
		CreatedTime?: Date;
		Description?: string;
		EndpointType?: ServiceEndpointType;
		EnvironmentId?: string;
		Error?: ErrorResponse;
		LambdaEndpoint?: LambdaEndpointConfig;
		LastUpdatedTime?: Date;
		Name?: string;
		OwnerAccountId?: string;
		ServiceId?: string;
		State?: EnvironmentState;
		Tags?: TagMap;
		UrlEndpoint?: UrlEndpointConfig;
		VpcId?: string;
	}
	export interface GetServiceResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		CreatedByAccountId: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EndpointType: FormControl<ServiceEndpointType | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		ServiceId: FormControl<string | null | undefined>,
		State: FormControl<EnvironmentState | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceResponseFormGroup() {
		return new FormGroup<GetServiceResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedByAccountId: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EndpointType: new FormControl<ServiceEndpointType | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			ServiceId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EnvironmentState | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for the Lambda endpoint type.  */
	export interface LambdaEndpointConfig {
		Arn?: string;
	}

	/** The configuration for the Lambda endpoint type.  */
	export interface LambdaEndpointConfigFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateLambdaEndpointConfigFormGroup() {
		return new FormGroup<LambdaEndpointConfigFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration for the URL endpoint type.  */
	export interface UrlEndpointConfig {
		HealthUrl?: string;
		Url?: string;
	}

	/** The configuration for the URL endpoint type.  */
	export interface UrlEndpointConfigFormProperties {
		HealthUrl: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateUrlEndpointConfigFormGroup() {
		return new FormGroup<UrlEndpointConfigFormProperties>({
			HealthUrl: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListApplicationsResponse {
		ApplicationSummaryList?: Array<ApplicationSummary>;
		NextToken?: string;
	}
	export interface ListApplicationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsResponseFormGroup() {
		return new FormGroup<ListApplicationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of <code>ApplicationSummary</code> objects.  */
	export interface ApplicationSummary {
		ApiGatewayProxy?: ApiGatewayProxySummary;
		ApplicationId?: string;
		Arn?: string;
		CreatedByAccountId?: string;
		CreatedTime?: Date;
		EnvironmentId?: string;
		Error?: ErrorResponse;
		LastUpdatedTime?: Date;
		Name?: string;
		OwnerAccountId?: string;
		ProxyType?: ProxyType;
		State?: ApplicationState;
		Tags?: TagMap;
		VpcId?: string;
	}

	/** The list of <code>ApplicationSummary</code> objects.  */
	export interface ApplicationSummaryFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		CreatedByAccountId: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		ProxyType: FormControl<ProxyType | null | undefined>,
		State: FormControl<ApplicationState | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateApplicationSummaryFormGroup() {
		return new FormGroup<ApplicationSummaryFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedByAccountId: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			ProxyType: new FormControl<ProxyType | null | undefined>(undefined),
			State: new FormControl<ApplicationState | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A wrapper object holding the Amazon API Gateway proxy summary.  */
	export interface ApiGatewayProxySummary {
		ApiGatewayId?: string;
		EndpointType?: ApiGatewayEndpointType;
		NlbArn?: string;
		NlbName?: string;
		ProxyUrl?: string;
		StageName?: string;
		VpcLinkId?: string;
	}

	/** A wrapper object holding the Amazon API Gateway proxy summary.  */
	export interface ApiGatewayProxySummaryFormProperties {
		ApiGatewayId: FormControl<string | null | undefined>,
		EndpointType: FormControl<ApiGatewayEndpointType | null | undefined>,
		NlbArn: FormControl<string | null | undefined>,
		NlbName: FormControl<string | null | undefined>,
		ProxyUrl: FormControl<string | null | undefined>,
		StageName: FormControl<string | null | undefined>,
		VpcLinkId: FormControl<string | null | undefined>,
	}
	export function CreateApiGatewayProxySummaryFormGroup() {
		return new FormGroup<ApiGatewayProxySummaryFormProperties>({
			ApiGatewayId: new FormControl<string | null | undefined>(undefined),
			EndpointType: new FormControl<ApiGatewayEndpointType | null | undefined>(undefined),
			NlbArn: new FormControl<string | null | undefined>(undefined),
			NlbName: new FormControl<string | null | undefined>(undefined),
			ProxyUrl: new FormControl<string | null | undefined>(undefined),
			StageName: new FormControl<string | null | undefined>(undefined),
			VpcLinkId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEnvironmentVpcsResponse {
		EnvironmentVpcList?: Array<EnvironmentVpc>;
		NextToken?: string;
	}
	export interface ListEnvironmentVpcsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentVpcsResponseFormGroup() {
		return new FormGroup<ListEnvironmentVpcsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides summary information for the <code>EnvironmentVpc</code> resource as a response to <code>ListEnvironmentVpc</code>. */
	export interface EnvironmentVpc {
		AccountId?: string;
		CidrBlocks?: Array<string>;
		CreatedTime?: Date;
		EnvironmentId?: string;
		LastUpdatedTime?: Date;
		VpcId?: string;
		VpcName?: string;
	}

	/** Provides summary information for the <code>EnvironmentVpc</code> resource as a response to <code>ListEnvironmentVpc</code>. */
	export interface EnvironmentVpcFormProperties {
		AccountId: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
		VpcName: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentVpcFormGroup() {
		return new FormGroup<EnvironmentVpcFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
			VpcName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEnvironmentsResponse {
		EnvironmentSummaryList?: Array<EnvironmentSummary>;
		NextToken?: string;
	}
	export interface ListEnvironmentsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentsResponseFormGroup() {
		return new FormGroup<ListEnvironmentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary information for environments as a response to <code>ListEnvironments</code>.  */
	export interface EnvironmentSummary {
		Arn?: string;
		CreatedTime?: Date;
		Description?: string;
		EnvironmentId?: string;
		Error?: ErrorResponse;
		LastUpdatedTime?: Date;
		Name?: string;
		NetworkFabricType?: NetworkFabricType;
		OwnerAccountId?: string;
		State?: EnvironmentState;
		Tags?: TagMap;
		TransitGatewayId?: string;
	}

	/** The summary information for environments as a response to <code>ListEnvironments</code>.  */
	export interface EnvironmentSummaryFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		NetworkFabricType: FormControl<NetworkFabricType | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		State: FormControl<EnvironmentState | null | undefined>,
		TransitGatewayId: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentSummaryFormGroup() {
		return new FormGroup<EnvironmentSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			NetworkFabricType: new FormControl<NetworkFabricType | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EnvironmentState | null | undefined>(undefined),
			TransitGatewayId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRoutesResponse {
		NextToken?: string;
		RouteSummaryList?: Array<RouteSummary>;
	}
	export interface ListRoutesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRoutesResponseFormGroup() {
		return new FormGroup<ListRoutesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary information for the routes as a response to <code>ListRoutes</code>.  */
	export interface RouteSummary {
		AppendSourcePath?: boolean | null;
		ApplicationId?: string;
		Arn?: string;
		CreatedByAccountId?: string;
		CreatedTime?: Date;
		EnvironmentId?: string;
		Error?: ErrorResponse;
		IncludeChildPaths?: boolean | null;
		LastUpdatedTime?: Date;
		Methods?: Array<HttpMethod>;
		OwnerAccountId?: string;
		PathResourceToId?: PathResourceToId;
		RouteId?: string;
		RouteType?: RouteType;
		ServiceId?: string;
		SourcePath?: string;
		State?: RouteState;
		Tags?: TagMap;
	}

	/** The summary information for the routes as a response to <code>ListRoutes</code>.  */
	export interface RouteSummaryFormProperties {
		AppendSourcePath: FormControl<boolean | null | undefined>,
		ApplicationId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		CreatedByAccountId: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		IncludeChildPaths: FormControl<boolean | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		RouteId: FormControl<string | null | undefined>,
		RouteType: FormControl<RouteType | null | undefined>,
		ServiceId: FormControl<string | null | undefined>,
		SourcePath: FormControl<string | null | undefined>,
		State: FormControl<RouteState | null | undefined>,
	}
	export function CreateRouteSummaryFormGroup() {
		return new FormGroup<RouteSummaryFormProperties>({
			AppendSourcePath: new FormControl<boolean | null | undefined>(undefined),
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedByAccountId: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			IncludeChildPaths: new FormControl<boolean | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			RouteId: new FormControl<string | null | undefined>(undefined),
			RouteType: new FormControl<RouteType | null | undefined>(undefined),
			ServiceId: new FormControl<string | null | undefined>(undefined),
			SourcePath: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<RouteState | null | undefined>(undefined),
		});

	}

	export interface ListServicesResponse {
		NextToken?: string;
		ServiceSummaryList?: Array<ServiceSummary>;
	}
	export interface ListServicesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServicesResponseFormGroup() {
		return new FormGroup<ListServicesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary for the service as a response to <code>ListServices</code>.  */
	export interface ServiceSummary {
		ApplicationId?: string;
		Arn?: string;
		CreatedByAccountId?: string;
		CreatedTime?: Date;
		Description?: string;
		EndpointType?: ServiceEndpointType;
		EnvironmentId?: string;
		Error?: ErrorResponse;
		LambdaEndpoint?: LambdaEndpointSummary;
		LastUpdatedTime?: Date;
		Name?: string;
		OwnerAccountId?: string;
		ServiceId?: string;
		State?: EnvironmentState;
		Tags?: TagMap;
		UrlEndpoint?: UrlEndpointSummary;
		VpcId?: string;
	}

	/** A summary for the service as a response to <code>ListServices</code>.  */
	export interface ServiceSummaryFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		CreatedByAccountId: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EndpointType: FormControl<ServiceEndpointType | null | undefined>,
		EnvironmentId: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		OwnerAccountId: FormControl<string | null | undefined>,
		ServiceId: FormControl<string | null | undefined>,
		State: FormControl<EnvironmentState | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateServiceSummaryFormGroup() {
		return new FormGroup<ServiceSummaryFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedByAccountId: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EndpointType: new FormControl<ServiceEndpointType | null | undefined>(undefined),
			EnvironmentId: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			OwnerAccountId: new FormControl<string | null | undefined>(undefined),
			ServiceId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EnvironmentState | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary for the Lambda endpoint type.  */
	export interface LambdaEndpointSummary {
		Arn?: string;
	}

	/** The summary for the Lambda endpoint type.  */
	export interface LambdaEndpointSummaryFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateLambdaEndpointSummaryFormGroup() {
		return new FormGroup<LambdaEndpointSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The summary of the configuration for the URL endpoint type.  */
	export interface UrlEndpointSummary {
		HealthUrl?: string;
		Url?: string;
	}

	/** The summary of the configuration for the URL endpoint type.  */
	export interface UrlEndpointSummaryFormProperties {
		HealthUrl: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateUrlEndpointSummaryFormGroup() {
		return new FormGroup<UrlEndpointSummaryFormProperties>({
			HealthUrl: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface PutResourcePolicyResponse {
	}
	export interface PutResourcePolicyResponseFormProperties {
	}
	export function CreatePutResourcePolicyResponseFormGroup() {
		return new FormGroup<PutResourcePolicyResponseFormProperties>({
		});

	}

	export interface InvalidResourcePolicyException {
	}
	export interface InvalidResourcePolicyExceptionFormProperties {
	}
	export function CreateInvalidResourcePolicyExceptionFormGroup() {
		return new FormGroup<InvalidResourcePolicyExceptionFormProperties>({
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

	export interface UpdateRouteResponse {
		ApplicationId?: string;
		Arn?: string;
		LastUpdatedTime?: Date;
		RouteId?: string;
		ServiceId?: string;
		State?: RouteState;
	}
	export interface UpdateRouteResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		RouteId: FormControl<string | null | undefined>,
		ServiceId: FormControl<string | null | undefined>,
		State: FormControl<RouteState | null | undefined>,
	}
	export function CreateUpdateRouteResponseFormGroup() {
		return new FormGroup<UpdateRouteResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			RouteId: new FormControl<string | null | undefined>(undefined),
			ServiceId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<RouteState | null | undefined>(undefined),
		});

	}

	export interface CreateApplicationRequest {
		ApiGatewayProxy?: ApiGatewayProxyInput;
		ClientToken?: string;

		/** Required */
		Name: string;

		/** Required */
		ProxyType: ProxyType;
		Tags?: TagMap;

		/** Required */
		VpcId: string;
	}
	export interface CreateApplicationRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ProxyType: FormControl<ProxyType | null | undefined>,

		/** Required */
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationRequestFormGroup() {
		return new FormGroup<CreateApplicationRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ProxyType: new FormControl<ProxyType | null | undefined>(undefined, [Validators.required]),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateEnvironmentRequest {
		ClientToken?: string;
		Description?: string;

		/** Required */
		Name: string;

		/** Required */
		NetworkFabricType: NetworkFabricType;
		Tags?: TagMap;
	}
	export interface CreateEnvironmentRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		NetworkFabricType: FormControl<NetworkFabricType | null | undefined>,
	}
	export function CreateCreateEnvironmentRequestFormGroup() {
		return new FormGroup<CreateEnvironmentRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NetworkFabricType: new FormControl<NetworkFabricType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  The configuration for the default route type.  */
	export interface DefaultRouteInput {
		ActivationState?: RouteActivationState;
	}

	/**  The configuration for the default route type.  */
	export interface DefaultRouteInputFormProperties {
		ActivationState: FormControl<RouteActivationState | null | undefined>,
	}
	export function CreateDefaultRouteInputFormGroup() {
		return new FormGroup<DefaultRouteInputFormProperties>({
			ActivationState: new FormControl<RouteActivationState | null | undefined>(undefined),
		});

	}

	export interface CreateRouteRequest {
		ClientToken?: string;
		DefaultRoute?: DefaultRouteInput;

		/** Required */
		RouteType: RouteType;

		/** Required */
		ServiceIdentifier: string;
		Tags?: TagMap;
		UriPathRoute?: UriPathRouteInput;
	}
	export interface CreateRouteRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		RouteType: FormControl<RouteType | null | undefined>,

		/** Required */
		ServiceIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateCreateRouteRequestFormGroup() {
		return new FormGroup<CreateRouteRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			RouteType: new FormControl<RouteType | null | undefined>(undefined, [Validators.required]),
			ServiceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateServiceRequest {
		ClientToken?: string;
		Description?: string;

		/** Required */
		EndpointType: ServiceEndpointType;
		LambdaEndpoint?: LambdaEndpointInput;

		/** Required */
		Name: string;
		Tags?: TagMap;
		UrlEndpoint?: UrlEndpointInput;
		VpcId?: string;
	}
	export interface CreateServiceRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		EndpointType: FormControl<ServiceEndpointType | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateCreateServiceRequestFormGroup() {
		return new FormGroup<CreateServiceRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EndpointType: new FormControl<ServiceEndpointType | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ServiceState { CREATING = 0, ACTIVE = 1, DELETING = 2, FAILED = 3 }

	export interface DeleteApplicationRequest {
	}
	export interface DeleteApplicationRequestFormProperties {
	}
	export function CreateDeleteApplicationRequestFormGroup() {
		return new FormGroup<DeleteApplicationRequestFormProperties>({
		});

	}

	export interface DeleteEnvironmentRequest {
	}
	export interface DeleteEnvironmentRequestFormProperties {
	}
	export function CreateDeleteEnvironmentRequestFormGroup() {
		return new FormGroup<DeleteEnvironmentRequestFormProperties>({
		});

	}

	export interface DeleteResourcePolicyRequest {
	}
	export interface DeleteResourcePolicyRequestFormProperties {
	}
	export function CreateDeleteResourcePolicyRequestFormGroup() {
		return new FormGroup<DeleteResourcePolicyRequestFormProperties>({
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

	export interface DeleteServiceRequest {
	}
	export interface DeleteServiceRequestFormProperties {
	}
	export function CreateDeleteServiceRequestFormGroup() {
		return new FormGroup<DeleteServiceRequestFormProperties>({
		});

	}

	export interface GetApplicationRequest {
	}
	export interface GetApplicationRequestFormProperties {
	}
	export function CreateGetApplicationRequestFormGroup() {
		return new FormGroup<GetApplicationRequestFormProperties>({
		});

	}

	export interface GetEnvironmentRequest {
	}
	export interface GetEnvironmentRequestFormProperties {
	}
	export function CreateGetEnvironmentRequestFormGroup() {
		return new FormGroup<GetEnvironmentRequestFormProperties>({
		});

	}

	export interface GetResourcePolicyRequest {
	}
	export interface GetResourcePolicyRequestFormProperties {
	}
	export function CreateGetResourcePolicyRequestFormGroup() {
		return new FormGroup<GetResourcePolicyRequestFormProperties>({
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

	export interface GetServiceRequest {
	}
	export interface GetServiceRequestFormProperties {
	}
	export function CreateGetServiceRequestFormGroup() {
		return new FormGroup<GetServiceRequestFormProperties>({
		});

	}

	export interface ListApplicationsRequest {
	}
	export interface ListApplicationsRequestFormProperties {
	}
	export function CreateListApplicationsRequestFormGroup() {
		return new FormGroup<ListApplicationsRequestFormProperties>({
		});

	}

	export interface ListEnvironmentVpcsRequest {
	}
	export interface ListEnvironmentVpcsRequestFormProperties {
	}
	export function CreateListEnvironmentVpcsRequestFormGroup() {
		return new FormGroup<ListEnvironmentVpcsRequestFormProperties>({
		});

	}

	export interface ListEnvironmentsRequest {
	}
	export interface ListEnvironmentsRequestFormProperties {
	}
	export function CreateListEnvironmentsRequestFormGroup() {
		return new FormGroup<ListEnvironmentsRequestFormProperties>({
		});

	}

	export interface ListRoutesRequest {
	}
	export interface ListRoutesRequestFormProperties {
	}
	export function CreateListRoutesRequestFormGroup() {
		return new FormGroup<ListRoutesRequestFormProperties>({
		});

	}

	export interface ListServicesRequest {
	}
	export interface ListServicesRequestFormProperties {
	}
	export function CreateListServicesRequestFormGroup() {
		return new FormGroup<ListServicesRequestFormProperties>({
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

	export interface PutResourcePolicyRequest {

		/** Required */
		Policy: string;

		/** Required */
		ResourceArn: string;
	}
	export interface PutResourcePolicyRequestFormProperties {

		/** Required */
		Policy: FormControl<string | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyRequestFormGroup() {
		return new FormGroup<PutResourcePolicyRequestFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: TagMap;
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

	export interface UpdateRouteRequest {

		/** Required */
		ActivationState: RouteActivationState;
	}
	export interface UpdateRouteRequestFormProperties {

		/** Required */
		ActivationState: FormControl<RouteActivationState | null | undefined>,
	}
	export function CreateUpdateRouteRequestFormGroup() {
		return new FormGroup<UpdateRouteRequestFormProperties>({
			ActivationState: new FormControl<RouteActivationState | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates an Amazon Web Services Migration Hub Refactor Spaces application. The account that owns the environment also owns the applications created inside the environment, regardless of the account that creates the application. Refactor Spaces provisions an Amazon API Gateway, API Gateway VPC link, and Network Load Balancer for the application proxy inside your account.</p> <p>In environments created with a <a href="https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateEnvironment.html#migrationhubrefactorspaces-CreateEnvironment-request-NetworkFabricType">CreateEnvironment:NetworkFabricType</a> of <code>NONE</code> you need to configure <a href="https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/amazon-vpc-to-amazon-vpc-connectivity-options.html"> VPC to VPC connectivity</a> between your service VPC and the application proxy VPC to route traffic through the application proxy to a service with a private URL endpoint. For more information, see <a href="https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/getting-started-create-application.html"> Create an application</a> in the <i>Refactor Spaces User Guide</i>. </p>
		 * Post environments/{EnvironmentIdentifier}/applications
		 * @param {string} EnvironmentIdentifier The unique identifier of the environment.
		 * @return {CreateApplicationResponse} Success
		 */
		CreateApplication(EnvironmentIdentifier: string, requestBody: CreateApplicationPostBody): Observable<CreateApplicationResponse> {
			return this.http.post<CreateApplicationResponse>(this.baseUri + 'environments/' + (EnvironmentIdentifier == null ? '' : encodeURIComponent(EnvironmentIdentifier)) + '/applications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the Amazon Web Services Migration Hub Refactor Spaces applications within an environment.
		 * Get environments/{EnvironmentIdentifier}/applications
		 * @param {string} EnvironmentIdentifier The ID of the environment. 
		 * @param {number} maxResults The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationsResponse} Success
		 */
		ListApplications(EnvironmentIdentifier: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListApplicationsResponse> {
			return this.http.get<ListApplicationsResponse>(this.baseUri + 'environments/' + (EnvironmentIdentifier == null ? '' : encodeURIComponent(EnvironmentIdentifier)) + '/applications&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates an Amazon Web Services Migration Hub Refactor Spaces environment. The caller owns the environment resource, and all Refactor Spaces applications, services, and routes created within the environment. They are referred to as the <i>environment owner</i>. The environment owner has cross-account visibility and control of Refactor Spaces resources that are added to the environment by other accounts that the environment is shared with.</p> <p>When creating an environment with a <a href="https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateEnvironment.html#migrationhubrefactorspaces-CreateEnvironment-request-NetworkFabricType">CreateEnvironment:NetworkFabricType</a> of <code>TRANSIT_GATEWAY</code>, Refactor Spaces provisions a transit gateway to enable services in VPCs to communicate directly across accounts. If <a href="https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateEnvironment.html#migrationhubrefactorspaces-CreateEnvironment-request-NetworkFabricType">CreateEnvironment:NetworkFabricType</a> is <code>NONE</code>, Refactor Spaces does not create a transit gateway and you must use your network infrastructure to route traffic to services with private URL endpoints.</p>
		 * Post environments
		 * @return {CreateEnvironmentResponse} Success
		 */
		CreateEnvironment(requestBody: CreateEnvironmentPostBody): Observable<CreateEnvironmentResponse> {
			return this.http.post<CreateEnvironmentResponse>(this.baseUri + 'environments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Amazon Web Services Migration Hub Refactor Spaces environments owned by a caller account or shared with the caller account.
		 * Get environments
		 * @param {number} maxResults The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEnvironmentsResponse} Success
		 */
		ListEnvironments(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListEnvironmentsResponse> {
			return this.http.get<ListEnvironmentsResponse>(this.baseUri + 'environments?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates an Amazon Web Services Migration Hub Refactor Spaces route. The account owner of the service resource is always the environment owner, regardless of which account creates the route. Routes target a service in the application. If an application does not have any routes, then the first route must be created as a <code>DEFAULT</code> <code>RouteType</code>.</p> <p>When created, the default route defaults to an active state so state is not a required input. However, like all other state values the state of the default route can be updated after creation, but only when all other routes are also inactive. Conversely, no route can be active without the default route also being active.</p> <p>When you create a route, Refactor Spaces configures the Amazon API Gateway to send traffic to the target service as follows:</p> <ul> <li> <p> <b>URL Endpoints</b> </p> <p>If the service has a URL endpoint, and the endpoint resolves to a private IP address, Refactor Spaces routes traffic using the API Gateway VPC link. If a service endpoint resolves to a public IP address, Refactor Spaces routes traffic over the public internet. Services can have HTTP or HTTPS URL endpoints. For HTTPS URLs, publicly-signed certificates are supported. Private Certificate Authorities (CAs) are permitted only if the CA's domain is also publicly resolvable. </p> <p>Refactor Spaces automatically resolves the public Domain Name System (DNS) names that are set in <code>CreateService:UrlEndpoint </code>when you create a service. The DNS names resolve when the DNS time-to-live (TTL) expires, or every 60 seconds for TTLs less than 60 seconds. This periodic DNS resolution ensures that the route configuration remains up-to-date. </p> <p/> <p> <b>One-time health check</b> </p> <p>A one-time health check is performed on the service when either the route is updated from inactive to active, or when it is created with an active state. If the health check fails, the route transitions the route state to <code>FAILED</code>, an error code of <code>SERVICE_ENDPOINT_HEALTH_CHECK_FAILURE</code> is provided, and no traffic is sent to the service.</p> <p>For private URLs, a target group is created on the Network Load Balancer and the load balancer target group runs default target health checks. By default, the health check is run against the service endpoint URL. Optionally, the health check can be performed against a different protocol, port, and/or path using the <a href="https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateService.html#migrationhubrefactorspaces-CreateService-request-UrlEndpoint">CreateService:UrlEndpoint</a> parameter. All other health check settings for the load balancer use the default values described in the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-health-checks.html">Health checks for your target groups</a> in the <i>Elastic Load Balancing guide</i>. The health check is considered successful if at least one target within the target group transitions to a healthy state.</p> <p/> </li> <li> <p> <b>Lambda function endpoints</b> </p> <p>If the service has an Lambda function endpoint, then Refactor Spaces configures the Lambda function's resource policy to allow the application's API Gateway to invoke the function.</p> <p>The Lambda function state is checked. If the function is not active, the function configuration is updated so that Lambda resources are provisioned. If the Lambda state is <code>Failed</code>, then the route creation fails. For more information, see the <a href="https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html#SSS-GetFunctionConfiguration-response-State">GetFunctionConfiguration's State response parameter</a> in the <i>Lambda Developer Guide</i>.</p> <p>A check is performed to determine that a Lambda function with the specified ARN exists. If it does not exist, the health check fails. For public URLs, a connection is opened to the public endpoint. If the URL is not reachable, the health check fails. </p> </li> </ul> <p> <b>Environments without a network bridge</b> </p> <p>When you create environments without a network bridge (<a href="https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateEnvironment.html#migrationhubrefactorspaces-CreateEnvironment-request-NetworkFabricType">CreateEnvironment:NetworkFabricType</a> is <code>NONE)</code> and you use your own networking infrastructure, you need to configure <a href="https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/amazon-vpc-to-amazon-vpc-connectivity-options.html">VPC to VPC connectivity</a> between your network and the application proxy VPC. Route creation from the application proxy to service endpoints will fail if your network is not configured to connect to the application proxy VPC. For more information, see <a href="https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/getting-started-create-role.html"> Create a route</a> in the <i>Refactor Spaces User Guide</i>.</p> <p/>
		 * Post environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes
		 * @param {string} ApplicationIdentifier The ID of the application within which the route is being created.
		 * @param {string} EnvironmentIdentifier The ID of the environment in which the route is created.
		 * @return {CreateRouteResponse} Success
		 */
		CreateRoute(ApplicationIdentifier: string, EnvironmentIdentifier: string, requestBody: CreateRoutePostBody): Observable<CreateRouteResponse> {
			return this.http.post<CreateRouteResponse>(this.baseUri + 'environments/' + (EnvironmentIdentifier == null ? '' : encodeURIComponent(EnvironmentIdentifier)) + '/applications/' + (ApplicationIdentifier == null ? '' : encodeURIComponent(ApplicationIdentifier)) + '/routes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the Amazon Web Services Migration Hub Refactor Spaces routes within an application.
		 * Get environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes
		 * @param {string} ApplicationIdentifier The ID of the application. 
		 * @param {string} EnvironmentIdentifier The ID of the environment. 
		 * @param {number} maxResults The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRoutesResponse} Success
		 */
		ListRoutes(ApplicationIdentifier: string, EnvironmentIdentifier: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRoutesResponse> {
			return this.http.get<ListRoutesResponse>(this.baseUri + 'environments/' + (EnvironmentIdentifier == null ? '' : encodeURIComponent(EnvironmentIdentifier)) + '/applications/' + (ApplicationIdentifier == null ? '' : encodeURIComponent(ApplicationIdentifier)) + '/routes&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates an Amazon Web Services Migration Hub Refactor Spaces service. The account owner of the service is always the environment owner, regardless of which account in the environment creates the service. Services have either a URL endpoint in a virtual private cloud (VPC), or a Lambda function endpoint.</p> <important> <p>If an Amazon Web Services resource is launched in a service VPC, and you want it to be accessible to all of an environment’s services with VPCs and routes, apply the <code>RefactorSpacesSecurityGroup</code> to the resource. Alternatively, to add more cross-account constraints, apply your own security group.</p> </important>
		 * Post environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services
		 * @param {string} ApplicationIdentifier The ID of the application which the service is created.
		 * @param {string} EnvironmentIdentifier The ID of the environment in which the service is created.
		 * @return {CreateServiceResponse} Success
		 */
		CreateService(ApplicationIdentifier: string, EnvironmentIdentifier: string, requestBody: CreateServicePostBody): Observable<CreateServiceResponse> {
			return this.http.post<CreateServiceResponse>(this.baseUri + 'environments/' + (EnvironmentIdentifier == null ? '' : encodeURIComponent(EnvironmentIdentifier)) + '/applications/' + (ApplicationIdentifier == null ? '' : encodeURIComponent(ApplicationIdentifier)) + '/services', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the Amazon Web Services Migration Hub Refactor Spaces services within an application.
		 * Get environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services
		 * @param {string} ApplicationIdentifier The ID of the application. 
		 * @param {string} EnvironmentIdentifier The ID of the environment. 
		 * @param {number} maxResults The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListServicesResponse} Success
		 */
		ListServices(ApplicationIdentifier: string, EnvironmentIdentifier: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListServicesResponse> {
			return this.http.get<ListServicesResponse>(this.baseUri + 'environments/' + (EnvironmentIdentifier == null ? '' : encodeURIComponent(EnvironmentIdentifier)) + '/applications/' + (ApplicationIdentifier == null ? '' : encodeURIComponent(ApplicationIdentifier)) + '/services&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Deletes an Amazon Web Services Migration Hub Refactor Spaces application. Before you can delete an application, you must first delete any services or routes within the application.
		 * Delete environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}
		 * @param {string} ApplicationIdentifier The ID of the application.
		 * @param {string} EnvironmentIdentifier The ID of the environment. 
		 * @return {DeleteApplicationResponse} Success
		 */
		DeleteApplication(ApplicationIdentifier: string, EnvironmentIdentifier: string): Observable<DeleteApplicationResponse> {
			return this.http.delete<DeleteApplicationResponse>(this.baseUri + 'environments/' + (EnvironmentIdentifier == null ? '' : encodeURIComponent(EnvironmentIdentifier)) + '/applications/' + (ApplicationIdentifier == null ? '' : encodeURIComponent(ApplicationIdentifier)), {});
		}

		/**
		 * Gets an Amazon Web Services Migration Hub Refactor Spaces application.
		 * Get environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}
		 * @param {string} ApplicationIdentifier The ID of the application.
		 * @param {string} EnvironmentIdentifier The ID of the environment. 
		 * @return {GetApplicationResponse} Success
		 */
		GetApplication(ApplicationIdentifier: string, EnvironmentIdentifier: string): Observable<GetApplicationResponse> {
			return this.http.get<GetApplicationResponse>(this.baseUri + 'environments/' + (EnvironmentIdentifier == null ? '' : encodeURIComponent(EnvironmentIdentifier)) + '/applications/' + (ApplicationIdentifier == null ? '' : encodeURIComponent(ApplicationIdentifier)), {});
		}

		/**
		 * Deletes an Amazon Web Services Migration Hub Refactor Spaces environment. Before you can delete an environment, you must first delete any applications and services within the environment.
		 * Delete environments/{EnvironmentIdentifier}
		 * @param {string} EnvironmentIdentifier The ID of the environment. 
		 * @return {DeleteEnvironmentResponse} Success
		 */
		DeleteEnvironment(EnvironmentIdentifier: string): Observable<DeleteEnvironmentResponse> {
			return this.http.delete<DeleteEnvironmentResponse>(this.baseUri + 'environments/' + (EnvironmentIdentifier == null ? '' : encodeURIComponent(EnvironmentIdentifier)), {});
		}

		/**
		 * Gets an Amazon Web Services Migration Hub Refactor Spaces environment.
		 * Get environments/{EnvironmentIdentifier}
		 * @param {string} EnvironmentIdentifier The ID of the environment.
		 * @return {GetEnvironmentResponse} Success
		 */
		GetEnvironment(EnvironmentIdentifier: string): Observable<GetEnvironmentResponse> {
			return this.http.get<GetEnvironmentResponse>(this.baseUri + 'environments/' + (EnvironmentIdentifier == null ? '' : encodeURIComponent(EnvironmentIdentifier)), {});
		}

		/**
		 * Deletes the resource policy set for the environment.
		 * Delete resourcepolicy/{Identifier}
		 * @param {string} Identifier Amazon Resource Name (ARN) of the resource associated with the policy. 
		 * @return {DeleteResourcePolicyResponse} Success
		 */
		DeleteResourcePolicy(Identifier: string): Observable<DeleteResourcePolicyResponse> {
			return this.http.delete<DeleteResourcePolicyResponse>(this.baseUri + 'resourcepolicy/' + (Identifier == null ? '' : encodeURIComponent(Identifier)), {});
		}

		/**
		 * Gets the resource-based permission policy that is set for the given environment.
		 * Get resourcepolicy/{Identifier}
		 * @param {string} Identifier The Amazon Resource Name (ARN) of the resource associated with the policy. 
		 * @return {GetResourcePolicyResponse} Success
		 */
		GetResourcePolicy(Identifier: string): Observable<GetResourcePolicyResponse> {
			return this.http.get<GetResourcePolicyResponse>(this.baseUri + 'resourcepolicy/' + (Identifier == null ? '' : encodeURIComponent(Identifier)), {});
		}

		/**
		 * Deletes an Amazon Web Services Migration Hub Refactor Spaces route.
		 * Delete environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes/{RouteIdentifier}
		 * @param {string} ApplicationIdentifier The ID of the application to delete the route from.
		 * @param {string} EnvironmentIdentifier The ID of the environment to delete the route from.
		 * @param {string} RouteIdentifier The ID of the route to delete.
		 * @return {DeleteRouteResponse} Success
		 */
		DeleteRoute(ApplicationIdentifier: string, EnvironmentIdentifier: string, RouteIdentifier: string): Observable<DeleteRouteResponse> {
			return this.http.delete<DeleteRouteResponse>(this.baseUri + 'environments/' + (EnvironmentIdentifier == null ? '' : encodeURIComponent(EnvironmentIdentifier)) + '/applications/' + (ApplicationIdentifier == null ? '' : encodeURIComponent(ApplicationIdentifier)) + '/routes/' + (RouteIdentifier == null ? '' : encodeURIComponent(RouteIdentifier)), {});
		}

		/**
		 * Gets an Amazon Web Services Migration Hub Refactor Spaces route.
		 * Get environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes/{RouteIdentifier}
		 * @param {string} ApplicationIdentifier The ID of the application. 
		 * @param {string} EnvironmentIdentifier The ID of the environment.
		 * @param {string} RouteIdentifier The ID of the route.
		 * @return {GetRouteResponse} Success
		 */
		GetRoute(ApplicationIdentifier: string, EnvironmentIdentifier: string, RouteIdentifier: string): Observable<GetRouteResponse> {
			return this.http.get<GetRouteResponse>(this.baseUri + 'environments/' + (EnvironmentIdentifier == null ? '' : encodeURIComponent(EnvironmentIdentifier)) + '/applications/' + (ApplicationIdentifier == null ? '' : encodeURIComponent(ApplicationIdentifier)) + '/routes/' + (RouteIdentifier == null ? '' : encodeURIComponent(RouteIdentifier)), {});
		}

		/**
		 * Updates an Amazon Web Services Migration Hub Refactor Spaces route.
		 * Patch environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes/{RouteIdentifier}
		 * @param {string} ApplicationIdentifier  The ID of the application within which the route is being updated. 
		 * @param {string} EnvironmentIdentifier  The ID of the environment in which the route is being updated. 
		 * @param {string} RouteIdentifier  The unique identifier of the route to update. 
		 * @return {UpdateRouteResponse} Success
		 */
		UpdateRoute(ApplicationIdentifier: string, EnvironmentIdentifier: string, RouteIdentifier: string, requestBody: UpdateRoutePatchBody): Observable<UpdateRouteResponse> {
			return this.http.patch<UpdateRouteResponse>(this.baseUri + 'environments/' + (EnvironmentIdentifier == null ? '' : encodeURIComponent(EnvironmentIdentifier)) + '/applications/' + (ApplicationIdentifier == null ? '' : encodeURIComponent(ApplicationIdentifier)) + '/routes/' + (RouteIdentifier == null ? '' : encodeURIComponent(RouteIdentifier)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Amazon Web Services Migration Hub Refactor Spaces service.
		 * Delete environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services/{ServiceIdentifier}
		 * @param {string} ApplicationIdentifier <p>Deletes a Refactor Spaces service.</p> <note> <p>The <code>RefactorSpacesSecurityGroup</code> security group must be removed from all Amazon Web Services resources in the virtual private cloud (VPC) prior to deleting a service with a URL endpoint in a VPC.</p> </note>
		 * @param {string} EnvironmentIdentifier The ID of the environment that the service is in.
		 * @param {string} ServiceIdentifier The ID of the service to delete.
		 * @return {DeleteServiceResponse} Success
		 */
		DeleteService(ApplicationIdentifier: string, EnvironmentIdentifier: string, ServiceIdentifier: string): Observable<DeleteServiceResponse> {
			return this.http.delete<DeleteServiceResponse>(this.baseUri + 'environments/' + (EnvironmentIdentifier == null ? '' : encodeURIComponent(EnvironmentIdentifier)) + '/applications/' + (ApplicationIdentifier == null ? '' : encodeURIComponent(ApplicationIdentifier)) + '/services/' + (ServiceIdentifier == null ? '' : encodeURIComponent(ServiceIdentifier)), {});
		}

		/**
		 * Gets an Amazon Web Services Migration Hub Refactor Spaces service.
		 * Get environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services/{ServiceIdentifier}
		 * @param {string} ApplicationIdentifier The ID of the application.
		 * @param {string} EnvironmentIdentifier The ID of the environment.
		 * @param {string} ServiceIdentifier The ID of the service.
		 * @return {GetServiceResponse} Success
		 */
		GetService(ApplicationIdentifier: string, EnvironmentIdentifier: string, ServiceIdentifier: string): Observable<GetServiceResponse> {
			return this.http.get<GetServiceResponse>(this.baseUri + 'environments/' + (EnvironmentIdentifier == null ? '' : encodeURIComponent(EnvironmentIdentifier)) + '/applications/' + (ApplicationIdentifier == null ? '' : encodeURIComponent(ApplicationIdentifier)) + '/services/' + (ServiceIdentifier == null ? '' : encodeURIComponent(ServiceIdentifier)), {});
		}

		/**
		 * Lists all Amazon Web Services Migration Hub Refactor Spaces service virtual private clouds (VPCs) that are part of the environment.
		 * Get environments/{EnvironmentIdentifier}/vpcs
		 * @param {string} EnvironmentIdentifier The ID of the environment. 
		 * @param {number} maxResults The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.
		 * @param {string} nextToken The token for the next page of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEnvironmentVpcsResponse} Success
		 */
		ListEnvironmentVpcs(EnvironmentIdentifier: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListEnvironmentVpcsResponse> {
			return this.http.get<ListEnvironmentVpcsResponse>(this.baseUri + 'environments/' + (EnvironmentIdentifier == null ? '' : encodeURIComponent(EnvironmentIdentifier)) + '/vpcs&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the tags of a resource. The caller account must be the same as the resource’s <code>OwnerAccountId</code>. Listing tags in other accounts is not supported.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource. 
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * <p>Removes the tags of a given resource. Tags are metadata which can be used to manage a resource. To tag a resource, the caller account must be the same as the resource’s <code>OwnerAccountId</code>. Tagging resources in other accounts is not supported.</p> <note> <p>Amazon Web Services Migration Hub Refactor Spaces does not propagate tags to orchestrated resources, such as an environment’s transit gateway.</p> </note>
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attaches a resource-based permission policy to the Amazon Web Services Migration Hub Refactor Spaces environment. The policy must contain the same actions and condition statements as the <code>arn:aws:ram::aws:permission/AWSRAMDefaultPermissionRefactorSpacesEnvironment</code> permission in Resource Access Manager. The policy must not contain new lines or blank lines.
		 * Put resourcepolicy
		 * @return {PutResourcePolicyResponse} Success
		 */
		PutResourcePolicy(requestBody: PutResourcePolicyPutBody): Observable<PutResourcePolicyResponse> {
			return this.http.put<PutResourcePolicyResponse>(this.baseUri + 'resourcepolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds to or modifies the tags of the given resource. Tags are metadata which can be used to manage a resource. To untag a resource, the caller account must be the same as the resource’s <code>OwnerAccountId</code>. Untagging resources across accounts is not supported.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource. 
		 * @param {Array<string>} tagKeys The list of keys of the tags to be removed from the resource. 
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateApplicationPostBody {

		/** A wrapper object holding the Amazon API Gateway endpoint input. */
		ApiGatewayProxy?: CreateApplicationPostBodyApiGatewayProxy;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken?: string | null;

		/**
		 * The name to use for the application.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		Name: string;

		/**
		 * The proxy type of the proxy created within the application.
		 * Required
		 */
		ProxyType: ProxyType;

		/** A collection of up to 50 unique tags */
		Tags?: {[id: string]: string };

		/**
		 * The ID of the virtual private cloud (VPC).
		 * Required
		 * Max length: 21
		 * Min length: 12
		 */
		VpcId: string;
	}
	export interface CreateApplicationPostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The name to use for the application.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The proxy type of the proxy created within the application.
		 * Required
		 */
		ProxyType: FormControl<ProxyType | null | undefined>,

		/** A collection of up to 50 unique tags */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The ID of the virtual private cloud (VPC).
		 * Required
		 * Max length: 21
		 * Min length: 12
		 */
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationPostBodyFormGroup() {
		return new FormGroup<CreateApplicationPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[\x20-\x7E]{1,64}$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(63), Validators.pattern('^(?!app-)[a-zA-Z0-9]+[a-zA-Z0-9-_ ]+$')]),
			ProxyType: new FormControl<ProxyType | null | undefined>(undefined, [Validators.required]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(12), Validators.maxLength(21), Validators.pattern('^vpc-[-a-f0-9]{8}([-a-f0-9]{9})?$')]),
		});

	}

	export interface CreateApplicationPostBodyApiGatewayProxy {
		EndpointType?: ApiGatewayEndpointType;
		StageName?: string;
	}
	export interface CreateApplicationPostBodyApiGatewayProxyFormProperties {
		EndpointType: FormControl<ApiGatewayEndpointType | null | undefined>,
		StageName: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationPostBodyApiGatewayProxyFormGroup() {
		return new FormGroup<CreateApplicationPostBodyApiGatewayProxyFormProperties>({
			EndpointType: new FormControl<ApiGatewayEndpointType | null | undefined>(undefined),
			StageName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEnvironmentPostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken?: string | null;

		/**
		 * The description of the environment.
		 * Max length: 256
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * The name of the environment.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		Name: string;

		/**
		 * The network fabric type of the environment.
		 * Required
		 */
		NetworkFabricType: NetworkFabricType;

		/** A collection of up to 50 unique tags */
		Tags?: {[id: string]: string };
	}
	export interface CreateEnvironmentPostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The description of the environment.
		 * Max length: 256
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The name of the environment.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The network fabric type of the environment.
		 * Required
		 */
		NetworkFabricType: FormControl<NetworkFabricType | null | undefined>,

		/** A collection of up to 50 unique tags */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateEnvironmentPostBodyFormGroup() {
		return new FormGroup<CreateEnvironmentPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[\x20-\x7E]{1,64}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9-_\s\.\!\*\#\@\\\']+$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(63), Validators.pattern('^(?!env-)[a-zA-Z0-9]+[a-zA-Z0-9-_ ]+$')]),
			NetworkFabricType: new FormControl<NetworkFabricType | null | undefined>(undefined, [Validators.required]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateRoutePostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken?: string | null;

		/** The configuration for the default route type. */
		DefaultRoute?: CreateRoutePostBodyDefaultRoute;

		/**
		 * The route type of the route. <code>DEFAULT</code> indicates that all traffic that does not match another route is forwarded to the default route. Applications must have a default route before any other routes can be created. <code>URI_PATH</code> indicates a route that is based on a URI path.
		 * Required
		 */
		RouteType: RouteType;

		/**
		 * The ID of the service in which the route is created. Traffic that matches this route is forwarded to this service.
		 * Required
		 * Max length: 14
		 * Min length: 14
		 */
		ServiceIdentifier: string;

		/** A collection of up to 50 unique tags */
		Tags?: {[id: string]: string };

		/** The configuration for the URI path route type. */
		UriPathRoute?: CreateRoutePostBodyUriPathRoute;
	}
	export interface CreateRoutePostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The route type of the route. <code>DEFAULT</code> indicates that all traffic that does not match another route is forwarded to the default route. Applications must have a default route before any other routes can be created. <code>URI_PATH</code> indicates a route that is based on a URI path.
		 * Required
		 */
		RouteType: FormControl<RouteType | null | undefined>,

		/**
		 * The ID of the service in which the route is created. Traffic that matches this route is forwarded to this service.
		 * Required
		 * Max length: 14
		 * Min length: 14
		 */
		ServiceIdentifier: FormControl<string | null | undefined>,

		/** A collection of up to 50 unique tags */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateRoutePostBodyFormGroup() {
		return new FormGroup<CreateRoutePostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[\x20-\x7E]{1,64}$')]),
			RouteType: new FormControl<RouteType | null | undefined>(undefined, [Validators.required]),
			ServiceIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(14), Validators.maxLength(14), Validators.pattern('^svc-[0-9A-Za-z]{10}$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateRoutePostBodyDefaultRoute {
		ActivationState?: RouteActivationState;
	}
	export interface CreateRoutePostBodyDefaultRouteFormProperties {
		ActivationState: FormControl<RouteActivationState | null | undefined>,
	}
	export function CreateCreateRoutePostBodyDefaultRouteFormGroup() {
		return new FormGroup<CreateRoutePostBodyDefaultRouteFormProperties>({
			ActivationState: new FormControl<RouteActivationState | null | undefined>(undefined),
		});

	}

	export interface CreateRoutePostBodyUriPathRoute {
		ActivationState?: RouteActivationState;
		AppendSourcePath?: boolean | null;
		IncludeChildPaths?: boolean | null;
		Methods?: Array<HttpMethod>;
		SourcePath?: string;
	}
	export interface CreateRoutePostBodyUriPathRouteFormProperties {
		ActivationState: FormControl<RouteActivationState | null | undefined>,
		AppendSourcePath: FormControl<boolean | null | undefined>,
		IncludeChildPaths: FormControl<boolean | null | undefined>,
		SourcePath: FormControl<string | null | undefined>,
	}
	export function CreateCreateRoutePostBodyUriPathRouteFormGroup() {
		return new FormGroup<CreateRoutePostBodyUriPathRouteFormProperties>({
			ActivationState: new FormControl<RouteActivationState | null | undefined>(undefined),
			AppendSourcePath: new FormControl<boolean | null | undefined>(undefined),
			IncludeChildPaths: new FormControl<boolean | null | undefined>(undefined),
			SourcePath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateServicePostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken?: string | null;

		/**
		 * The description of the service.
		 * Max length: 256
		 * Min length: 1
		 */
		Description?: string | null;

		/**
		 * The type of endpoint to use for the service. The type can be a URL in a VPC or an Lambda function.
		 * Required
		 */
		EndpointType: ServiceEndpointType;

		/** The input for the Lambda endpoint type. */
		LambdaEndpoint?: CreateServicePostBodyLambdaEndpoint;

		/**
		 * The name of the service.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		Name: string;

		/** A collection of up to 50 unique tags */
		Tags?: {[id: string]: string };

		/** The configuration for the URL endpoint type. */
		UrlEndpoint?: CreateServicePostBodyUrlEndpoint;

		/**
		 * The ID of the VPC.
		 * Max length: 21
		 * Min length: 12
		 */
		VpcId?: string | null;
	}
	export interface CreateServicePostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 64
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The description of the service.
		 * Max length: 256
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The type of endpoint to use for the service. The type can be a URL in a VPC or an Lambda function.
		 * Required
		 */
		EndpointType: FormControl<ServiceEndpointType | null | undefined>,

		/**
		 * The name of the service.
		 * Required
		 * Max length: 63
		 * Min length: 3
		 */
		Name: FormControl<string | null | undefined>,

		/** A collection of up to 50 unique tags */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The ID of the VPC.
		 * Max length: 21
		 * Min length: 12
		 */
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateCreateServicePostBodyFormGroup() {
		return new FormGroup<CreateServicePostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[\x20-\x7E]{1,64}$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('^[a-zA-Z0-9-_\s\.\!\*\#\@\\\']+$')]),
			EndpointType: new FormControl<ServiceEndpointType | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(63), Validators.pattern('^(?!svc-)[a-zA-Z0-9]+[a-zA-Z0-9-_ ]+$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(12), Validators.maxLength(21), Validators.pattern('^vpc-[-a-f0-9]{8}([-a-f0-9]{9})?$')]),
		});

	}

	export interface CreateServicePostBodyLambdaEndpoint {
		Arn?: string;
	}
	export interface CreateServicePostBodyLambdaEndpointFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateServicePostBodyLambdaEndpointFormGroup() {
		return new FormGroup<CreateServicePostBodyLambdaEndpointFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateServicePostBodyUrlEndpoint {
		HealthUrl?: string;
		Url?: string;
	}
	export interface CreateServicePostBodyUrlEndpointFormProperties {
		HealthUrl: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateCreateServicePostBodyUrlEndpointFormGroup() {
		return new FormGroup<CreateServicePostBodyUrlEndpointFormProperties>({
			HealthUrl: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRoutePatchBody {

		/**
		 * If set to <code>ACTIVE</code>, traffic is forwarded to this route’s service after the route is updated.
		 * Required
		 */
		ActivationState: RouteActivationState;
	}
	export interface UpdateRoutePatchBodyFormProperties {

		/**
		 * If set to <code>ACTIVE</code>, traffic is forwarded to this route’s service after the route is updated.
		 * Required
		 */
		ActivationState: FormControl<RouteActivationState | null | undefined>,
	}
	export function CreateUpdateRoutePatchBodyFormGroup() {
		return new FormGroup<UpdateRoutePatchBodyFormProperties>({
			ActivationState: new FormControl<RouteActivationState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A collection of up to 50 unique tags
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A collection of up to 50 unique tags
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutResourcePolicyPutBody {

		/**
		 * A JSON-formatted string for an Amazon Web Services resource-based policy.
		 * Required
		 * Max length: 300000
		 * Min length: 1
		 */
		Policy: string;

		/**
		 * The Amazon Resource Name (ARN) of the resource to which the policy is being attached.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ResourceArn: string;
	}
	export interface PutResourcePolicyPutBodyFormProperties {

		/**
		 * A JSON-formatted string for an Amazon Web Services resource-based policy.
		 * Required
		 * Max length: 300000
		 * Min length: 1
		 */
		Policy: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the resource to which the policy is being attached.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyPutBodyFormGroup() {
		return new FormGroup<PutResourcePolicyPutBodyFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(300000), Validators.pattern('^.*\S.*$')]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:aws:refactor-spaces:[a-zA-Z0-9\-]+:\w{12}:[a-zA-Z_0-9+=,.@\-_/]+$')]),
		});

	}

}

