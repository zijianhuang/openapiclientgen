import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AuthorizationValue {
		keyName?: string | null;
		type?: string | null;
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

	export interface CliOption {
		default?: string | null;
		description?: string | null;
		enum?: {[id: string]: string };
		optionName?: string | null;

		/** Data type is based on the types supported by the JSON-Schema */
		type?: string | null;
	}
	export interface CliOptionFormProperties {
		default: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		enum: FormControl<{[id: string]: string } | null | undefined>,
		optionName: FormControl<string | null | undefined>,

		/** Data type is based on the types supported by the JSON-Schema */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCliOptionFormGroup() {
		return new FormGroup<CliOptionFormProperties>({
			default: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			enum: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			optionName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GeneratorInput {
		authorizationValue?: AuthorizationValue;
		options?: {[id: string]: string };
		securityDefinition?: SecuritySchemeDefinition;
		spec?: string | null;
		swaggerUrl?: string | null;
	}
	export interface GeneratorInputFormProperties {
		options: FormControl<{[id: string]: string } | null | undefined>,
		spec: FormControl<string | null | undefined>,
		swaggerUrl: FormControl<string | null | undefined>,
	}
	export function CreateGeneratorInputFormGroup() {
		return new FormGroup<GeneratorInputFormProperties>({
			options: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			spec: new FormControl<string | null | undefined>(undefined),
			swaggerUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SecuritySchemeDefinition {
		description?: string | null;
		type?: string | null;
	}
	export interface SecuritySchemeDefinitionFormProperties {
		description: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateSecuritySchemeDefinitionFormGroup() {
		return new FormGroup<SecuritySchemeDefinitionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets languages supported by the client generator
		 * Get gen/clients
		 * @return {void} successful operation
		 */
		ClientOptions(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gen/clients', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns options for a client library
		 * Get gen/clients/{language}
		 * @param {GetClientOptionsLanguage} language The target language for the client library
		 * @return {{[id: string]: CliOption }} successful operation
		 */
		GetClientOptions(language: GetClientOptionsLanguage): Observable<{[id: string]: CliOption }> {
			return this.http.get<{[id: string]: CliOption }>(this.baseUri + 'gen/clients/' + language, {});
		}

		/**
		 * Generates a client library
		 * Accepts a `GeneratorInput` options map for spec location and generation options
		 * Post gen/clients/{language}
		 * @param {GenerateClientLanguage} language The target language for the client library
		 * @param {GeneratorInput} requestBody Configuration for building the client library
		 * @return {void} successful operation
		 */
		GenerateClient(language: GenerateClientLanguage, requestBody: GeneratorInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gen/clients/' + language, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Downloads a pre-generated file
		 * A valid `fileId` is generated by the `/clients/{language}` or `/servers/{language}` POST operations.  The fileId code can be used just once, after which a new `fileId` will need to be requested.
		 * Get gen/download/{fileId}
		 * @return {void} successful operation
		 */
		DownloadFile(fileId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gen/download/' + (fileId == null ? '' : encodeURIComponent(fileId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets languages supported by the server generator
		 * Get gen/servers
		 * @return {void} successful operation
		 */
		ServerOptions(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'gen/servers', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns options for a server framework
		 * Get gen/servers/{framework}
		 * @param {GetServerOptionsFramework} framework The target language for the server framework
		 * @return {{[id: string]: CliOption }} successful operation
		 */
		GetServerOptions(framework: GetServerOptionsFramework): Observable<{[id: string]: CliOption }> {
			return this.http.get<{[id: string]: CliOption }>(this.baseUri + 'gen/servers/' + framework, {});
		}

		/**
		 * Generates a server library
		 * Accepts a `GeneratorInput` options map for spec location and generation options.
		 * Post gen/servers/{framework}
		 * @param {GenerateServerForLanguageFramework} framework framework
		 * @param {GeneratorInput} requestBody parameters
		 * @return {void} successful operation
		 */
		GenerateServerForLanguage(framework: GenerateServerForLanguageFramework, requestBody: GeneratorInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gen/servers/' + framework, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum GetClientOptionsLanguage { ada = 0, 'akka-scala' = 1, android = 2, apex = 3, bash = 4, clojure = 5, cpprest = 6, csharp = 7, 'csharp-dotnet2' = 8, cwiki = 9, dart = 10, 'dart-jaguar' = 11, 'dynamic-html' = 12, eiffel = 13, elixir = 14, elm = 15, 'erlang-client' = 16, flash = 17, go = 18, groovy = 19, 'haskell-http-client' = 20, html = 21, html2 = 22, java = 23, javascript = 24, 'javascript-closure-angular' = 25, 'jaxrs-cxf-client' = 26, jmeter = 27, kotlin = 28, lua = 29, objc = 30, perl = 31, php = 32, powershell = 33, python = 34, qt5cpp = 35, r = 36, ruby = 37, rust = 38, scala = 39, 'scala-gatling' = 40, scalaz = 41, swagger = 42, 'swagger-yaml' = 43, swift = 44, swift3 = 45, swift4 = 46, swift5 = 47, tizen = 48, 'typescript-angular' = 49, 'typescript-angularjs' = 50, 'typescript-aurelia' = 51, 'typescript-fetch' = 52, 'typescript-inversify' = 53, 'typescript-jquery' = 54, 'typescript-node' = 55 }

	export enum GenerateClientLanguage { ada = 0, 'akka-scala' = 1, android = 2, apex = 3, bash = 4, clojure = 5, cpprest = 6, csharp = 7, 'csharp-dotnet2' = 8, cwiki = 9, dart = 10, 'dart-jaguar' = 11, 'dynamic-html' = 12, eiffel = 13, elixir = 14, elm = 15, 'erlang-client' = 16, flash = 17, go = 18, groovy = 19, 'haskell-http-client' = 20, html = 21, html2 = 22, java = 23, javascript = 24, 'javascript-closure-angular' = 25, 'jaxrs-cxf-client' = 26, jmeter = 27, kotlin = 28, lua = 29, objc = 30, perl = 31, php = 32, powershell = 33, python = 34, qt5cpp = 35, r = 36, ruby = 37, rust = 38, scala = 39, 'scala-gatling' = 40, scalaz = 41, swagger = 42, 'swagger-yaml' = 43, swift = 44, swift3 = 45, swift4 = 46, swift5 = 47, tizen = 48, 'typescript-angular' = 49, 'typescript-angularjs' = 50, 'typescript-aurelia' = 51, 'typescript-fetch' = 52, 'typescript-inversify' = 53, 'typescript-jquery' = 54, 'typescript-node' = 55 }

	export enum GetServerOptionsFramework { 'ada-server' = 0, aspnetcore = 1, 'erlang-server' = 2, finch = 3, 'go-server' = 4, haskell = 5, inflector = 6, 'java-pkmst' = 7, 'java-play-framework' = 8, 'java-vertx' = 9, jaxrs = 10, 'jaxrs-cxf' = 11, 'jaxrs-cxf-cdi' = 12, 'jaxrs-resteasy' = 13, 'jaxrs-resteasy-eap' = 14, 'jaxrs-spec' = 15, 'kotlin-server' = 16, lumen = 17, msf4j = 18, nancyfx = 19, 'nodejs-server' = 20, 'php-silex' = 21, 'php-symfony' = 22, 'pistache-server' = 23, 'python-flask' = 24, rails5 = 25, restbed = 26, 'rust-server' = 27, 'scala-lagom-server' = 28, scalatra = 29, sinatra = 30, slim = 31, spring = 32, undertow = 33, 'ze-ph' = 34 }

	export enum GenerateServerForLanguageFramework { 'ada-server' = 0, aspnetcore = 1, 'erlang-server' = 2, finch = 3, 'go-server' = 4, haskell = 5, inflector = 6, 'java-pkmst' = 7, 'java-play-framework' = 8, 'java-vertx' = 9, jaxrs = 10, 'jaxrs-cxf' = 11, 'jaxrs-cxf-cdi' = 12, 'jaxrs-resteasy' = 13, 'jaxrs-resteasy-eap' = 14, 'jaxrs-spec' = 15, 'kotlin-server' = 16, lumen = 17, msf4j = 18, nancyfx = 19, 'nodejs-server' = 20, 'php-silex' = 21, 'php-symfony' = 22, 'pistache-server' = 23, 'python-flask' = 24, rails5 = 25, restbed = 26, 'rust-server' = 27, 'scala-lagom-server' = 28, scalatra = 29, sinatra = 30, slim = 31, spring = 32, undertow = 33, 'ze-ph' = 34 }

}

