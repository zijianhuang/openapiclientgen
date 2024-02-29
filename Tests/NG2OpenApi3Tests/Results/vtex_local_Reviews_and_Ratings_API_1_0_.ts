import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface SaveMultipleReviewsRequest {

		/**
		 * If the review was approved (`true`) or not (`false`).
		 * Required
		 */
		approved: boolean;

		/** Review ID. */
		id?: string | null;

		/**
		 * Product ID.
		 * Required
		 */
		productId: string;

		/**
		 * Customer rating.
		 * Required
		 * Type: double
		 */
		rating: number;

		/**
		 * Reviewer name.
		 * Required
		 */
		reviewerName: string;

		/**
		 * Review's text.
		 * Required
		 */
		text: string;

		/**
		 * Review's title.
		 * Required
		 */
		title: string;

		/**
		 * If the reviewer is a verified purchaser (`true`) or not (`false`).
		 * Required
		 */
		verifiedPurchaser: boolean;
	}
	export interface SaveMultipleReviewsRequestFormProperties {

		/**
		 * If the review was approved (`true`) or not (`false`).
		 * Required
		 */
		approved: FormControl<boolean | null | undefined>,

		/** Review ID. */
		id: FormControl<string | null | undefined>,

		/**
		 * Product ID.
		 * Required
		 */
		productId: FormControl<string | null | undefined>,

		/**
		 * Customer rating.
		 * Required
		 * Type: double
		 */
		rating: FormControl<number | null | undefined>,

		/**
		 * Reviewer name.
		 * Required
		 */
		reviewerName: FormControl<string | null | undefined>,

		/**
		 * Review's text.
		 * Required
		 */
		text: FormControl<string | null | undefined>,

		/**
		 * Review's title.
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * If the reviewer is a verified purchaser (`true`) or not (`false`).
		 * Required
		 */
		verifiedPurchaser: FormControl<boolean | null | undefined>,
	}
	export function CreateSaveMultipleReviewsRequestFormGroup() {
		return new FormGroup<SaveMultipleReviewsRequestFormProperties>({
			approved: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rating: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			reviewerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			verifiedPurchaser: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SaveReviewRequest {

		/**
		 * Product ID.
		 * Required
		 */
		productId: string;

		/**
		 * Customer rating.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rating: number;

		/**
		 * Reviewer name.
		 * Required
		 */
		reviewerName: string;

		/**
		 * Review's text.
		 * Required
		 */
		text: string;

		/**
		 * Review's title.
		 * Required
		 */
		title: string;
	}
	export interface SaveReviewRequestFormProperties {

		/**
		 * Product ID.
		 * Required
		 */
		productId: FormControl<string | null | undefined>,

		/**
		 * Customer rating.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rating: FormControl<number | null | undefined>,

		/**
		 * Reviewer name.
		 * Required
		 */
		reviewerName: FormControl<string | null | undefined>,

		/**
		 * Review's text.
		 * Required
		 */
		text: FormControl<string | null | undefined>,

		/**
		 * Review's title.
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateSaveReviewRequestFormGroup() {
		return new FormGroup<SaveReviewRequestFormProperties>({
			productId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rating: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			reviewerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Product Rating
		 * Retrieves the rating of a specific product.
		 * Get rating/{productId}
		 * @param {string} productId Product ID.
		 * @return {GetProductRatingReturn} OK
		 */
		GetProductRating(productId: string): Observable<GetProductRatingReturn> {
			return this.http.get<GetProductRatingReturn>(this.baseUri + 'rating/' + (productId == null ? '' : encodeURIComponent(productId)), {});
		}

		/**
		 * Create a Review
		 * Creates a single review
		 * Post review
		 * @return {SaveReviewReturn} OK
		 */
		SaveReview(requestBody: SaveReviewRequest): Observable<SaveReviewReturn> {
			return this.http.post<SaveReviewReturn>(this.baseUri + 'review', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Review
		 * Deletes an existing review.
		 * Delete review/{reviewId}
		 * @param {string} reviewId Review ID.
		 * @return {boolean} OK
		 */
		DeleteReview(reviewId: string): Observable<boolean> {
			return this.http.delete<boolean>(this.baseUri + 'review/' + (reviewId == null ? '' : encodeURIComponent(reviewId)), {});
		}

		/**
		 * Get Review by Review ID
		 * Retrieves information of a product review by its ID.
		 * Get review/{reviewId}
		 * @param {string} reviewId Review ID.
		 * @return {GetReviewbyReviewIdReturn} OK
		 */
		GetReviewbyReviewId(reviewId: string): Observable<GetReviewbyReviewIdReturn> {
			return this.http.get<GetReviewbyReviewIdReturn>(this.baseUri + 'review/' + (reviewId == null ? '' : encodeURIComponent(reviewId)), {});
		}

		/**
		 * Update a Review
		 * Updates the information of a review.
		 * Patch review/{reviewId}
		 * @param {string} reviewId Review ID.
		 * @return {EditReviewReturn} OK
		 */
		EditReview(reviewId: string, requestBody: EditReviewPatchBody): Observable<EditReviewReturn> {
			return this.http.patch<EditReviewReturn>(this.baseUri + 'review/' + (reviewId == null ? '' : encodeURIComponent(reviewId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Multiple Reviews
		 * Deletes multiple reviews at once.
		 * Delete reviews
		 * @return {boolean} OK
		 */
		DeleteMultipleReviews(): Observable<boolean> {
			return this.http.delete<boolean>(this.baseUri + 'reviews', {});
		}

		/**
		 * Get a list of Reviews
		 * Retrieves a list of reviews.
		 * Get reviews
		 * @param {string} search_term Returns Reviews that contain the search term in `productId`, `sku`, `shopperId`, or `reviewerName`.
		 * @param {string} from Zero base starting record number, `0` is the default value.
		 * @param {string} to Zero base ending record number, `3` is the default value.
		 * @param {string} order_by Case-sensitive fieldName to order records (optionally add `:asc` or `:desc`).
		 * @param {boolean} status Status of the review, approved (`true`) or not (`false`).
		 * @param {string} product_id Filter the reviews by product ID.
		 * @return {GetalistofReviewsReturn} OK
		 */
		GetalistofReviews(search_term: string, from: string, to: string, order_by: string, status: boolean, product_id: string): Observable<GetalistofReviewsReturn> {
			return this.http.get<GetalistofReviewsReturn>(this.baseUri + 'reviews?search_term=' + (search_term == null ? '' : encodeURIComponent(search_term)) + '&from=' + (from == null ? '' : encodeURIComponent(from)) + '&to=' + (to == null ? '' : encodeURIComponent(to)) + '&order_by=' + (order_by == null ? '' : encodeURIComponent(order_by)) + '&status=' + status + '&product_id=' + (product_id == null ? '' : encodeURIComponent(product_id)), {});
		}

		/**
		 * Create Multiple Reviews
		 * Creates multiple reviews.
		 * Post reviews
		 * @return {Array<string>} OK
		 */
		SaveMultipleReviews(requestBody: Array<SaveMultipleReviewsRequest>): Observable<Array<string>> {
			return this.http.post<Array<string>>(this.baseUri + 'reviews', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface GetProductRatingReturn {

		/**
		 * Avarage rating of the product.
		 * Type: double
		 */
		average?: number | null;

		/**
		 * Total amount of ranting of the product.
		 * Type: double
		 */
		totalCount?: number | null;
	}
	export interface GetProductRatingReturnFormProperties {

		/**
		 * Avarage rating of the product.
		 * Type: double
		 */
		average: FormControl<number | null | undefined>,

		/**
		 * Total amount of ranting of the product.
		 * Type: double
		 */
		totalCount: FormControl<number | null | undefined>,
	}
	export function CreateGetProductRatingReturnFormGroup() {
		return new FormGroup<GetProductRatingReturnFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SaveReviewReturn {

		/** If the review was approved (`true`) or not (`false`). */
		approved?: boolean | null;

		/** Review ID. */
		id?: string | null;

		/** Review's locale. */
		locale?: string | null;

		/** Review's origin location. */
		location?: string | null;

		/** Past reviews of the same product. */
		pastReviews?: string | null;

		/** Product ID. */
		productId?: string | null;

		/**
		 * Customer rating.
		 * Type: double
		 */
		rating?: number | null;

		/** Review's date and time. */
		reviewDateTime?: string | null;

		/** Reviewer name. */
		reviewerName?: string | null;

		/** Review's search date. */
		searchDate?: string | null;

		/** Shopper email. */
		shopperId?: string | null;

		/** SKU ID. */
		sku?: string | null;

		/** Review's text. */
		text?: string | null;

		/** Review's title. */
		title?: string | null;

		/** If the reviewer is a verified purchaser (`true`) or not (`false`). */
		verifiedPurchaser?: boolean | null;
	}
	export interface SaveReviewReturnFormProperties {

		/** If the review was approved (`true`) or not (`false`). */
		approved: FormControl<boolean | null | undefined>,

		/** Review ID. */
		id: FormControl<string | null | undefined>,

		/** Review's locale. */
		locale: FormControl<string | null | undefined>,

		/** Review's origin location. */
		location: FormControl<string | null | undefined>,

		/** Past reviews of the same product. */
		pastReviews: FormControl<string | null | undefined>,

		/** Product ID. */
		productId: FormControl<string | null | undefined>,

		/**
		 * Customer rating.
		 * Type: double
		 */
		rating: FormControl<number | null | undefined>,

		/** Review's date and time. */
		reviewDateTime: FormControl<string | null | undefined>,

		/** Reviewer name. */
		reviewerName: FormControl<string | null | undefined>,

		/** Review's search date. */
		searchDate: FormControl<string | null | undefined>,

		/** Shopper email. */
		shopperId: FormControl<string | null | undefined>,

		/** SKU ID. */
		sku: FormControl<string | null | undefined>,

		/** Review's text. */
		text: FormControl<string | null | undefined>,

		/** Review's title. */
		title: FormControl<string | null | undefined>,

		/** If the reviewer is a verified purchaser (`true`) or not (`false`). */
		verifiedPurchaser: FormControl<boolean | null | undefined>,
	}
	export function CreateSaveReviewReturnFormGroup() {
		return new FormGroup<SaveReviewReturnFormProperties>({
			approved: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			pastReviews: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			reviewDateTime: new FormControl<string | null | undefined>(undefined),
			reviewerName: new FormControl<string | null | undefined>(undefined),
			searchDate: new FormControl<string | null | undefined>(undefined),
			shopperId: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			verifiedPurchaser: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetReviewbyReviewIdReturn {

		/** If the review was approved (`true`) or not (`false`). */
		approved?: boolean | null;

		/** Review ID. */
		id?: string | null;

		/** Review's locale. */
		locale?: string | null;

		/** Review's origin location. */
		location?: string | null;

		/** Past reviews of the same product. */
		pastReviews?: string | null;

		/** Product ID. */
		productId?: string | null;

		/**
		 * Customer rating.
		 * Type: double
		 */
		rating?: number | null;

		/** Review's date and time. */
		reviewDateTime?: string | null;

		/** Reviewer name. */
		reviewerName?: string | null;

		/** Review's search date. */
		searchDate?: string | null;

		/** Shopper email. */
		shopperId?: string | null;

		/** SKU ID. */
		sku?: string | null;

		/** Review's text. */
		text?: string | null;

		/** Review's title. */
		title?: string | null;

		/** If the reviewer is a verified purchaser (`true`) or not (`false`). */
		verifiedPurchaser?: boolean | null;
	}
	export interface GetReviewbyReviewIdReturnFormProperties {

		/** If the review was approved (`true`) or not (`false`). */
		approved: FormControl<boolean | null | undefined>,

		/** Review ID. */
		id: FormControl<string | null | undefined>,

		/** Review's locale. */
		locale: FormControl<string | null | undefined>,

		/** Review's origin location. */
		location: FormControl<string | null | undefined>,

		/** Past reviews of the same product. */
		pastReviews: FormControl<string | null | undefined>,

		/** Product ID. */
		productId: FormControl<string | null | undefined>,

		/**
		 * Customer rating.
		 * Type: double
		 */
		rating: FormControl<number | null | undefined>,

		/** Review's date and time. */
		reviewDateTime: FormControl<string | null | undefined>,

		/** Reviewer name. */
		reviewerName: FormControl<string | null | undefined>,

		/** Review's search date. */
		searchDate: FormControl<string | null | undefined>,

		/** Shopper email. */
		shopperId: FormControl<string | null | undefined>,

		/** SKU ID. */
		sku: FormControl<string | null | undefined>,

		/** Review's text. */
		text: FormControl<string | null | undefined>,

		/** Review's title. */
		title: FormControl<string | null | undefined>,

		/** If the reviewer is a verified purchaser (`true`) or not (`false`). */
		verifiedPurchaser: FormControl<boolean | null | undefined>,
	}
	export function CreateGetReviewbyReviewIdReturnFormGroup() {
		return new FormGroup<GetReviewbyReviewIdReturnFormProperties>({
			approved: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			pastReviews: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			reviewDateTime: new FormControl<string | null | undefined>(undefined),
			reviewerName: new FormControl<string | null | undefined>(undefined),
			searchDate: new FormControl<string | null | undefined>(undefined),
			shopperId: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			verifiedPurchaser: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EditReviewPatchBody {

		/** Review's locale. */
		locale?: string | null;

		/**
		 * Product ID.
		 * Required
		 */
		productId: string;

		/**
		 * Customer rating.
		 * Required
		 * Type: double
		 */
		rating: number;

		/**
		 * Reviewer name.
		 * Required
		 */
		reviewerName: string;

		/** Shopper email. */
		shopperId?: string | null;

		/**
		 * Review's text.
		 * Required
		 */
		text: string;

		/**
		 * Review's title.
		 * Required
		 */
		title: string;

		/** If the reviewer is a verified purchaser (`true`) or not (`false`). */
		verifiedPurchaser?: boolean | null;
	}
	export interface EditReviewPatchBodyFormProperties {

		/** Review's locale. */
		locale: FormControl<string | null | undefined>,

		/**
		 * Product ID.
		 * Required
		 */
		productId: FormControl<string | null | undefined>,

		/**
		 * Customer rating.
		 * Required
		 * Type: double
		 */
		rating: FormControl<number | null | undefined>,

		/**
		 * Reviewer name.
		 * Required
		 */
		reviewerName: FormControl<string | null | undefined>,

		/** Shopper email. */
		shopperId: FormControl<string | null | undefined>,

		/**
		 * Review's text.
		 * Required
		 */
		text: FormControl<string | null | undefined>,

		/**
		 * Review's title.
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/** If the reviewer is a verified purchaser (`true`) or not (`false`). */
		verifiedPurchaser: FormControl<boolean | null | undefined>,
	}
	export function CreateEditReviewPatchBodyFormGroup() {
		return new FormGroup<EditReviewPatchBodyFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rating: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			reviewerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shopperId: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			verifiedPurchaser: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EditReviewReturn {

		/** If the review was approved (`true`) or not (`false`). */
		approved?: boolean | null;

		/** Review ID. */
		id?: string | null;

		/** Review's locale. */
		locale?: string | null;

		/** Review's origin location. */
		location?: string | null;

		/** Past reviews of the same product. */
		pastReviews?: string | null;

		/** Product ID. */
		productId?: string | null;

		/**
		 * Customer rating.
		 * Type: double
		 */
		rating?: number | null;

		/** Review's date and time. */
		reviewDateTime?: string | null;

		/** Reviewer name. */
		reviewerName?: string | null;

		/** Review's search date. */
		searchDate?: string | null;

		/** Shopper email. */
		shopperId?: string | null;

		/** SKU ID. */
		sku?: string | null;

		/** Review's text. */
		text?: string | null;

		/** Review's title. */
		title?: string | null;

		/** If the reviewer is a verified purchaser (`true`) or not (`false`). */
		verifiedPurchaser?: boolean | null;
	}
	export interface EditReviewReturnFormProperties {

		/** If the review was approved (`true`) or not (`false`). */
		approved: FormControl<boolean | null | undefined>,

		/** Review ID. */
		id: FormControl<string | null | undefined>,

		/** Review's locale. */
		locale: FormControl<string | null | undefined>,

		/** Review's origin location. */
		location: FormControl<string | null | undefined>,

		/** Past reviews of the same product. */
		pastReviews: FormControl<string | null | undefined>,

		/** Product ID. */
		productId: FormControl<string | null | undefined>,

		/**
		 * Customer rating.
		 * Type: double
		 */
		rating: FormControl<number | null | undefined>,

		/** Review's date and time. */
		reviewDateTime: FormControl<string | null | undefined>,

		/** Reviewer name. */
		reviewerName: FormControl<string | null | undefined>,

		/** Review's search date. */
		searchDate: FormControl<string | null | undefined>,

		/** Shopper email. */
		shopperId: FormControl<string | null | undefined>,

		/** SKU ID. */
		sku: FormControl<string | null | undefined>,

		/** Review's text. */
		text: FormControl<string | null | undefined>,

		/** Review's title. */
		title: FormControl<string | null | undefined>,

		/** If the reviewer is a verified purchaser (`true`) or not (`false`). */
		verifiedPurchaser: FormControl<boolean | null | undefined>,
	}
	export function CreateEditReviewReturnFormGroup() {
		return new FormGroup<EditReviewReturnFormProperties>({
			approved: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			pastReviews: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			reviewDateTime: new FormControl<string | null | undefined>(undefined),
			reviewerName: new FormControl<string | null | undefined>(undefined),
			searchDate: new FormControl<string | null | undefined>(undefined),
			shopperId: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			verifiedPurchaser: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetalistofReviewsReturn {

		/** Array of reviews. */
		GetalistofReviewsReturnData?: Array<GetalistofReviewsReturnData>;

		/** Range of the review's list. */
		range?: GetalistofReviewsReturnRange;
	}
	export interface GetalistofReviewsReturnFormProperties {
	}
	export function CreateGetalistofReviewsReturnFormGroup() {
		return new FormGroup<GetalistofReviewsReturnFormProperties>({
		});

	}

	export interface GetalistofReviewsReturnData {

		/** If the review was approved (`true`) or not (`false`). */
		approved?: boolean | null;

		/** Review ID. */
		id?: string | null;

		/** Review's locale. */
		locale?: string | null;

		/** Review's origin location. */
		location?: string | null;

		/** Past reviews of the same product. */
		pastReviews?: string | null;

		/** Product ID. */
		productId?: string | null;

		/**
		 * Customer rating.
		 * Type: double
		 */
		rating?: number | null;

		/** Review's date and time. */
		reviewDateTime?: string | null;

		/** Reviewer name. */
		reviewerName?: string | null;

		/** Review's search date. */
		searchDate?: string | null;

		/** Shopper email. */
		shopperId?: string | null;

		/** SKU ID. */
		sku?: string | null;

		/** Review's text. */
		text?: string | null;

		/** Review's title. */
		title?: string | null;

		/** If the reviewer is a verified purchaser (`true`) or not (`false`). */
		verifiedPurchaser?: boolean | null;
	}
	export interface GetalistofReviewsReturnDataFormProperties {

		/** If the review was approved (`true`) or not (`false`). */
		approved: FormControl<boolean | null | undefined>,

		/** Review ID. */
		id: FormControl<string | null | undefined>,

		/** Review's locale. */
		locale: FormControl<string | null | undefined>,

		/** Review's origin location. */
		location: FormControl<string | null | undefined>,

		/** Past reviews of the same product. */
		pastReviews: FormControl<string | null | undefined>,

		/** Product ID. */
		productId: FormControl<string | null | undefined>,

		/**
		 * Customer rating.
		 * Type: double
		 */
		rating: FormControl<number | null | undefined>,

		/** Review's date and time. */
		reviewDateTime: FormControl<string | null | undefined>,

		/** Reviewer name. */
		reviewerName: FormControl<string | null | undefined>,

		/** Review's search date. */
		searchDate: FormControl<string | null | undefined>,

		/** Shopper email. */
		shopperId: FormControl<string | null | undefined>,

		/** SKU ID. */
		sku: FormControl<string | null | undefined>,

		/** Review's text. */
		text: FormControl<string | null | undefined>,

		/** Review's title. */
		title: FormControl<string | null | undefined>,

		/** If the reviewer is a verified purchaser (`true`) or not (`false`). */
		verifiedPurchaser: FormControl<boolean | null | undefined>,
	}
	export function CreateGetalistofReviewsReturnDataFormGroup() {
		return new FormGroup<GetalistofReviewsReturnDataFormProperties>({
			approved: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			pastReviews: new FormControl<string | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			reviewDateTime: new FormControl<string | null | undefined>(undefined),
			reviewerName: new FormControl<string | null | undefined>(undefined),
			searchDate: new FormControl<string | null | undefined>(undefined),
			shopperId: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			verifiedPurchaser: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetalistofReviewsReturnRange {

		/**
		 * Zero base starting record number.
		 * Type: double
		 */
		from?: number | null;

		/**
		 * Zero base ending record number.
		 * Type: double
		 */
		to?: number | null;

		/**
		 * Total number of reviews on the list.
		 * Type: double
		 */
		total?: number | null;
	}
	export interface GetalistofReviewsReturnRangeFormProperties {

		/**
		 * Zero base starting record number.
		 * Type: double
		 */
		from: FormControl<number | null | undefined>,

		/**
		 * Zero base ending record number.
		 * Type: double
		 */
		to: FormControl<number | null | undefined>,

		/**
		 * Total number of reviews on the list.
		 * Type: double
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateGetalistofReviewsReturnRangeFormGroup() {
		return new FormGroup<GetalistofReviewsReturnRangeFormProperties>({
			from: new FormControl<number | null | undefined>(undefined),
			to: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

}

