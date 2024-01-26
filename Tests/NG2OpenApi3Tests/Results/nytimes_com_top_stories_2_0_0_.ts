import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Article {
		abstract?: string | null;
		byline?: string | null;
		created_date?: string | null;
		des_facet?: Array<string>;
		geo_facet?: Array<string>;
		item_type?: string | null;
		kicker?: string | null;
		material_type_facet?: string | null;
		ArticleMultimedia?: Array<ArticleMultimedia>;
		org_facet?: Array<string>;
		per_facet?: Array<string>;
		published_date?: string | null;
		ArticleRelated_urls?: Array<ArticleRelated_urls>;
		section?: string | null;
		short_url?: string | null;
		subsection?: string | null;
		thumbnail_standard?: string | null;
		title?: string | null;
		updated_date?: string | null;
		url?: string | null;
	}
	export interface ArticleFormProperties {
		abstract: FormControl<string | null | undefined>,
		byline: FormControl<string | null | undefined>,
		created_date: FormControl<string | null | undefined>,
		item_type: FormControl<string | null | undefined>,
		kicker: FormControl<string | null | undefined>,
		material_type_facet: FormControl<string | null | undefined>,
		published_date: FormControl<string | null | undefined>,
		section: FormControl<string | null | undefined>,
		short_url: FormControl<string | null | undefined>,
		subsection: FormControl<string | null | undefined>,
		thumbnail_standard: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		updated_date: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateArticleFormGroup() {
		return new FormGroup<ArticleFormProperties>({
			abstract: new FormControl<string | null | undefined>(undefined),
			byline: new FormControl<string | null | undefined>(undefined),
			created_date: new FormControl<string | null | undefined>(undefined),
			item_type: new FormControl<string | null | undefined>(undefined),
			kicker: new FormControl<string | null | undefined>(undefined),
			material_type_facet: new FormControl<string | null | undefined>(undefined),
			published_date: new FormControl<string | null | undefined>(undefined),
			section: new FormControl<string | null | undefined>(undefined),
			short_url: new FormControl<string | null | undefined>(undefined),
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
		 * Top Stories
		 * The Top Stories API returns a list of articles and associated images currently on the specified section.  Support JSON and JSONP.
		 * Get {section}.{format}
		 * @param {StoriesGetBySectionAndFormatAndCallbackSection} section The section the story appears in.
		 * @param {StoriesGetBySectionAndFormatAndCallbackFormat} format if this is JSONP or JSON
		 * @param {string} callback The name of the function the API call results will be passed to. Required when using JSONP. This parameter has only one valid value per section. The format is {section_name}TopStoriesCallback.
		 * @return {StoriesGetBySectionAndFormatAndCallbackReturn} An array of articles
		 */
		StoriesGetBySectionAndFormatAndCallback(section: StoriesGetBySectionAndFormatAndCallbackSection, format: StoriesGetBySectionAndFormatAndCallbackFormat, callback: string | null | undefined): Observable<StoriesGetBySectionAndFormatAndCallbackReturn> {
			return this.http.get<StoriesGetBySectionAndFormatAndCallbackReturn>(this.baseUri + section + '.' + format + '?callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '', {});
		}
	}

	export enum StoriesGetBySectionAndFormatAndCallbackSection { home = 0, opinion = 1, world = 2, national = 3, politics = 4, upshot = 5, nyregion = 6, business = 7, technology = 8, science = 9, health = 10, sports = 11, arts = 12, books = 13, movies = 14, theater = 15, sundayreview = 16, fashion = 17, tmagazine = 18, food = 19, travel = 20, magazine = 21, realestate = 22, automobiles = 23, obituaries = 24, insider = 25 }

	export enum StoriesGetBySectionAndFormatAndCallbackFormat { json = 0, jsonp = 1 }

	export interface StoriesGetBySectionAndFormatAndCallbackReturn {
		results?: Array<Article>;
	}
	export interface StoriesGetBySectionAndFormatAndCallbackReturnFormProperties {
	}
	export function CreateStoriesGetBySectionAndFormatAndCallbackReturnFormGroup() {
		return new FormGroup<StoriesGetBySectionAndFormatAndCallbackReturnFormProperties>({
		});

	}

}

