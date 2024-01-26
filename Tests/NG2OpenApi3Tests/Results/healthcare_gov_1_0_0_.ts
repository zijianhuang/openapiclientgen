import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ArticlesList {
		ArticlesListArticles?: Array<ArticlesListArticles>;
	}
	export interface ArticlesListFormProperties {
	}
	export function CreateArticlesListFormGroup() {
		return new FormGroup<ArticlesListFormProperties>({
		});

	}

	export interface ArticlesListArticles {
		bite?: string | null;
		categories?: Array<string>;
		content?: string | null;
		date?: string | null;
		excerpt?: string | null;
		featured?: boolean | null;
		id?: string | null;
		lang?: string | null;
		layout?: string | null;
		'meta-description'?: string | null;
		'meta-title'?: string | null;
		path?: string | null;
		published?: boolean | null;
		related?: Array<string>;
		'seo-keywords'?: string | null;
		sort?: number | null;
		tags?: Array<string>;
		title?: string | null;
		'title-short'?: string | null;
		topics?: Array<string>;
		url?: string | null;
	}
	export interface ArticlesListArticlesFormProperties {
		bite: FormControl<string | null | undefined>,
		content: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		excerpt: FormControl<string | null | undefined>,
		featured: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		lang: FormControl<string | null | undefined>,
		layout: FormControl<string | null | undefined>,
		'meta-description': FormControl<string | null | undefined>,
		'meta-title': FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
		published: FormControl<boolean | null | undefined>,
		'seo-keywords': FormControl<string | null | undefined>,
		sort: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		'title-short': FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateArticlesListArticlesFormGroup() {
		return new FormGroup<ArticlesListArticlesFormProperties>({
			bite: new FormControl<string | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			excerpt: new FormControl<string | null | undefined>(undefined),
			featured: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			layout: new FormControl<string | null | undefined>(undefined),
			'meta-description': new FormControl<string | null | undefined>(undefined),
			'meta-title': new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<boolean | null | undefined>(undefined),
			'seo-keywords': new FormControl<string | null | undefined>(undefined),
			sort: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			'title-short': new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BlogList {
		blog?: Array<string>;
	}
	export interface BlogListFormProperties {
	}
	export function CreateBlogListFormGroup() {
		return new FormGroup<BlogListFormProperties>({
		});

	}

	export interface BlogPage {
		categories?: Array<string>;
		content?: string | null;
		date?: string | null;
		excerpt?: string | null;
		id?: string | null;
		lang?: string | null;
		layout?: string | null;
		'meta-description'?: string | null;
		'meta-title'?: string | null;
		path?: string | null;
		published?: boolean | null;
		'seo-keywords'?: string | null;
		sort?: number | null;
		tags?: Array<string>;
		title?: string | null;
		topics?: Array<string>;
		url?: string | null;
	}
	export interface BlogPageFormProperties {
		content: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		excerpt: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lang: FormControl<string | null | undefined>,
		layout: FormControl<string | null | undefined>,
		'meta-description': FormControl<string | null | undefined>,
		'meta-title': FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
		published: FormControl<boolean | null | undefined>,
		'seo-keywords': FormControl<string | null | undefined>,
		sort: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateBlogPageFormGroup() {
		return new FormGroup<BlogPageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			excerpt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			layout: new FormControl<string | null | undefined>(undefined),
			'meta-description': new FormControl<string | null | undefined>(undefined),
			'meta-title': new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<boolean | null | undefined>(undefined),
			'seo-keywords': new FormControl<string | null | undefined>(undefined),
			sort: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GlossaryList {
		GlossaryListGlossary?: Array<GlossaryListGlossary>;
	}
	export interface GlossaryListFormProperties {
	}
	export function CreateGlossaryListFormGroup() {
		return new FormGroup<GlossaryListFormProperties>({
		});

	}

	export interface GlossaryListGlossary {
		categories?: Array<string>;
		content?: string | null;
		date?: string | null;
		excerpt?: string | null;
		id?: string | null;
		lang?: string | null;
		layout?: string | null;
		path?: string | null;
		published?: boolean | null;
		sort?: number | null;
		tags?: Array<string>;
		title?: string | null;
		url?: string | null;
	}
	export interface GlossaryListGlossaryFormProperties {
		content: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		excerpt: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lang: FormControl<string | null | undefined>,
		layout: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
		published: FormControl<boolean | null | undefined>,
		sort: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateGlossaryListGlossaryFormGroup() {
		return new FormGroup<GlossaryListGlossaryFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			excerpt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			layout: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<boolean | null | undefined>(undefined),
			sort: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GlossaryPage {
		categories?: Array<string>;
		content?: string | null;
		date?: string | null;
		excerpt?: string | null;
		id?: string | null;
		lang?: string | null;
		layout?: string | null;
		path?: string | null;
		published?: boolean | null;
		sort?: number | null;
		tags?: Array<string>;
		title?: string | null;
		url?: string | null;
	}
	export interface GlossaryPageFormProperties {
		content: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		excerpt: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lang: FormControl<string | null | undefined>,
		layout: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
		published: FormControl<boolean | null | undefined>,
		sort: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateGlossaryPageFormGroup() {
		return new FormGroup<GlossaryPageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			excerpt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			layout: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<boolean | null | undefined>(undefined),
			sort: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Page {
		categories?: Array<string>;
		content?: string | null;
		date?: string | null;
		excerpt?: string | null;
		experience?: string | null;
		id?: string | null;
		lang?: string | null;
		layout?: string | null;
		path?: string | null;
		published?: boolean | null;
		sort?: number | null;
		tags?: Array<string>;
		title?: string | null;
		url?: string | null;
	}
	export interface PageFormProperties {
		content: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		excerpt: FormControl<string | null | undefined>,
		experience: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lang: FormControl<string | null | undefined>,
		layout: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
		published: FormControl<boolean | null | undefined>,
		sort: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreatePageFormGroup() {
		return new FormGroup<PageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			excerpt: new FormControl<string | null | undefined>(undefined),
			experience: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			layout: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<boolean | null | undefined>(undefined),
			sort: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QuestionPage {
		categories?: Array<string>;
		content?: string | null;
		date?: string | null;
		excerpt?: string | null;
		id?: string | null;
		lang?: string | null;
		path?: string | null;
		published?: boolean | null;
		sort?: number | null;
		tags?: Array<string>;
		title?: string | null;
		url?: string | null;
	}
	export interface QuestionPageFormProperties {
		content: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		excerpt: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lang: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
		published: FormControl<boolean | null | undefined>,
		sort: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateQuestionPageFormGroup() {
		return new FormGroup<QuestionPageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			excerpt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<boolean | null | undefined>(undefined),
			sort: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QuestionsList {
		QuestionsListQuestions?: Array<QuestionsListQuestions>;
	}
	export interface QuestionsListFormProperties {
	}
	export function CreateQuestionsListFormGroup() {
		return new FormGroup<QuestionsListFormProperties>({
		});

	}

	export interface QuestionsListQuestions {
		categories?: Array<string>;
		content?: string | null;
		date?: string | null;
		excerpt?: string | null;
		id?: string | null;
		lang?: string | null;
		path?: string | null;
		published?: boolean | null;
		sort?: number | null;
		tags?: Array<string>;
		title?: string | null;
		url?: string | null;
	}
	export interface QuestionsListQuestionsFormProperties {
		content: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		excerpt: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lang: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
		published: FormControl<boolean | null | undefined>,
		sort: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateQuestionsListQuestionsFormGroup() {
		return new FormGroup<QuestionsListQuestionsFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			excerpt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<boolean | null | undefined>(undefined),
			sort: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StatePage {
		categories?: Array<string>;
		content?: string | null;
		date?: string | null;
		excerpt?: string | null;
		id?: string | null;
		lang?: string | null;
		path?: string | null;
		sort?: number | null;
		stateurl?: string | null;
		tags?: Array<string>;
		title?: string | null;
		url?: string | null;
	}
	export interface StatePageFormProperties {
		content: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		excerpt: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lang: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
		sort: FormControl<number | null | undefined>,
		stateurl: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateStatePageFormGroup() {
		return new FormGroup<StatePageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			excerpt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			sort: new FormControl<number | null | undefined>(undefined),
			stateurl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StatesList {
		states?: Array<string>;
	}
	export interface StatesListFormProperties {
	}
	export function CreateStatesListFormGroup() {
		return new FormGroup<StatesListFormProperties>({
		});

	}

	export interface TopicsList {
		TopicsListTopics?: Array<TopicsListTopics>;
	}
	export interface TopicsListFormProperties {
	}
	export function CreateTopicsListFormGroup() {
		return new FormGroup<TopicsListFormProperties>({
		});

	}

	export interface TopicsListTopics {
		articleorder?: Array<string>;
		categories?: Array<string>;
		content?: string | null;
		date?: string | null;
		excerpt?: string | null;
		id?: string | null;
		lang?: string | null;
		layout?: string | null;
		'meta-description'?: string | null;
		'meta-title'?: string | null;
		order?: number | null;
		path?: string | null;
		published?: boolean | null;
		sort?: number | null;
		tags?: Array<string>;
		title?: string | null;
		url?: string | null;
	}
	export interface TopicsListTopicsFormProperties {
		content: FormControl<string | null | undefined>,
		date: FormControl<string | null | undefined>,
		excerpt: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lang: FormControl<string | null | undefined>,
		layout: FormControl<string | null | undefined>,
		'meta-description': FormControl<string | null | undefined>,
		'meta-title': FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		path: FormControl<string | null | undefined>,
		published: FormControl<boolean | null | undefined>,
		sort: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateTopicsListTopicsFormGroup() {
		return new FormGroup<TopicsListTopicsFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			date: new FormControl<string | null | undefined>(undefined),
			excerpt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			layout: new FormControl<string | null | undefined>(undefined),
			'meta-description': new FormControl<string | null | undefined>(undefined),
			'meta-title': new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<boolean | null | undefined>(undefined),
			sort: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns pages content.
		 * Get api/articles{mediaTypeExtension}
		 * @param {ApiArticles_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension Omiting the param causes html to be returned.
		 * @return {void} OK
		 */
		ApiArticles_mediaTypeExtensionGet(mediaTypeExtension: ApiArticles_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/articles' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns pages content.
		 * Get api/blog{mediaTypeExtension}
		 * @param {ApiArticles_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension Omiting the param causes html to be returned.
		 * @return {void} OK
		 */
		ApiBlog_mediaTypeExtensionGet(mediaTypeExtension: ApiArticles_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/blog' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns pages content.
		 * Get api/glossary{mediaTypeExtension}
		 * @param {ApiArticles_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension Omiting the param causes html to be returned.
		 * @return {void} OK
		 */
		ApiGlossary_mediaTypeExtensionGet(mediaTypeExtension: ApiArticles_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/glossary' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns pages content.
		 * Get api/questions{mediaTypeExtension}
		 * @param {ApiArticles_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension Omiting the param causes html to be returned.
		 * @return {void} OK
		 */
		ApiQuestions_mediaTypeExtensionGet(mediaTypeExtension: ApiArticles_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/questions' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns pages content.
		 * Get api/states{mediaTypeExtension}
		 * @param {ApiArticles_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension Omiting the param causes html to be returned.
		 * @return {void} OK
		 */
		ApiStates_mediaTypeExtensionGet(mediaTypeExtension: ApiArticles_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/states' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns pages content.
		 * Get api/topics{mediaTypeExtension}
		 * @param {ApiArticles_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension Omiting the param causes html to be returned.
		 * @return {void} OK
		 */
		ApiTopics_mediaTypeExtensionGet(mediaTypeExtension: ApiArticles_mediaTypeExtensionGetMediaTypeExtension, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/topics' + mediaTypeExtension, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns pages content.
		 * Get blog/{pageName}{mediaTypeExtension}
		 * @param {ApiArticles_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension Omiting the param causes html to be returned.
		 * @return {void} OK
		 */
		Blog_pageName_mediaTypeExtensionGet(mediaTypeExtension: ApiArticles_mediaTypeExtensionGetMediaTypeExtension, pageName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'blog/' + (pageName == null ? '' : encodeURIComponent(pageName)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns pages content.
		 * Get es/blog/{pageName}{mediaTypeExtension}
		 * @param {ApiArticles_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension Omiting the param causes html to be returned.
		 * @return {void} OK
		 */
		EsBlog_pageName_mediaTypeExtensionGet(mediaTypeExtension: ApiArticles_mediaTypeExtensionGetMediaTypeExtension, pageName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'es/blog/' + (pageName == null ? '' : encodeURIComponent(pageName)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns pages content.
		 * Get es/glossary/{pageName}{mediaTypeExtension}
		 * @param {ApiArticles_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension Omiting the param causes html to be returned.
		 * @return {void} OK
		 */
		EsGlossary_pageName_mediaTypeExtensionGet(mediaTypeExtension: ApiArticles_mediaTypeExtensionGetMediaTypeExtension, pageName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'es/glossary/' + (pageName == null ? '' : encodeURIComponent(pageName)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns pages content.
		 * Get es/question/{pageName}{mediaTypeExtension}
		 * @param {ApiArticles_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension Omiting the param causes html to be returned.
		 * @return {void} OK
		 */
		EsQuestion_pageName_mediaTypeExtensionGet(mediaTypeExtension: ApiArticles_mediaTypeExtensionGetMediaTypeExtension, pageName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'es/question/' + (pageName == null ? '' : encodeURIComponent(pageName)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns pages content.
		 * Get es/{pageName}{mediaTypeExtension}
		 * @param {ApiArticles_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension Omiting the param causes html to be returned.
		 * @return {void} OK
		 */
		Es_pageName_mediaTypeExtensionGet(mediaTypeExtension: ApiArticles_mediaTypeExtensionGetMediaTypeExtension, pageName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'es/' + (pageName == null ? '' : encodeURIComponent(pageName)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns pages content.
		 * Get es/{stateName}{mediaTypeExtension}
		 * @param {ApiArticles_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension Omiting the param causes html to be returned.
		 * @return {void} OK
		 */
		Es_stateName_mediaTypeExtensionGet(mediaTypeExtension: ApiArticles_mediaTypeExtensionGetMediaTypeExtension, stateName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'es/' + (stateName == null ? '' : encodeURIComponent(stateName)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns pages content.
		 * Get glossary/{pageName}{mediaTypeExtension}
		 * @param {ApiArticles_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension Omiting the param causes html to be returned.
		 * @return {void} OK
		 */
		Glossary_pageName_mediaTypeExtensionGet(mediaTypeExtension: ApiArticles_mediaTypeExtensionGetMediaTypeExtension, pageName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'glossary/' + (pageName == null ? '' : encodeURIComponent(pageName)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns pages content.
		 * Get question/{pageName}{mediaTypeExtension}
		 * @param {ApiArticles_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension Omiting the param causes html to be returned.
		 * @return {void} OK
		 */
		Question_pageName_mediaTypeExtensionGet(mediaTypeExtension: ApiArticles_mediaTypeExtensionGetMediaTypeExtension, pageName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'question/' + (pageName == null ? '' : encodeURIComponent(pageName)) + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns pages content.
		 * Get {pageName}{mediaTypeExtension}
		 * @param {ApiArticles_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension Omiting the param causes html to be returned.
		 * @return {void} OK
		 */
		_pageName_mediaTypeExtensionGet(mediaTypeExtension: ApiArticles_mediaTypeExtensionGetMediaTypeExtension, pageName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (pageName == null ? '' : encodeURIComponent(pageName)) + '' + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns pages content.
		 * Get {stateName}{mediaTypeExtension}
		 * @param {ApiArticles_mediaTypeExtensionGetMediaTypeExtension} mediaTypeExtension Omiting the param causes html to be returned.
		 * @return {void} OK
		 */
		_stateName_mediaTypeExtensionGet(mediaTypeExtension: ApiArticles_mediaTypeExtensionGetMediaTypeExtension, stateName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (stateName == null ? '' : encodeURIComponent(stateName)) + '' + mediaTypeExtension + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum ApiArticles_mediaTypeExtensionGetMediaTypeExtension { '.json' = '.json' }

}

