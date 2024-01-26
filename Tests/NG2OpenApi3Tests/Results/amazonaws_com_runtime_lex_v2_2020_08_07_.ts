import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DeleteSessionResponse {
		botId?: string;
		botAliasId?: string;
		localeId?: string;
		sessionId?: string;
	}
	export interface DeleteSessionResponseFormProperties {
		botId: FormControl<string | null | undefined>,
		botAliasId: FormControl<string | null | undefined>,
		localeId: FormControl<string | null | undefined>,
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSessionResponseFormGroup() {
		return new FormGroup<DeleteSessionResponseFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined),
			botAliasId: new FormControl<string | null | undefined>(undefined),
			localeId: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface GetSessionResponse {
		sessionId?: string;
		messages?: Array<Message>;
		interpretations?: Array<Interpretation>;
		sessionState?: SessionState;
	}
	export interface GetSessionResponseFormProperties {
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreateGetSessionResponseFormGroup() {
		return new FormGroup<GetSessionResponseFormProperties>({
			sessionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for text that is returned to the customer.. */
	export interface Message {
		content?: string;

		/** Required */
		contentType: MessageContentType;

		/** <p>A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform. </p> <p>When you use a response card, the response from the user is constrained to the text associated with a button on the card.</p> */
		imageResponseCard?: ImageResponseCard;
	}

	/** Container for text that is returned to the customer.. */
	export interface MessageFormProperties {
		content: FormControl<string | null | undefined>,

		/** Required */
		contentType: FormControl<MessageContentType | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<MessageContentType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MessageContentType { CustomPayload = 0, ImageResponseCard = 1, PlainText = 2, SSML = 3 }


	/** <p>A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform. </p> <p>When you use a response card, the response from the user is constrained to the text associated with a button on the card.</p> */
	export interface ImageResponseCard {

		/** Required */
		title: string;
		subtitle?: string;
		imageUrl?: string;
		buttons?: Array<Button>;
	}

	/** <p>A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform. </p> <p>When you use a response card, the response from the user is constrained to the text associated with a button on the card.</p> */
	export interface ImageResponseCardFormProperties {

		/** Required */
		title: FormControl<string | null | undefined>,
		subtitle: FormControl<string | null | undefined>,
		imageUrl: FormControl<string | null | undefined>,
	}
	export function CreateImageResponseCardFormGroup() {
		return new FormGroup<ImageResponseCardFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subtitle: new FormControl<string | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A button that appears on a response card show to the user. */
	export interface Button {

		/** Required */
		text: string;

		/** Required */
		value: string;
	}

	/** A button that appears on a response card show to the user. */
	export interface ButtonFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateButtonFormGroup() {
		return new FormGroup<ButtonFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An intent that Amazon Lex V2 determined might satisfy the user's utterance. The intents are ordered by the confidence score.  */
	export interface Interpretation {
		nluConfidence?: ConfidenceScore;
		sentimentResponse?: SentimentResponse;
		intent?: Intent;
	}

	/** An intent that Amazon Lex V2 determined might satisfy the user's utterance. The intents are ordered by the confidence score.  */
	export interface InterpretationFormProperties {
	}
	export function CreateInterpretationFormGroup() {
		return new FormGroup<InterpretationFormProperties>({
		});

	}


	/** Provides a score that indicates the confidence that Amazon Lex V2 has that an intent is the one that satisfies the user's intent. */
	export interface ConfidenceScore {
		score?: number | null;
	}

	/** Provides a score that indicates the confidence that Amazon Lex V2 has that an intent is the one that satisfies the user's intent. */
	export interface ConfidenceScoreFormProperties {
		score: FormControl<number | null | undefined>,
	}
	export function CreateConfidenceScoreFormGroup() {
		return new FormGroup<ConfidenceScoreFormProperties>({
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Provides information about the sentiment expressed in a user's response in a conversation. Sentiments are determined using Amazon Comprehend. Sentiments are only returned if they are enabled for the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-sentiment.html"> Determine Sentiment </a> in the <i>Amazon Comprehend developer guide</i>.</p> */
	export interface SentimentResponse {
		sentiment?: SentimentType;

		/** The individual sentiment responses for the utterance. */
		sentimentScore?: SentimentScore;
	}

	/** <p>Provides information about the sentiment expressed in a user's response in a conversation. Sentiments are determined using Amazon Comprehend. Sentiments are only returned if they are enabled for the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-sentiment.html"> Determine Sentiment </a> in the <i>Amazon Comprehend developer guide</i>.</p> */
	export interface SentimentResponseFormProperties {
		sentiment: FormControl<SentimentType | null | undefined>,
	}
	export function CreateSentimentResponseFormGroup() {
		return new FormGroup<SentimentResponseFormProperties>({
			sentiment: new FormControl<SentimentType | null | undefined>(undefined),
		});

	}

	export enum SentimentType { MIXED = 0, NEGATIVE = 1, NEUTRAL = 2, POSITIVE = 3 }


	/** The individual sentiment responses for the utterance. */
	export interface SentimentScore {
		positive?: number | null;
		negative?: number | null;
		neutral?: number | null;
		mixed?: number | null;
	}

	/** The individual sentiment responses for the utterance. */
	export interface SentimentScoreFormProperties {
		positive: FormControl<number | null | undefined>,
		negative: FormControl<number | null | undefined>,
		neutral: FormControl<number | null | undefined>,
		mixed: FormControl<number | null | undefined>,
	}
	export function CreateSentimentScoreFormGroup() {
		return new FormGroup<SentimentScoreFormProperties>({
			positive: new FormControl<number | null | undefined>(undefined),
			negative: new FormControl<number | null | undefined>(undefined),
			neutral: new FormControl<number | null | undefined>(undefined),
			mixed: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The current intent that Amazon Lex V2 is attempting to fulfill. */
	export interface Intent {

		/** Required */
		name: string;
		slots?: Slots;
		state?: IntentState;
		confirmationState?: ConfirmationState;
	}

	/** The current intent that Amazon Lex V2 is attempting to fulfill. */
	export interface IntentFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		state: FormControl<IntentState | null | undefined>,
		confirmationState: FormControl<ConfirmationState | null | undefined>,
	}
	export function CreateIntentFormGroup() {
		return new FormGroup<IntentFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<IntentState | null | undefined>(undefined),
			confirmationState: new FormControl<ConfirmationState | null | undefined>(undefined),
		});

	}

	export interface Slots {
	}
	export interface SlotsFormProperties {
	}
	export function CreateSlotsFormGroup() {
		return new FormGroup<SlotsFormProperties>({
		});

	}

	export enum IntentState { Failed = 0, Fulfilled = 1, InProgress = 2, ReadyForFulfillment = 3, Waiting = 4, FulfillmentInProgress = 5 }

	export enum ConfirmationState { Confirmed = 0, Denied = 1, None = 2 }


	/** The state of the user's session with Amazon Lex V2. */
	export interface SessionState {
		dialogAction?: DialogAction;
		intent?: Intent;
		activeContexts?: Array<ActiveContext>;
		sessionAttributes?: StringMap;
		originatingRequestId?: string;
		runtimeHints?: RuntimeHints;
	}

	/** The state of the user's session with Amazon Lex V2. */
	export interface SessionStateFormProperties {
		originatingRequestId: FormControl<string | null | undefined>,
	}
	export function CreateSessionStateFormGroup() {
		return new FormGroup<SessionStateFormProperties>({
			originatingRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The next action that Amazon Lex V2 should take. */
	export interface DialogAction {

		/** Required */
		type: DialogActionType;
		slotToElicit?: string;
		slotElicitationStyle?: StyleType;
		subSlotToElicit?: ElicitSubSlot;
	}

	/** The next action that Amazon Lex V2 should take. */
	export interface DialogActionFormProperties {

		/** Required */
		type: FormControl<DialogActionType | null | undefined>,
		slotToElicit: FormControl<string | null | undefined>,
		slotElicitationStyle: FormControl<StyleType | null | undefined>,
	}
	export function CreateDialogActionFormGroup() {
		return new FormGroup<DialogActionFormProperties>({
			type: new FormControl<DialogActionType | null | undefined>(undefined, [Validators.required]),
			slotToElicit: new FormControl<string | null | undefined>(undefined),
			slotElicitationStyle: new FormControl<StyleType | null | undefined>(undefined),
		});

	}

	export enum DialogActionType { Close = 0, ConfirmIntent = 1, Delegate = 2, ElicitIntent = 3, ElicitSlot = 4, None = 5 }

	export enum StyleType { Default = 0, SpellByLetter = 1, SpellByWord = 2 }


	/** The specific constituent sub slot of the composite slot to elicit in dialog action. */
	export interface ElicitSubSlot {

		/** Required */
		name: string;
		subSlotToElicit?: ElicitSubSlot;
	}

	/** The specific constituent sub slot of the composite slot to elicit in dialog action. */
	export interface ElicitSubSlotFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateElicitSubSlotFormGroup() {
		return new FormGroup<ElicitSubSlotFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Contains information about the contexts that a user is using in a session. You can configure Amazon Lex V2 to set a context when an intent is fulfilled, or you can set a context using the , , or operations.</p> <p>Use a context to indicate to Amazon Lex V2 intents that should be used as follow-up intents. For example, if the active context is <code>order-fulfilled</code>, only intents that have <code>order-fulfilled</code> configured as a trigger are considered for follow up.</p> */
	export interface ActiveContext {

		/** Required */
		name: string;

		/** Required */
		timeToLive: ActiveContextTimeToLive;

		/** Required */
		contextAttributes: ActiveContextParametersMap;
	}

	/** <p>Contains information about the contexts that a user is using in a session. You can configure Amazon Lex V2 to set a context when an intent is fulfilled, or you can set a context using the , , or operations.</p> <p>Use a context to indicate to Amazon Lex V2 intents that should be used as follow-up intents. For example, if the active context is <code>order-fulfilled</code>, only intents that have <code>order-fulfilled</code> configured as a trigger are considered for follow up.</p> */
	export interface ActiveContextFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateActiveContextFormGroup() {
		return new FormGroup<ActiveContextFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The time that a context is active. You can specify the time to live in seconds or in conversation turns. */
	export interface ActiveContextTimeToLive {

		/** Required */
		timeToLiveInSeconds: number;

		/** Required */
		turnsToLive: number;
	}

	/** The time that a context is active. You can specify the time to live in seconds or in conversation turns. */
	export interface ActiveContextTimeToLiveFormProperties {

		/** Required */
		timeToLiveInSeconds: FormControl<number | null | undefined>,

		/** Required */
		turnsToLive: FormControl<number | null | undefined>,
	}
	export function CreateActiveContextTimeToLiveFormGroup() {
		return new FormGroup<ActiveContextTimeToLiveFormProperties>({
			timeToLiveInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			turnsToLive: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ActiveContextParametersMap {
	}
	export interface ActiveContextParametersMapFormProperties {
	}
	export function CreateActiveContextParametersMapFormGroup() {
		return new FormGroup<ActiveContextParametersMapFormProperties>({
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


	/** <p>You can provide Amazon Lex V2 with hints to the phrases that a customer is likely to use for a slot. When a slot with hints is resolved, the phrases in the runtime hints are preferred in the resolution. You can provide hints for a maximum of 100 intents. You can provide a maximum of 100 slots.</p> <p>Before you can use runtime hints with an existing bot, you must first rebuild the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/using-hints.html">Using runtime hints to improve recognition of slot values</a>.</p> */
	export interface RuntimeHints {
		slotHints?: SlotHintsIntentMap;
	}

	/** <p>You can provide Amazon Lex V2 with hints to the phrases that a customer is likely to use for a slot. When a slot with hints is resolved, the phrases in the runtime hints are preferred in the resolution. You can provide hints for a maximum of 100 intents. You can provide a maximum of 100 slots.</p> <p>Before you can use runtime hints with an existing bot, you must first rebuild the bot.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/using-hints.html">Using runtime hints to improve recognition of slot values</a>.</p> */
	export interface RuntimeHintsFormProperties {
	}
	export function CreateRuntimeHintsFormGroup() {
		return new FormGroup<RuntimeHintsFormProperties>({
		});

	}

	export interface SlotHintsIntentMap {
	}
	export interface SlotHintsIntentMapFormProperties {
	}
	export function CreateSlotHintsIntentMapFormGroup() {
		return new FormGroup<SlotHintsIntentMapFormProperties>({
		});

	}

	export interface PutSessionResponse {
		audioStream?: string;
	}
	export interface PutSessionResponseFormProperties {
		audioStream: FormControl<string | null | undefined>,
	}
	export function CreatePutSessionResponseFormGroup() {
		return new FormGroup<PutSessionResponseFormProperties>({
			audioStream: new FormControl<string | null | undefined>(undefined),
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

	export interface RecognizeTextResponse {
		messages?: Array<Message>;
		sessionState?: SessionState;
		interpretations?: Array<Interpretation>;
		requestAttributes?: StringMap;
		sessionId?: string;
		recognizedBotMember?: RecognizedBotMember;
	}
	export interface RecognizeTextResponseFormProperties {
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreateRecognizeTextResponseFormGroup() {
		return new FormGroup<RecognizeTextResponseFormProperties>({
			sessionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The bot member that processes the request. */
	export interface RecognizedBotMember {

		/** Required */
		botId: string;
		botName?: string;
	}

	/** The bot member that processes the request. */
	export interface RecognizedBotMemberFormProperties {

		/** Required */
		botId: FormControl<string | null | undefined>,
		botName: FormControl<string | null | undefined>,
	}
	export function CreateRecognizedBotMemberFormGroup() {
		return new FormGroup<RecognizedBotMemberFormProperties>({
			botId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			botName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RecognizeUtteranceResponse {
		audioStream?: string;
	}
	export interface RecognizeUtteranceResponseFormProperties {
		audioStream: FormControl<string | null | undefined>,
	}
	export function CreateRecognizeUtteranceResponseFormGroup() {
		return new FormGroup<RecognizeUtteranceResponseFormProperties>({
			audioStream: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteSessionRequest {
	}
	export interface DeleteSessionRequestFormProperties {
	}
	export function CreateDeleteSessionRequestFormGroup() {
		return new FormGroup<DeleteSessionRequestFormProperties>({
		});

	}

	export interface GetSessionRequest {
	}
	export interface GetSessionRequestFormProperties {
	}
	export function CreateGetSessionRequestFormGroup() {
		return new FormGroup<GetSessionRequestFormProperties>({
		});

	}

	export interface PutSessionRequest {
		messages?: Array<Message>;

		/** Required */
		sessionState: SessionState;
		requestAttributes?: StringMap;
	}
	export interface PutSessionRequestFormProperties {
	}
	export function CreatePutSessionRequestFormGroup() {
		return new FormGroup<PutSessionRequestFormProperties>({
		});

	}

	export interface RecognizeTextRequest {

		/** Required */
		text: string;
		sessionState?: SessionState;
		requestAttributes?: StringMap;
	}
	export interface RecognizeTextRequestFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateRecognizeTextRequestFormGroup() {
		return new FormGroup<RecognizeTextRequestFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RecognizeUtteranceRequest {
		inputStream?: string;
	}
	export interface RecognizeUtteranceRequestFormProperties {
		inputStream: FormControl<string | null | undefined>,
	}
	export function CreateRecognizeUtteranceRequestFormGroup() {
		return new FormGroup<RecognizeUtteranceRequestFormProperties>({
			inputStream: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the phrase that Amazon Lex V2 should look for in the user's input to the bot. */
	export interface RuntimeHintValue {

		/** Required */
		phrase: string;
	}

	/** Provides the phrase that Amazon Lex V2 should look for in the user's input to the bot. */
	export interface RuntimeHintValueFormProperties {

		/** Required */
		phrase: FormControl<string | null | undefined>,
	}
	export function CreateRuntimeHintValueFormGroup() {
		return new FormGroup<RuntimeHintValueFormProperties>({
			phrase: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SlotHintsSlotMap {
	}
	export interface SlotHintsSlotMapFormProperties {
	}
	export function CreateSlotHintsSlotMapFormGroup() {
		return new FormGroup<SlotHintsSlotMapFormProperties>({
		});

	}


	/** Provides an array of phrases that should be given preference when resolving values for a slot. */
	export interface RuntimeHintDetails {
		runtimeHintValues?: Array<RuntimeHintValue>;
		subSlotHints?: SlotHintsSlotMap;
	}

	/** Provides an array of phrases that should be given preference when resolving values for a slot. */
	export interface RuntimeHintDetailsFormProperties {
	}
	export function CreateRuntimeHintDetailsFormGroup() {
		return new FormGroup<RuntimeHintDetailsFormProperties>({
		});

	}

	export enum Shape { Scalar = 0, List = 1, Composite = 2 }


	/** The value of a slot. */
	export interface Value {
		originalValue?: string;

		/** Required */
		interpretedValue: string;
		resolvedValues?: Array<string>;
	}

	/** The value of a slot. */
	export interface ValueFormProperties {
		originalValue: FormControl<string | null | undefined>,

		/** Required */
		interpretedValue: FormControl<string | null | undefined>,
	}
	export function CreateValueFormGroup() {
		return new FormGroup<ValueFormProperties>({
			originalValue: new FormControl<string | null | undefined>(undefined),
			interpretedValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A value that Amazon Lex V2 uses to fulfill an intent.  */
	export interface Slot {
		value?: Value;
		values?: Array<Slot>;
		subSlots?: Slots;
	}

	/** A value that Amazon Lex V2 uses to fulfill an intent.  */
	export interface SlotFormProperties {
	}
	export function CreateSlotFormGroup() {
		return new FormGroup<SlotFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Removes session information for a specified bot, alias, and user ID. </p> <p>You can use this operation to restart a conversation with a bot. When you remove a session, the entire history of the session is removed so that you can start again.</p> <p>You don't need to delete a session. Sessions have a time limit and will expire. Set the session time limit when you create the bot. The default is 5 minutes, but you can specify anything between 1 minute and 24 hours.</p> <p>If you specify a bot or alias ID that doesn't exist, you receive a <code>BadRequestException.</code> </p> <p>If the locale doesn't exist in the bot, or if the locale hasn't been enables for the alias, you receive a <code>BadRequestException</code>.</p>
		 * Delete bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}
		 * @param {string} botId The identifier of the bot that contains the session data.
		 * @param {string} botAliasId The alias identifier in use for the bot that contains the session data.
		 * @param {string} localeId The locale where the session is in use.
		 * @param {string} sessionId The identifier of the session to delete.
		 * @return {DeleteSessionResponse} Success
		 */
		DeleteSession(botId: string, botAliasId: string, localeId: string, sessionId: string): Observable<DeleteSessionResponse> {
			return this.http.delete<DeleteSessionResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botAliases/' + (botAliasId == null ? '' : encodeURIComponent(botAliasId)) + '/botLocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)), {});
		}

		/**
		 * <p>Returns session information for a specified bot, alias, and user.</p> <p>For example, you can use this operation to retrieve session information for a user that has left a long-running session in use.</p> <p>If the bot, alias, or session identifier doesn't exist, Amazon Lex V2 returns a <code>BadRequestException</code>. If the locale doesn't exist or is not enabled for the alias, you receive a <code>BadRequestException</code>.</p>
		 * Get bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}
		 * @param {string} botId The identifier of the bot that contains the session data.
		 * @param {string} botAliasId The alias identifier in use for the bot that contains the session data.
		 * @param {string} localeId The locale where the session is in use.
		 * @param {string} sessionId The identifier of the session to return.
		 * @return {GetSessionResponse} Success
		 */
		GetSession(botId: string, botAliasId: string, localeId: string, sessionId: string): Observable<GetSessionResponse> {
			return this.http.get<GetSessionResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botAliases/' + (botAliasId == null ? '' : encodeURIComponent(botAliasId)) + '/botLocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)), {});
		}

		/**
		 * Creates a new session or modifies an existing session with an Amazon Lex V2 bot. Use this operation to enable your application to set the state of the bot.
		 * Post bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}
		 * @param {string} botId The identifier of the bot that receives the session data.
		 * @param {string} botAliasId The alias identifier of the bot that receives the session data.
		 * @param {string} localeId The locale where the session is in use.
		 * @param {string} sessionId The identifier of the session that receives the session data.
		 * @return {PutSessionResponse} Success
		 */
		PutSession(botId: string, botAliasId: string, localeId: string, sessionId: string, requestBody: PutSessionPostBody): Observable<PutSessionResponse> {
			return this.http.post<PutSessionResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botAliases/' + (botAliasId == null ? '' : encodeURIComponent(botAliasId)) + '/botLocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sends user input to Amazon Lex V2. Client applications use this API to send requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input using the machine learning model that it build for the bot.</p> <p>In response, Amazon Lex V2 returns the next message to convey to the user and an optional response card to display.</p> <p>If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p> <ul> <li> <p> <b>Success message</b> - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present.</p> </li> <li> <p> <b>Failed message</b> - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message.</p> </li> <li> <p> <b>Timeout message</b> - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>
		 * Post bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/text
		 * @param {string} botId The identifier of the bot that processes the request.
		 * @param {string} botAliasId The alias identifier in use for the bot that processes the request.
		 * @param {string} localeId The locale where the session is in use.
		 * @param {string} sessionId The identifier of the user session that is having the conversation.
		 * @return {RecognizeTextResponse} Success
		 */
		RecognizeText(botId: string, botAliasId: string, localeId: string, sessionId: string, requestBody: RecognizeTextPostBody): Observable<RecognizeTextResponse> {
			return this.http.post<RecognizeTextResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botAliases/' + (botAliasId == null ? '' : encodeURIComponent(botAliasId)) + '/botLocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '/text', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sends user input to Amazon Lex V2. You can send text or speech. Clients use this API to send text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2 interprets the user input using the machine learning model built for the bot.</p> <p>The following request fields must be compressed with gzip and then base64 encoded before you send them to Amazon Lex V2. </p> <ul> <li> <p>requestAttributes</p> </li> <li> <p>sessionState</p> </li> </ul> <p>The following response fields are compressed using gzip and then base64 encoded by Amazon Lex V2. Before you can use these fields, you must decode and decompress them. </p> <ul> <li> <p>inputTranscript</p> </li> <li> <p>interpretations</p> </li> <li> <p>messages</p> </li> <li> <p>requestAttributes</p> </li> <li> <p>sessionState</p> </li> </ul> <p>The example contains a Java application that compresses and encodes a Java object to send to Amazon Lex V2, and a second that decodes and decompresses a response from Amazon Lex V2.</p> <p>If the optional post-fulfillment response is specified, the messages are returned as follows. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_PostFulfillmentStatusSpecification.html">PostFulfillmentStatusSpecification</a>.</p> <ul> <li> <p> <b>Success message</b> - Returned if the Lambda function completes successfully and the intent state is fulfilled or ready fulfillment if the message is present.</p> </li> <li> <p> <b>Failed message</b> - The failed message is returned if the Lambda function throws an exception or if the Lambda function returns a failed intent state without a message.</p> </li> <li> <p> <b>Timeout message</b> - If you don't configure a timeout message and a timeout, and the Lambda function doesn't return within 30 seconds, the timeout message is returned. If you configure a timeout, the timeout message is returned when the period times out. </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete.html">Completion message</a>.</p>
		 * Post bots/{botId}/botAliases/{botAliasId}/botLocales/{localeId}/sessions/{sessionId}/utterance#Content-Type
		 * @param {string} botId The identifier of the bot that should receive the request.
		 * @param {string} botAliasId The alias identifier in use for the bot that should receive the request.
		 * @param {string} localeId The locale where the session is in use.
		 * @param {string} sessionId The identifier of the session in use.
		 * @return {RecognizeUtteranceResponse} Success
		 */
		RecognizeUtterance(botId: string, botAliasId: string, localeId: string, sessionId: string, requestBody: RecognizeUtterancePostBody): Observable<RecognizeUtteranceResponse> {
			return this.http.post<RecognizeUtteranceResponse>(this.baseUri + 'bots/' + (botId == null ? '' : encodeURIComponent(botId)) + '/botAliases/' + (botAliasId == null ? '' : encodeURIComponent(botAliasId)) + '/botLocales/' + (localeId == null ? '' : encodeURIComponent(localeId)) + '/sessions/' + (sessionId == null ? '' : encodeURIComponent(sessionId)) + '/utterance#Content-Type', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface PutSessionPostBody {

		/**
		 * A list of messages to send to the user. Messages are sent in the order that they are defined in the list.
		 * Maximum items: 10
		 */
		messages?: Array<Message>;

		/**
		 * The state of the user's session with Amazon Lex V2.
		 * Required
		 */
		sessionState: PutSessionPostBodySessionState;

		/** <p>Request-specific information passed between Amazon Lex V2 and the client application.</p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes with the prefix <code>x-amz-lex:</code>.</p> */
		requestAttributes?: {[id: string]: string };
	}
	export interface PutSessionPostBodyFormProperties {

		/** <p>Request-specific information passed between Amazon Lex V2 and the client application.</p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes with the prefix <code>x-amz-lex:</code>.</p> */
		requestAttributes: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePutSessionPostBodyFormGroup() {
		return new FormGroup<PutSessionPostBodyFormProperties>({
			requestAttributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface PutSessionPostBodySessionState {
		dialogAction?: DialogAction;
		intent?: Intent;
		activeContexts?: Array<ActiveContext>;
		sessionAttributes?: StringMap;
		originatingRequestId?: string;
		runtimeHints?: RuntimeHints;
	}
	export interface PutSessionPostBodySessionStateFormProperties {
		originatingRequestId: FormControl<string | null | undefined>,
	}
	export function CreatePutSessionPostBodySessionStateFormGroup() {
		return new FormGroup<PutSessionPostBodySessionStateFormProperties>({
			originatingRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RecognizeTextPostBody {

		/**
		 * The text that the user entered. Amazon Lex V2 interprets this text.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		text: string;

		/** The state of the user's session with Amazon Lex V2. */
		sessionState?: RecognizeTextPostBodySessionState;

		/** <p>Request-specific information passed between the client application and Amazon Lex V2 </p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes with the prefix <code>x-amz-lex:</code>.</p> */
		requestAttributes?: {[id: string]: string };
	}
	export interface RecognizeTextPostBodyFormProperties {

		/**
		 * The text that the user entered. Amazon Lex V2 interprets this text.
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		text: FormControl<string | null | undefined>,

		/** <p>Request-specific information passed between the client application and Amazon Lex V2 </p> <p>The namespace <code>x-amz-lex:</code> is reserved for special attributes. Don't create any request attributes with the prefix <code>x-amz-lex:</code>.</p> */
		requestAttributes: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateRecognizeTextPostBodyFormGroup() {
		return new FormGroup<RecognizeTextPostBodyFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]),
			requestAttributes: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface RecognizeTextPostBodySessionState {
		dialogAction?: DialogAction;
		intent?: Intent;
		activeContexts?: Array<ActiveContext>;
		sessionAttributes?: StringMap;
		originatingRequestId?: string;
		runtimeHints?: RuntimeHints;
	}
	export interface RecognizeTextPostBodySessionStateFormProperties {
		originatingRequestId: FormControl<string | null | undefined>,
	}
	export function CreateRecognizeTextPostBodySessionStateFormGroup() {
		return new FormGroup<RecognizeTextPostBodySessionStateFormProperties>({
			originatingRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RecognizeUtterancePostBody {

		/** User input in PCM or Opus audio format or text format as described in the <code>requestContentType</code> parameter. */
		inputStream?: string | null;
	}
	export interface RecognizeUtterancePostBodyFormProperties {

		/** User input in PCM or Opus audio format or text format as described in the <code>requestContentType</code> parameter. */
		inputStream: FormControl<string | null | undefined>,
	}
	export function CreateRecognizeUtterancePostBodyFormGroup() {
		return new FormGroup<RecognizeUtterancePostBodyFormProperties>({
			inputStream: new FormControl<string | null | undefined>(undefined),
		});

	}

}

