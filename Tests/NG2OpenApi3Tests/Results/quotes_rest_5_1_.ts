import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface NewQuote {

		/** Author name of quote. */
		author?: string | null;

		/**
		 * The Quote.
		 * Required
		 */
		quote: string;

		/** Array of tags/categories. */
		tags?: Array<string>;
	}
	export interface NewQuoteFormProperties {

		/** Author name of quote. */
		author: FormControl<string | null | undefined>,

		/**
		 * The Quote.
		 * Required
		 */
		quote: FormControl<string | null | undefined>,
	}
	export function CreateNewQuoteFormGroup() {
		return new FormGroup<NewQuoteFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			quote: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface QOD extends Quote {

		/**
		 * Date this quote of the day belongs to
		 * Required
		 */
		date: string;

		/** Title of the QOD category */
		title?: string | null;
	}
	export interface QODFormProperties extends QuoteFormProperties {

		/**
		 * Date this quote of the day belongs to
		 * Required
		 */
		date: FormControl<string | null | undefined>,

		/** Title of the QOD category */
		title: FormControl<string | null | undefined>,
	}
	export function CreateQODFormGroup() {
		return new FormGroup<QODFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			quote: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			image: new FormControl<string | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QODResponse {
		contents?: any;

		/** Metadata about this successful call */
		success?: string | null;
	}
	export interface QODResponseFormProperties {
		contents: FormControl<any | null | undefined>,

		/** Metadata about this successful call */
		success: FormControl<string | null | undefined>,
	}
	export function CreateQODResponseFormGroup() {
		return new FormGroup<QODResponseFormProperties>({
			contents: new FormControl<any | null | undefined>(undefined),
			success: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Quote extends NewQuote {

		/**
		 * Unique identifier representing a specific quote in theysaidso.com.
		 * Required
		 */
		id: string;

		/** Image URL that can be used for background to display this quote. */
		image?: string | null;

		/**
		 * Length of the quote string.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length?: number | null;
	}
	export interface QuoteFormProperties extends NewQuoteFormProperties {

		/**
		 * Unique identifier representing a specific quote in theysaidso.com.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Image URL that can be used for background to display this quote. */
		image: FormControl<string | null | undefined>,

		/**
		 * Length of the quote string.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length: FormControl<number | null | undefined>,
	}
	export function CreateQuoteFormGroup() {
		return new FormGroup<QuoteFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			quote: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			image: new FormControl<string | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QuoteResponse {
		contents?: any;

		/** Metadata about this successful call */
		success?: string | null;
	}
	export interface QuoteResponseFormProperties {
		contents: FormControl<any | null | undefined>,

		/** Metadata about this successful call */
		success: FormControl<string | null | undefined>,
	}
	export function CreateQuoteResponseFormGroup() {
		return new FormGroup<QuoteResponseFormProperties>({
			contents: new FormControl<any | null | undefined>(undefined),
			success: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SuccessResponse {

		/** Contents relevant to this successful call */
		contents?: Array<string>;

		/** Metadata about this successful call */
		success?: string | null;
	}
	export interface SuccessResponseFormProperties {

		/** Metadata about this successful call */
		success: FormControl<string | null | undefined>,
	}
	export function CreateSuccessResponseFormGroup() {
		return new FormGroup<SuccessResponseFormProperties>({
			success: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets `Quote of the Day` (QOD). Optional `category` param determines the category of returned quote of the day
		 * Get qod
		 * @param {string} category QOD Category (Used in public QOD only)
		 * @param {string} language Language of the QOD. The language must be supported in our QOD system.
		 * @param {string} id QOD defition id (Used in private QOD only)
		 * @return {QODResponse} 200  response
		 */
		QodGetByCategoryAndLanguageAndId(category: string | null | undefined, language: string | null | undefined, id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<QODResponse> {
			return this.http.get<QODResponse>(this.baseUri + 'qod?category=' + (category == null ? '' : encodeURIComponent(category)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update an existing private `Quote of the Day` definition.
		 * Patch qod
		 * @param {string} repeat_after How many days after the quotes can repeat? If you are setting this up from your private collection make sure you have more quotes that meet the filter conditions than the days you specify here.
		 * @param {string} authors Comma seperated author names. Quotes will be chosen from one of these authors.
		 * @param {string} title Title of the Quote of the day category
		 * @param {string} _private Should apply the filters to the private collection. Default is public quotes in the platform.
		 * @param {string} language Quotes language.
		 * @param {string} sfw Consider only quotes marked as "sfw" (Safe for work).
		 * @return {QuoteResponse} 200  response
		 */
		QodPatchByRepeat_afterAndAuthorsAndTitleAnd_privateAndLanguageAndSfw(repeat_after: string | null | undefined, authors: string | null | undefined, title: string, _private: string | null | undefined, language: string | null | undefined, sfw: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<QuoteResponse> {
			return this.http.patch<QuoteResponse>(this.baseUri + 'qod?repeat_after=' + (repeat_after == null ? '' : encodeURIComponent(repeat_after)) + '&authors=' + (authors == null ? '' : encodeURIComponent(authors)) + '&title=' + (title == null ? '' : encodeURIComponent(title)) + '&_private=' + (_private == null ? '' : encodeURIComponent(_private)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&sfw=' + (sfw == null ? '' : encodeURIComponent(sfw)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create a private `Quote of the Day` service.
		 * Put qod
		 * @param {string} repeat_after How many days after the quotes can repeat? If you are setting this up from your private collection make sure you have more quotes that meet the filter conditions than the days you specify here.
		 * @param {string} authors Comma seperated author names. Quotes will be chosen from one of these authors.
		 * @param {string} title Title of the Quote of the day category
		 * @param {string} _private Should apply the filters to the private collection. Default is public quotes in the platform.
		 * @param {string} language Quotes language.
		 * @param {string} sfw Consider only quotes marked as "sfw" (Safe for work).
		 * @return {SuccessResponse} 200  response
		 */
		QodPutByRepeat_afterAndAuthorsAndTitleAnd_privateAndLanguageAndSfw(repeat_after: string | null | undefined, authors: string | null | undefined, title: string, _private: string | null | undefined, language: string | null | undefined, sfw: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<SuccessResponse> {
			return this.http.put<SuccessResponse>(this.baseUri + 'qod?repeat_after=' + (repeat_after == null ? '' : encodeURIComponent(repeat_after)) + '&authors=' + (authors == null ? '' : encodeURIComponent(authors)) + '&title=' + (title == null ? '' : encodeURIComponent(title)) + '&_private=' + (_private == null ? '' : encodeURIComponent(_private)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&sfw=' + (sfw == null ? '' : encodeURIComponent(sfw)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets a list of `Quote of the Day` Categories.
		 * Get qod/categories
		 * @param {string} language Language of the QOD category. The language must be supported in our QOD system.
		 * @param {string} detailed Return detailed information of the categories. Note the data format changes between the two values of this switch.
		 * @return {void} 200  response
		 */
		QodCategoriesGetByLanguageAndDetailed(language: string | null | undefined, detailed: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'qod/categories?language=' + (language == null ? '' : encodeURIComponent(language)) + '&detailed=' + (detailed == null ? '' : encodeURIComponent(detailed)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of supported languages for `Quote of the Day`.
		 * Get qod/languages
		 * @return {void} 200  response
		 */
		QodLanguagesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'qod/languages', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a qshow.
		 * Delete qshow
		 * @param {string} id Qshow ID
		 * @return {void} 200  response
		 */
		QshowDeleteById(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'qshow?id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a details about a qshow.
		 * Get qshow
		 * @param {string} id Qshow ID
		 * @return {void} 200  response
		 */
		QshowGetById(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'qshow?id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an existing qshow.
		 * Patch qshow
		 * @param {string} id Qshow ID
		 * @param {string} title Qshow title
		 * @param {string} description Qshow description
		 * @param {Array<string>} tags Tags for the qshow
		 * @return {void} 200  response
		 */
		QshowPatchByIdAndTitleAndDescriptionAndTags(id: string, title: string | null | undefined, description: string | null | undefined, tags: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'qshow?id=' + (id == null ? '' : encodeURIComponent(id)) + '&title=' + (title == null ? '' : encodeURIComponent(title)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&' + tags?.map(z => `tags=${encodeURIComponent(z)}`).join('&'), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create and add a new qshow to your private collection.
		 * Put qshow
		 * @param {string} title Qshow title
		 * @param {string} description Qshow description
		 * @param {Array<string>} tags Tags for the qshow
		 * @return {void} 200  response
		 */
		QshowPutByTitleAndDescriptionAndTags(title: string, description: string | null | undefined, tags: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'qshow?title=' + (title == null ? '' : encodeURIComponent(title)) + '&description=' + (description == null ? '' : encodeURIComponent(description)) + '&' + tags?.map(z => `tags=${encodeURIComponent(z)}`).join('&'), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the list of Qshows in They Said So platform.
		 * Get qshow/list
		 * @param {number} start Response is paged. This parameter controls where response starts the listing at
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} _public Should include public qshows or not in the list
		 * @return {void} 200  response
		 */
		QshowListGetByStartAnd_public(start: number | null | undefined, _public: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'qshow/list?start=' + start + '&_public=' + (_public == null ? '' : encodeURIComponent(_public)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the quotes in a given Qshow.
		 * Get qshow/quotes
		 * @param {string} id Qshow ID
		 * @return {void} 200  response
		 */
		QshowQuotesGetById(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'qshow/quotes?id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a quote to a given Qshow.
		 * Post qshow/quotes/add
		 * @param {string} id Qshow ID
		 * @param {string} quoteid Quote ID to add the qshow collection
		 * @return {void} 200  response
		 */
		QshowQuotesAddPostByIdAndQuoteid(id: string, quoteid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'qshow/quotes/add?id=' + (id == null ? '' : encodeURIComponent(id)) + '&quoteid=' + (quoteid == null ? '' : encodeURIComponent(quoteid)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a quote to a given Qshow.
		 * Post qshow/quotes/remove
		 * @param {string} id Qshow ID
		 * @param {string} quoteid Quote ID to remove from the qshow collection
		 * @return {void} 200  response
		 */
		QshowQuotesRemovePostByIdAndQuoteid(id: string, quoteid: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'qshow/quotes/remove?id=' + (id == null ? '' : encodeURIComponent(id)) + '&quoteid=' + (quoteid == null ? '' : encodeURIComponent(quoteid)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a quote. The user needs to be the owner of the quote to be able to delete it.
		 * Delete quote
		 * @param {string} id Quote ID
		 * @return {void} 200  response
		 */
		QuoteDeleteById(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'quote?id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a `Quote` with a given `id`.
		 * Get quote
		 * @param {string} id Quote ID
		 * @return {QuoteResponse} 200  response
		 */
		QuoteGetById(id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<QuoteResponse> {
			return this.http.get<QuoteResponse>(this.baseUri + 'quote?id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update a quote
		 * Patch quote
		 * @param {string} id Quote ID
		 * @param {string} quote Quote
		 * @param {string} author Quote Author
		 * @param {string} language Language. If not supplied an auto detection mechanism will be used to detect a language.
		 * @param {string} tags Comma Separated tags
		 * @return {void} 200  response
		 */
		QuotePatchByIdAndQuoteAndAuthorAndLanguageAndTags(id: string, quote: string | null | undefined, author: string | null | undefined, language: string | null | undefined, tags: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'quote?id=' + (id == null ? '' : encodeURIComponent(id)) + '&quote=' + (quote == null ? '' : encodeURIComponent(quote)) + '&author=' + (author == null ? '' : encodeURIComponent(author)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a new quote to your private collection. Same as 'PUT' but added since some clients don't handle PUT well.
		 * Post quote
		 * @param {string} quote Quote
		 * @param {string} author Quote Author
		 * @param {string} tags Comma Separated tags
		 * @param {string} language Language. If not supplied an auto detection mechanism will be used to detect a language.
		 * @return {void} 200  response
		 */
		QuotePostByQuoteAndAuthorAndTagsAndLanguage(quote: string, author: string | null | undefined, tags: string | null | undefined, language: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'quote?quote=' + (quote == null ? '' : encodeURIComponent(quote)) + '&author=' + (author == null ? '' : encodeURIComponent(author)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&language=' + (language == null ? '' : encodeURIComponent(language)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a new quote to your private collection.
		 * Put quote
		 * @param {string} quote Quote
		 * @param {string} author Quote Author
		 * @param {string} tags Comma Separated tags
		 * @param {string} language Language. If not supplied an auto detection mechanism will be used to detect a language.
		 * @return {void} 200  response
		 */
		QuotePutByQuoteAndAuthorAndTagsAndLanguage(quote: string, author: string | null | undefined, tags: string | null | undefined, language: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'quote?quote=' + (quote == null ? '' : encodeURIComponent(quote)) + '&author=' + (author == null ? '' : encodeURIComponent(author)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)) + '&language=' + (language == null ? '' : encodeURIComponent(language)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of popular author names in the system.
		 * Get quote/authors/popular
		 * @param {string} language Language. A same author may have quotes in two or more different languages. So for example 'Mahatma Gandhi' may be returned for language "en"(English), and "மஹாத்மா காந்தி" may be returned when the language is "ta" (Tamil).
		 * @param {string} detailed Should return detailed author information such as `birthday`, `death date`, `occupation`, `description` etc. Only available at certain subscription levels.
		 * @param {number} start Response is paged. This parameter controls where response starts the listing at
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 200  response
		 */
		QuoteAuthorsPopularGetByLanguageAndDetailedAndStartAndLimit(language: string | null | undefined, detailed: string | null | undefined, start: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'quote/authors/popular?language=' + (language == null ? '' : encodeURIComponent(language)) + '&detailed=' + (detailed == null ? '' : encodeURIComponent(detailed)) + '&start=' + start + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of author names in the system.
		 * Get quote/authors/search
		 * @param {string} query Text string to search for in author names
		 * @param {string} language Language. A same author may have quotes in two or more different languages. So for example 'Mahatma Gandhi' may be returned for language "en"(English), and "மஹாத்மா காந்தி" may be returned when the language is "ta" (Tamil).
		 * @param {string} detailed Should return detailed author information such as `birthday`, `death date`, `occupation`, `description` etc. Only available at certain subscription levels.
		 * @param {number} start Response is paged. This parameter controls where response starts the listing at
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 200  response
		 */
		QuoteAuthorsSearchGetByQueryAndLanguageAndDetailedAndStartAndLimit(query: string | null | undefined, language: string | null | undefined, detailed: string | null | undefined, start: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'quote/authors/search?query=' + (query == null ? '' : encodeURIComponent(query)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&detailed=' + (detailed == null ? '' : encodeURIComponent(detailed)) + '&start=' + start + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Toggle the user bookmark of the given Quote as a user of the API Key.
		 * Get quote/bookmark/toggle
		 * @param {string} quote_id Quote ID
		 * @return {void} 200  response
		 */
		QuoteBookmarkToggleGetByQuote_id(quote_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'quote/bookmark/toggle?quote_id=' + (quote_id == null ? '' : encodeURIComponent(quote_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of popular `Quote` Categories.
		 * Get quote/categories/popular
		 * @param {number} start Response is paged. This parameter controls where response starts the listing at
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 200  response
		 */
		QuoteCategoriesPopularGetByStartAndLimit(start: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'quote/categories/popular?start=' + start + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of `Quote` Categories matching the query string.
		 * Get quote/categories/search
		 * @param {string} query Text string to search for in the categories
		 * @param {number} start Response is paged. This parameter controls where response starts the listing at
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Response is paged. This parameter controls how many is returned in the result. The maximum depends on the subscription level.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 200  response
		 */
		QuoteCategoriesSearchGetByQueryAndStartAndLimit(query: string | null | undefined, start: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'quote/categories/search?query=' + (query == null ? '' : encodeURIComponent(query)) + '&start=' + start + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a quote image. The user needs to be the owner of the quote image to be able to delete it.
		 * Delete quote/image
		 * @param {string} id Quote Image ID
		 * @return {void} 200  response
		 */
		QuoteImageDeleteById(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'quote/image?id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a Quote image for a given id. Response can be an image file as a binary or a base64 encoded contents wrapped in json. `TODO`
		 * Get quote/image
		 * @param {string} id Quote Image id
		 * @param {string} binary Should the response be a direct file download of the image or a base64 encoded image file wrapped in json?
		 * @return {void} 200  response
		 */
		QuoteImageGetByIdAndBinary(id: string, binary: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'quote/image?id=' + (id == null ? '' : encodeURIComponent(id)) + '&binary=' + (binary == null ? '' : encodeURIComponent(binary)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new quote image for a given quote. Choose background colors/images , choose different font styles and generate a beautiful quote image. Did you just had a feeling of being a god or what?!
		 * Put quote/image
		 * @param {string} quote_id Quote id
		 * @param {string} bgimage_id Background Image id ( Will override bgcolor if supplied)
		 * @param {string} bg_color Background Color(if background image id is not supplied)
		 * @param {string} font_id Font id
		 * @param {string} text_color Text Color
		 * @param {string} text_size Text/font size
		 * @param {string} halign Horizontal text Alignment Value
		 * @param {string} valign Vertical text Alignment Value
		 * @param {string} width Image Width(By default this takes the width of the background image)
		 * @param {string} height Image Height(By default this takes the height of the background image)
		 * @param {string} branding Disable They Said So branding (Only available in certain subscription levels. Ignored in other levels)
		 * @param {string} include_transparent_layer Should include a transparent layer between the text and the background image? This helps when the background image is bright and obscures the text.
		 * @return {void} 200  response
		 */
		QuoteImagePutByQuote_idAndBgimage_idAndBg_colorAndFont_idAndText_colorAndText_sizeAndHalignAndValignAndWidthAndHeightAndBrandingAndInclude_transparent_layer(quote_id: string, bgimage_id: string | null | undefined, bg_color: string | null | undefined, font_id: string | null | undefined, text_color: string | null | undefined, text_size: string | null | undefined, halign: string | null | undefined, valign: string | null | undefined, width: string | null | undefined, height: string | null | undefined, branding: string | null | undefined, include_transparent_layer: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'quote/image?quote_id=' + (quote_id == null ? '' : encodeURIComponent(quote_id)) + '&bgimage_id=' + (bgimage_id == null ? '' : encodeURIComponent(bgimage_id)) + '&bg_color=' + (bg_color == null ? '' : encodeURIComponent(bg_color)) + '&font_id=' + (font_id == null ? '' : encodeURIComponent(font_id)) + '&text_color=' + (text_color == null ? '' : encodeURIComponent(text_color)) + '&text_size=' + (text_size == null ? '' : encodeURIComponent(text_size)) + '&halign=' + (halign == null ? '' : encodeURIComponent(halign)) + '&valign=' + (valign == null ? '' : encodeURIComponent(valign)) + '&width=' + (width == null ? '' : encodeURIComponent(width)) + '&height=' + (height == null ? '' : encodeURIComponent(height)) + '&branding=' + (branding == null ? '' : encodeURIComponent(branding)) + '&include_transparent_layer=' + (include_transparent_layer == null ? '' : encodeURIComponent(include_transparent_layer)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a background image file. The user needs to be the owner of the background image to be able to delete it.
		 * Delete quote/image/background
		 * @param {string} id Font ID
		 * @return {void} 200  response
		 */
		QuoteImageBackgroundDeleteById(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'quote/image/background?id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists background images in your private collection.
		 * Get quote/image/background/list
		 * @param {string} start Response is paged. This parameter determines where the response should start.
		 * @return {void} 200  response
		 */
		QuoteImageBackgroundListGetByStart(start: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'quote/image/background/list?start=' + (start == null ? '' : encodeURIComponent(start)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Searches for a background image with a given tag.
		 * Get quote/image/background/search
		 * @param {string} query Tag string
		 * @return {void} 200  response
		 */
		QuoteImageBackgroundSearchGetByQuery(query: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'quote/image/background/search?query=' + (query == null ? '' : encodeURIComponent(query)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a tag to a given Image.
		 * Post quote/image/background/tags/add
		 * @param {string} id Image ID
		 * @param {string} tags Comma Separated tags
		 * @return {void} 200  response
		 */
		QuoteImageBackgroundTagsAddPostByIdAndTags(id: string, tags: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'quote/image/background/tags/add?id=' + (id == null ? '' : encodeURIComponent(id)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a tag from a given Image.
		 * Post quote/image/background/tags/remove
		 * @param {string} id Image ID
		 * @param {string} tags Comma Separated tags
		 * @return {void} 200  response
		 */
		QuoteImageBackgroundTagsRemovePostByIdAndTags(id: string, tags: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'quote/image/background/tags/remove?id=' + (id == null ? '' : encodeURIComponent(id)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a font file. The user needs to be the owner of the font to be able to delete it.
		 * Delete quote/image/font
		 * @param {string} id Font ID
		 * @return {void} 200  response
		 */
		QuoteImageFontDeleteById(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'quote/image/font?id=' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists background images in your private collection.
		 * Get quote/image/font/list
		 * @param {string} start Response is paged. This parameter determines where the response should start.
		 * @return {void} 200  response
		 */
		QuoteImageFontListGetByStart(start: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'quote/image/font/list?start=' + (start == null ? '' : encodeURIComponent(start)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Searches for a font with a given tag.
		 * Get quote/image/font/search
		 * @param {string} query Tag string
		 * @return {void} 200  response
		 */
		QuoteImageFontSearchGetByQuery(query: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'quote/image/font/search?query=' + (query == null ? '' : encodeURIComponent(query)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a tag to a given font.
		 * Post quote/image/font/tags/add
		 * @param {string} id Font ID
		 * @param {string} tags Comma Separated tags
		 * @return {void} 200  response
		 */
		QuoteImageFontTagsAddPostByIdAndTags(id: string, tags: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'quote/image/font/tags/add?id=' + (id == null ? '' : encodeURIComponent(id)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a tag from a given Font.
		 * Post quote/image/font/tags/remove
		 * @param {string} id Font ID
		 * @param {string} tags Comma Separated tags
		 * @return {void} 200  response
		 */
		QuoteImageFontTagsRemovePostByIdAndTags(id: string, tags: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'quote/image/font/tags/remove?id=' + (id == null ? '' : encodeURIComponent(id)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a Random Quote image. Optional `category` param determines the category of quote used in the image. Optional `author` param gets the quote image of a given author.
		 * Get quote/image/search
		 * @param {string} category Quote Category
		 * @param {string} author Quote Author
		 * @param {string} _private Should search private collection. Default searches public image collection.
		 * @return {void} 200  response
		 */
		QuoteImageSearchGetByCategoryAndAuthorAnd_private(category: string | null | undefined, author: string | null | undefined, _private: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'quote/image/search?category=' + (category == null ? '' : encodeURIComponent(category)) + '&author=' + (author == null ? '' : encodeURIComponent(author)) + '&_private=' + (_private == null ? '' : encodeURIComponent(_private)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Toggle the user like of the given Quote as a user of the API Key.
		 * Get quote/like/toggle
		 * @param {string} quote_id Quote ID
		 * @return {void} 200  response
		 */
		QuoteLikeToggleGetByQuote_id(quote_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'quote/like/toggle?quote_id=' + (quote_id == null ? '' : encodeURIComponent(quote_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the list of quotes in your private collection.
		 * Get quote/list
		 * @param {number} start Response is paged. This parameter controls where response starts the listing at
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Response is paged. This parameter controls how many is returned in the result.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} 200  response
		 */
		QuoteListGetByStartAndLimit(start: number | null | undefined, limit: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'quote/list?start=' + start + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a `Random Quote`. When you are in a hurry this is what you call to get a random famous quote.
		 * Get quote/random
		 * @param {string} language Language of the Quote. The language must be supported in our system.
		 * @param {string} limit No of quotes to return. The max limit depends on the subscription level.
		 * @return {QuoteResponse} 200  response
		 */
		QuoteRandomGetByLanguageAndLimit(language: string | null | undefined, limit: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<QuoteResponse> {
			return this.http.get<QuoteResponse>(this.baseUri + 'quote/random?language=' + (language == null ? '' : encodeURIComponent(language)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search for a `Quote` in They Said So platform. Optional `category` , `author`, `minlength`, `maxlength` params determines the filters applied while searching for the quote.
		 * Get quote/search
		 * @param {string} category Quote Category
		 * @param {string} author Quote Author
		 * @param {number} minlength Quote minimum Length
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} maxlength Quote maximum Length
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} query keyword to search for in the quote
		 * @param {string} _private Should search private collection? Default searches public collection.
		 * @param {string} language Language of the Quote. The language must be supported in our system.
		 * @param {string} limit No of quotes to return. The max limit depends on the subscription level.
		 * @param {string} sfw Should search only SFW (Safe For Work) quotes?
		 * @return {QuoteResponse} 200  response
		 */
		QuoteSearchGetByCategoryAndAuthorAndMinlengthAndMaxlengthAndQueryAnd_privateAndLanguageAndLimitAndSfw(category: string | null | undefined, author: string | null | undefined, minlength: number | null | undefined, maxlength: number | null | undefined, query: string | null | undefined, _private: string | null | undefined, language: string | null | undefined, limit: string | null | undefined, sfw: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<QuoteResponse> {
			return this.http.get<QuoteResponse>(this.baseUri + 'quote/search?category=' + (category == null ? '' : encodeURIComponent(category)) + '&author=' + (author == null ? '' : encodeURIComponent(author)) + '&minlength=' + minlength + '&maxlength=' + maxlength + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&_private=' + (_private == null ? '' : encodeURIComponent(_private)) + '&language=' + (language == null ? '' : encodeURIComponent(language)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&sfw=' + (sfw == null ? '' : encodeURIComponent(sfw)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a tag to a given Quote.
		 * Post quote/tags/add
		 * @param {string} id Quote ID
		 * @param {string} tags Comma Separated tags
		 * @return {void} 200  response
		 */
		QuoteTagsAddPostByIdAndTags(id: string, tags: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'quote/tags/add?id=' + (id == null ? '' : encodeURIComponent(id)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a tag from a given quote.
		 * Post quote/tags/remove
		 * @param {string} id Quote ID
		 * @param {string} tags Comma Separated tags
		 * @return {void} 200  response
		 */
		QuoteTagsRemovePostByIdAndTags(id: string, tags: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'quote/tags/remove?id=' + (id == null ? '' : encodeURIComponent(id)) + '&tags=' + (tags == null ? '' : encodeURIComponent(tags)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

