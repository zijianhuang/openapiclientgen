import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateBotVersionResponse {

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name?: string | null;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;
		intents?: Array<Intent>;

		/** Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>. */
		clarificationPrompt?: Prompt;

		/** A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. */
		abortStatement?: Statement;
		status?: CreateBotVersionResponseStatus | null;
		failureReason?: string | null;
		lastUpdatedDate?: Date | null;
		createdDate?: Date | null;

		/**
		 * Minimum: 60
		 * Maximum: 86400
		 */
		idleSessionTTLInSeconds?: number | null;
		voiceId?: string | null;
		checksum?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version?: string | null;
		locale?: CreateBotVersionResponseLocale | null;
		childDirected?: boolean | null;
		detectSentiment?: boolean | null;
	}
	export interface CreateBotVersionResponseFormProperties {

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		status: FormControl<CreateBotVersionResponseStatus | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		lastUpdatedDate: FormControl<Date | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 86400
		 */
		idleSessionTTLInSeconds: FormControl<number | null | undefined>,
		voiceId: FormControl<string | null | undefined>,
		checksum: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version: FormControl<string | null | undefined>,
		locale: FormControl<CreateBotVersionResponseLocale | null | undefined>,
		childDirected: FormControl<boolean | null | undefined>,
		detectSentiment: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateBotVersionResponseFormGroup() {
		return new FormGroup<CreateBotVersionResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(2)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			status: new FormControl<CreateBotVersionResponseStatus | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			idleSessionTTLInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(86400)]),
			voiceId: new FormControl<string | null | undefined>(undefined),
			checksum: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			locale: new FormControl<CreateBotVersionResponseLocale | null | undefined>(undefined),
			childDirected: new FormControl<boolean | null | undefined>(undefined),
			detectSentiment: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Identifies the specific version of an intent. */
	export interface Intent {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		intentName: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		intentVersion: string;
	}

	/** Identifies the specific version of an intent. */
	export interface IntentFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		intentName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		intentVersion: FormControl<string | null | undefined>,
	}
	export function CreateIntentFormGroup() {
		return new FormGroup<IntentFormProperties>({
			intentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(1)]),
			intentVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
		});

	}


	/** Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>. */
	export interface Prompt {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 15
		 */
		messages: Array<Message>;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 5
		 */
		maxAttempts: number;

		/**
		 * Max length: 50000
		 * Min length: 1
		 */
		responseCard?: string | null;
	}

	/** Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>. */
	export interface PromptFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 5
		 */
		maxAttempts: FormControl<number | null | undefined>,

		/**
		 * Max length: 50000
		 * Min length: 1
		 */
		responseCard: FormControl<string | null | undefined>,
	}
	export function CreatePromptFormGroup() {
		return new FormGroup<PromptFormProperties>({
			maxAttempts: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(5)]),
			responseCard: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50000), Validators.minLength(1)]),
		});

	}


	/** The message object that provides the message text and its type. */
	export interface Message {

		/** Required */
		contentType: MessageContentType;

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		content: string;

		/**
		 * Minimum: 1
		 * Maximum: 5
		 */
		groupNumber?: number | null;
	}

	/** The message object that provides the message text and its type. */
	export interface MessageFormProperties {

		/** Required */
		contentType: FormControl<MessageContentType | null | undefined>,

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 1
		 */
		content: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 5
		 */
		groupNumber: FormControl<number | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			contentType: new FormControl<MessageContentType | null | undefined>(undefined, [Validators.required]),
			content: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1000), Validators.minLength(1)]),
			groupNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5)]),
		});

	}

	export enum MessageContentType { PlainText = 0, SSML = 1, CustomPayload = 2 }


	/** A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey.  */
	export interface Statement {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 15
		 */
		messages: Array<Message>;

		/**
		 * Max length: 50000
		 * Min length: 1
		 */
		responseCard?: string | null;
	}

	/** A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey.  */
	export interface StatementFormProperties {

		/**
		 * Max length: 50000
		 * Min length: 1
		 */
		responseCard: FormControl<string | null | undefined>,
	}
	export function CreateStatementFormGroup() {
		return new FormGroup<StatementFormProperties>({
			responseCard: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50000), Validators.minLength(1)]),
		});

	}

	export enum CreateBotVersionResponseStatus { BUILDING = 0, READY = 1, READY_BASIC_TESTING = 2, FAILED = 3, NOT_BUILT = 4 }

	export enum CreateBotVersionResponseLocale { en_US = 0, en_GB = 1, de_DE = 2 }

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
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

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface PreconditionFailedException {
	}
	export interface PreconditionFailedExceptionFormProperties {
	}
	export function CreatePreconditionFailedExceptionFormGroup() {
		return new FormGroup<PreconditionFailedExceptionFormProperties>({
		});

	}

	export interface CreateIntentVersionResponse {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name?: string | null;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		slots?: Array<Slot>;

		/**
		 * Minimum items: 0
		 * Maximum items: 1500
		 */
		sampleUtterances?: Array<string>;

		/** Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>. */
		confirmationPrompt?: Prompt;

		/** A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. */
		rejectionStatement?: Statement;

		/** A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks. */
		followUpPrompt?: FollowUpPrompt;

		/** A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. */
		conclusionStatement?: Statement;

		/** Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.. */
		dialogCodeHook?: CodeHook;

		/** <p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul> */
		fulfillmentActivity?: FulfillmentActivity;
		parentIntentSignature?: string | null;
		lastUpdatedDate?: Date | null;
		createdDate?: Date | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version?: string | null;
		checksum?: string | null;
	}
	export interface CreateIntentVersionResponseFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		parentIntentSignature: FormControl<string | null | undefined>,
		lastUpdatedDate: FormControl<Date | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version: FormControl<string | null | undefined>,
		checksum: FormControl<string | null | undefined>,
	}
	export function CreateCreateIntentVersionResponseFormGroup() {
		return new FormGroup<CreateIntentVersionResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			parentIntentSignature: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			checksum: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies the version of a specific slot. */
	export interface Slot {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z](-|_|.)?)+$
		 */
		name: string;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;

		/** Required */
		slotConstraint: SlotSlotConstraint;

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^((AMAZON\.)_?|[A-Za-z]_?)+
		 */
		slotType?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		slotTypeVersion?: string | null;

		/** Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>. */
		valueElicitationPrompt?: Prompt;

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		priority?: number | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		sampleUtterances?: Array<string>;

		/**
		 * Max length: 50000
		 * Min length: 1
		 */
		responseCard?: string | null;
		obfuscationSetting?: SlotObfuscationSetting | null;
	}

	/** Identifies the version of a specific slot. */
	export interface SlotFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z](-|_|.)?)+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		slotConstraint: FormControl<SlotSlotConstraint | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^((AMAZON\.)_?|[A-Za-z]_?)+
		 */
		slotType: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		slotTypeVersion: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 100
		 */
		priority: FormControl<number | null | undefined>,

		/**
		 * Max length: 50000
		 * Min length: 1
		 */
		responseCard: FormControl<string | null | undefined>,
		obfuscationSetting: FormControl<SlotObfuscationSetting | null | undefined>,
	}
	export function CreateSlotFormGroup() {
		return new FormGroup<SlotFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			slotConstraint: new FormControl<SlotSlotConstraint | null | undefined>(undefined, [Validators.required]),
			slotType: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			slotTypeVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			priority: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(100)]),
			responseCard: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50000), Validators.minLength(1)]),
			obfuscationSetting: new FormControl<SlotObfuscationSetting | null | undefined>(undefined),
		});

	}

	export enum SlotSlotConstraint { Required = 0, Optional = 1 }

	export enum SlotObfuscationSetting { NONE = 0, DEFAULT_OBFUSCATION = 1 }


	/** A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks. */
	export interface FollowUpPrompt {

		/**
		 * Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
		 * Required
		 */
		prompt: Prompt;

		/**
		 * A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey.
		 * Required
		 */
		rejectionStatement: Statement;
	}

	/** A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks. */
	export interface FollowUpPromptFormProperties {
	}
	export function CreateFollowUpPromptFormGroup() {
		return new FormGroup<FollowUpPromptFormProperties>({
		});

	}


	/** Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.. */
	export interface CodeHook {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: arn:aws:lambda:[a-z]+-[a-z]+-[0-9]:[0-9]{12}:function:[a-zA-Z0-9-_]+(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})?(:[a-zA-Z0-9-_]+)?
		 */
		uri: string;

		/**
		 * Required
		 * Max length: 5
		 * Min length: 1
		 */
		messageVersion: string;
	}

	/** Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.. */
	export interface CodeHookFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: arn:aws:lambda:[a-z]+-[a-z]+-[0-9]:[0-9]{12}:function:[a-zA-Z0-9-_]+(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})?(:[a-zA-Z0-9-_]+)?
		 */
		uri: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 5
		 * Min length: 1
		 */
		messageVersion: FormControl<string | null | undefined>,
	}
	export function CreateCodeHookFormGroup() {
		return new FormGroup<CodeHookFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20)]),
			messageVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(5), Validators.minLength(1)]),
		});

	}


	/** <p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul> */
	export interface FulfillmentActivity {

		/** Required */
		type: FulfillmentActivityType;

		/** Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.. */
		codeHook?: CodeHook;
	}

	/** <p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul> */
	export interface FulfillmentActivityFormProperties {

		/** Required */
		type: FormControl<FulfillmentActivityType | null | undefined>,
	}
	export function CreateFulfillmentActivityFormGroup() {
		return new FormGroup<FulfillmentActivityFormProperties>({
			type: new FormControl<FulfillmentActivityType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FulfillmentActivityType { ReturnIntent = 0, CodeHook = 1 }

	export interface CreateSlotTypeVersionResponse {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name?: string | null;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10000
		 */
		enumerationValues?: Array<EnumerationValue>;
		lastUpdatedDate?: Date | null;
		createdDate?: Date | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version?: string | null;
		checksum?: string | null;
		valueSelectionStrategy?: CreateSlotTypeVersionResponseValueSelectionStrategy | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^((AMAZON\.)_?|[A-Za-z]_?)+
		 */
		parentSlotTypeSignature?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		slotTypeConfigurations?: Array<SlotTypeConfiguration>;
	}
	export interface CreateSlotTypeVersionResponseFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		lastUpdatedDate: FormControl<Date | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version: FormControl<string | null | undefined>,
		checksum: FormControl<string | null | undefined>,
		valueSelectionStrategy: FormControl<CreateSlotTypeVersionResponseValueSelectionStrategy | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^((AMAZON\.)_?|[A-Za-z]_?)+
		 */
		parentSlotTypeSignature: FormControl<string | null | undefined>,
	}
	export function CreateCreateSlotTypeVersionResponseFormGroup() {
		return new FormGroup<CreateSlotTypeVersionResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			checksum: new FormControl<string | null | undefined>(undefined),
			valueSelectionStrategy: new FormControl<CreateSlotTypeVersionResponseValueSelectionStrategy | null | undefined>(undefined),
			parentSlotTypeSignature: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
		});

	}


	/** <p>Each slot type can have a set of values. Each enumeration value represents a value the slot type can take. </p> <p>For example, a pizza ordering bot could have a slot type that specifies the type of crust that the pizza should have. The slot type could include the values </p> <ul> <li> <p>thick</p> </li> <li> <p>thin</p> </li> <li> <p>stuffed</p> </li> </ul> */
	export interface EnumerationValue {

		/**
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		value: string;
		synonyms?: Array<string>;
	}

	/** <p>Each slot type can have a set of values. Each enumeration value represents a value the slot type can take. </p> <p>For example, a pizza ordering bot could have a slot type that specifies the type of crust that the pizza should have. The slot type could include the values </p> <ul> <li> <p>thick</p> </li> <li> <p>thin</p> </li> <li> <p>stuffed</p> </li> </ul> */
	export interface EnumerationValueFormProperties {

		/**
		 * Required
		 * Max length: 140
		 * Min length: 1
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnumerationValueFormGroup() {
		return new FormGroup<EnumerationValueFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(140), Validators.minLength(1)]),
		});

	}

	export enum CreateSlotTypeVersionResponseValueSelectionStrategy { ORIGINAL_VALUE = 0, TOP_RESOLUTION = 1 }


	/** Provides configuration information for a slot type. */
	export interface SlotTypeConfiguration {

		/** Provides a regular expression used to validate the value of a slot. */
		regexConfiguration?: SlotTypeRegexConfiguration;
	}

	/** Provides configuration information for a slot type. */
	export interface SlotTypeConfigurationFormProperties {
	}
	export function CreateSlotTypeConfigurationFormGroup() {
		return new FormGroup<SlotTypeConfigurationFormProperties>({
		});

	}


	/** Provides a regular expression used to validate the value of a slot. */
	export interface SlotTypeRegexConfiguration {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		pattern: string;
	}

	/** Provides a regular expression used to validate the value of a slot. */
	export interface SlotTypeRegexConfigurationFormProperties {

		/**
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		pattern: FormControl<string | null | undefined>,
	}
	export function CreateSlotTypeRegexConfigurationFormGroup() {
		return new FormGroup<SlotTypeRegexConfigurationFormProperties>({
			pattern: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(100), Validators.minLength(1)]),
		});

	}

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}

	export interface GetBotResponse {

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name?: string | null;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;
		intents?: Array<Intent>;

		/** Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>. */
		clarificationPrompt?: Prompt;

		/** A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. */
		abortStatement?: Statement;
		status?: CreateBotVersionResponseStatus | null;
		failureReason?: string | null;
		lastUpdatedDate?: Date | null;
		createdDate?: Date | null;

		/**
		 * Minimum: 60
		 * Maximum: 86400
		 */
		idleSessionTTLInSeconds?: number | null;
		voiceId?: string | null;
		checksum?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version?: string | null;
		locale?: GetBotResponseLocale | null;
		childDirected?: boolean | null;
		detectSentiment?: boolean | null;
	}
	export interface GetBotResponseFormProperties {

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		status: FormControl<CreateBotVersionResponseStatus | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		lastUpdatedDate: FormControl<Date | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 86400
		 */
		idleSessionTTLInSeconds: FormControl<number | null | undefined>,
		voiceId: FormControl<string | null | undefined>,
		checksum: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version: FormControl<string | null | undefined>,
		locale: FormControl<GetBotResponseLocale | null | undefined>,
		childDirected: FormControl<boolean | null | undefined>,
		detectSentiment: FormControl<boolean | null | undefined>,
	}
	export function CreateGetBotResponseFormGroup() {
		return new FormGroup<GetBotResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(2)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			status: new FormControl<CreateBotVersionResponseStatus | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			idleSessionTTLInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(86400)]),
			voiceId: new FormControl<string | null | undefined>(undefined),
			checksum: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			locale: new FormControl<GetBotResponseLocale | null | undefined>(undefined),
			childDirected: new FormControl<boolean | null | undefined>(undefined),
			detectSentiment: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GetBotResponseLocale { en_US = 0, en_GB = 1, de_DE = 2 }

	export interface GetBotAliasResponse {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name?: string | null;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		botVersion?: string | null;

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		botName?: string | null;
		lastUpdatedDate?: Date | null;
		createdDate?: Date | null;
		checksum?: string | null;

		/** Contains information about conversation log settings. */
		conversationLogs?: ConversationLogsResponse;
	}
	export interface GetBotAliasResponseFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		botVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		botName: FormControl<string | null | undefined>,
		lastUpdatedDate: FormControl<Date | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,
		checksum: FormControl<string | null | undefined>,
	}
	export function CreateGetBotAliasResponseFormGroup() {
		return new FormGroup<GetBotAliasResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			botVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			botName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(2)]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			checksum: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about conversation log settings. */
	export interface ConversationLogsResponse {
		logSettings?: Array<LogSettingsResponse>;

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: ^arn:[\w\-]+:iam::[\d]{12}:role\/[\w+=,\.@\-]{1,64}$
		 */
		iamRoleArn?: string | null;
	}

	/** Contains information about conversation log settings. */
	export interface ConversationLogsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: ^arn:[\w\-]+:iam::[\d]{12}:role\/[\w+=,\.@\-]{1,64}$
		 */
		iamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateConversationLogsResponseFormGroup() {
		return new FormGroup<ConversationLogsResponseFormProperties>({
			iamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20)]),
		});

	}


	/** The settings for conversation logs. */
	export interface LogSettingsResponse {
		logType?: LogSettingsResponseLogType | null;
		destination?: LogSettingsResponseDestination | null;

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: ^arn:[\w\-]+:kms:[\w\-]+:[\d]{12}:(?:key\/[\w\-]+|alias\/[a-zA-Z0-9:\/_\-]{1,256})$
		 */
		kmsKeyArn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: ^arn:[\w\-]+:(?:logs:[\w\-]+:[\d]{12}:log-group:[\.\-_/#A-Za-z0-9]{1,512}(?::\*)?|s3:::[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9])$
		 */
		resourceArn?: string | null;

		/** Max length: 1024 */
		resourcePrefix?: string | null;
	}

	/** The settings for conversation logs. */
	export interface LogSettingsResponseFormProperties {
		logType: FormControl<LogSettingsResponseLogType | null | undefined>,
		destination: FormControl<LogSettingsResponseDestination | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: ^arn:[\w\-]+:kms:[\w\-]+:[\d]{12}:(?:key\/[\w\-]+|alias\/[a-zA-Z0-9:\/_\-]{1,256})$
		 */
		kmsKeyArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: ^arn:[\w\-]+:(?:logs:[\w\-]+:[\d]{12}:log-group:[\.\-_/#A-Za-z0-9]{1,512}(?::\*)?|s3:::[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9])$
		 */
		resourceArn: FormControl<string | null | undefined>,

		/** Max length: 1024 */
		resourcePrefix: FormControl<string | null | undefined>,
	}
	export function CreateLogSettingsResponseFormGroup() {
		return new FormGroup<LogSettingsResponseFormProperties>({
			logType: new FormControl<LogSettingsResponseLogType | null | undefined>(undefined),
			destination: new FormControl<LogSettingsResponseDestination | null | undefined>(undefined),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20)]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			resourcePrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}

	export enum LogSettingsResponseLogType { AUDIO = 0, TEXT = 1 }

	export enum LogSettingsResponseDestination { CLOUDWATCH_LOGS = 0, S3 = 1 }

	export interface GetBotAliasesResponse {
		BotAliases?: Array<BotAliasMetadata>;
		nextToken?: string | null;
	}
	export interface GetBotAliasesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetBotAliasesResponseFormGroup() {
		return new FormGroup<GetBotAliasesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a bot alias. */
	export interface BotAliasMetadata {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name?: string | null;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		botVersion?: string | null;

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		botName?: string | null;
		lastUpdatedDate?: Date | null;
		createdDate?: Date | null;
		checksum?: string | null;

		/** Contains information about conversation log settings. */
		conversationLogs?: ConversationLogsResponse;
	}

	/** Provides information about a bot alias. */
	export interface BotAliasMetadataFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		botVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		botName: FormControl<string | null | undefined>,
		lastUpdatedDate: FormControl<Date | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,
		checksum: FormControl<string | null | undefined>,
	}
	export function CreateBotAliasMetadataFormGroup() {
		return new FormGroup<BotAliasMetadataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			botVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			botName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(2)]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			checksum: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBotChannelAssociationResponse {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name?: string | null;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		botAlias?: string | null;

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		botName?: string | null;
		createdDate?: Date | null;
		type?: GetBotChannelAssociationResponseType | null;
		botConfiguration?: ChannelConfigurationMap;
		status?: GetBotChannelAssociationResponseStatus | null;
		failureReason?: string | null;
	}
	export interface GetBotChannelAssociationResponseFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		botAlias: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		botName: FormControl<string | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,
		type: FormControl<GetBotChannelAssociationResponseType | null | undefined>,
		status: FormControl<GetBotChannelAssociationResponseStatus | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateGetBotChannelAssociationResponseFormGroup() {
		return new FormGroup<GetBotChannelAssociationResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			botAlias: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			botName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(2)]),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<GetBotChannelAssociationResponseType | null | undefined>(undefined),
			status: new FormControl<GetBotChannelAssociationResponseStatus | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetBotChannelAssociationResponseType { Facebook = 0, Slack = 1, Twilio_Sms = 2, Kik = 3 }

	export interface ChannelConfigurationMap {
	}
	export interface ChannelConfigurationMapFormProperties {
	}
	export function CreateChannelConfigurationMapFormGroup() {
		return new FormGroup<ChannelConfigurationMapFormProperties>({
		});

	}

	export enum GetBotChannelAssociationResponseStatus { IN_PROGRESS = 0, CREATED = 1, FAILED = 2 }

	export interface GetBotChannelAssociationsResponse {
		botChannelAssociations?: Array<BotChannelAssociation>;
		nextToken?: string | null;
	}
	export interface GetBotChannelAssociationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetBotChannelAssociationsResponseFormGroup() {
		return new FormGroup<GetBotChannelAssociationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents an association between an Amazon Lex bot and an external messaging platform. */
	export interface BotChannelAssociation {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name?: string | null;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		botAlias?: string | null;

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		botName?: string | null;
		createdDate?: Date | null;
		type?: BotChannelAssociationType | null;
		botConfiguration?: ChannelConfigurationMap;
		status?: GetBotChannelAssociationResponseStatus | null;
		failureReason?: string | null;
	}

	/** Represents an association between an Amazon Lex bot and an external messaging platform. */
	export interface BotChannelAssociationFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		botAlias: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		botName: FormControl<string | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,
		type: FormControl<BotChannelAssociationType | null | undefined>,
		status: FormControl<GetBotChannelAssociationResponseStatus | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
	}
	export function CreateBotChannelAssociationFormGroup() {
		return new FormGroup<BotChannelAssociationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			botAlias: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			botName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(2)]),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<BotChannelAssociationType | null | undefined>(undefined),
			status: new FormControl<GetBotChannelAssociationResponseStatus | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BotChannelAssociationType { Facebook = 0, Slack = 1, Twilio_Sms = 2, Kik = 3 }

	export interface GetBotVersionsResponse {
		bots?: Array<BotMetadata>;
		nextToken?: string | null;
	}
	export interface GetBotVersionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetBotVersionsResponseFormGroup() {
		return new FormGroup<GetBotVersionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a bot. . */
	export interface BotMetadata {

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name?: string | null;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;
		status?: CreateBotVersionResponseStatus | null;
		lastUpdatedDate?: Date | null;
		createdDate?: Date | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version?: string | null;
	}

	/** Provides information about a bot. . */
	export interface BotMetadataFormProperties {

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		status: FormControl<CreateBotVersionResponseStatus | null | undefined>,
		lastUpdatedDate: FormControl<Date | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateBotMetadataFormGroup() {
		return new FormGroup<BotMetadataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(2)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			status: new FormControl<CreateBotVersionResponseStatus | null | undefined>(undefined),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface GetBotsResponse {
		bots?: Array<BotMetadata>;
		nextToken?: string | null;
	}
	export interface GetBotsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetBotsResponseFormGroup() {
		return new FormGroup<GetBotsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBuiltinIntentResponse {
		signature?: string | null;
		supportedLocales?: Array<Locale>;
		slots?: Array<BuiltinIntentSlot>;
	}
	export interface GetBuiltinIntentResponseFormProperties {
		signature: FormControl<string | null | undefined>,
	}
	export function CreateGetBuiltinIntentResponseFormGroup() {
		return new FormGroup<GetBuiltinIntentResponseFormProperties>({
			signature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Locale { en_US = 0, en_GB = 1, de_DE = 2 }


	/** Provides information about a slot used in a built-in intent. */
	export interface BuiltinIntentSlot {
		name?: string | null;
	}

	/** Provides information about a slot used in a built-in intent. */
	export interface BuiltinIntentSlotFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateBuiltinIntentSlotFormGroup() {
		return new FormGroup<BuiltinIntentSlotFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBuiltinIntentsResponse {
		intents?: Array<BuiltinIntentMetadata>;
		nextToken?: string | null;
	}
	export interface GetBuiltinIntentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetBuiltinIntentsResponseFormGroup() {
		return new FormGroup<GetBuiltinIntentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides metadata for a built-in intent. */
	export interface BuiltinIntentMetadata {
		signature?: string | null;
		supportedLocales?: Array<Locale>;
	}

	/** Provides metadata for a built-in intent. */
	export interface BuiltinIntentMetadataFormProperties {
		signature: FormControl<string | null | undefined>,
	}
	export function CreateBuiltinIntentMetadataFormGroup() {
		return new FormGroup<BuiltinIntentMetadataFormProperties>({
			signature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBuiltinSlotTypesResponse {
		slotTypes?: Array<BuiltinSlotTypeMetadata>;
		nextToken?: string | null;
	}
	export interface GetBuiltinSlotTypesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetBuiltinSlotTypesResponseFormGroup() {
		return new FormGroup<GetBuiltinSlotTypesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a built in slot type. */
	export interface BuiltinSlotTypeMetadata {
		signature?: string | null;
		supportedLocales?: Array<Locale>;
	}

	/** Provides information about a built in slot type. */
	export interface BuiltinSlotTypeMetadataFormProperties {
		signature: FormControl<string | null | undefined>,
	}
	export function CreateBuiltinSlotTypeMetadataFormGroup() {
		return new FormGroup<BuiltinSlotTypeMetadataFormProperties>({
			signature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetExportResponse {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: [a-zA-Z_]+
		 */
		name?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [0-9]+
		 */
		version?: string | null;
		resourceType?: GetExportResponseResourceType | null;
		exportType?: GetExportResponseExportType | null;
		exportStatus?: GetExportResponseExportStatus | null;
		failureReason?: string | null;
		url?: string | null;
	}
	export interface GetExportResponseFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: [a-zA-Z_]+
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: [0-9]+
		 */
		version: FormControl<string | null | undefined>,
		resourceType: FormControl<GetExportResponseResourceType | null | undefined>,
		exportType: FormControl<GetExportResponseExportType | null | undefined>,
		exportStatus: FormControl<GetExportResponseExportStatus | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateGetExportResponseFormGroup() {
		return new FormGroup<GetExportResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			resourceType: new FormControl<GetExportResponseResourceType | null | undefined>(undefined),
			exportType: new FormControl<GetExportResponseExportType | null | undefined>(undefined),
			exportStatus: new FormControl<GetExportResponseExportStatus | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetExportResponseResourceType { BOT = 0, INTENT = 1, SLOT_TYPE = 2 }

	export enum GetExportResponseExportType { ALEXA_SKILLS_KIT = 0, LEX = 1 }

	export enum GetExportResponseExportStatus { IN_PROGRESS = 0, READY = 1, FAILED = 2 }

	export interface GetImportResponse {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: [a-zA-Z_]+
		 */
		name?: string | null;
		resourceType?: GetExportResponseResourceType | null;
		mergeStrategy?: GetImportResponseMergeStrategy | null;
		importId?: string | null;
		importStatus?: GetImportResponseImportStatus | null;
		failureReason?: Array<string>;
		createdDate?: Date | null;
	}
	export interface GetImportResponseFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: [a-zA-Z_]+
		 */
		name: FormControl<string | null | undefined>,
		resourceType: FormControl<GetExportResponseResourceType | null | undefined>,
		mergeStrategy: FormControl<GetImportResponseMergeStrategy | null | undefined>,
		importId: FormControl<string | null | undefined>,
		importStatus: FormControl<GetImportResponseImportStatus | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,
	}
	export function CreateGetImportResponseFormGroup() {
		return new FormGroup<GetImportResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			resourceType: new FormControl<GetExportResponseResourceType | null | undefined>(undefined),
			mergeStrategy: new FormControl<GetImportResponseMergeStrategy | null | undefined>(undefined),
			importId: new FormControl<string | null | undefined>(undefined),
			importStatus: new FormControl<GetImportResponseImportStatus | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum GetImportResponseMergeStrategy { OVERWRITE_LATEST = 0, FAIL_ON_CONFLICT = 1 }

	export enum GetImportResponseImportStatus { IN_PROGRESS = 0, COMPLETE = 1, FAILED = 2 }

	export interface GetIntentResponse {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name?: string | null;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		slots?: Array<Slot>;

		/**
		 * Minimum items: 0
		 * Maximum items: 1500
		 */
		sampleUtterances?: Array<string>;

		/** Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>. */
		confirmationPrompt?: Prompt;

		/** A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. */
		rejectionStatement?: Statement;

		/** A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks. */
		followUpPrompt?: FollowUpPrompt;

		/** A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. */
		conclusionStatement?: Statement;

		/** Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.. */
		dialogCodeHook?: CodeHook;

		/** <p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul> */
		fulfillmentActivity?: FulfillmentActivity;
		parentIntentSignature?: string | null;
		lastUpdatedDate?: Date | null;
		createdDate?: Date | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version?: string | null;
		checksum?: string | null;
	}
	export interface GetIntentResponseFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		parentIntentSignature: FormControl<string | null | undefined>,
		lastUpdatedDate: FormControl<Date | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version: FormControl<string | null | undefined>,
		checksum: FormControl<string | null | undefined>,
	}
	export function CreateGetIntentResponseFormGroup() {
		return new FormGroup<GetIntentResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			parentIntentSignature: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			checksum: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetIntentVersionsResponse {
		intents?: Array<IntentMetadata>;
		nextToken?: string | null;
	}
	export interface GetIntentVersionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetIntentVersionsResponseFormGroup() {
		return new FormGroup<GetIntentVersionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about an intent. */
	export interface IntentMetadata {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name?: string | null;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;
		lastUpdatedDate?: Date | null;
		createdDate?: Date | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version?: string | null;
	}

	/** Provides information about an intent. */
	export interface IntentMetadataFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		lastUpdatedDate: FormControl<Date | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateIntentMetadataFormGroup() {
		return new FormGroup<IntentMetadataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface GetIntentsResponse {
		intents?: Array<IntentMetadata>;
		nextToken?: string | null;
	}
	export interface GetIntentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetIntentsResponseFormGroup() {
		return new FormGroup<GetIntentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSlotTypeResponse {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name?: string | null;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10000
		 */
		enumerationValues?: Array<EnumerationValue>;
		lastUpdatedDate?: Date | null;
		createdDate?: Date | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version?: string | null;
		checksum?: string | null;
		valueSelectionStrategy?: CreateSlotTypeVersionResponseValueSelectionStrategy | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^((AMAZON\.)_?|[A-Za-z]_?)+
		 */
		parentSlotTypeSignature?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		slotTypeConfigurations?: Array<SlotTypeConfiguration>;
	}
	export interface GetSlotTypeResponseFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		lastUpdatedDate: FormControl<Date | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version: FormControl<string | null | undefined>,
		checksum: FormControl<string | null | undefined>,
		valueSelectionStrategy: FormControl<CreateSlotTypeVersionResponseValueSelectionStrategy | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^((AMAZON\.)_?|[A-Za-z]_?)+
		 */
		parentSlotTypeSignature: FormControl<string | null | undefined>,
	}
	export function CreateGetSlotTypeResponseFormGroup() {
		return new FormGroup<GetSlotTypeResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			checksum: new FormControl<string | null | undefined>(undefined),
			valueSelectionStrategy: new FormControl<CreateSlotTypeVersionResponseValueSelectionStrategy | null | undefined>(undefined),
			parentSlotTypeSignature: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
		});

	}

	export interface GetSlotTypeVersionsResponse {
		slotTypes?: Array<SlotTypeMetadata>;
		nextToken?: string | null;
	}
	export interface GetSlotTypeVersionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSlotTypeVersionsResponseFormGroup() {
		return new FormGroup<GetSlotTypeVersionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a slot type.. */
	export interface SlotTypeMetadata {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name?: string | null;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;
		lastUpdatedDate?: Date | null;
		createdDate?: Date | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version?: string | null;
	}

	/** Provides information about a slot type.. */
	export interface SlotTypeMetadataFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		lastUpdatedDate: FormControl<Date | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateSlotTypeMetadataFormGroup() {
		return new FormGroup<SlotTypeMetadataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
		});

	}

	export interface GetSlotTypesResponse {
		slotTypes?: Array<SlotTypeMetadata>;
		nextToken?: string | null;
	}
	export interface GetSlotTypesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSlotTypesResponseFormGroup() {
		return new FormGroup<GetSlotTypesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUtterancesViewResponse {

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		botName?: string | null;
		utterances?: Array<UtteranceList>;
	}
	export interface GetUtterancesViewResponseFormProperties {

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		botName: FormControl<string | null | undefined>,
	}
	export function CreateGetUtterancesViewResponseFormGroup() {
		return new FormGroup<GetUtterancesViewResponseFormProperties>({
			botName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(2)]),
		});

	}


	/** Provides a list of utterances that have been made to a specific version of your bot. The list contains a maximum of 100 utterances. */
	export interface UtteranceList {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		botVersion?: string | null;
		utterances?: Array<UtteranceData>;
	}

	/** Provides a list of utterances that have been made to a specific version of your bot. The list contains a maximum of 100 utterances. */
	export interface UtteranceListFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		botVersion: FormControl<string | null | undefined>,
	}
	export function CreateUtteranceListFormGroup() {
		return new FormGroup<UtteranceListFormProperties>({
			botVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
		});

	}


	/** Provides information about a single utterance that was made to your bot.  */
	export interface UtteranceData {

		/**
		 * Max length: 2000
		 * Min length: 1
		 */
		utteranceString?: string | null;
		count?: number | null;
		distinctUsers?: number | null;
		firstUtteredDate?: Date | null;
		lastUtteredDate?: Date | null;
	}

	/** Provides information about a single utterance that was made to your bot.  */
	export interface UtteranceDataFormProperties {

		/**
		 * Max length: 2000
		 * Min length: 1
		 */
		utteranceString: FormControl<string | null | undefined>,
		count: FormControl<number | null | undefined>,
		distinctUsers: FormControl<number | null | undefined>,
		firstUtteredDate: FormControl<Date | null | undefined>,
		lastUtteredDate: FormControl<Date | null | undefined>,
	}
	export function CreateUtteranceDataFormGroup() {
		return new FormGroup<UtteranceDataFormProperties>({
			utteranceString: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000), Validators.minLength(1)]),
			count: new FormControl<number | null | undefined>(undefined),
			distinctUsers: new FormControl<number | null | undefined>(undefined),
			firstUtteredDate: new FormControl<Date | null | undefined>(undefined),
			lastUtteredDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {

		/**
		 * Minimum items: 0
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


	/** A list of key/value pairs that identify a bot, bot alias, or bot channel. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.  */
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

	/** A list of key/value pairs that identify a bot, bot alias, or bot channel. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.  */
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
			key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(0)]),
		});

	}

	export interface PutBotResponse {

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name?: string | null;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;
		intents?: Array<Intent>;

		/** Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>. */
		clarificationPrompt?: Prompt;

		/** A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. */
		abortStatement?: Statement;
		status?: CreateBotVersionResponseStatus | null;
		failureReason?: string | null;
		lastUpdatedDate?: Date | null;
		createdDate?: Date | null;

		/**
		 * Minimum: 60
		 * Maximum: 86400
		 */
		idleSessionTTLInSeconds?: number | null;
		voiceId?: string | null;
		checksum?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version?: string | null;
		locale?: PutBotResponseLocale | null;
		childDirected?: boolean | null;
		createVersion?: boolean | null;
		detectSentiment?: boolean | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
	}
	export interface PutBotResponseFormProperties {

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		status: FormControl<CreateBotVersionResponseStatus | null | undefined>,
		failureReason: FormControl<string | null | undefined>,
		lastUpdatedDate: FormControl<Date | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 86400
		 */
		idleSessionTTLInSeconds: FormControl<number | null | undefined>,
		voiceId: FormControl<string | null | undefined>,
		checksum: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version: FormControl<string | null | undefined>,
		locale: FormControl<PutBotResponseLocale | null | undefined>,
		childDirected: FormControl<boolean | null | undefined>,
		createVersion: FormControl<boolean | null | undefined>,
		detectSentiment: FormControl<boolean | null | undefined>,
	}
	export function CreatePutBotResponseFormGroup() {
		return new FormGroup<PutBotResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(2)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			status: new FormControl<CreateBotVersionResponseStatus | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			idleSessionTTLInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(86400)]),
			voiceId: new FormControl<string | null | undefined>(undefined),
			checksum: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			locale: new FormControl<PutBotResponseLocale | null | undefined>(undefined),
			childDirected: new FormControl<boolean | null | undefined>(undefined),
			createVersion: new FormControl<boolean | null | undefined>(undefined),
			detectSentiment: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PutBotResponseLocale { en_US = 0, en_GB = 1, de_DE = 2 }

	export interface PutBotAliasResponse {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name?: string | null;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		botVersion?: string | null;

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		botName?: string | null;
		lastUpdatedDate?: Date | null;
		createdDate?: Date | null;
		checksum?: string | null;

		/** Contains information about conversation log settings. */
		conversationLogs?: ConversationLogsResponse;

		/**
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
	}
	export interface PutBotAliasResponseFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		botVersion: FormControl<string | null | undefined>,

		/**
		 * Max length: 50
		 * Min length: 2
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		botName: FormControl<string | null | undefined>,
		lastUpdatedDate: FormControl<Date | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,
		checksum: FormControl<string | null | undefined>,
	}
	export function CreatePutBotAliasResponseFormGroup() {
		return new FormGroup<PutBotAliasResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			botVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			botName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50), Validators.minLength(2)]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			checksum: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Settings used to configure delivery mode and destination for conversation logs. */
	export interface LogSettingsRequest {

		/** Required */
		logType: LogSettingsResponseLogType;

		/** Required */
		destination: LogSettingsResponseDestination;

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: ^arn:[\w\-]+:kms:[\w\-]+:[\d]{12}:(?:key\/[\w\-]+|alias\/[a-zA-Z0-9:\/_\-]{1,256})$
		 */
		kmsKeyArn?: string | null;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: ^arn:[\w\-]+:(?:logs:[\w\-]+:[\d]{12}:log-group:[\.\-_/#A-Za-z0-9]{1,512}(?::\*)?|s3:::[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9])$
		 */
		resourceArn: string;
	}

	/** Settings used to configure delivery mode and destination for conversation logs. */
	export interface LogSettingsRequestFormProperties {

		/** Required */
		logType: FormControl<LogSettingsResponseLogType | null | undefined>,

		/** Required */
		destination: FormControl<LogSettingsResponseDestination | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: ^arn:[\w\-]+:kms:[\w\-]+:[\d]{12}:(?:key\/[\w\-]+|alias\/[a-zA-Z0-9:\/_\-]{1,256})$
		 */
		kmsKeyArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: ^arn:[\w\-]+:(?:logs:[\w\-]+:[\d]{12}:log-group:[\.\-_/#A-Za-z0-9]{1,512}(?::\*)?|s3:::[a-z0-9][\.\-a-z0-9]{1,61}[a-z0-9])$
		 */
		resourceArn: FormControl<string | null | undefined>,
	}
	export function CreateLogSettingsRequestFormGroup() {
		return new FormGroup<LogSettingsRequestFormProperties>({
			logType: new FormControl<LogSettingsResponseLogType | null | undefined>(undefined, [Validators.required]),
			destination: new FormControl<LogSettingsResponseDestination | null | undefined>(undefined, [Validators.required]),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20)]),
			resourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}

	export interface PutIntentResponse {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name?: string | null;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		slots?: Array<Slot>;

		/**
		 * Minimum items: 0
		 * Maximum items: 1500
		 */
		sampleUtterances?: Array<string>;

		/** Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>. */
		confirmationPrompt?: Prompt;

		/** A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. */
		rejectionStatement?: Statement;

		/** A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks. */
		followUpPrompt?: FollowUpPrompt;

		/** A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. */
		conclusionStatement?: Statement;

		/** Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.. */
		dialogCodeHook?: CodeHook;

		/** <p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul> */
		fulfillmentActivity?: FulfillmentActivity;
		parentIntentSignature?: string | null;
		lastUpdatedDate?: Date | null;
		createdDate?: Date | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version?: string | null;
		checksum?: string | null;
		createVersion?: boolean | null;
	}
	export interface PutIntentResponseFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		parentIntentSignature: FormControl<string | null | undefined>,
		lastUpdatedDate: FormControl<Date | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version: FormControl<string | null | undefined>,
		checksum: FormControl<string | null | undefined>,
		createVersion: FormControl<boolean | null | undefined>,
	}
	export function CreatePutIntentResponseFormGroup() {
		return new FormGroup<PutIntentResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			parentIntentSignature: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			checksum: new FormControl<string | null | undefined>(undefined),
			createVersion: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutSlotTypeResponse {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name?: string | null;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10000
		 */
		enumerationValues?: Array<EnumerationValue>;
		lastUpdatedDate?: Date | null;
		createdDate?: Date | null;

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version?: string | null;
		checksum?: string | null;
		valueSelectionStrategy?: CreateSlotTypeVersionResponseValueSelectionStrategy | null;
		createVersion?: boolean | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^((AMAZON\.)_?|[A-Za-z]_?)+
		 */
		parentSlotTypeSignature?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		slotTypeConfigurations?: Array<SlotTypeConfiguration>;
	}
	export interface PutSlotTypeResponseFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^([A-Za-z]_?)+$
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		lastUpdatedDate: FormControl<Date | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		version: FormControl<string | null | undefined>,
		checksum: FormControl<string | null | undefined>,
		valueSelectionStrategy: FormControl<CreateSlotTypeVersionResponseValueSelectionStrategy | null | undefined>,
		createVersion: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^((AMAZON\.)_?|[A-Za-z]_?)+
		 */
		parentSlotTypeSignature: FormControl<string | null | undefined>,
	}
	export function CreatePutSlotTypeResponseFormGroup() {
		return new FormGroup<PutSlotTypeResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			lastUpdatedDate: new FormControl<Date | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
			checksum: new FormControl<string | null | undefined>(undefined),
			valueSelectionStrategy: new FormControl<CreateSlotTypeVersionResponseValueSelectionStrategy | null | undefined>(undefined),
			createVersion: new FormControl<boolean | null | undefined>(undefined),
			parentSlotTypeSignature: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
		});

	}

	export interface StartImportResponse {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: [a-zA-Z_]+
		 */
		name?: string | null;
		resourceType?: GetExportResponseResourceType | null;
		mergeStrategy?: GetImportResponseMergeStrategy | null;
		importId?: string | null;
		importStatus?: GetImportResponseImportStatus | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
		createdDate?: Date | null;
	}
	export interface StartImportResponseFormProperties {

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: [a-zA-Z_]+
		 */
		name: FormControl<string | null | undefined>,
		resourceType: FormControl<GetExportResponseResourceType | null | undefined>,
		mergeStrategy: FormControl<GetImportResponseMergeStrategy | null | undefined>,
		importId: FormControl<string | null | undefined>,
		importStatus: FormControl<GetImportResponseImportStatus | null | undefined>,
		createdDate: FormControl<Date | null | undefined>,
	}
	export function CreateStartImportResponseFormGroup() {
		return new FormGroup<StartImportResponseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
			resourceType: new FormControl<GetExportResponseResourceType | null | undefined>(undefined),
			mergeStrategy: new FormControl<GetImportResponseMergeStrategy | null | undefined>(undefined),
			importId: new FormControl<string | null | undefined>(undefined),
			importStatus: new FormControl<GetImportResponseImportStatus | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
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

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export enum ChannelType { Facebook = 0, Slack = 1, Twilio_Sms = 2, Kik = 3 }

	export enum ChannelStatus { IN_PROGRESS = 0, CREATED = 1, FAILED = 2 }

	export enum Status { BUILDING = 0, READY = 1, READY_BASIC_TESTING = 2, FAILED = 3, NOT_BUILT = 4 }

	export enum ContentType { PlainText = 0, SSML = 1, CustomPayload = 2 }


	/** Provides the settings needed for conversation logs. */
	export interface ConversationLogsRequest {

		/** Required */
		logSettings: Array<LogSettingsRequest>;

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: ^arn:[\w\-]+:iam::[\d]{12}:role\/[\w+=,\.@\-]{1,64}$
		 */
		iamRoleArn: string;
	}

	/** Provides the settings needed for conversation logs. */
	export interface ConversationLogsRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: ^arn:[\w\-]+:iam::[\d]{12}:role\/[\w+=,\.@\-]{1,64}$
		 */
		iamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateConversationLogsRequestFormGroup() {
		return new FormGroup<ConversationLogsRequestFormProperties>({
			iamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(20)]),
		});

	}

	export interface CreateBotVersionRequest {
		checksum?: string | null;
	}
	export interface CreateBotVersionRequestFormProperties {
		checksum: FormControl<string | null | undefined>,
	}
	export function CreateCreateBotVersionRequestFormGroup() {
		return new FormGroup<CreateBotVersionRequestFormProperties>({
			checksum: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateIntentVersionRequest {
		checksum?: string | null;
	}
	export interface CreateIntentVersionRequestFormProperties {
		checksum: FormControl<string | null | undefined>,
	}
	export function CreateCreateIntentVersionRequestFormGroup() {
		return new FormGroup<CreateIntentVersionRequestFormProperties>({
			checksum: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSlotTypeVersionRequest {
		checksum?: string | null;
	}
	export interface CreateSlotTypeVersionRequestFormProperties {
		checksum: FormControl<string | null | undefined>,
	}
	export function CreateCreateSlotTypeVersionRequestFormGroup() {
		return new FormGroup<CreateSlotTypeVersionRequestFormProperties>({
			checksum: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SlotValueSelectionStrategy { ORIGINAL_VALUE = 0, TOP_RESOLUTION = 1 }

	export interface DeleteBotAliasRequest {
	}
	export interface DeleteBotAliasRequestFormProperties {
	}
	export function CreateDeleteBotAliasRequestFormGroup() {
		return new FormGroup<DeleteBotAliasRequestFormProperties>({
		});

	}

	export interface DeleteBotChannelAssociationRequest {
	}
	export interface DeleteBotChannelAssociationRequestFormProperties {
	}
	export function CreateDeleteBotChannelAssociationRequestFormGroup() {
		return new FormGroup<DeleteBotChannelAssociationRequestFormProperties>({
		});

	}

	export interface DeleteBotRequest {
	}
	export interface DeleteBotRequestFormProperties {
	}
	export function CreateDeleteBotRequestFormGroup() {
		return new FormGroup<DeleteBotRequestFormProperties>({
		});

	}

	export interface DeleteBotVersionRequest {
	}
	export interface DeleteBotVersionRequestFormProperties {
	}
	export function CreateDeleteBotVersionRequestFormGroup() {
		return new FormGroup<DeleteBotVersionRequestFormProperties>({
		});

	}

	export interface DeleteIntentRequest {
	}
	export interface DeleteIntentRequestFormProperties {
	}
	export function CreateDeleteIntentRequestFormGroup() {
		return new FormGroup<DeleteIntentRequestFormProperties>({
		});

	}

	export interface DeleteIntentVersionRequest {
	}
	export interface DeleteIntentVersionRequestFormProperties {
	}
	export function CreateDeleteIntentVersionRequestFormGroup() {
		return new FormGroup<DeleteIntentVersionRequestFormProperties>({
		});

	}

	export interface DeleteSlotTypeRequest {
	}
	export interface DeleteSlotTypeRequestFormProperties {
	}
	export function CreateDeleteSlotTypeRequestFormGroup() {
		return new FormGroup<DeleteSlotTypeRequestFormProperties>({
		});

	}

	export interface DeleteSlotTypeVersionRequest {
	}
	export interface DeleteSlotTypeVersionRequestFormProperties {
	}
	export function CreateDeleteSlotTypeVersionRequestFormGroup() {
		return new FormGroup<DeleteSlotTypeVersionRequestFormProperties>({
		});

	}

	export interface DeleteUtterancesRequest {
	}
	export interface DeleteUtterancesRequestFormProperties {
	}
	export function CreateDeleteUtterancesRequestFormGroup() {
		return new FormGroup<DeleteUtterancesRequestFormProperties>({
		});

	}

	export enum Destination { CLOUDWATCH_LOGS = 0, S3 = 1 }

	export enum ExportStatus { IN_PROGRESS = 0, READY = 1, FAILED = 2 }

	export enum ExportType { ALEXA_SKILLS_KIT = 0, LEX = 1 }

	export interface GetBotAliasRequest {
	}
	export interface GetBotAliasRequestFormProperties {
	}
	export function CreateGetBotAliasRequestFormGroup() {
		return new FormGroup<GetBotAliasRequestFormProperties>({
		});

	}

	export interface GetBotAliasesRequest {
	}
	export interface GetBotAliasesRequestFormProperties {
	}
	export function CreateGetBotAliasesRequestFormGroup() {
		return new FormGroup<GetBotAliasesRequestFormProperties>({
		});

	}

	export interface GetBotChannelAssociationRequest {
	}
	export interface GetBotChannelAssociationRequestFormProperties {
	}
	export function CreateGetBotChannelAssociationRequestFormGroup() {
		return new FormGroup<GetBotChannelAssociationRequestFormProperties>({
		});

	}

	export interface GetBotChannelAssociationsRequest {
	}
	export interface GetBotChannelAssociationsRequestFormProperties {
	}
	export function CreateGetBotChannelAssociationsRequestFormGroup() {
		return new FormGroup<GetBotChannelAssociationsRequestFormProperties>({
		});

	}

	export interface GetBotRequest {
	}
	export interface GetBotRequestFormProperties {
	}
	export function CreateGetBotRequestFormGroup() {
		return new FormGroup<GetBotRequestFormProperties>({
		});

	}

	export interface GetBotVersionsRequest {
	}
	export interface GetBotVersionsRequestFormProperties {
	}
	export function CreateGetBotVersionsRequestFormGroup() {
		return new FormGroup<GetBotVersionsRequestFormProperties>({
		});

	}

	export interface GetBotsRequest {
	}
	export interface GetBotsRequestFormProperties {
	}
	export function CreateGetBotsRequestFormGroup() {
		return new FormGroup<GetBotsRequestFormProperties>({
		});

	}

	export interface GetBuiltinIntentRequest {
	}
	export interface GetBuiltinIntentRequestFormProperties {
	}
	export function CreateGetBuiltinIntentRequestFormGroup() {
		return new FormGroup<GetBuiltinIntentRequestFormProperties>({
		});

	}

	export interface GetBuiltinIntentsRequest {
	}
	export interface GetBuiltinIntentsRequestFormProperties {
	}
	export function CreateGetBuiltinIntentsRequestFormGroup() {
		return new FormGroup<GetBuiltinIntentsRequestFormProperties>({
		});

	}

	export interface GetBuiltinSlotTypesRequest {
	}
	export interface GetBuiltinSlotTypesRequestFormProperties {
	}
	export function CreateGetBuiltinSlotTypesRequestFormGroup() {
		return new FormGroup<GetBuiltinSlotTypesRequestFormProperties>({
		});

	}

	export enum ResourceType { BOT = 0, INTENT = 1, SLOT_TYPE = 2 }

	export interface GetExportRequest {
	}
	export interface GetExportRequestFormProperties {
	}
	export function CreateGetExportRequestFormGroup() {
		return new FormGroup<GetExportRequestFormProperties>({
		});

	}

	export interface GetImportRequest {
	}
	export interface GetImportRequestFormProperties {
	}
	export function CreateGetImportRequestFormGroup() {
		return new FormGroup<GetImportRequestFormProperties>({
		});

	}

	export enum MergeStrategy { OVERWRITE_LATEST = 0, FAIL_ON_CONFLICT = 1 }

	export enum ImportStatus { IN_PROGRESS = 0, COMPLETE = 1, FAILED = 2 }

	export interface GetIntentRequest {
	}
	export interface GetIntentRequestFormProperties {
	}
	export function CreateGetIntentRequestFormGroup() {
		return new FormGroup<GetIntentRequestFormProperties>({
		});

	}

	export interface GetIntentVersionsRequest {
	}
	export interface GetIntentVersionsRequestFormProperties {
	}
	export function CreateGetIntentVersionsRequestFormGroup() {
		return new FormGroup<GetIntentVersionsRequestFormProperties>({
		});

	}

	export interface GetIntentsRequest {
	}
	export interface GetIntentsRequestFormProperties {
	}
	export function CreateGetIntentsRequestFormGroup() {
		return new FormGroup<GetIntentsRequestFormProperties>({
		});

	}

	export interface GetSlotTypeRequest {
	}
	export interface GetSlotTypeRequestFormProperties {
	}
	export function CreateGetSlotTypeRequestFormGroup() {
		return new FormGroup<GetSlotTypeRequestFormProperties>({
		});

	}

	export interface GetSlotTypeVersionsRequest {
	}
	export interface GetSlotTypeVersionsRequestFormProperties {
	}
	export function CreateGetSlotTypeVersionsRequestFormGroup() {
		return new FormGroup<GetSlotTypeVersionsRequestFormProperties>({
		});

	}

	export interface GetSlotTypesRequest {
	}
	export interface GetSlotTypesRequestFormProperties {
	}
	export function CreateGetSlotTypesRequestFormGroup() {
		return new FormGroup<GetSlotTypesRequestFormProperties>({
		});

	}

	export enum StatusType { Detected = 0, Missed = 1 }

	export interface GetUtterancesViewRequest {
	}
	export interface GetUtterancesViewRequestFormProperties {
	}
	export function CreateGetUtterancesViewRequestFormGroup() {
		return new FormGroup<GetUtterancesViewRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export enum LogType { AUDIO = 0, TEXT = 1 }

	export enum ObfuscationSetting { NONE = 0, DEFAULT_OBFUSCATION = 1 }

	export enum ProcessBehavior { SAVE = 0, BUILD = 1 }

	export interface PutBotAliasRequest {

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		botVersion: string;
		checksum?: string | null;

		/** Provides the settings needed for conversation logs. */
		conversationLogs?: ConversationLogsRequest;

		/**
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
	}
	export interface PutBotAliasRequestFormProperties {

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		botVersion: FormControl<string | null | undefined>,
		checksum: FormControl<string | null | undefined>,
	}
	export function CreatePutBotAliasRequestFormGroup() {
		return new FormGroup<PutBotAliasRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			botVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			checksum: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutBotRequest {

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;
		intents?: Array<Intent>;

		/** Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>. */
		clarificationPrompt?: Prompt;

		/** A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. */
		abortStatement?: Statement;

		/**
		 * Minimum: 60
		 * Maximum: 86400
		 */
		idleSessionTTLInSeconds?: number | null;
		voiceId?: string | null;
		checksum?: string | null;
		processBehavior?: ProcessBehavior | null;

		/** Required */
		locale: PutBotRequestLocale;

		/** Required */
		childDirected: boolean;
		detectSentiment?: boolean | null;
		createVersion?: boolean | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
	}
	export interface PutBotRequestFormProperties {

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 86400
		 */
		idleSessionTTLInSeconds: FormControl<number | null | undefined>,
		voiceId: FormControl<string | null | undefined>,
		checksum: FormControl<string | null | undefined>,
		processBehavior: FormControl<ProcessBehavior | null | undefined>,

		/** Required */
		locale: FormControl<PutBotRequestLocale | null | undefined>,

		/** Required */
		childDirected: FormControl<boolean | null | undefined>,
		detectSentiment: FormControl<boolean | null | undefined>,
		createVersion: FormControl<boolean | null | undefined>,
	}
	export function CreatePutBotRequestFormGroup() {
		return new FormGroup<PutBotRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			idleSessionTTLInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(86400)]),
			voiceId: new FormControl<string | null | undefined>(undefined),
			checksum: new FormControl<string | null | undefined>(undefined),
			processBehavior: new FormControl<ProcessBehavior | null | undefined>(undefined),
			locale: new FormControl<PutBotRequestLocale | null | undefined>(undefined, [Validators.required]),
			childDirected: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			detectSentiment: new FormControl<boolean | null | undefined>(undefined),
			createVersion: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PutBotRequestLocale { en_US = 0, en_GB = 1, de_DE = 2 }

	export interface PutIntentRequest {

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		slots?: Array<Slot>;

		/**
		 * Minimum items: 0
		 * Maximum items: 1500
		 */
		sampleUtterances?: Array<string>;

		/** Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>. */
		confirmationPrompt?: Prompt;

		/** A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. */
		rejectionStatement?: Statement;

		/** A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks. */
		followUpPrompt?: FollowUpPrompt;

		/** A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. */
		conclusionStatement?: Statement;

		/** Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.. */
		dialogCodeHook?: CodeHook;

		/** <p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul> */
		fulfillmentActivity?: FulfillmentActivity;
		parentIntentSignature?: string | null;
		checksum?: string | null;
		createVersion?: boolean | null;
	}
	export interface PutIntentRequestFormProperties {

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		parentIntentSignature: FormControl<string | null | undefined>,
		checksum: FormControl<string | null | undefined>,
		createVersion: FormControl<boolean | null | undefined>,
	}
	export function CreatePutIntentRequestFormGroup() {
		return new FormGroup<PutIntentRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			parentIntentSignature: new FormControl<string | null | undefined>(undefined),
			checksum: new FormControl<string | null | undefined>(undefined),
			createVersion: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutSlotTypeRequest {

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10000
		 */
		enumerationValues?: Array<EnumerationValue>;
		checksum?: string | null;
		valueSelectionStrategy?: CreateSlotTypeVersionResponseValueSelectionStrategy | null;
		createVersion?: boolean | null;

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^((AMAZON\.)_?|[A-Za-z]_?)+
		 */
		parentSlotTypeSignature?: string | null;

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		slotTypeConfigurations?: Array<SlotTypeConfiguration>;
	}
	export interface PutSlotTypeRequestFormProperties {

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
		checksum: FormControl<string | null | undefined>,
		valueSelectionStrategy: FormControl<CreateSlotTypeVersionResponseValueSelectionStrategy | null | undefined>,
		createVersion: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^((AMAZON\.)_?|[A-Za-z]_?)+
		 */
		parentSlotTypeSignature: FormControl<string | null | undefined>,
	}
	export function CreatePutSlotTypeRequestFormGroup() {
		return new FormGroup<PutSlotTypeRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			checksum: new FormControl<string | null | undefined>(undefined),
			valueSelectionStrategy: new FormControl<CreateSlotTypeVersionResponseValueSelectionStrategy | null | undefined>(undefined),
			createVersion: new FormControl<boolean | null | undefined>(undefined),
			parentSlotTypeSignature: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
		});

	}

	export enum SlotConstraint { Required = 0, Optional = 1 }

	export interface StartImportRequest {

		/** Required */
		payload: string;

		/** Required */
		resourceType: GetExportResponseResourceType;

		/** Required */
		mergeStrategy: GetImportResponseMergeStrategy;

		/**
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
	}
	export interface StartImportRequestFormProperties {

		/** Required */
		payload: FormControl<string | null | undefined>,

		/** Required */
		resourceType: FormControl<GetExportResponseResourceType | null | undefined>,

		/** Required */
		mergeStrategy: FormControl<GetImportResponseMergeStrategy | null | undefined>,
	}
	export function CreateStartImportRequestFormGroup() {
		return new FormGroup<StartImportRequestFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceType: new FormControl<GetExportResponseResourceType | null | undefined>(undefined, [Validators.required]),
			mergeStrategy: new FormControl<GetImportResponseMergeStrategy | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceRequest {

		/**
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a new version of the bot based on the <code>$LATEST</code> version. If the <code>$LATEST</code> version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version. It returns the last created version.</p> <note> <p>You can update only the <code>$LATEST</code> version of the bot. You can't update the numbered versions that you create with the <code>CreateBotVersion</code> operation.</p> </note> <p> When you create the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p> <p> This operation requires permission for the <code>lex:CreateBotVersion</code> action. </p>
		 * Post bots/{name}/versions
		 * @param {string} name The name of the bot that you want to create a new version of. The name is case sensitive. 
		 * @return {void} 
		 */
		CreateBotVersion(name: string, requestBody: CreateBotVersionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'bots/' + (name == null ? '' : encodeURIComponent(name)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new version of an intent based on the <code>$LATEST</code> version of the intent. If the <code>$LATEST</code> version of this intent hasn't changed since you last updated it, Amazon Lex doesn't create a new version. It returns the last version you created.</p> <note> <p>You can update only the <code>$LATEST</code> version of the intent. You can't update the numbered versions that you create with the <code>CreateIntentVersion</code> operation.</p> </note> <p> When you create a version of an intent, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p> <p>This operation requires permissions to perform the <code>lex:CreateIntentVersion</code> action. </p>
		 * Post intents/{name}/versions
		 * @param {string} name The name of the intent that you want to create a new version of. The name is case sensitive. 
		 * @return {void} 
		 */
		CreateIntentVersion(name: string, requestBody: CreateIntentVersionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'intents/' + (name == null ? '' : encodeURIComponent(name)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new version of a slot type based on the <code>$LATEST</code> version of the specified slot type. If the <code>$LATEST</code> version of this resource has not changed since the last version that you created, Amazon Lex doesn't create a new version. It returns the last version that you created. </p> <note> <p>You can update only the <code>$LATEST</code> version of a slot type. You can't update the numbered versions that you create with the <code>CreateSlotTypeVersion</code> operation.</p> </note> <p>When you create a version of a slot type, Amazon Lex sets the version to 1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p> <p>This operation requires permissions for the <code>lex:CreateSlotTypeVersion</code> action.</p>
		 * Post slottypes/{name}/versions
		 * @param {string} name The name of the slot type that you want to create a new version for. The name is case sensitive. 
		 * @return {void} 
		 */
		CreateSlotTypeVersion(name: string, requestBody: CreateSlotTypeVersionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'slottypes/' + (name == null ? '' : encodeURIComponent(name)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes all versions of the bot, including the <code>$LATEST</code> version. To delete a specific version of the bot, use the <a>DeleteBotVersion</a> operation. The <code>DeleteBot</code> operation doesn't immediately remove the bot schema. Instead, it is marked for deletion and removed later.</p> <p>Amazon Lex stores utterances indefinitely for improving the ability of your bot to respond to user inputs. These utterances are not removed when the bot is deleted. To remove the utterances, use the <a>DeleteUtterances</a> operation.</p> <p>If a bot has an alias, you can't delete it. Instead, the <code>DeleteBot</code> operation returns a <code>ResourceInUseException</code> exception that includes a reference to the alias that refers to the bot. To remove the reference to the bot, delete the alias. If you get the same exception again, delete the referring alias until the <code>DeleteBot</code> operation is successful.</p> <p>This operation requires permissions for the <code>lex:DeleteBot</code> action.</p>
		 * Delete bots/{name}
		 * @param {string} name The name of the bot. The name is case sensitive. 
		 * @return {void} 
		 */
		DeleteBot(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'bots/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes an alias for the specified bot. </p> <p>You can't delete an alias that is used in the association between a bot and a messaging channel. If an alias is used in a channel association, the <code>DeleteBot</code> operation returns a <code>ResourceInUseException</code> exception that includes a reference to the channel association that refers to the bot. You can remove the reference to the alias by deleting the channel association. If you get the same exception again, delete the referring association until the <code>DeleteBotAlias</code> operation is successful.</p>
		 * Delete bots/{botName}/aliases/{name}
		 * @param {string} name The name of the alias to delete. The name is case sensitive. 
		 * @param {string} botName The name of the bot that the alias points to.
		 * @return {void} 
		 */
		DeleteBotAlias(name: string, botName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'bots/' + (botName == null ? '' : encodeURIComponent(botName)) + '/aliases/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about an Amazon Lex bot alias. For more information about aliases, see <a>versioning-aliases</a>.</p> <p>This operation requires permissions for the <code>lex:GetBotAlias</code> action.</p>
		 * Get bots/{botName}/aliases/{name}
		 * @param {string} name The name of the bot alias. The name is case sensitive.
		 * @param {string} botName The name of the bot.
		 * @return {GetBotAliasResponse} Success
		 */
		GetBotAlias(name: string, botName: string): Observable<GetBotAliasResponse> {
			return this.http.get<GetBotAliasResponse>(this.baseUri + 'bots/' + (botName == null ? '' : encodeURIComponent(botName)) + '/aliases/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * <p>Creates an alias for the specified version of the bot or replaces an alias for the specified bot. To change the version of the bot that the alias points to, replace the alias. For more information about aliases, see <a>versioning-aliases</a>.</p> <p>This operation requires permissions for the <code>lex:PutBotAlias</code> action. </p>
		 * Put bots/{botName}/aliases/{name}
		 * @param {string} name The name of the alias. The name is <i>not</i> case sensitive.
		 * @param {string} botName The name of the bot.
		 * @return {PutBotAliasResponse} Success
		 */
		PutBotAlias(name: string, botName: string, requestBody: PutBotAliasPutBody): Observable<PutBotAliasResponse> {
			return this.http.put<PutBotAliasResponse>(this.baseUri + 'bots/' + (botName == null ? '' : encodeURIComponent(botName)) + '/aliases/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the association between an Amazon Lex bot and a messaging platform.</p> <p>This operation requires permission for the <code>lex:DeleteBotChannelAssociation</code> action.</p>
		 * Delete bots/{botName}/aliases/{aliasName}/channels/{name}
		 * @param {string} name The name of the association. The name is case sensitive. 
		 * @param {string} botName The name of the Amazon Lex bot.
		 * @param {string} aliasName An alias that points to the specific version of the Amazon Lex bot to which this association is being made.
		 * @return {void} 
		 */
		DeleteBotChannelAssociation(name: string, botName: string, aliasName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'bots/' + (botName == null ? '' : encodeURIComponent(botName)) + '/aliases/' + (aliasName == null ? '' : encodeURIComponent(aliasName)) + '/channels/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns information about the association between an Amazon Lex bot and a messaging platform.</p> <p>This operation requires permissions for the <code>lex:GetBotChannelAssociation</code> action.</p>
		 * Get bots/{botName}/aliases/{aliasName}/channels/{name}
		 * @param {string} name The name of the association between the bot and the channel. The name is case sensitive. 
		 * @param {string} botName The name of the Amazon Lex bot.
		 * @param {string} aliasName An alias pointing to the specific version of the Amazon Lex bot to which this association is being made.
		 * @return {GetBotChannelAssociationResponse} Success
		 */
		GetBotChannelAssociation(name: string, botName: string, aliasName: string): Observable<GetBotChannelAssociationResponse> {
			return this.http.get<GetBotChannelAssociationResponse>(this.baseUri + 'bots/' + (botName == null ? '' : encodeURIComponent(botName)) + '/aliases/' + (aliasName == null ? '' : encodeURIComponent(aliasName)) + '/channels/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * <p>Deletes a specific version of a bot. To delete all versions of a bot, use the <a>DeleteBot</a> operation. </p> <p>This operation requires permissions for the <code>lex:DeleteBotVersion</code> action.</p>
		 * Delete bots/{name}/versions/{version}
		 * @param {string} name The name of the bot.
		 * @param {string} version The version of the bot to delete. You cannot delete the <code>$LATEST</code> version of the bot. To delete the <code>$LATEST</code> version, use the <a>DeleteBot</a> operation.
		 * @return {void} 
		 */
		DeleteBotVersion(name: string, version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'bots/' + (name == null ? '' : encodeURIComponent(name)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes all versions of the intent, including the <code>$LATEST</code> version. To delete a specific version of the intent, use the <a>DeleteIntentVersion</a> operation.</p> <p> You can delete a version of an intent only if it is not referenced. To delete an intent that is referred to in one or more bots (see <a>how-it-works</a>), you must remove those references first. </p> <note> <p> If you get the <code>ResourceInUseException</code> exception, it provides an example reference that shows where the intent is referenced. To remove the reference to the intent, either update the bot or delete it. If you get the same exception when you attempt to delete the intent again, repeat until the intent has no references and the call to <code>DeleteIntent</code> is successful. </p> </note> <p> This operation requires permission for the <code>lex:DeleteIntent</code> action. </p>
		 * Delete intents/{name}
		 * @param {string} name The name of the intent. The name is case sensitive. 
		 * @return {void} 
		 */
		DeleteIntent(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'intents/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a specific version of an intent. To delete all versions of a intent, use the <a>DeleteIntent</a> operation. </p> <p>This operation requires permissions for the <code>lex:DeleteIntentVersion</code> action.</p>
		 * Delete intents/{name}/versions/{version}
		 * @param {string} name The name of the intent.
		 * @param {string} version The version of the intent to delete. You cannot delete the <code>$LATEST</code> version of the intent. To delete the <code>$LATEST</code> version, use the <a>DeleteIntent</a> operation.
		 * @return {void} 
		 */
		DeleteIntentVersion(name: string, version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'intents/' + (name == null ? '' : encodeURIComponent(name)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p> Returns information about an intent. In addition to the intent name, you must specify the intent version. </p> <p> This operation requires permissions to perform the <code>lex:GetIntent</code> action. </p>
		 * Get intents/{name}/versions/{version}
		 * @param {string} name The name of the intent. The name is case sensitive. 
		 * @param {string} version The version of the intent.
		 * @return {GetIntentResponse} Success
		 */
		GetIntent(name: string, version: string): Observable<GetIntentResponse> {
			return this.http.get<GetIntentResponse>(this.baseUri + 'intents/' + (name == null ? '' : encodeURIComponent(name)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * <p>Deletes all versions of the slot type, including the <code>$LATEST</code> version. To delete a specific version of the slot type, use the <a>DeleteSlotTypeVersion</a> operation.</p> <p> You can delete a version of a slot type only if it is not referenced. To delete a slot type that is referred to in one or more intents, you must remove those references first. </p> <note> <p> If you get the <code>ResourceInUseException</code> exception, the exception provides an example reference that shows the intent where the slot type is referenced. To remove the reference to the slot type, either update the intent or delete it. If you get the same exception when you attempt to delete the slot type again, repeat until the slot type has no references and the <code>DeleteSlotType</code> call is successful. </p> </note> <p>This operation requires permission for the <code>lex:DeleteSlotType</code> action.</p>
		 * Delete slottypes/{name}
		 * @param {string} name The name of the slot type. The name is case sensitive. 
		 * @return {void} 
		 */
		DeleteSlotType(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'slottypes/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes a specific version of a slot type. To delete all versions of a slot type, use the <a>DeleteSlotType</a> operation. </p> <p>This operation requires permissions for the <code>lex:DeleteSlotTypeVersion</code> action.</p>
		 * Delete slottypes/{name}/version/{version}
		 * @param {string} name The name of the slot type.
		 * @param {string} version The version of the slot type to delete. You cannot delete the <code>$LATEST</code> version of the slot type. To delete the <code>$LATEST</code> version, use the <a>DeleteSlotType</a> operation.
		 * @return {void} 
		 */
		DeleteSlotTypeVersion(name: string, version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'slottypes/' + (name == null ? '' : encodeURIComponent(name)) + '/version/' + (version == null ? '' : encodeURIComponent(version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes stored utterances.</p> <p>Amazon Lex stores the utterances that users send to your bot. Utterances are stored for 15 days for use with the <a>GetUtterancesView</a> operation, and then stored indefinitely for use in improving the ability of your bot to respond to user input.</p> <p>Use the <code>DeleteUtterances</code> operation to manually delete stored utterances for a specific user. When you use the <code>DeleteUtterances</code> operation, utterances stored for improving your bot's ability to respond to user input are deleted immediately. Utterances stored for use with the <code>GetUtterancesView</code> operation are deleted after 15 days.</p> <p>This operation requires permissions for the <code>lex:DeleteUtterances</code> action.</p>
		 * Delete bots/{botName}/utterances/{userId}
		 * @param {string} botName The name of the bot that stored the utterances.
		 * @param {string} userId  The unique identifier for the user that made the utterances. This is the user ID that was sent in the <a href="http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html">PostContent</a> or <a href="http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> operation request that contained the utterance.
		 * @return {void} 
		 */
		DeleteUtterances(botName: string, userId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'bots/' + (botName == null ? '' : encodeURIComponent(botName)) + '/utterances/' + (userId == null ? '' : encodeURIComponent(userId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns metadata information for a specific bot. You must provide the bot name and the bot version or alias. </p> <p> This operation requires permissions for the <code>lex:GetBot</code> action. </p>
		 * Get bots/{name}/versions/{versionoralias}
		 * @param {string} name The name of the bot. The name is case sensitive. 
		 * @param {string} versionoralias The version or alias of the bot.
		 * @return {GetBotResponse} Success
		 */
		GetBot(name: string, versionoralias: string): Observable<GetBotResponse> {
			return this.http.get<GetBotResponse>(this.baseUri + 'bots/' + (name == null ? '' : encodeURIComponent(name)) + '/versions/' + (versionoralias == null ? '' : encodeURIComponent(versionoralias)), {});
		}

		/**
		 * <p>Returns a list of aliases for a specified Amazon Lex bot.</p> <p>This operation requires permissions for the <code>lex:GetBotAliases</code> action.</p>
		 * Get bots/{botName}/aliases/
		 * @param {string} botName The name of the bot.
		 * @param {string} nextToken A pagination token for fetching the next page of aliases. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of aliases, specify the pagination token in the next request. 
		 * @param {number} maxResults The maximum number of aliases to return in the response. The default is 50. . 
		 * @param {string} nameContains Substring to match in bot alias names. An alias will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
		 * @return {GetBotAliasesResponse} Success
		 */
		GetBotAliases(botName: string, nextToken: string | null | undefined, maxResults: number | null | undefined, nameContains: string | null | undefined): Observable<GetBotAliasesResponse> {
			return this.http.get<GetBotAliasesResponse>(this.baseUri + 'bots/' + (botName == null ? '' : encodeURIComponent(botName)) + '/aliases/&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&nameContains=' + (nameContains == null ? '' : encodeURIComponent(nameContains)), {});
		}

		/**
		 * <p> Returns a list of all of the channels associated with the specified bot. </p> <p>The <code>GetBotChannelAssociations</code> operation requires permissions for the <code>lex:GetBotChannelAssociations</code> action.</p>
		 * Get bots/{botName}/aliases/{aliasName}/channels/
		 * @param {string} botName The name of the Amazon Lex bot in the association.
		 * @param {string} aliasName An alias pointing to the specific version of the Amazon Lex bot to which this association is being made.
		 * @param {string} nextToken A pagination token for fetching the next page of associations. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of associations, specify the pagination token in the next request. 
		 * @param {number} maxResults The maximum number of associations to return in the response. The default is 50. 
		 * @param {string} nameContains Substring to match in channel association names. An association will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz." To return all bot channel associations, use a hyphen ("-") as the <code>nameContains</code> parameter.
		 * @return {GetBotChannelAssociationsResponse} Success
		 */
		GetBotChannelAssociations(botName: string, aliasName: string, nextToken: string | null | undefined, maxResults: number | null | undefined, nameContains: string | null | undefined): Observable<GetBotChannelAssociationsResponse> {
			return this.http.get<GetBotChannelAssociationsResponse>(this.baseUri + 'bots/' + (botName == null ? '' : encodeURIComponent(botName)) + '/aliases/' + (aliasName == null ? '' : encodeURIComponent(aliasName)) + '/channels/&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&nameContains=' + (nameContains == null ? '' : encodeURIComponent(nameContains)), {});
		}

		/**
		 * <p>Gets information about all of the versions of a bot.</p> <p>The <code>GetBotVersions</code> operation returns a <code>BotMetadata</code> object for each version of a bot. For example, if a bot has three numbered versions, the <code>GetBotVersions</code> operation returns four <code>BotMetadata</code> objects in the response, one for each numbered version and one for the <code>$LATEST</code> version. </p> <p>The <code>GetBotVersions</code> operation always returns at least one version, the <code>$LATEST</code> version.</p> <p>This operation requires permissions for the <code>lex:GetBotVersions</code> action.</p>
		 * Get bots/{name}/versions/
		 * @param {string} name The name of the bot for which versions should be returned.
		 * @param {string} nextToken A pagination token for fetching the next page of bot versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. 
		 * @param {number} maxResults The maximum number of bot versions to return in the response. The default is 10.
		 * @return {GetBotVersionsResponse} Success
		 */
		GetBotVersions(name: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<GetBotVersionsResponse> {
			return this.http.get<GetBotVersionsResponse>(this.baseUri + 'bots/' + (name == null ? '' : encodeURIComponent(name)) + '/versions/&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Returns bot information as follows: </p> <ul> <li> <p>If you provide the <code>nameContains</code> field, the response includes information for the <code>$LATEST</code> version of all bots whose name contains the specified string.</p> </li> <li> <p>If you don't specify the <code>nameContains</code> field, the operation returns information about the <code>$LATEST</code> version of all of your bots.</p> </li> </ul> <p>This operation requires permission for the <code>lex:GetBots</code> action.</p>
		 * Get bots/
		 * @param {string} nextToken A pagination token that fetches the next page of bots. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of bots, specify the pagination token in the next request. 
		 * @param {number} maxResults The maximum number of bots to return in the response that the request will return. The default is 10.
		 * @param {string} nameContains Substring to match in bot names. A bot will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
		 * @return {GetBotsResponse} Success
		 */
		GetBots(nextToken: string | null | undefined, maxResults: number | null | undefined, nameContains: string | null | undefined): Observable<GetBotsResponse> {
			return this.http.get<GetBotsResponse>(this.baseUri + 'bots/?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&nameContains=' + (nameContains == null ? '' : encodeURIComponent(nameContains)), {});
		}

		/**
		 * <p>Returns information about a built-in intent.</p> <p>This operation requires permission for the <code>lex:GetBuiltinIntent</code> action.</p>
		 * Get builtins/intents/{signature}
		 * @param {string} signature The unique identifier for a built-in intent. To find the signature for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills Kit</i>.
		 * @return {GetBuiltinIntentResponse} Success
		 */
		GetBuiltinIntent(signature: string): Observable<GetBuiltinIntentResponse> {
			return this.http.get<GetBuiltinIntentResponse>(this.baseUri + 'builtins/intents/' + (signature == null ? '' : encodeURIComponent(signature)), {});
		}

		/**
		 * <p>Gets a list of built-in intents that meet the specified criteria.</p> <p>This operation requires permission for the <code>lex:GetBuiltinIntents</code> action.</p>
		 * Get builtins/intents/
		 * @param {GetBuiltinIntentsLocale} locale A list of locales that the intent supports.
		 * @param {string} signatureContains Substring to match in built-in intent signatures. An intent will be returned if any part of its signature matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz." To find the signature for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills Kit</i>.
		 * @param {string} nextToken A pagination token that fetches the next page of intents. If this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of intents, use the pagination token in the next request.
		 * @param {number} maxResults The maximum number of intents to return in the response. The default is 10.
		 * @return {GetBuiltinIntentsResponse} Success
		 */
		GetBuiltinIntents(locale: GetBuiltinIntentsLocale | null | undefined, signatureContains: string | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<GetBuiltinIntentsResponse> {
			return this.http.get<GetBuiltinIntentsResponse>(this.baseUri + 'builtins/intents/?locale=' + locale + '&signatureContains=' + (signatureContains == null ? '' : encodeURIComponent(signatureContains)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Gets a list of built-in slot types that meet the specified criteria.</p> <p>For a list of built-in slot types, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference">Slot Type Reference</a> in the <i>Alexa Skills Kit</i>.</p> <p>This operation requires permission for the <code>lex:GetBuiltInSlotTypes</code> action.</p>
		 * Get builtins/slottypes/
		 * @param {GetBuiltinSlotTypesLocale} locale A list of locales that the slot type supports.
		 * @param {string} signatureContains Substring to match in built-in slot type signatures. A slot type will be returned if any part of its signature matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
		 * @param {string} nextToken A pagination token that fetches the next page of slot types. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of slot types, specify the pagination token in the next request.
		 * @param {number} maxResults The maximum number of slot types to return in the response. The default is 10.
		 * @return {GetBuiltinSlotTypesResponse} Success
		 */
		GetBuiltinSlotTypes(locale: GetBuiltinSlotTypesLocale | null | undefined, signatureContains: string | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<GetBuiltinSlotTypesResponse> {
			return this.http.get<GetBuiltinSlotTypesResponse>(this.baseUri + 'builtins/slottypes/?locale=' + locale + '&signatureContains=' + (signatureContains == null ? '' : encodeURIComponent(signatureContains)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Exports the contents of a Amazon Lex resource in a specified format.
		 * Get exports/#name&version&resourceType&exportType
		 * @param {string} name The name of the bot to export.
		 * @param {string} version The version of the bot to export.
		 * @param {GetExportResponseResourceType} resourceType The type of resource to export. 
		 * @param {GetExportResponseExportType} exportType The format of the exported data.
		 * @return {GetExportResponse} Success
		 */
		GetExport(name: string, version: string, resourceType: GetExportResponseResourceType, exportType: GetExportResponseExportType): Observable<GetExportResponse> {
			return this.http.get<GetExportResponse>(this.baseUri + 'exports/#name&version&resourceType&exportType?name=' + (name == null ? '' : encodeURIComponent(name)) + '&version=' + (version == null ? '' : encodeURIComponent(version)) + '&resourceType=' + resourceType + '&exportType=' + exportType, {});
		}

		/**
		 * Gets information about an import job started with the <code>StartImport</code> operation.
		 * Get imports/{importId}
		 * @param {string} importId The identifier of the import job information to return.
		 * @return {GetImportResponse} Success
		 */
		GetImport(importId: string): Observable<GetImportResponse> {
			return this.http.get<GetImportResponse>(this.baseUri + 'imports/' + (importId == null ? '' : encodeURIComponent(importId)), {});
		}

		/**
		 * <p>Gets information about all of the versions of an intent.</p> <p>The <code>GetIntentVersions</code> operation returns an <code>IntentMetadata</code> object for each version of an intent. For example, if an intent has three numbered versions, the <code>GetIntentVersions</code> operation returns four <code>IntentMetadata</code> objects in the response, one for each numbered version and one for the <code>$LATEST</code> version. </p> <p>The <code>GetIntentVersions</code> operation always returns at least one version, the <code>$LATEST</code> version.</p> <p>This operation requires permissions for the <code>lex:GetIntentVersions</code> action.</p>
		 * Get intents/{name}/versions/
		 * @param {string} name The name of the intent for which versions should be returned.
		 * @param {string} nextToken A pagination token for fetching the next page of intent versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. 
		 * @param {number} maxResults The maximum number of intent versions to return in the response. The default is 10.
		 * @return {GetIntentVersionsResponse} Success
		 */
		GetIntentVersions(name: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<GetIntentVersionsResponse> {
			return this.http.get<GetIntentVersionsResponse>(this.baseUri + 'intents/' + (name == null ? '' : encodeURIComponent(name)) + '/versions/&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Returns intent information as follows: </p> <ul> <li> <p>If you specify the <code>nameContains</code> field, returns the <code>$LATEST</code> version of all intents that contain the specified string.</p> </li> <li> <p> If you don't specify the <code>nameContains</code> field, returns information about the <code>$LATEST</code> version of all intents. </p> </li> </ul> <p> The operation requires permission for the <code>lex:GetIntents</code> action. </p>
		 * Get intents/
		 * @param {string} nextToken A pagination token that fetches the next page of intents. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of intents, specify the pagination token in the next request. 
		 * @param {number} maxResults The maximum number of intents to return in the response. The default is 10.
		 * @param {string} nameContains Substring to match in intent names. An intent will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
		 * @return {GetIntentsResponse} Success
		 */
		GetIntents(nextToken: string | null | undefined, maxResults: number | null | undefined, nameContains: string | null | undefined): Observable<GetIntentsResponse> {
			return this.http.get<GetIntentsResponse>(this.baseUri + 'intents/?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&nameContains=' + (nameContains == null ? '' : encodeURIComponent(nameContains)), {});
		}

		/**
		 * <p>Returns information about a specific version of a slot type. In addition to specifying the slot type name, you must specify the slot type version.</p> <p>This operation requires permissions for the <code>lex:GetSlotType</code> action.</p>
		 * Get slottypes/{name}/versions/{version}
		 * @param {string} name The name of the slot type. The name is case sensitive. 
		 * @param {string} version The version of the slot type. 
		 * @return {GetSlotTypeResponse} Success
		 */
		GetSlotType(name: string, version: string): Observable<GetSlotTypeResponse> {
			return this.http.get<GetSlotTypeResponse>(this.baseUri + 'slottypes/' + (name == null ? '' : encodeURIComponent(name)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * <p>Gets information about all versions of a slot type.</p> <p>The <code>GetSlotTypeVersions</code> operation returns a <code>SlotTypeMetadata</code> object for each version of a slot type. For example, if a slot type has three numbered versions, the <code>GetSlotTypeVersions</code> operation returns four <code>SlotTypeMetadata</code> objects in the response, one for each numbered version and one for the <code>$LATEST</code> version. </p> <p>The <code>GetSlotTypeVersions</code> operation always returns at least one version, the <code>$LATEST</code> version.</p> <p>This operation requires permissions for the <code>lex:GetSlotTypeVersions</code> action.</p>
		 * Get slottypes/{name}/versions/
		 * @param {string} name The name of the slot type for which versions should be returned.
		 * @param {string} nextToken A pagination token for fetching the next page of slot type versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request. 
		 * @param {number} maxResults The maximum number of slot type versions to return in the response. The default is 10.
		 * @return {GetSlotTypeVersionsResponse} Success
		 */
		GetSlotTypeVersions(name: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<GetSlotTypeVersionsResponse> {
			return this.http.get<GetSlotTypeVersionsResponse>(this.baseUri + 'slottypes/' + (name == null ? '' : encodeURIComponent(name)) + '/versions/&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Returns slot type information as follows: </p> <ul> <li> <p>If you specify the <code>nameContains</code> field, returns the <code>$LATEST</code> version of all slot types that contain the specified string.</p> </li> <li> <p> If you don't specify the <code>nameContains</code> field, returns information about the <code>$LATEST</code> version of all slot types. </p> </li> </ul> <p> The operation requires permission for the <code>lex:GetSlotTypes</code> action. </p>
		 * Get slottypes/
		 * @param {string} nextToken A pagination token that fetches the next page of slot types. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch next page of slot types, specify the pagination token in the next request.
		 * @param {number} maxResults The maximum number of slot types to return in the response. The default is 10.
		 * @param {string} nameContains Substring to match in slot type names. A slot type will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
		 * @return {GetSlotTypesResponse} Success
		 */
		GetSlotTypes(nextToken: string | null | undefined, maxResults: number | null | undefined, nameContains: string | null | undefined): Observable<GetSlotTypesResponse> {
			return this.http.get<GetSlotTypesResponse>(this.baseUri + 'slottypes/?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&nameContains=' + (nameContains == null ? '' : encodeURIComponent(nameContains)), {});
		}

		/**
		 * <p>Use the <code>GetUtterancesView</code> operation to get information about the utterances that your users have made to your bot. You can use this list to tune the utterances that your bot responds to.</p> <p>For example, say that you have created a bot to order flowers. After your users have used your bot for a while, use the <code>GetUtterancesView</code> operation to see the requests that they have made and whether they have been successful. You might find that the utterance "I want flowers" is not being recognized. You could add this utterance to the <code>OrderFlowers</code> intent so that your bot recognizes that utterance.</p> <p>After you publish a new version of a bot, you can get information about the old version and the new so that you can compare the performance across the two versions. </p> <p>Utterance statistics are generated once a day. Data is available for the last 15 days. You can request information for up to 5 versions of your bot in each request. Amazon Lex returns the most frequent utterances received by the bot in the last 15 days. The response contains information about a maximum of 100 utterances for each version.</p> <p>If you set <code>childDirected</code> field to true when you created your bot, or if you opted out of participating in improving Amazon Lex, utterances are not available.</p> <p>This operation requires permissions for the <code>lex:GetUtterancesView</code> action.</p>
		 * Get bots/{botname}/utterances#view=aggregation&bot_versions&status_type
		 * @param {string} botname The name of the bot for which utterance information should be returned.
		 * @param {Array<string>} bot_versions An array of bot versions for which utterance information should be returned. The limit is 5 versions per request.
		 * @param {StatusType} status_type To return utterances that were recognized and handled, use <code>Detected</code>. To return utterances that were not recognized, use <code>Missed</code>.
		 * @return {GetUtterancesViewResponse} Success
		 */
		GetUtterancesView(botname: string, bot_versions: Array<string>, status_type: StatusType, view: GetUtterancesViewView): Observable<GetUtterancesViewResponse> {
			return this.http.get<GetUtterancesViewResponse>(this.baseUri + 'bots/' + (botname == null ? '' : encodeURIComponent(botname)) + '/utterances#view=aggregation&bot_versions&status_type&' + bot_versions.map(z => `bot_versions=${encodeURIComponent(z)}`).join('&') + '&status_type=' + status_type + '&view=' + view, {});
		}

		/**
		 * Gets a list of tags associated with the specified resource. Only bots, bot aliases, and bot channels can have tags associated with them.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource to get a list of tags for.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds the specified tags to the specified resource. If a tag key already exists, the existing value is replaced with the new value.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the bot, bot alias, or bot channel to tag.
		 * @return {void} 
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates an Amazon Lex conversational bot or replaces an existing bot. When you create or update a bot you are only required to specify a name, a locale, and whether the bot is directed toward children under age 13. You can use this to add intents later, or to remove intents from an existing bot. When you create a bot with the minimum information, the bot is created or updated but Amazon Lex returns the <code/> response <code>FAILED</code>. You can build the bot after you add one or more intents. For more information about Amazon Lex bots, see <a>how-it-works</a>. </p> <p>If you specify the name of an existing bot, the fields in the request replace the existing values in the <code>$LATEST</code> version of the bot. Amazon Lex removes any fields that you don't provide values for in the request, except for the <code>idleTTLInSeconds</code> and <code>privacySettings</code> fields, which are set to their default values. If you don't specify values for required fields, Amazon Lex throws an exception.</p> <p>This operation requires permissions for the <code>lex:PutBot</code> action. For more information, see <a>security-iam</a>.</p>
		 * Put bots/{name}/versions/$LATEST
		 * @param {string} name The name of the bot. The name is <i>not</i> case sensitive. 
		 * @return {PutBotResponse} Success
		 */
		PutBot(name: string, requestBody: PutBotPutBody): Observable<PutBotResponse> {
			return this.http.put<PutBotResponse>(this.baseUri + 'bots/' + (name == null ? '' : encodeURIComponent(name)) + '/versions/$LATEST', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates an intent or replaces an existing intent.</p> <p>To define the interaction between the user and your bot, you use one or more intents. For a pizza ordering bot, for example, you would create an <code>OrderPizza</code> intent. </p> <p>To create an intent or replace an existing intent, you must provide the following:</p> <ul> <li> <p>Intent name. For example, <code>OrderPizza</code>.</p> </li> <li> <p>Sample utterances. For example, "Can I order a pizza, please." and "I want to order a pizza."</p> </li> <li> <p>Information to be gathered. You specify slot types for the information that your bot will request from the user. You can specify standard slot types, such as a date or a time, or custom slot types such as the size and crust of a pizza.</p> </li> <li> <p>How the intent will be fulfilled. You can provide a Lambda function or configure the intent to return the intent information to the client application. If you use a Lambda function, when all of the intent information is available, Amazon Lex invokes your Lambda function. If you configure your intent to return the intent information to the client application. </p> </li> </ul> <p>You can specify other optional information in the request, such as:</p> <ul> <li> <p>A confirmation prompt to ask the user to confirm an intent. For example, "Shall I order your pizza?"</p> </li> <li> <p>A conclusion statement to send to the user after the intent has been fulfilled. For example, "I placed your pizza order."</p> </li> <li> <p>A follow-up prompt that asks the user for additional activity. For example, asking "Do you want to order a drink with your pizza?"</p> </li> </ul> <p>If you specify an existing intent name to update the intent, Amazon Lex replaces the values in the <code>$LATEST</code> version of the intent with the values in the request. Amazon Lex removes fields that you don't provide in the request. If you don't specify the required fields, Amazon Lex throws an exception. When you update the <code>$LATEST</code> version of an intent, the <code>status</code> field of any bot that uses the <code>$LATEST</code> version of the intent is set to <code>NOT_BUILT</code>.</p> <p>For more information, see <a>how-it-works</a>.</p> <p>This operation requires permissions for the <code>lex:PutIntent</code> action.</p>
		 * Put intents/{name}/versions/$LATEST
		 * @param {string} name <p>The name of the intent. The name is <i>not</i> case sensitive. </p> <p>The name can't match a built-in intent name, or a built-in intent name with "AMAZON." removed. For example, because there is a built-in intent called <code>AMAZON.HelpIntent</code>, you can't create a custom intent called <code>HelpIntent</code>.</p> <p>For a list of built-in intents, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills Kit</i>.</p>
		 * @return {PutIntentResponse} Success
		 */
		PutIntent(name: string, requestBody: PutIntentPutBody): Observable<PutIntentResponse> {
			return this.http.put<PutIntentResponse>(this.baseUri + 'intents/' + (name == null ? '' : encodeURIComponent(name)) + '/versions/$LATEST', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a custom slot type or replaces an existing custom slot type.</p> <p>To create a custom slot type, specify a name for the slot type and a set of enumeration values, which are the values that a slot of this type can assume. For more information, see <a>how-it-works</a>.</p> <p>If you specify the name of an existing slot type, the fields in the request replace the existing values in the <code>$LATEST</code> version of the slot type. Amazon Lex removes the fields that you don't provide in the request. If you don't specify required fields, Amazon Lex throws an exception. When you update the <code>$LATEST</code> version of a slot type, if a bot uses the <code>$LATEST</code> version of an intent that contains the slot type, the bot's <code>status</code> field is set to <code>NOT_BUILT</code>.</p> <p>This operation requires permissions for the <code>lex:PutSlotType</code> action.</p>
		 * Put slottypes/{name}/versions/$LATEST
		 * @param {string} name <p>The name of the slot type. The name is <i>not</i> case sensitive. </p> <p>The name can't match a built-in slot type name, or a built-in slot type name with "AMAZON." removed. For example, because there is a built-in slot type called <code>AMAZON.DATE</code>, you can't create a custom slot type called <code>DATE</code>.</p> <p>For a list of built-in slot types, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference">Slot Type Reference</a> in the <i>Alexa Skills Kit</i>.</p>
		 * @return {PutSlotTypeResponse} Success
		 */
		PutSlotType(name: string, requestBody: PutSlotTypePutBody): Observable<PutSlotTypeResponse> {
			return this.http.put<PutSlotTypeResponse>(this.baseUri + 'slottypes/' + (name == null ? '' : encodeURIComponent(name)) + '/versions/$LATEST', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a job to import a resource to Amazon Lex.
		 * Post imports/
		 * @return {void} 
		 */
		StartImport(requestBody: StartImportPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'imports/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes tags from a bot, bot alias or bot channel.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource to remove the tags from.
		 * @param {Array<string>} tagKeys A list of tag keys to remove from the resource. If a tag key does not exist on the resource, it is ignored.
		 * @return {void} 
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateBotVersionPostBody {

		/** Identifies a specific revision of the <code>$LATEST</code> version of the bot. If you specify a checksum and the <code>$LATEST</code> version of the bot has a different checksum, a <code>PreconditionFailedException</code> exception is returned and Amazon Lex doesn't publish a new version. If you don't specify a checksum, Amazon Lex publishes the <code>$LATEST</code> version. */
		checksum?: string | null;
	}
	export interface CreateBotVersionPostBodyFormProperties {

		/** Identifies a specific revision of the <code>$LATEST</code> version of the bot. If you specify a checksum and the <code>$LATEST</code> version of the bot has a different checksum, a <code>PreconditionFailedException</code> exception is returned and Amazon Lex doesn't publish a new version. If you don't specify a checksum, Amazon Lex publishes the <code>$LATEST</code> version. */
		checksum: FormControl<string | null | undefined>,
	}
	export function CreateCreateBotVersionPostBodyFormGroup() {
		return new FormGroup<CreateBotVersionPostBodyFormProperties>({
			checksum: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateIntentVersionPostBody {

		/** Checksum of the <code>$LATEST</code> version of the intent that should be used to create the new version. If you specify a checksum and the <code>$LATEST</code> version of the intent has a different checksum, Amazon Lex returns a <code>PreconditionFailedException</code> exception and doesn't publish a new version. If you don't specify a checksum, Amazon Lex publishes the <code>$LATEST</code> version. */
		checksum?: string | null;
	}
	export interface CreateIntentVersionPostBodyFormProperties {

		/** Checksum of the <code>$LATEST</code> version of the intent that should be used to create the new version. If you specify a checksum and the <code>$LATEST</code> version of the intent has a different checksum, Amazon Lex returns a <code>PreconditionFailedException</code> exception and doesn't publish a new version. If you don't specify a checksum, Amazon Lex publishes the <code>$LATEST</code> version. */
		checksum: FormControl<string | null | undefined>,
	}
	export function CreateCreateIntentVersionPostBodyFormGroup() {
		return new FormGroup<CreateIntentVersionPostBodyFormProperties>({
			checksum: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSlotTypeVersionPostBody {

		/** Checksum for the <code>$LATEST</code> version of the slot type that you want to publish. If you specify a checksum and the <code>$LATEST</code> version of the slot type has a different checksum, Amazon Lex returns a <code>PreconditionFailedException</code> exception and doesn't publish the new version. If you don't specify a checksum, Amazon Lex publishes the <code>$LATEST</code> version. */
		checksum?: string | null;
	}
	export interface CreateSlotTypeVersionPostBodyFormProperties {

		/** Checksum for the <code>$LATEST</code> version of the slot type that you want to publish. If you specify a checksum and the <code>$LATEST</code> version of the slot type has a different checksum, Amazon Lex returns a <code>PreconditionFailedException</code> exception and doesn't publish the new version. If you don't specify a checksum, Amazon Lex publishes the <code>$LATEST</code> version. */
		checksum: FormControl<string | null | undefined>,
	}
	export function CreateCreateSlotTypeVersionPostBodyFormGroup() {
		return new FormGroup<CreateSlotTypeVersionPostBodyFormProperties>({
			checksum: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutBotAliasPutBody {

		/**
		 * A description of the alias.
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * The version of the bot.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		botVersion: string;

		/** <p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new bot alias, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a bot alias, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p> */
		checksum?: string | null;

		/** Provides the settings needed for conversation logs. */
		conversationLogs?: PutBotAliasPutBodyConversationLogs;

		/**
		 * A list of tags to add to the bot alias. You can only add tags when you create an alias, you can't use the <code>PutBotAlias</code> operation to update the tags on a bot alias. To update tags, use the <code>TagResource</code> operation.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
	}
	export interface PutBotAliasPutBodyFormProperties {

		/**
		 * A description of the alias.
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The version of the bot.
		 * Required
		 * Max length: 64
		 * Min length: 1
		 * Pattern: \$LATEST|[0-9]+
		 */
		botVersion: FormControl<string | null | undefined>,

		/** <p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new bot alias, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a bot alias, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p> */
		checksum: FormControl<string | null | undefined>,
	}
	export function CreatePutBotAliasPutBodyFormGroup() {
		return new FormGroup<PutBotAliasPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			botVersion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			checksum: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutBotAliasPutBodyConversationLogs {
		logSettings?: Array<LogSettingsRequest>;

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: ^arn:[\w\-]+:iam::[\d]{12}:role\/[\w+=,\.@\-]{1,64}$
		 */
		iamRoleArn?: string | null;
	}
	export interface PutBotAliasPutBodyConversationLogsFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: ^arn:[\w\-]+:iam::[\d]{12}:role\/[\w+=,\.@\-]{1,64}$
		 */
		iamRoleArn: FormControl<string | null | undefined>,
	}
	export function CreatePutBotAliasPutBodyConversationLogsFormGroup() {
		return new FormGroup<PutBotAliasPutBodyConversationLogsFormProperties>({
			iamRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20)]),
		});

	}

	export enum GetBuiltinIntentsLocale { en_US = 0, en_GB = 1, de_DE = 2 }

	export enum GetBuiltinSlotTypesLocale { en_US = 0, en_GB = 1, de_DE = 2 }

	export enum GetUtterancesViewView { aggregation = 0 }

	export interface TagResourcePostBody {

		/**
		 * A list of tag keys to add to the resource. If a tag key already exists, the existing value is replaced with the new value.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
		});

	}

	export interface PutBotPutBody {

		/**
		 * A description of the bot.
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;

		/** An array of <code>Intent</code> objects. Each intent represents a command that a user can express. For example, a pizza ordering bot might support an OrderPizza intent. For more information, see <a>how-it-works</a>. */
		intents?: Array<Intent>;

		/** Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>. */
		clarificationPrompt?: PutBotPutBodyClarificationPrompt;

		/** A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. */
		abortStatement?: PutBotPutBodyAbortStatement;

		/**
		 * <p>The maximum time in seconds that Amazon Lex retains the data gathered in a conversation.</p> <p>A user interaction session remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.</p> <p>For example, suppose that a user chooses the OrderPizza intent, but gets sidetracked halfway through placing an order. If the user doesn't complete the order within the specified time, Amazon Lex discards the slot information that it gathered, and the user must start over.</p> <p>If you don't include the <code>idleSessionTTLInSeconds</code> element in a <code>PutBot</code> operation request, Amazon Lex uses the default value. This is also true if the request replaces an existing bot.</p> <p>The default is 300 seconds (5 minutes).</p>
		 * Minimum: 60
		 * Maximum: 86400
		 */
		idleSessionTTLInSeconds?: number | null;

		/** The Amazon Polly voice ID that you want Amazon Lex to use for voice interactions with the user. The locale configured for the voice must match the locale of the bot. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/voicelist.html">Voices in Amazon Polly</a> in the <i>Amazon Polly Developer Guide</i>. */
		voiceId?: string | null;

		/** <p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new bot, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a bot, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p> */
		checksum?: string | null;

		/** <p>If you set the <code>processBehavior</code> element to <code>BUILD</code>, Amazon Lex builds the bot so that it can be run. If you set the element to <code>SAVE</code> Amazon Lex saves the bot, but doesn't build it. </p> <p>If you don't specify this value, the default value is <code>BUILD</code>.</p> */
		processBehavior?: ProcessBehavior | null;

		/**
		 * <p> Specifies the target locale for the bot. Any intent used in the bot must be compatible with the locale of the bot. </p> <p>The default is <code>en-US</code>.</p>
		 * Required
		 */
		locale: PutBotPutBodyLocale;

		/**
		 * <p>For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying <code>true</code> or <code>false</code> in the <code>childDirected</code> field. By specifying <code>true</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying <code>false</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is not</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the <code>childDirected</code> field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA.</p> <p>If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the <a href="https://aws.amazon.com/lex/faqs#data-security">Amazon Lex FAQ.</a> </p>
		 * Required
		 */
		childDirected: boolean;

		/** When set to <code>true</code> user utterances are sent to Amazon Comprehend for sentiment analysis. If you don't specify <code>detectSentiment</code>, the default is <code>false</code>. */
		detectSentiment?: boolean | null;

		/** When set to <code>true</code> a new numbered version of the bot is created. This is the same as calling the <code>CreateBotVersion</code> operation. If you don't specify <code>createVersion</code>, the default is <code>false</code>. */
		createVersion?: boolean | null;

		/**
		 * A list of tags to add to the bot. You can only add tags when you create a bot, you can't use the <code>PutBot</code> operation to update the tags on a bot. To update tags, use the <code>TagResource</code> operation.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
	}
	export interface PutBotPutBodyFormProperties {

		/**
		 * A description of the bot.
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * <p>The maximum time in seconds that Amazon Lex retains the data gathered in a conversation.</p> <p>A user interaction session remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.</p> <p>For example, suppose that a user chooses the OrderPizza intent, but gets sidetracked halfway through placing an order. If the user doesn't complete the order within the specified time, Amazon Lex discards the slot information that it gathered, and the user must start over.</p> <p>If you don't include the <code>idleSessionTTLInSeconds</code> element in a <code>PutBot</code> operation request, Amazon Lex uses the default value. This is also true if the request replaces an existing bot.</p> <p>The default is 300 seconds (5 minutes).</p>
		 * Minimum: 60
		 * Maximum: 86400
		 */
		idleSessionTTLInSeconds: FormControl<number | null | undefined>,

		/** The Amazon Polly voice ID that you want Amazon Lex to use for voice interactions with the user. The locale configured for the voice must match the locale of the bot. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/voicelist.html">Voices in Amazon Polly</a> in the <i>Amazon Polly Developer Guide</i>. */
		voiceId: FormControl<string | null | undefined>,

		/** <p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new bot, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a bot, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p> */
		checksum: FormControl<string | null | undefined>,

		/** <p>If you set the <code>processBehavior</code> element to <code>BUILD</code>, Amazon Lex builds the bot so that it can be run. If you set the element to <code>SAVE</code> Amazon Lex saves the bot, but doesn't build it. </p> <p>If you don't specify this value, the default value is <code>BUILD</code>.</p> */
		processBehavior: FormControl<ProcessBehavior | null | undefined>,

		/**
		 * <p> Specifies the target locale for the bot. Any intent used in the bot must be compatible with the locale of the bot. </p> <p>The default is <code>en-US</code>.</p>
		 * Required
		 */
		locale: FormControl<PutBotPutBodyLocale | null | undefined>,

		/**
		 * <p>For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying <code>true</code> or <code>false</code> in the <code>childDirected</code> field. By specifying <code>true</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying <code>false</code> in the <code>childDirected</code> field, you confirm that your use of Amazon Lex <b>is not</b> related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the <code>childDirected</code> field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA.</p> <p>If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the <a href="https://aws.amazon.com/lex/faqs#data-security">Amazon Lex FAQ.</a> </p>
		 * Required
		 */
		childDirected: FormControl<boolean | null | undefined>,

		/** When set to <code>true</code> user utterances are sent to Amazon Comprehend for sentiment analysis. If you don't specify <code>detectSentiment</code>, the default is <code>false</code>. */
		detectSentiment: FormControl<boolean | null | undefined>,

		/** When set to <code>true</code> a new numbered version of the bot is created. This is the same as calling the <code>CreateBotVersion</code> operation. If you don't specify <code>createVersion</code>, the default is <code>false</code>. */
		createVersion: FormControl<boolean | null | undefined>,
	}
	export function CreatePutBotPutBodyFormGroup() {
		return new FormGroup<PutBotPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			idleSessionTTLInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(86400)]),
			voiceId: new FormControl<string | null | undefined>(undefined),
			checksum: new FormControl<string | null | undefined>(undefined),
			processBehavior: new FormControl<ProcessBehavior | null | undefined>(undefined),
			locale: new FormControl<PutBotPutBodyLocale | null | undefined>(undefined, [Validators.required]),
			childDirected: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			detectSentiment: new FormControl<boolean | null | undefined>(undefined),
			createVersion: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutBotPutBodyClarificationPrompt {

		/**
		 * Minimum items: 1
		 * Maximum items: 15
		 */
		messages?: Array<Message>;

		/**
		 * Minimum: 1
		 * Maximum: 5
		 */
		maxAttempts?: number | null;

		/**
		 * Max length: 50000
		 * Min length: 1
		 */
		responseCard?: string | null;
	}
	export interface PutBotPutBodyClarificationPromptFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 5
		 */
		maxAttempts: FormControl<number | null | undefined>,

		/**
		 * Max length: 50000
		 * Min length: 1
		 */
		responseCard: FormControl<string | null | undefined>,
	}
	export function CreatePutBotPutBodyClarificationPromptFormGroup() {
		return new FormGroup<PutBotPutBodyClarificationPromptFormProperties>({
			maxAttempts: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5)]),
			responseCard: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50000), Validators.minLength(1)]),
		});

	}

	export interface PutBotPutBodyAbortStatement {

		/**
		 * Minimum items: 1
		 * Maximum items: 15
		 */
		messages?: Array<Message>;

		/**
		 * Max length: 50000
		 * Min length: 1
		 */
		responseCard?: string | null;
	}
	export interface PutBotPutBodyAbortStatementFormProperties {

		/**
		 * Max length: 50000
		 * Min length: 1
		 */
		responseCard: FormControl<string | null | undefined>,
	}
	export function CreatePutBotPutBodyAbortStatementFormGroup() {
		return new FormGroup<PutBotPutBodyAbortStatementFormProperties>({
			responseCard: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50000), Validators.minLength(1)]),
		});

	}

	export enum PutBotPutBodyLocale { en_US = 0, en_GB = 1, de_DE = 2 }

	export interface PutIntentPutBody {

		/**
		 * A description of the intent.
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * An array of intent slots. At runtime, Amazon Lex elicits required slot values from the user using prompts defined in the slots. For more information, see <a>how-it-works</a>.
		 * Minimum items: 0
		 * Maximum items: 100
		 */
		slots?: Array<Slot>;

		/**
		 * <p>An array of utterances (strings) that a user might say to signal the intent. For example, "I want {PizzaSize} pizza", "Order {Quantity} {PizzaSize} pizzas". </p> <p>In each utterance, a slot name is enclosed in curly braces. </p>
		 * Minimum items: 0
		 * Maximum items: 1500
		 */
		sampleUtterances?: Array<string>;

		/** Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>. */
		confirmationPrompt?: PutIntentPutBodyConfirmationPrompt;

		/** A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. */
		rejectionStatement?: PutIntentPutBodyRejectionStatement;

		/** A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks. */
		followUpPrompt?: PutIntentPutBodyFollowUpPrompt;

		/** A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. */
		conclusionStatement?: PutIntentPutBodyConclusionStatement;

		/** Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.. */
		dialogCodeHook?: PutIntentPutBodyDialogCodeHook;

		/** <p> Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application. </p> <p>Consider the following examples:</p> <ul> <li> <p>In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria. </p> </li> <li> <p>In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client. </p> </li> </ul> */
		fulfillmentActivity?: PutIntentPutBodyFulfillmentActivity;

		/** A unique identifier for the built-in intent to base this intent on. To find the signature for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills Kit</i>. */
		parentIntentSignature?: string | null;

		/** <p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new intent, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a intent, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p> */
		checksum?: string | null;

		/** When set to <code>true</code> a new numbered version of the intent is created. This is the same as calling the <code>CreateIntentVersion</code> operation. If you do not specify <code>createVersion</code>, the default is <code>false</code>. */
		createVersion?: boolean | null;
	}
	export interface PutIntentPutBodyFormProperties {

		/**
		 * A description of the intent.
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** A unique identifier for the built-in intent to base this intent on. To find the signature for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills Kit</i>. */
		parentIntentSignature: FormControl<string | null | undefined>,

		/** <p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new intent, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a intent, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p> */
		checksum: FormControl<string | null | undefined>,

		/** When set to <code>true</code> a new numbered version of the intent is created. This is the same as calling the <code>CreateIntentVersion</code> operation. If you do not specify <code>createVersion</code>, the default is <code>false</code>. */
		createVersion: FormControl<boolean | null | undefined>,
	}
	export function CreatePutIntentPutBodyFormGroup() {
		return new FormGroup<PutIntentPutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			parentIntentSignature: new FormControl<string | null | undefined>(undefined),
			checksum: new FormControl<string | null | undefined>(undefined),
			createVersion: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutIntentPutBodyConfirmationPrompt {

		/**
		 * Minimum items: 1
		 * Maximum items: 15
		 */
		messages?: Array<Message>;

		/**
		 * Minimum: 1
		 * Maximum: 5
		 */
		maxAttempts?: number | null;

		/**
		 * Max length: 50000
		 * Min length: 1
		 */
		responseCard?: string | null;
	}
	export interface PutIntentPutBodyConfirmationPromptFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 5
		 */
		maxAttempts: FormControl<number | null | undefined>,

		/**
		 * Max length: 50000
		 * Min length: 1
		 */
		responseCard: FormControl<string | null | undefined>,
	}
	export function CreatePutIntentPutBodyConfirmationPromptFormGroup() {
		return new FormGroup<PutIntentPutBodyConfirmationPromptFormProperties>({
			maxAttempts: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5)]),
			responseCard: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50000), Validators.minLength(1)]),
		});

	}

	export interface PutIntentPutBodyRejectionStatement {

		/**
		 * Minimum items: 1
		 * Maximum items: 15
		 */
		messages?: Array<Message>;

		/**
		 * Max length: 50000
		 * Min length: 1
		 */
		responseCard?: string | null;
	}
	export interface PutIntentPutBodyRejectionStatementFormProperties {

		/**
		 * Max length: 50000
		 * Min length: 1
		 */
		responseCard: FormControl<string | null | undefined>,
	}
	export function CreatePutIntentPutBodyRejectionStatementFormGroup() {
		return new FormGroup<PutIntentPutBodyRejectionStatementFormProperties>({
			responseCard: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50000), Validators.minLength(1)]),
		});

	}

	export interface PutIntentPutBodyFollowUpPrompt {

		/** Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>. */
		prompt?: Prompt;

		/** A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. */
		rejectionStatement?: Statement;
	}
	export interface PutIntentPutBodyFollowUpPromptFormProperties {
	}
	export function CreatePutIntentPutBodyFollowUpPromptFormGroup() {
		return new FormGroup<PutIntentPutBodyFollowUpPromptFormProperties>({
		});

	}

	export interface PutIntentPutBodyConclusionStatement {

		/**
		 * Minimum items: 1
		 * Maximum items: 15
		 */
		messages?: Array<Message>;

		/**
		 * Max length: 50000
		 * Min length: 1
		 */
		responseCard?: string | null;
	}
	export interface PutIntentPutBodyConclusionStatementFormProperties {

		/**
		 * Max length: 50000
		 * Min length: 1
		 */
		responseCard: FormControl<string | null | undefined>,
	}
	export function CreatePutIntentPutBodyConclusionStatementFormGroup() {
		return new FormGroup<PutIntentPutBodyConclusionStatementFormProperties>({
			responseCard: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50000), Validators.minLength(1)]),
		});

	}

	export interface PutIntentPutBodyDialogCodeHook {

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: arn:aws:lambda:[a-z]+-[a-z]+-[0-9]:[0-9]{12}:function:[a-zA-Z0-9-_]+(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})?(:[a-zA-Z0-9-_]+)?
		 */
		uri?: string | null;

		/**
		 * Max length: 5
		 * Min length: 1
		 */
		messageVersion?: string | null;
	}
	export interface PutIntentPutBodyDialogCodeHookFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 20
		 * Pattern: arn:aws:lambda:[a-z]+-[a-z]+-[0-9]:[0-9]{12}:function:[a-zA-Z0-9-_]+(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})?(:[a-zA-Z0-9-_]+)?
		 */
		uri: FormControl<string | null | undefined>,

		/**
		 * Max length: 5
		 * Min length: 1
		 */
		messageVersion: FormControl<string | null | undefined>,
	}
	export function CreatePutIntentPutBodyDialogCodeHookFormGroup() {
		return new FormGroup<PutIntentPutBodyDialogCodeHookFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(20)]),
			messageVersion: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(5), Validators.minLength(1)]),
		});

	}

	export interface PutIntentPutBodyFulfillmentActivity {
		type?: FulfillmentActivityType | null;

		/** Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot.. */
		codeHook?: CodeHook;
	}
	export interface PutIntentPutBodyFulfillmentActivityFormProperties {
		type: FormControl<FulfillmentActivityType | null | undefined>,
	}
	export function CreatePutIntentPutBodyFulfillmentActivityFormGroup() {
		return new FormGroup<PutIntentPutBodyFulfillmentActivityFormProperties>({
			type: new FormControl<FulfillmentActivityType | null | undefined>(undefined),
		});

	}

	export interface PutSlotTypePutBody {

		/**
		 * A description of the slot type.
		 * Max length: 200
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * <p>A list of <code>EnumerationValue</code> objects that defines the values that the slot type can take. Each value can have a list of <code>synonyms</code>, which are additional values that help train the machine learning model about the values that it resolves for a slot. </p> <p>When Amazon Lex resolves a slot value, it generates a resolution list that contains up to five possible values for the slot. If you are using a Lambda function, this resolution list is passed to the function. If you are not using a Lambda function you can choose to return the value that the user entered or the first value in the resolution list as the slot value. The <code>valueSelectionStrategy</code> field indicates the option to use. </p>
		 * Minimum items: 0
		 * Maximum items: 10000
		 */
		enumerationValues?: Array<EnumerationValue>;

		/** <p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new slot type, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a slot type, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p> */
		checksum?: string | null;

		/** <p>Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values:</p> <ul> <li> <p> <code>ORIGINAL_VALUE</code> - Returns the value entered by the user, if the user value is similar to the slot value.</p> </li> <li> <p> <code>TOP_RESOLUTION</code> - If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned.</p> </li> </ul> <p>If you don't specify the <code>valueSelectionStrategy</code>, the default is <code>ORIGINAL_VALUE</code>.</p> */
		valueSelectionStrategy?: CreateSlotTypeVersionResponseValueSelectionStrategy | null;

		/** When set to <code>true</code> a new numbered version of the slot type is created. This is the same as calling the <code>CreateSlotTypeVersion</code> operation. If you do not specify <code>createVersion</code>, the default is <code>false</code>. */
		createVersion?: boolean | null;

		/**
		 * <p>The built-in slot type used as the parent of the slot type. When you define a parent slot type, the new slot type has all of the same configuration as the parent.</p> <p>Only <code>AMAZON.AlphaNumeric</code> is supported.</p>
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^((AMAZON\.)_?|[A-Za-z]_?)+
		 */
		parentSlotTypeSignature?: string | null;

		/**
		 * Configuration information that extends the parent built-in slot type. The configuration is added to the settings for the parent slot type.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		slotTypeConfigurations?: Array<SlotTypeConfiguration>;
	}
	export interface PutSlotTypePutBodyFormProperties {

		/**
		 * A description of the slot type.
		 * Max length: 200
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/** <p>Identifies a specific revision of the <code>$LATEST</code> version.</p> <p>When you create a new slot type, leave the <code>checksum</code> field blank. If you specify a checksum you get a <code>BadRequestException</code> exception.</p> <p>When you want to update a slot type, set the <code>checksum</code> field to the checksum of the most recent revision of the <code>$LATEST</code> version. If you don't specify the <code> checksum</code> field, or if the checksum does not match the <code>$LATEST</code> version, you get a <code>PreconditionFailedException</code> exception.</p> */
		checksum: FormControl<string | null | undefined>,

		/** <p>Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values:</p> <ul> <li> <p> <code>ORIGINAL_VALUE</code> - Returns the value entered by the user, if the user value is similar to the slot value.</p> </li> <li> <p> <code>TOP_RESOLUTION</code> - If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned.</p> </li> </ul> <p>If you don't specify the <code>valueSelectionStrategy</code>, the default is <code>ORIGINAL_VALUE</code>.</p> */
		valueSelectionStrategy: FormControl<CreateSlotTypeVersionResponseValueSelectionStrategy | null | undefined>,

		/** When set to <code>true</code> a new numbered version of the slot type is created. This is the same as calling the <code>CreateSlotTypeVersion</code> operation. If you do not specify <code>createVersion</code>, the default is <code>false</code>. */
		createVersion: FormControl<boolean | null | undefined>,

		/**
		 * <p>The built-in slot type used as the parent of the slot type. When you define a parent slot type, the new slot type has all of the same configuration as the parent.</p> <p>Only <code>AMAZON.AlphaNumeric</code> is supported.</p>
		 * Max length: 100
		 * Min length: 1
		 * Pattern: ^((AMAZON\.)_?|[A-Za-z]_?)+
		 */
		parentSlotTypeSignature: FormControl<string | null | undefined>,
	}
	export function CreatePutSlotTypePutBodyFormGroup() {
		return new FormGroup<PutSlotTypePutBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(200), Validators.minLength(0)]),
			checksum: new FormControl<string | null | undefined>(undefined),
			valueSelectionStrategy: new FormControl<CreateSlotTypeVersionResponseValueSelectionStrategy | null | undefined>(undefined),
			createVersion: new FormControl<boolean | null | undefined>(undefined),
			parentSlotTypeSignature: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100), Validators.minLength(1)]),
		});

	}

	export interface StartImportPostBody {

		/**
		 * A zip archive in binary format. The archive should contain one file, a JSON file containing the resource to import. The resource should match the type specified in the <code>resourceType</code> field.
		 * Required
		 */
		payload: string;

		/**
		 * <p>Specifies the type of resource to export. Each resource also exports any resources that it depends on. </p> <ul> <li> <p>A bot exports dependent intents.</p> </li> <li> <p>An intent exports dependent slot types.</p> </li> </ul>
		 * Required
		 */
		resourceType: GetExportResponseResourceType;

		/**
		 * <p>Specifies the action that the <code>StartImport</code> operation should take when there is an existing resource with the same name.</p> <ul> <li> <p>FAIL_ON_CONFLICT - The import operation is stopped on the first conflict between a resource in the import file and an existing resource. The name of the resource causing the conflict is in the <code>failureReason</code> field of the response to the <code>GetImport</code> operation.</p> <p>OVERWRITE_LATEST - The import operation proceeds even if there is a conflict with an existing resource. The $LASTEST version of the existing resource is overwritten with the data from the import file.</p> </li> </ul>
		 * Required
		 */
		mergeStrategy: GetImportResponseMergeStrategy;

		/**
		 * A list of tags to add to the imported bot. You can only add tags when you import a bot, you can't add tags to an intent or slot type.
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		tags?: Array<Tag>;
	}
	export interface StartImportPostBodyFormProperties {

		/**
		 * A zip archive in binary format. The archive should contain one file, a JSON file containing the resource to import. The resource should match the type specified in the <code>resourceType</code> field.
		 * Required
		 */
		payload: FormControl<string | null | undefined>,

		/**
		 * <p>Specifies the type of resource to export. Each resource also exports any resources that it depends on. </p> <ul> <li> <p>A bot exports dependent intents.</p> </li> <li> <p>An intent exports dependent slot types.</p> </li> </ul>
		 * Required
		 */
		resourceType: FormControl<GetExportResponseResourceType | null | undefined>,

		/**
		 * <p>Specifies the action that the <code>StartImport</code> operation should take when there is an existing resource with the same name.</p> <ul> <li> <p>FAIL_ON_CONFLICT - The import operation is stopped on the first conflict between a resource in the import file and an existing resource. The name of the resource causing the conflict is in the <code>failureReason</code> field of the response to the <code>GetImport</code> operation.</p> <p>OVERWRITE_LATEST - The import operation proceeds even if there is a conflict with an existing resource. The $LASTEST version of the existing resource is overwritten with the data from the import file.</p> </li> </ul>
		 * Required
		 */
		mergeStrategy: FormControl<GetImportResponseMergeStrategy | null | undefined>,
	}
	export function CreateStartImportPostBodyFormGroup() {
		return new FormGroup<StartImportPostBodyFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceType: new FormControl<GetExportResponseResourceType | null | undefined>(undefined, [Validators.required]),
			mergeStrategy: new FormControl<GetImportResponseMergeStrategy | null | undefined>(undefined, [Validators.required]),
		});

	}

}

