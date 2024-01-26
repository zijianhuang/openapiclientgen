import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Article {
		abstract?: string | null;
		blog_name?: string | null;
		byline?: string | null;
		created_date?: string | null;
		des_facet?: Array<string>;
		geo_facet?: Array<string>;
		headline?: string | null;
		item_type?: string | null;
		kicker?: string | null;
		material_type_facet?: string | null;
		ArticleMultimedia?: Array<ArticleMultimedia>;
		org_facet?: string | null;
		per_facet?: Array<string>;
		published_date?: string | null;
		ArticleRelated_urls?: Array<ArticleRelated_urls>;
		section?: string | null;
		short_url?: string | null;
		source?: string | null;
		subsection?: string | null;
		thumbnail_standard?: string | null;
		title?: string | null;
		updated_date?: string | null;
		url?: string | null;
	}
	export interface ArticleFormProperties {
		abstract: FormControl<string | null | undefined>,
		blog_name: FormControl<string | null | undefined>,
		byline: FormControl<string | null | undefined>,
		created_date: FormControl<string | null | undefined>,
		headline: FormControl<string | null | undefined>,
		item_type: FormControl<string | null | undefined>,
		kicker: FormControl<string | null | undefined>,
		material_type_facet: FormControl<string | null | undefined>,
		org_facet: FormControl<string | null | undefined>,
		published_date: FormControl<string | null | undefined>,
		section: FormControl<string | null | undefined>,
		short_url: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		subsection: FormControl<string | null | undefined>,
		thumbnail_standard: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		updated_date: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateArticleFormGroup() {
		return new FormGroup<ArticleFormProperties>({
			abstract: new FormControl<string | null | undefined>(undefined),
			blog_name: new FormControl<string | null | undefined>(undefined),
			byline: new FormControl<string | null | undefined>(undefined),
			created_date: new FormControl<string | null | undefined>(undefined),
			headline: new FormControl<string | null | undefined>(undefined),
			item_type: new FormControl<string | null | undefined>(undefined),
			kicker: new FormControl<string | null | undefined>(undefined),
			material_type_facet: new FormControl<string | null | undefined>(undefined),
			org_facet: new FormControl<string | null | undefined>(undefined),
			published_date: new FormControl<string | null | undefined>(undefined),
			section: new FormControl<string | null | undefined>(undefined),
			short_url: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			subsection: new FormControl<string | null | undefined>(undefined),
			thumbnail_standard: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updated_date: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ArticleMultimedia {
		caption?: string | null;
		copyright?: string | null;
		format?: string | null;
		height?: number | null;
		subtype?: string | null;
		type?: string | null;
		url?: string | null;
		width?: number | null;
	}
	export interface ArticleMultimediaFormProperties {
		caption: FormControl<string | null | undefined>,
		copyright: FormControl<string | null | undefined>,
		format: FormControl<string | null | undefined>,
		height: FormControl<number | null | undefined>,
		subtype: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
		width: FormControl<number | null | undefined>,
	}
	export function CreateArticleMultimediaFormGroup() {
		return new FormGroup<ArticleMultimediaFormProperties>({
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

	export interface ArticleRelated_urls {
		suggested_link_text?: string | null;
		url?: string | null;
	}
	export interface ArticleRelated_urlsFormProperties {
		suggested_link_text: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateArticleRelated_urlsFormGroup() {
		return new FormGroup<ArticleRelated_urlsFormProperties>({
			suggested_link_text: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get content.json
		 * @param {string} url The complete URL of a specific news item, URL-encoded or backslash-escaped
		 * @return {Content_jsonGetByUrlReturn} An array of Articles
		 */
		Content_jsonGetByUrl(url: string, headersHandler?: () => HttpHeaders): Observable<Content_jsonGetByUrlReturn> {
			return this.http.get<Content_jsonGetByUrlReturn>(this.baseUri + 'content.json?url=' + (url == null ? '' : encodeURIComponent(url)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get content/{source}/{section}.json
		 * @param {Content_source_section_jsonGetByLimitAndOffsetSource} source Limits the set of items by originating source
		 * all = items from both The New York Times and The International New York Times
		 * nyt = New York Times items only
		 * iht = International New York Times items only
		 * @param {string} section Limits the set of items by one or more sections
		 * all | One or more section names, separated by semicolons
		 *  To get all sections, specify all. To get a particular section or sections, use the section names returned by this request:
		 *  http://api.nytimes.com/svc/news/v3/content/section-list.json
		 * @param {number} limit Limits the number of results, between 1 and 20
		 * @param {number} offset Sets the starting point of the result set
		 * @return {Content_source_section_jsonGetByLimitAndOffsetReturn} An array of Articles
		 */
		Content_source_section_jsonGetByLimitAndOffset(source: Content_source_section_jsonGetByLimitAndOffsetSource, section: string, limit: number | null | undefined, offset: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Content_source_section_jsonGetByLimitAndOffsetReturn> {
			return this.http.get<Content_source_section_jsonGetByLimitAndOffsetReturn>(this.baseUri + 'content/' + source + '/' + (section == null ? '' : encodeURIComponent(section)) + '.json&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get content/{source}/{section}/{time_period}.json
		 * @param {Content_source_section_jsonGetByLimitAndOffsetSource} source Limits the set of items by originating source
		 * all = items from both The New York Times and The International New York Times
		 * nyt = New York Times items only
		 * iht = International New York Times items only
		 * @param {string} section Limits the set of items by one or more sections
		 * all | One or more section names, separated by semicolons
		 *  To get all sections, specify all. To get a particular section or sections, use the section names returned by this request:
		 *  http://api.nytimes.com/svc/news/v3/content/section-list.json
		 * @param {number} time_period Limits the set of items by time published, integer in number of hours
		 * @param {number} limit Limits the number of results, between 1 and 20
		 * @param {number} offset Sets the starting point of the result set
		 * @return {Content_source_section_time_period_jsonGetByLimitAndOffsetReturn} An array of Articles
		 */
		Content_source_section_time_period_jsonGetByLimitAndOffset(source: Content_source_section_jsonGetByLimitAndOffsetSource, section: string, time_period: number, limit: number | null | undefined, offset: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Content_source_section_time_period_jsonGetByLimitAndOffsetReturn> {
			return this.http.get<Content_source_section_time_period_jsonGetByLimitAndOffsetReturn>(this.baseUri + 'content/' + source + '/' + (section == null ? '' : encodeURIComponent(section)) + '/{time_period}.json&limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export interface Content_jsonGetByUrlReturn {
		copyright?: string | null;
		num_results?: number | null;
		results?: Array<Article>;
		status?: string | null;
	}
	export interface Content_jsonGetByUrlReturnFormProperties {
		copyright: FormControl<string | null | undefined>,
		num_results: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateContent_jsonGetByUrlReturnFormGroup() {
		return new FormGroup<Content_jsonGetByUrlReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			num_results: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Content_source_section_jsonGetByLimitAndOffsetSource { all = 'all', nyt = 'nyt', iht = 'iht' }

	export interface Content_source_section_jsonGetByLimitAndOffsetReturn {
		copyright?: string | null;
		num_results?: number | null;
		results?: Array<Article>;
		status?: string | null;
	}
	export interface Content_source_section_jsonGetByLimitAndOffsetReturnFormProperties {
		copyright: FormControl<string | null | undefined>,
		num_results: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateContent_source_section_jsonGetByLimitAndOffsetReturnFormGroup() {
		return new FormGroup<Content_source_section_jsonGetByLimitAndOffsetReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			num_results: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Content_source_section_time_period_jsonGetByLimitAndOffsetReturn {
		copyright?: string | null;
		num_results?: number | null;
		results?: Array<Article>;
		status?: string | null;
	}
	export interface Content_source_section_time_period_jsonGetByLimitAndOffsetReturnFormProperties {
		copyright: FormControl<string | null | undefined>,
		num_results: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateContent_source_section_time_period_jsonGetByLimitAndOffsetReturnFormGroup() {
		return new FormGroup<Content_source_section_time_period_jsonGetByLimitAndOffsetReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			num_results: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

}

