import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AutocompleteSearchSuggestions {

		/** List of suggested facets and terms. */
		AutocompleteSearchSuggestionsSearches?: Array<AutocompleteSearchSuggestionsSearches>;
	}
	export interface AutocompleteSearchSuggestionsFormProperties {
	}
	export function CreateAutocompleteSearchSuggestionsFormGroup() {
		return new FormGroup<AutocompleteSearchSuggestionsFormProperties>({
		});

	}

	export interface AutocompleteSearchSuggestionsSearches {

		/** List of facets in which the term can be searched. */
		AutocompleteSearchSuggestionsSearchesAttributes?: Array<AutocompleteSearchSuggestionsSearchesAttributes>;

		/** Number of times the term was searched. */
		count?: number | null;

		/** Search term. */
		term?: string | null;
	}
	export interface AutocompleteSearchSuggestionsSearchesFormProperties {

		/** Number of times the term was searched. */
		count: FormControl<number | null | undefined>,

		/** Search term. */
		term: FormControl<string | null | undefined>,
	}
	export function CreateAutocompleteSearchSuggestionsSearchesFormGroup() {
		return new FormGroup<AutocompleteSearchSuggestionsSearchesFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			term: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AutocompleteSearchSuggestionsSearchesAttributes {

		/** Facet key. */
		key?: string | null;

		/** Human-readable format of the facet key. */
		labelKey?: string | null;

		/** Human-readable format of the facet value. */
		labelValue?: string | null;

		/** Facet value. */
		value?: string | null;
	}
	export interface AutocompleteSearchSuggestionsSearchesAttributesFormProperties {

		/** Facet key. */
		key: FormControl<string | null | undefined>,

		/** Human-readable format of the facet key. */
		labelKey: FormControl<string | null | undefined>,

		/** Human-readable format of the facet value. */
		labelValue: FormControl<string | null | undefined>,

		/** Facet value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAutocompleteSearchSuggestionsSearchesAttributesFormGroup() {
		return new FormGroup<AutocompleteSearchSuggestionsSearchesAttributesFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			labelKey: new FormControl<string | null | undefined>(undefined),
			labelValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Banners {
		BannersBanners?: Array<BannersBanners>;
	}
	export interface BannersFormProperties {
	}
	export function CreateBannersFormGroup() {
		return new FormGroup<BannersFormProperties>({
		});

	}

	export interface BannersBanners {

		/** Banner area. */
		area?: string | null;

		/** Banner HTML. */
		html?: string | null;

		/** Banner id. */
		id?: string | null;

		/** Banner name. */
		name?: string | null;
	}
	export interface BannersBannersFormProperties {

		/** Banner area. */
		area: FormControl<string | null | undefined>,

		/** Banner HTML. */
		html: FormControl<string | null | undefined>,

		/** Banner id. */
		id: FormControl<string | null | undefined>,

		/** Banner name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBannersBannersFormGroup() {
		return new FormGroup<BannersBannersFormProperties>({
			area: new FormControl<string | null | undefined>(undefined),
			html: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Correction {

		/** Object that indicates if the term was misspelled and suggests a possible correction. */
		correction?: CorrectionCorrection;
	}
	export interface CorrectionFormProperties {
	}
	export function CreateCorrectionFormGroup() {
		return new FormGroup<CorrectionFormProperties>({
		});

	}

	export interface CorrectionCorrection {

		/** Whether the API was able to suggest a correction (`true`) or not (`false`). */
		correction?: boolean | null;

		/** The same as `text`, but it highlights the corrected word. Useful when there is more than one word. */
		highlighted?: string | null;

		/** Whether the term was misspelled (`true`) or not (`false`). */
		misspelled?: boolean | null;

		/** The corrected term. If the API was not able to correct the term, it will show the original search term. */
		text?: string | null;
	}
	export interface CorrectionCorrectionFormProperties {

		/** Whether the API was able to suggest a correction (`true`) or not (`false`). */
		correction: FormControl<boolean | null | undefined>,

		/** The same as `text`, but it highlights the corrected word. Useful when there is more than one word. */
		highlighted: FormControl<string | null | undefined>,

		/** Whether the term was misspelled (`true`) or not (`false`). */
		misspelled: FormControl<boolean | null | undefined>,

		/** The corrected term. If the API was not able to correct the term, it will show the original search term. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateCorrectionCorrectionFormGroup() {
		return new FormGroup<CorrectionCorrectionFormProperties>({
			correction: new FormControl<boolean | null | undefined>(undefined),
			highlighted: new FormControl<string | null | undefined>(undefined),
			misspelled: new FormControl<boolean | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {

		/**
		 * Error message
		 * Required
		 */
		message: string;

		/**
		 * Error stack trace
		 * Required
		 */
		stack: string;
	}
	export interface ErrorFormProperties {

		/**
		 * Error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/**
		 * Error stack trace
		 * Required
		 */
		stack: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stack: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Facets {

		/** Generated breadcrumb for the given query. */
		FacetsBreadcrumb?: Array<FacetsBreadcrumb>;

		/** List of facets */
		FacetsFacets?: Array<FacetsFacets>;

		/** Term and facets used in the query */
		queryArgs?: FacetsQueryArgs;

		/** Indicates whether there was sampling in the aggregation of facets or not. In search results that have many products, only the first 30000 will be aggregated to avoid performance issues. */
		sampling?: boolean | null;
	}
	export interface FacetsFormProperties {

		/** Indicates whether there was sampling in the aggregation of facets or not. In search results that have many products, only the first 30000 will be aggregated to avoid performance issues. */
		sampling: FormControl<boolean | null | undefined>,
	}
	export function CreateFacetsFormGroup() {
		return new FormGroup<FacetsFormProperties>({
			sampling: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface FacetsBreadcrumb {

		/** Query link. */
		href?: string | null;

		/** Human-readable format of the facet key. */
		name?: string | null;
	}
	export interface FacetsBreadcrumbFormProperties {

		/** Query link. */
		href: FormControl<string | null | undefined>,

		/** Human-readable format of the facet key. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFacetsBreadcrumbFormGroup() {
		return new FormGroup<FacetsBreadcrumbFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FacetsFacets {

		/** Whether the client-side should hide the facet (`true`) or not (`false`) */
		hidden?: boolean | null;

		/** Human-readable format of the facet key. */
		name?: string | null;

		/** Number of possible values. */
		quantity?: number | null;

		/**
		 * Facet type
		 * - `TEXT` - The value is a simple text.
		 * - `PRICERANGE` - The value contains the property `range` representing the minimum and the maximum price for the query.
		 */
		type?: FacetsFacetsType | null;

		/** Possible values. */
		FacetsFacetsValues?: Array<FacetsFacetsValues>;
	}
	export interface FacetsFacetsFormProperties {

		/** Whether the client-side should hide the facet (`true`) or not (`false`) */
		hidden: FormControl<boolean | null | undefined>,

		/** Human-readable format of the facet key. */
		name: FormControl<string | null | undefined>,

		/** Number of possible values. */
		quantity: FormControl<number | null | undefined>,

		/**
		 * Facet type
		 * - `TEXT` - The value is a simple text.
		 * - `PRICERANGE` - The value contains the property `range` representing the minimum and the maximum price for the query.
		 */
		type: FormControl<FacetsFacetsType | null | undefined>,
	}
	export function CreateFacetsFacetsFormGroup() {
		return new FormGroup<FacetsFacetsFormProperties>({
			hidden: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<FacetsFacetsType | null | undefined>(undefined),
		});

	}

	export enum FacetsFacetsType { TEXT = 'TEXT', PRICERANGE = 'PRICERANGE' }

	export interface FacetsFacetsValues {

		/** Value id */
		id?: string | null;

		/** Facet key. */
		key?: string | null;

		/** Human-readable format of the facet value */
		name?: string | null;

		/** Number of resulting products. */
		quantity?: number | null;

		/** Whether the value is selected (`true`) or not (`false`). */
		selected?: boolean | null;

		/** Facet value. */
		value?: string | null;
	}
	export interface FacetsFacetsValuesFormProperties {

		/** Value id */
		id: FormControl<string | null | undefined>,

		/** Facet key. */
		key: FormControl<string | null | undefined>,

		/** Human-readable format of the facet value */
		name: FormControl<string | null | undefined>,

		/** Number of resulting products. */
		quantity: FormControl<number | null | undefined>,

		/** Whether the value is selected (`true`) or not (`false`). */
		selected: FormControl<boolean | null | undefined>,

		/** Facet value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFacetsFacetsValuesFormGroup() {
		return new FormGroup<FacetsFacetsValuesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			selected: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FacetsQueryArgs {

		/** Search term used in the query. */
		query?: string | null;

		/** Facets used in the query. */
		FacetsQueryArgsSelectedFacets?: Array<FacetsQueryArgsSelectedFacets>;
	}
	export interface FacetsQueryArgsFormProperties {

		/** Search term used in the query. */
		query: FormControl<string | null | undefined>,
	}
	export function CreateFacetsQueryArgsFormGroup() {
		return new FormGroup<FacetsQueryArgsFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FacetsQueryArgsSelectedFacets {

		/** facet key. */
		key?: string | null;

		/** facet value. */
		value?: string | null;
	}
	export interface FacetsQueryArgsSelectedFacetsFormProperties {

		/** facet key. */
		key: FormControl<string | null | undefined>,

		/** facet value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFacetsQueryArgsSelectedFacetsFormGroup() {
		return new FormGroup<FacetsQueryArgsSelectedFacetsFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductSearch {

		/** Object with information of misspelled terms. */
		correction?: ProductSearchCorrection;

		/** Indicates how the search engine corrected the misspelled word by using fuzzy logic. It can be a number representing the max number of misspelled letters, or the string `auto` suggesting that the search-engine should set this value by itself. */
		fuzzy?: string | null;

		/**
		 * Indicates how the search-engine dealt with the fullText when there is more than one word.
		 * * `and` - It means that the products contains all the words in the query.
		 * * `or` - It means that the results will contain at least one word from the original search query. If `and` was not possible, `or` will be the fallback.
		 */
		operator?: ProductSearchOperator | null;

		/** List of products */
		products?: Array<string>;

		/** Total number of products. */
		recordsFiltered?: number | null;

		/** Whether the list of products was translated by the IS (`true`) or not (`false`). */
		translated?: boolean | null;
	}
	export interface ProductSearchFormProperties {

		/** Indicates how the search engine corrected the misspelled word by using fuzzy logic. It can be a number representing the max number of misspelled letters, or the string `auto` suggesting that the search-engine should set this value by itself. */
		fuzzy: FormControl<string | null | undefined>,

		/**
		 * Indicates how the search-engine dealt with the fullText when there is more than one word.
		 * * `and` - It means that the products contains all the words in the query.
		 * * `or` - It means that the results will contain at least one word from the original search query. If `and` was not possible, `or` will be the fallback.
		 */
		operator: FormControl<ProductSearchOperator | null | undefined>,

		/** Total number of products. */
		recordsFiltered: FormControl<number | null | undefined>,

		/** Whether the list of products was translated by the IS (`true`) or not (`false`). */
		translated: FormControl<boolean | null | undefined>,
	}
	export function CreateProductSearchFormGroup() {
		return new FormGroup<ProductSearchFormProperties>({
			fuzzy: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<ProductSearchOperator | null | undefined>(undefined),
			recordsFiltered: new FormControl<number | null | undefined>(undefined),
			translated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ProductSearchCorrection {

		/** Whether the term is misspelled (`true`) or not (`false`). */
		misspelled?: boolean | null;
	}
	export interface ProductSearchCorrectionFormProperties {

		/** Whether the term is misspelled (`true`) or not (`false`). */
		misspelled: FormControl<boolean | null | undefined>,
	}
	export function CreateProductSearchCorrectionFormGroup() {
		return new FormGroup<ProductSearchCorrectionFormProperties>({
			misspelled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ProductSearchOperator { and = 'and', or = 'or' }

	export interface SearchSuggestions {

		/** List of suggested terms. */
		SearchSuggestionsSearches?: Array<SearchSuggestionsSearches>;
	}
	export interface SearchSuggestionsFormProperties {
	}
	export function CreateSearchSuggestionsFormGroup() {
		return new FormGroup<SearchSuggestionsFormProperties>({
		});

	}

	export interface SearchSuggestionsSearches {

		/** Number of times the term was searched. */
		count?: number | null;

		/** Search term. */
		term?: string | null;
	}
	export interface SearchSuggestionsSearchesFormProperties {

		/** Number of times the term was searched. */
		count: FormControl<number | null | undefined>,

		/** Search term. */
		term: FormControl<string | null | undefined>,
	}
	export function CreateSearchSuggestionsSearchesFormGroup() {
		return new FormGroup<SearchSuggestionsSearchesFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			term: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TopSearches {

		/**
		 * A list of the 10 most searched terms.
		 * Minimum items: 10
		 * Maximum items: 10
		 */
		TopSearchesSearches?: Array<TopSearchesSearches>;
	}
	export interface TopSearchesFormProperties {
	}
	export function CreateTopSearchesFormGroup() {
		return new FormGroup<TopSearchesFormProperties>({
		});

	}

	export interface TopSearchesSearches {

		/** Number of times the term was searched. */
		count?: number | null;

		/** Search term. */
		term?: string | null;
	}
	export interface TopSearchesSearchesFormProperties {

		/** Number of times the term was searched. */
		count: FormControl<number | null | undefined>,

		/** Search term. */
		term: FormControl<string | null | undefined>,
	}
	export function CreateTopSearchesSearchesFormGroup() {
		return new FormGroup<TopSearchesSearchesFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			term: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get list of suggested terms and attributes similar to the search term
		 * Lists the suggested terms and attributes similar to the search term.
		 * Get autocomplete_suggestions
		 * @param {string} query Search term. It can contain any character.
		 * @param {string} locale Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.
		 * @return {AutocompleteSearchSuggestions} OK
		 */
		Autocomplete_suggestionsGetByQueryAndLocale(query: string | null | undefined, locale: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<AutocompleteSearchSuggestions> {
			return this.http.get<AutocompleteSearchSuggestions>(this.baseUri + 'autocomplete_suggestions?query=' + (query == null ? '' : encodeURIComponent(query)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get list of banners registered for query
		 * Lists the banners registered for a given query. Check the [configuring banners documentation](https://help.vtex.com/en/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/4ViKEivLJtJsvpaW0aqIQ5) for a full explanation of the banner feature.
		 * Get banners/{facets}
		 * @param {string} query Search term. It can contain any character.
		 * @param {string} facets # Format
		 * The `facets` parameter follows the format : `/${facetKey1}/${facetValue1}/${facetKey2}/${facetValue2}/.../${facetKeyN}/${facetValueN}`.
		 * The order in which the terms appear is not relevant to the search.
		 * You can also repeat the same `facetKey` several times for different values. For example: `category-1/shoes/color/blue/color/red/color/yellow`
		 * # General filters
		 * The `facets` parameter also allows the following general filters.
		 * | `facetKey`      | Description                                                                                      | Example                                                                  |
		 * | --------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
		 * | `price`         | Filter the search by a price range. The facet value follows the format `${minPrice}:${maxPrice}` | `/color/blue/price/100:500?query=shirt`                                  |
		 * | `category-${n}` | Filter the search by category, where `n` represents the category tree level (1 = department, 2 = category, 3 = subcategory, and so on) | `category-1/clothing/category-2/shirts`                                  |
		 * | `region-id`     | Filter the search by a region id (aka regionalization). The value is the region id               | `/color/blue/region-id/v2.26219C7C3DE42BAAD11CFB92CD0BFE91?query=shirt`. |
		 * @param {string} locale Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.
		 * @return {Banners} OK
		 */
		Banners_facetsGetByQueryAndLocale(query: string | null | undefined, facets: string, locale: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Banners> {
			return this.http.get<Banners>(this.baseUri + 'banners/' + (facets == null ? '' : encodeURIComponent(facets)) + '?query=' + (query == null ? '' : encodeURIComponent(query)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get attempt of correction of a misspelled term
		 * Tries to correct a misspelled term from the search.
		 * Get correction_search
		 * @param {string} query Search term. It can contain any character.
		 * @param {string} locale Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.
		 * @return {Correction} OK
		 */
		Correction_searchGetByQueryAndLocale(query: string | null | undefined, locale: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Correction> {
			return this.http.get<Correction>(this.baseUri + 'correction_search?query=' + (query == null ? '' : encodeURIComponent(query)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get list of the possible facets for a given query
		 * Lists the possible facets for a given query
		 * Get facets/{facets}
		 * @param {string} facets # Format
		 * The `facets` parameter follows the format : `/${facetKey1}/${facetValue1}/${facetKey2}/${facetValue2}/.../${facetKeyN}/${facetValueN}`.
		 * The order in which the terms appear is not relevant to the search.
		 * You can also repeat the same `facetKey` several times for different values. For example: `category-1/shoes/color/blue/color/red/color/yellow`
		 * # General filters
		 * The `facets` parameter also allows the following general filters.
		 * | `facetKey`      | Description                                                                                      | Example                                                                  |
		 * | --------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
		 * | `price`         | Filter the search by a price range. The facet value follows the format `${minPrice}:${maxPrice}` | `/color/blue/price/100:500?query=shirt`                                  |
		 * | `category-${n}` | Filter the search by category, where `n` represents the category tree level (1 = department, 2 = category, 3 = subcategory, and so on) | `category-1/clothing/category-2/shirts`                                  |
		 * | `region-id`     | Filter the search by a region id (aka regionalization). The value is the region id               | `/color/blue/region-id/v2.26219C7C3DE42BAAD11CFB92CD0BFE91?query=shirt`. |
		 * @param {string} query Search term. It can contain any character.
		 * @param {string} locale Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.
		 * @param {boolean} hideUnavailableItems Whether the result should hide unavailable items (`true`), or not (`false`)
		 * @return {Facets} List of facets for the given query.
		 */
		Facets_facetsGetByQueryAndLocaleAndHideUnavailableItems(facets: string, query: string | null | undefined, locale: string | null | undefined, hideUnavailableItems: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<Facets> {
			return this.http.get<Facets>(this.baseUri + 'facets/' + (facets == null ? '' : encodeURIComponent(facets)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&hideUnavailableItems=' + hideUnavailableItems, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get list of products for a query
		 * Lists the products for a given query.
		 * Get product_search/{facets}
		 * @param {string} facets # Format
		 * The `facets` parameter follows the format : `/${facetKey1}/${facetValue1}/${facetKey2}/${facetValue2}/.../${facetKeyN}/${facetValueN}`.
		 * The order in which the terms appear is not relevant to the search.
		 * You can also repeat the same `facetKey` several times for different values. For example: `category-1/shoes/color/blue/color/red/color/yellow`
		 * # General filters
		 * The `facets` parameter also allows the following general filters.
		 * | `facetKey`      | Description                                                                                      | Example                                                                  |
		 * | --------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
		 * | `price`         | Filter the search by a price range. The facet value follows the format `${minPrice}:${maxPrice}` | `/color/blue/price/100:500?query=shirt`                                  |
		 * | `category-${n}` | Filter the search by category, where `n` represents the category tree level (1 = department, 2 = category, 3 = subcategory, and so on) | `category-1/clothing/category-2/shirts`                                  |
		 * | `region-id`     | Filter the search by a region id (aka regionalization). The value is the region id               | `/color/blue/region-id/v2.26219C7C3DE42BAAD11CFB92CD0BFE91?query=shirt`. |
		 * @param {string} query Search term. It can contain any character.
		 * @param {Product_search_facetsGetByQueryAndSimulationBehaviorAndCountAndPageAndSortAndLocaleAndHideUnavailableItemsSimulationBehavior} simulationBehavior Defines the simulation behavior.
		 *  * `default` - Calls the simulation for every single seller.
		 *  * `skip` - Never calls the simulation.
		 *  * `only1P` - Only calls the simulation for first party sellers.
		 * @param {number} count Number of products per page.
		 * @param {number} page Current search page.
		 * @param {Product_search_facetsGetByQueryAndSimulationBehaviorAndCountAndPageAndSortAndLocaleAndHideUnavailableItemsSort} sort Defines the sort type. If null, the products will be sorted by relevance.
		 * @param {string} locale Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.
		 * @param {boolean} hideUnavailableItems Whether the result should hide unavailable items (`true`), or not (`false`)
		 * @return {ProductSearch} List of products for the given query.
		 */
		Product_search_facetsGetByQueryAndSimulationBehaviorAndCountAndPageAndSortAndLocaleAndHideUnavailableItems(facets: string, query: string | null | undefined, simulationBehavior: Product_search_facetsGetByQueryAndSimulationBehaviorAndCountAndPageAndSortAndLocaleAndHideUnavailableItemsSimulationBehavior | null | undefined, count: number | null | undefined, page: number | null | undefined, sort: Product_search_facetsGetByQueryAndSimulationBehaviorAndCountAndPageAndSortAndLocaleAndHideUnavailableItemsSort | null | undefined, locale: string | null | undefined, hideUnavailableItems: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<ProductSearch> {
			return this.http.get<ProductSearch>(this.baseUri + 'product_search/' + (facets == null ? '' : encodeURIComponent(facets)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&simulationBehavior=' + simulationBehavior + '&count=' + count + '&page=' + page + '&sort=' + sort + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&hideUnavailableItems=' + hideUnavailableItems, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get list of suggested terms similar to the search term
		 * Lists suggested terms similar to the search term.
		 * Get search_suggestions
		 * @param {string} query Search term. It can contain any character.
		 * @param {string} locale Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.
		 * @return {SearchSuggestions} OK
		 */
		Search_suggestionsGetByQueryAndLocale(query: string | null | undefined, locale: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<SearchSuggestions> {
			return this.http.get<SearchSuggestions>(this.baseUri + 'search_suggestions?query=' + (query == null ? '' : encodeURIComponent(query)) + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get list of the 10 most searched terms
		 * Lists the 10 most searched terms.
		 * Get top_searches
		 * @param {string} locale Indicates the target language as a BCP 47 language code. The Intelligent Search must have indexed the account in the target language.
		 * @return {TopSearches} OK
		 */
		Top_searchesGetByLocale(locale: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<TopSearches> {
			return this.http.get<TopSearches>(this.baseUri + 'top_searches?locale=' + (locale == null ? '' : encodeURIComponent(locale)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export enum Product_search_facetsGetByQueryAndSimulationBehaviorAndCountAndPageAndSortAndLocaleAndHideUnavailableItemsSimulationBehavior { default = 'default', skip = 'skip', only1P = 'only1P' }

	export enum Product_search_facetsGetByQueryAndSimulationBehaviorAndCountAndPageAndSortAndLocaleAndHideUnavailableItemsSort { 'price:desc' = 'price:desc', 'price:asc' = 'price:asc', 'orders:desc' = 'orders:desc', 'name:desc' = 'name:desc', 'name:asc' = 'name:asc', 'release:desc' = 'release:desc', 'discount:desc' = 'discount:desc' }

}

