import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Apiv1_0_SafeUnsafeImageWithTags_body {
		api_key?: string | null;
		base64_image?: string | null;
	}
	export interface Apiv1_0_SafeUnsafeImageWithTags_bodyFormProperties {
		api_key: FormControl<string | null | undefined>,
		base64_image: FormControl<string | null | undefined>,
	}
	export function CreateApiv1_0_SafeUnsafeImageWithTags_bodyFormGroup() {
		return new FormGroup<Apiv1_0_SafeUnsafeImageWithTags_bodyFormProperties>({
			api_key: new FormControl<string | null | undefined>(undefined),
			base64_image: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Inline_response_200 {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		error_code?: number | null;
		predictions?: Inline_response_200Predictions;
	}
	export interface Inline_response_200FormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		error_code: FormControl<number | null | undefined>,
	}
	export function CreateInline_response_200FormGroup() {
		return new FormGroup<Inline_response_200FormProperties>({
			error_code: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Inline_response_200Predictions {

		/** Type: double */
		'1girl'?: number | null;

		/** Type: double */
		abs?: number | null;

		/** Type: double */
		'artificial-images'?: number | null;

		/** Type: double */
		bikini?: number | null;

		/** Type: double */
		'black bikini'?: number | null;

		/** Type: double */
		'black hair'?: number | null;

		/** Type: double */
		breasts?: number | null;

		/** Type: double */
		choker?: number | null;

		/** Type: double */
		composition_one_female?: number | null;

		/** Type: double */
		'dark skin'?: number | null;

		/** Type: double */
		'dark-skinned female'?: number | null;

		/** Type: double */
		'english commentary'?: number | null;

		/** Type: double */
		forehead?: number | null;

		/** Type: double */
		jewelry?: number | null;

		/** Type: double */
		'large breasts'?: number | null;

		/** Type: double */
		lips?: number | null;

		/** Type: double */
		'long hair'?: number | null;

		/** Type: double */
		'looking at viewer'?: number | null;

		/** Type: double */
		muscular?: number | null;

		/** Type: double */
		'muscular female'?: number | null;

		/** Type: double */
		navel?: number | null;

		/** Type: double */
		original?: number | null;

		/** Type: double */
		'patreon username'?: number | null;

		/** Type: double */
		solo?: number | null;

		/** Type: double */
		swimsuit?: number | null;

		/** Type: double */
		thighs?: number | null;

		/** Type: double */
		toned?: number | null;

		/** Type: double */
		unsafe?: number | null;
	}
	export interface Inline_response_200PredictionsFormProperties {

		/** Type: double */
		'1girl': FormControl<number | null | undefined>,

		/** Type: double */
		abs: FormControl<number | null | undefined>,

		/** Type: double */
		'artificial-images': FormControl<number | null | undefined>,

		/** Type: double */
		bikini: FormControl<number | null | undefined>,

		/** Type: double */
		'black bikini': FormControl<number | null | undefined>,

		/** Type: double */
		'black hair': FormControl<number | null | undefined>,

		/** Type: double */
		breasts: FormControl<number | null | undefined>,

		/** Type: double */
		choker: FormControl<number | null | undefined>,

		/** Type: double */
		composition_one_female: FormControl<number | null | undefined>,

		/** Type: double */
		'dark skin': FormControl<number | null | undefined>,

		/** Type: double */
		'dark-skinned female': FormControl<number | null | undefined>,

		/** Type: double */
		'english commentary': FormControl<number | null | undefined>,

		/** Type: double */
		forehead: FormControl<number | null | undefined>,

		/** Type: double */
		jewelry: FormControl<number | null | undefined>,

		/** Type: double */
		'large breasts': FormControl<number | null | undefined>,

		/** Type: double */
		lips: FormControl<number | null | undefined>,

		/** Type: double */
		'long hair': FormControl<number | null | undefined>,

		/** Type: double */
		'looking at viewer': FormControl<number | null | undefined>,

		/** Type: double */
		muscular: FormControl<number | null | undefined>,

		/** Type: double */
		'muscular female': FormControl<number | null | undefined>,

		/** Type: double */
		navel: FormControl<number | null | undefined>,

		/** Type: double */
		original: FormControl<number | null | undefined>,

		/** Type: double */
		'patreon username': FormControl<number | null | undefined>,

		/** Type: double */
		solo: FormControl<number | null | undefined>,

		/** Type: double */
		swimsuit: FormControl<number | null | undefined>,

		/** Type: double */
		thighs: FormControl<number | null | undefined>,

		/** Type: double */
		toned: FormControl<number | null | undefined>,

		/** Type: double */
		unsafe: FormControl<number | null | undefined>,
	}
	export function CreateInline_response_200PredictionsFormGroup() {
		return new FormGroup<Inline_response_200PredictionsFormProperties>({
			'1girl': new FormControl<number | null | undefined>(undefined),
			abs: new FormControl<number | null | undefined>(undefined),
			'artificial-images': new FormControl<number | null | undefined>(undefined),
			bikini: new FormControl<number | null | undefined>(undefined),
			'black bikini': new FormControl<number | null | undefined>(undefined),
			'black hair': new FormControl<number | null | undefined>(undefined),
			breasts: new FormControl<number | null | undefined>(undefined),
			choker: new FormControl<number | null | undefined>(undefined),
			composition_one_female: new FormControl<number | null | undefined>(undefined),
			'dark skin': new FormControl<number | null | undefined>(undefined),
			'dark-skinned female': new FormControl<number | null | undefined>(undefined),
			'english commentary': new FormControl<number | null | undefined>(undefined),
			forehead: new FormControl<number | null | undefined>(undefined),
			jewelry: new FormControl<number | null | undefined>(undefined),
			'large breasts': new FormControl<number | null | undefined>(undefined),
			lips: new FormControl<number | null | undefined>(undefined),
			'long hair': new FormControl<number | null | undefined>(undefined),
			'looking at viewer': new FormControl<number | null | undefined>(undefined),
			muscular: new FormControl<number | null | undefined>(undefined),
			'muscular female': new FormControl<number | null | undefined>(undefined),
			navel: new FormControl<number | null | undefined>(undefined),
			original: new FormControl<number | null | undefined>(undefined),
			'patreon username': new FormControl<number | null | undefined>(undefined),
			solo: new FormControl<number | null | undefined>(undefined),
			swimsuit: new FormControl<number | null | undefined>(undefined),
			thighs: new FormControl<number | null | undefined>(undefined),
			toned: new FormControl<number | null | undefined>(undefined),
			unsafe: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Auto generated using Swagger Inspector
		 * Post api-v1.0/SafeUnsafeImageWithTags
		 * @return {Inline_response_200} Auto generated using Swagger Inspector
		 */
		Api_v1_0SafeUnsafeImageWithTagsPost(requestBody: Apiv1_0_SafeUnsafeImageWithTags_body, headersHandler?: () => HttpHeaders): Observable<Inline_response_200> {
			return this.http.post<Inline_response_200>(this.baseUri + 'api-v1.0/SafeUnsafeImageWithTags', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

