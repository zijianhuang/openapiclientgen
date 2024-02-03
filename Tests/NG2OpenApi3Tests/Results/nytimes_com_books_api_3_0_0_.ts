import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Best Seller List
		 * Get lists.{format}
		 * @param {string} list The name of the Times best-seller list. To get valid values, use a list names request.
		 * Be sure to replace spaces with hyphens (e.g., e-book-fiction or hardcover-fiction, not E-Book Fiction or Hardcover Fiction). (The parameter is not case sensitive.)
		 * @param {number} weeks_on_list The number of weeks that the best seller has been on list-name, as of bestsellers-date
		 * @param {Date} bestsellers_date YYYY-MM-DD
		 * The week-ending date for the sales reflected on list-name. Times best-seller lists are compiled using available book sale data. The bestsellers-date may be significantly earlier than published-date. For additional information, see the explanation at the bottom of any best-seller list page on NYTimes.com (example: Hardcover Fiction, published Dec. 5 but reflecting sales to Nov. 29).
		 * @param {string} date YYYY-MM-DD  The date the best-seller list was published on NYTimes.com (compare bestsellers-date)
		 * @param {string} isbn International Standard Book Number, 10 or 13 digits
		 * @param {string} published_date YYYY-MM-DD
		 * The date the best-seller list was published on NYTimes.com (compare bestsellers-date)
		 * @param {number} rank The rank of the best seller on list-name as of bestsellers-date
		 * @param {number} rank_last_week The rank of the best seller on list-name one week prior to bestsellers-date
		 * @param {number} offset Sets the starting point of the result set
		 * @param {GET_lists_formatSort_order} sort_order Sets the sort order of the result set
		 * @return {GET_lists_formatReturn} 
		 */
		GET_lists_format(list: string | null | undefined, weeks_on_list: number | null | undefined, bestsellers_date: Date | null | undefined, date: string | null | undefined, isbn: string | null | undefined, published_date: string | null | undefined, rank: number | null | undefined, rank_last_week: number | null | undefined, offset: number | null | undefined, sort_order: GET_lists_formatSort_order | null | undefined): Observable<GET_lists_formatReturn> {
			return this.http.get<GET_lists_formatReturn>(this.baseUri + 'lists.{format}?list=' + (list == null ? '' : encodeURIComponent(list)) + '&weeks_on_list=' + weeks_on_list + '&bestsellers_date=' + bestsellers_date?.toISOString() + '&date=' + (date == null ? '' : encodeURIComponent(date)) + '&isbn=' + (isbn == null ? '' : encodeURIComponent(isbn)) + '&published_date=' + (published_date == null ? '' : encodeURIComponent(published_date)) + '&rank=' + rank + '&rank_last_week=' + rank_last_week + '&offset=' + offset + '&sort_order=' + sort_order, {});
		}

		/**
		 * Best Seller History List
		 * Get lists/best-sellers/history.json
		 * @param {string} age_group The target age group for the best seller.
		 * @param {string} author The author of the best seller. The author field does not include additional contributors (see Data Structure for more details about the author and contributor fields).
		 * When searching the author field, you can specify any combination of first, middle and last names.
		 * When sort-by is set to author, the results will be sorted by author's first name. 
		 * @param {string} contributor The author of the best seller, as well as other contributors such as the illustrator (to search or sort by author name only, use author instead).
		 * When searching, you can specify any combination of first, middle and last names of any of the contributors.
		 * When sort-by is set to contributor, the results will be sorted by the first name of the first contributor listed. 
		 * @param {string} isbn International Standard Book Number, 10 or 13 digits
		 * A best seller may have both 10-digit and 13-digit ISBNs, and may have multiple ISBNs of each type. To search on multiple ISBNs, separate the ISBNs with semicolons (example: 9780446579933;0061374229).
		 * @param {string} price The publisher's list price of the best seller, including decimal point
		 * @param {string} publisher The standardized name of the publisher
		 * @param {string} title The title of the best seller
		 * When searching, you can specify a portion of a title or a full title.
		 * @return {GET_lists_best_sellers_history_jsonReturn} 
		 */
		GET_lists_best_sellers_history_json(age_group: string | null | undefined, author: string | null | undefined, contributor: string | null | undefined, isbn: string | null | undefined, price: string | null | undefined, publisher: string | null | undefined, title: string | null | undefined): Observable<GET_lists_best_sellers_history_jsonReturn> {
			return this.http.get<GET_lists_best_sellers_history_jsonReturn>(this.baseUri + 'lists/best-sellers/history.json?age_group=' + (age_group == null ? '' : encodeURIComponent(age_group)) + '&author=' + (author == null ? '' : encodeURIComponent(author)) + '&contributor=' + (contributor == null ? '' : encodeURIComponent(contributor)) + '&isbn=' + (isbn == null ? '' : encodeURIComponent(isbn)) + '&price=' + (price == null ? '' : encodeURIComponent(price)) + '&publisher=' + (publisher == null ? '' : encodeURIComponent(publisher)) + '&title=' + (title == null ? '' : encodeURIComponent(title)), {});
		}

		/**
		 * Best Seller List Names
		 * Get lists/names.{format}
		 * @return {GET_lists_names_formatReturn} 
		 */
		GET_lists_names_format(api_key: string | null | undefined): Observable<GET_lists_names_formatReturn> {
			return this.http.get<GET_lists_names_formatReturn>(this.baseUri + 'lists/names.{format}?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)), {});
		}

		/**
		 * Best Seller List Overview
		 * Get lists/overview.{format}
		 * @param {string} published_date The best-seller list publication date. YYYY-MM-DD
		 * You do not have to specify the exact date the list was published. The service will search forward (into the future) for the closest publication date to the date you specify. For example, a request for lists/overview/2013-05-22 will retrieve the list that was published on 05-26.
		 * If you do not include a published_date, the current week's best-sellers lists will be returned.
		 * @return {GET_lists_overview_formatReturn} 
		 */
		GET_lists_overview_format(published_date: string | null | undefined, api_key: string | null | undefined): Observable<GET_lists_overview_formatReturn> {
			return this.http.get<GET_lists_overview_formatReturn>(this.baseUri + 'lists/overview.{format}?published_date=' + (published_date == null ? '' : encodeURIComponent(published_date)) + '&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)), {});
		}

		/**
		 * Best Seller List by Date
		 * Get lists/{date}/{list}.json
		 * @param {number} isbn International Standard Book Number, 10 or 13 digits
		 * @param {string} list_name The name of the Times best-seller list. To get valid values, use a list names request.
		 * Be sure to replace spaces with hyphens (e.g., e-book-fiction or hardcover-fiction, not E-Book Fiction or Hardcover Fiction). (The parameter is not case sensitive.)
		 * @param {Date} published_date YYYY-MM-DD
		 * The date the best-seller list was published on NYTimes.com (compare bestsellers-date)
		 * @param {string} bestsellers_date YYYY-MM-DD
		 * The week-ending date for the sales reflected on list-name. Times best-seller lists are compiled using available book sale data. The bestsellers-date may be significantly earlier than published-date. For additional information, see the explanation at the bottom of any best-seller list page on NYTimes.com (example: Hardcover Fiction, published Dec. 5 but reflecting sales to Nov. 29).
		 * @param {number} weeks_on_list The number of weeks that the best seller has been on list-name, as of bestsellers-date
		 * @param {string} rank The rank of the best seller on list-name as of bestsellers-date
		 * @param {number} rank_last_week The rank of the best seller on list-name one week prior to bestsellers-date
		 * @param {number} offset Sets the starting point of the result set
		 * @param {GET_lists_formatSort_order} sort_order The default is ASC (ascending). The sort-order parameter is used with the sort-by parameter — for details, see each request type.
		 * @return {GET_lists_date_list_jsonReturn} 
		 */
		GET_lists_date_list_json(isbn: number | null | undefined, list_name: string | null | undefined, published_date: Date | null | undefined, bestsellers_date: string | null | undefined, weeks_on_list: number | null | undefined, rank: string | null | undefined, rank_last_week: number | null | undefined, offset: number | null | undefined, sort_order: GET_lists_formatSort_order | null | undefined): Observable<GET_lists_date_list_jsonReturn> {
			return this.http.get<GET_lists_date_list_jsonReturn>(this.baseUri + 'lists/{date}/{list}.json?isbn=' + isbn + '&list_name=' + (list_name == null ? '' : encodeURIComponent(list_name)) + '&published_date=' + published_date?.toISOString() + '&bestsellers_date=' + (bestsellers_date == null ? '' : encodeURIComponent(bestsellers_date)) + '&weeks_on_list=' + weeks_on_list + '&rank=' + (rank == null ? '' : encodeURIComponent(rank)) + '&rank_last_week=' + rank_last_week + '&offset=' + offset + '&sort_order=' + sort_order, {});
		}

		/**
		 * Reviews
		 * Get reviews.{format}
		 * @param {number} isbn Searching by ISBN is the recommended method. You can enter 10- or 13-digit ISBNs.
		 * @param {string} title You’ll need to enter the full title of the book. Spaces in the title will be converted into the characters %20.
		 * @param {string} author You’ll need to enter the author’s first and last name, separated by a space. This space will be converted into the characters %20.
		 * @return {GET_reviews_formatReturn} 
		 */
		GET_reviews_format(isbn: number | null | undefined, title: string | null | undefined, author: string | null | undefined, api_key: string | null | undefined): Observable<GET_reviews_formatReturn> {
			return this.http.get<GET_reviews_formatReturn>(this.baseUri + 'reviews.{format}?isbn=' + isbn + '&title=' + (title == null ? '' : encodeURIComponent(title)) + '&author=' + (author == null ? '' : encodeURIComponent(author)) + '&api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)), {});
		}
	}

	export enum GET_lists_formatSort_order { ASC = 'ASC', DESC = 'DESC' }

	export interface GET_lists_formatReturn {
		copyright?: string | null;
		last_modified?: string | null;
		num_results?: number | null;
		GET_lists_formatReturnResults?: Array<GET_lists_formatReturnResults>;
		status?: string | null;
	}
	export interface GET_lists_formatReturnFormProperties {
		copyright: FormControl<string | null | undefined>,
		last_modified: FormControl<string | null | undefined>,
		num_results: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateGET_lists_formatReturnFormGroup() {
		return new FormGroup<GET_lists_formatReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			last_modified: new FormControl<string | null | undefined>(undefined),
			num_results: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_lists_formatReturnResults {
		amazon_product_url?: string | null;
		asterisk?: number | null;
		bestsellers_date?: string | null;
		GET_lists_formatReturnResultsBook_details?: Array<GET_lists_formatReturnResultsBook_details>;
		dagger?: number | null;
		display_name?: string | null;
		GET_lists_formatReturnResultsIsbns?: Array<GET_lists_formatReturnResultsIsbns>;
		list_name?: string | null;
		published_date?: string | null;
		rank?: number | null;
		rank_last_week?: number | null;
		GET_lists_formatReturnResultsReviews?: Array<GET_lists_formatReturnResultsReviews>;
		weeks_on_list?: number | null;
	}
	export interface GET_lists_formatReturnResultsFormProperties {
		amazon_product_url: FormControl<string | null | undefined>,
		asterisk: FormControl<number | null | undefined>,
		bestsellers_date: FormControl<string | null | undefined>,
		dagger: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		list_name: FormControl<string | null | undefined>,
		published_date: FormControl<string | null | undefined>,
		rank: FormControl<number | null | undefined>,
		rank_last_week: FormControl<number | null | undefined>,
		weeks_on_list: FormControl<number | null | undefined>,
	}
	export function CreateGET_lists_formatReturnResultsFormGroup() {
		return new FormGroup<GET_lists_formatReturnResultsFormProperties>({
			amazon_product_url: new FormControl<string | null | undefined>(undefined),
			asterisk: new FormControl<number | null | undefined>(undefined),
			bestsellers_date: new FormControl<string | null | undefined>(undefined),
			dagger: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			list_name: new FormControl<string | null | undefined>(undefined),
			published_date: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			rank_last_week: new FormControl<number | null | undefined>(undefined),
			weeks_on_list: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GET_lists_formatReturnResultsBook_details {
		age_group?: string | null;
		author?: string | null;
		contributor?: string | null;
		contributor_note?: string | null;
		description?: string | null;
		price?: number | null;
		primary_isbn10?: string | null;
		primary_isbn13?: string | null;
		publisher?: string | null;
		title?: string | null;
	}
	export interface GET_lists_formatReturnResultsBook_detailsFormProperties {
		age_group: FormControl<string | null | undefined>,
		author: FormControl<string | null | undefined>,
		contributor: FormControl<string | null | undefined>,
		contributor_note: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		price: FormControl<number | null | undefined>,
		primary_isbn10: FormControl<string | null | undefined>,
		primary_isbn13: FormControl<string | null | undefined>,
		publisher: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateGET_lists_formatReturnResultsBook_detailsFormGroup() {
		return new FormGroup<GET_lists_formatReturnResultsBook_detailsFormProperties>({
			age_group: new FormControl<string | null | undefined>(undefined),
			author: new FormControl<string | null | undefined>(undefined),
			contributor: new FormControl<string | null | undefined>(undefined),
			contributor_note: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			primary_isbn10: new FormControl<string | null | undefined>(undefined),
			primary_isbn13: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_lists_formatReturnResultsIsbns {
		isbn10?: string | null;
		isbn13?: string | null;
	}
	export interface GET_lists_formatReturnResultsIsbnsFormProperties {
		isbn10: FormControl<string | null | undefined>,
		isbn13: FormControl<string | null | undefined>,
	}
	export function CreateGET_lists_formatReturnResultsIsbnsFormGroup() {
		return new FormGroup<GET_lists_formatReturnResultsIsbnsFormProperties>({
			isbn10: new FormControl<string | null | undefined>(undefined),
			isbn13: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_lists_formatReturnResultsReviews {
		article_chapter_link?: string | null;
		book_review_link?: string | null;
		first_chapter_link?: string | null;
		sunday_review_link?: string | null;
	}
	export interface GET_lists_formatReturnResultsReviewsFormProperties {
		article_chapter_link: FormControl<string | null | undefined>,
		book_review_link: FormControl<string | null | undefined>,
		first_chapter_link: FormControl<string | null | undefined>,
		sunday_review_link: FormControl<string | null | undefined>,
	}
	export function CreateGET_lists_formatReturnResultsReviewsFormGroup() {
		return new FormGroup<GET_lists_formatReturnResultsReviewsFormProperties>({
			article_chapter_link: new FormControl<string | null | undefined>(undefined),
			book_review_link: new FormControl<string | null | undefined>(undefined),
			first_chapter_link: new FormControl<string | null | undefined>(undefined),
			sunday_review_link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_lists_best_sellers_history_jsonReturn {
		copyright?: string | null;
		num_results?: number | null;
		GET_lists_best_sellers_history_jsonReturnResults?: Array<GET_lists_best_sellers_history_jsonReturnResults>;
		status?: string | null;
	}
	export interface GET_lists_best_sellers_history_jsonReturnFormProperties {
		copyright: FormControl<string | null | undefined>,
		num_results: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateGET_lists_best_sellers_history_jsonReturnFormGroup() {
		return new FormGroup<GET_lists_best_sellers_history_jsonReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			num_results: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_lists_best_sellers_history_jsonReturnResults {
		age_group?: string | null;
		author?: string | null;
		contributor?: string | null;
		contributor_note?: string | null;
		description?: string | null;
		GET_lists_best_sellers_history_jsonReturnResultsIsbns?: Array<GET_lists_best_sellers_history_jsonReturnResultsIsbns>;
		price?: number | null;
		publisher?: string | null;
		GET_lists_best_sellers_history_jsonReturnResultsRanks_history?: Array<GET_lists_best_sellers_history_jsonReturnResultsRanks_history>;
		GET_lists_best_sellers_history_jsonReturnResultsReviews?: Array<GET_lists_best_sellers_history_jsonReturnResultsReviews>;
		title?: string | null;
	}
	export interface GET_lists_best_sellers_history_jsonReturnResultsFormProperties {
		age_group: FormControl<string | null | undefined>,
		author: FormControl<string | null | undefined>,
		contributor: FormControl<string | null | undefined>,
		contributor_note: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		price: FormControl<number | null | undefined>,
		publisher: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateGET_lists_best_sellers_history_jsonReturnResultsFormGroup() {
		return new FormGroup<GET_lists_best_sellers_history_jsonReturnResultsFormProperties>({
			age_group: new FormControl<string | null | undefined>(undefined),
			author: new FormControl<string | null | undefined>(undefined),
			contributor: new FormControl<string | null | undefined>(undefined),
			contributor_note: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_lists_best_sellers_history_jsonReturnResultsIsbns {
		isbn10?: string | null;
		isbn13?: string | null;
	}
	export interface GET_lists_best_sellers_history_jsonReturnResultsIsbnsFormProperties {
		isbn10: FormControl<string | null | undefined>,
		isbn13: FormControl<string | null | undefined>,
	}
	export function CreateGET_lists_best_sellers_history_jsonReturnResultsIsbnsFormGroup() {
		return new FormGroup<GET_lists_best_sellers_history_jsonReturnResultsIsbnsFormProperties>({
			isbn10: new FormControl<string | null | undefined>(undefined),
			isbn13: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_lists_best_sellers_history_jsonReturnResultsRanks_history {
		asterisk?: number | null;
		bestsellers_date?: string | null;
		dagger?: number | null;
		display_name?: string | null;
		list_name?: string | null;
		primary_isbn10?: string | null;
		primary_isbn13?: string | null;
		published_date?: string | null;
		rank?: number | null;
		ranks_last_week?: any;
		weeks_on_list?: number | null;
	}
	export interface GET_lists_best_sellers_history_jsonReturnResultsRanks_historyFormProperties {
		asterisk: FormControl<number | null | undefined>,
		bestsellers_date: FormControl<string | null | undefined>,
		dagger: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		list_name: FormControl<string | null | undefined>,
		primary_isbn10: FormControl<string | null | undefined>,
		primary_isbn13: FormControl<string | null | undefined>,
		published_date: FormControl<string | null | undefined>,
		rank: FormControl<number | null | undefined>,
		ranks_last_week: FormControl<any | null | undefined>,
		weeks_on_list: FormControl<number | null | undefined>,
	}
	export function CreateGET_lists_best_sellers_history_jsonReturnResultsRanks_historyFormGroup() {
		return new FormGroup<GET_lists_best_sellers_history_jsonReturnResultsRanks_historyFormProperties>({
			asterisk: new FormControl<number | null | undefined>(undefined),
			bestsellers_date: new FormControl<string | null | undefined>(undefined),
			dagger: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			list_name: new FormControl<string | null | undefined>(undefined),
			primary_isbn10: new FormControl<string | null | undefined>(undefined),
			primary_isbn13: new FormControl<string | null | undefined>(undefined),
			published_date: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			ranks_last_week: new FormControl<any | null | undefined>(undefined),
			weeks_on_list: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GET_lists_best_sellers_history_jsonReturnResultsReviews {
		article_chapter_link?: string | null;
		book_review_link?: string | null;
		first_chapter_link?: string | null;
		sunday_review_link?: string | null;
	}
	export interface GET_lists_best_sellers_history_jsonReturnResultsReviewsFormProperties {
		article_chapter_link: FormControl<string | null | undefined>,
		book_review_link: FormControl<string | null | undefined>,
		first_chapter_link: FormControl<string | null | undefined>,
		sunday_review_link: FormControl<string | null | undefined>,
	}
	export function CreateGET_lists_best_sellers_history_jsonReturnResultsReviewsFormGroup() {
		return new FormGroup<GET_lists_best_sellers_history_jsonReturnResultsReviewsFormProperties>({
			article_chapter_link: new FormControl<string | null | undefined>(undefined),
			book_review_link: new FormControl<string | null | undefined>(undefined),
			first_chapter_link: new FormControl<string | null | undefined>(undefined),
			sunday_review_link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_lists_names_formatReturn {
		copyright?: string | null;
		num_results?: number | null;
		GET_lists_names_formatReturnResults?: Array<GET_lists_names_formatReturnResults>;
		status?: string | null;
	}
	export interface GET_lists_names_formatReturnFormProperties {
		copyright: FormControl<string | null | undefined>,
		num_results: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateGET_lists_names_formatReturnFormGroup() {
		return new FormGroup<GET_lists_names_formatReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			num_results: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_lists_names_formatReturnResults {
		display_name?: string | null;
		list_name?: string | null;
		list_name_encoded?: string | null;
		newest_published_date?: string | null;
		oldest_published_date?: string | null;
		updated?: string | null;
	}
	export interface GET_lists_names_formatReturnResultsFormProperties {
		display_name: FormControl<string | null | undefined>,
		list_name: FormControl<string | null | undefined>,
		list_name_encoded: FormControl<string | null | undefined>,
		newest_published_date: FormControl<string | null | undefined>,
		oldest_published_date: FormControl<string | null | undefined>,
		updated: FormControl<string | null | undefined>,
	}
	export function CreateGET_lists_names_formatReturnResultsFormGroup() {
		return new FormGroup<GET_lists_names_formatReturnResultsFormProperties>({
			display_name: new FormControl<string | null | undefined>(undefined),
			list_name: new FormControl<string | null | undefined>(undefined),
			list_name_encoded: new FormControl<string | null | undefined>(undefined),
			newest_published_date: new FormControl<string | null | undefined>(undefined),
			oldest_published_date: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_lists_overview_formatReturn {
		copyright?: string | null;
		num_results?: number | null;
		results?: GET_lists_overview_formatReturnResults;
		status?: string | null;
	}
	export interface GET_lists_overview_formatReturnFormProperties {
		copyright: FormControl<string | null | undefined>,
		num_results: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateGET_lists_overview_formatReturnFormGroup() {
		return new FormGroup<GET_lists_overview_formatReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			num_results: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_lists_overview_formatReturnResults {
		bestsellers_date?: string | null;
		GET_lists_overview_formatReturnResultsLists?: Array<GET_lists_overview_formatReturnResultsLists>;
		published_date?: string | null;
	}
	export interface GET_lists_overview_formatReturnResultsFormProperties {
		bestsellers_date: FormControl<string | null | undefined>,
		published_date: FormControl<string | null | undefined>,
	}
	export function CreateGET_lists_overview_formatReturnResultsFormGroup() {
		return new FormGroup<GET_lists_overview_formatReturnResultsFormProperties>({
			bestsellers_date: new FormControl<string | null | undefined>(undefined),
			published_date: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_lists_overview_formatReturnResultsLists {
		GET_lists_overview_formatReturnResultsListsBooks?: Array<GET_lists_overview_formatReturnResultsListsBooks>;
		display_name?: string | null;
		list_id?: number | null;
		list_image?: string | null;
		list_name?: string | null;
		updated?: string | null;
	}
	export interface GET_lists_overview_formatReturnResultsListsFormProperties {
		display_name: FormControl<string | null | undefined>,
		list_id: FormControl<number | null | undefined>,
		list_image: FormControl<string | null | undefined>,
		list_name: FormControl<string | null | undefined>,
		updated: FormControl<string | null | undefined>,
	}
	export function CreateGET_lists_overview_formatReturnResultsListsFormGroup() {
		return new FormGroup<GET_lists_overview_formatReturnResultsListsFormProperties>({
			display_name: new FormControl<string | null | undefined>(undefined),
			list_id: new FormControl<number | null | undefined>(undefined),
			list_image: new FormControl<string | null | undefined>(undefined),
			list_name: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_lists_overview_formatReturnResultsListsBooks {
		age_group?: string | null;
		author?: string | null;
		contributor?: string | null;
		contributor_note?: string | null;
		created_date?: string | null;
		description?: string | null;
		price?: number | null;
		primary_isbn10?: string | null;
		primary_isbn13?: string | null;
		publisher?: string | null;
		rank?: number | null;
		title?: string | null;
		updated_date?: string | null;
	}
	export interface GET_lists_overview_formatReturnResultsListsBooksFormProperties {
		age_group: FormControl<string | null | undefined>,
		author: FormControl<string | null | undefined>,
		contributor: FormControl<string | null | undefined>,
		contributor_note: FormControl<string | null | undefined>,
		created_date: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		price: FormControl<number | null | undefined>,
		primary_isbn10: FormControl<string | null | undefined>,
		primary_isbn13: FormControl<string | null | undefined>,
		publisher: FormControl<string | null | undefined>,
		rank: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		updated_date: FormControl<string | null | undefined>,
	}
	export function CreateGET_lists_overview_formatReturnResultsListsBooksFormGroup() {
		return new FormGroup<GET_lists_overview_formatReturnResultsListsBooksFormProperties>({
			age_group: new FormControl<string | null | undefined>(undefined),
			author: new FormControl<string | null | undefined>(undefined),
			contributor: new FormControl<string | null | undefined>(undefined),
			contributor_note: new FormControl<string | null | undefined>(undefined),
			created_date: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			primary_isbn10: new FormControl<string | null | undefined>(undefined),
			primary_isbn13: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_date: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_lists_date_list_jsonReturn {
		copyright?: string | null;
		last_modified?: string | null;
		num_results?: number | null;
		results?: GET_lists_date_list_jsonReturnResults;
		status?: string | null;
	}
	export interface GET_lists_date_list_jsonReturnFormProperties {
		copyright: FormControl<string | null | undefined>,
		last_modified: FormControl<string | null | undefined>,
		num_results: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateGET_lists_date_list_jsonReturnFormGroup() {
		return new FormGroup<GET_lists_date_list_jsonReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			last_modified: new FormControl<string | null | undefined>(undefined),
			num_results: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_lists_date_list_jsonReturnResults {
		bestsellers_date?: string | null;
		GET_lists_date_list_jsonReturnResultsBooks?: Array<GET_lists_date_list_jsonReturnResultsBooks>;
		corrections?: Array<string>;
		display_name?: string | null;
		list_name?: string | null;
		normal_list_ends_at?: number | null;
		published_date?: string | null;
		updated?: string | null;
	}
	export interface GET_lists_date_list_jsonReturnResultsFormProperties {
		bestsellers_date: FormControl<string | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		list_name: FormControl<string | null | undefined>,
		normal_list_ends_at: FormControl<number | null | undefined>,
		published_date: FormControl<string | null | undefined>,
		updated: FormControl<string | null | undefined>,
	}
	export function CreateGET_lists_date_list_jsonReturnResultsFormGroup() {
		return new FormGroup<GET_lists_date_list_jsonReturnResultsFormProperties>({
			bestsellers_date: new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			list_name: new FormControl<string | null | undefined>(undefined),
			normal_list_ends_at: new FormControl<number | null | undefined>(undefined),
			published_date: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_lists_date_list_jsonReturnResultsBooks {
		age_group?: string | null;
		amazon_product_url?: string | null;
		article_chapter_link?: string | null;
		asterisk?: number | null;
		author?: string | null;
		book_image?: string | null;
		book_review_link?: string | null;
		contributor?: string | null;
		contributor_note?: string | null;
		dagger?: number | null;
		description?: string | null;
		first_chapter_link?: string | null;
		GET_lists_date_list_jsonReturnResultsBooksIsbns?: Array<GET_lists_date_list_jsonReturnResultsBooksIsbns>;
		price?: number | null;
		primary_isbn10?: string | null;
		primary_isbn13?: string | null;
		publisher?: string | null;
		rank?: number | null;
		rank_last_week?: number | null;
		sunday_review_link?: string | null;
		title?: string | null;
		weeks_on_list?: number | null;
	}
	export interface GET_lists_date_list_jsonReturnResultsBooksFormProperties {
		age_group: FormControl<string | null | undefined>,
		amazon_product_url: FormControl<string | null | undefined>,
		article_chapter_link: FormControl<string | null | undefined>,
		asterisk: FormControl<number | null | undefined>,
		author: FormControl<string | null | undefined>,
		book_image: FormControl<string | null | undefined>,
		book_review_link: FormControl<string | null | undefined>,
		contributor: FormControl<string | null | undefined>,
		contributor_note: FormControl<string | null | undefined>,
		dagger: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		first_chapter_link: FormControl<string | null | undefined>,
		price: FormControl<number | null | undefined>,
		primary_isbn10: FormControl<string | null | undefined>,
		primary_isbn13: FormControl<string | null | undefined>,
		publisher: FormControl<string | null | undefined>,
		rank: FormControl<number | null | undefined>,
		rank_last_week: FormControl<number | null | undefined>,
		sunday_review_link: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		weeks_on_list: FormControl<number | null | undefined>,
	}
	export function CreateGET_lists_date_list_jsonReturnResultsBooksFormGroup() {
		return new FormGroup<GET_lists_date_list_jsonReturnResultsBooksFormProperties>({
			age_group: new FormControl<string | null | undefined>(undefined),
			amazon_product_url: new FormControl<string | null | undefined>(undefined),
			article_chapter_link: new FormControl<string | null | undefined>(undefined),
			asterisk: new FormControl<number | null | undefined>(undefined),
			author: new FormControl<string | null | undefined>(undefined),
			book_image: new FormControl<string | null | undefined>(undefined),
			book_review_link: new FormControl<string | null | undefined>(undefined),
			contributor: new FormControl<string | null | undefined>(undefined),
			contributor_note: new FormControl<string | null | undefined>(undefined),
			dagger: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			first_chapter_link: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
			primary_isbn10: new FormControl<string | null | undefined>(undefined),
			primary_isbn13: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			rank_last_week: new FormControl<number | null | undefined>(undefined),
			sunday_review_link: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			weeks_on_list: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GET_lists_date_list_jsonReturnResultsBooksIsbns {
		isbn10?: string | null;
		isbn13?: string | null;
	}
	export interface GET_lists_date_list_jsonReturnResultsBooksIsbnsFormProperties {
		isbn10: FormControl<string | null | undefined>,
		isbn13: FormControl<string | null | undefined>,
	}
	export function CreateGET_lists_date_list_jsonReturnResultsBooksIsbnsFormGroup() {
		return new FormGroup<GET_lists_date_list_jsonReturnResultsBooksIsbnsFormProperties>({
			isbn10: new FormControl<string | null | undefined>(undefined),
			isbn13: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_reviews_formatReturn {
		copyright?: string | null;
		num_results?: number | null;
		GET_reviews_formatReturnResults?: Array<GET_reviews_formatReturnResults>;
		status?: string | null;
	}
	export interface GET_reviews_formatReturnFormProperties {
		copyright: FormControl<string | null | undefined>,
		num_results: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateGET_reviews_formatReturnFormGroup() {
		return new FormGroup<GET_reviews_formatReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			num_results: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_reviews_formatReturnResults {
		book_author?: string | null;
		book_title?: string | null;
		byline?: string | null;
		isbn13?: Array<string>;
		publication_dt?: string | null;
		summary?: string | null;
		url?: string | null;
	}
	export interface GET_reviews_formatReturnResultsFormProperties {
		book_author: FormControl<string | null | undefined>,
		book_title: FormControl<string | null | undefined>,
		byline: FormControl<string | null | undefined>,
		publication_dt: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateGET_reviews_formatReturnResultsFormGroup() {
		return new FormGroup<GET_reviews_formatReturnResultsFormProperties>({
			book_author: new FormControl<string | null | undefined>(undefined),
			book_title: new FormControl<string | null | undefined>(undefined),
			byline: new FormControl<string | null | undefined>(undefined),
			publication_dt: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

}

