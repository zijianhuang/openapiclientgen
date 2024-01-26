import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Meta information about API */
	export interface API {

		/**
		 * Timestamp when the API was first added to the directory
		 * Required
		 */
		added: Date;

		/**
		 * Recommended version
		 * Required
		 */
		preferred: string;

		/**
		 * List of supported versions of the API
		 * Required
		 */
		versions: {[id: string]: ApiVersion };
	}

	/** Meta information about API */
	export interface APIFormProperties {

		/**
		 * Timestamp when the API was first added to the directory
		 * Required
		 */
		added: FormControl<Date | null | undefined>,

		/**
		 * Recommended version
		 * Required
		 */
		preferred: FormControl<string | null | undefined>,

		/**
		 * List of supported versions of the API
		 * Required
		 */
		versions: FormControl<{[id: string]: ApiVersion } | null | undefined>,
	}
	export function CreateAPIFormGroup() {
		return new FormGroup<APIFormProperties>({
			added: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			preferred: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			versions: new FormControl<{[id: string]: ApiVersion } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ApiVersion {

		/**
		 * Timestamp when the version was added
		 * Required
		 */
		added: Date;

		/** Copy of `externalDocs` section from OpenAPI definition */
		externalDocs?: string | null;

		/**
		 * Copy of `info` section from OpenAPI definition
		 * Required
		 */
		info: string;

		/** Link to the individual API entry for this API */
		link?: string | null;

		/**
		 * The value of the `openapi` or `swagger` property of the source definition
		 * Required
		 */
		openapiVer: string;

		/**
		 * URL to OpenAPI definition in JSON format
		 * Required
		 */
		swaggerUrl: string;

		/**
		 * URL to OpenAPI definition in YAML format
		 * Required
		 */
		swaggerYamlUrl: string;

		/**
		 * Timestamp when the version was updated
		 * Required
		 */
		updated: Date;
	}
	export interface ApiVersionFormProperties {

		/**
		 * Timestamp when the version was added
		 * Required
		 */
		added: FormControl<Date | null | undefined>,

		/** Copy of `externalDocs` section from OpenAPI definition */
		externalDocs: FormControl<string | null | undefined>,

		/**
		 * Copy of `info` section from OpenAPI definition
		 * Required
		 */
		info: FormControl<string | null | undefined>,

		/** Link to the individual API entry for this API */
		link: FormControl<string | null | undefined>,

		/**
		 * The value of the `openapi` or `swagger` property of the source definition
		 * Required
		 */
		openapiVer: FormControl<string | null | undefined>,

		/**
		 * URL to OpenAPI definition in JSON format
		 * Required
		 */
		swaggerUrl: FormControl<string | null | undefined>,

		/**
		 * URL to OpenAPI definition in YAML format
		 * Required
		 */
		swaggerYamlUrl: FormControl<string | null | undefined>,

		/**
		 * Timestamp when the version was updated
		 * Required
		 */
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateApiVersionFormGroup() {
		return new FormGroup<ApiVersionFormProperties>({
			added: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			externalDocs: new FormControl<string | null | undefined>(undefined),
			info: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			link: new FormControl<string | null | undefined>(undefined),
			openapiVer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			swaggerUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			swaggerYamlUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updated: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**
	 * List of API details.
	 * It is a JSON object with API IDs(`<provider>[:<service>]`) as keys.
	 */
	export interface APIs {
	}

	/**
	 * List of API details.
	 * It is a JSON object with API IDs(`<provider>[:<service>]`) as keys.
	 */
	export interface APIsFormProperties {
	}
	export function CreateAPIsFormGroup() {
		return new FormGroup<APIsFormProperties>({
		});

	}


	/** List of basic metrics */
	export interface Metrics {

		/** Data used for charting etc */
		datasets?: Array<string>;

		/** Percentage of all APIs where auto fixes have been applied */
		fixedPct?: number | null;

		/** Total number of fixes applied across all APIs */
		fixes?: number | null;

		/** Number of newly invalid APIs */
		invalid?: number | null;

		/** Open GitHub issues on our main repo */
		issues?: number | null;

		/**
		 * Number of unique APIs
		 * Required
		 * Minimum: 1
		 */
		numAPIs: number;

		/** Number of methods of API retrieval */
		numDrivers?: number | null;

		/**
		 * Total number of endpoints inside all definitions
		 * Required
		 * Minimum: 1
		 */
		numEndpoints: number;

		/** Number of API providers in directory */
		numProviders?: number | null;

		/**
		 * Number of API definitions including different versions of the same API
		 * Required
		 * Minimum: 1
		 */
		numSpecs: number;

		/** GitHub stars for our main repo */
		stars?: number | null;

		/** Summary totals for the last 7 days */
		thisWeek?: MetricsThisWeek;

		/** Number of unofficial APIs */
		unofficial?: number | null;

		/** Number of unreachable (4XX,5XX status) APIs */
		unreachable?: number | null;
	}

	/** List of basic metrics */
	export interface MetricsFormProperties {

		/** Percentage of all APIs where auto fixes have been applied */
		fixedPct: FormControl<number | null | undefined>,

		/** Total number of fixes applied across all APIs */
		fixes: FormControl<number | null | undefined>,

		/** Number of newly invalid APIs */
		invalid: FormControl<number | null | undefined>,

		/** Open GitHub issues on our main repo */
		issues: FormControl<number | null | undefined>,

		/**
		 * Number of unique APIs
		 * Required
		 * Minimum: 1
		 */
		numAPIs: FormControl<number | null | undefined>,

		/** Number of methods of API retrieval */
		numDrivers: FormControl<number | null | undefined>,

		/**
		 * Total number of endpoints inside all definitions
		 * Required
		 * Minimum: 1
		 */
		numEndpoints: FormControl<number | null | undefined>,

		/** Number of API providers in directory */
		numProviders: FormControl<number | null | undefined>,

		/**
		 * Number of API definitions including different versions of the same API
		 * Required
		 * Minimum: 1
		 */
		numSpecs: FormControl<number | null | undefined>,

		/** GitHub stars for our main repo */
		stars: FormControl<number | null | undefined>,

		/** Number of unofficial APIs */
		unofficial: FormControl<number | null | undefined>,

		/** Number of unreachable (4XX,5XX status) APIs */
		unreachable: FormControl<number | null | undefined>,
	}
	export function CreateMetricsFormGroup() {
		return new FormGroup<MetricsFormProperties>({
			fixedPct: new FormControl<number | null | undefined>(undefined),
			fixes: new FormControl<number | null | undefined>(undefined),
			invalid: new FormControl<number | null | undefined>(undefined),
			issues: new FormControl<number | null | undefined>(undefined),
			numAPIs: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			numDrivers: new FormControl<number | null | undefined>(undefined),
			numEndpoints: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			numProviders: new FormControl<number | null | undefined>(undefined),
			numSpecs: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			stars: new FormControl<number | null | undefined>(undefined),
			unofficial: new FormControl<number | null | undefined>(undefined),
			unreachable: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MetricsThisWeek {

		/** APIs added in the last week */
		added?: number | null;

		/** APIs updated in the last week */
		updated?: number | null;
	}
	export interface MetricsThisWeekFormProperties {

		/** APIs added in the last week */
		added: FormControl<number | null | undefined>,

		/** APIs updated in the last week */
		updated: FormControl<number | null | undefined>,
	}
	export function CreateMetricsThisWeekFormGroup() {
		return new FormGroup<MetricsThisWeekFormProperties>({
			added: new FormControl<number | null | undefined>(undefined),
			updated: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all APIs
		 * List all APIs in the directory.
		 * Returns links to the OpenAPI definitions for each API in the directory.
		 * If API exist in multiple versions `preferred` one is explicitly marked.
		 * Some basic info from the OpenAPI definition is cached inside each object.
		 * This allows you to generate some simple views without needing to fetch the OpenAPI definition for each API.
		 * Get list.json
		 * @return {APIs} OK
		 */
		ListAPIs(): Observable<APIs> {
			return this.http.get<APIs>(this.baseUri + 'list.json', {});
		}

		/**
		 * Get basic metrics
		 * Some basic metrics for the entire directory.
		 * Just stunning numbers to put on a front page and are intended purely for WoW effect :)
		 * Get metrics.json
		 * @return {Metrics} OK
		 */
		GetMetrics(): Observable<Metrics> {
			return this.http.get<Metrics>(this.baseUri + 'metrics.json', {});
		}

		/**
		 * List all providers
		 * List all the providers in the directory
		 * Get providers.json
		 * @return {GetProvidersReturn} OK
		 */
		GetProviders(): Observable<GetProvidersReturn> {
			return this.http.get<GetProvidersReturn>(this.baseUri + 'providers.json', {});
		}

		/**
		 * Retrieve one version of a particular API
		 * Returns the API entry for one specific version of an API where there is no serviceName.
		 * Get specs/{provider}/{api}.json
		 * @return {API} OK
		 */
		GetAPI(provider: string, api: string): Observable<API> {
			return this.http.get<API>(this.baseUri + 'specs/' + (provider == null ? '' : encodeURIComponent(provider)) + '/' + (api == null ? '' : encodeURIComponent(api)) + '.json', {});
		}

		/**
		 * Retrieve one version of a particular API with a serviceName.
		 * Returns the API entry for one specific version of an API where there is a serviceName.
		 * Get specs/{provider}/{service}/{api}.json
		 * @return {API} OK
		 */
		GetServiceAPI(provider: string, service: string, api: string): Observable<API> {
			return this.http.get<API>(this.baseUri + 'specs/' + (provider == null ? '' : encodeURIComponent(provider)) + '/' + (service == null ? '' : encodeURIComponent(service)) + '/' + (api == null ? '' : encodeURIComponent(api)) + '.json', {});
		}

		/**
		 * List all APIs for a particular provider
		 * List all APIs in the directory for a particular providerName
		 * Returns links to the individual API entry for each API.
		 * Get {provider}.json
		 * @return {APIs} OK
		 */
		GetProvider(provider: string): Observable<APIs> {
			return this.http.get<APIs>(this.baseUri + (provider == null ? '' : encodeURIComponent(provider)) + '.json', {});
		}

		/**
		 * List all serviceNames for a particular provider
		 * List all serviceNames in the directory for a particular providerName
		 * Get {provider}/services.json
		 * @return {GetServicesReturn} OK
		 */
		GetServices(provider: string): Observable<GetServicesReturn> {
			return this.http.get<GetServicesReturn>(this.baseUri + (provider == null ? '' : encodeURIComponent(provider)) + '/services.json', {});
		}
	}

	export interface GetProvidersReturn {

		/** Minimum items: 1 */
		data?: Array<string>;
	}
	export interface GetProvidersReturnFormProperties {
	}
	export function CreateGetProvidersReturnFormGroup() {
		return new FormGroup<GetProvidersReturnFormProperties>({
		});

	}

	export interface GetServicesReturn {

		/** Minimum items: 1 */
		data?: Array<string>;
	}
	export interface GetServicesReturnFormProperties {
	}
	export function CreateGetServicesReturnFormGroup() {
		return new FormGroup<GetServicesReturnFormProperties>({
		});

	}

}

