import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BlockedNumber {

		/**
		 * A unique identifier that is assigned when the BlockedNumber is created.
		 * Required
		 */
		id: string;

		/** Required */
		phoneNumber: string;
	}
	export interface BlockedNumberFormProperties {

		/**
		 * A unique identifier that is assigned when the BlockedNumber is created.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Required */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateBlockedNumberFormGroup() {
		return new FormGroup<BlockedNumberFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** See the [errors page](errors/) for more detail on what kind of errors you can get. */
	export interface Error {

		/** More information about why the error occurred. */
		detail?: string | null;

		/**
		 * The HTTP status code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;

		/**
		 * A short description of the type
		 * Required
		 */
		title: string;

		/**
		 * A URL to one of the [error types](errors/).
		 * Required
		 */
		type: string;
	}

	/** See the [errors page](errors/) for more detail on what kind of errors you can get. */
	export interface ErrorFormProperties {

		/** More information about why the error occurred. */
		detail: FormControl<string | null | undefined>,

		/**
		 * The HTTP status code
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/**
		 * A short description of the type
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * A URL to one of the [error types](errors/).
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Message {

		/**
		 * The content of the message
		 * Required
		 */
		body: any;

		/**
		 * The cost of the message (in credits).   Note that this field does not have a value in the submission response.
		 * Type: float
		 */
		creditCost?: number | null;

		/** The type of the content.  See the `encoding` field for more information. */
		encoding?: MessageEncoding | null;

		/** The address part of the sender id */
		from?: string | null;

		/**
		 * A unique identifier that is assigned when the message is created.
		 * Required
		 */
		id: string;

		/**
		 * See the `messageClass` field for more information.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		messageClass?: number | null;

		/**
		 * The number of parts.  If this is a concatenated message, the number of parts will be more than 1.  Note that this field does not have a value in the submission response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfParts?: number | null;

		/**
		 * See the `protocolId` field for more information.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		protocolId?: number | null;

		/**
		 * This field has a value only if the type is RECEIVED.
		 * With SMS messages, it is not possible to link a reply directly with a specific sent message.  However, if you specified `REPLIABLE` in the `from` property, BulkSMS will link any reply to the most recent message sent to a given phone number.
		 * The `relatedSentMessageId` property keeps the information about this link.
		 * You can use this property to derive an implicit conversation from a set of messages.
		 * - If a received reply message has a `relatedSentMessageId`, you can use it to retrieve the last message that was sent before the reply was received.
		 * - If you have the `id` of the sent message and you want all the received messages that relate to it, you can use the List Related Messages Operation.
		 */
		relatedSentMessageId?: string | null;

		/**
		 * The status of the message
		 * Required
		 */
		status: MessageStatus;

		/**
		 * Identifies the submission.
		 */
		submission?: MessageSubmission;

		/**
		 * The phone number of the recipient
		 * Required
		 */
		to: string;

		/**
		 * The message direction
		 * Required
		 */
		type: MessageType;

		/**
		 * This is the value you supplied in the `userSuppliedId` field.
		 * Has a value only if the `type` is SENT.
		 */
		userSuppliedId?: string | null;
	}
	export interface MessageFormProperties {

		/**
		 * The content of the message
		 * Required
		 */
		body: FormControl<any | null | undefined>,

		/**
		 * The cost of the message (in credits).   Note that this field does not have a value in the submission response.
		 * Type: float
		 */
		creditCost: FormControl<number | null | undefined>,

		/** The type of the content.  See the `encoding` field for more information. */
		encoding: FormControl<MessageEncoding | null | undefined>,

		/** The address part of the sender id */
		from: FormControl<string | null | undefined>,

		/**
		 * A unique identifier that is assigned when the message is created.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * See the `messageClass` field for more information.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		messageClass: FormControl<number | null | undefined>,

		/**
		 * The number of parts.  If this is a concatenated message, the number of parts will be more than 1.  Note that this field does not have a value in the submission response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numberOfParts: FormControl<number | null | undefined>,

		/**
		 * See the `protocolId` field for more information.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		protocolId: FormControl<number | null | undefined>,

		/**
		 * This field has a value only if the type is RECEIVED.
		 * With SMS messages, it is not possible to link a reply directly with a specific sent message.  However, if you specified `REPLIABLE` in the `from` property, BulkSMS will link any reply to the most recent message sent to a given phone number.
		 * The `relatedSentMessageId` property keeps the information about this link.
		 * You can use this property to derive an implicit conversation from a set of messages.
		 * - If a received reply message has a `relatedSentMessageId`, you can use it to retrieve the last message that was sent before the reply was received.
		 * - If you have the `id` of the sent message and you want all the received messages that relate to it, you can use the List Related Messages Operation.
		 */
		relatedSentMessageId: FormControl<string | null | undefined>,

		/**
		 * The phone number of the recipient
		 * Required
		 */
		to: FormControl<string | null | undefined>,

		/**
		 * The message direction
		 * Required
		 */
		type: FormControl<MessageType | null | undefined>,

		/**
		 * This is the value you supplied in the `userSuppliedId` field.
		 * Has a value only if the `type` is SENT.
		 */
		userSuppliedId: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			body: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			creditCost: new FormControl<number | null | undefined>(undefined),
			encoding: new FormControl<MessageEncoding | null | undefined>(undefined),
			from: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			messageClass: new FormControl<number | null | undefined>(undefined),
			numberOfParts: new FormControl<number | null | undefined>(undefined),
			protocolId: new FormControl<number | null | undefined>(undefined),
			relatedSentMessageId: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<MessageType | null | undefined>(undefined, [Validators.required]),
			userSuppliedId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MessageEncoding { TEXT = 'TEXT', UNICODE = 'UNICODE', BINARY = 'BINARY' }

	export interface MessageStatus {

		/**
		 * A concatenated value A.B where A is the `status.type` and B is the `status.subtype`.
		 * It there is no value for `subtype` then B takes string value `"null"` (e.g. `"SENT.null"`).
		 * Required
		 */
		id: string;

		/**
		 * Has a value only if the `type` is FAILED.
		 * EXPIRED  Delivery failed because message expired before delivery was possible.
		 * HANDSET_ERROR  Delivery failed because of a problem related to the phone (e.g. message storage area full).
		 * BLOCKED  Your account has been blocked from sending to this phone (e.g. recipient replied STOP to block communication).
		 * NOT_SENT  Message delivery was not attempted (e.g. because we were not able to find a route for the supplied phone number).
		 */
		subtype?: MessageStatusSubtype | null;

		/**
		 * ACCEPTED  Message accepted for delivery. Only returned for initial message submissions.
		 * SCHEDULED  Message accepted for delivery at a later date. Only returned for initial message  submissions.
		 * SENT  Message has been relayed away from our systems.
		 * DELIVERED  Successfully delivered to phone.
		 * UNKNOWN  Message is in an unknown state.
		 * FAILED  Delivery failed.
		 * Required
		 */
		type: MessageStatusType;
	}
	export interface MessageStatusFormProperties {

		/**
		 * A concatenated value A.B where A is the `status.type` and B is the `status.subtype`.
		 * It there is no value for `subtype` then B takes string value `"null"` (e.g. `"SENT.null"`).
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Has a value only if the `type` is FAILED.
		 * EXPIRED  Delivery failed because message expired before delivery was possible.
		 * HANDSET_ERROR  Delivery failed because of a problem related to the phone (e.g. message storage area full).
		 * BLOCKED  Your account has been blocked from sending to this phone (e.g. recipient replied STOP to block communication).
		 * NOT_SENT  Message delivery was not attempted (e.g. because we were not able to find a route for the supplied phone number).
		 */
		subtype: FormControl<MessageStatusSubtype | null | undefined>,

		/**
		 * ACCEPTED  Message accepted for delivery. Only returned for initial message submissions.
		 * SCHEDULED  Message accepted for delivery at a later date. Only returned for initial message  submissions.
		 * SENT  Message has been relayed away from our systems.
		 * DELIVERED  Successfully delivered to phone.
		 * UNKNOWN  Message is in an unknown state.
		 * FAILED  Delivery failed.
		 * Required
		 */
		type: FormControl<MessageStatusType | null | undefined>,
	}
	export function CreateMessageStatusFormGroup() {
		return new FormGroup<MessageStatusFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subtype: new FormControl<MessageStatusSubtype | null | undefined>(undefined),
			type: new FormControl<MessageStatusType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MessageStatusSubtype { EXPIRED = 'EXPIRED', HANDSET_ERROR = 'HANDSET_ERROR', BLOCKED = 'BLOCKED', NOT_SENT = 'NOT_SENT' }

	export enum MessageStatusType { ACCEPTED = 'ACCEPTED', SCHEDULED = 'SCHEDULED', SENT = 'SENT', DELIVERED = 'DELIVERED', UNKNOWN = 'UNKNOWN', FAILED = 'FAILED' }

	export interface MessageSubmission {

		/**
		 * The date and time the submission was processed. If the `type` is RECEIVED, this field reflects the date and time the received message was processed.
		 * Required
		 */
		date: Date;

		/**
		 * A unique identity shared by all messages that were created from the same submission. This field should be ignored if the `type` is not SENT.
		 * Required
		 */
		id: string;
	}
	export interface MessageSubmissionFormProperties {

		/**
		 * The date and time the submission was processed. If the `type` is RECEIVED, this field reflects the date and time the received message was processed.
		 * Required
		 */
		date: FormControl<Date | null | undefined>,

		/**
		 * A unique identity shared by all messages that were created from the same submission. This field should be ignored if the `type` is not SENT.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateMessageSubmissionFormGroup() {
		return new FormGroup<MessageSubmissionFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MessageType { SENT = 'SENT', RECEIVED = 'RECEIVED' }

	export interface PreSignInfo {

		/** The URL you use in your SMS text.  It is the file location. */
		fetchUrl?: string | null;

		/** Name value objects to add to the headers of the PUT request. */
		PreSignInfoFields?: Array<PreSignInfoFields>;

		/** The address of the PUT request to upload the file. */
		putUrl?: string | null;
	}
	export interface PreSignInfoFormProperties {

		/** The URL you use in your SMS text.  It is the file location. */
		fetchUrl: FormControl<string | null | undefined>,

		/** The address of the PUT request to upload the file. */
		putUrl: FormControl<string | null | undefined>,
	}
	export function CreatePreSignInfoFormGroup() {
		return new FormGroup<PreSignInfoFormProperties>({
			fetchUrl: new FormControl<string | null | undefined>(undefined),
			putUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PreSignInfoFields {

		/** The header name */
		name?: string | null;

		/** The header value */
		value?: string | null;
	}
	export interface PreSignInfoFieldsFormProperties {

		/** The header name */
		name: FormControl<string | null | undefined>,

		/** The header value */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePreSignInfoFieldsFormGroup() {
		return new FormGroup<PreSignInfoFieldsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PreSignRequest {

		/** The extension of the file.  Usually related to the media type. */
		fileExtension?: string | null;

		/** The media type of the file you would like to upload.  If you are not sure what value to use here, check out the standard [list of media types](https://www.iana.org/assignments/media-types/media-types.xhtml). */
		mediaType?: string | null;
	}
	export interface PreSignRequestFormProperties {

		/** The extension of the file.  Usually related to the media type. */
		fileExtension: FormControl<string | null | undefined>,

		/** The media type of the file you would like to upload.  If you are not sure what value to use here, check out the standard [list of media types](https://www.iana.org/assignments/media-types/media-types.xhtml). */
		mediaType: FormControl<string | null | undefined>,
	}
	export function CreatePreSignRequestFormGroup() {
		return new FormGroup<PreSignRequestFormProperties>({
			fileExtension: new FormControl<string | null | undefined>(undefined),
			mediaType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Profile {
		commerce?: ProfileCommerce;
		company?: ProfileCompany;

		/** Required */
		created: Date;

		/** Required */
		credits: ProfileCredits;

		/** Required */
		id: string;
		originAddresses?: ProfileOriginAddresses;

		/** Required */
		quota: ProfileQuota;

		/** Required */
		username: string;
	}
	export interface ProfileFormProperties {

		/** Required */
		created: FormControl<Date | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function CreateProfileFormGroup() {
		return new FormGroup<ProfileFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProfileCommerce {
		address?: ProfileCommerceAddress;
		bankPaymentReference?: string | null;
	}
	export interface ProfileCommerceFormProperties {
		bankPaymentReference: FormControl<string | null | undefined>,
	}
	export function CreateProfileCommerceFormGroup() {
		return new FormGroup<ProfileCommerceFormProperties>({
			bankPaymentReference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProfileCommerceAddress {
		city?: string | null;
		country?: string | null;
		postalCode?: string | null;
		region?: string | null;
		street?: Array<string>;
	}
	export interface ProfileCommerceAddressFormProperties {
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		postalCode: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
	}
	export function CreateProfileCommerceAddressFormGroup() {
		return new FormGroup<ProfileCommerceAddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			postalCode: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProfileCompany {
		name?: string | null;
		taxReference?: string | null;
	}
	export interface ProfileCompanyFormProperties {
		name: FormControl<string | null | undefined>,
		taxReference: FormControl<string | null | undefined>,
	}
	export function CreateProfileCompanyFormGroup() {
		return new FormGroup<ProfileCompanyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			taxReference: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProfileCredits {

		/** Type: float */
		balance?: number | null;
		isTransferAllowed?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		limit?: number | null;
	}
	export interface ProfileCreditsFormProperties {

		/** Type: float */
		balance: FormControl<number | null | undefined>,
		isTransferAllowed: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		limit: FormControl<number | null | undefined>,
	}
	export function CreateProfileCreditsFormGroup() {
		return new FormGroup<ProfileCreditsFormProperties>({
			balance: new FormControl<number | null | undefined>(undefined),
			isTransferAllowed: new FormControl<boolean | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProfileOriginAddresses {
		allowed?: Array<string>;
		isFullControlAllowed?: boolean | null;
	}
	export interface ProfileOriginAddressesFormProperties {
		isFullControlAllowed: FormControl<boolean | null | undefined>,
	}
	export function CreateProfileOriginAddressesFormGroup() {
		return new FormGroup<ProfileOriginAddressesFormProperties>({
			isFullControlAllowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ProfileQuota {

		/**
		 * The number of messages you can still send today.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		remaining: number;

		/**
		 * The setting that limits the number of messages you can send in a day.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		size: number;
	}
	export interface ProfileQuotaFormProperties {

		/**
		 * The number of messages you can still send today.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		remaining: FormControl<number | null | undefined>,

		/**
		 * The setting that limits the number of messages you can send in a day.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		size: FormControl<number | null | undefined>,
	}
	export function CreateProfileQuotaFormGroup() {
		return new FormGroup<ProfileQuotaFormProperties>({
			remaining: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object that you use when posting messages. */
	export interface SubmissionEntry {

		/**
		 * The message content as described in the `encoding`. If the `encoding` is BINARY, the body must contain only hexadecimal digits where one byte is represented as two digits. For example, if you want to send two bytes '0x05' and '0x1F', the message body must contain the text '051F'.
		 * The message content can also contain templates, read the [body templates section](#tag/Message) for more information.
		 * Required
		 */
		body: string;

		/**
		 * The type of delivery reports to request from the delivering network.
		 * The default value  is `ALL`. Please note that not all networks support delivery reports.
		 * ALL. All possible delivery reports
		 * ERRORS. Only error delivery reports
		 * NONE. No delivery reports
		 */
		deliveryReports?: SubmissionEntryDeliveryReports | null;

		/**
		 * Describes the content of the message body.
		 * Typically this is TEXT, which is the default if no value is provided.
		 * If you need to send characters that are not covered by the [GSM 03.38](https://en.wikipedia.org/wiki/GSM_03.38) character set you will need to specify UNICODE.
		 * If you want to send a sequence of bytes, you must use BINARY.
		 * You can also or use the `auto-unicode` parameter of the Send Messages Operation.
		 * If you supply the value of `TEXT` while `auto-unicode` is `true` then your message may be converted to `UNICODE`.
		 * If you supply a value other than `TEXT` for this property while `auto-unicode` is `true` then no automatic conversion will take place.
		 */
		encoding?: MessageEncoding | null;

		/**
		 * Identifies the sender.
		 * Instead of a structured object, you can supply a string value here.
		 * If you do this, the `type` of the sender is derived to be either INTERNATIONAL or ALPHANUMERIC.  If the value does not begin with a `+` and it contains at least one character that is not a digit, the type is detected as ALPHANUMERIC. Otherwise, the type is detected as INTERNATIONAL.
		 */
		from?: SubmissionEntryFrom;

		/**
		 * The maximum number of message parts that can be used for a [concatenated message](https://en.wikipedia.org/wiki/Concatenated_SMS).
		 * The default is `3`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		longMessageMaxParts?: number | null;

		/**
		 * The class of the message, as specified by §4 of the GSM 03.38 specification.
		 * You can provide either an integer value, or a mnemonic string.
		 * The default value is SIM_SPECIFIC.
		 * Numeric values are
		 * | Name | Value|
		 * |------|------|
		 * | FLASH_SMS | 0      |
		 * | ME_SPECIFIC | 1    |
		 * | SIM_SPECIFIC | 2   |
		 * | TE_SPECIFIC | 3   |
		 */
		messageClass?: SubmissionEntryMessageClass | null;

		/**
		 * The TP-PID value from GSM 03.40[.750] §9.2.3.9.
		 * You can provide either an integer value, or a mnemonic string.
		 * If unspecified, this property defaults to `0`, representing the IMPLICIT value.
		 * Numeric values are listed below
		 * | Name | Value|
		 * |----- |------|
		 * | IMPLICIT              | 00 |
		 * | SHORT_MESSAGE_TYPE_0  | 64 |
		 * | REPLACE_MESSAGE_1     | 65 |
		 * | REPLACE_MESSAGE_2     | 66 |
		 * | REPLACE_MESSAGE_3     | 67 |
		 * | REPLACE_MESSAGE_4     | 68 |
		 * | REPLACE_MESSAGE_5     | 69 |
		 * | REPLACE_MESSAGE_6     | 70 |
		 * | REPLACE_MESSAGE_7     | 71 |
		 * | RETURN_CALL           | 95 |
		 * | ME_DOWNLOAD           | 125 |
		 * | ME_DEPERSONALIZE      | 126 |
		 * | SIM_DOWNLOAD          | 127 |
		 */
		protocolId?: SubmissionEntryProtocolId | null;

		/**
		 * Allows you to choose routing. The default is STANDARD.
		 */
		routingGroup?: SubmissionEntryRoutingGroup | null;

		/**
		 * Identifies the recipients
		 * Instead of an array of structured objects, you can also provide a single object, a simple string or an array of strings.
		 * If you supply a string, the `type` is taken as INTERNATIONAL.
		 * Required
		 */
		SubmissionEntryTo: Array<SubmissionEntryTo>;

		/**
		 * Correlate the messages created from this submission to your data.
		 * The value can contain no more than 20 characters.
		 */
		userSuppliedId?: string | null;
	}

	/** An object that you use when posting messages. */
	export interface SubmissionEntryFormProperties {

		/**
		 * The message content as described in the `encoding`. If the `encoding` is BINARY, the body must contain only hexadecimal digits where one byte is represented as two digits. For example, if you want to send two bytes '0x05' and '0x1F', the message body must contain the text '051F'.
		 * The message content can also contain templates, read the [body templates section](#tag/Message) for more information.
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/**
		 * The type of delivery reports to request from the delivering network.
		 * The default value  is `ALL`. Please note that not all networks support delivery reports.
		 * ALL. All possible delivery reports
		 * ERRORS. Only error delivery reports
		 * NONE. No delivery reports
		 */
		deliveryReports: FormControl<SubmissionEntryDeliveryReports | null | undefined>,

		/**
		 * Describes the content of the message body.
		 * Typically this is TEXT, which is the default if no value is provided.
		 * If you need to send characters that are not covered by the [GSM 03.38](https://en.wikipedia.org/wiki/GSM_03.38) character set you will need to specify UNICODE.
		 * If you want to send a sequence of bytes, you must use BINARY.
		 * You can also or use the `auto-unicode` parameter of the Send Messages Operation.
		 * If you supply the value of `TEXT` while `auto-unicode` is `true` then your message may be converted to `UNICODE`.
		 * If you supply a value other than `TEXT` for this property while `auto-unicode` is `true` then no automatic conversion will take place.
		 */
		encoding: FormControl<MessageEncoding | null | undefined>,

		/**
		 * The maximum number of message parts that can be used for a [concatenated message](https://en.wikipedia.org/wiki/Concatenated_SMS).
		 * The default is `3`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		longMessageMaxParts: FormControl<number | null | undefined>,

		/**
		 * The class of the message, as specified by §4 of the GSM 03.38 specification.
		 * You can provide either an integer value, or a mnemonic string.
		 * The default value is SIM_SPECIFIC.
		 * Numeric values are
		 * | Name | Value|
		 * |------|------|
		 * | FLASH_SMS | 0      |
		 * | ME_SPECIFIC | 1    |
		 * | SIM_SPECIFIC | 2   |
		 * | TE_SPECIFIC | 3   |
		 */
		messageClass: FormControl<SubmissionEntryMessageClass | null | undefined>,

		/**
		 * The TP-PID value from GSM 03.40[.750] §9.2.3.9.
		 * You can provide either an integer value, or a mnemonic string.
		 * If unspecified, this property defaults to `0`, representing the IMPLICIT value.
		 * Numeric values are listed below
		 * | Name | Value|
		 * |----- |------|
		 * | IMPLICIT              | 00 |
		 * | SHORT_MESSAGE_TYPE_0  | 64 |
		 * | REPLACE_MESSAGE_1     | 65 |
		 * | REPLACE_MESSAGE_2     | 66 |
		 * | REPLACE_MESSAGE_3     | 67 |
		 * | REPLACE_MESSAGE_4     | 68 |
		 * | REPLACE_MESSAGE_5     | 69 |
		 * | REPLACE_MESSAGE_6     | 70 |
		 * | REPLACE_MESSAGE_7     | 71 |
		 * | RETURN_CALL           | 95 |
		 * | ME_DOWNLOAD           | 125 |
		 * | ME_DEPERSONALIZE      | 126 |
		 * | SIM_DOWNLOAD          | 127 |
		 */
		protocolId: FormControl<SubmissionEntryProtocolId | null | undefined>,

		/**
		 * Allows you to choose routing. The default is STANDARD.
		 */
		routingGroup: FormControl<SubmissionEntryRoutingGroup | null | undefined>,

		/**
		 * Correlate the messages created from this submission to your data.
		 * The value can contain no more than 20 characters.
		 */
		userSuppliedId: FormControl<string | null | undefined>,
	}
	export function CreateSubmissionEntryFormGroup() {
		return new FormGroup<SubmissionEntryFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deliveryReports: new FormControl<SubmissionEntryDeliveryReports | null | undefined>(undefined),
			encoding: new FormControl<MessageEncoding | null | undefined>(undefined),
			longMessageMaxParts: new FormControl<number | null | undefined>(undefined),
			messageClass: new FormControl<SubmissionEntryMessageClass | null | undefined>(undefined),
			protocolId: new FormControl<SubmissionEntryProtocolId | null | undefined>(undefined),
			routingGroup: new FormControl<SubmissionEntryRoutingGroup | null | undefined>(undefined),
			userSuppliedId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SubmissionEntryDeliveryReports { ALL = 'ALL', ERRORS = 'ERRORS', NONE = 'NONE' }

	export interface SubmissionEntryFrom {

		/**
		 * The address of the sender id.
		 * The validation for this field depends on the value of the `type`.
		 * INTERNATIONAL can start with `+`. It has a maximum length of 15 digits, and has to be longer than 6 digits.
		 * ALPHANUMERIC has a maximum length of 11 characters.
		 * SHORTCODE has a maximum length of 6 digits.
		 * REPLIABLE should not specify a value here.
		 */
		address?: string | null;

		/**
		 * The type of the sender id.
		 * If you want BulkSMS to collect replies to this message on your behalf, specify the type as REPLIABLE.  If the recipient is in a country where BulkSMS does not have a local reply number, the reply may incur costs that are more expensive than sending a local SMS in that country.
		 * If you operate a service from a shortcode in a locale that allows messaging from such a shortcode, you can specify SHORTCODE for the type.
		 * Required
		 */
		type: SubmissionEntryFromType;
	}
	export interface SubmissionEntryFromFormProperties {

		/**
		 * The address of the sender id.
		 * The validation for this field depends on the value of the `type`.
		 * INTERNATIONAL can start with `+`. It has a maximum length of 15 digits, and has to be longer than 6 digits.
		 * ALPHANUMERIC has a maximum length of 11 characters.
		 * SHORTCODE has a maximum length of 6 digits.
		 * REPLIABLE should not specify a value here.
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * The type of the sender id.
		 * If you want BulkSMS to collect replies to this message on your behalf, specify the type as REPLIABLE.  If the recipient is in a country where BulkSMS does not have a local reply number, the reply may incur costs that are more expensive than sending a local SMS in that country.
		 * If you operate a service from a shortcode in a locale that allows messaging from such a shortcode, you can specify SHORTCODE for the type.
		 * Required
		 */
		type: FormControl<SubmissionEntryFromType | null | undefined>,
	}
	export function CreateSubmissionEntryFromFormGroup() {
		return new FormGroup<SubmissionEntryFromFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SubmissionEntryFromType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SubmissionEntryFromType { INTERNATIONAL = 'INTERNATIONAL', ALPHANUMERIC = 'ALPHANUMERIC', SHORTCODE = 'SHORTCODE', REPLIABLE = 'REPLIABLE' }

	export enum SubmissionEntryMessageClass { FLASH_SMS = 'FLASH_SMS', ME_SPECIFIC = 'ME_SPECIFIC', SIM_SPECIFIC = 'SIM_SPECIFIC', TE_SPECIFIC = 'TE_SPECIFIC' }

	export enum SubmissionEntryProtocolId { IMPLICIT = 'IMPLICIT', SHORT_MESSAGE_TYPE_0 = 'SHORT_MESSAGE_TYPE_0', REPLACE_MESSAGE_1 = 'REPLACE_MESSAGE_1', REPLACE_MESSAGE_2 = 'REPLACE_MESSAGE_2', REPLACE_MESSAGE_3 = 'REPLACE_MESSAGE_3', REPLACE_MESSAGE_4 = 'REPLACE_MESSAGE_4', REPLACE_MESSAGE_5 = 'REPLACE_MESSAGE_5', REPLACE_MESSAGE_6 = 'REPLACE_MESSAGE_6', REPLACE_MESSAGE_7 = 'REPLACE_MESSAGE_7', RETURN_CALL = 'RETURN_CALL', ME_DOWNLOAD = 'ME_DOWNLOAD', ME_DEPERSONALIZE = 'ME_DEPERSONALIZE', SIM_DOWNLOAD = 'SIM_DOWNLOAD' }

	export enum SubmissionEntryRoutingGroup { ECONOMY = 'ECONOMY', STANDARD = 'STANDARD', PREMIUM = 'PREMIUM' }

	export interface SubmissionEntryTo {

		/** The phone number of the recipient.  It must be supplied if the `type` is INTERNATIONAL */
		address?: string | null;

		/**
		 * Custom fields that can be used in the message body. A value can be given if the `type` is INTERNATIONAL
		 * Read the [body templates section](#tag/Message) for more information.
		 */
		fields?: Array<string>;

		/** The id of a group in your phonebook.  A value can be given if the `type` is GROUP. */
		id?: string | null;

		/** The name of a group in your phonebook. A value can be given if the `type` is GROUP. */
		name?: string | null;

		/** Type of the recipient. The default value is INTERNATIONAL. */
		type?: SubmissionEntryToType | null;
	}
	export interface SubmissionEntryToFormProperties {

		/** The phone number of the recipient.  It must be supplied if the `type` is INTERNATIONAL */
		address: FormControl<string | null | undefined>,

		/** The id of a group in your phonebook.  A value can be given if the `type` is GROUP. */
		id: FormControl<string | null | undefined>,

		/** The name of a group in your phonebook. A value can be given if the `type` is GROUP. */
		name: FormControl<string | null | undefined>,

		/** Type of the recipient. The default value is INTERNATIONAL. */
		type: FormControl<SubmissionEntryToType | null | undefined>,
	}
	export function CreateSubmissionEntryToFormGroup() {
		return new FormGroup<SubmissionEntryToFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SubmissionEntryToType | null | undefined>(undefined),
		});

	}

	export enum SubmissionEntryToType { INTERNATIONAL = 'INTERNATIONAL', GROUP = 'GROUP' }

	export interface TransferEntry {

		/**
		 * An optional note that will be shown on the credit history of your account.
		 * The maximum length of the comment is 100.
		 */
		commentOnFrom?: string | null;

		/**
		 * An optional note that will be shown on the credit history of the recipient's account.
		 * The maximum length of the comment is 100.
		 */
		commentOnTo?: string | null;

		/**
		 * The amount of credits to transfer.
		 * Required
		 * Type: double
		 */
		credits: number;

		/**
		 * The numeric user ID of the account that will receive the credits.
		 * The ID must match the username.
		 * Required
		 * Type: double
		 */
		toUserId: number;

		/**
		 * The username of the account that will receive the credits.
		 * Required
		 */
		toUsername: string;
	}
	export interface TransferEntryFormProperties {

		/**
		 * An optional note that will be shown on the credit history of your account.
		 * The maximum length of the comment is 100.
		 */
		commentOnFrom: FormControl<string | null | undefined>,

		/**
		 * An optional note that will be shown on the credit history of the recipient's account.
		 * The maximum length of the comment is 100.
		 */
		commentOnTo: FormControl<string | null | undefined>,

		/**
		 * The amount of credits to transfer.
		 * Required
		 * Type: double
		 */
		credits: FormControl<number | null | undefined>,

		/**
		 * The numeric user ID of the account that will receive the credits.
		 * The ID must match the username.
		 * Required
		 * Type: double
		 */
		toUserId: FormControl<number | null | undefined>,

		/**
		 * The username of the account that will receive the credits.
		 * Required
		 */
		toUsername: FormControl<string | null | undefined>,
	}
	export function CreateTransferEntryFormGroup() {
		return new FormGroup<TransferEntryFormProperties>({
			commentOnFrom: new FormControl<string | null | undefined>(undefined),
			commentOnTo: new FormControl<string | null | undefined>(undefined),
			credits: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			toUserId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			toUsername: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Webhook {
		active?: boolean | null;
		contactEmailAddress?: string | null;

		/** Type: double */
		id?: number | null;
		name?: string | null;
		onWebApp?: boolean | null;
		triggerScope?: string | null;
		url?: string | null;
	}
	export interface WebhookFormProperties {
		active: FormControl<boolean | null | undefined>,
		contactEmailAddress: FormControl<string | null | undefined>,

		/** Type: double */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		onWebApp: FormControl<boolean | null | undefined>,
		triggerScope: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebhookFormGroup() {
		return new FormGroup<WebhookFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			contactEmailAddress: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			onWebApp: new FormControl<boolean | null | undefined>(undefined),
			triggerScope: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebhookEntry {

		/**
		 * Indicates whether you want the webhook activated.
		 * If the value is `true`, the webhook at the given `url` will be invoked with an empty array (`[]`) as part of the validation process.
		 * If the webhook responds with a `2xx` status code, the submission is accepted; if not the webhook is not created (or updated).
		 * If the value is `false` the webhook will be inactive, and it will not be invoked when messages are `SENT` or `RECEIVED`.
		 * The default value is `true`.
		 */
		active?: boolean | null;

		/**
		 * The email address to which emails will be sent if there are problem with invoking the webhook.
		 * The value must be a valid email address.
		 * If this value is `null`, no email will be sent.
		 * It is `null` by default.
		 */
		contactEmailAddress?: string | null;

		/**
		 * Specifies how to invoke your webhook.
		 * If the value is `ONE` the array POSTed to your webhook will contain no more than a single message.  Use this option if your webhook logic is unable to handle more than one messages at a time.
		 * If the value is `MANY` the array POSTed to your webhook can contain up to 10 messages.  This is the recommended option.  The number of calls made to your webhook would be less and this will speed up your total processing time.
		 * If your webhook fails for an invoke that has more than one message, each message in the array will automatically be retried one at a time.
		 * This value defaults to `ONE` - but it is recommended that you set this property to `MANY`.
		 */
		invokeOption?: WebhookEntryInvokeOption | null;

		/**
		 * A text identifier for the webhook.
		 * More than one webhook cannot have the same name.
		 * Required
		 */
		name: string;

		/**
		 * Indicates whether you want to show this webhook on the Web App.
		 * Webhooks shown there can be updated by the user that use the public Web site.
		 * The default value is `true`.
		 */
		onWebApp?: boolean | null;

		/**
		 * Specifies when the webhook will be triggered.
		 * Please note the values are case sensitive.
		 * If the value is `SENT`, the webhook will be called when a status update becomes available for a message you sent (i.e. a mobile terminating (MT) message).
		 * If the value is `RECEIVED`, the webhook will be called when a message is received (i.e. a mobile originating (MO) message).
		 * Note that this field forces you to create two separate webhook entries if you want to collect all messages.  However,  you can use the same `url` for both webhooks if you want.
		 * Required
		 */
		triggerScope: MessageType;

		/**
		 * The location of the webhook.
		 * In addition to being a [valid URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#Syntax), the url must also start with `http` or `https`.
		 * Required
		 */
		url: string;
	}
	export interface WebhookEntryFormProperties {

		/**
		 * Indicates whether you want the webhook activated.
		 * If the value is `true`, the webhook at the given `url` will be invoked with an empty array (`[]`) as part of the validation process.
		 * If the webhook responds with a `2xx` status code, the submission is accepted; if not the webhook is not created (or updated).
		 * If the value is `false` the webhook will be inactive, and it will not be invoked when messages are `SENT` or `RECEIVED`.
		 * The default value is `true`.
		 */
		active: FormControl<boolean | null | undefined>,

		/**
		 * The email address to which emails will be sent if there are problem with invoking the webhook.
		 * The value must be a valid email address.
		 * If this value is `null`, no email will be sent.
		 * It is `null` by default.
		 */
		contactEmailAddress: FormControl<string | null | undefined>,

		/**
		 * Specifies how to invoke your webhook.
		 * If the value is `ONE` the array POSTed to your webhook will contain no more than a single message.  Use this option if your webhook logic is unable to handle more than one messages at a time.
		 * If the value is `MANY` the array POSTed to your webhook can contain up to 10 messages.  This is the recommended option.  The number of calls made to your webhook would be less and this will speed up your total processing time.
		 * If your webhook fails for an invoke that has more than one message, each message in the array will automatically be retried one at a time.
		 * This value defaults to `ONE` - but it is recommended that you set this property to `MANY`.
		 */
		invokeOption: FormControl<WebhookEntryInvokeOption | null | undefined>,

		/**
		 * A text identifier for the webhook.
		 * More than one webhook cannot have the same name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Indicates whether you want to show this webhook on the Web App.
		 * Webhooks shown there can be updated by the user that use the public Web site.
		 * The default value is `true`.
		 */
		onWebApp: FormControl<boolean | null | undefined>,

		/**
		 * Specifies when the webhook will be triggered.
		 * Please note the values are case sensitive.
		 * If the value is `SENT`, the webhook will be called when a status update becomes available for a message you sent (i.e. a mobile terminating (MT) message).
		 * If the value is `RECEIVED`, the webhook will be called when a message is received (i.e. a mobile originating (MO) message).
		 * Note that this field forces you to create two separate webhook entries if you want to collect all messages.  However,  you can use the same `url` for both webhooks if you want.
		 * Required
		 */
		triggerScope: FormControl<MessageType | null | undefined>,

		/**
		 * The location of the webhook.
		 * In addition to being a [valid URI](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#Syntax), the url must also start with `http` or `https`.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebhookEntryFormGroup() {
		return new FormGroup<WebhookEntryFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			contactEmailAddress: new FormControl<string | null | undefined>(undefined),
			invokeOption: new FormControl<WebhookEntryInvokeOption | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			onWebApp: new FormControl<boolean | null | undefined>(undefined),
			triggerScope: new FormControl<MessageType | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WebhookEntryInvokeOption { ONE = 'ONE', MANY = 'MANY' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List blocked numbers
		 * Get blocked-numbers
		 * @param {number} min_id Records with an `id` that is greater or equal to min-id will be returned. The default value is `0`.  You can add 1 to an id that you previously retrieved, to return subsequent records.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit The maximum number of records to return. The default value is `10000`. The value cannot be greater than 10000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {BlockedNumber} A list of BlockedNumber objects
		 */
		Blocked_numbersGetByMin_idAndLimit(min_id: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<BlockedNumber> {
			return this.http.get<BlockedNumber>(this.baseUri + 'blocked-numbers?min_id=' + min_id + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a blocked number
		 * Blocked numbers are phone numbers to which your account is not permitted to send messages.
		 * The numbers can be created via this API, by a recipient replying with a STOP message to one
		 * of your previous SENT messages, or by a BulkSMS administrator.
		 * Sending a message to a blocked number will result in the message being assigned a status of
		 * `FAILED.BLOCKED`. Messages sent to blocked numbers are billed to your account.
		 * Post blocked-numbers
		 * @param {Array<string>} requestBody Maximum size: `1000` items
		 * @return {void} Empty body upon success
		 */
		Blocked_numbersPost(requestBody: Array<string>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'blocked-numbers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Transfer credits to another account
		 * Before you can use the transfer credits endpoint, the _credit-transfer facility_ must be activated for your account.  You can request activation from `support@bulksms.com`.
		 * The recipient must be an enabled account that uses the same currency as your account.
		 * Post credit/transfer
		 * @param {TransferEntry} requestBody Contains details of the transfer request.
		 * @return {void} An empty body when the credits were transferred OK.
		 */
		CreditTransferPost(requestBody: TransferEntry, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'credit/transfer', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve Messages
		 * Retrieve the messages you have sent or received.
		 * Scheduled messages are available for retrieval only after the delivery date.
		 * All the parameters are optional.  If a value is not supplied for `filter`, the messages are not filtered.
		 * Messages can be filtered by supplying query clauses in the `filter` parameter. Each clause has the form `name=value` where `name` is the name of a filter field and `value` is a valid value for that field.  A value for a field is optional. Include a clause for a field in the filter only when there is a need to fetch messages that match some value for that field.
		 * For a numeric filter field, you can also use the less than operator (`<`).
		 * If present, the filter value must have at least one clause, but it can contain a combination of clauses. Multiple clauses are separated with the `&` symbol.  Semantically, multiple clauses form a [logical conjunction](https://en.wikipedia.org/wiki/Logical_conjunction).
		 * For example, if you want to list all messages that were sent as part of a particular submission, your filter contains two clauses and will look something like this
		 * ```
		 * type%3DSENT&submission.id%3D1-00000000000522347562
		 * ```
		 * Because `filter` is a request parameter, it is important to note that the value for this parameter must be *URL encoded*. In particular, the `=` encodes to `%3D` and the `&` encodes to `%26`.  Note that you do not have to encode the `<` character.
		 * Using the previous example to illustrate; after encoding and encasing it, the clauses are transformed into a request that looks like this
		 * ```
		 * GET /v1/messages?filter=type%3DSENT%26submission.id%3D1-00000000000522347562
		 * ```
		 * If the field name or the field value of a clause is not valid, a [bad_request error](errors#bad-request) is returned instead of the usual result.  The `detail` field of this error provides more information about the problem.
		 * The table below lists the fields available for filtering
		 * | Field | Type   | Values | Note and example |
		 * |-------|------|--------------------|------|
		 * | id            | Integer  | Positive integer  | Use the `id` field with `<` (or with `>`) to fetch messages that are older (or newer) than those that are already fetched. <br/>`filter=id<123456` |
		 * | type          | String  | SENT, RECEIVED  | SENT are Mobile Terminating (MT) SMSs; RECEIVED are Mobile Originating (MO) SMSs.<br/>`filter=type%3DSENT` |
		 * | submission.id | String  |  | `filter=submission.id%3D1-00000000000522347562` |
		 * | status.type   | String  | ACCEPTED, SENT, DELIVERED, FAILED  | See the message `status.type` field for more information. <br/>`filter=status.type%3DDELIVERED` |
		 * | status.id| String  |  | See the message `status.id` field for more information. `filter=status.id%3DFAILED.EXPIRED`|
		 * | submission.date | String | Formatted Date | A fully specified date (e.g. 2017-01-01T10:00:00+01:00).  Use this field with `<=`, `<`, `>` or `>=` to limit the values. <br/>`filter=submission.date%3E%3D2017-01-01T10%3A00%3A00%2B01%3A00` |
		 * | userSuppliedId  | String | | Use a string value you specified in the `userSuppliedId` property when you sent the message. Only `SENT` messages will be retrieved. <br/>`filter=userSuppliedId%3Dacc009876` |
		 * Get messages
		 * @param {string} limit The maximum number of messages that are returned.  The default is 1000.
		 * The value of `limit` is not a guarantee that a specific number of messages will be in the response, even if there are more messages available.  Consider the case where you have 150 messages and you specify `limit=50`.  It is possible that only 49 messages will be returned.  The  way to make sure that there are no more messages is to submit a new call using the `id` filter field with the `<` operator (described below).
		 * @param {string} filter See the message filtering for more information.
		 * @param {MessagesGetByLimitAndFilterAndSortOrderSortOrder} sortOrder The default value is DESCENDING
		 * If the `sortOrder` is DESCENDING, the newest messages be first in the result.  ASCENDING places the oldest messages on top of the response.
		 * @return {Array<Message>} Contains the requested array of messages
		 */
		MessagesGetByLimitAndFilterAndSortOrder(limit: string | null | undefined, filter: string | null | undefined, sortOrder: MessagesGetByLimitAndFilterAndSortOrderSortOrder | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Message>> {
			return this.http.get<Array<Message>>(this.baseUri + 'messages?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sortOrder=' + sortOrder, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Send Messages
		 * Send messages to one or more recipients.
		 * You can post up to `30 000` messages in a batch.
		 * But note that the `deduplication-id` is set per submission, so it is recommended that you use a smaller number, like `4000` per submission in order to make resubmissions on network failures more practical.
		 * #### Repliability
		 * When a sent message is _repliable_,  the BulkSMS system can process an SMS response sent by your recipient.
		 * The message sent by your customer is called a mobile originating (MO) message and would be available under `RECEIVED` messages.
		 * You can obtain a list of MOs using the [retrieve messages API call](#tag/Message%2Fpaths%2F~1messages%2Fget).
		 * In addition you can also get a list of the MOs that are associated with a specific sent message (see the [list related messages API call](#tag/Message%2Fpaths%2F~1messages~1%7Bid%7D~1relatedReceivedMessages%2Fget)).
		 * If you use a specific _sender id_ in the `from` property of the send message, the message will not be repliable.
		 * If you want a message to be repliable, you need to specify `REPLIABLE` in the `from.type` property.
		 * If you do not set the `from` property, your account settings are considered to determine whether or not the message is repliable.
		 * If the _default repliable_ setting on your account is _yes_ then the message will be repliable.
		 * If this setting is _no_, the message will not be repliable.
		 * #### Body templates
		 * When sending a message you can use template fields to customise the message text.
		 * *Field based templates* allow you to create a message with place-holders for custom fields.  Fields are identified by a zero based index; the first field is `F0`, the second is `F1` and so on.
		 * For example, let's say you want to send a daily SMS message to all your clients that tell them what their current balance is.  The `body` of the message could look something like this
		 * ```
		 * Good morning {F0######}, your balance is {F1######}
		 * ```
		 * In this message, the first field, `F0`, is the name  of the customer and he second field `F1` is the balance for that customer.  The `#` used to specify the maximum length  of the field.  Note that the maximum length allowed for the value includes the space taken by the braces, template name and hash symbol.  For example, the value `{F0#}` specifies a maximum length of `5`.  If the data is longer than this length, the data will be truncated when the message body is constructed.
		 * The data fields are provided in the property named `fields` in the `to` element.  Here is a complete example of how this might look
		 * ```
		 * {
		 * "body": "Good morning {F0######}, your balance is {F1######}",
		 * "to":  [
		 * {"address": "27456789","fields": ["Harry", "$1345.23"] },
		 * {"address": "27456785","fields": ["Sally", "$2345.58"] }
		 * ]
		 * }
		 * ```
		 * If you are sending to contacts (or to groups) in your phonebook, you can use the *Phonebook based templates*.  These are similar to the templates described above, but they have specific names. The template for the contact's first name is identified by `fn` and the template for the contact's surname is identified by `sn`.  Below in an example that will work if the numbers are registered in your phonebook.
		 * ```
		 * {
		 * "body": "Hi {fn######} {sn######}, have a great day!",
		 * "to":  [
		 * {"address": "27456789" },
		 * {"address": "27456785" }
		 * ]
		 * }
		 * ```
		 * Post messages
		 * @param {number} deduplication_id Safeguards against the possibility of sending the same messages more than once.
		 * If a communication failure occurs during a submission, you cannot be sure that the submission was processed; therefore you would have to submit it again. When you post the retry, you must use the `deduplication-id` of the original post. The BulkSMS system uses this ID to check that the request was not previously processed. (If it was previously processed, the submission will succeed, and the behaviour will be indistinguishable to you from a non-duplicated submission). The ID expires after about 12 hours.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} auto_unicode Specifies how to deal with message text that contains characters not present in the GSM 03.38 character set.
		 * Messages that contain only GSM 03.38 characters are not affected by this setting. 
		 * If the value is `true` then a message containing non-GSM 03.38 characters will be transmitted as a Unicode SMS (which is most likely more costly). 
		 * Please note: when `auto-unicode` is `true` and the value of the `encoding` property is specified as `UNICODE`, the message will always be sent as `UNICODE`.
		 * If the value is `false` and the `encoding` property is `TEXT` then non-GSM 03.38 characters will be replaced by the `?` character.
		 * When using this setting on the API, you should take case to ensure that your message is _clean_.  
		 * Invisible unicode and unexpected characters could unintentionally convert an message to `UNICODE`.  A common mistake is to use the backtick character (\`) which is unicode and will turn your `TEXT` message into a `UNICODE` message.
		 * @param {Date} schedule_date Allows you to send a message in the future.
		 * An example value is `2019-02-18T13:00:00+02:00`.  It encodes to `2019-02-18T13%3A00%3A00%2B02%3A00`.
		 * Credits are deducted from your account immediately. Once submitted, scheduled messages cannot be changed or cancelled.
		 * The date can be a maximum of two years in the future. If the value is in the past, the message will be sent immediately.
		 * The date format requires you to supply an offset from UTC. You can decide to use the offset of your timezone, or maybe the zone of the recipient's location is more appropriate.
		 * If the destination is a group, the group members are determined at the time that you submit the message; not the time the message is scheduled to be sent.
		 * @param {string} schedule_description A note that is stored together with a scheduled submission, which could be used to more easily identify the scheduled submission at a later date.
		 * The value of this field is ignored if the `schedule-date` is not provided.
		 * A value that is longer than 256 characters is truncated.
		 * @param {Array<SubmissionEntry>} requestBody Contains details of the message (or messages) that you want to send.
		 * One `SubmissionEntry` can produce many messages, and your request may contain multiple such entries.
		 * @return {void} 
		 */
		MessagesPostByDeduplication_idAndAuto_unicodeAndSchedule_dateAndSchedule_description(deduplication_id: number | null | undefined, auto_unicode: boolean | null | undefined, schedule_date: Date | null | undefined, schedule_description: string | null | undefined, requestBody: Array<SubmissionEntry>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'messages?deduplication_id=' + deduplication_id + '&auto_unicode=' + auto_unicode + '&schedule_date=' + schedule_date?.toISOString() + '&schedule_description=' + (schedule_description == null ? '' : encodeURIComponent(schedule_description)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Send message by simple GET or POST
		 * A really simple interface for people who require a GET mechanism to submit a single message.
		 * The URI is interpreted as UTF-8. HTTP Basic Auth is used for authentication.
		 * __Note__ BulkSMS recommends that you use the more flexible Send Messages Operation when submitting SMS messages from your application.
		 * Here is an example of a GET
		 * ```http
		 * GET /v1/messages/send?to=%2b270000000&body=Hello%20World
		 * ```
		 * You can also use the same parameters to POST form encoded fields to `/messages`.
		 * Here is an example of a POST
		 * ```http
		 * POST /v1/messages
		 * Content-Type: application/x-www-form-urlencoded
		 * to=%2b27000000000&body=Hello+World
		 * ```
		 * Get messages/send
		 * @param {string} to The phone number of the recipient.
		 * @param {string} body The text you want to send.
		 * @param {string} deduplication_id Refer to the `deduplication-id` parameter.
		 * @return {void} 
		 */
		MessagesSendGetByToAndBodyAndDeduplication_id(to: string, body: string, deduplication_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'messages/send?to=' + (to == null ? '' : encodeURIComponent(to)) + '&body=' + (body == null ? '' : encodeURIComponent(body)) + '&deduplication_id=' + (deduplication_id == null ? '' : encodeURIComponent(deduplication_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Show Message
		 * Get a the message by `id`.
		 * ```http
		 * GET /v1/messages/4023457654
		 * ```
		 * Get messages/{id}
		 * @param {string} id The `id` of the message you want to retrieve
		 * @return {Message} The message detail
		 */
		Messages_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Message> {
			return this.http.get<Message>(this.baseUri + 'messages/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Related Messages
		 * Get the messages related to a sent message identified by `id`.
		 * For more information how this work, see the `relatedSentMessageId` field in the message.
		 * Get messages/{id}/relatedReceivedMessages
		 * @param {string} id The `id` of the sent message
		 * @return {Array<Message>} An array of related messages.  If the `id` is not a sent message, the array will be empty.
		 */
		Messages_idRelatedReceivedMessagesGet(id: string, headersHandler?: () => HttpHeaders): Observable<Array<Message>> {
			return this.http.get<Array<Message>>(this.baseUri + 'messages/' + (id == null ? '' : encodeURIComponent(id)) + '/relatedReceivedMessages', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get profile
		 * Returns information about your user profile
		 * Get profile
		 * @return {Profile} A Profile object
		 */
		ProfileGet(headersHandler?: () => HttpHeaders): Observable<Profile> {
			return this.http.get<Profile>(this.baseUri + 'profile', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Upload an attachment via a signed URL
		 * When composing an SMS, you can add SMS attachments by adding a URL to your text. When the recipient clicks on the URL, the attached file will be downloaded and opened on their mobile device.
		 * The best way to do this is to store the file on a web server you own and use that URL in the SMS text. This URL will be easily recognisable to your message recipient and ties your message back to your brand or company.
		 * If that’s not possible, you can use BulkSMS storage to keep the files that you want to attach to your SMS. These files will be deleted after 30 days as per our fair use policy.
		 * We recommend you keep this file size below 20 MB, as larger files may be deleted without warning.
		 * To use the BulkSMS storage, follow these three steps:
		 * **Step 1**: Use your BulkSMS credentials (or your API Token) to request a pre-signed URL.  This is what this `pre-sign-attachment` method is for.  It returns a PreSignInfo object that you will use in the other two steps.
		 * **Step 2**: Upload the file using a standard HTTP `PUT` request. For your `PUT` request, use the value of `putURL` from the PreSignInfo object as the request address.  You also have to add the entries from the `fields` property (of the PreSignInfo object) to the headers of your 'PUT' request. You send the file content as the body of the `PUT` request.
		 * **Step 3**: Now you can use the value of `fetchURL` from the PreSignInfo object in the body of your SMS messages and send those using the usual messaging API (described elsewhere in this document).  If you send the same file to many recipients, it is safe to use the same URL for all of them.
		 * If you need to, take a closer look at the example program (on the right-hand side) to get a better idea of how to implement this process.
		 * Post rmm/pre-sign-attachment
		 * @param {PreSignRequest} requestBody Describes the file to upload
		 * @return {PreSignInfo} A PreSignInfo object
		 */
		RmmPre_sign_attachmentPost(requestBody: PreSignRequest, headersHandler?: () => HttpHeaders): Observable<PreSignInfo> {
			return this.http.post<PreSignInfo>(this.baseUri + 'rmm/pre-sign-attachment', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List webhooks
		 * Contains a list of your webhooks
		 * Get webhooks
		 * @return {Array<Webhook>} Array of Webhooks
		 */
		WebhooksGet(headersHandler?: () => HttpHeaders): Observable<Array<Webhook>> {
			return this.http.get<Array<Webhook>>(this.baseUri + 'webhooks', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a webhook
		 * A webhook is an URL that you can register when you want the BulkSMS system to notify you about your messages.
		 * You can register multiple webhooks, and each one will be called.  (Note: you can also use our [Web App](https://www.bulksms.com/account/#!/advanced-settings/webhooks) to manage your webhooks interactively.)
		 * If you want to be notified of `SENT` messages and `RECEIVED` messages you need to create two webhooks.
		 * ### Implementing your webhook
		 * Code samples of Webhook implementations:
		 * * [PHP](samples/webhook-php.html)
		 * When you implement your webhook, there are a few rules to be aware of:
		 * - Your webhook must process `POST` requests that contains an array of messages in the post body.  This input given to your webhook has the same structure as the output produced when you call [Retrieve Messages](#tag/Message%2Fpaths%2F~1messages%2Fget).
		 * - When you register or update your webhook, the URL will be tested by invoking it with an empty array (`[]`).
		 * - It is possible for your webhook to receive multiple updates for the same message and status. It happens from time to time that the mobile network duplicates status updates.
		 * - The order by which the webhook is invoked can be unexpected.  For example, if sender A replies before sender B, your webhook might get the reply from B first.
		 * - The webhook is expected to comply with good practices with regard to the status code it responds with.
		 * - A status code in the `1xx` and `2xx` range is taken as an acknowledgement that the invocation was received and that the webhook host is ready to receive another.
		 * - A status code in the `4xx` range is taken as a permanent problem and indicates that the webhook cannot process the message. The specific message that caused the error will be discarded, but your webhook will be invoked again when another message becomes available.
		 * - Any other status code will be taken as a temporary problem; and indicates that the BulkSMS system should retry. The specific message that caused the error will not be discarded and your webhook will be invoked again with this message (see the subsequent section for more details on retry processing).
		 * - Your webhook has to respond within `30` seconds.  If no response is given in this time, the invocation will be retried.
		 * - It is good idea to add a secret to your URL in order to make it more secure. Here is an example:
		 * `https://www.example.com/hook.php?secret=pass763265word`
		 * - You can use a non-standard port if necessary, for example: `https://www.example.com:8321/hook.php?secret=pass763265word`
		 * - Your webhook can be called from a dynamic range of IP addresses, and you should be prepared to accept that the source IP can change in the future, without notice. This practice has become common with cloud-hosted solutions. If this is an insurmountable problem for your organisation, please contact support.
		 * ### Testing and troubleshooting
		 * Use `curl` to test your webhook.  The command below is a template that shows how the BulkSMS system invokes your code. It must return `200` for your URL before you can register it as a webhook.
		 * ```
		 * curl -i -X POST 'YOUR_URL_HERE' --header 'Content-Type: application/json' --header 'User-Agent: BulkSMS Invoker' --data-raw '[]'
		 * ```
		 * When a `200` is returned for an empty array, modify the template to post multiple messages by adding JSON between the square brackets ('[]').
		 * After your webhook is successfully registered, you can send a message to `1111111` for an end-to-end test.  The delivery to this test number will fail, but your webhook will be invoked (and there are no charges).
		 * ### The retry process
		 * The process the BulkSMS systems follow to handle retries is roughly the following:
		 * - The first retry is scheduled for 90 seconds into the future.
		 * - After the first retry, subsequent failures will have longer delays, following this sequence - 3 minutes, 6 minutes, 12 minutes thereafter the message will be retried every 15 minutes for a 2 day period.
		 * - When all retries fail, the message will be discarded.
		 * ### Problem reports via email
		 * Your are strongly advised to provide an email address when you register your webhook.
		 * A notice will be sent to this email address to keep you in the loop whenever there are problems with your webhook.
		 * In order to prevent your inbox from being flooded, the system sends a notice about an observed error no more than once in a 24 hour period.
		 * The following emails can be expected
		 * - A __message retrying__ email is sent after an invocation has failed with a retry-able error.  This email is an early warning, allowing you to investigate your systems.
		 * - A __message discarded__ email is sent after failure email is send when a message is discarded as a consequence of a non-retry-able error.
		 * Post webhooks
		 * @param {WebhookEntry} requestBody Contains the property values for your new webhook
		 * @return {Webhook} Contains the webhook you created
		 */
		WebhooksPost(requestBody: WebhookEntry, headersHandler?: () => HttpHeaders): Observable<Webhook> {
			return this.http.post<Webhook>(this.baseUri + 'webhooks', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a webhook
		 * Delete webhooks/{id}
		 * @return {void} The webhook was deleted successfully
		 */
		Webhooks_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'webhooks/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Read a webhook
		 * Get webhooks/{id}
		 * @return {Webhook} The properties of a specific webhook
		 */
		Webhooks_idGet(headersHandler?: () => HttpHeaders): Observable<Webhook> {
			return this.http.get<Webhook>(this.baseUri + 'webhooks/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a webhook
		 * Post webhooks/{id}
		 * @param {WebhookEntry} requestBody Contains the new property values for the webhook
		 * @return {Webhook} The properties of the updated webhook
		 */
		Webhooks_idPost(requestBody: WebhookEntry, headersHandler?: () => HttpHeaders): Observable<Webhook> {
			return this.http.post<Webhook>(this.baseUri + 'webhooks/{id}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

	export enum MessagesGetByLimitAndFilterAndSortOrderSortOrder { ASCENDING = 'ASCENDING' }

}

