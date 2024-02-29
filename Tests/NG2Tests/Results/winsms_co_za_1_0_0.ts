import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreditBalanceResponse {

		/**
		 * The current remaining credit balance for the account. Contains a single decimal place
		 * Type: double
		 */
		creditBalance?: number | null;

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp?: string | null;

		/** The current version of the API of the endpoint that was called */
		version?: string | null;
	}
	export interface CreditBalanceResponseFormProperties {

		/**
		 * The current remaining credit balance for the account. Contains a single decimal place
		 * Type: double
		 */
		creditBalance: FormControl<number | null | undefined>,

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp: FormControl<string | null | undefined>,

		/** The current version of the API of the endpoint that was called */
		version: FormControl<string | null | undefined>,
	}
	export function CreateCreditBalanceResponseFormGroup() {
		return new FormGroup<CreditBalanceResponseFormProperties>({
			creditBalance: new FormControl<number | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
			timeStamp: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreditTransferDetails {

		/**
		 * The WinSMS account number of the account to which credits will be added.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		receivingAccountNumber: number;

		/**
		 * The WinSMS account number of the account from which credits will be deducted.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sendingAccountNumber: number;

		/**
		 * The number of credits to transfer from the sending account to the receiving account.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		transferQuantity: number;
	}
	export interface CreditTransferDetailsFormProperties {

		/**
		 * The WinSMS account number of the account to which credits will be added.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		receivingAccountNumber: FormControl<number | null | undefined>,

		/**
		 * The WinSMS account number of the account from which credits will be deducted.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sendingAccountNumber: FormControl<number | null | undefined>,

		/**
		 * The number of credits to transfer from the sending account to the receiving account.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		transferQuantity: FormControl<number | null | undefined>,
	}
	export function CreateCreditTransferDetailsFormGroup() {
		return new FormGroup<CreditTransferDetailsFormProperties>({
			receivingAccountNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sendingAccountNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			transferQuantity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreditTransferResponse {

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp?: string | null;

		/** A boolean value indictating whether the credits were successfully transfered from the sending account into the receiving account. */
		transferSuccessful?: boolean | null;

		/** The current version of the API of the endpoint that was called */
		version?: string | null;
	}
	export interface CreditTransferResponseFormProperties {

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp: FormControl<string | null | undefined>,

		/** A boolean value indictating whether the credits were successfully transfered from the sending account into the receiving account. */
		transferSuccessful: FormControl<boolean | null | undefined>,

		/** The current version of the API of the endpoint that was called */
		version: FormControl<string | null | undefined>,
	}
	export function CreateCreditTransferResponseFormGroup() {
		return new FormGroup<CreditTransferResponseFormProperties>({
			statusCode: new FormControl<number | null | undefined>(undefined),
			timeStamp: new FormControl<string | null | undefined>(undefined),
			transferSuccessful: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteScheduledResponse {

		/**
		 * An array of ***deletedMessageStatus*** objects detailing the deleted status of each message requested for deletion.
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		deletedMessageStatuses?: Array<DeletedMessageStatus>;

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp?: string | null;

		/** The current version of the API of the endpoint that was called */
		version?: string | null;
	}
	export interface DeleteScheduledResponseFormProperties {

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp: FormControl<string | null | undefined>,

		/** The current version of the API of the endpoint that was called */
		version: FormControl<string | null | undefined>,
	}
	export function CreateDeleteScheduledResponseFormGroup() {
		return new FormGroup<DeleteScheduledResponseFormProperties>({
			statusCode: new FormControl<number | null | undefined>(undefined),
			timeStamp: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletedMessageStatus {

		/**
		 * The WinSMS API Message Id identifying the SMS message.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		apiMessageId?: number | null;

		/**
		 * The number of credits refunded to your account after deleting the scheduled message.
		 * If the deletion was unsuccessful, this value will be 0.
		 * Type: double
		 */
		creditCost?: number | null;

		/**
		 * If the ***deleted*** value is false, this will contain an error code indicating the reason for the failure. If the scheduled SMS message was successfully deleted, this value will be blank.
		 */
		deleteError?: string | null;

		/**
		 * A boolean value indicating whether a scheduled SMS message was successfully deleted
		 */
		deleted?: boolean | null;

		/**
		 * The mobile number of the recipient of the SMS message, using the international E164 (without the plus) format
		 */
		mobileNumber?: string | null;
	}
	export interface DeletedMessageStatusFormProperties {

		/**
		 * The WinSMS API Message Id identifying the SMS message.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		apiMessageId: FormControl<number | null | undefined>,

		/**
		 * The number of credits refunded to your account after deleting the scheduled message.
		 * If the deletion was unsuccessful, this value will be 0.
		 * Type: double
		 */
		creditCost: FormControl<number | null | undefined>,

		/**
		 * If the ***deleted*** value is false, this will contain an error code indicating the reason for the failure. If the scheduled SMS message was successfully deleted, this value will be blank.
		 */
		deleteError: FormControl<string | null | undefined>,

		/**
		 * A boolean value indicating whether a scheduled SMS message was successfully deleted
		 */
		deleted: FormControl<boolean | null | undefined>,

		/**
		 * The mobile number of the recipient of the SMS message, using the international E164 (without the plus) format
		 */
		mobileNumber: FormControl<string | null | undefined>,
	}
	export function CreateDeletedMessageStatusFormGroup() {
		return new FormGroup<DeletedMessageStatusFormProperties>({
			apiMessageId: new FormControl<number | null | undefined>(undefined),
			creditCost: new FormControl<number | null | undefined>(undefined),
			deleteError: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			mobileNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorDetails {

		/**
		 * A plain text description of the error that occurred, and possible solutions if available.
		 */
		errorMessage?: string | null;

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;

		/**
		 * The date/time the request was processed, in the format YYYYMMDDhhmmssSSS
		 */
		timeStamp?: string | null;

		/**
		 * The current version of the API of the endpoint that was called
		 */
		version?: string | null;
	}
	export interface ErrorDetailsFormProperties {

		/**
		 * A plain text description of the error that occurred, and possible solutions if available.
		 */
		errorMessage: FormControl<string | null | undefined>,

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,

		/**
		 * The date/time the request was processed, in the format YYYYMMDDhhmmssSSS
		 */
		timeStamp: FormControl<string | null | undefined>,

		/**
		 * The current version of the API of the endpoint that was called
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
			timeStamp: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IncomingMessage {

		/**
		 * The unique API message id assigned to this incoming message.
		 * Type: double
		 */
		incomingApiMessageId?: number | null;

		/**
		 * The text of the incoming SMS message.
		 */
		messageText?: string | null;

		/**
		 * The mobile number that sent the SMS message, displayed using the international E164 (without the plus) format
		 */
		mobileNumber?: string | null;

		/**
		 * The API message id of the most recent message sent to the mobile number that responded.
		 * Type: double
		 */
		outgoingApiMessageId?: number | null;

		/**
		 * The date and time the message was received by WinSMS, in the format YYYYMMDDHHmm.
		 */
		receiveTime?: string | null;
	}
	export interface IncomingMessageFormProperties {

		/**
		 * The unique API message id assigned to this incoming message.
		 * Type: double
		 */
		incomingApiMessageId: FormControl<number | null | undefined>,

		/**
		 * The text of the incoming SMS message.
		 */
		messageText: FormControl<string | null | undefined>,

		/**
		 * The mobile number that sent the SMS message, displayed using the international E164 (without the plus) format
		 */
		mobileNumber: FormControl<string | null | undefined>,

		/**
		 * The API message id of the most recent message sent to the mobile number that responded.
		 * Type: double
		 */
		outgoingApiMessageId: FormControl<number | null | undefined>,

		/**
		 * The date and time the message was received by WinSMS, in the format YYYYMMDDHHmm.
		 */
		receiveTime: FormControl<string | null | undefined>,
	}
	export function CreateIncomingMessageFormGroup() {
		return new FormGroup<IncomingMessageFormProperties>({
			incomingApiMessageId: new FormControl<number | null | undefined>(undefined),
			messageText: new FormControl<string | null | undefined>(undefined),
			mobileNumber: new FormControl<string | null | undefined>(undefined),
			outgoingApiMessageId: new FormControl<number | null | undefined>(undefined),
			receiveTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IncomingMessageResponse {

		/**
		 * An array of ***incomingMessage*** objects containing properties of each incoming message.
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		incomingMessages?: Array<IncomingMessage>;

		/**
		 * The number of items returned in the results. This is the value specified in the ***limit*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsLimit?: number | null;

		/**
		 * The number of items skipped before the results were returned. This is the value specified in the ***offset*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsOffset?: number | null;

		/**
		 * The total number of results available for retrieval. The ***offset*** and ***limit*** properties specify which of the total available results have been returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsTotalAvailable?: number | null;

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp?: string | null;

		/** The current version of the API of the endpoint that was called */
		version?: string | null;
	}
	export interface IncomingMessageResponseFormProperties {

		/**
		 * The number of items returned in the results. This is the value specified in the ***limit*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsLimit: FormControl<number | null | undefined>,

		/**
		 * The number of items skipped before the results were returned. This is the value specified in the ***offset*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsOffset: FormControl<number | null | undefined>,

		/**
		 * The total number of results available for retrieval. The ***offset*** and ***limit*** properties specify which of the total available results have been returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsTotalAvailable: FormControl<number | null | undefined>,

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp: FormControl<string | null | undefined>,

		/** The current version of the API of the endpoint that was called */
		version: FormControl<string | null | undefined>,
	}
	export function CreateIncomingMessageResponseFormGroup() {
		return new FormGroup<IncomingMessageResponseFormProperties>({
			resultsLimit: new FormControl<number | null | undefined>(undefined),
			resultsOffset: new FormControl<number | null | undefined>(undefined),
			resultsTotalAvailable: new FormControl<number | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
			timeStamp: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IncomingOptoutMessage {

		/**
		 * The unique API message id assigned to this incoming opt-out message.
		 * Type: double
		 */
		incomingApiMessageId?: number | null;

		/**
		 * The text of the opt-out SMS message.
		 */
		messageText?: string | null;

		/**
		 * The mobile number that sent the opt-out SMS message, displayed using the international E164 (without the plus) format
		 */
		mobileNumber?: string | null;

		/**
		 * The date and time the message was received by WinSMS, in the format YYYYMMDDHHmm.
		 */
		receiveTime?: string | null;
	}
	export interface IncomingOptoutMessageFormProperties {

		/**
		 * The unique API message id assigned to this incoming opt-out message.
		 * Type: double
		 */
		incomingApiMessageId: FormControl<number | null | undefined>,

		/**
		 * The text of the opt-out SMS message.
		 */
		messageText: FormControl<string | null | undefined>,

		/**
		 * The mobile number that sent the opt-out SMS message, displayed using the international E164 (without the plus) format
		 */
		mobileNumber: FormControl<string | null | undefined>,

		/**
		 * The date and time the message was received by WinSMS, in the format YYYYMMDDHHmm.
		 */
		receiveTime: FormControl<string | null | undefined>,
	}
	export function CreateIncomingOptoutMessageFormGroup() {
		return new FormGroup<IncomingOptoutMessageFormProperties>({
			incomingApiMessageId: new FormControl<number | null | undefined>(undefined),
			messageText: new FormControl<string | null | undefined>(undefined),
			mobileNumber: new FormControl<string | null | undefined>(undefined),
			receiveTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageDetails {

		/**
		 * ***Optional*** - The maximum [GSM Encoded segment count]("https://support.winsms.co.za/rest/GSM") that the message is allowed to utilise.
		 * This defaults to 1, allowing for a maximum GSM Encoded message length of 160 characters.
		 * The maximum value is 6, which allows for a GSM Encoded message length of 918 characters.
		 * If you intend to send a message longer than 160 characters, this value should be specified.
		 * Minimum: 1
		 * Maximum: 6
		 */
		maxSegments?: number | null;

		/**
		 * The SMS text to be sent.
		 * Required
		 */
		message: string;

		/**
		 * An array of messageRecipientDetails objects.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		recipients: Array<MessageRecipientDetails>;

		/**
		 * ***Optional*** - The date and time that an SMS should be delivered. If not specified, or is set for a date/time prior to the current date/time, the SMS message will be sent immediately.
		 * If specified, this value should have the format YYYYMMDDHHmm.
		 */
		scheduledTime?: string | null;
	}
	export interface MessageDetailsFormProperties {

		/**
		 * ***Optional*** - The maximum [GSM Encoded segment count]("https://support.winsms.co.za/rest/GSM") that the message is allowed to utilise.
		 * This defaults to 1, allowing for a maximum GSM Encoded message length of 160 characters.
		 * The maximum value is 6, which allows for a GSM Encoded message length of 918 characters.
		 * If you intend to send a message longer than 160 characters, this value should be specified.
		 * Minimum: 1
		 * Maximum: 6
		 */
		maxSegments: FormControl<number | null | undefined>,

		/**
		 * The SMS text to be sent.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/**
		 * ***Optional*** - The date and time that an SMS should be delivered. If not specified, or is set for a date/time prior to the current date/time, the SMS message will be sent immediately.
		 * If specified, this value should have the format YYYYMMDDHHmm.
		 */
		scheduledTime: FormControl<string | null | undefined>,
	}
	export function CreateMessageDetailsFormGroup() {
		return new FormGroup<MessageDetailsFormProperties>({
			maxSegments: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(6)]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scheduledTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageRecipientDetails {

		/**
		 * ***Optional*** - A parameter to identify an individual SMS message recipient on your system. The clientMessageId parameter is NOT saved by the WinSMS API.
		 * The value of the clientMessageId parameter is returned in the ***submittedRecipientResult*** object of the response, allowing you to match a sent message to a returned message result status.
		 */
		clientMessageId?: string | null;

		/**
		 * A recipient mobile number, using the international E164 (without the plus) format.
		 * Required
		 */
		mobileNumber: string;
	}
	export interface MessageRecipientDetailsFormProperties {

		/**
		 * ***Optional*** - A parameter to identify an individual SMS message recipient on your system. The clientMessageId parameter is NOT saved by the WinSMS API.
		 * The value of the clientMessageId parameter is returned in the ***submittedRecipientResult*** object of the response, allowing you to match a sent message to a returned message result status.
		 */
		clientMessageId: FormControl<string | null | undefined>,

		/**
		 * A recipient mobile number, using the international E164 (without the plus) format.
		 * Required
		 */
		mobileNumber: FormControl<string | null | undefined>,
	}
	export function CreateMessageRecipientDetailsFormGroup() {
		return new FormGroup<MessageRecipientDetailsFormProperties>({
			clientMessageId: new FormControl<string | null | undefined>(undefined),
			mobileNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MessageDetailsResponse {

		/**
		 * The message text that was sent.
		 */
		message?: string | null;

		/**
		 * An array of messageRecipientResponse objects
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		recipients?: Array<MessageRecipientResponse>;
	}
	export interface MessageDetailsResponseFormProperties {

		/**
		 * The message text that was sent.
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateMessageDetailsResponseFormGroup() {
		return new FormGroup<MessageDetailsResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageRecipientResponse {

		/**
		 * If the ***accepted*** value is **false**, this will contain the reason that delivery to the recipient was declined by the API. If the recipient was accepted, this value will be blank.
		 */
		acceptError?: string | null;

		/**
		 * A boolean value indicating whether the API accepted the recipient for SMS delivery. This will be **false** If you have insufficient credits or the recipient mobile number supplied is not valid.
		 */
		accepted?: boolean | null;

		/**
		 * The WinSMS Message Id assigned to the specific message recipient. This Id can be used to obtain the status of the message, and to delete the message if it was scheduled. If the API did not accept the recipient for delivery, the value will be **null**.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		apiMessageId?: number | null;

		/**
		 * If the optional ***clientMessageId*** value was specified in the recipient object for the recipient, it will be returned here. If not, ***clientMessageId*** will be **null**.
		 */
		clientMessageId?: string | null;

		/**
		 * The number of credits deducted from your account for the SMS to this recipient.
		 * The credit cost is based on the destination country of the recipient and the length (number of segments) of the message.
		 * This credit cost will be reimbursed if the message is scheduled and subsequently deleted.
		 * If the recipient is not accepted for delivery, the ***creditCost*** value will be **null**.
		 * Type: double
		 */
		creditCost?: number | null;

		/**
		 * The mobile number specified as the ***mobileNumber*** value of the recipient object of the request.
		 */
		mobileNumber?: string | null;

		/**
		 * The number of WinSMS credits remaining in your account after processing this recipient.
		 * Type: double
		 */
		newCreditBalance?: number | null;

		/**
		 * The date and time that the message was scheduled for delivery to the recipient.
		 * If no ***scheduledTime*** value was specified in the request, or the recipient was not accepted for delivery, this value will be **null**.
		 */
		scheduledTime?: string | null;
	}
	export interface MessageRecipientResponseFormProperties {

		/**
		 * If the ***accepted*** value is **false**, this will contain the reason that delivery to the recipient was declined by the API. If the recipient was accepted, this value will be blank.
		 */
		acceptError: FormControl<string | null | undefined>,

		/**
		 * A boolean value indicating whether the API accepted the recipient for SMS delivery. This will be **false** If you have insufficient credits or the recipient mobile number supplied is not valid.
		 */
		accepted: FormControl<boolean | null | undefined>,

		/**
		 * The WinSMS Message Id assigned to the specific message recipient. This Id can be used to obtain the status of the message, and to delete the message if it was scheduled. If the API did not accept the recipient for delivery, the value will be **null**.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		apiMessageId: FormControl<number | null | undefined>,

		/**
		 * If the optional ***clientMessageId*** value was specified in the recipient object for the recipient, it will be returned here. If not, ***clientMessageId*** will be **null**.
		 */
		clientMessageId: FormControl<string | null | undefined>,

		/**
		 * The number of credits deducted from your account for the SMS to this recipient.
		 * The credit cost is based on the destination country of the recipient and the length (number of segments) of the message.
		 * This credit cost will be reimbursed if the message is scheduled and subsequently deleted.
		 * If the recipient is not accepted for delivery, the ***creditCost*** value will be **null**.
		 * Type: double
		 */
		creditCost: FormControl<number | null | undefined>,

		/**
		 * The mobile number specified as the ***mobileNumber*** value of the recipient object of the request.
		 */
		mobileNumber: FormControl<string | null | undefined>,

		/**
		 * The number of WinSMS credits remaining in your account after processing this recipient.
		 * Type: double
		 */
		newCreditBalance: FormControl<number | null | undefined>,

		/**
		 * The date and time that the message was scheduled for delivery to the recipient.
		 * If no ***scheduledTime*** value was specified in the request, or the recipient was not accepted for delivery, this value will be **null**.
		 */
		scheduledTime: FormControl<string | null | undefined>,
	}
	export function CreateMessageRecipientResponseFormGroup() {
		return new FormGroup<MessageRecipientResponseFormProperties>({
			acceptError: new FormControl<string | null | undefined>(undefined),
			accepted: new FormControl<boolean | null | undefined>(undefined),
			apiMessageId: new FormControl<number | null | undefined>(undefined),
			clientMessageId: new FormControl<string | null | undefined>(undefined),
			creditCost: new FormControl<number | null | undefined>(undefined),
			mobileNumber: new FormControl<string | null | undefined>(undefined),
			newCreditBalance: new FormControl<number | null | undefined>(undefined),
			scheduledTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageStatus {

		/**
		 * The WinSMS API Message Id identifying the SMS message.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		apiMessageId?: number | null;

		/**
		 * The number of credits deducted from your account for the SMS to this recipient.
		 * If delivery to the recipient is unsuccessful, under certain conditions, this may be 0.
		 * Type: double
		 */
		creditCost?: number | null;

		/** The mobile number of the recipient of the SMS message, using the international E164 (without the plus) format */
		mobileNumber?: string | null;

		/** A boolean value indicating whether an SMS message was successfully delivered to the recipient's mobile number */
		statusDelivered?: boolean | null;

		/**
		 * If the SMS message was successfully delivered, this value will be blank.
		 * If the ***statusDelivered*** value is false, this will contain a string indicating the current status of the SMS message. Possible values-
		 * | Value | Description | Type |
		 * |-------|-------------|------|
		 * | SENT| The message has been sent to the recipient, but no delivery report has been received | Temporary |
		 * | NOTFOUND | Either an incorrect MessageID was sent in the request, or the message was sent more than 90 days previously | Permanent |
		 * | INQUEUE | Message is queued for sending | Temporary |
		 * | SENDINGFAILED | The message was not transmitted, due to e.g. an invalid destination number or insufficient credits | Permanent |
		 * | FAILED | The message was sent but could not be delivered to the recipient due to e.g. no such subscriber, subscriber's phone offline | Permanent |
		 */
		statusErrorCode?: string | null;

		/**
		 * The date and time of the last status update for this message, in the format YYYYMMDDHHmm.
		 * If the message was delivered (**statusDelivered = true**) then this is a final status time. If the message is still awaiting delivery, this time might change when updates are received.
		 */
		statusTime?: string | null;
	}
	export interface MessageStatusFormProperties {

		/**
		 * The WinSMS API Message Id identifying the SMS message.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		apiMessageId: FormControl<number | null | undefined>,

		/**
		 * The number of credits deducted from your account for the SMS to this recipient.
		 * If delivery to the recipient is unsuccessful, under certain conditions, this may be 0.
		 * Type: double
		 */
		creditCost: FormControl<number | null | undefined>,

		/** The mobile number of the recipient of the SMS message, using the international E164 (without the plus) format */
		mobileNumber: FormControl<string | null | undefined>,

		/** A boolean value indicating whether an SMS message was successfully delivered to the recipient's mobile number */
		statusDelivered: FormControl<boolean | null | undefined>,

		/**
		 * If the SMS message was successfully delivered, this value will be blank.
		 * If the ***statusDelivered*** value is false, this will contain a string indicating the current status of the SMS message. Possible values-
		 * | Value | Description | Type |
		 * |-------|-------------|------|
		 * | SENT| The message has been sent to the recipient, but no delivery report has been received | Temporary |
		 * | NOTFOUND | Either an incorrect MessageID was sent in the request, or the message was sent more than 90 days previously | Permanent |
		 * | INQUEUE | Message is queued for sending | Temporary |
		 * | SENDINGFAILED | The message was not transmitted, due to e.g. an invalid destination number or insufficient credits | Permanent |
		 * | FAILED | The message was sent but could not be delivered to the recipient due to e.g. no such subscriber, subscriber's phone offline | Permanent |
		 */
		statusErrorCode: FormControl<string | null | undefined>,

		/**
		 * The date and time of the last status update for this message, in the format YYYYMMDDHHmm.
		 * If the message was delivered (**statusDelivered = true**) then this is a final status time. If the message is still awaiting delivery, this time might change when updates are received.
		 */
		statusTime: FormControl<string | null | undefined>,
	}
	export function CreateMessageStatusFormGroup() {
		return new FormGroup<MessageStatusFormProperties>({
			apiMessageId: new FormControl<number | null | undefined>(undefined),
			creditCost: new FormControl<number | null | undefined>(undefined),
			mobileNumber: new FormControl<string | null | undefined>(undefined),
			statusDelivered: new FormControl<boolean | null | undefined>(undefined),
			statusErrorCode: new FormControl<string | null | undefined>(undefined),
			statusTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MessageStatusResponse {

		/**
		 * An array of ***messageStatus*** objects detailing the delivery status of each message
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		messageStatuses?: Array<MessageStatus>;

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp?: string | null;

		/** The current version of the API of the endpoint that was called */
		version?: string | null;
	}
	export interface MessageStatusResponseFormProperties {

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp: FormControl<string | null | undefined>,

		/** The current version of the API of the endpoint that was called */
		version: FormControl<string | null | undefined>,
	}
	export function CreateMessageStatusResponseFormGroup() {
		return new FormGroup<MessageStatusResponseFormProperties>({
			statusCode: new FormControl<number | null | undefined>(undefined),
			timeStamp: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MultiMessageDetails {
		messages?: Array<MessageDetails>;
	}
	export interface MultiMessageDetailsFormProperties {
	}
	export function CreateMultiMessageDetailsFormGroup() {
		return new FormGroup<MultiMessageDetailsFormProperties>({
		});

	}

	export interface MultiMessageResponse {

		/** An array of messageDetailsResponse objects */
		messages?: Array<MessageDetailsResponse>;

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp?: string | null;

		/** The current version of the API of the endpoint that was called */
		version?: string | null;
	}
	export interface MultiMessageResponseFormProperties {

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp: FormControl<string | null | undefined>,

		/** The current version of the API of the endpoint that was called */
		version: FormControl<string | null | undefined>,
	}
	export function CreateMultiMessageResponseFormGroup() {
		return new FormGroup<MultiMessageResponseFormProperties>({
			statusCode: new FormControl<number | null | undefined>(undefined),
			timeStamp: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewMessageDetails {

		/**
		 * ***Optional*** - The maximum [GSM Encoded segment count]("https://support.winsms.co.za/rest/GSM") that the message is allowed to utilise.
		 * This defaults to 1, allowing for a maximum GSM Encoded message length of 160 characters.
		 * The maximum value is 6, which allows for a GSM Encoded message length of 918 characters.
		 * If you intend to send a message longer than 160 characters, this value should be specified.
		 * Minimum: 1
		 * Maximum: 6
		 */
		maxSegments?: number | null;

		/**
		 * The SMS text to be sent.
		 * Required
		 */
		message: string;

		/**
		 * An array of messageRecipientDetails objects.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		recipients: Array<MessageRecipientDetails>;

		/**
		 * ***Optional*** - The date and time that an SMS should be delivered. If not specified, or is set for a date/time prior to the current date/time, the SMS message will be sent immediately.
		 * If specified, this value should have the format YYYYMMDDHHmm.
		 */
		scheduledTime?: string | null;
	}
	export interface NewMessageDetailsFormProperties {

		/**
		 * ***Optional*** - The maximum [GSM Encoded segment count]("https://support.winsms.co.za/rest/GSM") that the message is allowed to utilise.
		 * This defaults to 1, allowing for a maximum GSM Encoded message length of 160 characters.
		 * The maximum value is 6, which allows for a GSM Encoded message length of 918 characters.
		 * If you intend to send a message longer than 160 characters, this value should be specified.
		 * Minimum: 1
		 * Maximum: 6
		 */
		maxSegments: FormControl<number | null | undefined>,

		/**
		 * The SMS text to be sent.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/**
		 * ***Optional*** - The date and time that an SMS should be delivered. If not specified, or is set for a date/time prior to the current date/time, the SMS message will be sent immediately.
		 * If specified, this value should have the format YYYYMMDDHHmm.
		 */
		scheduledTime: FormControl<string | null | undefined>,
	}
	export function CreateNewMessageDetailsFormGroup() {
		return new FormGroup<NewMessageDetailsFormProperties>({
			maxSegments: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(6)]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scheduledTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewMessageResponse {

		/**
		 * An array of messageRecipientResponse objects
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		recipients?: Array<MessageRecipientResponse>;

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp?: string | null;

		/** The current version of the API of the endpoint that was called */
		version?: string | null;
	}
	export interface NewMessageResponseFormProperties {

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp: FormControl<string | null | undefined>,

		/** The current version of the API of the endpoint that was called */
		version: FormControl<string | null | undefined>,
	}
	export function CreateNewMessageResponseFormGroup() {
		return new FormGroup<NewMessageResponseFormProperties>({
			statusCode: new FormControl<number | null | undefined>(undefined),
			timeStamp: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OptoutMessageResponse {

		/**
		 * An array of ***incomingOptoutMessage*** objects containing properties of each opt-out message received.
		 */
		incomingOptoutMessages?: Array<IncomingOptoutMessage>;

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp?: string | null;

		/** The current version of the API of the endpoint that was called */
		version?: string | null;
	}
	export interface OptoutMessageResponseFormProperties {

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp: FormControl<string | null | undefined>,

		/** The current version of the API of the endpoint that was called */
		version: FormControl<string | null | undefined>,
	}
	export function CreateOptoutMessageResponseFormGroup() {
		return new FormGroup<OptoutMessageResponseFormProperties>({
			statusCode: new FormControl<number | null | undefined>(undefined),
			timeStamp: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScheduledMessage {

		/**
		 * The WinSMS API Message Id identifying the SMS message.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		apiMessageId?: number | null;

		/**
		 * The number of credits deducted from your account for the SMS to this recipient.
		 * This is the number of credits that will be refunded if you delete this scheduled message.
		 * Type: double
		 */
		creditCost?: number | null;

		/** The mobile number of the recipient of the SMS message, using the international E164 (without the plus) format */
		mobileNumber?: string | null;

		/** The date and time the message is scheduled to be delivered to the recipient, in the format YYYYMMDDHHmm. */
		scheduledSendTime?: string | null;

		/** The date and time the message was originally submitted for scheduled delivery, in the format YYYYMMDDHHmm. */
		submitTime?: string | null;
	}
	export interface ScheduledMessageFormProperties {

		/**
		 * The WinSMS API Message Id identifying the SMS message.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		apiMessageId: FormControl<number | null | undefined>,

		/**
		 * The number of credits deducted from your account for the SMS to this recipient.
		 * This is the number of credits that will be refunded if you delete this scheduled message.
		 * Type: double
		 */
		creditCost: FormControl<number | null | undefined>,

		/** The mobile number of the recipient of the SMS message, using the international E164 (without the plus) format */
		mobileNumber: FormControl<string | null | undefined>,

		/** The date and time the message is scheduled to be delivered to the recipient, in the format YYYYMMDDHHmm. */
		scheduledSendTime: FormControl<string | null | undefined>,

		/** The date and time the message was originally submitted for scheduled delivery, in the format YYYYMMDDHHmm. */
		submitTime: FormControl<string | null | undefined>,
	}
	export function CreateScheduledMessageFormGroup() {
		return new FormGroup<ScheduledMessageFormProperties>({
			apiMessageId: new FormControl<number | null | undefined>(undefined),
			creditCost: new FormControl<number | null | undefined>(undefined),
			mobileNumber: new FormControl<string | null | undefined>(undefined),
			scheduledSendTime: new FormControl<string | null | undefined>(undefined),
			submitTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScheduledMessageResponse {

		/**
		 * The number of items returned in the results. This is the value specified in the ***limit*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsLimit?: number | null;

		/**
		 * The number of items skipped before the results were returned. This is the value specified in the ***offset*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsOffset?: number | null;

		/**
		 * The total number of results available for retrieval. The ***offset*** and ***limit*** properties specify which of the total available results have been returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsTotalAvailable?: number | null;

		/**
		 * An array of ***scheduledMessage*** objects containing properties of each unsent scheduled message.
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		scheduledMessages?: Array<ScheduledMessage>;

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp?: string | null;

		/** The current version of the API of the endpoint that was called */
		version?: string | null;
	}
	export interface ScheduledMessageResponseFormProperties {

		/**
		 * The number of items returned in the results. This is the value specified in the ***limit*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsLimit: FormControl<number | null | undefined>,

		/**
		 * The number of items skipped before the results were returned. This is the value specified in the ***offset*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsOffset: FormControl<number | null | undefined>,

		/**
		 * The total number of results available for retrieval. The ***offset*** and ***limit*** properties specify which of the total available results have been returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsTotalAvailable: FormControl<number | null | undefined>,

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp: FormControl<string | null | undefined>,

		/** The current version of the API of the endpoint that was called */
		version: FormControl<string | null | undefined>,
	}
	export function CreateScheduledMessageResponseFormGroup() {
		return new FormGroup<ScheduledMessageResponseFormProperties>({
			resultsLimit: new FormControl<number | null | undefined>(undefined),
			resultsOffset: new FormControl<number | null | undefined>(undefined),
			resultsTotalAvailable: new FormControl<number | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
			timeStamp: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShortcodeMessage {

		/**
		 * The unique API message id assigned to this incoming message.
		 * Type: double
		 */
		incomingApiMessageId?: number | null;

		/** The text of the incoming SMS message. */
		messageText?: string | null;

		/** The mobile number that sent the SMS message, displayed using the international E164 (without the plus) format */
		mobileNumber?: string | null;

		/** The date and time the message was received by WinSMS, in the format YYYYMMDDHHmm. */
		receiveTime?: string | null;
	}
	export interface ShortcodeMessageFormProperties {

		/**
		 * The unique API message id assigned to this incoming message.
		 * Type: double
		 */
		incomingApiMessageId: FormControl<number | null | undefined>,

		/** The text of the incoming SMS message. */
		messageText: FormControl<string | null | undefined>,

		/** The mobile number that sent the SMS message, displayed using the international E164 (without the plus) format */
		mobileNumber: FormControl<string | null | undefined>,

		/** The date and time the message was received by WinSMS, in the format YYYYMMDDHHmm. */
		receiveTime: FormControl<string | null | undefined>,
	}
	export function CreateShortcodeMessageFormGroup() {
		return new FormGroup<ShortcodeMessageFormProperties>({
			incomingApiMessageId: new FormControl<number | null | undefined>(undefined),
			messageText: new FormControl<string | null | undefined>(undefined),
			mobileNumber: new FormControl<string | null | undefined>(undefined),
			receiveTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ShortcodeMessageResponse {

		/**
		 * The number of items returned in the results. This is the value specified in the ***limit*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsLimit?: number | null;

		/**
		 * The number of items skipped before the results were returned. This is the value specified in the ***offset*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsOffset?: number | null;

		/**
		 * The total number of results available for retrieval. The ***offset*** and ***limit*** properties specify which of the total available results have been returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsTotalAvailable?: number | null;

		/**
		 * An array of ***shortcodeMessage*** objects containing properties of each incoming shortcode message received by WinSMS.
		 * Minimum items: 1
		 * Maximum items: 1000
		 */
		shortcodeMessages?: Array<ShortcodeMessage>;

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp?: string | null;

		/** The current version of the API of the endpoint that was called */
		version?: string | null;
	}
	export interface ShortcodeMessageResponseFormProperties {

		/**
		 * The number of items returned in the results. This is the value specified in the ***limit*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsLimit: FormControl<number | null | undefined>,

		/**
		 * The number of items skipped before the results were returned. This is the value specified in the ***offset*** parameter sent to the endpoint. If the parameter was not specified, this defaults to 0.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsOffset: FormControl<number | null | undefined>,

		/**
		 * The total number of results available for retrieval. The ***offset*** and ***limit*** properties specify which of the total available results have been returned.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resultsTotalAvailable: FormControl<number | null | undefined>,

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp: FormControl<string | null | undefined>,

		/** The current version of the API of the endpoint that was called */
		version: FormControl<string | null | undefined>,
	}
	export function CreateShortcodeMessageResponseFormGroup() {
		return new FormGroup<ShortcodeMessageResponseFormProperties>({
			resultsLimit: new FormControl<number | null | undefined>(undefined),
			resultsOffset: new FormControl<number | null | undefined>(undefined),
			resultsTotalAvailable: new FormControl<number | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
			timeStamp: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubAccount {

		/**
		 * The WinSMS account number of the Sub Account. This is supplied as an integer, without the leading 'W' displayed in the WinSMS Client Zone.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accountNumber?: number | null;

		/**
		 * The remaining credit balance for the Sub Account.
		 * Type: double
		 */
		creditBalance?: number | null;

		/**
		 * The first name of the user that the Sub Account is registered to.
		 */
		firstName?: string | null;

		/**
		 * The login name of the user that the Sub Account is registered to.
		 */
		loginName?: string | null;

		/**
		 * The surname of the user that the Sub Account is registered to.
		 */
		surname?: string | null;
	}
	export interface SubAccountFormProperties {

		/**
		 * The WinSMS account number of the Sub Account. This is supplied as an integer, without the leading 'W' displayed in the WinSMS Client Zone.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		accountNumber: FormControl<number | null | undefined>,

		/**
		 * The remaining credit balance for the Sub Account.
		 * Type: double
		 */
		creditBalance: FormControl<number | null | undefined>,

		/**
		 * The first name of the user that the Sub Account is registered to.
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * The login name of the user that the Sub Account is registered to.
		 */
		loginName: FormControl<string | null | undefined>,

		/**
		 * The surname of the user that the Sub Account is registered to.
		 */
		surname: FormControl<string | null | undefined>,
	}
	export function CreateSubAccountFormGroup() {
		return new FormGroup<SubAccountFormProperties>({
			accountNumber: new FormControl<number | null | undefined>(undefined),
			creditBalance: new FormControl<number | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			loginName: new FormControl<string | null | undefined>(undefined),
			surname: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubAccountsResponse {

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode?: number | null;

		/**
		 * An array of ***subAccount*** objects containing properties of each Sub Account owned by the Main Account.
		 */
		subAccounts?: Array<SubAccount>;

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp?: string | null;

		/** The current version of the API of the endpoint that was called */
		version?: string | null;
	}
	export interface SubAccountsResponseFormProperties {

		/**
		 * The http status code returned - reflected in the body for convenience
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		statusCode: FormControl<number | null | undefined>,

		/** The date/time the request was processed, in the format YYYYMMDDhhmmssSSS */
		timeStamp: FormControl<string | null | undefined>,

		/** The current version of the API of the endpoint that was called */
		version: FormControl<string | null | undefined>,
	}
	export function CreateSubAccountsResponseFormGroup() {
		return new FormGroup<SubAccountsResponseFormProperties>({
			statusCode: new FormControl<number | null | undefined>(undefined),
			timeStamp: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get your current WinSMS credit balance
		 * Get the current remaining credit balance for the account.
		 * ***Note*** - The credit balance is expressed as a value with a single decimal place.
		 * Get credits/balance
		 * @return {CreditBalanceResponse} OK
		 */
		GetCreditBalance(): Observable<CreditBalanceResponse> {
			return this.http.get<CreditBalanceResponse>(this.baseUri + 'credits/balance', {});
		}

		/**
		 * Transfer credits between main and sub accounts.
		 * Transfer credits between accounts.
		 * - From Main account to Sub account.
		 * - From Sub account to Main account.
		 * - From Sub account to another Sub account.
		 * Your WinSMS account number and sub account number/s can be obtained by logging in to the WinSMS Client Zone (www.winsms.co.za/cz) with the main account's credentials.
		 * The main account number is on the home tab and the sub account numbers are under the sub accounts tab.
		 * Account numbers should be submitted as integers. Do not add the 'W' prefix.
		 * Post credits/transfer
		 * @param {CreditTransferDetails} requestBody The details of the credit transfer. Sender account number, recipient account number, and number of credits to transfer.
		 * @return {CreditTransferResponse} OK
		 */
		TransferCredits(requestBody: CreditTransferDetails): Observable<CreditTransferResponse> {
			return this.http.post<CreditTransferResponse>(this.baseUri + 'credits/transfer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of incoming short/long code messages
		 * ***Only available to users with a [WinSMS Short/Long Code](https://support.winsms.co.za/winsms-long-short-code-system/).***
		 * Get a list of all incoming short/long code messages received by the account.
		 * Only the first 100 incoming short/long code messages will be returned if no ***offset*** and ***limit*** parameters are specified.
		 * Get shortcode/incoming
		 * @param {number} offset ***Optional*** - The number of items to skip before starting to return results. Default 0. Minimum 0.
		 *     Minimum: 0
		 * @param {number} limit ***Optional*** - The number of items to return. Default 100. Minimum 1. Maximum 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @return {ShortcodeMessageResponse} OK
		 */
		GetShortCodeMessages(offset: number | null | undefined, limit: number | null | undefined): Observable<ShortcodeMessageResponse> {
			return this.http.get<ShortcodeMessageResponse>(this.baseUri + 'shortcode/incoming?offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Get a list of incoming SMS messages
		 * Get a list of all incoming SMS messages received by the account.
		 * Only the first 100 incoming messages will be returned if no ***offset*** and ***limit*** parameters are specified.
		 * Get sms/incoming
		 * @param {number} offset ***Optional*** - The number of items to skip before starting to return results. Default 0. Minimum 0.
		 *     Minimum: 0
		 * @param {number} limit ***Optional*** - The number of items to return. Default 100. Minimum 1. Maximum 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @return {IncomingMessageResponse} OK
		 */
		GetIncomingMessages(offset: number | null | undefined, limit: number | null | undefined): Observable<IncomingMessageResponse> {
			return this.http.get<IncomingMessageResponse>(this.baseUri + 'sms/incoming?offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Get a list of incoming opt-out SMS messages
		 * Get a list of all opt-out SMS messages received by the account, as well as all manually added opt-out numbers.<br>
		 * Get sms/incoming/optout
		 * @return {OptoutMessageResponse} OK
		 */
		GetOptoutMessages(): Observable<OptoutMessageResponse> {
			return this.http.get<OptoutMessageResponse>(this.baseUri + 'sms/incoming/optout', {});
		}

		/**
		 * Send SMS messages
		 * Submit 1 or more SMS messages to be sent by WinSMS. Maximum 1000 recipients per request.
		 * The SMS message text can be a maximum of 918 characters long. If you are submitting a message longer than 160 characters, you should change the value of ***maxSegments***.
		 * Post sms/outgoing/send
		 * @param {NewMessageDetails} requestBody The message, recipients and delivery options of an SMS message to be sent.
		 * @return {NewMessageResponse} OK
		 */
		SmsSend(requestBody: NewMessageDetails): Observable<NewMessageResponse> {
			return this.http.post<NewMessageResponse>(this.baseUri + 'sms/outgoing/send', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Send multiple different SMS messages
		 * Submit multiple different SMS messages to be sent to multiple recipients. Maximum 1000 recipients across all messages.
		 * Each SMS message text can be a maximum of 918 characters long. If you are submitting a message longer than 160 characters, you should change the value of ***maxSegments***.
		 * Post sms/outgoing/sendmulti
		 * @param {MultiMessageDetails} requestBody The messages, recipients and delivery options of multiple SMS messages to be sent.
		 * @return {MultiMessageResponse} OK
		 */
		SmsSendBatch(requestBody: MultiMessageDetails): Observable<MultiMessageResponse> {
			return this.http.post<MultiMessageResponse>(this.baseUri + 'sms/outgoing/sendmulti', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get SMS delivery statuses
		 * Get a list of previously submitted SMS message delivery statuses.
		 * Post an array of API Message Ids received from the **sms/outgoing/send*** endpoint.
		 * Post sms/outgoing/status
		 * @param {Array<number>} requestBody An array of WinSMS API Ids received after submitting messages to the **sms/outgoing/send*** endpoint.
		 * A maximum of 1000 API Ids can be supplied in a single request.
		 * @return {MessageStatusResponse} OK
		 */
		SmsStatus(requestBody: Array<number>): Observable<MessageStatusResponse> {
			return this.http.post<MessageStatusResponse>(this.baseUri + 'sms/outgoing/status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of scheduled SMS messages
		 * Get a list of all scheduled SMS messages that have not yet been sent.
		 * Only the first 100 scheduled messages will be returned if no ***offset*** and ***limit*** parameters are specified.
		 * Get sms/scheduled
		 * @param {number} offset ***Optional*** - The number of items to skip before starting to return results. Default 0. Minimum 0.
		 *     Minimum: 0
		 * @param {number} limit ***Optional*** - The number of items to return. Default 100. Minimum 1. Maximum 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @return {ScheduledMessageResponse} OK
		 */
		GetScheduledMessages(offset: number | null | undefined, limit: number | null | undefined): Observable<ScheduledMessageResponse> {
			return this.http.get<ScheduledMessageResponse>(this.baseUri + 'sms/scheduled?offset=' + offset + '&limit=' + limit, {});
		}

		/**
		 * Delete scheduled SMS messages and refund credits
		 * Delete a list of previously scheduled SMS messages that have not yet been sent.
		 * Credits originally deducted for each SMS message will be refunded to your account upon successful deletion.
		 * Post sms/scheduled/delete
		 * @param {Array<number>} requestBody An array of WinSMS API Ids received after submitting scheduled messages to the **sms/outgoing/send*** endpoint.<br> A maximum of 1000 API Ids can be supplied in a single request.
		 * @return {DeleteScheduledResponse} OK
		 */
		DeleteScheduledMessages(requestBody: Array<number>): Observable<DeleteScheduledResponse> {
			return this.http.post<DeleteScheduledResponse>(this.baseUri + 'sms/scheduled/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of all Sub Accounts.
		 * Get a list of all the Sub Accounts owned by the Main Account.
		 * Get subaccounts
		 * @return {SubAccountsResponse} OK
		 */
		GetSubAccounts(): Observable<SubAccountsResponse> {
			return this.http.get<SubAccountsResponse>(this.baseUri + 'subaccounts', {});
		}
	}

}

