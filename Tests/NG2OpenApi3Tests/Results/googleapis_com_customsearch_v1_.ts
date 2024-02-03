import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Promotion result. */
	export interface Promotion {

		/** An array of block objects for this promotion. */
		PromotionBodyLines?: Array<PromotionBodyLines>;

		/** An abridged version of this search's result URL, e.g. www.example.com. */
		displayLink?: string | null;

		/** The title of the promotion, in HTML. */
		htmlTitle?: string | null;

		/** Image belonging to a promotion. */
		image?: PromotionImage;

		/** The URL of the promotion. */
		link?: string | null;

		/** The title of the promotion. */
		title?: string | null;
	}

	/** Promotion result. */
	export interface PromotionFormProperties {

		/** An abridged version of this search's result URL, e.g. www.example.com. */
		displayLink: FormControl<string | null | undefined>,

		/** The title of the promotion, in HTML. */
		htmlTitle: FormControl<string | null | undefined>,

		/** The URL of the promotion. */
		link: FormControl<string | null | undefined>,

		/** The title of the promotion. */
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

		/** The block object's text in HTML, if it has text. */
		htmlTitle?: string | null;

		/** The anchor text of the block object's link, if it has a link. */
		link?: string | null;

		/** The block object's text, if it has text. */
		title?: string | null;

		/** The URL of the block object's link, if it has one. */
		url?: string | null;
	}
	export interface PromotionBodyLinesFormProperties {

		/** The block object's text in HTML, if it has text. */
		htmlTitle: FormControl<string | null | undefined>,

		/** The anchor text of the block object's link, if it has a link. */
		link: FormControl<string | null | undefined>,

		/** The block object's text, if it has text. */
		title: FormControl<string | null | undefined>,

		/** The URL of the block object's link, if it has one. */
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

		/** Image height in pixels. */
		height?: number | null;

		/** URL of the image for this promotion link. */
		source?: string | null;

		/** Image width in pixels. */
		width?: number | null;
	}
	export interface PromotionImageFormProperties {

		/** Image height in pixels. */
		height: FormControl<number | null | undefined>,

		/** URL of the image for this promotion link. */
		source: FormControl<string | null | undefined>,

		/** Image width in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreatePromotionImageFormGroup() {
		return new FormGroup<PromotionImageFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A custom search result. */
	export interface Result {

		/** Indicates the ID of Google's cached version of the search result. */
		cacheId?: string | null;

		/** An abridged version of this search result’s URL, e.g. www.example.com. */
		displayLink?: string | null;

		/** The file format of the search result. */
		fileFormat?: string | null;

		/** The URL displayed after the snippet for each search result. */
		formattedUrl?: string | null;

		/** The HTML-formatted URL displayed after the snippet for each search result. */
		htmlFormattedUrl?: string | null;

		/** The snippet of the search result, in HTML. */
		htmlSnippet?: string | null;

		/** The title of the search result, in HTML. */
		htmlTitle?: string | null;

		/** Image belonging to a custom search result. */
		image?: ResultImage;

		/** A unique identifier for the type of current object. For this API, it is `customsearch#result.` */
		kind?: string | null;

		/** Encapsulates all information about refinement labels. */
		ResultLabels?: Array<ResultLabels>;

		/** The full URL to which the search result is pointing, e.g. http://www.example.com/foo/bar. */
		link?: string | null;

		/** The MIME type of the search result. */
		mime?: string | null;

		/** Contains [PageMap](https://developers.google.com/custom-search/docs/structured_data#pagemaps) information for this search result. */
		pagemap?: {[id: string]: any };

		/** The snippet of the search result, in plain text. */
		snippet?: string | null;

		/** The title of the search result, in plain text. */
		title?: string | null;
	}

	/** A custom search result. */
	export interface ResultFormProperties {

		/** Indicates the ID of Google's cached version of the search result. */
		cacheId: FormControl<string | null | undefined>,

		/** An abridged version of this search result’s URL, e.g. www.example.com. */
		displayLink: FormControl<string | null | undefined>,

		/** The file format of the search result. */
		fileFormat: FormControl<string | null | undefined>,

		/** The URL displayed after the snippet for each search result. */
		formattedUrl: FormControl<string | null | undefined>,

		/** The HTML-formatted URL displayed after the snippet for each search result. */
		htmlFormattedUrl: FormControl<string | null | undefined>,

		/** The snippet of the search result, in HTML. */
		htmlSnippet: FormControl<string | null | undefined>,

		/** The title of the search result, in HTML. */
		htmlTitle: FormControl<string | null | undefined>,

		/** A unique identifier for the type of current object. For this API, it is `customsearch#result.` */
		kind: FormControl<string | null | undefined>,

		/** The full URL to which the search result is pointing, e.g. http://www.example.com/foo/bar. */
		link: FormControl<string | null | undefined>,

		/** The MIME type of the search result. */
		mime: FormControl<string | null | undefined>,

		/** Contains [PageMap](https://developers.google.com/custom-search/docs/structured_data#pagemaps) information for this search result. */
		pagemap: FormControl<{[id: string]: any } | null | undefined>,

		/** The snippet of the search result, in plain text. */
		snippet: FormControl<string | null | undefined>,

		/** The title of the search result, in plain text. */
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
			pagemap: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			snippet: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResultImage {

		/** The size of the image, in bytes. */
		byteSize?: number | null;

		/** A URL pointing to the webpage hosting the image. */
		contextLink?: string | null;

		/** The height of the image, in pixels. */
		height?: number | null;

		/** The height of the thumbnail image, in pixels. */
		thumbnailHeight?: number | null;

		/** A URL to the thumbnail image. */
		thumbnailLink?: string | null;

		/** The width of the thumbnail image, in pixels. */
		thumbnailWidth?: number | null;

		/** The width of the image, in pixels. */
		width?: number | null;
	}
	export interface ResultImageFormProperties {

		/** The size of the image, in bytes. */
		byteSize: FormControl<number | null | undefined>,

		/** A URL pointing to the webpage hosting the image. */
		contextLink: FormControl<string | null | undefined>,

		/** The height of the image, in pixels. */
		height: FormControl<number | null | undefined>,

		/** The height of the thumbnail image, in pixels. */
		thumbnailHeight: FormControl<number | null | undefined>,

		/** A URL to the thumbnail image. */
		thumbnailLink: FormControl<string | null | undefined>,

		/** The width of the thumbnail image, in pixels. */
		thumbnailWidth: FormControl<number | null | undefined>,

		/** The width of the image, in pixels. */
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

		/** The display name of a refinement label. This is the name you should display in your user interface. */
		displayName?: string | null;

		/** Refinement label and the associated refinement operation. */
		label_with_op?: string | null;

		/** The name of a refinement label, which you can use to refine searches. Don't display this in your user interface; instead, use displayName. */
		name?: string | null;
	}
	export interface ResultLabelsFormProperties {

		/** The display name of a refinement label. This is the name you should display in your user interface. */
		displayName: FormControl<string | null | undefined>,

		/** Refinement label and the associated refinement operation. */
		label_with_op: FormControl<string | null | undefined>,

		/** The name of a refinement label, which you can use to refine searches. Don't display this in your user interface; instead, use displayName. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateResultLabelsFormGroup() {
		return new FormGroup<ResultLabelsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			label_with_op: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to a custom search request. */
	export interface Search {

		/** Metadata and refinements associated with the given search engine, including: * The name of the search engine that was used for the query. * A set of [facet objects](https://developers.google.com/custom-search/docs/refinements#create) (refinements) you can use for refining a search. */
		context?: {[id: string]: any };

		/** The current set of custom search results. */
		items?: Array<Result>;

		/** Unique identifier for the type of current object. For this API, it is customsearch#search. */
		kind?: string | null;

		/** The set of [promotions](https://developers.google.com/custom-search/docs/promotions). Present only if the custom search engine's configuration files define any promotions for the given query. */
		promotions?: Array<Promotion>;

		/** Query metadata for the previous, current, and next pages of results. */
		queries?: SearchQueries;

		/** Metadata about a search operation. */
		searchInformation?: SearchSearchInformation;

		/** Spell correction information for a query. */
		spelling?: SearchSpelling;

		/** OpenSearch template and URL. */
		url?: SearchUrl;
	}

	/** Response to a custom search request. */
	export interface SearchFormProperties {

		/** Metadata and refinements associated with the given search engine, including: * The name of the search engine that was used for the query. * A set of [facet objects](https://developers.google.com/custom-search/docs/refinements#create) (refinements) you can use for refining a search. */
		context: FormControl<{[id: string]: any } | null | undefined>,

		/** Unique identifier for the type of current object. For this API, it is customsearch#search. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateSearchFormGroup() {
		return new FormGroup<SearchFormProperties>({
			context: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchQueries {

		/** Metadata representing the next page of results, if applicable. */
		SearchQueriesNextPage?: Array<SearchQueriesNextPage>;

		/** Metadata representing the previous page of results, if applicable. */
		SearchQueriesPreviousPage?: Array<SearchQueriesPreviousPage>;

		/** Metadata representing the current request. */
		SearchQueriesRequest?: Array<SearchQueriesRequest>;
	}
	export interface SearchQueriesFormProperties {
	}
	export function CreateSearchQueriesFormGroup() {
		return new FormGroup<SearchQueriesFormProperties>({
		});

	}

	export interface SearchQueriesNextPage {

		/** Number of search results returned in this set. */
		count?: number | null;

		/** Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) in the `cr` parameter's value. Google WebSearch determines the country of a document by analyzing the following: * The top-level domain (TLD) of the document's URL. * The geographic location of the web server's IP address. See [Country (cr) Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) for a list of valid values for this parameter. */
		cr?: string | null;

		/** The identifier of an engine created using the Programmable Search Engine [Control Panel](https://programmablesearchengine.google.com/). This is a custom property not defined in the OpenSearch spec. This parameter is **required**. */
		cx?: string | null;

		/** Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years. */
		dateRestrict?: string | null;

		/** Enables or disables the [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch) feature. Supported values are: * `0`: enabled (default) * `1`: disabled */
		disableCnTwTranslation?: string | null;

		/** Identifies a phrase that all documents in the search results must contain. */
		exactTerms?: string | null;

		/** Identifies a word or phrase that should not appear in any documents in the search results. */
		excludeTerms?: string | null;

		/** Restricts results to files of a specified extension. Filetypes supported by Google include: * Adobe Portable Document Format (`pdf`) * Adobe PostScript (`ps`) * Lotus 1-2-3 (`wk1`, `wk2`, `wk3`, `wk4`, `wk5`, `wki`, `wks`, `wku`) * Lotus WordPro (`lwp`) * Macwrite (`mw`) * Microsoft Excel (`xls`) * Microsoft PowerPoint (`ppt`) * Microsoft Word (`doc`) * Microsoft Works (`wks`, `wps`, `wdb`) * Microsoft Write (`wri`) * Rich Text Format (`rtf`) * Shockwave Flash (`swf`) * Text (`ans`, `txt`). Additional filetypes may be added in the future. An up-to-date list can always be found in Google's [file type FAQ](https://support.google.com/webmasters/answer/35287). */
		fileType?: string | null;

		/** Activates or deactivates the automatic filtering of Google search results. See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Valid values for this parameter are: * `0`: Disabled * `1`: Enabled (default) **Note**: By default, Google applies filtering to all search results to improve the quality of those results. */
		filter?: string | null;

		/** Boosts search results whose country of origin matches the parameter value. See [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) for a list of valid values. Specifying a `gl` parameter value in WebSearch requests should improve the relevance of results. This is particularly true for international customers and, even more specifically, for customers in English-speaking countries other than the United States. */
		gl?: string | null;

		/** Specifies the Google domain (for example, google.com, google.de, or google.fr) to which the search should be limited. */
		googleHost?: string | null;

		/** Specifies the ending value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query. */
		highRange?: string | null;

		/** Specifies the interface language (host language) of your user interface. Explicitly setting this parameter improves the performance and the quality of your search results. See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages. */
		hl?: string | null;

		/** Appends the specified query terms to the query, as if they were combined with a logical `AND` operator. */
		hq?: string | null;

		/** Restricts results to images of a specified color type. Supported values are: * `mono` (black and white) * `gray` (grayscale) * `color` (color) */
		imgColorType?: string | null;

		/** Restricts results to images with a specific dominant color. Supported values are: * `red` * `orange` * `yellow` * `green` * `teal` * `blue` * `purple` * `pink` * `white` * `gray` * `black` * `brown` */
		imgDominantColor?: string | null;

		/** Restricts results to images of a specified size. Supported values are: * `icon` (small) * `small | medium | large | xlarge` (medium) * `xxlarge` (large) * `huge` (extra-large) */
		imgSize?: string | null;

		/** Restricts results to images of a specified type. Supported values are: * `clipart` (Clip art) * `face` (Face) * `lineart` (Line drawing) * `photo` (Photo) * `animated` (Animated) * `stock` (Stock) */
		imgType?: string | null;

		/** The character encoding supported for search requests. */
		inputEncoding?: string | null;

		/** The language of the search results. */
		language?: string | null;

		/** Specifies that all results should contain a link to a specific URL. */
		linkSite?: string | null;

		/** Specifies the starting value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query. */
		lowRange?: string | null;

		/** Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. You can also use the [Boolean OR](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) query term for this type of query. */
		orTerms?: string | null;

		/** The character encoding supported for search results. */
		outputEncoding?: string | null;

		/** Specifies that all search results should be pages that are related to the specified URL. The parameter value should be a URL. */
		relatedSite?: string | null;

		/** Filters based on licensing. Supported values include: * `cc_publicdomain` * `cc_attribute` * `cc_sharealike` * `cc_noncommercial` * `cc_nonderived` */
		rights?: string | null;

		/** Specifies the [SafeSearch level](https://developers.google.com/custom-search/docs/json_api_reference#safeSearchLevels) used for filtering out adult results. This is a custom property not defined in the OpenSearch spec. Valid parameter values are: * `"off"`: Disable SafeSearch * `"active"`: Enable SafeSearch */
		safe?: string | null;

		/** The search terms entered by the user. */
		searchTerms?: string | null;

		/** Allowed values are `web` or `image`. If unspecified, results are limited to webpages. */
		searchType?: string | null;

		/** Restricts results to URLs from a specified site. */
		siteSearch?: string | null;

		/** Specifies whether to include or exclude results from the site named in the `sitesearch` parameter. Supported values are: * `i`: include content from site * `e`: exclude content from site */
		siteSearchFilter?: string | null;

		/** Specifies that results should be sorted according to the specified expression. For example, sort by date. */
		sort?: string | null;

		/** The index of the current set of search results into the total set of results, where the index of the first result is 1. */
		startIndex?: number | null;

		/** The page number of this set of results, where the page length is set by the `count` property. */
		startPage?: number | null;

		/** A description of the query. */
		title?: string | null;

		/** Estimated number of total search results. May not be accurate. */
		totalResults?: string | null;
	}
	export interface SearchQueriesNextPageFormProperties {

		/** Number of search results returned in this set. */
		count: FormControl<number | null | undefined>,

		/** Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) in the `cr` parameter's value. Google WebSearch determines the country of a document by analyzing the following: * The top-level domain (TLD) of the document's URL. * The geographic location of the web server's IP address. See [Country (cr) Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) for a list of valid values for this parameter. */
		cr: FormControl<string | null | undefined>,

		/** The identifier of an engine created using the Programmable Search Engine [Control Panel](https://programmablesearchengine.google.com/). This is a custom property not defined in the OpenSearch spec. This parameter is **required**. */
		cx: FormControl<string | null | undefined>,

		/** Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years. */
		dateRestrict: FormControl<string | null | undefined>,

		/** Enables or disables the [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch) feature. Supported values are: * `0`: enabled (default) * `1`: disabled */
		disableCnTwTranslation: FormControl<string | null | undefined>,

		/** Identifies a phrase that all documents in the search results must contain. */
		exactTerms: FormControl<string | null | undefined>,

		/** Identifies a word or phrase that should not appear in any documents in the search results. */
		excludeTerms: FormControl<string | null | undefined>,

		/** Restricts results to files of a specified extension. Filetypes supported by Google include: * Adobe Portable Document Format (`pdf`) * Adobe PostScript (`ps`) * Lotus 1-2-3 (`wk1`, `wk2`, `wk3`, `wk4`, `wk5`, `wki`, `wks`, `wku`) * Lotus WordPro (`lwp`) * Macwrite (`mw`) * Microsoft Excel (`xls`) * Microsoft PowerPoint (`ppt`) * Microsoft Word (`doc`) * Microsoft Works (`wks`, `wps`, `wdb`) * Microsoft Write (`wri`) * Rich Text Format (`rtf`) * Shockwave Flash (`swf`) * Text (`ans`, `txt`). Additional filetypes may be added in the future. An up-to-date list can always be found in Google's [file type FAQ](https://support.google.com/webmasters/answer/35287). */
		fileType: FormControl<string | null | undefined>,

		/** Activates or deactivates the automatic filtering of Google search results. See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Valid values for this parameter are: * `0`: Disabled * `1`: Enabled (default) **Note**: By default, Google applies filtering to all search results to improve the quality of those results. */
		filter: FormControl<string | null | undefined>,

		/** Boosts search results whose country of origin matches the parameter value. See [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) for a list of valid values. Specifying a `gl` parameter value in WebSearch requests should improve the relevance of results. This is particularly true for international customers and, even more specifically, for customers in English-speaking countries other than the United States. */
		gl: FormControl<string | null | undefined>,

		/** Specifies the Google domain (for example, google.com, google.de, or google.fr) to which the search should be limited. */
		googleHost: FormControl<string | null | undefined>,

		/** Specifies the ending value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query. */
		highRange: FormControl<string | null | undefined>,

		/** Specifies the interface language (host language) of your user interface. Explicitly setting this parameter improves the performance and the quality of your search results. See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages. */
		hl: FormControl<string | null | undefined>,

		/** Appends the specified query terms to the query, as if they were combined with a logical `AND` operator. */
		hq: FormControl<string | null | undefined>,

		/** Restricts results to images of a specified color type. Supported values are: * `mono` (black and white) * `gray` (grayscale) * `color` (color) */
		imgColorType: FormControl<string | null | undefined>,

		/** Restricts results to images with a specific dominant color. Supported values are: * `red` * `orange` * `yellow` * `green` * `teal` * `blue` * `purple` * `pink` * `white` * `gray` * `black` * `brown` */
		imgDominantColor: FormControl<string | null | undefined>,

		/** Restricts results to images of a specified size. Supported values are: * `icon` (small) * `small | medium | large | xlarge` (medium) * `xxlarge` (large) * `huge` (extra-large) */
		imgSize: FormControl<string | null | undefined>,

		/** Restricts results to images of a specified type. Supported values are: * `clipart` (Clip art) * `face` (Face) * `lineart` (Line drawing) * `photo` (Photo) * `animated` (Animated) * `stock` (Stock) */
		imgType: FormControl<string | null | undefined>,

		/** The character encoding supported for search requests. */
		inputEncoding: FormControl<string | null | undefined>,

		/** The language of the search results. */
		language: FormControl<string | null | undefined>,

		/** Specifies that all results should contain a link to a specific URL. */
		linkSite: FormControl<string | null | undefined>,

		/** Specifies the starting value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query. */
		lowRange: FormControl<string | null | undefined>,

		/** Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. You can also use the [Boolean OR](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) query term for this type of query. */
		orTerms: FormControl<string | null | undefined>,

		/** The character encoding supported for search results. */
		outputEncoding: FormControl<string | null | undefined>,

		/** Specifies that all search results should be pages that are related to the specified URL. The parameter value should be a URL. */
		relatedSite: FormControl<string | null | undefined>,

		/** Filters based on licensing. Supported values include: * `cc_publicdomain` * `cc_attribute` * `cc_sharealike` * `cc_noncommercial` * `cc_nonderived` */
		rights: FormControl<string | null | undefined>,

		/** Specifies the [SafeSearch level](https://developers.google.com/custom-search/docs/json_api_reference#safeSearchLevels) used for filtering out adult results. This is a custom property not defined in the OpenSearch spec. Valid parameter values are: * `"off"`: Disable SafeSearch * `"active"`: Enable SafeSearch */
		safe: FormControl<string | null | undefined>,

		/** The search terms entered by the user. */
		searchTerms: FormControl<string | null | undefined>,

		/** Allowed values are `web` or `image`. If unspecified, results are limited to webpages. */
		searchType: FormControl<string | null | undefined>,

		/** Restricts results to URLs from a specified site. */
		siteSearch: FormControl<string | null | undefined>,

		/** Specifies whether to include or exclude results from the site named in the `sitesearch` parameter. Supported values are: * `i`: include content from site * `e`: exclude content from site */
		siteSearchFilter: FormControl<string | null | undefined>,

		/** Specifies that results should be sorted according to the specified expression. For example, sort by date. */
		sort: FormControl<string | null | undefined>,

		/** The index of the current set of search results into the total set of results, where the index of the first result is 1. */
		startIndex: FormControl<number | null | undefined>,

		/** The page number of this set of results, where the page length is set by the `count` property. */
		startPage: FormControl<number | null | undefined>,

		/** A description of the query. */
		title: FormControl<string | null | undefined>,

		/** Estimated number of total search results. May not be accurate. */
		totalResults: FormControl<string | null | undefined>,
	}
	export function CreateSearchQueriesNextPageFormGroup() {
		return new FormGroup<SearchQueriesNextPageFormProperties>({
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

	export interface SearchQueriesPreviousPage {

		/** Number of search results returned in this set. */
		count?: number | null;

		/** Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) in the `cr` parameter's value. Google WebSearch determines the country of a document by analyzing the following: * The top-level domain (TLD) of the document's URL. * The geographic location of the web server's IP address. See [Country (cr) Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) for a list of valid values for this parameter. */
		cr?: string | null;

		/** The identifier of an engine created using the Programmable Search Engine [Control Panel](https://programmablesearchengine.google.com/). This is a custom property not defined in the OpenSearch spec. This parameter is **required**. */
		cx?: string | null;

		/** Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years. */
		dateRestrict?: string | null;

		/** Enables or disables the [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch) feature. Supported values are: * `0`: enabled (default) * `1`: disabled */
		disableCnTwTranslation?: string | null;

		/** Identifies a phrase that all documents in the search results must contain. */
		exactTerms?: string | null;

		/** Identifies a word or phrase that should not appear in any documents in the search results. */
		excludeTerms?: string | null;

		/** Restricts results to files of a specified extension. Filetypes supported by Google include: * Adobe Portable Document Format (`pdf`) * Adobe PostScript (`ps`) * Lotus 1-2-3 (`wk1`, `wk2`, `wk3`, `wk4`, `wk5`, `wki`, `wks`, `wku`) * Lotus WordPro (`lwp`) * Macwrite (`mw`) * Microsoft Excel (`xls`) * Microsoft PowerPoint (`ppt`) * Microsoft Word (`doc`) * Microsoft Works (`wks`, `wps`, `wdb`) * Microsoft Write (`wri`) * Rich Text Format (`rtf`) * Shockwave Flash (`swf`) * Text (`ans`, `txt`). Additional filetypes may be added in the future. An up-to-date list can always be found in Google's [file type FAQ](https://support.google.com/webmasters/answer/35287). */
		fileType?: string | null;

		/** Activates or deactivates the automatic filtering of Google search results. See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Valid values for this parameter are: * `0`: Disabled * `1`: Enabled (default) **Note**: By default, Google applies filtering to all search results to improve the quality of those results. */
		filter?: string | null;

		/** Boosts search results whose country of origin matches the parameter value. See [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) for a list of valid values. Specifying a `gl` parameter value in WebSearch requests should improve the relevance of results. This is particularly true for international customers and, even more specifically, for customers in English-speaking countries other than the United States. */
		gl?: string | null;

		/** Specifies the Google domain (for example, google.com, google.de, or google.fr) to which the search should be limited. */
		googleHost?: string | null;

		/** Specifies the ending value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query. */
		highRange?: string | null;

		/** Specifies the interface language (host language) of your user interface. Explicitly setting this parameter improves the performance and the quality of your search results. See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages. */
		hl?: string | null;

		/** Appends the specified query terms to the query, as if they were combined with a logical `AND` operator. */
		hq?: string | null;

		/** Restricts results to images of a specified color type. Supported values are: * `mono` (black and white) * `gray` (grayscale) * `color` (color) */
		imgColorType?: string | null;

		/** Restricts results to images with a specific dominant color. Supported values are: * `red` * `orange` * `yellow` * `green` * `teal` * `blue` * `purple` * `pink` * `white` * `gray` * `black` * `brown` */
		imgDominantColor?: string | null;

		/** Restricts results to images of a specified size. Supported values are: * `icon` (small) * `small | medium | large | xlarge` (medium) * `xxlarge` (large) * `huge` (extra-large) */
		imgSize?: string | null;

		/** Restricts results to images of a specified type. Supported values are: * `clipart` (Clip art) * `face` (Face) * `lineart` (Line drawing) * `photo` (Photo) * `animated` (Animated) * `stock` (Stock) */
		imgType?: string | null;

		/** The character encoding supported for search requests. */
		inputEncoding?: string | null;

		/** The language of the search results. */
		language?: string | null;

		/** Specifies that all results should contain a link to a specific URL. */
		linkSite?: string | null;

		/** Specifies the starting value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query. */
		lowRange?: string | null;

		/** Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. You can also use the [Boolean OR](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) query term for this type of query. */
		orTerms?: string | null;

		/** The character encoding supported for search results. */
		outputEncoding?: string | null;

		/** Specifies that all search results should be pages that are related to the specified URL. The parameter value should be a URL. */
		relatedSite?: string | null;

		/** Filters based on licensing. Supported values include: * `cc_publicdomain` * `cc_attribute` * `cc_sharealike` * `cc_noncommercial` * `cc_nonderived` */
		rights?: string | null;

		/** Specifies the [SafeSearch level](https://developers.google.com/custom-search/docs/json_api_reference#safeSearchLevels) used for filtering out adult results. This is a custom property not defined in the OpenSearch spec. Valid parameter values are: * `"off"`: Disable SafeSearch * `"active"`: Enable SafeSearch */
		safe?: string | null;

		/** The search terms entered by the user. */
		searchTerms?: string | null;

		/** Allowed values are `web` or `image`. If unspecified, results are limited to webpages. */
		searchType?: string | null;

		/** Restricts results to URLs from a specified site. */
		siteSearch?: string | null;

		/** Specifies whether to include or exclude results from the site named in the `sitesearch` parameter. Supported values are: * `i`: include content from site * `e`: exclude content from site */
		siteSearchFilter?: string | null;

		/** Specifies that results should be sorted according to the specified expression. For example, sort by date. */
		sort?: string | null;

		/** The index of the current set of search results into the total set of results, where the index of the first result is 1. */
		startIndex?: number | null;

		/** The page number of this set of results, where the page length is set by the `count` property. */
		startPage?: number | null;

		/** A description of the query. */
		title?: string | null;

		/** Estimated number of total search results. May not be accurate. */
		totalResults?: string | null;
	}
	export interface SearchQueriesPreviousPageFormProperties {

		/** Number of search results returned in this set. */
		count: FormControl<number | null | undefined>,

		/** Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) in the `cr` parameter's value. Google WebSearch determines the country of a document by analyzing the following: * The top-level domain (TLD) of the document's URL. * The geographic location of the web server's IP address. See [Country (cr) Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) for a list of valid values for this parameter. */
		cr: FormControl<string | null | undefined>,

		/** The identifier of an engine created using the Programmable Search Engine [Control Panel](https://programmablesearchengine.google.com/). This is a custom property not defined in the OpenSearch spec. This parameter is **required**. */
		cx: FormControl<string | null | undefined>,

		/** Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years. */
		dateRestrict: FormControl<string | null | undefined>,

		/** Enables or disables the [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch) feature. Supported values are: * `0`: enabled (default) * `1`: disabled */
		disableCnTwTranslation: FormControl<string | null | undefined>,

		/** Identifies a phrase that all documents in the search results must contain. */
		exactTerms: FormControl<string | null | undefined>,

		/** Identifies a word or phrase that should not appear in any documents in the search results. */
		excludeTerms: FormControl<string | null | undefined>,

		/** Restricts results to files of a specified extension. Filetypes supported by Google include: * Adobe Portable Document Format (`pdf`) * Adobe PostScript (`ps`) * Lotus 1-2-3 (`wk1`, `wk2`, `wk3`, `wk4`, `wk5`, `wki`, `wks`, `wku`) * Lotus WordPro (`lwp`) * Macwrite (`mw`) * Microsoft Excel (`xls`) * Microsoft PowerPoint (`ppt`) * Microsoft Word (`doc`) * Microsoft Works (`wks`, `wps`, `wdb`) * Microsoft Write (`wri`) * Rich Text Format (`rtf`) * Shockwave Flash (`swf`) * Text (`ans`, `txt`). Additional filetypes may be added in the future. An up-to-date list can always be found in Google's [file type FAQ](https://support.google.com/webmasters/answer/35287). */
		fileType: FormControl<string | null | undefined>,

		/** Activates or deactivates the automatic filtering of Google search results. See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Valid values for this parameter are: * `0`: Disabled * `1`: Enabled (default) **Note**: By default, Google applies filtering to all search results to improve the quality of those results. */
		filter: FormControl<string | null | undefined>,

		/** Boosts search results whose country of origin matches the parameter value. See [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) for a list of valid values. Specifying a `gl` parameter value in WebSearch requests should improve the relevance of results. This is particularly true for international customers and, even more specifically, for customers in English-speaking countries other than the United States. */
		gl: FormControl<string | null | undefined>,

		/** Specifies the Google domain (for example, google.com, google.de, or google.fr) to which the search should be limited. */
		googleHost: FormControl<string | null | undefined>,

		/** Specifies the ending value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query. */
		highRange: FormControl<string | null | undefined>,

		/** Specifies the interface language (host language) of your user interface. Explicitly setting this parameter improves the performance and the quality of your search results. See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages. */
		hl: FormControl<string | null | undefined>,

		/** Appends the specified query terms to the query, as if they were combined with a logical `AND` operator. */
		hq: FormControl<string | null | undefined>,

		/** Restricts results to images of a specified color type. Supported values are: * `mono` (black and white) * `gray` (grayscale) * `color` (color) */
		imgColorType: FormControl<string | null | undefined>,

		/** Restricts results to images with a specific dominant color. Supported values are: * `red` * `orange` * `yellow` * `green` * `teal` * `blue` * `purple` * `pink` * `white` * `gray` * `black` * `brown` */
		imgDominantColor: FormControl<string | null | undefined>,

		/** Restricts results to images of a specified size. Supported values are: * `icon` (small) * `small | medium | large | xlarge` (medium) * `xxlarge` (large) * `huge` (extra-large) */
		imgSize: FormControl<string | null | undefined>,

		/** Restricts results to images of a specified type. Supported values are: * `clipart` (Clip art) * `face` (Face) * `lineart` (Line drawing) * `photo` (Photo) * `animated` (Animated) * `stock` (Stock) */
		imgType: FormControl<string | null | undefined>,

		/** The character encoding supported for search requests. */
		inputEncoding: FormControl<string | null | undefined>,

		/** The language of the search results. */
		language: FormControl<string | null | undefined>,

		/** Specifies that all results should contain a link to a specific URL. */
		linkSite: FormControl<string | null | undefined>,

		/** Specifies the starting value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query. */
		lowRange: FormControl<string | null | undefined>,

		/** Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. You can also use the [Boolean OR](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) query term for this type of query. */
		orTerms: FormControl<string | null | undefined>,

		/** The character encoding supported for search results. */
		outputEncoding: FormControl<string | null | undefined>,

		/** Specifies that all search results should be pages that are related to the specified URL. The parameter value should be a URL. */
		relatedSite: FormControl<string | null | undefined>,

		/** Filters based on licensing. Supported values include: * `cc_publicdomain` * `cc_attribute` * `cc_sharealike` * `cc_noncommercial` * `cc_nonderived` */
		rights: FormControl<string | null | undefined>,

		/** Specifies the [SafeSearch level](https://developers.google.com/custom-search/docs/json_api_reference#safeSearchLevels) used for filtering out adult results. This is a custom property not defined in the OpenSearch spec. Valid parameter values are: * `"off"`: Disable SafeSearch * `"active"`: Enable SafeSearch */
		safe: FormControl<string | null | undefined>,

		/** The search terms entered by the user. */
		searchTerms: FormControl<string | null | undefined>,

		/** Allowed values are `web` or `image`. If unspecified, results are limited to webpages. */
		searchType: FormControl<string | null | undefined>,

		/** Restricts results to URLs from a specified site. */
		siteSearch: FormControl<string | null | undefined>,

		/** Specifies whether to include or exclude results from the site named in the `sitesearch` parameter. Supported values are: * `i`: include content from site * `e`: exclude content from site */
		siteSearchFilter: FormControl<string | null | undefined>,

		/** Specifies that results should be sorted according to the specified expression. For example, sort by date. */
		sort: FormControl<string | null | undefined>,

		/** The index of the current set of search results into the total set of results, where the index of the first result is 1. */
		startIndex: FormControl<number | null | undefined>,

		/** The page number of this set of results, where the page length is set by the `count` property. */
		startPage: FormControl<number | null | undefined>,

		/** A description of the query. */
		title: FormControl<string | null | undefined>,

		/** Estimated number of total search results. May not be accurate. */
		totalResults: FormControl<string | null | undefined>,
	}
	export function CreateSearchQueriesPreviousPageFormGroup() {
		return new FormGroup<SearchQueriesPreviousPageFormProperties>({
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

	export interface SearchQueriesRequest {

		/** Number of search results returned in this set. */
		count?: number | null;

		/** Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) in the `cr` parameter's value. Google WebSearch determines the country of a document by analyzing the following: * The top-level domain (TLD) of the document's URL. * The geographic location of the web server's IP address. See [Country (cr) Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) for a list of valid values for this parameter. */
		cr?: string | null;

		/** The identifier of an engine created using the Programmable Search Engine [Control Panel](https://programmablesearchengine.google.com/). This is a custom property not defined in the OpenSearch spec. This parameter is **required**. */
		cx?: string | null;

		/** Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years. */
		dateRestrict?: string | null;

		/** Enables or disables the [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch) feature. Supported values are: * `0`: enabled (default) * `1`: disabled */
		disableCnTwTranslation?: string | null;

		/** Identifies a phrase that all documents in the search results must contain. */
		exactTerms?: string | null;

		/** Identifies a word or phrase that should not appear in any documents in the search results. */
		excludeTerms?: string | null;

		/** Restricts results to files of a specified extension. Filetypes supported by Google include: * Adobe Portable Document Format (`pdf`) * Adobe PostScript (`ps`) * Lotus 1-2-3 (`wk1`, `wk2`, `wk3`, `wk4`, `wk5`, `wki`, `wks`, `wku`) * Lotus WordPro (`lwp`) * Macwrite (`mw`) * Microsoft Excel (`xls`) * Microsoft PowerPoint (`ppt`) * Microsoft Word (`doc`) * Microsoft Works (`wks`, `wps`, `wdb`) * Microsoft Write (`wri`) * Rich Text Format (`rtf`) * Shockwave Flash (`swf`) * Text (`ans`, `txt`). Additional filetypes may be added in the future. An up-to-date list can always be found in Google's [file type FAQ](https://support.google.com/webmasters/answer/35287). */
		fileType?: string | null;

		/** Activates or deactivates the automatic filtering of Google search results. See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Valid values for this parameter are: * `0`: Disabled * `1`: Enabled (default) **Note**: By default, Google applies filtering to all search results to improve the quality of those results. */
		filter?: string | null;

		/** Boosts search results whose country of origin matches the parameter value. See [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) for a list of valid values. Specifying a `gl` parameter value in WebSearch requests should improve the relevance of results. This is particularly true for international customers and, even more specifically, for customers in English-speaking countries other than the United States. */
		gl?: string | null;

		/** Specifies the Google domain (for example, google.com, google.de, or google.fr) to which the search should be limited. */
		googleHost?: string | null;

		/** Specifies the ending value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query. */
		highRange?: string | null;

		/** Specifies the interface language (host language) of your user interface. Explicitly setting this parameter improves the performance and the quality of your search results. See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages. */
		hl?: string | null;

		/** Appends the specified query terms to the query, as if they were combined with a logical `AND` operator. */
		hq?: string | null;

		/** Restricts results to images of a specified color type. Supported values are: * `mono` (black and white) * `gray` (grayscale) * `color` (color) */
		imgColorType?: string | null;

		/** Restricts results to images with a specific dominant color. Supported values are: * `red` * `orange` * `yellow` * `green` * `teal` * `blue` * `purple` * `pink` * `white` * `gray` * `black` * `brown` */
		imgDominantColor?: string | null;

		/** Restricts results to images of a specified size. Supported values are: * `icon` (small) * `small | medium | large | xlarge` (medium) * `xxlarge` (large) * `huge` (extra-large) */
		imgSize?: string | null;

		/** Restricts results to images of a specified type. Supported values are: * `clipart` (Clip art) * `face` (Face) * `lineart` (Line drawing) * `photo` (Photo) * `animated` (Animated) * `stock` (Stock) */
		imgType?: string | null;

		/** The character encoding supported for search requests. */
		inputEncoding?: string | null;

		/** The language of the search results. */
		language?: string | null;

		/** Specifies that all results should contain a link to a specific URL. */
		linkSite?: string | null;

		/** Specifies the starting value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query. */
		lowRange?: string | null;

		/** Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. You can also use the [Boolean OR](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) query term for this type of query. */
		orTerms?: string | null;

		/** The character encoding supported for search results. */
		outputEncoding?: string | null;

		/** Specifies that all search results should be pages that are related to the specified URL. The parameter value should be a URL. */
		relatedSite?: string | null;

		/** Filters based on licensing. Supported values include: * `cc_publicdomain` * `cc_attribute` * `cc_sharealike` * `cc_noncommercial` * `cc_nonderived` */
		rights?: string | null;

		/** Specifies the [SafeSearch level](https://developers.google.com/custom-search/docs/json_api_reference#safeSearchLevels) used for filtering out adult results. This is a custom property not defined in the OpenSearch spec. Valid parameter values are: * `"off"`: Disable SafeSearch * `"active"`: Enable SafeSearch */
		safe?: string | null;

		/** The search terms entered by the user. */
		searchTerms?: string | null;

		/** Allowed values are `web` or `image`. If unspecified, results are limited to webpages. */
		searchType?: string | null;

		/** Restricts results to URLs from a specified site. */
		siteSearch?: string | null;

		/** Specifies whether to include or exclude results from the site named in the `sitesearch` parameter. Supported values are: * `i`: include content from site * `e`: exclude content from site */
		siteSearchFilter?: string | null;

		/** Specifies that results should be sorted according to the specified expression. For example, sort by date. */
		sort?: string | null;

		/** The index of the current set of search results into the total set of results, where the index of the first result is 1. */
		startIndex?: number | null;

		/** The page number of this set of results, where the page length is set by the `count` property. */
		startPage?: number | null;

		/** A description of the query. */
		title?: string | null;

		/** Estimated number of total search results. May not be accurate. */
		totalResults?: string | null;
	}
	export interface SearchQueriesRequestFormProperties {

		/** Number of search results returned in this set. */
		count: FormControl<number | null | undefined>,

		/** Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) in the `cr` parameter's value. Google WebSearch determines the country of a document by analyzing the following: * The top-level domain (TLD) of the document's URL. * The geographic location of the web server's IP address. See [Country (cr) Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) for a list of valid values for this parameter. */
		cr: FormControl<string | null | undefined>,

		/** The identifier of an engine created using the Programmable Search Engine [Control Panel](https://programmablesearchengine.google.com/). This is a custom property not defined in the OpenSearch spec. This parameter is **required**. */
		cx: FormControl<string | null | undefined>,

		/** Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years. */
		dateRestrict: FormControl<string | null | undefined>,

		/** Enables or disables the [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch) feature. Supported values are: * `0`: enabled (default) * `1`: disabled */
		disableCnTwTranslation: FormControl<string | null | undefined>,

		/** Identifies a phrase that all documents in the search results must contain. */
		exactTerms: FormControl<string | null | undefined>,

		/** Identifies a word or phrase that should not appear in any documents in the search results. */
		excludeTerms: FormControl<string | null | undefined>,

		/** Restricts results to files of a specified extension. Filetypes supported by Google include: * Adobe Portable Document Format (`pdf`) * Adobe PostScript (`ps`) * Lotus 1-2-3 (`wk1`, `wk2`, `wk3`, `wk4`, `wk5`, `wki`, `wks`, `wku`) * Lotus WordPro (`lwp`) * Macwrite (`mw`) * Microsoft Excel (`xls`) * Microsoft PowerPoint (`ppt`) * Microsoft Word (`doc`) * Microsoft Works (`wks`, `wps`, `wdb`) * Microsoft Write (`wri`) * Rich Text Format (`rtf`) * Shockwave Flash (`swf`) * Text (`ans`, `txt`). Additional filetypes may be added in the future. An up-to-date list can always be found in Google's [file type FAQ](https://support.google.com/webmasters/answer/35287). */
		fileType: FormControl<string | null | undefined>,

		/** Activates or deactivates the automatic filtering of Google search results. See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Valid values for this parameter are: * `0`: Disabled * `1`: Enabled (default) **Note**: By default, Google applies filtering to all search results to improve the quality of those results. */
		filter: FormControl<string | null | undefined>,

		/** Boosts search results whose country of origin matches the parameter value. See [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) for a list of valid values. Specifying a `gl` parameter value in WebSearch requests should improve the relevance of results. This is particularly true for international customers and, even more specifically, for customers in English-speaking countries other than the United States. */
		gl: FormControl<string | null | undefined>,

		/** Specifies the Google domain (for example, google.com, google.de, or google.fr) to which the search should be limited. */
		googleHost: FormControl<string | null | undefined>,

		/** Specifies the ending value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query. */
		highRange: FormControl<string | null | undefined>,

		/** Specifies the interface language (host language) of your user interface. Explicitly setting this parameter improves the performance and the quality of your search results. See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages. */
		hl: FormControl<string | null | undefined>,

		/** Appends the specified query terms to the query, as if they were combined with a logical `AND` operator. */
		hq: FormControl<string | null | undefined>,

		/** Restricts results to images of a specified color type. Supported values are: * `mono` (black and white) * `gray` (grayscale) * `color` (color) */
		imgColorType: FormControl<string | null | undefined>,

		/** Restricts results to images with a specific dominant color. Supported values are: * `red` * `orange` * `yellow` * `green` * `teal` * `blue` * `purple` * `pink` * `white` * `gray` * `black` * `brown` */
		imgDominantColor: FormControl<string | null | undefined>,

		/** Restricts results to images of a specified size. Supported values are: * `icon` (small) * `small | medium | large | xlarge` (medium) * `xxlarge` (large) * `huge` (extra-large) */
		imgSize: FormControl<string | null | undefined>,

		/** Restricts results to images of a specified type. Supported values are: * `clipart` (Clip art) * `face` (Face) * `lineart` (Line drawing) * `photo` (Photo) * `animated` (Animated) * `stock` (Stock) */
		imgType: FormControl<string | null | undefined>,

		/** The character encoding supported for search requests. */
		inputEncoding: FormControl<string | null | undefined>,

		/** The language of the search results. */
		language: FormControl<string | null | undefined>,

		/** Specifies that all results should contain a link to a specific URL. */
		linkSite: FormControl<string | null | undefined>,

		/** Specifies the starting value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query. */
		lowRange: FormControl<string | null | undefined>,

		/** Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. You can also use the [Boolean OR](https://developers.google.com/custom-search/docs/json_api_reference#BooleanOrSearch) query term for this type of query. */
		orTerms: FormControl<string | null | undefined>,

		/** The character encoding supported for search results. */
		outputEncoding: FormControl<string | null | undefined>,

		/** Specifies that all search results should be pages that are related to the specified URL. The parameter value should be a URL. */
		relatedSite: FormControl<string | null | undefined>,

		/** Filters based on licensing. Supported values include: * `cc_publicdomain` * `cc_attribute` * `cc_sharealike` * `cc_noncommercial` * `cc_nonderived` */
		rights: FormControl<string | null | undefined>,

		/** Specifies the [SafeSearch level](https://developers.google.com/custom-search/docs/json_api_reference#safeSearchLevels) used for filtering out adult results. This is a custom property not defined in the OpenSearch spec. Valid parameter values are: * `"off"`: Disable SafeSearch * `"active"`: Enable SafeSearch */
		safe: FormControl<string | null | undefined>,

		/** The search terms entered by the user. */
		searchTerms: FormControl<string | null | undefined>,

		/** Allowed values are `web` or `image`. If unspecified, results are limited to webpages. */
		searchType: FormControl<string | null | undefined>,

		/** Restricts results to URLs from a specified site. */
		siteSearch: FormControl<string | null | undefined>,

		/** Specifies whether to include or exclude results from the site named in the `sitesearch` parameter. Supported values are: * `i`: include content from site * `e`: exclude content from site */
		siteSearchFilter: FormControl<string | null | undefined>,

		/** Specifies that results should be sorted according to the specified expression. For example, sort by date. */
		sort: FormControl<string | null | undefined>,

		/** The index of the current set of search results into the total set of results, where the index of the first result is 1. */
		startIndex: FormControl<number | null | undefined>,

		/** The page number of this set of results, where the page length is set by the `count` property. */
		startPage: FormControl<number | null | undefined>,

		/** A description of the query. */
		title: FormControl<string | null | undefined>,

		/** Estimated number of total search results. May not be accurate. */
		totalResults: FormControl<string | null | undefined>,
	}
	export function CreateSearchQueriesRequestFormGroup() {
		return new FormGroup<SearchQueriesRequestFormProperties>({
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

	export interface SearchSearchInformation {

		/** The time taken for the server to return search results, formatted according to locale style. */
		formattedSearchTime?: string | null;

		/** The total number of search results, formatted according to locale style. */
		formattedTotalResults?: string | null;

		/** The time taken for the server to return search results. */
		searchTime?: number | null;

		/** The total number of search results returned by the query. */
		totalResults?: string | null;
	}
	export interface SearchSearchInformationFormProperties {

		/** The time taken for the server to return search results, formatted according to locale style. */
		formattedSearchTime: FormControl<string | null | undefined>,

		/** The total number of search results, formatted according to locale style. */
		formattedTotalResults: FormControl<string | null | undefined>,

		/** The time taken for the server to return search results. */
		searchTime: FormControl<number | null | undefined>,

		/** The total number of search results returned by the query. */
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

		/** The corrected query. */
		correctedQuery?: string | null;

		/** The corrected query, formatted in HTML. */
		htmlCorrectedQuery?: string | null;
	}
	export interface SearchSpellingFormProperties {

		/** The corrected query. */
		correctedQuery: FormControl<string | null | undefined>,

		/** The corrected query, formatted in HTML. */
		htmlCorrectedQuery: FormControl<string | null | undefined>,
	}
	export function CreateSearchSpellingFormGroup() {
		return new FormGroup<SearchSpellingFormProperties>({
			correctedQuery: new FormControl<string | null | undefined>(undefined),
			htmlCorrectedQuery: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchUrl {

		/** The actual [OpenSearch template](http://www.opensearch.org/specifications/opensearch/1.1#opensearch_url_template_syntax) for this API. */
		template?: string | null;

		/** The MIME type of the OpenSearch URL template for the Custom Search JSON API. */
		type?: string | null;
	}
	export interface SearchUrlFormProperties {

		/** The actual [OpenSearch template](http://www.opensearch.org/specifications/opensearch/1.1#opensearch_url_template_syntax) for this API. */
		template: FormControl<string | null | undefined>,

		/** The MIME type of the OpenSearch URL template for the Custom Search JSON API. */
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
		 * Returns metadata about the search performed, metadata about the engine used for the search, and the search results.
		 * Get customsearch/v1
		 * @param {string} c2coff Enables or disables [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch). The default value for this parameter is 0 (zero), meaning that the feature is enabled. Supported values are: * `1`: Disabled * `0`: Enabled (default)
		 * @param {string} cr Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#booleanOperators) in the cr parameter's value. Google Search determines the country of a document by analyzing: * the top-level domain (TLD) of the document's URL * the geographic location of the Web server's IP address See the [Country Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) page for a list of valid values for this parameter.
		 * @param {string} cx The Programmable Search Engine ID to use for this request.
		 * @param {string} dateRestrict Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years.
		 * @param {string} exactTerms Identifies a phrase that all documents in the search results must contain.
		 * @param {string} excludeTerms Identifies a word or phrase that should not appear in any documents in the search results.
		 * @param {string} fileType Restricts results to files of a specified extension. A list of file types indexable by Google can be found in Search Console [Help Center](https://support.google.com/webmasters/answer/35287).
		 * @param {string} filter Controls turning on or off the duplicate content filter. * See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Note that host crowding filtering applies only to multi-site searches. * By default, Google applies filtering to all search results to improve the quality of those results. Acceptable values are: * `0`: Turns off duplicate content filter. * `1`: Turns on duplicate content filter.
		 * @param {string} gl Geolocation of end user. * The `gl` parameter value is a two-letter country code. The `gl` parameter boosts search results whose country of origin matches the parameter value. See the [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) page for a list of valid values. * Specifying a `gl` parameter value should lead to more relevant results. This is particularly true for international customers and, even more specifically, for customers in English- speaking countries other than the United States.
		 * @param {string} googlehost **Deprecated**. Use the `gl` parameter for a similar effect. The local Google domain (for example, google.com, google.de, or google.fr) to use to perform the search.
		 * @param {string} highRange Specifies the ending value for a search range. * Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.
		 * @param {string} hl Sets the user interface language. * Explicitly setting this parameter improves the performance and the quality of your search results. * See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages.
		 * @param {string} hq Appends the specified query terms to the query, as if they were combined with a logical AND operator.
		 * @param {Search_cse_listImgColorType} imgColorType Returns black and white, grayscale, transparent, or color images. Acceptable values are: * `"color"` * `"gray"` * `"mono"`: black and white * `"trans"`: transparent background
		 * @param {Search_cse_listImgDominantColor} imgDominantColor Returns images of a specific dominant color. Acceptable values are: * `"black"` * `"blue"` * `"brown"` * `"gray"` * `"green"` * `"orange"` * `"pink"` * `"purple"` * `"red"` * `"teal"` * `"white"` * `"yellow"`
		 * @param {Search_cse_listImgSize} imgSize Returns images of a specified size. Acceptable values are: * `"huge"` * `"icon"` * `"large"` * `"medium"` * `"small"` * `"xlarge"` * `"xxlarge"`
		 * @param {Search_cse_listImgType} imgType Returns images of a type. Acceptable values are: * `"clipart"` * `"face"` * `"lineart"` * `"stock"` * `"photo"` * `"animated"`
		 * @param {string} linkSite Specifies that all search results should contain a link to a particular URL.
		 * @param {string} lowRange Specifies the starting value for a search range. Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.
		 * @param {string} lr Restricts the search to documents written in a particular language (e.g., `lr=lang_ja`). Acceptable values are: * `"lang_ar"`: Arabic * `"lang_bg"`: Bulgarian * `"lang_ca"`: Catalan * `"lang_cs"`: Czech * `"lang_da"`: Danish * `"lang_de"`: German * `"lang_el"`: Greek * `"lang_en"`: English * `"lang_es"`: Spanish * `"lang_et"`: Estonian * `"lang_fi"`: Finnish * `"lang_fr"`: French * `"lang_hr"`: Croatian * `"lang_hu"`: Hungarian * `"lang_id"`: Indonesian * `"lang_is"`: Icelandic * `"lang_it"`: Italian * `"lang_iw"`: Hebrew * `"lang_ja"`: Japanese * `"lang_ko"`: Korean * `"lang_lt"`: Lithuanian * `"lang_lv"`: Latvian * `"lang_nl"`: Dutch * `"lang_no"`: Norwegian * `"lang_pl"`: Polish * `"lang_pt"`: Portuguese * `"lang_ro"`: Romanian * `"lang_ru"`: Russian * `"lang_sk"`: Slovak * `"lang_sl"`: Slovenian * `"lang_sr"`: Serbian * `"lang_sv"`: Swedish * `"lang_tr"`: Turkish * `"lang_zh-CN"`: Chinese (Simplified) * `"lang_zh-TW"`: Chinese (Traditional)
		 * @param {number} num Number of search results to return. * Valid values are integers between 1 and 10, inclusive.
		 * @param {string} orTerms Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms.
		 * @param {string} q Query
		 * @param {string} relatedSite Deprecated.
		 * @param {string} rights Filters based on licensing. Supported values include: `cc_publicdomain`, `cc_attribute`, `cc_sharealike`, `cc_noncommercial`, `cc_nonderived` and combinations of these. See [typical combinations](https://wiki.creativecommons.org/wiki/CC_Search_integration).
		 * @param {Search_cse_listSafe} safe Search safety level. Acceptable values are: * `"active"`: Enables SafeSearch filtering. * `"off"`: Disables SafeSearch filtering. (default)
		 * @param {Search_cse_listSearchType} searchType Specifies the search type: `image`. If unspecified, results are limited to webpages. Acceptable values are: * `"image"`: custom image search.
		 * @param {string} siteSearch Specifies a given site which should always be included or excluded from results (see `siteSearchFilter` parameter, below).
		 * @param {Search_cse_listSiteSearchFilter} siteSearchFilter Controls whether to include or exclude results from the site named in the `siteSearch` parameter. Acceptable values are: * `"e"`: exclude * `"i"`: include
		 * @param {string} sort The sort expression to apply to the results. The sort parameter specifies that the results be sorted according to the specified expression i.e. sort by date. [Example: sort=date](https://developers.google.com/custom-search/docs/structured_search#sort-by-attribute).
		 * @param {number} start The index of the first result to return. The default number of results per page is 10, so `&start=11` would start at the top of the second page of results. **Note**: The JSON API will never return more than 100 results, even if more than 100 documents match the query, so setting the sum of `start + num` to a number greater than 100 will produce an error. Also note that the maximum value for `num` is 10.
		 * @return {Search} Successful response
		 */
		Search_cse_list(c2coff: string | null | undefined, cr: string | null | undefined, cx: string | null | undefined, dateRestrict: string | null | undefined, exactTerms: string | null | undefined, excludeTerms: string | null | undefined, fileType: string | null | undefined, filter: string | null | undefined, gl: string | null | undefined, googlehost: string | null | undefined, highRange: string | null | undefined, hl: string | null | undefined, hq: string | null | undefined, imgColorType: Search_cse_listImgColorType | null | undefined, imgDominantColor: Search_cse_listImgDominantColor | null | undefined, imgSize: Search_cse_listImgSize | null | undefined, imgType: Search_cse_listImgType | null | undefined, linkSite: string | null | undefined, lowRange: string | null | undefined, lr: string | null | undefined, num: number | null | undefined, orTerms: string | null | undefined, q: string | null | undefined, relatedSite: string | null | undefined, rights: string | null | undefined, safe: Search_cse_listSafe | null | undefined, searchType: Search_cse_listSearchType | null | undefined, siteSearch: string | null | undefined, siteSearchFilter: Search_cse_listSiteSearchFilter | null | undefined, sort: string | null | undefined, start: number | null | undefined): Observable<Search> {
			return this.http.get<Search>(this.baseUri + 'customsearch/v1?c2coff=' + (c2coff == null ? '' : encodeURIComponent(c2coff)) + '&cr=' + (cr == null ? '' : encodeURIComponent(cr)) + '&cx=' + (cx == null ? '' : encodeURIComponent(cx)) + '&dateRestrict=' + (dateRestrict == null ? '' : encodeURIComponent(dateRestrict)) + '&exactTerms=' + (exactTerms == null ? '' : encodeURIComponent(exactTerms)) + '&excludeTerms=' + (excludeTerms == null ? '' : encodeURIComponent(excludeTerms)) + '&fileType=' + (fileType == null ? '' : encodeURIComponent(fileType)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&gl=' + (gl == null ? '' : encodeURIComponent(gl)) + '&googlehost=' + (googlehost == null ? '' : encodeURIComponent(googlehost)) + '&highRange=' + (highRange == null ? '' : encodeURIComponent(highRange)) + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&hq=' + (hq == null ? '' : encodeURIComponent(hq)) + '&imgColorType=' + imgColorType + '&imgDominantColor=' + imgDominantColor + '&imgSize=' + imgSize + '&imgType=' + imgType + '&linkSite=' + (linkSite == null ? '' : encodeURIComponent(linkSite)) + '&lowRange=' + (lowRange == null ? '' : encodeURIComponent(lowRange)) + '&lr=' + (lr == null ? '' : encodeURIComponent(lr)) + '&num=' + num + '&orTerms=' + (orTerms == null ? '' : encodeURIComponent(orTerms)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&relatedSite=' + (relatedSite == null ? '' : encodeURIComponent(relatedSite)) + '&rights=' + (rights == null ? '' : encodeURIComponent(rights)) + '&safe=' + safe + '&searchType=' + searchType + '&siteSearch=' + (siteSearch == null ? '' : encodeURIComponent(siteSearch)) + '&siteSearchFilter=' + siteSearchFilter + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&start=' + start, {});
		}

		/**
		 * Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns.
		 * Get customsearch/v1/siterestrict
		 * @param {string} c2coff Enables or disables [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch). The default value for this parameter is 0 (zero), meaning that the feature is enabled. Supported values are: * `1`: Disabled * `0`: Enabled (default)
		 * @param {string} cr Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#booleanOperators) in the cr parameter's value. Google Search determines the country of a document by analyzing: * the top-level domain (TLD) of the document's URL * the geographic location of the Web server's IP address See the [Country Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) page for a list of valid values for this parameter.
		 * @param {string} cx The Programmable Search Engine ID to use for this request.
		 * @param {string} dateRestrict Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years.
		 * @param {string} exactTerms Identifies a phrase that all documents in the search results must contain.
		 * @param {string} excludeTerms Identifies a word or phrase that should not appear in any documents in the search results.
		 * @param {string} fileType Restricts results to files of a specified extension. A list of file types indexable by Google can be found in Search Console [Help Center](https://support.google.com/webmasters/answer/35287).
		 * @param {string} filter Controls turning on or off the duplicate content filter. * See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Note that host crowding filtering applies only to multi-site searches. * By default, Google applies filtering to all search results to improve the quality of those results. Acceptable values are: * `0`: Turns off duplicate content filter. * `1`: Turns on duplicate content filter.
		 * @param {string} gl Geolocation of end user. * The `gl` parameter value is a two-letter country code. The `gl` parameter boosts search results whose country of origin matches the parameter value. See the [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) page for a list of valid values. * Specifying a `gl` parameter value should lead to more relevant results. This is particularly true for international customers and, even more specifically, for customers in English- speaking countries other than the United States.
		 * @param {string} googlehost **Deprecated**. Use the `gl` parameter for a similar effect. The local Google domain (for example, google.com, google.de, or google.fr) to use to perform the search.
		 * @param {string} highRange Specifies the ending value for a search range. * Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.
		 * @param {string} hl Sets the user interface language. * Explicitly setting this parameter improves the performance and the quality of your search results. * See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages.
		 * @param {string} hq Appends the specified query terms to the query, as if they were combined with a logical AND operator.
		 * @param {Search_cse_listImgColorType} imgColorType Returns black and white, grayscale, transparent, or color images. Acceptable values are: * `"color"` * `"gray"` * `"mono"`: black and white * `"trans"`: transparent background
		 * @param {Search_cse_listImgDominantColor} imgDominantColor Returns images of a specific dominant color. Acceptable values are: * `"black"` * `"blue"` * `"brown"` * `"gray"` * `"green"` * `"orange"` * `"pink"` * `"purple"` * `"red"` * `"teal"` * `"white"` * `"yellow"`
		 * @param {Search_cse_listImgSize} imgSize Returns images of a specified size. Acceptable values are: * `"huge"` * `"icon"` * `"large"` * `"medium"` * `"small"` * `"xlarge"` * `"xxlarge"`
		 * @param {Search_cse_listImgType} imgType Returns images of a type. Acceptable values are: * `"clipart"` * `"face"` * `"lineart"` * `"stock"` * `"photo"` * `"animated"`
		 * @param {string} linkSite Specifies that all search results should contain a link to a particular URL.
		 * @param {string} lowRange Specifies the starting value for a search range. Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.
		 * @param {string} lr Restricts the search to documents written in a particular language (e.g., `lr=lang_ja`). Acceptable values are: * `"lang_ar"`: Arabic * `"lang_bg"`: Bulgarian * `"lang_ca"`: Catalan * `"lang_cs"`: Czech * `"lang_da"`: Danish * `"lang_de"`: German * `"lang_el"`: Greek * `"lang_en"`: English * `"lang_es"`: Spanish * `"lang_et"`: Estonian * `"lang_fi"`: Finnish * `"lang_fr"`: French * `"lang_hr"`: Croatian * `"lang_hu"`: Hungarian * `"lang_id"`: Indonesian * `"lang_is"`: Icelandic * `"lang_it"`: Italian * `"lang_iw"`: Hebrew * `"lang_ja"`: Japanese * `"lang_ko"`: Korean * `"lang_lt"`: Lithuanian * `"lang_lv"`: Latvian * `"lang_nl"`: Dutch * `"lang_no"`: Norwegian * `"lang_pl"`: Polish * `"lang_pt"`: Portuguese * `"lang_ro"`: Romanian * `"lang_ru"`: Russian * `"lang_sk"`: Slovak * `"lang_sl"`: Slovenian * `"lang_sr"`: Serbian * `"lang_sv"`: Swedish * `"lang_tr"`: Turkish * `"lang_zh-CN"`: Chinese (Simplified) * `"lang_zh-TW"`: Chinese (Traditional)
		 * @param {number} num Number of search results to return. * Valid values are integers between 1 and 10, inclusive.
		 * @param {string} orTerms Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms.
		 * @param {string} q Query
		 * @param {string} relatedSite Deprecated.
		 * @param {string} rights Filters based on licensing. Supported values include: `cc_publicdomain`, `cc_attribute`, `cc_sharealike`, `cc_noncommercial`, `cc_nonderived` and combinations of these. See [typical combinations](https://wiki.creativecommons.org/wiki/CC_Search_integration).
		 * @param {Search_cse_listSafe} safe Search safety level. Acceptable values are: * `"active"`: Enables SafeSearch filtering. * `"off"`: Disables SafeSearch filtering. (default)
		 * @param {Search_cse_listSearchType} searchType Specifies the search type: `image`. If unspecified, results are limited to webpages. Acceptable values are: * `"image"`: custom image search.
		 * @param {string} siteSearch Specifies a given site which should always be included or excluded from results (see `siteSearchFilter` parameter, below).
		 * @param {Search_cse_listSiteSearchFilter} siteSearchFilter Controls whether to include or exclude results from the site named in the `siteSearch` parameter. Acceptable values are: * `"e"`: exclude * `"i"`: include
		 * @param {string} sort The sort expression to apply to the results. The sort parameter specifies that the results be sorted according to the specified expression i.e. sort by date. [Example: sort=date](https://developers.google.com/custom-search/docs/structured_search#sort-by-attribute).
		 * @param {number} start The index of the first result to return. The default number of results per page is 10, so `&start=11` would start at the top of the second page of results. **Note**: The JSON API will never return more than 100 results, even if more than 100 documents match the query, so setting the sum of `start + num` to a number greater than 100 will produce an error. Also note that the maximum value for `num` is 10.
		 * @return {Search} Successful response
		 */
		Search_cse_siterestrict_list(c2coff: string | null | undefined, cr: string | null | undefined, cx: string | null | undefined, dateRestrict: string | null | undefined, exactTerms: string | null | undefined, excludeTerms: string | null | undefined, fileType: string | null | undefined, filter: string | null | undefined, gl: string | null | undefined, googlehost: string | null | undefined, highRange: string | null | undefined, hl: string | null | undefined, hq: string | null | undefined, imgColorType: Search_cse_listImgColorType | null | undefined, imgDominantColor: Search_cse_listImgDominantColor | null | undefined, imgSize: Search_cse_listImgSize | null | undefined, imgType: Search_cse_listImgType | null | undefined, linkSite: string | null | undefined, lowRange: string | null | undefined, lr: string | null | undefined, num: number | null | undefined, orTerms: string | null | undefined, q: string | null | undefined, relatedSite: string | null | undefined, rights: string | null | undefined, safe: Search_cse_listSafe | null | undefined, searchType: Search_cse_listSearchType | null | undefined, siteSearch: string | null | undefined, siteSearchFilter: Search_cse_listSiteSearchFilter | null | undefined, sort: string | null | undefined, start: number | null | undefined): Observable<Search> {
			return this.http.get<Search>(this.baseUri + 'customsearch/v1/siterestrict?c2coff=' + (c2coff == null ? '' : encodeURIComponent(c2coff)) + '&cr=' + (cr == null ? '' : encodeURIComponent(cr)) + '&cx=' + (cx == null ? '' : encodeURIComponent(cx)) + '&dateRestrict=' + (dateRestrict == null ? '' : encodeURIComponent(dateRestrict)) + '&exactTerms=' + (exactTerms == null ? '' : encodeURIComponent(exactTerms)) + '&excludeTerms=' + (excludeTerms == null ? '' : encodeURIComponent(excludeTerms)) + '&fileType=' + (fileType == null ? '' : encodeURIComponent(fileType)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&gl=' + (gl == null ? '' : encodeURIComponent(gl)) + '&googlehost=' + (googlehost == null ? '' : encodeURIComponent(googlehost)) + '&highRange=' + (highRange == null ? '' : encodeURIComponent(highRange)) + '&hl=' + (hl == null ? '' : encodeURIComponent(hl)) + '&hq=' + (hq == null ? '' : encodeURIComponent(hq)) + '&imgColorType=' + imgColorType + '&imgDominantColor=' + imgDominantColor + '&imgSize=' + imgSize + '&imgType=' + imgType + '&linkSite=' + (linkSite == null ? '' : encodeURIComponent(linkSite)) + '&lowRange=' + (lowRange == null ? '' : encodeURIComponent(lowRange)) + '&lr=' + (lr == null ? '' : encodeURIComponent(lr)) + '&num=' + num + '&orTerms=' + (orTerms == null ? '' : encodeURIComponent(orTerms)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&relatedSite=' + (relatedSite == null ? '' : encodeURIComponent(relatedSite)) + '&rights=' + (rights == null ? '' : encodeURIComponent(rights)) + '&safe=' + safe + '&searchType=' + searchType + '&siteSearch=' + (siteSearch == null ? '' : encodeURIComponent(siteSearch)) + '&siteSearchFilter=' + siteSearchFilter + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&start=' + start, {});
		}
	}

	export enum Search_cse_listImgColorType { imgColorTypeUndefined = 'imgColorTypeUndefined', mono = 'mono', gray = 'gray', color = 'color', trans = 'trans' }

	export enum Search_cse_listImgDominantColor { imgDominantColorUndefined = 'imgDominantColorUndefined', black = 'black', blue = 'blue', brown = 'brown', gray = 'gray', green = 'green', orange = 'orange', pink = 'pink', purple = 'purple', red = 'red', teal = 'teal', white = 'white', yellow = 'yellow' }

	export enum Search_cse_listImgSize { imgSizeUndefined = 'imgSizeUndefined', HUGE = 'HUGE', ICON = 'ICON', LARGE = 'LARGE', MEDIUM = 'MEDIUM', SMALL = 'SMALL', XLARGE = 'XLARGE', XXLARGE = 'XXLARGE' }

	export enum Search_cse_listImgType { imgTypeUndefined = 'imgTypeUndefined', clipart = 'clipart', face = 'face', lineart = 'lineart', stock = 'stock', photo = 'photo', animated = 'animated' }

	export enum Search_cse_listSafe { safeUndefined = 'safeUndefined', active = 'active', high = 'high', medium = 'medium', off = 'off' }

	export enum Search_cse_listSearchType { searchTypeUndefined = 'searchTypeUndefined', image = 'image' }

	export enum Search_cse_listSiteSearchFilter { siteSearchFilterUndefined = 'siteSearchFilterUndefined', e = 'e', i = 'i' }

}

