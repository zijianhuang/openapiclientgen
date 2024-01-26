import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AuthorizationValue {
		keyName?: string | null;
		type?: string | null;
		urlMatcher?: PredicateOfURL;
		value?: string | null;
	}
	export interface AuthorizationValueFormProperties {
		keyName: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationValueFormGroup() {
		return new FormGroup<AuthorizationValueFormProperties>({
			keyName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PredicateOfURL {
	}
	export interface PredicateOfURLFormProperties {
	}
	export function CreatePredicateOfURLFormGroup() {
		return new FormGroup<PredicateOfURLFormProperties>({
		});

	}

	export interface CliOption {
		default?: string | null;
		description?: string | null;
		enum?: {[id: string]: string };
		opt?: string | null;
		optValue?: string | null;
		type?: string | null;
	}
	export interface CliOptionFormProperties {
		default: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		enum: FormControl<{[id: string]: string } | null | undefined>,
		opt: FormControl<string | null | undefined>,
		optValue: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateCliOptionFormGroup() {
		return new FormGroup<CliOptionFormProperties>({
			default: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			enum: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			opt: new FormControl<string | null | undefined>(undefined),
			optValue: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GeneratorInput {
		authorizationValue?: AuthorizationValue;
		openAPIUrl?: string | null;
		options?: {[id: string]: string };
		spec?: string | null;
	}
	export interface GeneratorInputFormProperties {
		openAPIUrl: FormControl<string | null | undefined>,
		options: FormControl<{[id: string]: string } | null | undefined>,
		spec: FormControl<string | null | undefined>,
	}
	export function CreateGeneratorInputFormGroup() {
		return new FormGroup<GeneratorInputFormProperties>({
			openAPIUrl: new FormControl<string | null | undefined>(undefined),
			options: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			spec: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResponseCode {

		/** File download code */
		code?: string | null;

		/** URL for fetching the generated client */
		link?: string | null;
	}
	export interface ResponseCodeFormProperties {

		/** File download code */
		code: FormControl<string | null | undefined>,

		/** URL for fetching the generated client */
		link: FormControl<string | null | undefined>,
	}
	export function CreateResponseCodeFormGroup() {
		return new FormGroup<ResponseCodeFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface URLStreamHandler {
	}
	export interface URLStreamHandlerFormProperties {
	}
	export function CreateURLStreamHandlerFormGroup() {
		return new FormGroup<URLStreamHandlerFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets languages supported by the client generator
		 * Get api/gen/clients
		 * @return {void} successful operation
		 */
		ClientOptions(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/gen/clients', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns options for a client library
		 * Get api/gen/clients/{language}
		 * @param {string} language The target language for the client library
		 * @return {{[id: string]: CliOption }} successful operation
		 */
		GetClientOptions(language: string): Observable<{[id: string]: CliOption }> {
			return this.http.get<{[id: string]: CliOption }>(this.baseUri + 'api/gen/clients/' + (language == null ? '' : encodeURIComponent(language)), {});
		}

		/**
		 * Generates a client library
		 * Accepts a `GeneratorInput` options map for spec location and generation options
		 * Post api/gen/clients/{language}
		 * @param {string} language The target language for the client library
		 * @param {GeneratorInput} requestBody Configuration for building the client library
		 * @return {void} successful operation
		 */
		GenerateClient(language: string, requestBody: GeneratorInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/gen/clients/' + (language == null ? '' : encodeURIComponent(language)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Downloads a pre-generated file
		 * A valid `fileId` is generated by the `/clients/{language}` or `/servers/{language}` POST operations.  The fileId code can be used just once, after which a new `fileId` will need to be requested.
		 * Get api/gen/download/{fileId}
		 * @param {string} fileId fileId
		 * @return {void} successful operation
		 */
		DownloadFile(fileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/gen/download/' + (fileId == null ? '' : encodeURIComponent(fileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets languages supported by the server generator
		 * Get api/gen/servers
		 * @return {void} successful operation
		 */
		ServerOptions(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/gen/servers', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns options for a server framework
		 * Get api/gen/servers/{framework}
		 * @param {string} framework The target language for the server framework
		 * @return {{[id: string]: CliOption }} successful operation
		 */
		GetServerOptions(framework: string): Observable<{[id: string]: CliOption }> {
			return this.http.get<{[id: string]: CliOption }>(this.baseUri + 'api/gen/servers/' + (framework == null ? '' : encodeURIComponent(framework)), {});
		}

		/**
		 * Generates a server library
		 * Accepts a `GeneratorInput` options map for spec location and generation options.
		 * Post api/gen/servers/{framework}
		 * @param {string} framework framework
		 * @param {GeneratorInput} requestBody parameters
		 * @return {void} successful operation
		 */
		GenerateServerForLanguage(framework: string, requestBody: GeneratorInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/gen/servers/' + (framework == null ? '' : encodeURIComponent(framework)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

