import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable({ providedIn: 'root' })
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = window.location.origin + '/', private http: HttpClient) {
		}

		/**
		 * Check Spelling (Russian)
		 * Check Spelling (Russian)
		 * Post check_spelling
		 * @return {void} 
		 */
		CheckSpellingRussian(requestBody: CheckSpellingRussianPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'check_spelling', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface CheckSpellingRussianPostBody {
		lang_code?: string | null;
		text?: string | null;
	}
	export interface CheckSpellingRussianPostBodyFormProperties {
		lang_code: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateCheckSpellingRussianPostBodyFormGroup() {
		return new FormGroup<CheckSpellingRussianPostBodyFormProperties>({
			lang_code: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

}

