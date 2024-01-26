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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface UnauthorizedException {
	}
	export interface UnauthorizedExceptionFormProperties {
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
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

	export interface MethodNotAllowedException {
	}
	export interface MethodNotAllowedExceptionFormProperties {
	}
	export function CreateMethodNotAllowedExceptionFormGroup() {
		return new FormGroup<MethodNotAllowedExceptionFormProperties>({
		});

	}

	export interface UnsupportedDocumentEncodingException {
	}
	export interface UnsupportedDocumentEncodingExceptionFormProperties {
	}
	export function CreateUnsupportedDocumentEncodingExceptionFormGroup() {
		return new FormGroup<UnsupportedDocumentEncodingExceptionFormProperties>({
		});

	}


	/** The output from the GetRetainedMessage operation. */
	export interface GetRetainedMessageResponse {
		topic?: string;
		payload?: string;
		qos?: number | null;
		lastModifiedTime?: number | null;
		userProperties?: string;
	}

	/** The output from the GetRetainedMessage operation. */
	export interface GetRetainedMessageResponseFormProperties {
		topic: FormControl<string | null | undefined>,
		payload: FormControl<string | null | undefined>,
		qos: FormControl<number | null | undefined>,
		lastModifiedTime: FormControl<number | null | undefined>,
		userProperties: FormControl<string | null | undefined>,
	}
	export function CreateGetRetainedMessageResponseFormGroup() {
		return new FormGroup<GetRetainedMessageResponseFormProperties>({
			topic: new FormControl<string | null | undefined>(undefined),
			payload: new FormControl<string | null | undefined>(undefined),
			qos: new FormControl<number | null | undefined>(undefined),
			lastModifiedTime: new FormControl<number | null | undefined>(undefined),
			userProperties: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The output from the GetThingShadow operation. */
	export interface GetThingShadowResponse {
		payload?: string;
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

	export interface ListNamedShadowsForThingResponse {
		results?: Array<string>;
		nextToken?: string;
		timestamp?: number | null;
	}
	export interface ListNamedShadowsForThingResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateListNamedShadowsForThingResponseFormGroup() {
		return new FormGroup<ListNamedShadowsForThingResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListRetainedMessagesResponse {
		retainedTopics?: Array<RetainedMessageSummary>;
		nextToken?: string;
	}
	export interface ListRetainedMessagesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRetainedMessagesResponseFormGroup() {
		return new FormGroup<ListRetainedMessagesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a single retained message. */
	export interface RetainedMessageSummary {
		topic?: string;
		payloadSize?: number | null;
		qos?: number | null;
		lastModifiedTime?: number | null;
	}

	/** Information about a single retained message. */
	export interface RetainedMessageSummaryFormProperties {
		topic: FormControl<string | null | undefined>,
		payloadSize: FormControl<number | null | undefined>,
		qos: FormControl<number | null | undefined>,
		lastModifiedTime: FormControl<number | null | undefined>,
	}
	export function CreateRetainedMessageSummaryFormGroup() {
		return new FormGroup<RetainedMessageSummaryFormProperties>({
			topic: new FormControl<string | null | undefined>(undefined),
			payloadSize: new FormControl<number | null | undefined>(undefined),
			qos: new FormControl<number | null | undefined>(undefined),
			lastModifiedTime: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The output from the UpdateThingShadow operation. */
	export interface UpdateThingShadowResponse {
		payload?: string;
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface RequestEntityTooLargeException {
	}
	export interface RequestEntityTooLargeExceptionFormProperties {
	}
	export function CreateRequestEntityTooLargeExceptionFormGroup() {
		return new FormGroup<RequestEntityTooLargeExceptionFormProperties>({
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


	/** The input for the GetRetainedMessage operation. */
	export interface GetRetainedMessageRequest {
	}

	/** The input for the GetRetainedMessage operation. */
	export interface GetRetainedMessageRequestFormProperties {
	}
	export function CreateGetRetainedMessageRequestFormGroup() {
		return new FormGroup<GetRetainedMessageRequestFormProperties>({
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

	export interface ListNamedShadowsForThingRequest {
	}
	export interface ListNamedShadowsForThingRequestFormProperties {
	}
	export function CreateListNamedShadowsForThingRequestFormGroup() {
		return new FormGroup<ListNamedShadowsForThingRequestFormProperties>({
		});

	}

	export interface ListRetainedMessagesRequest {
	}
	export interface ListRetainedMessagesRequestFormProperties {
	}
	export function CreateListRetainedMessagesRequestFormGroup() {
		return new FormGroup<ListRetainedMessagesRequestFormProperties>({
		});

	}

	export enum PayloadFormatIndicator { UNSPECIFIED_BYTES = 0, UTF8_DATA = 1 }


	/** The input for the Publish operation. */
	export interface PublishRequest {
		payload?: string;
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
		 * <p>Deletes the shadow for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteThingShadow</a> action.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_DeleteThingShadow.html">DeleteThingShadow</a> in the IoT Developer Guide.</p>
		 * Delete things/{thingName}/shadow
		 * @param {string} thingName The name of the thing.
		 * @param {string} name The name of the shadow.
		 * @return {DeleteThingShadowResponse} Success
		 */
		DeleteThingShadow(thingName: string, name: string | null | undefined): Observable<DeleteThingShadowResponse> {
			return this.http.delete<DeleteThingShadowResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/shadow&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * <p>Gets the shadow for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetThingShadow</a> action.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_GetThingShadow.html">GetThingShadow</a> in the IoT Developer Guide.</p>
		 * Get things/{thingName}/shadow
		 * @param {string} thingName The name of the thing.
		 * @param {string} name The name of the shadow.
		 * @return {GetThingShadowResponse} Success
		 */
		GetThingShadow(thingName: string, name: string | null | undefined): Observable<GetThingShadowResponse> {
			return this.http.get<GetThingShadowResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/shadow&name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * <p>Updates the shadow for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateThingShadow</a> action.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/API_UpdateThingShadow.html">UpdateThingShadow</a> in the IoT Developer Guide.</p>
		 * Post things/{thingName}/shadow
		 * @param {string} thingName The name of the thing.
		 * @param {string} name The name of the shadow.
		 * @return {UpdateThingShadowResponse} Success
		 */
		UpdateThingShadow(thingName: string, name: string | null | undefined, requestBody: UpdateThingShadowPostBody): Observable<UpdateThingShadowResponse> {
			return this.http.post<UpdateThingShadowResponse>(this.baseUri + 'things/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '/shadow&name=' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets the details of a single retained message for the specified topic.</p> <p>This action returns the message payload of the retained message, which can incur messaging costs. To list only the topic names of the retained messages, call <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_iotdata_ListRetainedMessages.html">ListRetainedMessages</a>.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html#awsiotfleethubfordevicemanagement-actions-as-permissions">GetRetainedMessage</a> action.</p> <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core pricing - Messaging</a>.</p>
		 * Get retainedMessage/{topic}
		 * @param {string} topic The topic name of the retained message to retrieve.
		 * @return {GetRetainedMessageResponse} Success
		 */
		GetRetainedMessage(topic: string): Observable<GetRetainedMessageResponse> {
			return this.http.get<GetRetainedMessageResponse>(this.baseUri + 'retainedMessage/' + (topic == null ? '' : encodeURIComponent(topic)), {});
		}

		/**
		 * <p>Lists the shadows for the specified thing.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListNamedShadowsForThing</a> action.</p>
		 * Get api/things/shadow/ListNamedShadowsForThing/{thingName}
		 * @param {string} thingName The name of the thing.
		 * @param {string} nextToken The token to retrieve the next set of results.
		 * @param {number} pageSize The result page size.
		 * @return {ListNamedShadowsForThingResponse} Success
		 */
		ListNamedShadowsForThing(thingName: string, nextToken: string | null | undefined, pageSize: number | null | undefined): Observable<ListNamedShadowsForThingResponse> {
			return this.http.get<ListNamedShadowsForThingResponse>(this.baseUri + 'api/things/shadow/ListNamedShadowsForThing/' + (thingName == null ? '' : encodeURIComponent(thingName)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&pageSize=' + pageSize, {});
		}

		/**
		 * <p>Lists summary information about the retained messages stored for the account.</p> <p>This action returns only the topic names of the retained messages. It doesn't return any message payloads. Although this action doesn't return a message payload, it can still incur messaging costs.</p> <p>To get the message payload of a retained message, call <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_iotdata_GetRetainedMessage.html">GetRetainedMessage</a> with the topic name of the retained message.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiotfleethubfordevicemanagement.html#awsiotfleethubfordevicemanagement-actions-as-permissions">ListRetainedMessages</a> action.</p> <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core pricing - Messaging</a>.</p>
		 * Get retainedMessage
		 * @param {string} nextToken To retrieve the next set of results, the <code>nextToken</code> value from a previous response; otherwise <b>null</b> to receive the first set of results.
		 * @param {number} maxResults The maximum number of results to return at one time.
		 * @return {ListRetainedMessagesResponse} Success
		 */
		ListRetainedMessages(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListRetainedMessagesResponse> {
			return this.http.get<ListRetainedMessagesResponse>(this.baseUri + 'retainedMessage?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Publishes an MQTT message.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">Publish</a> action.</p> <p>For more information about MQTT messages, see <a href="http://docs.aws.amazon.com/iot/latest/developerguide/mqtt.html">MQTT Protocol</a> in the IoT Developer Guide.</p> <p>For more information about messaging costs, see <a href="http://aws.amazon.com/iot-core/pricing/#Messaging">Amazon Web Services IoT Core pricing - Messaging</a>.</p>
		 * Post topics/{topic}
		 * @param {string} topic The name of the MQTT topic.
		 * @param {number} qos The Quality of Service (QoS) level. The default QoS level is 0.
		 * @param {boolean} retain <p>A Boolean value that determines whether to set the RETAIN flag when the message is published.</p> <p>Setting the RETAIN flag causes the message to be retained and sent to new subscribers to the topic.</p> <p>Valid values: <code>true</code> | <code>false</code> </p> <p>Default value: <code>false</code> </p>
		 * @param {string} contentType A UTF-8 encoded string that describes the content of the publishing message.
		 * @param {string} responseTopic A UTF-8 encoded string that's used as the topic name for a response message. The response topic is used to describe the topic which the receiver should publish to as part of the request-response flow. The topic must not contain wildcard characters.
		 * @param {number} messageExpiry A user-defined integer value that represents the message expiry interval in seconds. If absent, the message doesn't expire. For more information about the limits of <code>messageExpiry</code>, see <a href="https://docs.aws.amazon.com/general/latest/gr/iot-core.html#message-broker-limits">Amazon Web Services IoT Core message broker and protocol limits and quotas </a> from the Amazon Web Services Reference Guide.
		 * @return {void} Success
		 */
		Publish(topic: string, qos: number | null | undefined, retain: boolean | null | undefined, contentType: string | null | undefined, responseTopic: string | null | undefined, messageExpiry: number | null | undefined, requestBody: PublishPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'topics/' + (topic == null ? '' : encodeURIComponent(topic)) + '&qos=' + qos + '&retain=' + retain + '&contentType=' + (contentType == null ? '' : encodeURIComponent(contentType)) + '&responseTopic=' + (responseTopic == null ? '' : encodeURIComponent(responseTopic)) + '&messageExpiry=' + messageExpiry, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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

		/** <p>The message body. MQTT accepts text, binary, and empty (null) message payloads.</p> <p>Publishing an empty (null) payload with <b>retain</b> = <code>true</code> deletes the retained message identified by <b>topic</b> from Amazon Web Services IoT Core.</p> */
		payload?: string | null;
	}
	export interface PublishPostBodyFormProperties {

		/** <p>The message body. MQTT accepts text, binary, and empty (null) message payloads.</p> <p>Publishing an empty (null) payload with <b>retain</b> = <code>true</code> deletes the retained message identified by <b>topic</b> from Amazon Web Services IoT Core.</p> */
		payload: FormControl<string | null | undefined>,
	}
	export function CreatePublishPostBodyFormGroup() {
		return new FormGroup<PublishPostBodyFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined),
		});

	}

}

