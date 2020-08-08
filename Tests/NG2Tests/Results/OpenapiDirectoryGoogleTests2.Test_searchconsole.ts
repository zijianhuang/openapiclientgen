import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Blocked resource. */
	export interface BlockedResource {

		/** URL of the blocked resource. */
		url?: string;
	}


	/** Describe image data. */
	export interface Image {

		/**
		 * Image data in format determined by the mime type. Currently, the format
		 * will always be "image/png", but this might change in the future.
		 */
		data?: string;

		/** The mime-type of the image data. */
		mimeType?: string;
	}


	/** Mobile-friendly issue. */
	export interface MobileFriendlyIssue {

		/** Rule violated. */
		rule?: MobileFriendlyIssueRule;
	}

	export enum MobileFriendlyIssueRule { MOBILE_FRIENDLY_RULE_UNSPECIFIED = 0, USES_INCOMPATIBLE_PLUGINS = 1, CONFIGURE_VIEWPORT = 2, FIXED_WIDTH_VIEWPORT = 3, SIZE_CONTENT_TO_VIEWPORT = 4, USE_LEGIBLE_FONT_SIZES = 5, TAP_TARGETS_TOO_CLOSE = 6 }


	/** Information about a resource with issue. */
	export interface ResourceIssue {

		/** Blocked resource. */
		blockedResource?: BlockedResource;
	}


	/** Mobile-friendly test request. */
	export interface RunMobileFriendlyTestRequest {

		/** Whether or not screenshot is requested. Default is false. */
		requestScreenshot?: boolean;

		/** URL for inspection. */
		url?: string;
	}


	/**
	 * Mobile-friendly test response, including mobile-friendly issues and resource
	 * issues.
	 */
	export interface RunMobileFriendlyTestResponse {

		/** Test verdict, whether the page is mobile friendly or not. */
		mobileFriendliness?: RunMobileFriendlyTestResponseMobileFriendliness;

		/** List of mobile-usability issues. */
		mobileFriendlyIssues?: Array<MobileFriendlyIssue>;

		/** Information about embedded resources issues. */
		resourceIssues?: Array<ResourceIssue>;

		/** Describe image data. */
		screenshot?: Image;

		/** Final state of the test, including error details if necessary. */
		testStatus?: TestStatus;
	}

	export enum RunMobileFriendlyTestResponseMobileFriendliness { MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED = 0, MOBILE_FRIENDLY = 1, NOT_MOBILE_FRIENDLY = 2 }


	/** Final state of the test, including error details if necessary. */
	export interface TestStatus {

		/** Error details if applicable. */
		details?: string;

		/** Status of the test. */
		status?: TestStatusStatus;
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

