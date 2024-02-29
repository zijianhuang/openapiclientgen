import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Color {

		/**
		 * RGB-Blue color value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue?: number | null;

		/**
		 * RGB-Green color value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		green?: number | null;

		/**
		 * Hex-label of this color.
		 * Min length: 1
		 */
		hex?: string | null;

		/**
		 * Number of pixels that holds this color.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number_of_pixel?: number | null;

		/** Percentage of pixels that holds this color. */
		percentage?: string | null;

		/**
		 * RGB-Red color value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red?: number | null;
	}
	export interface ColorFormProperties {

		/**
		 * RGB-Blue color value
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		blue: FormControl<number | null | undefined>,

		/**
		 * RGB-Green color value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		green: FormControl<number | null | undefined>,

		/**
		 * Hex-label of this color.
		 * Min length: 1
		 */
		hex: FormControl<string | null | undefined>,

		/**
		 * Number of pixels that holds this color.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number_of_pixel: FormControl<number | null | undefined>,

		/** Percentage of pixels that holds this color. */
		percentage: FormControl<string | null | undefined>,

		/**
		 * RGB-Red color value.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		red: FormControl<number | null | undefined>,
	}
	export function CreateColorFormGroup() {
		return new FormGroup<ColorFormProperties>({
			blue: new FormControl<number | null | undefined>(undefined),
			green: new FormControl<number | null | undefined>(undefined),
			hex: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			number_of_pixel: new FormControl<number | null | undefined>(undefined),
			percentage: new FormControl<string | null | undefined>(undefined),
			red: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FileResponse {

		/** Returns the file_id. To apply processes to the uploaded file, this file_id must be referenced in the API-calls. */
		file_id?: string | null;
	}
	export interface FileResponseFormProperties {

		/** Returns the file_id. To apply processes to the uploaded file, this file_id must be referenced in the API-calls. */
		file_id: FormControl<string | null | undefined>,
	}
	export function CreateFileResponseFormGroup() {
		return new FormGroup<FileResponseFormProperties>({
			file_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PreviewResponse {

		/**
		 * Url from which the preview file can be downloaded.
		 * Min length: 1
		 * Max length: 256
		 */
		preview_img_url?: string | null;
	}
	export interface PreviewResponseFormProperties {

		/**
		 * Url from which the preview file can be downloaded.
		 * Min length: 1
		 * Max length: 256
		 */
		preview_img_url: FormControl<string | null | undefined>,
	}
	export function CreatePreviewResponseFormGroup() {
		return new FormGroup<PreviewResponseFormProperties>({
			preview_img_url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	export interface Process {

		/**
		 * Crops the image according to the specified mechanism. If you specify the size "WidthexHeight", the image will be cropped centered. If coordinates "x1,y1,x2,y2" are given, the image is cropped according to the coordinates. The image will be cropped to the size of the stories if "faces" are specified as. Example Centered: "crop": "200x300". Example Region: "crop": "200,300,150,300". Example Faces: "crop": "faces".
		 * Min length: 1
		 * Max length: 255
		 */
		crop?: string | null;

		/** Flips the image around the horizontal axis, from top to bottom. Example: "flip": true */
		flip?: boolean | null;

		/** Mirrors the image around the vertical axis, i.e. from right to left. Example: "mirror": true */
		mirror?: boolean | null;

		/**
		 * Schlüssel welcher Verarbeitungs-Algorithmus angewendet wird. Zur Auswahl stehen "logo-to-vector", "logo-super-resolution", "logo-segmentation" und "image-processing".
		 * Required
		 * Min length: 1
		 */
		processing_algorithm: string;

		/**
		 * Changes the size of the image according to the specified size. Example: "resize": "200x300".
		 * Min length: 1
		 * Max length: 255
		 */
		resize?: string | null;

		/**
		 * Rotates the image around the center according to the specified degree. Example: "rotate": 90
		 * Minimum: 0
		 * Maximum: 360
		 */
		rotate?: number | null;
	}
	export interface ProcessFormProperties {

		/**
		 * Crops the image according to the specified mechanism. If you specify the size "WidthexHeight", the image will be cropped centered. If coordinates "x1,y1,x2,y2" are given, the image is cropped according to the coordinates. The image will be cropped to the size of the stories if "faces" are specified as. Example Centered: "crop": "200x300". Example Region: "crop": "200,300,150,300". Example Faces: "crop": "faces".
		 * Min length: 1
		 * Max length: 255
		 */
		crop: FormControl<string | null | undefined>,

		/** Flips the image around the horizontal axis, from top to bottom. Example: "flip": true */
		flip: FormControl<boolean | null | undefined>,

		/** Mirrors the image around the vertical axis, i.e. from right to left. Example: "mirror": true */
		mirror: FormControl<boolean | null | undefined>,

		/**
		 * Schlüssel welcher Verarbeitungs-Algorithmus angewendet wird. Zur Auswahl stehen "logo-to-vector", "logo-super-resolution", "logo-segmentation" und "image-processing".
		 * Required
		 * Min length: 1
		 */
		processing_algorithm: FormControl<string | null | undefined>,

		/**
		 * Changes the size of the image according to the specified size. Example: "resize": "200x300".
		 * Min length: 1
		 * Max length: 255
		 */
		resize: FormControl<string | null | undefined>,

		/**
		 * Rotates the image around the center according to the specified degree. Example: "rotate": 90
		 * Minimum: 0
		 * Maximum: 360
		 */
		rotate: FormControl<number | null | undefined>,
	}
	export function CreateProcessFormGroup() {
		return new FormGroup<ProcessFormProperties>({
			crop: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			flip: new FormControl<boolean | null | undefined>(undefined),
			mirror: new FormControl<boolean | null | undefined>(undefined),
			processing_algorithm: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			resize: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			rotate: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(360)]),
		});

	}

	export interface Project {

		/** The Date when the project was created. */
		created?: Date | null;

		/** Id of the file on which the process was applied. */
		file_id?: string | null;

		/**
		 * Id of the created project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id?: number | null;

		/**
		 * Id of the paypal payment.
		 * Min length: 1
		 */
		paypal_payment_id?: string | null;
		process?: Process;

		/**
		 * Process which should applied. Processes are "color-classification".
		 * Required
		 * Min length: 1
		 */
		process_id: string;

		/**
		 * Number of the created project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		project_number?: number | null;

		/**
		 * Name of the project with which it was saved.
		 * Min length: 1
		 */
		project_title?: string | null;

		/** Id of the result file which the process created. */
		result_file_id?: string | null;
	}
	export interface ProjectFormProperties {

		/** The Date when the project was created. */
		created: FormControl<Date | null | undefined>,

		/** Id of the file on which the process was applied. */
		file_id: FormControl<string | null | undefined>,

		/**
		 * Id of the created project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Id of the paypal payment.
		 * Min length: 1
		 */
		paypal_payment_id: FormControl<string | null | undefined>,

		/**
		 * Process which should applied. Processes are "color-classification".
		 * Required
		 * Min length: 1
		 */
		process_id: FormControl<string | null | undefined>,

		/**
		 * Number of the created project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		project_number: FormControl<number | null | undefined>,

		/**
		 * Name of the project with which it was saved.
		 * Min length: 1
		 */
		project_title: FormControl<string | null | undefined>,

		/** Id of the result file which the process created. */
		result_file_id: FormControl<string | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			file_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			paypal_payment_id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			process_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			project_number: new FormControl<number | null | undefined>(undefined),
			project_title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			result_file_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectRequest {

		/**
		 * Id of the file on which the process is to be applied.
		 * Required
		 */
		file_id: string;
		process?: Process;

		/**
		 * Name of the project with which it is saved.
		 * Required
		 * Min length: 1
		 */
		project_title: string;
	}
	export interface ProjectRequestFormProperties {

		/**
		 * Id of the file on which the process is to be applied.
		 * Required
		 */
		file_id: FormControl<string | null | undefined>,

		/**
		 * Name of the project with which it is saved.
		 * Required
		 * Min length: 1
		 */
		project_title: FormControl<string | null | undefined>,
	}
	export function CreateProjectRequestFormGroup() {
		return new FormGroup<ProjectRequestFormProperties>({
			file_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			project_title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface ProjectResponse {

		/**
		 * Id of the created project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		project_id?: number | null;

		/**
		 * Number of the created project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		project_number?: number | null;

		/** Id of the result_file. This id must be specified to create the result_file_url. */
		result_file_id?: string | null;
	}
	export interface ProjectResponseFormProperties {

		/**
		 * Id of the created project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		project_id: FormControl<number | null | undefined>,

		/**
		 * Number of the created project.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		project_number: FormControl<number | null | undefined>,

		/** Id of the result_file. This id must be specified to create the result_file_url. */
		result_file_id: FormControl<string | null | undefined>,
	}
	export function CreateProjectResponseFormGroup() {
		return new FormGroup<ProjectResponseFormProperties>({
			project_id: new FormControl<number | null | undefined>(undefined),
			project_number: new FormControl<number | null | undefined>(undefined),
			result_file_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Report {

		/** The Date when the report was created. */
		created?: Date | null;

		/**
		 * Id of the file on which the report was applied.
		 * Required
		 */
		file_id: string;

		/**
		 * Process_id of the process which was applied. Processes are "color-classification".
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		process_id: number;

		/**
		 * Number of the created report.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		report_number: number;
		result?: Result;

		/**
		 * Result_id of the result which was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		result_id: number;
	}
	export interface ReportFormProperties {

		/** The Date when the report was created. */
		created: FormControl<Date | null | undefined>,

		/**
		 * Id of the file on which the report was applied.
		 * Required
		 */
		file_id: FormControl<string | null | undefined>,

		/**
		 * Process_id of the process which was applied. Processes are "color-classification".
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		process_id: FormControl<number | null | undefined>,

		/**
		 * Number of the created report.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		report_number: FormControl<number | null | undefined>,

		/**
		 * Result_id of the result which was created.
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		result_id: FormControl<number | null | undefined>,
	}
	export function CreateReportFormGroup() {
		return new FormGroup<ReportFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			file_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			process_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			report_number: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			result_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Result {
		colors?: Array<Color>;

		/**
		 * Height of image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/**
		 * Number of pixel in image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number_of_pixel_in_image?: number | null;

		/**
		 * Width of image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}
	export interface ResultFormProperties {

		/**
		 * Height of image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Number of pixel in image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number_of_pixel_in_image: FormControl<number | null | undefined>,

		/**
		 * Width of image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateResultFormGroup() {
		return new FormGroup<ResultFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			number_of_pixel_in_image: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ReportRequest {

		/**
		 * Id of the file on which the process is to be applied.
		 * Required
		 */
		file_id: string;

		/**
		 * Process which should applied. Processes are "color-classification".
		 * Required
		 * Min length: 1
		 */
		process: string;
	}
	export interface ReportRequestFormProperties {

		/**
		 * Id of the file on which the process is to be applied.
		 * Required
		 */
		file_id: FormControl<string | null | undefined>,

		/**
		 * Process which should applied. Processes are "color-classification".
		 * Required
		 * Min length: 1
		 */
		process: FormControl<string | null | undefined>,
	}
	export function CreateReportRequestFormGroup() {
		return new FormGroup<ReportRequestFormProperties>({
			file_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			process: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface ReportResponse {

		/** The Date when the project was created. */
		created?: Date | null;

		/**
		 * Id of the file on which the process was applied.
		 * Min length: 1
		 */
		file_id?: string | null;

		/**
		 * Process which was applied. Processes are "color-classification".
		 * Min length: 1
		 */
		processing_algorithm?: string | null;

		/**
		 * Number of the report which was created.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		report_number?: number | null;
		result?: Result;
	}
	export interface ReportResponseFormProperties {

		/** The Date when the project was created. */
		created: FormControl<Date | null | undefined>,

		/**
		 * Id of the file on which the process was applied.
		 * Min length: 1
		 */
		file_id: FormControl<string | null | undefined>,

		/**
		 * Process which was applied. Processes are "color-classification".
		 * Min length: 1
		 */
		processing_algorithm: FormControl<string | null | undefined>,

		/**
		 * Number of the report which was created.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		report_number: FormControl<number | null | undefined>,
	}
	export function CreateReportResponseFormGroup() {
		return new FormGroup<ReportResponseFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			file_id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			processing_algorithm: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			report_number: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResultResponse {

		/**
		 * Url from which the result file can be downloaded.
		 * Min length: 1
		 * Max length: 256
		 */
		result_file_url?: string | null;
	}
	export interface ResultResponseFormProperties {

		/**
		 * Url from which the result file can be downloaded.
		 * Min length: 1
		 * Max length: 256
		 */
		result_file_url: FormControl<string | null | undefined>,
	}
	export function CreateResultResponseFormGroup() {
		return new FormGroup<ResultResponseFormProperties>({
			result_file_url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get preview image of uploaded file
		 * This GET-Method returns the URL where the preview image of uploaded file can downloaded from.
		 * Get previews/{file_id}/
		 * @param {string} file_id Id of the file for which the preview_img_url is generated.
		 */
		Previews_read(file_id: string): Observable<PreviewResponse> {
			return this.http.get<PreviewResponse>(this.baseUri + 'previews/' + (file_id == null ? '' : encodeURIComponent(file_id)) + '/', {});
		}

		/**
		 * Get process list.
		 * This GET-Method lists all on logoraisr available processes.
		 * Get processes/
		 */
		Processes_list(): Observable<Process> {
			return this.http.get<Process>(this.baseUri + 'processes/', {});
		}

		/**
		 * Get user project list.
		 * This GET-Method lists the user's projects.
		 * Get projects/
		 */
		Projects_list(): Observable<Project> {
			return this.http.get<Project>(this.baseUri + 'projects/', {});
		}

		/**
		 * Create a new project.
		 * This POST-Method creates a new project.
		 * Post projects/
		 * @return {void} 
		 */
		Projects_create(requestBody: ProjectRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'projects/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get project details.
		 * This GET-Method returns a specific project.
		 * Get projects/{project_number}/
		 * @param {string} project_number Number of the project.
		 */
		Projects_read(project_number: string): Observable<Project> {
			return this.http.get<Project>(this.baseUri + 'projects/' + (project_number == null ? '' : encodeURIComponent(project_number)) + '/', {});
		}

		/**
		 * Get user report list.
		 * This GET method lists the user's reports.
		 * Get reports/
		 */
		Reports_list(): Observable<Report> {
			return this.http.get<Report>(this.baseUri + 'reports/', {});
		}

		/**
		 * Create a new report.
		 * This POST-Method creates a new report.
		 * Post reports/
		 * @return {void} 
		 */
		Reports_create(requestBody: ReportRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'reports/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get report details.
		 * This GET-Method returns the details of a specific report.
		 * Get reports/{report_number}/
		 */
		Reports_read(): Observable<Report> {
			return this.http.get<Report>(this.baseUri + 'reports/{report_number}/', {});
		}

		/**
		 * Get the result from image processing
		 * This GET-Method returns the URL where the result can downloaded from.
		 * Get results/{result_file_id}/
		 * @param {string} result_file_id Id of the result_file for which the result_file_url is generated.
		 */
		Results_read(result_file_id: string): Observable<ResultResponse> {
			return this.http.get<ResultResponse>(this.baseUri + 'results/' + (result_file_id == null ? '' : encodeURIComponent(result_file_id)) + '/', {});
		}
	}

}

