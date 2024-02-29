import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateApplicationResponse {

		/** Required */
		applicationId: string;

		/** Required */
		applicationArn: string;
	}
	export interface CreateApplicationResponseFormProperties {

		/** Required */
		applicationId: FormControl<string | null | undefined>,

		/** Required */
		applicationArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationResponseFormGroup() {
		return new FormGroup<CreateApplicationResponseFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface InternalFailureException {
	}
	export interface InternalFailureExceptionFormProperties {
	}
	export function CreateInternalFailureExceptionFormGroup() {
		return new FormGroup<InternalFailureExceptionFormProperties>({
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

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface DeleteApplicationResponse {
	}
	export interface DeleteApplicationResponseFormProperties {
	}
	export function CreateDeleteApplicationResponseFormGroup() {
		return new FormGroup<DeleteApplicationResponseFormProperties>({
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

	export interface DescribeApplicationResponse {

		/** Required */
		applicationId: string;

		/** Required */
		applicationArn: string;

		/** Required */
		applicationName: string;
		applicationDescription?: string;

		/** Required */
		applicationUrl: string;

		/** Required */
		applicationState: ApplicationState;

		/** Required */
		applicationCreationDate: number;

		/** Required */
		applicationLastUpdateDate: number;

		/** Required */
		roleArn: string;
		ssoClientId?: string;
		errorMessage?: string;
		tags?: TagMap;
	}
	export interface DescribeApplicationResponseFormProperties {

		/** Required */
		applicationId: FormControl<string | null | undefined>,

		/** Required */
		applicationArn: FormControl<string | null | undefined>,

		/** Required */
		applicationName: FormControl<string | null | undefined>,
		applicationDescription: FormControl<string | null | undefined>,

		/** Required */
		applicationUrl: FormControl<string | null | undefined>,

		/** Required */
		applicationState: FormControl<ApplicationState | null | undefined>,

		/** Required */
		applicationCreationDate: FormControl<number | null | undefined>,

		/** Required */
		applicationLastUpdateDate: FormControl<number | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		ssoClientId: FormControl<string | null | undefined>,
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateDescribeApplicationResponseFormGroup() {
		return new FormGroup<DescribeApplicationResponseFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationDescription: new FormControl<string | null | undefined>(undefined),
			applicationUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationState: new FormControl<ApplicationState | null | undefined>(undefined, [Validators.required]),
			applicationCreationDate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			applicationLastUpdateDate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ssoClientId: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApplicationState { CREATING = 'CREATING', DELETING = 'DELETING', ACTIVE = 'ACTIVE', CREATE_FAILED = 'CREATE_FAILED', DELETE_FAILED = 'DELETE_FAILED' }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface ListApplicationsResponse {
		applicationSummaries?: Array<ApplicationSummary>;
		nextToken?: string;
	}
	export interface ListApplicationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsResponseFormGroup() {
		return new FormGroup<ListApplicationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>A summary of information about a AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note> */
	export interface ApplicationSummary {

		/** Required */
		applicationId: string;

		/** Required */
		applicationName: string;
		applicationDescription?: string;

		/** Required */
		applicationUrl: string;
		applicationCreationDate?: number | null;
		applicationLastUpdateDate?: number | null;
		applicationState?: ApplicationState;
	}

	/** <p>A summary of information about a AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note> */
	export interface ApplicationSummaryFormProperties {

		/** Required */
		applicationId: FormControl<string | null | undefined>,

		/** Required */
		applicationName: FormControl<string | null | undefined>,
		applicationDescription: FormControl<string | null | undefined>,

		/** Required */
		applicationUrl: FormControl<string | null | undefined>,
		applicationCreationDate: FormControl<number | null | undefined>,
		applicationLastUpdateDate: FormControl<number | null | undefined>,
		applicationState: FormControl<ApplicationState | null | undefined>,
	}
	export function CreateApplicationSummaryFormGroup() {
		return new FormGroup<ApplicationSummaryFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationDescription: new FormControl<string | null | undefined>(undefined),
			applicationUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationCreationDate: new FormControl<number | null | undefined>(undefined),
			applicationLastUpdateDate: new FormControl<number | null | undefined>(undefined),
			applicationState: new FormControl<ApplicationState | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateApplicationResponse {
	}
	export interface UpdateApplicationResponseFormProperties {
	}
	export function CreateUpdateApplicationResponseFormGroup() {
		return new FormGroup<UpdateApplicationResponseFormProperties>({
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

	export interface CreateApplicationRequest {

		/** Required */
		applicationName: string;
		applicationDescription?: string;
		clientToken?: string;

		/** Required */
		roleArn: string;
		tags?: TagMap;
	}
	export interface CreateApplicationRequestFormProperties {

		/** Required */
		applicationName: FormControl<string | null | undefined>,
		applicationDescription: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationRequestFormGroup() {
		return new FormGroup<CreateApplicationRequestFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationDescription: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteApplicationRequest {
	}
	export interface DeleteApplicationRequestFormProperties {
	}
	export function CreateDeleteApplicationRequestFormGroup() {
		return new FormGroup<DeleteApplicationRequestFormProperties>({
		});

	}

	export interface DescribeApplicationRequest {
	}
	export interface DescribeApplicationRequestFormProperties {
	}
	export function CreateDescribeApplicationRequestFormGroup() {
		return new FormGroup<DescribeApplicationRequestFormProperties>({
		});

	}

	export interface ListApplicationsRequest {
	}
	export interface ListApplicationsRequestFormProperties {
	}
	export function CreateListApplicationsRequestFormGroup() {
		return new FormGroup<ListApplicationsRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateApplicationRequest {
		applicationName?: string;
		applicationDescription?: string;
		clientToken?: string;
	}
	export interface UpdateApplicationRequestFormProperties {
		applicationName: FormControl<string | null | undefined>,
		applicationDescription: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationRequestFormGroup() {
		return new FormGroup<UpdateApplicationRequestFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined),
			applicationDescription: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
		 * Post applications
		 * @return {void} 
		 */
		CreateApplication(requestBody: CreateApplicationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'applications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets a list of Fleet Hub for AWS IoT Device Management web applications for the current account.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
		 * Get applications
		 * @param {string} nextToken A token used to get the next set of results.
		 *     Min length: 1    Max length: 2048
		 * @return {ListApplicationsResponse} Success
		 */
		ListApplications(nextToken: string | null | undefined): Observable<ListApplicationsResponse> {
			return this.http.get<ListApplicationsResponse>(this.baseUri + 'applications?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Deletes a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
		 * Delete applications/{applicationId}
		 * @param {string} applicationId The unique Id of the web application.
		 *     Min length: 36    Max length: 36
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 *     Min length: 1    Max length: 64
		 * @return {void} 
		 */
		DeleteApplication(applicationId: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets information about a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
		 * Get applications/{applicationId}
		 * @param {string} applicationId The unique Id of the web application.
		 *     Min length: 36    Max length: 36
		 * @return {DescribeApplicationResponse} Success
		 */
		DescribeApplication(applicationId: string): Observable<DescribeApplicationResponse> {
			return this.http.get<DescribeApplicationResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)), {});
		}

		/**
		 * <p>Updates information about a Fleet Hub for a AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
		 * Patch applications/{applicationId}
		 * @param {string} applicationId The unique Id of the web application.
		 *     Min length: 36    Max length: 36
		 * @return {void} 
		 */
		UpdateApplication(applicationId: string, requestBody: UpdateApplicationPatchBody): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Lists the tags for the specified resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Adds to or modifies the tags of the specified resource. Tags are metadata which can be used to manage a resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The ARN of the resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Removes the specified tags (metadata) from the resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The ARN of the resource.
		 * @param {Array<string>} tagKeys A list of the keys of the tags to be removed from the resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateApplicationPostBody {

		/**
		 * The name of the web application.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		applicationName: string;

		/**
		 * An optional description of the web application.
		 * Min length: 1
		 * Max length: 2048
		 */
		applicationDescription?: string | null;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Min length: 1
		 * Max length: 64
		 */
		clientToken?: string | null;

		/**
		 * <p>The ARN of the role that the web application assumes when it interacts with AWS IoT Core.</p> <note> <p>The name of the role must be in the form <code>AWSIotFleetHub_<i>random_string</i> </code>.</p> </note>
		 * Required
		 * Min length: 1
		 * Max length: 1600
		 */
		roleArn: string;

		/** A set of key/value pairs that you can use to manage the web application resource. */
		tags?: {[id: string]: string };
	}
	export interface CreateApplicationPostBodyFormProperties {

		/**
		 * The name of the web application.
		 * Required
		 * Min length: 1
		 * Max length: 100
		 */
		applicationName: FormControl<string | null | undefined>,

		/**
		 * An optional description of the web application.
		 * Min length: 1
		 * Max length: 2048
		 */
		applicationDescription: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Min length: 1
		 * Max length: 64
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * <p>The ARN of the role that the web application assumes when it interacts with AWS IoT Core.</p> <note> <p>The name of the role must be in the form <code>AWSIotFleetHub_<i>random_string</i> </code>.</p> </note>
		 * Required
		 * Min length: 1
		 * Max length: 1600
		 */
		roleArn: FormControl<string | null | undefined>,

		/** A set of key/value pairs that you can use to manage the web application resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateApplicationPostBodyFormGroup() {
		return new FormGroup<CreateApplicationPostBodyFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[ -~]*$')]),
			applicationDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^[ -~]*$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('^arn:[!-~]+$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateApplicationPatchBody {

		/**
		 * The name of the web application.
		 * Min length: 1
		 * Max length: 100
		 */
		applicationName?: string | null;

		/**
		 * An optional description of the web application.
		 * Min length: 1
		 * Max length: 2048
		 */
		applicationDescription?: string | null;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Min length: 1
		 * Max length: 64
		 */
		clientToken?: string | null;
	}
	export interface UpdateApplicationPatchBodyFormProperties {

		/**
		 * The name of the web application.
		 * Min length: 1
		 * Max length: 100
		 */
		applicationName: FormControl<string | null | undefined>,

		/**
		 * An optional description of the web application.
		 * Min length: 1
		 * Max length: 2048
		 */
		applicationDescription: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Min length: 1
		 * Max length: 64
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationPatchBodyFormGroup() {
		return new FormGroup<UpdateApplicationPatchBodyFormProperties>({
			applicationName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[ -~]*$')]),
			applicationDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^[ -~]*$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The new or modified tags for the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The new or modified tags for the resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

}

