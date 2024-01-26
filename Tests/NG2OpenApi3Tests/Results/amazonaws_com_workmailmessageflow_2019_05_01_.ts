import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GetRawMessageContentResponse {

		/** Required */
		messageContent: string;
	}
	export interface GetRawMessageContentResponseFormProperties {

		/** Required */
		messageContent: FormControl<string | null | undefined>,
	}
	export function CreateGetRawMessageContentResponseFormGroup() {
		return new FormGroup<GetRawMessageContentResponseFormProperties>({
			messageContent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface PutRawMessageContentResponse {
	}
	export interface PutRawMessageContentResponseFormProperties {
	}
	export function CreatePutRawMessageContentResponseFormGroup() {
		return new FormGroup<PutRawMessageContentResponseFormProperties>({
		});

	}


	/** <p>Amazon S3 object representing the updated message content, in MIME format.</p> <note> <p>The region for the S3 bucket containing the S3 object must match the region used for WorkMail operations. Also, for WorkMail to process an S3 object, it must have permission to access that object. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html"> Updating message content with AWS Lambda</a>.</p> </note> */
	export interface S3Reference {

		/** Required */
		bucket: string;

		/** Required */
		key: string;
		objectVersion?: string;
	}

	/** <p>Amazon S3 object representing the updated message content, in MIME format.</p> <note> <p>The region for the S3 bucket containing the S3 object must match the region used for WorkMail operations. Also, for WorkMail to process an S3 object, it must have permission to access that object. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html"> Updating message content with AWS Lambda</a>.</p> </note> */
	export interface S3ReferenceFormProperties {

		/** Required */
		bucket: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,
		objectVersion: FormControl<string | null | undefined>,
	}
	export function CreateS3ReferenceFormGroup() {
		return new FormGroup<S3ReferenceFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			objectVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidContentLocation {
	}
	export interface InvalidContentLocationFormProperties {
	}
	export function CreateInvalidContentLocationFormGroup() {
		return new FormGroup<InvalidContentLocationFormProperties>({
		});

	}

	export interface MessageRejected {
	}
	export interface MessageRejectedFormProperties {
	}
	export function CreateMessageRejectedFormGroup() {
		return new FormGroup<MessageRejectedFormProperties>({
		});

	}

	export interface MessageFrozen {
	}
	export interface MessageFrozenFormProperties {
	}
	export function CreateMessageFrozenFormGroup() {
		return new FormGroup<MessageFrozenFormProperties>({
		});

	}

	export interface GetRawMessageContentRequest {
	}
	export interface GetRawMessageContentRequestFormProperties {
	}
	export function CreateGetRawMessageContentRequestFormGroup() {
		return new FormGroup<GetRawMessageContentRequestFormProperties>({
		});

	}


	/** <p>Provides the MIME content of the updated email message as an S3 object. All MIME content must meet the following criteria:</p> <ul> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be of a content type that Amazon SES supports. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types-appendix.html">Unsupported Attachment Types</a>.</p> </li> <li> <p>If any of the MIME parts in a message contain content that is outside of the 7-bit ASCII character range, we recommend encoding that content.</p> </li> <li> <p>Per <a href="https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6">RFC 5321</a>, the maximum length of each line of text, including the &lt;CRLF&gt;, must not exceed 1,000 characters.</p> </li> <li> <p>The message must contain all the required header fields. Check the returned error message for more information.</p> </li> <li> <p>The value of immutable headers must remain unchanged. Check the returned error message for more information.</p> </li> <li> <p>Certain unique headers can only appear once. Check the returned error message for more information.</p> </li> </ul> */
	export interface RawMessageContent {

		/** Required */
		s3Reference: S3Reference;
	}

	/** <p>Provides the MIME content of the updated email message as an S3 object. All MIME content must meet the following criteria:</p> <ul> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be of a content type that Amazon SES supports. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types-appendix.html">Unsupported Attachment Types</a>.</p> </li> <li> <p>If any of the MIME parts in a message contain content that is outside of the 7-bit ASCII character range, we recommend encoding that content.</p> </li> <li> <p>Per <a href="https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6">RFC 5321</a>, the maximum length of each line of text, including the &lt;CRLF&gt;, must not exceed 1,000 characters.</p> </li> <li> <p>The message must contain all the required header fields. Check the returned error message for more information.</p> </li> <li> <p>The value of immutable headers must remain unchanged. Check the returned error message for more information.</p> </li> <li> <p>Certain unique headers can only appear once. Check the returned error message for more information.</p> </li> </ul> */
	export interface RawMessageContentFormProperties {
	}
	export function CreateRawMessageContentFormGroup() {
		return new FormGroup<RawMessageContentFormProperties>({
		});

	}

	export interface PutRawMessageContentRequest {

		/** Required */
		content: RawMessageContent;
	}
	export interface PutRawMessageContentRequestFormProperties {
	}
	export function CreatePutRawMessageContentRequestFormGroup() {
		return new FormGroup<PutRawMessageContentRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves the raw content of an in-transit email message, in MIME format.
		 * Get messages/{messageId}
		 * @param {string} messageId The identifier of the email message to retrieve.
		 * @return {GetRawMessageContentResponse} Success
		 */
		GetRawMessageContent(messageId: string): Observable<GetRawMessageContentResponse> {
			return this.http.get<GetRawMessageContentResponse>(this.baseUri + 'messages/' + (messageId == null ? '' : encodeURIComponent(messageId)), {});
		}

		/**
		 * <p>Updates the raw content of an in-transit email message, in MIME format.</p> <p>This example describes how to update in-transit email message. For more information and examples for using this API, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html"> Updating message content with AWS Lambda</a>.</p> <note> <p>Updates to an in-transit message only appear when you call <code>PutRawMessageContent</code> from an AWS Lambda function configured with a synchronous <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/lambda.html#synchronous-rules"> Run Lambda</a> rule. If you call <code>PutRawMessageContent</code> on a delivered or sent message, the message remains unchanged, even though <a href="https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html">GetRawMessageContent</a> returns an updated message. </p> </note>
		 * Post messages/{messageId}
		 * @param {string} messageId The identifier of the email message being updated.
		 * @return {PutRawMessageContentResponse} Success
		 */
		PutRawMessageContent(messageId: string, requestBody: PutRawMessageContentPostBody): Observable<PutRawMessageContentResponse> {
			return this.http.post<PutRawMessageContentResponse>(this.baseUri + 'messages/' + (messageId == null ? '' : encodeURIComponent(messageId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface PutRawMessageContentPostBody {

		/**
		 * <p>Provides the MIME content of the updated email message as an S3 object. All MIME content must meet the following criteria:</p> <ul> <li> <p>Each part of a multipart MIME message must be formatted properly.</p> </li> <li> <p>Attachments must be of a content type that Amazon SES supports. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mime-types-appendix.html">Unsupported Attachment Types</a>.</p> </li> <li> <p>If any of the MIME parts in a message contain content that is outside of the 7-bit ASCII character range, we recommend encoding that content.</p> </li> <li> <p>Per <a href="https://tools.ietf.org/html/rfc5321#section-4.5.3.1.6">RFC 5321</a>, the maximum length of each line of text, including the &lt;CRLF&gt;, must not exceed 1,000 characters.</p> </li> <li> <p>The message must contain all the required header fields. Check the returned error message for more information.</p> </li> <li> <p>The value of immutable headers must remain unchanged. Check the returned error message for more information.</p> </li> <li> <p>Certain unique headers can only appear once. Check the returned error message for more information.</p> </li> </ul>
		 * Required
		 */
		content: PutRawMessageContentPostBodyContent;
	}
	export interface PutRawMessageContentPostBodyFormProperties {
	}
	export function CreatePutRawMessageContentPostBodyFormGroup() {
		return new FormGroup<PutRawMessageContentPostBodyFormProperties>({
		});

	}

	export interface PutRawMessageContentPostBodyContent {
		s3Reference?: S3Reference;
	}
	export interface PutRawMessageContentPostBodyContentFormProperties {
	}
	export function CreatePutRawMessageContentPostBodyContentFormGroup() {
		return new FormGroup<PutRawMessageContentPostBodyContentFormProperties>({
		});

	}

}

