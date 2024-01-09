import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GetIceServerConfigResponse {
		IceServerList?: Array<IceServer>;
	}
	export interface GetIceServerConfigResponseFormProperties {
	}
	export function CreateGetIceServerConfigResponseFormGroup() {
		return new FormGroup<GetIceServerConfigResponseFormProperties>({
		});

	}


	/** A structure for the ICE server connection data. */
	export interface IceServer {
		Uris?: Array<string>;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Username?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Password?: string | null;

		/**
		 * Minimum: 30
		 * Maximum: 86400
		 */
		Ttl?: number | null;
	}

	/** A structure for the ICE server connection data. */
	export interface IceServerFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Password: FormControl<string | null | undefined>,

		/**
		 * Minimum: 30
		 * Maximum: 86400
		 */
		Ttl: FormControl<number | null | undefined>,
	}
	export function CreateIceServerFormGroup() {
		return new FormGroup<IceServerFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			Ttl: new FormControl<number | null | undefined>(undefined, [Validators.min(30), Validators.max(86400)]),
		});

	}

	export interface InvalidClientException {
	}
	export interface InvalidClientExceptionFormProperties {
	}
	export function CreateInvalidClientExceptionFormGroup() {
		return new FormGroup<InvalidClientExceptionFormProperties>({
		});

	}

	export interface SessionExpiredException {
	}
	export interface SessionExpiredExceptionFormProperties {
	}
	export function CreateSessionExpiredExceptionFormGroup() {
		return new FormGroup<SessionExpiredExceptionFormProperties>({
		});

	}

	export interface ClientLimitExceededException {
	}
	export interface ClientLimitExceededExceptionFormProperties {
	}
	export function CreateClientLimitExceededExceptionFormGroup() {
		return new FormGroup<ClientLimitExceededExceptionFormProperties>({
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

	export interface InvalidArgumentException {
	}
	export interface InvalidArgumentExceptionFormProperties {
	}
	export function CreateInvalidArgumentExceptionFormGroup() {
		return new FormGroup<InvalidArgumentExceptionFormProperties>({
		});

	}

	export interface NotAuthorizedException {
	}
	export interface NotAuthorizedExceptionFormProperties {
	}
	export function CreateNotAuthorizedExceptionFormGroup() {
		return new FormGroup<NotAuthorizedExceptionFormProperties>({
		});

	}

	export interface SendAlexaOfferToMasterResponse {

		/**
		 * Max length: 10000
		 * Min length: 1
		 */
		Answer?: string | null;
	}
	export interface SendAlexaOfferToMasterResponseFormProperties {

		/**
		 * Max length: 10000
		 * Min length: 1
		 */
		Answer: FormControl<string | null | undefined>,
	}
	export function CreateSendAlexaOfferToMasterResponseFormGroup() {
		return new FormGroup<SendAlexaOfferToMasterResponseFormProperties>({
			Answer: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10000), Validators.minLength(1)]),
		});

	}

	export enum Service { TURN = 0 }

	export interface GetIceServerConfigRequest {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ClientId?: string | null;
		Service?: Service | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Username?: string | null;
	}
	export interface GetIceServerConfigRequestFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,
		Service: FormControl<Service | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateGetIceServerConfigRequestFormGroup() {
		return new FormGroup<GetIceServerConfigRequestFormProperties>({
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			Service: new FormControl<Service | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface SendAlexaOfferToMasterRequest {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		SenderClientId: string;

		/**
		 * Required
		 * Max length: 10000
		 * Min length: 1
		 */
		MessagePayload: string;
	}
	export interface SendAlexaOfferToMasterRequestFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		SenderClientId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 10000
		 * Min length: 1
		 */
		MessagePayload: FormControl<string | null | undefined>,
	}
	export function CreateSendAlexaOfferToMasterRequestFormGroup() {
		return new FormGroup<SendAlexaOfferToMasterRequestFormProperties>({
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			SenderClientId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			MessagePayload: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(10000), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9+/=]+')]),
		});

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
		 */
		ChannelARN: string;

		/**
		 * Unique identifier for the viewer. Must be unique within the signaling channel.
		 * Max length: 256
		 * Min length: 1
		 */
		ClientId?: string | null;

		/** Specifies the desired service. Currently, <code>TURN</code> is the only valid value. */
		Service?: Service | null;

		/**
		 * An optional user ID to be associated with the credentials.
		 * Max length: 256
		 * Min length: 1
		 */
		Username?: string | null;
	}
	export interface GetIceServerConfigPostBodyFormProperties {

		/**
		 * The ARN of the signaling channel to be used for the peer-to-peer connection between configured peers.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for the viewer. Must be unique within the signaling channel.
		 * Max length: 256
		 * Min length: 1
		 */
		ClientId: FormControl<string | null | undefined>,

		/** Specifies the desired service. Currently, <code>TURN</code> is the only valid value. */
		Service: FormControl<Service | null | undefined>,

		/**
		 * An optional user ID to be associated with the credentials.
		 * Max length: 256
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,
	}
	export function CreateGetIceServerConfigPostBodyFormGroup() {
		return new FormGroup<GetIceServerConfigPostBodyFormProperties>({
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			Service: new FormControl<Service | null | undefined>(undefined),
			Username: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
		});

	}

	export interface SendAlexaOfferToMasterPostBody {

		/**
		 * The ARN of the signaling channel by which Alexa and the master peer communicate.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: string;

		/**
		 * The unique identifier for the sender client.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		SenderClientId: string;

		/**
		 * The base64-encoded SDP offer content.
		 * Required
		 * Max length: 10000
		 * Min length: 1
		 */
		MessagePayload: string;
	}
	export interface SendAlexaOfferToMasterPostBodyFormProperties {

		/**
		 * The ARN of the signaling channel by which Alexa and the master peer communicate.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		ChannelARN: FormControl<string | null | undefined>,

		/**
		 * The unique identifier for the sender client.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		SenderClientId: FormControl<string | null | undefined>,

		/**
		 * The base64-encoded SDP offer content.
		 * Required
		 * Max length: 10000
		 * Min length: 1
		 */
		MessagePayload: FormControl<string | null | undefined>,
	}
	export function CreateSendAlexaOfferToMasterPostBodyFormGroup() {
		return new FormGroup<SendAlexaOfferToMasterPostBodyFormProperties>({
			ChannelARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1), Validators.pattern('arn:aws:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+/[a-zA-Z0-9_.-]+/[0-9]+')]),
			SenderClientId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9_.-]+')]),
			MessagePayload: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(10000), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9+/=]+')]),
		});

	}

}

