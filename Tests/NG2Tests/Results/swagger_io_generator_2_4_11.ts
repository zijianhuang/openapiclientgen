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
		 * @param {GetClientOptionsLanguage} language The target language for the client library
		 * @param {GeneratorInput} requestBody Configuration for building the client library
		 * @return {void} successful operation
		 */
		GenerateClient(language: GetClientOptionsLanguage, requestBody: GeneratorInput): Observable<HttpResponse<string>> {
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
		 * @param {GetServerOptionsFramework} framework framework
		 * @param {GeneratorInput} requestBody parameters
		 * @return {void} successful operation
		 */
		GenerateServerForLanguage(framework: GetServerOptionsFramework, requestBody: GeneratorInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'gen/servers/' + framework, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum GetClientOptionsLanguage { ada = 'ada', 'akka-scala' = 'akka-scala', android = 'android', apex = 'apex', bash = 'bash', clojure = 'clojure', cpprest = 'cpprest', csharp = 'csharp', 'csharp-dotnet2' = 'csharp-dotnet2', cwiki = 'cwiki', dart = 'dart', 'dart-jaguar' = 'dart-jaguar', 'dynamic-html' = 'dynamic-html', eiffel = 'eiffel', elixir = 'elixir', elm = 'elm', 'erlang-client' = 'erlang-client', flash = 'flash', go = 'go', groovy = 'groovy', 'haskell-http-client' = 'haskell-http-client', html = 'html', html2 = 'html2', java = 'java', javascript = 'javascript', 'javascript-closure-angular' = 'javascript-closure-angular', 'jaxrs-cxf-client' = 'jaxrs-cxf-client', jmeter = 'jmeter', kotlin = 'kotlin', lua = 'lua', objc = 'objc', perl = 'perl', php = 'php', powershell = 'powershell', python = 'python', qt5cpp = 'qt5cpp', r = 'r', ruby = 'ruby', rust = 'rust', scala = 'scala', 'scala-gatling' = 'scala-gatling', scalaz = 'scalaz', swagger = 'swagger', 'swagger-yaml' = 'swagger-yaml', swift = 'swift', swift3 = 'swift3', swift4 = 'swift4', swift5 = 'swift5', tizen = 'tizen', 'typescript-angular' = 'typescript-angular', 'typescript-angularjs' = 'typescript-angularjs', 'typescript-aurelia' = 'typescript-aurelia', 'typescript-fetch' = 'typescript-fetch', 'typescript-inversify' = 'typescript-inversify', 'typescript-jquery' = 'typescript-jquery', 'typescript-node' = 'typescript-node' }

	export enum GetServerOptionsFramework { 'ada-server' = 'ada-server', aspnetcore = 'aspnetcore', 'erlang-server' = 'erlang-server', finch = 'finch', 'go-server' = 'go-server', haskell = 'haskell', inflector = 'inflector', 'java-pkmst' = 'java-pkmst', 'java-play-framework' = 'java-play-framework', 'java-vertx' = 'java-vertx', jaxrs = 'jaxrs', 'jaxrs-cxf' = 'jaxrs-cxf', 'jaxrs-cxf-cdi' = 'jaxrs-cxf-cdi', 'jaxrs-resteasy' = 'jaxrs-resteasy', 'jaxrs-resteasy-eap' = 'jaxrs-resteasy-eap', 'jaxrs-spec' = 'jaxrs-spec', 'kotlin-server' = 'kotlin-server', lumen = 'lumen', msf4j = 'msf4j', nancyfx = 'nancyfx', 'nodejs-server' = 'nodejs-server', 'php-silex' = 'php-silex', 'php-symfony' = 'php-symfony', 'pistache-server' = 'pistache-server', 'python-flask' = 'python-flask', rails5 = 'rails5', restbed = 'restbed', 'rust-server' = 'rust-server', 'scala-lagom-server' = 'scala-lagom-server', scalatra = 'scalatra', sinatra = 'sinatra', slim = 'slim', spring = 'spring', undertow = 'undertow', 'ze-ph' = 'ze-ph' }

}

