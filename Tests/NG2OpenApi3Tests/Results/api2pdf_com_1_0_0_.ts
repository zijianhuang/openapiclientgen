import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ApiResponseFailure {

		/** The reason for the PDF generation failure */
		reason?: string | null;

		/** Will be false if the operation failed */
		success?: boolean | null;
	}
	export interface ApiResponseFailureFormProperties {

		/** The reason for the PDF generation failure */
		reason: FormControl<string | null | undefined>,

		/** Will be false if the operation failed */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateApiResponseFailureFormGroup() {
		return new FormGroup<ApiResponseFailureFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ApiResponseSuccess {

		/** Cost of the operation (mbIn + mbOut) * $.001 */
		cost?: number | null;

		/** The amount of megabytes of bandwidth used to process the pdf */
		mbIn?: number | null;

		/** The amount of megabytes of bandwidth generated from the resulting pdf */
		mbOut?: number | null;

		/** A url to the PDF that will exist only for 24 hours */
		pdf?: string | null;

		/** Will be true if the operation suceeded */
		success?: boolean | null;
	}
	export interface ApiResponseSuccessFormProperties {

		/** Cost of the operation (mbIn + mbOut) * $.001 */
		cost: FormControl<number | null | undefined>,

		/** The amount of megabytes of bandwidth used to process the pdf */
		mbIn: FormControl<number | null | undefined>,

		/** The amount of megabytes of bandwidth generated from the resulting pdf */
		mbOut: FormControl<number | null | undefined>,

		/** A url to the PDF that will exist only for 24 hours */
		pdf: FormControl<string | null | undefined>,

		/** Will be true if the operation suceeded */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateApiResponseSuccessFormGroup() {
		return new FormGroup<ApiResponseSuccessFormProperties>({
			cost: new FormControl<number | null | undefined>(undefined),
			mbIn: new FormControl<number | null | undefined>(undefined),
			mbOut: new FormControl<number | null | undefined>(undefined),
			pdf: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ChromeAdvancedOptions {
		landscape?: string | null;
		printBackground?: boolean | null;
	}
	export interface ChromeAdvancedOptionsFormProperties {
		landscape: FormControl<string | null | undefined>,
		printBackground: FormControl<boolean | null | undefined>,
	}
	export function CreateChromeAdvancedOptionsFormGroup() {
		return new FormGroup<ChromeAdvancedOptionsFormProperties>({
			landscape: new FormControl<string | null | undefined>(undefined),
			printBackground: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ChromeHtmlToPdfRequest {
		fileName?: string | null;

		/** Required */
		html: string;
		inlinePdf?: boolean | null;
		options?: ChromeAdvancedOptions;
	}
	export interface ChromeHtmlToPdfRequestFormProperties {
		fileName: FormControl<string | null | undefined>,

		/** Required */
		html: FormControl<string | null | undefined>,
		inlinePdf: FormControl<boolean | null | undefined>,
	}
	export function CreateChromeHtmlToPdfRequestFormGroup() {
		return new FormGroup<ChromeHtmlToPdfRequestFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			html: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			inlinePdf: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ChromeUrlToPdfRequest {
		fileName?: string | null;
		inlinePdf?: boolean | null;
		options?: ChromeAdvancedOptions;

		/** Required */
		url: string;
	}
	export interface ChromeUrlToPdfRequestFormProperties {
		fileName: FormControl<string | null | undefined>,
		inlinePdf: FormControl<boolean | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateChromeUrlToPdfRequestFormGroup() {
		return new FormGroup<ChromeUrlToPdfRequestFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			inlinePdf: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LibreOfficeConvertRequest {
		fileName?: string | null;
		inlinePdf?: boolean | null;

		/** Required */
		url: string;
	}
	export interface LibreOfficeConvertRequestFormProperties {
		fileName: FormControl<string | null | undefined>,
		inlinePdf: FormControl<boolean | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateLibreOfficeConvertRequestFormGroup() {
		return new FormGroup<LibreOfficeConvertRequestFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			inlinePdf: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MergeRequest {
		fileName?: string | null;
		inlinePdf?: boolean | null;

		/** Required */
		urls: Array<string>;
	}
	export interface MergeRequestFormProperties {
		fileName: FormControl<string | null | undefined>,
		inlinePdf: FormControl<boolean | null | undefined>,
	}
	export function CreateMergeRequestFormGroup() {
		return new FormGroup<MergeRequestFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			inlinePdf: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface WkHtmlToPdfAdvancedOptions {
		orientation?: string | null;
		pageSize?: string | null;
	}
	export interface WkHtmlToPdfAdvancedOptionsFormProperties {
		orientation: FormControl<string | null | undefined>,
		pageSize: FormControl<string | null | undefined>,
	}
	export function CreateWkHtmlToPdfAdvancedOptionsFormGroup() {
		return new FormGroup<WkHtmlToPdfAdvancedOptionsFormProperties>({
			orientation: new FormControl<string | null | undefined>(undefined),
			pageSize: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WkHtmlToPdfHtmlToPdfRequest {
		fileName?: string | null;

		/** Required */
		html: string;
		inlinePdf?: boolean | null;
		options?: WkHtmlToPdfAdvancedOptions;
	}
	export interface WkHtmlToPdfHtmlToPdfRequestFormProperties {
		fileName: FormControl<string | null | undefined>,

		/** Required */
		html: FormControl<string | null | undefined>,
		inlinePdf: FormControl<boolean | null | undefined>,
	}
	export function CreateWkHtmlToPdfHtmlToPdfRequestFormGroup() {
		return new FormGroup<WkHtmlToPdfHtmlToPdfRequestFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			html: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			inlinePdf: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface WkHtmlToPdfUrlToPdfRequest {
		fileName?: string | null;
		inlinePdf?: boolean | null;
		options?: WkHtmlToPdfAdvancedOptions;

		/** Required */
		url: string;
	}
	export interface WkHtmlToPdfUrlToPdfRequestFormProperties {
		fileName: FormControl<string | null | undefined>,
		inlinePdf: FormControl<boolean | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWkHtmlToPdfUrlToPdfRequestFormGroup() {
		return new FormGroup<WkHtmlToPdfUrlToPdfRequestFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined),
			inlinePdf: new FormControl<boolean | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Convert raw HTML to PDF
		 * Convert HTML to a PDF using Headless Chrome on AWS Lambda.
		 * ### Authorize via Header of Request
		 * **Authorization: YOUR-API-KEY**
		 * Post chrome/html
		 * @param {ChromeHtmlToPdfRequest} requestBody A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:
		 * - `html` *(string, required)* - raw HTML to convert to PDF
		 * - `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.
		 * - `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified.
		 * - `options` *(object, optional)* - Include advanced Headless Chrome options like margins, headers, and footers. [See full list of advanced options here](https://www.api2pdf.com/documentation/advanced-options-headless-chrome/).
		 * @return {ApiResponseSuccess} A JSON object containing the url to the PDF and other meta data
		 */
		ChromeFromHtmlPost(requestBody: ChromeHtmlToPdfRequest): Observable<ApiResponseSuccess> {
			return this.http.post<ApiResponseSuccess>(this.baseUri + 'chrome/html', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Convert URL to PDF
		 * Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
		 * ### Authorize via Query String Parameter
		 * **apikey=YOUR-API-KEY**
		 * ### Example
		 * ``` https://v2018.api2pdf.com/chrome/url?url={UrlToConvert}&apikey={YourApiKey} ```
		 * Get chrome/url
		 * @param {string} url Url of the page to convert to PDF. Must start with http:// or https://.
		 * @param {string} output Specify output=json to receive a JSON output. Defaults to PDF file.
		 * @return {ApiResponseSuccess} A PDF file or a JSON object depending on the `output` query parameter
		 */
		ChromeFromUrlGET(url: string, output: string | null | undefined): Observable<ApiResponseSuccess> {
			return this.http.get<ApiResponseSuccess>(this.baseUri + 'chrome/url?url=' + (url == null ? '' : encodeURIComponent(url)) + '&output=' + (output == null ? '' : encodeURIComponent(output)), {});
		}

		/**
		 * Convert URL to PDF
		 * Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda..
		 * ### Authorize via Header of Request
		 * **Authorization: YOUR-API-KEY**
		 * Post chrome/url
		 * @param {ChromeUrlToPdfRequest} requestBody A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:
		 * - `url` *(string, required)* - Url to the web page to convert to PDF
		 * - `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.
		 * - `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified.
		 * - `options` *(object, optional)* - Include advanced Headless Chrome options like margins, headers, and footers. [See full list of advanced options here](https://www.api2pdf.com/documentation/advanced-options-headless-chrome/).
		 * @return {ApiResponseSuccess} A JSON object containing the url to the PDF and other meta data
		 */
		ChromeFromUrlPost(requestBody: ChromeUrlToPdfRequest): Observable<ApiResponseSuccess> {
			return this.http.post<ApiResponseSuccess>(this.baseUri + 'chrome/url', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Convert office document or image to PDF
		 * Convert an office document (Word, Excel, Powerpoint) or an image (jpg, gif, png) to a PDF using LibreOffice on AWS Lambda.
		 * ### Authorize via Header of Request
		 * **Authorization: YOUR-API-KEY**
		 * Post libreoffice/convert
		 * @param {LibreOfficeConvertRequest} requestBody A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:
		 * - `url` *(string, required)* - A direct URL to the file. Api2Pdf will consume the file at that URL and then convert it.
		 * - `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.
		 * - `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified. 
		 * @return {ApiResponseSuccess} A JSON object containing the url to the PDF and other meta data
		 */
		LibreConvertPost(requestBody: LibreOfficeConvertRequest): Observable<ApiResponseSuccess> {
			return this.http.post<ApiResponseSuccess>(this.baseUri + 'libreoffice/convert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Merge multiple PDFs together
		 * Merge two or more PDFs together on AWS Lambda.
		 * ### Authorize via Header of Request
		 * **Authorization: YOUR-API-KEY**
		 * Post merge
		 * @param {MergeRequest} requestBody A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:
		 * - `urls` *(array of urls, required)* - A JSON array of direct URLs to PDFs. Api2Pdf will consume the PDF files in the list and then merge them all together..
		 * - `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.
		 * - `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified. 
		 * @return {ApiResponseSuccess} A JSON object containing the url to the PDF and other meta data
		 */
		MergePost(requestBody: MergeRequest): Observable<ApiResponseSuccess> {
			return this.http.post<ApiResponseSuccess>(this.baseUri + 'merge', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Convert raw HTML to PDF
		 * Convert HTML to a PDF using WkHtmlToPdf on AWS Lambda.
		 * ### Authorize via Header of Request
		 * **Authorization: YOUR-API-KEY**
		 * Post wkhtmltopdf/html
		 * @param {WkHtmlToPdfHtmlToPdfRequest} requestBody A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:
		 * - `html` *(string, required)* - raw HTML to convert to PDF
		 * - `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.
		 * - `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified.
		 * - `options` *(object, optional)* - Include advanced WkHtmlToPdf options like margins, headers, and footers. [See full list of advanced options here](https://www.api2pdf.com/documentation/advanced-options-wkhtmltopdf/).
		 * @return {ApiResponseSuccess} A JSON object containing the url to the PDF and other meta data
		 */
		WkhtmltopdfFromHtmlPost(requestBody: WkHtmlToPdfHtmlToPdfRequest): Observable<ApiResponseSuccess> {
			return this.http.post<ApiResponseSuccess>(this.baseUri + 'wkhtmltopdf/html', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Convert URL to PDF
		 * Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
		 * ### Authorize via Query String Parameter
		 * **apikey=YOUR-API-KEY**
		 * ### Example
		 * ``` https://v2018.api2pdf.com/wkhtmltopdf/url?url={UrlToConvert}&apikey={YourApiKey} ```
		 * Get wkhtmltopdf/url
		 * @param {string} url Url of the page to convert to PDF. Must start with http:// or https://.
		 * @param {string} output Specify output=json to receive a JSON output. Defaults to PDF file.
		 * @return {ApiResponseSuccess} A PDF file or a JSON object depending on the `output` query parameter
		 */
		WkhtmltopdfFromUrlGET(url: string, output: string | null | undefined): Observable<ApiResponseSuccess> {
			return this.http.get<ApiResponseSuccess>(this.baseUri + 'wkhtmltopdf/url?url=' + (url == null ? '' : encodeURIComponent(url)) + '&output=' + (output == null ? '' : encodeURIComponent(output)), {});
		}

		/**
		 * Convert URL to PDF
		 * Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda..
		 * ### Authorize via Header of Request
		 * **Authorization: YOUR-API-KEY**
		 * Post wkhtmltopdf/url
		 * @param {WkHtmlToPdfUrlToPdfRequest} requestBody A JSON object as a payload is required within the body of the request. The following attributes of the JSON object are detailed below:
		 * - `url` *(string, required)* - Url to the web page to convert to PDF
		 * - `inlinePdf` *(boolean, optional)* - Open the PDF in a browser window. Default to false.
		 * - `fileName` *(string, optional)* - Specify a file name for the output PDF. Random name if not specified.
		 * - `options` *(object, optional)* - Include advanced WkHtmlToPdf options like margins, headers, and footers. [See full list of advanced options here](https://www.api2pdf.com/documentation/advanced-options-wkhtmltopdf/).
		 * @return {ApiResponseSuccess} A JSON object containing the url to the PDF and other meta data
		 */
		WkhtmltopdfFromUrlPost(requestBody: WkHtmlToPdfUrlToPdfRequest): Observable<ApiResponseSuccess> {
			return this.http.post<ApiResponseSuccess>(this.baseUri + 'wkhtmltopdf/url', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generate bar codes and QR codes with ZXING.
		 * See full list of options and documentation [here](https://www.api2pdf.com/documentation/advanced-options-zxing-zebra-crossing-barcodes/)
		 * ### Authorize via Query String Parameter
		 * **apikey=YOUR-API-KEY**
		 * ### Example
		 * ``` https://v2018.api2pdf.com/zebra?format={format}&apikey={YourApiKey}&value={YourText} ```
		 * Get zebra
		 * @param {string} format Most common is CODE_39 or QR_CODE
		 * @param {string} value Specify the text value you want to convert
		 * @param {boolean} showlabel Show label of text below barcode
		 * @param {number} height Height of the barcode generated image
		 * @param {number} width Width of the barcode generated image
		 * @return {void} An image of the generated barcode or QR code
		 */
		ZebraGET(format: string, value: string, showlabel: boolean | null | undefined, height: number | null | undefined, width: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'zebra?format=' + (format == null ? '' : encodeURIComponent(format)) + '&value=' + (value == null ? '' : encodeURIComponent(value)) + '&showlabel=' + showlabel + '&height=' + height + '&width=' + width, { observe: 'response', responseType: 'text' });
		}
	}

}

