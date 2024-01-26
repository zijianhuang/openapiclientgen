import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Article {
		abstract?: string | null;
		byline?: string | null;
		column?: string | null;
		des_facet?: DesFacet;
		geo_facet?: GeoFacet;
		media?: Array<string>;
		org_facet?: Array<string>;
		per_facet?: Array<string>;
		published_date?: string | null;
		section?: string | null;
		source?: string | null;
		title?: string | null;
		url?: string | null;
	}
	export interface ArticleFormProperties {
		abstract: FormControl<string | null | undefined>,
		byline: FormControl<string | null | undefined>,
		column: FormControl<string | null | undefined>,
		geo_facet: FormControl<GeoFacet | null | undefined>,
		published_date: FormControl<string | null | undefined>,
		section: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateArticleFormGroup() {
		return new FormGroup<ArticleFormProperties>({
			abstract: new FormControl<string | null | undefined>(undefined),
			byline: new FormControl<string | null | undefined>(undefined),
			column: new FormControl<string | null | undefined>(undefined),
			geo_facet: new FormControl<GeoFacet | null | undefined>(undefined),
			published_date: new FormControl<string | null | undefined>(undefined),
			section: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ArticleWithCountType {
		abstract?: string | null;
		byline?: string | null;
		column?: string | null;
		count_type?: string | null;
		des_facet?: DesFacet;
		geo_facet?: GeoFacet;
		ArticleWithCountTypeMedia?: Array<ArticleWithCountTypeMedia>;
		org_facet?: Array<string>;
		per_facet?: Array<string>;
		published_date?: string | null;
		section?: string | null;
		source?: string | null;
		title?: string | null;
		url?: string | null;
	}
	export interface ArticleWithCountTypeFormProperties {
		abstract: FormControl<string | null | undefined>,
		byline: FormControl<string | null | undefined>,
		column: FormControl<string | null | undefined>,
		count_type: FormControl<string | null | undefined>,
		geo_facet: FormControl<GeoFacet | null | undefined>,
		published_date: FormControl<string | null | undefined>,
		section: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateArticleWithCountTypeFormGroup() {
		return new FormGroup<ArticleWithCountTypeFormProperties>({
			abstract: new FormControl<string | null | undefined>(undefined),
			byline: new FormControl<string | null | undefined>(undefined),
			column: new FormControl<string | null | undefined>(undefined),
			count_type: new FormControl<string | null | undefined>(undefined),
			geo_facet: new FormControl<GeoFacet | null | undefined>(undefined),
			published_date: new FormControl<string | null | undefined>(undefined),
			section: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ArticleWithCountTypeMedia {
		caption?: string | null;
		copyright?: string | null;
		'media-metadata'?: ArticleWithCountTypeMedia_media_metadata_;
		subtype?: string | null;
		type?: string | null;
	}
	export interface ArticleWithCountTypeMediaFormProperties {
		caption: FormControl<string | null | undefined>,
		copyright: FormControl<string | null | undefined>,
		subtype: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateArticleWithCountTypeMediaFormGroup() {
		return new FormGroup<ArticleWithCountTypeMediaFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined),
			copyright: new FormControl<string | null | undefined>(undefined),
			subtype: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ArticleWithCountTypeMedia_media_metadata_ {
		format?: string | null;
		height?: number | null;
		url?: string | null;
		width?: number | null;
	}
	export interface ArticleWithCountTypeMedia_media_metadata_FormProperties {
		format: FormControl<string | null | undefined>,
		height: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
		width: FormControl<number | null | undefined>,
	}
	export function CreateArticleWithCountTypeMedia_media_metadata_FormGroup() {
		return new FormGroup<ArticleWithCountTypeMedia_media_metadata_FormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DesFacet {
	}
	export interface DesFacetFormProperties {
	}
	export function CreateDesFacetFormGroup() {
		return new FormGroup<DesFacetFormProperties>({
		});

	}

	export enum GeoFacet { '' = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Most Emailed by Section & Time Period
		 * Get mostemailed/{section}/{time_period}.json
		 * @return {GET_mostemailed_section_time_period_jsonReturn} An array of Articles
		 */
		GET_mostemailed_section_time_period_json(): Observable<GET_mostemailed_section_time_period_jsonReturn> {
			return this.http.get<GET_mostemailed_section_time_period_jsonReturn>(this.baseUri + 'mostemailed/{section}/{time_period}.json', {});
		}

		/**
		 * Most Shared by Section & Time Period
		 * Get mostshared/{section}/{time_period}.json
		 * @return {GET_mostshared_section_time_period_jsonReturn} An array of Articles
		 */
		GET_mostshared_section_time_period_json(): Observable<GET_mostshared_section_time_period_jsonReturn> {
			return this.http.get<GET_mostshared_section_time_period_jsonReturn>(this.baseUri + 'mostshared/{section}/{time_period}.json', {});
		}

		/**
		 * Most Viewed by Section & Time Period
		 * Get mostviewed/{section}/{time_period}.json
		 * @return {GET_mostviewed_section_time_period_jsonReturn} An array of Articles
		 */
		GET_mostviewed_section_time_period_json(): Observable<GET_mostviewed_section_time_period_jsonReturn> {
			return this.http.get<GET_mostviewed_section_time_period_jsonReturn>(this.baseUri + 'mostviewed/{section}/{time_period}.json', {});
		}
	}

	export interface GET_mostemailed_section_time_period_jsonReturn {
		copyright?: string | null;
		num_results?: number | null;
		results?: Array<ArticleWithCountType>;
		status?: string | null;
	}
	export interface GET_mostemailed_section_time_period_jsonReturnFormProperties {
		copyright: FormControl<string | null | undefined>,
		num_results: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateGET_mostemailed_section_time_period_jsonReturnFormGroup() {
		return new FormGroup<GET_mostemailed_section_time_period_jsonReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			num_results: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_mostshared_section_time_period_jsonReturn {
		copyright?: string | null;
		num_results?: number | null;
		results?: Array<Article>;
		status?: string | null;
	}
	export interface GET_mostshared_section_time_period_jsonReturnFormProperties {
		copyright: FormControl<string | null | undefined>,
		num_results: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateGET_mostshared_section_time_period_jsonReturnFormGroup() {
		return new FormGroup<GET_mostshared_section_time_period_jsonReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			num_results: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GET_mostviewed_section_time_period_jsonReturn {
		copyright?: string | null;
		num_results?: number | null;
		results?: Array<Article>;
		status?: string | null;
	}
	export interface GET_mostviewed_section_time_period_jsonReturnFormProperties {
		copyright: FormControl<string | null | undefined>,
		num_results: FormControl<number | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateGET_mostviewed_section_time_period_jsonReturnFormGroup() {
		return new FormGroup<GET_mostviewed_section_time_period_jsonReturnFormProperties>({
			copyright: new FormControl<string | null | undefined>(undefined),
			num_results: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

}

