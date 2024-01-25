import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface InvokeEndpointOutput {

		/**
		 * Required
		 * Max length: 6291456
		 */
		Body: string;
	}
	export interface InvokeEndpointOutputFormProperties {

		/**
		 * Required
		 * Max length: 6291456
		 */
		Body: FormControl<string | null | undefined>,
	}
	export function CreateInvokeEndpointOutputFormGroup() {
		return new FormGroup<InvokeEndpointOutputFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(6291456)]),
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

	export interface InvokeEndpointInput {

		/**
		 * Required
		 * Max length: 6291456
		 */
		Body: string;
	}
	export interface InvokeEndpointInputFormProperties {

		/**
		 * Required
		 * Max length: 6291456
		 */
		Body: FormControl<string | null | undefined>,
	}
	export function CreateInvokeEndpointInputFormGroup() {
		return new FormGroup<InvokeEndpointInputFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(6291456)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>After you deploy a model into production using Amazon SageMaker hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint. </p> <p>For an overview of Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p> <p>Amazon SageMaker strips all POST headers except those supported by the API. Amazon SageMaker might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax. </p> <p>Calls to <code>InvokeEndpoint</code> are authenticated by using AWS Signature Version 4. For information, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests (AWS Signature Version 4)</a> in the <i>Amazon S3 API Reference</i>.</p> <p>A customer's model containers must respond to requests within 60 seconds. The model itself can have a maximum processing time of 60 seconds before responding to the /invocations. If your model is going to take 50-60 seconds of processing time, the SDK socket timeout should be set to be 70 seconds.</p> <note> <p>Endpoints are scoped to an individual account, and are not public. The URL does not contain the account ID, but Amazon SageMaker determines the account ID from the authentication token that is supplied by the caller.</p> </note>
		 * Post endpoints/{EndpointName}/invocations
		 * @param {string} EndpointName The name of the endpoint that you specified when you created the endpoint using the <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/API_CreateEndpoint.html">CreateEndpoint</a> API. 
		 * @return {InvokeEndpointOutput} Success
		 */
		InvokeEndpoint(EndpointName: string, requestBody: InvokeEndpointPostBody): Observable<InvokeEndpointOutput> {
			return this.http.post<InvokeEndpointOutput>(this.baseUri + 'endpoints/' + (EndpointName == null ? '' : encodeURIComponent(EndpointName)) + '/invocations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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

