import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface HTTPValidationError {
		detail?: Array<ValidationError>;
	}
	export interface HTTPValidationErrorFormProperties {
	}
	export function CreateHTTPValidationErrorFormGroup() {
		return new FormGroup<HTTPValidationErrorFormProperties>({
		});

	}

	export interface ValidationError {

		/** Required */
		loc: Array<string>;

		/** Required */
		msg: string;

		/** Required */
		type: string;
	}
	export interface ValidationErrorFormProperties {

		/** Required */
		msg: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SerpData {

		/** Required */
		query: string;

		/** Required */
		website: string;
	}
	export interface SerpDataFormProperties {

		/** Required */
		query: FormControl<string | null | undefined>,

		/** Required */
		website: FormControl<string | null | undefined>,
	}
	export function CreateSerpDataFormGroup() {
		return new FormGroup<SerpDataFormProperties>({
			query: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			website: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Status
		 * It "status" == true then API is up, else the API is down
		 * Get 
		 * @return {Get_the_status_of_the_API_serviceReturn} Successful Response
		 */
		Get_the_status_of_the_API_service(): Observable<Get_the_status_of_the_API_serviceReturn> {
			return this.http.get<Get_the_status_of_the_API_serviceReturn>(this.baseUri + '', {});
		}

		/**
		 * Crawl
		 * Perform Google Search
		 * Parameters
		 * ----------
		 * query : the string query to perform search. supports advance queries. Check out https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters guide for formating
		 * Returns
		 * -------
		 * json: a the html source of the results page
		 * Get v1/crawl/{query}
		 * @return {CrawlReturn} Successful Response
		 */
		Crawl(query: string): Observable<CrawlReturn> {
			return this.http.get<CrawlReturn>(this.baseUri + 'v1/crawl/' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Images
		 * Perform Google Image Search
		 * Parameters
		 * ----------
		 * query : the string query to perform search. supports advance queries.
		 * Returns
		 * -------
		 * json: a list of results with the link, description, and title for each result
		 * Get v1/images/{query}
		 * @return {ImagesReturn} Successful Response
		 */
		Images(query: string): Observable<ImagesReturn> {
			return this.http.get<ImagesReturn>(this.baseUri + 'v1/images/' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * News
		 * Perform Google News Search
		 * Parameters
		 * ----------
		 * query : the string query to perform search for Google news. A simple query for `president` will be `q=president`. An example of multiple keyword would be `q=news+about+presdient+trump`. News can also be filtered by country and language. For `US` news and in English the query will be `q=trump&ceid=US:en` for news in Great Britian the query will be `q=trump&ceid=GB:en`
		 * Returns
		 * -------
		 * json: {"feed": { "title" : "trump" ...} , "entites": [ {"title" : "Trump doubles down on divisive messaging in speech to honor Independence Day - CNN", "links": []} ...]}
		 * Get v1/news/{query}
		 * @return {NewsReturn} OK
		 */
		News(): Observable<NewsReturn> {
			return this.http.get<NewsReturn>(this.baseUri + 'v1/news/{query}', {});
		}

		/**
		 * Search
		 * Perform Google Search
		 * Parameters
		 * ----------
		 * query : the string query to perform search. supports advance queries. Check out https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters guide for formating
		 * Returns
		 * -------
		 * json: a list of results with the link, description, and title for each result
		 * Get v1/search/{query}
		 * @return {SearchReturn} Successful Response
		 */
		Search(query: string): Observable<SearchReturn> {
			return this.http.get<SearchReturn>(this.baseUri + 'v1/search/' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * SERP
		 * Perform Google Search and search for website in Search Engine Results Pages (SERP)
		 * Parameters
		 * ----------
		 * query : the string query to perform search. supports advance queries. Check out https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters guide for formatting, it is recommended to set the query `&num=100`
		 * Returns
		 * -------
		 * json: a list of results with the query, website, searched_results, and position. json["position"] will be set to -1 if website is not found in results
		 * Post v1/serp/
		 * @return {SerpReturn} Successful Response
		 */
		Serp(requestBody: SerpData): Observable<SerpReturn> {
			return this.http.post<SerpReturn>(this.baseUri + 'v1/serp/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface Get_the_status_of_the_API_serviceReturn {
		status?: boolean | null;
	}
	export interface Get_the_status_of_the_API_serviceReturnFormProperties {
		status: FormControl<boolean | null | undefined>,
	}
	export function CreateGet_the_status_of_the_API_serviceReturnFormGroup() {
		return new FormGroup<Get_the_status_of_the_API_serviceReturnFormProperties>({
			status: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CrawlReturn {
		answer?: string | null;
		results?: Array<string>;
		total?: string | null;
	}
	export interface CrawlReturnFormProperties {
		answer: FormControl<string | null | undefined>,
		total: FormControl<string | null | undefined>,
	}
	export function CreateCrawlReturnFormGroup() {
		return new FormGroup<CrawlReturnFormProperties>({
			answer: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImagesReturn {
		answers?: Array<string>;
		ImagesReturnImage_results?: Array<ImagesReturnImage_results>;
		results?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total?: number | null;
	}
	export interface ImagesReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateImagesReturnFormGroup() {
		return new FormGroup<ImagesReturnFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ImagesReturnImage_results {
		image?: ImagesReturnImage_resultsImage;
		link?: ImagesReturnImage_resultsLink;
	}
	export interface ImagesReturnImage_resultsFormProperties {
	}
	export function CreateImagesReturnImage_resultsFormGroup() {
		return new FormGroup<ImagesReturnImage_resultsFormProperties>({
		});

	}

	export interface ImagesReturnImage_resultsImage {
		alt?: string | null;
		src?: string | null;
	}
	export interface ImagesReturnImage_resultsImageFormProperties {
		alt: FormControl<string | null | undefined>,
		src: FormControl<string | null | undefined>,
	}
	export function CreateImagesReturnImage_resultsImageFormGroup() {
		return new FormGroup<ImagesReturnImage_resultsImageFormProperties>({
			alt: new FormControl<string | null | undefined>(undefined),
			src: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImagesReturnImage_resultsLink {
		domain?: string | null;
		href?: string | null;
		title?: string | null;
	}
	export interface ImagesReturnImage_resultsLinkFormProperties {
		domain: FormControl<string | null | undefined>,
		href: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateImagesReturnImage_resultsLinkFormGroup() {
		return new FormGroup<ImagesReturnImage_resultsLinkFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
			href: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewsReturn {
		NewsReturnEntries?: Array<NewsReturnEntries>;
		feed?: NewsReturnFeed;
	}
	export interface NewsReturnFormProperties {
	}
	export function CreateNewsReturnFormGroup() {
		return new FormGroup<NewsReturnFormProperties>({
		});

	}

	export interface NewsReturnEntries {
		guidislink?: string | null;
		id?: string | null;
		link?: string | null;
		links?: string | null;
		published?: string | null;
		published_parsed?: string | null;
		source?: string | null;
		sub_articles?: string | null;
		summary?: string | null;
		summary_detail?: string | null;
		title?: string | null;
		title_detail?: string | null;
	}
	export interface NewsReturnEntriesFormProperties {
		guidislink: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		links: FormControl<string | null | undefined>,
		published: FormControl<string | null | undefined>,
		published_parsed: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		sub_articles: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
		summary_detail: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		title_detail: FormControl<string | null | undefined>,
	}
	export function CreateNewsReturnEntriesFormGroup() {
		return new FormGroup<NewsReturnEntriesFormProperties>({
			guidislink: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<string | null | undefined>(undefined),
			published_parsed: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			sub_articles: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			summary_detail: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			title_detail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewsReturnFeed {
		generator?: string | null;
		generator_detail?: string | null;
		language?: string | null;
		link?: string | null;
		links?: string | null;
		publisher?: string | null;
		publisher_detail?: string | null;
		rights?: string | null;
		rights_detail?: string | null;
		subtitle?: string | null;
		subtitle_detail?: string | null;
		title?: string | null;
		updated?: string | null;
		updated_parsed?: string | null;
	}
	export interface NewsReturnFeedFormProperties {
		generator: FormControl<string | null | undefined>,
		generator_detail: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		links: FormControl<string | null | undefined>,
		publisher: FormControl<string | null | undefined>,
		publisher_detail: FormControl<string | null | undefined>,
		rights: FormControl<string | null | undefined>,
		rights_detail: FormControl<string | null | undefined>,
		subtitle: FormControl<string | null | undefined>,
		subtitle_detail: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		updated: FormControl<string | null | undefined>,
		updated_parsed: FormControl<string | null | undefined>,
	}
	export function CreateNewsReturnFeedFormGroup() {
		return new FormGroup<NewsReturnFeedFormProperties>({
			generator: new FormControl<string | null | undefined>(undefined),
			generator_detail: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			publisher_detail: new FormControl<string | null | undefined>(undefined),
			rights: new FormControl<string | null | undefined>(undefined),
			rights_detail: new FormControl<string | null | undefined>(undefined),
			subtitle: new FormControl<string | null | undefined>(undefined),
			subtitle_detail: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
			updated_parsed: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchReturn {
		answer?: string | null;
		SearchReturnResults?: Array<SearchReturnResults>;
		total?: string | null;
	}
	export interface SearchReturnFormProperties {
		answer: FormControl<string | null | undefined>,
		total: FormControl<string | null | undefined>,
	}
	export function CreateSearchReturnFormGroup() {
		return new FormGroup<SearchReturnFormProperties>({
			answer: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchReturnResults {
		description?: string | null;
		link?: string | null;
		title?: string | null;
	}
	export interface SearchReturnResultsFormProperties {
		description: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateSearchReturnResultsFormGroup() {
		return new FormGroup<SearchReturnResultsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SerpReturn {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position?: number | null;
		query?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		searched_results?: number | null;
		website?: string | null;
	}
	export interface SerpReturnFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position: FormControl<number | null | undefined>,
		query: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		searched_results: FormControl<number | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateSerpReturnFormGroup() {
		return new FormGroup<SerpReturnFormProperties>({
			position: new FormControl<number | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			searched_results: new FormControl<number | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

}

