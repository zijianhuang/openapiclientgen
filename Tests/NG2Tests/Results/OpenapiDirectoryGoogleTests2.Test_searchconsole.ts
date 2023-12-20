import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Blocked resource. */
	export interface BlockedResource {

		/** URL of the blocked resource. */
		url?: string | null;
	}

	/** Blocked resource. */
	export interface BlockedResourceFormProperties {

		/** URL of the blocked resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateBlockedResourceFormGroup() {
		return new FormGroup<BlockedResourceFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describe image data. */
	export interface Image {

		/**
		 * Image data in format determined by the mime type. Currently, the format
		 * will always be "image/png", but this might change in the future.
		 */
		data?: string | null;

		/** The mime-type of the image data. */
		mimeType?: string | null;
	}

	/** Describe image data. */
	export interface ImageFormProperties {

		/**
		 * Image data in format determined by the mime type. Currently, the format
		 * will always be "image/png", but this might change in the future.
		 */
		data: FormControl<string | null | undefined>,

		/** The mime-type of the image data. */
		mimeType: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Mobile-friendly issue. */
	export interface MobileFriendlyIssue {

		/** Rule violated. */
		rule?: MobileFriendlyIssueRule | null;
	}

	/** Mobile-friendly issue. */
	export interface MobileFriendlyIssueFormProperties {

		/** Rule violated. */
		rule: FormControl<MobileFriendlyIssueRule | null | undefined>,
	}
	export function CreateMobileFriendlyIssueFormGroup() {
		return new FormGroup<MobileFriendlyIssueFormProperties>({
			rule: new FormControl<MobileFriendlyIssueRule | null | undefined>(undefined),
		});

	}

	export enum MobileFriendlyIssueRule { MOBILE_FRIENDLY_RULE_UNSPECIFIED = 0, USES_INCOMPATIBLE_PLUGINS = 1, CONFIGURE_VIEWPORT = 2, FIXED_WIDTH_VIEWPORT = 3, SIZE_CONTENT_TO_VIEWPORT = 4, USE_LEGIBLE_FONT_SIZES = 5, TAP_TARGETS_TOO_CLOSE = 6 }


	/** Information about a resource with issue. */
	export interface ResourceIssue {

		/** Blocked resource. */
		blockedResource?: BlockedResource;
	}

	/** Information about a resource with issue. */
	export interface ResourceIssueFormProperties {
	}
	export function CreateResourceIssueFormGroup() {
		return new FormGroup<ResourceIssueFormProperties>({
		});

	}


	/** Mobile-friendly test request. */
	export interface RunMobileFriendlyTestRequest {

		/** Whether or not screenshot is requested. Default is false. */
		requestScreenshot?: boolean | null;

		/** URL for inspection. */
		url?: string | null;
	}

	/** Mobile-friendly test request. */
	export interface RunMobileFriendlyTestRequestFormProperties {

		/** Whether or not screenshot is requested. Default is false. */
		requestScreenshot: FormControl<boolean | null | undefined>,

		/** URL for inspection. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateRunMobileFriendlyTestRequestFormGroup() {
		return new FormGroup<RunMobileFriendlyTestRequestFormProperties>({
			requestScreenshot: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Mobile-friendly test response, including mobile-friendly issues and resource
	 * issues.
	 */
	export interface RunMobileFriendlyTestResponse {

		/** Test verdict, whether the page is mobile friendly or not. */
		mobileFriendliness?: RunMobileFriendlyTestResponseMobileFriendliness | null;

		/** List of mobile-usability issues. */
		mobileFriendlyIssues?: Array<MobileFriendlyIssue>;

		/** Information about embedded resources issues. */
		resourceIssues?: Array<ResourceIssue>;

		/** Describe image data. */
		screenshot?: Image;

		/** Final state of the test, including error details if necessary. */
		testStatus?: TestStatus;
	}

	/**
	 * Mobile-friendly test response, including mobile-friendly issues and resource
	 * issues.
	 */
	export interface RunMobileFriendlyTestResponseFormProperties {

		/** Test verdict, whether the page is mobile friendly or not. */
		mobileFriendliness: FormControl<RunMobileFriendlyTestResponseMobileFriendliness | null | undefined>,
	}
	export function CreateRunMobileFriendlyTestResponseFormGroup() {
		return new FormGroup<RunMobileFriendlyTestResponseFormProperties>({
			mobileFriendliness: new FormControl<RunMobileFriendlyTestResponseMobileFriendliness | null | undefined>(undefined),
		});

	}

	export enum RunMobileFriendlyTestResponseMobileFriendliness { MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED = 0, MOBILE_FRIENDLY = 1, NOT_MOBILE_FRIENDLY = 2 }


	/** Final state of the test, including error details if necessary. */
	export interface TestStatus {

		/** Error details if applicable. */
		details?: string | null;

		/** Status of the test. */
		status?: TestStatusStatus | null;
	}

	/** Final state of the test, including error details if necessary. */
	export interface TestStatusFormProperties {

		/** Error details if applicable. */
		details: FormControl<string | null | undefined>,

		/** Status of the test. */
		status: FormControl<TestStatusStatus | null | undefined>,
	}
	export function CreateTestStatusFormGroup() {
		return new FormGroup<TestStatusFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<TestStatusStatus | null | undefined>(undefined),
		});

	}

	export enum TestStatusStatus { TEST_STATUS_UNSPECIFIED = 0, COMPLETE = 1, INTERNAL_ERROR = 2, PAGE_UNREACHABLE = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Runs Mobile-Friendly Test for a given URL.
		 * Post v1/urlTestingTools/mobileFriendlyTest:run
		 * @return {void} Successful response
		 */
		Searchconsole_urlTestingTools_mobileFriendlyTest_run(requestBody: RunMobileFriendlyTestRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/urlTestingTools/mobileFriendlyTest:run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

