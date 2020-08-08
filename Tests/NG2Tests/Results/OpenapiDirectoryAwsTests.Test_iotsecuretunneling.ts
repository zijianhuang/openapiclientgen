import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CloseTunnelResponse {
	}

	export interface CloseTunnelRequest {
		tunnelId: string;
		delete?: boolean;
	}

	export interface ResourceNotFoundException {
	}

	export interface DescribeTunnelResponse {

		/** A connection between a source computer and a destination device. */
		tunnel?: Tunnel;
	}


	/** A connection between a source computer and a destination device. */
	export interface Tunnel {
		tunnelId?: string;
		tunnelArn?: string;
		status?: TunnelStatus;

		/** The state of a connection. */
		sourceConnectionState?: ConnectionState;

		/** The state of a connection. */
		destinationConnectionState?: ConnectionState;
		description?: string;

		/** The destination configuration. */
		destinationConfig?: DestinationConfig;

		/** Tunnel timeout configuration. */
		timeoutConfig?: TimeoutConfig;
		tags?: Array<Tag>;
		createdAt?: Date;
		lastUpdatedAt?: Date;
	}

	export enum TunnelStatus { OPEN = 0, CLOSED = 1 }


	/** The state of a connection. */
	export interface ConnectionState {
		status?: ConnectionStateStatus;
		lastUpdatedAt?: Date;
	}

	export enum ConnectionStateStatus { CONNECTED = 0, DISCONNECTED = 1 }


	/** The destination configuration. */
	export interface DestinationConfig {
		thingName: string;
		services: Array<string>;
	}


	/** Tunnel timeout configuration. */
	export interface TimeoutConfig {
		maxLifetimeTimeoutMinutes?: number;
	}


	/** An arbitary key/value pair used to add searchable metadata to secure tunnel resources. */
	export interface Tag {
		key: string;
		value: string;
	}

	export interface DescribeTunnelRequest {
		tunnelId: string;
	}

	export interface ListTagsForResourceResponse {
		tags?: Array<Tag>;
	}

	export interface ListTagsForResourceRequest {
		resourceArn: string;
	}

	export interface ListTunnelsResponse {
		tunnelSummaries?: Array<TunnelSummary>;
		nextToken?: string;
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

	export interface ListTunnelsRequest {
		thingName?: string;
		maxResults?: number;
		nextToken?: string;
	}

	export interface OpenTunnelResponse {
		tunnelId?: string;
		tunnelArn?: string;
		sourceAccessToken?: string;
		destinationAccessToken?: string;
	}

	export interface OpenTunnelRequest {
		description?: string;
		tags?: Array<Tag>;

		/** The destination configuration. */
		destinationConfig?: DestinationConfig;

		/** Tunnel timeout configuration. */
		timeoutConfig?: TimeoutConfig;
	}

	export interface LimitExceededException {
	}

	export interface TagResourceResponse {
	}

	export interface TagResourceRequest {
		resourceArn: string;
		tags: Array<Tag>;
	}

	export interface UntagResourceResponse {
	}

	export interface UntagResourceRequest {
		resourceArn: string;
		tagKeys: Array<string>;
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
		ListTunnels(maxResults: string, nextToken: string, requestBody: ListTunnelsRequest): Observable<ListTunnelsResponse> {
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

	export enum CloseTunnelX_Amz_Target { IoTSecuredTunneling_CloseTunnel = 0 }

	export enum DescribeTunnelX_Amz_Target { IoTSecuredTunneling_DescribeTunnel = 0 }

	export enum ListTagsForResourceX_Amz_Target { IoTSecuredTunneling_ListTagsForResource = 0 }

	export enum ListTunnelsX_Amz_Target { IoTSecuredTunneling_ListTunnels = 0 }

	export enum OpenTunnelX_Amz_Target { IoTSecuredTunneling_OpenTunnel = 0 }

	export enum TagResourceX_Amz_Target { IoTSecuredTunneling_TagResource = 0 }

	export enum UntagResourceX_Amz_Target { IoTSecuredTunneling_UntagResource = 0 }

}

