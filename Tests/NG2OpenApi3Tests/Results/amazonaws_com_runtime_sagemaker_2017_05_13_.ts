import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface InvokeEndpointOutput {

		/** Required */
		Body: string;
	}
	export interface InvokeEndpointOutputFormProperties {

		/** Required */
		Body: FormControl<string | null | undefined>,
	}
	export function CreateInvokeEndpointOutputFormGroup() {
		return new FormGroup<InvokeEndpointOutputFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InternalFailure {
	}
	export interface InternalFailureFormProperties {
	}
	export function CreateInternalFailureFormGroup() {
		return new FormGroup<InternalFailureFormProperties>({
		});

	}

	export interface ServiceUnavailable {
	}
	export interface ServiceUnavailableFormProperties {
	}
	export function CreateServiceUnavailableFormGroup() {
		return new FormGroup<ServiceUnavailableFormProperties>({
		});

	}

	export interface ValidationError {
	}
	export interface ValidationErrorFormProperties {
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
		});

	}

	export interface ModelError {
	}
	export interface ModelErrorFormProperties {
	}
	export function CreateModelErrorFormGroup() {
		return new FormGroup<ModelErrorFormProperties>({
		});

	}

	export interface InternalDependencyException {
	}
	export interface InternalDependencyExceptionFormProperties {
	}
	export function CreateInternalDependencyExceptionFormGroup() {
		return new FormGroup<InternalDependencyExceptionFormProperties>({
		});

	}

	export interface ModelNotReadyException {
	}
	export interface ModelNotReadyExceptionFormProperties {
	}
	export function CreateModelNotReadyExceptionFormGroup() {
		return new FormGroup<ModelNotReadyExceptionFormProperties>({
		});

	}

	export interface InvokeEndpointAsyncOutput {
		InferenceId?: string;
	}
	export interface InvokeEndpointAsyncOutputFormProperties {
		InferenceId: FormControl<string | null | undefined>,
	}
	export function CreateInvokeEndpointAsyncOutputFormGroup() {
		return new FormGroup<InvokeEndpointAsyncOutputFormProperties>({
			InferenceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvokeEndpointAsyncInput {
	}
	export interface InvokeEndpointAsyncInputFormProperties {
	}
	export function CreateInvokeEndpointAsyncInputFormGroup() {
		return new FormGroup<InvokeEndpointAsyncInputFormProperties>({
		});

	}

	export interface InvokeEndpointInput {

		/** Required */
		Body: string;
	}
	export interface InvokeEndpointInputFormProperties {

		/** Required */
		Body: FormControl<string | null | undefined>,
	}
	export function CreateInvokeEndpointInputFormGroup() {
		return new FormGroup<InvokeEndpointInputFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>After you deploy a model into production using Amazon SageMaker hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint. </p> <p>For an overview of Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p> <p>Amazon SageMaker strips all POST headers except those supported by the API. Amazon SageMaker might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax. </p> <p>Calls to <code>InvokeEndpoint</code> are authenticated by using Amazon Web Services Signature Version 4. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests (Amazon Web Services Signature Version 4)</a> in the <i>Amazon S3 API Reference</i>.</p> <p>A customer's model containers must respond to requests within 60 seconds. The model itself can have a maximum processing time of 60 seconds before responding to invocations. If your model is going to take 50-60 seconds of processing time, the SDK socket timeout should be set to be 70 seconds.</p> <note> <p>Endpoints are scoped to an individual account, and are not public. The URL does not contain the account ID, but Amazon SageMaker determines the account ID from the authentication token that is supplied by the caller.</p> </note>
		 * Post endpoints/{EndpointName}/invocations
		 * @param {string} EndpointName The name of the endpoint that you specified when you created the endpoint using the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html">CreateEndpoint</a> API. 
		 * @return {InvokeEndpointOutput} Success
		 */
		InvokeEndpoint(EndpointName: string, requestBody: InvokeEndpointPostBody): Observable<InvokeEndpointOutput> {
			return this.http.post<InvokeEndpointOutput>(this.baseUri + 'endpoints/' + (EndpointName == null ? '' : encodeURIComponent(EndpointName)) + '/invocations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>After you deploy a model into production using Amazon SageMaker hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint in an asynchronous manner.</p> <p>Inference requests sent to this API are enqueued for asynchronous processing. The processing of the inference request may or may not complete before you receive a response from this API. The response from this API will not contain the result of the inference request but contain information about where you can locate it.</p> <p>Amazon SageMaker strips all <code>POST</code> headers except those supported by the API. Amazon SageMaker might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax.</p> <p>Calls to <code>InvokeEndpointAsync</code> are authenticated by using Amazon Web Services Signature Version 4. For information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests (Amazon Web Services Signature Version 4)</a> in the <i>Amazon S3 API Reference</i>.</p>
		 * Post endpoints/{EndpointName}/async-invocations#X-Amzn-SageMaker-InputLocation
		 * @param {string} EndpointName The name of the endpoint that you specified when you created the endpoint using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateEndpoint.html"> <code>CreateEndpoint</code> </a> API.
		 * @return {void} 
		 */
		InvokeEndpointAsync(EndpointName: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'endpoints/' + (EndpointName == null ? '' : encodeURIComponent(EndpointName)) + '/async-invocations#X-Amzn-SageMaker-InputLocation', null, { observe: 'response', responseType: 'text' });
		}
	}

	export interface InvokeEndpointPostBody {

		/**
		 * <p>Provides input data, in the format specified in the <code>ContentType</code> request header. Amazon SageMaker passes all of the data in the body to the model. </p> <p>For information about the format of the request body, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data Formats-Inference</a>.</p>
		 * Required
		 * Max length: 6291456
		 */
		Body: string;
	}
	export interface InvokeEndpointPostBodyFormProperties {

		/**
		 * <p>Provides input data, in the format specified in the <code>ContentType</code> request header. Amazon SageMaker passes all of the data in the body to the model. </p> <p>For information about the format of the request body, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/cdf-inference.html">Common Data Formats-Inference</a>.</p>
		 * Required
		 * Max length: 6291456
		 */
		Body: FormControl<string | null | undefined>,
	}
	export function CreateInvokeEndpointPostBodyFormGroup() {
		return new FormGroup<InvokeEndpointPostBodyFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(6291456)]),
		});

	}

}

