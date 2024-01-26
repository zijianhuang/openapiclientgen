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
		 * Retreive a generated document from a render ID.
		 * Documentation: https://carbone.io/api-reference.html#download-rendered-reports
		 * Get render/{renderId}
		 * @param {string} renderId Unique identifier of the report
		 * @return {void} Stream of the generated document
		 */
		RenderGetByRenderId(renderId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'render/' + (renderId == null ? '' : encodeURIComponent(renderId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generate a document from a template ID, and a JSON data-set
		 * Documentation: https://carbone.io/api-reference.html#render-reports
		 * Post render/{templateId}
		 * @param {string} templateId Unique identifier of the template
		 * @return {RenderPostByTemplateIdReturn} On success, a `render ID` is returned, a unique identifier for the generated document.
		 */
		RenderPostByTemplateId(templateId: string, requestBody: RenderPostByTemplateIdPostBody): Observable<RenderPostByTemplateIdReturn> {
			return this.http.post<RenderPostByTemplateIdReturn>(this.baseUri + 'render/' + (templateId == null ? '' : encodeURIComponent(templateId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch the API status and version
		 * Get status
		 * @return {StatusGetReturn} Check the API status and version
		 */
		StatusGet(): Observable<StatusGetReturn> {
			return this.http.get<StatusGetReturn>(this.baseUri + 'status', {});
		}

		/**
		 * Upload a template.
		 * Documentation: https://carbone.io/api-reference.html#add-templates
		 * Post template
		 * @param {TemplatePostPostBody} requestBody Template File to upload, supported formats: DOCX, XLSX, PPTX, ODT, ODS, ODP, ODG, XHTML, IDML, HTML or an XML file
		 * @return {TemplatePostReturn} On success, the `template ID` is returned.
		 */
		TemplatePost(requestBody: TemplatePostPostBody): Observable<TemplatePostReturn> {
			return this.http.post<TemplatePostReturn>(this.baseUri + 'template', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a template from a template ID
		 * Documentation: https://carbone.io/api-reference.html#delete-templates
		 * Delete template/{templateId}
		 * @param {string} templateId Unique identifier of the template
		 * @return {TemplateDeleteByTemplateIdReturn} The template is deleted
		 */
		TemplateDeleteByTemplateId(templateId: string): Observable<TemplateDeleteByTemplateIdReturn> {
			return this.http.delete<TemplateDeleteByTemplateIdReturn>(this.baseUri + 'template/' + (templateId == null ? '' : encodeURIComponent(templateId)), {});
		}

		/**
		 * Download a template from a template ID
		 * Documentation: https://carbone.io/api-reference.html#get-templates
		 * Get template/{templateId}
		 * @param {string} templateId Unique identifier of the template
		 * @return {void} stream of the file content
		 */
		TemplateGetByTemplateId(templateId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'template/' + (templateId == null ? '' : encodeURIComponent(templateId)), { observe: 'response', responseType: 'text' });
		}
	}

	export interface RenderPostByTemplateIdPostBody {

		/** Optional - Object|Array, extra data accessible in the template with {c.} instead of {d.} */
		complement?: string | null;

		/** Optional - Convert the document into another format. Accepted values: ods xlsx xls csv pdf txt odp ppt pptx jpg png odt doc docx txt jpg png epub html xml idml. List of supported formats: https://carbone.io/documentation.html#supported-files-and-features-list */
		convertTo?: string | null;

		/** Optional - Currency exchange rates for conversions from `currencySource` to `currencyTarget`. Learn more: https://carbone.io/documentation.html#formatc-precisionorformat- */
		currencyRates?: string | null;

		/** Optional - Currency source coming from your JSON data. The option is used by `formatC` to convert the currency based on the `currencyTarget` and `currencyRates`. Learn more: https://carbone.io/documentation.html#formatc-precisionorformat- */
		currencySource?: string | null;

		/** Optional - Target currency when the document is generated. The option is used by `formatC` to convert the currency based on the `currencySource` and `currencyRates`. Learn more: https://carbone.io/documentation.html#formatc-precisionorformat- */
		currencyTarget?: string | null;

		/**
		 * Required - ️JSON data-set merged into the template to generate a document
		 * Required
		 */
		data: string;

		/** Optional - List of enumerations, use it in reports with `convEnum` formatters, documentation: https://carbone.io/documentation.html#convenum-type- */
		enum?: string | null;

		/** Optional - If true, the report content is refreshed at the end of the rendering process. To use this option, `convertTo` has to be defined. It is mostly used to refresh a table of content. */
		hardRefresh?: boolean | null;

		/** Optional - Locale of the generated doocument, it will used for translation `{t()}`, formatting numbers with `:formatN`, and currencies `:formatC`. List of supported locales: https://github.com/carboneio/carbone/blob/master/formatters/_locale.js */
		lang?: string | null;

		/** Optional - Static or dynamic file name returned on the `content-disposition` header when the generated report is fetched with `GET /report/:renderI`. Multiple Carbone tags are accepted, such as `{d.type}-{d.date}.pdf` */
		reportName?: string | null;

		/** Optional - Convert document dates to a timezone. The default timezone is `Europe/Paris`. The date must be chained with the `:formatD` formatter, for instance `{d.date:formatD(YYYY-MM-DD HH:MM)}`. List of accepted timezones (Column TZ identifier): https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
		timezone?: string | null;

		/** Optional - When the report is generated, all text between `{t( )}` is replaced with the corresponding translation. The `lang` option is required to select the correct translation. Learn more: https://carbone.io/documentation.html#translations */
		translations?: string | null;

		/** Optional - Predefine alias, related documenation: https://carbone.io/documentation.html#alias */
		variableStr?: string | null;
	}
	export interface RenderPostByTemplateIdPostBodyFormProperties {

		/** Optional - Object|Array, extra data accessible in the template with {c.} instead of {d.} */
		complement: FormControl<string | null | undefined>,

		/** Optional - Convert the document into another format. Accepted values: ods xlsx xls csv pdf txt odp ppt pptx jpg png odt doc docx txt jpg png epub html xml idml. List of supported formats: https://carbone.io/documentation.html#supported-files-and-features-list */
		convertTo: FormControl<string | null | undefined>,

		/** Optional - Currency exchange rates for conversions from `currencySource` to `currencyTarget`. Learn more: https://carbone.io/documentation.html#formatc-precisionorformat- */
		currencyRates: FormControl<string | null | undefined>,

		/** Optional - Currency source coming from your JSON data. The option is used by `formatC` to convert the currency based on the `currencyTarget` and `currencyRates`. Learn more: https://carbone.io/documentation.html#formatc-precisionorformat- */
		currencySource: FormControl<string | null | undefined>,

		/** Optional - Target currency when the document is generated. The option is used by `formatC` to convert the currency based on the `currencySource` and `currencyRates`. Learn more: https://carbone.io/documentation.html#formatc-precisionorformat- */
		currencyTarget: FormControl<string | null | undefined>,

		/**
		 * Required - ️JSON data-set merged into the template to generate a document
		 * Required
		 */
		data: FormControl<string | null | undefined>,

		/** Optional - List of enumerations, use it in reports with `convEnum` formatters, documentation: https://carbone.io/documentation.html#convenum-type- */
		enum: FormControl<string | null | undefined>,

		/** Optional - If true, the report content is refreshed at the end of the rendering process. To use this option, `convertTo` has to be defined. It is mostly used to refresh a table of content. */
		hardRefresh: FormControl<boolean | null | undefined>,

		/** Optional - Locale of the generated doocument, it will used for translation `{t()}`, formatting numbers with `:formatN`, and currencies `:formatC`. List of supported locales: https://github.com/carboneio/carbone/blob/master/formatters/_locale.js */
		lang: FormControl<string | null | undefined>,

		/** Optional - Static or dynamic file name returned on the `content-disposition` header when the generated report is fetched with `GET /report/:renderI`. Multiple Carbone tags are accepted, such as `{d.type}-{d.date}.pdf` */
		reportName: FormControl<string | null | undefined>,

		/** Optional - Convert document dates to a timezone. The default timezone is `Europe/Paris`. The date must be chained with the `:formatD` formatter, for instance `{d.date:formatD(YYYY-MM-DD HH:MM)}`. List of accepted timezones (Column TZ identifier): https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
		timezone: FormControl<string | null | undefined>,

		/** Optional - When the report is generated, all text between `{t( )}` is replaced with the corresponding translation. The `lang` option is required to select the correct translation. Learn more: https://carbone.io/documentation.html#translations */
		translations: FormControl<string | null | undefined>,

		/** Optional - Predefine alias, related documenation: https://carbone.io/documentation.html#alias */
		variableStr: FormControl<string | null | undefined>,
	}
	export function CreateRenderPostByTemplateIdPostBodyFormGroup() {
		return new FormGroup<RenderPostByTemplateIdPostBodyFormProperties>({
			complement: new FormControl<string | null | undefined>(undefined),
			convertTo: new FormControl<string | null | undefined>(undefined),
			currencyRates: new FormControl<string | null | undefined>(undefined),
			currencySource: new FormControl<string | null | undefined>(undefined),
			currencyTarget: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enum: new FormControl<string | null | undefined>(undefined),
			hardRefresh: new FormControl<boolean | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			reportName: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			translations: new FormControl<string | null | undefined>(undefined),
			variableStr: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RenderPostByTemplateIdReturn {
		data?: RenderPostByTemplateIdReturnData;
		success?: boolean | null;
	}
	export interface RenderPostByTemplateIdReturnFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateRenderPostByTemplateIdReturnFormGroup() {
		return new FormGroup<RenderPostByTemplateIdReturnFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RenderPostByTemplateIdReturnData {
		renderId?: string | null;
	}
	export interface RenderPostByTemplateIdReturnDataFormProperties {
		renderId: FormControl<string | null | undefined>,
	}
	export function CreateRenderPostByTemplateIdReturnDataFormGroup() {
		return new FormGroup<RenderPostByTemplateIdReturnDataFormProperties>({
			renderId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StatusGetReturn {
		code?: number | null;
		message?: string | null;
		success?: boolean | null;
		version?: string | null;
	}
	export interface StatusGetReturnFormProperties {
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
		success: FormControl<boolean | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateStatusGetReturnFormGroup() {
		return new FormGroup<StatusGetReturnFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplatePostPostBody {

		/** Required */
		template: string;
	}
	export interface TemplatePostPostBodyFormProperties {

		/** Required */
		template: FormControl<string | null | undefined>,
	}
	export function CreateTemplatePostPostBodyFormGroup() {
		return new FormGroup<TemplatePostPostBodyFormProperties>({
			template: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TemplatePostReturn {
		data?: TemplatePostReturnData;
		success?: boolean | null;
	}
	export interface TemplatePostReturnFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateTemplatePostReturnFormGroup() {
		return new FormGroup<TemplatePostReturnFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TemplatePostReturnData {
		templateId?: string | null;
	}
	export interface TemplatePostReturnDataFormProperties {
		templateId: FormControl<string | null | undefined>,
	}
	export function CreateTemplatePostReturnDataFormGroup() {
		return new FormGroup<TemplatePostReturnDataFormProperties>({
			templateId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateDeleteByTemplateIdReturn {
		success?: boolean | null;
	}
	export interface TemplateDeleteByTemplateIdReturnFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateTemplateDeleteByTemplateIdReturnFormGroup() {
		return new FormGroup<TemplateDeleteByTemplateIdReturnFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

