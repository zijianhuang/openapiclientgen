import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface APIResponseSimilarity {

		/** Whether or not the request was successfully processed or not. */
		error?: boolean | null;

		/** Error message if the request was unsuccessful. */
		message?: string | null;

		/** Contains the response data if the request was successful. */
		response?: APIResponseSimilarityResponse;
	}
	export interface APIResponseSimilarityFormProperties {

		/** Whether or not the request was successfully processed or not. */
		error: FormControl<boolean | null | undefined>,

		/** Error message if the request was unsuccessful. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateAPIResponseSimilarityFormGroup() {
		return new FormGroup<APIResponseSimilarityFormProperties>({
			error: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface APIResponseSimilarityResponse {

		/** Contains all the similarity items representing songs. */
		APIResponseSimilarityResponseSimilarity_list?: Array<APIResponseSimilarityResponseSimilarity_list>;
	}
	export interface APIResponseSimilarityResponseFormProperties {
	}
	export function CreateAPIResponseSimilarityResponseFormGroup() {
		return new FormGroup<APIResponseSimilarityResponseFormProperties>({
		});

	}

	export interface APIResponseSimilarityResponseSimilarity_list {

		/** Artist's song name. */
		artist_name?: string | null;

		/** Artist URL. */
		artist_url?: string | null;

		/** Song internal identifier. */
		id?: number | null;

		/** Index internal identifier. */
		index_id?: number | null;

		/** Song lyrics. */
		lyrics?: string | null;

		/** Similarity percentage. */
		percentage?: number | null;

		/** Song name. */
		song_name?: string | null;

		/** Song URL. */
		song_url?: string | null;
	}
	export interface APIResponseSimilarityResponseSimilarity_listFormProperties {

		/** Artist's song name. */
		artist_name: FormControl<string | null | undefined>,

		/** Artist URL. */
		artist_url: FormControl<string | null | undefined>,

		/** Song internal identifier. */
		id: FormControl<number | null | undefined>,

		/** Index internal identifier. */
		index_id: FormControl<number | null | undefined>,

		/** Song lyrics. */
		lyrics: FormControl<string | null | undefined>,

		/** Similarity percentage. */
		percentage: FormControl<number | null | undefined>,

		/** Song name. */
		song_name: FormControl<string | null | undefined>,

		/** Song URL. */
		song_url: FormControl<string | null | undefined>,
	}
	export function CreateAPIResponseSimilarityResponseSimilarity_listFormGroup() {
		return new FormGroup<APIResponseSimilarityResponseSimilarity_listFormProperties>({
			artist_name: new FormControl<string | null | undefined>(undefined),
			artist_url: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			index_id: new FormControl<number | null | undefined>(undefined),
			lyrics: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
			song_name: new FormControl<string | null | undefined>(undefined),
			song_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface APIResponseSong {

		/** Whether or not the request was successfully processed or not. */
		error?: boolean | null;

		/** Error message if the request was unsuccessful. */
		message?: string | null;

		/** Contains the response data if the request was successful. */
		response?: APIResponseSongResponse;
	}
	export interface APIResponseSongFormProperties {

		/** Whether or not the request was successfully processed or not. */
		error: FormControl<boolean | null | undefined>,

		/** Error message if the request was unsuccessful. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateAPIResponseSongFormGroup() {
		return new FormGroup<APIResponseSongFormProperties>({
			error: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface APIResponseSongResponse {

		/** Contains all the songs. */
		APIResponseSongResponseResults?: Array<APIResponseSongResponseResults>;
	}
	export interface APIResponseSongResponseFormProperties {
	}
	export function CreateAPIResponseSongResponseFormGroup() {
		return new FormGroup<APIResponseSongResponseFormProperties>({
		});

	}

	export interface APIResponseSongResponseResults {

		/** Song internal identifier. */
		id?: number | null;

		/** Song and Artist name. */
		name?: string | null;
	}
	export interface APIResponseSongResponseResultsFormProperties {

		/** Song internal identifier. */
		id: FormControl<number | null | undefined>,

		/** Song and Artist name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAPIResponseSongResponseResultsFormGroup() {
		return new FormGroup<APIResponseSongResponseResultsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * API endpoint to search similarity using content
		 * Endpoint for an end-user client to search similarity by content.
		 * If you want to run the /similarity/by_content operation, you can do so via an HTTP POST command to the following URL:
		 * ```
		 * https://searchly.asuarez.dev/api/v1/similarity/by_content
		 * ```
		 * Post similarity/by_content
		 * @param {Src_searchly_api_v1_controllers_similarity_by_contentPostBody} requestBody Body wrapper for the request.
		 * @return {APIResponseSimilarity} Standard SearchLy API v1 JSON response. You should check the `error` attribute to determine if there was an error.
		 */
		Src_searchly_api_v1_controllers_similarity_by_content(requestBody: Src_searchly_api_v1_controllers_similarity_by_contentPostBody): Observable<APIResponseSimilarity> {
			return this.http.post<APIResponseSimilarity>(this.baseUri + 'similarity/by_content', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * API endpoint to search similarity using a song identifier
		 * Endpoint for an end-user client to search similarity by song identifier.
		 * If you want to run the /similarity/by_song operation, you can do so via an HTTP GET command to the following URL:
		 * ```
		 * https://searchly.asuarez.dev/api/v1/similarity/by_song
		 * ```
		 * Get similarity/by_song
		 * @param {number} song_id Song identifier.
		 * @return {APIResponseSimilarity} Standard SearchLy API v1 JSON response. You should check the `error` attribute to determine if there was an error.
		 */
		Src_searchly_api_v1_controllers_similarity_by_song(song_id: number): Observable<APIResponseSimilarity> {
			return this.http.get<APIResponseSimilarity>(this.baseUri + 'similarity/by_song?song_id=' + song_id, {});
		}

		/**
		 * API endpoint to search songs from the database given a query
		 * Endpoint for an end-user client to search songs from the database given a String query.
		 * If you want to run the /song/search operation, you can do so via an HTTP GET command to the following URL:
		 * ```
		 * https://searchly.asuarez.dev/api/v1/song/search
		 * ```
		 * Get song/search
		 * @param {string} query Query.
		 * @return {APIResponseSong} Standard SearchLy API v1 JSON response. You should check the `error` attribute to determine if there was an error.
		 */
		Src_searchly_api_v1_controllers_song_search(query: string): Observable<APIResponseSong> {
			return this.http.get<APIResponseSong>(this.baseUri + 'song/search?query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}
	}

	export interface Src_searchly_api_v1_controllers_similarity_by_contentPostBody {

		/** Content for searching similarity. */
		content?: string | null;
	}
	export interface Src_searchly_api_v1_controllers_similarity_by_contentPostBodyFormProperties {

		/** Content for searching similarity. */
		content: FormControl<string | null | undefined>,
	}
	export function CreateSrc_searchly_api_v1_controllers_similarity_by_contentPostBodyFormGroup() {
		return new FormGroup<Src_searchly_api_v1_controllers_similarity_by_contentPostBodyFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}

}

