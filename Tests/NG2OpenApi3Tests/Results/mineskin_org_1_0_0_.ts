import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GenerateOptions {
		model?: GenerateOptionsModel | null;

		/** Max length: 20 */
		name?: string | null;

		/** Skin variant - automatically determined based on the image if not specified */
		variant?: GenerateOptionsVariant | null;

		/** Visibility of the generated skin. 0 for public, 1 for private */
		visibility?: GenerateOptionsVisibility;
	}
	export interface GenerateOptionsFormProperties {
		model: FormControl<GenerateOptionsModel | null | undefined>,

		/** Max length: 20 */
		name: FormControl<string | null | undefined>,

		/** Skin variant - automatically determined based on the image if not specified */
		variant: FormControl<GenerateOptionsVariant | null | undefined>,

		/** Visibility of the generated skin. 0 for public, 1 for private */
		visibility: FormControl<GenerateOptionsVisibility | null | undefined>,
	}
	export function CreateGenerateOptionsFormGroup() {
		return new FormGroup<GenerateOptionsFormProperties>({
			model: new FormControl<GenerateOptionsModel | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(20)]),
			variant: new FormControl<GenerateOptionsVariant | null | undefined>(undefined),
			visibility: new FormControl<GenerateOptionsVisibility | null | undefined>(undefined),
		});

	}

	export enum GenerateOptionsModel { steve = 'steve', slim = 'slim' }

	export enum GenerateOptionsVariant { classic = 'classic', slim = 'slim' }

	export enum GenerateOptionsVisibility { _0 = 0, _1 = 1 }

	export interface PartialSkinInfo {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;

		/** Required */
		name: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		time: number;

		/** Required */
		url: string;
	}
	export interface PartialSkinInfoFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		time: FormControl<number | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePartialSkinInfoFormGroup() {
		return new FormGroup<PartialSkinInfoFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			time: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SkinData {
		texture?: TextureInfo;
		uuid?: string | null;
	}
	export interface SkinDataFormProperties {
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateSkinDataFormGroup() {
		return new FormGroup<SkinDataFormProperties>({
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TextureInfo {
		signature?: string | null;
		url?: string | null;
		value?: string | null;
	}
	export interface TextureInfoFormProperties {
		signature: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTextureInfoFormGroup() {
		return new FormGroup<TextureInfoFormProperties>({
			signature: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SkinInfo {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		account?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		accountId?: number | null;

		/** Required */
		data: SkinData;

		/** Type: double */
		duration?: number | null;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;
		idStr?: string | null;

		/** Required */
		model: SkinInfoModel;
		name?: string | null;
		private?: boolean | null;
		server?: string | null;

		/** Type: double */
		timestamp?: number | null;
		uuid?: string | null;
		variant?: GenerateOptionsVariant | null;

		/** Type: double */
		views?: number | null;
	}
	export interface SkinInfoFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		account: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		accountId: FormControl<number | null | undefined>,

		/** Type: double */
		duration: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,
		idStr: FormControl<string | null | undefined>,

		/** Required */
		model: FormControl<SkinInfoModel | null | undefined>,
		name: FormControl<string | null | undefined>,
		private: FormControl<boolean | null | undefined>,
		server: FormControl<string | null | undefined>,

		/** Type: double */
		timestamp: FormControl<number | null | undefined>,
		uuid: FormControl<string | null | undefined>,
		variant: FormControl<GenerateOptionsVariant | null | undefined>,

		/** Type: double */
		views: FormControl<number | null | undefined>,
	}
	export function CreateSkinInfoFormGroup() {
		return new FormGroup<SkinInfoFormProperties>({
			account: new FormControl<number | null | undefined>(undefined),
			accountId: new FormControl<number | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			idStr: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<SkinInfoModel | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			private: new FormControl<boolean | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<number | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
			variant: new FormControl<GenerateOptionsVariant | null | undefined>(undefined),
			views: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SkinInfoModel { slim = 'slim', steve = 'steve', unknown = 'unknown' }

	export interface Stats {

		/** Type: double */
		delay?: number | null;
		server?: string | null;
	}
	export interface StatsFormProperties {

		/** Type: double */
		delay: FormControl<number | null | undefined>,
		server: FormControl<string | null | undefined>,
	}
	export function CreateStatsFormGroup() {
		return new FormGroup<StatsFormProperties>({
			delay: new FormControl<number | null | undefined>(undefined),
			server: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserValidation {
		name?: string | null;
		uuid?: string | null;

		/** Required */
		valid: boolean;
	}
	export interface UserValidationFormProperties {
		name: FormControl<string | null | undefined>,
		uuid: FormControl<string | null | undefined>,

		/** Required */
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreateUserValidationFormGroup() {
		return new FormGroup<UserValidationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
			valid: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Post generate/url
		 * @return {SkinInfo} Successfully generated skin info
		 */
		GenerateUrlPost(requestBody: GenerateOptions, headersHandler?: () => HttpHeaders): Observable<SkinInfo> {
			return this.http.post<SkinInfo>(this.baseUri + 'generate/url', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post generate/user
		 * @return {SkinInfo} Successfully generated skin info
		 */
		GenerateUserPost(requestBody: GenerateOptions, headersHandler?: () => HttpHeaders): Observable<SkinInfo> {
			return this.http.post<SkinInfo>(this.baseUri + 'generate/user', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get get/delay
		 * @return {any} Delay info for the requesting client
		 */
		GetDelayGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'get/delay', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deprecated. Use /get/uuid instead.
		 * Get get/id/{id}
		 * @return {SkinInfo} Skin Info
		 */
		GetId_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<SkinInfo> {
			return this.http.get<SkinInfo>(this.baseUri + 'get/id/' + (id == null ? '' : encodeURIComponent(id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get get/list/{page}
		 * @param {string} page For reference pagination, the uuid of the last skin in the previous page. For numeric pagination (deprecated), the page number or 'start'.
		 * @return {any} Skin Info List
		 */
		GetList_pageGet(page: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'get/list/' + (page == null ? '' : encodeURIComponent(page)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get get/uuid/{uuid}
		 * @return {SkinInfo} Skin Info
		 */
		GetUuid_uuidGet(uuid: string, headersHandler?: () => HttpHeaders): Observable<SkinInfo> {
			return this.http.get<SkinInfo>(this.baseUri + 'get/uuid/' + (uuid == null ? '' : encodeURIComponent(uuid)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get validate/name/{name}
		 * @return {UserValidation} Validation info about the requested user
		 */
		ValidateName_nameGet(name: string, headersHandler?: () => HttpHeaders): Observable<UserValidation> {
			return this.http.get<UserValidation>(this.baseUri + 'validate/name/' + (name == null ? '' : encodeURIComponent(name)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get validate/uuid/{uuid}
		 * @return {UserValidation} Validation info about the requested user
		 */
		ValidateUuid_uuidGet(uuid: string, headersHandler?: () => HttpHeaders): Observable<UserValidation> {
			return this.http.get<UserValidation>(this.baseUri + 'validate/uuid/' + (uuid == null ? '' : encodeURIComponent(uuid)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

