import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface GetIceServerConfigResponse {
		IceServerList?: Array<IceServer>;
	}


	/** A structure for the ICE server connection data. */
	export interface IceServer {
		Uris?: Array<string>;
		Username?: string;
		Password?: string;
		Ttl?: number;
	}

	export interface InvalidClientException {
	}

	export interface SessionExpiredException {
	}

	export interface ClientLimitExceededException {
	}

	export interface ResourceNotFoundException {
	}

	export interface InvalidArgumentException {
	}

	export interface NotAuthorizedException {
	}

	export interface SendAlexaOfferToMasterResponse {
		Answer?: string;
	}

	export enum Service { TURN = 0 }

	export interface GetIceServerConfigRequest {
		ChannelARN: string;
		ClientId?: string;
		Service?: Service;
		Username?: string;
	}

	export interface SendAlexaOfferToMasterRequest {
		ChannelARN: string;
		SenderClientId: string;
		MessagePayload: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Gets the Interactive Connectivity Establishment (ICE) server configuration information, including URIs, username, and password which can be used to configure the WebRTC connection. The ICE component uses this configuration information to setup the WebRTC connection, including authenticating with the Traversal Using Relays around NAT (TURN) relay server. </p> <p>TURN is a protocol that is used to improve the connectivity of peer-to-peer applications. By providing a cloud-based relay service, TURN ensures that a connection can be established even when one or more peers are incapable of a direct peer-to-peer connection. For more information, see <a href="https://tools.ietf.org/html/draft-uberti-rtcweb-turn-rest-00">A REST API For Access To TURN Services</a>.</p> <p> You can invoke this API to establish a fallback mechanism in case either of the peers is unable to establish a direct peer-to-peer connection over a signaling channel. You must specify either a signaling channel ARN or the client ID in order to invoke this API.</p>
		 * Post v1/get-ice-server-config
		 * @return {GetIceServerConfigResponse} Success
		 */
		GetIceServerConfig(requestBody: GetIceServerConfigPostBody): Observable<GetIceServerConfigResponse> {
			return this.http.post<GetIceServerConfigResponse>(this.baseUri + 'v1/get-ice-server-config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This API allows you to connect WebRTC-enabled devices with Alexa display devices. When invoked, it sends the Alexa Session Description Protocol (SDP) offer to the master peer. The offer is delivered as soon as the master is connected to the specified signaling channel. This API returns the SDP answer from the connected master. If the master is not connected to the signaling channel, redelivery requests are made until the message expires.
		 * Post v1/send-alexa-offer-to-master
		 * @return {SendAlexaOfferToMasterResponse} Success
		 */
		SendAlexaOfferToMaster(requestBody: SendAlexaOfferToMasterPostBody): Observable<SendAlexaOfferToMasterResponse> {
			return this.http.post<SendAlexaOfferToMasterResponse>(this.baseUri + 'v1/send-alexa-offer-to-master', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface GetIceServerConfigPostBody {

		/**
		 * The ARN of the signaling channel to be used for the peer-to-peer connection between configured peers.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		ChannelARN: string;

		/**
		 * Unique identifier for the viewer. Must be unique within the signaling channel.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		ClientId?: string;

		/** Specifies the desired service. Currently, <code>TURN</code> is the only valid value. */
		Service?: Service;

		/**
		 * An optional user ID to be associated with the credentials.
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		Username?: string;
	}

	export interface SendAlexaOfferToMasterPostBody {

		/**
		 * The ARN of the signaling channel by which Alexa and the master peer communicate.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 * Pattern: arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+
		 */
		ChannelARN: string;

		/**
		 * The unique identifier for the sender client.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_.-]+
		 */
		SenderClientId: string;

		/**
		 * The base64-encoded SDP offer content.
		 * Required
		 * Max length: 10000
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9+/=]+
		 */
		MessagePayload: string;
	}

}

