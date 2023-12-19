import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A single book in the library. */
	export interface GoogleExampleLibraryagentV1Book {

		/** The name of the book author. */
		author?: string | null;

		/**
		 * The resource name of the book.
		 * Book names have the form `shelves/{shelf_id}/books/{book_id}`.
		 * The name is ignored when creating a book.
		 */
		name?: string | null;

		/** Value indicating whether the book has been read. */
		read?: boolean | null;

		/** The title of the book. */
		title?: string | null;
	}

	/** A single book in the library. */
	export interface GoogleExampleLibraryagentV1BookFormProperties {

		/** The name of the book author. */
		author: FormControl<string | null | undefined>,

		/**
		 * The resource name of the book.
		 * Book names have the form `shelves/{shelf_id}/books/{book_id}`.
		 * The name is ignored when creating a book.
		 */
		name: FormControl<string | null | undefined>,

		/** Value indicating whether the book has been read. */
		read: FormControl<boolean | null | undefined>,

		/** The title of the book. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleExampleLibraryagentV1BookFormGroup() {
		return new FormGroup<GoogleExampleLibraryagentV1BookFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			read: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for LibraryAgent.ListBooks. */
	export interface GoogleExampleLibraryagentV1ListBooksResponse {

		/** The list of books. */
		books?: Array<GoogleExampleLibraryagentV1Book>;

		/**
		 * A token to retrieve next page of results.
		 * Pass this value in the
		 * ListBooksRequest.page_token
		 * field in the subsequent call to `ListBooks` method to retrieve the next
		 * page of results.
		 */
		nextPageToken?: string | null;
	}

	/** Response message for LibraryAgent.ListBooks. */
	export interface GoogleExampleLibraryagentV1ListBooksResponseFormProperties {

		/**
		 * A token to retrieve next page of results.
		 * Pass this value in the
		 * ListBooksRequest.page_token
		 * field in the subsequent call to `ListBooks` method to retrieve the next
		 * page of results.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleExampleLibraryagentV1ListBooksResponseFormGroup() {
		return new FormGroup<GoogleExampleLibraryagentV1ListBooksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for LibraryAgent.ListShelves. */
	export interface GoogleExampleLibraryagentV1ListShelvesResponse {

		/**
		 * A token to retrieve next page of results.
		 * Pass this value in the
		 * ListShelvesRequest.page_token
		 * field in the subsequent call to `ListShelves` method to retrieve the next
		 * page of results.
		 */
		nextPageToken?: string | null;

		/** The list of shelves. */
		shelves?: Array<GoogleExampleLibraryagentV1Shelf>;
	}

	/** Response message for LibraryAgent.ListShelves. */
	export interface GoogleExampleLibraryagentV1ListShelvesResponseFormProperties {

		/**
		 * A token to retrieve next page of results.
		 * Pass this value in the
		 * ListShelvesRequest.page_token
		 * field in the subsequent call to `ListShelves` method to retrieve the next
		 * page of results.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleExampleLibraryagentV1ListShelvesResponseFormGroup() {
		return new FormGroup<GoogleExampleLibraryagentV1ListShelvesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Shelf contains a collection of books with a theme. */
	export interface GoogleExampleLibraryagentV1Shelf {

		/**
		 * Output only. The resource name of the shelf.
		 * Shelf names have the form `shelves/{shelf_id}`.
		 * The name is ignored when creating a shelf.
		 */
		name?: string | null;

		/** The theme of the shelf */
		theme?: string | null;
	}

	/** A Shelf contains a collection of books with a theme. */
	export interface GoogleExampleLibraryagentV1ShelfFormProperties {

		/**
		 * Output only. The resource name of the shelf.
		 * Shelf names have the form `shelves/{shelf_id}`.
		 * The name is ignored when creating a shelf.
		 */
		name: FormControl<string | null | undefined>,

		/** The theme of the shelf */
		theme: FormControl<string | null | undefined>,
	}
	export function CreateGoogleExampleLibraryagentV1ShelfFormGroup() {
		return new FormGroup<GoogleExampleLibraryagentV1ShelfFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			theme: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists shelves. The order is unspecified but deterministic. Newly created
		 * shelves will not necessarily be added to the end of this list.
		 * Get v1/shelves
		 * @param {number} pageSize Requested page size. Server may return fewer shelves than requested.
		 * If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * Typically, this is the value of
		 * ListShelvesResponse.next_page_token
		 * returned from the previous call to `ListShelves` method.
		 * @return {void} Successful response
		 */
		Libraryagent_shelves_list(pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/shelves?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a book. Returns NOT_FOUND if the book does not exist.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the book to retrieve.
		 * @return {void} Successful response
		 */
		Libraryagent_shelves_books_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Borrow a book from the library. Returns the book if it is borrowed
		 * successfully. Returns NOT_FOUND if the book does not exist in the library.
		 * Returns quota exceeded error if the amount of books borrowed exceeds
		 * allocation quota in any dimensions.
		 * Post v1/{name}:borrow
		 * @param {string} name Required. The name of the book to borrow.
		 * @return {void} Successful response
		 */
		Libraryagent_shelves_books_borrow(name: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':borrow', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return a book to the library. Returns the book if it is returned to the
		 * library successfully.
		 * Returns error if the book does not belong to the library
		 * or the users didn't borrow before.
		 * Post v1/{name}:return
		 * @param {string} name Required. The name of the book to return.
		 * @return {void} Successful response
		 */
		Libraryagent_shelves_books_return(name: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':return', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists books in a shelf. The order is unspecified but deterministic. Newly
		 * created books will not necessarily be added to the end of this list.
		 * Returns NOT_FOUND if the shelf does not exist.
		 * Get v1/{parent}/books
		 * @param {string} parent Required. The name of the shelf whose books we'd like to list.
		 * @param {number} pageSize Requested page size. Server may return fewer books than requested.
		 * If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return.
		 * Typically, this is the value of
		 * ListBooksResponse.next_page_token.
		 * returned from the previous call to `ListBooks` method.
		 * @return {void} Successful response
		 */
		Libraryagent_shelves_books_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/books&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}
	}

}

