import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Body_create {

		/** Required */
		file: string;
	}
	export interface Body_createFormProperties {

		/** Required */
		file: FormControl<string | null | undefined>,
	}
	export function CreateBody_createFormGroup() {
		return new FormGroup<Body_createFormProperties>({
			file: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BoundingBox {

		/**
		 * Required
		 * Minimum: 1
		 */
		height: number;

		/**
		 * Required
		 * Minimum: 1
		 */
		width: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		x: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		y: number;
	}
	export interface BoundingBoxFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		width: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateBoundingBoxFormGroup() {
		return new FormGroup<BoundingBoxFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			x: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			y: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface CheckBoxField {

		/** Required */
		bbox: BoundingBox;
		eval?: boolean | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		page: number;
		required?: boolean | null;

		/** Required */
		type: CheckBoxFieldType;
	}
	export interface CheckBoxFieldFormProperties {
		eval: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		page: FormControl<number | null | undefined>,
		required: FormControl<boolean | null | undefined>,

		/** Required */
		type: FormControl<CheckBoxFieldType | null | undefined>,
	}
	export function CreateCheckBoxFieldFormGroup() {
		return new FormGroup<CheckBoxFieldFormProperties>({
			eval: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			required: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<CheckBoxFieldType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CheckBoxFieldType { check = 'check' }

	export interface CreateOrUpdateTemplateRequest {

		/** Required */
		components: Array<string>;

		/** Required */
		css: string;
		footer_html?: string | null;

		/**
		 * An enumeration.
		 * Required
		 */
		format: CreateOrUpdateTemplateRequestFormat;
		header_html?: string | null;
		margin?: Margin;

		/** Required */
		name: string;

		/**
		 * An enumeration.
		 * Required
		 */
		orientation: CreateOrUpdateTemplateRequestOrientation;

		/** Required */
		preview_payload: string;

		/** Required */
		template_html: string;
	}
	export interface CreateOrUpdateTemplateRequestFormProperties {

		/** Required */
		css: FormControl<string | null | undefined>,
		footer_html: FormControl<string | null | undefined>,

		/**
		 * An enumeration.
		 * Required
		 */
		format: FormControl<CreateOrUpdateTemplateRequestFormat | null | undefined>,
		header_html: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * An enumeration.
		 * Required
		 */
		orientation: FormControl<CreateOrUpdateTemplateRequestOrientation | null | undefined>,

		/** Required */
		preview_payload: FormControl<string | null | undefined>,

		/** Required */
		template_html: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrUpdateTemplateRequestFormGroup() {
		return new FormGroup<CreateOrUpdateTemplateRequestFormProperties>({
			css: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			footer_html: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<CreateOrUpdateTemplateRequestFormat | null | undefined>(undefined, [Validators.required]),
			header_html: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orientation: new FormControl<CreateOrUpdateTemplateRequestOrientation | null | undefined>(undefined, [Validators.required]),
			preview_payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template_html: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateOrUpdateTemplateRequestFormat { a0 = 'a0', a1 = 'a1', a2 = 'a2', a3 = 'a3', a4 = 'a4', a5 = 'a5', a6 = 'a6' }

	export interface Margin {

		/** Minimum: 0 */
		bottom?: number | null;

		/** Minimum: 0 */
		left?: number | null;

		/** Minimum: 0 */
		right?: number | null;

		/** Minimum: 0 */
		top?: number | null;
	}
	export interface MarginFormProperties {

		/** Minimum: 0 */
		bottom: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		left: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		right: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		top: FormControl<number | null | undefined>,
	}
	export function CreateMarginFormGroup() {
		return new FormGroup<MarginFormProperties>({
			bottom: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			left: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			right: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			top: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export enum CreateOrUpdateTemplateRequestOrientation { landscape = 'landscape', portrait = 'portrait' }

	export interface DateField {

		/** Required */
		bbox: BoundingBox;

		/** Minimum: 0 */
		cell_count?: number | null;

		/** Minimum: 0 */
		cell_offset?: number | null;
		cells?: boolean | null;
		color?: string | null;
		font?: Font;

		/** Minimum: 0 */
		font_size?: number | null;

		/** Required */
		format: string;
		h_align?: HorizontalAlign;

		/**
		 * Max length: 5
		 * Min length: 5
		 */
		locale?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		page: number;
		required?: boolean | null;

		/** Required */
		type: DateFieldType;
		v_align?: VerticalAlign;
	}
	export interface DateFieldFormProperties {

		/** Minimum: 0 */
		cell_count: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		cell_offset: FormControl<number | null | undefined>,
		cells: FormControl<boolean | null | undefined>,
		color: FormControl<string | null | undefined>,
		font: FormControl<Font | null | undefined>,

		/** Minimum: 0 */
		font_size: FormControl<number | null | undefined>,

		/** Required */
		format: FormControl<string | null | undefined>,
		h_align: FormControl<HorizontalAlign | null | undefined>,

		/**
		 * Max length: 5
		 * Min length: 5
		 */
		locale: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		page: FormControl<number | null | undefined>,
		required: FormControl<boolean | null | undefined>,

		/** Required */
		type: FormControl<DateFieldType | null | undefined>,
		v_align: FormControl<VerticalAlign | null | undefined>,
	}
	export function CreateDateFieldFormGroup() {
		return new FormGroup<DateFieldFormProperties>({
			cell_count: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			cell_offset: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			cells: new FormControl<boolean | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			font: new FormControl<Font | null | undefined>(undefined),
			font_size: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			h_align: new FormControl<HorizontalAlign | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined, [Validators.minLength(5), Validators.maxLength(5)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			required: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<DateFieldType | null | undefined>(undefined, [Validators.required]),
			v_align: new FormControl<VerticalAlign | null | undefined>(undefined),
		});

	}


	/** An enumeration. */
	export enum Font { courier = 'courier', helvetica = 'helvetica', times_roman = 'times_roman' }


	/** An enumeration. */
	export enum HorizontalAlign { L = 'L', C = 'C', R = 'R' }

	export enum DateFieldType { date = 'date' }


	/** An enumeration. */
	export enum VerticalAlign { T = 'T', C = 'C', B = 'B' }

	export interface DesignerTemplate {

		/** Required */
		components: Array<string>;
		created_at?: Date | null;

		/** Required */
		css: string;
		footer_html?: string | null;

		/**
		 * An enumeration.
		 * Required
		 */
		format: CreateOrUpdateTemplateRequestFormat;
		header_html?: string | null;
		id?: string | null;

		/** Required */
		margin: Margin;

		/** Required */
		name: string;

		/**
		 * An enumeration.
		 * Required
		 */
		orientation: CreateOrUpdateTemplateRequestOrientation;

		/** Required */
		preview_payload: string;

		/** Required */
		template_html: string;
	}
	export interface DesignerTemplateFormProperties {
		created_at: FormControl<Date | null | undefined>,

		/** Required */
		css: FormControl<string | null | undefined>,
		footer_html: FormControl<string | null | undefined>,

		/**
		 * An enumeration.
		 * Required
		 */
		format: FormControl<CreateOrUpdateTemplateRequestFormat | null | undefined>,
		header_html: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * An enumeration.
		 * Required
		 */
		orientation: FormControl<CreateOrUpdateTemplateRequestOrientation | null | undefined>,

		/** Required */
		preview_payload: FormControl<string | null | undefined>,

		/** Required */
		template_html: FormControl<string | null | undefined>,
	}
	export function CreateDesignerTemplateFormGroup() {
		return new FormGroup<DesignerTemplateFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			css: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			footer_html: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<CreateOrUpdateTemplateRequestFormat | null | undefined>(undefined, [Validators.required]),
			header_html: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orientation: new FormControl<CreateOrUpdateTemplateRequestOrientation | null | undefined>(undefined, [Validators.required]),
			preview_payload: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template_html: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FillTemplateRequest {
		data?: string | null;
	}
	export interface FillTemplateRequestFormProperties {
		data: FormControl<string | null | undefined>,
	}
	export function CreateFillTemplateRequestFormGroup() {
		return new FormGroup<FillTemplateRequestFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An enumeration. */
	export enum Format { a0 = 'a0', a1 = 'a1', a2 = 'a2', a3 = 'a3', a4 = 'a4', a5 = 'a5', a6 = 'a6' }

	export interface GeneratePDFPayload {

		/** Required */
		data: string;
	}
	export interface GeneratePDFPayloadFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,
	}
	export function CreateGeneratePDFPayloadFormGroup() {
		return new FormGroup<GeneratePDFPayloadFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An enumeration. */
	export enum ImageAnchor { nw = 'nw', n = 'n', ne = 'ne', w = 'w', c = 'c', e = 'e', sw = 'sw', s = 's' }

	export interface ImageField {
		anchor?: ImageAnchor;

		/** Required */
		bbox: BoundingBox;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		page: number;
		required?: boolean | null;
		type?: ImageFieldType | null;
	}
	export interface ImageFieldFormProperties {
		anchor: FormControl<ImageAnchor | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		page: FormControl<number | null | undefined>,
		required: FormControl<boolean | null | undefined>,
		type: FormControl<ImageFieldType | null | undefined>,
	}
	export function CreateImageFieldFormGroup() {
		return new FormGroup<ImageFieldFormProperties>({
			anchor: new FormControl<ImageAnchor | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			required: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<ImageFieldType | null | undefined>(undefined),
		});

	}

	export enum ImageFieldType { image = 'image' }


	/** An enumeration. */
	export enum Orientation { landscape = 'landscape', portrait = 'portrait' }

	export interface PreviewModel {

		/** Required */
		css: string;

		/** Required */
		data: string;
		footer_html?: string | null;
		header_html?: string | null;

		/** Required */
		template_html: string;
	}
	export interface PreviewModelFormProperties {

		/** Required */
		css: FormControl<string | null | undefined>,

		/** Required */
		data: FormControl<string | null | undefined>,
		footer_html: FormControl<string | null | undefined>,
		header_html: FormControl<string | null | undefined>,

		/** Required */
		template_html: FormControl<string | null | undefined>,
	}
	export function CreatePreviewModelFormGroup() {
		return new FormGroup<PreviewModelFormProperties>({
			css: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			footer_html: new FormControl<string | null | undefined>(undefined),
			header_html: new FormControl<string | null | undefined>(undefined),
			template_html: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PreviewResponse {

		/** Required */
		html: string;
	}
	export interface PreviewResponseFormProperties {

		/** Required */
		html: FormControl<string | null | undefined>,
	}
	export function CreatePreviewResponseFormGroup() {
		return new FormGroup<PreviewResponseFormProperties>({
			html: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResponseError {

		/** Required */
		message: string;
	}
	export interface ResponseErrorFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateResponseErrorFormGroup() {
		return new FormGroup<ResponseErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResponseOk_DesignerTemplate_ {

		/** Required */
		results: DesignerTemplate;
	}
	export interface ResponseOk_DesignerTemplate_FormProperties {
	}
	export function CreateResponseOk_DesignerTemplate_FormGroup() {
		return new FormGroup<ResponseOk_DesignerTemplate_FormProperties>({
		});

	}

	export interface ResponseOk_HttpUrl_ {

		/**
		 * Required
		 * Max length: 2083
		 * Min length: 1
		 */
		results: string;
	}
	export interface ResponseOk_HttpUrl_FormProperties {

		/**
		 * Required
		 * Max length: 2083
		 * Min length: 1
		 */
		results: FormControl<string | null | undefined>,
	}
	export function CreateResponseOk_HttpUrl_FormGroup() {
		return new FormGroup<ResponseOk_HttpUrl_FormProperties>({
			results: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2083)]),
		});

	}

	export interface ResponseOk_List_appsapiroutes_templatesTemplate__ {

		/** Required */
		results: Array<Template>;
	}
	export interface ResponseOk_List_appsapiroutes_templatesTemplate__FormProperties {
	}
	export function CreateResponseOk_List_appsapiroutes_templatesTemplate__FormGroup() {
		return new FormGroup<ResponseOk_List_appsapiroutes_templatesTemplate__FormProperties>({
		});

	}

	export interface Template {
		created_at?: Date | null;
		fields?: Array<string>;
		id?: string | null;
		name?: string | null;

		/**
		 * Required
		 * Minimum: 0
		 */
		pages: number;
		size_bytes?: number | null;
	}
	export interface TemplateFormProperties {
		created_at: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		pages: FormControl<number | null | undefined>,
		size_bytes: FormControl<number | null | undefined>,
	}
	export function CreateTemplateFormGroup() {
		return new FormGroup<TemplateFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pages: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			size_bytes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResponseOk_List_fillrentitiesdesigner_templateDesignerTemplate__ {

		/** Required */
		results: Array<DesignerTemplate>;
	}
	export interface ResponseOk_List_fillrentitiesdesigner_templateDesignerTemplate__FormProperties {
	}
	export function CreateResponseOk_List_fillrentitiesdesigner_templateDesignerTemplate__FormGroup() {
		return new FormGroup<ResponseOk_List_fillrentitiesdesigner_templateDesignerTemplate__FormProperties>({
		});

	}

	export interface ResponseOk_NoneType_ {

		/** Required */
		results: any;
	}
	export interface ResponseOk_NoneType_FormProperties {

		/** Required */
		results: FormControl<any | null | undefined>,
	}
	export function CreateResponseOk_NoneType_FormGroup() {
		return new FormGroup<ResponseOk_NoneType_FormProperties>({
			results: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResponseOk_PreviewResponse_ {

		/** Required */
		results: PreviewResponse;
	}
	export interface ResponseOk_PreviewResponse_FormProperties {
	}
	export function CreateResponseOk_PreviewResponse_FormGroup() {
		return new FormGroup<ResponseOk_PreviewResponse_FormProperties>({
		});

	}

	export interface ResponseOk_Template_ {

		/** Required */
		results: Template;
	}
	export interface ResponseOk_Template_FormProperties {
	}
	export function CreateResponseOk_Template_FormGroup() {
		return new FormGroup<ResponseOk_Template_FormProperties>({
		});

	}

	export interface TextField {

		/** Required */
		bbox: BoundingBox;

		/** Minimum: 0 */
		cell_count?: number | null;

		/** Minimum: 0 */
		cell_offset?: number | null;
		cells?: boolean | null;
		color?: string | null;
		font?: Font;

		/** Minimum: 0 */
		font_size?: number | null;
		h_align?: HorizontalAlign;

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		page: number;
		required?: boolean | null;

		/** Required */
		type: TextFieldType;
		v_align?: VerticalAlign;
	}
	export interface TextFieldFormProperties {

		/** Minimum: 0 */
		cell_count: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		cell_offset: FormControl<number | null | undefined>,
		cells: FormControl<boolean | null | undefined>,
		color: FormControl<string | null | undefined>,
		font: FormControl<Font | null | undefined>,

		/** Minimum: 0 */
		font_size: FormControl<number | null | undefined>,
		h_align: FormControl<HorizontalAlign | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		page: FormControl<number | null | undefined>,
		required: FormControl<boolean | null | undefined>,

		/** Required */
		type: FormControl<TextFieldType | null | undefined>,
		v_align: FormControl<VerticalAlign | null | undefined>,
	}
	export function CreateTextFieldFormGroup() {
		return new FormGroup<TextFieldFormProperties>({
			cell_count: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			cell_offset: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			cells: new FormControl<boolean | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			font: new FormControl<Font | null | undefined>(undefined),
			font_size: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			h_align: new FormControl<HorizontalAlign | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			required: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<TextFieldType | null | undefined>(undefined, [Validators.required]),
			v_align: new FormControl<VerticalAlign | null | undefined>(undefined),
		});

	}

	export enum TextFieldType { text = 'text' }

	export interface UpdateTemplateRequest {

		/** Required */
		fields: Array<string>;
		name?: string | null;
	}
	export interface UpdateTemplateRequestFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTemplateRequestFormGroup() {
		return new FormGroup<UpdateTemplateRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List Templates
		 * Get designer/templates
		 * @return {ResponseOk_List_fillrentitiesdesigner_templateDesignerTemplate__} Successful Response
		 */
		List_templates_designer_templates_get(limit: number | null | undefined, offset: number | null | undefined): Observable<ResponseOk_List_fillrentitiesdesigner_templateDesignerTemplate__> {
			return this.http.get<ResponseOk_List_fillrentitiesdesigner_templateDesignerTemplate__>(this.baseUri + 'designer/templates?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Create Template
		 * Post designer/templates
		 * @return {void} 
		 */
		Create_template_designer_templates_post(requestBody: CreateOrUpdateTemplateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'designer/templates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Preview
		 * Post designer/templates/preview
		 * @return {ResponseOk_PreviewResponse_} Successful Response
		 */
		Preview_designer_templates_preview_post(requestBody: PreviewModel): Observable<ResponseOk_PreviewResponse_> {
			return this.http.post<ResponseOk_PreviewResponse_>(this.baseUri + 'designer/templates/preview', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete
		 * Delete designer/templates/{id}
		 * @return {ResponseOk_NoneType_} Successful Response
		 */
		Delete_designer_templates__id__delete(id: string): Observable<ResponseOk_NoneType_> {
			return this.http.delete<ResponseOk_NoneType_>(this.baseUri + 'designer/templates/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * List Templates
		 * Get designer/templates/{id}
		 * @return {ResponseOk_DesignerTemplate_} Successful Response
		 */
		List_templates_designer_templates__id__get(id: string): Observable<ResponseOk_DesignerTemplate_> {
			return this.http.get<ResponseOk_DesignerTemplate_>(this.baseUri + 'designer/templates/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update Template
		 * Put designer/templates/{id}
		 * @return {ResponseOk_DesignerTemplate_} Successful Response
		 */
		Update_template_designer_templates__id__put(id: string, requestBody: CreateOrUpdateTemplateRequest): Observable<ResponseOk_DesignerTemplate_> {
			return this.http.put<ResponseOk_DesignerTemplate_>(this.baseUri + 'designer/templates/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generate Pdf
		 * Post designer/templates/{id}/generate
		 * @return {any} Successful Response
		 */
		Generate_pdf_designer_templates__id__generate_post(id: string, requestBody: GeneratePDFPayload): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'designer/templates/' + (id == null ? '' : encodeURIComponent(id)) + '/generate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List
		 * Get templates
		 * @return {ResponseOk_List_appsapiroutes_templatesTemplate__} Successful Response
		 */
		List(limit: number | null | undefined, offset: number | null | undefined): Observable<ResponseOk_List_appsapiroutes_templatesTemplate__> {
			return this.http.get<ResponseOk_List_appsapiroutes_templatesTemplate__>(this.baseUri + 'templates?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Delete
		 * Delete templates/{id}
		 * @return {ResponseOk_NoneType_} Successful Response
		 */
		Delete__templates__id__delete(id: string): Observable<ResponseOk_NoneType_> {
			return this.http.delete<ResponseOk_NoneType_>(this.baseUri + 'templates/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Get Template
		 * Get templates/{id}
		 * @return {ResponseOk_Template_} Successful Response
		 */
		Get(id: string): Observable<ResponseOk_Template_> {
			return this.http.get<ResponseOk_Template_>(this.baseUri + 'templates/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update
		 * Put templates/{id}
		 * @return {ResponseOk_Template_} Successful Response
		 */
		Update(id: string, requestBody: UpdateTemplateRequest): Observable<ResponseOk_Template_> {
			return this.http.put<ResponseOk_Template_>(this.baseUri + 'templates/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get File
		 * Get templates/{id}/file
		 * @return {ResponseOk_HttpUrl_} Successful Response
		 */
		Get_file_templates__id__file_get(id: string): Observable<ResponseOk_HttpUrl_> {
			return this.http.get<ResponseOk_HttpUrl_>(this.baseUri + 'templates/' + (id == null ? '' : encodeURIComponent(id)) + '/file', {});
		}

		/**
		 * Fill
		 * Post templates/{id}/fill
		 * @return {any} Successful Response
		 */
		Fill(id: string, requestBody: FillTemplateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'templates/' + (id == null ? '' : encodeURIComponent(id)) + '/fill', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

