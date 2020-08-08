import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface Context {
		facets?: Array<string>;
		title?: string;
	}

	export interface Promotion {
		PromotionBodyLines?: Array<PromotionBodyLines>;
		displayLink?: string;
		htmlTitle?: string;
		image?: PromotionImage;
		link?: string;
		title?: string;
	}

	export interface PromotionBodyLines {
		htmlTitle?: string;
		link?: string;
		title?: string;
		url?: string;
	}

	export interface PromotionImage {
		height?: number;
		source?: string;
		width?: number;
	}

	export interface Query {
		count?: number;
		cr?: string;
		cx?: string;
		dateRestrict?: string;
		disableCnTwTranslation?: string;
		exactTerms?: string;
		excludeTerms?: string;
		fileType?: string;
		filter?: string;
		gl?: string;
		googleHost?: string;
		highRange?: string;
		hl?: string;
		hq?: string;
		imgColorType?: string;
		imgDominantColor?: string;
		imgSize?: string;
		imgType?: string;
		inputEncoding?: string;
		language?: string;
		linkSite?: string;
		lowRange?: string;
		orTerms?: string;
		outputEncoding?: string;
		relatedSite?: string;
		rights?: string;
		safe?: string;
		searchTerms?: string;
		searchType?: string;
		siteSearch?: string;
		siteSearchFilter?: string;
		sort?: string;
		startIndex?: number;
		startPage?: number;
		title?: string;
		totalResults?: string;
	}

	export interface Result {
		cacheId?: string;
		displayLink?: string;
		fileFormat?: string;
		formattedUrl?: string;
		htmlFormattedUrl?: string;
		htmlSnippet?: string;
		htmlTitle?: string;
		image?: ResultImage;
		kind?: string;
		ResultLabels?: Array<ResultLabels>;
		link?: string;
		mime?: string;
		pagemap?: {[id: string]: Array<string> };
		snippet?: string;
		title?: string;
	}

	export interface ResultImage {
		byteSize?: number;
		contextLink?: string;
		height?: number;
		thumbnailHeight?: number;
		thumbnailLink?: string;
		thumbnailWidth?: number;
		width?: number;
	}

	export interface ResultLabels {
		displayName?: string;
		label_with_op?: string;
		name?: string;
	}

	export interface Search {
		context?: Context;
		items?: Array<Result>;
		kind?: string;
		promotions?: Array<Promotion>;
		queries?: {[id: string]: Array<Query> };
		searchInformation?: SearchSearchInformation;
		spelling?: SearchSpelling;
		url?: SearchUrl;
	}

	export interface SearchSearchInformation {
		formattedSearchTime?: string;
		formattedTotalResults?: string;
		searchTime?: number;
		totalResults?: string;
	}

	export interface SearchSpelling {
		correctedQuery?: string;
		htmlCorrectedQuery?: string;
	}

	export interface SearchUrl {
		template?: string;
		type?: string;
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
		Search_cse_list(q: string, c2coff: string, cr: string, cx: string, dateRestrict: string, exactTerms: string, excludeTerms: string, fileType: string, filter: Search_cse_listFilter, gl: string, googlehost: string, highRange: string, hl: string, hq: string, imgColorType: Search_cse_listImgColorType, imgDominantColor: Search_cse_listImgDominantColor, imgSize: Search_cse_listImgSize, imgType: Search_cse_listImgType, linkSite: string, lowRange: string, lr: Search_cse_listLr, num: number, orTerms: string, relatedSite: string, rights: string, safe: Search_cse_listSafe, searchType: Search_cse_listSearchType, siteSearch: string, siteSearchFilter: Search_cse_listSiteSearchFilter, sort: string, start: number): Observable<HttpResponse<string>> {
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
		 * @param {Search_cse_siterestrict_listFilter} filter Controls turning on or off the duplicate content filter.
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
		 * @param {Search_cse_siterestrict_listLr} lr The language restriction for the search results
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
		Search_cse_siterestrict_list(q: string, c2coff: string, cr: string, cx: string, dateRestrict: string, exactTerms: string, excludeTerms: string, fileType: string, filter: Search_cse_siterestrict_listFilter, gl: string, googlehost: string, highRange: string, hl: string, hq: string, imgColorType: Search_cse_listImgColorType, imgDominantColor: Search_cse_listImgDominantColor, imgSize: Search_cse_listImgSize, imgType: Search_cse_listImgType, linkSite: string, lowRange: string, lr: Search_cse_siterestrict_listLr, num: number, orTerms: string, relatedSite: string, rights: string, safe: Search_cse_siterestrict_listSafe, searchType: Search_cse_listSearchType, siteSearch: string, siteSearchFilter: Search_cse_listSiteSearchFilter, sort: string, start: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/siterestrict?q=' + (q == null ? '' : encodeURIComponent(q)) + '&c2coff=' + (c2coff == null ? '' : encodeURIComponent(c2coff)) + '&cr=' + (cr == null ? '' : encodeURIComponent(cr)) + '&cx=' + (cx == null ? '' : encodeURIComponent(cx)) + '&dateRestrict=' + (dateRestrict == null ? '' : encodeURIComponent(dateRestrict)) + '&exactTerms=' + (exactTerms == null ? '' : encodeURIComponent(exactTerms)) + '&excludeTerms=' + (excludeTerms == null ? '' : encodeURIComponent(excludeTerms)) + '&fileType=' + (fileType == null ? '' : encodeURIComponent(fileType)) + '&filter=' + filter + '&gl=' + (gl == null ? '' : encodeURIComponent(gl)) + '&googlehost=' + (googlehost == null ? '' : encodeURIComponent(googlehost)) + '&highRange=' + (highRange == null ? '' : encodeURIComponent(highRange)) + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&hq=' + (hq == null ? '' : encodeURIComponent(hq)) + '&imgColorType=' + imgColorType + '&imgDominantColor=' + imgDominantColor + '&imgSize=' + imgSize + '&imgType=' + imgType + '&linkSite=' + (linkSite == null ? '' : encodeURIComponent(linkSite)) + '&lowRange=' + (lowRange == null ? '' : encodeURIComponent(lowRange)) + '&lr=' + lr + '&num=' + num + '&orTerms=' + (orTerms == null ? '' : encodeURIComponent(orTerms)) + '&relatedSite=' + (relatedSite == null ? '' : encodeURIComponent(relatedSite)) + '&rights=' + (rights == null ? '' : encodeURIComponent(rights)) + '&safe=' + safe + '&searchType=' + searchType + '&siteSearch=' + (siteSearch == null ? '' : encodeURIComponent(siteSearch)) + '&siteSearchFilter=' + siteSearchFilter + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&start=' + start, { observe: 'response', responseType: 'text' });
		}
	}

	export enum Search_cse_listFilter { _0 = 0, _1 = 1 }

	export enum Search_cse_listImgColorType { color = 0, gray = 1, mono = 2 }

	export enum Search_cse_listImgDominantColor { black = 0, blue = 1, brown = 2, gray = 3, green = 4, orange = 5, pink = 6, purple = 7, red = 8, teal = 9, white = 10, yellow = 11 }

	export enum Search_cse_listImgSize { huge = 0, icon = 1, large = 2, medium = 3, small = 4, xlarge = 5, xxlarge = 6 }

	export enum Search_cse_listImgType { clipart = 0, face = 1, lineart = 2, news = 3, photo = 4 }

	export enum Search_cse_listLr { lang_ar = 0, lang_bg = 1, lang_ca = 2, lang_cs = 3, lang_da = 4, lang_de = 5, lang_el = 6, lang_en = 7, lang_es = 8, lang_et = 9, lang_fi = 10, lang_fr = 11, lang_hr = 12, lang_hu = 13, lang_id = 14, lang_is = 15, lang_it = 16, lang_iw = 17, lang_ja = 18, lang_ko = 19, lang_lt = 20, lang_lv = 21, lang_nl = 22, lang_no = 23, lang_pl = 24, lang_pt = 25, lang_ro = 26, lang_ru = 27, lang_sk = 28, lang_sl = 29, lang_sr = 30, lang_sv = 31, lang_tr = 32, lang_zh_CN = 33, lang_zh_TW = 34 }

	export enum Search_cse_listSafe { active = 0, high = 1, medium = 2, off = 3 }

	export enum Search_cse_listSearchType { image = 0 }

	export enum Search_cse_listSiteSearchFilter { e = 0, i = 1 }

	export enum Search_cse_siterestrict_listFilter { _0 = 0, _1 = 1 }

	export enum Search_cse_siterestrict_listLr { lang_ar = 0, lang_bg = 1, lang_ca = 2, lang_cs = 3, lang_da = 4, lang_de = 5, lang_el = 6, lang_en = 7, lang_es = 8, lang_et = 9, lang_fi = 10, lang_fr = 11, lang_hr = 12, lang_hu = 13, lang_id = 14, lang_is = 15, lang_it = 16, lang_iw = 17, lang_ja = 18, lang_ko = 19, lang_lt = 20, lang_lv = 21, lang_nl = 22, lang_no = 23, lang_pl = 24, lang_pt = 25, lang_ro = 26, lang_ru = 27, lang_sk = 28, lang_sl = 29, lang_sr = 30, lang_sv = 31, lang_tr = 32, lang_zh_CN = 33, lang_zh_TW = 34 }

	export enum Search_cse_siterestrict_listSafe { high = 0, medium = 1, off = 2 }

}

