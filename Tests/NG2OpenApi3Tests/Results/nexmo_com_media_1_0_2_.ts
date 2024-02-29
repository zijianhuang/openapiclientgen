import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Media {

		/** The ID of your Nexmo account. This is the same as your API key. */
		account_id?: string | null;

		/** An identifier for the content. This will change if the content of the file has been changed (i.e. if you upload a new version of the file). For more information see Wikipedia: [HTTP ETag](https://en.wikipedia.org/wiki/HTTP_ETag) */
		etag?: string | null;

		/** A UUID representing the object. */
		id?: string | null;

		/**
		 * The maximum number of times the file may be downloaded.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_downloads_allowed?: number | null;

		/**
		 * The size of the file in bytes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		media_size?: number | null;

		/** A user set string containing metadata about the media file. */
		metadata_primary?: string | null;

		/** A user set string containing further metadata about the media file. */
		metadata_secondary?: string | null;

		/** The IETF MIME type of the file. */
		mime_type?: string | null;

		/** The filename of the object as it was originally uploaded. */
		original_file_name?: string | null;

		/** Whether the item is available for download without authentication. */
		public?: boolean | null;

		/** An internal identifier of how the file is stored. */
		store_id?: string | null;

		/** A timestamp for the time that the file was created */
		time_created?: string | null;

		/** A timestamp for the time that the file was last modified */
		time_last_updated?: string | null;

		/**
		 * The number of times the file has been downloaded.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		times_downloaded?: number | null;
	}
	export interface MediaFormProperties {

		/** The ID of your Nexmo account. This is the same as your API key. */
		account_id: FormControl<string | null | undefined>,

		/** An identifier for the content. This will change if the content of the file has been changed (i.e. if you upload a new version of the file). For more information see Wikipedia: [HTTP ETag](https://en.wikipedia.org/wiki/HTTP_ETag) */
		etag: FormControl<string | null | undefined>,

		/** A UUID representing the object. */
		id: FormControl<string | null | undefined>,

		/**
		 * The maximum number of times the file may be downloaded.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_downloads_allowed: FormControl<number | null | undefined>,

		/**
		 * The size of the file in bytes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		media_size: FormControl<number | null | undefined>,

		/** A user set string containing metadata about the media file. */
		metadata_primary: FormControl<string | null | undefined>,

		/** A user set string containing further metadata about the media file. */
		metadata_secondary: FormControl<string | null | undefined>,

		/** The IETF MIME type of the file. */
		mime_type: FormControl<string | null | undefined>,

		/** The filename of the object as it was originally uploaded. */
		original_file_name: FormControl<string | null | undefined>,

		/** Whether the item is available for download without authentication. */
		public: FormControl<boolean | null | undefined>,

		/** An internal identifier of how the file is stored. */
		store_id: FormControl<string | null | undefined>,

		/** A timestamp for the time that the file was created */
		time_created: FormControl<string | null | undefined>,

		/** A timestamp for the time that the file was last modified */
		time_last_updated: FormControl<string | null | undefined>,

		/**
		 * The number of times the file has been downloaded.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		times_downloaded: FormControl<number | null | undefined>,
	}
	export function CreateMediaFormGroup() {
		return new FormGroup<MediaFormProperties>({
			account_id: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			max_downloads_allowed: new FormControl<number | null | undefined>(undefined),
			media_size: new FormControl<number | null | undefined>(undefined),
			metadata_primary: new FormControl<string | null | undefined>(undefined),
			metadata_secondary: new FormControl<string | null | undefined>(undefined),
			mime_type: new FormControl<string | null | undefined>(undefined),
			original_file_name: new FormControl<string | null | undefined>(undefined),
			public: new FormControl<boolean | null | undefined>(undefined),
			store_id: new FormControl<string | null | undefined>(undefined),
			time_created: new FormControl<string | null | undefined>(undefined),
			time_last_updated: new FormControl<string | null | undefined>(undefined),
			times_downloaded: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List and search media items
		 * Retrieve information about multiple media items with the ability to search and paginate.
		 * Get 
		 * @param {List_and_search_media_itemsOrder} order The order of search results.
		 * @param {number} page_index Which page to retrieve in pagination
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page_size How many items at most per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} start_time Retrieve results created on or after this timestap.
		 * @param {string} end_time Retrieve results created on or before this timestamp.
		 * @return {List_and_search_media_itemsReturn} Successfully retrieved
		 */
		List_and_search_media_items(order: List_and_search_media_itemsOrder | null | undefined, page_index: number | null | undefined, page_size: number | null | undefined, start_time: string | null | undefined, end_time: string | null | undefined): Observable<List_and_search_media_itemsReturn> {
			return this.http.get<List_and_search_media_itemsReturn>(this.baseUri + '?order=' + order + '&page_index=' + page_index + '&page_size=' + page_size + '&start_time=' + (start_time == null ? '' : encodeURIComponent(start_time)) + '&end_time=' + (end_time == null ? '' : encodeURIComponent(end_time)), {});
		}

		/**
		 * Delete a media item
		 * Delete a previously created media item by ID.
		 * Delete :id
		 * @return {void} 
		 */
		Delete_a_media_item(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + ':id', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a media item
		 * Retrieve information about a single media item
		 * Get :id/info
		 * @return {Media} Successfully retrieved
		 */
		Retrieve_a_media_item(): Observable<Media> {
			return this.http.get<Media>(this.baseUri + ':id/info', {});
		}
	}

	export enum List_and_search_media_itemsOrder { ascending = 'ascending', descending = 'descending' }

	export interface List_and_search_media_itemsReturn {

		/** A collection of media items. See [retrieve a media item](#retrieve-a-media-item) for a description of the returned fields */
		_embedded?: List_and_search_media_itemsReturn_embedded;
		_links?: List_and_search_media_itemsReturn_links;

		/**
		 * The total number of records returned by your request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count?: number | null;

		/**
		 * The `page_index` used in your request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page_index?: number | null;

		/**
		 * The amount of records returned in this response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page_size?: number | null;
	}
	export interface List_and_search_media_itemsReturnFormProperties {

		/**
		 * The total number of records returned by your request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/**
		 * The `page_index` used in your request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page_index: FormControl<number | null | undefined>,

		/**
		 * The amount of records returned in this response.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		page_size: FormControl<number | null | undefined>,
	}
	export function CreateList_and_search_media_itemsReturnFormGroup() {
		return new FormGroup<List_and_search_media_itemsReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			page_index: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface List_and_search_media_itemsReturn_embedded {
		media?: Array<Media>;
	}
	export interface List_and_search_media_itemsReturn_embeddedFormProperties {
	}
	export function CreateList_and_search_media_itemsReturn_embeddedFormGroup() {
		return new FormGroup<List_and_search_media_itemsReturn_embeddedFormProperties>({
		});

	}

	export interface List_and_search_media_itemsReturn_links {
		first?: List_and_search_media_itemsReturn_linksFirst;
		last?: List_and_search_media_itemsReturn_linksLast;
		self?: List_and_search_media_itemsReturn_linksSelf;
	}
	export interface List_and_search_media_itemsReturn_linksFormProperties {
	}
	export function CreateList_and_search_media_itemsReturn_linksFormGroup() {
		return new FormGroup<List_and_search_media_itemsReturn_linksFormProperties>({
		});

	}

	export interface List_and_search_media_itemsReturn_linksFirst {
		href?: string | null;
	}
	export interface List_and_search_media_itemsReturn_linksFirstFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateList_and_search_media_itemsReturn_linksFirstFormGroup() {
		return new FormGroup<List_and_search_media_itemsReturn_linksFirstFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface List_and_search_media_itemsReturn_linksLast {
		href?: string | null;
	}
	export interface List_and_search_media_itemsReturn_linksLastFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateList_and_search_media_itemsReturn_linksLastFormGroup() {
		return new FormGroup<List_and_search_media_itemsReturn_linksLastFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface List_and_search_media_itemsReturn_linksSelf {
		href?: string | null;
	}
	export interface List_and_search_media_itemsReturn_linksSelfFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateList_and_search_media_itemsReturn_linksSelfFormGroup() {
		return new FormGroup<List_and_search_media_itemsReturn_linksSelfFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

}

