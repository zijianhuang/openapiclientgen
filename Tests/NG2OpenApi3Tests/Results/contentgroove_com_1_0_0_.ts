import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Clip_response_object {
		data?: Clip_response_object_data;
		links?: Links_object_data;
	}
	export interface Clip_response_objectFormProperties {
	}
	export function CreateClip_response_objectFormGroup() {
		return new FormGroup<Clip_response_objectFormProperties>({
		});

	}

	export interface Clip_response_object_data {
		attributes?: Clip_response_object_dataAttributes;
		id?: string | null;
		relationships?: Clip_response_object_dataRelationships;
		type?: string | null;
	}
	export interface Clip_response_object_dataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateClip_response_object_dataFormGroup() {
		return new FormGroup<Clip_response_object_dataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Clip_response_object_dataAttributes {
		created_at?: string | null;
		end_char?: number | null;
		end_time?: number | null;
		external_id?: string | null;
		is_processing?: boolean | null;
		media_file_content_duration?: string | null;
		media_file_content_type?: string | null;
		media_file_height?: string | null;
		media_file_preview_image_url?: string | null;
		media_file_url?: string | null;
		media_file_width?: string | null;
		name?: string | null;
		processing_started_at?: string | null;
		rank?: number | null;
		start_char?: number | null;
		start_time?: number | null;
		text?: string | null;
	}
	export interface Clip_response_object_dataAttributesFormProperties {
		created_at: FormControl<string | null | undefined>,
		end_char: FormControl<number | null | undefined>,
		end_time: FormControl<number | null | undefined>,
		external_id: FormControl<string | null | undefined>,
		is_processing: FormControl<boolean | null | undefined>,
		media_file_content_duration: FormControl<string | null | undefined>,
		media_file_content_type: FormControl<string | null | undefined>,
		media_file_height: FormControl<string | null | undefined>,
		media_file_preview_image_url: FormControl<string | null | undefined>,
		media_file_url: FormControl<string | null | undefined>,
		media_file_width: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		processing_started_at: FormControl<string | null | undefined>,
		rank: FormControl<number | null | undefined>,
		start_char: FormControl<number | null | undefined>,
		start_time: FormControl<number | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateClip_response_object_dataAttributesFormGroup() {
		return new FormGroup<Clip_response_object_dataAttributesFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			end_char: new FormControl<number | null | undefined>(undefined),
			end_time: new FormControl<number | null | undefined>(undefined),
			external_id: new FormControl<string | null | undefined>(undefined),
			is_processing: new FormControl<boolean | null | undefined>(undefined),
			media_file_content_duration: new FormControl<string | null | undefined>(undefined),
			media_file_content_type: new FormControl<string | null | undefined>(undefined),
			media_file_height: new FormControl<string | null | undefined>(undefined),
			media_file_preview_image_url: new FormControl<string | null | undefined>(undefined),
			media_file_url: new FormControl<string | null | undefined>(undefined),
			media_file_width: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			processing_started_at: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			start_char: new FormControl<number | null | undefined>(undefined),
			start_time: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Clip_response_object_dataRelationships {
		media?: Clip_response_object_dataRelationshipsMedia;
	}
	export interface Clip_response_object_dataRelationshipsFormProperties {
	}
	export function CreateClip_response_object_dataRelationshipsFormGroup() {
		return new FormGroup<Clip_response_object_dataRelationshipsFormProperties>({
		});

	}

	export interface Clip_response_object_dataRelationshipsMedia {
		data?: Clip_response_object_dataRelationshipsMediaData;
	}
	export interface Clip_response_object_dataRelationshipsMediaFormProperties {
	}
	export function CreateClip_response_object_dataRelationshipsMediaFormGroup() {
		return new FormGroup<Clip_response_object_dataRelationshipsMediaFormProperties>({
		});

	}

	export interface Clip_response_object_dataRelationshipsMediaData {
		id?: string | null;
		type?: string | null;
	}
	export interface Clip_response_object_dataRelationshipsMediaDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateClip_response_object_dataRelationshipsMediaDataFormGroup() {
		return new FormGroup<Clip_response_object_dataRelationshipsMediaDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Links_object_data {
		current?: string | null;
		first?: string | null;
		last?: string | null;
		next?: string | null;
		prev?: string | null;
		self?: string | null;
	}
	export interface Links_object_dataFormProperties {
		current: FormControl<string | null | undefined>,
		first: FormControl<string | null | undefined>,
		last: FormControl<string | null | undefined>,
		next: FormControl<string | null | undefined>,
		prev: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateLinks_object_dataFormGroup() {
		return new FormGroup<Links_object_dataFormProperties>({
			current: new FormControl<string | null | undefined>(undefined),
			first: new FormControl<string | null | undefined>(undefined),
			last: new FormControl<string | null | undefined>(undefined),
			next: new FormControl<string | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Clips_response_object {
		data?: Array<Clip_response_object_data>;
		links?: Links_object_data;
	}
	export interface Clips_response_objectFormProperties {
	}
	export function CreateClips_response_objectFormGroup() {
		return new FormGroup<Clips_response_objectFormProperties>({
		});

	}

	export interface Direct_upload_response_object {
		data?: Direct_upload_response_objectData;
	}
	export interface Direct_upload_response_objectFormProperties {
	}
	export function CreateDirect_upload_response_objectFormGroup() {
		return new FormGroup<Direct_upload_response_objectFormProperties>({
		});

	}

	export interface Direct_upload_response_objectData {
		attributes?: Direct_upload_response_objectDataAttributes;
		id?: string | null;
		type?: string | null;
	}
	export interface Direct_upload_response_objectDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateDirect_upload_response_objectDataFormGroup() {
		return new FormGroup<Direct_upload_response_objectDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Direct_upload_response_objectDataAttributes {
		upload_id?: string | null;
		upload_url?: string | null;
	}
	export interface Direct_upload_response_objectDataAttributesFormProperties {
		upload_id: FormControl<string | null | undefined>,
		upload_url: FormControl<string | null | undefined>,
	}
	export function CreateDirect_upload_response_objectDataAttributesFormGroup() {
		return new FormGroup<Direct_upload_response_objectDataAttributesFormProperties>({
			upload_id: new FormControl<string | null | undefined>(undefined),
			upload_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Media_response_object {
		data?: Media_response_object_data;
		links?: Links_object_data;
	}
	export interface Media_response_objectFormProperties {
	}
	export function CreateMedia_response_objectFormGroup() {
		return new FormGroup<Media_response_objectFormProperties>({
		});

	}

	export interface Media_response_object_data {
		attributes?: Media_response_object_dataAttributes;
		id?: string | null;
		relationships?: Media_response_object_dataRelationships;
		type?: string | null;
	}
	export interface Media_response_object_dataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateMedia_response_object_dataFormGroup() {
		return new FormGroup<Media_response_object_dataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Media_response_object_dataAttributes {
		created_at?: string | null;
		description?: string | null;
		external_id?: string | null;
		has_fetch_error?: boolean | null;
		is_processing?: boolean | null;
		name?: string | null;
		original_created_at?: string | null;
		processing_started_at?: string | null;
		source_created_at?: string | null;
		source_file_content_type?: string | null;
		source_file_duration?: number | null;
		source_file_height?: number | null;
		source_file_preview_image_url?: string | null;
		source_file_width?: number | null;
		source_url?: string | null;
	}
	export interface Media_response_object_dataAttributesFormProperties {
		created_at: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		external_id: FormControl<string | null | undefined>,
		has_fetch_error: FormControl<boolean | null | undefined>,
		is_processing: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		original_created_at: FormControl<string | null | undefined>,
		processing_started_at: FormControl<string | null | undefined>,
		source_created_at: FormControl<string | null | undefined>,
		source_file_content_type: FormControl<string | null | undefined>,
		source_file_duration: FormControl<number | null | undefined>,
		source_file_height: FormControl<number | null | undefined>,
		source_file_preview_image_url: FormControl<string | null | undefined>,
		source_file_width: FormControl<number | null | undefined>,
		source_url: FormControl<string | null | undefined>,
	}
	export function CreateMedia_response_object_dataAttributesFormGroup() {
		return new FormGroup<Media_response_object_dataAttributesFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			external_id: new FormControl<string | null | undefined>(undefined),
			has_fetch_error: new FormControl<boolean | null | undefined>(undefined),
			is_processing: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			original_created_at: new FormControl<string | null | undefined>(undefined),
			processing_started_at: new FormControl<string | null | undefined>(undefined),
			source_created_at: new FormControl<string | null | undefined>(undefined),
			source_file_content_type: new FormControl<string | null | undefined>(undefined),
			source_file_duration: new FormControl<number | null | undefined>(undefined),
			source_file_height: new FormControl<number | null | undefined>(undefined),
			source_file_preview_image_url: new FormControl<string | null | undefined>(undefined),
			source_file_width: new FormControl<number | null | undefined>(undefined),
			source_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Media_response_object_dataRelationships {
		clips?: Media_response_object_dataRelationshipsClips;
	}
	export interface Media_response_object_dataRelationshipsFormProperties {
	}
	export function CreateMedia_response_object_dataRelationshipsFormGroup() {
		return new FormGroup<Media_response_object_dataRelationshipsFormProperties>({
		});

	}

	export interface Media_response_object_dataRelationshipsClips {
		Media_response_object_dataRelationshipsClipsData?: Array<Media_response_object_dataRelationshipsClipsData>;
	}
	export interface Media_response_object_dataRelationshipsClipsFormProperties {
	}
	export function CreateMedia_response_object_dataRelationshipsClipsFormGroup() {
		return new FormGroup<Media_response_object_dataRelationshipsClipsFormProperties>({
		});

	}

	export interface Media_response_object_dataRelationshipsClipsData {
		id?: string | null;
		type?: string | null;
	}
	export interface Media_response_object_dataRelationshipsClipsDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateMedia_response_object_dataRelationshipsClipsDataFormGroup() {
		return new FormGroup<Media_response_object_dataRelationshipsClipsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Medias_response_object {
		data?: Array<Media_response_object_data>;
		links?: Links_object_data;
	}
	export interface Medias_response_objectFormProperties {
	}
	export function CreateMedias_response_objectFormGroup() {
		return new FormGroup<Medias_response_objectFormProperties>({
		});

	}

	export interface Payment_required_error_response_object {
		Payment_required_error_response_objectErrors?: Array<Payment_required_error_response_objectErrors>;
	}
	export interface Payment_required_error_response_objectFormProperties {
	}
	export function CreatePayment_required_error_response_objectFormGroup() {
		return new FormGroup<Payment_required_error_response_objectFormProperties>({
		});

	}

	export interface Payment_required_error_response_objectErrors {
		code?: string | null;
		detail?: string | null;
		source?: Payment_required_error_response_objectErrorsSource;
		status?: string | null;
		title?: string | null;
	}
	export interface Payment_required_error_response_objectErrorsFormProperties {
		code: FormControl<string | null | undefined>,
		detail: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreatePayment_required_error_response_objectErrorsFormGroup() {
		return new FormGroup<Payment_required_error_response_objectErrorsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Payment_required_error_response_objectErrorsSource {
		pointer?: string | null;
	}
	export interface Payment_required_error_response_objectErrorsSourceFormProperties {
		pointer: FormControl<string | null | undefined>,
	}
	export function CreatePayment_required_error_response_objectErrorsSourceFormGroup() {
		return new FormGroup<Payment_required_error_response_objectErrorsSourceFormProperties>({
			pointer: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Too_many_requests_error_response_object {
		Too_many_requests_error_response_objectErrors?: Array<Too_many_requests_error_response_objectErrors>;
	}
	export interface Too_many_requests_error_response_objectFormProperties {
	}
	export function CreateToo_many_requests_error_response_objectFormGroup() {
		return new FormGroup<Too_many_requests_error_response_objectFormProperties>({
		});

	}

	export interface Too_many_requests_error_response_objectErrors {
		detail?: string | null;
		status?: string | null;
		title?: string | null;
	}
	export interface Too_many_requests_error_response_objectErrorsFormProperties {
		detail: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateToo_many_requests_error_response_objectErrorsFormGroup() {
		return new FormGroup<Too_many_requests_error_response_objectErrorsFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Unauthorized_error_response_object {
		Unauthorized_error_response_objectErrors?: Array<Unauthorized_error_response_objectErrors>;
	}
	export interface Unauthorized_error_response_objectFormProperties {
	}
	export function CreateUnauthorized_error_response_objectFormGroup() {
		return new FormGroup<Unauthorized_error_response_objectFormProperties>({
		});

	}

	export interface Unauthorized_error_response_objectErrors {
		message?: string | null;
	}
	export interface Unauthorized_error_response_objectErrorsFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateUnauthorized_error_response_objectErrorsFormGroup() {
		return new FormGroup<Unauthorized_error_response_objectErrorsFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Webhook_subscription_response_object {
		data?: Webhook_subscription_response_object_data;
		links?: Links_object_data;
	}
	export interface Webhook_subscription_response_objectFormProperties {
	}
	export function CreateWebhook_subscription_response_objectFormGroup() {
		return new FormGroup<Webhook_subscription_response_objectFormProperties>({
		});

	}

	export interface Webhook_subscription_response_object_data {
		attributes?: Webhook_subscription_response_object_dataAttributes;
		id?: string | null;
		relationships?: Webhook_subscription_response_object_dataRelationships;
		type?: string | null;
	}
	export interface Webhook_subscription_response_object_dataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateWebhook_subscription_response_object_dataFormGroup() {
		return new FormGroup<Webhook_subscription_response_object_dataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Webhook_subscription_response_object_dataAttributes {
		active?: boolean | null;
		created_at?: string | null;
		subscribed_events?: Array<string>;
		updated_at?: string | null;
		url?: string | null;
	}
	export interface Webhook_subscription_response_object_dataAttributesFormProperties {
		active: FormControl<boolean | null | undefined>,
		created_at: FormControl<string | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebhook_subscription_response_object_dataAttributesFormGroup() {
		return new FormGroup<Webhook_subscription_response_object_dataAttributesFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Webhook_subscription_response_object_dataRelationships {
		user?: Webhook_subscription_response_object_dataRelationshipsUser;
		webhook_events?: Webhook_subscription_response_object_dataRelationshipsWebhook_events;
	}
	export interface Webhook_subscription_response_object_dataRelationshipsFormProperties {
	}
	export function CreateWebhook_subscription_response_object_dataRelationshipsFormGroup() {
		return new FormGroup<Webhook_subscription_response_object_dataRelationshipsFormProperties>({
		});

	}

	export interface Webhook_subscription_response_object_dataRelationshipsUser {
		data?: Webhook_subscription_response_object_dataRelationshipsUserData;
	}
	export interface Webhook_subscription_response_object_dataRelationshipsUserFormProperties {
	}
	export function CreateWebhook_subscription_response_object_dataRelationshipsUserFormGroup() {
		return new FormGroup<Webhook_subscription_response_object_dataRelationshipsUserFormProperties>({
		});

	}

	export interface Webhook_subscription_response_object_dataRelationshipsUserData {
		id?: string | null;
		type?: string | null;
	}
	export interface Webhook_subscription_response_object_dataRelationshipsUserDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateWebhook_subscription_response_object_dataRelationshipsUserDataFormGroup() {
		return new FormGroup<Webhook_subscription_response_object_dataRelationshipsUserDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Webhook_subscription_response_object_dataRelationshipsWebhook_events {
		Webhook_subscription_response_object_dataRelationshipsWebhook_eventsData?: Array<Webhook_subscription_response_object_dataRelationshipsWebhook_eventsData>;
	}
	export interface Webhook_subscription_response_object_dataRelationshipsWebhook_eventsFormProperties {
	}
	export function CreateWebhook_subscription_response_object_dataRelationshipsWebhook_eventsFormGroup() {
		return new FormGroup<Webhook_subscription_response_object_dataRelationshipsWebhook_eventsFormProperties>({
		});

	}

	export interface Webhook_subscription_response_object_dataRelationshipsWebhook_eventsData {
		id?: string | null;
		type?: string | null;
	}
	export interface Webhook_subscription_response_object_dataRelationshipsWebhook_eventsDataFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateWebhook_subscription_response_object_dataRelationshipsWebhook_eventsDataFormGroup() {
		return new FormGroup<Webhook_subscription_response_object_dataRelationshipsWebhook_eventsDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Webhook_subscriptions_response_object {
		data?: Array<Webhook_subscription_response_object_data>;
		links?: Links_object_data;
	}
	export interface Webhook_subscriptions_response_objectFormProperties {
	}
	export function CreateWebhook_subscriptions_response_objectFormGroup() {
		return new FormGroup<Webhook_subscriptions_response_objectFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * list clips
		 * Get clips
		 * @param {string} filter Filters to be applied to the query.
		 * Query params in the url must look like this: "filter[attributeName_*matcher*]"
		 * (i.e. filter[name_eq]=chimp%20into%20space)
		 * Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/
		 * @param {string} page Specify page number and page size for the query
		 * @param {GetClipsSort} sort Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting
		 * @return {Clips_response_object} successful
		 */
		GetClips(filter: string | null | undefined, page: string | null | undefined, sort: GetClipsSort | null | undefined): Observable<Clips_response_object> {
			return this.http.get<Clips_response_object>(this.baseUri + 'clips?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&sort=' + sort, {});
		}

		/**
		 * create clip
		 * Post clips
		 * @return {Clip_response_object} successful
		 */
		CreateClip(requestBody: CreateClipPostBody): Observable<Clip_response_object> {
			return this.http.post<Clip_response_object>(this.baseUri + 'clips', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * delete clip
		 * Delete clips/{id}
		 * @return {void} 
		 */
		DeleteClipById(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'clips/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * show clip
		 * Get clips/{id}
		 * @return {Clip_response_object} successful
		 */
		GetClipById(): Observable<Clip_response_object> {
			return this.http.get<Clip_response_object>(this.baseUri + 'clips/{id}', {});
		}

		/**
		 * update clip
		 * Put clips/{id}
		 * @return {Clip_response_object} successful
		 */
		UpdateClipById(requestBody: UpdateClipByIdPutBody): Observable<Clip_response_object> {
			return this.http.put<Clip_response_object>(this.baseUri + 'clips/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * prepare presigned upload url
		 * Get direct_uploads
		 * @return {Direct_upload_response_object} successful
		 */
		GetUploadUrl(): Observable<Direct_upload_response_object> {
			return this.http.get<Direct_upload_response_object>(this.baseUri + 'direct_uploads', {});
		}

		/**
		 * list medias
		 * Get medias
		 * @param {string} filter Filters to be applied to the query.
		 * Query params in the url must look like this: "filter[attributeName_*matcher*]"
		 * (i.e. filter[name_eq]=chimp%20into%20space)
		 * Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/
		 * @param {string} page Specify page number and page size for the query
		 * @param {GetClipsSort} sort Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting
		 * @return {Medias_response_object} successful
		 */
		GetMedias(filter: string | null | undefined, page: string | null | undefined, sort: GetClipsSort | null | undefined): Observable<Medias_response_object> {
			return this.http.get<Medias_response_object>(this.baseUri + 'medias?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&sort=' + sort, {});
		}

		/**
		 * create media
		 * Post medias
		 * @return {Media_response_object} successful
		 */
		CreateMedia(requestBody: CreateMediaPostBody): Observable<Media_response_object> {
			return this.http.post<Media_response_object>(this.baseUri + 'medias', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * delete media
		 * Delete medias/{id}
		 * @return {void} 
		 */
		DeleteMediaById(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'medias/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * show media
		 * Get medias/{id}
		 * @return {Media_response_object} successful
		 */
		GetMediaById(): Observable<Media_response_object> {
			return this.http.get<Media_response_object>(this.baseUri + 'medias/{id}', {});
		}

		/**
		 * update media
		 * Put medias/{id}
		 * @return {Media_response_object} successful
		 */
		UpdateMediaById(requestBody: UpdateMediaByIdPutBody): Observable<Media_response_object> {
			return this.http.put<Media_response_object>(this.baseUri + 'medias/{id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * list webhook subscriptions
		 * Get webhook_subscriptions
		 * @param {string} filter Filters to be applied to the query.
		 * Query params in the url must look like this: "filter[attributeName_*matcher*]"
		 * (i.e. filter[name_eq]=chimp%20into%20space)
		 * Available matchers can be found here: https://activerecord-hackery.github.io/ransack/getting-started/search-matches/
		 * @param {GetClipsSort} sort Sorting to be applied to the query. For more info: https://jsonapi.org/format/#fetching-sorting
		 * @return {Webhook_subscriptions_response_object} successful
		 */
		GetWebhookSubscriptions(filter: string | null | undefined, sort: GetClipsSort | null | undefined): Observable<Webhook_subscriptions_response_object> {
			return this.http.get<Webhook_subscriptions_response_object>(this.baseUri + 'webhook_subscriptions?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&sort=' + sort, {});
		}

		/**
		 * create webhook subscription
		 * Post webhook_subscriptions
		 * @return {Webhook_subscription_response_object} successful
		 */
		CreateWebhookSubscription(requestBody: CreateWebhookSubscriptionPostBody): Observable<Webhook_subscription_response_object> {
			return this.http.post<Webhook_subscription_response_object>(this.baseUri + 'webhook_subscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * delete webhook subscription
		 * Delete webhook_subscriptions/{id}
		 * @return {void} 
		 */
		DeleteWebhookSubscriptionById(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'webhook_subscriptions/{id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * show webhook subscription
		 * Get webhook_subscriptions/{id}
		 * @return {Webhook_subscription_response_object} successful
		 */
		GetWebhookSubscriptionById(): Observable<Webhook_subscription_response_object> {
			return this.http.get<Webhook_subscription_response_object>(this.baseUri + 'webhook_subscriptions/{id}', {});
		}
	}

	export enum GetClipsSort { created_at = 0, '-created_at' = 1, original_created_at = 2, '-original_created_at' = 3, name = 4, '-name' = 5 }

	export interface CreateClipPostBody {

		/** Required */
		data: CreateClipPostBodyData;
	}
	export interface CreateClipPostBodyFormProperties {
	}
	export function CreateCreateClipPostBodyFormGroup() {
		return new FormGroup<CreateClipPostBodyFormProperties>({
		});

	}

	export interface CreateClipPostBodyData {

		/** Required */
		attributes: CreateClipPostBodyDataAttributes;
	}
	export interface CreateClipPostBodyDataFormProperties {
	}
	export function CreateCreateClipPostBodyDataFormGroup() {
		return new FormGroup<CreateClipPostBodyDataFormProperties>({
		});

	}

	export interface CreateClipPostBodyDataAttributes {

		/** Required */
		end_time: number;

		/** Required */
		media_id: string;

		/** Required */
		name: string;

		/** Required */
		start_time: number;
	}
	export interface CreateClipPostBodyDataAttributesFormProperties {

		/** Required */
		end_time: FormControl<number | null | undefined>,

		/** Required */
		media_id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		start_time: FormControl<number | null | undefined>,
	}
	export function CreateCreateClipPostBodyDataAttributesFormGroup() {
		return new FormGroup<CreateClipPostBodyDataAttributesFormProperties>({
			end_time: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			media_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			start_time: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateClipByIdPutBody {

		/** Required */
		data: UpdateClipByIdPutBodyData;
	}
	export interface UpdateClipByIdPutBodyFormProperties {
	}
	export function CreateUpdateClipByIdPutBodyFormGroup() {
		return new FormGroup<UpdateClipByIdPutBodyFormProperties>({
		});

	}

	export interface UpdateClipByIdPutBodyData {

		/** Required */
		attributes: UpdateClipByIdPutBodyDataAttributes;
	}
	export interface UpdateClipByIdPutBodyDataFormProperties {
	}
	export function CreateUpdateClipByIdPutBodyDataFormGroup() {
		return new FormGroup<UpdateClipByIdPutBodyDataFormProperties>({
		});

	}

	export interface UpdateClipByIdPutBodyDataAttributes {
		end_time?: number | null;
		name?: string | null;
		start_time?: number | null;
	}
	export interface UpdateClipByIdPutBodyDataAttributesFormProperties {
		end_time: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		start_time: FormControl<number | null | undefined>,
	}
	export function CreateUpdateClipByIdPutBodyDataAttributesFormGroup() {
		return new FormGroup<UpdateClipByIdPutBodyDataAttributesFormProperties>({
			end_time: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			start_time: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateMediaPostBody {

		/** Required */
		data: CreateMediaPostBodyData;
	}
	export interface CreateMediaPostBodyFormProperties {
	}
	export function CreateCreateMediaPostBodyFormGroup() {
		return new FormGroup<CreateMediaPostBodyFormProperties>({
		});

	}

	export interface CreateMediaPostBodyData {

		/** Required */
		attributes: CreateMediaPostBodyDataAttributes;
	}
	export interface CreateMediaPostBodyDataFormProperties {
	}
	export function CreateCreateMediaPostBodyDataFormGroup() {
		return new FormGroup<CreateMediaPostBodyDataFormProperties>({
		});

	}

	export interface CreateMediaPostBodyDataAttributes {
		description?: string | null;
		name?: string | null;
		source_url?: string | null;
		upload_id?: string | null;
	}
	export interface CreateMediaPostBodyDataAttributesFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		source_url: FormControl<string | null | undefined>,
		upload_id: FormControl<string | null | undefined>,
	}
	export function CreateCreateMediaPostBodyDataAttributesFormGroup() {
		return new FormGroup<CreateMediaPostBodyDataAttributesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			source_url: new FormControl<string | null | undefined>(undefined),
			upload_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateMediaByIdPutBody {

		/** Required */
		data: UpdateMediaByIdPutBodyData;
	}
	export interface UpdateMediaByIdPutBodyFormProperties {
	}
	export function CreateUpdateMediaByIdPutBodyFormGroup() {
		return new FormGroup<UpdateMediaByIdPutBodyFormProperties>({
		});

	}

	export interface UpdateMediaByIdPutBodyData {

		/** Required */
		attributes: UpdateMediaByIdPutBodyDataAttributes;
	}
	export interface UpdateMediaByIdPutBodyDataFormProperties {
	}
	export function CreateUpdateMediaByIdPutBodyDataFormGroup() {
		return new FormGroup<UpdateMediaByIdPutBodyDataFormProperties>({
		});

	}

	export interface UpdateMediaByIdPutBodyDataAttributes {
		description?: string | null;
		name?: string | null;
	}
	export interface UpdateMediaByIdPutBodyDataAttributesFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateMediaByIdPutBodyDataAttributesFormGroup() {
		return new FormGroup<UpdateMediaByIdPutBodyDataAttributesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateWebhookSubscriptionPostBody {

		/** Required */
		data: CreateWebhookSubscriptionPostBodyData;
	}
	export interface CreateWebhookSubscriptionPostBodyFormProperties {
	}
	export function CreateCreateWebhookSubscriptionPostBodyFormGroup() {
		return new FormGroup<CreateWebhookSubscriptionPostBodyFormProperties>({
		});

	}

	export interface CreateWebhookSubscriptionPostBodyData {

		/** Required */
		attributes: CreateWebhookSubscriptionPostBodyDataAttributes;
	}
	export interface CreateWebhookSubscriptionPostBodyDataFormProperties {
	}
	export function CreateCreateWebhookSubscriptionPostBodyDataFormGroup() {
		return new FormGroup<CreateWebhookSubscriptionPostBodyDataFormProperties>({
		});

	}

	export interface CreateWebhookSubscriptionPostBodyDataAttributes {
		subscribed_events?: Array<string>;

		/** Required */
		url: string;
	}
	export interface CreateWebhookSubscriptionPostBodyDataAttributesFormProperties {

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCreateWebhookSubscriptionPostBodyDataAttributesFormGroup() {
		return new FormGroup<CreateWebhookSubscriptionPostBodyDataAttributesFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

}

