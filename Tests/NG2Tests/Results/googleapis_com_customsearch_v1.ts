import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Context {
		facets?: Array<string>;
		title?: string | null;
	}
	export interface ContextFormProperties {
		title: FormControl<string | null | undefined>,
	}
	export function CreateContextFormGroup() {
		return new FormGroup<ContextFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Promotion {
		PromotionBodyLines?: Array<PromotionBodyLines>;
		displayLink?: string | null;
		htmlTitle?: string | null;
		image?: PromotionImage;
		link?: string | null;
		title?: string | null;
	}
	export interface PromotionFormProperties {
		displayLink: FormControl<string | null | undefined>,
		htmlTitle: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreatePromotionFormGroup() {
		return new FormGroup<PromotionFormProperties>({
			displayLink: new FormControl<string | null | undefined>(undefined),
			htmlTitle: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PromotionBodyLines {
		htmlTitle?: string | null;
		link?: string | null;
		title?: string | null;
		url?: string | null;
	}
	export interface PromotionBodyLinesFormProperties {
		htmlTitle: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreatePromotionBodyLinesFormGroup() {
		return new FormGroup<PromotionBodyLinesFormProperties>({
			htmlTitle: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PromotionImage {
		height?: number | null;
		source?: string | null;
		width?: number | null;
	}
	export interface PromotionImageFormProperties {
		height: FormControl<number | null | undefined>,
		source: FormControl<string | null | undefined>,
		width: FormControl<number | null | undefined>,
	}
	export function CreatePromotionImageFormGroup() {
		return new FormGroup<PromotionImageFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Query {
		count?: number | null;
		cr?: string | null;
		cx?: string | null;
		dateRestrict?: string | null;
		disableCnTwTranslation?: string | null;
		exactTerms?: string | null;
		excludeTerms?: string | null;
		fileType?: string | null;
		filter?: string | null;
		gl?: string | null;
		googleHost?: string | null;
		highRange?: string | null;
		hl?: string | null;
		hq?: string | null;
		imgColorType?: string | null;
		imgDominantColor?: string | null;
		imgSize?: string | null;
		imgType?: string | null;
		inputEncoding?: string | null;
		language?: string | null;
		linkSite?: string | null;
		lowRange?: string | null;
		orTerms?: string | null;
		outputEncoding?: string | null;
		relatedSite?: string | null;
		rights?: string | null;
		safe?: string | null;
		searchTerms?: string | null;
		searchType?: string | null;
		siteSearch?: string | null;
		siteSearchFilter?: string | null;
		sort?: string | null;
		startIndex?: number | null;
		startPage?: number | null;
		title?: string | null;
		totalResults?: string | null;
	}
	export interface QueryFormProperties {
		count: FormControl<number | null | undefined>,
		cr: FormControl<string | null | undefined>,
		cx: FormControl<string | null | undefined>,
		dateRestrict: FormControl<string | null | undefined>,
		disableCnTwTranslation: FormControl<string | null | undefined>,
		exactTerms: FormControl<string | null | undefined>,
		excludeTerms: FormControl<string | null | undefined>,
		fileType: FormControl<string | null | undefined>,
		filter: FormControl<string | null | undefined>,
		gl: FormControl<string | null | undefined>,
		googleHost: FormControl<string | null | undefined>,
		highRange: FormControl<string | null | undefined>,
		hl: FormControl<string | null | undefined>,
		hq: FormControl<string | null | undefined>,
		imgColorType: FormControl<string | null | undefined>,
		imgDominantColor: FormControl<string | null | undefined>,
		imgSize: FormControl<string | null | undefined>,
		imgType: FormControl<string | null | undefined>,
		inputEncoding: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
		linkSite: FormControl<string | null | undefined>,
		lowRange: FormControl<string | null | undefined>,
		orTerms: FormControl<string | null | undefined>,
		outputEncoding: FormControl<string | null | undefined>,
		relatedSite: FormControl<string | null | undefined>,
		rights: FormControl<string | null | undefined>,
		safe: FormControl<string | null | undefined>,
		searchTerms: FormControl<string | null | undefined>,
		searchType: FormControl<string | null | undefined>,
		siteSearch: FormControl<string | null | undefined>,
		siteSearchFilter: FormControl<string | null | undefined>,
		sort: FormControl<string | null | undefined>,
		startIndex: FormControl<number | null | undefined>,
		startPage: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		totalResults: FormControl<string | null | undefined>,
	}
	export function CreateQueryFormGroup() {
		return new FormGroup<QueryFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			cr: new FormControl<string | null | undefined>(undefined),
			cx: new FormControl<string | null | undefined>(undefined),
			dateRestrict: new FormControl<string | null | undefined>(undefined),
			disableCnTwTranslation: new FormControl<string | null | undefined>(undefined),
			exactTerms: new FormControl<string | null | undefined>(undefined),
			excludeTerms: new FormControl<string | null | undefined>(undefined),
			fileType: new FormControl<string | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			gl: new FormControl<string | null | undefined>(undefined),
			googleHost: new FormControl<string | null | undefined>(undefined),
			highRange: new FormControl<string | null | undefined>(undefined),
			hl: new FormControl<string | null | undefined>(undefined),
			hq: new FormControl<string | null | undefined>(undefined),
			imgColorType: new FormControl<string | null | undefined>(undefined),
			imgDominantColor: new FormControl<string | null | undefined>(undefined),
			imgSize: new FormControl<string | null | undefined>(undefined),
			imgType: new FormControl<string | null | undefined>(undefined),
			inputEncoding: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			linkSite: new FormControl<string | null | undefined>(undefined),
			lowRange: new FormControl<string | null | undefined>(undefined),
			orTerms: new FormControl<string | null | undefined>(undefined),
			outputEncoding: new FormControl<string | null | undefined>(undefined),
			relatedSite: new FormControl<string | null | undefined>(undefined),
			rights: new FormControl<string | null | undefined>(undefined),
			safe: new FormControl<string | null | undefined>(undefined),
			searchTerms: new FormControl<string | null | undefined>(undefined),
			searchType: new FormControl<string | null | undefined>(undefined),
			siteSearch: new FormControl<string | null | undefined>(undefined),
			siteSearchFilter: new FormControl<string | null | undefined>(undefined),
			sort: new FormControl<string | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			startPage: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			totalResults: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Result {
		cacheId?: string | null;
		displayLink?: string | null;
		fileFormat?: string | null;
		formattedUrl?: string | null;
		htmlFormattedUrl?: string | null;
		htmlSnippet?: string | null;
		htmlTitle?: string | null;
		image?: ResultImage;
		kind?: string | null;
		ResultLabels?: Array<ResultLabels>;
		link?: string | null;
		mime?: string | null;
		pagemap?: {[id: string]: Array<string> };
		snippet?: string | null;
		title?: string | null;
	}
	export interface ResultFormProperties {
		cacheId: FormControl<string | null | undefined>,
		displayLink: FormControl<string | null | undefined>,
		fileFormat: FormControl<string | null | undefined>,
		formattedUrl: FormControl<string | null | undefined>,
		htmlFormattedUrl: FormControl<string | null | undefined>,
		htmlSnippet: FormControl<string | null | undefined>,
		htmlTitle: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		mime: FormControl<string | null | undefined>,
		pagemap: FormControl<{[id: string]: Array<string> } | null | undefined>,
		snippet: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateResultFormGroup() {
		return new FormGroup<ResultFormProperties>({
			cacheId: new FormControl<string | null | undefined>(undefined),
			displayLink: new FormControl<string | null | undefined>(undefined),
			fileFormat: new FormControl<string | null | undefined>(undefined),
			formattedUrl: new FormControl<string | null | undefined>(undefined),
			htmlFormattedUrl: new FormControl<string | null | undefined>(undefined),
			htmlSnippet: new FormControl<string | null | undefined>(undefined),
			htmlTitle: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			mime: new FormControl<string | null | undefined>(undefined),
			pagemap: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
			snippet: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResultImage {
		byteSize?: number | null;
		contextLink?: string | null;
		height?: number | null;
		thumbnailHeight?: number | null;
		thumbnailLink?: string | null;
		thumbnailWidth?: number | null;
		width?: number | null;
	}
	export interface ResultImageFormProperties {
		byteSize: FormControl<number | null | undefined>,
		contextLink: FormControl<string | null | undefined>,
		height: FormControl<number | null | undefined>,
		thumbnailHeight: FormControl<number | null | undefined>,
		thumbnailLink: FormControl<string | null | undefined>,
		thumbnailWidth: FormControl<number | null | undefined>,
		width: FormControl<number | null | undefined>,
	}
	export function CreateResultImageFormGroup() {
		return new FormGroup<ResultImageFormProperties>({
			byteSize: new FormControl<number | null | undefined>(undefined),
			contextLink: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			thumbnailHeight: new FormControl<number | null | undefined>(undefined),
			thumbnailLink: new FormControl<string | null | undefined>(undefined),
			thumbnailWidth: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResultLabels {
		displayName?: string | null;
		label_with_op?: string | null;
		name?: string | null;
	}
	export interface ResultLabelsFormProperties {
		displayName: FormControl<string | null | undefined>,
		label_with_op: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateResultLabelsFormGroup() {
		return new FormGroup<ResultLabelsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			label_with_op: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Search {
		context?: Context;
		items?: Array<Result>;
		kind?: string | null;
		promotions?: Array<Promotion>;
		queries?: {[id: string]: Array<Query> };
		searchInformation?: SearchSearchInformation;
		spelling?: SearchSpelling;
		url?: SearchUrl;
	}
	export interface SearchFormProperties {
		kind: FormControl<string | null | undefined>,
		queries: FormControl<{[id: string]: Array<Query> } | null | undefined>,
	}
	export function CreateSearchFormGroup() {
		return new FormGroup<SearchFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			queries: new FormControl<{[id: string]: Array<Query> } | null | undefined>(undefined),
		});

	}

	export interface SearchSearchInformation {
		formattedSearchTime?: string | null;
		formattedTotalResults?: string | null;
		searchTime?: number | null;
		totalResults?: string | null;
	}
	export interface SearchSearchInformationFormProperties {
		formattedSearchTime: FormControl<string | null | undefined>,
		formattedTotalResults: FormControl<string | null | undefined>,
		searchTime: FormControl<number | null | undefined>,
		totalResults: FormControl<string | null | undefined>,
	}
	export function CreateSearchSearchInformationFormGroup() {
		return new FormGroup<SearchSearchInformationFormProperties>({
			formattedSearchTime: new FormControl<string | null | undefined>(undefined),
			formattedTotalResults: new FormControl<string | null | undefined>(undefined),
			searchTime: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchSpelling {
		correctedQuery?: string | null;
		htmlCorrectedQuery?: string | null;
	}
	export interface SearchSpellingFormProperties {
		correctedQuery: FormControl<string | null | undefined>,
		htmlCorrectedQuery: FormControl<string | null | undefined>,
	}
	export function CreateSearchSpellingFormGroup() {
		return new FormGroup<SearchSpellingFormProperties>({
			correctedQuery: new FormControl<string | null | undefined>(undefined),
			htmlCorrectedQuery: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchUrl {
		template?: string | null;
		type?: string | null;
	}
	export interface SearchUrlFormProperties {
		template: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateSearchUrlFormGroup() {
		return new FormGroup<SearchUrlFormProperties>({
			template: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns metadata about the search performed, metadata about the custom search engine used for the search, and the search results.
		 * Get v1
		 * @param {string} q Query
		 * @param {string} c2coff Turns off the translation between zh-CN and zh-TW.
		 * @param {string} cr Country restrict(s).
		 * @param {string} cx The custom search engine ID to scope this search query
		 * @param {string} dateRestrict Specifies all search results are from a time period
		 * @param {string} exactTerms Identifies a phrase that all documents in the search results must contain
		 * @param {string} excludeTerms Identifies a word or phrase that should not appear in any documents in the search results
		 * @param {string} fileType Returns images of a specified type. Some of the allowed values are: bmp, gif, png, jpg, svg, pdf, ...
		 * @param {Search_cse_listFilter} filter Controls turning on or off the duplicate content filter.
		 * @param {string} gl Geolocation of end user.
		 * @param {string} googlehost The local Google domain to use to perform the search.
		 * @param {string} highRange Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
		 * @param {string} hl Sets the user interface language.
		 * @param {string} hq Appends the extra query terms to the query.
		 * @param {Search_cse_listImgColorType} imgColorType Returns black and white, grayscale, or color images: mono, gray, and color.
		 * @param {Search_cse_listImgDominantColor} imgDominantColor Returns images of a specific dominant color: red, orange, yellow, green, teal, blue, purple, pink, white, gray, black and brown.
		 * @param {Search_cse_listImgSize} imgSize Returns images of a specified size, where size can be one of: icon, small, medium, large, xlarge, xxlarge, and huge.
		 * @param {Search_cse_listImgType} imgType Returns images of a type, which can be one of: clipart, face, lineart, news, and photo.
		 * @param {string} linkSite Specifies that all search results should contain a link to a particular URL
		 * @param {string} lowRange Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
		 * @param {Search_cse_listLr} lr The language restriction for the search results
		 * @param {number} num Number of search results to return
		 * @param {string} orTerms Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms
		 * @param {string} relatedSite Specifies that all search results should be pages that are related to the specified URL
		 * @param {string} rights Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of these.
		 * @param {Search_cse_listSafe} safe Search safety level
		 * @param {Search_cse_listSearchType} searchType Specifies the search type: image.
		 * @param {string} siteSearch Specifies all search results should be pages from a given site
		 * @param {Search_cse_listSiteSearchFilter} siteSearchFilter Controls whether to include or exclude results from the site named in the as_sitesearch parameter
		 * @param {string} sort The sort expression to apply to the results
		 * @param {number} start The index of the first result to return
		 * @return {void} Successful response
		 */
		Search_cse_list(q: string, c2coff: string | null | undefined, cr: string | null | undefined, cx: string | null | undefined, dateRestrict: string | null | undefined, exactTerms: string | null | undefined, excludeTerms: string | null | undefined, fileType: string | null | undefined, filter: Search_cse_listFilter | null | undefined, gl: string | null | undefined, googlehost: string | null | undefined, highRange: string | null | undefined, hl: string | null | undefined, hq: string | null | undefined, imgColorType: Search_cse_listImgColorType | null | undefined, imgDominantColor: Search_cse_listImgDominantColor | null | undefined, imgSize: Search_cse_listImgSize | null | undefined, imgType: Search_cse_listImgType | null | undefined, linkSite: string | null | undefined, lowRange: string | null | undefined, lr: Search_cse_listLr | null | undefined, num: number | null | undefined, orTerms: string | null | undefined, relatedSite: string | null | undefined, rights: string | null | undefined, safe: Search_cse_listSafe | null | undefined, searchType: Search_cse_listSearchType | null | undefined, siteSearch: string | null | undefined, siteSearchFilter: Search_cse_listSiteSearchFilter | null | undefined, sort: string | null | undefined, start: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1?q=' + (q == null ? '' : encodeURIComponent(q)) + '&c2coff=' + (c2coff == null ? '' : encodeURIComponent(c2coff)) + '&cr=' + (cr == null ? '' : encodeURIComponent(cr)) + '&cx=' + (cx == null ? '' : encodeURIComponent(cx)) + '&dateRestrict=' + (dateRestrict == null ? '' : encodeURIComponent(dateRestrict)) + '&exactTerms=' + (exactTerms == null ? '' : encodeURIComponent(exactTerms)) + '&excludeTerms=' + (excludeTerms == null ? '' : encodeURIComponent(excludeTerms)) + '&fileType=' + (fileType == null ? '' : encodeURIComponent(fileType)) + '&filter=' + filter + '&gl=' + (gl == null ? '' : encodeURIComponent(gl)) + '&googlehost=' + (googlehost == null ? '' : encodeURIComponent(googlehost)) + '&highRange=' + (highRange == null ? '' : encodeURIComponent(highRange)) + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&hq=' + (hq == null ? '' : encodeURIComponent(hq)) + '&imgColorType=' + imgColorType + '&imgDominantColor=' + imgDominantColor + '&imgSize=' + imgSize + '&imgType=' + imgType + '&linkSite=' + (linkSite == null ? '' : encodeURIComponent(linkSite)) + '&lowRange=' + (lowRange == null ? '' : encodeURIComponent(lowRange)) + '&lr=' + lr + '&num=' + num + '&orTerms=' + (orTerms == null ? '' : encodeURIComponent(orTerms)) + '&relatedSite=' + (relatedSite == null ? '' : encodeURIComponent(relatedSite)) + '&rights=' + (rights == null ? '' : encodeURIComponent(rights)) + '&safe=' + safe + '&searchType=' + searchType + '&siteSearch=' + (siteSearch == null ? '' : encodeURIComponent(siteSearch)) + '&siteSearchFilter=' + siteSearchFilter + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&start=' + start, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns metadata about the search performed, metadata about the custom search engine used for the search, and the search results. Uses a small set of url patterns.
		 * Get v1/siterestrict
		 * @param {string} q Query
		 * @param {string} c2coff Turns off the translation between zh-CN and zh-TW.
		 * @param {string} cr Country restrict(s).
		 * @param {string} cx The custom search engine ID to scope this search query
		 * @param {string} dateRestrict Specifies all search results are from a time period
		 * @param {string} exactTerms Identifies a phrase that all documents in the search results must contain
		 * @param {string} excludeTerms Identifies a word or phrase that should not appear in any documents in the search results
		 * @param {string} fileType Returns images of a specified type. Some of the allowed values are: bmp, gif, png, jpg, svg, pdf, ...
		 * @param {Search_cse_listFilter} filter Controls turning on or off the duplicate content filter.
		 * @param {string} gl Geolocation of end user.
		 * @param {string} googlehost The local Google domain to use to perform the search.
		 * @param {string} highRange Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
		 * @param {string} hl Sets the user interface language.
		 * @param {string} hq Appends the extra query terms to the query.
		 * @param {Search_cse_listImgColorType} imgColorType Returns black and white, grayscale, or color images: mono, gray, and color.
		 * @param {Search_cse_listImgDominantColor} imgDominantColor Returns images of a specific dominant color: red, orange, yellow, green, teal, blue, purple, pink, white, gray, black and brown.
		 * @param {Search_cse_listImgSize} imgSize Returns images of a specified size, where size can be one of: icon, small, medium, large, xlarge, xxlarge, and huge.
		 * @param {Search_cse_listImgType} imgType Returns images of a type, which can be one of: clipart, face, lineart, news, and photo.
		 * @param {string} linkSite Specifies that all search results should contain a link to a particular URL
		 * @param {string} lowRange Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
		 * @param {Search_cse_listLr} lr The language restriction for the search results
		 * @param {number} num Number of search results to return
		 * @param {string} orTerms Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms
		 * @param {string} relatedSite Specifies that all search results should be pages that are related to the specified URL
		 * @param {string} rights Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of these.
		 * @param {Search_cse_siterestrict_listSafe} safe Search safety level
		 * @param {Search_cse_listSearchType} searchType Specifies the search type: image.
		 * @param {string} siteSearch Specifies all search results should be pages from a given site
		 * @param {Search_cse_listSiteSearchFilter} siteSearchFilter Controls whether to include or exclude results from the site named in the as_sitesearch parameter
		 * @param {string} sort The sort expression to apply to the results
		 * @param {number} start The index of the first result to return
		 * @return {void} Successful response
		 */
		Search_cse_siterestrict_list(q: string, c2coff: string | null | undefined, cr: string | null | undefined, cx: string | null | undefined, dateRestrict: string | null | undefined, exactTerms: string | null | undefined, excludeTerms: string | null | undefined, fileType: string | null | undefined, filter: Search_cse_listFilter | null | undefined, gl: string | null | undefined, googlehost: string | null | undefined, highRange: string | null | undefined, hl: string | null | undefined, hq: string | null | undefined, imgColorType: Search_cse_listImgColorType | null | undefined, imgDominantColor: Search_cse_listImgDominantColor | null | undefined, imgSize: Search_cse_listImgSize | null | undefined, imgType: Search_cse_listImgType | null | undefined, linkSite: string | null | undefined, lowRange: string | null | undefined, lr: Search_cse_listLr | null | undefined, num: number | null | undefined, orTerms: string | null | undefined, relatedSite: string | null | undefined, rights: string | null | undefined, safe: Search_cse_siterestrict_listSafe | null | undefined, searchType: Search_cse_listSearchType | null | undefined, siteSearch: string | null | undefined, siteSearchFilter: Search_cse_listSiteSearchFilter | null | undefined, sort: string | null | undefined, start: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/siterestrict?q=' + (q == null ? '' : encodeURIComponent(q)) + '&c2coff=' + (c2coff == null ? '' : encodeURIComponent(c2coff)) + '&cr=' + (cr == null ? '' : encodeURIComponent(cr)) + '&cx=' + (cx == null ? '' : encodeURIComponent(cx)) + '&dateRestrict=' + (dateRestrict == null ? '' : encodeURIComponent(dateRestrict)) + '&exactTerms=' + (exactTerms == null ? '' : encodeURIComponent(exactTerms)) + '&excludeTerms=' + (excludeTerms == null ? '' : encodeURIComponent(excludeTerms)) + '&fileType=' + (fileType == null ? '' : encodeURIComponent(fileType)) + '&filter=' + filter + '&gl=' + (gl == null ? '' : encodeURIComponent(gl)) + '&googlehost=' + (googlehost == null ? '' : encodeURIComponent(googlehost)) + '&highRange=' + (highRange == null ? '' : encodeURIComponent(highRange)) + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&hq=' + (hq == null ? '' : encodeURIComponent(hq)) + '&imgColorType=' + imgColorType + '&imgDominantColor=' + imgDominantColor + '&imgSize=' + imgSize + '&imgType=' + imgType + '&linkSite=' + (linkSite == null ? '' : encodeURIComponent(linkSite)) + '&lowRange=' + (lowRange == null ? '' : encodeURIComponent(lowRange)) + '&lr=' + lr + '&num=' + num + '&orTerms=' + (orTerms == null ? '' : encodeURIComponent(orTerms)) + '&relatedSite=' + (relatedSite == null ? '' : encodeURIComponent(relatedSite)) + '&rights=' + (rights == null ? '' : encodeURIComponent(rights)) + '&safe=' + safe + '&searchType=' + searchType + '&siteSearch=' + (siteSearch == null ? '' : encodeURIComponent(siteSearch)) + '&siteSearchFilter=' + siteSearchFilter + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&start=' + start, { observe: 'response', responseType: 'text' });
		}
	}

	export enum Search_cse_listFilter { _0 = 0, _1 = 1 }

	export enum Search_cse_listImgColorType { color = 0, gray = 1, mono = 2 }

	export enum Search_cse_listImgDominantColor { black = 0, blue = 1, brown = 2, gray = 3, green = 4, orange = 5, pink = 6, purple = 7, red = 8, teal = 9, white = 10, yellow = 11 }

	export enum Search_cse_listImgSize { huge = 0, icon = 1, large = 2, medium = 3, small = 4, xlarge = 5, xxlarge = 6 }

	export enum Search_cse_listImgType { clipart = 0, face = 1, lineart = 2, news = 3, photo = 4 }

	export enum Search_cse_listLr { lang_ar = 0, lang_bg = 1, lang_ca = 2, lang_cs = 3, lang_da = 4, lang_de = 5, lang_el = 6, lang_en = 7, lang_es = 8, lang_et = 9, lang_fi = 10, lang_fr = 11, lang_hr = 12, lang_hu = 13, lang_id = 14, lang_is = 15, lang_it = 16, lang_iw = 17, lang_ja = 18, lang_ko = 19, lang_lt = 20, lang_lv = 21, lang_nl = 22, lang_no = 23, lang_pl = 24, lang_pt = 25, lang_ro = 26, lang_ru = 27, lang_sk = 28, lang_sl = 29, lang_sr = 30, lang_sv = 31, lang_tr = 32, 'lang_zh-CN' = 33, 'lang_zh-TW' = 34 }

	export enum Search_cse_listSafe { active = 0, high = 1, medium = 2, off = 3 }

	export enum Search_cse_listSearchType { image = 0 }

	export enum Search_cse_listSiteSearchFilter { e = 0, i = 1 }

	export enum Search_cse_siterestrict_listSafe { high = 0, medium = 1, off = 2 }

}

