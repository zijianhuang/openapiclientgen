import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CloseTunnelResponse {
	}
	export interface CloseTunnelResponseFormProperties {
	}
	export function CreateCloseTunnelResponseFormGroup() {
		return new FormGroup<CloseTunnelResponseFormProperties>({
		});

	}

	export interface CloseTunnelRequest {

		/** Required */
		tunnelId: string;
		delete?: boolean | null;
	}
	export interface CloseTunnelRequestFormProperties {

		/** Required */
		tunnelId: FormControl<string | null | undefined>,
		delete: FormControl<boolean | null | undefined>,
	}
	export function CreateCloseTunnelRequestFormGroup() {
		return new FormGroup<CloseTunnelRequestFormProperties>({
			tunnelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			delete: new FormControl<boolean | null | undefined>(undefined),
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

	export interface DescribeTunnelResponse {
		tunnel?: Tunnel;
	}
	export interface DescribeTunnelResponseFormProperties {
	}
	export function CreateDescribeTunnelResponseFormGroup() {
		return new FormGroup<DescribeTunnelResponseFormProperties>({
		});

	}


	/** A connection between a source computer and a destination device. */
	export interface Tunnel {
		tunnelId?: string;
		tunnelArn?: string;
		status?: TunnelStatus;
		sourceConnectionState?: ConnectionState;
		destinationConnectionState?: ConnectionState;
		description?: string;
		destinationConfig?: DestinationConfig;
		timeoutConfig?: TimeoutConfig;
		tags?: Array<Tag>;
		createdAt?: Date;
		lastUpdatedAt?: Date;
	}

	/** A connection between a source computer and a destination device. */
	export interface TunnelFormProperties {
		tunnelId: FormControl<string | null | undefined>,
		tunnelArn: FormControl<string | null | undefined>,
		status: FormControl<TunnelStatus | null | undefined>,
		description: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateTunnelFormGroup() {
		return new FormGroup<TunnelFormProperties>({
			tunnelId: new FormControl<string | null | undefined>(undefined),
			tunnelArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TunnelStatus | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum TunnelStatus { OPEN = 'OPEN', CLOSED = 'CLOSED' }


	/** The state of a connection. */
	export interface ConnectionState {
		status?: ConnectionStatus;
		lastUpdatedAt?: Date;
	}

	/** The state of a connection. */
	export interface ConnectionStateFormProperties {
		status: FormControl<ConnectionStatus | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateConnectionStateFormGroup() {
		return new FormGroup<ConnectionStateFormProperties>({
			status: new FormControl<ConnectionStatus | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ConnectionStatus { CONNECTED = 'CONNECTED', DISCONNECTED = 'DISCONNECTED' }


	/** The destination configuration. */
	export interface DestinationConfig {
		thingName?: string;

		/** Required */
		services: Array<string>;
	}

	/** The destination configuration. */
	export interface DestinationConfigFormProperties {
		thingName: FormControl<string | null | undefined>,
	}
	export function CreateDestinationConfigFormGroup() {
		return new FormGroup<DestinationConfigFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Tunnel timeout configuration. */
	export interface TimeoutConfig {
		maxLifetimeTimeoutMinutes?: number | null;
	}

	/** Tunnel timeout configuration. */
	export interface TimeoutConfigFormProperties {
		maxLifetimeTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateTimeoutConfigFormGroup() {
		return new FormGroup<TimeoutConfigFormProperties>({
			maxLifetimeTimeoutMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An arbitary key/value pair used to add searchable metadata to secure tunnel resources. */
	export interface Tag {

		/** Required */
		key: string;

		/** Required */
		value: string;
	}

	/** An arbitary key/value pair used to add searchable metadata to secure tunnel resources. */
	export interface TagFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeTunnelRequest {

		/** Required */
		tunnelId: string;
	}
	export interface DescribeTunnelRequestFormProperties {

		/** Required */
		tunnelId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTunnelRequestFormGroup() {
		return new FormGroup<DescribeTunnelRequestFormProperties>({
			tunnelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		resourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTunnelsResponse {
		tunnelSummaries?: Array<TunnelSummary>;
		nextToken?: string;
	}
	export interface ListTunnelsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTunnelsResponseFormGroup() {
		return new FormGroup<ListTunnelsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the tunnel. */
	export interface TunnelSummary {
		tunnelId?: string;
		tunnelArn?: string;
		status?: TunnelStatus;
		description?: string;
		createdAt?: Date;
		lastUpdatedAt?: Date;
	}

	/** Information about the tunnel. */
	export interface TunnelSummaryFormProperties {
		tunnelId: FormControl<string | null | undefined>,
		tunnelArn: FormControl<string | null | undefined>,
		status: FormControl<TunnelStatus | null | undefined>,
		description: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateTunnelSummaryFormGroup() {
		return new FormGroup<TunnelSummaryFormProperties>({
			tunnelId: new FormControl<string | null | undefined>(undefined),
			tunnelArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TunnelStatus | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTunnelsRequest {
		thingName?: string;
		maxResults?: number | null;
		nextToken?: string;
	}
	export interface ListTunnelsRequestFormProperties {
		thingName: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTunnelsRequestFormGroup() {
		return new FormGroup<ListTunnelsRequestFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OpenTunnelResponse {
		tunnelId?: string;
		tunnelArn?: string;
		sourceAccessToken?: string;
		destinationAccessToken?: string;
	}
	export interface OpenTunnelResponseFormProperties {
		tunnelId: FormControl<string | null | undefined>,
		tunnelArn: FormControl<string | null | undefined>,
		sourceAccessToken: FormControl<string | null | undefined>,
		destinationAccessToken: FormControl<string | null | undefined>,
	}
	export function CreateOpenTunnelResponseFormGroup() {
		return new FormGroup<OpenTunnelResponseFormProperties>({
			tunnelId: new FormControl<string | null | undefined>(undefined),
			tunnelArn: new FormControl<string | null | undefined>(undefined),
			sourceAccessToken: new FormControl<string | null | undefined>(undefined),
			destinationAccessToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OpenTunnelRequest {
		description?: string;
		tags?: Array<Tag>;
		destinationConfig?: DestinationConfig;
		timeoutConfig?: TimeoutConfig;
	}
	export interface OpenTunnelRequestFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateOpenTunnelRequestFormGroup() {
		return new FormGroup<OpenTunnelRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
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

	export interface RotateTunnelAccessTokenResponse {
		tunnelArn?: string;
		sourceAccessToken?: string;
		destinationAccessToken?: string;
	}
	export interface RotateTunnelAccessTokenResponseFormProperties {
		tunnelArn: FormControl<string | null | undefined>,
		sourceAccessToken: FormControl<string | null | undefined>,
		destinationAccessToken: FormControl<string | null | undefined>,
	}
	export function CreateRotateTunnelAccessTokenResponseFormGroup() {
		return new FormGroup<RotateTunnelAccessTokenResponseFormProperties>({
			tunnelArn: new FormControl<string | null | undefined>(undefined),
			sourceAccessToken: new FormControl<string | null | undefined>(undefined),
			destinationAccessToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RotateTunnelAccessTokenRequest {

		/** Required */
		tunnelId: string;

		/** Required */
		clientMode: ClientMode;

		/** The destination configuration. */
		destinationConfig?: DestinationConfig;
	}
	export interface RotateTunnelAccessTokenRequestFormProperties {

		/** Required */
		tunnelId: FormControl<string | null | undefined>,

		/** Required */
		clientMode: FormControl<ClientMode | null | undefined>,
	}
	export function CreateRotateTunnelAccessTokenRequestFormGroup() {
		return new FormGroup<RotateTunnelAccessTokenRequestFormProperties>({
			tunnelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientMode: new FormControl<ClientMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ClientMode { SOURCE = 'SOURCE', DESTINATION = 'DESTINATION', ALL = 'ALL' }

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
		resourceArn: string;

		/** Required */
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
		resourceArn: string;

		/** Required */
		tagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Closes a tunnel identified by the unique tunnel id. When a <code>CloseTunnel</code> request is received, we close the WebSocket connections between the client and proxy server so no data can be transmitted.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CloseTunnel</a> action.</p>
		 * Post #X-Amz-Target=IoTSecuredTunneling.CloseTunnel
		 * @return {CloseTunnelResponse} Success
		 */
		CloseTunnel(requestBody: CloseTunnelRequest): Observable<CloseTunnelResponse> {
			return this.http.post<CloseTunnelResponse>(this.baseUri + '#X-Amz-Target=IoTSecuredTunneling.CloseTunnel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets information about a tunnel identified by the unique tunnel id.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeTunnel</a> action.</p>
		 * Post #X-Amz-Target=IoTSecuredTunneling.DescribeTunnel
		 * @return {DescribeTunnelResponse} Success
		 */
		DescribeTunnel(requestBody: DescribeTunnelRequest): Observable<DescribeTunnelResponse> {
			return this.http.post<DescribeTunnelResponse>(this.baseUri + '#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags for the specified resource.
		 * Post #X-Amz-Target=IoTSecuredTunneling.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>List all tunnels for an Amazon Web Services account. Tunnels are listed by creation time in descending order, newer tunnels will be listed before older tunnels.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTunnels</a> action.</p>
		 * Post #X-Amz-Target=IoTSecuredTunneling.ListTunnels
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTunnelsResponse} Success
		 */
		ListTunnels(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTunnelsRequest): Observable<ListTunnelsResponse> {
			return this.http.post<ListTunnelsResponse>(this.baseUri + '#X-Amz-Target=IoTSecuredTunneling.ListTunnels?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new tunnel, and returns two client access tokens for clients to use to connect to the IoT Secure Tunneling proxy server.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">OpenTunnel</a> action.</p>
		 * Post #X-Amz-Target=IoTSecuredTunneling.OpenTunnel
		 * @return {OpenTunnelResponse} Success
		 */
		OpenTunnel(requestBody: OpenTunnelRequest): Observable<OpenTunnelResponse> {
			return this.http.post<OpenTunnelResponse>(this.baseUri + '#X-Amz-Target=IoTSecuredTunneling.OpenTunnel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Revokes the current client access token (CAT) and returns new CAT for clients to use when reconnecting to secure tunneling to access the same tunnel.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RotateTunnelAccessToken</a> action.</p> <note> <p>Rotating the CAT doesn't extend the tunnel duration. For example, say the tunnel duration is 12 hours and the tunnel has already been open for 4 hours. When you rotate the access tokens, the new tokens that are generated can only be used for the remaining 8 hours.</p> </note>
		 * Post #X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken
		 * @return {RotateTunnelAccessTokenResponse} Success
		 */
		RotateTunnelAccessToken(requestBody: RotateTunnelAccessTokenRequest): Observable<RotateTunnelAccessTokenResponse> {
			return this.http.post<RotateTunnelAccessTokenResponse>(this.baseUri + '#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A resource tag.
		 * Post #X-Amz-Target=IoTSecuredTunneling.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=IoTSecuredTunneling.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag from a resource.
		 * Post #X-Amz-Target=IoTSecuredTunneling.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=IoTSecuredTunneling.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CloseTunnelX_Amz_Target { 'IoTSecuredTunneling.CloseTunnel' = 'IoTSecuredTunneling.CloseTunnel' }

	export enum DescribeTunnelX_Amz_Target { 'IoTSecuredTunneling.DescribeTunnel' = 'IoTSecuredTunneling.DescribeTunnel' }

	export enum ListTagsForResourceX_Amz_Target { 'IoTSecuredTunneling.ListTagsForResource' = 'IoTSecuredTunneling.ListTagsForResource' }

	export enum ListTunnelsX_Amz_Target { 'IoTSecuredTunneling.ListTunnels' = 'IoTSecuredTunneling.ListTunnels' }

	export enum OpenTunnelX_Amz_Target { 'IoTSecuredTunneling.OpenTunnel' = 'IoTSecuredTunneling.OpenTunnel' }

	export enum RotateTunnelAccessTokenX_Amz_Target { 'IoTSecuredTunneling.RotateTunnelAccessToken' = 'IoTSecuredTunneling.RotateTunnelAccessToken' }

	export enum TagResourceX_Amz_Target { 'IoTSecuredTunneling.TagResource' = 'IoTSecuredTunneling.TagResource' }

	export enum UntagResourceX_Amz_Target { 'IoTSecuredTunneling.UntagResource' = 'IoTSecuredTunneling.UntagResource' }

}

