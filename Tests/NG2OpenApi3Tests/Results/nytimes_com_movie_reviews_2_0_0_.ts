import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Critic {
		bio?: string | null;
		display_name?: string | null;
		multimedia?: CriticMultimedia;
		seo_name?: string | null;
		sort_name?: string | null;
		status?: string | null;
	}
	export interface CriticFormProperties {
		bio: FormControl<string | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		seo_name: FormControl<string | null | undefined>,
		sort_name: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateCriticFormGroup() {
		return new FormGroup<CriticFormProperties>({
			bio: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			seo_name: new FormControl<string | null | undefined>(undefined),
			sort_name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CriticMultimedia {
		resource?: CriticMultimediaResource;
	}
	export interface CriticMultimediaFormProperties {
	}
	export function CreateCriticMultimediaFormGroup() {
		return new FormGroup<CriticMultimediaFormProperties>({
		});

	}

	export interface CriticMultimediaResource {
		credit?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height?: number | null;
		src?: string | null;
		type?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width?: number | null;
	}
	export interface CriticMultimediaResourceFormProperties {
		credit: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height: FormControl<number | null | undefined>,
		src: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateCriticMultimediaResourceFormGroup() {
		return new FormGroup<CriticMultimediaResourceFormProperties>({
			credit: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Movie {
		byline?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		critics_pick?: number | null;
		date_updated?: string | null;
		display_title?: string | null;
		headline?: string | null;
		link?: MovieLink;
		mpaa_rating?: string | null;
		multimedia?: MovieMultimedia;
		opening_date?: string | null;
		publication_date?: string | null;
		summary_short?: string | null;
	}
	export interface MovieFormProperties {
		byline: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		critics_pick: FormControl<number | null | undefined>,
		date_updated: FormControl<string | null | undefined>,
		display_title: FormControl<string | null | undefined>,
		headline: FormControl<string | null | undefined>,
		mpaa_rating: FormControl<string | null | undefined>,
		opening_date: FormControl<string | null | undefined>,
		publication_date: FormControl<string | null | undefined>,
		summary_short: FormControl<string | null | undefined>,
	}
	export function CreateMovieFormGroup() {
		return new FormGroup<MovieFormProperties>({
			byline: new FormControl<string | null | undefined>(undefined),
			critics_pick: new FormControl<number | null | undefined>(undefined),
			date_updated: new FormControl<string | null | undefined>(undefined),
			display_title: new FormControl<string | null | undefined>(undefined),
			headline: new FormControl<string | null | undefined>(undefined),
			mpaa_rating: new FormControl<string | null | undefined>(undefined),
			opening_date: new FormControl<string | null | undefined>(undefined),
			publication_date: new FormControl<string | null | undefined>(undefined),
			summary_short: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MovieLink {
		suggested_link_text?: string | null;
		type?: string | null;
		url?: string | null;
	}
	export interface MovieLinkFormProperties {
		suggested_link_text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateMovieLinkFormGroup() {
		return new FormGroup<MovieLinkFormProperties>({
			suggested_link_text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MovieMultimedia {
		resource?: MovieMultimediaResource;
	}
	export interface MovieMultimediaFormProperties {
	}
	export function CreateMovieMultimediaFormGroup() {
		return new FormGroup<MovieMultimediaFormProperties>({
		});

	}

	export interface MovieMultimediaResource {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height?: number | null;
		src?: string | null;
		type?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width?: number | null;
	}
	export interface MovieMultimediaResourceFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height: FormControl<number | null | undefined>,
		src: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateMovieMultimediaResourceFormGroup() {
		return new FormGroup<MovieMultimediaResourceFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get critics/{resource_type}.json
		 * @param {string} resource_type all | full-time | part-time | [reviewer-name]
		 * Specify all to get all Times reviewers, or specify full-time or part-time to get that subset. Specify a reviewer's name to get details about a particular reviewer.
		 * @return {Critics_resource_type_jsonGetReturn} An array of Movie Critics
		 */
		Critics_resource_type_jsonGet(resource_type: string, headersHandler?: () => HttpHeaders): Observable<Critics_resource_type_jsonGetReturn> {
			return this.http.get<Critics_resource_type_jsonGetReturn>(this.baseUri + 'critics/{resource_type}.json', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get reviews/search.json
		 * @param {string} query Search keywords; matches movie title and indexed terms
		 * To limit your search to exact matches only, surround your search string with single quotation marks (e.g., query='28+days+later'). Otherwise, responses will include partial matches ("head words") as well as exact matches (e.g., president will match president, presidents and presidential).
		 *   
		 *   If you specify multiple terms without quotation marks, they will be combined in an OR search.
		 *   
		 *   If you omit the query parameter, your request will be equivalent to a reviews and NYT Critics' Picks request.
		 * @param {ReviewsSearch_jsonGetByQueryAndCritics_pickAndReviewerAndPublication_dateAndOpening_dateAndOffsetAndOrderCritics_pick} critics_pick Set this parameter to Y to limit the results to NYT Critics' Picks. To get only those movies that have not been highlighted by Times critics, specify critics-pick=N. (To get all reviews regardless of critics-pick status, simply omit this parameter.)
		 * @param {string} reviewer Include this parameter to limit your results to reviews by a specific critic. Reviewer names should be formatted like this: Manohla Dargis.
		 * @param {string} publication_date Single date: YYYY-MM-DD
		 * Start and end date: YYYY-MM-DD;YYYY-MM-DD
		 * The publication-date is the date the review was first published in The Times.
		 * @param {string} opening_date Single date: YYYY-MM-DD
		 * Start and end date: YYYY-MM-DD;YYYY-MM-DD
		 * The opening-date is the date the movie's opening date in the New York region.
		 * @param {number} offset Positive integer, multiple of 20
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} order Sets the sort order of the results.
		 * Results ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.
		 * If you do not specify a sort order, the results will be ordered by publication-date.
		 * @return {ReviewsSearch_jsonGetByQueryAndCritics_pickAndReviewerAndPublication_dateAndOpening_dateAndOffsetAndOrderReturn} An array of Movies
		 */
		ReviewsSearch_jsonGetByQueryAndCritics_pickAndReviewerAndPublication_dateAndOpening_dateAndOffsetAndOrder(query: string | null | undefined, critics_pick: ReviewsSearch_jsonGetByQueryAndCritics_pickAndReviewerAndPublication_dateAndOpening_dateAndOffsetAndOrderCritics_pick | null | undefined, reviewer: string | null | undefined, publication_date: string | null | undefined, opening_date: string | null | undefined, offset: number | null | undefined, order: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<ReviewsSearch_jsonGetByQueryAndCritics_pickAndReviewerAndPublication_dateAndOpening_dateAndOffsetAndOrderReturn> {
			return this.http.get<ReviewsSearch_jsonGetByQueryAndCritics_pickAndReviewerAndPublication_dateAndOpening_dateAndOffsetAndOrderReturn>(this.baseUri + 'reviews/search.json?query=' + (query == null ? '' : encodeURIComponent(query)) + '&critics_pick=' + critics_pick + '&reviewer=' + (reviewer == null ? '' : encodeURIComponent(reviewer)) + '&publication_date=' + (publication_date == null ? '' : encodeURIComponent(publication_date)) + '&opening_date=' + (opening_date == null ? '' : encodeURIComponent(opening_date)) + '&offset=' + offset + '&order=' + (order == null ? '' : encodeURIComponent(order)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get reviews/{resource_type}.json
		 * @param {Reviews_resource_type_jsonGetByOffsetAndOrderResource_type} resource_type Specify all to retrieve all reviews, including NYT Critics' Picks.
		 * Specify picks to get NYT Critics' Picks currently in theaters.
		 * @param {number} offset Positive integer, multiple of 20
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Reviews_resource_type_jsonGetByOffsetAndOrderOrder} order Sets the sort order of the results.
		 * Results ordered by-title are in ascending alphabetical order. Results ordered by one of the date parameters are in reverse chronological order.
		 * If you do not specify a sort order, the results will be ordered by publication-date.
		 * @return {Reviews_resource_type_jsonGetByOffsetAndOrderReturn} An array of Movies
		 */
		Reviews_resource_type_jsonGetByOffsetAndOrder(resource_type: Reviews_resource_type_jsonGetByOffsetAndOrderResource_type, offset: number | null | undefined, order: Reviews_resource_type_jsonGetByOffsetAndOrderOrder | null | undefined, headersHandler?: () => HttpHeaders): Observable<Reviews_resource_type_jsonGetByOffsetAndOrderReturn> {
			return this.http.get<Reviews_resource_type_jsonGetByOffsetAndOrderReturn>(this.baseUri + 'reviews/{resource_type}.json?offset=' + offset + '&order=' + order, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export interface Critics_resource_type_jsonGetReturn {
		copyright?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		num_results?: number | null;
		results?: Array<Critic>;
		status?: string | null;
	}
	export interface Critics_resource_type_jsonGetReturnFormProperties {
		copyright: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		num_results: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateCritics_resource_type_jsonGetReturnFormGroup() {
		return new FormGroup<Critics_resource_type_jsonGetReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			num_results: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReviewsSearch_jsonGetByQueryAndCritics_pickAndReviewerAndPublication_dateAndOpening_dateAndOffsetAndOrderCritics_pick { Y = 'Y', N = 'N' }

	export interface ReviewsSearch_jsonGetByQueryAndCritics_pickAndReviewerAndPublication_dateAndOpening_dateAndOffsetAndOrderReturn {
		copyright?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		num_results?: number | null;
		results?: Array<Movie>;
		status?: string | null;
	}
	export interface ReviewsSearch_jsonGetByQueryAndCritics_pickAndReviewerAndPublication_dateAndOpening_dateAndOffsetAndOrderReturnFormProperties {
		copyright: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		num_results: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateReviewsSearch_jsonGetByQueryAndCritics_pickAndReviewerAndPublication_dateAndOpening_dateAndOffsetAndOrderReturnFormGroup() {
		return new FormGroup<ReviewsSearch_jsonGetByQueryAndCritics_pickAndReviewerAndPublication_dateAndOpening_dateAndOffsetAndOrderReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			num_results: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Reviews_resource_type_jsonGetByOffsetAndOrderResource_type { all = 'all', picks = 'picks' }

	export enum Reviews_resource_type_jsonGetByOffsetAndOrderOrder { 'by-title' = 'by-title', 'by-publication-date' = 'by-publication-date', 'by-opening-date' = 'by-opening-date' }

	export interface Reviews_resource_type_jsonGetByOffsetAndOrderReturn {
		copyright?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		num_results?: number | null;
		results?: Array<Movie>;
		status?: string | null;
	}
	export interface Reviews_resource_type_jsonGetByOffsetAndOrderReturnFormProperties {
		copyright: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		num_results: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateReviews_resource_type_jsonGetByOffsetAndOrderReturnFormGroup() {
		return new FormGroup<Reviews_resource_type_jsonGetByOffsetAndOrderReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			num_results: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

}

