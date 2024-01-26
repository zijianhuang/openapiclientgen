import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Book {
		id?: string | null;
		name?: string | null;
		year?: string | null;
	}
	export interface BookFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		year: FormControl<string | null | undefined>,
	}
	export function CreateBookFormGroup() {
		return new FormGroup<BookFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sentence {
		book?: Book;
		id?: string | null;
		sentence?: string | null;
	}
	export interface SentenceFormProperties {
		id: FormControl<string | null | undefined>,
		sentence: FormControl<string | null | undefined>,
	}
	export function CreateSentenceFormGroup() {
		return new FormGroup<SentenceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			sentence: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all books
		 * Get books
		 * @return {Get_booksReturn} 
		 */
		Get_books(): Observable<Get_booksReturn> {
			return this.http.get<Get_booksReturn>(this.baseUri + 'books', {});
		}

		/**
		 * Random sentences from a specific book
		 * Get books/{id}/sentences
		 * @return {Get_sentences_from_bookReturn} 
		 */
		Get_sentences_from_book(): Observable<Get_sentences_from_bookReturn> {
			return this.http.get<Get_sentences_from_bookReturn>(this.baseUri + 'books/{id}/sentences', {});
		}

		/**
		 * A random sentence
		 * Get sentences
		 * @return {Get_sentencesReturn} 
		 */
		Get_sentences(): Observable<Get_sentencesReturn> {
			return this.http.get<Get_sentencesReturn>(this.baseUri + 'sentences', {});
		}

		/**
		 * A specific sentence
		 * Get sentences/{id}
		 * @return {Get_specific_sentenceReturn} 
		 */
		Get_specific_sentence(): Observable<Get_specific_sentenceReturn> {
			return this.http.get<Get_specific_sentenceReturn>(this.baseUri + 'sentences/{id}', {});
		}
	}

	export interface Get_booksReturn {
		data?: Array<Book>;
	}
	export interface Get_booksReturnFormProperties {
	}
	export function CreateGet_booksReturnFormGroup() {
		return new FormGroup<Get_booksReturnFormProperties>({
		});

	}

	export interface Get_sentences_from_bookReturn {
		data?: Array<Sentence>;
	}
	export interface Get_sentences_from_bookReturnFormProperties {
	}
	export function CreateGet_sentences_from_bookReturnFormGroup() {
		return new FormGroup<Get_sentences_from_bookReturnFormProperties>({
		});

	}

	export interface Get_sentencesReturn {
		data?: Array<Sentence>;
	}
	export interface Get_sentencesReturnFormProperties {
	}
	export function CreateGet_sentencesReturnFormGroup() {
		return new FormGroup<Get_sentencesReturnFormProperties>({
		});

	}

	export interface Get_specific_sentenceReturn {
		data?: Sentence;
	}
	export interface Get_specific_sentenceReturnFormProperties {
	}
	export function CreateGet_specific_sentenceReturnFormGroup() {
		return new FormGroup<Get_specific_sentenceReturnFormProperties>({
		});

	}

}

