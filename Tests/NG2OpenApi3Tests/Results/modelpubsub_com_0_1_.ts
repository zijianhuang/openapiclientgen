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
		error_code?: number | null;
		predictions?: Inline_response_200Predictions;
	}
	export interface Inline_response_200FormProperties {
		error_code: FormControl<number | null | undefined>,
	}
	export function CreateInline_response_200FormGroup() {
		return new FormGroup<Inline_response_200FormProperties>({
			error_code: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Inline_response_200Predictions {
		'1girl'?: number | null;
		abs?: number | null;
		'artificial-images'?: number | null;
		bikini?: number | null;
		'black bikini'?: number | null;
		'black hair'?: number | null;
		breasts?: number | null;
		choker?: number | null;
		composition_one_female?: number | null;
		'dark skin'?: number | null;
		'dark-skinned female'?: number | null;
		'english commentary'?: number | null;
		forehead?: number | null;
		jewelry?: number | null;
		'large breasts'?: number | null;
		lips?: number | null;
		'long hair'?: number | null;
		'looking at viewer'?: number | null;
		muscular?: number | null;
		'muscular female'?: number | null;
		navel?: number | null;
		original?: number | null;
		'patreon username'?: number | null;
		solo?: number | null;
		swimsuit?: number | null;
		thighs?: number | null;
		toned?: number | null;
		unsafe?: number | null;
	}
	export interface Inline_response_200PredictionsFormProperties {
		'1girl': FormControl<number | null | undefined>,
		abs: FormControl<number | null | undefined>,
		'artificial-images': FormControl<number | null | undefined>,
		bikini: FormControl<number | null | undefined>,
		'black bikini': FormControl<number | null | undefined>,
		'black hair': FormControl<number | null | undefined>,
		breasts: FormControl<number | null | undefined>,
		choker: FormControl<number | null | undefined>,
		composition_one_female: FormControl<number | null | undefined>,
		'dark skin': FormControl<number | null | undefined>,
		'dark-skinned female': FormControl<number | null | undefined>,
		'english commentary': FormControl<number | null | undefined>,
		forehead: FormControl<number | null | undefined>,
		jewelry: FormControl<number | null | undefined>,
		'large breasts': FormControl<number | null | undefined>,
		lips: FormControl<number | null | undefined>,
		'long hair': FormControl<number | null | undefined>,
		'looking at viewer': FormControl<number | null | undefined>,
		muscular: FormControl<number | null | undefined>,
		'muscular female': FormControl<number | null | undefined>,
		navel: FormControl<number | null | undefined>,
		original: FormControl<number | null | undefined>,
		'patreon username': FormControl<number | null | undefined>,
		solo: FormControl<number | null | undefined>,
		swimsuit: FormControl<number | null | undefined>,
		thighs: FormControl<number | null | undefined>,
		toned: FormControl<number | null | undefined>,
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

