import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List hypernyms
		 * Lists all hypernyms related to a family. A hypernym is a parent concent. E.g. "vehicle" is a hypernym of "truck".
		 * Get hypernyms
		 * @param {string} family (Required) a numeric identifier of the family
		 * @param {string} maxLevel (Required) maximum distance from the family
		 * @return {Array<string>} Hypernyms of Darth Vader
		 */
		ListHypernyms(family: string | null | undefined, maxLevel: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'hypernyms?family=' + (family == null ? '' : encodeURIComponent(family)) + '&maxLevel=' + (maxLevel == null ? '' : encodeURIComponent(maxLevel)), {});
		}

		/**
		 * List hyponyms
		 * Lists all hyponyms related to a family. A hyponym is a child concent. E.g. "truck" is a hypernym of "vehicle".
		 * Get hyponyms
		 * @param {string} family (Required) a numeric identifier of the family
		 * @param {string} maxLevel (Required) maximum distance from the family
		 * @return {void} response
		 */
		ListHyponyms(family: string | null | undefined, maxLevel: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'hyponyms?family=' + (family == null ? '' : encodeURIComponent(family)) + '&maxLevel=' + (maxLevel == null ? '' : encodeURIComponent(maxLevel)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List inflected forms
		 * List inflected forms
		 * Get inflections
		 * @param {string} language (Required) The language code
		 * @param {string} lexeme (Required) The lexeme to inspect
		 * @param {string} family (Required) The family to inspect
		 * @return {Array<ListInflectedFormsReturn>} Inflected forms of "United States" in Russian
		 */
		ListInflectedForms(language: string | null | undefined, lexeme: string | null | undefined, family: string | null | undefined): Observable<Array<ListInflectedFormsReturn>> {
			return this.http.get<Array<ListInflectedFormsReturn>>(this.baseUri + 'inflections?language=' + (language == null ? '' : encodeURIComponent(language)) + '&lexeme=' + (lexeme == null ? '' : encodeURIComponent(lexeme)) + '&family=' + (family == null ? '' : encodeURIComponent(family)), {});
		}

		/**
		 * Get family details
		 * Fetches and outputs metadata for a family from the Tisane language models.
		 * Get lm/family
		 * @param {string} id (Required) a numeric identifier of the family
		 * @return {GetFamilyDetailsReturn} Details of the family for 'plot twist'
		 */
		GetFamilyDetails(id: string | null | undefined): Observable<GetFamilyDetailsReturn> {
			return this.http.get<GetFamilyDetailsReturn>(this.baseUri + 'lm/family?id=' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * List word senses
		 * Fetches and outputs all senses related to a word.
		 * Get senses
		 * @param {string} language (Required) a standard culture code (ISO-639 language code with an optional country extension)
		 * @param {string} word (Required) the word to inspect
		 * @return {Array<ListWordSensesReturn>} Interpretations of "couscous"
		 */
		ListWordSenses(language: string | null | undefined, word: string | null | undefined): Observable<Array<ListWordSensesReturn>> {
			return this.http.get<Array<ListWordSensesReturn>>(this.baseUri + 'senses?language=' + (language == null ? '' : encodeURIComponent(language)) + '&word=' + (word == null ? '' : encodeURIComponent(word)), {});
		}

		/**
		 * List feature values
		 * Lists feature values for a particular category of features. This allows obtaining all the values such as entity types, subtypes, abuse types and tags, and more.
		 * Returns the values as a JSON array of strings.
		 * Get values
		 * @param {string} language (Required) Language code
		 * @param {string} type (Required) Feature type
		 * @param {string} description (Required) Feature list name (localized)
		 * @return {Array<string>} List entity subtypes
		 */
		ListFeatureValues(language: string | null | undefined, type: string | null | undefined, description: string | null | undefined): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'values?language=' + (language == null ? '' : encodeURIComponent(language)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&description=' + (description == null ? '' : encodeURIComponent(description)), {});
		}
	}

	export interface ListInflectedFormsReturn {
		ListInflectedFormsReturnFeatures?: Array<ListInflectedFormsReturnFeatures>;
		isLemma?: boolean | null;
		text?: string | null;
	}
	export interface ListInflectedFormsReturnFormProperties {
		isLemma: FormControl<boolean | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateListInflectedFormsReturnFormGroup() {
		return new FormGroup<ListInflectedFormsReturnFormProperties>({
			isLemma: new FormControl<boolean | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListInflectedFormsReturnFeatures {

		/** Type: double */
		index?: number | null;
		value?: string | null;
	}
	export interface ListInflectedFormsReturnFeaturesFormProperties {

		/** Type: double */
		index: FormControl<number | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateListInflectedFormsReturnFeaturesFormGroup() {
		return new FormGroup<ListInflectedFormsReturnFeaturesFormProperties>({
			index: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFamilyDetailsReturn {
		definition?: string | null;
		description?: string | null;
		hypernyms?: Array<string>;
		permId?: string | null;
		requestId?: string | null;
		wikidata?: string | null;
		wordnet30?: string | null;
	}
	export interface GetFamilyDetailsReturnFormProperties {
		definition: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		permId: FormControl<string | null | undefined>,
		requestId: FormControl<string | null | undefined>,
		wikidata: FormControl<string | null | undefined>,
		wordnet30: FormControl<string | null | undefined>,
	}
	export function CreateGetFamilyDetailsReturnFormGroup() {
		return new FormGroup<GetFamilyDetailsReturnFormProperties>({
			definition: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			permId: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			wikidata: new FormControl<string | null | undefined>(undefined),
			wordnet30: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWordSensesReturn {
		ListWordSensesReturnFamilies?: Array<ListWordSensesReturnFamilies>;
		ListWordSensesReturnFeatures?: Array<ListWordSensesReturnFeatures>;

		/** Type: double */
		frequency?: number | null;
		isLemma?: boolean | null;

		/** Type: double */
		legacyMapId?: number | null;
		lemma?: string | null;

		/** Type: double */
		lexemeId?: number | null;
	}
	export interface ListWordSensesReturnFormProperties {

		/** Type: double */
		frequency: FormControl<number | null | undefined>,
		isLemma: FormControl<boolean | null | undefined>,

		/** Type: double */
		legacyMapId: FormControl<number | null | undefined>,
		lemma: FormControl<string | null | undefined>,

		/** Type: double */
		lexemeId: FormControl<number | null | undefined>,
	}
	export function CreateListWordSensesReturnFormGroup() {
		return new FormGroup<ListWordSensesReturnFormProperties>({
			frequency: new FormControl<number | null | undefined>(undefined),
			isLemma: new FormControl<boolean | null | undefined>(undefined),
			legacyMapId: new FormControl<number | null | undefined>(undefined),
			lemma: new FormControl<string | null | undefined>(undefined),
			lexemeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListWordSensesReturnFamilies {

		/** Type: double */
		Key?: number | null;
		Value?: string | null;
		definition?: string | null;
	}
	export interface ListWordSensesReturnFamiliesFormProperties {

		/** Type: double */
		Key: FormControl<number | null | undefined>,
		Value: FormControl<string | null | undefined>,
		definition: FormControl<string | null | undefined>,
	}
	export function CreateListWordSensesReturnFamiliesFormGroup() {
		return new FormGroup<ListWordSensesReturnFamiliesFormProperties>({
			Key: new FormControl<number | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
			definition: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListWordSensesReturnFeatures {

		/** Type: double */
		index?: number | null;
		type?: string | null;
		value?: string | null;
	}
	export interface ListWordSensesReturnFeaturesFormProperties {

		/** Type: double */
		index: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateListWordSensesReturnFeaturesFormGroup() {
		return new FormGroup<ListWordSensesReturnFeaturesFormProperties>({
			index: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

}

