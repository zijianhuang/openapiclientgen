import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Body {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code?: number | null;
		request?: Request;
		response?: Array<Response>;
		version?: string | null;
	}
	export interface BodyFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		code: FormControl<number | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateBodyFormGroup() {
		return new FormGroup<BodyFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Request {
		indent?: string | null;
		lang?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		limit?: number | null;
		pos?: string | null;
		text?: Array<string>;
		type?: string | null;
	}
	export interface RequestFormProperties {
		indent: FormControl<string | null | undefined>,
		lang: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		limit: FormControl<number | null | undefined>,
		pos: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateRequestFormGroup() {
		return new FormGroup<RequestFormProperties>({
			indent: new FormControl<string | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			pos: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Response {
		items?: Array<Item>;
		text?: string | null;
	}
	export interface ResponseFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Item {
		item?: string | null;
		pos?: string | null;

		/** Type: double */
		weight?: number | null;
	}
	export interface ItemFormProperties {
		item: FormControl<string | null | undefined>,
		pos: FormControl<string | null | undefined>,

		/** Type: double */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			item: new FormControl<string | null | undefined>(undefined),
			pos: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets associations with the given word or phrase.
		 * Get json/search
		 * @param {Array<string>} text Word or phrase to find associations with.
		 * Tip. You can use multiple parameters 'text' in a request (from 1 to 10 inclusive). This way you can get associations for several input words or phrases in one response.
		 * Restriction: regardless of the size of the text association lookup is always performed by the first 10 words of the text.
		 * @param {JsonSearchGetByTextAndLangAndTypeAndLimitAndPosAndIndentLang} lang Query language. Use language code for the language of the text:
		 * * de - German;
		 * * en - English;
		 * * es - Spanish;
		 * * fr - French;
		 * * it - Italian;
		 * * pt - Portuguese;
		 * * ru - Russian;
		 * @param {JsonSearchGetByTextAndLangAndTypeAndLimitAndPosAndIndentType} type Type of result.
		 * Possible values: 
		 * * stimulus - an input data (the text parameter) is considered as a response word. The service returns a list of stimuli words, which evoke a given response word;
		 * * response - an input data (the text parameter) is considered as a stimulus word. The service returns a list of response words, which come to mind for a given stimulus word.
		 * @param {number} limit Maximum number of results to return.
		 * Allows to limit the number of results (associations) in response.
		 * The value of this parameter is an integer number from 1 to 300 inclusive.
		 * @param {Array<string>} pos Parts of speech to return.
		 * Allows to limit results by specified parts of speech. The value of this parameter is a list of parts of speech separated by comma.
		 * The following parts of speech codes are supported:
		 * * noun
		 * * adjective
		 * * verb
		 * * adverb
		 * @param {JsonSearchGetByTextAndLangAndTypeAndLimitAndPosAndIndentIndent} indent Indentation switch for pretty printing of JSON response.
		 * Allows to either turn on or off space indentation for a response.
		 * The following values are allowed:
		 * * yes - turns indentation with spaces on;
		 * * no - turn indentation with spaces off;
		 * @return {Body} Successful response
		 */
		JsonSearchGetByTextAndLangAndTypeAndLimitAndPosAndIndent(text: Array<string>, lang: JsonSearchGetByTextAndLangAndTypeAndLimitAndPosAndIndentLang, type: JsonSearchGetByTextAndLangAndTypeAndLimitAndPosAndIndentType | null | undefined, limit: number | null | undefined, pos: Array<string> | null | undefined, indent: JsonSearchGetByTextAndLangAndTypeAndLimitAndPosAndIndentIndent | null | undefined, headersHandler?: () => HttpHeaders): Observable<Body> {
			return this.http.get<Body>(this.baseUri + 'json/search?' + text.map(z => `text=${encodeURIComponent(z)}`).join('&') + '&lang=' + lang + '&type=' + type + '&limit=' + limit + '&' + pos?.map(z => `pos=${encodeURIComponent(z)}`).join('&') + '&indent=' + indent, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export enum JsonSearchGetByTextAndLangAndTypeAndLimitAndPosAndIndentLang { de = 0, en = 1, es = 2, fr = 3, it = 4, pt = 5, ru = 6 }

	export enum JsonSearchGetByTextAndLangAndTypeAndLimitAndPosAndIndentType { stimulus = 0, response = 1 }

	export enum JsonSearchGetByTextAndLangAndTypeAndLimitAndPosAndIndentIndent { yes = 0, no = 1 }

}

