import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DeleteSessionResponse {
		botName?: string | null;
		botAlias?: string | null;

		/**
		 * Max length: 100
		 * Min length: 2
		 * Pattern: [0-9a-zA-Z._:-]+
		 */
		userId?: string | null;
		sessionId?: string | null;
	}
	export interface DeleteSessionResponseFormProperties {
		botName: FormControl<string | null | undefined>,
		botAlias: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 2
		 * Pattern: [0-9a-zA-Z._:-]+
		 */
		userId: FormControl<string | null | undefined>,
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSessionResponseFormGroup() {
		return new FormGroup<DeleteSessionResponseFormProperties>({
			botName: new FormControl<string | null | undefined>(undefined),
			botAlias: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(2)]),
			sessionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
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

	export interface InternalFailureException {
	}
	export interface InternalFailureExceptionFormProperties {
	}
	export function CreateInternalFailureExceptionFormGroup() {
		return new FormGroup<InternalFailureExceptionFormProperties>({
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

	export interface GetSessionResponse {

		/**
		 * Minimum items: 0
		 * Maximum items: 3
		 */
		recentIntentSummaryView?: Array<IntentSummary>;
		sessionAttributes?: StringMap;
		sessionId?: string | null;

		/** Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state. */
		dialogAction?: DialogAction;
	}
	export interface GetSessionResponseFormProperties {
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreateGetSessionResponseFormGroup() {
		return new FormGroup<GetSessionResponseFormProperties>({
			sessionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the state of an intent. You can use this information to get the current state of an intent so that you can process the intent, or so that you can return the intent to its previous state. */
	export interface IntentSummary {
		intentName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9-]+
		 */
		checkpointLabel?: string | null;
		slots?: StringMap;
		confirmationStatus?: IntentSummaryConfirmationStatus | null;

		/** Required */
		dialogActionType: IntentSummaryDialogActionType;
		fulfillmentState?: IntentSummaryFulfillmentState | null;
		slotToElicit?: string | null;
	}

	/** Provides information about the state of an intent. You can use this information to get the current state of an intent so that you can process the intent, or so that you can return the intent to its previous state. */
	export interface IntentSummaryFormProperties {
		intentName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9-]+
		 */
		checkpointLabel: FormControl<string | null | undefined>,
		confirmationStatus: FormControl<IntentSummaryConfirmationStatus | null | undefined>,

		/** Required */
		dialogActionType: FormControl<IntentSummaryDialogActionType | null | undefined>,
		fulfillmentState: FormControl<IntentSummaryFulfillmentState | null | undefined>,
		slotToElicit: FormControl<string | null | undefined>,
	}
	export function CreateIntentSummaryFormGroup() {
		return new FormGroup<IntentSummaryFormProperties>({
			intentName: new FormControl<string | null | undefined>(undefined),
			checkpointLabel: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			confirmationStatus: new FormControl<IntentSummaryConfirmationStatus | null | undefined>(undefined),
			dialogActionType: new FormControl<IntentSummaryDialogActionType | null | undefined>(undefined, [Validators.required]),
			fulfillmentState: new FormControl<IntentSummaryFulfillmentState | null | undefined>(undefined),
			slotToElicit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StringMap {
	}
	export interface StringMapFormProperties {
	}
	export function CreateStringMapFormGroup() {
		return new FormGroup<StringMapFormProperties>({
		});

	}

	export enum IntentSummaryConfirmationStatus { None = 0, Confirmed = 1, Denied = 2 }

	export enum IntentSummaryDialogActionType { ElicitIntent = 0, ConfirmIntent = 1, ElicitSlot = 2, Close = 3, Delegate = 4 }

	export enum IntentSummaryFulfillmentState { Fulfilled = 0, Failed = 1, ReadyForFulfillment = 2 }


	/** Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state. */
	export interface DialogAction {

		/** Required */
		type: IntentSummaryDialogActionType;
		intentName?: string | null;
		slots?: StringMap;
		slotToElicit?: string | null;
		fulfillmentState?: IntentSummaryFulfillmentState | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		message?: string | null;
		messageFormat?: DialogActionMessageFormat | null;
	}

	/** Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state. */
	export interface DialogActionFormProperties {

		/** Required */
		type: FormControl<IntentSummaryDialogActionType | null | undefined>,
		intentName: FormControl<string | null | undefined>,
		slotToElicit: FormControl<string | null | undefined>,
		fulfillmentState: FormControl<IntentSummaryFulfillmentState | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		message: FormControl<string | null | undefined>,
		messageFormat: FormControl<DialogActionMessageFormat | null | undefined>,
	}
	export function CreateDialogActionFormGroup() {
		return new FormGroup<DialogActionFormProperties>({
			type: new FormControl<IntentSummaryDialogActionType | null | undefined>(undefined, [Validators.required]),
			intentName: new FormControl<string | null | undefined>(undefined),
			slotToElicit: new FormControl<string | null | undefined>(undefined),
			fulfillmentState: new FormControl<IntentSummaryFulfillmentState | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			messageFormat: new FormControl<DialogActionMessageFormat | null | undefined>(undefined),
		});

	}

	export enum DialogActionMessageFormat { PlainText = 0, CustomPayload = 1, SSML = 2, Composite = 3 }

	export interface PostContentResponse {
		audioStream?: string | null;
	}
	export interface PostContentResponseFormProperties {
		audioStream: FormControl<string | null | undefined>,
	}
	export function CreatePostContentResponseFormGroup() {
		return new FormGroup<PostContentResponseFormProperties>({
			audioStream: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnsupportedMediaTypeException {
	}
	export interface UnsupportedMediaTypeExceptionFormProperties {
	}
	export function CreateUnsupportedMediaTypeExceptionFormGroup() {
		return new FormGroup<UnsupportedMediaTypeExceptionFormProperties>({
		});

	}

	export interface NotAcceptableException {
	}
	export interface NotAcceptableExceptionFormProperties {
	}
	export function CreateNotAcceptableExceptionFormGroup() {
		return new FormGroup<NotAcceptableExceptionFormProperties>({
		});

	}

	export interface RequestTimeoutException {
	}
	export interface RequestTimeoutExceptionFormProperties {
	}
	export function CreateRequestTimeoutExceptionFormGroup() {
		return new FormGroup<RequestTimeoutExceptionFormProperties>({
		});

	}

	export interface DependencyFailedException {
	}
	export interface DependencyFailedExceptionFormProperties {
	}
	export function CreateDependencyFailedExceptionFormGroup() {
		return new FormGroup<DependencyFailedExceptionFormProperties>({
		});

	}

	export interface BadGatewayException {
	}
	export interface BadGatewayExceptionFormProperties {
	}
	export function CreateBadGatewayExceptionFormGroup() {
		return new FormGroup<BadGatewayExceptionFormProperties>({
		});

	}

	export interface LoopDetectedException {
	}
	export interface LoopDetectedExceptionFormProperties {
	}
	export function CreateLoopDetectedExceptionFormGroup() {
		return new FormGroup<LoopDetectedExceptionFormProperties>({
		});

	}

	export interface PostTextResponse {
		intentName?: string | null;
		slots?: StringMap;
		sessionAttributes?: StringMap;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		message?: string | null;

		/** <p>The sentiment expressed in an utterance.</p> <p>When the bot is configured to send utterances to Amazon Comprehend for sentiment analysis, this field structure contains the result of the analysis.</p> */
		sentimentResponse?: SentimentResponse;
		messageFormat?: DialogActionMessageFormat | null;
		dialogState?: PostTextResponseDialogState | null;
		slotToElicit?: string | null;

		/** If you configure a response card when creating your bots, Amazon Lex substitutes the session attributes and slot values that are available, and then returns it. The response card can also come from a Lambda function ( <code>dialogCodeHook</code> and <code>fulfillmentActivity</code> on an intent). */
		responseCard?: ResponseCard;
		sessionId?: string | null;
	}
	export interface PostTextResponseFormProperties {
		intentName: FormControl<string | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		message: FormControl<string | null | undefined>,
		messageFormat: FormControl<DialogActionMessageFormat | null | undefined>,
		dialogState: FormControl<PostTextResponseDialogState | null | undefined>,
		slotToElicit: FormControl<string | null | undefined>,
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreatePostTextResponseFormGroup() {
		return new FormGroup<PostTextResponseFormProperties>({
			intentName: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			messageFormat: new FormControl<DialogActionMessageFormat | null | undefined>(undefined),
			dialogState: new FormControl<PostTextResponseDialogState | null | undefined>(undefined),
			slotToElicit: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The sentiment expressed in an utterance.</p> <p>When the bot is configured to send utterances to Amazon Comprehend for sentiment analysis, this field structure contains the result of the analysis.</p> */
	export interface SentimentResponse {
		sentimentLabel?: string | null;
		sentimentScore?: string | null;
	}

	/** <p>The sentiment expressed in an utterance.</p> <p>When the bot is configured to send utterances to Amazon Comprehend for sentiment analysis, this field structure contains the result of the analysis.</p> */
	export interface SentimentResponseFormProperties {
		sentimentLabel: FormControl<string | null | undefined>,
		sentimentScore: FormControl<string | null | undefined>,
	}
	export function CreateSentimentResponseFormGroup() {
		return new FormGroup<SentimentResponseFormProperties>({
			sentimentLabel: new FormControl<string | null | undefined>(undefined),
			sentimentScore: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PostTextResponseDialogState { ElicitIntent = 0, ConfirmIntent = 1, ElicitSlot = 2, Fulfilled = 3, ReadyForFulfillment = 4, Failed = 5 }


	/** If you configure a response card when creating your bots, Amazon Lex substitutes the session attributes and slot values that are available, and then returns it. The response card can also come from a Lambda function ( <code>dialogCodeHook</code> and <code>fulfillmentActivity</code> on an intent). */
	export interface ResponseCard {
		version?: string | null;
		contentType?: ResponseCardContentType | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		genericAttachments?: Array<GenericAttachment>;
	}

	/** If you configure a response card when creating your bots, Amazon Lex substitutes the session attributes and slot values that are available, and then returns it. The response card can also come from a Lambda function ( <code>dialogCodeHook</code> and <code>fulfillmentActivity</code> on an intent). */
	export interface ResponseCardFormProperties {
		version: FormControl<string | null | undefined>,
		contentType: FormControl<ResponseCardContentType | null | undefined>,
	}
	export function CreateResponseCardFormGroup() {
		return new FormGroup<ResponseCardFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<ResponseCardContentType | null | undefined>(undefined),
		});

	}

	export enum ResponseCardContentType { application_vnd_amazonaws_card_generic = 0 }


	/** Represents an option rendered to the user when a prompt is shown. It could be an image, a button, a link, or text.  */
	export interface GenericAttachment {

		/**
		 * Max length: 80
		 * Min length: 1
		 */
		title?: string | null;

		/**
		 * Max length: 80
		 * Min length: 1
		 */
		subTitle?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		attachmentLinkUrl?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		imageUrl?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 5
		 */
		buttons?: Array<Button>;
	}

	/** Represents an option rendered to the user when a prompt is shown. It could be an image, a button, a link, or text.  */
	export interface GenericAttachmentFormProperties {

		/**
		 * Max length: 80
		 * Min length: 1
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * Max length: 80
		 * Min length: 1
		 */
		subTitle: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		attachmentLinkUrl: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		imageUrl: FormControl<string | null | undefined>,
	}
	export function CreateGenericAttachmentFormGroup() {
		return new FormGroup<GenericAttachmentFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(80), Validators.minLength(1)]),
			subTitle: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(80), Validators.minLength(1)]),
			attachmentLinkUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			imageUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** Represents an option to be shown on the client platform (Facebook, Slack, etc.) */
	export interface Button {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 1
		 */
		text: string;

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		value: string;
	}

	/** Represents an option to be shown on the client platform (Facebook, Slack, etc.) */
	export interface ButtonFormProperties {

		/**
		 * Required
		 * Max length: 15
		 * Min length: 1
		 */
		text: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateButtonFormGroup() {
		return new FormGroup<ButtonFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(15), Validators.minLength(1)]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1000), Validators.minLength(1)]),
		});

	}

	export interface PutSessionResponse {
		audioStream?: string | null;
	}
	export interface PutSessionResponseFormProperties {
		audioStream: FormControl<string | null | undefined>,
	}
	export function CreatePutSessionResponseFormGroup() {
		return new FormGroup<PutSessionResponseFormProperties>({
			audioStream: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DialogActionType { ElicitIntent = 0, ConfirmIntent = 1, ElicitSlot = 2, Close = 3, Delegate = 4 }

	export enum FulfillmentState { Fulfilled = 0, Failed = 1, ReadyForFulfillment = 2 }

	export enum MessageFormatType { PlainText = 0, CustomPayload = 1, SSML = 2, Composite = 3 }

	export enum ConfirmationStatus { None = 0, Confirmed = 1, Denied = 2 }

	export enum ContentType { application_vnd_amazonaws_card_generic = 0 }

	export interface DeleteSessionRequest {
	}
	export interface DeleteSessionRequestFormProperties {
	}
	export function CreateDeleteSessionRequestFormGroup() {
		return new FormGroup<DeleteSessionRequestFormProperties>({
		});

	}

	export enum DialogState { ElicitIntent = 0, ConfirmIntent = 1, ElicitSlot = 2, Fulfilled = 3, ReadyForFulfillment = 4, Failed = 5 }

	export interface GetSessionRequest {
	}
	export interface GetSessionRequestFormProperties {
	}
	export function CreateGetSessionRequestFormGroup() {
		return new FormGroup<GetSessionRequestFormProperties>({
		});

	}

	export interface PostContentRequest {

		/** Required */
		inputStream: string;
	}
	export interface PostContentRequestFormProperties {

		/** Required */
		inputStream: FormControl<string | null | undefined>,
	}
	export function CreatePostContentRequestFormGroup() {
		return new FormGroup<PostContentRequestFormProperties>({
			inputStream: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostTextRequest {
		sessionAttributes?: StringMap;
		requestAttributes?: StringMap;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		inputText: string;
	}
	export interface PostTextRequestFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		inputText: FormControl<string | null | undefined>,
	}
	export function CreatePostTextRequestFormGroup() {
		return new FormGroup<PostTextRequestFormProperties>({
			inputText: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}

	export interface PutSessionRequest {
		sessionAttributes?: StringMap;

		/** Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state. */
		dialogAction?: DialogAction;

		/**
		 * Minimum items: 0
		 * Maximum items: 3
		 */
		recentIntentSummaryView?: Array<IntentSummary>;
	}
	export interface PutSessionRequestFormProperties {
	}
	export function CreatePutSessionRequestFormGroup() {
		return new FormGroup<PutSessionRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Removes session information for a specified bot, alias, and user ID.
		 * Delete bot/{botName}/alias/{botAlias}/user/{userId}/session
		 * @param {string} botName The name of the bot that contains the session data.
		 * @param {string} botAlias The alias in use for the bot that contains the session data.
		 * @param {string} userId The identifier of the user associated with the session data.
		 * @return {DeleteSessionResponse} Success
		 */
		DeleteSession(botName: string, botAlias: string, userId: string): Observable<DeleteSessionResponse> {
			return this.http.delete<DeleteSessionResponse>(this.baseUri + 'bot/' + (botName == null ? '' : encodeURIComponent(botName)) + '/alias/' + (botAlias == null ? '' : encodeURIComponent(botAlias)) + '/user/' + (userId == null ? '' : encodeURIComponent(userId)) + '/session', {});
		}

		/**
		 * <p>Creates a new session or modifies an existing session with an Amazon Lex bot. Use this operation to enable your application to set the state of the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/how-session-api.html">Managing Sessions</a>.</p>
		 * Post bot/{botName}/alias/{botAlias}/user/{userId}/session
		 * @param {string} botName The name of the bot that contains the session data.
		 * @param {string} botAlias The alias in use for the bot that contains the session data.
		 * @param {string} userId The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot. 
		 * @return {PutSessionResponse} Success
		 */
		PutSession(botName: string, botAlias: string, userId: string, requestBody: PutSessionPostBody): Observable<PutSessionResponse> {
			return this.http.post<PutSessionResponse>(this.baseUri + 'bot/' + (botName == null ? '' : encodeURIComponent(botName)) + '/alias/' + (botAlias == null ? '' : encodeURIComponent(botAlias)) + '/user/' + (userId == null ? '' : encodeURIComponent(userId)) + '/session', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns session information for a specified bot, alias, and user ID.
		 * Get bot/{botName}/alias/{botAlias}/user/{userId}/session/
		 * @param {string} botName The name of the bot that contains the session data.
		 * @param {string} botAlias The alias in use for the bot that contains the session data.
		 * @param {string} userId The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot. 
		 * @param {string} checkpointLabelFilter <p>A string used to filter the intents returned in the <code>recentIntentSummaryView</code> structure. </p> <p>When you specify a filter, only intents with their <code>checkpointLabel</code> field set to that string are returned.</p>
		 * @return {GetSessionResponse} Success
		 */
		GetSession(botName: string, botAlias: string, userId: string, checkpointLabelFilter: string | null | undefined): Observable<GetSessionResponse> {
			return this.http.get<GetSessionResponse>(this.baseUri + 'bot/' + (botName == null ? '' : encodeURIComponent(botName)) + '/alias/' + (botAlias == null ? '' : encodeURIComponent(botAlias)) + '/user/' + (userId == null ? '' : encodeURIComponent(userId)) + '/session/&checkpointLabelFilter=' + (checkpointLabelFilter == null ? '' : encodeURIComponent(checkpointLabelFilter)), {});
		}

		/**
		 * <p> Sends user input (text or speech) to Amazon Lex. Clients use this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex interprets the user input using the machine learning model that it built for the bot. </p> <p>The <code>PostContent</code> operation supports audio input at 8kHz and 16kHz. You can use 8kHz audio to achieve higher speech recognition accuracy in telephone audio applications. </p> <p> In response, Amazon Lex returns the next message to convey to the user. Consider the following example messages: </p> <ul> <li> <p> For a user input "I would like a pizza," Amazon Lex might return a response with a message eliciting slot data (for example, <code>PizzaSize</code>): "What size pizza would you like?". </p> </li> <li> <p> After the user provides all of the pizza order information, Amazon Lex might return a response with a message to get user confirmation: "Order the pizza?". </p> </li> <li> <p> After the user replies "Yes" to the confirmation prompt, Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". </p> </li> </ul> <p> Not all Amazon Lex messages require a response from the user. For example, conclusion statements do not require a response. Some messages require only a yes or no response. In addition to the <code>message</code>, Amazon Lex provides additional context about the message in the response that you can use to enhance client behavior, such as displaying the appropriate client user interface. Consider the following examples: </p> <ul> <li> <p> If the message is to elicit slot data, Amazon Lex returns the following context information: </p> <ul> <li> <p> <code>x-amz-lex-dialog-state</code> header set to <code>ElicitSlot</code> </p> </li> <li> <p> <code>x-amz-lex-intent-name</code> header set to the intent name in the current context </p> </li> <li> <p> <code>x-amz-lex-slot-to-elicit</code> header set to the slot name for which the <code>message</code> is eliciting information </p> </li> <li> <p> <code>x-amz-lex-slots</code> header set to a map of slots configured for the intent with their current values </p> </li> </ul> </li> <li> <p> If the message is a confirmation prompt, the <code>x-amz-lex-dialog-state</code> header is set to <code>Confirmation</code> and the <code>x-amz-lex-slot-to-elicit</code> header is omitted. </p> </li> <li> <p> If the message is a clarification prompt configured for the intent, indicating that the user intent is not understood, the <code>x-amz-dialog-state</code> header is set to <code>ElicitIntent</code> and the <code>x-amz-slot-to-elicit</code> header is omitted. </p> </li> </ul> <p> In addition, Amazon Lex also returns your application-specific <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>
		 * Post bot/{botName}/alias/{botAlias}/user/{userId}/content#Content-Type
		 * @param {string} botName Name of the Amazon Lex bot.
		 * @param {string} botAlias Alias of the Amazon Lex bot.
		 * @param {string} userId <p>The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot. At runtime, each request must contain the <code>userID</code> field.</p> <p>To decide the user ID to use for your application, consider the following factors.</p> <ul> <li> <p>The <code>userID</code> field must not contain any personally identifiable information of the user, for example, name, personal identification numbers, or other end user personal information.</p> </li> <li> <p>If you want a user to start a conversation on one device and continue on another device, use a user-specific identifier.</p> </li> <li> <p>If you want the same user to be able to have two independent conversations on two different devices, choose a device-specific identifier.</p> </li> <li> <p>A user can't have two independent conversations with two different versions of the same bot. For example, a user can't have a conversation with the PROD and BETA versions of the same bot. If you anticipate that a user will need to have conversation with two different versions, for example, while testing, include the bot alias in the user ID to separate the two conversations.</p> </li> </ul>
		 * @return {PostContentResponse} Success
		 */
		PostContent(botName: string, botAlias: string, userId: string, requestBody: PostContentPostBody): Observable<PostContentResponse> {
			return this.http.post<PostContentResponse>(this.baseUri + 'bot/' + (botName == null ? '' : encodeURIComponent(botName)) + '/alias/' + (botAlias == null ? '' : encodeURIComponent(botAlias)) + '/user/' + (userId == null ? '' : encodeURIComponent(userId)) + '/content#Content-Type', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sends user input to Amazon Lex. Client applications can use this API to send requests to Amazon Lex at runtime. Amazon Lex then interprets the user input using the machine learning model it built for the bot. </p> <p> In response, Amazon Lex returns the next <code>message</code> to convey to the user an optional <code>responseCard</code> to display. Consider the following example messages: </p> <ul> <li> <p> For a user input "I would like a pizza", Amazon Lex might return a response with a message eliciting slot data (for example, PizzaSize): "What size pizza would you like?" </p> </li> <li> <p> After the user provides all of the pizza order information, Amazon Lex might return a response with a message to obtain user confirmation "Proceed with the pizza order?". </p> </li> <li> <p> After the user replies to a confirmation prompt with a "yes", Amazon Lex might return a conclusion statement: "Thank you, your cheese pizza has been ordered.". </p> </li> </ul> <p> Not all Amazon Lex messages require a user response. For example, a conclusion statement does not require a response. Some messages require only a "yes" or "no" user response. In addition to the <code>message</code>, Amazon Lex provides additional context about the message in the response that you might use to enhance client behavior, for example, to display the appropriate client user interface. These are the <code>slotToElicit</code>, <code>dialogState</code>, <code>intentName</code>, and <code>slots</code> fields in the response. Consider the following examples: </p> <ul> <li> <p>If the message is to elicit slot data, Amazon Lex returns the following context information:</p> <ul> <li> <p> <code>dialogState</code> set to ElicitSlot </p> </li> <li> <p> <code>intentName</code> set to the intent name in the current context </p> </li> <li> <p> <code>slotToElicit</code> set to the slot name for which the <code>message</code> is eliciting information </p> </li> <li> <p> <code>slots</code> set to a map of slots, configured for the intent, with currently known values </p> </li> </ul> </li> <li> <p> If the message is a confirmation prompt, the <code>dialogState</code> is set to ConfirmIntent and <code>SlotToElicit</code> is set to null. </p> </li> <li> <p>If the message is a clarification prompt (configured for the intent) that indicates that user intent is not understood, the <code>dialogState</code> is set to ElicitIntent and <code>slotToElicit</code> is set to null. </p> </li> </ul> <p> In addition, Amazon Lex also returns your application-specific <code>sessionAttributes</code>. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html">Managing Conversation Context</a>. </p>
		 * Post bot/{botName}/alias/{botAlias}/user/{userId}/text
		 * @param {string} botName The name of the Amazon Lex bot.
		 * @param {string} botAlias The alias of the Amazon Lex bot.
		 * @param {string} userId <p>The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot. At runtime, each request must contain the <code>userID</code> field.</p> <p>To decide the user ID to use for your application, consider the following factors.</p> <ul> <li> <p>The <code>userID</code> field must not contain any personally identifiable information of the user, for example, name, personal identification numbers, or other end user personal information.</p> </li> <li> <p>If you want a user to start a conversation on one device and continue on another device, use a user-specific identifier.</p> </li> <li> <p>If you want the same user to be able to have two independent conversations on two different devices, choose a device-specific identifier.</p> </li> <li> <p>A user can't have two independent conversations with two different versions of the same bot. For example, a user can't have a conversation with the PROD and BETA versions of the same bot. If you anticipate that a user will need to have conversation with two different versions, for example, while testing, include the bot alias in the user ID to separate the two conversations.</p> </li> </ul>
		 * @return {PostTextResponse} Success
		 */
		PostText(botName: string, botAlias: string, userId: string, requestBody: PostTextPostBody): Observable<PostTextResponse> {
			return this.http.post<PostTextResponse>(this.baseUri + 'bot/' + (botName == null ? '' : encodeURIComponent(botName)) + '/alias/' + (botAlias == null ? '' : encodeURIComponent(botAlias)) + '/user/' + (userId == null ? '' : encodeURIComponent(userId)) + '/text', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface PutSessionPostBody {

		/** Map of key/value pairs representing the session-specific context information. It contains application information passed between Amazon Lex and a client application. */
		sessionAttributes?: {[id: string]: string };

		/** Describes the next action that the bot should take in its interaction with the user and provides information about the context in which the action takes place. Use the <code>DialogAction</code> data type to set the interaction to a specific state, or to return the interaction to a previous state. */
		dialogAction?: PutSessionPostBodyDialogAction;

		/**
		 * <p>A summary of the recent intents for the bot. You can use the intent summary view to set a checkpoint label on an intent and modify attributes of intents. You can also use it to remove or add intent summary objects to the list.</p> <p>An intent that you modify or add to the list must make sense for the bot. For example, the intent name must be valid for the bot. You must provide valid values for:</p> <ul> <li> <p> <code>intentName</code> </p> </li> <li> <p>slot names</p> </li> <li> <p> <code>slotToElict</code> </p> </li> </ul> <p>If you send the <code>recentIntentSummaryView</code> parameter in a <code>PutSession</code> request, the contents of the new summary view replaces the old summary view. For example, if a <code>GetSession</code> request returns three intents in the summary view and you call <code>PutSession</code> with one intent in the summary view, the next call to <code>GetSession</code> will only return one intent.</p>
		 * Minimum items: 0
		 * Maximum items: 3
		 */
		recentIntentSummaryView?: Array<IntentSummary>;
	}
	export interface PutSessionPostBodyFormProperties {

		/** Map of key/value pairs representing the session-specific context information. It contains application information passed between Amazon Lex and a client application. */
		sessionAttributes: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePutSessionPostBodyFormGroup() {
		return new FormGroup<PutSessionPostBodyFormProperties>({
			sessionAttributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface PutSessionPostBodyDialogAction {
		type?: IntentSummaryDialogActionType | null;
		intentName?: string | null;
		slots?: StringMap;
		slotToElicit?: string | null;
		fulfillmentState?: IntentSummaryFulfillmentState | null;

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		message?: string | null;
		messageFormat?: DialogActionMessageFormat | null;
	}
	export interface PutSessionPostBodyDialogActionFormProperties {
		type: FormControl<IntentSummaryDialogActionType | null | undefined>,
		intentName: FormControl<string | null | undefined>,
		slotToElicit: FormControl<string | null | undefined>,
		fulfillmentState: FormControl<IntentSummaryFulfillmentState | null | undefined>,

		/**
		 * Max length: 1024
		 * Min length: 1
		 */
		message: FormControl<string | null | undefined>,
		messageFormat: FormControl<DialogActionMessageFormat | null | undefined>,
	}
	export function CreatePutSessionPostBodyDialogActionFormGroup() {
		return new FormGroup<PutSessionPostBodyDialogActionFormProperties>({
			type: new FormControl<IntentSummaryDialogActionType | null | undefined>(undefined),
			intentName: new FormControl<string | null | undefined>(undefined),
			slotToElicit: new FormControl<string | null | undefined>(undefined),
			fulfillmentState: new FormControl<IntentSummaryFulfillmentState | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024), Validators.minLength(1)]),
			messageFormat: new FormControl<DialogActionMessageFormat | null | undefined>(undefined),
		});

	}

	export interface PostContentPostBody {

		/**
		 * <p> User input in PCM or Opus audio format or text format as described in the <code>Content-Type</code> HTTP header. </p> <p>You can stream audio data to Amazon Lex or you can create a local buffer that captures all of the audio data before sending. In general, you get better performance if you stream audio data rather than buffering the data locally.</p>
		 * Required
		 */
		inputStream: string;
	}
	export interface PostContentPostBodyFormProperties {

		/**
		 * <p> User input in PCM or Opus audio format or text format as described in the <code>Content-Type</code> HTTP header. </p> <p>You can stream audio data to Amazon Lex or you can create a local buffer that captures all of the audio data before sending. In general, you get better performance if you stream audio data rather than buffering the data locally.</p>
		 * Required
		 */
		inputStream: FormControl<string | null | undefined>,
	}
	export function CreatePostContentPostBodyFormGroup() {
		return new FormGroup<PostContentPostBodyFormProperties>({
			inputStream: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostTextPostBody {

		/** <p>Application-specific information passed between Amazon Lex and a client application.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-session-attribs">Setting Session Attributes</a>.</p> */
		sessionAttributes?: {[id: string]: string };

		/** <p>Request-specific information passed between Amazon Lex and a client application.</p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes with the prefix <code>x-amz-lex:</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-request-attribs">Setting Request Attributes</a>.</p> */
		requestAttributes?: {[id: string]: string };

		/**
		 * The text that the user entered (Amazon Lex interprets this text).
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		inputText: string;
	}
	export interface PostTextPostBodyFormProperties {

		/** <p>Application-specific information passed between Amazon Lex and a client application.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-session-attribs">Setting Session Attributes</a>.</p> */
		sessionAttributes: FormControl<{[id: string]: string } | null | undefined>,

		/** <p>Request-specific information passed between Amazon Lex and a client application.</p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes with the prefix <code>x-amz-lex:</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/context-mgmt.html#context-mgmt-request-attribs">Setting Request Attributes</a>.</p> */
		requestAttributes: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The text that the user entered (Amazon Lex interprets this text).
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		inputText: FormControl<string | null | undefined>,
	}
	export function CreatePostTextPostBodyFormGroup() {
		return new FormGroup<PostTextPostBodyFormProperties>({
			sessionAttributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			requestAttributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			inputText: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}

}

