import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateParticipantConnectionResponse {

		/** The websocket for the participant's connection. */
		Websocket?: Websocket;

		/** Connection credentials. */
		ConnectionCredentials?: ConnectionCredentials;
	}
	export interface CreateParticipantConnectionResponseFormProperties {
	}
	export function CreateCreateParticipantConnectionResponseFormGroup() {
		return new FormGroup<CreateParticipantConnectionResponseFormProperties>({
		});

	}


	/** The websocket for the participant's connection. */
	export interface Websocket {

		/**
		 * Max length: 2000
		 * Min length: 1
		 */
		Url?: string | null;
		ConnectionExpiry?: string | null;
	}

	/** The websocket for the participant's connection. */
	export interface WebsocketFormProperties {

		/**
		 * Max length: 2000
		 * Min length: 1
		 */
		Url: FormControl<string | null | undefined>,
		ConnectionExpiry: FormControl<string | null | undefined>,
	}
	export function CreateWebsocketFormGroup() {
		return new FormGroup<WebsocketFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000), Validators.minLength(1)]),
			ConnectionExpiry: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Connection credentials.  */
	export interface ConnectionCredentials {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		ConnectionToken?: string | null;
		Expiry?: string | null;
	}

	/** Connection credentials.  */
	export interface ConnectionCredentialsFormProperties {

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		ConnectionToken: FormControl<string | null | undefined>,
		Expiry: FormControl<string | null | undefined>,
	}
	export function CreateConnectionCredentialsFormGroup() {
		return new FormGroup<ConnectionCredentialsFormProperties>({
			ConnectionToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.minLength(1)]),
			Expiry: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConnectionType { WEBSOCKET = 0, CONNECTION_CREDENTIALS = 1 }

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface DisconnectParticipantResponse {
	}
	export interface DisconnectParticipantResponseFormProperties {
	}
	export function CreateDisconnectParticipantResponseFormGroup() {
		return new FormGroup<DisconnectParticipantResponseFormProperties>({
		});

	}

	export interface GetTranscriptResponse {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		InitialContactId?: string | null;
		Transcript?: Array<Item>;

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface GetTranscriptResponseFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		InitialContactId: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTranscriptResponseFormGroup() {
		return new FormGroup<GetTranscriptResponseFormProperties>({
			InitialContactId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.minLength(1)]),
		});

	}


	/** An item - message or event - that has been sent.  */
	export interface Item {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		AbsoluteTime?: string | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Content?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ContentType?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id?: string | null;
		Type?: ItemType | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ParticipantId?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		DisplayName?: string | null;
		ParticipantRole?: ItemParticipantRole | null;
	}

	/** An item - message or event - that has been sent.  */
	export interface ItemFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		AbsoluteTime: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		ContentType: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
		Type: FormControl<ItemType | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ParticipantId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		DisplayName: FormControl<string | null | undefined>,
		ParticipantRole: FormControl<ItemParticipantRole | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			AbsoluteTime: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			Type: new FormControl<ItemType | null | undefined>(undefined),
			ParticipantId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			DisplayName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			ParticipantRole: new FormControl<ItemParticipantRole | null | undefined>(undefined),
		});

	}

	export enum ItemType { MESSAGE = 0, EVENT = 1, CONNECTION_ACK = 2 }

	export enum ItemParticipantRole { AGENT = 0, CUSTOMER = 1, SYSTEM = 2 }

	export interface SendEventResponse {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		AbsoluteTime?: string | null;
	}
	export interface SendEventResponseFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		AbsoluteTime: FormControl<string | null | undefined>,
	}
	export function CreateSendEventResponseFormGroup() {
		return new FormGroup<SendEventResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			AbsoluteTime: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
		});

	}

	export interface SendMessageResponse {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		AbsoluteTime?: string | null;
	}
	export interface SendMessageResponseFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		AbsoluteTime: FormControl<string | null | undefined>,
	}
	export function CreateSendMessageResponseFormGroup() {
		return new FormGroup<SendMessageResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			AbsoluteTime: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
		});

	}

	export enum ChatItemType { MESSAGE = 0, EVENT = 1, CONNECTION_ACK = 2 }

	export interface CreateParticipantConnectionRequest {

		/**
		 * Required
		 * Minimum items: 1
		 */
		Type: Array<ConnectionType>;
	}
	export interface CreateParticipantConnectionRequestFormProperties {
	}
	export function CreateCreateParticipantConnectionRequestFormGroup() {
		return new FormGroup<CreateParticipantConnectionRequestFormProperties>({
		});

	}

	export interface DisconnectParticipantRequest {

		/** Max length: 500 */
		ClientToken?: string | null;
	}
	export interface DisconnectParticipantRequestFormProperties {

		/** Max length: 500 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateDisconnectParticipantRequestFormGroup() {
		return new FormGroup<DisconnectParticipantRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export enum ScanDirection { FORWARD = 0, BACKWARD = 1 }

	export enum SortKey { DESCENDING = 0, ASCENDING = 1 }


	/** A filtering option for where to start. For example, if you sent 100 messages, start with message 50.  */
	export interface StartPosition {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		AbsoluteTime?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MostRecent?: number | null;
	}

	/** A filtering option for where to start. For example, if you sent 100 messages, start with message 50.  */
	export interface StartPositionFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		AbsoluteTime: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MostRecent: FormControl<number | null | undefined>,
	}
	export function CreateStartPositionFormGroup() {
		return new FormGroup<StartPositionFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			AbsoluteTime: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			MostRecent: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

	}

	export interface GetTranscriptRequest {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		NextToken?: string | null;
		ScanDirection?: ScanDirection | null;
		SortOrder?: SortKey | null;

		/** A filtering option for where to start. For example, if you sent 100 messages, start with message 50. */
		StartPosition?: StartPosition;
	}
	export interface GetTranscriptRequestFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
		ScanDirection: FormControl<ScanDirection | null | undefined>,
		SortOrder: FormControl<SortKey | null | undefined>,
	}
	export function CreateGetTranscriptRequestFormGroup() {
		return new FormGroup<GetTranscriptRequestFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.minLength(1)]),
			ScanDirection: new FormControl<ScanDirection | null | undefined>(undefined),
			SortOrder: new FormControl<SortKey | null | undefined>(undefined),
		});

	}

	export enum ParticipantRole { AGENT = 0, CUSTOMER = 1, SYSTEM = 2 }

	export interface SendEventRequest {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ContentType: string;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Content?: string | null;

		/** Max length: 500 */
		ClientToken?: string | null;
	}
	export interface SendEventRequestFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ContentType: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,

		/** Max length: 500 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateSendEventRequestFormGroup() {
		return new FormGroup<SendEventRequestFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(1)]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export interface SendMessageRequest {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ContentType: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Content: string;

		/** Max length: 500 */
		ClientToken?: string | null;
	}
	export interface SendMessageRequestFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ContentType: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,

		/** Max length: 500 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateSendMessageRequestFormGroup() {
		return new FormGroup<SendMessageRequestFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(1)]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

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
		GetTranscript(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetTranscriptPostBody): Observable<GetTranscriptResponse> {
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
	export interface CreateParticipantConnectionPostBodyFormProperties {
	}
	export function CreateCreateParticipantConnectionPostBodyFormGroup() {
		return new FormGroup<CreateParticipantConnectionPostBodyFormProperties>({
		});

	}

	export interface DisconnectParticipantPostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 500
		 */
		ClientToken?: string | null;
	}
	export interface DisconnectParticipantPostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateDisconnectParticipantPostBodyFormGroup() {
		return new FormGroup<DisconnectParticipantPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export interface GetTranscriptPostBody {

		/**
		 * The contactId from the current contact chain for which transcript is needed.
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId?: string | null;

		/**
		 * The maximum number of results to return in the page. Default: 10.
		 * Minimum: 0
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * The pagination token. Use the value returned previously in the next subsequent request to retrieve the next set of results.
		 * Max length: 1000
		 * Min length: 1
		 */
		NextToken?: string | null;

		/** The direction from StartPosition from which to retrieve message. Default: BACKWARD when no StartPosition is provided, FORWARD with StartPosition. */
		ScanDirection?: ScanDirection | null;

		/** The sort order for the records. Default: DESCENDING. */
		SortOrder?: SortKey | null;

		/** A filtering option for where to start. For example, if you sent 100 messages, start with message 50. */
		StartPosition?: GetTranscriptPostBodyStartPosition;
	}
	export interface GetTranscriptPostBodyFormProperties {

		/**
		 * The contactId from the current contact chain for which transcript is needed.
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return in the page. Default: 10.
		 * Minimum: 0
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The pagination token. Use the value returned previously in the next subsequent request to retrieve the next set of results.
		 * Max length: 1000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/** The direction from StartPosition from which to retrieve message. Default: BACKWARD when no StartPosition is provided, FORWARD with StartPosition. */
		ScanDirection: FormControl<ScanDirection | null | undefined>,

		/** The sort order for the records. Default: DESCENDING. */
		SortOrder: FormControl<SortKey | null | undefined>,
	}
	export function CreateGetTranscriptPostBodyFormGroup() {
		return new FormGroup<GetTranscriptPostBodyFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.minLength(1)]),
			ScanDirection: new FormControl<ScanDirection | null | undefined>(undefined),
			SortOrder: new FormControl<SortKey | null | undefined>(undefined),
		});

	}

	export interface GetTranscriptPostBodyStartPosition {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		AbsoluteTime?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MostRecent?: number | null;
	}
	export interface GetTranscriptPostBodyStartPositionFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 */
		AbsoluteTime: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		MostRecent: FormControl<number | null | undefined>,
	}
	export function CreateGetTranscriptPostBodyStartPositionFormGroup() {
		return new FormGroup<GetTranscriptPostBodyStartPositionFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			AbsoluteTime: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			MostRecent: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
		});

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
		Content?: string | null;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 500
		 */
		ClientToken?: string | null;
	}
	export interface SendEventPostBodyFormProperties {

		/**
		 * <p>The content type of the request. Supported types are:</p> <ul> <li> <p>application/vnd.amazonaws.connect.event.typing</p> </li> <li> <p>application/vnd.amazonaws.connect.event.connection.acknowledged</p> </li> </ul>
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ContentType: FormControl<string | null | undefined>,

		/**
		 * The content of the event to be sent (for example, message text). This is not yet supported.
		 * Max length: 1024
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateSendEventPostBodyFormGroup() {
		return new FormGroup<SendEventPostBodyFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(1)]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

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
		ClientToken?: string | null;
	}
	export interface SendMessagePostBodyFormProperties {

		/**
		 * The type of the content. Supported types are text/plain.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ContentType: FormControl<string | null | undefined>,

		/**
		 * The content of the message.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateSendMessagePostBodyFormGroup() {
		return new FormGroup<SendMessagePostBodyFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(1)]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

}

