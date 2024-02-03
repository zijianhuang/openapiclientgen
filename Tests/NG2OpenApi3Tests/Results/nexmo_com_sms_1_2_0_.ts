import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DeliveryReceipt {

		/** The API key that sent the SMS. This is useful when multiple accounts are sending webhooks to the same endpoint. */
		'api-key'?: string | null;

		/** If the `client-ref` is set when the SMS is sent, it will be included in the delivery receipt */
		'client-ref'?: string | null;

		/** The status of the request. Will be a non `0` value if there has been an error, or if the status is unknown. See the [Delivery Receipt documentation](/messaging/sms/guides/delivery-receipts#dlr-error-codes) for more details */
		'err-code'?: string | null;

		/** The time when Vonage started to push this Delivery Receipt to your webhook endpoint. */
		'message-timestamp'?: string | null;

		/** The Vonage ID for this message. */
		messageId?: string | null;

		/** The number the message was sent to. Numbers are specified in E.164 format. */
		msisdn?: string | null;

		/** The Mobile Country Code Mobile Network Code (MCCMNC) of the carrier this phone number is registered with. */
		'network-code'?: string | null;

		/** A random string to be used when calculating the signature. _Only included if you have signatures enabled_ */
		nonce?: string | null;

		/** The cost of the message */
		price?: string | null;

		/** When the DLR was received from the carrier in the following format `YYMMDDHHMM`. For example, `2001011400` is at `2020-01-01 14:00` */
		scts?: string | null;

		/** The signature to enable verification of the source of this webhook. Please see the [developer documentation for validating signatures](/concepts/guides/signing-messages) for more information, or use one of our published SDKs. _Only included if you have signatures enabled_ */
		sig?: string | null;

		/** A code that explains where the message is in the delivery process. */
		status?: string | null;

		/** A timestamp in Unix (seconds since the epoch) format. _Only included if you have signatures enabled_ */
		timestamp?: string | null;

		/** The SenderID you set in `from` in your request. */
		to?: string | null;
	}
	export interface DeliveryReceiptFormProperties {

		/** The API key that sent the SMS. This is useful when multiple accounts are sending webhooks to the same endpoint. */
		'api-key': FormControl<string | null | undefined>,

		/** If the `client-ref` is set when the SMS is sent, it will be included in the delivery receipt */
		'client-ref': FormControl<string | null | undefined>,

		/** The status of the request. Will be a non `0` value if there has been an error, or if the status is unknown. See the [Delivery Receipt documentation](/messaging/sms/guides/delivery-receipts#dlr-error-codes) for more details */
		'err-code': FormControl<string | null | undefined>,

		/** The time when Vonage started to push this Delivery Receipt to your webhook endpoint. */
		'message-timestamp': FormControl<string | null | undefined>,

		/** The Vonage ID for this message. */
		messageId: FormControl<string | null | undefined>,

		/** The number the message was sent to. Numbers are specified in E.164 format. */
		msisdn: FormControl<string | null | undefined>,

		/** The Mobile Country Code Mobile Network Code (MCCMNC) of the carrier this phone number is registered with. */
		'network-code': FormControl<string | null | undefined>,

		/** A random string to be used when calculating the signature. _Only included if you have signatures enabled_ */
		nonce: FormControl<string | null | undefined>,

		/** The cost of the message */
		price: FormControl<string | null | undefined>,

		/** When the DLR was received from the carrier in the following format `YYMMDDHHMM`. For example, `2001011400` is at `2020-01-01 14:00` */
		scts: FormControl<string | null | undefined>,

		/** The signature to enable verification of the source of this webhook. Please see the [developer documentation for validating signatures](/concepts/guides/signing-messages) for more information, or use one of our published SDKs. _Only included if you have signatures enabled_ */
		sig: FormControl<string | null | undefined>,

		/** A code that explains where the message is in the delivery process. */
		status: FormControl<string | null | undefined>,

		/** A timestamp in Unix (seconds since the epoch) format. _Only included if you have signatures enabled_ */
		timestamp: FormControl<string | null | undefined>,

		/** The SenderID you set in `from` in your request. */
		to: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryReceiptFormGroup() {
		return new FormGroup<DeliveryReceiptFormProperties>({
			'api-key': new FormControl<string | null | undefined>(undefined),
			'client-ref': new FormControl<string | null | undefined>(undefined),
			'err-code': new FormControl<string | null | undefined>(undefined),
			'message-timestamp': new FormControl<string | null | undefined>(undefined),
			messageId: new FormControl<string | null | undefined>(undefined),
			msisdn: new FormControl<string | null | undefined>(undefined),
			'network-code': new FormControl<string | null | undefined>(undefined),
			nonce: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			scts: new FormControl<string | null | undefined>(undefined),
			sig: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error */
	export interface Error {

		/** The amount of messages in the request */
		'message-count'?: string | null;
		messages?: Array<ErrorMessage>;
	}

	/** Error */
	export interface ErrorFormProperties {

		/** The amount of messages in the request */
		'message-count': FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			'message-count': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorMessage {

		/** The description of the error */
		'error-text'?: string | null;

		/** The error status of the message */
		status?: string | null;
	}
	export interface ErrorMessageFormProperties {

		/** The description of the error */
		'error-text': FormControl<string | null | undefined>,

		/** The error status of the message */
		status: FormControl<string | null | undefined>,
	}
	export function CreateErrorMessageFormGroup() {
		return new FormGroup<ErrorMessageFormProperties>({
			'error-text': new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error */
	export interface ErrorXml {
		messages?: Array<ErrorMessage>;
	}

	/** Error */
	export interface ErrorXmlFormProperties {
	}
	export function CreateErrorXmlFormGroup() {
		return new FormGroup<ErrorXmlFormProperties>({
		});

	}

	export interface InboundMessage {

		/**
		 * The Vonage API Key of the receiving account.
		 * Required
		 */
		'api-key': string;

		/** True - if this is a concatenated message. This field does not exist if it is a single message */
		concat?: string | null;

		/** The number of this part in the message. Counting starts at 1. */
		'concat-part'?: string | null;

		/** The transaction reference. All parts of this message share this value. */
		'concat-ref'?: string | null;

		/** The number of parts in this concatenated message. */
		'concat-total'?: string | null;

		/** The content of this message, if type is binary. */
		data?: string | null;

		/**
		 * The first word in the message body. Converted to upper case.
		 * Required
		 */
		keyword: string;

		/**
		 * The time when Vonage started to push this Delivery Receipt to your webhook endpoint.
		 * Required
		 */
		'message-timestamp': string;

		/**
		 * The ID of the message
		 * Required
		 */
		messageId: string;

		/**
		 * The phone number that this inbound message was sent from. Numbers are specified in E.164 format.
		 * Required
		 */
		msisdn: string;

		/** A random string that forms part of the signed set of parameters, it adds an extra element of unpredictability into the signature for the request. You use the nonce and timestamp parameters with your shared secret to calculate and validate the signature for inbound messages. */
		nonce?: string | null;

		/**
		 * The message body for this inbound message.
		 * Required
		 */
		text: string;

		/** A unix timestamp representation of message-timestamp. */
		timestamp?: string | null;

		/**
		 * The phone number the message was sent to. **This is your virtual number**. Numbers are specified in E.164 format.
		 * Required
		 */
		to: string;

		/**
		 * Possible values are:
		 * - `text` - standard text.
		 * - `unicode` - URLencoded   unicode  . This is valid for standard GSM, Arabic, Chinese, double-encoded characters and so on.
		 * - `binary` - a binary message.
		 * Required
		 */
		type: string;

		/** The hex encoded User Data Header, if type is binary */
		udh?: string | null;
	}
	export interface InboundMessageFormProperties {

		/**
		 * The Vonage API Key of the receiving account.
		 * Required
		 */
		'api-key': FormControl<string | null | undefined>,

		/** True - if this is a concatenated message. This field does not exist if it is a single message */
		concat: FormControl<string | null | undefined>,

		/** The number of this part in the message. Counting starts at 1. */
		'concat-part': FormControl<string | null | undefined>,

		/** The transaction reference. All parts of this message share this value. */
		'concat-ref': FormControl<string | null | undefined>,

		/** The number of parts in this concatenated message. */
		'concat-total': FormControl<string | null | undefined>,

		/** The content of this message, if type is binary. */
		data: FormControl<string | null | undefined>,

		/**
		 * The first word in the message body. Converted to upper case.
		 * Required
		 */
		keyword: FormControl<string | null | undefined>,

		/**
		 * The time when Vonage started to push this Delivery Receipt to your webhook endpoint.
		 * Required
		 */
		'message-timestamp': FormControl<string | null | undefined>,

		/**
		 * The ID of the message
		 * Required
		 */
		messageId: FormControl<string | null | undefined>,

		/**
		 * The phone number that this inbound message was sent from. Numbers are specified in E.164 format.
		 * Required
		 */
		msisdn: FormControl<string | null | undefined>,

		/** A random string that forms part of the signed set of parameters, it adds an extra element of unpredictability into the signature for the request. You use the nonce and timestamp parameters with your shared secret to calculate and validate the signature for inbound messages. */
		nonce: FormControl<string | null | undefined>,

		/**
		 * The message body for this inbound message.
		 * Required
		 */
		text: FormControl<string | null | undefined>,

		/** A unix timestamp representation of message-timestamp. */
		timestamp: FormControl<string | null | undefined>,

		/**
		 * The phone number the message was sent to. **This is your virtual number**. Numbers are specified in E.164 format.
		 * Required
		 */
		to: FormControl<string | null | undefined>,

		/**
		 * Possible values are:
		 * - `text` - standard text.
		 * - `unicode` - URLencoded   unicode  . This is valid for standard GSM, Arabic, Chinese, double-encoded characters and so on.
		 * - `binary` - a binary message.
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/** The hex encoded User Data Header, if type is binary */
		udh: FormControl<string | null | undefined>,
	}
	export function CreateInboundMessageFormGroup() {
		return new FormGroup<InboundMessageFormProperties>({
			'api-key': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			concat: new FormControl<string | null | undefined>(undefined),
			'concat-part': new FormControl<string | null | undefined>(undefined),
			'concat-ref': new FormControl<string | null | undefined>(undefined),
			'concat-total': new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			keyword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'message-timestamp': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			messageId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			msisdn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nonce: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			udh: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Message {

		/** **Advanced**: An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email [support@nexmo.com](mailto:support@nexmo.com) */
		'account-ref'?: string | null;

		/** If a `client-ref` was included when sending the SMS, this field will be included and hold the value that was sent. */
		'client-ref'?: string | null;

		/** The ID of the message */
		'message-id'?: string | null;

		/** The estimated cost of the message */
		'message-price'?: string | null;

		/** The estimated ID of the network of the recipient */
		network?: string | null;

		/** Your estimated remaining balance */
		'remaining-balance'?: string | null;

		/** The status of the message. See [Troubleshooting Failed SMS](/messaging/sms/guides/troubleshooting-sms). */
		status?: string | null;

		/** The number the message was sent to. Numbers are specified in E.164 format. */
		to?: string | null;
	}
	export interface MessageFormProperties {

		/** **Advanced**: An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email [support@nexmo.com](mailto:support@nexmo.com) */
		'account-ref': FormControl<string | null | undefined>,

		/** If a `client-ref` was included when sending the SMS, this field will be included and hold the value that was sent. */
		'client-ref': FormControl<string | null | undefined>,

		/** The ID of the message */
		'message-id': FormControl<string | null | undefined>,

		/** The estimated cost of the message */
		'message-price': FormControl<string | null | undefined>,

		/** The estimated ID of the network of the recipient */
		network: FormControl<string | null | undefined>,

		/** Your estimated remaining balance */
		'remaining-balance': FormControl<string | null | undefined>,

		/** The status of the message. See [Troubleshooting Failed SMS](/messaging/sms/guides/troubleshooting-sms). */
		status: FormControl<string | null | undefined>,

		/** The number the message was sent to. Numbers are specified in E.164 format. */
		to: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			'account-ref': new FormControl<string | null | undefined>(undefined),
			'client-ref': new FormControl<string | null | undefined>(undefined),
			'message-id': new FormControl<string | null | undefined>(undefined),
			'message-price': new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			'remaining-balance': new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewMessage {

		/** **Advanced**: An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email [support@nexmo.com](mailto:support@nexmo.com) */
		'account-ref'?: string | null;

		/**
		 * Your API key
		 * Required
		 * Max length: 8
		 * Min length: 8
		 */
		api_key: string;

		/**
		 * Your API secret. Required unless `sig` is provided
		 * Max length: 32
		 * Min length: 6
		 */
		api_secret?: string | null;

		/** **Advanced**: Hex encoded binary data. Depends on `type` parameter having the value `binary`. */
		body?: string | null;

		/** **Advanced**: The webhook endpoint the delivery receipt for this sms is sent to. This parameter overrides the webhook endpoint you set in Dashboard. Max 100 characters. */
		callback?: string | null;

		/** **Advanced**: You can optionally include your own reference of up to 100 characters. */
		'client-ref'?: string | null;

		/** **Advanced**: A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. For more information please refer to the [Country-Specific Outbound SMS Features](https://help.nexmo.com/hc/en-us/articles/115011781468) */
		'content-id'?: string | null;

		/** **Advanced**: A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. For more information please refer to the [Country-Specific Outbound SMS Features](https://help.nexmo.com/hc/en-us/articles/115011781468) */
		'entity-id'?: string | null;

		/**
		 * The name or number the message should be sent from. Alphanumeric senderID's are not supported in all countries, see [Global Messaging](/messaging/sms/guides/global-messaging#country-specific-features) for more details. If alphanumeric, spaces will be ignored. Numbers are specified in E.164 format.
		 * Required
		 */
		from: string;

		/** **Advanced**: The Data Coding Scheme value of the message */
		'message-class'?: NewMessageMessage_class;

		/** **Advanced**: The value of the [protocol identifier](https://en.wikipedia.org/wiki/GSM_03.40#Protocol_Identifier) to use. Ensure that the value is aligned with `udh`. */
		'protocol-id'?: number | null;

		/**
		 * The hash of the request parameters in alphabetical order, a timestamp and the signature secret. See [Signing Requests](/concepts/guides/signing-messages) for more details.
		 * Max length: 60
		 * Min length: 16
		 */
		sig?: string | null;

		/** **Advanced**: Boolean indicating if you like to receive a [Delivery Receipt](/messaging/sms/building-blocks/receive-a-delivery-receipt). */
		'status-report-req'?: boolean | null;

		/** The body of the message being sent. If your message contains characters that can be encoded according to the GSM Standard and Extended tables then you can set the `type` to `text`. If your message contains characters outside this range, then you will need to set the `type` to `unicode`. */
		text?: string | null;

		/**
		 * The number that the message should be sent to. Numbers are specified in E.164 format.
		 * Required
		 * Max length: 15
		 * Min length: 7
		 */
		to: string;

		/**
		 * **Advanced**: The duration in milliseconds the delivery of an SMS will be attempted.§§ By default Vonage attempts delivery for 72 hours, however the maximum effective value depends on the operator and is typically 24 - 48 hours. We recommend this value should be kept at its default or at least 30 minutes.
		 * Minimum: 20000
		 * Maximum: 604800000
		 */
		ttl?: number | null;

		/** **Advanced**: The format of the message body */
		type?: NewMessageType | null;

		/** **Advanced**: Your custom Hex encoded [User Data Header](https://en.wikipedia.org/wiki/User_Data_Header). Depends on `type` parameter having the value `binary`. */
		udh?: string | null;
	}
	export interface NewMessageFormProperties {

		/** **Advanced**: An optional string used to identify separate accounts using the SMS endpoint for billing purposes. To use this feature, please email [support@nexmo.com](mailto:support@nexmo.com) */
		'account-ref': FormControl<string | null | undefined>,

		/**
		 * Your API key
		 * Required
		 * Max length: 8
		 * Min length: 8
		 */
		api_key: FormControl<string | null | undefined>,

		/**
		 * Your API secret. Required unless `sig` is provided
		 * Max length: 32
		 * Min length: 6
		 */
		api_secret: FormControl<string | null | undefined>,

		/** **Advanced**: Hex encoded binary data. Depends on `type` parameter having the value `binary`. */
		body: FormControl<string | null | undefined>,

		/** **Advanced**: The webhook endpoint the delivery receipt for this sms is sent to. This parameter overrides the webhook endpoint you set in Dashboard. Max 100 characters. */
		callback: FormControl<string | null | undefined>,

		/** **Advanced**: You can optionally include your own reference of up to 100 characters. */
		'client-ref': FormControl<string | null | undefined>,

		/** **Advanced**: A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. For more information please refer to the [Country-Specific Outbound SMS Features](https://help.nexmo.com/hc/en-us/articles/115011781468) */
		'content-id': FormControl<string | null | undefined>,

		/** **Advanced**: A string parameter that satisfies regulatory requirements when sending an SMS to specific countries. For more information please refer to the [Country-Specific Outbound SMS Features](https://help.nexmo.com/hc/en-us/articles/115011781468) */
		'entity-id': FormControl<string | null | undefined>,

		/**
		 * The name or number the message should be sent from. Alphanumeric senderID's are not supported in all countries, see [Global Messaging](/messaging/sms/guides/global-messaging#country-specific-features) for more details. If alphanumeric, spaces will be ignored. Numbers are specified in E.164 format.
		 * Required
		 */
		from: FormControl<string | null | undefined>,

		/** **Advanced**: The Data Coding Scheme value of the message */
		'message-class': FormControl<NewMessageMessage_class | null | undefined>,

		/** **Advanced**: The value of the [protocol identifier](https://en.wikipedia.org/wiki/GSM_03.40#Protocol_Identifier) to use. Ensure that the value is aligned with `udh`. */
		'protocol-id': FormControl<number | null | undefined>,

		/**
		 * The hash of the request parameters in alphabetical order, a timestamp and the signature secret. See [Signing Requests](/concepts/guides/signing-messages) for more details.
		 * Max length: 60
		 * Min length: 16
		 */
		sig: FormControl<string | null | undefined>,

		/** **Advanced**: Boolean indicating if you like to receive a [Delivery Receipt](/messaging/sms/building-blocks/receive-a-delivery-receipt). */
		'status-report-req': FormControl<boolean | null | undefined>,

		/** The body of the message being sent. If your message contains characters that can be encoded according to the GSM Standard and Extended tables then you can set the `type` to `text`. If your message contains characters outside this range, then you will need to set the `type` to `unicode`. */
		text: FormControl<string | null | undefined>,

		/**
		 * The number that the message should be sent to. Numbers are specified in E.164 format.
		 * Required
		 * Max length: 15
		 * Min length: 7
		 */
		to: FormControl<string | null | undefined>,

		/**
		 * **Advanced**: The duration in milliseconds the delivery of an SMS will be attempted.§§ By default Vonage attempts delivery for 72 hours, however the maximum effective value depends on the operator and is typically 24 - 48 hours. We recommend this value should be kept at its default or at least 30 minutes.
		 * Minimum: 20000
		 * Maximum: 604800000
		 */
		ttl: FormControl<number | null | undefined>,

		/** **Advanced**: The format of the message body */
		type: FormControl<NewMessageType | null | undefined>,

		/** **Advanced**: Your custom Hex encoded [User Data Header](https://en.wikipedia.org/wiki/User_Data_Header). Depends on `type` parameter having the value `binary`. */
		udh: FormControl<string | null | undefined>,
	}
	export function CreateNewMessageFormGroup() {
		return new FormGroup<NewMessageFormProperties>({
			'account-ref': new FormControl<string | null | undefined>(undefined),
			api_key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
			api_secret: new FormControl<string | null | undefined>(undefined, [Validators.minLength(6), Validators.maxLength(32)]),
			body: new FormControl<string | null | undefined>(undefined),
			callback: new FormControl<string | null | undefined>(undefined),
			'client-ref': new FormControl<string | null | undefined>(undefined),
			'content-id': new FormControl<string | null | undefined>(undefined),
			'entity-id': new FormControl<string | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'message-class': new FormControl<NewMessageMessage_class | null | undefined>(undefined),
			'protocol-id': new FormControl<number | null | undefined>(undefined),
			sig: new FormControl<string | null | undefined>(undefined, [Validators.minLength(16), Validators.maxLength(60)]),
			'status-report-req': new FormControl<boolean | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(7), Validators.maxLength(15), Validators.pattern('\d{7,15}')]),
			ttl: new FormControl<number | null | undefined>(undefined, [Validators.min(20000), Validators.max(604800000)]),
			type: new FormControl<NewMessageType | null | undefined>(undefined),
			udh: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NewMessageMessage_class { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export enum NewMessageType { text = 'text', binary = 'binary', unicode = 'unicode' }


	/** Message sent */
	export interface SMS {

		/** The amount of messages in the request */
		'message-count'?: string | null;
		messages?: Array<Message>;
	}

	/** Message sent */
	export interface SMSFormProperties {

		/** The amount of messages in the request */
		'message-count': FormControl<string | null | undefined>,
	}
	export function CreateSMSFormGroup() {
		return new FormGroup<SMSFormProperties>({
			'message-count': new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message sent */
	export interface SMSXml {
		messages?: Array<Message>;
	}

	/** Message sent */
	export interface SMSXmlFormProperties {
	}
	export function CreateSMSXmlFormGroup() {
		return new FormGroup<SMSXmlFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

	export enum Send_an_smsFormat { json = 'json', xml = 'xml' }

}

