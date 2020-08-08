import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Information about the claim. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1Claim {

		/** The date that the claim was made. */
		claimDate?: string;

		/** One or more reviews of this claim (namely, a fact-checking article). */
		claimReview?: Array<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview>;

		/** A person or organization stating the claim. For instance, "John Doe". */
		claimant?: string;

		/** The claim text. For instance, "Crime has doubled in the last 2 years." */
		text?: string;
	}


	/** Information about a claim review. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview {

		/** The language this review was written in. For instance, "en" or "de". */
		languageCode?: string;

		/** Information about the publisher. */
		publisher?: GoogleFactcheckingFactchecktoolsV1alpha1Publisher;

		/** The date the claim was reviewed. */
		reviewDate?: string;

		/** Textual rating. For instance, "Mostly false". */
		textualRating?: string;

		/** The title of this claim review, if it can be determined. */
		title?: string;

		/** The URL of this claim review. */
		url?: string;
	}


	/** Information about the publisher. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1Publisher {

		/** The name of this publisher. For instance, "Awesome Fact Checks". */
		name?: string;

		/**
		 * Host-level site name, without the protocol or "www" prefix. For instance,
		 * "awesomefactchecks.com". This value of this field is based purely on the
		 * claim review URL.
		 */
		site?: string;
	}


	/** Information about the claim author. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor {

		/** Corresponds to `ClaimReview.itemReviewed.author.image`. */
		imageUrl?: string;

		/** Corresponds to `ClaimReview.itemReviewed.author.jobTitle`. */
		jobTitle?: string;

		/**
		 * A person or organization stating the claim. For instance, "John Doe".<br>
		 * Corresponds to `ClaimReview.itemReviewed.author.name`.
		 */
		name?: string;

		/** Corresponds to `ClaimReview.itemReviewed.author.sameAs`. */
		sameAs?: string;
	}


	/** Information about the claim rating. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating {

		/**
		 * For numeric ratings, the best value possible in the scale from worst to
		 * best.<br>
		 * Corresponds to `ClaimReview.reviewRating.bestRating`.
		 */
		bestRating?: number;

		/** Corresponds to `ClaimReview.reviewRating.image`. */
		imageUrl?: string;

		/** Corresponds to `ClaimReview.reviewRating.ratingExplanation`. */
		ratingExplanation?: string;

		/**
		 * A numeric rating of this claim, in the range worstRating — bestRating
		 * inclusive.<br>
		 * Corresponds to `ClaimReview.reviewRating.ratingValue`.
		 */
		ratingValue?: number;

		/**
		 * The truthfulness rating as a human-readible short word or phrase.<br>
		 * Corresponds to `ClaimReview.reviewRating.alternateName`.
		 */
		textualRating?: string;

		/**
		 * For numeric ratings, the worst value possible in the scale from worst to
		 * best.<br>
		 * Corresponds to `ClaimReview.reviewRating.worstRating`.
		 */
		worstRating?: number;
	}


	/** Information about the claim review author. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor {

		/** Corresponds to `ClaimReview.author.image`. */
		imageUrl?: string;

		/**
		 * Name of the organization that is publishing the fact check.<br>
		 * Corresponds to `ClaimReview.author.name`.
		 */
		name?: string;
	}


	/**
	 * Fields for an individual `ClaimReview` element.
	 * Except for sub-messages that group fields together, each of these fields
	 * correspond those in https://schema.org/ClaimReview. We list the precise
	 * mapping for each field.
	 */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup {

		/**
		 * A list of links to works in which this claim appears, aside from the one
		 * specified in `claim_first_appearance`.<br>
		 * Corresponds to `ClaimReview.itemReviewed[@type=Claim].appearance.url`.
		 */
		claimAppearances?: Array<string>;

		/** Information about the claim author. */
		claimAuthor?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor;

		/**
		 * The date when the claim was made or entered public discourse.<br>
		 * Corresponds to `ClaimReview.itemReviewed.datePublished`.
		 */
		claimDate?: string;

		/**
		 * A link to a work in which this claim first appears.<br>
		 * Corresponds to `ClaimReview.itemReviewed[@type=Claim].firstAppearance.url`.
		 */
		claimFirstAppearance?: string;

		/**
		 * The location where this claim was made.<br>
		 * Corresponds to `ClaimReview.itemReviewed.name`.
		 */
		claimLocation?: string;

		/**
		 * A short summary of the claim being evaluated.<br>
		 * Corresponds to `ClaimReview.claimReviewed`.
		 */
		claimReviewed?: string;

		/** Information about the claim rating. */
		rating?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating;

		/**
		 * This field is optional, and will default to the page URL. We provide this
		 * field to allow you the override the default value, but the only permitted
		 * override is the page URL plus an optional anchor link ("page jump").<br>
		 * Corresponds to `ClaimReview.url`
		 */
		url?: string;
	}


	/** Holds one or more instances of `ClaimReview` markup for a webpage. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage {

		/** Information about the claim review author. */
		claimReviewAuthor?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor;

		/**
		 * A list of individual claim reviews for this page.
		 * Each item in the list corresponds to one `ClaimReview` element.
		 */
		claimReviewMarkups?: Array<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup>;

		/**
		 * The name of this `ClaimReview` markup page resource, in the form of
		 * `pages/{page_id}`. Except for update requests, this field is output-only
		 * and should not be set by the user.
		 */
		name?: string;

		/**
		 * The URL of the page associated with this `ClaimReview` markup.
		 * While every individual `ClaimReview` has its own URL field, semantically
		 * this is a page-level field, and each `ClaimReview` on this page will use
		 * this value unless individually overridden.<br>
		 * Corresponds to `ClaimReview.url`
		 */
		pageUrl?: string;

		/**
		 * The date when the fact check was published.
		 * Similar to the URL, semantically this is a page-level field, and each
		 * `ClaimReview` on this page will contain the same value.<br>
		 * Corresponds to `ClaimReview.datePublished`
		 */
		publishDate?: string;

		/**
		 * The version ID for this markup. Except for update requests, this field is
		 * output-only and should not be set by the user.
		 */
		versionId?: string;
	}


	/** Response from searching fact-checked claims. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse {

		/** The list of claims and all of their associated information. */
		claims?: Array<GoogleFactcheckingFactchecktoolsV1alpha1Claim>;

		/**
		 * The next pagination token in the Search response. It should be used as the
		 * `page_token` for the following request. An empty value means no more
		 * results.
		 */
		nextPageToken?: string;
	}


	/** Response from listing `ClaimReview` markup. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse {

		/** The result list of pages of `ClaimReview` markup. */
		claimReviewMarkupPages?: Array<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage>;

		/**
		 * The next pagination token in the Search response. It should be used as the
		 * `page_token` for the following request. An empty value means no more
		 * results.
		 */
		nextPageToken?: string;
	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface GoogleProtobufEmpty {
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Search through fact-checked claims.
		 * Get v1alpha1/claims:search
		 * @param {string} languageCode The BCP-47 language code, such as "en-US" or "sr-Latn". Can be used to
		 * restrict results by language, though we do not currently consider the
		 * region.
		 * @param {number} maxAgeDays The maximum age of the returned search results, in days.
		 * Age is determined by either claim date or review date, whichever is newer.
		 * @param {number} offset An integer that specifies the current offset (that is, starting result
		 * location) in search results. This field is only considered if `page_token`
		 * is unset. For example, 0 means to return results starting from the first
		 * matching result, and 10 means to return from the 11th result.
		 * @param {number} pageSize The pagination size. We will return up to that many results. Defaults to
		 * 10 if not set.
		 * @param {string} pageToken The pagination token. You may provide the `next_page_token` returned from a
		 * previous List request, if any, in order to get the next page. All other
		 * fields must have the same values as in the previous request.
		 * @param {string} query Textual query string. Required unless `review_publisher_site_filter` is
		 * specified.
		 * @param {string} reviewPublisherSiteFilter The review publisher site to filter results by, e.g. nytimes.com.
		 * @return {void} Successful response
		 */
		Factchecktools_claims_search(languageCode: string, maxAgeDays: number, offset: number, pageSize: number, pageToken: string, query: string, reviewPublisherSiteFilter: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1alpha1/claims:search?languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&maxAgeDays=' + maxAgeDays + '&offset=' + offset + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&reviewPublisherSiteFilter=' + (reviewPublisherSiteFilter == null ? '' : encodeURIComponent(reviewPublisherSiteFilter)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List the `ClaimReview` markup pages for a specific URL or for an
		 * organization.
		 * Get v1alpha1/pages
		 * @param {number} offset An integer that specifies the current offset (that is, starting result
		 * location) in search results. This field is only considered if `page_token`
		 * is unset, and if the request is not for a specific URL. For example, 0
		 * means to return results starting from the first matching result, and 10
		 * means to return from the 11th result.
		 * @param {string} organization The organization for which we want to fetch markups for. For instance,
		 * "site.com". Cannot be specified along with an URL.
		 * @param {number} pageSize The pagination size. We will return up to that many results. Defaults to
		 * 10 if not set. Has no effect if a URL is requested.
		 * @param {string} pageToken The pagination token. You may provide the `next_page_token` returned from a
		 * previous List request, if any, in order to get the next page. All other
		 * fields must have the same values as in the previous request.
		 * @param {string} url The URL from which to get `ClaimReview` markup. There will be at most one
		 * result. If markup is associated with a more canonical version of the URL
		 * provided, we will return that URL instead. Cannot be specified along with
		 * an organization.
		 * @return {void} Successful response
		 */
		Factchecktools_pages_list(offset: number, organization: string, pageSize: number, pageToken: string, url: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1alpha1/pages?offset=' + offset + '&organization=' + (organization == null ? '' : encodeURIComponent(organization)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&url=' + (url == null ? '' : encodeURIComponent(url)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create `ClaimReview` markup on a page.
		 * Post v1alpha1/pages
		 * @return {void} Successful response
		 */
		Factchecktools_pages_create(requestBody: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1alpha1/pages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete all `ClaimReview` markup on a page.
		 * Delete v1alpha1/{name}
		 * @param {string} name The name of the resource to delete, in the form of `pages/{page_id}`.
		 * @return {void} Successful response
		 */
		Factchecktools_pages_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all `ClaimReview` markup on a page.
		 * Get v1alpha1/{name}
		 * @param {string} name The name of the resource to get, in the form of `pages/{page_id}`.
		 * @return {void} Successful response
		 */
		Factchecktools_pages_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update for all `ClaimReview` markup on a page
		 * Note that this is a full update. To retain the existing `ClaimReview`
		 * markup on a page, first perform a Get operation, then modify the returned
		 * markup, and finally call Update with the entire `ClaimReview` markup as the
		 * body.
		 * Put v1alpha1/{name}
		 * @param {string} name The name of this `ClaimReview` markup page resource, in the form of
		 * `pages/{page_id}`. Except for update requests, this field is output-only
		 * and should not be set by the user.
		 * @return {void} Successful response
		 */
		Factchecktools_pages_update(name: string, requestBody: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

