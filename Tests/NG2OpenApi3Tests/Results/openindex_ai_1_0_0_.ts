import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DocumentChunkMetadata {
		author?: string | null;
		collection_id?: string | null;
		created_at?: string | null;
		document_id?: string | null;
		keywords?: Array<string>;
		language?: string | null;

		/** An enumeration. */
		source?: DocumentChunkMetadataSource | null;
		source_id?: string | null;
		time_period?: string | null;
		updated_at?: string | null;
		url?: string | null;
		user_id?: string | null;
	}
	export interface DocumentChunkMetadataFormProperties {
		author: FormControl<string | null | undefined>,
		collection_id: FormControl<string | null | undefined>,
		created_at: FormControl<string | null | undefined>,
		document_id: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,

		/** An enumeration. */
		source: FormControl<DocumentChunkMetadataSource | null | undefined>,
		source_id: FormControl<string | null | undefined>,
		time_period: FormControl<string | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateDocumentChunkMetadataFormGroup() {
		return new FormGroup<DocumentChunkMetadataFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			collection_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			document_id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<DocumentChunkMetadataSource | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined),
			time_period: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DocumentChunkMetadataSource { email = 'email', web = 'web', file = 'file', chat = 'chat' }

	export interface DocumentChunkWithScore {
		embedding?: Array<number>;
		id?: string | null;

		/** Required */
		metadata: DocumentChunkMetadata;

		/**
		 * Required
		 * Type: double
		 */
		score: number;

		/** Required */
		text: string;
	}
	export interface DocumentChunkWithScoreFormProperties {
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		score: FormControl<number | null | undefined>,

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateDocumentChunkWithScoreFormGroup() {
		return new FormGroup<DocumentChunkWithScoreFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DocumentMetadataFilter {
		author?: string | null;
		collection_id?: string | null;
		document_id?: string | null;
		end_date?: string | null;
		keywords?: Array<string>;
		language?: string | null;

		/** An enumeration. */
		source?: DocumentChunkMetadataSource | null;
		source_id?: string | null;
		start_date?: string | null;
		time_period?: string | null;
		user_id?: string | null;
	}
	export interface DocumentMetadataFilterFormProperties {
		author: FormControl<string | null | undefined>,
		collection_id: FormControl<string | null | undefined>,
		document_id: FormControl<string | null | undefined>,
		end_date: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,

		/** An enumeration. */
		source: FormControl<DocumentChunkMetadataSource | null | undefined>,
		source_id: FormControl<string | null | undefined>,
		start_date: FormControl<string | null | undefined>,
		time_period: FormControl<string | null | undefined>,
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateDocumentMetadataFilterFormGroup() {
		return new FormGroup<DocumentMetadataFilterFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			collection_id: new FormControl<string | null | undefined>(undefined),
			document_id: new FormControl<string | null | undefined>(undefined),
			end_date: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<DocumentChunkMetadataSource | null | undefined>(undefined),
			source_id: new FormControl<string | null | undefined>(undefined),
			start_date: new FormControl<string | null | undefined>(undefined),
			time_period: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HTTPValidationError {
		detail?: Array<ValidationError>;
	}
	export interface HTTPValidationErrorFormProperties {
	}
	export function CreateHTTPValidationErrorFormGroup() {
		return new FormGroup<HTTPValidationErrorFormProperties>({
		});

	}

	export interface ValidationError {

		/** Required */
		loc: Array<string>;

		/** Required */
		msg: string;

		/** Required */
		type: string;
	}
	export interface ValidationErrorFormProperties {

		/** Required */
		msg: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Query {
		filter?: DocumentMetadataFilter;

		/** Required */
		query: string;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		top_k?: number | null;
	}
	export interface QueryFormProperties {

		/** Required */
		query: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		top_k: FormControl<number | null | undefined>,
	}
	export function CreateQueryFormGroup() {
		return new FormGroup<QueryFormProperties>({
			query: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			top_k: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QueryRequest {
		namespace?: string | null;

		/** Required */
		queries: Array<Query>;
	}
	export interface QueryRequestFormProperties {
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateQueryRequestFormGroup() {
		return new FormGroup<QueryRequestFormProperties>({
			namespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryResponse {

		/** Required */
		results: Array<QueryResult>;
	}
	export interface QueryResponseFormProperties {
	}
	export function CreateQueryResponseFormGroup() {
		return new FormGroup<QueryResponseFormProperties>({
		});

	}

	export interface QueryResult {

		/** Required */
		query: string;

		/** Required */
		results: Array<DocumentChunkWithScore>;
	}
	export interface QueryResultFormProperties {

		/** Required */
		query: FormControl<string | null | undefined>,
	}
	export function CreateQueryResultFormGroup() {
		return new FormGroup<QueryResultFormProperties>({
			query: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An enumeration. */
	export enum Source { email = 'email', web = 'web', file = 'file', chat = 'chat' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Query
		 * Accepts search query objects array each with query and optional filter. Break down complex questions into sub-questions. Refine results by criteria, e.g. time / source, don't do this often. Split queries if ResponseTooLargeError occurs.
		 * Post query
		 * @return {QueryResponse} Successful Response
		 */
		Query_query_post(requestBody: QueryRequest): Observable<QueryResponse> {
			return this.http.post<QueryResponse>(this.baseUri + 'query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

