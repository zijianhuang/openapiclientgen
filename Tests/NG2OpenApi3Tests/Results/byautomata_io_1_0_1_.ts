import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Article {
		link?: string | null;
		pubdate?: string | null;
		title?: string | null;
	}
	export interface ArticleFormProperties {
		link: FormControl<string | null | undefined>,
		pubdate: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateArticleFormGroup() {
		return new FormGroup<ArticleFormProperties>({
			link: new FormControl<string | null | undefined>(undefined),
			pubdate: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContentProCompany {
		companyName?: string | null;
		description?: string | null;
		employee?: string | null;
		industry?: string | null;
		linkedin?: string | null;
		twitter?: string | null;
		website?: string | null;
	}
	export interface ContentProCompanyFormProperties {
		companyName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		employee: FormControl<string | null | undefined>,
		industry: FormControl<string | null | undefined>,
		linkedin: FormControl<string | null | undefined>,
		twitter: FormControl<string | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateContentProCompanyFormGroup() {
		return new FormGroup<ContentProCompanyFormProperties>({
			companyName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			employee: new FormControl<string | null | undefined>(undefined),
			industry: new FormControl<string | null | undefined>(undefined),
			linkedin: new FormControl<string | null | undefined>(undefined),
			twitter: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContentProSnippets {
		description?: Array<string>;
		text?: Array<string>;
		title?: Array<string>;
	}
	export interface ContentProSnippetsFormProperties {
	}
	export function CreateContentProSnippetsFormGroup() {
		return new FormGroup<ContentProSnippetsFormProperties>({
		});

	}

	export interface InputCompany {
		companyName?: string | null;
		country?: string | null;
		employee?: string | null;
		industry?: string | null;
		linkedin?: string | null;
		twitter?: string | null;
		website?: string | null;
	}
	export interface InputCompanyFormProperties {
		companyName: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		employee: FormControl<string | null | undefined>,
		industry: FormControl<string | null | undefined>,
		linkedin: FormControl<string | null | undefined>,
		twitter: FormControl<string | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateInputCompanyFormGroup() {
		return new FormGroup<InputCompanyFormProperties>({
			companyName: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			employee: new FormControl<string | null | undefined>(undefined),
			industry: new FormControl<string | null | undefined>(undefined),
			linkedin: new FormControl<string | null | undefined>(undefined),
			twitter: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SimilarCompany {
		companyName?: string | null;
		description?: string | null;
		employee?: string | null;
		industry?: string | null;
		linkedin?: string | null;
		title?: string | null;
		twitter?: string | null;
		website?: string | null;
	}
	export interface SimilarCompanyFormProperties {
		companyName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		employee: FormControl<string | null | undefined>,
		industry: FormControl<string | null | undefined>,
		linkedin: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		twitter: FormControl<string | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateSimilarCompanyFormGroup() {
		return new FormGroup<SimilarCompanyFormProperties>({
			companyName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			employee: new FormControl<string | null | undefined>(undefined),
			industry: new FormControl<string | null | undefined>(undefined),
			linkedin: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			twitter: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SimilarCompanySearch {
		companyName?: string | null;
		description?: string | null;
		employee?: string | null;
		industry?: string | null;
		linkedin?: string | null;
		snippets?: Array<Snippet>;
		title?: string | null;
		twitter?: string | null;
		website?: string | null;
	}
	export interface SimilarCompanySearchFormProperties {
		companyName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		employee: FormControl<string | null | undefined>,
		industry: FormControl<string | null | undefined>,
		linkedin: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		twitter: FormControl<string | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateSimilarCompanySearchFormGroup() {
		return new FormGroup<SimilarCompanySearchFormProperties>({
			companyName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			employee: new FormControl<string | null | undefined>(undefined),
			industry: new FormControl<string | null | undefined>(undefined),
			linkedin: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			twitter: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Snippet {
		description?: Array<string>;
		text?: Array<string>;
		title?: Array<string>;
	}
	export interface SnippetFormProperties {
	}
	export function CreateSnippetFormGroup() {
		return new FormGroup<SnippetFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Send search terms to receive the most relevant articles and companies.
		 * Get contentpro-search
		 * @param {Contentpro_searchGetByTermsTerms} terms We provide information about related companies and articles based on the search terms you provide. Separate search terms with commas. Ex. https://api.byautomata.io/contentpro-search?terms=cloud+computing,enterprise,security
		 * @return {Contentpro_searchGetByTermsReturn} A successful operation
		 */
		Contentpro_searchGetByTerms(terms: Contentpro_searchGetByTermsTerms): Observable<Contentpro_searchGetByTermsReturn> {
			return this.http.get<Contentpro_searchGetByTermsReturn>(this.baseUri + 'contentpro-search?terms=' + terms, {});
		}

		/**
		 * The /contentpro-similar-text endpoint accepts and arbitrary piece of text and returns similar articles and blogs written by companies.
		 * Post contentpro-similar-text
		 * @param {Contentpro_similar_textPostPostBody} requestBody We'll provide information about related companies and articles based on the text you provide.
		 * @return {Contentpro_similar_textPostReturn} A successful operation
		 */
		Contentpro_similar_textPost(requestBody: Contentpro_similar_textPostPostBody): Observable<Contentpro_similar_textPostReturn> {
			return this.http.post<Contentpro_similar_textPostReturn>(this.baseUri + 'contentpro-similar-text', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Send search terms to receive the most relevant companies along with text snippets.
		 * Get search
		 * @param {SearchGetByTermsAndPageTerms} terms We provide information about related companies based on the search terms you provide. Separate search terms with commas. Ex. https://api.byautomata.io/search?link=cloud+computing,enterprise,security
		 * @param {SearchGetByTermsAndPagePage} page Page number of search results. Ex. https://api.byautomata.io/search?page=0&link=cloud+computing,enterprise,security
		 * @return {SearchGetByTermsAndPageReturn} A successful operation
		 */
		SearchGetByTermsAndPage(terms: SearchGetByTermsAndPageTerms, page: SearchGetByTermsAndPagePage | null | undefined): Observable<SearchGetByTermsAndPageReturn> {
			return this.http.get<SearchGetByTermsAndPageReturn>(this.baseUri + 'search?terms=' + terms + '&page=' + page, {});
		}

		/**
		 * Send a company website to receive a list of companies related to them.
		 * Get similar
		 * @param {SimilarGetByLinkAndPageLink} link We'll provide information about related companies based on the site you provide. If a LinkedIn page is sent, we will try to identify the company related to the page. Ex. https://api.byautomata.io/similar?link=ibm.com
		 * @param {SimilarGetByLinkAndPagePage} page Page number of search results. Ex. https://api.byautomata.io/similar?link=ibm.com&page=1
		 * @return {SimilarGetByLinkAndPageReturn} A successful operation
		 */
		SimilarGetByLinkAndPage(link: SimilarGetByLinkAndPageLink, page: SimilarGetByLinkAndPagePage | null | undefined): Observable<SimilarGetByLinkAndPageReturn> {
			return this.http.get<SimilarGetByLinkAndPageReturn>(this.baseUri + 'similar?link=' + link + '&page=' + page, {});
		}
	}

	export interface Contentpro_searchGetByTermsTerms {

		/** Comma separated list of search terms. Ex. terms=cloud+computing,enterprise,security */
		link?: string | null;
	}
	export interface Contentpro_searchGetByTermsTermsFormProperties {

		/** Comma separated list of search terms. Ex. terms=cloud+computing,enterprise,security */
		link: FormControl<string | null | undefined>,
	}
	export function CreateContentpro_searchGetByTermsTermsFormGroup() {
		return new FormGroup<Contentpro_searchGetByTermsTermsFormProperties>({
			link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contentpro_searchGetByTermsReturn {
		calls_per_month?: string | null;
		count_remaining?: string | null;
		Contentpro_searchGetByTermsReturnData?: Array<Contentpro_searchGetByTermsReturnData>;
		renewal_date?: string | null;
	}
	export interface Contentpro_searchGetByTermsReturnFormProperties {
		calls_per_month: FormControl<string | null | undefined>,
		count_remaining: FormControl<string | null | undefined>,
		renewal_date: FormControl<string | null | undefined>,
	}
	export function CreateContentpro_searchGetByTermsReturnFormGroup() {
		return new FormGroup<Contentpro_searchGetByTermsReturnFormProperties>({
			calls_per_month: new FormControl<string | null | undefined>(undefined),
			count_remaining: new FormControl<string | null | undefined>(undefined),
			renewal_date: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contentpro_searchGetByTermsReturnData {
		article?: Article;
		company?: ContentProCompany;
		snippets?: ContentProSnippets;
	}
	export interface Contentpro_searchGetByTermsReturnDataFormProperties {
	}
	export function CreateContentpro_searchGetByTermsReturnDataFormGroup() {
		return new FormGroup<Contentpro_searchGetByTermsReturnDataFormProperties>({
		});

	}

	export interface Contentpro_similar_textPostPostBody {

		/**
		 * Any piece of text
		 * Required
		 */
		text: string;
	}
	export interface Contentpro_similar_textPostPostBodyFormProperties {

		/**
		 * Any piece of text
		 * Required
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateContentpro_similar_textPostPostBodyFormGroup() {
		return new FormGroup<Contentpro_similar_textPostPostBodyFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Contentpro_similar_textPostReturn {
		calls_per_month?: string | null;
		count_remaining?: string | null;
		Contentpro_similar_textPostReturnData?: Array<Contentpro_similar_textPostReturnData>;
		renewal_date?: string | null;
	}
	export interface Contentpro_similar_textPostReturnFormProperties {
		calls_per_month: FormControl<string | null | undefined>,
		count_remaining: FormControl<string | null | undefined>,
		renewal_date: FormControl<string | null | undefined>,
	}
	export function CreateContentpro_similar_textPostReturnFormGroup() {
		return new FormGroup<Contentpro_similar_textPostReturnFormProperties>({
			calls_per_month: new FormControl<string | null | undefined>(undefined),
			count_remaining: new FormControl<string | null | undefined>(undefined),
			renewal_date: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Contentpro_similar_textPostReturnData {
		article?: Article;
		company?: ContentProCompany;
		snippets?: ContentProSnippets;
	}
	export interface Contentpro_similar_textPostReturnDataFormProperties {
	}
	export function CreateContentpro_similar_textPostReturnDataFormGroup() {
		return new FormGroup<Contentpro_similar_textPostReturnDataFormProperties>({
		});

	}

	export interface SearchGetByTermsAndPageTerms {

		/** Comma separated list of search terms. Ex. terms=cloud+computing,enterprise,security */
		link?: string | null;
	}
	export interface SearchGetByTermsAndPageTermsFormProperties {

		/** Comma separated list of search terms. Ex. terms=cloud+computing,enterprise,security */
		link: FormControl<string | null | undefined>,
	}
	export function CreateSearchGetByTermsAndPageTermsFormGroup() {
		return new FormGroup<SearchGetByTermsAndPageTermsFormProperties>({
			link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchGetByTermsAndPagePage {

		/** Results are returned in batches of approximately 15 companies. Use the page parameter to page through results. */
		link?: string | null;
	}
	export interface SearchGetByTermsAndPagePageFormProperties {

		/** Results are returned in batches of approximately 15 companies. Use the page parameter to page through results. */
		link: FormControl<string | null | undefined>,
	}
	export function CreateSearchGetByTermsAndPagePageFormGroup() {
		return new FormGroup<SearchGetByTermsAndPagePageFormProperties>({
			link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchGetByTermsAndPageReturn {
		calls_per_month?: string | null;
		companies?: Array<SimilarCompanySearch>;
		count_remaining?: string | null;
		renewal_date?: string | null;
	}
	export interface SearchGetByTermsAndPageReturnFormProperties {
		calls_per_month: FormControl<string | null | undefined>,
		count_remaining: FormControl<string | null | undefined>,
		renewal_date: FormControl<string | null | undefined>,
	}
	export function CreateSearchGetByTermsAndPageReturnFormGroup() {
		return new FormGroup<SearchGetByTermsAndPageReturnFormProperties>({
			calls_per_month: new FormControl<string | null | undefined>(undefined),
			count_remaining: new FormControl<string | null | undefined>(undefined),
			renewal_date: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SimilarGetByLinkAndPageLink {

		/**
		 * Any company website. Ex. apple.com
		 * Required
		 */
		link: string;
	}
	export interface SimilarGetByLinkAndPageLinkFormProperties {

		/**
		 * Any company website. Ex. apple.com
		 * Required
		 */
		link: FormControl<string | null | undefined>,
	}
	export function CreateSimilarGetByLinkAndPageLinkFormGroup() {
		return new FormGroup<SimilarGetByLinkAndPageLinkFormProperties>({
			link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SimilarGetByLinkAndPagePage {

		/** Results are returned in batches of approximately 10 companies. Use the page parameter to page through results. */
		link?: string | null;
	}
	export interface SimilarGetByLinkAndPagePageFormProperties {

		/** Results are returned in batches of approximately 10 companies. Use the page parameter to page through results. */
		link: FormControl<string | null | undefined>,
	}
	export function CreateSimilarGetByLinkAndPagePageFormGroup() {
		return new FormGroup<SimilarGetByLinkAndPagePageFormProperties>({
			link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SimilarGetByLinkAndPageReturn {
		calls_per_month?: string | null;
		companies?: Array<SimilarCompany>;
		count_remaining?: string | null;
		input_company?: InputCompany;
		renewal_date?: string | null;
	}
	export interface SimilarGetByLinkAndPageReturnFormProperties {
		calls_per_month: FormControl<string | null | undefined>,
		count_remaining: FormControl<string | null | undefined>,
		renewal_date: FormControl<string | null | undefined>,
	}
	export function CreateSimilarGetByLinkAndPageReturnFormGroup() {
		return new FormGroup<SimilarGetByLinkAndPageReturnFormProperties>({
			calls_per_month: new FormControl<string | null | undefined>(undefined),
			count_remaining: new FormControl<string | null | undefined>(undefined),
			renewal_date: new FormControl<string | null | undefined>(undefined),
		});

	}

}

