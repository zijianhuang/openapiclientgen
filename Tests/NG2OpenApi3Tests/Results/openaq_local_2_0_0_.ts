import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An enumeration. */
	export enum CitiesOrder { city = 'city', country = 'country', firstUpdated = 'firstUpdated', lastUpdated = 'lastUpdated' }

	export interface CitiesRow {

		/** Required */
		city: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;
		country?: string | null;

		/** Required */
		firstUpdated: Date;

		/** Required */
		lastUpdated: Date;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		locations: number;

		/** Required */
		parameters: Array<string>;
	}
	export interface CitiesRowFormProperties {

		/** Required */
		city: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
		country: FormControl<string | null | undefined>,

		/** Required */
		firstUpdated: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdated: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		locations: FormControl<number | null | undefined>,
	}
	export function CreateCitiesRowFormGroup() {
		return new FormGroup<CitiesRowFormProperties>({
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined),
			firstUpdated: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdated: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			locations: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An enumeration. */
	export enum CountriesOrder { country = 'country', firstUpdated = 'firstUpdated', lastUpdated = 'lastUpdated', locations = 'locations', count = 'count' }

	export interface CountriesRow {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cities: number;

		/** Required */
		code: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;

		/** Required */
		firstUpdated: Date;

		/** Required */
		lastUpdated: Date;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		locations: number;

		/** Required */
		name: string;

		/** Required */
		parameters: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sources: number;
	}
	export interface CountriesRowFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cities: FormControl<number | null | undefined>,

		/** Required */
		code: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,

		/** Required */
		firstUpdated: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdated: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		locations: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sources: FormControl<number | null | undefined>,
	}
	export function CreateCountriesRowFormGroup() {
		return new FormGroup<CountriesRowFormProperties>({
			cities: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			firstUpdated: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdated: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			locations: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sources: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An enumeration. */
	export enum EntityTypes { government = 'government', community = 'community', research = 'research' }

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


	/** An enumeration. */
	export enum LocationsOrder { city = 'city', country = 'country', location = 'location', sourceName = 'sourceName', firstUpdated = 'firstUpdated', lastUpdated = 'lastUpdated', count = 'count', random = 'random' }


	/** An enumeration. */
	export enum MeasOrder { city = 'city', country = 'country', location = 'location', datetime = 'datetime' }

	export interface Meta {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		found?: number | null;
		license?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		limit?: number | null;
		name?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;
		website?: string | null;
	}
	export interface MetaFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		found: FormControl<number | null | undefined>,
		license: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		limit: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			found: new FormControl<number | null | undefined>(undefined),
			license: new FormControl<string | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OpenAQCitiesResult {
		meta?: Meta;

		/** Required */
		results: Array<CitiesRow>;
	}
	export interface OpenAQCitiesResultFormProperties {
	}
	export function CreateOpenAQCitiesResultFormGroup() {
		return new FormGroup<OpenAQCitiesResultFormProperties>({
		});

	}

	export interface OpenAQCountriesResult {
		meta?: Meta;

		/** Required */
		results: Array<CountriesRow>;
	}
	export interface OpenAQCountriesResultFormProperties {
	}
	export function CreateOpenAQCountriesResultFormGroup() {
		return new FormGroup<OpenAQCountriesResultFormProperties>({
		});

	}

	export interface OpenAQParametersResult {
		meta?: Meta;

		/** Required */
		results: Array<ParametersRow>;
	}
	export interface OpenAQParametersResultFormProperties {
	}
	export function CreateOpenAQParametersResultFormGroup() {
		return new FormGroup<OpenAQParametersResultFormProperties>({
		});

	}

	export interface ParametersRow {

		/** Required */
		description: string;

		/** Required */
		displayName: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;
		isCore?: boolean | null;

		/** Type: double */
		maxColorValue?: number | null;

		/** Required */
		name: string;

		/** Required */
		preferredUnit: string;
	}
	export interface ParametersRowFormProperties {

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,
		isCore: FormControl<boolean | null | undefined>,

		/** Type: double */
		maxColorValue: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		preferredUnit: FormControl<string | null | undefined>,
	}
	export function CreateParametersRowFormGroup() {
		return new FormGroup<ParametersRowFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isCore: new FormControl<boolean | null | undefined>(undefined),
			maxColorValue: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			preferredUnit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OpenAQProjectsResult {
		meta?: Meta;

		/** Required */
		results: Array<ProjectsRow>;
	}
	export interface OpenAQProjectsResultFormProperties {
	}
	export function CreateOpenAQProjectsResultFormGroup() {
		return new FormGroup<OpenAQProjectsResultFormProperties>({
		});

	}

	export interface ProjectsRow {
		bbox?: Array<number>;
		countries?: Array<string>;
		entity?: string | null;

		/** Required */
		firstUpdated: Date;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: number;
		isAnalysis?: boolean | null;
		isMobile?: boolean | null;

		/** Required */
		lastUpdated: Date;

		/** Required */
		locationIds: Array<number>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		locations: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		measurements: number;

		/** Required */
		name: string;

		/** Required */
		parameters: Array<ProjectParameterDetails>;
		sensorType?: string | null;
		sources?: Array<string>;

		/** Required */
		subtitle: string;
	}
	export interface ProjectsRowFormProperties {
		entity: FormControl<string | null | undefined>,

		/** Required */
		firstUpdated: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		id: FormControl<number | null | undefined>,
		isAnalysis: FormControl<boolean | null | undefined>,
		isMobile: FormControl<boolean | null | undefined>,

		/** Required */
		lastUpdated: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		locations: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		measurements: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		sensorType: FormControl<string | null | undefined>,

		/** Required */
		subtitle: FormControl<string | null | undefined>,
	}
	export function CreateProjectsRowFormGroup() {
		return new FormGroup<ProjectsRowFormProperties>({
			entity: new FormControl<string | null | undefined>(undefined),
			firstUpdated: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			isAnalysis: new FormControl<boolean | null | undefined>(undefined),
			isMobile: new FormControl<boolean | null | undefined>(undefined),
			lastUpdated: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			locations: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			measurements: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sensorType: new FormControl<string | null | undefined>(undefined),
			subtitle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProjectParameterDetails {

		/**
		 * Required
		 * Type: double
		 */
		average: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: number;
		displayName?: string | null;

		/** Required */
		firstUpdated: Date;

		/** Required */
		lastUpdated: Date;

		/**
		 * Required
		 * Type: double
		 */
		lastValue: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		locations: number;

		/** Required */
		parameter: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parameterId: number;

		/** Required */
		unit: string;
	}
	export interface ProjectParameterDetailsFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		average: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		count: FormControl<number | null | undefined>,
		displayName: FormControl<string | null | undefined>,

		/** Required */
		firstUpdated: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdated: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		lastValue: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		locations: FormControl<number | null | undefined>,

		/** Required */
		parameter: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		parameterId: FormControl<number | null | undefined>,

		/** Required */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateProjectParameterDetailsFormGroup() {
		return new FormGroup<ProjectParameterDetailsFormProperties>({
			average: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			displayName: new FormControl<string | null | undefined>(undefined),
			firstUpdated: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdated: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastValue: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			locations: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			parameter: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameterId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OpenAQResult {
		meta?: Meta;
		results?: Array<string>;
	}
	export interface OpenAQResultFormProperties {
	}
	export function CreateOpenAQResultFormGroup() {
		return new FormGroup<OpenAQResultFormProperties>({
		});

	}


	/** An enumeration. */
	export enum ProjectsOrder { id = 'id', name = 'name', subtitle = 'subtitle', firstUpdated = 'firstUpdated', lastUpdated = 'lastUpdated' }


	/** An enumeration. */
	export enum SensorTypes { 'reference grade' = 'reference grade', 'low-cost sensor' = 'low-cost sensor' }


	/** An enumeration. */
	export enum Sort { asc = 'asc', desc = 'desc' }


	/** An enumeration. */
	export enum SourcesOrder { sourceName = 'sourceName', firstUpdated = 'firstUpdated', lastUpdated = 'lastUpdated' }


	/** An enumeration. */
	export enum SourcesV1Order { name = 'name' }


	/** An enumeration. */
	export enum Spatial { country = 'country', location = 'location', project = 'project', total = 'total' }


	/** An enumeration. */
	export enum Temporal { day = 'day', month = 'month', year = 'year', moy = 'moy', dow = 'dow', hour = 'hour', hod = 'hod' }


	/**
	 * TileJSON model.
	 * Based on https://github.com/mapbox/tilejson-spec/tree/master/2.2.0
	 */
	export interface TileJSON {
		attribution?: string | null;
		bounds?: Array<number>;
		data?: Array<string>;
		description?: string | null;
		grids?: Array<string>;
		legend?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 30
		 */
		maxzoom?: number | null;

		/**
		 * Minimum: 0
		 * Maximum: 30
		 */
		minzoom?: number | null;
		name?: string | null;
		scheme?: string | null;
		template?: string | null;
		tilejson?: string | null;

		/** Required */
		tiles: Array<string>;
		version?: string | null;
	}

	/**
	 * TileJSON model.
	 * Based on https://github.com/mapbox/tilejson-spec/tree/master/2.2.0
	 */
	export interface TileJSONFormProperties {
		attribution: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		legend: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 30
		 */
		maxzoom: FormControl<number | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 30
		 */
		minzoom: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		scheme: FormControl<string | null | undefined>,
		template: FormControl<string | null | undefined>,
		tilejson: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateTileJSONFormGroup() {
		return new FormGroup<TileJSONFormProperties>({
			attribution: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			legend: new FormControl<string | null | undefined>(undefined),
			maxzoom: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(30)]),
			minzoom: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(30)]),
			name: new FormControl<string | null | undefined>(undefined),
			scheme: new FormControl<string | null | undefined>(undefined),
			template: new FormControl<string | null | undefined>(undefined),
			tilejson: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Favico
		 * Get favicon.ico
		 * @return {any} Successful Response
		 */
		Favico_favicon_ico_get(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'favicon.ico', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Pong
		 * Sanity check.
		 * This will let the user know that the service is operational.
		 * And this path operation will:
		 * * show a lifesign
		 * Get ping
		 * @return {any} Successful Response
		 */
		Pong_ping_get(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ping', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Provides a simple listing of cities within the platform
		 * Get v1/cities
		 * @param {number} limit Change the number of results returned.
		 *     Minimum: 0    Maximum: 100000
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Define sort order.
		 * @param {string} country_id 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. /US)
		 *         
		 *     Min length: 2    Max length: 2
		 * @param {Array<string>} country 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. ?country=US or ?country=US&country=MX)
		 *         
		 * @param {Array<string>} city 
		 *         Limit results by a certain city or cities.
		 *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
		 *         
		 * @param {CitiesOrder} order_by Order by a field
		 * @return {OpenAQCitiesResult} Successful Response
		 */
		Cities_getv1_v1_cities_get(limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, country_id: string | null | undefined, country: Array<string> | null | undefined, city: Array<string> | null | undefined, order_by: CitiesOrder | null | undefined, entity: string | null | undefined): Observable<OpenAQCitiesResult> {
			return this.http.get<OpenAQCitiesResult>(this.baseUri + 'v1/cities?limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&country_id=' + (country_id == null ? '' : encodeURIComponent(country_id)) + '&' + country?.map(z => `country=${encodeURIComponent(z)}`).join('&') + '&' + city?.map(z => `city=${encodeURIComponent(z)}`).join('&') + '&order_by=' + order_by + '&entity=' + (entity == null ? '' : encodeURIComponent(entity)), {});
		}

		/**
		 * Countries Getv1
		 * Get v1/countries
		 * @param {number} limit Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Define sort order.
		 * @param {string} country_id 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. /US)
		 *         
		 *     Min length: 2    Max length: 2
		 * @param {Array<string>} country 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. ?country=US or ?country=US&country=MX)
		 *         
		 * @return {OpenAQCountriesResult} Successful Response
		 */
		Countries_getv1_v1_countries_get(limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, country_id: string | null | undefined, country: Array<string> | null | undefined, order_by: CountriesOrder | null | undefined): Observable<OpenAQCountriesResult> {
			return this.http.get<OpenAQCountriesResult>(this.baseUri + 'v1/countries?limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&country_id=' + (country_id == null ? '' : encodeURIComponent(country_id)) + '&' + country?.map(z => `country=${encodeURIComponent(z)}`).join('&') + '&order_by=' + order_by, {});
		}

		/**
		 * Countries Get
		 * Get v1/countries/{country_id}
		 * @param {string} country_id Min length: 2
		 *     Max length: 2
		 * @param {number} limit Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Define sort order.
		 * @param {Array<string>} country 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. ?country=US or ?country=US&country=MX)
		 *         
		 * @return {OpenAQCountriesResult} Successful Response
		 */
		Countries_get_v1_countries__country_id__get(country_id: string, limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, country: Array<string> | null | undefined, order_by: CountriesOrder | null | undefined): Observable<OpenAQCountriesResult> {
			return this.http.get<OpenAQCountriesResult>(this.baseUri + 'v1/countries/' + (country_id == null ? '' : encodeURIComponent(country_id)) + '&limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&' + country?.map(z => `country=${encodeURIComponent(z)}`).join('&') + '&order_by=' + order_by, {});
		}

		/**
		 * Latest V1 Get
		 * Get v1/latest
		 * @param {number} limit Change the number of results returned.
		 *     Minimum: 0    Maximum: 100000
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Sort Direction
		 * @param {number} parameter_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} radius Minimum: 0
		 *     Maximum: 100000
		 * @param {string} country_id 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. /US)
		 *         
		 *     Min length: 2    Max length: 2
		 * @param {Array<string>} country 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. ?country=US or ?country=US&country=MX)
		 *         
		 * @param {Array<string>} city 
		 *         Limit results by a certain city or cities.
		 *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
		 *         
		 * @param {number} location_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {LocationsOrder} order_by Order by a field
		 * @param {boolean} isMobile Location is mobile
		 * @param {boolean} isAnalysis Data is the product of a previous analysis/aggregation and not raw measurements
		 * @param {Array<string>} sourceName Name of the data source
		 * @param {EntityTypes} entity Source entity type.
		 * @param {SensorTypes} sensorType Type of Sensor
		 * @param {Array<string>} modelName Model Name of Sensor
		 * @param {Array<string>} manufacturerName Manufacturer of Sensor
		 * @return {OpenAQResult} Successful Response
		 */
		Latest_v1_get_v1_latest_get(limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, has_geo: boolean | null | undefined, parameter_id: number | null | undefined, parameter: Array<string> | null | undefined, unit: Array<string> | null | undefined, coordinates: string | null | undefined, radius: number | null | undefined, country_id: string | null | undefined, country: Array<string> | null | undefined, city: Array<string> | null | undefined, location_id: number | null | undefined, location: Array<string> | null | undefined, order_by: LocationsOrder | null | undefined, isMobile: boolean | null | undefined, isAnalysis: boolean | null | undefined, sourceName: Array<string> | null | undefined, entity: EntityTypes | null | undefined, sensorType: SensorTypes | null | undefined, modelName: Array<string> | null | undefined, manufacturerName: Array<string> | null | undefined, dumpRaw: boolean | null | undefined): Observable<OpenAQResult> {
			return this.http.get<OpenAQResult>(this.baseUri + 'v1/latest?limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&has_geo=' + has_geo + '&parameter_id=' + parameter_id + '&' + parameter?.map(z => `parameter=${encodeURIComponent(z)}`).join('&') + '&' + unit?.map(z => `unit=${encodeURIComponent(z)}`).join('&') + '&coordinates=' + (coordinates == null ? '' : encodeURIComponent(coordinates)) + '&radius=' + radius + '&country_id=' + (country_id == null ? '' : encodeURIComponent(country_id)) + '&' + country?.map(z => `country=${encodeURIComponent(z)}`).join('&') + '&' + city?.map(z => `city=${encodeURIComponent(z)}`).join('&') + '&location_id=' + location_id + '&' + location?.map(z => `location=${encodeURIComponent(z)}`).join('&') + '&order_by=' + order_by + '&isMobile=' + isMobile + '&isAnalysis=' + isAnalysis + '&' + sourceName?.map(z => `sourceName=${encodeURIComponent(z)}`).join('&') + '&entity=' + entity + '&sensorType=' + sensorType + '&' + modelName?.map(z => `modelName=${encodeURIComponent(z)}`).join('&') + '&' + manufacturerName?.map(z => `manufacturerName=${encodeURIComponent(z)}`).join('&') + '&dumpRaw=' + dumpRaw, {});
		}

		/**
		 * Latest V1 Get
		 * Get v1/latest/{location_id}
		 * @param {number} location_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Change the number of results returned.
		 *     Minimum: 0    Maximum: 100000
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Sort Direction
		 * @param {number} parameter_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} radius Minimum: 0
		 *     Maximum: 100000
		 * @param {string} country_id 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. /US)
		 *         
		 *     Min length: 2    Max length: 2
		 * @param {Array<string>} country 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. ?country=US or ?country=US&country=MX)
		 *         
		 * @param {Array<string>} city 
		 *         Limit results by a certain city or cities.
		 *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
		 *         
		 * @param {LocationsOrder} order_by Order by a field
		 * @param {boolean} isMobile Location is mobile
		 * @param {boolean} isAnalysis Data is the product of a previous analysis/aggregation and not raw measurements
		 * @param {Array<string>} sourceName Name of the data source
		 * @param {EntityTypes} entity Source entity type.
		 * @param {SensorTypes} sensorType Type of Sensor
		 * @param {Array<string>} modelName Model Name of Sensor
		 * @param {Array<string>} manufacturerName Manufacturer of Sensor
		 * @return {OpenAQResult} Successful Response
		 */
		Latest_v1_get_v1_latest__location_id__get(location_id: number, limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, has_geo: boolean | null | undefined, parameter_id: number | null | undefined, parameter: Array<string> | null | undefined, unit: Array<string> | null | undefined, coordinates: string | null | undefined, radius: number | null | undefined, country_id: string | null | undefined, country: Array<string> | null | undefined, city: Array<string> | null | undefined, location: Array<string> | null | undefined, order_by: LocationsOrder | null | undefined, isMobile: boolean | null | undefined, isAnalysis: boolean | null | undefined, sourceName: Array<string> | null | undefined, entity: EntityTypes | null | undefined, sensorType: SensorTypes | null | undefined, modelName: Array<string> | null | undefined, manufacturerName: Array<string> | null | undefined, dumpRaw: boolean | null | undefined): Observable<OpenAQResult> {
			return this.http.get<OpenAQResult>(this.baseUri + 'v1/latest/' + location_id + '?limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&has_geo=' + has_geo + '&parameter_id=' + parameter_id + '&' + parameter?.map(z => `parameter=${encodeURIComponent(z)}`).join('&') + '&' + unit?.map(z => `unit=${encodeURIComponent(z)}`).join('&') + '&coordinates=' + (coordinates == null ? '' : encodeURIComponent(coordinates)) + '&radius=' + radius + '&country_id=' + (country_id == null ? '' : encodeURIComponent(country_id)) + '&' + country?.map(z => `country=${encodeURIComponent(z)}`).join('&') + '&' + city?.map(z => `city=${encodeURIComponent(z)}`).join('&') + '&' + location?.map(z => `location=${encodeURIComponent(z)}`).join('&') + '&order_by=' + order_by + '&isMobile=' + isMobile + '&isAnalysis=' + isAnalysis + '&' + sourceName?.map(z => `sourceName=${encodeURIComponent(z)}`).join('&') + '&entity=' + entity + '&sensorType=' + sensorType + '&' + modelName?.map(z => `modelName=${encodeURIComponent(z)}`).join('&') + '&' + manufacturerName?.map(z => `manufacturerName=${encodeURIComponent(z)}`).join('&') + '&dumpRaw=' + dumpRaw, {});
		}

		/**
		 * Locationsv1 Get
		 * Get v1/locations
		 * @param {number} limit Change the number of results returned.
		 *     Minimum: 0    Maximum: 100000
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Sort Direction
		 * @param {number} parameter_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} radius Minimum: 0
		 *     Maximum: 100000
		 * @param {string} country_id 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. /US)
		 *         
		 *     Min length: 2    Max length: 2
		 * @param {Array<string>} country 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. ?country=US or ?country=US&country=MX)
		 *         
		 * @param {Array<string>} city 
		 *         Limit results by a certain city or cities.
		 *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
		 *         
		 * @param {number} location_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {LocationsOrder} order_by Order by a field
		 * @param {boolean} isMobile Location is mobile
		 * @param {boolean} isAnalysis Data is the product of a previous analysis/aggregation and not raw measurements
		 * @param {Array<string>} sourceName Name of the data source
		 * @param {EntityTypes} entity Source entity type.
		 * @param {SensorTypes} sensorType Type of Sensor
		 * @param {Array<string>} modelName Model Name of Sensor
		 * @param {Array<string>} manufacturerName Manufacturer of Sensor
		 * @return {OpenAQResult} Successful Response
		 */
		Locationsv1_get_v1_locations_get(limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, has_geo: boolean | null | undefined, parameter_id: number | null | undefined, parameter: Array<string> | null | undefined, unit: Array<string> | null | undefined, coordinates: string | null | undefined, radius: number | null | undefined, country_id: string | null | undefined, country: Array<string> | null | undefined, city: Array<string> | null | undefined, location_id: number | null | undefined, location: Array<string> | null | undefined, order_by: LocationsOrder | null | undefined, isMobile: boolean | null | undefined, isAnalysis: boolean | null | undefined, sourceName: Array<string> | null | undefined, entity: EntityTypes | null | undefined, sensorType: SensorTypes | null | undefined, modelName: Array<string> | null | undefined, manufacturerName: Array<string> | null | undefined, dumpRaw: boolean | null | undefined): Observable<OpenAQResult> {
			return this.http.get<OpenAQResult>(this.baseUri + 'v1/locations?limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&has_geo=' + has_geo + '&parameter_id=' + parameter_id + '&' + parameter?.map(z => `parameter=${encodeURIComponent(z)}`).join('&') + '&' + unit?.map(z => `unit=${encodeURIComponent(z)}`).join('&') + '&coordinates=' + (coordinates == null ? '' : encodeURIComponent(coordinates)) + '&radius=' + radius + '&country_id=' + (country_id == null ? '' : encodeURIComponent(country_id)) + '&' + country?.map(z => `country=${encodeURIComponent(z)}`).join('&') + '&' + city?.map(z => `city=${encodeURIComponent(z)}`).join('&') + '&location_id=' + location_id + '&' + location?.map(z => `location=${encodeURIComponent(z)}`).join('&') + '&order_by=' + order_by + '&isMobile=' + isMobile + '&isAnalysis=' + isAnalysis + '&' + sourceName?.map(z => `sourceName=${encodeURIComponent(z)}`).join('&') + '&entity=' + entity + '&sensorType=' + sensorType + '&' + modelName?.map(z => `modelName=${encodeURIComponent(z)}`).join('&') + '&' + manufacturerName?.map(z => `manufacturerName=${encodeURIComponent(z)}`).join('&') + '&dumpRaw=' + dumpRaw, {});
		}

		/**
		 * Locationsv1 Get
		 * Get v1/locations/{location_id}
		 * @param {number} location_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Change the number of results returned.
		 *     Minimum: 0    Maximum: 100000
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Sort Direction
		 * @param {number} parameter_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} radius Minimum: 0
		 *     Maximum: 100000
		 * @param {string} country_id 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. /US)
		 *         
		 *     Min length: 2    Max length: 2
		 * @param {Array<string>} country 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. ?country=US or ?country=US&country=MX)
		 *         
		 * @param {Array<string>} city 
		 *         Limit results by a certain city or cities.
		 *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
		 *         
		 * @param {LocationsOrder} order_by Order by a field
		 * @param {boolean} isMobile Location is mobile
		 * @param {boolean} isAnalysis Data is the product of a previous analysis/aggregation and not raw measurements
		 * @param {Array<string>} sourceName Name of the data source
		 * @param {EntityTypes} entity Source entity type.
		 * @param {SensorTypes} sensorType Type of Sensor
		 * @param {Array<string>} modelName Model Name of Sensor
		 * @param {Array<string>} manufacturerName Manufacturer of Sensor
		 * @return {OpenAQResult} Successful Response
		 */
		Locationsv1_get_v1_locations__location_id__get(location_id: number, limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, has_geo: boolean | null | undefined, parameter_id: number | null | undefined, parameter: Array<string> | null | undefined, unit: Array<string> | null | undefined, coordinates: string | null | undefined, radius: number | null | undefined, country_id: string | null | undefined, country: Array<string> | null | undefined, city: Array<string> | null | undefined, location: Array<string> | null | undefined, order_by: LocationsOrder | null | undefined, isMobile: boolean | null | undefined, isAnalysis: boolean | null | undefined, sourceName: Array<string> | null | undefined, entity: EntityTypes | null | undefined, sensorType: SensorTypes | null | undefined, modelName: Array<string> | null | undefined, manufacturerName: Array<string> | null | undefined, dumpRaw: boolean | null | undefined): Observable<OpenAQResult> {
			return this.http.get<OpenAQResult>(this.baseUri + 'v1/locations/' + location_id + '?limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&has_geo=' + has_geo + '&parameter_id=' + parameter_id + '&' + parameter?.map(z => `parameter=${encodeURIComponent(z)}`).join('&') + '&' + unit?.map(z => `unit=${encodeURIComponent(z)}`).join('&') + '&coordinates=' + (coordinates == null ? '' : encodeURIComponent(coordinates)) + '&radius=' + radius + '&country_id=' + (country_id == null ? '' : encodeURIComponent(country_id)) + '&' + country?.map(z => `country=${encodeURIComponent(z)}`).join('&') + '&' + city?.map(z => `city=${encodeURIComponent(z)}`).join('&') + '&' + location?.map(z => `location=${encodeURIComponent(z)}`).join('&') + '&order_by=' + order_by + '&isMobile=' + isMobile + '&isAnalysis=' + isAnalysis + '&' + sourceName?.map(z => `sourceName=${encodeURIComponent(z)}`).join('&') + '&entity=' + entity + '&sensorType=' + sensorType + '&' + modelName?.map(z => `modelName=${encodeURIComponent(z)}`).join('&') + '&' + manufacturerName?.map(z => `manufacturerName=${encodeURIComponent(z)}`).join('&') + '&dumpRaw=' + dumpRaw, {});
		}

		/**
		 * Measurements Get V1
		 * Get v1/measurements
		 * @param {number} limit Change the number of results returned.
		 *     Minimum: 0    Maximum: 100000
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {number} parameter_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} radius Minimum: 0
		 *     Maximum: 100000
		 * @param {string} country_id 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. /US)
		 *         
		 *     Min length: 2    Max length: 2
		 * @param {Array<string>} country 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. ?country=US or ?country=US&country=MX)
		 *         
		 * @param {Array<string>} city 
		 *         Limit results by a certain city or cities.
		 *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
		 *         
		 * @param {number} location_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} project Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} value_from Type: double
		 * @param {number} value_to Type: double
		 * @return {any} Successful Response
		 */
		Measurements_get_v1_v1_measurements_get(format: string | null | undefined, date_from: Date | null | undefined, date_to: Date | null | undefined, limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, has_geo: boolean | null | undefined, parameter_id: number | null | undefined, parameter: Array<string> | null | undefined, unit: Array<string> | null | undefined, coordinates: string | null | undefined, radius: number | null | undefined, country_id: string | null | undefined, country: Array<string> | null | undefined, city: Array<string> | null | undefined, location_id: number | null | undefined, location: Array<string> | null | undefined, order_by: MeasOrder | null | undefined, isMobile: boolean | null | undefined, isAnalysis: boolean | null | undefined, project: number | null | undefined, entity: EntityTypes | null | undefined, sensorType: SensorTypes | null | undefined, value_from: number | null | undefined, value_to: number | null | undefined, include_fields: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/measurements?format=' + (format == null ? '' : encodeURIComponent(format)) + '&date_from=' + date_from + '&date_to=' + date_to + '&limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&has_geo=' + has_geo + '&parameter_id=' + parameter_id + '&' + parameter?.map(z => `parameter=${encodeURIComponent(z)}`).join('&') + '&' + unit?.map(z => `unit=${encodeURIComponent(z)}`).join('&') + '&coordinates=' + (coordinates == null ? '' : encodeURIComponent(coordinates)) + '&radius=' + radius + '&country_id=' + (country_id == null ? '' : encodeURIComponent(country_id)) + '&' + country?.map(z => `country=${encodeURIComponent(z)}`).join('&') + '&' + city?.map(z => `city=${encodeURIComponent(z)}`).join('&') + '&location_id=' + location_id + '&' + location?.map(z => `location=${encodeURIComponent(z)}`).join('&') + '&order_by=' + order_by + '&isMobile=' + isMobile + '&isAnalysis=' + isAnalysis + '&project=' + project + '&entity=' + entity + '&sensorType=' + sensorType + '&value_from=' + value_from + '&value_to=' + value_to + '&include_fields=' + (include_fields == null ? '' : encodeURIComponent(include_fields)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Parameters Getv1
		 * Get v1/parameters
		 * @param {number} limit Change the number of results returned.
		 *     Minimum: 0    Maximum: 100000
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Define sort order.
		 * @return {OpenAQParametersResult} Successful Response
		 */
		Parameters_getv1_v1_parameters_get(limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, sourceName: Array<string> | null | undefined, sourceId: Array<number> | null | undefined, sourceSlug: Array<string> | null | undefined, order_by: string | null | undefined): Observable<OpenAQParametersResult> {
			return this.http.get<OpenAQParametersResult>(this.baseUri + 'v1/parameters?limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&' + sourceName?.map(z => `sourceName=${encodeURIComponent(z)}`).join('&') + '&' + sourceId?.map(z => `sourceId=${z}`).join('&') + '&' + sourceSlug?.map(z => `sourceSlug=${encodeURIComponent(z)}`).join('&') + '&order_by=' + (order_by == null ? '' : encodeURIComponent(order_by)), {});
		}

		/**
		 * Sources V1 Get
		 * Get v1/sources
		 * @param {number} limit Change the number of results returned.
		 *     Minimum: 0    Maximum: 100000
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Define sort order.
		 * @return {OpenAQResult} Successful Response
		 */
		Sources_v1_get_v1_sources_get(limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, name: string | null | undefined, order_by: SourcesV1Order | null | undefined): Observable<OpenAQResult> {
			return this.http.get<OpenAQResult>(this.baseUri + 'v1/sources?limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&order_by=' + order_by, {});
		}

		/**
		 * Averages V2 Get
		 * Get v2/averages
		 * @param {number} parameter_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} project_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} country_id 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. /US)
		 *         
		 *     Min length: 2    Max length: 2
		 * @param {Array<string>} country 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. ?country=US or ?country=US&country=MX)
		 *         
		 * @param {number} limit Change the number of results returned.
		 *     Minimum: 0    Maximum: 100000
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Define sort order.
		 * @return {OpenAQResult} Successful Response
		 */
		Averages_v2_get_v2_averages_get(date_from: Date | null | undefined, date_to: Date | null | undefined, parameter_id: number | null | undefined, parameter: Array<string> | null | undefined, unit: Array<string> | null | undefined, project_id: number | null | undefined, project: Array<string> | null | undefined, country_id: string | null | undefined, country: Array<string> | null | undefined, limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, spatial: Spatial, temporal: Temporal, location: Array<string> | null | undefined, group: boolean | null | undefined): Observable<OpenAQResult> {
			return this.http.get<OpenAQResult>(this.baseUri + 'v2/averages?date_from=' + date_from + '&date_to=' + date_to + '&parameter_id=' + parameter_id + '&' + parameter?.map(z => `parameter=${encodeURIComponent(z)}`).join('&') + '&' + unit?.map(z => `unit=${encodeURIComponent(z)}`).join('&') + '&project_id=' + project_id + '&' + project?.map(z => `project=${encodeURIComponent(z)}`).join('&') + '&country_id=' + (country_id == null ? '' : encodeURIComponent(country_id)) + '&' + country?.map(z => `country=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&spatial=' + spatial + '&temporal=' + temporal + '&' + location?.map(z => `location=${encodeURIComponent(z)}`).join('&') + '&group=' + group, {});
		}

		/**
		 * Provides a simple listing of cities within the platform
		 * Get v2/cities
		 * @param {number} limit Change the number of results returned.
		 *     Minimum: 0    Maximum: 100000
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Define sort order.
		 * @param {string} country_id 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. /US)
		 *         
		 *     Min length: 2    Max length: 2
		 * @param {Array<string>} country 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. ?country=US or ?country=US&country=MX)
		 *         
		 * @param {Array<string>} city 
		 *         Limit results by a certain city or cities.
		 *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
		 *         
		 * @param {CitiesOrder} order_by Order by a field
		 * @return {OpenAQCitiesResult} Successful Response
		 */
		Cities_get_v2_cities_get(limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, country_id: string | null | undefined, country: Array<string> | null | undefined, city: Array<string> | null | undefined, order_by: CitiesOrder | null | undefined, entity: string | null | undefined): Observable<OpenAQCitiesResult> {
			return this.http.get<OpenAQCitiesResult>(this.baseUri + 'v2/cities?limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&country_id=' + (country_id == null ? '' : encodeURIComponent(country_id)) + '&' + country?.map(z => `country=${encodeURIComponent(z)}`).join('&') + '&' + city?.map(z => `city=${encodeURIComponent(z)}`).join('&') + '&order_by=' + order_by + '&entity=' + (entity == null ? '' : encodeURIComponent(entity)), {});
		}

		/**
		 * Countries Get
		 * Get v2/countries
		 * @param {number} limit Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Define sort order.
		 * @param {string} country_id 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. /US)
		 *         
		 *     Min length: 2    Max length: 2
		 * @param {Array<string>} country 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. ?country=US or ?country=US&country=MX)
		 *         
		 * @return {OpenAQCountriesResult} Successful Response
		 */
		Countries_get_v2_countries_get(limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, country_id: string | null | undefined, country: Array<string> | null | undefined, order_by: CountriesOrder | null | undefined): Observable<OpenAQCountriesResult> {
			return this.http.get<OpenAQCountriesResult>(this.baseUri + 'v2/countries?limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&country_id=' + (country_id == null ? '' : encodeURIComponent(country_id)) + '&' + country?.map(z => `country=${encodeURIComponent(z)}`).join('&') + '&order_by=' + order_by, {});
		}

		/**
		 * Countries Get
		 * Get v2/countries/{country_id}
		 * @param {string} country_id Min length: 2
		 *     Max length: 2
		 * @param {number} limit Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Define sort order.
		 * @param {Array<string>} country 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. ?country=US or ?country=US&country=MX)
		 *         
		 * @return {OpenAQCountriesResult} Successful Response
		 */
		Countries_get_v2_countries__country_id__get(country_id: string, limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, country: Array<string> | null | undefined, order_by: CountriesOrder | null | undefined): Observable<OpenAQCountriesResult> {
			return this.http.get<OpenAQCountriesResult>(this.baseUri + 'v2/countries/' + (country_id == null ? '' : encodeURIComponent(country_id)) + '&limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&' + country?.map(z => `country=${encodeURIComponent(z)}`).join('&') + '&order_by=' + order_by, {});
		}

		/**
		 * Latest Get
		 * Get v2/latest
		 * @param {number} limit Change the number of results returned.
		 *     Minimum: 0    Maximum: 100000
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Sort Direction
		 * @param {number} parameter_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} radius Minimum: 0
		 *     Maximum: 100000
		 * @param {string} country_id 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. /US)
		 *         
		 *     Min length: 2    Max length: 2
		 * @param {Array<string>} country 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. ?country=US or ?country=US&country=MX)
		 *         
		 * @param {Array<string>} city 
		 *         Limit results by a certain city or cities.
		 *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
		 *         
		 * @param {number} location_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {LocationsOrder} order_by Order by a field
		 * @param {boolean} isMobile Location is mobile
		 * @param {boolean} isAnalysis Data is the product of a previous analysis/aggregation and not raw measurements
		 * @param {Array<string>} sourceName Name of the data source
		 * @param {EntityTypes} entity Source entity type.
		 * @param {SensorTypes} sensorType Type of Sensor
		 * @param {Array<string>} modelName Model Name of Sensor
		 * @param {Array<string>} manufacturerName Manufacturer of Sensor
		 * @return {OpenAQResult} Successful Response
		 */
		Latest_get_v2_latest_get(limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, has_geo: boolean | null | undefined, parameter_id: number | null | undefined, parameter: Array<string> | null | undefined, unit: Array<string> | null | undefined, coordinates: string | null | undefined, radius: number | null | undefined, country_id: string | null | undefined, country: Array<string> | null | undefined, city: Array<string> | null | undefined, location_id: number | null | undefined, location: Array<string> | null | undefined, order_by: LocationsOrder | null | undefined, isMobile: boolean | null | undefined, isAnalysis: boolean | null | undefined, sourceName: Array<string> | null | undefined, entity: EntityTypes | null | undefined, sensorType: SensorTypes | null | undefined, modelName: Array<string> | null | undefined, manufacturerName: Array<string> | null | undefined, dumpRaw: boolean | null | undefined): Observable<OpenAQResult> {
			return this.http.get<OpenAQResult>(this.baseUri + 'v2/latest?limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&has_geo=' + has_geo + '&parameter_id=' + parameter_id + '&' + parameter?.map(z => `parameter=${encodeURIComponent(z)}`).join('&') + '&' + unit?.map(z => `unit=${encodeURIComponent(z)}`).join('&') + '&coordinates=' + (coordinates == null ? '' : encodeURIComponent(coordinates)) + '&radius=' + radius + '&country_id=' + (country_id == null ? '' : encodeURIComponent(country_id)) + '&' + country?.map(z => `country=${encodeURIComponent(z)}`).join('&') + '&' + city?.map(z => `city=${encodeURIComponent(z)}`).join('&') + '&location_id=' + location_id + '&' + location?.map(z => `location=${encodeURIComponent(z)}`).join('&') + '&order_by=' + order_by + '&isMobile=' + isMobile + '&isAnalysis=' + isAnalysis + '&' + sourceName?.map(z => `sourceName=${encodeURIComponent(z)}`).join('&') + '&entity=' + entity + '&sensorType=' + sensorType + '&' + modelName?.map(z => `modelName=${encodeURIComponent(z)}`).join('&') + '&' + manufacturerName?.map(z => `manufacturerName=${encodeURIComponent(z)}`).join('&') + '&dumpRaw=' + dumpRaw, {});
		}

		/**
		 * Latest Get
		 * Get v2/latest/{location_id}
		 * @param {number} location_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Change the number of results returned.
		 *     Minimum: 0    Maximum: 100000
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Sort Direction
		 * @param {number} parameter_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} radius Minimum: 0
		 *     Maximum: 100000
		 * @param {string} country_id 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. /US)
		 *         
		 *     Min length: 2    Max length: 2
		 * @param {Array<string>} country 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. ?country=US or ?country=US&country=MX)
		 *         
		 * @param {Array<string>} city 
		 *         Limit results by a certain city or cities.
		 *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
		 *         
		 * @param {LocationsOrder} order_by Order by a field
		 * @param {boolean} isMobile Location is mobile
		 * @param {boolean} isAnalysis Data is the product of a previous analysis/aggregation and not raw measurements
		 * @param {Array<string>} sourceName Name of the data source
		 * @param {EntityTypes} entity Source entity type.
		 * @param {SensorTypes} sensorType Type of Sensor
		 * @param {Array<string>} modelName Model Name of Sensor
		 * @param {Array<string>} manufacturerName Manufacturer of Sensor
		 * @return {OpenAQResult} Successful Response
		 */
		Latest_get_v2_latest__location_id__get(location_id: number, limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, has_geo: boolean | null | undefined, parameter_id: number | null | undefined, parameter: Array<string> | null | undefined, unit: Array<string> | null | undefined, coordinates: string | null | undefined, radius: number | null | undefined, country_id: string | null | undefined, country: Array<string> | null | undefined, city: Array<string> | null | undefined, location: Array<string> | null | undefined, order_by: LocationsOrder | null | undefined, isMobile: boolean | null | undefined, isAnalysis: boolean | null | undefined, sourceName: Array<string> | null | undefined, entity: EntityTypes | null | undefined, sensorType: SensorTypes | null | undefined, modelName: Array<string> | null | undefined, manufacturerName: Array<string> | null | undefined, dumpRaw: boolean | null | undefined): Observable<OpenAQResult> {
			return this.http.get<OpenAQResult>(this.baseUri + 'v2/latest/' + location_id + '?limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&has_geo=' + has_geo + '&parameter_id=' + parameter_id + '&' + parameter?.map(z => `parameter=${encodeURIComponent(z)}`).join('&') + '&' + unit?.map(z => `unit=${encodeURIComponent(z)}`).join('&') + '&coordinates=' + (coordinates == null ? '' : encodeURIComponent(coordinates)) + '&radius=' + radius + '&country_id=' + (country_id == null ? '' : encodeURIComponent(country_id)) + '&' + country?.map(z => `country=${encodeURIComponent(z)}`).join('&') + '&' + city?.map(z => `city=${encodeURIComponent(z)}`).join('&') + '&' + location?.map(z => `location=${encodeURIComponent(z)}`).join('&') + '&order_by=' + order_by + '&isMobile=' + isMobile + '&isAnalysis=' + isAnalysis + '&' + sourceName?.map(z => `sourceName=${encodeURIComponent(z)}`).join('&') + '&entity=' + entity + '&sensorType=' + sensorType + '&' + modelName?.map(z => `modelName=${encodeURIComponent(z)}`).join('&') + '&' + manufacturerName?.map(z => `manufacturerName=${encodeURIComponent(z)}`).join('&') + '&dumpRaw=' + dumpRaw, {});
		}

		/**
		 * Locations Get
		 * Get v2/locations
		 * @param {number} limit Change the number of results returned.
		 *     Minimum: 0    Maximum: 100000
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Sort Direction
		 * @param {number} parameter_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} radius Minimum: 0
		 *     Maximum: 100000
		 * @param {string} country_id 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. /US)
		 *         
		 *     Min length: 2    Max length: 2
		 * @param {Array<string>} country 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. ?country=US or ?country=US&country=MX)
		 *         
		 * @param {Array<string>} city 
		 *         Limit results by a certain city or cities.
		 *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
		 *         
		 * @param {number} location_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {LocationsOrder} order_by Order by a field
		 * @param {boolean} isMobile Location is mobile
		 * @param {boolean} isAnalysis Data is the product of a previous analysis/aggregation and not raw measurements
		 * @param {Array<string>} sourceName Name of the data source
		 * @param {EntityTypes} entity Source entity type.
		 * @param {SensorTypes} sensorType Type of Sensor
		 * @param {Array<string>} modelName Model Name of Sensor
		 * @param {Array<string>} manufacturerName Manufacturer of Sensor
		 * @return {OpenAQResult} Successful Response
		 */
		Locations_get_v2_locations_get(limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, has_geo: boolean | null | undefined, parameter_id: number | null | undefined, parameter: Array<string> | null | undefined, unit: Array<string> | null | undefined, coordinates: string | null | undefined, radius: number | null | undefined, country_id: string | null | undefined, country: Array<string> | null | undefined, city: Array<string> | null | undefined, location_id: number | null | undefined, location: Array<string> | null | undefined, order_by: LocationsOrder | null | undefined, isMobile: boolean | null | undefined, isAnalysis: boolean | null | undefined, sourceName: Array<string> | null | undefined, entity: EntityTypes | null | undefined, sensorType: SensorTypes | null | undefined, modelName: Array<string> | null | undefined, manufacturerName: Array<string> | null | undefined, dumpRaw: boolean | null | undefined): Observable<OpenAQResult> {
			return this.http.get<OpenAQResult>(this.baseUri + 'v2/locations?limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&has_geo=' + has_geo + '&parameter_id=' + parameter_id + '&' + parameter?.map(z => `parameter=${encodeURIComponent(z)}`).join('&') + '&' + unit?.map(z => `unit=${encodeURIComponent(z)}`).join('&') + '&coordinates=' + (coordinates == null ? '' : encodeURIComponent(coordinates)) + '&radius=' + radius + '&country_id=' + (country_id == null ? '' : encodeURIComponent(country_id)) + '&' + country?.map(z => `country=${encodeURIComponent(z)}`).join('&') + '&' + city?.map(z => `city=${encodeURIComponent(z)}`).join('&') + '&location_id=' + location_id + '&' + location?.map(z => `location=${encodeURIComponent(z)}`).join('&') + '&order_by=' + order_by + '&isMobile=' + isMobile + '&isAnalysis=' + isAnalysis + '&' + sourceName?.map(z => `sourceName=${encodeURIComponent(z)}`).join('&') + '&entity=' + entity + '&sensorType=' + sensorType + '&' + modelName?.map(z => `modelName=${encodeURIComponent(z)}`).join('&') + '&' + manufacturerName?.map(z => `manufacturerName=${encodeURIComponent(z)}`).join('&') + '&dumpRaw=' + dumpRaw, {});
		}

		/**
		 * Mobilegentilejson
		 * Get v2/locations/tiles/mobile-generalized/tiles.json
		 * @return {TileJSON} Return a tilejson
		 */
		Mobilegentilejson_v2_locations_tiles_mobile_generalized_tiles_json_get(): Observable<TileJSON> {
			return this.http.get<TileJSON>(this.baseUri + 'v2/locations/tiles/mobile-generalized/tiles.json', {});
		}

		/**
		 * Get Mobilegentile
		 * Get v2/locations/tiles/mobile-generalized/{z}/{x}/{y}.pbf
		 * @param {number} z Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} x Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} y Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<number>} location limit data to location id
		 * @param {number} project Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Successful Response
		 */
		Get_mobilegentile_v2_locations_tiles_mobile_generalized__z___x___y__pbf_get(z: number, x: number, y: number, parameter: number | null | undefined, location: Array<number> | null | undefined, lastUpdatedFrom: Date | null | undefined, lastUpdatedTo: Date | null | undefined, isMobile: boolean | null | undefined, project: number | null | undefined, isAnalysis: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/locations/tiles/mobile-generalized/' + z + '/' + x + '/' + y + '.pbf?parameter=' + parameter + '&' + location?.map(z => `location=${z}`).join('&') + '&lastUpdatedFrom=' + lastUpdatedFrom + '&lastUpdatedTo=' + lastUpdatedTo + '&isMobile=' + isMobile + '&project=' + project + '&isAnalysis=' + isAnalysis, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Mobiletilejson
		 * Get v2/locations/tiles/mobile/tiles.json
		 * @return {TileJSON} Return a tilejson
		 */
		Mobiletilejson_v2_locations_tiles_mobile_tiles_json_get(): Observable<TileJSON> {
			return this.http.get<TileJSON>(this.baseUri + 'v2/locations/tiles/mobile/tiles.json', {});
		}

		/**
		 * Get Mobiletile
		 * Get v2/locations/tiles/mobile/{z}/{x}/{y}.pbf
		 * @param {number} z Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} x Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} y Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<number>} location limit data to location id
		 * @param {number} project Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Successful Response
		 */
		Get_mobiletile_v2_locations_tiles_mobile__z___x___y__pbf_get(z: number, x: number, y: number, dateFrom: Date, dateTo: Date, parameter: number | null | undefined, location: Array<number> | null | undefined, lastUpdatedFrom: Date | null | undefined, lastUpdatedTo: Date | null | undefined, isMobile: boolean | null | undefined, project: number | null | undefined, isAnalysis: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/locations/tiles/mobile/' + z + '/' + x + '/' + y + '.pbf?dateFrom=' + dateFrom + '&dateTo=' + dateTo + '&parameter=' + parameter + '&' + location?.map(z => `location=${z}`).join('&') + '&lastUpdatedFrom=' + lastUpdatedFrom + '&lastUpdatedTo=' + lastUpdatedTo + '&isMobile=' + isMobile + '&project=' + project + '&isAnalysis=' + isAnalysis, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Tilejson
		 * Get v2/locations/tiles/tiles.json
		 * @return {TileJSON} Return a tilejson
		 */
		Tilejson_v2_locations_tiles_tiles_json_get(): Observable<TileJSON> {
			return this.http.get<TileJSON>(this.baseUri + 'v2/locations/tiles/tiles.json', {});
		}

		/**
		 * Demo
		 * Get v2/locations/tiles/viewer
		 * @return {void} Successful Response
		 */
		Demo_v2_locations_tiles_viewer_get(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/locations/tiles/viewer', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Tile
		 * Get v2/locations/tiles/{z}/{x}/{y}.pbf
		 * @param {number} z Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} x Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} y Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<number>} location limit data to location id
		 * @param {number} project Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} Successful Response
		 */
		Get_tile_v2_locations_tiles__z___x___y__pbf_get(z: number, x: number, y: number, parameter: number | null | undefined, location: Array<number> | null | undefined, lastUpdatedFrom: Date | null | undefined, lastUpdatedTo: Date | null | undefined, isMobile: boolean | null | undefined, project: number | null | undefined, isAnalysis: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/locations/tiles/' + z + '/' + x + '/' + y + '.pbf?parameter=' + parameter + '&' + location?.map(z => `location=${z}`).join('&') + '&lastUpdatedFrom=' + lastUpdatedFrom + '&lastUpdatedTo=' + lastUpdatedTo + '&isMobile=' + isMobile + '&project=' + project + '&isAnalysis=' + isAnalysis, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Locations Get
		 * Get v2/locations/{location_id}
		 * @param {number} location_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit Change the number of results returned.
		 *     Minimum: 0    Maximum: 100000
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Sort Direction
		 * @param {number} parameter_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} radius Minimum: 0
		 *     Maximum: 100000
		 * @param {string} country_id 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. /US)
		 *         
		 *     Min length: 2    Max length: 2
		 * @param {Array<string>} country 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. ?country=US or ?country=US&country=MX)
		 *         
		 * @param {Array<string>} city 
		 *         Limit results by a certain city or cities.
		 *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
		 *         
		 * @param {LocationsOrder} order_by Order by a field
		 * @param {boolean} isMobile Location is mobile
		 * @param {boolean} isAnalysis Data is the product of a previous analysis/aggregation and not raw measurements
		 * @param {Array<string>} sourceName Name of the data source
		 * @param {EntityTypes} entity Source entity type.
		 * @param {SensorTypes} sensorType Type of Sensor
		 * @param {Array<string>} modelName Model Name of Sensor
		 * @param {Array<string>} manufacturerName Manufacturer of Sensor
		 * @return {OpenAQResult} Successful Response
		 */
		Locations_get_v2_locations__location_id__get(location_id: number, limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, has_geo: boolean | null | undefined, parameter_id: number | null | undefined, parameter: Array<string> | null | undefined, unit: Array<string> | null | undefined, coordinates: string | null | undefined, radius: number | null | undefined, country_id: string | null | undefined, country: Array<string> | null | undefined, city: Array<string> | null | undefined, location: Array<string> | null | undefined, order_by: LocationsOrder | null | undefined, isMobile: boolean | null | undefined, isAnalysis: boolean | null | undefined, sourceName: Array<string> | null | undefined, entity: EntityTypes | null | undefined, sensorType: SensorTypes | null | undefined, modelName: Array<string> | null | undefined, manufacturerName: Array<string> | null | undefined, dumpRaw: boolean | null | undefined): Observable<OpenAQResult> {
			return this.http.get<OpenAQResult>(this.baseUri + 'v2/locations/' + location_id + '?limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&has_geo=' + has_geo + '&parameter_id=' + parameter_id + '&' + parameter?.map(z => `parameter=${encodeURIComponent(z)}`).join('&') + '&' + unit?.map(z => `unit=${encodeURIComponent(z)}`).join('&') + '&coordinates=' + (coordinates == null ? '' : encodeURIComponent(coordinates)) + '&radius=' + radius + '&country_id=' + (country_id == null ? '' : encodeURIComponent(country_id)) + '&' + country?.map(z => `country=${encodeURIComponent(z)}`).join('&') + '&' + city?.map(z => `city=${encodeURIComponent(z)}`).join('&') + '&' + location?.map(z => `location=${encodeURIComponent(z)}`).join('&') + '&order_by=' + order_by + '&isMobile=' + isMobile + '&isAnalysis=' + isAnalysis + '&' + sourceName?.map(z => `sourceName=${encodeURIComponent(z)}`).join('&') + '&entity=' + entity + '&sensorType=' + sensorType + '&' + modelName?.map(z => `modelName=${encodeURIComponent(z)}`).join('&') + '&' + manufacturerName?.map(z => `manufacturerName=${encodeURIComponent(z)}`).join('&') + '&dumpRaw=' + dumpRaw, {});
		}

		/**
		 * Mfr Get
		 * Get v2/manufacturers
		 * @return {OpenAQResult} Successful Response
		 */
		Mfr_get_v2_manufacturers_get(): Observable<OpenAQResult> {
			return this.http.get<OpenAQResult>(this.baseUri + 'v2/manufacturers', {});
		}

		/**
		 * Measurements Get
		 * Get v2/measurements
		 * @param {number} limit Change the number of results returned.
		 *     Minimum: 0    Maximum: 100000
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {number} parameter_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} radius Minimum: 0
		 *     Maximum: 100000
		 * @param {string} country_id 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. /US)
		 *         
		 *     Min length: 2    Max length: 2
		 * @param {Array<string>} country 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. ?country=US or ?country=US&country=MX)
		 *         
		 * @param {Array<string>} city 
		 *         Limit results by a certain city or cities.
		 *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
		 *         
		 * @param {number} location_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} project Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} value_from Type: double
		 * @param {number} value_to Type: double
		 * @return {any} Successful Response
		 */
		Measurements_get_v2_measurements_get(format: string | null | undefined, date_from: Date | null | undefined, date_to: Date | null | undefined, limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, has_geo: boolean | null | undefined, parameter_id: number | null | undefined, parameter: Array<string> | null | undefined, unit: Array<string> | null | undefined, coordinates: string | null | undefined, radius: number | null | undefined, country_id: string | null | undefined, country: Array<string> | null | undefined, city: Array<string> | null | undefined, location_id: number | null | undefined, location: Array<string> | null | undefined, order_by: MeasOrder | null | undefined, isMobile: boolean | null | undefined, isAnalysis: boolean | null | undefined, project: number | null | undefined, entity: EntityTypes | null | undefined, sensorType: SensorTypes | null | undefined, value_from: number | null | undefined, value_to: number | null | undefined, include_fields: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/measurements?format=' + (format == null ? '' : encodeURIComponent(format)) + '&date_from=' + date_from + '&date_to=' + date_to + '&limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&has_geo=' + has_geo + '&parameter_id=' + parameter_id + '&' + parameter?.map(z => `parameter=${encodeURIComponent(z)}`).join('&') + '&' + unit?.map(z => `unit=${encodeURIComponent(z)}`).join('&') + '&coordinates=' + (coordinates == null ? '' : encodeURIComponent(coordinates)) + '&radius=' + radius + '&country_id=' + (country_id == null ? '' : encodeURIComponent(country_id)) + '&' + country?.map(z => `country=${encodeURIComponent(z)}`).join('&') + '&' + city?.map(z => `city=${encodeURIComponent(z)}`).join('&') + '&location_id=' + location_id + '&' + location?.map(z => `location=${encodeURIComponent(z)}`).join('&') + '&order_by=' + order_by + '&isMobile=' + isMobile + '&isAnalysis=' + isAnalysis + '&project=' + project + '&entity=' + entity + '&sensorType=' + sensorType + '&value_from=' + value_from + '&value_to=' + value_to + '&include_fields=' + (include_fields == null ? '' : encodeURIComponent(include_fields)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Model Get
		 * Get v2/models
		 * @return {OpenAQResult} Successful Response
		 */
		Model_get_v2_models_get(): Observable<OpenAQResult> {
			return this.http.get<OpenAQResult>(this.baseUri + 'v2/models', {});
		}

		/**
		 * Parameters Get
		 * Get v2/parameters
		 * @param {number} limit Change the number of results returned.
		 *     Minimum: 0    Maximum: 100000
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Define sort order.
		 * @return {OpenAQParametersResult} Successful Response
		 */
		Parameters_get_v2_parameters_get(limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, sourceName: Array<string> | null | undefined, sourceId: Array<number> | null | undefined, sourceSlug: Array<string> | null | undefined, order_by: string | null | undefined): Observable<OpenAQParametersResult> {
			return this.http.get<OpenAQParametersResult>(this.baseUri + 'v2/parameters?limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&' + sourceName?.map(z => `sourceName=${encodeURIComponent(z)}`).join('&') + '&' + sourceId?.map(z => `sourceId=${z}`).join('&') + '&' + sourceSlug?.map(z => `sourceSlug=${encodeURIComponent(z)}`).join('&') + '&order_by=' + (order_by == null ? '' : encodeURIComponent(order_by)), {});
		}

		/**
		 * Projects Get
		 * Get v2/projects
		 * @param {string} country_id 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. /US)
		 *         
		 *     Min length: 2    Max length: 2
		 * @param {Array<string>} country 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. ?country=US or ?country=US&country=MX)
		 *         
		 * @param {number} limit Change the number of results returned.
		 *     Minimum: 0    Maximum: 100000
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Define sort order.
		 * @param {number} parameter_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} project_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {OpenAQProjectsResult} Successful Response
		 */
		Projects_get_v2_projects_get(country_id: string | null | undefined, country: Array<string> | null | undefined, limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, parameter_id: number | null | undefined, parameter: Array<string> | null | undefined, unit: Array<string> | null | undefined, project_id: number | null | undefined, project: Array<string> | null | undefined, order_by: ProjectsOrder | null | undefined, isMobile: boolean | null | undefined, isAnalysis: boolean | null | undefined, entity: string | null | undefined, sensorType: string | null | undefined, sourceName: Array<string> | null | undefined): Observable<OpenAQProjectsResult> {
			return this.http.get<OpenAQProjectsResult>(this.baseUri + 'v2/projects?country_id=' + (country_id == null ? '' : encodeURIComponent(country_id)) + '&' + country?.map(z => `country=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&parameter_id=' + parameter_id + '&' + parameter?.map(z => `parameter=${encodeURIComponent(z)}`).join('&') + '&' + unit?.map(z => `unit=${encodeURIComponent(z)}`).join('&') + '&project_id=' + project_id + '&' + project?.map(z => `project=${encodeURIComponent(z)}`).join('&') + '&order_by=' + order_by + '&isMobile=' + isMobile + '&isAnalysis=' + isAnalysis + '&entity=' + (entity == null ? '' : encodeURIComponent(entity)) + '&sensorType=' + (sensorType == null ? '' : encodeURIComponent(sensorType)) + '&' + sourceName?.map(z => `sourceName=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Projects Get
		 * Get v2/projects/{project_id}
		 * @param {number} project_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} country_id 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. /US)
		 *         
		 *     Min length: 2    Max length: 2
		 * @param {Array<string>} country 
		 *         Limit results by a certain country using two letter country code.
		 *         (ex. ?country=US or ?country=US&country=MX)
		 *         
		 * @param {number} limit Change the number of results returned.
		 *     Minimum: 0    Maximum: 100000
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Define sort order.
		 * @param {number} parameter_id Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {OpenAQProjectsResult} Successful Response
		 */
		Projects_get_v2_projects__project_id__get(project_id: number, country_id: string | null | undefined, country: Array<string> | null | undefined, limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, parameter_id: number | null | undefined, parameter: Array<string> | null | undefined, unit: Array<string> | null | undefined, project: Array<string> | null | undefined, order_by: ProjectsOrder | null | undefined, isMobile: boolean | null | undefined, isAnalysis: boolean | null | undefined, entity: string | null | undefined, sensorType: string | null | undefined, sourceName: Array<string> | null | undefined): Observable<OpenAQProjectsResult> {
			return this.http.get<OpenAQProjectsResult>(this.baseUri + 'v2/projects/' + project_id + '?country_id=' + (country_id == null ? '' : encodeURIComponent(country_id)) + '&' + country?.map(z => `country=${encodeURIComponent(z)}`).join('&') + '&limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&parameter_id=' + parameter_id + '&' + parameter?.map(z => `parameter=${encodeURIComponent(z)}`).join('&') + '&' + unit?.map(z => `unit=${encodeURIComponent(z)}`).join('&') + '&' + project?.map(z => `project=${encodeURIComponent(z)}`).join('&') + '&order_by=' + order_by + '&isMobile=' + isMobile + '&isAnalysis=' + isAnalysis + '&entity=' + (entity == null ? '' : encodeURIComponent(entity)) + '&sensorType=' + (sensorType == null ? '' : encodeURIComponent(sensorType)) + '&' + sourceName?.map(z => `sourceName=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Sources Get
		 * Get v2/sources
		 * @param {number} limit Change the number of results returned.
		 *     Minimum: 0    Maximum: 100000
		 * @param {number} page Paginate through results.
		 *     Minimum: 0    Maximum: 6000
		 * @param {number} offset Minimum: 0
		 *     Maximum: 10000
		 * @param {Sort} sort Define sort order.
		 * @return {OpenAQResult} Successful Response
		 */
		Sources_get_v2_sources_get(limit: number | null | undefined, page: number | null | undefined, offset: number | null | undefined, sort: Sort | null | undefined, sourceName: Array<string> | null | undefined, sourceId: Array<number> | null | undefined, sourceSlug: Array<string> | null | undefined, order_by: SourcesOrder | null | undefined): Observable<OpenAQResult> {
			return this.http.get<OpenAQResult>(this.baseUri + 'v2/sources?limit=' + limit + '&page=' + page + '&offset=' + offset + '&sort=' + sort + '&' + sourceName?.map(z => `sourceName=${encodeURIComponent(z)}`).join('&') + '&' + sourceId?.map(z => `sourceId=${z}`).join('&') + '&' + sourceSlug?.map(z => `sourceSlug=${encodeURIComponent(z)}`).join('&') + '&order_by=' + order_by, {});
		}

		/**
		 * Readme Get
		 * Get v2/sources/readme/{slug}
		 * @return {any} Successful Response
		 */
		Readme_get_v2_sources_readme__slug__get(slug: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/sources/readme/' + (slug == null ? '' : encodeURIComponent(slug)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Summary Get
		 * Get v2/summary
		 * @return {OpenAQResult} Successful Response
		 */
		Summary_get_v2_summary_get(): Observable<OpenAQResult> {
			return this.http.get<OpenAQResult>(this.baseUri + 'v2/summary', {});
		}
	}

}

