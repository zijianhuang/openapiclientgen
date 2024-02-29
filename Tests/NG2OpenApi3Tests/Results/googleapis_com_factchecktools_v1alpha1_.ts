import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Information about the claim. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1Claim {

		/** The date that the claim was made. */
		claimDate?: string | null;

		/** One or more reviews of this claim (namely, a fact-checking article). */
		claimReview?: Array<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview>;

		/** A person or organization stating the claim. For instance, "John Doe". */
		claimant?: string | null;

		/** The claim text. For instance, "Crime has doubled in the last 2 years." */
		text?: string | null;
	}

	/** Information about the claim. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimFormProperties {

		/** The date that the claim was made. */
		claimDate: FormControl<string | null | undefined>,

		/** A person or organization stating the claim. For instance, "John Doe". */
		claimant: FormControl<string | null | undefined>,

		/** The claim text. For instance, "Crime has doubled in the last 2 years." */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFactcheckingFactchecktoolsV1alpha1ClaimFormGroup() {
		return new FormGroup<GoogleFactcheckingFactchecktoolsV1alpha1ClaimFormProperties>({
			claimDate: new FormControl<string | null | undefined>(undefined),
			claimant: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a claim review. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview {

		/** The language this review was written in. For instance, "en" or "de". */
		languageCode?: string | null;

		/** Information about the publisher. */
		publisher?: GoogleFactcheckingFactchecktoolsV1alpha1Publisher;

		/** The date the claim was reviewed. */
		reviewDate?: string | null;

		/** Textual rating. For instance, "Mostly false". */
		textualRating?: string | null;

		/** The title of this claim review, if it can be determined. */
		title?: string | null;

		/** The URL of this claim review. */
		url?: string | null;
	}

	/** Information about a claim review. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewFormProperties {

		/** The language this review was written in. For instance, "en" or "de". */
		languageCode: FormControl<string | null | undefined>,

		/** The date the claim was reviewed. */
		reviewDate: FormControl<string | null | undefined>,

		/** Textual rating. For instance, "Mostly false". */
		textualRating: FormControl<string | null | undefined>,

		/** The title of this claim review, if it can be determined. */
		title: FormControl<string | null | undefined>,

		/** The URL of this claim review. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewFormGroup() {
		return new FormGroup<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			reviewDate: new FormControl<string | null | undefined>(undefined),
			textualRating: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the publisher. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1Publisher {

		/** The name of this publisher. For instance, "Awesome Fact Checks". */
		name?: string | null;

		/** Host-level site name, without the protocol or "www" prefix. For instance, "awesomefactchecks.com". This value of this field is based purely on the claim review URL. */
		site?: string | null;
	}

	/** Information about the publisher. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1PublisherFormProperties {

		/** The name of this publisher. For instance, "Awesome Fact Checks". */
		name: FormControl<string | null | undefined>,

		/** Host-level site name, without the protocol or "www" prefix. For instance, "awesomefactchecks.com". This value of this field is based purely on the claim review URL. */
		site: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFactcheckingFactchecktoolsV1alpha1PublisherFormGroup() {
		return new FormGroup<GoogleFactcheckingFactchecktoolsV1alpha1PublisherFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			site: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the claim author. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor {

		/** Corresponds to `ClaimReview.itemReviewed.author.image`. */
		imageUrl?: string | null;

		/** Corresponds to `ClaimReview.itemReviewed.author.jobTitle`. */
		jobTitle?: string | null;

		/** A person or organization stating the claim. For instance, "John Doe". Corresponds to `ClaimReview.itemReviewed.author.name`. */
		name?: string | null;

		/** Corresponds to `ClaimReview.itemReviewed.author.sameAs`. */
		sameAs?: string | null;
	}

	/** Information about the claim author. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthorFormProperties {

		/** Corresponds to `ClaimReview.itemReviewed.author.image`. */
		imageUrl: FormControl<string | null | undefined>,

		/** Corresponds to `ClaimReview.itemReviewed.author.jobTitle`. */
		jobTitle: FormControl<string | null | undefined>,

		/** A person or organization stating the claim. For instance, "John Doe". Corresponds to `ClaimReview.itemReviewed.author.name`. */
		name: FormControl<string | null | undefined>,

		/** Corresponds to `ClaimReview.itemReviewed.author.sameAs`. */
		sameAs: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthorFormGroup() {
		return new FormGroup<GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthorFormProperties>({
			imageUrl: new FormControl<string | null | undefined>(undefined),
			jobTitle: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sameAs: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the claim rating. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating {

		/**
		 * For numeric ratings, the best value possible in the scale from worst to best. Corresponds to `ClaimReview.reviewRating.bestRating`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bestRating?: number | null;

		/** Corresponds to `ClaimReview.reviewRating.image`. */
		imageUrl?: string | null;

		/** Corresponds to `ClaimReview.reviewRating.ratingExplanation`. */
		ratingExplanation?: string | null;

		/**
		 * A numeric rating of this claim, in the range worstRating — bestRating inclusive. Corresponds to `ClaimReview.reviewRating.ratingValue`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ratingValue?: number | null;

		/** The truthfulness rating as a human-readible short word or phrase. Corresponds to `ClaimReview.reviewRating.alternateName`. */
		textualRating?: string | null;

		/**
		 * For numeric ratings, the worst value possible in the scale from worst to best. Corresponds to `ClaimReview.reviewRating.worstRating`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		worstRating?: number | null;
	}

	/** Information about the claim rating. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimRatingFormProperties {

		/**
		 * For numeric ratings, the best value possible in the scale from worst to best. Corresponds to `ClaimReview.reviewRating.bestRating`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bestRating: FormControl<number | null | undefined>,

		/** Corresponds to `ClaimReview.reviewRating.image`. */
		imageUrl: FormControl<string | null | undefined>,

		/** Corresponds to `ClaimReview.reviewRating.ratingExplanation`. */
		ratingExplanation: FormControl<string | null | undefined>,

		/**
		 * A numeric rating of this claim, in the range worstRating — bestRating inclusive. Corresponds to `ClaimReview.reviewRating.ratingValue`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ratingValue: FormControl<number | null | undefined>,

		/** The truthfulness rating as a human-readible short word or phrase. Corresponds to `ClaimReview.reviewRating.alternateName`. */
		textualRating: FormControl<string | null | undefined>,

		/**
		 * For numeric ratings, the worst value possible in the scale from worst to best. Corresponds to `ClaimReview.reviewRating.worstRating`.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		worstRating: FormControl<number | null | undefined>,
	}
	export function CreateGoogleFactcheckingFactchecktoolsV1alpha1ClaimRatingFormGroup() {
		return new FormGroup<GoogleFactcheckingFactchecktoolsV1alpha1ClaimRatingFormProperties>({
			bestRating: new FormControl<number | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			ratingExplanation: new FormControl<string | null | undefined>(undefined),
			ratingValue: new FormControl<number | null | undefined>(undefined),
			textualRating: new FormControl<string | null | undefined>(undefined),
			worstRating: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the claim review author. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor {

		/** Corresponds to `ClaimReview.author.image`. */
		imageUrl?: string | null;

		/** Name of the organization that is publishing the fact check. Corresponds to `ClaimReview.author.name`. */
		name?: string | null;
	}

	/** Information about the claim review author. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthorFormProperties {

		/** Corresponds to `ClaimReview.author.image`. */
		imageUrl: FormControl<string | null | undefined>,

		/** Name of the organization that is publishing the fact check. Corresponds to `ClaimReview.author.name`. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthorFormGroup() {
		return new FormGroup<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthorFormProperties>({
			imageUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Fields for an individual `ClaimReview` element. Except for sub-messages that group fields together, each of these fields correspond those in https://schema.org/ClaimReview. We list the precise mapping for each field. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup {

		/** A list of links to works in which this claim appears, aside from the one specified in `claim_first_appearance`. Corresponds to `ClaimReview.itemReviewed[@type=Claim].appearance.url`. */
		claimAppearances?: Array<string>;

		/** Information about the claim author. */
		claimAuthor?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor;

		/** The date when the claim was made or entered public discourse. Corresponds to `ClaimReview.itemReviewed.datePublished`. */
		claimDate?: string | null;

		/** A link to a work in which this claim first appears. Corresponds to `ClaimReview.itemReviewed[@type=Claim].firstAppearance.url`. */
		claimFirstAppearance?: string | null;

		/** The location where this claim was made. Corresponds to `ClaimReview.itemReviewed.name`. */
		claimLocation?: string | null;

		/** A short summary of the claim being evaluated. Corresponds to `ClaimReview.claimReviewed`. */
		claimReviewed?: string | null;

		/** Information about the claim rating. */
		rating?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating;

		/** This field is optional, and will default to the page URL. We provide this field to allow you the override the default value, but the only permitted override is the page URL plus an optional anchor link ("page jump"). Corresponds to `ClaimReview.url` */
		url?: string | null;
	}

	/** Fields for an individual `ClaimReview` element. Except for sub-messages that group fields together, each of these fields correspond those in https://schema.org/ClaimReview. We list the precise mapping for each field. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupFormProperties {

		/** The date when the claim was made or entered public discourse. Corresponds to `ClaimReview.itemReviewed.datePublished`. */
		claimDate: FormControl<string | null | undefined>,

		/** A link to a work in which this claim first appears. Corresponds to `ClaimReview.itemReviewed[@type=Claim].firstAppearance.url`. */
		claimFirstAppearance: FormControl<string | null | undefined>,

		/** The location where this claim was made. Corresponds to `ClaimReview.itemReviewed.name`. */
		claimLocation: FormControl<string | null | undefined>,

		/** A short summary of the claim being evaluated. Corresponds to `ClaimReview.claimReviewed`. */
		claimReviewed: FormControl<string | null | undefined>,

		/** This field is optional, and will default to the page URL. We provide this field to allow you the override the default value, but the only permitted override is the page URL plus an optional anchor link ("page jump"). Corresponds to `ClaimReview.url` */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupFormGroup() {
		return new FormGroup<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupFormProperties>({
			claimDate: new FormControl<string | null | undefined>(undefined),
			claimFirstAppearance: new FormControl<string | null | undefined>(undefined),
			claimLocation: new FormControl<string | null | undefined>(undefined),
			claimReviewed: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Holds one or more instances of `ClaimReview` markup for a webpage. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage {

		/** Information about the claim review author. */
		claimReviewAuthor?: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor;

		/** A list of individual claim reviews for this page. Each item in the list corresponds to one `ClaimReview` element. */
		claimReviewMarkups?: Array<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup>;

		/** The name of this `ClaimReview` markup page resource, in the form of `pages/{page_id}`. Except for update requests, this field is output-only and should not be set by the user. */
		name?: string | null;

		/** The URL of the page associated with this `ClaimReview` markup. While every individual `ClaimReview` has its own URL field, semantically this is a page-level field, and each `ClaimReview` on this page will use this value unless individually overridden. Corresponds to `ClaimReview.url` */
		pageUrl?: string | null;

		/** The date when the fact check was published. Similar to the URL, semantically this is a page-level field, and each `ClaimReview` on this page will contain the same value. Corresponds to `ClaimReview.datePublished` */
		publishDate?: string | null;

		/** The version ID for this markup. Except for update requests, this field is output-only and should not be set by the user. */
		versionId?: string | null;
	}

	/** Holds one or more instances of `ClaimReview` markup for a webpage. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPageFormProperties {

		/** The name of this `ClaimReview` markup page resource, in the form of `pages/{page_id}`. Except for update requests, this field is output-only and should not be set by the user. */
		name: FormControl<string | null | undefined>,

		/** The URL of the page associated with this `ClaimReview` markup. While every individual `ClaimReview` has its own URL field, semantically this is a page-level field, and each `ClaimReview` on this page will use this value unless individually overridden. Corresponds to `ClaimReview.url` */
		pageUrl: FormControl<string | null | undefined>,

		/** The date when the fact check was published. Similar to the URL, semantically this is a page-level field, and each `ClaimReview` on this page will contain the same value. Corresponds to `ClaimReview.datePublished` */
		publishDate: FormControl<string | null | undefined>,

		/** The version ID for this markup. Except for update requests, this field is output-only and should not be set by the user. */
		versionId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPageFormGroup() {
		return new FormGroup<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPageFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			pageUrl: new FormControl<string | null | undefined>(undefined),
			publishDate: new FormControl<string | null | undefined>(undefined),
			versionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response from searching fact-checked claims. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse {

		/** The list of claims and all of their associated information. */
		claims?: Array<GoogleFactcheckingFactchecktoolsV1alpha1Claim>;

		/** The next pagination token in the Search response. It should be used as the `page_token` for the following request. An empty value means no more results. */
		nextPageToken?: string | null;
	}

	/** Response from searching fact-checked claims. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponseFormProperties {

		/** The next pagination token in the Search response. It should be used as the `page_token` for the following request. An empty value means no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponseFormGroup() {
		return new FormGroup<GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response from listing `ClaimReview` markup. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse {

		/** The result list of pages of `ClaimReview` markup. */
		claimReviewMarkupPages?: Array<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage>;

		/** The next pagination token in the Search response. It should be used as the `page_token` for the following request. An empty value means no more results. */
		nextPageToken?: string | null;
	}

	/** Response from listing `ClaimReview` markup. */
	export interface GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponseFormProperties {

		/** The next pagination token in the Search response. It should be used as the `page_token` for the following request. An empty value means no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponseFormGroup() {
		return new FormGroup<GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Search through fact-checked claims.
		 * Get v1alpha1/claims:search
		 * @param {string} languageCode The BCP-47 language code, such as "en-US" or "sr-Latn". Can be used to restrict results by language, though we do not currently consider the region.
		 * @param {number} maxAgeDays The maximum age of the returned search results, in days. Age is determined by either claim date or review date, whichever is newer.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} offset An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} pageSize The pagination size. We will return up to that many results. Defaults to 10 if not set.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request.
		 * @param {string} query Textual query string. Required unless `review_publisher_site_filter` is specified.
		 * @param {string} reviewPublisherSiteFilter The review publisher site to filter results by, e.g. nytimes.com.
		 * @return {GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse} Successful response
		 */
		Factchecktools_claims_search(languageCode: string | null | undefined, maxAgeDays: number | null | undefined, offset: number | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined, reviewPublisherSiteFilter: string | null | undefined): Observable<GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse> {
			return this.http.get<GoogleFactcheckingFactchecktoolsV1alpha1FactCheckedClaimSearchResponse>(this.baseUri + 'v1alpha1/claims:search?languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&maxAgeDays=' + maxAgeDays + '&offset=' + offset + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&reviewPublisherSiteFilter=' + (reviewPublisherSiteFilter == null ? '' : encodeURIComponent(reviewPublisherSiteFilter)), {});
		}

		/**
		 * List the `ClaimReview` markup pages for a specific URL or for an organization.
		 * Get v1alpha1/pages
		 * @param {number} offset An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset, and if the request is not for a specific URL. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} organization The organization for which we want to fetch markups for. For instance, "site.com". Cannot be specified along with an URL.
		 * @param {number} pageSize The pagination size. We will return up to that many results. Defaults to 10 if not set. Has no effect if a URL is requested.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request.
		 * @param {string} url The URL from which to get `ClaimReview` markup. There will be at most one result. If markup is associated with a more canonical version of the URL provided, we will return that URL instead. Cannot be specified along with an organization.
		 * @return {GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse} Successful response
		 */
		Factchecktools_pages_list(offset: number | null | undefined, organization: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, url: string | null | undefined): Observable<GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse> {
			return this.http.get<GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse>(this.baseUri + 'v1alpha1/pages?offset=' + offset + '&organization=' + (organization == null ? '' : encodeURIComponent(organization)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&url=' + (url == null ? '' : encodeURIComponent(url)), {});
		}

		/**
		 * Create `ClaimReview` markup on a page.
		 * Post v1alpha1/pages
		 * @return {GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage} Successful response
		 */
		Factchecktools_pages_create(requestBody: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage): Observable<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage> {
			return this.http.post<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage>(this.baseUri + 'v1alpha1/pages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete all `ClaimReview` markup on a page.
		 * Delete v1alpha1/{name}
		 * @param {string} name The name of the resource to delete, in the form of `pages/{page_id}`.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Factchecktools_pages_delete(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Get all `ClaimReview` markup on a page.
		 * Get v1alpha1/{name}
		 * @param {string} name The name of the resource to get, in the form of `pages/{page_id}`.
		 * @return {GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage} Successful response
		 */
		Factchecktools_pages_get(name: string): Observable<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage> {
			return this.http.get<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.
		 * Put v1alpha1/{name}
		 * @param {string} name The name of this `ClaimReview` markup page resource, in the form of `pages/{page_id}`. Except for update requests, this field is output-only and should not be set by the user.
		 * @return {GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage} Successful response
		 */
		Factchecktools_pages_update(name: string, requestBody: GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage): Observable<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage> {
			return this.http.put<GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage>(this.baseUri + 'v1alpha1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

