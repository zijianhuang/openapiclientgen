import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** AMP URL response for a requested URL. */
	export interface AmpUrl {

		/** The AMP URL pointing to the publisher's web server. */
		ampUrl?: string;

		/**
		 * The [AMP Cache URL](/amp/cache/overview#amp-cache-url-format) pointing to
		 * the cached document in the Google AMP Cache.
		 */
		cdnAmpUrl?: string;

		/** The original non-AMP URL. */
		originalUrl?: string;
	}


	/** AMP URL Error resource for a requested URL that couldn't be found. */
	export interface AmpUrlError {

		/** The error code of an API call. */
		errorCode?: AmpUrlErrorErrorCode;

		/** An optional descriptive error message. */
		errorMessage?: string;

		/** The original non-AMP URL. */
		originalUrl?: string;
	}

	export enum AmpUrlErrorErrorCode { ERROR_CODE_UNSPECIFIED = 0, INPUT_URL_NOT_FOUND = 1, NO_AMP_URL = 2, APPLICATION_ERROR = 3, URL_IS_VALID_AMP = 4, URL_IS_INVALID_AMP = 5 }


	/** AMP URL request for a batch of URLs. */
	export interface BatchGetAmpUrlsRequest {

		/** The lookup_strategy being requested. */
		lookupStrategy?: BatchGetAmpUrlsRequestLookupStrategy;

		/**
		 * List of URLs to look up for the paired AMP URLs.
		 * The URLs are case-sensitive. Up to 50 URLs per lookup
		 * (see [Usage Limits](/amp/cache/reference/limits)).
		 */
		urls?: Array<string>;
	}

	export enum BatchGetAmpUrlsRequestLookupStrategy { FETCH_LIVE_DOC = 0, IN_INDEX_DOC = 1 }


	/** Batch AMP URL response. */
	export interface BatchGetAmpUrlsResponse {

		/**
		 * For each URL in BatchAmpUrlsRequest, the URL response. The response might
		 * not be in the same order as URLs in the batch request.
		 * If BatchAmpUrlsRequest contains duplicate URLs, AmpUrl is generated
		 * only once.
		 */
		ampUrls?: Array<AmpUrl>;

		/** The errors for requested URLs that have no AMP URL. */
		urlErrors?: Array<AmpUrlError>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns AMP URL(s) and equivalent
		 * [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).
		 * Post v1/ampUrls:batchGet
		 * @return {void} Successful response
		 */
		Acceleratedmobilepageurl_ampUrls_batchGet(requestBody: BatchGetAmpUrlsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/ampUrls:batchGet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

