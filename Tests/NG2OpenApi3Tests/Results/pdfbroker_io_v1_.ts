import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Set color */
	export interface ColorDto {

		/**
		 * Get or sets B value of RGB color
		 * Minimum: 0
		 * Maximum: 255
		 */
		b?: number | null;

		/**
		 * Get or sets G value of RGB color
		 * Minimum: 0
		 * Maximum: 255
		 */
		g?: number | null;

		/**
		 * Get or sets R value of RGB color
		 * Minimum: 0
		 * Maximum: 255
		 */
		r?: number | null;
	}

	/** Set color */
	export interface ColorDtoFormProperties {

		/**
		 * Get or sets B value of RGB color
		 * Minimum: 0
		 * Maximum: 255
		 */
		b: FormControl<number | null | undefined>,

		/**
		 * Get or sets G value of RGB color
		 * Minimum: 0
		 * Maximum: 255
		 */
		g: FormControl<number | null | undefined>,

		/**
		 * Get or sets R value of RGB color
		 * Minimum: 0
		 * Maximum: 255
		 */
		r: FormControl<number | null | undefined>,
	}
	export function CreateColorDtoFormGroup() {
		return new FormGroup<ColorDtoFormProperties>({
			b: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(255)]),
			g: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(255)]),
			r: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(255)]),
		});

	}

	export interface ErrorResponseDto {
		description?: string | null;

		/** If any error occurs the message will be displayed in here */
		errorMessage?: string | null;
		statusCode?: number | null;
	}
	export interface ErrorResponseDtoFormProperties {
		description: FormControl<string | null | undefined>,

		/** If any error occurs the message will be displayed in here */
		errorMessage: FormControl<string | null | undefined>,
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateErrorResponseDtoFormGroup() {
		return new FormGroup<ErrorResponseDtoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The basic request with the XSL-FO document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string. */
	export interface FoRequestDto {

		/** This is the complete XSL-FO document provided using Base64 encoding. */
		foDocumentBase64String?: string | null;

		/** Enter meta data for pdf document */
		metadata?: PdfMetadataDto;

		/** This is a set of key-value pairs of digital resources like images that is referenced in the XSL-FO document. It uses the filename as key and the data is provided as a Base64 encoded string. */
		resources?: {[id: string]: string };
	}

	/** The basic request with the XSL-FO document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string. */
	export interface FoRequestDtoFormProperties {

		/** This is the complete XSL-FO document provided using Base64 encoding. */
		foDocumentBase64String: FormControl<string | null | undefined>,

		/** This is a set of key-value pairs of digital resources like images that is referenced in the XSL-FO document. It uses the filename as key and the data is provided as a Base64 encoded string. */
		resources: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateFoRequestDtoFormGroup() {
		return new FormGroup<FoRequestDtoFormProperties>({
			foDocumentBase64String: new FormControl<string | null | undefined>(undefined),
			resources: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Enter meta data for pdf document */
	export interface PdfMetadataDto {

		/** Pdf document author */
		author?: string | null;

		/**
		 * Enables or disables adding or modifying text annotations and interactive
		 * form fields.
		 */
		enableAdd?: boolean | null;

		/** Enables or disables copying of text and graphics. */
		enableCopy?: boolean | null;

		/**
		 * Enables or disables modifying document contents (other than text annotations and
		 * interactive form fields).
		 */
		enableModify?: boolean | null;

		/** Enables or disables printing. */
		enablePrinting?: boolean | null;

		/** Pdf document keywords */
		keywords?: Array<string>;

		/** Specifies the owner password that will protect full access to any generated PDF documents. */
		ownerPassword?: string | null;

		/** Pdf document subject */
		subject?: string | null;

		/** Pdf document title */
		title?: string | null;

		/** Specifies the user password that will protect access to any generated PDF documents. */
		userPassword?: string | null;
	}

	/** Enter meta data for pdf document */
	export interface PdfMetadataDtoFormProperties {

		/** Pdf document author */
		author: FormControl<string | null | undefined>,

		/**
		 * Enables or disables adding or modifying text annotations and interactive
		 * form fields.
		 */
		enableAdd: FormControl<boolean | null | undefined>,

		/** Enables or disables copying of text and graphics. */
		enableCopy: FormControl<boolean | null | undefined>,

		/**
		 * Enables or disables modifying document contents (other than text annotations and
		 * interactive form fields).
		 */
		enableModify: FormControl<boolean | null | undefined>,

		/** Enables or disables printing. */
		enablePrinting: FormControl<boolean | null | undefined>,

		/** Specifies the owner password that will protect full access to any generated PDF documents. */
		ownerPassword: FormControl<string | null | undefined>,

		/** Pdf document subject */
		subject: FormControl<string | null | undefined>,

		/** Pdf document title */
		title: FormControl<string | null | undefined>,

		/** Specifies the user password that will protect access to any generated PDF documents. */
		userPassword: FormControl<string | null | undefined>,
	}
	export function CreatePdfMetadataDtoFormGroup() {
		return new FormGroup<PdfMetadataDtoFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			enableAdd: new FormControl<boolean | null | undefined>(undefined),
			enableCopy: new FormControl<boolean | null | undefined>(undefined),
			enableModify: new FormControl<boolean | null | undefined>(undefined),
			enablePrinting: new FormControl<boolean | null | undefined>(undefined),
			ownerPassword: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			userPassword: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The XSL-FO transform document and xml data document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string. */
	export interface FoTransformRequestDto {

		/** This is the complete XSL-FO document provided using Base64 encoding. */
		foDocumentBase64String?: string | null;

		/** Enter meta data for pdf document */
		metadata?: PdfMetadataDto;

		/** This is a set of key-value pairs of digital resources like images that is referenced in the XSL-FO document. It uses the filename as key and the data is provided as a Base64 encoded string. */
		resources?: {[id: string]: string };

		/** This is xml data document on which the XSL-FO transform document is applied. Provided using Base64 encoding. */
		xmlDataDocumentBase64String?: string | null;
	}

	/** The XSL-FO transform document and xml data document as a Base64 encoded string with a set of resources provided with a name and the data of the resource as a Base64 encoded string. */
	export interface FoTransformRequestDtoFormProperties {

		/** This is the complete XSL-FO document provided using Base64 encoding. */
		foDocumentBase64String: FormControl<string | null | undefined>,

		/** This is a set of key-value pairs of digital resources like images that is referenced in the XSL-FO document. It uses the filename as key and the data is provided as a Base64 encoded string. */
		resources: FormControl<{[id: string]: string } | null | undefined>,

		/** This is xml data document on which the XSL-FO transform document is applied. Provided using Base64 encoding. */
		xmlDataDocumentBase64String: FormControl<string | null | undefined>,
	}
	export function CreateFoTransformRequestDtoFormGroup() {
		return new FormGroup<FoTransformRequestDtoFormProperties>({
			foDocumentBase64String: new FormControl<string | null | undefined>(undefined),
			resources: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			xmlDataDocumentBase64String: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Font dto object */
	export interface FontDto {

		/** Gets the name of the font */
		name?: string | null;

		/** Gets the size of the font */
		size?: number | null;

		/** Font style enum representing Regular, Bold, Italic, BoldItalic */
		style?: FontStyle;
	}

	/** The Font dto object */
	export interface FontDtoFormProperties {

		/** Gets the name of the font */
		name: FormControl<string | null | undefined>,

		/** Gets the size of the font */
		size: FormControl<number | null | undefined>,

		/** Font style enum representing Regular, Bold, Italic, BoldItalic */
		style: FormControl<FontStyle | null | undefined>,
	}
	export function CreateFontDtoFormGroup() {
		return new FormGroup<FontDtoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			style: new FormControl<FontStyle | null | undefined>(undefined),
		});

	}


	/** Font style enum representing Regular, Bold, Italic, BoldItalic */
	export enum FontStyle { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }


	/** When setting the Accept-header in the request to "application/json" the image file will be return as Base64 encoded string. Note that converting data to Base64 encoded strings increases the response size with approximately 33%, if you can accept the a binary format it's better to use Accept-header "image/jpeg", "image/png" or "image/gif". */
	export interface ImageResponseDto {

		/** If any error occurs the message will be displayed in here */
		errorMessage?: string | null;

		/** The Base64 encoded string that is the image file. This is a complete data uri, including media type that can be used directly as src on a img-tag e.g. */
		imageBase64String?: string | null;
	}

	/** When setting the Accept-header in the request to "application/json" the image file will be return as Base64 encoded string. Note that converting data to Base64 encoded strings increases the response size with approximately 33%, if you can accept the a binary format it's better to use Accept-header "image/jpeg", "image/png" or "image/gif". */
	export interface ImageResponseDtoFormProperties {

		/** If any error occurs the message will be displayed in here */
		errorMessage: FormControl<string | null | undefined>,

		/** The Base64 encoded string that is the image file. This is a complete data uri, including media type that can be used directly as src on a img-tag e.g. */
		imageBase64String: FormControl<string | null | undefined>,
	}
	export function CreateImageResponseDtoFormGroup() {
		return new FormGroup<ImageResponseDtoFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			imageBase64String: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to concatenate a list of Pdf documents to a single Pdf document. */
	export interface PdfConcatenationRequestDto {

		/** The list of Pdf documents encoded as Base64 strings. */
		pdfDocumentsAsBase64String?: Array<string>;
	}

	/** Request to concatenate a list of Pdf documents to a single Pdf document. */
	export interface PdfConcatenationRequestDtoFormProperties {
	}
	export function CreatePdfConcatenationRequestDtoFormGroup() {
		return new FormGroup<PdfConcatenationRequestDtoFormProperties>({
		});

	}


	/** When setting the Accept-header in the request to "application/json" the content of the pdf file will be return as Base64 encoded string. Note that converting data to Base64 encoded strings increases the response size with approximately 33%, if you can accept the a binary format it's better to use Accept-header "application/pdf". */
	export interface PdfResponseDto {

		/** If any error occurs the message will be displayed in here */
		errorMessage?: string | null;

		/** The Base64 encoded string that is the pdf file. */
		pdfFileBase64String?: string | null;
	}

	/** When setting the Accept-header in the request to "application/json" the content of the pdf file will be return as Base64 encoded string. Note that converting data to Base64 encoded strings increases the response size with approximately 33%, if you can accept the a binary format it's better to use Accept-header "application/pdf". */
	export interface PdfResponseDtoFormProperties {

		/** If any error occurs the message will be displayed in here */
		errorMessage: FormControl<string | null | undefined>,

		/** The Base64 encoded string that is the pdf file. */
		pdfFileBase64String: FormControl<string | null | undefined>,
	}
	export function CreatePdfResponseDtoFormGroup() {
		return new FormGroup<PdfResponseDtoFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			pdfFileBase64String: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PdfToImageOptions {

		/** Set the height of the output image, default value is width of source document. To scale height, and keeping proportions, do not set width; */
		height?: number | null;

		/** Set the horizontal resolution, default is 96 dpi; */
		horizontalResolution?: number | null;

		/** Valid options are "image/jpeg", "image/png" or "image/gif". Default is "image/png" */
		imageFormat?: string | null;

		/** Sets the quality of jpeg images, range 0 to 100, default is 75 */
		jpegQuality?: number | null;

		/** Which page of the pdf file to generate image from, default is first page */
		pageNumber?: number | null;

		/** Sets the png compression level, range 1 - 9, default is 6 */
		pngCompressionLevel?: number | null;

		/** Keep the background of the image transparent. This setting is not available in JPEG-files, since transparency is not supported in the JPEG format. */
		transparent?: boolean | null;

		/** Set the vertical resolution, default is 96 dpi; */
		verticalResolution?: number | null;

		/** Set the width of the output image, default value is width of source document. To scale width, and keeping proportions, do not set height; */
		width?: number | null;
	}
	export interface PdfToImageOptionsFormProperties {

		/** Set the height of the output image, default value is width of source document. To scale height, and keeping proportions, do not set width; */
		height: FormControl<number | null | undefined>,

		/** Set the horizontal resolution, default is 96 dpi; */
		horizontalResolution: FormControl<number | null | undefined>,

		/** Valid options are "image/jpeg", "image/png" or "image/gif". Default is "image/png" */
		imageFormat: FormControl<string | null | undefined>,

		/** Sets the quality of jpeg images, range 0 to 100, default is 75 */
		jpegQuality: FormControl<number | null | undefined>,

		/** Which page of the pdf file to generate image from, default is first page */
		pageNumber: FormControl<number | null | undefined>,

		/** Sets the png compression level, range 1 - 9, default is 6 */
		pngCompressionLevel: FormControl<number | null | undefined>,

		/** Keep the background of the image transparent. This setting is not available in JPEG-files, since transparency is not supported in the JPEG format. */
		transparent: FormControl<boolean | null | undefined>,

		/** Set the vertical resolution, default is 96 dpi; */
		verticalResolution: FormControl<number | null | undefined>,

		/** Set the width of the output image, default value is width of source document. To scale width, and keeping proportions, do not set height; */
		width: FormControl<number | null | undefined>,
	}
	export function CreatePdfToImageOptionsFormGroup() {
		return new FormGroup<PdfToImageOptionsFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			horizontalResolution: new FormControl<number | null | undefined>(undefined),
			imageFormat: new FormControl<string | null | undefined>(undefined),
			jpegQuality: new FormControl<number | null | undefined>(undefined),
			pageNumber: new FormControl<number | null | undefined>(undefined),
			pngCompressionLevel: new FormControl<number | null | undefined>(undefined),
			transparent: new FormControl<boolean | null | undefined>(undefined),
			verticalResolution: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PdfToImageRequestDto {
		options?: PdfToImageOptions;

		/** The pdf file to generate image from, as Base64 encoded string. */
		pdfFileBase64String?: string | null;
	}
	export interface PdfToImageRequestDtoFormProperties {

		/** The pdf file to generate image from, as Base64 encoded string. */
		pdfFileBase64String: FormControl<string | null | undefined>,
	}
	export function CreatePdfToImageRequestDtoFormGroup() {
		return new FormGroup<PdfToImageRequestDtoFormProperties>({
			pdfFileBase64String: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for writing string in pdf page; */
	export interface PdfWriteStringOptions {

		/** The Font dto object */
		font?: FontDto;

		/** Get or set which page in the pdf to write on, default is first page. */
		pageNumber?: number | null;

		/** The text to write in the pdf */
		text?: string | null;

		/** Set color */
		textColor?: ColorDto;
		xOrigin?: XOriginPoint;

		/** Get or set the X axis position on where to write string, in reference to XOrigin. */
		xPosition?: number | null;
		yOrigin?: YOriginPoint;

		/** Get or set the Y axis position on where to write string, in reference to YOrigin. */
		yPosition?: number | null;
	}

	/** Options for writing string in pdf page; */
	export interface PdfWriteStringOptionsFormProperties {

		/** Get or set which page in the pdf to write on, default is first page. */
		pageNumber: FormControl<number | null | undefined>,

		/** The text to write in the pdf */
		text: FormControl<string | null | undefined>,
		xOrigin: FormControl<XOriginPoint | null | undefined>,

		/** Get or set the X axis position on where to write string, in reference to XOrigin. */
		xPosition: FormControl<number | null | undefined>,
		yOrigin: FormControl<YOriginPoint | null | undefined>,

		/** Get or set the Y axis position on where to write string, in reference to YOrigin. */
		yPosition: FormControl<number | null | undefined>,
	}
	export function CreatePdfWriteStringOptionsFormGroup() {
		return new FormGroup<PdfWriteStringOptionsFormProperties>({
			pageNumber: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			xOrigin: new FormControl<XOriginPoint | null | undefined>(undefined),
			xPosition: new FormControl<number | null | undefined>(undefined),
			yOrigin: new FormControl<YOriginPoint | null | undefined>(undefined),
			yPosition: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum XOriginPoint { _0 = 0, _1 = 1, _2 = 2 }

	export enum YOriginPoint { _0 = 0, _1 = 1, _2 = 2 }


	/** The request dto object to write a string on pdf page */
	export interface PdfWriteStringRequestDto {

		/** System fonts are available, but you can provide your own font file to be embedded in the pdf document. Send font as Base64 encoded string. */
		fontFileBase64String?: string | null;

		/** Options for writing string in pdf page; */
		options?: PdfWriteStringOptions;

		/** The pdf file to add text to, as Base64 encoded string. */
		pdfFileBase64String?: string | null;
	}

	/** The request dto object to write a string on pdf page */
	export interface PdfWriteStringRequestDtoFormProperties {

		/** System fonts are available, but you can provide your own font file to be embedded in the pdf document. Send font as Base64 encoded string. */
		fontFileBase64String: FormControl<string | null | undefined>,

		/** The pdf file to add text to, as Base64 encoded string. */
		pdfFileBase64String: FormControl<string | null | undefined>,
	}
	export function CreatePdfWriteStringRequestDtoFormGroup() {
		return new FormGroup<PdfWriteStringRequestDtoFormProperties>({
			fontFileBase64String: new FormControl<string | null | undefined>(undefined),
			pdfFileBase64String: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** WkHtmlToPdfRequestDto is the data transfer object for generating a pdf using wkhtmltopdf; */
	export interface WkHtmlToPdfRequestDto {

		/** Base64 encoded string with html. If property Url is set, it will be used, not HtmlBase64String. */
		htmlBase64String?: string | null;

		/** This is a set of key-value pairs of digital resources like images that is referenced in the HtmlBase64String document. It uses the filename including relative path as key and the data is provided as a Base64 encoded string. */
		resources?: {[id: string]: string };

		/** The url to generate pdf from. Url has precedence over HtmlBase64String value if both are set. */
		url?: string | null;

		/** Command line arguments passed to wkhtmltopdf. */
		wkHtmlToPdfArguments?: {[id: string]: string };
	}

	/** WkHtmlToPdfRequestDto is the data transfer object for generating a pdf using wkhtmltopdf; */
	export interface WkHtmlToPdfRequestDtoFormProperties {

		/** Base64 encoded string with html. If property Url is set, it will be used, not HtmlBase64String. */
		htmlBase64String: FormControl<string | null | undefined>,

		/** This is a set of key-value pairs of digital resources like images that is referenced in the HtmlBase64String document. It uses the filename including relative path as key and the data is provided as a Base64 encoded string. */
		resources: FormControl<{[id: string]: string } | null | undefined>,

		/** The url to generate pdf from. Url has precedence over HtmlBase64String value if both are set. */
		url: FormControl<string | null | undefined>,

		/** Command line arguments passed to wkhtmltopdf. */
		wkHtmlToPdfArguments: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateWkHtmlToPdfRequestDtoFormGroup() {
		return new FormGroup<WkHtmlToPdfRequestDtoFormProperties>({
			htmlBase64String: new FormControl<string | null | undefined>(undefined),
			resources: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			wkHtmlToPdfArguments: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Basic method to verify api is up and running
		 * Get api/pdf
		 * @return {void} 
		 */
		ApiPdfGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/pdf', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Concatenate multiple pdf files into single pdf file..
		 * Post api/pdf/pdfconcat
		 * @param {PdfConcatenationRequestDto} requestBody PdfConcat Request. Add two or more pdf files and concatenate pages into single pdf document.
		 * @return {PdfResponseDto} Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json
		 */
		ApiPdfPdfconcatPost(requestBody: PdfConcatenationRequestDto, headersHandler?: () => HttpHeaders): Observable<PdfResponseDto> {
			return this.http.post<PdfResponseDto>(this.baseUri + 'api/pdf/pdfconcat', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Generate an image of to provided pdf file
		 * Post api/pdf/pdftoimage
		 * @param {PdfToImageRequestDto} requestBody PdfToImage Request. Create an image of a page in an existing pdf document.
		 * @return {ImageResponseDto} Generate an image of the provided pdf file. Either the image file directly or serialized as Json if Accept-header is set to application/json
		 */
		ApiPdfPdftoimagePost(requestBody: PdfToImageRequestDto, headersHandler?: () => HttpHeaders): Observable<ImageResponseDto> {
			return this.http.post<ImageResponseDto>(this.baseUri + 'api/pdf/pdftoimage', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Write text on a page in a pdf document.
		 * Post api/pdf/pdfwritestring
		 * @param {PdfWriteStringRequestDto} requestBody PdfWriteString Request. Write string on page in pdf document
		 * @return {PdfResponseDto} Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json
		 */
		ApiPdfPdfwritestringPost(requestBody: PdfWriteStringRequestDto, headersHandler?: () => HttpHeaders): Observable<PdfResponseDto> {
			return this.http.post<PdfResponseDto>(this.baseUri + 'api/pdf/pdfwritestring', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Generate pdf file from url using the excellent tool wkhtmltopdf.
		 * Post api/pdf/wkhtmltopdf
		 * @param {WkHtmlToPdfRequestDto} requestBody WkHtmlToPdf Request. Generate pdf from html, either from url or base64 encoded html string
		 * @return {PdfResponseDto} Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json
		 */
		ApiPdfWkhtmltopdfPost(requestBody: WkHtmlToPdfRequestDto, headersHandler?: () => HttpHeaders): Observable<PdfResponseDto> {
			return this.http.post<PdfResponseDto>(this.baseUri + 'api/pdf/wkhtmltopdf', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create pdf-file from complete XSL-FO document.
		 * Post api/pdf/xslfo
		 * @param {FoRequestDto} requestBody XSL-FO Request, the basic XSL-FO request. Post your XSL-FO document and digital resources, either as 'multipart/form-data' or 'application/json'
		 * @return {PdfResponseDto} Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json
		 */
		ApiPdfXslfoPost(requestBody: FoRequestDto, headersHandler?: () => HttpHeaders): Observable<PdfResponseDto> {
			return this.http.post<PdfResponseDto>(this.baseUri + 'api/pdf/xslfo', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Create pdf-file from transforming xml document with Xsl-Fo transform document.
		 * Post api/pdf/xslfowithtransform
		 * @param {FoTransformRequestDto} requestBody XSL-FO Transform Request. The XSL-FO is transformed on the supplied xml data document. Post your XSL-FO transform document and xml data document aloing with your digital resources, either as 'multipart/form-data' or 'application/json'
		 * @return {PdfResponseDto} Returns the newly created pdf file. Either the file directly or serialized as Json if Accept-header is set to application/json
		 */
		ApiPdfXslfowithtransformPost(requestBody: FoTransformRequestDto, headersHandler?: () => HttpHeaders): Observable<PdfResponseDto> {
			return this.http.post<PdfResponseDto>(this.baseUri + 'api/pdf/xslfowithtransform', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

