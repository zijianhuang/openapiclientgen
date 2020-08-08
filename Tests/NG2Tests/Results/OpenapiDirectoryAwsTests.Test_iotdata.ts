import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** The output from the DeleteThingShadow operation. */
	export interface DeleteThingShadowResponse {
		payload: string;
	}


	/** The specified resource does not exist. */
	export interface ResourceNotFoundException {
		message?: string;
	}


	/** The request is not valid. */
	export interface InvalidRequestException {
		message?: string;
	}


	/** The rate exceeds the limit. */
	export interface ThrottlingException {
		message?: string;
	}


	/** You are not authorized to perform this operation. */
	export interface UnauthorizedException {
		message?: string;
	}


	/** The service is temporarily unavailable. */
	export interface ServiceUnavailableException {
		message?: string;
	}


	/** An unexpected error has occurred. */
	export interface InternalFailureException {
		message?: string;
	}


	/** The specified combination of HTTP verb and URI is not supported. */
	export interface MethodNotAllowedException {
		message?: string;
	}


	/** The document encoding is not supported. */
	export interface UnsupportedDocumentEncodingException {
		message?: string;
	}


	/** The output from the GetThingShadow operation. */
	export interface GetThingShadowResponse {
		payload?: string;
	}


	/** The output from the UpdateThingShadow operation. */
	export interface UpdateThingShadowResponse {
		payload?: string;
	}


	/** The specified version does not match the version of the document. */
	export interface ConflictException {
		message?: string;
	}


	/** The payload exceeds the maximum size allowed. */
	export interface RequestEntityTooLargeException {
		message?: string;
	}


	/** The input for the DeleteThingShadow operation. */
	export interface DeleteThingShadowRequest {
	}


	/** The input for the GetThingShadow operation. */
	export interface GetThingShadowRequest {
	}


	/** The input for the Publish operation. */
	export interface PublishRequest {
		payload?: string;
	}


	/** The input for the UpdateThingShadow operation. */
	export interface UpdateThingShadowRequest {
		payload: string;
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
		Publish(topic: string, qos: number, requestBody: PublishPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'topics/' + (topic == null ? '' : encodeURIComponent(topic)) + '&qos=' + qos, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface UpdateThingShadowPostBody {

		/** The state information, in JSON format. */
		payload: string;
	}

	export interface PublishPostBody {

		/** The state information, in JSON format. */
		payload?: string;
	}

}

