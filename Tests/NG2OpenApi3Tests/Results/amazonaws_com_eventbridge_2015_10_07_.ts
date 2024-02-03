import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ActivateEventSourceRequest {

		/** Required */
		Name: string;
	}
	export interface ActivateEventSourceRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateActivateEventSourceRequestFormGroup() {
		return new FormGroup<ActivateEventSourceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
		});

	}

	export interface InvalidStateException {
	}
	export interface InvalidStateExceptionFormProperties {
	}
	export function CreateInvalidStateExceptionFormGroup() {
		return new FormGroup<InvalidStateExceptionFormProperties>({
		});

	}

	export interface InternalException {
	}
	export interface InternalExceptionFormProperties {
	}
	export function CreateInternalExceptionFormGroup() {
		return new FormGroup<InternalExceptionFormProperties>({
		});

	}

	export interface OperationDisabledException {
	}
	export interface OperationDisabledExceptionFormProperties {
	}
	export function CreateOperationDisabledExceptionFormGroup() {
		return new FormGroup<OperationDisabledExceptionFormProperties>({
		});

	}

	export interface CancelReplayResponse {
		ReplayArn?: string;
		State?: ReplayState;
		StateReason?: string;
	}
	export interface CancelReplayResponseFormProperties {
		ReplayArn: FormControl<string | null | undefined>,
		State: FormControl<ReplayState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
	}
	export function CreateCancelReplayResponseFormGroup() {
		return new FormGroup<CancelReplayResponseFormProperties>({
			ReplayArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ReplayState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReplayState { STARTING = 'STARTING', RUNNING = 'RUNNING', CANCELLING = 'CANCELLING', COMPLETED = 'COMPLETED', CANCELLED = 'CANCELLED', FAILED = 'FAILED' }

	export interface CancelReplayRequest {

		/** Required */
		ReplayName: string;
	}
	export interface CancelReplayRequestFormProperties {

		/** Required */
		ReplayName: FormControl<string | null | undefined>,
	}
	export function CreateCancelReplayRequestFormGroup() {
		return new FormGroup<CancelReplayRequestFormProperties>({
			ReplayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface IllegalStatusException {
	}
	export interface IllegalStatusExceptionFormProperties {
	}
	export function CreateIllegalStatusExceptionFormGroup() {
		return new FormGroup<IllegalStatusExceptionFormProperties>({
		});

	}

	export interface CreateApiDestinationResponse {
		ApiDestinationArn?: string;
		ApiDestinationState?: ApiDestinationState;
		CreationTime?: Date;
		LastModifiedTime?: Date;
	}
	export interface CreateApiDestinationResponseFormProperties {
		ApiDestinationArn: FormControl<string | null | undefined>,
		ApiDestinationState: FormControl<ApiDestinationState | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateApiDestinationResponseFormGroup() {
		return new FormGroup<CreateApiDestinationResponseFormProperties>({
			ApiDestinationArn: new FormControl<string | null | undefined>(undefined),
			ApiDestinationState: new FormControl<ApiDestinationState | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ApiDestinationState { ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE' }

	export interface CreateApiDestinationRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		ConnectionArn: string;

		/** Required */
		InvocationEndpoint: string;

		/** Required */
		HttpMethod: ApiDestinationHttpMethod;
		InvocationRateLimitPerSecond?: number | null;
	}
	export interface CreateApiDestinationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		ConnectionArn: FormControl<string | null | undefined>,

		/** Required */
		InvocationEndpoint: FormControl<string | null | undefined>,

		/** Required */
		HttpMethod: FormControl<ApiDestinationHttpMethod | null | undefined>,
		InvocationRateLimitPerSecond: FormControl<number | null | undefined>,
	}
	export function CreateCreateApiDestinationRequestFormGroup() {
		return new FormGroup<CreateApiDestinationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ConnectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InvocationEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HttpMethod: new FormControl<ApiDestinationHttpMethod | null | undefined>(undefined, [Validators.required]),
			InvocationRateLimitPerSecond: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ApiDestinationHttpMethod { POST = 'POST', GET = 'GET', HEAD = 'HEAD', OPTIONS = 'OPTIONS', PUT = 'PUT', PATCH = 'PATCH', DELETE = 'DELETE' }

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
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

	export interface CreateArchiveResponse {
		ArchiveArn?: string;
		State?: ArchiveState;
		StateReason?: string;
		CreationTime?: Date;
	}
	export interface CreateArchiveResponseFormProperties {
		ArchiveArn: FormControl<string | null | undefined>,
		State: FormControl<ArchiveState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateArchiveResponseFormGroup() {
		return new FormGroup<CreateArchiveResponseFormProperties>({
			ArchiveArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ArchiveState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ArchiveState { ENABLED = 'ENABLED', DISABLED = 'DISABLED', CREATING = 'CREATING', UPDATING = 'UPDATING', CREATE_FAILED = 'CREATE_FAILED', UPDATE_FAILED = 'UPDATE_FAILED' }

	export interface CreateArchiveRequest {

		/** Required */
		ArchiveName: string;

		/** Required */
		EventSourceArn: string;
		Description?: string;
		EventPattern?: string;
		RetentionDays?: number | null;
	}
	export interface CreateArchiveRequestFormProperties {

		/** Required */
		ArchiveName: FormControl<string | null | undefined>,

		/** Required */
		EventSourceArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EventPattern: FormControl<string | null | undefined>,
		RetentionDays: FormControl<number | null | undefined>,
	}
	export function CreateCreateArchiveRequestFormGroup() {
		return new FormGroup<CreateArchiveRequestFormProperties>({
			ArchiveName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventSourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			EventPattern: new FormControl<string | null | undefined>(undefined),
			RetentionDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvalidEventPatternException {
	}
	export interface InvalidEventPatternExceptionFormProperties {
	}
	export function CreateInvalidEventPatternExceptionFormGroup() {
		return new FormGroup<InvalidEventPatternExceptionFormProperties>({
		});

	}

	export interface CreateConnectionResponse {
		ConnectionArn?: string;
		ConnectionState?: ConnectionState;
		CreationTime?: Date;
		LastModifiedTime?: Date;
	}
	export interface CreateConnectionResponseFormProperties {
		ConnectionArn: FormControl<string | null | undefined>,
		ConnectionState: FormControl<ConnectionState | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateCreateConnectionResponseFormGroup() {
		return new FormGroup<CreateConnectionResponseFormProperties>({
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
			ConnectionState: new FormControl<ConnectionState | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ConnectionState { CREATING = 'CREATING', UPDATING = 'UPDATING', DELETING = 'DELETING', AUTHORIZED = 'AUTHORIZED', DEAUTHORIZED = 'DEAUTHORIZED', AUTHORIZING = 'AUTHORIZING', DEAUTHORIZING = 'DEAUTHORIZING' }

	export interface CreateConnectionRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		AuthorizationType: ConnectionAuthorizationType;

		/** Required */
		AuthParameters: CreateConnectionAuthRequestParameters;
	}
	export interface CreateConnectionRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		AuthorizationType: FormControl<ConnectionAuthorizationType | null | undefined>,
	}
	export function CreateCreateConnectionRequestFormGroup() {
		return new FormGroup<CreateConnectionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			AuthorizationType: new FormControl<ConnectionAuthorizationType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConnectionAuthorizationType { BASIC = 'BASIC', OAUTH_CLIENT_CREDENTIALS = 'OAUTH_CLIENT_CREDENTIALS', API_KEY = 'API_KEY' }


	/** Contains the authorization parameters for the connection. */
	export interface CreateConnectionAuthRequestParameters {
		BasicAuthParameters?: CreateConnectionBasicAuthRequestParameters;
		OAuthParameters?: CreateConnectionOAuthRequestParameters;
		ApiKeyAuthParameters?: CreateConnectionApiKeyAuthRequestParameters;
		InvocationHttpParameters?: ConnectionHttpParameters;
	}

	/** Contains the authorization parameters for the connection. */
	export interface CreateConnectionAuthRequestParametersFormProperties {
	}
	export function CreateCreateConnectionAuthRequestParametersFormGroup() {
		return new FormGroup<CreateConnectionAuthRequestParametersFormProperties>({
		});

	}


	/** Contains the Basic authorization parameters to use for the connection. */
	export interface CreateConnectionBasicAuthRequestParameters {

		/** Required */
		Username: string;

		/** Required */
		Password: string;
	}

	/** Contains the Basic authorization parameters to use for the connection. */
	export interface CreateConnectionBasicAuthRequestParametersFormProperties {

		/** Required */
		Username: FormControl<string | null | undefined>,

		/** Required */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectionBasicAuthRequestParametersFormGroup() {
		return new FormGroup<CreateConnectionBasicAuthRequestParametersFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the OAuth authorization parameters to use for the connection. */
	export interface CreateConnectionOAuthRequestParameters {

		/** Required */
		ClientParameters: CreateConnectionOAuthClientRequestParameters;

		/** Required */
		AuthorizationEndpoint: string;

		/** Required */
		HttpMethod: ConnectionOAuthHttpMethod;
		OAuthHttpParameters?: ConnectionHttpParameters;
	}

	/** Contains the OAuth authorization parameters to use for the connection. */
	export interface CreateConnectionOAuthRequestParametersFormProperties {

		/** Required */
		AuthorizationEndpoint: FormControl<string | null | undefined>,

		/** Required */
		HttpMethod: FormControl<ConnectionOAuthHttpMethod | null | undefined>,
	}
	export function CreateCreateConnectionOAuthRequestParametersFormGroup() {
		return new FormGroup<CreateConnectionOAuthRequestParametersFormProperties>({
			AuthorizationEndpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HttpMethod: new FormControl<ConnectionOAuthHttpMethod | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the Basic authorization parameters to use for the connection. */
	export interface CreateConnectionOAuthClientRequestParameters {

		/** Required */
		ClientID: string;

		/** Required */
		ClientSecret: string;
	}

	/** Contains the Basic authorization parameters to use for the connection. */
	export interface CreateConnectionOAuthClientRequestParametersFormProperties {

		/** Required */
		ClientID: FormControl<string | null | undefined>,

		/** Required */
		ClientSecret: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectionOAuthClientRequestParametersFormGroup() {
		return new FormGroup<CreateConnectionOAuthClientRequestParametersFormProperties>({
			ClientID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConnectionOAuthHttpMethod { GET = 'GET', POST = 'POST', PUT = 'PUT' }


	/** Contains additional parameters for the connection. */
	export interface ConnectionHttpParameters {
		HeaderParameters?: Array<ConnectionHeaderParameter>;
		QueryStringParameters?: Array<ConnectionQueryStringParameter>;
		BodyParameters?: Array<ConnectionBodyParameter>;
	}

	/** Contains additional parameters for the connection. */
	export interface ConnectionHttpParametersFormProperties {
	}
	export function CreateConnectionHttpParametersFormGroup() {
		return new FormGroup<ConnectionHttpParametersFormProperties>({
		});

	}


	/** Additional parameter included in the header. You can include up to 100 additional header parameters per request. An event payload cannot exceed 64 KB. */
	export interface ConnectionHeaderParameter {
		Key?: string;
		Value?: string;
		IsValueSecret?: boolean | null;
	}

	/** Additional parameter included in the header. You can include up to 100 additional header parameters per request. An event payload cannot exceed 64 KB. */
	export interface ConnectionHeaderParameterFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		IsValueSecret: FormControl<boolean | null | undefined>,
	}
	export function CreateConnectionHeaderParameterFormGroup() {
		return new FormGroup<ConnectionHeaderParameterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			IsValueSecret: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Additional query string parameter for the connection. You can include up to 100 additional query string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB. */
	export interface ConnectionQueryStringParameter {
		Key?: string;
		Value?: string;
		IsValueSecret?: boolean | null;
	}

	/** Additional query string parameter for the connection. You can include up to 100 additional query string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB. */
	export interface ConnectionQueryStringParameterFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		IsValueSecret: FormControl<boolean | null | undefined>,
	}
	export function CreateConnectionQueryStringParameterFormGroup() {
		return new FormGroup<ConnectionQueryStringParameterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			IsValueSecret: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Additional parameter included in the body. You can include up to 100 additional body parameters per request. An event payload cannot exceed 64 KB. */
	export interface ConnectionBodyParameter {
		Key?: string;
		Value?: string;
		IsValueSecret?: boolean | null;
	}

	/** Additional parameter included in the body. You can include up to 100 additional body parameters per request. An event payload cannot exceed 64 KB. */
	export interface ConnectionBodyParameterFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
		IsValueSecret: FormControl<boolean | null | undefined>,
	}
	export function CreateConnectionBodyParameterFormGroup() {
		return new FormGroup<ConnectionBodyParameterFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			IsValueSecret: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the API key authorization parameters for the connection. */
	export interface CreateConnectionApiKeyAuthRequestParameters {

		/** Required */
		ApiKeyName: string;

		/** Required */
		ApiKeyValue: string;
	}

	/** Contains the API key authorization parameters for the connection. */
	export interface CreateConnectionApiKeyAuthRequestParametersFormProperties {

		/** Required */
		ApiKeyName: FormControl<string | null | undefined>,

		/** Required */
		ApiKeyValue: FormControl<string | null | undefined>,
	}
	export function CreateCreateConnectionApiKeyAuthRequestParametersFormGroup() {
		return new FormGroup<CreateConnectionApiKeyAuthRequestParametersFormProperties>({
			ApiKeyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApiKeyValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateEndpointResponse {
		Name?: string;
		Arn?: string;
		RoutingConfig?: RoutingConfig;
		ReplicationConfig?: ReplicationConfig;
		EventBuses?: Array<EndpointEventBus>;
		RoleArn?: string;
		State?: EndpointState;
	}
	export interface CreateEndpointResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		State: FormControl<EndpointState | null | undefined>,
	}
	export function CreateCreateEndpointResponseFormGroup() {
		return new FormGroup<CreateEndpointResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EndpointState | null | undefined>(undefined),
		});

	}


	/** The routing configuration of the endpoint. */
	export interface RoutingConfig {

		/** Required */
		FailoverConfig: FailoverConfig;
	}

	/** The routing configuration of the endpoint. */
	export interface RoutingConfigFormProperties {
	}
	export function CreateRoutingConfigFormGroup() {
		return new FormGroup<RoutingConfigFormProperties>({
		});

	}


	/** The failover configuration for an endpoint. This includes what triggers failover and what happens when it's triggered. */
	export interface FailoverConfig {

		/** Required */
		Primary: Primary;

		/** Required */
		Secondary: Secondary;
	}

	/** The failover configuration for an endpoint. This includes what triggers failover and what happens when it's triggered. */
	export interface FailoverConfigFormProperties {
	}
	export function CreateFailoverConfigFormGroup() {
		return new FormGroup<FailoverConfigFormProperties>({
		});

	}


	/** The primary Region of the endpoint. */
	export interface Primary {

		/** Required */
		HealthCheck: string;
	}

	/** The primary Region of the endpoint. */
	export interface PrimaryFormProperties {

		/** Required */
		HealthCheck: FormControl<string | null | undefined>,
	}
	export function CreatePrimaryFormGroup() {
		return new FormGroup<PrimaryFormProperties>({
			HealthCheck: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The secondary Region that processes events when failover is triggered or replication is enabled. */
	export interface Secondary {

		/** Required */
		Route: string;
	}

	/** The secondary Region that processes events when failover is triggered or replication is enabled. */
	export interface SecondaryFormProperties {

		/** Required */
		Route: FormControl<string | null | undefined>,
	}
	export function CreateSecondaryFormGroup() {
		return new FormGroup<SecondaryFormProperties>({
			Route: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Endpoints can replicate all events to the secondary Region. */
	export interface ReplicationConfig {
		State?: ReplicationState;
	}

	/** Endpoints can replicate all events to the secondary Region. */
	export interface ReplicationConfigFormProperties {
		State: FormControl<ReplicationState | null | undefined>,
	}
	export function CreateReplicationConfigFormGroup() {
		return new FormGroup<ReplicationConfigFormProperties>({
			State: new FormControl<ReplicationState | null | undefined>(undefined),
		});

	}

	export enum ReplicationState { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }


	/** The event buses the endpoint is associated with. */
	export interface EndpointEventBus {

		/** Required */
		EventBusArn: string;
	}

	/** The event buses the endpoint is associated with. */
	export interface EndpointEventBusFormProperties {

		/** Required */
		EventBusArn: FormControl<string | null | undefined>,
	}
	export function CreateEndpointEventBusFormGroup() {
		return new FormGroup<EndpointEventBusFormProperties>({
			EventBusArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EndpointState { ACTIVE = 'ACTIVE', CREATING = 'CREATING', UPDATING = 'UPDATING', DELETING = 'DELETING', CREATE_FAILED = 'CREATE_FAILED', UPDATE_FAILED = 'UPDATE_FAILED', DELETE_FAILED = 'DELETE_FAILED' }

	export interface CreateEndpointRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		RoutingConfig: RoutingConfig;
		ReplicationConfig?: ReplicationConfig;

		/** Required */
		EventBuses: Array<EndpointEventBus>;
		RoleArn?: string;
	}
	export interface CreateEndpointRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateEndpointRequestFormGroup() {
		return new FormGroup<CreateEndpointRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEventBusResponse {
		EventBusArn?: string;
	}
	export interface CreateEventBusResponseFormProperties {
		EventBusArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateEventBusResponseFormGroup() {
		return new FormGroup<CreateEventBusResponseFormProperties>({
			EventBusArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEventBusRequest {

		/** Required */
		Name: string;
		EventSourceName?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateEventBusRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		EventSourceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateEventBusRequestFormGroup() {
		return new FormGroup<CreateEventBusRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventSourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A key-value pair associated with an Amazon Web Services resource. In EventBridge, rules and event buses support tagging. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A key-value pair associated with an Amazon Web Services resource. In EventBridge, rules and event buses support tagging. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePartnerEventSourceResponse {
		EventSourceArn?: string;
	}
	export interface CreatePartnerEventSourceResponseFormProperties {
		EventSourceArn: FormControl<string | null | undefined>,
	}
	export function CreateCreatePartnerEventSourceResponseFormGroup() {
		return new FormGroup<CreatePartnerEventSourceResponseFormProperties>({
			EventSourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePartnerEventSourceRequest {

		/** Required */
		Name: string;

		/** Required */
		Account: string;
	}
	export interface CreatePartnerEventSourceRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Account: FormControl<string | null | undefined>,
	}
	export function CreateCreatePartnerEventSourceRequestFormGroup() {
		return new FormGroup<CreatePartnerEventSourceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Account: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeactivateEventSourceRequest {

		/** Required */
		Name: string;
	}
	export interface DeactivateEventSourceRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeactivateEventSourceRequestFormGroup() {
		return new FormGroup<DeactivateEventSourceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeauthorizeConnectionResponse {
		ConnectionArn?: string;
		ConnectionState?: ConnectionState;
		CreationTime?: Date;
		LastModifiedTime?: Date;
		LastAuthorizedTime?: Date;
	}
	export interface DeauthorizeConnectionResponseFormProperties {
		ConnectionArn: FormControl<string | null | undefined>,
		ConnectionState: FormControl<ConnectionState | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		LastAuthorizedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDeauthorizeConnectionResponseFormGroup() {
		return new FormGroup<DeauthorizeConnectionResponseFormProperties>({
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
			ConnectionState: new FormControl<ConnectionState | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			LastAuthorizedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DeauthorizeConnectionRequest {

		/** Required */
		Name: string;
	}
	export interface DeauthorizeConnectionRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeauthorizeConnectionRequestFormGroup() {
		return new FormGroup<DeauthorizeConnectionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteApiDestinationResponse {
	}
	export interface DeleteApiDestinationResponseFormProperties {
	}
	export function CreateDeleteApiDestinationResponseFormGroup() {
		return new FormGroup<DeleteApiDestinationResponseFormProperties>({
		});

	}

	export interface DeleteApiDestinationRequest {

		/** Required */
		Name: string;
	}
	export interface DeleteApiDestinationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteApiDestinationRequestFormGroup() {
		return new FormGroup<DeleteApiDestinationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteArchiveResponse {
	}
	export interface DeleteArchiveResponseFormProperties {
	}
	export function CreateDeleteArchiveResponseFormGroup() {
		return new FormGroup<DeleteArchiveResponseFormProperties>({
		});

	}

	export interface DeleteArchiveRequest {

		/** Required */
		ArchiveName: string;
	}
	export interface DeleteArchiveRequestFormProperties {

		/** Required */
		ArchiveName: FormControl<string | null | undefined>,
	}
	export function CreateDeleteArchiveRequestFormGroup() {
		return new FormGroup<DeleteArchiveRequestFormProperties>({
			ArchiveName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteConnectionResponse {
		ConnectionArn?: string;
		ConnectionState?: ConnectionState;
		CreationTime?: Date;
		LastModifiedTime?: Date;
		LastAuthorizedTime?: Date;
	}
	export interface DeleteConnectionResponseFormProperties {
		ConnectionArn: FormControl<string | null | undefined>,
		ConnectionState: FormControl<ConnectionState | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		LastAuthorizedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDeleteConnectionResponseFormGroup() {
		return new FormGroup<DeleteConnectionResponseFormProperties>({
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
			ConnectionState: new FormControl<ConnectionState | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			LastAuthorizedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DeleteConnectionRequest {

		/** Required */
		Name: string;
	}
	export interface DeleteConnectionRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteConnectionRequestFormGroup() {
		return new FormGroup<DeleteConnectionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEndpointResponse {
	}
	export interface DeleteEndpointResponseFormProperties {
	}
	export function CreateDeleteEndpointResponseFormGroup() {
		return new FormGroup<DeleteEndpointResponseFormProperties>({
		});

	}

	export interface DeleteEndpointRequest {

		/** Required */
		Name: string;
	}
	export interface DeleteEndpointRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEndpointRequestFormGroup() {
		return new FormGroup<DeleteEndpointRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEventBusRequest {

		/** Required */
		Name: string;
	}
	export interface DeleteEventBusRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEventBusRequestFormGroup() {
		return new FormGroup<DeleteEventBusRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePartnerEventSourceRequest {

		/** Required */
		Name: string;

		/** Required */
		Account: string;
	}
	export interface DeletePartnerEventSourceRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Account: FormControl<string | null | undefined>,
	}
	export function CreateDeletePartnerEventSourceRequestFormGroup() {
		return new FormGroup<DeletePartnerEventSourceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Account: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRuleRequest {

		/** Required */
		Name: string;
		EventBusName?: string;
		Force?: boolean | null;
	}
	export interface DeleteRuleRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		EventBusName: FormControl<string | null | undefined>,
		Force: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteRuleRequestFormGroup() {
		return new FormGroup<DeleteRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventBusName: new FormControl<string | null | undefined>(undefined),
			Force: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ManagedRuleException {
	}
	export interface ManagedRuleExceptionFormProperties {
	}
	export function CreateManagedRuleExceptionFormGroup() {
		return new FormGroup<ManagedRuleExceptionFormProperties>({
		});

	}

	export interface DescribeApiDestinationResponse {
		ApiDestinationArn?: string;
		Name?: string;
		Description?: string;
		ApiDestinationState?: ApiDestinationState;
		ConnectionArn?: string;
		InvocationEndpoint?: string;
		HttpMethod?: ApiDestinationHttpMethod;
		InvocationRateLimitPerSecond?: number | null;
		CreationTime?: Date;
		LastModifiedTime?: Date;
	}
	export interface DescribeApiDestinationResponseFormProperties {
		ApiDestinationArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ApiDestinationState: FormControl<ApiDestinationState | null | undefined>,
		ConnectionArn: FormControl<string | null | undefined>,
		InvocationEndpoint: FormControl<string | null | undefined>,
		HttpMethod: FormControl<ApiDestinationHttpMethod | null | undefined>,
		InvocationRateLimitPerSecond: FormControl<number | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeApiDestinationResponseFormGroup() {
		return new FormGroup<DescribeApiDestinationResponseFormProperties>({
			ApiDestinationArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ApiDestinationState: new FormControl<ApiDestinationState | null | undefined>(undefined),
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
			InvocationEndpoint: new FormControl<string | null | undefined>(undefined),
			HttpMethod: new FormControl<ApiDestinationHttpMethod | null | undefined>(undefined),
			InvocationRateLimitPerSecond: new FormControl<number | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeApiDestinationRequest {

		/** Required */
		Name: string;
	}
	export interface DescribeApiDestinationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeApiDestinationRequestFormGroup() {
		return new FormGroup<DescribeApiDestinationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeArchiveResponse {
		ArchiveArn?: string;
		ArchiveName?: string;
		EventSourceArn?: string;
		Description?: string;
		EventPattern?: string;
		State?: ArchiveState;
		StateReason?: string;
		RetentionDays?: number | null;
		SizeBytes?: number | null;
		EventCount?: number | null;
		CreationTime?: Date;
	}
	export interface DescribeArchiveResponseFormProperties {
		ArchiveArn: FormControl<string | null | undefined>,
		ArchiveName: FormControl<string | null | undefined>,
		EventSourceArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EventPattern: FormControl<string | null | undefined>,
		State: FormControl<ArchiveState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		RetentionDays: FormControl<number | null | undefined>,
		SizeBytes: FormControl<number | null | undefined>,
		EventCount: FormControl<number | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeArchiveResponseFormGroup() {
		return new FormGroup<DescribeArchiveResponseFormProperties>({
			ArchiveArn: new FormControl<string | null | undefined>(undefined),
			ArchiveName: new FormControl<string | null | undefined>(undefined),
			EventSourceArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			EventPattern: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ArchiveState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			RetentionDays: new FormControl<number | null | undefined>(undefined),
			SizeBytes: new FormControl<number | null | undefined>(undefined),
			EventCount: new FormControl<number | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeArchiveRequest {

		/** Required */
		ArchiveName: string;
	}
	export interface DescribeArchiveRequestFormProperties {

		/** Required */
		ArchiveName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeArchiveRequestFormGroup() {
		return new FormGroup<DescribeArchiveRequestFormProperties>({
			ArchiveName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeConnectionResponse {
		ConnectionArn?: string;
		Name?: string;
		Description?: string;
		ConnectionState?: ConnectionState;
		StateReason?: string;
		AuthorizationType?: ConnectionAuthorizationType;
		SecretArn?: string;
		AuthParameters?: ConnectionAuthResponseParameters;
		CreationTime?: Date;
		LastModifiedTime?: Date;
		LastAuthorizedTime?: Date;
	}
	export interface DescribeConnectionResponseFormProperties {
		ConnectionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ConnectionState: FormControl<ConnectionState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		AuthorizationType: FormControl<ConnectionAuthorizationType | null | undefined>,
		SecretArn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		LastAuthorizedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeConnectionResponseFormGroup() {
		return new FormGroup<DescribeConnectionResponseFormProperties>({
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ConnectionState: new FormControl<ConnectionState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			AuthorizationType: new FormControl<ConnectionAuthorizationType | null | undefined>(undefined),
			SecretArn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			LastAuthorizedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains the authorization parameters to use for the connection. */
	export interface ConnectionAuthResponseParameters {
		BasicAuthParameters?: ConnectionBasicAuthResponseParameters;
		OAuthParameters?: ConnectionOAuthResponseParameters;
		ApiKeyAuthParameters?: ConnectionApiKeyAuthResponseParameters;
		InvocationHttpParameters?: ConnectionHttpParameters;
	}

	/** Contains the authorization parameters to use for the connection. */
	export interface ConnectionAuthResponseParametersFormProperties {
	}
	export function CreateConnectionAuthResponseParametersFormGroup() {
		return new FormGroup<ConnectionAuthResponseParametersFormProperties>({
		});

	}


	/** Contains the authorization parameters for the connection if Basic is specified as the authorization type. */
	export interface ConnectionBasicAuthResponseParameters {
		Username?: string;
	}

	/** Contains the authorization parameters for the connection if Basic is specified as the authorization type. */
	export interface ConnectionBasicAuthResponseParametersFormProperties {
		Username: FormControl<string | null | undefined>,
	}
	export function CreateConnectionBasicAuthResponseParametersFormGroup() {
		return new FormGroup<ConnectionBasicAuthResponseParametersFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the response parameters when OAuth is specified as the authorization type. */
	export interface ConnectionOAuthResponseParameters {
		ClientParameters?: ConnectionOAuthClientResponseParameters;
		AuthorizationEndpoint?: string;
		HttpMethod?: ConnectionOAuthHttpMethod;
		OAuthHttpParameters?: ConnectionHttpParameters;
	}

	/** Contains the response parameters when OAuth is specified as the authorization type. */
	export interface ConnectionOAuthResponseParametersFormProperties {
		AuthorizationEndpoint: FormControl<string | null | undefined>,
		HttpMethod: FormControl<ConnectionOAuthHttpMethod | null | undefined>,
	}
	export function CreateConnectionOAuthResponseParametersFormGroup() {
		return new FormGroup<ConnectionOAuthResponseParametersFormProperties>({
			AuthorizationEndpoint: new FormControl<string | null | undefined>(undefined),
			HttpMethod: new FormControl<ConnectionOAuthHttpMethod | null | undefined>(undefined),
		});

	}


	/** Contains the client response parameters for the connection when OAuth is specified as the authorization type. */
	export interface ConnectionOAuthClientResponseParameters {
		ClientID?: string;
	}

	/** Contains the client response parameters for the connection when OAuth is specified as the authorization type. */
	export interface ConnectionOAuthClientResponseParametersFormProperties {
		ClientID: FormControl<string | null | undefined>,
	}
	export function CreateConnectionOAuthClientResponseParametersFormGroup() {
		return new FormGroup<ConnectionOAuthClientResponseParametersFormProperties>({
			ClientID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the authorization parameters for the connection if API Key is specified as the authorization type. */
	export interface ConnectionApiKeyAuthResponseParameters {
		ApiKeyName?: string;
	}

	/** Contains the authorization parameters for the connection if API Key is specified as the authorization type. */
	export interface ConnectionApiKeyAuthResponseParametersFormProperties {
		ApiKeyName: FormControl<string | null | undefined>,
	}
	export function CreateConnectionApiKeyAuthResponseParametersFormGroup() {
		return new FormGroup<ConnectionApiKeyAuthResponseParametersFormProperties>({
			ApiKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeConnectionRequest {

		/** Required */
		Name: string;
	}
	export interface DescribeConnectionRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeConnectionRequestFormGroup() {
		return new FormGroup<DescribeConnectionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeEndpointResponse {
		Name?: string;
		Description?: string;
		Arn?: string;
		RoutingConfig?: RoutingConfig;
		ReplicationConfig?: ReplicationConfig;
		EventBuses?: Array<EndpointEventBus>;
		RoleArn?: string;
		EndpointId?: string;
		EndpointUrl?: string;
		State?: EndpointState;
		StateReason?: string;
		CreationTime?: Date;
		LastModifiedTime?: Date;
	}
	export interface DescribeEndpointResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		EndpointId: FormControl<string | null | undefined>,
		EndpointUrl: FormControl<string | null | undefined>,
		State: FormControl<EndpointState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeEndpointResponseFormGroup() {
		return new FormGroup<DescribeEndpointResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			EndpointId: new FormControl<string | null | undefined>(undefined),
			EndpointUrl: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EndpointState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DescribeEndpointRequest {

		/** Required */
		Name: string;
		HomeRegion?: string;
	}
	export interface DescribeEndpointRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		HomeRegion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointRequestFormGroup() {
		return new FormGroup<DescribeEndpointRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HomeRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEventBusResponse {
		Name?: string;
		Arn?: string;
		Policy?: string;
	}
	export interface DescribeEventBusResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventBusResponseFormGroup() {
		return new FormGroup<DescribeEventBusResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEventBusRequest {
		Name?: string;
	}
	export interface DescribeEventBusRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventBusRequestFormGroup() {
		return new FormGroup<DescribeEventBusRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEventSourceResponse {
		Arn?: string;
		CreatedBy?: string;
		CreationTime?: Date;
		ExpirationTime?: Date;
		Name?: string;
		State?: EventSourceState;
	}
	export interface DescribeEventSourceResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		ExpirationTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<EventSourceState | null | undefined>,
	}
	export function CreateDescribeEventSourceResponseFormGroup() {
		return new FormGroup<DescribeEventSourceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			ExpirationTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EventSourceState | null | undefined>(undefined),
		});

	}

	export enum EventSourceState { PENDING = 'PENDING', ACTIVE = 'ACTIVE', DELETED = 'DELETED' }

	export interface DescribeEventSourceRequest {

		/** Required */
		Name: string;
	}
	export interface DescribeEventSourceRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventSourceRequestFormGroup() {
		return new FormGroup<DescribeEventSourceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribePartnerEventSourceResponse {
		Arn?: string;
		Name?: string;
	}
	export interface DescribePartnerEventSourceResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribePartnerEventSourceResponseFormGroup() {
		return new FormGroup<DescribePartnerEventSourceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePartnerEventSourceRequest {

		/** Required */
		Name: string;
	}
	export interface DescribePartnerEventSourceRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribePartnerEventSourceRequestFormGroup() {
		return new FormGroup<DescribePartnerEventSourceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeReplayResponse {
		ReplayName?: string;
		ReplayArn?: string;
		Description?: string;
		State?: ReplayState;
		StateReason?: string;
		EventSourceArn?: string;
		Destination?: ReplayDestination;
		EventStartTime?: Date;
		EventEndTime?: Date;
		EventLastReplayedTime?: Date;
		ReplayStartTime?: Date;
		ReplayEndTime?: Date;
	}
	export interface DescribeReplayResponseFormProperties {
		ReplayName: FormControl<string | null | undefined>,
		ReplayArn: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		State: FormControl<ReplayState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		EventSourceArn: FormControl<string | null | undefined>,
		EventStartTime: FormControl<Date | null | undefined>,
		EventEndTime: FormControl<Date | null | undefined>,
		EventLastReplayedTime: FormControl<Date | null | undefined>,
		ReplayStartTime: FormControl<Date | null | undefined>,
		ReplayEndTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeReplayResponseFormGroup() {
		return new FormGroup<DescribeReplayResponseFormProperties>({
			ReplayName: new FormControl<string | null | undefined>(undefined),
			ReplayArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ReplayState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			EventSourceArn: new FormControl<string | null | undefined>(undefined),
			EventStartTime: new FormControl<Date | null | undefined>(undefined),
			EventEndTime: new FormControl<Date | null | undefined>(undefined),
			EventLastReplayedTime: new FormControl<Date | null | undefined>(undefined),
			ReplayStartTime: new FormControl<Date | null | undefined>(undefined),
			ReplayEndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A <code>ReplayDestination</code> object that contains details about a replay. */
	export interface ReplayDestination {

		/** Required */
		Arn: string;
		FilterArns?: Array<string>;
	}

	/** A <code>ReplayDestination</code> object that contains details about a replay. */
	export interface ReplayDestinationFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateReplayDestinationFormGroup() {
		return new FormGroup<ReplayDestinationFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeReplayRequest {

		/** Required */
		ReplayName: string;
	}
	export interface DescribeReplayRequestFormProperties {

		/** Required */
		ReplayName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeReplayRequestFormGroup() {
		return new FormGroup<DescribeReplayRequestFormProperties>({
			ReplayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeRuleResponse {
		Name?: string;
		Arn?: string;
		EventPattern?: string;
		ScheduleExpression?: string;
		State?: ReplicationState;
		Description?: string;
		RoleArn?: string;
		ManagedBy?: string;
		EventBusName?: string;
		CreatedBy?: string;
	}
	export interface DescribeRuleResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		EventPattern: FormControl<string | null | undefined>,
		ScheduleExpression: FormControl<string | null | undefined>,
		State: FormControl<ReplicationState | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		ManagedBy: FormControl<string | null | undefined>,
		EventBusName: FormControl<string | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRuleResponseFormGroup() {
		return new FormGroup<DescribeRuleResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			EventPattern: new FormControl<string | null | undefined>(undefined),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ReplicationState | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			ManagedBy: new FormControl<string | null | undefined>(undefined),
			EventBusName: new FormControl<string | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRuleRequest {

		/** Required */
		Name: string;
		EventBusName?: string;
	}
	export interface DescribeRuleRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		EventBusName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRuleRequestFormGroup() {
		return new FormGroup<DescribeRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventBusName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisableRuleRequest {

		/** Required */
		Name: string;
		EventBusName?: string;
	}
	export interface DisableRuleRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		EventBusName: FormControl<string | null | undefined>,
	}
	export function CreateDisableRuleRequestFormGroup() {
		return new FormGroup<DisableRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventBusName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnableRuleRequest {

		/** Required */
		Name: string;
		EventBusName?: string;
	}
	export interface EnableRuleRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		EventBusName: FormControl<string | null | undefined>,
	}
	export function CreateEnableRuleRequestFormGroup() {
		return new FormGroup<EnableRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventBusName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListApiDestinationsResponse {
		ApiDestinations?: Array<ApiDestination>;
		NextToken?: string;
	}
	export interface ListApiDestinationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApiDestinationsResponseFormGroup() {
		return new FormGroup<ListApiDestinationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains details about an API destination. */
	export interface ApiDestination {
		ApiDestinationArn?: string;
		Name?: string;
		ApiDestinationState?: ApiDestinationState;
		ConnectionArn?: string;
		InvocationEndpoint?: string;
		HttpMethod?: ApiDestinationHttpMethod;
		InvocationRateLimitPerSecond?: number | null;
		CreationTime?: Date;
		LastModifiedTime?: Date;
	}

	/** Contains details about an API destination. */
	export interface ApiDestinationFormProperties {
		ApiDestinationArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ApiDestinationState: FormControl<ApiDestinationState | null | undefined>,
		ConnectionArn: FormControl<string | null | undefined>,
		InvocationEndpoint: FormControl<string | null | undefined>,
		HttpMethod: FormControl<ApiDestinationHttpMethod | null | undefined>,
		InvocationRateLimitPerSecond: FormControl<number | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateApiDestinationFormGroup() {
		return new FormGroup<ApiDestinationFormProperties>({
			ApiDestinationArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ApiDestinationState: new FormControl<ApiDestinationState | null | undefined>(undefined),
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
			InvocationEndpoint: new FormControl<string | null | undefined>(undefined),
			HttpMethod: new FormControl<ApiDestinationHttpMethod | null | undefined>(undefined),
			InvocationRateLimitPerSecond: new FormControl<number | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListApiDestinationsRequest {
		NamePrefix?: string;
		ConnectionArn?: string;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface ListApiDestinationsRequestFormProperties {
		NamePrefix: FormControl<string | null | undefined>,
		ConnectionArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListApiDestinationsRequestFormGroup() {
		return new FormGroup<ListApiDestinationsRequestFormProperties>({
			NamePrefix: new FormControl<string | null | undefined>(undefined),
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListArchivesResponse {
		Archives?: Array<Archive>;
		NextToken?: string;
	}
	export interface ListArchivesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListArchivesResponseFormGroup() {
		return new FormGroup<ListArchivesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An <code>Archive</code> object that contains details about an archive. */
	export interface Archive {
		ArchiveName?: string;
		EventSourceArn?: string;
		State?: ArchiveState;
		StateReason?: string;
		RetentionDays?: number | null;
		SizeBytes?: number | null;
		EventCount?: number | null;
		CreationTime?: Date;
	}

	/** An <code>Archive</code> object that contains details about an archive. */
	export interface ArchiveFormProperties {
		ArchiveName: FormControl<string | null | undefined>,
		EventSourceArn: FormControl<string | null | undefined>,
		State: FormControl<ArchiveState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		RetentionDays: FormControl<number | null | undefined>,
		SizeBytes: FormControl<number | null | undefined>,
		EventCount: FormControl<number | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateArchiveFormGroup() {
		return new FormGroup<ArchiveFormProperties>({
			ArchiveName: new FormControl<string | null | undefined>(undefined),
			EventSourceArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ArchiveState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			RetentionDays: new FormControl<number | null | undefined>(undefined),
			SizeBytes: new FormControl<number | null | undefined>(undefined),
			EventCount: new FormControl<number | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListArchivesRequest {
		NamePrefix?: string;
		EventSourceArn?: string;
		State?: ArchiveState;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface ListArchivesRequestFormProperties {
		NamePrefix: FormControl<string | null | undefined>,
		EventSourceArn: FormControl<string | null | undefined>,
		State: FormControl<ArchiveState | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListArchivesRequestFormGroup() {
		return new FormGroup<ListArchivesRequestFormProperties>({
			NamePrefix: new FormControl<string | null | undefined>(undefined),
			EventSourceArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ArchiveState | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListConnectionsResponse {
		Connections?: Array<Connection>;
		NextToken?: string;
	}
	export interface ListConnectionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListConnectionsResponseFormGroup() {
		return new FormGroup<ListConnectionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a connection. */
	export interface Connection {
		ConnectionArn?: string;
		Name?: string;
		ConnectionState?: ConnectionState;
		StateReason?: string;
		AuthorizationType?: ConnectionAuthorizationType;
		CreationTime?: Date;
		LastModifiedTime?: Date;
		LastAuthorizedTime?: Date;
	}

	/** Contains information about a connection. */
	export interface ConnectionFormProperties {
		ConnectionArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		ConnectionState: FormControl<ConnectionState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		AuthorizationType: FormControl<ConnectionAuthorizationType | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		LastAuthorizedTime: FormControl<Date | null | undefined>,
	}
	export function CreateConnectionFormGroup() {
		return new FormGroup<ConnectionFormProperties>({
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			ConnectionState: new FormControl<ConnectionState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			AuthorizationType: new FormControl<ConnectionAuthorizationType | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			LastAuthorizedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListConnectionsRequest {
		NamePrefix?: string;
		ConnectionState?: ConnectionState;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface ListConnectionsRequestFormProperties {
		NamePrefix: FormControl<string | null | undefined>,
		ConnectionState: FormControl<ConnectionState | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListConnectionsRequestFormGroup() {
		return new FormGroup<ListConnectionsRequestFormProperties>({
			NamePrefix: new FormControl<string | null | undefined>(undefined),
			ConnectionState: new FormControl<ConnectionState | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListEndpointsResponse {
		Endpoints?: Array<Endpoint>;
		NextToken?: string;
	}
	export interface ListEndpointsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEndpointsResponseFormGroup() {
		return new FormGroup<ListEndpointsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A global endpoint used to improve your application's availability by making it regional-fault tolerant. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide. */
	export interface Endpoint {
		Name?: string;
		Description?: string;
		Arn?: string;
		RoutingConfig?: RoutingConfig;
		ReplicationConfig?: ReplicationConfig;
		EventBuses?: Array<EndpointEventBus>;
		RoleArn?: string;
		EndpointId?: string;
		EndpointUrl?: string;
		State?: EndpointState;
		StateReason?: string;
		CreationTime?: Date;
		LastModifiedTime?: Date;
	}

	/** A global endpoint used to improve your application's availability by making it regional-fault tolerant. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide. */
	export interface EndpointFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		EndpointId: FormControl<string | null | undefined>,
		EndpointUrl: FormControl<string | null | undefined>,
		State: FormControl<EndpointState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			EndpointId: new FormControl<string | null | undefined>(undefined),
			EndpointUrl: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EndpointState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListEndpointsRequest {
		NamePrefix?: string;
		HomeRegion?: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListEndpointsRequestFormProperties {
		NamePrefix: FormControl<string | null | undefined>,
		HomeRegion: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEndpointsRequestFormGroup() {
		return new FormGroup<ListEndpointsRequestFormProperties>({
			NamePrefix: new FormControl<string | null | undefined>(undefined),
			HomeRegion: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListEventBusesResponse {
		EventBuses?: Array<EventBus>;
		NextToken?: string;
	}
	export interface ListEventBusesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventBusesResponseFormGroup() {
		return new FormGroup<ListEventBusesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event bus receives events from a source, uses rules to evaluate them, applies any configured input transformation, and routes them to the appropriate target(s). Your account's default event bus receives events from Amazon Web Services services. A custom event bus can receive events from your custom applications and services. A partner event bus receives events from an event source created by an SaaS partner. These events come from the partners services or applications. */
	export interface EventBus {
		Name?: string;
		Arn?: string;
		Policy?: string;
	}

	/** An event bus receives events from a source, uses rules to evaluate them, applies any configured input transformation, and routes them to the appropriate target(s). Your account's default event bus receives events from Amazon Web Services services. A custom event bus can receive events from your custom applications and services. A partner event bus receives events from an event source created by an SaaS partner. These events come from the partners services or applications. */
	export interface EventBusFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateEventBusFormGroup() {
		return new FormGroup<EventBusFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEventBusesRequest {
		NamePrefix?: string;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface ListEventBusesRequestFormProperties {
		NamePrefix: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListEventBusesRequestFormGroup() {
		return new FormGroup<ListEventBusesRequestFormProperties>({
			NamePrefix: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListEventSourcesResponse {
		EventSources?: Array<EventSource>;
		NextToken?: string;
	}
	export interface ListEventSourcesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventSourcesResponseFormGroup() {
		return new FormGroup<ListEventSourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that Amazon Web Services account can receive events from the partner's applications or services. */
	export interface EventSource {
		Arn?: string;
		CreatedBy?: string;
		CreationTime?: Date;
		ExpirationTime?: Date;
		Name?: string;
		State?: EventSourceState;
	}

	/** A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that Amazon Web Services account can receive events from the partner's applications or services. */
	export interface EventSourceFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		ExpirationTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<EventSourceState | null | undefined>,
	}
	export function CreateEventSourceFormGroup() {
		return new FormGroup<EventSourceFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			ExpirationTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EventSourceState | null | undefined>(undefined),
		});

	}

	export interface ListEventSourcesRequest {
		NamePrefix?: string;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface ListEventSourcesRequestFormProperties {
		NamePrefix: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListEventSourcesRequestFormGroup() {
		return new FormGroup<ListEventSourcesRequestFormProperties>({
			NamePrefix: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPartnerEventSourceAccountsResponse {
		PartnerEventSourceAccounts?: Array<PartnerEventSourceAccount>;
		NextToken?: string;
	}
	export interface ListPartnerEventSourceAccountsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPartnerEventSourceAccountsResponseFormGroup() {
		return new FormGroup<ListPartnerEventSourceAccountsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Amazon Web Services account that a partner event source has been offered to. */
	export interface PartnerEventSourceAccount {
		Account?: string;
		CreationTime?: Date;
		ExpirationTime?: Date;
		State?: EventSourceState;
	}

	/** The Amazon Web Services account that a partner event source has been offered to. */
	export interface PartnerEventSourceAccountFormProperties {
		Account: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		ExpirationTime: FormControl<Date | null | undefined>,
		State: FormControl<EventSourceState | null | undefined>,
	}
	export function CreatePartnerEventSourceAccountFormGroup() {
		return new FormGroup<PartnerEventSourceAccountFormProperties>({
			Account: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			ExpirationTime: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<EventSourceState | null | undefined>(undefined),
		});

	}

	export interface ListPartnerEventSourceAccountsRequest {

		/** Required */
		EventSourceName: string;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface ListPartnerEventSourceAccountsRequestFormProperties {

		/** Required */
		EventSourceName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListPartnerEventSourceAccountsRequestFormGroup() {
		return new FormGroup<ListPartnerEventSourceAccountsRequestFormProperties>({
			EventSourceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListPartnerEventSourcesResponse {
		PartnerEventSources?: Array<PartnerEventSource>;
		NextToken?: string;
	}
	export interface ListPartnerEventSourcesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPartnerEventSourcesResponseFormGroup() {
		return new FormGroup<ListPartnerEventSourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that Amazon Web Services account can receive events from the partner's applications or services. */
	export interface PartnerEventSource {
		Arn?: string;
		Name?: string;
	}

	/** A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that Amazon Web Services account can receive events from the partner's applications or services. */
	export interface PartnerEventSourceFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreatePartnerEventSourceFormGroup() {
		return new FormGroup<PartnerEventSourceFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPartnerEventSourcesRequest {

		/** Required */
		NamePrefix: string;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface ListPartnerEventSourcesRequestFormProperties {

		/** Required */
		NamePrefix: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListPartnerEventSourcesRequestFormGroup() {
		return new FormGroup<ListPartnerEventSourcesRequestFormProperties>({
			NamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListReplaysResponse {
		Replays?: Array<Replay>;
		NextToken?: string;
	}
	export interface ListReplaysResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListReplaysResponseFormGroup() {
		return new FormGroup<ListReplaysResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A <code>Replay</code> object that contains details about a replay. */
	export interface Replay {
		ReplayName?: string;
		EventSourceArn?: string;
		State?: ReplayState;
		StateReason?: string;
		EventStartTime?: Date;
		EventEndTime?: Date;
		EventLastReplayedTime?: Date;
		ReplayStartTime?: Date;
		ReplayEndTime?: Date;
	}

	/** A <code>Replay</code> object that contains details about a replay. */
	export interface ReplayFormProperties {
		ReplayName: FormControl<string | null | undefined>,
		EventSourceArn: FormControl<string | null | undefined>,
		State: FormControl<ReplayState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		EventStartTime: FormControl<Date | null | undefined>,
		EventEndTime: FormControl<Date | null | undefined>,
		EventLastReplayedTime: FormControl<Date | null | undefined>,
		ReplayStartTime: FormControl<Date | null | undefined>,
		ReplayEndTime: FormControl<Date | null | undefined>,
	}
	export function CreateReplayFormGroup() {
		return new FormGroup<ReplayFormProperties>({
			ReplayName: new FormControl<string | null | undefined>(undefined),
			EventSourceArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ReplayState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			EventStartTime: new FormControl<Date | null | undefined>(undefined),
			EventEndTime: new FormControl<Date | null | undefined>(undefined),
			EventLastReplayedTime: new FormControl<Date | null | undefined>(undefined),
			ReplayStartTime: new FormControl<Date | null | undefined>(undefined),
			ReplayEndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListReplaysRequest {
		NamePrefix?: string;
		State?: ReplayState;
		EventSourceArn?: string;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface ListReplaysRequestFormProperties {
		NamePrefix: FormControl<string | null | undefined>,
		State: FormControl<ReplayState | null | undefined>,
		EventSourceArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListReplaysRequestFormGroup() {
		return new FormGroup<ListReplaysRequestFormProperties>({
			NamePrefix: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ReplayState | null | undefined>(undefined),
			EventSourceArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRuleNamesByTargetResponse {
		RuleNames?: Array<string>;
		NextToken?: string;
	}
	export interface ListRuleNamesByTargetResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRuleNamesByTargetResponseFormGroup() {
		return new FormGroup<ListRuleNamesByTargetResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRuleNamesByTargetRequest {

		/** Required */
		TargetArn: string;
		EventBusName?: string;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface ListRuleNamesByTargetRequestFormProperties {

		/** Required */
		TargetArn: FormControl<string | null | undefined>,
		EventBusName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListRuleNamesByTargetRequestFormGroup() {
		return new FormGroup<ListRuleNamesByTargetRequestFormProperties>({
			TargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventBusName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRulesResponse {
		Rules?: Array<Rule>;
		NextToken?: string;
	}
	export interface ListRulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRulesResponseFormGroup() {
		return new FormGroup<ListRulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a rule in Amazon EventBridge. */
	export interface Rule {
		Name?: string;
		Arn?: string;
		EventPattern?: string;
		State?: ReplicationState;
		Description?: string;
		ScheduleExpression?: string;
		RoleArn?: string;
		ManagedBy?: string;
		EventBusName?: string;
	}

	/** Contains information about a rule in Amazon EventBridge. */
	export interface RuleFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		EventPattern: FormControl<string | null | undefined>,
		State: FormControl<ReplicationState | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ScheduleExpression: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		ManagedBy: FormControl<string | null | undefined>,
		EventBusName: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			EventPattern: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ReplicationState | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			ManagedBy: new FormControl<string | null | undefined>(undefined),
			EventBusName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRulesRequest {
		NamePrefix?: string;
		EventBusName?: string;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface ListRulesRequestFormProperties {
		NamePrefix: FormControl<string | null | undefined>,
		EventBusName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListRulesRequestFormGroup() {
		return new FormGroup<ListRulesRequestFormProperties>({
			NamePrefix: new FormControl<string | null | undefined>(undefined),
			EventBusName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTargetsByRuleResponse {
		Targets?: Array<Target>;
		NextToken?: string;
	}
	export interface ListTargetsByRuleResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTargetsByRuleResponseFormGroup() {
		return new FormGroup<ListTargetsByRuleResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Targets are the resources to be invoked when a rule is triggered. For a complete list of services and resources that can be set as a target, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html">PutTargets</a>.</p> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> */
	export interface Target {

		/** Required */
		Id: string;

		/** Required */
		Arn: string;
		RoleArn?: string;
		Input?: string;
		InputPath?: string;
		InputTransformer?: InputTransformer;
		KinesisParameters?: KinesisParameters;
		RunCommandParameters?: RunCommandParameters;
		EcsParameters?: EcsParameters;
		BatchParameters?: BatchParameters;
		SqsParameters?: SqsParameters;
		HttpParameters?: HttpParameters;
		RedshiftDataParameters?: RedshiftDataParameters;
		SageMakerPipelineParameters?: SageMakerPipelineParameters;
		DeadLetterConfig?: DeadLetterConfig;
		RetryPolicy?: RetryPolicy;
	}

	/** <p>Targets are the resources to be invoked when a rule is triggered. For a complete list of services and resources that can be set as a target, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html">PutTargets</a>.</p> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> */
	export interface TargetFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Arn: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		Input: FormControl<string | null | undefined>,
		InputPath: FormControl<string | null | undefined>,
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Input: new FormControl<string | null | undefined>(undefined),
			InputPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event. */
	export interface InputTransformer {
		InputPathsMap?: TransformerPaths;

		/** Required */
		InputTemplate: string;
	}

	/** Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event. */
	export interface InputTransformerFormProperties {

		/** Required */
		InputTemplate: FormControl<string | null | undefined>,
	}
	export function CreateInputTransformerFormGroup() {
		return new FormGroup<InputTransformerFormProperties>({
			InputTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransformerPaths {
	}
	export interface TransformerPathsFormProperties {
	}
	export function CreateTransformerPathsFormGroup() {
		return new FormGroup<TransformerPathsFormProperties>({
		});

	}


	/** This object enables you to specify a JSON path to extract from the event and use as the partition key for the Amazon Kinesis data stream, so that you can control the shard to which the event goes. If you do not include this parameter, the default is to use the <code>eventId</code> as the partition key. */
	export interface KinesisParameters {

		/** Required */
		PartitionKeyPath: string;
	}

	/** This object enables you to specify a JSON path to extract from the event and use as the partition key for the Amazon Kinesis data stream, so that you can control the shard to which the event goes. If you do not include this parameter, the default is to use the <code>eventId</code> as the partition key. */
	export interface KinesisParametersFormProperties {

		/** Required */
		PartitionKeyPath: FormControl<string | null | undefined>,
	}
	export function CreateKinesisParametersFormGroup() {
		return new FormGroup<KinesisParametersFormProperties>({
			PartitionKeyPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command.  */
	export interface RunCommandParameters {

		/** Required */
		RunCommandTargets: Array<RunCommandTarget>;
	}

	/** This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command.  */
	export interface RunCommandParametersFormProperties {
	}
	export function CreateRunCommandParametersFormGroup() {
		return new FormGroup<RunCommandParametersFormProperties>({
		});

	}


	/** Information about the EC2 instances that are to be sent the command, specified as key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but this key may specify multiple values. */
	export interface RunCommandTarget {

		/** Required */
		Key: string;

		/** Required */
		Values: Array<string>;
	}

	/** Information about the EC2 instances that are to be sent the command, specified as key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but this key may specify multiple values. */
	export interface RunCommandTargetFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateRunCommandTargetFormGroup() {
		return new FormGroup<RunCommandTargetFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The custom parameters to be used when the target is an Amazon ECS task. */
	export interface EcsParameters {

		/** Required */
		TaskDefinitionArn: string;
		TaskCount?: number | null;
		LaunchType?: LaunchType;
		NetworkConfiguration?: NetworkConfiguration;
		PlatformVersion?: string;
		Group?: string;
		CapacityProviderStrategy?: Array<CapacityProviderStrategyItem>;
		EnableECSManagedTags?: boolean | null;
		EnableExecuteCommand?: boolean | null;
		PlacementConstraints?: Array<PlacementConstraint>;
		PlacementStrategy?: Array<PlacementStrategy>;
		PropagateTags?: PropagateTags;
		ReferenceId?: string;
		Tags?: Array<Tag>;
	}

	/** The custom parameters to be used when the target is an Amazon ECS task. */
	export interface EcsParametersFormProperties {

		/** Required */
		TaskDefinitionArn: FormControl<string | null | undefined>,
		TaskCount: FormControl<number | null | undefined>,
		LaunchType: FormControl<LaunchType | null | undefined>,
		PlatformVersion: FormControl<string | null | undefined>,
		Group: FormControl<string | null | undefined>,
		EnableECSManagedTags: FormControl<boolean | null | undefined>,
		EnableExecuteCommand: FormControl<boolean | null | undefined>,
		PropagateTags: FormControl<PropagateTags | null | undefined>,
		ReferenceId: FormControl<string | null | undefined>,
	}
	export function CreateEcsParametersFormGroup() {
		return new FormGroup<EcsParametersFormProperties>({
			TaskDefinitionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TaskCount: new FormControl<number | null | undefined>(undefined),
			LaunchType: new FormControl<LaunchType | null | undefined>(undefined),
			PlatformVersion: new FormControl<string | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
			EnableECSManagedTags: new FormControl<boolean | null | undefined>(undefined),
			EnableExecuteCommand: new FormControl<boolean | null | undefined>(undefined),
			PropagateTags: new FormControl<PropagateTags | null | undefined>(undefined),
			ReferenceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LaunchType { EC2 = 'EC2', FARGATE = 'FARGATE', EXTERNAL = 'EXTERNAL' }


	/** This structure specifies the network configuration for an ECS task. */
	export interface NetworkConfiguration {
		awsvpcConfiguration?: AwsVpcConfiguration;
	}

	/** This structure specifies the network configuration for an ECS task. */
	export interface NetworkConfigurationFormProperties {
	}
	export function CreateNetworkConfigurationFormGroup() {
		return new FormGroup<NetworkConfigurationFormProperties>({
		});

	}


	/** This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode. */
	export interface AwsVpcConfiguration {

		/** Required */
		Subnets: Array<string>;
		SecurityGroups?: Array<string>;
		AssignPublicIp?: ReplicationState;
	}

	/** This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode. */
	export interface AwsVpcConfigurationFormProperties {
		AssignPublicIp: FormControl<ReplicationState | null | undefined>,
	}
	export function CreateAwsVpcConfigurationFormGroup() {
		return new FormGroup<AwsVpcConfigurationFormProperties>({
			AssignPublicIp: new FormControl<ReplicationState | null | undefined>(undefined),
		});

	}


	/** The details of a capacity provider strategy. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html">CapacityProviderStrategyItem</a> in the Amazon ECS API Reference. */
	export interface CapacityProviderStrategyItem {

		/** Required */
		capacityProvider: string;
		weight?: number | null;
		base?: number | null;
	}

	/** The details of a capacity provider strategy. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html">CapacityProviderStrategyItem</a> in the Amazon ECS API Reference. */
	export interface CapacityProviderStrategyItemFormProperties {

		/** Required */
		capacityProvider: FormControl<string | null | undefined>,
		weight: FormControl<number | null | undefined>,
		base: FormControl<number | null | undefined>,
	}
	export function CreateCapacityProviderStrategyItemFormGroup() {
		return new FormGroup<CapacityProviderStrategyItemFormProperties>({
			capacityProvider: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<number | null | undefined>(undefined),
			base: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An object representing a constraint on task placement. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the Amazon Elastic Container Service Developer Guide. */
	export interface PlacementConstraint {
		type?: PlacementConstraintType;
		expression?: string;
	}

	/** An object representing a constraint on task placement. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the Amazon Elastic Container Service Developer Guide. */
	export interface PlacementConstraintFormProperties {
		type: FormControl<PlacementConstraintType | null | undefined>,
		expression: FormControl<string | null | undefined>,
	}
	export function CreatePlacementConstraintFormGroup() {
		return new FormGroup<PlacementConstraintFormProperties>({
			type: new FormControl<PlacementConstraintType | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PlacementConstraintType { distinctInstance = 'distinctInstance', memberOf = 'memberOf' }


	/** The task placement strategy for a task or service. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the Amazon Elastic Container Service Service Developer Guide. */
	export interface PlacementStrategy {
		type?: PlacementStrategyType;
		field?: string;
	}

	/** The task placement strategy for a task or service. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the Amazon Elastic Container Service Service Developer Guide. */
	export interface PlacementStrategyFormProperties {
		type: FormControl<PlacementStrategyType | null | undefined>,
		field: FormControl<string | null | undefined>,
	}
	export function CreatePlacementStrategyFormGroup() {
		return new FormGroup<PlacementStrategyFormProperties>({
			type: new FormControl<PlacementStrategyType | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PlacementStrategyType { random = 'random', spread = 'spread', binpack = 'binpack' }

	export enum PropagateTags { TASK_DEFINITION = 'TASK_DEFINITION' }


	/** The custom parameters to be used when the target is an Batch job. */
	export interface BatchParameters {

		/** Required */
		JobDefinition: string;

		/** Required */
		JobName: string;
		ArrayProperties?: BatchArrayProperties;
		RetryStrategy?: BatchRetryStrategy;
	}

	/** The custom parameters to be used when the target is an Batch job. */
	export interface BatchParametersFormProperties {

		/** Required */
		JobDefinition: FormControl<string | null | undefined>,

		/** Required */
		JobName: FormControl<string | null | undefined>,
	}
	export function CreateBatchParametersFormGroup() {
		return new FormGroup<BatchParametersFormProperties>({
			JobDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job. */
	export interface BatchArrayProperties {
		Size?: number | null;
	}

	/** The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job. */
	export interface BatchArrayPropertiesFormProperties {
		Size: FormControl<number | null | undefined>,
	}
	export function CreateBatchArrayPropertiesFormGroup() {
		return new FormGroup<BatchArrayPropertiesFormProperties>({
			Size: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The retry strategy to use for failed jobs, if the target is an Batch job. If you specify a retry strategy here, it overrides the retry strategy defined in the job definition. */
	export interface BatchRetryStrategy {
		Attempts?: number | null;
	}

	/** The retry strategy to use for failed jobs, if the target is an Batch job. If you specify a retry strategy here, it overrides the retry strategy defined in the job definition. */
	export interface BatchRetryStrategyFormProperties {
		Attempts: FormControl<number | null | undefined>,
	}
	export function CreateBatchRetryStrategyFormGroup() {
		return new FormGroup<BatchRetryStrategyFormProperties>({
			Attempts: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This structure includes the custom parameter to be used when the target is an SQS FIFO queue. */
	export interface SqsParameters {
		MessageGroupId?: string;
	}

	/** This structure includes the custom parameter to be used when the target is an SQS FIFO queue. */
	export interface SqsParametersFormProperties {
		MessageGroupId: FormControl<string | null | undefined>,
	}
	export function CreateSqsParametersFormGroup() {
		return new FormGroup<SqsParametersFormProperties>({
			MessageGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** These are custom parameter to be used when the target is an API Gateway APIs or EventBridge ApiDestinations. In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence. */
	export interface HttpParameters {
		PathParameterValues?: Array<string>;
		HeaderParameters?: HeaderParametersMap;
		QueryStringParameters?: QueryStringParametersMap;
	}

	/** These are custom parameter to be used when the target is an API Gateway APIs or EventBridge ApiDestinations. In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence. */
	export interface HttpParametersFormProperties {
	}
	export function CreateHttpParametersFormGroup() {
		return new FormGroup<HttpParametersFormProperties>({
		});

	}

	export interface HeaderParametersMap {
	}
	export interface HeaderParametersMapFormProperties {
	}
	export function CreateHeaderParametersMapFormGroup() {
		return new FormGroup<HeaderParametersMapFormProperties>({
		});

	}

	export interface QueryStringParametersMap {
	}
	export interface QueryStringParametersMapFormProperties {
	}
	export function CreateQueryStringParametersMapFormGroup() {
		return new FormGroup<QueryStringParametersMapFormProperties>({
		});

	}


	/** These are custom parameters to be used when the target is a Amazon Redshift cluster or Redshift Serverless workgroup to invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events. */
	export interface RedshiftDataParameters {
		SecretManagerArn?: string;

		/** Required */
		Database: string;
		DbUser?: string;
		Sql?: string;
		StatementName?: string;
		WithEvent?: boolean | null;

		/**
		 * A list of SQLs.
		 * Minimum items: 0
		 * Maximum items: 40
		 */
		Sqls?: Array<string>;
	}

	/** These are custom parameters to be used when the target is a Amazon Redshift cluster or Redshift Serverless workgroup to invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events. */
	export interface RedshiftDataParametersFormProperties {
		SecretManagerArn: FormControl<string | null | undefined>,

		/** Required */
		Database: FormControl<string | null | undefined>,
		DbUser: FormControl<string | null | undefined>,
		Sql: FormControl<string | null | undefined>,
		StatementName: FormControl<string | null | undefined>,
		WithEvent: FormControl<boolean | null | undefined>,
	}
	export function CreateRedshiftDataParametersFormGroup() {
		return new FormGroup<RedshiftDataParametersFormProperties>({
			SecretManagerArn: new FormControl<string | null | undefined>(undefined),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DbUser: new FormControl<string | null | undefined>(undefined),
			Sql: new FormControl<string | null | undefined>(undefined),
			StatementName: new FormControl<string | null | undefined>(undefined),
			WithEvent: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on EventBridge events. */
	export interface SageMakerPipelineParameters {
		PipelineParameterList?: Array<SageMakerPipelineParameter>;
	}

	/** These are custom parameters to use when the target is a SageMaker Model Building Pipeline that starts based on EventBridge events. */
	export interface SageMakerPipelineParametersFormProperties {
	}
	export function CreateSageMakerPipelineParametersFormGroup() {
		return new FormGroup<SageMakerPipelineParametersFormProperties>({
		});

	}


	/** Name/Value pair of a parameter to start execution of a SageMaker Model Building Pipeline. */
	export interface SageMakerPipelineParameter {

		/** Required */
		Name: string;

		/** Required */
		Value: string;
	}

	/** Name/Value pair of a parameter to start execution of a SageMaker Model Building Pipeline. */
	export interface SageMakerPipelineParameterFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateSageMakerPipelineParameterFormGroup() {
		return new FormGroup<SageMakerPipelineParameterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A <code>DeadLetterConfig</code> object that contains information about a dead-letter queue configuration. */
	export interface DeadLetterConfig {
		Arn?: string;
	}

	/** A <code>DeadLetterConfig</code> object that contains information about a dead-letter queue configuration. */
	export interface DeadLetterConfigFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeadLetterConfigFormGroup() {
		return new FormGroup<DeadLetterConfigFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A <code>RetryPolicy</code> object that includes information about the retry policy settings. */
	export interface RetryPolicy {
		MaximumRetryAttempts?: number | null;
		MaximumEventAgeInSeconds?: number | null;
	}

	/** A <code>RetryPolicy</code> object that includes information about the retry policy settings. */
	export interface RetryPolicyFormProperties {
		MaximumRetryAttempts: FormControl<number | null | undefined>,
		MaximumEventAgeInSeconds: FormControl<number | null | undefined>,
	}
	export function CreateRetryPolicyFormGroup() {
		return new FormGroup<RetryPolicyFormProperties>({
			MaximumRetryAttempts: new FormControl<number | null | undefined>(undefined),
			MaximumEventAgeInSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTargetsByRuleRequest {

		/** Required */
		Rule: string;
		EventBusName?: string;
		NextToken?: string;
		Limit?: number | null;
	}
	export interface ListTargetsByRuleRequestFormProperties {

		/** Required */
		Rule: FormControl<string | null | undefined>,
		EventBusName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListTargetsByRuleRequestFormGroup() {
		return new FormGroup<ListTargetsByRuleRequestFormProperties>({
			Rule: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventBusName: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutEventsResponse {
		FailedEntryCount?: number | null;
		Entries?: Array<PutEventsResultEntry>;
	}
	export interface PutEventsResponseFormProperties {
		FailedEntryCount: FormControl<number | null | undefined>,
	}
	export function CreatePutEventsResponseFormGroup() {
		return new FormGroup<PutEventsResponseFormProperties>({
			FailedEntryCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents an event that failed to be submitted. For information about the errors that are common to all actions, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/CommonErrors.html">Common Errors</a>. */
	export interface PutEventsResultEntry {
		EventId?: string;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** Represents an event that failed to be submitted. For information about the errors that are common to all actions, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/CommonErrors.html">Common Errors</a>. */
	export interface PutEventsResultEntryFormProperties {
		EventId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreatePutEventsResultEntryFormGroup() {
		return new FormGroup<PutEventsResultEntryFormProperties>({
			EventId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutEventsRequest {

		/** Required */
		Entries: Array<PutEventsRequestEntry>;
		EndpointId?: string;
	}
	export interface PutEventsRequestFormProperties {
		EndpointId: FormControl<string | null | undefined>,
	}
	export function CreatePutEventsRequestFormGroup() {
		return new FormGroup<PutEventsRequestFormProperties>({
			EndpointId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an event to be submitted. */
	export interface PutEventsRequestEntry {
		Time?: Date;
		Source?: string;
		Resources?: Array<string>;
		DetailType?: string;
		Detail?: string;
		EventBusName?: string;
		TraceHeader?: string;
	}

	/** Represents an event to be submitted. */
	export interface PutEventsRequestEntryFormProperties {
		Time: FormControl<Date | null | undefined>,
		Source: FormControl<string | null | undefined>,
		DetailType: FormControl<string | null | undefined>,
		Detail: FormControl<string | null | undefined>,
		EventBusName: FormControl<string | null | undefined>,
		TraceHeader: FormControl<string | null | undefined>,
	}
	export function CreatePutEventsRequestEntryFormGroup() {
		return new FormGroup<PutEventsRequestEntryFormProperties>({
			Time: new FormControl<Date | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			DetailType: new FormControl<string | null | undefined>(undefined),
			Detail: new FormControl<string | null | undefined>(undefined),
			EventBusName: new FormControl<string | null | undefined>(undefined),
			TraceHeader: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutPartnerEventsResponse {
		FailedEntryCount?: number | null;
		Entries?: Array<PutPartnerEventsResultEntry>;
	}
	export interface PutPartnerEventsResponseFormProperties {
		FailedEntryCount: FormControl<number | null | undefined>,
	}
	export function CreatePutPartnerEventsResponseFormGroup() {
		return new FormGroup<PutPartnerEventsResponseFormProperties>({
			FailedEntryCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents an event that a partner tried to generate, but failed. */
	export interface PutPartnerEventsResultEntry {
		EventId?: string;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** Represents an event that a partner tried to generate, but failed. */
	export interface PutPartnerEventsResultEntryFormProperties {
		EventId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreatePutPartnerEventsResultEntryFormGroup() {
		return new FormGroup<PutPartnerEventsResultEntryFormProperties>({
			EventId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutPartnerEventsRequest {

		/** Required */
		Entries: Array<PutPartnerEventsRequestEntry>;
	}
	export interface PutPartnerEventsRequestFormProperties {
	}
	export function CreatePutPartnerEventsRequestFormGroup() {
		return new FormGroup<PutPartnerEventsRequestFormProperties>({
		});

	}


	/** The details about an event generated by an SaaS partner. */
	export interface PutPartnerEventsRequestEntry {
		Time?: Date;
		Source?: string;
		Resources?: Array<string>;
		DetailType?: string;
		Detail?: string;
	}

	/** The details about an event generated by an SaaS partner. */
	export interface PutPartnerEventsRequestEntryFormProperties {
		Time: FormControl<Date | null | undefined>,
		Source: FormControl<string | null | undefined>,
		DetailType: FormControl<string | null | undefined>,
		Detail: FormControl<string | null | undefined>,
	}
	export function CreatePutPartnerEventsRequestEntryFormGroup() {
		return new FormGroup<PutPartnerEventsRequestEntryFormProperties>({
			Time: new FormControl<Date | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			DetailType: new FormControl<string | null | undefined>(undefined),
			Detail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutPermissionRequest {
		EventBusName?: string;
		Action?: string;
		Principal?: string;
		StatementId?: string;
		Condition?: Condition;
		Policy?: string;
	}
	export interface PutPermissionRequestFormProperties {
		EventBusName: FormControl<string | null | undefined>,
		Action: FormControl<string | null | undefined>,
		Principal: FormControl<string | null | undefined>,
		StatementId: FormControl<string | null | undefined>,
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutPermissionRequestFormGroup() {
		return new FormGroup<PutPermissionRequestFormProperties>({
			EventBusName: new FormControl<string | null | undefined>(undefined),
			Action: new FormControl<string | null | undefined>(undefined),
			Principal: new FormControl<string | null | undefined>(undefined),
			StatementId: new FormControl<string | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A JSON string which you can use to limit the event bus permissions you are granting to only accounts that fulfill the condition. Currently, the only supported condition is membership in a certain Amazon Web Services organization. The string must contain <code>Type</code>, <code>Key</code>, and <code>Value</code> fields. The <code>Value</code> field specifies the ID of the Amazon Web Services organization. Following is an example value for <code>Condition</code>:</p> <p> <code>'{"Type" : "StringEquals", "Key": "aws:PrincipalOrgID", "Value": "o-1234567890"}'</code> </p> */
	export interface Condition {

		/** Required */
		Type: string;

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** <p>A JSON string which you can use to limit the event bus permissions you are granting to only accounts that fulfill the condition. Currently, the only supported condition is membership in a certain Amazon Web Services organization. The string must contain <code>Type</code>, <code>Key</code>, and <code>Value</code> fields. The <code>Value</code> field specifies the ID of the Amazon Web Services organization. Following is an example value for <code>Condition</code>:</p> <p> <code>'{"Type" : "StringEquals", "Key": "aws:PrincipalOrgID", "Value": "o-1234567890"}'</code> </p> */
	export interface ConditionFormProperties {

		/** Required */
		Type: FormControl<string | null | undefined>,

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateConditionFormGroup() {
		return new FormGroup<ConditionFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PolicyLengthExceededException {
	}
	export interface PolicyLengthExceededExceptionFormProperties {
	}
	export function CreatePolicyLengthExceededExceptionFormGroup() {
		return new FormGroup<PolicyLengthExceededExceptionFormProperties>({
		});

	}

	export interface PutRuleResponse {
		RuleArn?: string;
	}
	export interface PutRuleResponseFormProperties {
		RuleArn: FormControl<string | null | undefined>,
	}
	export function CreatePutRuleResponseFormGroup() {
		return new FormGroup<PutRuleResponseFormProperties>({
			RuleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutRuleRequest {

		/** Required */
		Name: string;
		ScheduleExpression?: string;
		EventPattern?: string;
		State?: ReplicationState;
		Description?: string;
		RoleArn?: string;
		Tags?: Array<Tag>;
		EventBusName?: string;
	}
	export interface PutRuleRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		ScheduleExpression: FormControl<string | null | undefined>,
		EventPattern: FormControl<string | null | undefined>,
		State: FormControl<ReplicationState | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		EventBusName: FormControl<string | null | undefined>,
	}
	export function CreatePutRuleRequestFormGroup() {
		return new FormGroup<PutRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined),
			EventPattern: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ReplicationState | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			EventBusName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutTargetsResponse {
		FailedEntryCount?: number | null;
		FailedEntries?: Array<PutTargetsResultEntry>;
	}
	export interface PutTargetsResponseFormProperties {
		FailedEntryCount: FormControl<number | null | undefined>,
	}
	export function CreatePutTargetsResponseFormGroup() {
		return new FormGroup<PutTargetsResponseFormProperties>({
			FailedEntryCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a target that failed to be added to a rule. */
	export interface PutTargetsResultEntry {
		TargetId?: string;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** Represents a target that failed to be added to a rule. */
	export interface PutTargetsResultEntryFormProperties {
		TargetId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreatePutTargetsResultEntryFormGroup() {
		return new FormGroup<PutTargetsResultEntryFormProperties>({
			TargetId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutTargetsRequest {

		/** Required */
		Rule: string;
		EventBusName?: string;

		/** Required */
		Targets: Array<Target>;
	}
	export interface PutTargetsRequestFormProperties {

		/** Required */
		Rule: FormControl<string | null | undefined>,
		EventBusName: FormControl<string | null | undefined>,
	}
	export function CreatePutTargetsRequestFormGroup() {
		return new FormGroup<PutTargetsRequestFormProperties>({
			Rule: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventBusName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemovePermissionRequest {
		StatementId?: string;
		RemoveAllPermissions?: boolean | null;
		EventBusName?: string;
	}
	export interface RemovePermissionRequestFormProperties {
		StatementId: FormControl<string | null | undefined>,
		RemoveAllPermissions: FormControl<boolean | null | undefined>,
		EventBusName: FormControl<string | null | undefined>,
	}
	export function CreateRemovePermissionRequestFormGroup() {
		return new FormGroup<RemovePermissionRequestFormProperties>({
			StatementId: new FormControl<string | null | undefined>(undefined),
			RemoveAllPermissions: new FormControl<boolean | null | undefined>(undefined),
			EventBusName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveTargetsResponse {
		FailedEntryCount?: number | null;
		FailedEntries?: Array<RemoveTargetsResultEntry>;
	}
	export interface RemoveTargetsResponseFormProperties {
		FailedEntryCount: FormControl<number | null | undefined>,
	}
	export function CreateRemoveTargetsResponseFormGroup() {
		return new FormGroup<RemoveTargetsResponseFormProperties>({
			FailedEntryCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a target that failed to be removed from a rule. */
	export interface RemoveTargetsResultEntry {
		TargetId?: string;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** Represents a target that failed to be removed from a rule. */
	export interface RemoveTargetsResultEntryFormProperties {
		TargetId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTargetsResultEntryFormGroup() {
		return new FormGroup<RemoveTargetsResultEntryFormProperties>({
			TargetId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveTargetsRequest {

		/** Required */
		Rule: string;
		EventBusName?: string;

		/** Required */
		Ids: Array<string>;
		Force?: boolean | null;
	}
	export interface RemoveTargetsRequestFormProperties {

		/** Required */
		Rule: FormControl<string | null | undefined>,
		EventBusName: FormControl<string | null | undefined>,
		Force: FormControl<boolean | null | undefined>,
	}
	export function CreateRemoveTargetsRequestFormGroup() {
		return new FormGroup<RemoveTargetsRequestFormProperties>({
			Rule: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventBusName: new FormControl<string | null | undefined>(undefined),
			Force: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartReplayResponse {
		ReplayArn?: string;
		State?: ReplayState;
		StateReason?: string;
		ReplayStartTime?: Date;
	}
	export interface StartReplayResponseFormProperties {
		ReplayArn: FormControl<string | null | undefined>,
		State: FormControl<ReplayState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		ReplayStartTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartReplayResponseFormGroup() {
		return new FormGroup<StartReplayResponseFormProperties>({
			ReplayArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ReplayState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			ReplayStartTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface StartReplayRequest {

		/** Required */
		ReplayName: string;
		Description?: string;

		/** Required */
		EventSourceArn: string;

		/** Required */
		EventStartTime: Date;

		/** Required */
		EventEndTime: Date;

		/** Required */
		Destination: ReplayDestination;
	}
	export interface StartReplayRequestFormProperties {

		/** Required */
		ReplayName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		EventSourceArn: FormControl<string | null | undefined>,

		/** Required */
		EventStartTime: FormControl<Date | null | undefined>,

		/** Required */
		EventEndTime: FormControl<Date | null | undefined>,
	}
	export function CreateStartReplayRequestFormGroup() {
		return new FormGroup<StartReplayRequestFormProperties>({
			ReplayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			EventSourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EventStartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EventEndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
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
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TestEventPatternResponse {
		Result?: boolean | null;
	}
	export interface TestEventPatternResponseFormProperties {
		Result: FormControl<boolean | null | undefined>,
	}
	export function CreateTestEventPatternResponseFormGroup() {
		return new FormGroup<TestEventPatternResponseFormProperties>({
			Result: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TestEventPatternRequest {

		/** Required */
		EventPattern: string;

		/** Required */
		Event: string;
	}
	export interface TestEventPatternRequestFormProperties {

		/** Required */
		EventPattern: FormControl<string | null | undefined>,

		/** Required */
		Event: FormControl<string | null | undefined>,
	}
	export function CreateTestEventPatternRequestFormGroup() {
		return new FormGroup<TestEventPatternRequestFormProperties>({
			EventPattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Event: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateApiDestinationResponse {
		ApiDestinationArn?: string;
		ApiDestinationState?: ApiDestinationState;
		CreationTime?: Date;
		LastModifiedTime?: Date;
	}
	export interface UpdateApiDestinationResponseFormProperties {
		ApiDestinationArn: FormControl<string | null | undefined>,
		ApiDestinationState: FormControl<ApiDestinationState | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateApiDestinationResponseFormGroup() {
		return new FormGroup<UpdateApiDestinationResponseFormProperties>({
			ApiDestinationArn: new FormControl<string | null | undefined>(undefined),
			ApiDestinationState: new FormControl<ApiDestinationState | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateApiDestinationRequest {

		/** Required */
		Name: string;
		Description?: string;
		ConnectionArn?: string;
		InvocationEndpoint?: string;
		HttpMethod?: ApiDestinationHttpMethod;
		InvocationRateLimitPerSecond?: number | null;
	}
	export interface UpdateApiDestinationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ConnectionArn: FormControl<string | null | undefined>,
		InvocationEndpoint: FormControl<string | null | undefined>,
		HttpMethod: FormControl<ApiDestinationHttpMethod | null | undefined>,
		InvocationRateLimitPerSecond: FormControl<number | null | undefined>,
	}
	export function CreateUpdateApiDestinationRequestFormGroup() {
		return new FormGroup<UpdateApiDestinationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
			InvocationEndpoint: new FormControl<string | null | undefined>(undefined),
			HttpMethod: new FormControl<ApiDestinationHttpMethod | null | undefined>(undefined),
			InvocationRateLimitPerSecond: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateArchiveResponse {
		ArchiveArn?: string;
		State?: ArchiveState;
		StateReason?: string;
		CreationTime?: Date;
	}
	export interface UpdateArchiveResponseFormProperties {
		ArchiveArn: FormControl<string | null | undefined>,
		State: FormControl<ArchiveState | null | undefined>,
		StateReason: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateArchiveResponseFormGroup() {
		return new FormGroup<UpdateArchiveResponseFormProperties>({
			ArchiveArn: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<ArchiveState | null | undefined>(undefined),
			StateReason: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateArchiveRequest {

		/** Required */
		ArchiveName: string;
		Description?: string;
		EventPattern?: string;
		RetentionDays?: number | null;
	}
	export interface UpdateArchiveRequestFormProperties {

		/** Required */
		ArchiveName: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		EventPattern: FormControl<string | null | undefined>,
		RetentionDays: FormControl<number | null | undefined>,
	}
	export function CreateUpdateArchiveRequestFormGroup() {
		return new FormGroup<UpdateArchiveRequestFormProperties>({
			ArchiveName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			EventPattern: new FormControl<string | null | undefined>(undefined),
			RetentionDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateConnectionResponse {
		ConnectionArn?: string;
		ConnectionState?: ConnectionState;
		CreationTime?: Date;
		LastModifiedTime?: Date;
		LastAuthorizedTime?: Date;
	}
	export interface UpdateConnectionResponseFormProperties {
		ConnectionArn: FormControl<string | null | undefined>,
		ConnectionState: FormControl<ConnectionState | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		LastAuthorizedTime: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateConnectionResponseFormGroup() {
		return new FormGroup<UpdateConnectionResponseFormProperties>({
			ConnectionArn: new FormControl<string | null | undefined>(undefined),
			ConnectionState: new FormControl<ConnectionState | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			LastAuthorizedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateConnectionRequest {

		/** Required */
		Name: string;
		Description?: string;
		AuthorizationType?: ConnectionAuthorizationType;
		AuthParameters?: UpdateConnectionAuthRequestParameters;
	}
	export interface UpdateConnectionRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		AuthorizationType: FormControl<ConnectionAuthorizationType | null | undefined>,
	}
	export function CreateUpdateConnectionRequestFormGroup() {
		return new FormGroup<UpdateConnectionRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			AuthorizationType: new FormControl<ConnectionAuthorizationType | null | undefined>(undefined),
		});

	}


	/** Contains the additional parameters to use for the connection. */
	export interface UpdateConnectionAuthRequestParameters {
		BasicAuthParameters?: UpdateConnectionBasicAuthRequestParameters;
		OAuthParameters?: UpdateConnectionOAuthRequestParameters;
		ApiKeyAuthParameters?: UpdateConnectionApiKeyAuthRequestParameters;
		InvocationHttpParameters?: ConnectionHttpParameters;
	}

	/** Contains the additional parameters to use for the connection. */
	export interface UpdateConnectionAuthRequestParametersFormProperties {
	}
	export function CreateUpdateConnectionAuthRequestParametersFormGroup() {
		return new FormGroup<UpdateConnectionAuthRequestParametersFormProperties>({
		});

	}


	/** Contains the Basic authorization parameters for the connection. */
	export interface UpdateConnectionBasicAuthRequestParameters {
		Username?: string;
		Password?: string;
	}

	/** Contains the Basic authorization parameters for the connection. */
	export interface UpdateConnectionBasicAuthRequestParametersFormProperties {
		Username: FormControl<string | null | undefined>,
		Password: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectionBasicAuthRequestParametersFormGroup() {
		return new FormGroup<UpdateConnectionBasicAuthRequestParametersFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined),
			Password: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the OAuth request parameters to use for the connection. */
	export interface UpdateConnectionOAuthRequestParameters {
		ClientParameters?: UpdateConnectionOAuthClientRequestParameters;
		AuthorizationEndpoint?: string;
		HttpMethod?: ConnectionOAuthHttpMethod;
		OAuthHttpParameters?: ConnectionHttpParameters;
	}

	/** Contains the OAuth request parameters to use for the connection. */
	export interface UpdateConnectionOAuthRequestParametersFormProperties {
		AuthorizationEndpoint: FormControl<string | null | undefined>,
		HttpMethod: FormControl<ConnectionOAuthHttpMethod | null | undefined>,
	}
	export function CreateUpdateConnectionOAuthRequestParametersFormGroup() {
		return new FormGroup<UpdateConnectionOAuthRequestParametersFormProperties>({
			AuthorizationEndpoint: new FormControl<string | null | undefined>(undefined),
			HttpMethod: new FormControl<ConnectionOAuthHttpMethod | null | undefined>(undefined),
		});

	}


	/** Contains the OAuth authorization parameters to use for the connection. */
	export interface UpdateConnectionOAuthClientRequestParameters {
		ClientID?: string;
		ClientSecret?: string;
	}

	/** Contains the OAuth authorization parameters to use for the connection. */
	export interface UpdateConnectionOAuthClientRequestParametersFormProperties {
		ClientID: FormControl<string | null | undefined>,
		ClientSecret: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectionOAuthClientRequestParametersFormGroup() {
		return new FormGroup<UpdateConnectionOAuthClientRequestParametersFormProperties>({
			ClientID: new FormControl<string | null | undefined>(undefined),
			ClientSecret: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the API key authorization parameters to use to update the connection. */
	export interface UpdateConnectionApiKeyAuthRequestParameters {
		ApiKeyName?: string;
		ApiKeyValue?: string;
	}

	/** Contains the API key authorization parameters to use to update the connection. */
	export interface UpdateConnectionApiKeyAuthRequestParametersFormProperties {
		ApiKeyName: FormControl<string | null | undefined>,
		ApiKeyValue: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConnectionApiKeyAuthRequestParametersFormGroup() {
		return new FormGroup<UpdateConnectionApiKeyAuthRequestParametersFormProperties>({
			ApiKeyName: new FormControl<string | null | undefined>(undefined),
			ApiKeyValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEndpointResponse {
		Name?: string;
		Arn?: string;
		RoutingConfig?: RoutingConfig;
		ReplicationConfig?: ReplicationConfig;
		EventBuses?: Array<EndpointEventBus>;
		RoleArn?: string;
		EndpointId?: string;
		EndpointUrl?: string;
		State?: EndpointState;
	}
	export interface UpdateEndpointResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		EndpointId: FormControl<string | null | undefined>,
		EndpointUrl: FormControl<string | null | undefined>,
		State: FormControl<EndpointState | null | undefined>,
	}
	export function CreateUpdateEndpointResponseFormGroup() {
		return new FormGroup<UpdateEndpointResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			EndpointId: new FormControl<string | null | undefined>(undefined),
			EndpointUrl: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<EndpointState | null | undefined>(undefined),
		});

	}

	export interface UpdateEndpointRequest {

		/** Required */
		Name: string;
		Description?: string;
		RoutingConfig?: RoutingConfig;
		ReplicationConfig?: ReplicationConfig;
		EventBuses?: Array<EndpointEventBus>;
		RoleArn?: string;
	}
	export interface UpdateEndpointRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEndpointRequestFormGroup() {
		return new FormGroup<UpdateEndpointRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssignPublicIp { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export enum RuleState { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Activates a partner event source that has been deactivated. Once activated, your matching event bus will start receiving events from the event source.
		 * Post #X-Amz-Target=AWSEvents.ActivateEventSource
		 * @return {void} Success
		 */
		ActivateEventSource(requestBody: ActivateEventSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSEvents.ActivateEventSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels the specified replay.
		 * Post #X-Amz-Target=AWSEvents.CancelReplay
		 * @return {CancelReplayResponse} Success
		 */
		CancelReplay(requestBody: CancelReplayRequest): Observable<CancelReplayResponse> {
			return this.http.post<CancelReplayResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.CancelReplay', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an API destination, which is an HTTP invocation endpoint configured as a target for events.
		 * Post #X-Amz-Target=AWSEvents.CreateApiDestination
		 * @return {CreateApiDestinationResponse} Success
		 */
		CreateApiDestination(requestBody: CreateApiDestinationRequest): Observable<CreateApiDestinationResponse> {
			return this.http.post<CreateApiDestinationResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.CreateApiDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an archive of events with the specified settings. When you create an archive, incoming events might not immediately start being sent to the archive. Allow a short period of time for changes to take effect. If you do not specify a pattern to filter events sent to the archive, all events are sent to the archive except replayed events. Replayed events are not sent to an archive.
		 * Post #X-Amz-Target=AWSEvents.CreateArchive
		 * @return {CreateArchiveResponse} Success
		 */
		CreateArchive(requestBody: CreateArchiveRequest): Observable<CreateArchiveResponse> {
			return this.http.post<CreateArchiveResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.CreateArchive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a connection. A connection defines the authorization type and credentials to use for authorization with an API destination HTTP endpoint.
		 * Post #X-Amz-Target=AWSEvents.CreateConnection
		 * @return {CreateConnectionResponse} Success
		 */
		CreateConnection(requestBody: CreateConnectionRequest): Observable<CreateConnectionResponse> {
			return this.http.post<CreateConnectionResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.CreateConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a global endpoint. Global endpoints improve your application's availability by making it regional-fault tolerant. To do this, you define a primary and secondary Region with event buses in each Region. You also create a Amazon Route 53 health check that will tell EventBridge to route events to the secondary Region when an "unhealthy" state is encountered and events will be routed back to the primary Region when the health check reports a "healthy" state.
		 * Post #X-Amz-Target=AWSEvents.CreateEndpoint
		 * @return {CreateEndpointResponse} Success
		 */
		CreateEndpoint(requestBody: CreateEndpointRequest): Observable<CreateEndpointResponse> {
			return this.http.post<CreateEndpointResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.CreateEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your custom applications and services, or it can be a partner event bus which can be matched to a partner event source.
		 * Post #X-Amz-Target=AWSEvents.CreateEventBus
		 * @return {CreateEventBusResponse} Success
		 */
		CreateEventBus(requestBody: CreateEventBusRequest): Observable<CreateEventBusResponse> {
			return this.http.post<CreateEventBusResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.CreateEventBus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Called by an SaaS partner to create a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>Each partner event source can be used by one Amazon Web Services account to create a matching partner event bus in that Amazon Web Services account. A SaaS partner must create one partner event source for each Amazon Web Services account that wants to receive those event types. </p> <p>A partner event source creates events based on resources within the SaaS partner's service or application.</p> <p>An Amazon Web Services account that creates a partner event bus that matches the partner event source can use that event bus to receive events from the partner, and then process them using Amazon Web Services Events rules and targets.</p> <p>Partner event source names follow this format:</p> <p> <code> <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i> </code> </p> <p> <i>partner_name</i> is determined during partner registration and identifies the partner to Amazon Web Services customers. <i>event_namespace</i> is determined by the partner and is a way for the partner to categorize their events. <i>event_name</i> is determined by the partner, and should uniquely identify an event-generating resource within the partner system. The combination of <i>event_namespace</i> and <i>event_name</i> should help Amazon Web Services customers decide whether to create an event bus to receive these events.</p>
		 * Post #X-Amz-Target=AWSEvents.CreatePartnerEventSource
		 * @return {CreatePartnerEventSourceResponse} Success
		 */
		CreatePartnerEventSource(requestBody: CreatePartnerEventSourceRequest): Observable<CreatePartnerEventSourceResponse> {
			return this.http.post<CreatePartnerEventSourceResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.CreatePartnerEventSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>You can use this operation to temporarily stop receiving events from the specified partner event source. The matching event bus is not deleted. </p> <p>When you deactivate a partner event source, the source goes into PENDING state. If it remains in PENDING state for more than two weeks, it is deleted.</p> <p>To activate a deactivated partner event source, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ActivateEventSource.html">ActivateEventSource</a>.</p>
		 * Post #X-Amz-Target=AWSEvents.DeactivateEventSource
		 * @return {void} Success
		 */
		DeactivateEventSource(requestBody: DeactivateEventSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSEvents.DeactivateEventSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes all authorization parameters from the connection. This lets you remove the secret from the connection so you can reuse it without having to create a new connection.
		 * Post #X-Amz-Target=AWSEvents.DeauthorizeConnection
		 * @return {DeauthorizeConnectionResponse} Success
		 */
		DeauthorizeConnection(requestBody: DeauthorizeConnectionRequest): Observable<DeauthorizeConnectionResponse> {
			return this.http.post<DeauthorizeConnectionResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.DeauthorizeConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified API destination.
		 * Post #X-Amz-Target=AWSEvents.DeleteApiDestination
		 * @return {DeleteApiDestinationResponse} Success
		 */
		DeleteApiDestination(requestBody: DeleteApiDestinationRequest): Observable<DeleteApiDestinationResponse> {
			return this.http.post<DeleteApiDestinationResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.DeleteApiDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified archive.
		 * Post #X-Amz-Target=AWSEvents.DeleteArchive
		 * @return {DeleteArchiveResponse} Success
		 */
		DeleteArchive(requestBody: DeleteArchiveRequest): Observable<DeleteArchiveResponse> {
			return this.http.post<DeleteArchiveResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.DeleteArchive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a connection.
		 * Post #X-Amz-Target=AWSEvents.DeleteConnection
		 * @return {DeleteConnectionResponse} Success
		 */
		DeleteConnection(requestBody: DeleteConnectionRequest): Observable<DeleteConnectionResponse> {
			return this.http.post<DeleteConnectionResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.DeleteConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an existing global endpoint. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide.
		 * Post #X-Amz-Target=AWSEvents.DeleteEndpoint
		 * @return {DeleteEndpointResponse} Success
		 */
		DeleteEndpoint(requestBody: DeleteEndpointRequest): Observable<DeleteEndpointResponse> {
			return this.http.post<DeleteEndpointResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.DeleteEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified custom event bus or partner event bus. All rules associated with this event bus need to be deleted. You can't delete your account's default event bus.
		 * Post #X-Amz-Target=AWSEvents.DeleteEventBus
		 * @return {void} Success
		 */
		DeleteEventBus(requestBody: DeleteEventBusRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSEvents.DeleteEventBus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This operation is used by SaaS partners to delete a partner event source. This operation is not used by Amazon Web Services customers.</p> <p>When you delete an event source, the status of the corresponding partner event bus in the Amazon Web Services customer account becomes DELETED.</p> <p/>
		 * Post #X-Amz-Target=AWSEvents.DeletePartnerEventSource
		 * @return {void} Success
		 */
		DeletePartnerEventSource(requestBody: DeletePartnerEventSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSEvents.DeletePartnerEventSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified rule.</p> <p>Before you can delete the rule, you must remove all targets, using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemoveTargets.html">RemoveTargets</a>.</p> <p>When you delete a rule, incoming events might continue to match to the deleted rule. Allow a short period of time for changes to take effect.</p> <p>If you call delete rule multiple times for the same rule, all calls will succeed. When you call delete rule for a non-existent custom eventbus, <code>ResourceNotFoundException</code> is returned.</p> <p>Managed rules are rules created and managed by another Amazon Web Services service on your behalf. These rules are created by those other Amazon Web Services services to support functionality in those services. You can delete these rules using the <code>Force</code> option, but you should do so only if you are sure the other service is not still using that rule.</p>
		 * Post #X-Amz-Target=AWSEvents.DeleteRule
		 * @return {void} Success
		 */
		DeleteRule(requestBody: DeleteRuleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSEvents.DeleteRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves details about an API destination.
		 * Post #X-Amz-Target=AWSEvents.DescribeApiDestination
		 * @return {DescribeApiDestinationResponse} Success
		 */
		DescribeApiDestination(requestBody: DescribeApiDestinationRequest): Observable<DescribeApiDestinationResponse> {
			return this.http.post<DescribeApiDestinationResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.DescribeApiDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves details about an archive.
		 * Post #X-Amz-Target=AWSEvents.DescribeArchive
		 * @return {DescribeArchiveResponse} Success
		 */
		DescribeArchive(requestBody: DescribeArchiveRequest): Observable<DescribeArchiveResponse> {
			return this.http.post<DescribeArchiveResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.DescribeArchive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves details about a connection.
		 * Post #X-Amz-Target=AWSEvents.DescribeConnection
		 * @return {DescribeConnectionResponse} Success
		 */
		DescribeConnection(requestBody: DescribeConnectionRequest): Observable<DescribeConnectionResponse> {
			return this.http.post<DescribeConnectionResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.DescribeConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the information about an existing global endpoint. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide..
		 * Post #X-Amz-Target=AWSEvents.DescribeEndpoint
		 * @return {DescribeEndpointResponse} Success
		 */
		DescribeEndpoint(requestBody: DescribeEndpointRequest): Observable<DescribeEndpointResponse> {
			return this.http.post<DescribeEndpointResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.DescribeEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Displays details about an event bus in your account. This can include the external Amazon Web Services accounts that are permitted to write events to your default event bus, and the associated policy. For custom event buses and partner event buses, it displays the name, ARN, policy, state, and creation time.</p> <p> To enable your account to receive events from other accounts on its default event bus, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p> <p>For more information about partner event buses, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p>
		 * Post #X-Amz-Target=AWSEvents.DescribeEventBus
		 * @return {DescribeEventBusResponse} Success
		 */
		DescribeEventBus(requestBody: DescribeEventBusRequest): Observable<DescribeEventBusResponse> {
			return this.http.post<DescribeEventBusResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.DescribeEventBus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation lists details about a partner event source that is shared with your account.
		 * Post #X-Amz-Target=AWSEvents.DescribeEventSource
		 * @return {DescribeEventSourceResponse} Success
		 */
		DescribeEventSource(requestBody: DescribeEventSourceRequest): Observable<DescribeEventSourceResponse> {
			return this.http.post<DescribeEventSourceResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.DescribeEventSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * An SaaS partner can use this operation to list details about a partner event source that they have created. Amazon Web Services customers do not use this operation. Instead, Amazon Web Services customers can use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventSource.html">DescribeEventSource</a> to see details about a partner event source that is shared with them.
		 * Post #X-Amz-Target=AWSEvents.DescribePartnerEventSource
		 * @return {DescribePartnerEventSourceResponse} Success
		 */
		DescribePartnerEventSource(requestBody: DescribePartnerEventSourceRequest): Observable<DescribePartnerEventSourceResponse> {
			return this.http.post<DescribePartnerEventSourceResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.DescribePartnerEventSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves details about a replay. Use <code>DescribeReplay</code> to determine the progress of a running replay. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you use <code>StartReplay</code> and specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use <code>DescribeReplay</code> to determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code> indicates the time within the specified time range associated with the last event replayed.
		 * Post #X-Amz-Target=AWSEvents.DescribeReplay
		 * @return {DescribeReplayResponse} Success
		 */
		DescribeReplay(requestBody: DescribeReplayRequest): Observable<DescribeReplayResponse> {
			return this.http.post<DescribeReplayResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.DescribeReplay', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the specified rule.</p> <p>DescribeRule does not list the targets of a rule. To see the targets associated with a rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>
		 * Post #X-Amz-Target=AWSEvents.DescribeRule
		 * @return {DescribeRuleResponse} Success
		 */
		DescribeRule(requestBody: DescribeRuleRequest): Observable<DescribeRuleResponse> {
			return this.http.post<DescribeRuleResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.DescribeRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disables the specified rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression.</p> <p>When you disable a rule, incoming events might continue to match to the disabled rule. Allow a short period of time for changes to take effect.</p>
		 * Post #X-Amz-Target=AWSEvents.DisableRule
		 * @return {void} Success
		 */
		DisableRule(requestBody: DisableRuleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSEvents.DisableRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables the specified rule. If the rule does not exist, the operation fails.</p> <p>When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Allow a short period of time for changes to take effect.</p>
		 * Post #X-Amz-Target=AWSEvents.EnableRule
		 * @return {void} Success
		 */
		EnableRule(requestBody: EnableRuleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSEvents.EnableRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a list of API destination in the account in the current Region.
		 * Post #X-Amz-Target=AWSEvents.ListApiDestinations
		 * @return {ListApiDestinationsResponse} Success
		 */
		ListApiDestinations(requestBody: ListApiDestinationsRequest): Observable<ListApiDestinationsResponse> {
			return this.http.post<ListApiDestinationsResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListApiDestinations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists your archives. You can either list all the archives or you can provide a prefix to match to the archive names. Filter parameters are exclusive.
		 * Post #X-Amz-Target=AWSEvents.ListArchives
		 * @return {ListArchivesResponse} Success
		 */
		ListArchives(requestBody: ListArchivesRequest): Observable<ListArchivesResponse> {
			return this.http.post<ListArchivesResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListArchives', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of connections from the account.
		 * Post #X-Amz-Target=AWSEvents.ListConnections
		 * @return {ListConnectionsResponse} Success
		 */
		ListConnections(requestBody: ListConnectionsRequest): Observable<ListConnectionsResponse> {
			return this.http.post<ListConnectionsResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListConnections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the global endpoints associated with this account. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide..
		 * Post #X-Amz-Target=AWSEvents.ListEndpoints
		 * @return {ListEndpointsResponse} Success
		 */
		ListEndpoints(requestBody: ListEndpointsRequest): Observable<ListEndpointsResponse> {
			return this.http.post<ListEndpointsResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListEndpoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the event buses in your account, including the default event bus, custom event buses, and partner event buses.
		 * Post #X-Amz-Target=AWSEvents.ListEventBuses
		 * @return {ListEventBusesResponse} Success
		 */
		ListEventBuses(requestBody: ListEventBusesRequest): Observable<ListEventBusesResponse> {
			return this.http.post<ListEventBusesResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListEventBuses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * You can use this to see all the partner event sources that have been shared with your Amazon Web Services account. For more information about partner event sources, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.
		 * Post #X-Amz-Target=AWSEvents.ListEventSources
		 * @return {ListEventSourcesResponse} Success
		 */
		ListEventSources(requestBody: ListEventSourcesRequest): Observable<ListEventSourcesResponse> {
			return this.http.post<ListEventSourcesResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListEventSources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * An SaaS partner can use this operation to display the Amazon Web Services account ID that a particular partner event source name is associated with. This operation is not used by Amazon Web Services customers.
		 * Post #X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts
		 * @return {ListPartnerEventSourceAccountsResponse} Success
		 */
		ListPartnerEventSourceAccounts(requestBody: ListPartnerEventSourceAccountsRequest): Observable<ListPartnerEventSourceAccountsResponse> {
			return this.http.post<ListPartnerEventSourceAccountsResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * An SaaS partner can use this operation to list all the partner event source names that they have created. This operation is not used by Amazon Web Services customers.
		 * Post #X-Amz-Target=AWSEvents.ListPartnerEventSources
		 * @return {ListPartnerEventSourcesResponse} Success
		 */
		ListPartnerEventSources(requestBody: ListPartnerEventSourcesRequest): Observable<ListPartnerEventSourcesResponse> {
			return this.http.post<ListPartnerEventSourcesResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListPartnerEventSources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists your replays. You can either list all the replays or you can provide a prefix to match to the replay names. Filter parameters are exclusive.
		 * Post #X-Amz-Target=AWSEvents.ListReplays
		 * @return {ListReplaysResponse} Success
		 */
		ListReplays(requestBody: ListReplaysRequest): Observable<ListReplaysResponse> {
			return this.http.post<ListReplaysResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListReplays', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the rules for the specified target. You can see which of the rules in Amazon EventBridge can invoke a specific target in your account.
		 * Post #X-Amz-Target=AWSEvents.ListRuleNamesByTarget
		 * @return {ListRuleNamesByTargetResponse} Success
		 */
		ListRuleNamesByTarget(requestBody: ListRuleNamesByTargetRequest): Observable<ListRuleNamesByTargetResponse> {
			return this.http.post<ListRuleNamesByTargetResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListRuleNamesByTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists your Amazon EventBridge rules. You can either list all the rules or you can provide a prefix to match to the rule names.</p> <p>ListRules does not list the targets of a rule. To see the targets associated with a rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_ListTargetsByRule.html">ListTargetsByRule</a>.</p>
		 * Post #X-Amz-Target=AWSEvents.ListRules
		 * @return {ListRulesResponse} Success
		 */
		ListRules(requestBody: ListRulesRequest): Observable<ListRulesResponse> {
			return this.http.post<ListRulesResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Displays the tags associated with an EventBridge resource. In EventBridge, rules and event buses can be tagged.
		 * Post #X-Amz-Target=AWSEvents.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the targets assigned to the specified rule.
		 * Post #X-Amz-Target=AWSEvents.ListTargetsByRule
		 * @return {ListTargetsByRuleResponse} Success
		 */
		ListTargetsByRule(requestBody: ListTargetsByRuleRequest): Observable<ListTargetsByRuleResponse> {
			return this.http.post<ListTargetsByRuleResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListTargetsByRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sends custom events to Amazon EventBridge so that they can be matched to rules.</p> <note> <p>PutEvents will only process nested JSON up to 1100 levels deep.</p> </note>
		 * Post #X-Amz-Target=AWSEvents.PutEvents
		 * @return {PutEventsResponse} Success
		 */
		PutEvents(requestBody: PutEventsRequest): Observable<PutEventsResponse> {
			return this.http.post<PutEventsResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.PutEvents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services customers do not use this operation.
		 * Post #X-Amz-Target=AWSEvents.PutPartnerEvents
		 * @return {PutPartnerEventsResponse} Success
		 */
		PutPartnerEvents(requestBody: PutPartnerEventsRequest): Observable<PutPartnerEventsResponse> {
			return this.http.post<PutPartnerEventsResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.PutPartnerEvents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Running <code>PutPermission</code> permits the specified Amazon Web Services account or Amazon Web Services organization to put events to the specified <i>event bus</i>. Amazon EventBridge (CloudWatch Events) rules in your account are triggered by these events arriving to an event bus in your account. </p> <p>For another account to send events to your account, that external account must have an EventBridge rule with your account's event bus as a target.</p> <p>To enable multiple Amazon Web Services accounts to put events to your event bus, run <code>PutPermission</code> once for each of these accounts. Or, if all the accounts are members of the same Amazon Web Services organization, you can run <code>PutPermission</code> once specifying <code>Principal</code> as "*" and specifying the Amazon Web Services organization ID in <code>Condition</code>, to grant permissions to all accounts in that organization.</p> <p>If you grant permissions using an organization, then accounts in that organization must specify a <code>RoleArn</code> with proper permissions when they use <code>PutTarget</code> to add your account's event bus as a target. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>The permission policy on the event bus cannot exceed 10 KB in size.</p>
		 * Post #X-Amz-Target=AWSEvents.PutPermission
		 * @return {void} Success
		 */
		PutPermission(requestBody: PutPermissionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSEvents.PutPermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DisableRule.html">DisableRule</a>.</p> <p>A single rule watches for events from a single event bus. Events generated by Amazon Web Services services go to your account's default event bus. Events generated by SaaS partner services or applications go to the matching partner event bus. If you have custom applications or services, you can specify whether their events go to your default event bus or a custom event bus that you have created. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html">CreateEventBus</a>.</p> <p>If you are updating an existing rule, the rule is replaced with what you specify in this <code>PutRule</code> command. If you omit arguments in <code>PutRule</code>, the old values for those arguments are not kept. Instead, they are replaced with null values.</p> <p>When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect.</p> <p>A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule.</p> <p>When you initially create a rule, you can optionally assign one or more tags to the rule. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only rules with certain tag values. To use the <code>PutRule</code> operation and assign tags, you must have both the <code>events:PutRule</code> and <code>events:TagResource</code> permissions.</p> <p>If you are updating an existing rule, any tags you specify in the <code>PutRule</code> operation are ignored. To update the tags of an existing rule, use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UntagResource.html">UntagResource</a>.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p> <p>In EventBridge, it is possible to create rules that lead to infinite loops, where a rule is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket, and trigger software to change them to the desired state. If the rule is not written carefully, the subsequent change to the ACLs fires the rule again, creating an infinite loop.</p> <p>To prevent this, write the rules so that the triggered actions do not re-fire the same rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead of after any change. </p> <p>An infinite loop can quickly cause higher than expected charges. We recommend that you use budgeting, which alerts you when charges exceed your specified limit. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html">Managing Your Costs with Budgets</a>.</p>
		 * Post #X-Amz-Target=AWSEvents.PutRule
		 * @return {PutRuleResponse} Success
		 */
		PutRule(requestBody: PutRuleRequest): Observable<PutRuleResponse> {
			return this.http.post<PutRuleResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.PutRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.</p> <p>Targets are the resources that are invoked when a rule is triggered.</p> <note> <p>Each rule can have up to five (5) targets associated with it at one time.</p> </note> <p>You can configure the following as targets for Events:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-destinations.html">API destination</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-api-gateway-target.html">API Gateway</a> </p> </li> <li> <p>Batch job queue</p> </li> <li> <p>CloudWatch group</p> </li> <li> <p>CodeBuild project</p> </li> <li> <p>CodePipeline</p> </li> <li> <p>EC2 <code>CreateSnapshot</code> API call</p> </li> <li> <p>EC2 Image Builder</p> </li> <li> <p>EC2 <code>RebootInstances</code> API call</p> </li> <li> <p>EC2 <code>StopInstances</code> API call</p> </li> <li> <p>EC2 <code>TerminateInstances</code> API call</p> </li> <li> <p>ECS task</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-cross-account.html">Event bus in a different account or Region</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-bus-to-bus.html">Event bus in the same account and Region</a> </p> </li> <li> <p>Firehose delivery stream</p> </li> <li> <p>Glue workflow</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-creation.html#incident-tracking-auto-eventbridge">Incident Manager response plan</a> </p> </li> <li> <p>Inspector assessment template</p> </li> <li> <p>Kinesis stream</p> </li> <li> <p>Lambda function</p> </li> <li> <p>Redshift cluster</p> </li> <li> <p>Redshift Serverless workgroup</p> </li> <li> <p>SageMaker Pipeline</p> </li> <li> <p>SNS topic</p> </li> <li> <p>SQS queue</p> </li> <li> <p>Step Functions state machine</p> </li> <li> <p>Systems Manager Automation</p> </li> <li> <p>Systems Manager OpsItem</p> </li> <li> <p>Systems Manager Run Command</p> </li> </ul> <p>Creating rules with built-in targets is supported only in the Amazon Web Services Management Console. The built-in targets are <code>EC2 CreateSnapshot API call</code>, <code>EC2 RebootInstances API call</code>, <code>EC2 StopInstances API call</code>, and <code>EC2 TerminateInstances API call</code>. </p> <p>For some target types, <code>PutTargets</code> provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the <code>KinesisParameters</code> argument. To invoke a command on multiple EC2 instances with one rule, you can use the <code>RunCommandParameters</code> field.</p> <p>To be able to make API calls against the resources that you own, Amazon EventBridge needs the appropriate permissions. For Lambda and Amazon SNS resources, EventBridge relies on resource-based policies. For EC2 instances, Kinesis Data Streams, Step Functions state machines and API Gateway APIs, EventBridge relies on IAM roles that you specify in the <code>RoleARN</code> argument in <code>PutTargets</code>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-access-control-eventbridge.html">Authentication and Access Control</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>If another Amazon Web Services account is in the same region and has granted you permission (using <code>PutPermission</code>), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the <code>Arn</code> value when you run <code>PutTargets</code>. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see <a href="http://aws.amazon.com/eventbridge/pricing/">Amazon EventBridge Pricing</a>.</p> <note> <p> <code>Input</code>, <code>InputPath</code>, and <code>InputTransformer</code> are not available with <code>PutTarget</code> if the target is an event bus of a different Amazon Web Services account.</p> </note> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>For more information about enabling cross-account events, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html">PutPermission</a>.</p> <p> <b>Input</b>, <b>InputPath</b>, and <b>InputTransformer</b> are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:</p> <ul> <li> <p>If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).</p> </li> <li> <p>If <b>Input</b> is specified in the form of valid JSON, then the matched event is overridden with this constant.</p> </li> <li> <p>If <b>InputPath</b> is specified in the form of JSONPath (for example, <code>$.detail</code>), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).</p> </li> <li> <p>If <b>InputTransformer</b> is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.</p> </li> </ul> <p>When you specify <code>InputPath</code> or <code>InputTransformer</code>, you must use JSON dot notation, not bracket notation.</p> <p>When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
		 * Post #X-Amz-Target=AWSEvents.PutTargets
		 * @return {PutTargetsResponse} Success
		 */
		PutTargets(requestBody: PutTargetsRequest): Observable<PutTargetsResponse> {
			return this.http.post<PutTargetsResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.PutTargets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Revokes the permission of another Amazon Web Services account to be able to put events to the specified event bus. Specify the account to revoke by the <code>StatementId</code> value that you associated with the account when you granted it permission with <code>PutPermission</code>. You can find the <code>StatementId</code> by using <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventBus.html">DescribeEventBus</a>.
		 * Post #X-Amz-Target=AWSEvents.RemovePermission
		 * @return {void} Success
		 */
		RemovePermission(requestBody: RemovePermissionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSEvents.RemovePermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked.</p> <note> <p>A successful execution of <code>RemoveTargets</code> doesn't guarantee all targets are removed from the rule, it means that the target(s) listed in the request are removed.</p> </note> <p>When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
		 * Post #X-Amz-Target=AWSEvents.RemoveTargets
		 * @return {RemoveTargetsResponse} Success
		 */
		RemoveTargets(requestBody: RemoveTargetsRequest): Observable<RemoveTargetsResponse> {
			return this.http.post<RemoveTargetsResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.RemoveTargets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the specified replay. Events are not necessarily replayed in the exact same order that they were added to the archive. A replay processes events to replay based on the time in the event, and replays them using 1 minute intervals. If you specify an <code>EventStartTime</code> and an <code>EventEndTime</code> that covers a 20 minute time range, the events are replayed from the first minute of that 20 minute range first. Then the events from the second minute are replayed. You can use <code>DescribeReplay</code> to determine the progress of a replay. The value returned for <code>EventLastReplayedTime</code> indicates the time within the specified time range associated with the last event replayed.
		 * Post #X-Amz-Target=AWSEvents.StartReplay
		 * @return {StartReplayResponse} Success
		 */
		StartReplay(requestBody: StartReplayRequest): Observable<StartReplayResponse> {
			return this.http.post<StartReplayResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.StartReplay', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In EventBridge, rules and event buses can be tagged.</p> <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>
		 * Post #X-Amz-Target=AWSEvents.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Tests whether the specified event pattern matches the provided event.</p> <p>Most services in Amazon Web Services treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p>
		 * Post #X-Amz-Target=AWSEvents.TestEventPattern
		 * @return {TestEventPatternResponse} Success
		 */
		TestEventPattern(requestBody: TestEventPatternRequest): Observable<TestEventPatternResponse> {
			return this.http.post<TestEventPatternResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.TestEventPattern', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from the specified EventBridge resource. In Amazon EventBridge (CloudWatch Events), rules and event buses can be tagged.
		 * Post #X-Amz-Target=AWSEvents.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an API destination.
		 * Post #X-Amz-Target=AWSEvents.UpdateApiDestination
		 * @return {UpdateApiDestinationResponse} Success
		 */
		UpdateApiDestination(requestBody: UpdateApiDestinationRequest): Observable<UpdateApiDestinationResponse> {
			return this.http.post<UpdateApiDestinationResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.UpdateApiDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the specified archive.
		 * Post #X-Amz-Target=AWSEvents.UpdateArchive
		 * @return {UpdateArchiveResponse} Success
		 */
		UpdateArchive(requestBody: UpdateArchiveRequest): Observable<UpdateArchiveResponse> {
			return this.http.post<UpdateArchiveResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.UpdateArchive', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates settings for a connection.
		 * Post #X-Amz-Target=AWSEvents.UpdateConnection
		 * @return {UpdateConnectionResponse} Success
		 */
		UpdateConnection(requestBody: UpdateConnectionRequest): Observable<UpdateConnectionResponse> {
			return this.http.post<UpdateConnectionResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.UpdateConnection', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update an existing endpoint. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide..
		 * Post #X-Amz-Target=AWSEvents.UpdateEndpoint
		 * @return {UpdateEndpointResponse} Success
		 */
		UpdateEndpoint(requestBody: UpdateEndpointRequest): Observable<UpdateEndpointResponse> {
			return this.http.post<UpdateEndpointResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.UpdateEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum ActivateEventSourceX_Amz_Target { 'AWSEvents.ActivateEventSource' = 'AWSEvents.ActivateEventSource' }

	export enum CancelReplayX_Amz_Target { 'AWSEvents.CancelReplay' = 'AWSEvents.CancelReplay' }

	export enum CreateApiDestinationX_Amz_Target { 'AWSEvents.CreateApiDestination' = 'AWSEvents.CreateApiDestination' }

	export enum CreateArchiveX_Amz_Target { 'AWSEvents.CreateArchive' = 'AWSEvents.CreateArchive' }

	export enum CreateConnectionX_Amz_Target { 'AWSEvents.CreateConnection' = 'AWSEvents.CreateConnection' }

	export enum CreateEndpointX_Amz_Target { 'AWSEvents.CreateEndpoint' = 'AWSEvents.CreateEndpoint' }

	export enum CreateEventBusX_Amz_Target { 'AWSEvents.CreateEventBus' = 'AWSEvents.CreateEventBus' }

	export enum CreatePartnerEventSourceX_Amz_Target { 'AWSEvents.CreatePartnerEventSource' = 'AWSEvents.CreatePartnerEventSource' }

	export enum DeactivateEventSourceX_Amz_Target { 'AWSEvents.DeactivateEventSource' = 'AWSEvents.DeactivateEventSource' }

	export enum DeauthorizeConnectionX_Amz_Target { 'AWSEvents.DeauthorizeConnection' = 'AWSEvents.DeauthorizeConnection' }

	export enum DeleteApiDestinationX_Amz_Target { 'AWSEvents.DeleteApiDestination' = 'AWSEvents.DeleteApiDestination' }

	export enum DeleteArchiveX_Amz_Target { 'AWSEvents.DeleteArchive' = 'AWSEvents.DeleteArchive' }

	export enum DeleteConnectionX_Amz_Target { 'AWSEvents.DeleteConnection' = 'AWSEvents.DeleteConnection' }

	export enum DeleteEndpointX_Amz_Target { 'AWSEvents.DeleteEndpoint' = 'AWSEvents.DeleteEndpoint' }

	export enum DeleteEventBusX_Amz_Target { 'AWSEvents.DeleteEventBus' = 'AWSEvents.DeleteEventBus' }

	export enum DeletePartnerEventSourceX_Amz_Target { 'AWSEvents.DeletePartnerEventSource' = 'AWSEvents.DeletePartnerEventSource' }

	export enum DeleteRuleX_Amz_Target { 'AWSEvents.DeleteRule' = 'AWSEvents.DeleteRule' }

	export enum DescribeApiDestinationX_Amz_Target { 'AWSEvents.DescribeApiDestination' = 'AWSEvents.DescribeApiDestination' }

	export enum DescribeArchiveX_Amz_Target { 'AWSEvents.DescribeArchive' = 'AWSEvents.DescribeArchive' }

	export enum DescribeConnectionX_Amz_Target { 'AWSEvents.DescribeConnection' = 'AWSEvents.DescribeConnection' }

	export enum DescribeEndpointX_Amz_Target { 'AWSEvents.DescribeEndpoint' = 'AWSEvents.DescribeEndpoint' }

	export enum DescribeEventBusX_Amz_Target { 'AWSEvents.DescribeEventBus' = 'AWSEvents.DescribeEventBus' }

	export enum DescribeEventSourceX_Amz_Target { 'AWSEvents.DescribeEventSource' = 'AWSEvents.DescribeEventSource' }

	export enum DescribePartnerEventSourceX_Amz_Target { 'AWSEvents.DescribePartnerEventSource' = 'AWSEvents.DescribePartnerEventSource' }

	export enum DescribeReplayX_Amz_Target { 'AWSEvents.DescribeReplay' = 'AWSEvents.DescribeReplay' }

	export enum DescribeRuleX_Amz_Target { 'AWSEvents.DescribeRule' = 'AWSEvents.DescribeRule' }

	export enum DisableRuleX_Amz_Target { 'AWSEvents.DisableRule' = 'AWSEvents.DisableRule' }

	export enum EnableRuleX_Amz_Target { 'AWSEvents.EnableRule' = 'AWSEvents.EnableRule' }

	export enum ListApiDestinationsX_Amz_Target { 'AWSEvents.ListApiDestinations' = 'AWSEvents.ListApiDestinations' }

	export enum ListArchivesX_Amz_Target { 'AWSEvents.ListArchives' = 'AWSEvents.ListArchives' }

	export enum ListConnectionsX_Amz_Target { 'AWSEvents.ListConnections' = 'AWSEvents.ListConnections' }

	export enum ListEndpointsX_Amz_Target { 'AWSEvents.ListEndpoints' = 'AWSEvents.ListEndpoints' }

	export enum ListEventBusesX_Amz_Target { 'AWSEvents.ListEventBuses' = 'AWSEvents.ListEventBuses' }

	export enum ListEventSourcesX_Amz_Target { 'AWSEvents.ListEventSources' = 'AWSEvents.ListEventSources' }

	export enum ListPartnerEventSourceAccountsX_Amz_Target { 'AWSEvents.ListPartnerEventSourceAccounts' = 'AWSEvents.ListPartnerEventSourceAccounts' }

	export enum ListPartnerEventSourcesX_Amz_Target { 'AWSEvents.ListPartnerEventSources' = 'AWSEvents.ListPartnerEventSources' }

	export enum ListReplaysX_Amz_Target { 'AWSEvents.ListReplays' = 'AWSEvents.ListReplays' }

	export enum ListRuleNamesByTargetX_Amz_Target { 'AWSEvents.ListRuleNamesByTarget' = 'AWSEvents.ListRuleNamesByTarget' }

	export enum ListRulesX_Amz_Target { 'AWSEvents.ListRules' = 'AWSEvents.ListRules' }

	export enum ListTagsForResourceX_Amz_Target { 'AWSEvents.ListTagsForResource' = 'AWSEvents.ListTagsForResource' }

	export enum ListTargetsByRuleX_Amz_Target { 'AWSEvents.ListTargetsByRule' = 'AWSEvents.ListTargetsByRule' }

	export enum PutEventsX_Amz_Target { 'AWSEvents.PutEvents' = 'AWSEvents.PutEvents' }

	export enum PutPartnerEventsX_Amz_Target { 'AWSEvents.PutPartnerEvents' = 'AWSEvents.PutPartnerEvents' }

	export enum PutPermissionX_Amz_Target { 'AWSEvents.PutPermission' = 'AWSEvents.PutPermission' }

	export enum PutRuleX_Amz_Target { 'AWSEvents.PutRule' = 'AWSEvents.PutRule' }

	export enum PutTargetsX_Amz_Target { 'AWSEvents.PutTargets' = 'AWSEvents.PutTargets' }

	export enum RemovePermissionX_Amz_Target { 'AWSEvents.RemovePermission' = 'AWSEvents.RemovePermission' }

	export enum RemoveTargetsX_Amz_Target { 'AWSEvents.RemoveTargets' = 'AWSEvents.RemoveTargets' }

	export enum StartReplayX_Amz_Target { 'AWSEvents.StartReplay' = 'AWSEvents.StartReplay' }

	export enum TagResourceX_Amz_Target { 'AWSEvents.TagResource' = 'AWSEvents.TagResource' }

	export enum TestEventPatternX_Amz_Target { 'AWSEvents.TestEventPattern' = 'AWSEvents.TestEventPattern' }

	export enum UntagResourceX_Amz_Target { 'AWSEvents.UntagResource' = 'AWSEvents.UntagResource' }

	export enum UpdateApiDestinationX_Amz_Target { 'AWSEvents.UpdateApiDestination' = 'AWSEvents.UpdateApiDestination' }

	export enum UpdateArchiveX_Amz_Target { 'AWSEvents.UpdateArchive' = 'AWSEvents.UpdateArchive' }

	export enum UpdateConnectionX_Amz_Target { 'AWSEvents.UpdateConnection' = 'AWSEvents.UpdateConnection' }

	export enum UpdateEndpointX_Amz_Target { 'AWSEvents.UpdateEndpoint' = 'AWSEvents.UpdateEndpoint' }

}

