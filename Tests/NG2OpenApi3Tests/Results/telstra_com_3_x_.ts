import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Error {

		/**
		 * Unique code of the error
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		code: string;

		/**
		 * The field that caused the error
		 * Max length: 99999
		 * Min length: 1
		 */
		field?: string | null;

		/**
		 * The reason for the error
		 * Required
		 * Max length: 99999
		 * Min length: 1
		 */
		issue: string;

		/**
		 * URI for detailed information related to this error for the developer.
		 * Max length: 99999
		 * Min length: 1
		 */
		link?: string | null;

		/** The location of the field that caused the error. */
		location?: ErrorLocation | null;

		/**
		 * Suggest practical actions for this particular issue.
		 * Required
		 * Max length: 99999
		 * Min length: 1
		 */
		suggested_action: string;

		/**
		 * The value of the field that caused the error
		 * Max length: 99999
		 * Min length: 1
		 */
		value?: string | null;
	}
	export interface ErrorFormProperties {

		/**
		 * Unique code of the error
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * The field that caused the error
		 * Max length: 99999
		 * Min length: 1
		 */
		field: FormControl<string | null | undefined>,

		/**
		 * The reason for the error
		 * Required
		 * Max length: 99999
		 * Min length: 1
		 */
		issue: FormControl<string | null | undefined>,

		/**
		 * URI for detailed information related to this error for the developer.
		 * Max length: 99999
		 * Min length: 1
		 */
		link: FormControl<string | null | undefined>,

		/** The location of the field that caused the error. */
		location: FormControl<ErrorLocation | null | undefined>,

		/**
		 * Suggest practical actions for this particular issue.
		 * Required
		 * Max length: 99999
		 * Min length: 1
		 */
		suggested_action: FormControl<string | null | undefined>,

		/**
		 * The value of the field that caused the error
		 * Max length: 99999
		 * Min length: 1
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			field: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(99999)]),
			issue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(99999)]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(99999)]),
			location: new FormControl<ErrorLocation | null | undefined>(undefined),
			suggested_action: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(99999)]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(99999)]),
		});

	}

	export enum ErrorLocation { body = 'body', path = 'path', query = 'query' }

	export interface Errors {

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		errors?: Array<Error>;
	}
	export interface ErrorsFormProperties {
	}
	export function CreateErrorsFormGroup() {
		return new FormGroup<ErrorsFormProperties>({
		});

	}

	export interface FreeTrialNumbers {

		/**
		 * The recipient number(s) registered to your Free Trial Numbers List. These are the mobile numbers that you can message during the Free Trial.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		freeTrialNumbers: Array<string>;
	}
	export interface FreeTrialNumbersFormProperties {
	}
	export function CreateFreeTrialNumbersFormGroup() {
		return new FormGroup<FreeTrialNumbersFormProperties>({
		});

	}

	export interface MessageGet {

		/**
		 * The time you submitted the message to the queue for sending.
		 * Max length: 24
		 * Min length: 24
		 */
		createTimestamp?: Date | null;

		/** If set to **true**, you will receive a notification to the statusCallbackUrl when your message is delivered (paid feature). */
		deliveryNotification?: boolean | null;

		/**
		 * * **outgoing** – messages sent from your account.
		 * * **incoming** – messages sent to your account.
		 */
		direction?: MessageGetDirection | null;

		/**
		 * This will be either "privateNumber", one of your Virtual Numbers or your senderName.
		 * Max length: 13
		 * Min length: 1
		 */
		from?: string | null;

		/**
		 * The content of the message.
		 * Max length: 1600
		 * Min length: 1
		 */
		messageContent?: string | null;

		/**
		 * Use this UUID with our other endpoints to fetch, update or delete the message.
		 * Max length: 36
		 * Min length: 36
		 */
		messageId?: string | null;

		/**
		 * The multimedia content of the message (MMS only). It will include:
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		multimedia?: Array<MultimediaGet>;

		/**
		 * The priority assigned to the message.
		 * Minimum: 1
		 * Maximum: 3
		 */
		queuePriority?: number | null;

		/**
		 * The time the message was received by the recipient's device.
		 * Max length: 24
		 * Min length: 24
		 */
		receivedTimestamp?: Date | null;

		/**
		 * How many minutes you asked the server to keep trying to send the message.
		 * Minimum: 1
		 * Maximum: 1440
		 */
		retryTimeout?: number | null;

		/**
		 * The time the message is scheduled to send.
		 * Max length: 24
		 * Min length: 10
		 */
		scheduleSend?: Date | null;

		/**
		 * The time the message was sent from the server.
		 * Max length: 24
		 * Min length: 24
		 */
		sentTimestamp?: Date | null;

		/** The status will be either queued, sent, delivered, expired or undeliverable. */
		status?: MessageGetStatus | null;

		/** The URL the API will call when the status of the message changes. */
		statusCallbackUrl?: string | null;

		/**
		 * Any customisable tags assigned to the message.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		tags?: Array<string>;

		/**
		 * The recipient's mobile number.
		 * Max length: 16
		 * Min length: 5
		 */
		to?: string | null;
	}
	export interface MessageGetFormProperties {

		/**
		 * The time you submitted the message to the queue for sending.
		 * Max length: 24
		 * Min length: 24
		 */
		createTimestamp: FormControl<Date | null | undefined>,

		/** If set to **true**, you will receive a notification to the statusCallbackUrl when your message is delivered (paid feature). */
		deliveryNotification: FormControl<boolean | null | undefined>,

		/**
		 * * **outgoing** – messages sent from your account.
		 * * **incoming** – messages sent to your account.
		 */
		direction: FormControl<MessageGetDirection | null | undefined>,

		/**
		 * This will be either "privateNumber", one of your Virtual Numbers or your senderName.
		 * Max length: 13
		 * Min length: 1
		 */
		from: FormControl<string | null | undefined>,

		/**
		 * The content of the message.
		 * Max length: 1600
		 * Min length: 1
		 */
		messageContent: FormControl<string | null | undefined>,

		/**
		 * Use this UUID with our other endpoints to fetch, update or delete the message.
		 * Max length: 36
		 * Min length: 36
		 */
		messageId: FormControl<string | null | undefined>,

		/**
		 * The priority assigned to the message.
		 * Minimum: 1
		 * Maximum: 3
		 */
		queuePriority: FormControl<number | null | undefined>,

		/**
		 * The time the message was received by the recipient's device.
		 * Max length: 24
		 * Min length: 24
		 */
		receivedTimestamp: FormControl<Date | null | undefined>,

		/**
		 * How many minutes you asked the server to keep trying to send the message.
		 * Minimum: 1
		 * Maximum: 1440
		 */
		retryTimeout: FormControl<number | null | undefined>,

		/**
		 * The time the message is scheduled to send.
		 * Max length: 24
		 * Min length: 10
		 */
		scheduleSend: FormControl<Date | null | undefined>,

		/**
		 * The time the message was sent from the server.
		 * Max length: 24
		 * Min length: 24
		 */
		sentTimestamp: FormControl<Date | null | undefined>,

		/** The status will be either queued, sent, delivered, expired or undeliverable. */
		status: FormControl<MessageGetStatus | null | undefined>,

		/** The URL the API will call when the status of the message changes. */
		statusCallbackUrl: FormControl<string | null | undefined>,

		/**
		 * The recipient's mobile number.
		 * Max length: 16
		 * Min length: 5
		 */
		to: FormControl<string | null | undefined>,
	}
	export function CreateMessageGetFormGroup() {
		return new FormGroup<MessageGetFormProperties>({
			createTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.minLength(24), Validators.maxLength(24)]),
			deliveryNotification: new FormControl<boolean | null | undefined>(undefined),
			direction: new FormControl<MessageGetDirection | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(13)]),
			messageContent: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600)]),
			messageId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36)]),
			queuePriority: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(3)]),
			receivedTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.minLength(24), Validators.maxLength(24)]),
			retryTimeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1440)]),
			scheduleSend: new FormControl<Date | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(24)]),
			sentTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.minLength(24), Validators.maxLength(24)]),
			status: new FormControl<MessageGetStatus | null | undefined>(undefined),
			statusCallbackUrl: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(16)]),
		});

	}

	export enum MessageGetDirection { outgoing = 'outgoing', incoming = 'incoming' }

	export interface MultimediaGet {

		/**
		 * The name of the multimedia file.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		fileName: string;

		/**
		 * The type of multimedia content (image, audio or video) followed by the type (e.g. jpeg, png, text).
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		type: string;
	}
	export interface MultimediaGetFormProperties {

		/**
		 * The name of the multimedia file.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		fileName: FormControl<string | null | undefined>,

		/**
		 * The type of multimedia content (image, audio or video) followed by the type (e.g. jpeg, png, text).
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMultimediaGetFormGroup() {
		return new FormGroup<MultimediaGetFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export enum MessageGetStatus { queued = 'queued', sent = 'sent', delivered = 'delivered', expired = 'expired', undeliverable = 'undeliverable' }

	export interface MessageSent {

		/** If set to **true**, you will receive a notification to the statusCallbackUrl when your SMS is delivered (paid feature). */
		deliveryNotification?: boolean | null;

		/**
		 * This will be either "privateNumber", one of your Virtual Numbers or your senderName.
		 * Max length: 13
		 * Min length: 1
		 */
		from?: string | null;

		/**
		 * The content of the message.
		 * Max length: 1600
		 * Min length: 1
		 */
		messageContent?: string | null;

		/** Use this UUID with our other endpoints to fetch, update or delete the message. */
		messageId?: Array<string>;

		/**
		 * The multimedia content of the message (MMS only). It will include:
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		multimedia?: Array<MultimediaGet>;

		/**
		 * How many minutes you asked the server to keep trying to send the message.
		 * Minimum: 1
		 * Maximum: 1440
		 */
		retryTimeout?: number | null;

		/**
		 * The time (in Central Standard Time) the message is scheduled to send.
		 * Max length: 24
		 * Min length: 10
		 */
		scheduleSend?: Date | null;

		/** The status will be either queued, sent, delivered, expired or undeliverable. */
		status?: MessageGetStatus | null;

		/** The URL the API will call when the status of the message changes. */
		statusCallbackUrl?: string | null;

		/**
		 * Any customisable tags assigned to the message.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		tags?: Array<string>;

		/** The recipient's mobile number(s). */
		to?: Array<string>;
	}
	export interface MessageSentFormProperties {

		/** If set to **true**, you will receive a notification to the statusCallbackUrl when your SMS is delivered (paid feature). */
		deliveryNotification: FormControl<boolean | null | undefined>,

		/**
		 * This will be either "privateNumber", one of your Virtual Numbers or your senderName.
		 * Max length: 13
		 * Min length: 1
		 */
		from: FormControl<string | null | undefined>,

		/**
		 * The content of the message.
		 * Max length: 1600
		 * Min length: 1
		 */
		messageContent: FormControl<string | null | undefined>,

		/**
		 * How many minutes you asked the server to keep trying to send the message.
		 * Minimum: 1
		 * Maximum: 1440
		 */
		retryTimeout: FormControl<number | null | undefined>,

		/**
		 * The time (in Central Standard Time) the message is scheduled to send.
		 * Max length: 24
		 * Min length: 10
		 */
		scheduleSend: FormControl<Date | null | undefined>,

		/** The status will be either queued, sent, delivered, expired or undeliverable. */
		status: FormControl<MessageGetStatus | null | undefined>,

		/** The URL the API will call when the status of the message changes. */
		statusCallbackUrl: FormControl<string | null | undefined>,
	}
	export function CreateMessageSentFormGroup() {
		return new FormGroup<MessageSentFormProperties>({
			deliveryNotification: new FormControl<boolean | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(13)]),
			messageContent: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600)]),
			retryTimeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1440)]),
			scheduleSend: new FormControl<Date | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(24)]),
			status: new FormControl<MessageGetStatus | null | undefined>(undefined),
			statusCallbackUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageUpdate {

		/** If set to **true**, you will receive a notification to the statusCallbackUrl when your message is delivered (paid feature). */
		deliveryNotification?: boolean | null;

		/**
		 * This will be either "privateNumber", one of your Virtual Numbers or your senderName.
		 * Max length: 13
		 * Min length: 1
		 */
		from?: string | null;

		/**
		 * The content of the message.
		 * Max length: 1600
		 * Min length: 1
		 */
		messageContent?: string | null;

		/**
		 * Use this UUID with our other endpoints to fetch, update or delete the message.
		 * Max length: 36
		 * Min length: 36
		 */
		messageId?: string | null;

		/**
		 * The multimedia content of the message (MMS only). It will include:
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		multimedia?: Array<MultimediaGet>;

		/**
		 * The priority assigned to the message.
		 * Minimum: 1
		 * Maximum: 3
		 */
		queuePriority?: number | null;

		/**
		 * How many minutes you asked the server to keep trying to send the message.
		 * Minimum: 1
		 * Maximum: 1440
		 */
		retryTimeout?: number | null;

		/**
		 * The time the message is scheduled to send.
		 * Max length: 24
		 * Min length: 10
		 */
		scheduleSend?: Date | null;

		/** The status will be either queued, sent, delivered, expired or undeliverable. */
		status?: MessageGetStatus | null;

		/** The URL the API will call when the status of the message changes. */
		statusCallbackUrl?: string | null;

		/**
		 * Any customisable tags assigned to the message.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		tags?: Array<string>;

		/**
		 * The recipient's mobile number.
		 * Max length: 16
		 * Min length: 5
		 */
		to?: string | null;
	}
	export interface MessageUpdateFormProperties {

		/** If set to **true**, you will receive a notification to the statusCallbackUrl when your message is delivered (paid feature). */
		deliveryNotification: FormControl<boolean | null | undefined>,

		/**
		 * This will be either "privateNumber", one of your Virtual Numbers or your senderName.
		 * Max length: 13
		 * Min length: 1
		 */
		from: FormControl<string | null | undefined>,

		/**
		 * The content of the message.
		 * Max length: 1600
		 * Min length: 1
		 */
		messageContent: FormControl<string | null | undefined>,

		/**
		 * Use this UUID with our other endpoints to fetch, update or delete the message.
		 * Max length: 36
		 * Min length: 36
		 */
		messageId: FormControl<string | null | undefined>,

		/**
		 * The priority assigned to the message.
		 * Minimum: 1
		 * Maximum: 3
		 */
		queuePriority: FormControl<number | null | undefined>,

		/**
		 * How many minutes you asked the server to keep trying to send the message.
		 * Minimum: 1
		 * Maximum: 1440
		 */
		retryTimeout: FormControl<number | null | undefined>,

		/**
		 * The time the message is scheduled to send.
		 * Max length: 24
		 * Min length: 10
		 */
		scheduleSend: FormControl<Date | null | undefined>,

		/** The status will be either queued, sent, delivered, expired or undeliverable. */
		status: FormControl<MessageGetStatus | null | undefined>,

		/** The URL the API will call when the status of the message changes. */
		statusCallbackUrl: FormControl<string | null | undefined>,

		/**
		 * The recipient's mobile number.
		 * Max length: 16
		 * Min length: 5
		 */
		to: FormControl<string | null | undefined>,
	}
	export function CreateMessageUpdateFormGroup() {
		return new FormGroup<MessageUpdateFormProperties>({
			deliveryNotification: new FormControl<boolean | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(13)]),
			messageContent: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600)]),
			messageId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36)]),
			queuePriority: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(3)]),
			retryTimeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1440)]),
			scheduleSend: new FormControl<Date | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(24)]),
			status: new FormControl<MessageGetStatus | null | undefined>(undefined),
			statusCallbackUrl: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(16)]),
		});

	}

	export interface Multimedia {

		/**
		 * The name of the multimedia file.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		fileName: string;

		/**
		 * The base64 encoded content. You can use [this online tool](https://elmah.io/tools/base64-image-encoder/) to encode an image, or [Base64 Guru](https://base64.guru/) to encode a video or audio file.
		 * Required
		 * Max length: 999999
		 * Min length: 1
		 */
		payload: string;

		/**
		 * the type of multimedia content file you're sending (image, audio or video) followed by the file type. Use the format "multimedia type/file type", e.g. "image/PNG" or "audio/MP3". Supported file types:JPEG, BMP, GIF87a, GIF89a, PNG, MP3, WAV, MPEG, MPG, MP4, 3GP and US-ASCII.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		type: string;
	}
	export interface MultimediaFormProperties {

		/**
		 * The name of the multimedia file.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		fileName: FormControl<string | null | undefined>,

		/**
		 * The base64 encoded content. You can use [this online tool](https://elmah.io/tools/base64-image-encoder/) to encode an image, or [Base64 Guru](https://base64.guru/) to encode a video or audio file.
		 * Required
		 * Max length: 999999
		 * Min length: 1
		 */
		payload: FormControl<string | null | undefined>,

		/**
		 * the type of multimedia content file you're sending (image, audio or video) followed by the file type. Use the format "multimedia type/file type", e.g. "image/PNG" or "audio/MP3". Supported file types:JPEG, BMP, GIF87a, GIF89a, PNG, MP3, WAV, MPEG, MPG, MP4, 3GP and US-ASCII.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMultimediaFormGroup() {
		return new FormGroup<MultimediaFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
			payload: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(999999)]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export interface Recipient_optout {

		/**
		 * The date and time we received the optout request.
		 * Max length: 24
		 * Min length: 24
		 */
		createTimestamp?: Date | null;

		/**
		 * The mobile number that sent the optout request.
		 * Max length: 16
		 * Min length: 5
		 */
		optoutNumber?: string | null;
	}
	export interface Recipient_optoutFormProperties {

		/**
		 * The date and time we received the optout request.
		 * Max length: 24
		 * Min length: 24
		 */
		createTimestamp: FormControl<Date | null | undefined>,

		/**
		 * The mobile number that sent the optout request.
		 * Max length: 16
		 * Min length: 5
		 */
		optoutNumber: FormControl<string | null | undefined>,
	}
	export function CreateRecipient_optoutFormGroup() {
		return new FormGroup<Recipient_optoutFormProperties>({
			createTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.minLength(24), Validators.maxLength(24)]),
			optoutNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(16)]),
		});

	}

	export interface Virtual_number {

		/**
		 * The last time the Virtual Number was used to send a message.
		 * Max length: 24
		 * Min length: 24
		 */
		lastUse?: Date | null;

		/** The URL that replies to the Virtual Number will be posted to. */
		replyCallbackUrl?: string | null;

		/**
		 * Any customisable tags assigned to the Virtual Number.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		tags?: Array<string>;

		/**
		 * The Virtual Number assigned to your account.
		 * Max length: 10
		 * Min length: 10
		 */
		virtualNumber?: string | null;
	}
	export interface Virtual_numberFormProperties {

		/**
		 * The last time the Virtual Number was used to send a message.
		 * Max length: 24
		 * Min length: 24
		 */
		lastUse: FormControl<Date | null | undefined>,

		/** The URL that replies to the Virtual Number will be posted to. */
		replyCallbackUrl: FormControl<string | null | undefined>,

		/**
		 * The Virtual Number assigned to your account.
		 * Max length: 10
		 * Min length: 10
		 */
		virtualNumber: FormControl<string | null | undefined>,
	}
	export function CreateVirtual_numberFormGroup() {
		return new FormGroup<Virtual_numberFormProperties>({
			lastUse: new FormControl<Date | null | undefined>(undefined, [Validators.minLength(24), Validators.maxLength(24)]),
			replyCallbackUrl: new FormControl<string | null | undefined>(undefined),
			virtualNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(10)]),
		});

	}

	export interface MessagePost {

		/**
		 * To receive a notification when your SMS has been delivered, set this parameter to **true** and make sure you provide a **statusCallbackUrl** (paid feature).
		 */
		deliveryNotification?: boolean | null;

		/**
		 * When the recipient receives your message, you can choose whether they'll see a privateNumber, virtualNumber or senderName (paid plans only) in the **from** field.
		 * * privateNumber: Use this string to have the message appear on the recipient's device as from "anonymous", "private" or similar.
		 * * 04xxxxxxxx: Use one of the Virtual Numbers associated with your account. You'll also be able to receive SMS replies to this number.
		 * * senderName: Choose a unique alphanumeric string of up to 11 characters (paid feature).
		 * Required
		 * Max length: 13
		 * Min length: 1
		 */
		from: string;

		/**
		 * Use this field to send an SMS. Your text message goes here.
		 * Note: either messageContent or multimedia are required, or you can use both field if you want to send multimedia with text.
		 * Max length: 1600
		 * Min length: 1
		 */
		messageContent?: string | null;

		/**
		 * Use this field to send an MMS. Add your image, video or audio content here.
		 * Note: either messageContent or multimedia are required, or you can use both field if you want to send multimedia with text.
		 * Include a JSON payload with:
		 * type: the type of multimedia content file you're sending (image, audio or video) followed by the file type. Use the format "multimedia type/file type", e.g. "image/PNG" or "audio/MP3". Supported file types: JPEG, BMP, GIF87a, GIF89a, PNG, MP3, WAV, MPEG, MPG, MP4, 3GP and US-ASCII.
		 * fileName: the name of your multimedia file.
		 * payload: the base64 encoded content. You can use [this online tool](https://elmah.io/tools/base64-image-encoder/) to encode an image, or [Base64 Guru](https://base64.guru/) to encode a video or audio file.
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		multimedia?: Array<Multimedia>;

		/**
		 * If the message is queued or unable to reach the recipient's device, tell us how many minutes the network should keep trying. Use an integer between 1 and 1440. If you don't set a value, we'll try for 10 minutes.
		 * Minimum: 1
		 * Maximum: 1440
		 */
		retryTimeout?: number | null;

		/**
		 * Don't want to send the message right away? Tell us what time you want to add it to the queue for sending instead.
		 * Set the time in London Greenwich Mean Time (adjusting for any time difference) and use ISO format, e.g. "2019-08-24T15:39:00Z".
		 * You can schedule a message up to 10 days into the future. If you specify a timestamp outside of this limit, the API will return a FIELD_INVALID error.
		 * Max length: 24
		 * Min length: 10
		 */
		scheduleSend?: Date | null;

		/**
		 * Tell us the URL you want the API to call when the status of your SMS updates.
		 * To receive a status update, this field must be provided and deliveryNotification must be set to **true**.
		 * The status will be either:
		 * * **queued** – the message is in the queue for sending (default).
		 * * **sent** – your message has been sent from the server.
		 * * **expired** – we weren't able to send the message within the **retryTimeout** timeframe.
		 * * **delivered** – the message has successfully reached the recipient's device. Note that we will only be able to return this status if you set **deliveryNotification** to **true** (paid feature).
		 * * **undeliverable** – the delivery of your message failed (paid feature).
		 * Sample callback response:
		 * <pre><code class="language-sh">{
		 * "to":"0476543210",
		 * "from":"0401234567",
		 * "timestamp":"2022-11-10T05:06:42.823Z",
		 * "messageId":"1520b774-46b0-4415-a05f-7bcb1c032c59",
		 * "status":"delivered"
		 * }</code></pre>
		 */
		statusCallbackUrl?: string | null;

		/**
		 * Create your own tags and use them to fetch and sort your messages through our other endpoints. You can assign up to 10 tags per message.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		tags?: Array<string>;

		/**
		 * This is the mobile number you want to send your message to. Write Australian numbers in national format (e.g. 0412345678) and international numbers (paid plans only) in E.164 format (e.g. +441234567890).
		 * Use a string for a single recipient, and an array of string of multiple recipients, e.g. "to": ["0412345678", "+441234567890"]. If you're using the Free Trial, you can include up to 5 recipient numbers in the array. If you're using a paid plan, you can bulk send up to 500 messages at once.
		 * Required
		 */
		to: Array<string>;
	}
	export interface MessagePostFormProperties {

		/**
		 * To receive a notification when your SMS has been delivered, set this parameter to **true** and make sure you provide a **statusCallbackUrl** (paid feature).
		 */
		deliveryNotification: FormControl<boolean | null | undefined>,

		/**
		 * When the recipient receives your message, you can choose whether they'll see a privateNumber, virtualNumber or senderName (paid plans only) in the **from** field.
		 * * privateNumber: Use this string to have the message appear on the recipient's device as from "anonymous", "private" or similar.
		 * * 04xxxxxxxx: Use one of the Virtual Numbers associated with your account. You'll also be able to receive SMS replies to this number.
		 * * senderName: Choose a unique alphanumeric string of up to 11 characters (paid feature).
		 * Required
		 * Max length: 13
		 * Min length: 1
		 */
		from: FormControl<string | null | undefined>,

		/**
		 * Use this field to send an SMS. Your text message goes here.
		 * Note: either messageContent or multimedia are required, or you can use both field if you want to send multimedia with text.
		 * Max length: 1600
		 * Min length: 1
		 */
		messageContent: FormControl<string | null | undefined>,

		/**
		 * If the message is queued or unable to reach the recipient's device, tell us how many minutes the network should keep trying. Use an integer between 1 and 1440. If you don't set a value, we'll try for 10 minutes.
		 * Minimum: 1
		 * Maximum: 1440
		 */
		retryTimeout: FormControl<number | null | undefined>,

		/**
		 * Don't want to send the message right away? Tell us what time you want to add it to the queue for sending instead.
		 * Set the time in London Greenwich Mean Time (adjusting for any time difference) and use ISO format, e.g. "2019-08-24T15:39:00Z".
		 * You can schedule a message up to 10 days into the future. If you specify a timestamp outside of this limit, the API will return a FIELD_INVALID error.
		 * Max length: 24
		 * Min length: 10
		 */
		scheduleSend: FormControl<Date | null | undefined>,

		/**
		 * Tell us the URL you want the API to call when the status of your SMS updates.
		 * To receive a status update, this field must be provided and deliveryNotification must be set to **true**.
		 * The status will be either:
		 * * **queued** – the message is in the queue for sending (default).
		 * * **sent** – your message has been sent from the server.
		 * * **expired** – we weren't able to send the message within the **retryTimeout** timeframe.
		 * * **delivered** – the message has successfully reached the recipient's device. Note that we will only be able to return this status if you set **deliveryNotification** to **true** (paid feature).
		 * * **undeliverable** – the delivery of your message failed (paid feature).
		 * Sample callback response:
		 * <pre><code class="language-sh">{
		 * "to":"0476543210",
		 * "from":"0401234567",
		 * "timestamp":"2022-11-10T05:06:42.823Z",
		 * "messageId":"1520b774-46b0-4415-a05f-7bcb1c032c59",
		 * "status":"delivered"
		 * }</code></pre>
		 */
		statusCallbackUrl: FormControl<string | null | undefined>,
	}
	export function CreateMessagePostFormGroup() {
		return new FormGroup<MessagePostFormProperties>({
			deliveryNotification: new FormControl<boolean | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(13)]),
			messageContent: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600)]),
			retryTimeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1440)]),
			scheduleSend: new FormControl<Date | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(24)]),
			statusCallbackUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessagePut {

		/**
		 * To receive a notification when your SMS has been delivered, set this parameter to **true** and make sure you provide a **statusCallbackUrl** (paid feature).
		 */
		deliveryNotification?: boolean | null;

		/**
		 * When the recipient receives your message, you can choose whether they'll see a privateNumber, virtualNumber or senderName (paid plans only) in the **from** field.
		 * * privateNumber: Use this string to have the message appear on the recipient's device as from "anonymous", "private" or similar.
		 * * 04xxxxxxxx: Use one of the Virtual Numbers associated with your account. You'll also be able to receive SMS replies to this number.
		 * * senderName: Choose a unique alphanumeric string of up to 11 characters (paid feature).
		 * Required
		 * Max length: 13
		 * Min length: 1
		 */
		from: string;

		/**
		 * Use this field to send an SMS. Your text message goes here.
		 * Note: either messageContent or multimedia are required, or you can use both field if you want to send multimedia with text.
		 * Max length: 1600
		 * Min length: 1
		 */
		messageContent?: string | null;

		/**
		 * Use this field to send an MMS. Add your image, video or audio content here.
		 * Note: either messageContent or multimedia are required, or you can use both fields if you want to send multimedia with text.
		 * Include a JSON payload with:
		 * type: the type of multimedia content file you're sending (image, audio or video) followed by the file type. Use the format 'multimedia type/file type', e.g. "image/PNG" or "audio/MP3". Supported file types: JPEG, BMP, GIF87a, GIF89a, PNG, MP3, WAV, MPEG, MPG, MP4, 3GP and US-ASCII.
		 * fileName: the name of your multimedia file.
		 * payload: the base64 encoded content. You can use [this online tool](https://elmah.io/tools/base64-image-encoder/) to encode an image, or [Base64 Guru](https://base64.guru/) to encode a video or audio file.
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		multimedia?: Array<Multimedia>;

		/**
		 * If the message is queued or unable to reach the recipient's device, tell us how many minutes the network should keep trying. Use an integer between 1 and 1440. If you don't set a value, we'll try for 10 minutes.
		 * Minimum: 1
		 * Maximum: 1440
		 */
		retryTimeout?: number | null;

		/**
		 * Don't want to send the message right away? Tell us what time you want to add it to the queue for sending instead.
		 * Set the time in London Greenwich Mean Time (adjusting for any time difference) and use ISO format, e.g. "2019-08-24T15:39:00Z".
		 * You can schedule a message up to 10 days into the future. If you specify a timestamp outside of this limit, the API will return a FIELD_INVALID error.
		 * Max length: 24
		 * Min length: 10
		 */
		scheduleSend?: Date | null;

		/**
		 * Tell us the URL you want the API to call when the status of your SMS updates.
		 * To receive a status update, this field must be provided and deliveryNotification must be set to **true**.
		 * The status will be either:
		 * * **queued** – the message is in the queue for sending (default).
		 * * **sent** – your message has been sent from the server.
		 * * **expired** – we weren't able to send the message within the **retryTimeout** timeframe.
		 * * **delivered** – the message has successfully reached the recipient's device. Note that we will only be able to return this status if you set **deliveryNotification** to **true** (paid feature).
		 * * **undeliverable** – the delivery of your message failed (paid feature).
		 * Sample callback response:
		 * <pre><code class="language-sh">{
		 * "to":"0476543210",
		 * "from":"0401234567",
		 * "timestamp":"2022-11-10T05:06:42.823Z",
		 * "messageId":"1520b774-46b0-4415-a05f-7bcb1c032c59",
		 * "status":"delivered"
		 * }</code></pre>
		 */
		statusCallbackUrl?: string | null;

		/**
		 * Create your own tags and use them to fetch and sort your messages through our other endpoints. You can assign up to 10 tags per message.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		tags?: Array<string>;

		/**
		 * This is the mobile number you want to send your message to. Write Australian numbers in national format (e.g. 0412345678) and international numbers (paid plans only) in E.164 format (e.g. +441234567890).
		 * Use a string for a single recipient, and an array of strings for multiple recipients, e.g. "to": ["0412345678", "+441234567890"]. If you're using the Free Trial, you can include up to 5 recipient numbers in the array. If you're using a paid plan, you can bulk send up to 500 messages at once.
		 * Required
		 * Max length: 16
		 * Min length: 5
		 */
		to: string;
	}
	export interface MessagePutFormProperties {

		/**
		 * To receive a notification when your SMS has been delivered, set this parameter to **true** and make sure you provide a **statusCallbackUrl** (paid feature).
		 */
		deliveryNotification: FormControl<boolean | null | undefined>,

		/**
		 * When the recipient receives your message, you can choose whether they'll see a privateNumber, virtualNumber or senderName (paid plans only) in the **from** field.
		 * * privateNumber: Use this string to have the message appear on the recipient's device as from "anonymous", "private" or similar.
		 * * 04xxxxxxxx: Use one of the Virtual Numbers associated with your account. You'll also be able to receive SMS replies to this number.
		 * * senderName: Choose a unique alphanumeric string of up to 11 characters (paid feature).
		 * Required
		 * Max length: 13
		 * Min length: 1
		 */
		from: FormControl<string | null | undefined>,

		/**
		 * Use this field to send an SMS. Your text message goes here.
		 * Note: either messageContent or multimedia are required, or you can use both field if you want to send multimedia with text.
		 * Max length: 1600
		 * Min length: 1
		 */
		messageContent: FormControl<string | null | undefined>,

		/**
		 * If the message is queued or unable to reach the recipient's device, tell us how many minutes the network should keep trying. Use an integer between 1 and 1440. If you don't set a value, we'll try for 10 minutes.
		 * Minimum: 1
		 * Maximum: 1440
		 */
		retryTimeout: FormControl<number | null | undefined>,

		/**
		 * Don't want to send the message right away? Tell us what time you want to add it to the queue for sending instead.
		 * Set the time in London Greenwich Mean Time (adjusting for any time difference) and use ISO format, e.g. "2019-08-24T15:39:00Z".
		 * You can schedule a message up to 10 days into the future. If you specify a timestamp outside of this limit, the API will return a FIELD_INVALID error.
		 * Max length: 24
		 * Min length: 10
		 */
		scheduleSend: FormControl<Date | null | undefined>,

		/**
		 * Tell us the URL you want the API to call when the status of your SMS updates.
		 * To receive a status update, this field must be provided and deliveryNotification must be set to **true**.
		 * The status will be either:
		 * * **queued** – the message is in the queue for sending (default).
		 * * **sent** – your message has been sent from the server.
		 * * **expired** – we weren't able to send the message within the **retryTimeout** timeframe.
		 * * **delivered** – the message has successfully reached the recipient's device. Note that we will only be able to return this status if you set **deliveryNotification** to **true** (paid feature).
		 * * **undeliverable** – the delivery of your message failed (paid feature).
		 * Sample callback response:
		 * <pre><code class="language-sh">{
		 * "to":"0476543210",
		 * "from":"0401234567",
		 * "timestamp":"2022-11-10T05:06:42.823Z",
		 * "messageId":"1520b774-46b0-4415-a05f-7bcb1c032c59",
		 * "status":"delivered"
		 * }</code></pre>
		 */
		statusCallbackUrl: FormControl<string | null | undefined>,

		/**
		 * This is the mobile number you want to send your message to. Write Australian numbers in national format (e.g. 0412345678) and international numbers (paid plans only) in E.164 format (e.g. +441234567890).
		 * Use a string for a single recipient, and an array of strings for multiple recipients, e.g. "to": ["0412345678", "+441234567890"]. If you're using the Free Trial, you can include up to 5 recipient numbers in the array. If you're using a paid plan, you can bulk send up to 500 messages at once.
		 * Required
		 * Max length: 16
		 * Min length: 5
		 */
		to: FormControl<string | null | undefined>,
	}
	export function CreateMessagePutFormGroup() {
		return new FormGroup<MessagePutFormProperties>({
			deliveryNotification: new FormControl<boolean | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(13)]),
			messageContent: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1600)]),
			retryTimeout: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1440)]),
			scheduleSend: new FormControl<Date | null | undefined>(undefined, [Validators.minLength(10), Validators.maxLength(24)]),
			statusCallbackUrl: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(16)]),
		});

	}

	export interface MessageTags {

		/**
		 * Write the updated list of tag(s) here. You can assign up to 10 tags per message.
		 * Note that if you provide an empty array, any pre-existing tags will be wiped.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		tags: Array<string>;
	}
	export interface MessageTagsFormProperties {
	}
	export function CreateMessageTagsFormGroup() {
		return new FormGroup<MessageTagsFormProperties>({
		});

	}

	export interface NumberPost {

		/**
		 * Tell us the URL that replies to the Virtual Number should be sent to.
		 * Sample callback response:
		 * <pre><code class="language-sh">{
		 * "to":"0476543210",
		 * "from":"0401234567",
		 * "timestamp":"2022-11-10T05:06:42.823Z",
		 * "messageId":"75f263c0-60b5-11ed-8456-71ae4c63550d",
		 * "messageContent":"Hi, example message",
		 * "multimedia": {
		 * "fileName:"image.jpeg"
		 * "type:"image/jpeg"
		 * "payload":"base64 payload"
		 * }
		 * }</code></pre>
		 */
		replyCallbackUrl?: string | null;

		/**
		 * Create your own tags and use them to fetch, sort and report on your Virtual Numbers through our other endpoints. You can assign up to 10 tags per number.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		tags?: Array<string>;
	}
	export interface NumberPostFormProperties {

		/**
		 * Tell us the URL that replies to the Virtual Number should be sent to.
		 * Sample callback response:
		 * <pre><code class="language-sh">{
		 * "to":"0476543210",
		 * "from":"0401234567",
		 * "timestamp":"2022-11-10T05:06:42.823Z",
		 * "messageId":"75f263c0-60b5-11ed-8456-71ae4c63550d",
		 * "messageContent":"Hi, example message",
		 * "multimedia": {
		 * "fileName:"image.jpeg"
		 * "type:"image/jpeg"
		 * "payload":"base64 payload"
		 * }
		 * }</code></pre>
		 */
		replyCallbackUrl: FormControl<string | null | undefined>,
	}
	export function CreateNumberPostFormGroup() {
		return new FormGroup<NumberPostFormProperties>({
			replyCallbackUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NumberPut {

		/**
		 * Tell us the URL that replies to the Virtual Number should be sent to.
		 * Note that if you don't include this field, any pre-existing replyCallbackUrl will be wiped.
		 * Sample callback response:
		 * <pre><code class="language-sh">{
		 * "to":"0476543210",
		 * "from":"0401234567",
		 * "timestamp":"2022-11-10T05:06:42.823Z",
		 * "messageId":"75f263c0-60b5-11ed-8456-71ae4c63550d",
		 * "messageContent":"Hi, example message",
		 * "multimedia": {
		 * "fileName:"image.jpeg"
		 * "type:"image/jpeg"
		 * "payload":"base64 payload"
		 * }
		 * }</code></pre>
		 */
		replyCallbackUrl?: string | null;

		/**
		 * Create your own tags and use them to fetch, sort and report on your Virtual Numbers through our other endpoints. You can assign up to 10 tags per number.
		 * Note that if you don't include this field, any pre-existing tags will be wiped.
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		tags?: Array<string>;
	}
	export interface NumberPutFormProperties {

		/**
		 * Tell us the URL that replies to the Virtual Number should be sent to.
		 * Note that if you don't include this field, any pre-existing replyCallbackUrl will be wiped.
		 * Sample callback response:
		 * <pre><code class="language-sh">{
		 * "to":"0476543210",
		 * "from":"0401234567",
		 * "timestamp":"2022-11-10T05:06:42.823Z",
		 * "messageId":"75f263c0-60b5-11ed-8456-71ae4c63550d",
		 * "messageContent":"Hi, example message",
		 * "multimedia": {
		 * "fileName:"image.jpeg"
		 * "type:"image/jpeg"
		 * "payload":"base64 payload"
		 * }
		 * }</code></pre>
		 */
		replyCallbackUrl: FormControl<string | null | undefined>,
	}
	export function CreateNumberPutFormGroup() {
		return new FormGroup<NumberPutFormProperties>({
			replyCallbackUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Trial_numbers {

		/**
		 * These are the mobile numbers you want to message during your Free Trial. Write Australian numbers in national format (e.g. "0412345678"). Use a string for a single recipient, and an array of strings for multiple recipients, (e.g. ["0412345678", "0487654321"]).
		 * Required
		 */
		freeTrialNumbers: Array<string>;
	}
	export interface Trial_numbersFormProperties {
	}
	export function CreateTrial_numbersFormGroup() {
		return new FormGroup<Trial_numbersFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * get all free trial numbers
		 * Use this endpoint to fetch the Free Trial Number(s) currently assigned to your account. These are the mobile numbers that you can message during the Free Trial.
		 * If you're using a paid plan, there's no limit to the number of recipients that you can message, so you don't need to register Free Trial Numbers.
		 * Get free-trial-numbers
		 * @return {FreeTrialNumbers} A 200 OK response means your request has been successful. Your Free Trial Number(s) will be returned in the response body.
		 */
		GetTrialNumbers(): Observable<FreeTrialNumbers> {
			return this.http.get<FreeTrialNumbers>(this.baseUri + 'free-trial-numbers', {});
		}

		/**
		 * create free trial number list
		 * Your Free Trial Numbers are the 10 recipient mobile numbers that you can message during the Free Trial. The first five numbers you send an SMS/MMS to will automatically be added to your Free Trial Numbers list. After that, you can use this endpoint to register another five. Alternatively, you can use this endpoint to register all 10 numbers.
		 * Use this endpoint to register a Free Trial Number to your account. To test out all the features that the trial has to offer, we recommend registering your own mobile number to your Free Trial Numbers list.
		 * Note that you can only message mobile numbers that have been added to your Free Trial list and once registered, a Free Trial Number cannot be removed or replaced.
		 * Post free-trial-numbers
		 * @return {void} 
		 */
		CreateTrialNumbers(requestBody: Trial_numbers): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'free-trial-numbers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * health check
		 * Use this endpoint to check the operational status of the messaging service. A 200 OK response means the service is up. If you receive a 504 response, the service is temporarily down. Check the [API Live Status page] (https://dev.telstra.com/api/status) to see if there's an active incident.
		 * Get health-check
		 * @return {HealthCheckReturn} A 200 OK response means the messaging service is up.
		 */
		HealthCheck(): Observable<HealthCheckReturn> {
			return this.http.get<HealthCheckReturn>(this.baseUri + 'health-check', {});
		}

		/**
		 * fetch all sent/received messages
		 * Fetch messages that have been sent from/to your account in the last 30 days.
		 * Get messages
		 * @param {number} limit Tell us how many results you want us to return, up to a maximum of 50.
		 * @param {number} offset Use the offset to navigate between the response results. An offset of 0 will display the first page of results, and so on.
		 * @param {MessageGetDirection} direction Filter your messages by direction:
		 * * **outgoing** – messages sent from your account.
		 * * **incoming** – messages sent to your account.
		 * @param {GetMessagesStatus} status Filter your messages by one of the statuses below:
		 * * **queued** – messages queued for sending or still in transit.
		 * * **sent** – messages that have been sent from the server.
		 * * **delivered** – messages successful delivered to the recipient's device. Note that we will only be able to return this status if you set deliveryNotification to **true** (paid feature). 
		 * * **expired** – message that couldn't be sent within the **retryTimeout** timeframe.
		 * @param {string} filter Filter your messages by:
		 * * tag - use one of the tags assigned to your message(s)
		 * * number - either the Virtual Number used to send the message, or the Recipient Number the message was sent to.
		 * @return {GetMessagesReturn} A 200 response means the call has been successful.
		 */
		GetMessages(limit: number | null | undefined, offset: number | null | undefined, direction: MessageGetDirection | null | undefined, status: GetMessagesStatus | null | undefined, filter: string | null | undefined): Observable<GetMessagesReturn> {
			return this.http.get<GetMessagesReturn>(this.baseUri + 'messages?limit=' + limit + '&offset=' + offset + '&direction=' + direction + '&status=' + status + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * send messages
		 * Send an SMS/MMS to a mobile number, or to multiple mobile numbers.
		 * Free Trial users can message to up to 10 unique recipient numbers for free. The first five recipients will be automatically added to your Free Trial Numbers list. Need more? Just use the POST /free-trial-numbers call to add another five.
		 * Post messages
		 * @return {void} 
		 */
		SendMessages(requestBody: MessagePost): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'messages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * delete a message
		 * Use this endpoint to delete a message that's been scheduled for sending, but hasn't yet sent.
		 * Delete messages/{messageId}
		 * @param {string} messageId When you sent the original message, this is the UUID that was returned in the call response. Use this ID to fetch, update or delete a message with the appropriate endpoints.
		 * @return {void} 
		 */
		DeleteMessageById(messageId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'messages/' + (messageId == null ? '' : encodeURIComponent(messageId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * fetch a specific message
		 * Use the **messageId** to fetch a message that's been sent from/to your account within the last 30 days.
		 * Get messages/{messageId}
		 * @param {string} messageId When you sent the original message, this is the UUID that was returned in the response. Use this ID to fetch, update or delete a message with the appropriate endpoints. 
		 * Incoming messages are also assigned a messageId. Use this ID with GET/ messages/{messageId} to fetch the message later.
		 * @return {MessageGet} A 200 response means the call has been successful.
		 */
		GetMessageById(messageId: string): Observable<MessageGet> {
			return this.http.get<MessageGet>(this.baseUri + 'messages/' + (messageId == null ? '' : encodeURIComponent(messageId)), {});
		}

		/**
		 * update message tags
		 * Use the **messageId** to update the tag(s) assigned to a message. You can use this endpoint any time, even after your message has been delivered.
		 * Patch messages/{messageId}
		 * @param {string} messageId When you sent the original message, this is the UUID that was returned in the call response. Use this ID to fetch, update or delete a message with the appropriate endpoints.
		 * @return {void} 
		 */
		UpdateMessageTags(messageId: string, requestBody: MessageTags): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'messages/' + (messageId == null ? '' : encodeURIComponent(messageId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * update a message
		 * Need to update a message that's scheduled for sending? You can change any of the below parameters, as long as the message hasn't been sent yet. This request body will override the original POST/ messages call.
		 * Put messages/{messageId}
		 * @param {string} messageId When you sent the original message, this is the UUID that was returned in the call response. Use this ID to fetch, update or delete a message with the appropriate endpoints.
		 * @return {MessageUpdate} A 200 response means the call has been successful.
		 */
		UpdateMessageById(messageId: string, requestBody: MessagePut): Observable<MessageUpdate> {
			return this.http.put<MessageUpdate>(this.baseUri + 'messages/' + (messageId == null ? '' : encodeURIComponent(messageId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * fetch all reports
		 * Fetch details of all reports recently generated for your account. Use it to check the status of a report, plus fetch the report ID, status, report type and expiry date.
		 * Get reports
		 * @return {any} A 200 OK response means the call has been successful. Details of any report(s) generated for your account will be returned in the response.
		 */
		GetReports(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'reports', { observe: 'response', responseType: 'text' });
		}

		/**
		 * submit a request for a messages report
		 * Request a CSV report of messages (both incoming and outgoing) that have been sent to/from your account within the last three months. You can request details for a specific timeframe, and filter your messages by tags, recipient number or Virtual Number.
		 * A 201 Created means your report has been queued for generation. Make a note of the reportId returned in the response. You'll need this to check the status of your report and fetch your download link with GET reports/{reportId}. If you supplied a reportCallbackUrl in the request we'll also notify it when your report is ready for download.
		 * Once your report is generated, it will be available for download for one week. The expiry date is returned in the response.
		 * Post reports/messages
		 * @return {void} 
		 */
		MessagesReport(requestBody: MessagesReportPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'reports/messages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * fetch a specific report
		 * Fetch a download link for a report generated with POST /reports/{reportId} using the **reportId** returned in the response. Once ready, your report will be available for download for one week.
		 * Get reports/{reportId}
		 * @param {string} reportId Use the reportId returned in the POST /reports/{reportType} response.
		 * @return {GetReportReturn} A 200 OK response means the call has been successful. Your download link (reportUrl) will be returned in the response.
		 */
		GetReport(reportId: string): Observable<GetReportReturn> {
			return this.http.get<GetReportReturn>(this.baseUri + 'reports/' + (reportId == null ? '' : encodeURIComponent(reportId)), {});
		}

		/**
		 * fetch all virtual numbers
		 * Use this endpoint to fetch all Virtual Numbers currently assigned to your account.
		 * Get virtual-numbers
		 * @param {number} limit Tell us how many results you want us to return, up to a maximum of 50.
		 * @param {number} offset Use the offset to navigate between the response results. An offset of 0 will display the first page of results, and so on.
		 * @param {string} filter Filter your Virtual Numbers by tag or by number.
		 * @return {string} A 200 OK response means your request has been successful. Your Virtual Number(s) will be returned in the response body.
		 */
		GetNumbers(limit: number | null | undefined, offset: number | null | undefined, filter: string | null | undefined): Observable<string> {
			return this.http.get(this.baseUri + 'virtual-numbers?limit=' + limit + '&offset=' + offset + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), { responseType: 'text' });
		}

		/**
		 * assign a virtual number
		 * When a recipient receives your message, you can choose whether they'll see a privateNumber, Virtual Number or senderName (paid plans only) in the **from** field. If you want to use a Virtual Number, use this endpoint to assign one. Free Trial users can assign one Virtual Number, and those on a paid plan can assign up to 100.
		 * Virtual Numbers that have not sent a message in 30 days (Free Trial) or sent/received a message in 18 months (paid plans) will be automatically unassigned from your account. You can check the **lastUse** date of your Virtual Number at any time using GET /virtual-numbers/{virtual-number}.
		 * Note that Virtual Numbers used in v2 of the Messaging API cannot be used to send messages in v3. Please assign a new Virtual Number instead.
		 * Post virtual-numbers
		 * @return {void} 
		 */
		AssignNumber(requestBody: NumberPost): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'virtual-numbers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * delete a virtual number
		 * Use **virtual-number** to remove a Virtual Number that's been assigned to your account.
		 * Delete virtual-numbers/{virtual_number}
		 * @param {string} virtual_number Write the Virtual Number here, using national format (e.g. 0412345678).
		 * @return {void} 
		 */
		DeleteNumber(virtual_number: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'virtual-numbers/{virtual_number}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * fetch a virtual number
		 * Fetch the tags, replyCallbackUrl and lastUse date for a Virtual Number.
		 * Get virtual-numbers/{virtual_number}
		 * @param {string} virtual_number Write the Virtual Number here, using national format (e.g. 0412345678).
		 * @return {Virtual_number} A 200 OK response means your request has been successful.
		 */
		GetVirtualNumber(virtual_number: string): Observable<Virtual_number> {
			return this.http.get<Virtual_number>(this.baseUri + 'virtual-numbers/{virtual_number}', {});
		}

		/**
		 * update a virtual number
		 * Use **virtual-number** to update the tags and/or replyCallbackUrl of a Virtual Number.
		 * This request body will override the original POST/ virtual-numbers call.
		 * Put virtual-numbers/{virtual_number}
		 * @param {string} virtual_number Write the Virtual Number here, using national format (e.g. 0412345678).
		 * @return {Virtual_number} A 200 OK response means metadata for the Virtual Number has been successfully updated.
		 */
		UpdateNumber(virtual_number: string, requestBody: NumberPut): Observable<Virtual_number> {
			return this.http.put<Virtual_number>(this.baseUri + 'virtual-numbers/{virtual_number}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get recipient optouts list
		 * Use this endpoint to fetch any mobile number(s) that have opted out of receiving messages from a Virtual Number assigned to your account.
		 * Recipients can opt out at any time by sending a message with industry standard keywords such as STOP, STOPALL, UNSUBSCRIBE, QUIT, END and CANCEL.
		 * Get virtual-numbers/{virtual_number}/optouts
		 * @param {number} limit Tell us how many results you want us to return, up to a maximum of 50.
		 * @param {number} offset Use the offset to navigate between the response results. An offset of 0 will display the first page of results, and so on.
		 * @param {string} virtual_number Write the Virtual Number here, using national format (e.g. 0412345678).
		 * @return {string} Successful Response
		 */
		GetRecipientOptouts(limit: number | null | undefined, offset: number | null | undefined, virtual_number: string): Observable<string> {
			return this.http.get(this.baseUri + 'virtual-numbers/{virtual_number}/optouts?limit=' + limit + '&offset=' + offset, { responseType: 'text' });
		}
	}

	export interface HealthCheckReturn {
		status?: string | null;
	}
	export interface HealthCheckReturnFormProperties {
		status: FormControl<string | null | undefined>,
	}
	export function CreateHealthCheckReturnFormGroup() {
		return new FormGroup<HealthCheckReturnFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetMessagesStatus { queued = 'queued', sent = 'sent', delivered = 'delivered', expired = 'expired' }

	export interface GetMessagesReturn {

		/**
		 * The paginated results of your request. To fetch the next set of results, send another request and provide the succeeding offset value.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		messages?: Array<MessageGet>;
		paging?: GetMessagesReturnPaging;
	}
	export interface GetMessagesReturnFormProperties {
	}
	export function CreateGetMessagesReturnFormGroup() {
		return new FormGroup<GetMessagesReturnFormProperties>({
		});

	}

	export interface GetMessagesReturnPaging {

		/** The last page of results. */
		lastPage?: string | null;

		/** The next page of results. */
		nextPage?: string | null;

		/** The previous page of results. */
		previousPage?: string | null;

		/** The total number of pages. */
		totalCount?: number | null;
	}
	export interface GetMessagesReturnPagingFormProperties {

		/** The last page of results. */
		lastPage: FormControl<string | null | undefined>,

		/** The next page of results. */
		nextPage: FormControl<string | null | undefined>,

		/** The previous page of results. */
		previousPage: FormControl<string | null | undefined>,

		/** The total number of pages. */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateGetMessagesReturnPagingFormGroup() {
		return new FormGroup<GetMessagesReturnPagingFormProperties>({
			lastPage: new FormControl<string | null | undefined>(undefined),
			nextPage: new FormControl<string | null | undefined>(undefined),
			previousPage: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MessagesReportPostBody {

		/**
		 * Type the end date (inclusive) of your reporting period here.
		 * Your endDate must be a date in the past, and less than three months from your startDate. Use ISO format(yyyy-mm-dd).
		 * Required
		 * Max length: 10
		 * Min length: 10
		 */
		endDate: Date;

		/**
		 * Filter your messages report by:
		 * * tag - use one of the tags assigned to your message(s)
		 * * number - either the Virtual Number used to send the message, or the Recipient Number the message was sent to.
		 */
		filter?: string | null;

		/**
		 * Tell us the callbackUrl you want us to notify when your report is ready for download.
		 * Sample callback response:
		 * <pre><code class="language-sh">{
		 * "reportId":"1520b774-46b0-4415-a05f-7bcb1c032c59",
		 * "reportStatus":"completed",
		 * "timestamp":"2022-11-10T05:06:42.823Z"
		 * }</code></pre>
		 */
		reportCallbackUrl?: string | null;

		/**
		 * Set the time period you want to generate a report for by typing the start date (inclusive) here.
		 * Note that we only retain data for three months, so please ensure your startDate is not more than three months old.
		 * Use ISO format(yyyy-mm-dd), e.g. 2019-08-24.
		 * Required
		 * Max length: 10
		 * Min length: 10
		 */
		startDate: Date;
	}
	export interface MessagesReportPostBodyFormProperties {

		/**
		 * Type the end date (inclusive) of your reporting period here.
		 * Your endDate must be a date in the past, and less than three months from your startDate. Use ISO format(yyyy-mm-dd).
		 * Required
		 * Max length: 10
		 * Min length: 10
		 */
		endDate: FormControl<Date | null | undefined>,

		/**
		 * Filter your messages report by:
		 * * tag - use one of the tags assigned to your message(s)
		 * * number - either the Virtual Number used to send the message, or the Recipient Number the message was sent to.
		 */
		filter: FormControl<string | null | undefined>,

		/**
		 * Tell us the callbackUrl you want us to notify when your report is ready for download.
		 * Sample callback response:
		 * <pre><code class="language-sh">{
		 * "reportId":"1520b774-46b0-4415-a05f-7bcb1c032c59",
		 * "reportStatus":"completed",
		 * "timestamp":"2022-11-10T05:06:42.823Z"
		 * }</code></pre>
		 */
		reportCallbackUrl: FormControl<string | null | undefined>,

		/**
		 * Set the time period you want to generate a report for by typing the start date (inclusive) here.
		 * Note that we only retain data for three months, so please ensure your startDate is not more than three months old.
		 * Use ISO format(yyyy-mm-dd), e.g. 2019-08-24.
		 * Required
		 * Max length: 10
		 * Min length: 10
		 */
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateMessagesReportPostBodyFormGroup() {
		return new FormGroup<MessagesReportPostBodyFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
			filter: new FormControl<string | null | undefined>(undefined),
			reportCallbackUrl: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
		});

	}

	export interface GetReportReturn {

		/**
		 * The UUID assigned to your report.
		 * Max length: 36
		 * Min length: 36
		 */
		reportId?: string | null;

		/**
		 * The status of the report. It will be either:
		 * * **queued** – the report is in the queue for generation.
		 * * **completed** – the report is ready for download.
		 * * **failed** – the report failed to generate. Please try again.
		 */
		reportStatus?: string | null;

		/** Use this link to download your CSV file. */
		reportUrl?: string | null;
	}
	export interface GetReportReturnFormProperties {

		/**
		 * The UUID assigned to your report.
		 * Max length: 36
		 * Min length: 36
		 */
		reportId: FormControl<string | null | undefined>,

		/**
		 * The status of the report. It will be either:
		 * * **queued** – the report is in the queue for generation.
		 * * **completed** – the report is ready for download.
		 * * **failed** – the report failed to generate. Please try again.
		 */
		reportStatus: FormControl<string | null | undefined>,

		/** Use this link to download your CSV file. */
		reportUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetReportReturnFormGroup() {
		return new FormGroup<GetReportReturnFormProperties>({
			reportId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(36)]),
			reportStatus: new FormControl<string | null | undefined>(undefined),
			reportUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

}

