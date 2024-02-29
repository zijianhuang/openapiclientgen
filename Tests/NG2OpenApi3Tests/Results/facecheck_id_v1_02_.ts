import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BrowserJsonResponse {
		code?: string | null;
		error?: string | null;
		hasEmptyImages?: boolean | null;
		id_search?: string | null;
		input?: Array<InputImage>;
		message?: string | null;
		output?: Search_Results;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		progress?: number | null;
	}
	export interface BrowserJsonResponseFormProperties {
		code: FormControl<string | null | undefined>,
		error: FormControl<string | null | undefined>,
		hasEmptyImages: FormControl<boolean | null | undefined>,
		id_search: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		progress: FormControl<number | null | undefined>,
	}
	export function CreateBrowserJsonResponseFormGroup() {
		return new FormGroup<BrowserJsonResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			error: new FormControl<string | null | undefined>(undefined),
			hasEmptyImages: new FormControl<boolean | null | undefined>(undefined),
			id_search: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			progress: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InputImage {
		base64?: string | null;
		id_pic?: string | null;
		svg_anim?: string | null;
		url_source?: string | null;
	}
	export interface InputImageFormProperties {
		base64: FormControl<string | null | undefined>,
		id_pic: FormControl<string | null | undefined>,
		svg_anim: FormControl<string | null | undefined>,
		url_source: FormControl<string | null | undefined>,
	}
	export function CreateInputImageFormGroup() {
		return new FormGroup<InputImageFormProperties>({
			base64: new FormControl<string | null | undefined>(undefined),
			id_pic: new FormControl<string | null | undefined>(undefined),
			svg_anim: new FormControl<string | null | undefined>(undefined),
			url_source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Search_Results {
		demo?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		face_per_sec?: number | null;

		/** Type: double */
		freeRam?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		images_in_bundle?: number | null;
		items?: Array<SearchItem>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		max_score?: number | null;
		performance?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		scaned_till_index?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		searchedFaces?: number | null;

		/** Type: double */
		tookSeconds?: number | null;

		/** Type: double */
		tookSecondsDownload?: number | null;

		/** Type: double */
		tookSecondsQueue?: number | null;
	}
	export interface Search_ResultsFormProperties {
		demo: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		face_per_sec: FormControl<number | null | undefined>,

		/** Type: double */
		freeRam: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		images_in_bundle: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		max_score: FormControl<number | null | undefined>,
		performance: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		scaned_till_index: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		searchedFaces: FormControl<number | null | undefined>,

		/** Type: double */
		tookSeconds: FormControl<number | null | undefined>,

		/** Type: double */
		tookSecondsDownload: FormControl<number | null | undefined>,

		/** Type: double */
		tookSecondsQueue: FormControl<number | null | undefined>,
	}
	export function CreateSearch_ResultsFormGroup() {
		return new FormGroup<Search_ResultsFormProperties>({
			demo: new FormControl<boolean | null | undefined>(undefined),
			face_per_sec: new FormControl<number | null | undefined>(undefined),
			freeRam: new FormControl<number | null | undefined>(undefined),
			images_in_bundle: new FormControl<number | null | undefined>(undefined),
			max_score: new FormControl<number | null | undefined>(undefined),
			performance: new FormControl<string | null | undefined>(undefined),
			scaned_till_index: new FormControl<number | null | undefined>(undefined),
			searchedFaces: new FormControl<number | null | undefined>(undefined),
			tookSeconds: new FormControl<number | null | undefined>(undefined),
			tookSecondsDownload: new FormControl<number | null | undefined>(undefined),
			tookSecondsQueue: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchItem {
		base64?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		group?: number | null;
		guid?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		index?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		indexDB?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		score?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		seen?: string | null;
		url?: string | null;
	}
	export interface SearchItemFormProperties {
		base64: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		group: FormControl<number | null | undefined>,
		guid: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		index: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		indexDB: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		score: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		seen: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateSearchItemFormGroup() {
		return new FormGroup<SearchItemFormProperties>({
			base64: new FormControl<string | null | undefined>(undefined),
			group: new FormControl<number | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			indexDB: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			seen: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InfoResponse {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		faces?: number | null;
		has_credits_to_search?: boolean | null;
		is_online?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		remaining_credits?: number | null;
	}
	export interface InfoResponseFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		faces: FormControl<number | null | undefined>,
		has_credits_to_search: FormControl<boolean | null | undefined>,
		is_online: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		remaining_credits: FormControl<number | null | undefined>,
	}
	export function CreateInfoResponseFormGroup() {
		return new FormGroup<InfoResponseFormProperties>({
			faces: new FormControl<number | null | undefined>(undefined),
			has_credits_to_search: new FormControl<boolean | null | undefined>(undefined),
			is_online: new FormControl<boolean | null | undefined>(undefined),
			remaining_credits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchData {

		/** true = searches only the first 100,000 faces, good for testing/debugging */
		demo?: boolean | null;

		/** captcha is not used */
		id_captcha?: string | null;
		id_search?: string | null;

		/** true = don't submit a new search */
		status_only?: boolean | null;

		/** true = return imediately with a progress. False waits until search is finished. */
		with_progress?: boolean | null;
	}
	export interface SearchDataFormProperties {

		/** true = searches only the first 100,000 faces, good for testing/debugging */
		demo: FormControl<boolean | null | undefined>,

		/** captcha is not used */
		id_captcha: FormControl<string | null | undefined>,
		id_search: FormControl<string | null | undefined>,

		/** true = don't submit a new search */
		status_only: FormControl<boolean | null | undefined>,

		/** true = return imediately with a progress. False waits until search is finished. */
		with_progress: FormControl<boolean | null | undefined>,
	}
	export function CreateSearchDataFormGroup() {
		return new FormGroup<SearchDataFormProperties>({
			demo: new FormControl<boolean | null | undefined>(undefined),
			id_captcha: new FormControl<string | null | undefined>(undefined),
			id_search: new FormControl<string | null | undefined>(undefined),
			status_only: new FormControl<boolean | null | undefined>(undefined),
			with_progress: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Remove an image from a search request
		 * Post api/delete_pic
		 * @return {BrowserJsonResponse} Success
		 */
		ApiDelete_picPostById_searchAndId_pic(id_search: string | null | undefined, id_pic: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<BrowserJsonResponse> {
			return this.http.post<BrowserJsonResponse>(this.baseUri + 'api/delete_pic?id_search=' + (id_search == null ? '' : encodeURIComponent(id_search)) + '&id_pic=' + (id_pic == null ? '' : encodeURIComponent(id_pic)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns remaining search credits, search engine online status, and number of indexed faces
		 * Post api/info
		 * @return {InfoResponse} Success
		 */
		ApiInfoPost(headersHandler?: () => HttpHeaders): Observable<InfoResponse> {
			return this.http.post<InfoResponse>(this.baseUri + 'api/info', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/search
		 * @return {BrowserJsonResponse} Success
		 */
		ApiSearchPost(requestBody: SearchData, headersHandler?: () => HttpHeaders): Observable<BrowserJsonResponse> {
			return this.http.post<BrowserJsonResponse>(this.baseUri + 'api/search', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

