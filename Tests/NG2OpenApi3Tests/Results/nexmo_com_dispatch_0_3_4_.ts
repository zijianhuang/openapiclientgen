import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AudioProperty {

		/**
		 * The URL of the audio attachment. `messenger` supports .mp3. `whatsapp` supports .aac, .m4a, .amr, .mp3 and .opus.
		 * Max length: 2000
		 * Min length: 1
		 */
		url?: string | null;
	}
	export interface AudioPropertyFormProperties {

		/**
		 * The URL of the audio attachment. `messenger` supports .mp3. `whatsapp` supports .aac, .m4a, .amr, .mp3 and .opus.
		 * Max length: 2000
		 * Min length: 1
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAudioPropertyFormGroup() {
		return new FormGroup<AudioPropertyFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
		});

	}


	/** The error format is standardized to the 4xx/5xx range with a code and a human readable explanation. */
	export interface Error {

		/** Required */
		detail: string;

		/** Required */
		instance: string;
		invalid_parameters?: ErrorInvalid_parameters;

		/** Required */
		type: string;
	}

	/** The error format is standardized to the 4xx/5xx range with a code and a human readable explanation. */
	export interface ErrorFormProperties {

		/** Required */
		detail: FormControl<string | null | undefined>,

		/** Required */
		instance: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ErrorInvalid_parameters {
		name?: string | null;
		reason?: string | null;
	}
	export interface ErrorInvalid_parametersFormProperties {
		name: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateErrorInvalid_parametersFormGroup() {
		return new FormGroup<ErrorInvalid_parametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute. */
	export interface FailoverProperty {

		/** Set the status the message must reach in the expiry_time before failing over. Options are delivered or read. */
		condition_status?: FailoverPropertyCondition_status | null;

		/**
		 * In seconds. Minimum value is 15 and maximum value is 86,400 seconds (1 day).
		 * Minimum: 15
		 * Maximum: 86400
		 */
		expiry_time?: number | null;
	}

	/** Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute. */
	export interface FailoverPropertyFormProperties {

		/** Set the status the message must reach in the expiry_time before failing over. Options are delivered or read. */
		condition_status: FormControl<FailoverPropertyCondition_status | null | undefined>,

		/**
		 * In seconds. Minimum value is 15 and maximum value is 86,400 seconds (1 day).
		 * Minimum: 15
		 * Maximum: 86400
		 */
		expiry_time: FormControl<number | null | undefined>,
	}
	export function CreateFailoverPropertyFormGroup() {
		return new FormGroup<FailoverPropertyFormProperties>({
			condition_status: new FormControl<FailoverPropertyCondition_status | null | undefined>(undefined),
			expiry_time: new FormControl<number | null | undefined>(undefined, [Validators.min(15), Validators.max(86400)]),
		});

	}

	export enum FailoverPropertyCondition_status { delivered = 0, read = 1 }

	export interface FileProperty {

		/**
		 * Additional text to accompany the image. Supported by WhatsApp and MMS.
		 * Max length: 3000
		 * Min length: 1
		 */
		caption?: string | null;

		/**
		 * The URL of the file attachment. `messenger` supports a wide range of attachments including .zip, .csv and .pdf. `whatsapp` supports .pdf, .doc(x), .ppt(x) and .xls(x).
		 * Max length: 2000
		 * Min length: 1
		 */
		url?: string | null;
	}
	export interface FilePropertyFormProperties {

		/**
		 * Additional text to accompany the image. Supported by WhatsApp and MMS.
		 * Max length: 3000
		 * Min length: 1
		 */
		caption: FormControl<string | null | undefined>,

		/**
		 * The URL of the file attachment. `messenger` supports a wide range of attachments including .zip, .csv and .pdf. `whatsapp` supports .pdf, .doc(x), .ppt(x) and .xls(x).
		 * Max length: 2000
		 * Min length: 1
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFilePropertyFormGroup() {
		return new FormGroup<FilePropertyFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(3000)]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
		});

	}

	export interface FromProperty {

		/**
		 * Your ID for the platform that you are sending from.
		 * **Messenger**: This value should be the `to.id` value you received in the inbound messenger event.
		 * **Viber**: This is your Service Message ID given to you by your Vonage Account Manager. To find out more please visit [vonage.com](https://www.vonage.com/communications-apis/messages/).
		 * **SMS**: **MMS**: or **WhatsApp** This value is not required.
		 * Max length: 50
		 * Min length: 1
		 */
		id?: string | null;

		/**
		 * **SMS**: or **MMS**: The phone number of the message sender in the [E.164](https://en.wikipedia.org/wiki/E.164) format.
		 * **WhatsApp**: This is your WhatsApp Business Number given to you by your Vonage Account Manager. To find out more please visit [vonage.com](https://www.vonage.com/communications-apis/messages/).
		 * **Messenger**: or **Viber**: This value is not required.
		 * Max length: 50
		 * Min length: 1
		 */
		number?: string | null;

		/**
		 * The type of message that you want to send.
		 * Required
		 */
		type: FromPropertyType;
	}
	export interface FromPropertyFormProperties {

		/**
		 * Your ID for the platform that you are sending from.
		 * **Messenger**: This value should be the `to.id` value you received in the inbound messenger event.
		 * **Viber**: This is your Service Message ID given to you by your Vonage Account Manager. To find out more please visit [vonage.com](https://www.vonage.com/communications-apis/messages/).
		 * **SMS**: **MMS**: or **WhatsApp** This value is not required.
		 * Max length: 50
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * **SMS**: or **MMS**: The phone number of the message sender in the [E.164](https://en.wikipedia.org/wiki/E.164) format.
		 * **WhatsApp**: This is your WhatsApp Business Number given to you by your Vonage Account Manager. To find out more please visit [vonage.com](https://www.vonage.com/communications-apis/messages/).
		 * **Messenger**: or **Viber**: This value is not required.
		 * Max length: 50
		 * Min length: 1
		 */
		number: FormControl<string | null | undefined>,

		/**
		 * The type of message that you want to send.
		 * Required
		 */
		type: FormControl<FromPropertyType | null | undefined>,
	}
	export function CreateFromPropertyFormGroup() {
		return new FormGroup<FromPropertyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			type: new FormControl<FromPropertyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FromPropertyType { sms = 0, viber_service_msg = 1, messenger = 2, whatsapp = 3 }

	export interface ImageProperty {

		/**
		 * Additional text to accompany the image. Supported by WhatsApp and MMS.
		 * Max length: 3000
		 * Min length: 1
		 */
		caption?: string | null;

		/**
		 * The URL of the image attachment. `messenger` and `mms` supports .jpg, .jpeg, .png and .gif. `viber_service_msg` supports .jpg .jpeg, and .png. `whatsapp` supports .jpg .jpeg, and .png.
		 * Max length: 2000
		 * Min length: 1
		 */
		url?: string | null;
	}
	export interface ImagePropertyFormProperties {

		/**
		 * Additional text to accompany the image. Supported by WhatsApp and MMS.
		 * Max length: 3000
		 * Min length: 1
		 */
		caption: FormControl<string | null | undefined>,

		/**
		 * The URL of the image attachment. `messenger` and `mms` supports .jpg, .jpeg, .png and .gif. `viber_service_msg` supports .jpg .jpeg, and .png. `whatsapp` supports .jpg .jpeg, and .png.
		 * Max length: 2000
		 * Min length: 1
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateImagePropertyFormGroup() {
		return new FormGroup<ImagePropertyFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(3000)]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
		});

	}

	export interface MessageProperty {

		/** Required */
		content: MessagePropertyContent;
		messenger?: MessagePropertyMessenger;
		viber_service_msg?: MessagePropertyViber_service_msg;
		whatsapp?: MessagePropertyWhatsapp;
	}
	export interface MessagePropertyFormProperties {
	}
	export function CreateMessagePropertyFormGroup() {
		return new FormGroup<MessagePropertyFormProperties>({
		});

	}

	export interface MessagePropertyContent {
		audio?: AudioProperty;
		file?: FileProperty;
		image?: ImageProperty;
		template?: TemplateProperty;

		/**
		 * The text of the message.
		 * **Messenger**: Is limited to 640 characters
		 * **SMS** or **Viber**: Is 1000 characters
		 * **WhatsApp**: is 4096 characters
		 * Max length: 4096
		 * Min length: 1
		 */
		text?: string | null;

		/**
		 * The type of message that you are sending.
		 * **Messenger**: supports `text`, `image`, `audio`, `video` and `file`.
		 * **Viber Business Messages**: supports `image` and `text`.
		 * **WhatsApp**: supports `template`, `text`, `image`, `audio`, `video` and `file`.
		 * **SMS**: supports `text`.
		 * Required
		 */
		type: MessagePropertyContentType;
		video?: VideoProperty;
	}
	export interface MessagePropertyContentFormProperties {

		/**
		 * The text of the message.
		 * **Messenger**: Is limited to 640 characters
		 * **SMS** or **Viber**: Is 1000 characters
		 * **WhatsApp**: is 4096 characters
		 * Max length: 4096
		 * Min length: 1
		 */
		text: FormControl<string | null | undefined>,

		/**
		 * The type of message that you are sending.
		 * **Messenger**: supports `text`, `image`, `audio`, `video` and `file`.
		 * **Viber Business Messages**: supports `image` and `text`.
		 * **WhatsApp**: supports `template`, `text`, `image`, `audio`, `video` and `file`.
		 * **SMS**: supports `text`.
		 * Required
		 */
		type: FormControl<MessagePropertyContentType | null | undefined>,
	}
	export function CreateMessagePropertyContentFormGroup() {
		return new FormGroup<MessagePropertyContentFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096)]),
			type: new FormControl<MessagePropertyContentType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TemplateProperty {

		/** The name of the template. */
		name?: string | null;
		TemplatePropertyParameters?: Array<TemplatePropertyParameters>;
	}
	export interface TemplatePropertyFormProperties {

		/** The name of the template. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTemplatePropertyFormGroup() {
		return new FormGroup<TemplatePropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplatePropertyParameters {

		/** The parameters are an array. The first value being {{1}} in the template. */
		default?: string | null;
	}
	export interface TemplatePropertyParametersFormProperties {

		/** The parameters are an array. The first value being {{1}} in the template. */
		default: FormControl<string | null | undefined>,
	}
	export function CreateTemplatePropertyParametersFormGroup() {
		return new FormGroup<TemplatePropertyParametersFormProperties>({
			default: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MessagePropertyContentType { text = 0, image = 1, audio = 2, video = 3, file = 4, template = 5, custom = 6 }

	export interface VideoProperty {

		/**
		 * The URL of the video attachment.
		 * **messenger** supports .mp4
		 * **whatsapp** supports .mp4 and .3gpp. Note, only H.264 video codec and AAC audio codec is supported.
		 * Max length: 2000
		 * Min length: 1
		 */
		url?: string | null;
	}
	export interface VideoPropertyFormProperties {

		/**
		 * The URL of the video attachment.
		 * **messenger** supports .mp4
		 * **whatsapp** supports .mp4 and .3gpp. Note, only H.264 video codec and AAC audio codec is supported.
		 * Max length: 2000
		 * Min length: 1
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateVideoPropertyFormGroup() {
		return new FormGroup<VideoPropertyFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
		});

	}

	export interface MessagePropertyMessenger {

		/** The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy]( https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger. */
		category?: MessagePropertyMessengerCategory | null;

		/** ‘A full list of the possible tags is available on [developers.facebook.com](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags)' */
		tag?: string | null;
	}
	export interface MessagePropertyMessengerFormProperties {

		/** The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy]( https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger. */
		category: FormControl<MessagePropertyMessengerCategory | null | undefined>,

		/** ‘A full list of the possible tags is available on [developers.facebook.com](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags)' */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateMessagePropertyMessengerFormGroup() {
		return new FormGroup<MessagePropertyMessengerFormProperties>({
			category: new FormControl<MessagePropertyMessengerCategory | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MessagePropertyMessengerCategory { response = 0, update = 1, message_tag = 2 }

	export interface MessagePropertyViber_service_msg {

		/** The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative and a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages. */
		category?: MessagePropertyViber_service_msgCategory | null;

		/**
		 * Only valid for Viber Business Messages. Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message.
		 * Minimum: 30
		 * Maximum: 86400
		 */
		ttl?: number | null;
	}
	export interface MessagePropertyViber_service_msgFormProperties {

		/** The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative and a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages. */
		category: FormControl<MessagePropertyViber_service_msgCategory | null | undefined>,

		/**
		 * Only valid for Viber Business Messages. Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message.
		 * Minimum: 30
		 * Maximum: 86400
		 */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateMessagePropertyViber_service_msgFormGroup() {
		return new FormGroup<MessagePropertyViber_service_msgFormProperties>({
			category: new FormControl<MessagePropertyViber_service_msgCategory | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined, [Validators.min(30), Validators.max(86400)]),
		});

	}

	export enum MessagePropertyViber_service_msgCategory { transaction = 0, promotion = 1 }

	export interface MessagePropertyWhatsapp {

		/** We are using the industry standard, BCP 47, for locales. So in your API call to the /messages API you will need to put “en-GB” and this will refer to the “en_GB” template for WhatsApp. A full list of the possible locales is available on [developers.facebook.com](https://developers.facebook.com/docs/whatsapp/message-templates/creation#translations). */
		locale?: string | null;

		/** Please note that WhatsApp will deprecate `fallback` policy in January 2020. There are two policies that you can specify when sending a Message Template: `deterministic` and `fallback`. `deterministic` — Deliver the Message Template in exactly the language and locale asked for. `fallback` — Deliver the Message Template in the language that matches users language/locale setting on device. If one can not be found, deliver using the specified fallback language. */
		policy?: MessagePropertyWhatsappPolicy | null;
	}
	export interface MessagePropertyWhatsappFormProperties {

		/** We are using the industry standard, BCP 47, for locales. So in your API call to the /messages API you will need to put “en-GB” and this will refer to the “en_GB” template for WhatsApp. A full list of the possible locales is available on [developers.facebook.com](https://developers.facebook.com/docs/whatsapp/message-templates/creation#translations). */
		locale: FormControl<string | null | undefined>,

		/** Please note that WhatsApp will deprecate `fallback` policy in January 2020. There are two policies that you can specify when sending a Message Template: `deterministic` and `fallback`. `deterministic` — Deliver the Message Template in exactly the language and locale asked for. `fallback` — Deliver the Message Template in the language that matches users language/locale setting on device. If one can not be found, deliver using the specified fallback language. */
		policy: FormControl<MessagePropertyWhatsappPolicy | null | undefined>,
	}
	export function CreateMessagePropertyWhatsappFormGroup() {
		return new FormGroup<MessagePropertyWhatsappFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			policy: new FormControl<MessagePropertyWhatsappPolicy | null | undefined>(undefined),
		});

	}

	export enum MessagePropertyWhatsappPolicy { fallback = 0, deterministic = 1 }


	/** The callbacks for the message status are the same as defined in the Messaging API. The only difference will be that dispatch_uuid and link will be appended. */
	export interface MessageStatus {
		_links?: MessageStatus_links;
		error?: MessageStatusError;
		from?: FromProperty;
		message_uuid?: string | null;

		/** The status of the message. */
		status?: MessageStatusStatus | null;

		/** The datetime of when the event occurred. */
		timestamp?: string | null;
		to?: ToProperty;
		usage?: MessageStatusUsage;
	}

	/** The callbacks for the message status are the same as defined in the Messaging API. The only difference will be that dispatch_uuid and link will be appended. */
	export interface MessageStatusFormProperties {
		message_uuid: FormControl<string | null | undefined>,

		/** The status of the message. */
		status: FormControl<MessageStatusStatus | null | undefined>,

		/** The datetime of when the event occurred. */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateMessageStatusFormGroup() {
		return new FormGroup<MessageStatusFormProperties>({
			message_uuid: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<MessageStatusStatus | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageStatus_links {
		workflow?: MessageStatus_linksWorkflow;
	}
	export interface MessageStatus_linksFormProperties {
	}
	export function CreateMessageStatus_linksFormGroup() {
		return new FormGroup<MessageStatus_linksFormProperties>({
		});

	}

	export interface MessageStatus_linksWorkflow {
		dispatch_uuid?: string | null;

		/** Please note GET is not currently supported */
		href?: string | null;
	}
	export interface MessageStatus_linksWorkflowFormProperties {
		dispatch_uuid: FormControl<string | null | undefined>,

		/** Please note GET is not currently supported */
		href: FormControl<string | null | undefined>,
	}
	export function CreateMessageStatus_linksWorkflowFormGroup() {
		return new FormGroup<MessageStatus_linksWorkflowFormProperties>({
			dispatch_uuid: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageStatusError {

		/** The error code. See [our errors list](/api-errors/messages-olympus) for a list of possible errors */
		code?: number | null;

		/** Text describing the error. See [our errors list](/api-errors/messages-olympus) for a list of possible errors */
		reason?: string | null;
	}
	export interface MessageStatusErrorFormProperties {

		/** The error code. See [our errors list](/api-errors/messages-olympus) for a list of possible errors */
		code: FormControl<number | null | undefined>,

		/** Text describing the error. See [our errors list](/api-errors/messages-olympus) for a list of possible errors */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateMessageStatusErrorFormGroup() {
		return new FormGroup<MessageStatusErrorFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MessageStatusStatus { submitted = 0, delivered = 1, read = 2, rejected = 3, undeliverable = 4 }

	export interface ToProperty {

		/**
		 * The ID of the message recipient.
		 * **Messenger**: This value should be the `from.id` value you received in the inbound messenger event.
		 * **SMS**: or **Viber**: or **WhatsApp** This value is not required.
		 * Max length: 50
		 * Min length: 1
		 */
		id?: string | null;

		/**
		 * **SMS**: or **MMS**: or **Viber**: or **WhatsApp** The phone number of the message recipient in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
		 * **Messenger**: This value is not required.
		 * Max length: 50
		 * Min length: 1
		 */
		number?: string | null;

		/**
		 * The type of message that you want to send.
		 * Required
		 */
		type: FromPropertyType;
	}
	export interface ToPropertyFormProperties {

		/**
		 * The ID of the message recipient.
		 * **Messenger**: This value should be the `from.id` value you received in the inbound messenger event.
		 * **SMS**: or **Viber**: or **WhatsApp** This value is not required.
		 * Max length: 50
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * **SMS**: or **MMS**: or **Viber**: or **WhatsApp** The phone number of the message recipient in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.
		 * **Messenger**: This value is not required.
		 * Max length: 50
		 * Min length: 1
		 */
		number: FormControl<string | null | undefined>,

		/**
		 * The type of message that you want to send.
		 * Required
		 */
		type: FormControl<FromPropertyType | null | undefined>,
	}
	export function CreateToPropertyFormGroup() {
		return new FormGroup<ToPropertyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50)]),
			type: new FormControl<FromPropertyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MessageStatusUsage {

		/** The charge currency in ISO 4217 format. */
		currency?: MessageStatusUsageCurrency | null;

		/** The charge amount as a stringified number. */
		price?: string | null;
	}
	export interface MessageStatusUsageFormProperties {

		/** The charge currency in ISO 4217 format. */
		currency: FormControl<MessageStatusUsageCurrency | null | undefined>,

		/** The charge amount as a stringified number. */
		price: FormControl<string | null | undefined>,
	}
	export function CreateMessageStatusUsageFormGroup() {
		return new FormGroup<MessageStatusUsageFormProperties>({
			currency: new FormControl<MessageStatusUsageCurrency | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MessageStatusUsageCurrency { EUR = 0 }

	export interface Response {

		/**
		 * The parent ID for workflow request.
		 * Required
		 */
		dispatch_uuid: string;
	}
	export interface ResponseFormProperties {

		/**
		 * The parent ID for workflow request.
		 * Required
		 */
		dispatch_uuid: FormControl<string | null | undefined>,
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
			dispatch_uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWorkflow {

		/** The template that the Dispatch API will execute. For the initial version of the API the only available value will be failover */
		template?: CreateWorkflowTemplate | null;

		/** Contains a message object that must reflect the current /messages resource. All parameters within the content object reflect the /messages docs. */
		workflow?: Array<string>;
	}
	export interface CreateWorkflowFormProperties {

		/** The template that the Dispatch API will execute. For the initial version of the API the only available value will be failover */
		template: FormControl<CreateWorkflowTemplate | null | undefined>,
	}
	export function CreateCreateWorkflowFormGroup() {
		return new FormGroup<CreateWorkflowFormProperties>({
			template: new FormControl<CreateWorkflowTemplate | null | undefined>(undefined),
		});

	}

	export enum CreateWorkflowTemplate { failover = 0 }

	export interface FinalReport {
		_links?: FinalReport_links;
		dispatch_uuid?: string | null;
		status?: FinalReportStatus | null;
		template?: CreateWorkflowTemplate | null;

		/** The datetime of when the event occurred. */
		timestamp?: string | null;

		/** This is the total cost of your Workflow request. Please note if a preceding message in the workflow request is delivered after the final message in the workflow is delivered it may not reflect the true total cost of the workflow. */
		usage?: FinalReportUsage;
	}
	export interface FinalReportFormProperties {
		dispatch_uuid: FormControl<string | null | undefined>,
		status: FormControl<FinalReportStatus | null | undefined>,
		template: FormControl<CreateWorkflowTemplate | null | undefined>,

		/** The datetime of when the event occurred. */
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateFinalReportFormGroup() {
		return new FormGroup<FinalReportFormProperties>({
			dispatch_uuid: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<FinalReportStatus | null | undefined>(undefined),
			template: new FormControl<CreateWorkflowTemplate | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FinalReport_links {
		FinalReport_linksMessages?: Array<FinalReport_linksMessages>;
	}
	export interface FinalReport_linksFormProperties {
	}
	export function CreateFinalReport_linksFormGroup() {
		return new FormGroup<FinalReport_linksFormProperties>({
		});

	}

	export interface FinalReport_linksMessages {
		channel?: FinalReport_linksMessagesChannel | null;

		/** Please note GET is not currently supported */
		href?: string | null;
		message_uuid?: string | null;
		status?: MessageStatusStatus | null;
		usage?: FinalReport_linksMessagesUsage;
	}
	export interface FinalReport_linksMessagesFormProperties {
		channel: FormControl<FinalReport_linksMessagesChannel | null | undefined>,

		/** Please note GET is not currently supported */
		href: FormControl<string | null | undefined>,
		message_uuid: FormControl<string | null | undefined>,
		status: FormControl<MessageStatusStatus | null | undefined>,
	}
	export function CreateFinalReport_linksMessagesFormGroup() {
		return new FormGroup<FinalReport_linksMessagesFormProperties>({
			channel: new FormControl<FinalReport_linksMessagesChannel | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			message_uuid: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<MessageStatusStatus | null | undefined>(undefined),
		});

	}

	export enum FinalReport_linksMessagesChannel { messenger = 0, viber_sevice_msg = 1, sms = 2, whatsapp = 3, mms = 4 }

	export interface FinalReport_linksMessagesUsage {

		/** The charge currency in ISO 4217 format. */
		currency?: MessageStatusUsageCurrency | null;

		/** The charge amount as a stringified number. */
		price?: string | null;
	}
	export interface FinalReport_linksMessagesUsageFormProperties {

		/** The charge currency in ISO 4217 format. */
		currency: FormControl<MessageStatusUsageCurrency | null | undefined>,

		/** The charge amount as a stringified number. */
		price: FormControl<string | null | undefined>,
	}
	export function CreateFinalReport_linksMessagesUsageFormGroup() {
		return new FormGroup<FinalReport_linksMessagesUsageFormProperties>({
			currency: new FormControl<MessageStatusUsageCurrency | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FinalReportStatus { completed = 0, error = 1 }

	export interface FinalReportUsage {

		/** The charge currency in ISO 4217 format. */
		currency?: MessageStatusUsageCurrency | null;

		/** The charge amount as a stringified number. */
		price?: string | null;
	}
	export interface FinalReportUsageFormProperties {

		/** The charge currency in ISO 4217 format. */
		currency: FormControl<MessageStatusUsageCurrency | null | undefined>,

		/** The charge amount as a stringified number. */
		price: FormControl<string | null | undefined>,
	}
	export function CreateFinalReportUsageFormGroup() {
		return new FormGroup<FinalReportUsageFormProperties>({
			currency: new FormControl<MessageStatusUsageCurrency | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Send Message */
	export interface SendMessage {

		/** Required */
		from: FromProperty;

		/** Required */
		message: MessageProperty;

		/** Required */
		to: ToProperty;
	}

	/** Send Message */
	export interface SendMessageFormProperties {
	}
	export function CreateSendMessageFormGroup() {
		return new FormGroup<SendMessageFormProperties>({
		});

	}


	/** Send With Failover Message */
	export interface SendWithFailoverMessage {

		/** Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute. */
		failover?: FailoverProperty;

		/** Required */
		from: FromProperty;

		/** Required */
		message: MessageProperty;

		/** Required */
		to: ToProperty;
	}

	/** Send With Failover Message */
	export interface SendWithFailoverMessageFormProperties {
	}
	export function CreateSendWithFailoverMessageFormGroup() {
		return new FormGroup<SendWithFailoverMessageFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create a workflow
		 * Post 
		 * @param {CreateWorkflow} requestBody Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute.
		 * @return {void} 
		 */
		CreateWorkflow(requestBody: CreateWorkflow): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

