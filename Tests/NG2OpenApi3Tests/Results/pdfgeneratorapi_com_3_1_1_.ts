import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchDataElement {
		data?: Data;

		/** Template id */
		template?: number | null;
	}
	export interface BatchDataElementFormProperties {

		/** Template id */
		template: FormControl<number | null | undefined>,
	}
	export function CreateBatchDataElementFormGroup() {
		return new FormGroup<BatchDataElementFormProperties>({
			template: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Data {
		id?: number | null;
		name?: string | null;
	}
	export interface DataFormProperties {
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateDataFormGroup() {
		return new FormGroup<DataFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Template component definition */
	export interface Component {

		/** Defines component class/type */
		cls?: ComponentCls | null;

		/** Defines data field for Table and Container components which are used to iterate over list of items */
		dataIndex?: string | null;

		/** Height in units */
		height?: number | null;

		/** Component id */
		id?: string | null;

		/** Position from the page left in units */
		left?: number | null;

		/** Position from the page top in units */
		top?: number | null;

		/** Component value */
		value?: string | null;

		/** Width in units */
		width?: number | null;

		/** Defines the rendering order on page. Components with smaller zindex are rendered before */
		zindex?: number | null;
	}

	/** Template component definition */
	export interface ComponentFormProperties {

		/** Defines component class/type */
		cls: FormControl<ComponentCls | null | undefined>,

		/** Defines data field for Table and Container components which are used to iterate over list of items */
		dataIndex: FormControl<string | null | undefined>,

		/** Height in units */
		height: FormControl<number | null | undefined>,

		/** Component id */
		id: FormControl<string | null | undefined>,

		/** Position from the page left in units */
		left: FormControl<number | null | undefined>,

		/** Position from the page top in units */
		top: FormControl<number | null | undefined>,

		/** Component value */
		value: FormControl<string | null | undefined>,

		/** Width in units */
		width: FormControl<number | null | undefined>,

		/** Defines the rendering order on page. Components with smaller zindex are rendered before */
		zindex: FormControl<number | null | undefined>,
	}
	export function CreateComponentFormGroup() {
		return new FormGroup<ComponentFormProperties>({
			cls: new FormControl<ComponentCls | null | undefined>(undefined),
			dataIndex: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
			zindex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ComponentCls { labelComponent = 0, numberComponent = 1, textComponent = 2, imageComponent = 3, dateComponent = 4, hlineComponent = 5, vlineComponent = 6, tableComponent = 7, compositeComponent = 8, barcodeComponent = 9, qrcodeComponent = 10, chartComponent = 11, rectangleComponent = 12, headerComponent = 13, footerComponent = 14, checkboxComponent = 15, radioComponent = 16 }


	/** Template object */
	export interface Template {

		/** Unique identifier */
		id?: number | null;

		/** Timestamp when the template was modified */
		modified?: string | null;

		/** Template name */
		name?: string | null;

		/** Indicates if the workspace is the owner of the template */
		owner?: boolean | null;

		/** A list of tags assigned to a template */
		tags?: Array<string>;
	}

	/** Template object */
	export interface TemplateFormProperties {

		/** Unique identifier */
		id: FormControl<number | null | undefined>,

		/** Timestamp when the template was modified */
		modified: FormControl<string | null | undefined>,

		/** Template name */
		name: FormControl<string | null | undefined>,

		/** Indicates if the workspace is the owner of the template */
		owner: FormControl<boolean | null | undefined>,
	}
	export function CreateTemplateFormGroup() {
		return new FormGroup<TemplateFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			modified: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TemplateDefinition {

		/** Defines filter and sort option for root data set. */
		dataSettings?: TemplateDefinitionDataSettings;

		/** Configuration preferences for the editor */
		editor?: TemplateDefinitionEditor;

		/** Unique identifier */
		id?: number | null;

		/** Indicates if the template is a draft or published. */
		isDraft?: boolean | null;

		/** Defines template layout (e.g page format, margins). */
		layout?: TemplateDefinitionLayout;

		/** Template name */
		name?: string | null;

		/** Defines page or label size, margins and components on page or label */
		TemplateDefinitionPages?: Array<TemplateDefinitionPages>;

		/** A list of tags assigned to a template */
		tags?: Array<string>;
	}
	export interface TemplateDefinitionFormProperties {

		/** Unique identifier */
		id: FormControl<number | null | undefined>,

		/** Indicates if the template is a draft or published. */
		isDraft: FormControl<boolean | null | undefined>,

		/** Template name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTemplateDefinitionFormGroup() {
		return new FormGroup<TemplateDefinitionFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			isDraft: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateDefinitionDataSettings {
		filterBy?: Array<string>;
		sortBy?: Array<string>;
	}
	export interface TemplateDefinitionDataSettingsFormProperties {
	}
	export function CreateTemplateDefinitionDataSettingsFormGroup() {
		return new FormGroup<TemplateDefinitionDataSettingsFormProperties>({
		});

	}

	export interface TemplateDefinitionEditor {
		heightMultiplier?: number | null;
	}
	export interface TemplateDefinitionEditorFormProperties {
		heightMultiplier: FormControl<number | null | undefined>,
	}
	export function CreateTemplateDefinitionEditorFormGroup() {
		return new FormGroup<TemplateDefinitionEditorFormProperties>({
			heightMultiplier: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TemplateDefinitionLayout {

		/** Defines how many pages or labels should be empty */
		emptyLabels?: number | null;

		/** Defines template page size */
		format?: TemplateDefinitionLayoutFormat | null;

		/** Page height in units */
		height?: number | null;

		/** Page margins in units */
		margins?: TemplateDefinitionLayoutMargins;

		/** Page orientation */
		orientation?: TemplateDefinitionLayoutOrientation | null;

		/** Defines page size if layout is repeated on the page e.g sheet labels */
		repeatLayout?: TemplateDefinitionLayoutRepeatLayout;

		/** Page rotation in degrees */
		rotation?: TemplateDefinitionLayoutRotation;

		/** Measure unit */
		unit?: TemplateDefinitionLayoutUnit | null;

		/** Page width in units */
		width?: number | null;
	}
	export interface TemplateDefinitionLayoutFormProperties {

		/** Defines how many pages or labels should be empty */
		emptyLabels: FormControl<number | null | undefined>,

		/** Defines template page size */
		format: FormControl<TemplateDefinitionLayoutFormat | null | undefined>,

		/** Page height in units */
		height: FormControl<number | null | undefined>,

		/** Page orientation */
		orientation: FormControl<TemplateDefinitionLayoutOrientation | null | undefined>,

		/** Page rotation in degrees */
		rotation: FormControl<TemplateDefinitionLayoutRotation | null | undefined>,

		/** Measure unit */
		unit: FormControl<TemplateDefinitionLayoutUnit | null | undefined>,

		/** Page width in units */
		width: FormControl<number | null | undefined>,
	}
	export function CreateTemplateDefinitionLayoutFormGroup() {
		return new FormGroup<TemplateDefinitionLayoutFormProperties>({
			emptyLabels: new FormControl<number | null | undefined>(undefined),
			format: new FormControl<TemplateDefinitionLayoutFormat | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			orientation: new FormControl<TemplateDefinitionLayoutOrientation | null | undefined>(undefined),
			rotation: new FormControl<TemplateDefinitionLayoutRotation | null | undefined>(undefined),
			unit: new FormControl<TemplateDefinitionLayoutUnit | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TemplateDefinitionLayoutFormat { A4 = 0, letter = 1, custom = 2 }

	export interface TemplateDefinitionLayoutMargins {
		bottom?: number | null;
		left?: number | null;
		right?: number | null;
		top?: number | null;
	}
	export interface TemplateDefinitionLayoutMarginsFormProperties {
		bottom: FormControl<number | null | undefined>,
		left: FormControl<number | null | undefined>,
		right: FormControl<number | null | undefined>,
		top: FormControl<number | null | undefined>,
	}
	export function CreateTemplateDefinitionLayoutMarginsFormGroup() {
		return new FormGroup<TemplateDefinitionLayoutMarginsFormProperties>({
			bottom: new FormControl<number | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined),
			right: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TemplateDefinitionLayoutOrientation { portrait = 0, landscape = 1 }

	export interface TemplateDefinitionLayoutRepeatLayout {

		/** Defines template page size */
		format?: TemplateDefinitionLayoutFormat | null;

		/** Page height in units */
		height?: number | null;

		/** Page width in units */
		width?: number | null;
	}
	export interface TemplateDefinitionLayoutRepeatLayoutFormProperties {

		/** Defines template page size */
		format: FormControl<TemplateDefinitionLayoutFormat | null | undefined>,

		/** Page height in units */
		height: FormControl<number | null | undefined>,

		/** Page width in units */
		width: FormControl<number | null | undefined>,
	}
	export function CreateTemplateDefinitionLayoutRepeatLayoutFormGroup() {
		return new FormGroup<TemplateDefinitionLayoutRepeatLayoutFormProperties>({
			format: new FormControl<TemplateDefinitionLayoutFormat | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TemplateDefinitionLayoutRotation { _0 = 0, _90 = 1, _180 = 2, _270 = 3 }

	export enum TemplateDefinitionLayoutUnit { cm = 0, in = 1 }

	export interface TemplateDefinitionPages {
		components?: Array<Component>;

		/** Page height in units */
		height?: number | null;
		margins?: TemplateDefinitionPagesMargins;

		/** Page width in units */
		width?: number | null;
	}
	export interface TemplateDefinitionPagesFormProperties {

		/** Page height in units */
		height: FormControl<number | null | undefined>,

		/** Page width in units */
		width: FormControl<number | null | undefined>,
	}
	export function CreateTemplateDefinitionPagesFormGroup() {
		return new FormGroup<TemplateDefinitionPagesFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TemplateDefinitionPagesMargins {

		/** Page or label margin from bottom */
		bottom?: number | null;

		/** Page or label margin from right */
		right?: number | null;
	}
	export interface TemplateDefinitionPagesMarginsFormProperties {

		/** Page or label margin from bottom */
		bottom: FormControl<number | null | undefined>,

		/** Page or label margin from right */
		right: FormControl<number | null | undefined>,
	}
	export function CreateTemplateDefinitionPagesMarginsFormGroup() {
		return new FormGroup<TemplateDefinitionPagesMarginsFormProperties>({
			bottom: new FormControl<number | null | undefined>(undefined),
			right: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Template configuration */
	export interface TemplateDefinitionNew {

		/** Indicates if the template is a draft or published. */
		isDraft?: boolean | null;

		/** Defines template layout (e.g page format, margins). */
		layout?: TemplateDefinitionNewLayout;

		/**
		 * Template name
		 * Required
		 */
		name: string;

		/** Defines page or label size, margins and components on page or label */
		TemplateDefinitionNewPages?: Array<TemplateDefinitionNewPages>;

		/** A list of tags assigned to a template */
		tags?: Array<string>;
	}

	/** Template configuration */
	export interface TemplateDefinitionNewFormProperties {

		/** Indicates if the template is a draft or published. */
		isDraft: FormControl<boolean | null | undefined>,

		/**
		 * Template name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTemplateDefinitionNewFormGroup() {
		return new FormGroup<TemplateDefinitionNewFormProperties>({
			isDraft: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TemplateDefinitionNewLayout {

		/** Defines how many pages or labels should be empty */
		emptyLabels?: number | null;

		/** Defines template page size */
		format?: TemplateDefinitionLayoutFormat | null;

		/** Page height in units */
		height?: number | null;

		/** Page margins in units */
		margins?: TemplateDefinitionNewLayoutMargins;

		/** Page orientation */
		orientation?: TemplateDefinitionLayoutOrientation | null;

		/** Defines page size if layout is repeated on the page e.g sheet labels */
		repeatLayout?: TemplateDefinitionNewLayoutRepeatLayout;

		/** Page rotation in degrees */
		rotaion?: TemplateDefinitionNewLayoutRotaion;

		/** Measure unit */
		unit?: TemplateDefinitionLayoutUnit | null;

		/** Page width in units */
		width?: number | null;
	}
	export interface TemplateDefinitionNewLayoutFormProperties {

		/** Defines how many pages or labels should be empty */
		emptyLabels: FormControl<number | null | undefined>,

		/** Defines template page size */
		format: FormControl<TemplateDefinitionLayoutFormat | null | undefined>,

		/** Page height in units */
		height: FormControl<number | null | undefined>,

		/** Page orientation */
		orientation: FormControl<TemplateDefinitionLayoutOrientation | null | undefined>,

		/** Page rotation in degrees */
		rotaion: FormControl<TemplateDefinitionNewLayoutRotaion | null | undefined>,

		/** Measure unit */
		unit: FormControl<TemplateDefinitionLayoutUnit | null | undefined>,

		/** Page width in units */
		width: FormControl<number | null | undefined>,
	}
	export function CreateTemplateDefinitionNewLayoutFormGroup() {
		return new FormGroup<TemplateDefinitionNewLayoutFormProperties>({
			emptyLabels: new FormControl<number | null | undefined>(undefined),
			format: new FormControl<TemplateDefinitionLayoutFormat | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			orientation: new FormControl<TemplateDefinitionLayoutOrientation | null | undefined>(undefined),
			rotaion: new FormControl<TemplateDefinitionNewLayoutRotaion | null | undefined>(undefined),
			unit: new FormControl<TemplateDefinitionLayoutUnit | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TemplateDefinitionNewLayoutMargins {
		bottom?: number | null;
		left?: number | null;
		right?: number | null;
		top?: number | null;
	}
	export interface TemplateDefinitionNewLayoutMarginsFormProperties {
		bottom: FormControl<number | null | undefined>,
		left: FormControl<number | null | undefined>,
		right: FormControl<number | null | undefined>,
		top: FormControl<number | null | undefined>,
	}
	export function CreateTemplateDefinitionNewLayoutMarginsFormGroup() {
		return new FormGroup<TemplateDefinitionNewLayoutMarginsFormProperties>({
			bottom: new FormControl<number | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined),
			right: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TemplateDefinitionNewLayoutRepeatLayout {

		/** Defines template page size */
		format?: TemplateDefinitionLayoutFormat | null;

		/** Page height in units */
		height?: number | null;

		/** Page width in units */
		width?: number | null;
	}
	export interface TemplateDefinitionNewLayoutRepeatLayoutFormProperties {

		/** Defines template page size */
		format: FormControl<TemplateDefinitionLayoutFormat | null | undefined>,

		/** Page height in units */
		height: FormControl<number | null | undefined>,

		/** Page width in units */
		width: FormControl<number | null | undefined>,
	}
	export function CreateTemplateDefinitionNewLayoutRepeatLayoutFormGroup() {
		return new FormGroup<TemplateDefinitionNewLayoutRepeatLayoutFormProperties>({
			format: new FormControl<TemplateDefinitionLayoutFormat | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TemplateDefinitionNewLayoutRotaion { _0 = 0, _90 = 1, _180 = 2, _270 = 3 }

	export interface TemplateDefinitionNewPages {
		components?: Array<Component>;

		/** Page height in units */
		height?: number | null;
		margins?: TemplateDefinitionNewPagesMargins;

		/** Page width in units */
		width?: number | null;
	}
	export interface TemplateDefinitionNewPagesFormProperties {

		/** Page height in units */
		height: FormControl<number | null | undefined>,

		/** Page width in units */
		width: FormControl<number | null | undefined>,
	}
	export function CreateTemplateDefinitionNewPagesFormGroup() {
		return new FormGroup<TemplateDefinitionNewPagesFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TemplateDefinitionNewPagesMargins {

		/** Page or label margin from bottom */
		bottom?: number | null;

		/** Page or label margin from right */
		right?: number | null;
	}
	export interface TemplateDefinitionNewPagesMarginsFormProperties {

		/** Page or label margin from bottom */
		bottom: FormControl<number | null | undefined>,

		/** Page or label margin from right */
		right: FormControl<number | null | undefined>,
	}
	export function CreateTemplateDefinitionNewPagesMarginsFormGroup() {
		return new FormGroup<TemplateDefinitionNewPagesMarginsFormProperties>({
			bottom: new FormControl<number | null | undefined>(undefined),
			right: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Workspace {
		created_at?: string | null;

		/** Internal workspace id */
		id?: number | null;

		/** The unique workspace idenfitifer specified by your application */
		identifier?: string | null;

		/** True if a master workspace */
		is_master_workspace?: boolean | null;
	}
	export interface WorkspaceFormProperties {
		created_at: FormControl<string | null | undefined>,

		/** Internal workspace id */
		id: FormControl<number | null | undefined>,

		/** The unique workspace idenfitifer specified by your application */
		identifier: FormControl<string | null | undefined>,

		/** True if a master workspace */
		is_master_workspace: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkspaceFormGroup() {
		return new FormGroup<WorkspaceFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			is_master_workspace: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get templates
		 * Returns a list of templates available for the authenticated workspace
		 * Get templates
		 * @return {GetTemplatesReturn} An array of template objects
		 */
		GetTemplates(): Observable<GetTemplatesReturn> {
			return this.http.get<GetTemplatesReturn>(this.baseUri + 'templates', {});
		}

		/**
		 * Create template
		 * Creates a new template. If template configuration is not specified in the request body then an empty template is created. Template is placed to the workspace specified in authentication params. Template configuration must be sent in the request body.
		 * Post templates
		 * @param {TemplateDefinitionNew} requestBody Template configuration as JSON string
		 * @return {CreateTemplateReturn} Template configuration as JSON object
		 */
		CreateTemplate(requestBody: TemplateDefinitionNew): Observable<CreateTemplateReturn> {
			return this.http.post<CreateTemplateReturn>(this.baseUri + 'templates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generate document (multiple templates)
		 * Allows to merge multiples template with data and returns base64 encoded document or public URL to a document. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.
		 * Post templates/output
		 * @param {string} name Document name, returned in the meta data.
		 * @param {MergeTemplatesFormat} format Document format. The zip option will return a ZIP file with PDF files.
		 * @param {MergeTemplatesOutput} output Response format. With the url option, the document is stored for 30 days and automatically deleted.
		 * @param {Array<MergeTemplatesPostBody>} requestBody Data used to specify templates and data objects which are used to merge the template
		 * @return {MergeTemplatesReturn} Document data
		 */
		MergeTemplates(name: string | null | undefined, format: MergeTemplatesFormat | null | undefined, output: MergeTemplatesOutput | null | undefined, requestBody: Array<MergeTemplatesPostBody>): Observable<MergeTemplatesReturn> {
			return this.http.post<MergeTemplatesReturn>(this.baseUri + 'templates/output?name=' + (name == null ? '' : encodeURIComponent(name)) + '&format=' + format + '&output=' + output, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete template
		 * Deletes the template from workspace
		 * Delete templates/templateId
		 * @param {number} templateId Template unique identifier
		 * @return {DeleteTemplateReturn} The request was successfully executed.
		 */
		DeleteTemplate(templateId: number): Observable<DeleteTemplateReturn> {
			return this.http.delete<DeleteTemplateReturn>(this.baseUri + 'templates/templateId?templateId=' + templateId, {});
		}

		/**
		 * Get template
		 * Returns template configuration
		 * Get templates/templateId
		 * @param {number} templateId Template unique identifier
		 * @return {GetTemplateReturn} Template configuration as JSON object
		 */
		GetTemplate(templateId: number): Observable<GetTemplateReturn> {
			return this.http.get<GetTemplateReturn>(this.baseUri + 'templates/templateId?templateId=' + templateId, {});
		}

		/**
		 * Update template
		 * Updates template configuration. The template configuration for pages and layout must be complete as the entire configuration is replaced and not merged.
		 * Put templates/templateId
		 * @param {number} templateId Template unique identifier
		 * @param {TemplateDefinitionNew} requestBody Template configuration as JSON string
		 * @return {UpdateTemplateReturn} Template configuration as JSON object
		 */
		UpdateTemplate(templateId: number, requestBody: TemplateDefinitionNew): Observable<UpdateTemplateReturn> {
			return this.http.put<UpdateTemplateReturn>(this.baseUri + 'templates/templateId?templateId=' + templateId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Copy template
		 * Creates a copy of a template to the workspace specified in authentication parameters.
		 * Post templates/templateId/copy
		 * @param {number} templateId Template unique identifier
		 * @param {string} name Name for the copied template. If name is not specified then the original name is used.
		 * @return {CopyTemplateReturn} Template configuration as JSON object
		 */
		CopyTemplate(templateId: number, name: string | null | undefined): Observable<CopyTemplateReturn> {
			return this.http.post<CopyTemplateReturn>(this.baseUri + 'templates/templateId/copy?templateId=' + templateId + '&name=' + (name == null ? '' : encodeURIComponent(name)), null, {});
		}

		/**
		 * Open editor
		 * Returns an unique URL which you can use to redirect your user to the editor from your application or use the generated URL as iframe source to show the editor within your application.
		 * Post templates/templateId/editor
		 * @param {number} templateId Template unique identifier
		 * @param {GetEditorUrlLanguage} language Specify the editor UI language. Defaults to organization editor language.
		 * @param {string} requestBody Data used to generate the PDF. This can be JSON encoded string or a public URL to your JSON file.
		 * @return {GetEditorUrlReturn} Returns an URL which you can use to redirect your user to the editor or use as iframe source
		 */
		GetEditorUrl(templateId: number, language: GetEditorUrlLanguage | null | undefined, requestBody: string): Observable<GetEditorUrlReturn> {
			return this.http.post<GetEditorUrlReturn>(this.baseUri + 'templates/templateId/editor?templateId=' + templateId + '&language=' + language, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generate document
		 * Merges template with data and returns base64 encoded document or a public URL to a document. You can send json encoded data in request body or a public URL to your json file as the data parameter. NB! When the public URL option is used, the document is stored for 30 days and automatically deleted.
		 * Post templates/templateId/output
		 * @param {number} templateId Template unique identifier
		 * @param {string} name Document name, returned in the meta data.
		 * @param {MergeTemplatesFormat} format Document format. The zip option will return a ZIP file with PDF files.
		 * @param {MergeTemplatesOutput} output Response format. With the url option, the document is stored for 30 days and automatically deleted.
		 * @param {Data} requestBody Data used to generate the PDF. This can be JSON encoded string or a public URL to your JSON file.
		 * @return {MergeTemplateReturn} Document data
		 */
		MergeTemplate(templateId: number, name: string | null | undefined, format: MergeTemplatesFormat | null | undefined, output: MergeTemplatesOutput | null | undefined, requestBody: Data): Observable<MergeTemplateReturn> {
			return this.http.post<MergeTemplateReturn>(this.baseUri + 'templates/templateId/output?templateId=' + templateId + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&format=' + format + '&output=' + output, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete workspace
		 * Deletes the workspace
		 * Delete workspaces/workspaceId
		 * @param {string} workspaceId Workspace identifier
		 * @return {DeleteWorkspaceReturn} The request was successfully executed.
		 */
		DeleteWorkspace(workspaceId: string): Observable<DeleteWorkspaceReturn> {
			return this.http.delete<DeleteWorkspaceReturn>(this.baseUri + 'workspaces/workspaceId?workspaceId=' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)), {});
		}

		/**
		 * Get workspace
		 * Returns workspace information
		 * Get workspaces/workspaceId
		 * @param {string} workspaceId Workspace identifier
		 * @return {GetWorkspaceReturn} Workspace information
		 */
		GetWorkspace(workspaceId: string): Observable<GetWorkspaceReturn> {
			return this.http.get<GetWorkspaceReturn>(this.baseUri + 'workspaces/workspaceId?workspaceId=' + (workspaceId == null ? '' : encodeURIComponent(workspaceId)), {});
		}
	}

	export interface GetTemplatesReturn {
		response?: Array<Template>;
	}
	export interface GetTemplatesReturnFormProperties {
	}
	export function CreateGetTemplatesReturnFormGroup() {
		return new FormGroup<GetTemplatesReturnFormProperties>({
		});

	}

	export interface CreateTemplateReturn {
		response?: TemplateDefinition;
	}
	export interface CreateTemplateReturnFormProperties {
	}
	export function CreateCreateTemplateReturnFormGroup() {
		return new FormGroup<CreateTemplateReturnFormProperties>({
		});

	}

	export enum MergeTemplatesFormat { pdf = 0, html = 1, zip = 2, xlsx = 3 }

	export enum MergeTemplatesOutput { base64 = 0, url = 1, I = 2 }

	export interface MergeTemplatesPostBody {
		data?: Data;

		/** Template id */
		template?: number | null;
	}
	export interface MergeTemplatesPostBodyFormProperties {

		/** Template id */
		template: FormControl<number | null | undefined>,
	}
	export function CreateMergeTemplatesPostBodyFormGroup() {
		return new FormGroup<MergeTemplatesPostBodyFormProperties>({
			template: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MergeTemplatesReturn {
		meta?: MergeTemplatesReturnMeta;

		/** Base64 encoded document if the output=base64 is used or URL to the document when the output=url is used. */
		response?: string | null;
	}
	export interface MergeTemplatesReturnFormProperties {

		/** Base64 encoded document if the output=base64 is used or URL to the document when the output=url is used. */
		response: FormControl<string | null | undefined>,
	}
	export function CreateMergeTemplatesReturnFormGroup() {
		return new FormGroup<MergeTemplatesReturnFormProperties>({
			response: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MergeTemplatesReturnMeta {

		/** Document content type. */
		'content-type'?: string | null;

		/** Document name without the file extension. */
		display_name?: string | null;

		/** Document encoding */
		encoding?: string | null;

		/** Document name. This value is automatically generated if name attribute is not defined in request. */
		name?: string | null;
	}
	export interface MergeTemplatesReturnMetaFormProperties {

		/** Document content type. */
		'content-type': FormControl<string | null | undefined>,

		/** Document name without the file extension. */
		display_name: FormControl<string | null | undefined>,

		/** Document encoding */
		encoding: FormControl<string | null | undefined>,

		/** Document name. This value is automatically generated if name attribute is not defined in request. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMergeTemplatesReturnMetaFormGroup() {
		return new FormGroup<MergeTemplatesReturnMetaFormProperties>({
			'content-type': new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteTemplateReturn {
		response?: DeleteTemplateReturnResponse;
	}
	export interface DeleteTemplateReturnFormProperties {
	}
	export function CreateDeleteTemplateReturnFormGroup() {
		return new FormGroup<DeleteTemplateReturnFormProperties>({
		});

	}

	export interface DeleteTemplateReturnResponse {
		success?: boolean | null;
	}
	export interface DeleteTemplateReturnResponseFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteTemplateReturnResponseFormGroup() {
		return new FormGroup<DeleteTemplateReturnResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetTemplateReturn {
		response?: TemplateDefinition;
	}
	export interface GetTemplateReturnFormProperties {
	}
	export function CreateGetTemplateReturnFormGroup() {
		return new FormGroup<GetTemplateReturnFormProperties>({
		});

	}

	export interface UpdateTemplateReturn {
		response?: TemplateDefinition;
	}
	export interface UpdateTemplateReturnFormProperties {
	}
	export function CreateUpdateTemplateReturnFormGroup() {
		return new FormGroup<UpdateTemplateReturnFormProperties>({
		});

	}

	export interface CopyTemplateReturn {
		response?: TemplateDefinition;
	}
	export interface CopyTemplateReturnFormProperties {
	}
	export function CreateCopyTemplateReturnFormGroup() {
		return new FormGroup<CopyTemplateReturnFormProperties>({
		});

	}

	export enum GetEditorUrlLanguage { en = 0, et = 1, cs = 2, sk = 3, ru = 4 }

	export interface GetEditorUrlReturn {
		response?: string | null;
	}
	export interface GetEditorUrlReturnFormProperties {
		response: FormControl<string | null | undefined>,
	}
	export function CreateGetEditorUrlReturnFormGroup() {
		return new FormGroup<GetEditorUrlReturnFormProperties>({
			response: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MergeTemplateReturn {
		meta?: MergeTemplateReturnMeta;

		/** Base64 encoded document if the output=base64 is used or URL to the document when the output=url is used. */
		response?: string | null;
	}
	export interface MergeTemplateReturnFormProperties {

		/** Base64 encoded document if the output=base64 is used or URL to the document when the output=url is used. */
		response: FormControl<string | null | undefined>,
	}
	export function CreateMergeTemplateReturnFormGroup() {
		return new FormGroup<MergeTemplateReturnFormProperties>({
			response: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MergeTemplateReturnMeta {

		/** Document content type. */
		'content-type'?: string | null;

		/** Document name without the file extension. */
		display_name?: string | null;

		/** Document encoding */
		encoding?: string | null;

		/** Document name. This value is automatically generated if name attribute is not defined in request. */
		name?: string | null;
	}
	export interface MergeTemplateReturnMetaFormProperties {

		/** Document content type. */
		'content-type': FormControl<string | null | undefined>,

		/** Document name without the file extension. */
		display_name: FormControl<string | null | undefined>,

		/** Document encoding */
		encoding: FormControl<string | null | undefined>,

		/** Document name. This value is automatically generated if name attribute is not defined in request. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateMergeTemplateReturnMetaFormGroup() {
		return new FormGroup<MergeTemplateReturnMetaFormProperties>({
			'content-type': new FormControl<string | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteWorkspaceReturn {
		response?: DeleteWorkspaceReturnResponse;
	}
	export interface DeleteWorkspaceReturnFormProperties {
	}
	export function CreateDeleteWorkspaceReturnFormGroup() {
		return new FormGroup<DeleteWorkspaceReturnFormProperties>({
		});

	}

	export interface DeleteWorkspaceReturnResponse {
		success?: boolean | null;
	}
	export interface DeleteWorkspaceReturnResponseFormProperties {
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteWorkspaceReturnResponseFormGroup() {
		return new FormGroup<DeleteWorkspaceReturnResponseFormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetWorkspaceReturn {
		response?: Workspace;
	}
	export interface GetWorkspaceReturnFormProperties {
	}
	export function CreateGetWorkspaceReturnFormGroup() {
		return new FormGroup<GetWorkspaceReturnFormProperties>({
		});

	}

}

