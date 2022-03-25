import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateParticipantConnectionResponse {

		/** The websocket for the participant's connection. */
		Websocket?: Websocket;

		/** Connection credentials. */
		ConnectionCredentials?: ConnectionCredentials;
	}


	/** The websocket for the participant's connection. */
	export interface Websocket {
		Url?: string;
		ConnectionExpiry?: string;
	}


	/** Connection credentials.  */
	export interface ConnectionCredentials {
		ConnectionToken?: string;
		Expiry?: string;
	}

	export enum ConnectionType { WEBSOCKET = 0, CONNECTION_CREDENTIALS = 1 }

	export interface AccessDeniedException {
	}

	export interface InternalServerException {
	}

	export interface ThrottlingException {
	}

	export interface ValidationException {
	}

	export interface DisconnectParticipantResponse {
	}

	export interface GetTranscriptResponse {
		InitialContactId?: string;
		Transcript?: Array<Item>;
		NextToken?: string;
	}


	/** An item - message or event - that has been sent.  */
	export interface Item {
		AbsoluteTime?: string;
		Content?: string;
		ContentType?: string;
		Id?: string;
		Type?: ItemType;
		ParticipantId?: string;
		DisplayName?: string;
		ParticipantRole?: ItemParticipantRole;
	}

	export enum ItemType { MESSAGE = 0, EVENT = 1, CONNECTION_ACK = 2 }

	export enum ItemParticipantRole { AGENT = 0, CUSTOMER = 1, SYSTEM = 2 }

	export interface SendEventResponse {
		Id?: string;
		AbsoluteTime?: string;
	}

	export interface SendMessageResponse {
		Id?: string;
		AbsoluteTime?: string;
	}

	export enum ChatItemType { MESSAGE = 0, EVENT = 1, CONNECTION_ACK = 2 }

	export interface CreateParticipantConnectionRequest {
		Type: Array<ConnectionType>;
	}

	export interface DisconnectParticipantRequest {
		ClientToken?: string;
	}

	export enum ScanDirection { FORWARD = 0, BACKWARD = 1 }

	export enum SortKey { DESCENDING = 0, ASCENDING = 1 }


	/** A filtering option for where to start. For example, if you sent 100 messages, start with message 50.  */
	export interface StartPosition {
		Id?: string;
		AbsoluteTime?: string;
		MostRecent?: number;
	}

	export interface GetTranscriptRequest {
		ContactId?: string;
		MaxResults?: number;
		NextToken?: string;
		ScanDirection?: ScanDirection;
		SortOrder?: SortKey;

		/** A filtering option for where to start. For example, if you sent 100 messages, start with message 50. */
		StartPosition?: StartPosition;
	}

	export enum ParticipantRole { AGENT = 0, CUSTOMER = 1, SYSTEM = 2 }

	export interface SendEventRequest {
		ContentType: string;
		Content?: string;
		ClientToken?: string;
	}

	export interface SendMessageRequest {
		ContentType: string;
		Content: string;
		ClientToken?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates the participant's connection. Note that ParticipantToken is used for invoking this API instead of ConnectionToken.</p> <p>The participant token is valid for the lifetime of the participant – until the they are part of a contact.</p> <p>The response URL for <code>WEBSOCKET</code> Type has a connect expiry timeout of 100s. Clients must manually connect to the returned websocket URL and subscribe to the desired topic. </p> <p>For chat, you need to publish the following on the established websocket connection:</p> <p> <code>{"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}</code> </p> <p>Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter, clients need to call this API again to obtain a new websocket URL and perform the same steps as before.</p>
		 * Post participant/connection#X-Amz-Bearer
		 * @return {CreateParticipantConnectionResponse} Success
		 */
		CreateParticipantConnection(requestBody: CreateParticipantConnectionPostBody): Observable<CreateParticipantConnectionResponse> {
			return this.http.post<CreateParticipantConnectionResponse>(this.baseUri + 'participant/connection#X-Amz-Bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disconnects a participant. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.
		 * Post participant/disconnect#X-Amz-Bearer
		 * @return {DisconnectParticipantResponse} Success
		 */
		DisconnectParticipant(requestBody: DisconnectParticipantPostBody): Observable<DisconnectParticipantResponse> {
			return this.http.post<DisconnectParticipantResponse>(this.baseUri + 'participant/disconnect#X-Amz-Bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a transcript of the session. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.
		 * Post participant/transcript#X-Amz-Bearer
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetTranscriptResponse} Success
		 */
		GetTranscript(MaxResults: string, NextToken: string, requestBody: GetTranscriptPostBody): Observable<GetTranscriptResponse> {
			return this.http.post<GetTranscriptResponse>(this.baseUri + 'participant/transcript#X-Amz-Bearer?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sends an event. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.
		 * Post participant/event#X-Amz-Bearer
		 * @return {SendEventResponse} Success
		 */
		SendEvent(requestBody: SendEventPostBody): Observable<SendEventResponse> {
			return this.http.post<SendEventResponse>(this.baseUri + 'participant/event#X-Amz-Bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sends a message. Note that ConnectionToken is used for invoking this API instead of ParticipantToken.
		 * Post participant/message#X-Amz-Bearer
		 * @return {SendMessageResponse} Success
		 */
		SendMessage(requestBody: SendMessagePostBody): Observable<SendMessageResponse> {
			return this.http.post<SendMessageResponse>(this.baseUri + 'participant/message#X-Amz-Bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateParticipantConnectionPostBody {

		/**
		 * Type of connection information required.
		 * Required
		 * Minimum items: 1
		 */
		Type: Array<ConnectionType>;
	}

	export interface DisconnectParticipantPostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 500
		 */
		ClientToken?: string;
	}

	export interface GetTranscriptPostBody {

		/**
		 * The contactId from the current contact chain for which transcript is needed.
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId?: string;

		/**
		 * The maximum number of results to return in the page. Default: 10.
		 * Minimum: 0
		 * Maximum: 100
		 */
		MaxResults?: number;

		/**
		 * The pagination token. Use the value returned previously in the next subsequent request to retrieve the next set of results.
		 * Max length: 1000
		 * Min length: 1
		 */
		NextToken?: string;

		/** The direction from StartPosition from which to retrieve message. Default: BACKWARD when no StartPosition is provided, FORWARD with StartPosition. */
		ScanDirection?: ScanDirection;

		/** The sort order for the records. Default: DESCENDING. */
		SortOrder?: SortKey;

		/** A filtering option for where to start. For example, if you sent 100 messages, start with message 50. */
		StartPosition?: GetTranscriptPostBodyStartPosition;
	}

	export interface GetTranscriptPostBodyStartPosition {
		Id?: string;
		AbsoluteTime?: string;
		MostRecent?: number;
	}

	export interface SendEventPostBody {

		/**
		 * <p>The content type of the request. Supported types are:</p> <ul> <li> <p>application/vnd.amazonaws.connect.event.typing</p> </li> <li> <p>application/vnd.amazonaws.connect.event.connection.acknowledged</p> </li> </ul>
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ContentType: string;

		/**
		 * The content of the event to be sent (for example, message text). This is not yet supported.
		 * Max length: 1024
		 * Min length: 1
		 */
		Content?: string;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 500
		 */
		ClientToken?: string;
	}

	export interface SendMessagePostBody {

		/**
		 * The type of the content. Supported types are text/plain.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ContentType: string;

		/**
		 * The content of the message.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Content: string;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 500
		 */
		ClientToken?: string;
	}

}

