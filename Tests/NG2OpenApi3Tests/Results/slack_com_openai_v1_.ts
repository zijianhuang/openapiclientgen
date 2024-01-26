import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Result {
		message?: string | null;
		permalink?: string | null;
	}
	export interface ResultFormProperties {
		message: FormControl<string | null | undefined>,
		permalink: FormControl<string | null | undefined>,
	}
	export function CreateResultFormGroup() {
		return new FormGroup<ResultFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			permalink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchRequest {

		/**
		 * Search query
		 * Required
		 */
		query: string;
	}
	export interface SearchRequestFormProperties {

		/**
		 * Search query
		 * Required
		 */
		query: FormControl<string | null | undefined>,
	}
	export function CreateSearchRequestFormGroup() {
		return new FormGroup<SearchRequestFormProperties>({
			query: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Search for messages matching a query
		 * Post ai.alpha.search.messages
		 * @return {Ai_alpha_search_messagesReturn} Success response
		 */
		Ai_alpha_search_messages(requestBody: SearchRequest): Observable<Ai_alpha_search_messagesReturn> {
			return this.http.post<Ai_alpha_search_messagesReturn>(this.baseUri + 'ai.alpha.search.messages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface Ai_alpha_search_messagesReturn {

		/**
		 * Boolean indicating whether or not the request was successful
		 * Required
		 */
		ok: boolean;
		results?: Array<Result>;
	}
	export interface Ai_alpha_search_messagesReturnFormProperties {

		/**
		 * Boolean indicating whether or not the request was successful
		 * Required
		 */
		ok: FormControl<boolean | null | undefined>,
	}
	export function CreateAi_alpha_search_messagesReturnFormGroup() {
		return new FormGroup<Ai_alpha_search_messagesReturnFormProperties>({
			ok: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

}

