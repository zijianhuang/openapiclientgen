import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The output from the DeleteThingShadow operation. */
	export interface DeleteThingShadowResponse {

		/** Required */
		payload: string;
	}

	/** The output from the DeleteThingShadow operation. */
	export interface DeleteThingShadowResponseFormProperties {

		/** Required */
		payload: FormControl<string | null | undefined>,
	}
	export function CreateDeleteThingShadowResponseFormGroup() {
		return new FormGroup<DeleteThingShadowResponseFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The specified resource does not exist. */
	export interface ResourceNotFoundException {
		message?: string | null;
	}

	/** The specified resource does not exist. */
	export interface ResourceNotFoundExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request is not valid. */
	export interface InvalidRequestException {
		message?: string | null;
	}

	/** The request is not valid. */
	export interface InvalidRequestExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The rate exceeds the limit. */
	export interface ThrottlingException {
		message?: string | null;
	}

	/** The rate exceeds the limit. */
	export interface ThrottlingExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** You are not authorized to perform this operation. */
	export interface UnauthorizedException {
		message?: string | null;
	}

	/** You are not authorized to perform this operation. */
	export interface UnauthorizedExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The service is temporarily unavailable. */
	export interface ServiceUnavailableException {
		message?: string | null;
	}

	/** The service is temporarily unavailable. */
	export interface ServiceUnavailableExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An unexpected error has occurred. */
	export interface InternalFailureException {
		message?: string | null;
	}

	/** An unexpected error has occurred. */
	export interface InternalFailureExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateInternalFailureExceptionFormGroup() {
		return new FormGroup<InternalFailureExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specified combination of HTTP verb and URI is not supported. */
	export interface MethodNotAllowedException {
		message?: string | null;
	}

	/** The specified combination of HTTP verb and URI is not supported. */
	export interface MethodNotAllowedExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateMethodNotAllowedExceptionFormGroup() {
		return new FormGroup<MethodNotAllowedExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The document encoding is not supported. */
	export interface UnsupportedDocumentEncodingException {
		message?: string | null;
	}

	/** The document encoding is not supported. */
	export interface UnsupportedDocumentEncodingExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateUnsupportedDocumentEncodingExceptionFormGroup() {
		return new FormGroup<UnsupportedDocumentEncodingExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the GetThingShadow operation. */
	export interface GetThingShadowResponse {
		payload?: string | null;
	}

	/** The output from the GetThingShadow operation. */
	export interface GetThingShadowResponseFormProperties {
		payload: FormControl<string | null | undefined>,
	}
	export function CreateGetThingShadowResponseFormGroup() {
		return new FormGroup<GetThingShadowResponseFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the UpdateThingShadow operation. */
	export interface UpdateThingShadowResponse {
		payload?: string | null;
	}

	/** The output from the UpdateThingShadow operation. */
	export interface UpdateThingShadowResponseFormProperties {
		payload: FormControl<string | null | undefined>,
	}
	export function CreateUpdateThingShadowResponseFormGroup() {
		return new FormGroup<UpdateThingShadowResponseFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specified version does not match the version of the document. */
	export interface ConflictException {
		message?: string | null;
	}

	/** The specified version does not match the version of the document. */
	export interface ConflictExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The payload exceeds the maximum size allowed. */
	export interface RequestEntityTooLargeException {
		message?: string | null;
	}

	/** The payload exceeds the maximum size allowed. */
	export interface RequestEntityTooLargeExceptionFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateRequestEntityTooLargeExceptionFormGroup() {
		return new FormGroup<RequestEntityTooLargeExceptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for the DeleteThingShadow operation. */
	export interface DeleteThingShadowRequest {
	}

	/** The input for the DeleteThingShadow operation. */
	export interface DeleteThingShadowRequestFormProperties {
	}
	export function CreateDeleteThingShadowRequestFormGroup() {
		return new FormGroup<DeleteThingShadowRequestFormProperties>({
		});

	}


	/** The input for the GetThingShadow operation. */
	export interface GetThingShadowRequest {
	}

	/** The input for the GetThingShadow operation. */
	export interface GetThingShadowRequestFormProperties {
	}
	export function CreateGetThingShadowRequestFormGroup() {
		return new FormGroup<GetThingShadowRequestFormProperties>({
		});

	}


	/** The input for the Publish operation. */
	export interface PublishRequest {
		payload?: string | null;
	}

	/** The input for the Publish operation. */
	export interface PublishRequestFormProperties {
		payload: FormControl<string | null | undefined>,
	}
	export function CreatePublishRequestFormGroup() {
		return new FormGroup<PublishRequestFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The input for the UpdateThingShadow operation. */
	export interface UpdateThingShadowRequest {

		/** Required */
		payload: string;
	}

	/** The input for the UpdateThingShadow operation. */
	export interface UpdateThingShadowRequestFormProperties {

		/** Required */
		payload: FormControl<string | null | undefined>,
	}
	export function CreateUpdateThingShadowRequestFormGroup() {
		return new FormGroup<UpdateThingShadowRequestFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Deletes the thing shadow for the specified thing.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_DeleteThingShadow.html">DeleteThingShadow</a> in the <i>AWS IoT Developer Guide</i>.</p>
		 * Delete things/{thingName}/shadow
		 * @param {string} thingName The name of the thing.
		 * @return {DeleteThingShadowResponse} Success
		 */
		DeleteThingShadow(thingName: string): Observable<DeleteThingShadowResponse> {
			return this.http.delete<DeleteThingShadowResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/shadow', {});
		}

		/**
		 * <p>Gets the thing shadow for the specified thing.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_GetThingShadow.html">GetThingShadow</a> in the <i>AWS IoT Developer Guide</i>.</p>
		 * Get things/{thingName}/shadow
		 * @param {string} thingName The name of the thing.
		 * @return {GetThingShadowResponse} Success
		 */
		GetThingShadow(thingName: string): Observable<GetThingShadowResponse> {
			return this.http.get<GetThingShadowResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/shadow', {});
		}

		/**
		 * <p>Updates the thing shadow for the specified thing.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html">UpdateThingShadow</a> in the <i>AWS IoT Developer Guide</i>.</p>
		 * Post things/{thingName}/shadow
		 * @param {string} thingName The name of the thing.
		 * @return {UpdateThingShadowResponse} Success
		 */
		UpdateThingShadow(thingName: string, requestBody: UpdateThingShadowPostBody): Observable<UpdateThingShadowResponse> {
			return this.http.post<UpdateThingShadowResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/shadow', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Publishes state information.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/protocols.html#http">HTTP Protocol</a> in the <i>AWS IoT Developer Guide</i>.</p>
		 * Post topics/{topic}
		 * @param {string} topic The name of the MQTT topic.
		 * @param {number} qos The Quality of Service (QoS) level.
		 * @return {void} Success
		 */
		Publish(topic: string, qos: number | null | undefined, requestBody: PublishPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'topics/' + (topic == null ? '' : encodeURIComponent(topic)) + '&qos=' + qos, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface UpdateThingShadowPostBody {

		/**
		 * The state information, in JSON format.
		 * Required
		 */
		payload: string;
	}
	export interface UpdateThingShadowPostBodyFormProperties {

		/**
		 * The state information, in JSON format.
		 * Required
		 */
		payload: FormControl<string | null | undefined>,
	}
	export function CreateUpdateThingShadowPostBodyFormGroup() {
		return new FormGroup<UpdateThingShadowPostBodyFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PublishPostBody {

		/** The state information, in JSON format. */
		payload?: string | null;
	}
	export interface PublishPostBodyFormProperties {

		/** The state information, in JSON format. */
		payload: FormControl<string | null | undefined>,
	}
	export function CreatePublishPostBodyFormGroup() {
		return new FormGroup<PublishPostBodyFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined),
		});

	}

}

