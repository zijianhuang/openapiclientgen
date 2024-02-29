import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Comic {
		alt?: string | null;
		day?: string | null;
		img?: string | null;
		link?: string | null;
		month?: string | null;
		news?: string | null;

		/** Type: double */
		num?: number | null;
		safe_title?: string | null;
		title?: string | null;
		transcript?: string | null;
		year?: string | null;
	}
	export interface ComicFormProperties {
		alt: FormControl<string | null | undefined>,
		day: FormControl<string | null | undefined>,
		img: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		month: FormControl<string | null | undefined>,
		news: FormControl<string | null | undefined>,

		/** Type: double */
		num: FormControl<number | null | undefined>,
		safe_title: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		transcript: FormControl<string | null | undefined>,
		year: FormControl<string | null | undefined>,
	}
	export function CreateComicFormGroup() {
		return new FormGroup<ComicFormProperties>({
			alt: new FormControl<string | null | undefined>(undefined),
			day: new FormControl<string | null | undefined>(undefined),
			img: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			month: new FormControl<string | null | undefined>(undefined),
			news: new FormControl<string | null | undefined>(undefined),
			num: new FormControl<number | null | undefined>(undefined),
			safe_title: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			transcript: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Fetch current comic and metadata.
		 * Get info.0.json
		 * @return {void} OK
		 */
		Info_0_jsonGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'info.0.json', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch comics and metadata  by comic id.
		 * Get {comicId}/info.0.json
		 * @param {number} comicId Type: double
		 * @return {void} OK
		 */
		_comicIdInfo_0_jsonGet(comicId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + comicId + '/info.0.json', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

