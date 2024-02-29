import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A set of errors */
	export interface Error_400 {
		Error_400Errors?: Array<Error_400Errors>;
	}

	/** A set of errors */
	export interface Error_400FormProperties {
	}
	export function CreateError_400FormGroup() {
		return new FormGroup<Error_400FormProperties>({
		});

	}

	export interface Error_400Errors {

		/**
		 * A machine-readable error code from the Amadeus Canned Messages table, that will enable the API Consumers code to handle this type of error
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized. */
		detail?: string | null;
		source?: Error_400ErrorsSource;

		/**
		 * The [HTTP status code](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml) of this response. This is present only in terminal errors which cause an unsuccessful response. In the case of multiple errors, they must all have the same status.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/** An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized */
		title?: string | null;
	}
	export interface Error_400ErrorsFormProperties {

		/**
		 * A machine-readable error code from the Amadeus Canned Messages table, that will enable the API Consumers code to handle this type of error
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized. */
		detail: FormControl<string | null | undefined>,

		/**
		 * The [HTTP status code](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml) of this response. This is present only in terminal errors which cause an unsuccessful response. In the case of multiple errors, they must all have the same status.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/** An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized */
		title: FormControl<string | null | undefined>,
	}
	export function CreateError_400ErrorsFormGroup() {
		return new FormGroup<Error_400ErrorsFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error_400ErrorsSource {

		/** A sample input to guide the user when resolving this issue */
		example?: string | null;

		/** The key of the URI path or query parameter that caused the error */
		parameter?: string | null;

		/** A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error */
		pointer?: string | null;
	}
	export interface Error_400ErrorsSourceFormProperties {

		/** A sample input to guide the user when resolving this issue */
		example: FormControl<string | null | undefined>,

		/** The key of the URI path or query parameter that caused the error */
		parameter: FormControl<string | null | undefined>,

		/** A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error */
		pointer: FormControl<string | null | undefined>,
	}
	export function CreateError_400ErrorsSourceFormGroup() {
		return new FormGroup<Error_400ErrorsSourceFormProperties>({
			example: new FormControl<string | null | undefined>(undefined),
			parameter: new FormControl<string | null | undefined>(undefined),
			pointer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of errors */
	export interface Error_500 {
		Error_500Errors?: Array<Error_500Errors>;
	}

	/** A set of errors */
	export interface Error_500FormProperties {
	}
	export function CreateError_500FormGroup() {
		return new FormGroup<Error_500FormProperties>({
		});

	}

	export interface Error_500Errors {

		/**
		 * A machine-readable error code from the Amadeus Canned Messages table, that will enable the API Consumers code to handle this type of error
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized. */
		detail?: string | null;
		source?: Error_500ErrorsSource;

		/**
		 * The [HTTP status code](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml) of this response. This is present only in terminal errors which cause an unsuccessful response. In the case of multiple errors, they must all have the same status.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/** An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized */
		title?: string | null;
	}
	export interface Error_500ErrorsFormProperties {

		/**
		 * A machine-readable error code from the Amadeus Canned Messages table, that will enable the API Consumers code to handle this type of error
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized. */
		detail: FormControl<string | null | undefined>,

		/**
		 * The [HTTP status code](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml) of this response. This is present only in terminal errors which cause an unsuccessful response. In the case of multiple errors, they must all have the same status.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/** An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized */
		title: FormControl<string | null | undefined>,
	}
	export function CreateError_500ErrorsFormGroup() {
		return new FormGroup<Error_500ErrorsFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error_500ErrorsSource {

		/** A sample input to guide the user when resolving this issue */
		example?: string | null;

		/** The key of the URI path or query parameter that caused the error */
		parameter?: string | null;

		/** A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error */
		pointer?: string | null;
	}
	export interface Error_500ErrorsSourceFormProperties {

		/** A sample input to guide the user when resolving this issue */
		example: FormControl<string | null | undefined>,

		/** The key of the URI path or query parameter that caused the error */
		parameter: FormControl<string | null | undefined>,

		/** A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error */
		pointer: FormControl<string | null | undefined>,
	}
	export function CreateError_500ErrorsSourceFormGroup() {
		return new FormGroup<Error_500ErrorsSourceFormProperties>({
			example: new FormControl<string | null | undefined>(undefined),
			parameter: new FormControl<string | null | undefined>(undefined),
			pointer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Meta information about the returned object(s) in "data" */
	export interface Meta {

		/**
		 * Total number of object(s) retrieved
		 * Minimum: 0
		 */
		count?: string | null;

		/** Links related to the returned object(s) */
		links?: MetaLinks;
	}

	/** Meta information about the returned object(s) in "data" */
	export interface MetaFormProperties {

		/**
		 * Total number of object(s) retrieved
		 * Minimum: 0
		 */
		count: FormControl<string | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			count: new FormControl<string | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface MetaLinks {

		/** Link to the same page. */
		self?: string | null;
	}
	export interface MetaLinksFormProperties {

		/** Link to the same page. */
		self: FormControl<string | null | undefined>,
	}
	export function CreateMetaLinksFormGroup() {
		return new FormGroup<MetaLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Warning Definition */
	export interface Warning {

		/**
		 * A machine-readable error code from the Canned Messages table, that will enable the API Consumers code to handle this type of error
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: number;

		/** An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized. */
		detail?: string | null;

		/** The Warning Source Definition */
		source?: WarningSource;

		/**
		 * An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized
		 * Required
		 */
		title: string;
	}

	/** The Warning Definition */
	export interface WarningFormProperties {

		/**
		 * A machine-readable error code from the Canned Messages table, that will enable the API Consumers code to handle this type of error
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** An easy-to-read explanation specific to this occurrence of the problem. It should give the API consumer an idea of what went wrong and how to recover from it. Like the title, this field’s value can be localized. */
		detail: FormControl<string | null | undefined>,

		/**
		 * An error title from the Canned Messages table with a 1:1 correspondence to the error code. This may be localized
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateWarningFormGroup() {
		return new FormGroup<WarningFormProperties>({
			code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			detail: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WarningSource {

		/** A sample input to guide the user when resolving this issu */
		example?: string | null;

		/** The key of the URI path or query parameter that caused the error */
		parameter?: string | null;

		/** A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error */
		pointer?: string | null;
	}
	export interface WarningSourceFormProperties {

		/** A sample input to guide the user when resolving this issu */
		example: FormControl<string | null | undefined>,

		/** The key of the URI path or query parameter that caused the error */
		parameter: FormControl<string | null | undefined>,

		/** A JSON Pointer [RFC6901] to the associated entity in the request body that caused this error */
		pointer: FormControl<string | null | undefined>,
	}
	export function CreateWarningSourceFormGroup() {
		return new FormGroup<WarningSourceFormProperties>({
			example: new FormControl<string | null | undefined>(undefined),
			parameter: new FormControl<string | null | undefined>(undefined),
			pointer: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Category_rated_areas {
	}
	export interface Category_rated_areasFormProperties {
	}
	export function CreateCategory_rated_areasFormGroup() {
		return new FormGroup<Category_rated_areasFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * GET category rated areas
		 * Get location/analytics/category-rated-areas
		 * @param {number} latitude Latitude in decimal coordinates
		 *     Type: double
		 * @param {number} longitude Longitude in decimal coordinates
		 *     Type: double
		 * @return {void} Successful Reply
		 */
		Get_category_rated_areas(latitude: number, longitude: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'location/analytics/category-rated-areas?latitude=' + latitude + '&longitude=' + longitude, { observe: 'response', responseType: 'text' });
		}
	}

}

