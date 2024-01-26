import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Questions_Collection {
	}
	export interface Questions_CollectionFormProperties {
	}
	export function CreateQuestions_CollectionFormGroup() {
		return new FormGroup<Questions_CollectionFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List All Questions
		 * Get questions
		 * @return {void} OK
		 */
		List_All_Questions(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'questions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a New Question
		 * You may create your own question using this action. It takes a JSON
		 * object containing a question and a collection of answers in the
		 * form of choices.
		 * Post questions
		 * @return {void} 
		 */
		Create_a_New_Question(requestBody: Create_a_New_QuestionPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'questions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface Create_a_New_QuestionPostBody {
		choices?: Array<string>;
		question?: string | null;
	}
	export interface Create_a_New_QuestionPostBodyFormProperties {
		question: FormControl<string | null | undefined>,
	}
	export function CreateCreate_a_New_QuestionPostBodyFormGroup() {
		return new FormGroup<Create_a_New_QuestionPostBodyFormProperties>({
			question: new FormControl<string | null | undefined>(undefined),
		});

	}

}

