import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CompleteAttachmentUploadResponse {
	}
	export interface CompleteAttachmentUploadResponseFormProperties {
	}
	export function CreateCompleteAttachmentUploadResponseFormGroup() {
		return new FormGroup<CompleteAttachmentUploadResponseFormProperties>({
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
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

	export interface CreateParticipantConnectionResponse {
		Websocket?: Websocket;
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
		Url?: string;
		ConnectionExpiry?: string;
	}

	/** The websocket for the participant's connection. */
	export interface WebsocketFormProperties {
		Url: FormControl<string | null | undefined>,
		ConnectionExpiry: FormControl<string | null | undefined>,
	}
	export function CreateWebsocketFormGroup() {
		return new FormGroup<WebsocketFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined),
			ConnectionExpiry: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Connection credentials.  */
	export interface ConnectionCredentials {
		ConnectionToken?: string;
		Expiry?: string;
	}

	/** Connection credentials.  */
	export interface ConnectionCredentialsFormProperties {
		ConnectionToken: FormControl<string | null | undefined>,
		Expiry: FormControl<string | null | undefined>,
	}
	export function CreateConnectionCredentialsFormGroup() {
		return new FormGroup<ConnectionCredentialsFormProperties>({
			ConnectionToken: new FormControl<string | null | undefined>(undefined),
			Expiry: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConnectionType { WEBSOCKET = 'WEBSOCKET', CONNECTION_CREDENTIALS = 'CONNECTION_CREDENTIALS' }

	export interface DisconnectParticipantResponse {
	}
	export interface DisconnectParticipantResponseFormProperties {
	}
	export function CreateDisconnectParticipantResponseFormGroup() {
		return new FormGroup<DisconnectParticipantResponseFormProperties>({
		});

	}

	export interface GetAttachmentResponse {
		Url?: string;
		UrlExpiry?: string;
	}
	export interface GetAttachmentResponseFormProperties {
		Url: FormControl<string | null | undefined>,
		UrlExpiry: FormControl<string | null | undefined>,
	}
	export function CreateGetAttachmentResponseFormGroup() {
		return new FormGroup<GetAttachmentResponseFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined),
			UrlExpiry: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTranscriptResponse {
		InitialContactId?: string;
		Transcript?: Array<Item>;
		NextToken?: string;
	}
	export interface GetTranscriptResponseFormProperties {
		InitialContactId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTranscriptResponseFormGroup() {
		return new FormGroup<GetTranscriptResponseFormProperties>({
			InitialContactId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An item - message or event - that has been sent.  */
	export interface Item {
		AbsoluteTime?: string;
		Content?: string;
		ContentType?: string;
		Id?: string;
		Type?: ChatItemType;
		ParticipantId?: string;
		DisplayName?: string;
		ParticipantRole?: ParticipantRole;
		Attachments?: Array<AttachmentItem>;
		MessageMetadata?: MessageMetadata;
		RelatedContactId?: string;
		ContactId?: string;
	}

	/** An item - message or event - that has been sent.  */
	export interface ItemFormProperties {
		AbsoluteTime: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,
		ContentType: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Type: FormControl<ChatItemType | null | undefined>,
		ParticipantId: FormControl<string | null | undefined>,
		DisplayName: FormControl<string | null | undefined>,
		ParticipantRole: FormControl<ParticipantRole | null | undefined>,
		RelatedContactId: FormControl<string | null | undefined>,
		ContactId: FormControl<string | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			AbsoluteTime: new FormControl<string | null | undefined>(undefined),
			Content: new FormControl<string | null | undefined>(undefined),
			ContentType: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<ChatItemType | null | undefined>(undefined),
			ParticipantId: new FormControl<string | null | undefined>(undefined),
			DisplayName: new FormControl<string | null | undefined>(undefined),
			ParticipantRole: new FormControl<ParticipantRole | null | undefined>(undefined),
			RelatedContactId: new FormControl<string | null | undefined>(undefined),
			ContactId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChatItemType { TYPING = 'TYPING', PARTICIPANT_JOINED = 'PARTICIPANT_JOINED', PARTICIPANT_LEFT = 'PARTICIPANT_LEFT', CHAT_ENDED = 'CHAT_ENDED', TRANSFER_SUCCEEDED = 'TRANSFER_SUCCEEDED', TRANSFER_FAILED = 'TRANSFER_FAILED', MESSAGE = 'MESSAGE', EVENT = 'EVENT', ATTACHMENT = 'ATTACHMENT', CONNECTION_ACK = 'CONNECTION_ACK', MESSAGE_DELIVERED = 'MESSAGE_DELIVERED', MESSAGE_READ = 'MESSAGE_READ' }

	export enum ParticipantRole { AGENT = 'AGENT', CUSTOMER = 'CUSTOMER', SYSTEM = 'SYSTEM' }


	/** The case-insensitive input to indicate standard MIME type that describes the format of the file that will be uploaded. */
	export interface AttachmentItem {
		ContentType?: string;
		AttachmentId?: string;
		AttachmentName?: string;
		Status?: ArtifactStatus;
	}

	/** The case-insensitive input to indicate standard MIME type that describes the format of the file that will be uploaded. */
	export interface AttachmentItemFormProperties {
		ContentType: FormControl<string | null | undefined>,
		AttachmentId: FormControl<string | null | undefined>,
		AttachmentName: FormControl<string | null | undefined>,
		Status: FormControl<ArtifactStatus | null | undefined>,
	}
	export function CreateAttachmentItemFormGroup() {
		return new FormGroup<AttachmentItemFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined),
			AttachmentId: new FormControl<string | null | undefined>(undefined),
			AttachmentName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ArtifactStatus | null | undefined>(undefined),
		});

	}

	export enum ArtifactStatus { APPROVED = 'APPROVED', REJECTED = 'REJECTED', IN_PROGRESS = 'IN_PROGRESS' }


	/** Contains metadata related to a message. */
	export interface MessageMetadata {
		MessageId?: string;
		Receipts?: Array<Receipt>;
	}

	/** Contains metadata related to a message. */
	export interface MessageMetadataFormProperties {
		MessageId: FormControl<string | null | undefined>,
	}
	export function CreateMessageMetadataFormGroup() {
		return new FormGroup<MessageMetadataFormProperties>({
			MessageId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The receipt for the message delivered to the recipient. */
	export interface Receipt {
		DeliveredTimestamp?: string;
		ReadTimestamp?: string;
		RecipientParticipantId?: string;
	}

	/** The receipt for the message delivered to the recipient. */
	export interface ReceiptFormProperties {
		DeliveredTimestamp: FormControl<string | null | undefined>,
		ReadTimestamp: FormControl<string | null | undefined>,
		RecipientParticipantId: FormControl<string | null | undefined>,
	}
	export function CreateReceiptFormGroup() {
		return new FormGroup<ReceiptFormProperties>({
			DeliveredTimestamp: new FormControl<string | null | undefined>(undefined),
			ReadTimestamp: new FormControl<string | null | undefined>(undefined),
			RecipientParticipantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendEventResponse {
		Id?: string;
		AbsoluteTime?: string;
	}
	export interface SendEventResponseFormProperties {
		Id: FormControl<string | null | undefined>,
		AbsoluteTime: FormControl<string | null | undefined>,
	}
	export function CreateSendEventResponseFormGroup() {
		return new FormGroup<SendEventResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			AbsoluteTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendMessageResponse {
		Id?: string;
		AbsoluteTime?: string;
	}
	export interface SendMessageResponseFormProperties {
		Id: FormControl<string | null | undefined>,
		AbsoluteTime: FormControl<string | null | undefined>,
	}
	export function CreateSendMessageResponseFormGroup() {
		return new FormGroup<SendMessageResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			AbsoluteTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartAttachmentUploadResponse {
		AttachmentId?: string;
		UploadMetadata?: UploadMetadata;
	}
	export interface StartAttachmentUploadResponseFormProperties {
		AttachmentId: FormControl<string | null | undefined>,
	}
	export function CreateStartAttachmentUploadResponseFormGroup() {
		return new FormGroup<StartAttachmentUploadResponseFormProperties>({
			AttachmentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Fields to be used while uploading the attachment. */
	export interface UploadMetadata {
		Url?: string;
		UrlExpiry?: string;
		HeadersToInclude?: UploadMetadataSignedHeaders;
	}

	/** Fields to be used while uploading the attachment. */
	export interface UploadMetadataFormProperties {
		Url: FormControl<string | null | undefined>,
		UrlExpiry: FormControl<string | null | undefined>,
	}
	export function CreateUploadMetadataFormGroup() {
		return new FormGroup<UploadMetadataFormProperties>({
			Url: new FormControl<string | null | undefined>(undefined),
			UrlExpiry: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UploadMetadataSignedHeaders {
	}
	export interface UploadMetadataSignedHeadersFormProperties {
	}
	export function CreateUploadMetadataSignedHeadersFormGroup() {
		return new FormGroup<UploadMetadataSignedHeadersFormProperties>({
		});

	}

	export interface CompleteAttachmentUploadRequest {

		/** Required */
		AttachmentIds: Array<string>;

		/** Required */
		ClientToken: string;
	}
	export interface CompleteAttachmentUploadRequestFormProperties {

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCompleteAttachmentUploadRequestFormGroup() {
		return new FormGroup<CompleteAttachmentUploadRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateParticipantConnectionRequest {
		Type?: Array<ConnectionType>;
		ConnectParticipant?: boolean | null;
	}
	export interface CreateParticipantConnectionRequestFormProperties {
		ConnectParticipant: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateParticipantConnectionRequestFormGroup() {
		return new FormGroup<CreateParticipantConnectionRequestFormProperties>({
			ConnectParticipant: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DisconnectParticipantRequest {
		ClientToken?: string;
	}
	export interface DisconnectParticipantRequestFormProperties {
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateDisconnectParticipantRequestFormGroup() {
		return new FormGroup<DisconnectParticipantRequestFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAttachmentRequest {

		/** Required */
		AttachmentId: string;
	}
	export interface GetAttachmentRequestFormProperties {

		/** Required */
		AttachmentId: FormControl<string | null | undefined>,
	}
	export function CreateGetAttachmentRequestFormGroup() {
		return new FormGroup<GetAttachmentRequestFormProperties>({
			AttachmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScanDirection { FORWARD = 'FORWARD', BACKWARD = 'BACKWARD' }

	export enum SortKey { DESCENDING = 'DESCENDING', ASCENDING = 'ASCENDING' }


	/** A filtering option for where to start. For example, if you sent 100 messages, start with message 50.  */
	export interface StartPosition {
		Id?: string;
		AbsoluteTime?: string;
		MostRecent?: number | null;
	}

	/** A filtering option for where to start. For example, if you sent 100 messages, start with message 50.  */
	export interface StartPositionFormProperties {
		Id: FormControl<string | null | undefined>,
		AbsoluteTime: FormControl<string | null | undefined>,
		MostRecent: FormControl<number | null | undefined>,
	}
	export function CreateStartPositionFormGroup() {
		return new FormGroup<StartPositionFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			AbsoluteTime: new FormControl<string | null | undefined>(undefined),
			MostRecent: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTranscriptRequest {
		ContactId?: string;
		MaxResults?: number | null;
		NextToken?: string;
		ScanDirection?: ScanDirection;
		SortOrder?: SortKey;
		StartPosition?: StartPosition;
	}
	export interface GetTranscriptRequestFormProperties {
		ContactId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		ScanDirection: FormControl<ScanDirection | null | undefined>,
		SortOrder: FormControl<SortKey | null | undefined>,
	}
	export function CreateGetTranscriptRequestFormGroup() {
		return new FormGroup<GetTranscriptRequestFormProperties>({
			ContactId: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			ScanDirection: new FormControl<ScanDirection | null | undefined>(undefined),
			SortOrder: new FormControl<SortKey | null | undefined>(undefined),
		});

	}

	export interface SendEventRequest {

		/** Required */
		ContentType: string;
		Content?: string;
		ClientToken?: string;
	}
	export interface SendEventRequestFormProperties {

		/** Required */
		ContentType: FormControl<string | null | undefined>,
		Content: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateSendEventRequestFormGroup() {
		return new FormGroup<SendEventRequestFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Content: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendMessageRequest {

		/** Required */
		ContentType: string;

		/** Required */
		Content: string;
		ClientToken?: string;
	}
	export interface SendMessageRequestFormProperties {

		/** Required */
		ContentType: FormControl<string | null | undefined>,

		/** Required */
		Content: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateSendMessageRequestFormGroup() {
		return new FormGroup<SendMessageRequestFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartAttachmentUploadRequest {

		/** Required */
		ContentType: string;

		/** Required */
		AttachmentSizeInBytes: number;

		/** Required */
		AttachmentName: string;

		/** Required */
		ClientToken: string;
	}
	export interface StartAttachmentUploadRequestFormProperties {

		/** Required */
		ContentType: FormControl<string | null | undefined>,

		/** Required */
		AttachmentSizeInBytes: FormControl<number | null | undefined>,

		/** Required */
		AttachmentName: FormControl<string | null | undefined>,

		/** Required */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartAttachmentUploadRequestFormGroup() {
		return new FormGroup<StartAttachmentUploadRequestFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AttachmentSizeInBytes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			AttachmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Allows you to confirm that the attachment has been uploaded using the pre-signed URL provided in StartAttachmentUpload API. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
		 * Post participant/complete-attachment-upload#X-Amz-Bearer
		 * @return {CompleteAttachmentUploadResponse} Success
		 */
		CompleteAttachmentUpload(requestBody: CompleteAttachmentUploadPostBody): Observable<CompleteAttachmentUploadResponse> {
			return this.http.post<CompleteAttachmentUploadResponse>(this.baseUri + 'participant/complete-attachment-upload#X-Amz-Bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates the participant's connection. </p> <note> <p> <code>ParticipantToken</code> is used for invoking this API instead of <code>ConnectionToken</code>.</p> </note> <p>The participant token is valid for the lifetime of the participant – until they are part of a contact.</p> <p>The response URL for <code>WEBSOCKET</code> Type has a connect expiry timeout of 100s. Clients must manually connect to the returned websocket URL and subscribe to the desired topic. </p> <p>For chat, you need to publish the following on the established websocket connection:</p> <p> <code>{"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}</code> </p> <p>Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter, clients need to call this API again to obtain a new websocket URL and perform the same steps as before.</p> <p> <b>Message streaming support</b>: This API can also be used together with the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactStreaming.html">StartContactStreaming</a> API to create a participant connection for chat contacts that are not using a websocket. For more information about message streaming, <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-message-streaming.html">Enable real-time chat message streaming</a> in the <i>Amazon Connect Administrator Guide</i>.</p> <p> <b>Feature specifications</b>: For information about feature specifications, such as the allowed number of open websocket connections per participant, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>. </p> <note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p> </note>
		 * Post participant/connection#X-Amz-Bearer
		 * @return {CreateParticipantConnectionResponse} Success
		 */
		CreateParticipantConnection(requestBody: CreateParticipantConnectionPostBody): Observable<CreateParticipantConnectionResponse> {
			return this.http.post<CreateParticipantConnectionResponse>(this.baseUri + 'participant/connection#X-Amz-Bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disconnects a participant. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
		 * Post participant/disconnect#X-Amz-Bearer
		 * @return {DisconnectParticipantResponse} Success
		 */
		DisconnectParticipant(requestBody: DisconnectParticipantPostBody): Observable<DisconnectParticipantResponse> {
			return this.http.post<DisconnectParticipantResponse>(this.baseUri + 'participant/disconnect#X-Amz-Bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides a pre-signed URL for download of a completed attachment. This is an asynchronous API for use with active contacts.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
		 * Post participant/attachment#X-Amz-Bearer
		 * @return {GetAttachmentResponse} Success
		 */
		GetAttachment(requestBody: GetAttachmentPostBody): Observable<GetAttachmentResponse> {
			return this.http.post<GetAttachmentResponse>(this.baseUri + 'participant/attachment#X-Amz-Bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves a transcript of the session, including details about any attachments. For information about accessing past chat contact transcripts for a persistent chat, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
		 * Post participant/transcript#X-Amz-Bearer
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetTranscriptResponse} Success
		 */
		GetTranscript(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetTranscriptPostBody): Observable<GetTranscriptResponse> {
			return this.http.post<GetTranscriptResponse>(this.baseUri + 'participant/transcript#X-Amz-Bearer?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sends an event. </p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
		 * Post participant/event#X-Amz-Bearer
		 * @return {SendEventResponse} Success
		 */
		SendEvent(requestBody: SendEventPostBody): Observable<SendEventResponse> {
			return this.http.post<SendEventResponse>(this.baseUri + 'participant/event#X-Amz-Bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sends a message.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
		 * Post participant/message#X-Amz-Bearer
		 * @return {SendMessageResponse} Success
		 */
		SendMessage(requestBody: SendMessagePostBody): Observable<SendMessageResponse> {
			return this.http.post<SendMessageResponse>(this.baseUri + 'participant/message#X-Amz-Bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides a pre-signed Amazon S3 URL in response for uploading the file directly to S3.</p> <note> <p> <code>ConnectionToken</code> is used for invoking this API instead of <code>ParticipantToken</code>.</p> </note> <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 authentication</a>.</p>
		 * Post participant/start-attachment-upload#X-Amz-Bearer
		 * @return {StartAttachmentUploadResponse} Success
		 */
		StartAttachmentUpload(requestBody: StartAttachmentUploadPostBody): Observable<StartAttachmentUploadResponse> {
			return this.http.post<StartAttachmentUploadResponse>(this.baseUri + 'participant/start-attachment-upload#X-Amz-Bearer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CompleteAttachmentUploadPostBody {

		/**
		 * A list of unique identifiers for the attachments.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1
		 */
		AttachmentIds: Array<string>;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Required
		 * Max length: 500
		 * Min length: 1
		 */
		ClientToken: string;
	}
	export interface CompleteAttachmentUploadPostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Required
		 * Max length: 500
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCompleteAttachmentUploadPostBodyFormGroup() {
		return new FormGroup<CompleteAttachmentUploadPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(500)]),
		});

	}

	export interface CreateParticipantConnectionPostBody {

		/**
		 * Type of connection information required. This can be omitted if <code>ConnectParticipant</code> is <code>true</code>.
		 * Minimum items: 1
		 */
		Type?: Array<ConnectionType>;

		/** Amazon Connect Participant is used to mark the participant as connected for customer participant in message streaming, as well as for agent or manager participant in non-streaming chats. */
		ConnectParticipant?: boolean | null;
	}
	export interface CreateParticipantConnectionPostBodyFormProperties {

		/** Amazon Connect Participant is used to mark the participant as connected for customer participant in message streaming, as well as for agent or manager participant in non-streaming chats. */
		ConnectParticipant: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateParticipantConnectionPostBodyFormGroup() {
		return new FormGroup<CreateParticipantConnectionPostBodyFormProperties>({
			ConnectParticipant: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DisconnectParticipantPostBody {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken?: string | null;
	}
	export interface DisconnectParticipantPostBodyFormProperties {

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateDisconnectParticipantPostBodyFormGroup() {
		return new FormGroup<DisconnectParticipantPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export interface GetAttachmentPostBody {

		/**
		 * A unique identifier for the attachment.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		AttachmentId: string;
	}
	export interface GetAttachmentPostBodyFormProperties {

		/**
		 * A unique identifier for the attachment.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		AttachmentId: FormControl<string | null | undefined>,
	}
	export function CreateGetAttachmentPostBodyFormGroup() {
		return new FormGroup<GetAttachmentPostBodyFormProperties>({
			AttachmentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
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
			ContactId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1000)]),
			ScanDirection: new FormControl<ScanDirection | null | undefined>(undefined),
			SortOrder: new FormControl<SortKey | null | undefined>(undefined),
		});

	}

	export interface GetTranscriptPostBodyStartPosition {
		Id?: string;
		AbsoluteTime?: string;
		MostRecent?: number | null;
	}
	export interface GetTranscriptPostBodyStartPositionFormProperties {
		Id: FormControl<string | null | undefined>,
		AbsoluteTime: FormControl<string | null | undefined>,
		MostRecent: FormControl<number | null | undefined>,
	}
	export function CreateGetTranscriptPostBodyStartPositionFormGroup() {
		return new FormGroup<GetTranscriptPostBodyStartPositionFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			AbsoluteTime: new FormControl<string | null | undefined>(undefined),
			MostRecent: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SendEventPostBody {

		/**
		 * <p>The content type of the request. Supported types are:</p> <ul> <li> <p>application/vnd.amazonaws.connect.event.typing</p> </li> <li> <p>application/vnd.amazonaws.connect.event.connection.acknowledged</p> </li> <li> <p>application/vnd.amazonaws.connect.event.message.delivered</p> </li> <li> <p>application/vnd.amazonaws.connect.event.message.read</p> </li> </ul>
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ContentType: string;

		/**
		 * <p>The content of the event to be sent (for example, message text). For content related to message receipts, this is supported in the form of a JSON string.</p> <p>Sample Content: "{\"messageId\":\"11111111-aaaa-bbbb-cccc-EXAMPLE01234\"}"</p>
		 * Max length: 16384
		 * Min length: 1
		 */
		Content?: string | null;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken?: string | null;
	}
	export interface SendEventPostBodyFormProperties {

		/**
		 * <p>The content type of the request. Supported types are:</p> <ul> <li> <p>application/vnd.amazonaws.connect.event.typing</p> </li> <li> <p>application/vnd.amazonaws.connect.event.connection.acknowledged</p> </li> <li> <p>application/vnd.amazonaws.connect.event.message.delivered</p> </li> <li> <p>application/vnd.amazonaws.connect.event.message.read</p> </li> </ul>
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ContentType: FormControl<string | null | undefined>,

		/**
		 * <p>The content of the event to be sent (for example, message text). For content related to message receipts, this is supported in the form of a JSON string.</p> <p>Sample Content: "{\"messageId\":\"11111111-aaaa-bbbb-cccc-EXAMPLE01234\"}"</p>
		 * Max length: 16384
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateSendEventPostBodyFormGroup() {
		return new FormGroup<SendEventPostBodyFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(16384)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export interface SendMessagePostBody {

		/**
		 * The type of the content. Supported types are <code>text/plain</code>, <code>text/markdown</code>, <code>application/json</code>, and <code>application/vnd.amazonaws.connect.message.interactive.response</code>.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ContentType: string;

		/**
		 * <p>The content of the message. </p> <ul> <li> <p>For <code>text/plain</code> and <code>text/markdown</code>, the Length Constraints are Minimum of 1, Maximum of 1024. </p> </li> <li> <p>For <code>application/json</code>, the Length Constraints are Minimum of 1, Maximum of 12000. </p> </li> <li> <p>For <code>application/vnd.amazonaws.connect.message.interactive.response</code>, the Length Constraints are Minimum of 1, Maximum of 12288.</p> </li> </ul>
		 * Required
		 * Max length: 16384
		 * Min length: 1
		 */
		Content: string;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken?: string | null;
	}
	export interface SendMessagePostBodyFormProperties {

		/**
		 * The type of the content. Supported types are <code>text/plain</code>, <code>text/markdown</code>, <code>application/json</code>, and <code>application/vnd.amazonaws.connect.message.interactive.response</code>.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		ContentType: FormControl<string | null | undefined>,

		/**
		 * <p>The content of the message. </p> <ul> <li> <p>For <code>text/plain</code> and <code>text/markdown</code>, the Length Constraints are Minimum of 1, Maximum of 1024. </p> </li> <li> <p>For <code>application/json</code>, the Length Constraints are Minimum of 1, Maximum of 12000. </p> </li> <li> <p>For <code>application/vnd.amazonaws.connect.message.interactive.response</code>, the Length Constraints are Minimum of 1, Maximum of 12288.</p> </li> </ul>
		 * Required
		 * Max length: 16384
		 * Min length: 1
		 */
		Content: FormControl<string | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Max length: 500
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateSendMessagePostBodyFormGroup() {
		return new FormGroup<SendMessagePostBodyFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			Content: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(16384)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export interface StartAttachmentUploadPostBody {

		/**
		 * Describes the MIME file type of the attachment. For a list of supported file types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ContentType: string;

		/**
		 * The size of the attachment in bytes.
		 * Required
		 * Minimum: 1
		 */
		AttachmentSizeInBytes: number;

		/**
		 * A case-sensitive name of the attachment being uploaded.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		AttachmentName: string;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Required
		 * Max length: 500
		 * Min length: 1
		 */
		ClientToken: string;
	}
	export interface StartAttachmentUploadPostBodyFormProperties {

		/**
		 * Describes the MIME file type of the attachment. For a list of supported file types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/feature-limits.html">Feature specifications</a> in the <i>Amazon Connect Administrator Guide</i>.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		ContentType: FormControl<string | null | undefined>,

		/**
		 * The size of the attachment in bytes.
		 * Required
		 * Minimum: 1
		 */
		AttachmentSizeInBytes: FormControl<number | null | undefined>,

		/**
		 * A case-sensitive name of the attachment being uploaded.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		AttachmentName: FormControl<string | null | undefined>,

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.
		 * Required
		 * Max length: 500
		 * Min length: 1
		 */
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateStartAttachmentUploadPostBodyFormGroup() {
		return new FormGroup<StartAttachmentUploadPostBodyFormProperties>({
			ContentType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			AttachmentSizeInBytes: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			AttachmentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(500)]),
		});

	}

}

