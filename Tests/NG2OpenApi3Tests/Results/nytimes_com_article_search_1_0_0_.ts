import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Doc {
		_id?: string | null;
		abstract?: string | null;
		blog?: Array<string>;
		byline?: DocByline;
		document_type?: string | null;
		headline?: DocHeadline;
		keywords?: DocKeywords;
		lead_paragraph?: string | null;
		DocMultimedia?: Array<DocMultimedia>;
		news_desk?: string | null;
		print_page?: string | null;
		pub_date?: string | null;
		section_name?: string | null;
		slideshow_credits?: string | null;
		snippet?: string | null;
		source?: string | null;
		subsection_name?: string | null;
		type_of_material?: string | null;
		web_url?: string | null;
		word_count?: string | null;
	}
	export interface DocFormProperties {
		_id: FormControl<string | null | undefined>,
		abstract: FormControl<string | null | undefined>,
		document_type: FormControl<string | null | undefined>,
		lead_paragraph: FormControl<string | null | undefined>,
		news_desk: FormControl<string | null | undefined>,
		print_page: FormControl<string | null | undefined>,
		pub_date: FormControl<string | null | undefined>,
		section_name: FormControl<string | null | undefined>,
		slideshow_credits: FormControl<string | null | undefined>,
		snippet: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		subsection_name: FormControl<string | null | undefined>,
		type_of_material: FormControl<string | null | undefined>,
		web_url: FormControl<string | null | undefined>,
		word_count: FormControl<string | null | undefined>,
	}
	export function CreateDocFormGroup() {
		return new FormGroup<DocFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined),
			abstract: new FormControl<string | null | undefined>(undefined),
			document_type: new FormControl<string | null | undefined>(undefined),
			lead_paragraph: new FormControl<string | null | undefined>(undefined),
			news_desk: new FormControl<string | null | undefined>(undefined),
			print_page: new FormControl<string | null | undefined>(undefined),
			pub_date: new FormControl<string | null | undefined>(undefined),
			section_name: new FormControl<string | null | undefined>(undefined),
			slideshow_credits: new FormControl<string | null | undefined>(undefined),
			snippet: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			subsection_name: new FormControl<string | null | undefined>(undefined),
			type_of_material: new FormControl<string | null | undefined>(undefined),
			web_url: new FormControl<string | null | undefined>(undefined),
			word_count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocByline {
		organization?: string | null;
		original?: string | null;
		person?: Array<string>;
	}
	export interface DocBylineFormProperties {
		organization: FormControl<string | null | undefined>,
		original: FormControl<string | null | undefined>,
	}
	export function CreateDocBylineFormGroup() {
		return new FormGroup<DocBylineFormProperties>({
			organization: new FormControl<string | null | undefined>(undefined),
			original: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocHeadline {
		kicker?: string | null;
		main?: string | null;
	}
	export interface DocHeadlineFormProperties {
		kicker: FormControl<string | null | undefined>,
		main: FormControl<string | null | undefined>,
	}
	export function CreateDocHeadlineFormGroup() {
		return new FormGroup<DocHeadlineFormProperties>({
			kicker: new FormControl<string | null | undefined>(undefined),
			main: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocKeywords {
		name?: string | null;
		rank?: string | null;
		value?: string | null;
	}
	export interface DocKeywordsFormProperties {
		name: FormControl<string | null | undefined>,
		rank: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateDocKeywordsFormGroup() {
		return new FormGroup<DocKeywordsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocMultimedia {
		caption?: string | null;
		copyright?: string | null;
		format?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height?: number | null;
		subtype?: string | null;
		type?: string | null;
		url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width?: number | null;
	}
	export interface DocMultimediaFormProperties {
		caption: FormControl<string | null | undefined>,
		copyright: FormControl<string | null | undefined>,
		format: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		height: FormControl<number | null | undefined>,
		subtype: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateDocMultimediaFormGroup() {
		return new FormGroup<DocMultimediaFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined),
			copyright: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			subtype: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Article Search
		 * Article Search requests use the following URI structure:
		 * Get articlesearch.json
		 * @param {string} q Search query term. Search is performed on the article body, headline and byline.
		 * @param {string} fq "Filtered search query using standard Lucene syntax. 
		 * The filter query can be specified with or without a limiting field: label. 
		 * See Filtering Your Search for more information about filtering."
		 * @param {string} begin_date "Format: YYYYMMDD 
		 * Restricts responses to results with publication dates of the date specified or later."
		 * @param {string} end_date "Format: YYYYMMDD 
		 * Restricts responses to results with publication dates of the date specified or earlier."
		 * @param {StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterSort} sort "By default, search results are sorted by their relevance to the query term (q). Use the sort parameter to sort by pub_date."
		 * @param {string} fl "Comma-delimited list of fields (no limit)
		 *   Limits the fields returned in your search results. By default (unless you include an fl list in your request), the following fields are returned: 
		 *   
		 *   web_url
		 *   
		 *   snippet
		 *   
		 *   lead_paragraph
		 *   
		 *   abstract
		 *   
		 *   print_page
		 *   
		 *   blog
		 *   
		 *   source
		 *   
		 *   multimedia
		 *   
		 *   headline
		 *   
		 *   keywords
		 *   
		 *   pub_date
		 *   
		 *   document_type
		 *   
		 *   news_desk
		 *   
		 *   byline
		 *   
		 *   type_of_material
		 *   
		 *   _id
		 *   
		 *   word_count"
		 * @param {boolean} hl Enables highlighting in search results. When set to true, the query term (q) is highlighted in the headline and lead_paragraph fields.
		 * Note: If highlighting is enabled, snippet will be returned even if it is not specified in your fl list."
		 * @param {number} page "The value of page corresponds to a set of 10 results (it does not indicate the starting number of the result set). For example, page=0 corresponds to records 0-9. To return records 10-19, set page to 1, not 10."
		 *     Minimum: 0    Maximum: 10
		 * @param {string} facet_field Comma-delimited list of facets
		 * Specifies the sets of facet values to include in the facets array at the end of response, which collects the facet values from all the search results. By default no facet fields will be returned. Below is the list of valid facets:
		 * section_name
		 * document_type
		 * type_of_material
		 * source
		 * day_of_week
		 * To learn more about using facets, see Using Facets.
		 * @param {boolean} facet_filter When set to true, facet counts will respect any applied filters (fq, date range, etc.) in addition to the main query term. To filter facet counts, specifying at least one facet_field is required. To learn more about using facets, see Using Facets.
		 * @return {StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturn} The docs requested by the article search.
		 */
		StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filter(q: string | null | undefined, fq: string | null | undefined, begin_date: string | null | undefined, end_date: string | null | undefined, sort: StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterSort | null | undefined, fl: string | null | undefined, hl: boolean | null | undefined, page: number | null | undefined, facet_field: string | null | undefined, facet_filter: boolean | null | undefined): Observable<StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturn> {
			return this.http.get<StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturn>(this.baseUri + 'articlesearch.json?q=' + (q == null ? '' : encodeURIComponent(q)) + '&fq=' + (fq == null ? '' : encodeURIComponent(fq)) + '&begin_date=' + (begin_date == null ? '' : encodeURIComponent(begin_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&sort=' + sort + '&fl=' + (fl == null ? '' : encodeURIComponent(fl)) + '&hl=' + hl + '&page=' + page + '&facet_field=' + (facet_field == null ? '' : encodeURIComponent(facet_field)) + '&facet_filter=' + facet_filter, {});
		}
	}

	export enum StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterSort { newest = 'newest', oldest = 'oldest' }

	export interface StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturn {
		response?: StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturnResponse;
	}
	export interface StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturnFormProperties {
	}
	export function CreateStoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturnFormGroup() {
		return new FormGroup<StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturnFormProperties>({
		});

	}

	export interface StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturnResponse {
		docs?: Array<Doc>;
		meta?: StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturnResponseMeta;
	}
	export interface StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturnResponseFormProperties {
	}
	export function CreateStoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturnResponseFormGroup() {
		return new FormGroup<StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturnResponseFormProperties>({
		});

	}

	export interface StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturnResponseMeta {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		hits?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		offset?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		time?: number | null;
	}
	export interface StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturnResponseMetaFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		hits: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		offset: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		time: FormControl<number | null | undefined>,
	}
	export function CreateStoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturnResponseMetaFormGroup() {
		return new FormGroup<StoriesGetByQAndFqAndBegin_dateAndEnd_dateAndSortAndFlAndHlAndPageAndFacet_fieldAndFacet_filterReturnResponseMetaFormProperties>({
			hits: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
		});

	}

}

