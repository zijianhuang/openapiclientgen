import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Specify _Next link_ paginator on pages containing a link pointing to the next page. The next page link is extracted from a document by querying href attribute of a given element's CSS selector. */
	export interface Paginator {
		nextPageSelector?: string | null;
		pageNum?: number | null;
	}

	/** Specify _Next link_ paginator on pages containing a link pointing to the next page. The next page link is extracted from a document by querying href attribute of a given element's CSS selector. */
	export interface PaginatorFormProperties {
		nextPageSelector: FormControl<string | null | undefined>,
		pageNum: FormControl<number | null | undefined>,
	}
	export function CreatePaginatorFormGroup() {
		return new FormGroup<PaginatorFormProperties>({
			nextPageSelector: new FormControl<string | null | undefined>(undefined),
			pageNum: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Action {
	}
	export interface ActionFormProperties {
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
		});

	}

	export interface Fetchrequest {

		/** Use actions to automate manual workflows while rendering web pages. They simulate real-world human interaction with pages. _(Chrome fetcher type only)_ */
		actions?: Array<Action>;

		/** The HTTP 200 OK success status response code indicates that the request has succeeded. Sometimes a server returns normal HTML content even with an erroneous Non-200 HTTP response status code. The IgnoreHTTPStatusCode option is useful when you need to force the return of HTML content. Defaults to "false." */
		ignoreHTTPStatusErrCodes?: boolean | null;

		/** The "Initial Cookies" option is useful for crawling websites that require a login. The simplest solution to get an array of cookies for specific websites is to use a web browser "EditThisCookie" extension. Copy a cookie array with "EditThisCookie" and paste it into the "Initial cookie" field. */
		initialCookies?: Array<InitialCookie>;

		/** If set to _file_, the content of downloaded HTML is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, downloaded content is returned in the response body. */
		output?: FetchrequestOutput | null;

		/** Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets. */
		proxy?: string | null;

		/**
		 * If set to `base`, the Base fetcher is used for downloading web page content. Use `chrome` for fetching content with a Headless chrome browser. If omitted `base` fetcher is used by default.
		 * Required
		 */
		type: FetchrequestType;

		/**
		 * Specify URL to download.
		 * Required
		 */
		url: string;

		/** Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load. _(Chrome fetcher type only)_ */
		waitDelay?: number | null;
	}
	export interface FetchrequestFormProperties {

		/** The HTTP 200 OK success status response code indicates that the request has succeeded. Sometimes a server returns normal HTML content even with an erroneous Non-200 HTTP response status code. The IgnoreHTTPStatusCode option is useful when you need to force the return of HTML content. Defaults to "false." */
		ignoreHTTPStatusErrCodes: FormControl<boolean | null | undefined>,

		/** If set to _file_, the content of downloaded HTML is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, downloaded content is returned in the response body. */
		output: FormControl<FetchrequestOutput | null | undefined>,

		/** Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets. */
		proxy: FormControl<string | null | undefined>,

		/**
		 * If set to `base`, the Base fetcher is used for downloading web page content. Use `chrome` for fetching content with a Headless chrome browser. If omitted `base` fetcher is used by default.
		 * Required
		 */
		type: FormControl<FetchrequestType | null | undefined>,

		/**
		 * Specify URL to download.
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/** Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load. _(Chrome fetcher type only)_ */
		waitDelay: FormControl<number | null | undefined>,
	}
	export function CreateFetchrequestFormGroup() {
		return new FormGroup<FetchrequestFormProperties>({
			ignoreHTTPStatusErrCodes: new FormControl<boolean | null | undefined>(undefined),
			output: new FormControl<FetchrequestOutput | null | undefined>(undefined),
			proxy: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FetchrequestType | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			waitDelay: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** InitialCookie structure keep cookies that optionally can be passed to the new fetcher crawl a website that requires a login. Generate Cookies array with EditThisCookie chrome extension. */
	export interface InitialCookie {
		domain?: string | null;
		expirationDate?: number | null;
		hostOnly?: boolean | null;
		httpOnly?: boolean | null;
		id?: number | null;
		name?: string | null;
		path?: string | null;
		sameSite?: InitialCookieSameSite | null;
		secure?: boolean | null;
		session?: boolean | null;
		storeID?: string | null;
		value?: string | null;
	}

	/** InitialCookie structure keep cookies that optionally can be passed to the new fetcher crawl a website that requires a login. Generate Cookies array with EditThisCookie chrome extension. */
	export interface InitialCookieFormProperties {
		domain: FormControl<string | null | undefined>,
		expirationDate: FormControl<number | null | undefined>,
		hostOnly: FormControl<boolean | null | undefined>,
		httpOnly: FormControl<boolean | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
		sameSite: FormControl<InitialCookieSameSite | null | undefined>,
		secure: FormControl<boolean | null | undefined>,
		session: FormControl<boolean | null | undefined>,
		storeID: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateInitialCookieFormGroup() {
		return new FormGroup<InitialCookieFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
			expirationDate: new FormControl<number | null | undefined>(undefined),
			hostOnly: new FormControl<boolean | null | undefined>(undefined),
			httpOnly: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			sameSite: new FormControl<InitialCookieSameSite | null | undefined>(undefined),
			secure: new FormControl<boolean | null | undefined>(undefined),
			session: new FormControl<boolean | null | undefined>(undefined),
			storeID: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InitialCookieSameSite { unspecified = 'unspecified', strict = 'strict', lax = 'lax', no_restriction = 'no_restriction' }

	export enum FetchrequestOutput { buffer = 'buffer', file = 'file' }

	export enum FetchrequestType { base = 'base', chrome = 'chrome' }

	export interface Field {

		/**
		 * A set of attributes to extract from a Field. Find more information about attributes
		 * Required
		 */
		attrs: Array<string>;

		/** Details themself represent independent Parse request that extracts data from linked pages. */
		details?: Parserequest;

		/** Filters are used to pre-processing of text data when extracting. */
		filters?: Array<string>;

		/**
		 * Field name is used to aggregate results.
		 * Required
		 */
		name: string;

		/**
		 * Selector represents a CSS selector for data extraction within the given block.
		 * Required
		 */
		selector: string;

		/**
		 * Selector type. ( 0 - image, 1 - text, 2 - link)
		 * Required
		 */
		type: FieldType;
	}
	export interface FieldFormProperties {

		/**
		 * Field name is used to aggregate results.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Selector represents a CSS selector for data extraction within the given block.
		 * Required
		 */
		selector: FormControl<string | null | undefined>,

		/**
		 * Selector type. ( 0 - image, 1 - text, 2 - link)
		 * Required
		 */
		type: FormControl<FieldType | null | undefined>,
	}
	export function CreateFieldFormGroup() {
		return new FormGroup<FieldFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			selector: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<FieldType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Parserequest {

		/** Specifies common ancestor block for a set of fields used to extract data from a web page. _(CSS Selector)_ */
		commonParent?: string | null;

		/**
		 * Define a  set of fields used to extract data from a web page. A Field represents a given chunk of extracted data from every block on each page.
		 * Required
		 */
		fields: Array<Field>;

		/**
		 * Extracted data is returned either in CSV, MS Excel, JSON, JSON(Lines) or XML format.
		 * Required
		 */
		format: ParserequestFormat;

		/**
		 * Collection name.
		 * Required
		 */
		name: string;

		/** Specify _Next link_ paginator on pages containing a link pointing to the next page. The next page link is extracted from a document by querying href attribute of a given element's CSS selector. */
		paginator?: Paginator;

		/** Path is a special parameter specifying navigation pages only. It collects information from detailed pages. No results from the current page return. Defaults to false. */
		path?: boolean | null;
		request?: Fetchrequest;
	}
	export interface ParserequestFormProperties {

		/** Specifies common ancestor block for a set of fields used to extract data from a web page. _(CSS Selector)_ */
		commonParent: FormControl<string | null | undefined>,

		/**
		 * Extracted data is returned either in CSV, MS Excel, JSON, JSON(Lines) or XML format.
		 * Required
		 */
		format: FormControl<ParserequestFormat | null | undefined>,

		/**
		 * Collection name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Path is a special parameter specifying navigation pages only. It collects information from detailed pages. No results from the current page return. Defaults to false. */
		path: FormControl<boolean | null | undefined>,
	}
	export function CreateParserequestFormGroup() {
		return new FormGroup<ParserequestFormProperties>({
			commonParent: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<ParserequestFormat | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ParserequestFormat { csv = 'csv', json = 'json', jsonl = 'jsonl', excel = 'excel', xml = 'xml' }

	export enum FieldType { _0 = 0, _1 = 1, _2 = 2 }

	export interface Serprequest {

		/**
		 * Specify CSS selectors (patterns) used to gather data from Search Engine Result Pages.
		 * Ready-to-use payloads for collecting search results from the most popular Search Engines are available. These payloads are customizable, though.
		 */
		fields?: Array<Field>;

		/**
		 * Extracted data is returned either in CSV, MS Excel, JSON, JSON(Lines) or XML format.
		 * Required
		 */
		format: ParserequestFormat;

		/**
		 * Collection name.
		 * Required
		 */
		name: string;

		/** Specify number of pages to crawl. */
		pageNum?: number | null;

		/**
		 * Always specify proxy for sending SERP requests. Add choosen [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.
		 * Required
		 */
		proxy: string;

		/**
		 * For SERP requests you should _always_ use `chrome` type to fetch content with a Headless chrome browser
		 * Required
		 */
		type: string;

		/**
		 * url holds the link to a Search Engine to use, and other optional parameters like languages or country.
		 * Required
		 */
		url: string;
	}
	export interface SerprequestFormProperties {

		/**
		 * Extracted data is returned either in CSV, MS Excel, JSON, JSON(Lines) or XML format.
		 * Required
		 */
		format: FormControl<ParserequestFormat | null | undefined>,

		/**
		 * Collection name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Specify number of pages to crawl. */
		pageNum: FormControl<number | null | undefined>,

		/**
		 * Always specify proxy for sending SERP requests. Add choosen [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.
		 * Required
		 */
		proxy: FormControl<string | null | undefined>,

		/**
		 * For SERP requests you should _always_ use `chrome` type to fetch content with a Headless chrome browser
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * url holds the link to a Search Engine to use, and other optional parameters like languages or country.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSerprequestFormGroup() {
		return new FormGroup<SerprequestFormProperties>({
			format: new FormControl<ParserequestFormat | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pageNum: new FormControl<number | null | undefined>(undefined),
			proxy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Url2pdfrequest {

		/** Use actions to automate manual workflows while rendering web pages. They simulate real-world human interaction with pages. */
		actions?: Array<Action>;

		/** The HTTP 200 OK success status response code indicates that the request has succeeded. Sometimes a server returns normal HTML content even with an erroneous Non-200 HTTP response status code. The IgnoreHTTPStatusCode option is useful when you need to force the return of HTML content. Defaults to "false." */
		ignoreHTTPStatusErrCodes?: boolean | null;

		/** The "Initial Cookies" option is useful for crawling websites that require a login. The simplest solution to get an array of cookies for specific websites is to use a web browser "EditThisCookie" extension. Copy a cookie array with "EditThisCookie" and paste it into the "Initial cookie" field. */
		initialCookies?: Array<InitialCookie>;

		/** Paper orientation. Parameter landscape = false means portrait orientation. Set landscape to true for landscape page oriantation. */
		landscape?: boolean | null;

		/** Bottom Margin of the PDF (in inches) */
		marginBottom?: number | null;

		/** Left Margin of the PDF (in inches) */
		marginLeft?: number | null;

		/** Right Margin of the PDF (in inches) */
		marginRight?: number | null;

		/** Top Margin of the PDF (in inches) */
		marginTop?: number | null;

		/** If set to _file_, the resulted PDF is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, PDF content is returned in the response body. */
		output?: FetchrequestOutput | null;

		/** Specify page ranges to convert. Defaults to the empty value, which means convert all pages. */
		pageRanges?: string | null;

		/** Page size parameter consists of the most popular page formats. */
		paperSize?: Url2pdfrequestPaperSize | null;

		/** Print background graphics in the PDF. */
		printBackground?: boolean | null;

		/** printHeaderFooter  parameter consists of the date, name of the web page, the page URL, and how many pages the document you are printing. */
		printHeaderFooter?: boolean | null;

		/** Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets. */
		proxy?: string | null;

		/** By default, PDF document content is generated according to dimensions of the original web page content. Using the `scale` parameter, you can specify a custom zoom factor from 0.1 to 5.0 of the webpage rendering. */
		scale?: number | null;

		/**
		 * The full URL address (including HTTP/HTTPS) of a web page that you want to save as PDF
		 * Required
		 */
		url: string;

		/** Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load. */
		waitDelay?: number | null;
	}
	export interface Url2pdfrequestFormProperties {

		/** The HTTP 200 OK success status response code indicates that the request has succeeded. Sometimes a server returns normal HTML content even with an erroneous Non-200 HTTP response status code. The IgnoreHTTPStatusCode option is useful when you need to force the return of HTML content. Defaults to "false." */
		ignoreHTTPStatusErrCodes: FormControl<boolean | null | undefined>,

		/** Paper orientation. Parameter landscape = false means portrait orientation. Set landscape to true for landscape page oriantation. */
		landscape: FormControl<boolean | null | undefined>,

		/** Bottom Margin of the PDF (in inches) */
		marginBottom: FormControl<number | null | undefined>,

		/** Left Margin of the PDF (in inches) */
		marginLeft: FormControl<number | null | undefined>,

		/** Right Margin of the PDF (in inches) */
		marginRight: FormControl<number | null | undefined>,

		/** Top Margin of the PDF (in inches) */
		marginTop: FormControl<number | null | undefined>,

		/** If set to _file_, the resulted PDF is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, PDF content is returned in the response body. */
		output: FormControl<FetchrequestOutput | null | undefined>,

		/** Specify page ranges to convert. Defaults to the empty value, which means convert all pages. */
		pageRanges: FormControl<string | null | undefined>,

		/** Page size parameter consists of the most popular page formats. */
		paperSize: FormControl<Url2pdfrequestPaperSize | null | undefined>,

		/** Print background graphics in the PDF. */
		printBackground: FormControl<boolean | null | undefined>,

		/** printHeaderFooter  parameter consists of the date, name of the web page, the page URL, and how many pages the document you are printing. */
		printHeaderFooter: FormControl<boolean | null | undefined>,

		/** Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets. */
		proxy: FormControl<string | null | undefined>,

		/** By default, PDF document content is generated according to dimensions of the original web page content. Using the `scale` parameter, you can specify a custom zoom factor from 0.1 to 5.0 of the webpage rendering. */
		scale: FormControl<number | null | undefined>,

		/**
		 * The full URL address (including HTTP/HTTPS) of a web page that you want to save as PDF
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/** Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load. */
		waitDelay: FormControl<number | null | undefined>,
	}
	export function CreateUrl2pdfrequestFormGroup() {
		return new FormGroup<Url2pdfrequestFormProperties>({
			ignoreHTTPStatusErrCodes: new FormControl<boolean | null | undefined>(undefined),
			landscape: new FormControl<boolean | null | undefined>(undefined),
			marginBottom: new FormControl<number | null | undefined>(undefined),
			marginLeft: new FormControl<number | null | undefined>(undefined),
			marginRight: new FormControl<number | null | undefined>(undefined),
			marginTop: new FormControl<number | null | undefined>(undefined),
			output: new FormControl<FetchrequestOutput | null | undefined>(undefined),
			pageRanges: new FormControl<string | null | undefined>(undefined),
			paperSize: new FormControl<Url2pdfrequestPaperSize | null | undefined>(undefined),
			printBackground: new FormControl<boolean | null | undefined>(undefined),
			printHeaderFooter: new FormControl<boolean | null | undefined>(undefined),
			proxy: new FormControl<string | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			waitDelay: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Url2pdfrequestPaperSize { A3 = 'A3', A4 = 'A4', A5 = 'A5', A6 = 'A6', Letter = 'Letter', Legal = 'Legal', Tabloid = 'Tabloid' }

	export interface Url2screenshotrequest {

		/** Use actions to automate manual workflows while rendering web pages. They simulate real-world human interaction with pages. */
		actions?: Array<Action>;

		/** Captures a screenshot of specified CSS element on a web page. */
		clipSelector?: string | null;

		/** Sets the Format of output image */
		format?: Url2screenshotrequestFormat | null;

		/** takes a screenshot of a full web page. It ignores offsetX, offsety, width and height argument values. */
		fullPage?: boolean | null;

		/** Rectangle height in device independent pixels (dip). */
		height?: number | null;

		/** The HTTP 200 OK success status response code indicates that the request has succeeded. Sometimes a server returns normal HTML content even with an erroneous Non-200 HTTP response status code. The IgnoreHTTPStatusCode option is useful when you need to force the return of HTML content. Defaults to "false." */
		ignoreHTTPStatusErrCodes?: boolean | null;

		/** The "Initial Cookies" option is useful for crawling websites that require a login. The simplest solution to get an array of cookies for specific websites is to use a web browser "EditThisCookie" extension. Copy a cookie array with "EditThisCookie" and paste it into the "Initial cookie" field. */
		initialCookies?: Array<InitialCookie>;

		/** X offset in device independent pixels (dip). */
		offsetx?: number | null;

		/** Y offset in device independent pixels (dip). */
		offsety?: number | null;

		/** If set to _file_, the resulted screenshot is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, web site screenshot is returned in the response body. */
		output?: FetchrequestOutput | null;

		/** Print background graphics in the PDF. */
		printBackground?: boolean | null;

		/** Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets. */
		proxy?: string | null;

		/** Sets the Quality of output image. Compression quality from range [0..100] (jpeg only). */
		quality?: number | null;

		/** Image scale factor. range [0.1 .. 3] */
		scale?: number | null;

		/**
		 * The full URL address (including HTTP/HTTPS) of a web page that you want to capture
		 * Required
		 */
		url: string;

		/** Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load. */
		waitDelay?: number | null;

		/** Rectangle width in device independent pixels (dip). */
		width?: number | null;
	}
	export interface Url2screenshotrequestFormProperties {

		/** Captures a screenshot of specified CSS element on a web page. */
		clipSelector: FormControl<string | null | undefined>,

		/** Sets the Format of output image */
		format: FormControl<Url2screenshotrequestFormat | null | undefined>,

		/** takes a screenshot of a full web page. It ignores offsetX, offsety, width and height argument values. */
		fullPage: FormControl<boolean | null | undefined>,

		/** Rectangle height in device independent pixels (dip). */
		height: FormControl<number | null | undefined>,

		/** The HTTP 200 OK success status response code indicates that the request has succeeded. Sometimes a server returns normal HTML content even with an erroneous Non-200 HTTP response status code. The IgnoreHTTPStatusCode option is useful when you need to force the return of HTML content. Defaults to "false." */
		ignoreHTTPStatusErrCodes: FormControl<boolean | null | undefined>,

		/** X offset in device independent pixels (dip). */
		offsetx: FormControl<number | null | undefined>,

		/** Y offset in device independent pixels (dip). */
		offsety: FormControl<number | null | undefined>,

		/** If set to _file_, the resulted screenshot is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, web site screenshot is returned in the response body. */
		output: FormControl<FetchrequestOutput | null | undefined>,

		/** Print background graphics in the PDF. */
		printBackground: FormControl<boolean | null | undefined>,

		/** Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets. */
		proxy: FormControl<string | null | undefined>,

		/** Sets the Quality of output image. Compression quality from range [0..100] (jpeg only). */
		quality: FormControl<number | null | undefined>,

		/** Image scale factor. range [0.1 .. 3] */
		scale: FormControl<number | null | undefined>,

		/**
		 * The full URL address (including HTTP/HTTPS) of a web page that you want to capture
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/** Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load. */
		waitDelay: FormControl<number | null | undefined>,

		/** Rectangle width in device independent pixels (dip). */
		width: FormControl<number | null | undefined>,
	}
	export function CreateUrl2screenshotrequestFormGroup() {
		return new FormGroup<Url2screenshotrequestFormProperties>({
			clipSelector: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<Url2screenshotrequestFormat | null | undefined>(undefined),
			fullPage: new FormControl<boolean | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			ignoreHTTPStatusErrCodes: new FormControl<boolean | null | undefined>(undefined),
			offsetx: new FormControl<number | null | undefined>(undefined),
			offsety: new FormControl<number | null | undefined>(undefined),
			output: new FormControl<FetchrequestOutput | null | undefined>(undefined),
			printBackground: new FormControl<boolean | null | undefined>(undefined),
			proxy: new FormControl<string | null | undefined>(undefined),
			quality: new FormControl<number | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			waitDelay: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Url2screenshotrequestFormat { png = 'png', jpeg = 'jpeg' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Save web page as PDF
		 * Automate URL to PDF Conversion right in your application.
		 * Specify request parameters like URL, Proxy, and actions to render web pages to PDF using Headless Chrome.
		 * Get resulted PDF even from websites blocked in your area for some reason utilizing our worldwide pool of proxies.
		 * Simulate real-world human interaction with the page. For example, before saving a web page to PDF, you may need to scroll it.
		 * Generate ready-to-run code for your favorite language at [https://dataflowkit.com/url-to-pdf](https://dataflowkit.com/url-to-pdf)
		 * Post convert/url/pdf
		 * @return {void} A PDF file.
		 */
		Url_to_pdf(requestBody: Url2pdfrequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'convert/url/pdf', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Capture web page Screenshots.
		 * Automate URL to Screenshot Conversion right in your application.
		 * Specify request parameters like URL, Proxy, and actions to convert web pages to screenshots using Headless Chrome.
		 * Get resulted pictures in JPG or PNG formats even from websites blocked in your area for some reason utilizing our worldwide pool of proxies.
		 * Simulate real-world human interaction with the page. For example, before capturing a web page, you may need to scroll it.
		 * Generate ready-to-run code for your favorite language at [https://dataflowkit.com/url-to-screenshot](https://dataflowkit.com/url-to-screenshot)
		 * Post convert/url/screenshot
		 * @return {void} Returns jpg or png file.
		 */
		Url_to_screenshot(requestBody: Url2screenshotrequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'convert/url/screenshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Download web page content
		 * Use fetch endpoint to download web pages.
		 * Post fetch
		 * @param {Fetchrequest} requestBody - _Base fetcher type_ is the right choice for fetching server-side rendered pages. It takes fewer resources and works faster than rendering HTML with _Chrome fetcher_
		 * - But for rendering Angular, React, and Vue.js web sites, you should always specify _Chrome fetcher type_. In this case, headless chrome fetcher renders dynamic Javascript content in the same way as real web browsers would do it.
		 * Generate ready-to-run code for your favorite language at [https://dataflowkit.com/render-web](https://dataflowkit.com/render-web)
		 * @return {void} Returns utf8 encoded web page content.
		 */
		Fetch(requestBody: Fetchrequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'fetch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Extract structured data from web pages
		 * Dataflow kit uses CSS selectors to find HTML elements in web pages for later data extraction.
		 * Open [visual point-and-click toolkit](https://dataflowkit.com/dfk) and click desired elements on a page to specify extracting data.
		 * Then you can send generated payload to `/parse` endpoint. We crawl web pages and extract data like text, links, or images for you following the specified rules.
		 * Extracted data is returned in CSV, MS Excel, JSON, JSON(Lines) or XML format.
		 * Post parse
		 * @param {Parserequest} requestBody ### Field types and attributes
		 *   
		 * - **Text**. Extract human-readable text from the selected element and all its child elements. HTML tags are stripped, and only text returned.
		 *     
		 * - **Link**. Capture link `href` attribute and link text. Or specify a special _Path_ option for website navigation. When Path option is true, all other selectors ignored, and no results from the current page returned.
		 *     
		 * - **Image**. Image type extracts `src` (URL) and `alt` attributes of an image
		 * ***
		 * ### Filters
		 * Filters are used to manipulate text data when extracting.
		 * Here is the list of available filters
		 * - **Trim** removes leading and trailing white spaces from the _field text or attribute_
		 * - **Normal** leaves the case and capitalization of text/ attribute exactly as is.
		 * - **UPPERCASE** makes all of the letters in the Field's text/ attribute uppercase.
		 * - **lowercase** makes all of the letters in the Field's text/ attribute lowercase.
		 * - **Capitalize** capitalizes the first letter of each word in the Field's text/ attribute
		 * - **Concatinate** joins text array element into a single string
		 * ***
		 * ### Regular Expressions
		 * For more advanced text formatting regular expression can be used. Some useful examples are listed below
		 * | Input text | Regex | Result |
		 * | ---------- | ----- | ------ |
		 * | price- 10.99€ | <code>[0-9]+\.[0-9]+</code> | 10.99 |
		 * | phone- 0 (944) 244-18-22 | <code>\w+</code> | 09442441822 |
		 * ***
		 * ### Details. Chaining.
		 * The Link field type serves as a navigation link to a details page containing more data.
		 * A special _Path_ option is used for navigation only. When the Path option specified, no results from the current page returned. But grouped results from details pages will be pulled instead. You can use chaining functionality of Dataflow Kit scraper to retrieve all the detail page data at the same time.
		 * @return {string} Returns data in the one of the follwing formats - JSON, JSON Lines, CSV, MS Excel, XML
		 */
		Parse(requestBody: Parserequest): Observable<string> {
			return this.http.post(this.baseUri + 'parse', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Collect search results from search engines
		 * To crawl search engine result pages, you can use `/serp` endpoint. SERP collection service extracts a list of organic results, news, images, and more.  Specify configuration parameters, such as country or languages, to customize output SERP data.
		 * The following search engines are supported
		 * - google
		 * - google-image
		 * - google-news
		 * - google-shopping
		 * - bing
		 * - duckduckgo
		 * - baidu
		 * - yandex
		 * Generate ready-to-run code for your favorite language at [https://dataflowkit.com/serp](https://dataflowkit.com/serp)
		 * Post serp
		 * @param {Serprequest} requestBody <h2>Search parameters</h2>
		 * > In most cases, you don't need to customize parameters by hand. Use <a href="https://dataflowkit.com/serp" target="_blank">SERP extraction Code generator</a>. It is the easiest way to generate a payload for launching in the Dataflow kit cloud.
		 * <h3>URL GET parameters</h3>
		 * ||||
		 * |-|-|-|
		 * |q| Parameter defines encoded search term. You can use anything that you would use in a regular Search engines search. (e.g. for Google, <ul> <li><code>link:dataflowkit.com</code>,</li> <li><code>site:twitter.com Bratislava</code>,</li><li><code>inurl:view/view.shtml</code>, etc.)</li></ul> See The Complete List of 42 Advanced <a href="https://ahrefs.com/blog/google-advanced-search-operators/" target="_blank">Google Search Operators</a>|<ul> <li><code>q</code> parameter is used by google, Bing, DuckDuckGo.</li><li> <code>text</code> is used as query holder by Yandex SE.</li><li> Chineese Baidu uses <code>wd</code> for this purpose.</li></ul>|
		 * |tbm| <code>tbm</code> is a special Google parameter used to differentiate between search types|  <ul> <li><code>tbm=isch</code> - Google Images,</li> <li> <code>tbm=nws</code> - Google News</li> <li><code>tbm=shop</code> - Google Shopping</li> </ul>|
		 * |lr|Restricts the search to documents written in a particular languages.|<ul><li>Google uses <code>lang_{two-letter lang code}</code> to specify languages and <code>&#124;</code> as a delimiter. (e.g., <code>lang_sk&#124;lang_de</code> will only search Slovak and German pages). See the <a href="https://developers.google.com/custom-search/v1/cse/list">full list</a> of possible values for Google. </li><li>For Bing specify <code>setLang=en</code> parameter.</li><li> In Yandex use <code>lang=ca</code> parameter</li></ul>|
		 * |gl|Specify the country to search from. It's a two-letter country code. (e.g., <code>sk</code> for Slovakia, or <code>us</code> for the United States).| For Google see the <a href="https://developers.google.com/custom-search/docs/xml_results_appendices#countryCodes">Country Codes</a> page for a list of valid values. For Bing <code>cc=at</code> parameter is used.|
		 * @return {string} Returns data in the one of the follwing formats - JSON, JSON Lines, CSV, MS Excel, XML
		 */
		Serp(requestBody: Serprequest): Observable<string> {
			return this.http.post(this.baseUri + 'serp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}
	}

}

