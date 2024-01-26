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
		height?: number | null;
		subtype?: string | null;
		type?: string | null;
		url?: string | null;
		width?: number | null;
	}
	export interface DocMultimediaFormProperties {
		caption: FormControl<string | null | undefined>,
		copyright: FormControl<string | null | undefined>,
		format: FormControl<string | null | undefined>,
		height: FormControl<number | null | undefined>,
		subtype: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
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
		 * Archive API
		 * The Archive API provides lists of NYT articles by month going back to 1851.  Simply pass in the year and month you want and it returns a JSON object with all articles for that month.
		 * Get {year}/{month}.json
		 * @param {number} year The year (e.g. 2016).
		 * @param {number} month The month number (e.g. 1 for January).
		 * @return {ArchiveGetByYearAndMonthReturn} The docs requested.
		 */
		ArchiveGetByYearAndMonth(year: number, month: number): Observable<ArchiveGetByYearAndMonthReturn> {
			return this.http.get<ArchiveGetByYearAndMonthReturn>(this.baseUri + year + '/' + month + '.json', {});
		}
	}

	export interface ArchiveGetByYearAndMonthReturn {
		response?: ArchiveGetByYearAndMonthReturnResponse;
	}
	export interface ArchiveGetByYearAndMonthReturnFormProperties {
	}
	export function CreateArchiveGetByYearAndMonthReturnFormGroup() {
		return new FormGroup<ArchiveGetByYearAndMonthReturnFormProperties>({
		});

	}

	export interface ArchiveGetByYearAndMonthReturnResponse {
		docs?: Array<Doc>;
		meta?: ArchiveGetByYearAndMonthReturnResponseMeta;
	}
	export interface ArchiveGetByYearAndMonthReturnResponseFormProperties {
	}
	export function CreateArchiveGetByYearAndMonthReturnResponseFormGroup() {
		return new FormGroup<ArchiveGetByYearAndMonthReturnResponseFormProperties>({
		});

	}

	export interface ArchiveGetByYearAndMonthReturnResponseMeta {
		hits?: number | null;
		offset?: number | null;
		time?: number | null;
	}
	export interface ArchiveGetByYearAndMonthReturnResponseMetaFormProperties {
		hits: FormControl<number | null | undefined>,
		offset: FormControl<number | null | undefined>,
		time: FormControl<number | null | undefined>,
	}
	export function CreateArchiveGetByYearAndMonthReturnResponseMetaFormGroup() {
		return new FormGroup<ArchiveGetByYearAndMonthReturnResponseMetaFormProperties>({
			hits: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
		});

	}

}

