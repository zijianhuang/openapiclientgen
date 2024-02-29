import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Authentication_error {

		/** Required */
		error: string;
		status?: Authentication_errorStatus | null;
	}
	export interface Authentication_errorFormProperties {

		/** Required */
		error: FormControl<string | null | undefined>,
		status: FormControl<Authentication_errorStatus | null | undefined>,
	}
	export function CreateAuthentication_errorFormGroup() {
		return new FormGroup<Authentication_errorFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Authentication_errorStatus | null | undefined>(undefined),
		});

	}

	export enum Authentication_errorStatus { error = 'error' }

	export interface Combined_submission_action {

		/** Required */
		action_category: Combined_submission_actionAction_category;

		/** Required */
		action_type: Combined_submission_actionAction_type;

		/** Required */
		id: string;

		/** Required */
		integration_id: string;

		/** Required */
		result_data: string;

		/** Required */
		state: Combined_submission_actionState;
	}
	export interface Combined_submission_actionFormProperties {

		/** Required */
		action_category: FormControl<Combined_submission_actionAction_category | null | undefined>,

		/** Required */
		action_type: FormControl<Combined_submission_actionAction_type | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		integration_id: FormControl<string | null | undefined>,

		/** Required */
		result_data: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<Combined_submission_actionState | null | undefined>,
	}
	export function CreateCombined_submission_actionFormGroup() {
		return new FormGroup<Combined_submission_actionFormProperties>({
			action_category: new FormControl<Combined_submission_actionAction_category | null | undefined>(undefined, [Validators.required]),
			action_type: new FormControl<Combined_submission_actionAction_type | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			integration_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result_data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<Combined_submission_actionState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Combined_submission_actionAction_category { notification = 'notification', file_upload = 'file_upload' }

	export enum Combined_submission_actionAction_type { webhook = 'webhook', slack_webhook = 'slack_webhook', email = 'email', aws_s3_upload = 'aws_s3_upload' }

	export enum Combined_submission_actionState { pending = 'pending', processed = 'processed', failed = 'failed', error = 'error' }

	export interface Error {

		/** Required */
		error: string;

		/** Required */
		status: Authentication_errorStatus;
	}
	export interface ErrorFormProperties {

		/** Required */
		error: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<Authentication_errorStatus | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			error: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<Authentication_errorStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Invalid_request {

		/** Required */
		errors: Array<string>;

		/** Required */
		status: Authentication_errorStatus;
	}
	export interface Invalid_requestFormProperties {

		/** Required */
		status: FormControl<Authentication_errorStatus | null | undefined>,
	}
	export function CreateInvalid_requestFormGroup() {
		return new FormGroup<Invalid_requestFormProperties>({
			status: new FormControl<Authentication_errorStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Submission {
		actions?: Array<Submission_action>;
		batch_id?: string | null;
		data?: string | null;
		data_requests?: Array<Submission_data_request>;
		download_url?: string | null;
		editable?: boolean | null;

		/** Required */
		expired: boolean;
		expires_at?: string | null;

		/** Required */
		id: string;
		metadata?: string | null;
		pdf_hash?: string | null;
		permanent_download_url?: string | null;
		processed_at?: string | null;
		referrer?: string | null;
		source?: string | null;

		/** Required */
		state: SubmissionState;
		template_id?: string | null;

		/** Required */
		test: boolean;
		truncated_text?: string | null;
	}
	export interface SubmissionFormProperties {
		batch_id: FormControl<string | null | undefined>,
		data: FormControl<string | null | undefined>,
		download_url: FormControl<string | null | undefined>,
		editable: FormControl<boolean | null | undefined>,

		/** Required */
		expired: FormControl<boolean | null | undefined>,
		expires_at: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,
		pdf_hash: FormControl<string | null | undefined>,
		permanent_download_url: FormControl<string | null | undefined>,
		processed_at: FormControl<string | null | undefined>,
		referrer: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<SubmissionState | null | undefined>,
		template_id: FormControl<string | null | undefined>,

		/** Required */
		test: FormControl<boolean | null | undefined>,
		truncated_text: FormControl<string | null | undefined>,
	}
	export function CreateSubmissionFormGroup() {
		return new FormGroup<SubmissionFormProperties>({
			batch_id: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined),
			download_url: new FormControl<string | null | undefined>(undefined),
			editable: new FormControl<boolean | null | undefined>(undefined),
			expired: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			expires_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined),
			pdf_hash: new FormControl<string | null | undefined>(undefined),
			permanent_download_url: new FormControl<string | null | undefined>(undefined),
			processed_at: new FormControl<string | null | undefined>(undefined),
			referrer: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<SubmissionState | null | undefined>(undefined, [Validators.required]),
			template_id: new FormControl<string | null | undefined>(undefined),
			test: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			truncated_text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Submission_action {

		/** Required */
		action_category: Combined_submission_actionAction_category;

		/** Required */
		action_type: Combined_submission_actionAction_type;

		/** Required */
		id: string;

		/** Required */
		integration_id: string;

		/** Required */
		result_data: string;

		/** Required */
		state: Combined_submission_actionState;
	}
	export interface Submission_actionFormProperties {

		/** Required */
		action_category: FormControl<Combined_submission_actionAction_category | null | undefined>,

		/** Required */
		action_type: FormControl<Combined_submission_actionAction_type | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		integration_id: FormControl<string | null | undefined>,

		/** Required */
		result_data: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<Combined_submission_actionState | null | undefined>,
	}
	export function CreateSubmission_actionFormGroup() {
		return new FormGroup<Submission_actionFormProperties>({
			action_category: new FormControl<Combined_submission_actionAction_category | null | undefined>(undefined, [Validators.required]),
			action_type: new FormControl<Combined_submission_actionAction_type | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			integration_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			result_data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<Combined_submission_actionState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Submission_data_request {
		auth_phone_number_hash?: string | null;
		auth_provider?: string | null;
		auth_second_factor_type?: Submission_data_requestAuth_second_factor_type | null;
		auth_session_id_hash?: string | null;
		auth_session_started_at?: string | null;
		auth_type?: Submission_data_requestAuth_type | null;
		auth_user_id_hash?: string | null;
		auth_username_hash?: string | null;
		completed_at?: string | null;

		/** Required */
		email: string;

		/** Required */
		fields: Array<string>;

		/** Required */
		id: string;
		ip_address?: string | null;

		/** Required */
		metadata: string;

		/** Required */
		name: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		order: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sort_order: number;

		/** Required */
		state: Submission_data_requestState;
		submission_id?: string | null;
		user_agent?: string | null;
		viewed_at?: string | null;
	}
	export interface Submission_data_requestFormProperties {
		auth_phone_number_hash: FormControl<string | null | undefined>,
		auth_provider: FormControl<string | null | undefined>,
		auth_second_factor_type: FormControl<Submission_data_requestAuth_second_factor_type | null | undefined>,
		auth_session_id_hash: FormControl<string | null | undefined>,
		auth_session_started_at: FormControl<string | null | undefined>,
		auth_type: FormControl<Submission_data_requestAuth_type | null | undefined>,
		auth_user_id_hash: FormControl<string | null | undefined>,
		auth_username_hash: FormControl<string | null | undefined>,
		completed_at: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		ip_address: FormControl<string | null | undefined>,

		/** Required */
		metadata: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		order: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sort_order: FormControl<number | null | undefined>,

		/** Required */
		state: FormControl<Submission_data_requestState | null | undefined>,
		submission_id: FormControl<string | null | undefined>,
		user_agent: FormControl<string | null | undefined>,
		viewed_at: FormControl<string | null | undefined>,
	}
	export function CreateSubmission_data_requestFormGroup() {
		return new FormGroup<Submission_data_requestFormProperties>({
			auth_phone_number_hash: new FormControl<string | null | undefined>(undefined),
			auth_provider: new FormControl<string | null | undefined>(undefined),
			auth_second_factor_type: new FormControl<Submission_data_requestAuth_second_factor_type | null | undefined>(undefined),
			auth_session_id_hash: new FormControl<string | null | undefined>(undefined),
			auth_session_started_at: new FormControl<string | null | undefined>(undefined),
			auth_type: new FormControl<Submission_data_requestAuth_type | null | undefined>(undefined),
			auth_user_id_hash: new FormControl<string | null | undefined>(undefined),
			auth_username_hash: new FormControl<string | null | undefined>(undefined),
			completed_at: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ip_address: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			order: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sort_order: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<Submission_data_requestState | null | undefined>(undefined, [Validators.required]),
			submission_id: new FormControl<string | null | undefined>(undefined),
			user_agent: new FormControl<string | null | undefined>(undefined),
			viewed_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Submission_data_requestAuth_second_factor_type { none = 'none', phone_number = 'phone_number', totp = 'totp', mobile_push = 'mobile_push', security_key = 'security_key', fingerprint = 'fingerprint' }

	export enum Submission_data_requestAuth_type { none = 'none', password = 'password', oauth = 'oauth', email_link = 'email_link', phone_number = 'phone_number', ldap = 'ldap', saml = 'saml' }

	export enum Submission_data_requestState { pending = 'pending', completed = 'completed' }

	export enum SubmissionState { pending = 'pending', processed = 'processed', invalid_data = 'invalid_data', error = 'error', image_download_failed = 'image_download_failed', image_processing_failed = 'image_processing_failed', waiting_for_data_requests = 'waiting_for_data_requests', syntax_error = 'syntax_error', account_suspended = 'account_suspended', license_revoked = 'license_revoked', accidental = 'accidental' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Test Authentication
		 * Get authentication
		 * @return {TestAuthenticationReturn} authentication succeeded
		 */
		TestAuthentication(): Observable<TestAuthenticationReturn> {
			return this.http.get<TestAuthenticationReturn>(this.baseUri + 'authentication', {});
		}

		/**
		 * Get a list of all combined submissions
		 * Get combined_submissions
		 * @param {number} page Default: 1
		 *     Minimum: 1
		 * @param {number} per_page Default: 50
		 *     Minimum: 1    Maximum: 50
		 * @return {Array<ListCombinedSubmissionsReturn>} enumerate all combined submissions
		 */
		ListCombinedSubmissions(page: number | null | undefined, per_page: number | null | undefined): Observable<Array<ListCombinedSubmissionsReturn>> {
			return this.http.get<Array<ListCombinedSubmissionsReturn>>(this.baseUri + 'combined_submissions?page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Merge generated PDFs together
		 * Post combined_submissions
		 * @return {void} 
		 */
		CombineSubmissions(requestBody: CombineSubmissionsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'combined_submissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Expire a combined submission
		 * Delete combined_submissions/{combined_submission_id}
		 * @return {ExpireCombinedSubmissionReturn} submission was expired
		 */
		ExpireCombinedSubmission(combined_submission_id: string): Observable<ExpireCombinedSubmissionReturn> {
			return this.http.delete<ExpireCombinedSubmissionReturn>(this.baseUri + 'combined_submissions/' + (combined_submission_id == null ? '' : encodeURIComponent(combined_submission_id)), {});
		}

		/**
		 * Check the status of a combined submission (merged PDFs)
		 * Get combined_submissions/{combined_submission_id}
		 * @return {GetCombinedSubmissionReturn} processed combined submission found
		 */
		GetCombinedSubmission(combined_submission_id: string): Observable<GetCombinedSubmissionReturn> {
			return this.http.get<GetCombinedSubmissionReturn>(this.baseUri + 'combined_submissions/' + (combined_submission_id == null ? '' : encodeURIComponent(combined_submission_id)), {});
		}

		/**
		 * Merge submission PDFs, template PDFs, or custom files
		 * Post combined_submissions?v=2
		 * @return {void} 
		 */
		CombinePdfs(requestBody: CombinePdfsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'combined_submissions?v=2', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new custom file from a cached presign upload
		 * Post custom_files
		 * @return {void} 
		 */
		CreateCustomFileFromUpload(requestBody: CreateCustomFileFromUploadPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'custom_files', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Look up a submission data request
		 * Get data_requests/{data_request_id}
		 * @return {Submission_data_request} completed submission data request found
		 */
		GetDataRequest(data_request_id: string): Observable<Submission_data_request> {
			return this.http.get<Submission_data_request>(this.baseUri + 'data_requests/' + (data_request_id == null ? '' : encodeURIComponent(data_request_id)), {});
		}

		/**
		 * Update a submission data request
		 * Put data_requests/{data_request_id}
		 * @return {UpdateDataRequestReturn} submission data request updated
		 */
		UpdateDataRequest(data_request_id: string, requestBody: UpdateDataRequestPutBody): Observable<UpdateDataRequestReturn> {
			return this.http.put<UpdateDataRequestReturn>(this.baseUri + 'data_requests/' + (data_request_id == null ? '' : encodeURIComponent(data_request_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new data request token for form authentication
		 * Post data_requests/{data_request_id}/tokens
		 * @return {void} 
		 */
		CreateDataRequestToken(data_request_id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'data_requests/' + (data_request_id == null ? '' : encodeURIComponent(data_request_id)) + '/tokens', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a list of all folders
		 * Get folders/
		 * @param {string} parent_folder_id Filter By Folder Id
		 * @return {Array<ListFoldersReturn>} enumerate all folders
		 */
		ListFolders(parent_folder_id: string | null | undefined): Observable<Array<ListFoldersReturn>> {
			return this.http.get<Array<ListFoldersReturn>>(this.baseUri + 'folders/?parent_folder_id=' + (parent_folder_id == null ? '' : encodeURIComponent(parent_folder_id)), {});
		}

		/**
		 * Create a folder
		 * Post folders/
		 * @return {CreateFolderReturn} folder created inside another folder
		 */
		CreateFolder(requestBody: CreateFolderPostBody): Observable<CreateFolderReturn> {
			return this.http.post<CreateFolderReturn>(this.baseUri + 'folders/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a folder
		 * Delete folders/{folder_id}
		 * @return {DeleteFolderReturn} folder is empty
		 */
		DeleteFolder(folder_id: string): Observable<DeleteFolderReturn> {
			return this.http.delete<DeleteFolderReturn>(this.baseUri + 'folders/' + (folder_id == null ? '' : encodeURIComponent(folder_id)), {});
		}

		/**
		 * Move a folder
		 * Post folders/{folder_id}/move
		 * @return {MoveFolderToFolderReturn} move to root folder
		 */
		MoveFolderToFolder(folder_id: string, requestBody: MoveFolderToFolderPostBody): Observable<MoveFolderToFolderReturn> {
			return this.http.post<MoveFolderToFolderReturn>(this.baseUri + 'folders/' + (folder_id == null ? '' : encodeURIComponent(folder_id)) + '/move', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rename a folder
		 * Post folders/{folder_id}/rename
		 * @return {void} successful rename
		 */
		RenameFolder(folder_id: string, requestBody: RenameFolderPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'folders/' + (folder_id == null ? '' : encodeURIComponent(folder_id)) + '/rename', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all submissions
		 * Get submissions
		 * @param {number} limit Type: double
		 * @return {ListSubmissionsReturn} listing submissions
		 */
		ListSubmissions(cursor: string | null | undefined, limit: number | null | undefined, created_after: string | null | undefined, created_before: string | null | undefined, type: string | null | undefined, include_data: boolean | null | undefined): Observable<ListSubmissionsReturn> {
			return this.http.get<ListSubmissionsReturn>(this.baseUri + 'submissions?cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&created_after=' + (created_after == null ? '' : encodeURIComponent(created_after)) + '&created_before=' + (created_before == null ? '' : encodeURIComponent(created_before)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&include_data=' + include_data, {});
		}

		/**
		 * Generates multiple PDFs
		 * Post submissions/batches
		 * @return {BatchGeneratePdfsReturn} some PDFs with invalid data
		 */
		BatchGeneratePdfs(requestBody: BatchGeneratePdfsPostBody): Observable<BatchGeneratePdfsReturn> {
			return this.http.post<BatchGeneratePdfsReturn>(this.baseUri + 'submissions/batches', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Check the status of a submission batch job
		 * Get submissions/batches/{submission_batch_id}
		 * @return {GetSubmissionBatchReturn} processed submission batch found
		 */
		GetSubmissionBatch(submission_batch_id: string, include_submissions: boolean | null | undefined): Observable<GetSubmissionBatchReturn> {
			return this.http.get<GetSubmissionBatchReturn>(this.baseUri + 'submissions/batches/' + (submission_batch_id == null ? '' : encodeURIComponent(submission_batch_id)) + '&include_submissions=' + include_submissions, {});
		}

		/**
		 * Expire a PDF submission
		 * Delete submissions/{submission_id}
		 * @return {Submission} submission was expired
		 */
		ExpireSubmission(submission_id: string): Observable<Submission> {
			return this.http.delete<Submission>(this.baseUri + 'submissions/' + (submission_id == null ? '' : encodeURIComponent(submission_id)), {});
		}

		/**
		 * Check the status of a PDF
		 * Get submissions/{submission_id}
		 * @return {Submission} processed submission found
		 */
		GetSubmission(submission_id: string, include_data: boolean | null | undefined): Observable<Submission> {
			return this.http.get<Submission>(this.baseUri + 'submissions/' + (submission_id == null ? '' : encodeURIComponent(submission_id)) + '&include_data=' + include_data, {});
		}

		/**
		 * Get a list of all templates
		 * Get templates
		 * @param {string} query Search By Name
		 * @param {string} parent_folder_id Filter By Folder Id
		 * @param {number} page Default: 1
		 *     Minimum: 1
		 * @param {number} per_page Default: 50
		 *     Minimum: 1    Maximum: 50
		 * @return {Array<ListTemplatesReturn>} enumerate all templates
		 */
		ListTemplates(query: string | null | undefined, parent_folder_id: string | null | undefined, page: number | null | undefined, per_page: number | null | undefined): Observable<Array<ListTemplatesReturn>> {
			return this.http.get<Array<ListTemplatesReturn>>(this.baseUri + 'templates?query=' + (query == null ? '' : encodeURIComponent(query)) + '&parent_folder_id=' + (parent_folder_id == null ? '' : encodeURIComponent(parent_folder_id)) + '&page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Check the status of an uploaded template
		 * Get templates/{template_id}
		 * @return {GetTemplateReturn} template found
		 */
		GetTemplate(template_id: string): Observable<GetTemplateReturn> {
			return this.http.get<GetTemplateReturn>(this.baseUri + 'templates/' + (template_id == null ? '' : encodeURIComponent(template_id)), {});
		}

		/**
		 * Update a Template
		 * Put templates/{template_id}
		 * @return {UpdateTemplateReturn} update template success
		 */
		UpdateTemplate(template_id: string, requestBody: UpdateTemplatePutBody): Observable<UpdateTemplateReturn> {
			return this.http.put<UpdateTemplateReturn>(this.baseUri + 'templates/' + (template_id == null ? '' : encodeURIComponent(template_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add new fields to a Template
		 * Put templates/{template_id}/add_fields
		 * @return {AddFieldsToTemplateReturn} add fields success
		 */
		AddFieldsToTemplate(template_id: string, requestBody: AddFieldsToTemplatePutBody): Observable<AddFieldsToTemplateReturn> {
			return this.http.put<AddFieldsToTemplateReturn>(this.baseUri + 'templates/' + (template_id == null ? '' : encodeURIComponent(template_id)) + '/add_fields', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Copy a Template
		 * Post templates/{template_id}/copy
		 * @return {CopyTemplateReturn} copy template success
		 */
		CopyTemplate(template_id: string, requestBody: CopyTemplatePostBody): Observable<CopyTemplateReturn> {
			return this.http.post<CopyTemplateReturn>(this.baseUri + 'templates/' + (template_id == null ? '' : encodeURIComponent(template_id)) + '/copy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Move Template to folder
		 * Post templates/{template_id}/move
		 * @return {MoveTemplateToFolderReturn} move template success
		 */
		MoveTemplateToFolder(template_id: string, requestBody: MoveTemplateToFolderPostBody): Observable<MoveTemplateToFolderReturn> {
			return this.http.post<MoveTemplateToFolderReturn>(this.baseUri + 'templates/' + (template_id == null ? '' : encodeURIComponent(template_id)) + '/move', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch the JSON schema for a template
		 * Get templates/{template_id}/schema
		 * @return {GetTemplateSchemaReturn} template found
		 */
		GetTemplateSchema(template_id: string): Observable<GetTemplateSchemaReturn> {
			return this.http.get<GetTemplateSchemaReturn>(this.baseUri + 'templates/' + (template_id == null ? '' : encodeURIComponent(template_id)) + '/schema', {});
		}

		/**
		 * List all submissions for a given template
		 * Get templates/{template_id}/submissions
		 * @param {number} limit Type: double
		 * @return {PDFGetByTemplate_idAndCursorAndLimitAndCreated_afterAndCreated_beforeAndTypeAndInclude_dataReturn} listing submissions
		 */
		PDFGetByTemplate_idAndCursorAndLimitAndCreated_afterAndCreated_beforeAndTypeAndInclude_data(template_id: string, cursor: string | null | undefined, limit: number | null | undefined, created_after: string | null | undefined, created_before: string | null | undefined, type: string | null | undefined, include_data: boolean | null | undefined): Observable<PDFGetByTemplate_idAndCursorAndLimitAndCreated_afterAndCreated_beforeAndTypeAndInclude_dataReturn> {
			return this.http.get<PDFGetByTemplate_idAndCursorAndLimitAndCreated_afterAndCreated_beforeAndTypeAndInclude_dataReturn>(this.baseUri + 'templates/' + (template_id == null ? '' : encodeURIComponent(template_id)) + '/submissions&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&limit=' + limit + '&created_after=' + (created_after == null ? '' : encodeURIComponent(created_after)) + '&created_before=' + (created_before == null ? '' : encodeURIComponent(created_before)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&include_data=' + include_data, {});
		}

		/**
		 * Generates a new PDF
		 * Post templates/{template_id}/submissions
		 * @return {void} 
		 */
		GeneratePDF(template_id: string, requestBody: GeneratePDFPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'templates/' + (template_id == null ? '' : encodeURIComponent(template_id)) + '/submissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates multiple PDFs
		 * Post templates/{template_id}/submissions/batch
		 * @return {void} 
		 */
		BatchGeneratePdfV1(template_id: string, requestBody: Array<string>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'templates/' + (template_id == null ? '' : encodeURIComponent(template_id)) + '/submissions/batch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch the full template attributes
		 * Get templates/{template_id}?full=true
		 * @return {GetFullTemplateReturn} template found
		 */
		GetFullTemplate(template_id: string): Observable<GetFullTemplateReturn> {
			return this.http.get<GetFullTemplateReturn>(this.baseUri + 'templates/' + (template_id == null ? '' : encodeURIComponent(template_id)) + '?full=true', {});
		}

		/**
		 * Create a new PDF template from a cached presign upload
		 * Post templates?desc=cached_upload
		 * @return {void} 
		 */
		CreatePDFTemplateFromUpload(requestBody: CreatePDFTemplateFromUploadPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'templates?desc=cached_upload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new HTML template
		 * Post templates?desc=html
		 * @return {void} 
		 */
		CreateHTMLTemplate(requestBody: CreateHTMLTemplatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'templates?desc=html', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a presigned URL so that you can upload a file to our AWS S3 bucket
		 * Get uploads/presign
		 * @return {GetPresignUrlReturn} presign URL generated
		 */
		GetPresignUrl(): Observable<GetPresignUrlReturn> {
			return this.http.get<GetPresignUrlReturn>(this.baseUri + 'uploads/presign', {});
		}
	}

	export interface TestAuthenticationReturn {

		/** Required */
		status: TestAuthenticationReturnStatus;
	}
	export interface TestAuthenticationReturnFormProperties {

		/** Required */
		status: FormControl<TestAuthenticationReturnStatus | null | undefined>,
	}
	export function CreateTestAuthenticationReturnFormGroup() {
		return new FormGroup<TestAuthenticationReturnFormProperties>({
			status: new FormControl<TestAuthenticationReturnStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TestAuthenticationReturnStatus { success = 'success' }

	export interface ListCombinedSubmissionsReturn {
		actions?: Array<Combined_submission_action>;
		download_url?: string | null;
		error_message?: string | null;

		/** Required */
		expired: boolean;
		expires_at?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expires_in?: number | null;

		/** Required */
		id: string;
		metadata?: string | null;
		password?: string | null;
		pdf_hash?: string | null;

		/** Required */
		source_pdfs: Array<string>;

		/** Required */
		state: ListCombinedSubmissionsReturnState;

		/** Required */
		submission_ids: Array<string>;
	}
	export interface ListCombinedSubmissionsReturnFormProperties {
		download_url: FormControl<string | null | undefined>,
		error_message: FormControl<string | null | undefined>,

		/** Required */
		expired: FormControl<boolean | null | undefined>,
		expires_at: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expires_in: FormControl<number | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		pdf_hash: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<ListCombinedSubmissionsReturnState | null | undefined>,
	}
	export function CreateListCombinedSubmissionsReturnFormGroup() {
		return new FormGroup<ListCombinedSubmissionsReturnFormProperties>({
			download_url: new FormControl<string | null | undefined>(undefined),
			error_message: new FormControl<string | null | undefined>(undefined),
			expired: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			expires_at: new FormControl<string | null | undefined>(undefined),
			expires_in: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			pdf_hash: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ListCombinedSubmissionsReturnState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ListCombinedSubmissionsReturnState { pending = 'pending', processed = 'processed', error = 'error' }

	export interface CombineSubmissionsPostBody {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expires_in?: number | null;
		metadata?: string | null;
		password?: string | null;

		/** Required */
		submission_ids: Array<string>;
		test?: boolean | null;
	}
	export interface CombineSubmissionsPostBodyFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expires_in: FormControl<number | null | undefined>,
		metadata: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		test: FormControl<boolean | null | undefined>,
	}
	export function CreateCombineSubmissionsPostBodyFormGroup() {
		return new FormGroup<CombineSubmissionsPostBodyFormProperties>({
			expires_in: new FormControl<number | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			test: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ExpireCombinedSubmissionReturn {
		actions?: Array<Combined_submission_action>;
		download_url?: string | null;
		error_message?: string | null;

		/** Required */
		expired: boolean;
		expires_at?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expires_in?: number | null;

		/** Required */
		id: string;
		metadata?: string | null;
		password?: string | null;
		pdf_hash?: string | null;

		/** Required */
		source_pdfs: Array<string>;

		/** Required */
		state: ListCombinedSubmissionsReturnState;

		/** Required */
		submission_ids: Array<string>;
	}
	export interface ExpireCombinedSubmissionReturnFormProperties {
		download_url: FormControl<string | null | undefined>,
		error_message: FormControl<string | null | undefined>,

		/** Required */
		expired: FormControl<boolean | null | undefined>,
		expires_at: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expires_in: FormControl<number | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		pdf_hash: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<ListCombinedSubmissionsReturnState | null | undefined>,
	}
	export function CreateExpireCombinedSubmissionReturnFormGroup() {
		return new FormGroup<ExpireCombinedSubmissionReturnFormProperties>({
			download_url: new FormControl<string | null | undefined>(undefined),
			error_message: new FormControl<string | null | undefined>(undefined),
			expired: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			expires_at: new FormControl<string | null | undefined>(undefined),
			expires_in: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			pdf_hash: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ListCombinedSubmissionsReturnState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCombinedSubmissionReturn {
		actions?: Array<Combined_submission_action>;
		download_url?: string | null;
		error_message?: string | null;

		/** Required */
		expired: boolean;
		expires_at?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expires_in?: number | null;

		/** Required */
		id: string;
		metadata?: string | null;
		password?: string | null;
		pdf_hash?: string | null;

		/** Required */
		source_pdfs: Array<string>;

		/** Required */
		state: ListCombinedSubmissionsReturnState;

		/** Required */
		submission_ids: Array<string>;
	}
	export interface GetCombinedSubmissionReturnFormProperties {
		download_url: FormControl<string | null | undefined>,
		error_message: FormControl<string | null | undefined>,

		/** Required */
		expired: FormControl<boolean | null | undefined>,
		expires_at: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expires_in: FormControl<number | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		pdf_hash: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<ListCombinedSubmissionsReturnState | null | undefined>,
	}
	export function CreateGetCombinedSubmissionReturnFormGroup() {
		return new FormGroup<GetCombinedSubmissionReturnFormProperties>({
			download_url: new FormControl<string | null | undefined>(undefined),
			error_message: new FormControl<string | null | undefined>(undefined),
			expired: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			expires_at: new FormControl<string | null | undefined>(undefined),
			expires_in: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			pdf_hash: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ListCombinedSubmissionsReturnState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CombinePdfsPostBody {
		delete_custom_files?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expires_in?: number | null;
		metadata?: string | null;
		password?: string | null;

		/** Required */
		source_pdfs: Array<string>;
		test?: boolean | null;
	}
	export interface CombinePdfsPostBodyFormProperties {
		delete_custom_files: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expires_in: FormControl<number | null | undefined>,
		metadata: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		test: FormControl<boolean | null | undefined>,
	}
	export function CreateCombinePdfsPostBodyFormGroup() {
		return new FormGroup<CombinePdfsPostBodyFormProperties>({
			delete_custom_files: new FormControl<boolean | null | undefined>(undefined),
			expires_in: new FormControl<number | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			test: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateCustomFileFromUploadPostBody {

		/**
		 * Required
		 * Min length: 1
		 */
		cache_id: string;
	}
	export interface CreateCustomFileFromUploadPostBodyFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		cache_id: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomFileFromUploadPostBodyFormGroup() {
		return new FormGroup<CreateCustomFileFromUploadPostBodyFormProperties>({
			cache_id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface UpdateDataRequestPutBody {
		auth_phone_number_hash?: string | null;
		auth_provider?: string | null;
		auth_second_factor_type?: Submission_data_requestAuth_second_factor_type | null;
		auth_session_id_hash?: string | null;
		auth_session_started_at?: string | null;
		auth_type?: Submission_data_requestAuth_type | null;
		auth_user_id_hash?: string | null;
		auth_username_hash?: string | null;
		email?: string | null;
		fields?: Array<string>;
		metadata?: string | null;
		name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		order?: number | null;
	}
	export interface UpdateDataRequestPutBodyFormProperties {
		auth_phone_number_hash: FormControl<string | null | undefined>,
		auth_provider: FormControl<string | null | undefined>,
		auth_second_factor_type: FormControl<Submission_data_requestAuth_second_factor_type | null | undefined>,
		auth_session_id_hash: FormControl<string | null | undefined>,
		auth_session_started_at: FormControl<string | null | undefined>,
		auth_type: FormControl<Submission_data_requestAuth_type | null | undefined>,
		auth_user_id_hash: FormControl<string | null | undefined>,
		auth_username_hash: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		order: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDataRequestPutBodyFormGroup() {
		return new FormGroup<UpdateDataRequestPutBodyFormProperties>({
			auth_phone_number_hash: new FormControl<string | null | undefined>(undefined),
			auth_provider: new FormControl<string | null | undefined>(undefined),
			auth_second_factor_type: new FormControl<Submission_data_requestAuth_second_factor_type | null | undefined>(undefined),
			auth_session_id_hash: new FormControl<string | null | undefined>(undefined),
			auth_session_started_at: new FormControl<string | null | undefined>(undefined),
			auth_type: new FormControl<Submission_data_requestAuth_type | null | undefined>(undefined),
			auth_user_id_hash: new FormControl<string | null | undefined>(undefined),
			auth_username_hash: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateDataRequestReturn {

		/** Required */
		data_request: Submission_data_request;
		errors?: Array<string>;

		/** Required */
		status: UpdateDataRequestReturnStatus;
	}
	export interface UpdateDataRequestReturnFormProperties {

		/** Required */
		status: FormControl<UpdateDataRequestReturnStatus | null | undefined>,
	}
	export function CreateUpdateDataRequestReturnFormGroup() {
		return new FormGroup<UpdateDataRequestReturnFormProperties>({
			status: new FormControl<UpdateDataRequestReturnStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UpdateDataRequestReturnStatus { success = 'success', error = 'error' }

	export interface ListFoldersReturn {
		id?: string | null;
		name?: string | null;
		parent_folder_id?: string | null;
		path?: string | null;
	}
	export interface ListFoldersReturnFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		parent_folder_id: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
	}
	export function CreateListFoldersReturnFormGroup() {
		return new FormGroup<ListFoldersReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent_folder_id: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFolderPostBody {

		/** Required */
		folder: CreateFolderPostBodyFolder;
	}
	export interface CreateFolderPostBodyFormProperties {
	}
	export function CreateCreateFolderPostBodyFormGroup() {
		return new FormGroup<CreateFolderPostBodyFormProperties>({
		});

	}

	export interface CreateFolderPostBodyFolder {

		/** Required */
		name: string;
		parent_folder_id?: string | null;
	}
	export interface CreateFolderPostBodyFolderFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		parent_folder_id: FormControl<string | null | undefined>,
	}
	export function CreateCreateFolderPostBodyFolderFormGroup() {
		return new FormGroup<CreateFolderPostBodyFolderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parent_folder_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFolderReturn {
		id?: string | null;
		name?: string | null;
		parent_folder_id?: string | null;
		path?: string | null;
	}
	export interface CreateFolderReturnFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		parent_folder_id: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
	}
	export function CreateCreateFolderReturnFormGroup() {
		return new FormGroup<CreateFolderReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent_folder_id: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteFolderReturn {
		id?: string | null;
		name?: string | null;
		parent_folder_id?: string | null;
		path?: string | null;
	}
	export interface DeleteFolderReturnFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		parent_folder_id: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFolderReturnFormGroup() {
		return new FormGroup<DeleteFolderReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent_folder_id: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MoveFolderToFolderPostBody {
		parent_folder_id?: string | null;
	}
	export interface MoveFolderToFolderPostBodyFormProperties {
		parent_folder_id: FormControl<string | null | undefined>,
	}
	export function CreateMoveFolderToFolderPostBodyFormGroup() {
		return new FormGroup<MoveFolderToFolderPostBodyFormProperties>({
			parent_folder_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MoveFolderToFolderReturn {
		id?: string | null;
		name?: string | null;
		parent_folder_id?: string | null;
		path?: string | null;
	}
	export interface MoveFolderToFolderReturnFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		parent_folder_id: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
	}
	export function CreateMoveFolderToFolderReturnFormGroup() {
		return new FormGroup<MoveFolderToFolderReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parent_folder_id: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RenameFolderPostBody {

		/** Required */
		name: string;
	}
	export interface RenameFolderPostBodyFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRenameFolderPostBodyFormGroup() {
		return new FormGroup<RenameFolderPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSubmissionsReturn {

		/**
		 * Required
		 * Type: double
		 */
		limit: number;

		/** Required */
		next_cursor: string;

		/** Required */
		submissions: Array<Submission>;
	}
	export interface ListSubmissionsReturnFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		limit: FormControl<number | null | undefined>,

		/** Required */
		next_cursor: FormControl<string | null | undefined>,
	}
	export function CreateListSubmissionsReturnFormGroup() {
		return new FormGroup<ListSubmissionsReturnFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_cursor: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchGeneratePdfsPostBody {
		metadata?: string | null;

		/** Required */
		BatchGeneratePdfsPostBodySubmissions: Array<BatchGeneratePdfsPostBodySubmissions>;
		template_id?: string | null;
		test?: boolean | null;
	}
	export interface BatchGeneratePdfsPostBodyFormProperties {
		metadata: FormControl<string | null | undefined>,
		template_id: FormControl<string | null | undefined>,
		test: FormControl<boolean | null | undefined>,
	}
	export function CreateBatchGeneratePdfsPostBodyFormGroup() {
		return new FormGroup<BatchGeneratePdfsPostBodyFormProperties>({
			metadata: new FormControl<string | null | undefined>(undefined),
			template_id: new FormControl<string | null | undefined>(undefined),
			test: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BatchGeneratePdfsPostBodySubmissions {
		css?: string | null;

		/** Required */
		data: string;
		html?: string | null;
		metadata?: string | null;

		/** Required */
		template_id: string;
		test?: boolean | null;
	}
	export interface BatchGeneratePdfsPostBodySubmissionsFormProperties {
		css: FormControl<string | null | undefined>,

		/** Required */
		data: FormControl<string | null | undefined>,
		html: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Required */
		template_id: FormControl<string | null | undefined>,
		test: FormControl<boolean | null | undefined>,
	}
	export function CreateBatchGeneratePdfsPostBodySubmissionsFormGroup() {
		return new FormGroup<BatchGeneratePdfsPostBodySubmissionsFormProperties>({
			css: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			html: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			template_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			test: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BatchGeneratePdfsReturn {
		error?: string | null;
		errors?: Array<string>;

		/** Required */
		status: UpdateDataRequestReturnStatus;

		/** Required */
		submission_batch: BatchGeneratePdfsReturnSubmission_batch;

		/** Required */
		BatchGeneratePdfsReturnSubmissions: Array<BatchGeneratePdfsReturnSubmissions>;
	}
	export interface BatchGeneratePdfsReturnFormProperties {
		error: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<UpdateDataRequestReturnStatus | null | undefined>,
	}
	export function CreateBatchGeneratePdfsReturnFormGroup() {
		return new FormGroup<BatchGeneratePdfsReturnFormProperties>({
			error: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<UpdateDataRequestReturnStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchGeneratePdfsReturnSubmission_batch {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		completion_percentage: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		error_count: number;

		/** Required */
		id: string;

		/** Required */
		metadata: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pending_count: number;

		/** Required */
		processed_at: string;

		/** Required */
		state: ListCombinedSubmissionsReturnState;
		submissions?: Array<Submission>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_count: number;
	}
	export interface BatchGeneratePdfsReturnSubmission_batchFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		completion_percentage: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		error_count: FormControl<number | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		metadata: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pending_count: FormControl<number | null | undefined>,

		/** Required */
		processed_at: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<ListCombinedSubmissionsReturnState | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateBatchGeneratePdfsReturnSubmission_batchFormGroup() {
		return new FormGroup<BatchGeneratePdfsReturnSubmission_batchFormProperties>({
			completion_percentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			error_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pending_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			processed_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<ListCombinedSubmissionsReturnState | null | undefined>(undefined, [Validators.required]),
			total_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchGeneratePdfsReturnSubmissions {
		errors?: Array<string>;

		/** Required */
		status: BatchGeneratePdfsReturnSubmissionsStatus;
		submission?: Submission;
	}
	export interface BatchGeneratePdfsReturnSubmissionsFormProperties {

		/** Required */
		status: FormControl<BatchGeneratePdfsReturnSubmissionsStatus | null | undefined>,
	}
	export function CreateBatchGeneratePdfsReturnSubmissionsFormGroup() {
		return new FormGroup<BatchGeneratePdfsReturnSubmissionsFormProperties>({
			status: new FormControl<BatchGeneratePdfsReturnSubmissionsStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BatchGeneratePdfsReturnSubmissionsStatus { success = 'success', error = 'error', valid_but_not_saved = 'valid_but_not_saved' }

	export interface GetSubmissionBatchReturn {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		completion_percentage: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		error_count: number;

		/** Required */
		id: string;

		/** Required */
		metadata: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pending_count: number;

		/** Required */
		processed_at: string;

		/** Required */
		state: ListCombinedSubmissionsReturnState;
		submissions?: Array<Submission>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_count: number;
	}
	export interface GetSubmissionBatchReturnFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		completion_percentage: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		error_count: FormControl<number | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		metadata: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pending_count: FormControl<number | null | undefined>,

		/** Required */
		processed_at: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<ListCombinedSubmissionsReturnState | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		total_count: FormControl<number | null | undefined>,
	}
	export function CreateGetSubmissionBatchReturnFormGroup() {
		return new FormGroup<GetSubmissionBatchReturnFormProperties>({
			completion_percentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			error_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pending_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			processed_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<ListCombinedSubmissionsReturnState | null | undefined>(undefined, [Validators.required]),
			total_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTemplatesReturn {

		/** Required */
		allow_additional_properties: boolean;

		/** Required */
		description: string;

		/** Required */
		document_url: string;

		/** Required */
		editable_submissions: boolean;

		/** Required */
		expiration_interval: ListTemplatesReturnExpiration_interval;

		/**
		 * Required
		 * Type: double
		 */
		expire_after: number;

		/** Required */
		expire_submissions: boolean;

		/** Required */
		id: string;

		/** Required */
		locked: boolean;

		/** Required */
		name: string;

		/** Required */
		page_dimensions: Array<string>;

		/** Required */
		parent_folder_id: string;

		/** Required */
		path: string;

		/** Required */
		permanent_document_url: string;

		/** Required */
		public_submissions: boolean;

		/** Required */
		public_web_form: boolean;

		/** Required */
		redirect_url: string;

		/** Required */
		slack_webhook_url: string;

		/** Required */
		template_type: string;

		/** Required */
		webhook_url: string;
	}
	export interface ListTemplatesReturnFormProperties {

		/** Required */
		allow_additional_properties: FormControl<boolean | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		document_url: FormControl<string | null | undefined>,

		/** Required */
		editable_submissions: FormControl<boolean | null | undefined>,

		/** Required */
		expiration_interval: FormControl<ListTemplatesReturnExpiration_interval | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		expire_after: FormControl<number | null | undefined>,

		/** Required */
		expire_submissions: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		locked: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		parent_folder_id: FormControl<string | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,

		/** Required */
		permanent_document_url: FormControl<string | null | undefined>,

		/** Required */
		public_submissions: FormControl<boolean | null | undefined>,

		/** Required */
		public_web_form: FormControl<boolean | null | undefined>,

		/** Required */
		redirect_url: FormControl<string | null | undefined>,

		/** Required */
		slack_webhook_url: FormControl<string | null | undefined>,

		/** Required */
		template_type: FormControl<string | null | undefined>,

		/** Required */
		webhook_url: FormControl<string | null | undefined>,
	}
	export function CreateListTemplatesReturnFormGroup() {
		return new FormGroup<ListTemplatesReturnFormProperties>({
			allow_additional_properties: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			document_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			editable_submissions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			expiration_interval: new FormControl<ListTemplatesReturnExpiration_interval | null | undefined>(undefined, [Validators.required]),
			expire_after: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			expire_submissions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			locked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parent_folder_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permanent_document_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			public_submissions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			public_web_form: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			redirect_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slack_webhook_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			webhook_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ListTemplatesReturnExpiration_interval { minutes = 'minutes', hours = 'hours', days = 'days' }

	export interface GetTemplateReturn {

		/** Required */
		allow_additional_properties: boolean;

		/** Required */
		description: string;

		/** Required */
		document_url: string;

		/** Required */
		editable_submissions: boolean;

		/** Required */
		expiration_interval: ListTemplatesReturnExpiration_interval;

		/**
		 * Required
		 * Type: double
		 */
		expire_after: number;

		/** Required */
		expire_submissions: boolean;

		/** Required */
		id: string;

		/** Required */
		locked: boolean;

		/** Required */
		name: string;

		/** Required */
		page_dimensions: Array<string>;

		/** Required */
		parent_folder_id: string;

		/** Required */
		path: string;

		/** Required */
		permanent_document_url: string;

		/** Required */
		public_submissions: boolean;

		/** Required */
		public_web_form: boolean;

		/** Required */
		redirect_url: string;

		/** Required */
		slack_webhook_url: string;

		/** Required */
		template_type: string;

		/** Required */
		webhook_url: string;
	}
	export interface GetTemplateReturnFormProperties {

		/** Required */
		allow_additional_properties: FormControl<boolean | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		document_url: FormControl<string | null | undefined>,

		/** Required */
		editable_submissions: FormControl<boolean | null | undefined>,

		/** Required */
		expiration_interval: FormControl<ListTemplatesReturnExpiration_interval | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		expire_after: FormControl<number | null | undefined>,

		/** Required */
		expire_submissions: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		locked: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		parent_folder_id: FormControl<string | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,

		/** Required */
		permanent_document_url: FormControl<string | null | undefined>,

		/** Required */
		public_submissions: FormControl<boolean | null | undefined>,

		/** Required */
		public_web_form: FormControl<boolean | null | undefined>,

		/** Required */
		redirect_url: FormControl<string | null | undefined>,

		/** Required */
		slack_webhook_url: FormControl<string | null | undefined>,

		/** Required */
		template_type: FormControl<string | null | undefined>,

		/** Required */
		webhook_url: FormControl<string | null | undefined>,
	}
	export function CreateGetTemplateReturnFormGroup() {
		return new FormGroup<GetTemplateReturnFormProperties>({
			allow_additional_properties: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			document_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			editable_submissions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			expiration_interval: new FormControl<ListTemplatesReturnExpiration_interval | null | undefined>(undefined, [Validators.required]),
			expire_after: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			expire_submissions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			locked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parent_folder_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permanent_document_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			public_submissions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			public_web_form: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			redirect_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slack_webhook_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			webhook_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateTemplatePutBody {

		/** Required */
		template: UpdateTemplatePutBodyTemplate;
	}
	export interface UpdateTemplatePutBodyFormProperties {
	}
	export function CreateUpdateTemplatePutBodyFormGroup() {
		return new FormGroup<UpdateTemplatePutBodyFormProperties>({
		});

	}

	export interface UpdateTemplatePutBodyTemplate {
		allow_additional_properties?: boolean | null;
		description?: string | null;
		editable_submissions?: boolean | null;
		expiration_interval?: ListTemplatesReturnExpiration_interval | null;

		/** Type: double */
		expire_after?: number | null;
		expire_submissions?: boolean | null;
		footer_html?: string | null;
		header_html?: string | null;
		html?: string | null;
		name?: string | null;
		public_submissions?: boolean | null;
		public_web_form?: boolean | null;
		redirect_url?: string | null;
		scss?: string | null;
		slack_webhook_url?: string | null;
		webhook_url?: string | null;
	}
	export interface UpdateTemplatePutBodyTemplateFormProperties {
		allow_additional_properties: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		editable_submissions: FormControl<boolean | null | undefined>,
		expiration_interval: FormControl<ListTemplatesReturnExpiration_interval | null | undefined>,

		/** Type: double */
		expire_after: FormControl<number | null | undefined>,
		expire_submissions: FormControl<boolean | null | undefined>,
		footer_html: FormControl<string | null | undefined>,
		header_html: FormControl<string | null | undefined>,
		html: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		public_submissions: FormControl<boolean | null | undefined>,
		public_web_form: FormControl<boolean | null | undefined>,
		redirect_url: FormControl<string | null | undefined>,
		scss: FormControl<string | null | undefined>,
		slack_webhook_url: FormControl<string | null | undefined>,
		webhook_url: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTemplatePutBodyTemplateFormGroup() {
		return new FormGroup<UpdateTemplatePutBodyTemplateFormProperties>({
			allow_additional_properties: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			editable_submissions: new FormControl<boolean | null | undefined>(undefined),
			expiration_interval: new FormControl<ListTemplatesReturnExpiration_interval | null | undefined>(undefined),
			expire_after: new FormControl<number | null | undefined>(undefined),
			expire_submissions: new FormControl<boolean | null | undefined>(undefined),
			footer_html: new FormControl<string | null | undefined>(undefined),
			header_html: new FormControl<string | null | undefined>(undefined),
			html: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			public_submissions: new FormControl<boolean | null | undefined>(undefined),
			public_web_form: new FormControl<boolean | null | undefined>(undefined),
			redirect_url: new FormControl<string | null | undefined>(undefined),
			scss: new FormControl<string | null | undefined>(undefined),
			slack_webhook_url: new FormControl<string | null | undefined>(undefined),
			webhook_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTemplateReturn {
		errors?: Array<string>;

		/** Required */
		status: UpdateDataRequestReturnStatus;
	}
	export interface UpdateTemplateReturnFormProperties {

		/** Required */
		status: FormControl<UpdateDataRequestReturnStatus | null | undefined>,
	}
	export function CreateUpdateTemplateReturnFormGroup() {
		return new FormGroup<UpdateTemplateReturnFormProperties>({
			status: new FormControl<UpdateDataRequestReturnStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddFieldsToTemplatePutBody {

		/** Required */
		AddFieldsToTemplatePutBodyFields: Array<AddFieldsToTemplatePutBodyFields>;
	}
	export interface AddFieldsToTemplatePutBodyFormProperties {
	}
	export function CreateAddFieldsToTemplatePutBodyFormGroup() {
		return new FormGroup<AddFieldsToTemplatePutBodyFormProperties>({
		});

	}

	export interface AddFieldsToTemplatePutBodyFields {
		alignment?: AddFieldsToTemplatePutBodyFieldsAlignment | null;
		autoCalculateMaxLength?: boolean | null;
		backgroundColor?: string | null;
		backgroundColorFieldName?: string | null;
		backgroundColorFieldRequired?: boolean | null;
		barcodeSymbology?: string | null;
		bold?: boolean | null;

		/** Type: double */
		characterSpacing?: number | null;
		checkCharacter?: AddFieldsToTemplatePutBodyFieldsCheckCharacter | null;
		checkColor?: string | null;
		checkColorFieldName?: string | null;
		checkColorFieldRequired?: boolean | null;
		color?: string | null;
		colorFieldName?: string | null;
		colorFieldRequired?: boolean | null;
		comb?: boolean | null;

		/** Minimum: 0 */
		combNumberOfCells?: number | null;

		/** Type: double */
		combValueOffset?: number | null;
		combinedFieldFormat?: string | null;
		combinedFieldNames?: string | null;
		combinedFieldSeparator?: string | null;
		combinedFieldType?: string | null;
		condition?: string | null;
		currency?: boolean | null;
		dateTimeFormat?: string | null;

		/** Minimum: 0 */
		decimalPlaces?: number | null;
		default?: string | null;
		description?: string | null;
		displayType?: AddFieldsToTemplatePutBodyFieldsDisplayType | null;
		exclusiveMaximum?: boolean | null;
		exclusiveMinimum?: boolean | null;
		falseText?: string | null;

		/** Minimum: 0 */
		fontSize?: number | null;

		/** Minimum: 0 */
		height?: number | null;
		hidden?: boolean | null;

		/** Minimum: 0 */
		id?: number | null;
		imageGravity?: AddFieldsToTemplatePutBodyFieldsImageGravity | null;
		imageScaleType?: AddFieldsToTemplatePutBodyFieldsImageScaleType | null;
		includeTime?: boolean | null;
		integer?: boolean | null;
		invertBooleanCondition?: boolean | null;

		/** Type: double */
		maxLength?: number | null;

		/** Type: double */
		maximum?: number | null;
		metadata?: string | null;

		/** Type: double */
		minLength?: number | null;

		/** Type: double */
		minimum?: number | null;
		multiline?: boolean | null;

		/** Minimum: 0 */
		multilineLines?: number | null;

		/** Required */
		name: string;
		numberConditionRangeExclusiveMax?: boolean | null;
		numberConditionRangeExclusiveMin?: boolean | null;

		/** Type: double */
		numberConditionRangeMax?: number | null;

		/** Type: double */
		numberConditionRangeMin?: number | null;
		numberConditionType?: AddFieldsToTemplatePutBodyFieldsNumberConditionType | null;

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		opacity?: number | null;
		optionList?: string | null;
		overflow?: AddFieldsToTemplatePutBodyFieldsOverflow | null;

		/**
		 * Required
		 * Minimum: 1
		 */
		page: number;
		placeholder?: string | null;
		qrcodeColor?: string | null;
		qrcodeColorFieldName?: string | null;
		qrcodeColorFieldRequired?: boolean | null;
		required?: boolean | null;

		/**
		 * Minimum: 0
		 * Maximum: 360
		 */
		rotation?: number | null;
		shapeBorderColor?: string | null;
		shapeBorderColorFieldName?: string | null;
		shapeBorderColorFieldRequired?: boolean | null;

		/** Minimum: 0 */
		shapeBorderWidth?: number | null;
		shapeFillColor?: string | null;
		shapeFillColorFieldName?: string | null;
		shapeFillColorFieldRequired?: boolean | null;
		shapeType?: AddFieldsToTemplatePutBodyFieldsShapeType | null;
		signatureAllowDraw?: boolean | null;
		signatureAllowType?: boolean | null;
		static?: boolean | null;
		strikethrough?: boolean | null;
		stringConditionType?: AddFieldsToTemplatePutBodyFieldsStringConditionType | null;
		title?: string | null;
		trueText?: string | null;
		type?: AddFieldsToTemplatePutBodyFieldsType | null;
		typeface?: string | null;
		uppercase?: boolean | null;
		vAlignment?: AddFieldsToTemplatePutBodyFieldsVAlignment | null;

		/** Minimum: 0 */
		width?: number | null;

		/** Minimum: 0 */
		x?: number | null;

		/** Minimum: 0 */
		y?: number | null;
	}
	export interface AddFieldsToTemplatePutBodyFieldsFormProperties {
		alignment: FormControl<AddFieldsToTemplatePutBodyFieldsAlignment | null | undefined>,
		autoCalculateMaxLength: FormControl<boolean | null | undefined>,
		backgroundColor: FormControl<string | null | undefined>,
		backgroundColorFieldName: FormControl<string | null | undefined>,
		backgroundColorFieldRequired: FormControl<boolean | null | undefined>,
		barcodeSymbology: FormControl<string | null | undefined>,
		bold: FormControl<boolean | null | undefined>,

		/** Type: double */
		characterSpacing: FormControl<number | null | undefined>,
		checkCharacter: FormControl<AddFieldsToTemplatePutBodyFieldsCheckCharacter | null | undefined>,
		checkColor: FormControl<string | null | undefined>,
		checkColorFieldName: FormControl<string | null | undefined>,
		checkColorFieldRequired: FormControl<boolean | null | undefined>,
		color: FormControl<string | null | undefined>,
		colorFieldName: FormControl<string | null | undefined>,
		colorFieldRequired: FormControl<boolean | null | undefined>,
		comb: FormControl<boolean | null | undefined>,

		/** Minimum: 0 */
		combNumberOfCells: FormControl<number | null | undefined>,

		/** Type: double */
		combValueOffset: FormControl<number | null | undefined>,
		combinedFieldFormat: FormControl<string | null | undefined>,
		combinedFieldNames: FormControl<string | null | undefined>,
		combinedFieldSeparator: FormControl<string | null | undefined>,
		combinedFieldType: FormControl<string | null | undefined>,
		condition: FormControl<string | null | undefined>,
		currency: FormControl<boolean | null | undefined>,
		dateTimeFormat: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		decimalPlaces: FormControl<number | null | undefined>,
		default: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		displayType: FormControl<AddFieldsToTemplatePutBodyFieldsDisplayType | null | undefined>,
		exclusiveMaximum: FormControl<boolean | null | undefined>,
		exclusiveMinimum: FormControl<boolean | null | undefined>,
		falseText: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		fontSize: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		height: FormControl<number | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,

		/** Minimum: 0 */
		id: FormControl<number | null | undefined>,
		imageGravity: FormControl<AddFieldsToTemplatePutBodyFieldsImageGravity | null | undefined>,
		imageScaleType: FormControl<AddFieldsToTemplatePutBodyFieldsImageScaleType | null | undefined>,
		includeTime: FormControl<boolean | null | undefined>,
		integer: FormControl<boolean | null | undefined>,
		invertBooleanCondition: FormControl<boolean | null | undefined>,

		/** Type: double */
		maxLength: FormControl<number | null | undefined>,

		/** Type: double */
		maximum: FormControl<number | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Type: double */
		minLength: FormControl<number | null | undefined>,

		/** Type: double */
		minimum: FormControl<number | null | undefined>,
		multiline: FormControl<boolean | null | undefined>,

		/** Minimum: 0 */
		multilineLines: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		numberConditionRangeExclusiveMax: FormControl<boolean | null | undefined>,
		numberConditionRangeExclusiveMin: FormControl<boolean | null | undefined>,

		/** Type: double */
		numberConditionRangeMax: FormControl<number | null | undefined>,

		/** Type: double */
		numberConditionRangeMin: FormControl<number | null | undefined>,
		numberConditionType: FormControl<AddFieldsToTemplatePutBodyFieldsNumberConditionType | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 1
		 */
		opacity: FormControl<number | null | undefined>,
		optionList: FormControl<string | null | undefined>,
		overflow: FormControl<AddFieldsToTemplatePutBodyFieldsOverflow | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		page: FormControl<number | null | undefined>,
		placeholder: FormControl<string | null | undefined>,
		qrcodeColor: FormControl<string | null | undefined>,
		qrcodeColorFieldName: FormControl<string | null | undefined>,
		qrcodeColorFieldRequired: FormControl<boolean | null | undefined>,
		required: FormControl<boolean | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 360
		 */
		rotation: FormControl<number | null | undefined>,
		shapeBorderColor: FormControl<string | null | undefined>,
		shapeBorderColorFieldName: FormControl<string | null | undefined>,
		shapeBorderColorFieldRequired: FormControl<boolean | null | undefined>,

		/** Minimum: 0 */
		shapeBorderWidth: FormControl<number | null | undefined>,
		shapeFillColor: FormControl<string | null | undefined>,
		shapeFillColorFieldName: FormControl<string | null | undefined>,
		shapeFillColorFieldRequired: FormControl<boolean | null | undefined>,
		shapeType: FormControl<AddFieldsToTemplatePutBodyFieldsShapeType | null | undefined>,
		signatureAllowDraw: FormControl<boolean | null | undefined>,
		signatureAllowType: FormControl<boolean | null | undefined>,
		static: FormControl<boolean | null | undefined>,
		strikethrough: FormControl<boolean | null | undefined>,
		stringConditionType: FormControl<AddFieldsToTemplatePutBodyFieldsStringConditionType | null | undefined>,
		title: FormControl<string | null | undefined>,
		trueText: FormControl<string | null | undefined>,
		type: FormControl<AddFieldsToTemplatePutBodyFieldsType | null | undefined>,
		typeface: FormControl<string | null | undefined>,
		uppercase: FormControl<boolean | null | undefined>,
		vAlignment: FormControl<AddFieldsToTemplatePutBodyFieldsVAlignment | null | undefined>,

		/** Minimum: 0 */
		width: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		x: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateAddFieldsToTemplatePutBodyFieldsFormGroup() {
		return new FormGroup<AddFieldsToTemplatePutBodyFieldsFormProperties>({
			alignment: new FormControl<AddFieldsToTemplatePutBodyFieldsAlignment | null | undefined>(undefined),
			autoCalculateMaxLength: new FormControl<boolean | null | undefined>(undefined),
			backgroundColor: new FormControl<string | null | undefined>(undefined),
			backgroundColorFieldName: new FormControl<string | null | undefined>(undefined),
			backgroundColorFieldRequired: new FormControl<boolean | null | undefined>(undefined),
			barcodeSymbology: new FormControl<string | null | undefined>(undefined),
			bold: new FormControl<boolean | null | undefined>(undefined),
			characterSpacing: new FormControl<number | null | undefined>(undefined),
			checkCharacter: new FormControl<AddFieldsToTemplatePutBodyFieldsCheckCharacter | null | undefined>(undefined),
			checkColor: new FormControl<string | null | undefined>(undefined),
			checkColorFieldName: new FormControl<string | null | undefined>(undefined),
			checkColorFieldRequired: new FormControl<boolean | null | undefined>(undefined),
			color: new FormControl<string | null | undefined>(undefined),
			colorFieldName: new FormControl<string | null | undefined>(undefined),
			colorFieldRequired: new FormControl<boolean | null | undefined>(undefined),
			comb: new FormControl<boolean | null | undefined>(undefined),
			combNumberOfCells: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			combValueOffset: new FormControl<number | null | undefined>(undefined),
			combinedFieldFormat: new FormControl<string | null | undefined>(undefined),
			combinedFieldNames: new FormControl<string | null | undefined>(undefined),
			combinedFieldSeparator: new FormControl<string | null | undefined>(undefined),
			combinedFieldType: new FormControl<string | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<boolean | null | undefined>(undefined),
			dateTimeFormat: new FormControl<string | null | undefined>(undefined),
			decimalPlaces: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			default: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayType: new FormControl<AddFieldsToTemplatePutBodyFieldsDisplayType | null | undefined>(undefined),
			exclusiveMaximum: new FormControl<boolean | null | undefined>(undefined),
			exclusiveMinimum: new FormControl<boolean | null | undefined>(undefined),
			falseText: new FormControl<string | null | undefined>(undefined),
			fontSize: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			height: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			imageGravity: new FormControl<AddFieldsToTemplatePutBodyFieldsImageGravity | null | undefined>(undefined),
			imageScaleType: new FormControl<AddFieldsToTemplatePutBodyFieldsImageScaleType | null | undefined>(undefined),
			includeTime: new FormControl<boolean | null | undefined>(undefined),
			integer: new FormControl<boolean | null | undefined>(undefined),
			invertBooleanCondition: new FormControl<boolean | null | undefined>(undefined),
			maxLength: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			minLength: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			multiline: new FormControl<boolean | null | undefined>(undefined),
			multilineLines: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numberConditionRangeExclusiveMax: new FormControl<boolean | null | undefined>(undefined),
			numberConditionRangeExclusiveMin: new FormControl<boolean | null | undefined>(undefined),
			numberConditionRangeMax: new FormControl<number | null | undefined>(undefined),
			numberConditionRangeMin: new FormControl<number | null | undefined>(undefined),
			numberConditionType: new FormControl<AddFieldsToTemplatePutBodyFieldsNumberConditionType | null | undefined>(undefined),
			opacity: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			optionList: new FormControl<string | null | undefined>(undefined),
			overflow: new FormControl<AddFieldsToTemplatePutBodyFieldsOverflow | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			placeholder: new FormControl<string | null | undefined>(undefined),
			qrcodeColor: new FormControl<string | null | undefined>(undefined),
			qrcodeColorFieldName: new FormControl<string | null | undefined>(undefined),
			qrcodeColorFieldRequired: new FormControl<boolean | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			rotation: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(360)]),
			shapeBorderColor: new FormControl<string | null | undefined>(undefined),
			shapeBorderColorFieldName: new FormControl<string | null | undefined>(undefined),
			shapeBorderColorFieldRequired: new FormControl<boolean | null | undefined>(undefined),
			shapeBorderWidth: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			shapeFillColor: new FormControl<string | null | undefined>(undefined),
			shapeFillColorFieldName: new FormControl<string | null | undefined>(undefined),
			shapeFillColorFieldRequired: new FormControl<boolean | null | undefined>(undefined),
			shapeType: new FormControl<AddFieldsToTemplatePutBodyFieldsShapeType | null | undefined>(undefined),
			signatureAllowDraw: new FormControl<boolean | null | undefined>(undefined),
			signatureAllowType: new FormControl<boolean | null | undefined>(undefined),
			static: new FormControl<boolean | null | undefined>(undefined),
			strikethrough: new FormControl<boolean | null | undefined>(undefined),
			stringConditionType: new FormControl<AddFieldsToTemplatePutBodyFieldsStringConditionType | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			trueText: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AddFieldsToTemplatePutBodyFieldsType | null | undefined>(undefined),
			typeface: new FormControl<string | null | undefined>(undefined),
			uppercase: new FormControl<boolean | null | undefined>(undefined),
			vAlignment: new FormControl<AddFieldsToTemplatePutBodyFieldsVAlignment | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			x: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			y: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export enum AddFieldsToTemplatePutBodyFieldsAlignment { left = 'left', center = 'center', right = 'right' }

	export enum AddFieldsToTemplatePutBodyFieldsCheckCharacter { '&#10003;' = '&#10003;', '&#10004;' = '&#10004;', '&#10006;' = '&#10006;', '&#10007;' = '&#10007;', '&#10008;' = '&#10008;' }

	export enum AddFieldsToTemplatePutBodyFieldsDisplayType { text = 'text', check = 'check', qrcode = 'qrcode', barcode = 'barcode', image = 'image', shape = 'shape' }

	export enum AddFieldsToTemplatePutBodyFieldsImageGravity { NorthWest = 'NorthWest', North = 'North', NorthEast = 'NorthEast', West = 'West', Center = 'Center', East = 'East', SouthWest = 'SouthWest', South = 'South', SouthEast = 'SouthEast' }

	export enum AddFieldsToTemplatePutBodyFieldsImageScaleType { fit = 'fit', fill = 'fill', stretch = 'stretch' }

	export enum AddFieldsToTemplatePutBodyFieldsNumberConditionType { equals = 'equals', range = 'range', gte = 'gte', gt = 'gt', lte = 'lte', lt = 'lt' }

	export enum AddFieldsToTemplatePutBodyFieldsOverflow { shrink_to_fit = 'shrink_to_fit', truncate = 'truncate' }

	export enum AddFieldsToTemplatePutBodyFieldsShapeType { square = 'square', rectangle = 'rectangle', circle = 'circle', ellipse = 'ellipse' }

	export enum AddFieldsToTemplatePutBodyFieldsStringConditionType { equals = 'equals', contains = 'contains', starts_with = 'starts_with', ends_with = 'ends_with', regex = 'regex' }

	export enum AddFieldsToTemplatePutBodyFieldsType { string = 'string', number = 'number', boolean = 'boolean', date = 'date', address = 'address', country = 'country', email = 'email', url = 'url', image = 'image', signature = 'signature', barcode = 'barcode', combined = 'combined' }

	export enum AddFieldsToTemplatePutBodyFieldsVAlignment { bottom = 'bottom', center = 'center', top = 'top' }

	export interface AddFieldsToTemplateReturn {
		errors?: Array<string>;
		new_field_ids?: Array<number>;

		/** Required */
		status: UpdateDataRequestReturnStatus;
	}
	export interface AddFieldsToTemplateReturnFormProperties {

		/** Required */
		status: FormControl<UpdateDataRequestReturnStatus | null | undefined>,
	}
	export function CreateAddFieldsToTemplateReturnFormGroup() {
		return new FormGroup<AddFieldsToTemplateReturnFormProperties>({
			status: new FormControl<UpdateDataRequestReturnStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CopyTemplatePostBody {
		name?: string | null;

		/** Required */
		parent_folder_id: string;
	}
	export interface CopyTemplatePostBodyFormProperties {
		name: FormControl<string | null | undefined>,

		/** Required */
		parent_folder_id: FormControl<string | null | undefined>,
	}
	export function CreateCopyTemplatePostBodyFormGroup() {
		return new FormGroup<CopyTemplatePostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			parent_folder_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CopyTemplateReturn {

		/** Required */
		allow_additional_properties: boolean;

		/** Required */
		description: string;

		/** Required */
		document_url: string;

		/** Required */
		editable_submissions: boolean;

		/** Required */
		expiration_interval: ListTemplatesReturnExpiration_interval;

		/**
		 * Required
		 * Type: double
		 */
		expire_after: number;

		/** Required */
		expire_submissions: boolean;

		/** Required */
		id: string;

		/** Required */
		locked: boolean;

		/** Required */
		name: string;

		/** Required */
		page_dimensions: Array<string>;

		/** Required */
		parent_folder_id: string;

		/** Required */
		path: string;

		/** Required */
		permanent_document_url: string;

		/** Required */
		public_submissions: boolean;

		/** Required */
		public_web_form: boolean;

		/** Required */
		redirect_url: string;

		/** Required */
		slack_webhook_url: string;

		/** Required */
		template_type: string;

		/** Required */
		webhook_url: string;
	}
	export interface CopyTemplateReturnFormProperties {

		/** Required */
		allow_additional_properties: FormControl<boolean | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		document_url: FormControl<string | null | undefined>,

		/** Required */
		editable_submissions: FormControl<boolean | null | undefined>,

		/** Required */
		expiration_interval: FormControl<ListTemplatesReturnExpiration_interval | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		expire_after: FormControl<number | null | undefined>,

		/** Required */
		expire_submissions: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		locked: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		parent_folder_id: FormControl<string | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,

		/** Required */
		permanent_document_url: FormControl<string | null | undefined>,

		/** Required */
		public_submissions: FormControl<boolean | null | undefined>,

		/** Required */
		public_web_form: FormControl<boolean | null | undefined>,

		/** Required */
		redirect_url: FormControl<string | null | undefined>,

		/** Required */
		slack_webhook_url: FormControl<string | null | undefined>,

		/** Required */
		template_type: FormControl<string | null | undefined>,

		/** Required */
		webhook_url: FormControl<string | null | undefined>,
	}
	export function CreateCopyTemplateReturnFormGroup() {
		return new FormGroup<CopyTemplateReturnFormProperties>({
			allow_additional_properties: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			document_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			editable_submissions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			expiration_interval: new FormControl<ListTemplatesReturnExpiration_interval | null | undefined>(undefined, [Validators.required]),
			expire_after: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			expire_submissions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			locked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parent_folder_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permanent_document_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			public_submissions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			public_web_form: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			redirect_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slack_webhook_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			webhook_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MoveTemplateToFolderPostBody {

		/** Required */
		parent_folder_id: string;
	}
	export interface MoveTemplateToFolderPostBodyFormProperties {

		/** Required */
		parent_folder_id: FormControl<string | null | undefined>,
	}
	export function CreateMoveTemplateToFolderPostBodyFormGroup() {
		return new FormGroup<MoveTemplateToFolderPostBodyFormProperties>({
			parent_folder_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MoveTemplateToFolderReturn {

		/** Required */
		allow_additional_properties: boolean;

		/** Required */
		description: string;

		/** Required */
		document_url: string;

		/** Required */
		editable_submissions: boolean;

		/** Required */
		expiration_interval: ListTemplatesReturnExpiration_interval;

		/**
		 * Required
		 * Type: double
		 */
		expire_after: number;

		/** Required */
		expire_submissions: boolean;

		/** Required */
		id: string;

		/** Required */
		locked: boolean;

		/** Required */
		name: string;

		/** Required */
		page_dimensions: Array<string>;

		/** Required */
		parent_folder_id: string;

		/** Required */
		path: string;

		/** Required */
		permanent_document_url: string;

		/** Required */
		public_submissions: boolean;

		/** Required */
		public_web_form: boolean;

		/** Required */
		redirect_url: string;

		/** Required */
		slack_webhook_url: string;

		/** Required */
		template_type: string;

		/** Required */
		webhook_url: string;
	}
	export interface MoveTemplateToFolderReturnFormProperties {

		/** Required */
		allow_additional_properties: FormControl<boolean | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		document_url: FormControl<string | null | undefined>,

		/** Required */
		editable_submissions: FormControl<boolean | null | undefined>,

		/** Required */
		expiration_interval: FormControl<ListTemplatesReturnExpiration_interval | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		expire_after: FormControl<number | null | undefined>,

		/** Required */
		expire_submissions: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		locked: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		parent_folder_id: FormControl<string | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,

		/** Required */
		permanent_document_url: FormControl<string | null | undefined>,

		/** Required */
		public_submissions: FormControl<boolean | null | undefined>,

		/** Required */
		public_web_form: FormControl<boolean | null | undefined>,

		/** Required */
		redirect_url: FormControl<string | null | undefined>,

		/** Required */
		slack_webhook_url: FormControl<string | null | undefined>,

		/** Required */
		template_type: FormControl<string | null | undefined>,

		/** Required */
		webhook_url: FormControl<string | null | undefined>,
	}
	export function CreateMoveTemplateToFolderReturnFormGroup() {
		return new FormGroup<MoveTemplateToFolderReturnFormProperties>({
			allow_additional_properties: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			document_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			editable_submissions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			expiration_interval: new FormControl<ListTemplatesReturnExpiration_interval | null | undefined>(undefined, [Validators.required]),
			expire_after: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			expire_submissions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			locked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parent_folder_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permanent_document_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			public_submissions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			public_web_form: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			redirect_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slack_webhook_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			webhook_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetTemplateSchemaReturn {
		'$schema'?: string | null;
		additionalProperties?: boolean | null;
		definitions?: string | null;
		description?: string | null;
		id?: string | null;
		properties?: string | null;
		required?: Array<string>;
		title?: string | null;
		type?: string | null;
	}
	export interface GetTemplateSchemaReturnFormProperties {
		'$schema': FormControl<string | null | undefined>,
		additionalProperties: FormControl<boolean | null | undefined>,
		definitions: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		properties: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateGetTemplateSchemaReturnFormGroup() {
		return new FormGroup<GetTemplateSchemaReturnFormProperties>({
			'$schema': new FormControl<string | null | undefined>(undefined),
			additionalProperties: new FormControl<boolean | null | undefined>(undefined),
			definitions: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PDFGetByTemplate_idAndCursorAndLimitAndCreated_afterAndCreated_beforeAndTypeAndInclude_dataReturn {

		/**
		 * Required
		 * Type: double
		 */
		limit: number;

		/** Required */
		next_cursor: string;

		/** Required */
		submissions: Array<Submission>;
	}
	export interface PDFGetByTemplate_idAndCursorAndLimitAndCreated_afterAndCreated_beforeAndTypeAndInclude_dataReturnFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		limit: FormControl<number | null | undefined>,

		/** Required */
		next_cursor: FormControl<string | null | undefined>,
	}
	export function CreatePDFGetByTemplate_idAndCursorAndLimitAndCreated_afterAndCreated_beforeAndTypeAndInclude_dataReturnFormGroup() {
		return new FormGroup<PDFGetByTemplate_idAndCursorAndLimitAndCreated_afterAndCreated_beforeAndTypeAndInclude_dataReturnFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			next_cursor: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GeneratePDFPostBody {
		css?: string | null;

		/** Required */
		data: string;
		GeneratePDFPostBodyData_requests?: Array<GeneratePDFPostBodyData_requests>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expires_in?: number | null;
		field_overrides?: string | null;
		html?: string | null;
		metadata?: string | null;
		password?: string | null;
		test?: boolean | null;
	}
	export interface GeneratePDFPostBodyFormProperties {
		css: FormControl<string | null | undefined>,

		/** Required */
		data: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		expires_in: FormControl<number | null | undefined>,
		field_overrides: FormControl<string | null | undefined>,
		html: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		test: FormControl<boolean | null | undefined>,
	}
	export function CreateGeneratePDFPostBodyFormGroup() {
		return new FormGroup<GeneratePDFPostBodyFormProperties>({
			css: new FormControl<string | null | undefined>(undefined),
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expires_in: new FormControl<number | null | undefined>(undefined),
			field_overrides: new FormControl<string | null | undefined>(undefined),
			html: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			test: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GeneratePDFPostBodyData_requests {
		auth_phone_number_hash?: string | null;
		auth_provider?: string | null;
		auth_second_factor_type?: Submission_data_requestAuth_second_factor_type | null;
		auth_session_id_hash?: string | null;
		auth_session_started_at?: string | null;

		/** Required */
		auth_type: Submission_data_requestAuth_type;
		auth_user_id_hash?: string | null;
		auth_username_hash?: string | null;

		/** Required */
		email: string;
		fields?: Array<string>;
		metadata?: string | null;
		name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		order?: number | null;
	}
	export interface GeneratePDFPostBodyData_requestsFormProperties {
		auth_phone_number_hash: FormControl<string | null | undefined>,
		auth_provider: FormControl<string | null | undefined>,
		auth_second_factor_type: FormControl<Submission_data_requestAuth_second_factor_type | null | undefined>,
		auth_session_id_hash: FormControl<string | null | undefined>,
		auth_session_started_at: FormControl<string | null | undefined>,

		/** Required */
		auth_type: FormControl<Submission_data_requestAuth_type | null | undefined>,
		auth_user_id_hash: FormControl<string | null | undefined>,
		auth_username_hash: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		order: FormControl<number | null | undefined>,
	}
	export function CreateGeneratePDFPostBodyData_requestsFormGroup() {
		return new FormGroup<GeneratePDFPostBodyData_requestsFormProperties>({
			auth_phone_number_hash: new FormControl<string | null | undefined>(undefined),
			auth_provider: new FormControl<string | null | undefined>(undefined),
			auth_second_factor_type: new FormControl<Submission_data_requestAuth_second_factor_type | null | undefined>(undefined),
			auth_session_id_hash: new FormControl<string | null | undefined>(undefined),
			auth_session_started_at: new FormControl<string | null | undefined>(undefined),
			auth_type: new FormControl<Submission_data_requestAuth_type | null | undefined>(undefined, [Validators.required]),
			auth_user_id_hash: new FormControl<string | null | undefined>(undefined),
			auth_username_hash: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetFullTemplateReturn {

		/** Required */
		allow_additional_properties: boolean;

		/** Required */
		defaults: GetFullTemplateReturnDefaults;

		/** Required */
		demo: boolean;

		/** Required */
		description: string;

		/** Required */
		document_filename: string;

		/** Required */
		document_md5: string;

		/** Required */
		document_parse_error: boolean;

		/** Required */
		document_processed: boolean;

		/** Required */
		document_state: string;

		/** Required */
		document_url: string;

		/** Required */
		editable_submissions: boolean;

		/** Required */
		embed_domains: Array<string>;

		/** Required */
		encrypt_pdfs: boolean;

		/** Required */
		encrypt_pdfs_password: string;

		/** Required */
		expiration_interval: ListTemplatesReturnExpiration_interval;

		/**
		 * Required
		 * Type: double
		 */
		expire_after: number;

		/** Required */
		expire_submissions: boolean;

		/** Required */
		field_order: Array<string>;

		/** Required */
		fields: string;

		/** Required */
		first_template: boolean;

		/** Required */
		footer_html: string;

		/** Required */
		header_html: string;

		/** Required */
		html: string;

		/** Required */
		id: string;

		/** Required */
		locked: boolean;

		/** Required */
		name: string;

		/**
		 * Required
		 * Type: double
		 */
		page_count: number;

		/** Required */
		page_dimensions: Array<string>;

		/** Required */
		parent_folder_id: string;

		/** Required */
		path: string;

		/** Required */
		permanent_document_url: string;

		/** Required */
		public_submissions: boolean;

		/** Required */
		public_web_form: boolean;

		/** Required */
		redirect_url: string;

		/** Required */
		scss: string;

		/** Required */
		shared_field_data: string;

		/** Required */
		slack_webhook_url: string;

		/** Required */
		template_type: string;

		/** Required */
		webhook_url: string;
	}
	export interface GetFullTemplateReturnFormProperties {

		/** Required */
		allow_additional_properties: FormControl<boolean | null | undefined>,

		/** Required */
		demo: FormControl<boolean | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		document_filename: FormControl<string | null | undefined>,

		/** Required */
		document_md5: FormControl<string | null | undefined>,

		/** Required */
		document_parse_error: FormControl<boolean | null | undefined>,

		/** Required */
		document_processed: FormControl<boolean | null | undefined>,

		/** Required */
		document_state: FormControl<string | null | undefined>,

		/** Required */
		document_url: FormControl<string | null | undefined>,

		/** Required */
		editable_submissions: FormControl<boolean | null | undefined>,

		/** Required */
		encrypt_pdfs: FormControl<boolean | null | undefined>,

		/** Required */
		encrypt_pdfs_password: FormControl<string | null | undefined>,

		/** Required */
		expiration_interval: FormControl<ListTemplatesReturnExpiration_interval | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		expire_after: FormControl<number | null | undefined>,

		/** Required */
		expire_submissions: FormControl<boolean | null | undefined>,

		/** Required */
		fields: FormControl<string | null | undefined>,

		/** Required */
		first_template: FormControl<boolean | null | undefined>,

		/** Required */
		footer_html: FormControl<string | null | undefined>,

		/** Required */
		header_html: FormControl<string | null | undefined>,

		/** Required */
		html: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		locked: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		page_count: FormControl<number | null | undefined>,

		/** Required */
		parent_folder_id: FormControl<string | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,

		/** Required */
		permanent_document_url: FormControl<string | null | undefined>,

		/** Required */
		public_submissions: FormControl<boolean | null | undefined>,

		/** Required */
		public_web_form: FormControl<boolean | null | undefined>,

		/** Required */
		redirect_url: FormControl<string | null | undefined>,

		/** Required */
		scss: FormControl<string | null | undefined>,

		/** Required */
		shared_field_data: FormControl<string | null | undefined>,

		/** Required */
		slack_webhook_url: FormControl<string | null | undefined>,

		/** Required */
		template_type: FormControl<string | null | undefined>,

		/** Required */
		webhook_url: FormControl<string | null | undefined>,
	}
	export function CreateGetFullTemplateReturnFormGroup() {
		return new FormGroup<GetFullTemplateReturnFormProperties>({
			allow_additional_properties: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			demo: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			document_filename: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			document_md5: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			document_parse_error: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			document_processed: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			document_state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			document_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			editable_submissions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			encrypt_pdfs: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			encrypt_pdfs_password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiration_interval: new FormControl<ListTemplatesReturnExpiration_interval | null | undefined>(undefined, [Validators.required]),
			expire_after: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			expire_submissions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			fields: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			first_template: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			footer_html: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			header_html: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			html: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			locked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			page_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			parent_folder_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permanent_document_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			public_submissions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			public_web_form: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			redirect_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			scss: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shared_field_data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slack_webhook_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			template_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			webhook_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetFullTemplateReturnDefaults {

		/** Required */
		color: string;

		/**
		 * Required
		 * Type: double
		 */
		fontSize: number;

		/** Required */
		typeface: string;
	}
	export interface GetFullTemplateReturnDefaultsFormProperties {

		/** Required */
		color: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		fontSize: FormControl<number | null | undefined>,

		/** Required */
		typeface: FormControl<string | null | undefined>,
	}
	export function CreateGetFullTemplateReturnDefaultsFormGroup() {
		return new FormGroup<GetFullTemplateReturnDefaultsFormProperties>({
			color: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fontSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			typeface: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePDFTemplateFromUploadPostBody {

		/** Required */
		template: CreatePDFTemplateFromUploadPostBodyTemplate;
	}
	export interface CreatePDFTemplateFromUploadPostBodyFormProperties {
	}
	export function CreateCreatePDFTemplateFromUploadPostBodyFormGroup() {
		return new FormGroup<CreatePDFTemplateFromUploadPostBodyFormProperties>({
		});

	}

	export interface CreatePDFTemplateFromUploadPostBodyTemplate {
		allow_additional_properties?: boolean | null;
		description?: string | null;
		document?: CreatePDFTemplateFromUploadPostBodyTemplateDocument;
		editable_submissions?: boolean | null;
		expiration_interval?: ListTemplatesReturnExpiration_interval | null;

		/** Type: double */
		expire_after?: number | null;
		expire_submissions?: boolean | null;
		footer_html?: string | null;
		header_html?: string | null;
		html?: string | null;

		/** Required */
		name: string;
		public_submissions?: boolean | null;
		public_web_form?: boolean | null;
		redirect_url?: string | null;
		scss?: string | null;
		slack_webhook_url?: string | null;
		template_type?: CreatePDFTemplateFromUploadPostBodyTemplateTemplate_type | null;
		webhook_url?: string | null;
	}
	export interface CreatePDFTemplateFromUploadPostBodyTemplateFormProperties {
		allow_additional_properties: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		editable_submissions: FormControl<boolean | null | undefined>,
		expiration_interval: FormControl<ListTemplatesReturnExpiration_interval | null | undefined>,

		/** Type: double */
		expire_after: FormControl<number | null | undefined>,
		expire_submissions: FormControl<boolean | null | undefined>,
		footer_html: FormControl<string | null | undefined>,
		header_html: FormControl<string | null | undefined>,
		html: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		public_submissions: FormControl<boolean | null | undefined>,
		public_web_form: FormControl<boolean | null | undefined>,
		redirect_url: FormControl<string | null | undefined>,
		scss: FormControl<string | null | undefined>,
		slack_webhook_url: FormControl<string | null | undefined>,
		template_type: FormControl<CreatePDFTemplateFromUploadPostBodyTemplateTemplate_type | null | undefined>,
		webhook_url: FormControl<string | null | undefined>,
	}
	export function CreateCreatePDFTemplateFromUploadPostBodyTemplateFormGroup() {
		return new FormGroup<CreatePDFTemplateFromUploadPostBodyTemplateFormProperties>({
			allow_additional_properties: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			editable_submissions: new FormControl<boolean | null | undefined>(undefined),
			expiration_interval: new FormControl<ListTemplatesReturnExpiration_interval | null | undefined>(undefined),
			expire_after: new FormControl<number | null | undefined>(undefined),
			expire_submissions: new FormControl<boolean | null | undefined>(undefined),
			footer_html: new FormControl<string | null | undefined>(undefined),
			header_html: new FormControl<string | null | undefined>(undefined),
			html: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			public_submissions: new FormControl<boolean | null | undefined>(undefined),
			public_web_form: new FormControl<boolean | null | undefined>(undefined),
			redirect_url: new FormControl<string | null | undefined>(undefined),
			scss: new FormControl<string | null | undefined>(undefined),
			slack_webhook_url: new FormControl<string | null | undefined>(undefined),
			template_type: new FormControl<CreatePDFTemplateFromUploadPostBodyTemplateTemplate_type | null | undefined>(undefined),
			webhook_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePDFTemplateFromUploadPostBodyTemplateDocument {

		/** Required */
		id: string;

		/** Required */
		metadata: CreatePDFTemplateFromUploadPostBodyTemplateDocumentMetadata;

		/** Required */
		storage: CreatePDFTemplateFromUploadPostBodyTemplateDocumentStorage;
	}
	export interface CreatePDFTemplateFromUploadPostBodyTemplateDocumentFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		storage: FormControl<CreatePDFTemplateFromUploadPostBodyTemplateDocumentStorage | null | undefined>,
	}
	export function CreateCreatePDFTemplateFromUploadPostBodyTemplateDocumentFormGroup() {
		return new FormGroup<CreatePDFTemplateFromUploadPostBodyTemplateDocumentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			storage: new FormControl<CreatePDFTemplateFromUploadPostBodyTemplateDocumentStorage | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePDFTemplateFromUploadPostBodyTemplateDocumentMetadata {

		/** Required */
		filename: string;

		/** Required */
		mime_type: CreatePDFTemplateFromUploadPostBodyTemplateDocumentMetadataMime_type;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		size: number;
	}
	export interface CreatePDFTemplateFromUploadPostBodyTemplateDocumentMetadataFormProperties {

		/** Required */
		filename: FormControl<string | null | undefined>,

		/** Required */
		mime_type: FormControl<CreatePDFTemplateFromUploadPostBodyTemplateDocumentMetadataMime_type | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		size: FormControl<number | null | undefined>,
	}
	export function CreateCreatePDFTemplateFromUploadPostBodyTemplateDocumentMetadataFormGroup() {
		return new FormGroup<CreatePDFTemplateFromUploadPostBodyTemplateDocumentMetadataFormProperties>({
			filename: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mime_type: new FormControl<CreatePDFTemplateFromUploadPostBodyTemplateDocumentMetadataMime_type | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreatePDFTemplateFromUploadPostBodyTemplateDocumentMetadataMime_type { 'application/pdf' = 'application/pdf' }

	export enum CreatePDFTemplateFromUploadPostBodyTemplateDocumentStorage { cache = 'cache' }

	export enum CreatePDFTemplateFromUploadPostBodyTemplateTemplate_type { pdf = 'pdf', html = 'html' }

	export interface CreateHTMLTemplatePostBody {

		/** Required */
		template: CreateHTMLTemplatePostBodyTemplate;
	}
	export interface CreateHTMLTemplatePostBodyFormProperties {
	}
	export function CreateCreateHTMLTemplatePostBodyFormGroup() {
		return new FormGroup<CreateHTMLTemplatePostBodyFormProperties>({
		});

	}

	export interface CreateHTMLTemplatePostBodyTemplate {
		allow_additional_properties?: boolean | null;
		description?: string | null;
		editable_submissions?: boolean | null;
		expiration_interval?: ListTemplatesReturnExpiration_interval | null;

		/** Type: double */
		expire_after?: number | null;
		expire_submissions?: boolean | null;
		footer_html?: string | null;
		header_html?: string | null;
		html?: string | null;

		/** Required */
		name: string;
		public_submissions?: boolean | null;
		public_web_form?: boolean | null;
		redirect_url?: string | null;
		scss?: string | null;
		slack_webhook_url?: string | null;
		template_type?: CreatePDFTemplateFromUploadPostBodyTemplateTemplate_type | null;
		webhook_url?: string | null;
	}
	export interface CreateHTMLTemplatePostBodyTemplateFormProperties {
		allow_additional_properties: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		editable_submissions: FormControl<boolean | null | undefined>,
		expiration_interval: FormControl<ListTemplatesReturnExpiration_interval | null | undefined>,

		/** Type: double */
		expire_after: FormControl<number | null | undefined>,
		expire_submissions: FormControl<boolean | null | undefined>,
		footer_html: FormControl<string | null | undefined>,
		header_html: FormControl<string | null | undefined>,
		html: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		public_submissions: FormControl<boolean | null | undefined>,
		public_web_form: FormControl<boolean | null | undefined>,
		redirect_url: FormControl<string | null | undefined>,
		scss: FormControl<string | null | undefined>,
		slack_webhook_url: FormControl<string | null | undefined>,
		template_type: FormControl<CreatePDFTemplateFromUploadPostBodyTemplateTemplate_type | null | undefined>,
		webhook_url: FormControl<string | null | undefined>,
	}
	export function CreateCreateHTMLTemplatePostBodyTemplateFormGroup() {
		return new FormGroup<CreateHTMLTemplatePostBodyTemplateFormProperties>({
			allow_additional_properties: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			editable_submissions: new FormControl<boolean | null | undefined>(undefined),
			expiration_interval: new FormControl<ListTemplatesReturnExpiration_interval | null | undefined>(undefined),
			expire_after: new FormControl<number | null | undefined>(undefined),
			expire_submissions: new FormControl<boolean | null | undefined>(undefined),
			footer_html: new FormControl<string | null | undefined>(undefined),
			header_html: new FormControl<string | null | undefined>(undefined),
			html: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			public_submissions: new FormControl<boolean | null | undefined>(undefined),
			public_web_form: new FormControl<boolean | null | undefined>(undefined),
			redirect_url: new FormControl<string | null | undefined>(undefined),
			scss: new FormControl<string | null | undefined>(undefined),
			slack_webhook_url: new FormControl<string | null | undefined>(undefined),
			template_type: new FormControl<CreatePDFTemplateFromUploadPostBodyTemplateTemplate_type | null | undefined>(undefined),
			webhook_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPresignUrlReturn {

		/** Required */
		fields: GetPresignUrlReturnFields;

		/** Required */
		headers: string;
		method?: GetPresignUrlReturnMethod | null;

		/** Required */
		url: string;
	}
	export interface GetPresignUrlReturnFormProperties {

		/** Required */
		headers: FormControl<string | null | undefined>,
		method: FormControl<GetPresignUrlReturnMethod | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGetPresignUrlReturnFormGroup() {
		return new FormGroup<GetPresignUrlReturnFormProperties>({
			headers: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			method: new FormControl<GetPresignUrlReturnMethod | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPresignUrlReturnFields {

		/** Required */
		key: string;

		/** Required */
		policy: string;

		/** Required */
		'x-amz-algorithm': string;

		/** Required */
		'x-amz-credential': string;

		/** Required */
		'x-amz-date': string;

		/** Required */
		'x-amz-signature': string;
	}
	export interface GetPresignUrlReturnFieldsFormProperties {

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		policy: FormControl<string | null | undefined>,

		/** Required */
		'x-amz-algorithm': FormControl<string | null | undefined>,

		/** Required */
		'x-amz-credential': FormControl<string | null | undefined>,

		/** Required */
		'x-amz-date': FormControl<string | null | undefined>,

		/** Required */
		'x-amz-signature': FormControl<string | null | undefined>,
	}
	export function CreateGetPresignUrlReturnFieldsFormGroup() {
		return new FormGroup<GetPresignUrlReturnFieldsFormProperties>({
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'x-amz-algorithm': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'x-amz-credential': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'x-amz-date': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'x-amz-signature': new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GetPresignUrlReturnMethod { post = 'post' }

}

