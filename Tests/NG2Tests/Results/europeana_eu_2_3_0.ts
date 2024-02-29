import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AtomLink {
		href?: string | null;
	}
	export interface AtomLinkFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateAtomLinkFormGroup() {
		return new FormGroup<AtomLinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Channel {
		atomLink?: AtomLink;
		image?: ChannelImage;
		items?: Array<Item>;
		itemsPerPage?: Statistic;
		query?: Query;
		startIndex?: Statistic;
		totalResults?: Statistic;
	}
	export interface ChannelFormProperties {
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
		});

	}

	export interface Item {
		dcCreator?: string | null;
		dcTermsHasPart?: Array<string>;
		dcTermsIsPartOf?: Array<string>;
		description?: string | null;
		enclosure?: Enclosure;
		enrichmentAgentLabel?: Array<string>;
		enrichmentAgentTerm?: Array<string>;
		enrichmentConceptLabel?: Array<string>;
		enrichmentConceptTerm?: Array<string>;
		enrichmentPeriodBegin?: string | null;
		enrichmentPeriodEnd?: string | null;
		enrichmentPeriodLabel?: Array<string>;
		enrichmentPeriodTerm?: Array<string>;
		enrichmentPlaceLabel?: Array<string>;

		/** Type: float */
		enrichmentPlaceLatitude?: number | null;

		/** Type: float */
		enrichmentPlaceLongitude?: number | null;
		enrichmentPlaceTerm?: Array<string>;
		europeanaDataProvider?: string | null;
		europeanaLanguage?: string | null;
		europeanaProvider?: string | null;
		europeanaRights?: Array<string>;
		europeanaType?: string | null;
		europeanaYear?: string | null;
		guid?: string | null;
		link?: string | null;
		title?: string | null;
	}
	export interface ItemFormProperties {
		dcCreator: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		enrichmentPeriodBegin: FormControl<string | null | undefined>,
		enrichmentPeriodEnd: FormControl<string | null | undefined>,

		/** Type: float */
		enrichmentPlaceLatitude: FormControl<number | null | undefined>,

		/** Type: float */
		enrichmentPlaceLongitude: FormControl<number | null | undefined>,
		europeanaDataProvider: FormControl<string | null | undefined>,
		europeanaLanguage: FormControl<string | null | undefined>,
		europeanaProvider: FormControl<string | null | undefined>,
		europeanaType: FormControl<string | null | undefined>,
		europeanaYear: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateItemFormGroup() {
		return new FormGroup<ItemFormProperties>({
			dcCreator: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			enrichmentPeriodBegin: new FormControl<string | null | undefined>(undefined),
			enrichmentPeriodEnd: new FormControl<string | null | undefined>(undefined),
			enrichmentPlaceLatitude: new FormControl<number | null | undefined>(undefined),
			enrichmentPlaceLongitude: new FormControl<number | null | undefined>(undefined),
			europeanaDataProvider: new FormControl<string | null | undefined>(undefined),
			europeanaLanguage: new FormControl<string | null | undefined>(undefined),
			europeanaProvider: new FormControl<string | null | undefined>(undefined),
			europeanaType: new FormControl<string | null | undefined>(undefined),
			europeanaYear: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChannelImage {
	}
	export interface ChannelImageFormProperties {
	}
	export function CreateChannelImageFormGroup() {
		return new FormGroup<ChannelImageFormProperties>({
		});

	}

	export interface Enclosure {
		url?: string | null;
	}
	export interface EnclosureFormProperties {
		url: FormControl<string | null | undefined>,
	}
	export function CreateEnclosureFormGroup() {
		return new FormGroup<EnclosureFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModelAndView {
		empty?: boolean | null;
		model?: string | null;
		modelMap?: {[id: string]: any };
		reference?: boolean | null;
		view?: View;
		viewName?: string | null;
	}
	export interface ModelAndViewFormProperties {
		empty: FormControl<boolean | null | undefined>,
		model: FormControl<string | null | undefined>,
		modelMap: FormControl<{[id: string]: any } | null | undefined>,
		reference: FormControl<boolean | null | undefined>,
		viewName: FormControl<string | null | undefined>,
	}
	export function CreateModelAndViewFormGroup() {
		return new FormGroup<ModelAndViewFormProperties>({
			empty: new FormControl<boolean | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			modelMap: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			reference: new FormControl<boolean | null | undefined>(undefined),
			viewName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface View {
		contentType?: string | null;
	}
	export interface ViewFormProperties {
		contentType: FormControl<string | null | undefined>,
	}
	export function CreateViewFormGroup() {
		return new FormGroup<ViewFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModelMap {
	}
	export interface ModelMapFormProperties {
	}
	export function CreateModelMapFormGroup() {
		return new FormGroup<ModelMapFormProperties>({
		});

	}

	export interface Query {
		searchTerms?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		startPage?: number | null;
	}
	export interface QueryFormProperties {
		searchTerms: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		startPage: FormControl<number | null | undefined>,
	}
	export function CreateQueryFormGroup() {
		return new FormGroup<QueryFormProperties>({
			searchTerms: new FormControl<string | null | undefined>(undefined),
			startPage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RssResponse {
		channel?: Channel;
	}
	export interface RssResponseFormProperties {
	}
	export function CreateRssResponseFormGroup() {
		return new FormGroup<RssResponseFormProperties>({
		});

	}

	export interface Statistic {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		value?: string | null;
	}
	export interface StatisticFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateStatisticFormGroup() {
		return new FormGroup<StatisticFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * get information about a specific dataset
		 * Get v2/dataset/{id}.json
		 * @param {string} id id
		 * @param {string} wskey wskey
		 * @param {string} callback callback
		 * @return {ModelAndView} OK
		 */
		GetDataset(id: string, wskey: string | null | undefined, callback: string | null | undefined): Observable<ModelAndView> {
			return this.http.get<ModelAndView>(this.baseUri + 'v2/dataset/' + (id == null ? '' : encodeURIComponent(id)) + '.json&wskey=' + (wskey == null ? '' : encodeURIComponent(wskey)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), {});
		}

		/**
		 * get the list of Europeana datasets
		 * Get v2/datasets.json
		 * @param {string} wskey wskey
		 * @param {string} callback callback
		 * @param {string} edmDatasetName edmDatasetName
		 * @param {string} countryCode countryCode
		 * @param {string} status status
		 * @param {string} offset offset
		 * @param {string} pagesize pagesize
		 * @return {ModelAndView} OK
		 */
		ListDatasets(wskey: string | null | undefined, callback: string | null | undefined, edmDatasetName: string | null | undefined, countryCode: string | null | undefined, status: string | null | undefined, offset: string | null | undefined, pagesize: string | null | undefined): Observable<ModelAndView> {
			return this.http.get<ModelAndView>(this.baseUri + 'v2/datasets.json?wskey=' + (wskey == null ? '' : encodeURIComponent(wskey)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&edmDatasetName=' + (edmDatasetName == null ? '' : encodeURIComponent(edmDatasetName)) + '&countryCode=' + (countryCode == null ? '' : encodeURIComponent(countryCode)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&pagesize=' + (pagesize == null ? '' : encodeURIComponent(pagesize)), {});
		}

		/**
		 * basic search function following the OpenSearch specification
		 * Get v2/opensearch.rss
		 * @param {string} searchTerms searchTerms
		 * @param {number} startIndex startIndex
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} count count
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {void} OK
		 */
		OpenSearch(searchTerms: string, startIndex: number | null | undefined, count: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/opensearch.rss?searchTerms=' + (searchTerms == null ? '' : encodeURIComponent(searchTerms)) + '&startIndex=' + startIndex + '&count=' + count, { observe: 'response', responseType: 'text' });
		}

		/**
		 * get information about a specific Europeana provider
		 * Get v2/provider/{id}.json
		 * @param {string} id id
		 * @param {string} wskey wskey
		 * @param {string} callback callback
		 * @return {ModelAndView} OK
		 */
		GetProvider(id: string, wskey: string | null | undefined, callback: string | null | undefined): Observable<ModelAndView> {
			return this.http.get<ModelAndView>(this.baseUri + 'v2/provider/' + (id == null ? '' : encodeURIComponent(id)) + '.json&wskey=' + (wskey == null ? '' : encodeURIComponent(wskey)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), {});
		}

		/**
		 * get the list of datasets provided by a specific provider
		 * Get v2/provider/{id}/datasets.json
		 * @param {string} id id
		 * @param {string} wskey wskey
		 * @param {string} callback callback
		 * @return {ModelAndView} OK
		 */
		ListProviderDatasets(id: string, wskey: string | null | undefined, callback: string | null | undefined): Observable<ModelAndView> {
			return this.http.get<ModelAndView>(this.baseUri + 'v2/provider/' + (id == null ? '' : encodeURIComponent(id)) + '/datasets.json&wskey=' + (wskey == null ? '' : encodeURIComponent(wskey)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), {});
		}

		/**
		 * get the list of Europeana data providers
		 * Get v2/providers.json
		 * @param {string} wskey wskey
		 * @param {string} callback callback
		 * @param {string} countryCode countryCode
		 * @param {string} offset offset
		 * @param {string} pagesize pagesize
		 * @return {ModelAndView} OK
		 */
		ListProviders(wskey: string | null | undefined, callback: string | null | undefined, countryCode: string | null | undefined, offset: string | null | undefined, pagesize: string | null | undefined): Observable<ModelAndView> {
			return this.http.get<ModelAndView>(this.baseUri + 'v2/providers.json?wskey=' + (wskey == null ? '' : encodeURIComponent(wskey)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&countryCode=' + (countryCode == null ? '' : encodeURIComponent(countryCode)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&pagesize=' + (pagesize == null ? '' : encodeURIComponent(pagesize)), {});
		}

		/**
		 * get a single record in JSON format
		 * Get v2/record/{collectionId}/{recordId}.json
		 * @param {string} collectionId collectionId
		 * @param {string} recordId recordId
		 * @param {string} profile profile
		 * @param {string} wskey wskey
		 * @param {string} callback callback
		 * @param {number} hierarchytimeout hierarchytimeout
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ModelAndView} OK
		 */
		GetSingleRecordJson(collectionId: string, recordId: string, profile: string | null | undefined, wskey: string, callback: string | null | undefined, hierarchytimeout: number | null | undefined): Observable<ModelAndView> {
			return this.http.get<ModelAndView>(this.baseUri + 'v2/record/' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '/' + (recordId == null ? '' : encodeURIComponent(recordId)) + '.json&profile=' + (profile == null ? '' : encodeURIComponent(profile)) + '&wskey=' + (wskey == null ? '' : encodeURIComponent(wskey)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&hierarchytimeout=' + hierarchytimeout, {});
		}

		/**
		 * get single record in JSON LD format
		 * Get v2/record/{collectionId}/{recordId}.jsonld
		 * @param {string} collectionId collectionId
		 * @param {string} recordId recordId
		 * @param {string} wskey wskey
		 * @param {string} format format
		 * @param {string} callback callback
		 * @return {ModelAndView} OK
		 */
		GetSingleRecordJsonLD(collectionId: string, recordId: string, wskey: string, format: string | null | undefined, callback: string | null | undefined): Observable<ModelAndView> {
			return this.http.get<ModelAndView>(this.baseUri + 'v2/record/' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '/' + (recordId == null ? '' : encodeURIComponent(recordId)) + '.jsonld&wskey=' + (wskey == null ? '' : encodeURIComponent(wskey)) + '&format=' + (format == null ? '' : encodeURIComponent(format)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), {});
		}

		/**
		 * get single record in RDF format)
		 * Get v2/record/{collectionId}/{recordId}.rdf
		 * @param {string} collectionId collectionId
		 * @param {string} recordId recordId
		 * @param {string} wskey wskey
		 * @return {void} OK
		 */
		GetSingleRecordRDF(collectionId: string, recordId: string, wskey: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/record/' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '/' + (recordId == null ? '' : encodeURIComponent(recordId)) + '.rdf&wskey=' + (wskey == null ? '' : encodeURIComponent(wskey)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * search for records
		 * Get v2/search.json
		 * @param {string} wskey wskey
		 * @param {string} query query
		 * @param {Array<string>} qf qf
		 * @param {Array<string>} reusability reusability
		 * @param {string} profile profile
		 * @param {number} start start
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} rows rows
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Array<string>} facet facet
		 * @param {string} sort sort
		 * @param {Array<string>} colourpalette colourpalette
		 * @param {boolean} thumbnail thumbnail
		 * @param {boolean} media media
		 * @param {boolean} text_fulltext text_fulltext
		 * @param {boolean} landingpage landingpage
		 * @param {string} cursor cursor
		 * @param {string} callback callback
		 * @return {ModelAndView} OK
		 */
		SearchRecords(wskey: string, query: string | null | undefined, qf: Array<string> | null | undefined, reusability: Array<string> | null | undefined, profile: string | null | undefined, start: number | null | undefined, rows: number | null | undefined, facet: Array<string> | null | undefined, sort: string | null | undefined, colourpalette: Array<string> | null | undefined, thumbnail: boolean | null | undefined, media: boolean | null | undefined, text_fulltext: boolean | null | undefined, landingpage: boolean | null | undefined, cursor: string | null | undefined, callback: string | null | undefined): Observable<ModelAndView> {
			return this.http.get<ModelAndView>(this.baseUri + 'v2/search.json?wskey=' + (wskey == null ? '' : encodeURIComponent(wskey)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&' + qf?.map(z => `qf=${encodeURIComponent(z)}`).join('&') + '&' + reusability?.map(z => `reusability=${encodeURIComponent(z)}`).join('&') + '&profile=' + (profile == null ? '' : encodeURIComponent(profile)) + '&start=' + start + '&rows=' + rows + '&' + facet?.map(z => `facet=${encodeURIComponent(z)}`).join('&') + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&' + colourpalette?.map(z => `colourpalette=${encodeURIComponent(z)}`).join('&') + '&thumbnail=' + thumbnail + '&media=' + media + '&text_fulltext=' + text_fulltext + '&landingpage=' + landingpage + '&cursor=' + (cursor == null ? '' : encodeURIComponent(cursor)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), {});
		}

		/**
		 * Google Fieldtrip formatted RSS of selected collections
		 * Get v2/search.rss
		 * @param {string} query query
		 * @param {number} offset offset
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} limit limit
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} profile profile
		 * @param {string} language language
		 * @return {void} OK
		 */
		FieldTrip(query: string, offset: number | null | undefined, limit: number | null | undefined, profile: string | null | undefined, language: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/search.rss?query=' + (query == null ? '' : encodeURIComponent(query)) + '&offset=' + offset + '&limit=' + limit + '&profile=' + (profile == null ? '' : encodeURIComponent(profile)) + '&language=' + (language == null ? '' : encodeURIComponent(language)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * get autocompletion recommendations for search queries
		 * Get v2/suggestions.json
		 * @param {string} query query
		 * @param {number} rows rows
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} phrases phrases
		 * @param {string} callback callback
		 * @return {ModelAndView} OK
		 */
		Suggestions(query: string, rows: number | null | undefined, phrases: boolean | null | undefined, callback: string | null | undefined): Observable<ModelAndView> {
			return this.http.get<ModelAndView>(this.baseUri + 'v2/suggestions.json?query=' + (query == null ? '' : encodeURIComponent(query)) + '&rows=' + rows + '&phrases=' + phrases + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), {});
		}

		/**
		 * translate a term to different languages
		 * Get v2/translateQuery.json
		 * @param {string} term term
		 * @param {Array<string>} languageCodes languageCodes
		 * @param {string} wskey wskey
		 * @param {string} profile profile
		 * @param {string} callback callback
		 * @return {ModelAndView} OK
		 */
		TranslateQueryUsingGET(term: string, languageCodes: Array<string>, wskey: string, profile: string | null | undefined, callback: string | null | undefined): Observable<ModelAndView> {
			return this.http.get<ModelAndView>(this.baseUri + 'v2/translateQuery.json?term=' + (term == null ? '' : encodeURIComponent(term)) + '&' + languageCodes.map(z => `languageCodes=${encodeURIComponent(z)}`).join('&') + '&wskey=' + (wskey == null ? '' : encodeURIComponent(wskey)) + '&profile=' + (profile == null ? '' : encodeURIComponent(profile)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), {});
		}
	}

}

