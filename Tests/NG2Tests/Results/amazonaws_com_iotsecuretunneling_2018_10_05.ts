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
			tunnelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-zA-Z0-9_\-+=:]{1,128}')]),
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

		/** A connection between a source computer and a destination device. */
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
		tunnelId?: string | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		tunnelArn?: string | null;
		status?: TunnelStatus | null;

		/** The state of a connection. */
		sourceConnectionState?: ConnectionState;

		/** The state of a connection. */
		destinationConnectionState?: ConnectionState;
		description?: string | null;

		/** The destination configuration. */
		destinationConfig?: DestinationConfig;

		/** Tunnel timeout configuration. */
		timeoutConfig?: TimeoutConfig;

		/**
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
		createdAt?: Date | null;
		lastUpdatedAt?: Date | null;
	}

	/** A connection between a source computer and a destination device. */
	export interface TunnelFormProperties {
		tunnelId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		tunnelArn: FormControl<string | null | undefined>,
		status: FormControl<TunnelStatus | null | undefined>,
		description: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateTunnelFormGroup() {
		return new FormGroup<TunnelFormProperties>({
			tunnelId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[a-zA-Z0-9_\-+=:]{1,128}')]),
			tunnelArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600)]),
			status: new FormControl<TunnelStatus | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[^\p{C}]{1,2048}')]),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum TunnelStatus { OPEN = 0, CLOSED = 1 }


	/** The state of a connection. */
	export interface ConnectionState {
		status?: ConnectionStateStatus | null;
		lastUpdatedAt?: Date | null;
	}

	/** The state of a connection. */
	export interface ConnectionStateFormProperties {
		status: FormControl<ConnectionStateStatus | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateConnectionStateFormGroup() {
		return new FormGroup<ConnectionStateFormProperties>({
			status: new FormControl<ConnectionStateStatus | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ConnectionStateStatus { CONNECTED = 0, DISCONNECTED = 1 }


	/** The destination configuration. */
	export interface DestinationConfig {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		thingName: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		services: Array<string>;
	}

	/** The destination configuration. */
	export interface DestinationConfigFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		thingName: FormControl<string | null | undefined>,
	}
	export function CreateDestinationConfigFormGroup() {
		return new FormGroup<DestinationConfigFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
		});

	}


	/** Tunnel timeout configuration. */
	export interface TimeoutConfig {

		/**
		 * Minimum: 1
		 * Maximum: 720
		 */
		maxLifetimeTimeoutMinutes?: number | null;
	}

	/** Tunnel timeout configuration. */
	export interface TimeoutConfigFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 720
		 */
		maxLifetimeTimeoutMinutes: FormControl<number | null | undefined>,
	}
	export function CreateTimeoutConfigFormGroup() {
		return new FormGroup<TimeoutConfigFormProperties>({
			maxLifetimeTimeoutMinutes: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(720)]),
		});

	}


	/** An arbitary key/value pair used to add searchable metadata to secure tunnel resources. */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		key: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		value: string;
	}

	/** An arbitary key/value pair used to add searchable metadata to secure tunnel resources. */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 0
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(256), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$')]),
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
			tunnelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[a-zA-Z0-9_\-+=:]{1,128}')]),
		});

	}

	export interface ListTagsForResourceResponse {

		/**
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {

		/**
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		resourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011)]),
		});

	}

	export interface ListTunnelsResponse {
		tunnelSummaries?: Array<TunnelSummary>;
		nextToken?: string | null;
	}
	export interface ListTunnelsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTunnelsResponseFormGroup() {
		return new FormGroup<ListTunnelsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[a-zA-Z0-9_=-]{1,4096}')]),
		});

	}


	/** Information about the tunnel. */
	export interface TunnelSummary {
		tunnelId?: string | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		tunnelArn?: string | null;
		status?: TunnelStatus | null;
		description?: string | null;
		createdAt?: Date | null;
		lastUpdatedAt?: Date | null;
	}

	/** Information about the tunnel. */
	export interface TunnelSummaryFormProperties {
		tunnelId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		tunnelArn: FormControl<string | null | undefined>,
		status: FormControl<TunnelStatus | null | undefined>,
		description: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateTunnelSummaryFormGroup() {
		return new FormGroup<TunnelSummaryFormProperties>({
			tunnelId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[a-zA-Z0-9_\-+=:]{1,128}')]),
			tunnelArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600)]),
			status: new FormControl<TunnelStatus | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[^\p{C}]{1,2048}')]),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTunnelsRequest {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults?: number | null;
		nextToken?: string | null;
	}
	export interface ListTunnelsRequestFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		thingName: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTunnelsRequestFormGroup() {
		return new FormGroup<ListTunnelsRequestFormProperties>({
			thingName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[a-zA-Z0-9:_-]+')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[a-zA-Z0-9_=-]{1,4096}')]),
		});

	}

	export interface OpenTunnelResponse {
		tunnelId?: string | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		tunnelArn?: string | null;
		sourceAccessToken?: string | null;
		destinationAccessToken?: string | null;
	}
	export interface OpenTunnelResponseFormProperties {
		tunnelId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		tunnelArn: FormControl<string | null | undefined>,
		sourceAccessToken: FormControl<string | null | undefined>,
		destinationAccessToken: FormControl<string | null | undefined>,
	}
	export function CreateOpenTunnelResponseFormGroup() {
		return new FormGroup<OpenTunnelResponseFormProperties>({
			tunnelId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[a-zA-Z0-9_\-+=:]{1,128}')]),
			tunnelArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600)]),
			sourceAccessToken: new FormControl<string | null | undefined>(undefined),
			destinationAccessToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OpenTunnelRequest {
		description?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;

		/** The destination configuration. */
		destinationConfig?: DestinationConfig;

		/** Tunnel timeout configuration. */
		timeoutConfig?: TimeoutConfig;
	}
	export interface OpenTunnelRequestFormProperties {
		description: FormControl<string | null | undefined>,
	}
	export function CreateOpenTunnelRequestFormGroup() {
		return new FormGroup<OpenTunnelRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[^\p{C}]{1,2048}')]),
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

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/**
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		resourceArn: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011)]),
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

		/**
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		resourceArn: string;

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011)]),
		});

	}

	export enum ConnectionStatus { CONNECTED = 0, DISCONNECTED = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Closes a tunnel identified by the unique tunnel id. When a <code>CloseTunnel</code> request is received, we close the WebSocket connections between the client and proxy server so no data can be transmitted.
		 * Post #X-Amz-Target=IoTSecuredTunneling.CloseTunnel
		 * @return {CloseTunnelResponse} Success
		 */
		CloseTunnel(requestBody: CloseTunnelRequest): Observable<CloseTunnelResponse> {
			return this.http.post<CloseTunnelResponse>(this.baseUri + '#X-Amz-Target=IoTSecuredTunneling.CloseTunnel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a tunnel identified by the unique tunnel id.
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
		 * List all tunnels for an AWS account. Tunnels are listed by creation time in descending order, newer tunnels will be listed before older tunnels.
		 * Post #X-Amz-Target=IoTSecuredTunneling.ListTunnels
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListTunnelsResponse} Success
		 */
		ListTunnels(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListTunnelsRequest): Observable<ListTunnelsResponse> {
			return this.http.post<ListTunnelsResponse>(this.baseUri + '#X-Amz-Target=IoTSecuredTunneling.ListTunnels?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new tunnel, and returns two client access tokens for clients to use to connect to the AWS IoT Secure Tunneling proxy server. .
		 * Post #X-Amz-Target=IoTSecuredTunneling.OpenTunnel
		 * @return {OpenTunnelResponse} Success
		 */
		OpenTunnel(requestBody: OpenTunnelRequest): Observable<OpenTunnelResponse> {
			return this.http.post<OpenTunnelResponse>(this.baseUri + '#X-Amz-Target=IoTSecuredTunneling.OpenTunnel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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

	export enum CloseTunnelX_Amz_Target { 'IoTSecuredTunneling.CloseTunnel' = 0 }

	export enum DescribeTunnelX_Amz_Target { 'IoTSecuredTunneling.DescribeTunnel' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'IoTSecuredTunneling.ListTagsForResource' = 0 }

	export enum ListTunnelsX_Amz_Target { 'IoTSecuredTunneling.ListTunnels' = 0 }

	export enum OpenTunnelX_Amz_Target { 'IoTSecuredTunneling.OpenTunnel' = 0 }

	export enum TagResourceX_Amz_Target { 'IoTSecuredTunneling.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'IoTSecuredTunneling.UntagResource' = 0 }

}

