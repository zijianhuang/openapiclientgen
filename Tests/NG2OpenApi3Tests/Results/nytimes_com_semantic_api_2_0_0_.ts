import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Concept {
		ancestors?: Array<ConceptRelation>;
		article_list?: ConceptArticle_list;
		ConceptCombinations?: Array<ConceptCombinations>;
		concept_created?: string | null;
		concept_id?: number | null;
		concept_name?: string | null;
		concept_status?: string | null;
		concept_type?: string | null;
		concept_updated?: string | null;
		descendants?: Array<ConceptRelation>;
		is_times_tag?: number | null;
		ConceptLinks?: Array<ConceptLinks>;
		ConceptScope_notes?: Array<ConceptScope_notes>;
		search_api_query?: string | null;
		ConceptTaxonomy?: Array<ConceptTaxonomy>;
		vernacular?: string | null;
	}
	export interface ConceptFormProperties {
		concept_created: FormControl<string | null | undefined>,
		concept_id: FormControl<number | null | undefined>,
		concept_name: FormControl<string | null | undefined>,
		concept_status: FormControl<string | null | undefined>,
		concept_type: FormControl<string | null | undefined>,
		concept_updated: FormControl<string | null | undefined>,
		is_times_tag: FormControl<number | null | undefined>,
		search_api_query: FormControl<string | null | undefined>,
		vernacular: FormControl<string | null | undefined>,
	}
	export function CreateConceptFormGroup() {
		return new FormGroup<ConceptFormProperties>({
			concept_created: new FormControl<string | null | undefined>(undefined),
			concept_id: new FormControl<number | null | undefined>(undefined),
			concept_name: new FormControl<string | null | undefined>(undefined),
			concept_status: new FormControl<string | null | undefined>(undefined),
			concept_type: new FormControl<string | null | undefined>(undefined),
			concept_updated: new FormControl<string | null | undefined>(undefined),
			is_times_tag: new FormControl<number | null | undefined>(undefined),
			search_api_query: new FormControl<string | null | undefined>(undefined),
			vernacular: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConceptRelation {
		concept_created?: string | null;
		concept_id?: number | null;
		concept_name?: string | null;
		concept_status?: string | null;
		concept_type?: string | null;
		concept_updated?: string | null;
		is_times_tag?: number | null;
		vernacular?: string | null;
	}
	export interface ConceptRelationFormProperties {
		concept_created: FormControl<string | null | undefined>,
		concept_id: FormControl<number | null | undefined>,
		concept_name: FormControl<string | null | undefined>,
		concept_status: FormControl<string | null | undefined>,
		concept_type: FormControl<string | null | undefined>,
		concept_updated: FormControl<string | null | undefined>,
		is_times_tag: FormControl<number | null | undefined>,
		vernacular: FormControl<string | null | undefined>,
	}
	export function CreateConceptRelationFormGroup() {
		return new FormGroup<ConceptRelationFormProperties>({
			concept_created: new FormControl<string | null | undefined>(undefined),
			concept_id: new FormControl<number | null | undefined>(undefined),
			concept_name: new FormControl<string | null | undefined>(undefined),
			concept_status: new FormControl<string | null | undefined>(undefined),
			concept_type: new FormControl<string | null | undefined>(undefined),
			concept_updated: new FormControl<string | null | undefined>(undefined),
			is_times_tag: new FormControl<number | null | undefined>(undefined),
			vernacular: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConceptArticle_list {
		ConceptArticle_listResults?: Array<ConceptArticle_listResults>;
		total?: number | null;
	}
	export interface ConceptArticle_listFormProperties {
		total: FormControl<number | null | undefined>,
	}
	export function CreateConceptArticle_listFormGroup() {
		return new FormGroup<ConceptArticle_listFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ConceptArticle_listResults {
		body?: string | null;
		byline?: string | null;
		concepts?: ConceptArticle_listResultsConcepts;
		date?: string | null;
		document_type?: string | null;
		title?: string | null;
		type_of_material?: string | null;
		url?: string | null;
	}
	export interface ConceptArticle_listResultsFormProperties {
		body: FormControl<string | null | undefined>,
		byline: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		document_type: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		type_of_material: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateConceptArticle_listResultsFormGroup() {
		return new FormGroup<ConceptArticle_listResultsFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			byline: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			document_type: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type_of_material: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConceptArticle_listResultsConcepts {
		nytd_des?: Array<string>;
		nytd_org?: Array<string>;
		nytd_per?: Array<string>;
	}
	export interface ConceptArticle_listResultsConceptsFormProperties {
	}
	export function CreateConceptArticle_listResultsConceptsFormGroup() {
		return new FormGroup<ConceptArticle_listResultsConceptsFormProperties>({
		});

	}

	export interface ConceptCombinations {
		combination_note?: string | null;
		combination_source_concept_id?: number | null;
		combination_source_concept_name?: string | null;
		combination_source_concept_type?: string | null;
		combination_target_concept_id?: number | null;
		combination_target_concept_name?: string | null;
		combination_target_concept_type?: string | null;
	}
	export interface ConceptCombinationsFormProperties {
		combination_note: FormControl<string | null | undefined>,
		combination_source_concept_id: FormControl<number | null | undefined>,
		combination_source_concept_name: FormControl<string | null | undefined>,
		combination_source_concept_type: FormControl<string | null | undefined>,
		combination_target_concept_id: FormControl<number | null | undefined>,
		combination_target_concept_name: FormControl<string | null | undefined>,
		combination_target_concept_type: FormControl<string | null | undefined>,
	}
	export function CreateConceptCombinationsFormGroup() {
		return new FormGroup<ConceptCombinationsFormProperties>({
			combination_note: new FormControl<string | null | undefined>(undefined),
			combination_source_concept_id: new FormControl<number | null | undefined>(undefined),
			combination_source_concept_name: new FormControl<string | null | undefined>(undefined),
			combination_source_concept_type: new FormControl<string | null | undefined>(undefined),
			combination_target_concept_id: new FormControl<number | null | undefined>(undefined),
			combination_target_concept_name: new FormControl<string | null | undefined>(undefined),
			combination_target_concept_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConceptLinks {
		concept_id?: number | null;
		concept_name?: string | null;
		concept_status?: string | null;
		concept_type?: string | null;
		is_times_tag?: number | null;
		link?: string | null;
		link_id?: number | null;
		link_type?: string | null;
		mapping_type?: string | null;
		relation?: string | null;
	}
	export interface ConceptLinksFormProperties {
		concept_id: FormControl<number | null | undefined>,
		concept_name: FormControl<string | null | undefined>,
		concept_status: FormControl<string | null | undefined>,
		concept_type: FormControl<string | null | undefined>,
		is_times_tag: FormControl<number | null | undefined>,
		link: FormControl<string | null | undefined>,
		link_id: FormControl<number | null | undefined>,
		link_type: FormControl<string | null | undefined>,
		mapping_type: FormControl<string | null | undefined>,
		relation: FormControl<string | null | undefined>,
	}
	export function CreateConceptLinksFormGroup() {
		return new FormGroup<ConceptLinksFormProperties>({
			concept_id: new FormControl<number | null | undefined>(undefined),
			concept_name: new FormControl<string | null | undefined>(undefined),
			concept_status: new FormControl<string | null | undefined>(undefined),
			concept_type: new FormControl<string | null | undefined>(undefined),
			is_times_tag: new FormControl<number | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			link_id: new FormControl<number | null | undefined>(undefined),
			link_type: new FormControl<string | null | undefined>(undefined),
			mapping_type: new FormControl<string | null | undefined>(undefined),
			relation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConceptScope_notes {
		scope_note?: string | null;
		scope_note_name?: string | null;
		scope_note_type?: string | null;
	}
	export interface ConceptScope_notesFormProperties {
		scope_note: FormControl<string | null | undefined>,
		scope_note_name: FormControl<string | null | undefined>,
		scope_note_type: FormControl<string | null | undefined>,
	}
	export function CreateConceptScope_notesFormGroup() {
		return new FormGroup<ConceptScope_notesFormProperties>({
			scope_note: new FormControl<string | null | undefined>(undefined),
			scope_note_name: new FormControl<string | null | undefined>(undefined),
			scope_note_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConceptTaxonomy {
		source_concept_id?: number | null;
		source_concept_name?: string | null;
		source_concept_type?: string | null;
		source_concept_vernacular?: string | null;
		target_concept_id?: number | null;
		target_concept_name?: string | null;
		target_concept_type?: string | null;
		target_concept_vernacular?: string | null;
		taxonomic_relation?: string | null;
		taxonomic_verification_status?: string | null;
	}
	export interface ConceptTaxonomyFormProperties {
		source_concept_id: FormControl<number | null | undefined>,
		source_concept_name: FormControl<string | null | undefined>,
		source_concept_type: FormControl<string | null | undefined>,
		source_concept_vernacular: FormControl<string | null | undefined>,
		target_concept_id: FormControl<number | null | undefined>,
		target_concept_name: FormControl<string | null | undefined>,
		target_concept_type: FormControl<string | null | undefined>,
		target_concept_vernacular: FormControl<string | null | undefined>,
		taxonomic_relation: FormControl<string | null | undefined>,
		taxonomic_verification_status: FormControl<string | null | undefined>,
	}
	export function CreateConceptTaxonomyFormGroup() {
		return new FormGroup<ConceptTaxonomyFormProperties>({
			source_concept_id: new FormControl<number | null | undefined>(undefined),
			source_concept_name: new FormControl<string | null | undefined>(undefined),
			source_concept_type: new FormControl<string | null | undefined>(undefined),
			source_concept_vernacular: new FormControl<string | null | undefined>(undefined),
			target_concept_id: new FormControl<number | null | undefined>(undefined),
			target_concept_name: new FormControl<string | null | undefined>(undefined),
			target_concept_type: new FormControl<string | null | undefined>(undefined),
			target_concept_vernacular: new FormControl<string | null | undefined>(undefined),
			taxonomic_relation: new FormControl<string | null | undefined>(undefined),
			taxonomic_verification_status: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get name/{concept_type}/{specific_concept}.json
		 * @param {Name_concept_type_specific_concept_jsonGetByFieldsAndQueryConcept_type} concept_type The type of the concept, used for Constructing a Semantic API Request by Concept Type and Specific Concept Name. The parameter is defined as a name-value pair, as in "concept_type=[nytd_geo|nytd_per|nytd_org|nytd_des]".
		 * @param {string} specific_concept The name of the concept, used for Constructing a Semantic API Request by Concept Type and Specific Concept Name. The parameter is defined in the URI path, as the element immediately preceding ".json" like with "Baseball.json".
		 * @param {Name_concept_type_specific_concept_jsonGetByFieldsAndQueryFields} fields "all" or comma-separated list of specific optional fields: pages, ticker_symbol, links, taxonomy, combinations, geocodes, article_list, scope_notes, search_api_query
		 * Optional fields are returned in result_set. They are briefly explained here:
		 * pages: A list of topic pages associated with a specific concept.
		 * ticker_symbol: If this concept is a publicly traded company, this field contains the ticker symbol.
		 * links: A list of links from this concept to external data resources.
		 * taxonomy: For descriptor concepts, this field returns a list of taxonomic relations to other concepts.
		 * combinations: For descriptor concepts, this field returns a list of the specific meanings tis concept takes on when combined with other concepts.
		 * geocodes: For geographic concepts, the full GIS record from geonames.
		 * article_list: A list of up to 10 articles associated with this concept.
		 * scope_notes: Scope notes contains clarifications and meaning definitions that explicate the relationship between the concept and an article.
		 * search_api_query: Returns the request one would need to submit to the Article Search API to obtain a list of articles annotated with this concept.
		 * @param {string} query Precedes the search term string. Used in a Search Query. Except for &lt;specific_concept_name&gt;, Search Query will take the required parameters listed above (&lt;concept_type&gt;, &lt;concept_uri&gt;, &lt;article_uri&gt;) as an optional_parameter in addition to the query=&lt;query_term&gt;.
		 * @return {Name_concept_type_specific_concept_jsonGetByFieldsAndQueryReturn} An array of Concepts
		 */
		Name_concept_type_specific_concept_jsonGetByFieldsAndQuery(concept_type: Name_concept_type_specific_concept_jsonGetByFieldsAndQueryConcept_type, specific_concept: string, fields: Name_concept_type_specific_concept_jsonGetByFieldsAndQueryFields | null | undefined, query: string, headersHandler?: () => HttpHeaders): Observable<Name_concept_type_specific_concept_jsonGetByFieldsAndQueryReturn> {
			return this.http.get<Name_concept_type_specific_concept_jsonGetByFieldsAndQueryReturn>(this.baseUri + 'name/{concept_type}/{specific_concept}.json?fields=' + fields + '&query=' + (query == null ? '' : encodeURIComponent(query)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get search.json
		 * @param {string} query Precedes the search term string. Used in a Search Query. Except for &lt;specific_concept_name&gt;, Search Query will take the required parameters listed above (&lt;concept_type&gt;, &lt;concept_uri&gt;, &lt;article_uri&gt;) as an optional_parameter in addition to the query=&lt;query_term&gt;.
		 * @param {number} offset Integer value for the index count from the first concept to the last concept, sorted alphabetically. Used in a Search Query. A Search Query will return up to 10 concepts in its results.
		 * @param {Name_concept_type_specific_concept_jsonGetByFieldsAndQueryFields} fields "all" or comma-separated list of specific optional fields: pages, ticker_symbol, links, taxonomy, combinations, geocodes, article_list, scope_notes, search_api_query
		 * Optional fields are returned in result_set. They are briefly explained here:
		 * pages: A list of topic pages associated with a specific concept.
		 * ticker_symbol: If this concept is a publicly traded company, this field contains the ticker symbol.
		 * links: A list of links from this concept to external data resources.
		 * taxonomy: For descriptor concepts, this field returns a list of taxonomic relations to other concepts.
		 * combinations: For descriptor concepts, this field returns a list of the specific meanings tis concept takes on when combined with other concepts.
		 * geocodes: For geographic concepts, the full GIS record from geonames.
		 * article_list: A list of up to 10 articles associated with this concept.
		 * scope_notes: Scope notes contains clarifications and meaning definitions that explicate the relationship between the concept and an article.
		 * search_api_query: Returns the request one would need to submit to the Article Search API to obtain a list of articles annotated with this concept.
		 * @return {Search_jsonGetByQueryAndOffsetAndFieldsReturn} An array of Concepts
		 */
		Search_jsonGetByQueryAndOffsetAndFields(query: string, offset: number | null | undefined, fields: Name_concept_type_specific_concept_jsonGetByFieldsAndQueryFields | null | undefined, headersHandler?: () => HttpHeaders): Observable<Search_jsonGetByQueryAndOffsetAndFieldsReturn> {
			return this.http.get<Search_jsonGetByQueryAndOffsetAndFieldsReturn>(this.baseUri + 'search.json?query=' + (query == null ? '' : encodeURIComponent(query)) + '&offset=' + offset + '&fields=' + fields, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export enum Name_concept_type_specific_concept_jsonGetByFieldsAndQueryConcept_type { nytd_geo = 'nytd_geo', nytd_per = 'nytd_per', nytd_org = 'nytd_org', nytd_des = 'nytd_des' }

	export enum Name_concept_type_specific_concept_jsonGetByFieldsAndQueryFields { all = 'all', pages = 'pages', ticker_symbol = 'ticker_symbol', links = 'links', taxonomy = 'taxonomy', combinations = 'combinations', geocodes = 'geocodes', article_list = 'article_list', scope_notes = 'scope_notes', search_api_query = 'search_api_query' }

	export interface Name_concept_type_specific_concept_jsonGetByFieldsAndQueryReturn {
		copyright?: string | null;
		num_results?: number | null;
		results?: Array<Concept>;
		status?: string | null;
	}
	export interface Name_concept_type_specific_concept_jsonGetByFieldsAndQueryReturnFormProperties {
		copyright: FormControl<string | null | undefined>,
		num_results: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateName_concept_type_specific_concept_jsonGetByFieldsAndQueryReturnFormGroup() {
		return new FormGroup<Name_concept_type_specific_concept_jsonGetByFieldsAndQueryReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			num_results: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Search_jsonGetByQueryAndOffsetAndFieldsReturn {
		copyright?: string | null;
		num_results?: number | null;
		results?: Array<ConceptRelation>;
		status?: string | null;
	}
	export interface Search_jsonGetByQueryAndOffsetAndFieldsReturnFormProperties {
		copyright: FormControl<string | null | undefined>,
		num_results: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateSearch_jsonGetByQueryAndOffsetAndFieldsReturnFormGroup() {
		return new FormGroup<Search_jsonGetByQueryAndOffsetAndFieldsReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			num_results: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

}

