import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ErrorThrottled {

		/**
		 * Additional information about the error
		 * Required
		 */
		detail: string;

		/**
		 * Internal Trace ID
		 * Required
		 */
		instance: string;

		/**
		 * Generic error message
		 * Required
		 */
		title: string;

		/**
		 * Link to error / remediation options
		 * Required
		 */
		type: string;
	}
	export interface ErrorThrottledFormProperties {

		/**
		 * Additional information about the error
		 * Required
		 */
		detail: FormControl<string | null | undefined>,

		/**
		 * Internal Trace ID
		 * Required
		 */
		instance: FormControl<string | null | undefined>,

		/**
		 * Generic error message
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * Link to error / remediation options
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateErrorThrottledFormGroup() {
		return new FormGroup<ErrorThrottledFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instance: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Error */
	export interface CheckErrorResponse {

		/** If the `status` is non-zero, this explains the error encountered. */
		error_text?: string | null;

		/** The `request_id` that you received in the response to the Verify request and used in the Verify check request. */
		request_id?: string | null;

		/**
		 * Code | Text | Description
		 * -- | -- | --
		 * 0 | Success | The request was successfully accepted by Vonage.
		 * 1 | Throttled | You are trying to send more than the maximum of 30 requests per second.
		 * 2 | Your request is incomplete and missing the mandatory parameter `$parameter` | The stated parameter is missing.
		 * 3 | Invalid value for parameter `$parameter` | Invalid value for parameter. If you see Facility not allowed in the error text, check that you are using the correct Base URL in your request.
		 * 4 | Invalid credentials were provided | The supplied API key or secret in the request is either invalid or disabled.
		 * 5 | Internal Error | An error occurred processing this request in the Cloud Communications Platform.
		 * 6 | The Vonage platform was unable to process this message for the following reason: `$reason` | The request could not be routed.
		 * 16 | The code inserted does not match the expected value |
		 * 17 | The wrong code was provided too many times | You can run Verify check on a specific `request_id` up to three times unless a new verification code is generated. If you check a request more than three times, it is set to FAILED and you cannot check it again.
		 */
		status?: CheckErrorResponseStatus | null;
	}

	/** Error */
	export interface CheckErrorResponseFormProperties {

		/** If the `status` is non-zero, this explains the error encountered. */
		error_text: FormControl<string | null | undefined>,

		/** The `request_id` that you received in the response to the Verify request and used in the Verify check request. */
		request_id: FormControl<string | null | undefined>,

		/**
		 * Code | Text | Description
		 * -- | -- | --
		 * 0 | Success | The request was successfully accepted by Vonage.
		 * 1 | Throttled | You are trying to send more than the maximum of 30 requests per second.
		 * 2 | Your request is incomplete and missing the mandatory parameter `$parameter` | The stated parameter is missing.
		 * 3 | Invalid value for parameter `$parameter` | Invalid value for parameter. If you see Facility not allowed in the error text, check that you are using the correct Base URL in your request.
		 * 4 | Invalid credentials were provided | The supplied API key or secret in the request is either invalid or disabled.
		 * 5 | Internal Error | An error occurred processing this request in the Cloud Communications Platform.
		 * 6 | The Vonage platform was unable to process this message for the following reason: `$reason` | The request could not be routed.
		 * 16 | The code inserted does not match the expected value |
		 * 17 | The wrong code was provided too many times | You can run Verify check on a specific `request_id` up to three times unless a new verification code is generated. If you check a request more than three times, it is set to FAILED and you cannot check it again.
		 */
		status: FormControl<CheckErrorResponseStatus | null | undefined>,
	}
	export function CreateCheckErrorResponseFormGroup() {
		return new FormGroup<CheckErrorResponseFormProperties>({
			error_text: new FormControl<string | null | undefined>(undefined),
			request_id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CheckErrorResponseStatus | null | undefined>(undefined),
		});

	}

	export enum CheckErrorResponseStatus { _0 = '0', _1 = '1', _2 = '2', _3 = '3', _4 = '4', _5 = '5', _6 = '6', _16 = '16', _17 = '17' }

	export interface CheckRequest {

		/**
		 * You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
		 * Required
		 */
		api_key: string;

		/**
		 * You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
		 * Required
		 */
		api_secret: string;

		/**
		 * The verification code entered by your user.
		 * Required
		 * Min length: 4
		 * Max length: 6
		 */
		code: string;

		/** (This field is no longer used) */
		ip_address?: string | null;

		/**
		 * The Verify request to check. This is the `request_id` you received in the response to the Verify request.
		 * Required
		 * Max length: 32
		 */
		request_id: string;
	}
	export interface CheckRequestFormProperties {

		/**
		 * You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
		 * Required
		 */
		api_key: FormControl<string | null | undefined>,

		/**
		 * You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
		 * Required
		 */
		api_secret: FormControl<string | null | undefined>,

		/**
		 * The verification code entered by your user.
		 * Required
		 * Min length: 4
		 * Max length: 6
		 */
		code: FormControl<string | null | undefined>,

		/** (This field is no longer used) */
		ip_address: FormControl<string | null | undefined>,

		/**
		 * The Verify request to check. This is the `request_id` you received in the response to the Verify request.
		 * Required
		 * Max length: 32
		 */
		request_id: FormControl<string | null | undefined>,
	}
	export function CreateCheckRequestFormGroup() {
		return new FormGroup<CheckRequestFormProperties>({
			api_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			api_secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(4), Validators.maxLength(6)]),
			ip_address: new FormControl<string | null | undefined>(undefined),
			request_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(32)]),
		});

	}


	/** Success */
	export interface CheckResponse {

		/** The currency code. */
		currency?: string | null;

		/**
		 * This field may not be present, depending on your pricing model. The
		 * value indicates the cost (in EUR) of the calls made and messages sent
		 * for the verification process. This value may be updated during and
		 * shortly after the request completes because user input events can
		 * overlap with message/call events. When this field is present, the total
		 * cost of the verification is the sum of this field and the `price` field.
		 */
		estimated_price_messages_sent?: string | null;

		/** The ID of the verification event, such as an SMS or TTS call. */
		event_id?: string | null;

		/** The cost incurred for this request. */
		price?: string | null;

		/** The `request_id` that you received in the response to the Verify request and used in the Verify check request. */
		request_id?: string | null;

		/** A value of `0` indicates that your user entered the correct code. If it is non-zero, check the `error_text`. */
		status?: string | null;
	}

	/** Success */
	export interface CheckResponseFormProperties {

		/** The currency code. */
		currency: FormControl<string | null | undefined>,

		/**
		 * This field may not be present, depending on your pricing model. The
		 * value indicates the cost (in EUR) of the calls made and messages sent
		 * for the verification process. This value may be updated during and
		 * shortly after the request completes because user input events can
		 * overlap with message/call events. When this field is present, the total
		 * cost of the verification is the sum of this field and the `price` field.
		 */
		estimated_price_messages_sent: FormControl<string | null | undefined>,

		/** The ID of the verification event, such as an SMS or TTS call. */
		event_id: FormControl<string | null | undefined>,

		/** The cost incurred for this request. */
		price: FormControl<string | null | undefined>,

		/** The `request_id` that you received in the response to the Verify request and used in the Verify check request. */
		request_id: FormControl<string | null | undefined>,

		/** A value of `0` indicates that your user entered the correct code. If it is non-zero, check the `error_text`. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateCheckResponseFormGroup() {
		return new FormGroup<CheckResponseFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
			estimated_price_messages_sent: new FormControl<string | null | undefined>(undefined),
			event_id: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			request_id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error */
	export interface ControlErrorResponse {

		/** If the `status` is non-zero, this explains the error encountered. */
		error_text?: string | null;

		/**
		 * Code | Text | Description
		 * -- | -- | --
		 * 0 | Success | The request was successfully accepted by Vonage.
		 * 1 | Throttled | You are trying to send more than the maximum of 30 requests per second.
		 * 2 | Your request is incomplete and missing the mandatory parameter `$parameter` | The stated parameter is missing.
		 * 3 | Invalid value for parameter `$parameter` | Invalid value for parameter. If you see Facility not allowed in the error text, check that you are using the correct Base URL in your request.
		 * 4 | Invalid credentials were provided | The supplied API key or secret in the request is either invalid or disabled.
		 * 5 | Internal Error | An error occurred processing this request in the Cloud Communications Platform.
		 * 6 | The Vonage platform was unable to process this message for the following reason: `$reason` | The request could not be routed.
		 * 8 | The api_key you supplied is for an account that has been barred from submitting messages. |
		 * 9 | Partner quota exceeded | Your account does not have sufficient credit to process this request.
		 * 19 | For `cancel`: Either you have not waited at least 30 secs after sending a Verify request before cancelling or Verify has made too many attempts to deliver the verification code for this request and you must now wait for the process to complete. For `trigger_next_event`: All attempts to deliver the verification code for this request have completed and there are no remaining events to advance to.
		 */
		status?: ControlErrorResponseStatus | null;
	}

	/** Error */
	export interface ControlErrorResponseFormProperties {

		/** If the `status` is non-zero, this explains the error encountered. */
		error_text: FormControl<string | null | undefined>,

		/**
		 * Code | Text | Description
		 * -- | -- | --
		 * 0 | Success | The request was successfully accepted by Vonage.
		 * 1 | Throttled | You are trying to send more than the maximum of 30 requests per second.
		 * 2 | Your request is incomplete and missing the mandatory parameter `$parameter` | The stated parameter is missing.
		 * 3 | Invalid value for parameter `$parameter` | Invalid value for parameter. If you see Facility not allowed in the error text, check that you are using the correct Base URL in your request.
		 * 4 | Invalid credentials were provided | The supplied API key or secret in the request is either invalid or disabled.
		 * 5 | Internal Error | An error occurred processing this request in the Cloud Communications Platform.
		 * 6 | The Vonage platform was unable to process this message for the following reason: `$reason` | The request could not be routed.
		 * 8 | The api_key you supplied is for an account that has been barred from submitting messages. |
		 * 9 | Partner quota exceeded | Your account does not have sufficient credit to process this request.
		 * 19 | For `cancel`: Either you have not waited at least 30 secs after sending a Verify request before cancelling or Verify has made too many attempts to deliver the verification code for this request and you must now wait for the process to complete. For `trigger_next_event`: All attempts to deliver the verification code for this request have completed and there are no remaining events to advance to.
		 */
		status: FormControl<ControlErrorResponseStatus | null | undefined>,
	}
	export function CreateControlErrorResponseFormGroup() {
		return new FormGroup<ControlErrorResponseFormProperties>({
			error_text: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ControlErrorResponseStatus | null | undefined>(undefined),
		});

	}

	export enum ControlErrorResponseStatus { _0 = '0', _1 = '1', _2 = '2', _3 = '3', _4 = '4', _5 = '5', _6 = '6', _8 = '8', _9 = '9', _19 = '19' }

	export interface ControlRequest {

		/**
		 * You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
		 * Required
		 */
		api_key: string;

		/**
		 * You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
		 * Required
		 */
		api_secret: string;

		/**
		 * The possible commands are `cancel` to request cancellation of the verification process, or `trigger_next_event` to advance  to the next verification event (if any). Cancellation is only possible 30 seconds after the start of the verification request and before the second event (either TTS or SMS) has taken place.
		 * Required
		 */
		cmd: ControlRequestCmd;

		/**
		 * The `request_id` you received in the response to the Verify request.
		 * Required
		 */
		request_id: string;
	}
	export interface ControlRequestFormProperties {

		/**
		 * You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
		 * Required
		 */
		api_key: FormControl<string | null | undefined>,

		/**
		 * You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
		 * Required
		 */
		api_secret: FormControl<string | null | undefined>,

		/**
		 * The possible commands are `cancel` to request cancellation of the verification process, or `trigger_next_event` to advance  to the next verification event (if any). Cancellation is only possible 30 seconds after the start of the verification request and before the second event (either TTS or SMS) has taken place.
		 * Required
		 */
		cmd: FormControl<ControlRequestCmd | null | undefined>,

		/**
		 * The `request_id` you received in the response to the Verify request.
		 * Required
		 */
		request_id: FormControl<string | null | undefined>,
	}
	export function CreateControlRequestFormGroup() {
		return new FormGroup<ControlRequestFormProperties>({
			api_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			api_secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cmd: new FormControl<ControlRequestCmd | null | undefined>(undefined, [Validators.required]),
			request_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ControlRequestCmd { cancel = 'cancel', trigger_next_event = 'trigger_next_event' }


	/** Success */
	export interface ControlResponse {

		/** The `cmd` you sent in the request. */
		command?: ControlRequestCmd | null;

		/**
		 * `cmd` | Code | Description
		 * -- | -- | --
		 * Any | 0 | Success
		 */
		status?: string | null;
	}

	/** Success */
	export interface ControlResponseFormProperties {

		/** The `cmd` you sent in the request. */
		command: FormControl<ControlRequestCmd | null | undefined>,

		/**
		 * `cmd` | Code | Description
		 * -- | -- | --
		 * Any | 0 | Success
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateControlResponseFormGroup() {
		return new FormGroup<ControlResponseFormProperties>({
			command: new FormControl<ControlRequestCmd | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetworkUnblock {

		/** The Network code */
		network?: string | null;

		/**
		 * An optional duration the unblock will be applied for in seconds
		 * Minimum: 0
		 * Maximum: 86400
		 */
		unblock_duration?: number | null;
	}
	export interface NetworkUnblockFormProperties {

		/** The Network code */
		network: FormControl<string | null | undefined>,

		/**
		 * An optional duration the unblock will be applied for in seconds
		 * Minimum: 0
		 * Maximum: 86400
		 */
		unblock_duration: FormControl<number | null | undefined>,
	}
	export function CreateNetworkUnblockFormGroup() {
		return new FormGroup<NetworkUnblockFormProperties>({
			network: new FormControl<string | null | undefined>(undefined),
			unblock_duration: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(86400)]),
		});

	}


	/** Forbidden */
	export interface NetworkUnblockResponseForbidden {

		/** Verbose description of the server error. */
		detail?: string | null;

		/** The Instance ID */
		instance?: string | null;

		/** Full string text of the HTTP error code. */
		title?: string | null;

		/** A URL link to the API documentation for this type of error. */
		type?: string | null;
	}

	/** Forbidden */
	export interface NetworkUnblockResponseForbiddenFormProperties {

		/** Verbose description of the server error. */
		detail: FormControl<string | null | undefined>,

		/** The Instance ID */
		instance: FormControl<string | null | undefined>,

		/** Full string text of the HTTP error code. */
		title: FormControl<string | null | undefined>,

		/** A URL link to the API documentation for this type of error. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNetworkUnblockResponseForbiddenFormGroup() {
		return new FormGroup<NetworkUnblockResponseForbiddenFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Invalid Duration */
	export interface NetworkUnblockResponseInvalidDuration {

		/** Verbose description of the server error. */
		detail?: string | null;

		/** The Instance ID */
		instance?: string | null;

		/** Detailed payload of errors. */
		NetworkUnblockResponseInvalidDurationInvalid_parameters?: Array<NetworkUnblockResponseInvalidDurationInvalid_parameters>;

		/** Full string text of the HTTP error code. */
		title?: string | null;

		/** A URL link to the API documentation for this type of error. */
		type?: string | null;
	}

	/** Invalid Duration */
	export interface NetworkUnblockResponseInvalidDurationFormProperties {

		/** Verbose description of the server error. */
		detail: FormControl<string | null | undefined>,

		/** The Instance ID */
		instance: FormControl<string | null | undefined>,

		/** Full string text of the HTTP error code. */
		title: FormControl<string | null | undefined>,

		/** A URL link to the API documentation for this type of error. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNetworkUnblockResponseInvalidDurationFormGroup() {
		return new FormGroup<NetworkUnblockResponseInvalidDurationFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetworkUnblockResponseInvalidDurationInvalid_parameters {

		/** The name of the parameter. */
		name?: string | null;

		/** The reason for the parameter error. */
		reason?: string | null;
	}
	export interface NetworkUnblockResponseInvalidDurationInvalid_parametersFormProperties {

		/** The name of the parameter. */
		name: FormControl<string | null | undefined>,

		/** The reason for the parameter error. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateNetworkUnblockResponseInvalidDurationInvalid_parametersFormGroup() {
		return new FormGroup<NetworkUnblockResponseInvalidDurationInvalid_parametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Not Found */
	export interface NetworkUnblockResponseNotFound {

		/** Verbose description of the server error. */
		detail?: string | null;

		/** InstanceID */
		instance?: string | null;

		/** Full string text of the HTTP error code. */
		title?: string | null;

		/** A URL link to the API documentation for this type of error. */
		type?: string | null;
	}

	/** Not Found */
	export interface NetworkUnblockResponseNotFoundFormProperties {

		/** Verbose description of the server error. */
		detail: FormControl<string | null | undefined>,

		/** InstanceID */
		instance: FormControl<string | null | undefined>,

		/** Full string text of the HTTP error code. */
		title: FormControl<string | null | undefined>,

		/** A URL link to the API documentation for this type of error. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNetworkUnblockResponseNotFoundFormGroup() {
		return new FormGroup<NetworkUnblockResponseNotFoundFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Success */
	export interface NetworkUnblockResponseOk {

		/** The unique network ID */
		network?: string | null;

		/** Gives the DateTime when the unblock will expire. */
		unblocked_until?: string | null;
	}

	/** Success */
	export interface NetworkUnblockResponseOkFormProperties {

		/** The unique network ID */
		network: FormControl<string | null | undefined>,

		/** Gives the DateTime when the unblock will expire. */
		unblocked_until: FormControl<string | null | undefined>,
	}
	export function CreateNetworkUnblockResponseOkFormGroup() {
		return new FormGroup<NetworkUnblockResponseOkFormProperties>({
			network: new FormControl<string | null | undefined>(undefined),
			unblocked_until: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Invalid Network */
	export interface NetworkUnblockResponseUnprocessableNetwork {

		/** Verbose description of the server error. */
		detail?: string | null;

		/** The Instance ID */
		instance?: string | null;

		/** Detailed payload of errors. */
		NetworkUnblockResponseUnprocessableNetworkInvalid_parameters?: Array<NetworkUnblockResponseUnprocessableNetworkInvalid_parameters>;

		/** Full string text of the HTTP error code. */
		title?: string | null;

		/** A URL link to the API documentation for this type of error. */
		type?: string | null;
	}

	/** Invalid Network */
	export interface NetworkUnblockResponseUnprocessableNetworkFormProperties {

		/** Verbose description of the server error. */
		detail: FormControl<string | null | undefined>,

		/** The Instance ID */
		instance: FormControl<string | null | undefined>,

		/** Full string text of the HTTP error code. */
		title: FormControl<string | null | undefined>,

		/** A URL link to the API documentation for this type of error. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNetworkUnblockResponseUnprocessableNetworkFormGroup() {
		return new FormGroup<NetworkUnblockResponseUnprocessableNetworkFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetworkUnblockResponseUnprocessableNetworkInvalid_parameters {

		/** The name of the parameter. */
		name?: string | null;

		/** The reason for the parameter error. */
		reason?: string | null;
	}
	export interface NetworkUnblockResponseUnprocessableNetworkInvalid_parametersFormProperties {

		/** The name of the parameter. */
		name: FormControl<string | null | undefined>,

		/** The reason for the parameter error. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateNetworkUnblockResponseUnprocessableNetworkInvalid_parametersFormGroup() {
		return new FormGroup<NetworkUnblockResponseUnprocessableNetworkInvalid_parametersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Psd2Request {

		/**
		 * The decimal amount of the payment to be confirmed, in Euros
		 * Required
		 * Type: float
		 */
		amount: number;

		/**
		 * You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
		 * Required
		 */
		api_key: string;

		/**
		 * You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
		 * Required
		 */
		api_secret: string;

		/** The length of the verification code. */
		code_length?: Psd2RequestCode_length;

		/** If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you. */
		country?: string | null;

		/**
		 * By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used.
		 * *Note: Voice calls in English for `bg-bg`, `ee-et`, `ga-ie`, `lv-lv`, `lt-lt`, `mt-mt`, `sk-sk`, `sk-si`
		 */
		lg?: Psd2RequestLg | null;

		/**
		 * Specifies the wait time in seconds between attempts to deliver the verification code.
		 * Minimum: 60
		 * Maximum: 900
		 */
		next_event_wait?: number | null;

		/**
		 * The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.
		 * Required
		 */
		number: string;

		/**
		 * An alphanumeric string to indicate to the user the name of the recipient that they are confirming a payment to.
		 * Required
		 * Max length: 18
		 */
		payee: string;

		/**
		 * How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings).
		 * Minimum: 60
		 * Maximum: 3600
		 */
		pin_expiry?: number | null;

		/** Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events). */
		workflow_id?: Psd2RequestWorkflow_id;
	}
	export interface Psd2RequestFormProperties {

		/**
		 * The decimal amount of the payment to be confirmed, in Euros
		 * Required
		 * Type: float
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
		 * Required
		 */
		api_key: FormControl<string | null | undefined>,

		/**
		 * You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
		 * Required
		 */
		api_secret: FormControl<string | null | undefined>,

		/** The length of the verification code. */
		code_length: FormControl<Psd2RequestCode_length | null | undefined>,

		/** If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you. */
		country: FormControl<string | null | undefined>,

		/**
		 * By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used.
		 * *Note: Voice calls in English for `bg-bg`, `ee-et`, `ga-ie`, `lv-lv`, `lt-lt`, `mt-mt`, `sk-sk`, `sk-si`
		 */
		lg: FormControl<Psd2RequestLg | null | undefined>,

		/**
		 * Specifies the wait time in seconds between attempts to deliver the verification code.
		 * Minimum: 60
		 * Maximum: 900
		 */
		next_event_wait: FormControl<number | null | undefined>,

		/**
		 * The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.
		 * Required
		 */
		number: FormControl<string | null | undefined>,

		/**
		 * An alphanumeric string to indicate to the user the name of the recipient that they are confirming a payment to.
		 * Required
		 * Max length: 18
		 */
		payee: FormControl<string | null | undefined>,

		/**
		 * How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings).
		 * Minimum: 60
		 * Maximum: 3600
		 */
		pin_expiry: FormControl<number | null | undefined>,

		/** Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events). */
		workflow_id: FormControl<Psd2RequestWorkflow_id | null | undefined>,
	}
	export function CreatePsd2RequestFormGroup() {
		return new FormGroup<Psd2RequestFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			api_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			api_secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code_length: new FormControl<Psd2RequestCode_length | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			lg: new FormControl<Psd2RequestLg | null | undefined>(undefined),
			next_event_wait: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(900)]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			payee: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(18)]),
			pin_expiry: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(3600)]),
			workflow_id: new FormControl<Psd2RequestWorkflow_id | null | undefined>(undefined),
		});

	}

	export enum Psd2RequestCode_length { _4 = 0, _6 = 1 }

	export enum Psd2RequestLg { 'en-gb' = 'en-gb', 'bg-bg' = 'bg-bg', 'cs-cz' = 'cs-cz', 'da-dk' = 'da-dk', 'de-de' = 'de-de', 'ee-et' = 'ee-et', 'el-gr' = 'el-gr', 'es-es' = 'es-es', 'fi-fi' = 'fi-fi', 'fr-fr' = 'fr-fr', 'ga-ie' = 'ga-ie', 'hu-hu' = 'hu-hu', 'it-it' = 'it-it', 'lv-lv' = 'lv-lv', 'lt-lt' = 'lt-lt', 'mt-mt' = 'mt-mt', 'nl-nl' = 'nl-nl', 'pl-pl' = 'pl-pl', 'sk-sk' = 'sk-sk', 'sl-si' = 'sl-si', 'sv-se' = 'sv-se' }

	export enum Psd2RequestWorkflow_id { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4, _6 = 5, _7 = 6 }


	/** Error */
	export interface RequestErrorResponse {

		/** If `status` is non-zero, this explains the error encountered. */
		error_text?: string | null;

		/** The Network ID of the blocking network, if relevant to the error. */
		network?: string | null;

		/**
		 * The unique ID of the Verify request. This may be blank in an error situation.
		 * Max length: 32
		 */
		request_id?: string | null;

		/**
		 * Code | Text | Description
		 * -- | -- | --
		 * 0 | Success | The request was successfully accepted by Vonage.
		 * 1 | Throttled | You are trying to send more than the maximum of 30 requests per second.
		 * 2 | Your request is incomplete and missing the mandatory parameter `$parameter` | The stated parameter is missing.
		 * 3 | Invalid value for parameter `$parameter` | Invalid value for parameter. If you see Facility not allowed in the error text, check that you are using the correct Base URL in your request.
		 * 4 | Invalid credentials were provided | The supplied API key or secret in the request is either invalid or disabled.
		 * 5 | Internal Error | An error occurred processing this request in the Cloud Communications Platform.
		 * 6 | The Vonage platform was unable to process this message for the following reason: `$reason` | The request could not be routed.
		 * 7 | The number you are trying to verify is blacklisted for verification. | Returns a `network` property but no `request_id` will be present in the response.
		 * 8 | The api_key you supplied is for an account that has been barred from submitting messages. |
		 * 9 | Partner quota exceeded | Your account does not have sufficient credit to process this request.
		 * 10 | Concurrent verifications to the same number are not allowed. | This will return a `request_id`.
		 * 15 | The destination number is not in a supported network | The request has been rejected. Find out more about this error in the [Knowledge Base](https://help.nexmo.com/hc/en-us/articles/360018406532-Verify-On-demand-Service-to-High-Risk-Countries)
		 * 20 | This account does not support the parameter: pin_code. | Only certain accounts have the ability to set the `pin_code`. Please contact your account manager for more information.
		 * 29 | Non-Permitted Destination | Your Vonage account is still in demo mode. While in demo mode you must add target numbers to the approved list for your account. Add funds to your account to remove this limitation.
		 */
		status?: RequestErrorResponseStatus | null;
	}

	/** Error */
	export interface RequestErrorResponseFormProperties {

		/** If `status` is non-zero, this explains the error encountered. */
		error_text: FormControl<string | null | undefined>,

		/** The Network ID of the blocking network, if relevant to the error. */
		network: FormControl<string | null | undefined>,

		/**
		 * The unique ID of the Verify request. This may be blank in an error situation.
		 * Max length: 32
		 */
		request_id: FormControl<string | null | undefined>,

		/**
		 * Code | Text | Description
		 * -- | -- | --
		 * 0 | Success | The request was successfully accepted by Vonage.
		 * 1 | Throttled | You are trying to send more than the maximum of 30 requests per second.
		 * 2 | Your request is incomplete and missing the mandatory parameter `$parameter` | The stated parameter is missing.
		 * 3 | Invalid value for parameter `$parameter` | Invalid value for parameter. If you see Facility not allowed in the error text, check that you are using the correct Base URL in your request.
		 * 4 | Invalid credentials were provided | The supplied API key or secret in the request is either invalid or disabled.
		 * 5 | Internal Error | An error occurred processing this request in the Cloud Communications Platform.
		 * 6 | The Vonage platform was unable to process this message for the following reason: `$reason` | The request could not be routed.
		 * 7 | The number you are trying to verify is blacklisted for verification. | Returns a `network` property but no `request_id` will be present in the response.
		 * 8 | The api_key you supplied is for an account that has been barred from submitting messages. |
		 * 9 | Partner quota exceeded | Your account does not have sufficient credit to process this request.
		 * 10 | Concurrent verifications to the same number are not allowed. | This will return a `request_id`.
		 * 15 | The destination number is not in a supported network | The request has been rejected. Find out more about this error in the [Knowledge Base](https://help.nexmo.com/hc/en-us/articles/360018406532-Verify-On-demand-Service-to-High-Risk-Countries)
		 * 20 | This account does not support the parameter: pin_code. | Only certain accounts have the ability to set the `pin_code`. Please contact your account manager for more information.
		 * 29 | Non-Permitted Destination | Your Vonage account is still in demo mode. While in demo mode you must add target numbers to the approved list for your account. Add funds to your account to remove this limitation.
		 */
		status: FormControl<RequestErrorResponseStatus | null | undefined>,
	}
	export function CreateRequestErrorResponseFormGroup() {
		return new FormGroup<RequestErrorResponseFormProperties>({
			error_text: new FormControl<string | null | undefined>(undefined),
			network: new FormControl<string | null | undefined>(undefined),
			request_id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32)]),
			status: new FormControl<RequestErrorResponseStatus | null | undefined>(undefined),
		});

	}

	export enum RequestErrorResponseStatus { _0 = '0', _1 = '1', _2 = '2', _3 = '3', _4 = '4', _5 = '5', _6 = '6', _7 = '7', _8 = '8', _9 = '9', _10 = '10', _15 = '15', _20 = '20', _29 = '29' }


	/** Success */
	export interface RequestResponse {

		/**
		 * The unique ID of the Verify request. You need this `request_id` for the Verify check.
		 * Max length: 32
		 */
		request_id?: string | null;

		/** Indicates the outcome of the request; zero is success */
		status?: string | null;
	}

	/** Success */
	export interface RequestResponseFormProperties {

		/**
		 * The unique ID of the Verify request. You need this `request_id` for the Verify check.
		 * Max length: 32
		 */
		request_id: FormControl<string | null | undefined>,

		/** Indicates the outcome of the request; zero is success */
		status: FormControl<string | null | undefined>,
	}
	export function CreateRequestResponseFormGroup() {
		return new FormGroup<RequestResponseFormProperties>({
			request_id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32)]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error */
	export interface SearchErrorResponse {

		/** If `status` is not `SUCCESS`, this message explains the issue encountered. */
		error_text?: string | null;

		/** The `request_id` that you received in the response to the Verify request and used in the Verify search request. May be empty in an error situation. */
		request_id?: string | null;

		/**
		 * Code | Description
		 * -- | --
		 * IN PROGRESS | The search is still in progress.
		 * SUCCESS | Your user entered a correct verification code.
		 * FAILED | Your user entered an incorrect code more than three times.
		 * EXPIRED | Your user did not enter a code before the `pin_expiry` time elapsed.
		 * CANCELLED | The verification process was cancelled by a Verify control request.
		 * 101 | You supplied an invalid `request_id`, or the data is not available. Note that for recently-completed requests, there can be a delay of up to 1 minute before the results are available in search.
		 */
		status?: SearchErrorResponseStatus | null;
	}

	/** Error */
	export interface SearchErrorResponseFormProperties {

		/** If `status` is not `SUCCESS`, this message explains the issue encountered. */
		error_text: FormControl<string | null | undefined>,

		/** The `request_id` that you received in the response to the Verify request and used in the Verify search request. May be empty in an error situation. */
		request_id: FormControl<string | null | undefined>,

		/**
		 * Code | Description
		 * -- | --
		 * IN PROGRESS | The search is still in progress.
		 * SUCCESS | Your user entered a correct verification code.
		 * FAILED | Your user entered an incorrect code more than three times.
		 * EXPIRED | Your user did not enter a code before the `pin_expiry` time elapsed.
		 * CANCELLED | The verification process was cancelled by a Verify control request.
		 * 101 | You supplied an invalid `request_id`, or the data is not available. Note that for recently-completed requests, there can be a delay of up to 1 minute before the results are available in search.
		 */
		status: FormControl<SearchErrorResponseStatus | null | undefined>,
	}
	export function CreateSearchErrorResponseFormGroup() {
		return new FormGroup<SearchErrorResponseFormProperties>({
			error_text: new FormControl<string | null | undefined>(undefined),
			request_id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<SearchErrorResponseStatus | null | undefined>(undefined),
		});

	}

	export enum SearchErrorResponseStatus { 'IN PROGRESS' = 'IN PROGRESS', FAILED = 'FAILED', EXPIRED = 'EXPIRED', CANCELLED = 'CANCELLED', _101 = '101' }


	/** Success */
	export interface SearchResponse {

		/** The Vonage account ID the request was for. */
		account_id?: string | null;

		/** The list of checks made for this verification and their outcomes. */
		SearchResponseChecks?: Array<SearchResponseChecks>;

		/** The currency code. */
		currency?: string | null;

		/** The date and time the verification request was completed. This response parameter is in the following format YYYY-MM-DD HH:MM:SS. */
		date_finalized?: string | null;

		/** The date and time the verification request was submitted, in the following format YYYY-MM-DD HH:MM:SS. */
		date_submitted?: string | null;

		/**
		 * This field may not be present, depending on your pricing model. The
		 * value indicates the cost (in EUR) of the calls made and messages sent
		 * for the verification process. This value may be updated during and
		 * shortly after the request completes because user input events can
		 * overlap with message/call events. When this field is present, the total
		 * cost of the verification is the sum of this field and the `price` field.
		 */
		estimated_price_messages_sent?: string | null;

		/** The events that have taken place to verify this number, and their unique identifiers. */
		SearchResponseEvents?: Array<SearchResponseEvents>;

		/** The time the first verification attempt was made, in the following format YYYY-MM-DD HH:MM:SS. */
		first_event_date?: string | null;

		/** The time the last verification attempt was made, in the following format YYYY-MM-DD HH:MM:SS. */
		last_event_date?: string | null;

		/** The phone number this verification request was used for. */
		number?: string | null;

		/** The cost incurred for this verification request. */
		price?: string | null;

		/** The `request_id` that you received in the response to the Verify request and used in the Verify search request. */
		request_id?: string | null;

		/** The `sender_id` you provided in the Verify request. */
		sender_id?: string | null;

		/**
		 * Code | Description
		 * -- | --
		 * IN PROGRESS | The search is still in progress.
		 * SUCCESS | Your user entered a correct verification code.
		 * FAILED | Your user entered an incorrect code more than three times.
		 * EXPIRED | Your user did not enter a code before the `pin_expiry` time elapsed.
		 * CANCELLED | The verification process was cancelled by a Verify control request.
		 */
		status?: SearchResponseStatus | null;
	}

	/** Success */
	export interface SearchResponseFormProperties {

		/** The Vonage account ID the request was for. */
		account_id: FormControl<string | null | undefined>,

		/** The currency code. */
		currency: FormControl<string | null | undefined>,

		/** The date and time the verification request was completed. This response parameter is in the following format YYYY-MM-DD HH:MM:SS. */
		date_finalized: FormControl<string | null | undefined>,

		/** The date and time the verification request was submitted, in the following format YYYY-MM-DD HH:MM:SS. */
		date_submitted: FormControl<string | null | undefined>,

		/**
		 * This field may not be present, depending on your pricing model. The
		 * value indicates the cost (in EUR) of the calls made and messages sent
		 * for the verification process. This value may be updated during and
		 * shortly after the request completes because user input events can
		 * overlap with message/call events. When this field is present, the total
		 * cost of the verification is the sum of this field and the `price` field.
		 */
		estimated_price_messages_sent: FormControl<string | null | undefined>,

		/** The time the first verification attempt was made, in the following format YYYY-MM-DD HH:MM:SS. */
		first_event_date: FormControl<string | null | undefined>,

		/** The time the last verification attempt was made, in the following format YYYY-MM-DD HH:MM:SS. */
		last_event_date: FormControl<string | null | undefined>,

		/** The phone number this verification request was used for. */
		number: FormControl<string | null | undefined>,

		/** The cost incurred for this verification request. */
		price: FormControl<string | null | undefined>,

		/** The `request_id` that you received in the response to the Verify request and used in the Verify search request. */
		request_id: FormControl<string | null | undefined>,

		/** The `sender_id` you provided in the Verify request. */
		sender_id: FormControl<string | null | undefined>,

		/**
		 * Code | Description
		 * -- | --
		 * IN PROGRESS | The search is still in progress.
		 * SUCCESS | Your user entered a correct verification code.
		 * FAILED | Your user entered an incorrect code more than three times.
		 * EXPIRED | Your user did not enter a code before the `pin_expiry` time elapsed.
		 * CANCELLED | The verification process was cancelled by a Verify control request.
		 */
		status: FormControl<SearchResponseStatus | null | undefined>,
	}
	export function CreateSearchResponseFormGroup() {
		return new FormGroup<SearchResponseFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			date_finalized: new FormControl<string | null | undefined>(undefined),
			date_submitted: new FormControl<string | null | undefined>(undefined),
			estimated_price_messages_sent: new FormControl<string | null | undefined>(undefined),
			first_event_date: new FormControl<string | null | undefined>(undefined),
			last_event_date: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			request_id: new FormControl<string | null | undefined>(undefined),
			sender_id: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<SearchResponseStatus | null | undefined>(undefined),
		});

	}

	export interface SearchResponseChecks {

		/** The code supplied with this check request */
		code?: string | null;

		/** The date and time this check was received (in the format YYYY-MM-DD HH:MM:SS) */
		date_received?: string | null;

		/** The IP address, if available (this field is no longer used). */
		ip_address?: string | null;
		status?: SearchResponseChecksStatus | null;
	}
	export interface SearchResponseChecksFormProperties {

		/** The code supplied with this check request */
		code: FormControl<string | null | undefined>,

		/** The date and time this check was received (in the format YYYY-MM-DD HH:MM:SS) */
		date_received: FormControl<string | null | undefined>,

		/** The IP address, if available (this field is no longer used). */
		ip_address: FormControl<string | null | undefined>,
		status: FormControl<SearchResponseChecksStatus | null | undefined>,
	}
	export function CreateSearchResponseChecksFormGroup() {
		return new FormGroup<SearchResponseChecksFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			date_received: new FormControl<string | null | undefined>(undefined),
			ip_address: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<SearchResponseChecksStatus | null | undefined>(undefined),
		});

	}

	export enum SearchResponseChecksStatus { VALID = 'VALID', INVALID = 'INVALID' }

	export interface SearchResponseEvents {
		id?: string | null;
		type?: SearchResponseEventsType | null;
	}
	export interface SearchResponseEventsFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<SearchResponseEventsType | null | undefined>,
	}
	export function CreateSearchResponseEventsFormGroup() {
		return new FormGroup<SearchResponseEventsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SearchResponseEventsType | null | undefined>(undefined),
		});

	}

	export enum SearchResponseEventsType { tts = 'tts', sms = 'sms' }

	export enum SearchResponseStatus { 'IN PROGRESS' = 'IN PROGRESS', SUCCESS = 'SUCCESS', FAILED = 'FAILED', EXPIRED = 'EXPIRED', CANCELLED = 'CANCELLED' }

	export interface VerifyRequest {

		/**
		 * You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
		 * Required
		 */
		api_key: string;

		/**
		 * You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
		 * Required
		 */
		api_secret: string;

		/**
		 * An 18-character alphanumeric string you can use to personalize the verification request SMS body, to help users identify your company or application name. For example: "Your `Acme Inc` PIN is ..."
		 * Required
		 * Max length: 18
		 */
		brand: string;

		/** The length of the verification code. */
		code_length?: VerifyRequestCode_length;

		/** If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you. */
		country?: string | null;

		/** By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used for the Verify request. A list of languages is available: <https://developer.nexmo.com/verify/guides/verify-languages> */
		lg?: VerifyRequestLg | null;

		/**
		 * Specifies the wait time in seconds between attempts to deliver the verification code.
		 * Minimum: 60
		 * Maximum: 900
		 */
		next_event_wait?: number | null;

		/**
		 * The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.
		 * Required
		 */
		number: string;

		/**
		 * A custom PIN to send to the user. If a PIN is not provided, Verify will generate a random PIN for you. <b>This feature is not enabled by default</b> - please discuss with your Account Manager if you would like it enabled. If this feature is not enabled on your account, error status `20` will be returned.
		 * Minimum: 4
		 * Maximum: 10
		 */
		pin_code?: string | null;

		/**
		 * How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings).
		 * Minimum: 60
		 * Maximum: 3600
		 */
		pin_expiry?: number | null;

		/**
		 * An 11-character alphanumeric string that represents the [identity of the sender](https://developer.nexmo.com/messaging/sms/guides/custom-sender-id) of the verification request. Depending on the destination of the phone number you are sending the verification SMS to, restrictions might apply.
		 * Max length: 11
		 */
		sender_id?: string | null;

		/** Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events). */
		workflow_id?: VerifyRequestWorkflow_id;
	}
	export interface VerifyRequestFormProperties {

		/**
		 * You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
		 * Required
		 */
		api_key: FormControl<string | null | undefined>,

		/**
		 * You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
		 * Required
		 */
		api_secret: FormControl<string | null | undefined>,

		/**
		 * An 18-character alphanumeric string you can use to personalize the verification request SMS body, to help users identify your company or application name. For example: "Your `Acme Inc` PIN is ..."
		 * Required
		 * Max length: 18
		 */
		brand: FormControl<string | null | undefined>,

		/** The length of the verification code. */
		code_length: FormControl<VerifyRequestCode_length | null | undefined>,

		/** If you do not provide `number` in international format or you are not sure if `number` is correctly formatted, specify the two-character country code in `country`. Verify will then format the number for you. */
		country: FormControl<string | null | undefined>,

		/** By default, the SMS or text-to-speech (TTS) message is generated in the locale that matches the `number`. For example, the text message or TTS message for a `33*` number is sent in French. Use this parameter to explicitly control the language used for the Verify request. A list of languages is available: <https://developer.nexmo.com/verify/guides/verify-languages> */
		lg: FormControl<VerifyRequestLg | null | undefined>,

		/**
		 * Specifies the wait time in seconds between attempts to deliver the verification code.
		 * Minimum: 60
		 * Maximum: 900
		 */
		next_event_wait: FormControl<number | null | undefined>,

		/**
		 * The mobile or landline phone number to verify. Unless you are setting `country` explicitly, this number must be in [E.164](https://en.wikipedia.org/wiki/E.164) format.
		 * Required
		 */
		number: FormControl<string | null | undefined>,

		/**
		 * A custom PIN to send to the user. If a PIN is not provided, Verify will generate a random PIN for you. <b>This feature is not enabled by default</b> - please discuss with your Account Manager if you would like it enabled. If this feature is not enabled on your account, error status `20` will be returned.
		 * Minimum: 4
		 * Maximum: 10
		 */
		pin_code: FormControl<string | null | undefined>,

		/**
		 * How long the generated verification code is valid for, in seconds. When you specify both `pin_expiry` and `next_event_wait` then `pin_expiry` must be an integer multiple of `next_event_wait` otherwise `pin_expiry` is defaulted to equal next_event_wait. See [changing the event timings](https://developer.nexmo.com/verify/guides/changing-default-timings).
		 * Minimum: 60
		 * Maximum: 3600
		 */
		pin_expiry: FormControl<number | null | undefined>,

		/**
		 * An 11-character alphanumeric string that represents the [identity of the sender](https://developer.nexmo.com/messaging/sms/guides/custom-sender-id) of the verification request. Depending on the destination of the phone number you are sending the verification SMS to, restrictions might apply.
		 * Max length: 11
		 */
		sender_id: FormControl<string | null | undefined>,

		/** Selects the predefined sequence of SMS and TTS (Text To Speech) actions to use in order to convey the PIN to your user. For example, an id of 1 identifies the workflow SMS - TTS - TTS. For a list of all workflows and their associated ids, please visit the [developer portal](https://developer.nexmo.com/verify/guides/workflows-and-events). */
		workflow_id: FormControl<VerifyRequestWorkflow_id | null | undefined>,
	}
	export function CreateVerifyRequestFormGroup() {
		return new FormGroup<VerifyRequestFormProperties>({
			api_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			api_secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			brand: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(18)]),
			code_length: new FormControl<VerifyRequestCode_length | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			lg: new FormControl<VerifyRequestLg | null | undefined>(undefined),
			next_event_wait: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(900)]),
			number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pin_code: new FormControl<string | null | undefined>(undefined),
			pin_expiry: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(3600)]),
			sender_id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(11)]),
			workflow_id: new FormControl<VerifyRequestWorkflow_id | null | undefined>(undefined),
		});

	}

	export enum VerifyRequestCode_length { _4 = 0, _6 = 1 }

	export enum VerifyRequestLg { 'ar-xa' = 'ar-xa', 'cs-cz' = 'cs-cz', 'cy-cy' = 'cy-cy', 'cy-gb' = 'cy-gb', 'da-dk' = 'da-dk', 'de-de' = 'de-de', 'el-gr' = 'el-gr', 'en-au' = 'en-au', 'en-gb' = 'en-gb', 'en-in' = 'en-in', 'en-us' = 'en-us', 'es-es' = 'es-es', 'es-mx' = 'es-mx', 'es-us' = 'es-us', 'fi-fi' = 'fi-fi', 'fil-ph' = 'fil-ph', 'fr-ca' = 'fr-ca', 'fr-fr' = 'fr-fr', 'hi-in' = 'hi-in', 'hu-hu' = 'hu-hu', 'id-id' = 'id-id', 'is-is' = 'is-is', 'it-it' = 'it-it', 'ja-jp' = 'ja-jp', 'ko-kr' = 'ko-kr', 'nb-no' = 'nb-no', 'nl-nl' = 'nl-nl', 'pl-pl' = 'pl-pl', 'pt-br' = 'pt-br', 'pt-pt' = 'pt-pt', 'ro-ro' = 'ro-ro', 'ru-ru' = 'ru-ru', 'sv-se' = 'sv-se', 'th-th' = 'th-th', 'tr-tr' = 'tr-tr', 'vi-vn' = 'vi-vn', 'yue-cn' = 'yue-cn', 'zh-cn' = 'zh-cn', 'zh-tw' = 'zh-tw' }

	export enum VerifyRequestWorkflow_id { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4, _6 = 5, _7 = 6 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Request a network unblock
		 * Request to unblock a network that has been blocked due to potential fraud detection
		 * <div class="Vlt-callout Vlt-callout--critical">
		 * <div class="Vlt-callout__content">
		 * <h4>Network Unblock is switched off by default.</h4>
		 * Please contact Sales to enable the Network Unblock API for your account.
		 * </div>
		 * </div>
		 * Post network-unblock
		 * @return {void} 
		 */
		NetworkUnblock(requestBody: NetworkUnblock): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'network-unblock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Verify Search
		 * Use Verify search to check the status of past or current verification requests:
		 * 1. Send a Verify search request containing the `request_id`s of the verification requests you are interested in.
		 * 2. Use the `status` of each verification request in the `checks` array of the response object to determine the outcome.
		 * *Note that this endpoint is available by `POST` request as well as `GET`.*
		 * Get search/{format}
		 * @param {VerifyCheckFormat} format The response format.
		 * @param {string} request_id The `request_id` you received in the Verify Request Response. Required if `request_ids` not provided.
		 * @param {Array<string>} request_ids More than one `request_id`. Each `request_id` is a new parameter in the Verify Search request. Required if `request_id` not provided.
		 *     Maximum items: 10
		 * @return {SearchResponse} OK
		 */
		VerifySearch(format: VerifyCheckFormat, api_key: string, api_secret: string, request_id: string, request_ids: Array<string> | null | undefined): Observable<SearchResponse> {
			return this.http.get<SearchResponse>(this.baseUri + 'search/' + format + '?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&api_secret=' + (api_secret == null ? '' : encodeURIComponent(api_secret)) + '&request_id=' + (request_id == null ? '' : encodeURIComponent(request_id)) + '&' + request_ids?.map(z => `request_ids=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export enum VerifyCheckFormat { json = 'json', xml = 'xml' }

}

