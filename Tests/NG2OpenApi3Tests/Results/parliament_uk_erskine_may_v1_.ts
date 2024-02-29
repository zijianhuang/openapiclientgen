import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ErskineMayChapterOverview {
		description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		partNumber?: number | null;
		sections?: Array<ErskineMaySectionOverview>;
		title?: string | null;
	}
	export interface ErskineMayChapterOverviewFormProperties {
		description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		partNumber: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateErskineMayChapterOverviewFormGroup() {
		return new FormGroup<ErskineMayChapterOverviewFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			partNumber: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErskineMaySectionOverview {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		subSections?: Array<ErskineMaySectionOverview>;
		title?: string | null;
		titleChain?: string | null;
	}
	export interface ErskineMaySectionOverviewFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		titleChain: FormControl<string | null | undefined>,
	}
	export function CreateErskineMaySectionOverviewFormGroup() {
		return new FormGroup<ErskineMaySectionOverviewFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			titleChain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErskineMayFootnote {
		content?: string | null;
		number?: string | null;
	}
	export interface ErskineMayFootnoteFormProperties {
		content: FormControl<string | null | undefined>,
		number: FormControl<string | null | undefined>,
	}
	export function CreateErskineMayFootnoteFormGroup() {
		return new FormGroup<ErskineMayFootnoteFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErskineMayIndexTerm {
		childTerms?: Array<ErskineMayIndexTerm>;
		displayAs?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		parentTerm?: ErskineMayIndexTerm;
		references?: Array<ErskineMayParagraphSearchResult>;
		seeLinks?: Array<ErskineMayIndexTermSeeLink>;
		term?: string | null;
	}
	export interface ErskineMayIndexTermFormProperties {
		displayAs: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		term: FormControl<string | null | undefined>,
	}
	export function CreateErskineMayIndexTermFormGroup() {
		return new FormGroup<ErskineMayIndexTermFormProperties>({
			displayAs: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			term: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErskineMayParagraphSearchResult {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		chapterNumber?: number | null;
		chapterTitle?: string | null;
		paragraphReference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		partNumber?: number | null;
		searchResultText?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sectionId?: number | null;
		sectionTitle?: string | null;
		sectionTitleChain?: string | null;
	}
	export interface ErskineMayParagraphSearchResultFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		chapterNumber: FormControl<number | null | undefined>,
		chapterTitle: FormControl<string | null | undefined>,
		paragraphReference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		partNumber: FormControl<number | null | undefined>,
		searchResultText: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sectionId: FormControl<number | null | undefined>,
		sectionTitle: FormControl<string | null | undefined>,
		sectionTitleChain: FormControl<string | null | undefined>,
	}
	export function CreateErskineMayParagraphSearchResultFormGroup() {
		return new FormGroup<ErskineMayParagraphSearchResultFormProperties>({
			chapterNumber: new FormControl<number | null | undefined>(undefined),
			chapterTitle: new FormControl<string | null | undefined>(undefined),
			paragraphReference: new FormControl<string | null | undefined>(undefined),
			partNumber: new FormControl<number | null | undefined>(undefined),
			searchResultText: new FormControl<string | null | undefined>(undefined),
			sectionId: new FormControl<number | null | undefined>(undefined),
			sectionTitle: new FormControl<string | null | undefined>(undefined),
			sectionTitleChain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErskineMayIndexTermSeeLink {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		indexTermId?: number | null;
		seeType?: string | null;
		seeValue?: string | null;
	}
	export interface ErskineMayIndexTermSeeLinkFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		indexTermId: FormControl<number | null | undefined>,
		seeType: FormControl<string | null | undefined>,
		seeValue: FormControl<string | null | undefined>,
	}
	export function CreateErskineMayIndexTermSeeLinkFormGroup() {
		return new FormGroup<ErskineMayIndexTermSeeLinkFormProperties>({
			indexTermId: new FormControl<number | null | undefined>(undefined),
			seeType: new FormControl<string | null | undefined>(undefined),
			seeValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErskineMayIndexTermSearchResult {
		displayAs?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		seeValue?: string | null;
	}
	export interface ErskineMayIndexTermSearchResultFormProperties {
		displayAs: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		seeValue: FormControl<string | null | undefined>,
	}
	export function CreateErskineMayIndexTermSearchResultFormGroup() {
		return new FormGroup<ErskineMayIndexTermSearchResultFormProperties>({
			displayAs: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			seeValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErskineMayIndexTermSearchResultErskineMaySearch {
		searchResults?: Array<ErskineMayIndexTermSearchResult>;
		searchTerm?: string | null;
		searchTerms?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		skip?: number | null;
		suggestedSearch?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		take?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults?: number | null;
	}
	export interface ErskineMayIndexTermSearchResultErskineMaySearchFormProperties {
		searchTerm: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		skip: FormControl<number | null | undefined>,
		suggestedSearch: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		take: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateErskineMayIndexTermSearchResultErskineMaySearchFormGroup() {
		return new FormGroup<ErskineMayIndexTermSearchResultErskineMaySearchFormProperties>({
			searchTerm: new FormControl<string | null | undefined>(undefined),
			skip: new FormControl<number | null | undefined>(undefined),
			suggestedSearch: new FormControl<string | null | undefined>(undefined),
			take: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ErskineMayParagraphSearchResultErskineMaySearch {
		searchResults?: Array<ErskineMayParagraphSearchResult>;
		searchTerm?: string | null;
		searchTerms?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		skip?: number | null;
		suggestedSearch?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		take?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults?: number | null;
	}
	export interface ErskineMayParagraphSearchResultErskineMaySearchFormProperties {
		searchTerm: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		skip: FormControl<number | null | undefined>,
		suggestedSearch: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		take: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateErskineMayParagraphSearchResultErskineMaySearchFormGroup() {
		return new FormGroup<ErskineMayParagraphSearchResultErskineMaySearchFormProperties>({
			searchTerm: new FormControl<string | null | undefined>(undefined),
			skip: new FormControl<number | null | undefined>(undefined),
			suggestedSearch: new FormControl<string | null | undefined>(undefined),
			take: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ErskineMayPart {
		chapters?: Array<ErskineMayChapterOverview>;
		description?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number?: number | null;
		title?: string | null;
	}
	export interface ErskineMayPartFormProperties {
		description: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateErskineMayPartFormGroup() {
		return new FormGroup<ErskineMayPartFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErskineMaySectionDetail {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		chapterNumber?: number | null;
		chapterTitle?: string | null;
		contentHtml?: string | null;
		footnotes?: Array<ErskineMayFootnote>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		isUpdated?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		parentSectionId?: number | null;
		parentSectionTitle?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		partNumber?: number | null;
		partTitle?: string | null;
		subSections?: Array<ErskineMaySectionOverview>;
		title?: string | null;
		titleChain?: string | null;
		updatedDate?: Date | null;
	}
	export interface ErskineMaySectionDetailFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		chapterNumber: FormControl<number | null | undefined>,
		chapterTitle: FormControl<string | null | undefined>,
		contentHtml: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		isUpdated: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		parentSectionId: FormControl<number | null | undefined>,
		parentSectionTitle: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		partNumber: FormControl<number | null | undefined>,
		partTitle: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		titleChain: FormControl<string | null | undefined>,
		updatedDate: FormControl<Date | null | undefined>,
	}
	export function CreateErskineMaySectionDetailFormGroup() {
		return new FormGroup<ErskineMaySectionDetailFormProperties>({
			chapterNumber: new FormControl<number | null | undefined>(undefined),
			chapterTitle: new FormControl<string | null | undefined>(undefined),
			contentHtml: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isUpdated: new FormControl<boolean | null | undefined>(undefined),
			parentSectionId: new FormControl<number | null | undefined>(undefined),
			parentSectionTitle: new FormControl<string | null | undefined>(undefined),
			partNumber: new FormControl<number | null | undefined>(undefined),
			partTitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			titleChain: new FormControl<string | null | undefined>(undefined),
			updatedDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ErskineMaySectionSearchResult {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		chapterNumber?: number | null;
		chapterTitle?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		partNumber?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sectionId?: number | null;
		sectionTitle?: string | null;
		sectionTitleChain?: string | null;
	}
	export interface ErskineMaySectionSearchResultFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		chapterNumber: FormControl<number | null | undefined>,
		chapterTitle: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		partNumber: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sectionId: FormControl<number | null | undefined>,
		sectionTitle: FormControl<string | null | undefined>,
		sectionTitleChain: FormControl<string | null | undefined>,
	}
	export function CreateErskineMaySectionSearchResultFormGroup() {
		return new FormGroup<ErskineMaySectionSearchResultFormProperties>({
			chapterNumber: new FormControl<number | null | undefined>(undefined),
			chapterTitle: new FormControl<string | null | undefined>(undefined),
			partNumber: new FormControl<number | null | undefined>(undefined),
			sectionId: new FormControl<number | null | undefined>(undefined),
			sectionTitle: new FormControl<string | null | undefined>(undefined),
			sectionTitleChain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErskineMaySectionSearchResultErskineMaySearch {
		searchResults?: Array<ErskineMaySectionSearchResult>;
		searchTerm?: string | null;
		searchTerms?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		skip?: number | null;
		suggestedSearch?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		take?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults?: number | null;
	}
	export interface ErskineMaySectionSearchResultErskineMaySearchFormProperties {
		searchTerm: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		skip: FormControl<number | null | undefined>,
		suggestedSearch: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		take: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateErskineMaySectionSearchResultErskineMaySearchFormGroup() {
		return new FormGroup<ErskineMaySectionSearchResultErskineMaySearchFormProperties>({
			searchTerm: new FormControl<string | null | undefined>(undefined),
			skip: new FormControl<number | null | undefined>(undefined),
			suggestedSearch: new FormControl<string | null | undefined>(undefined),
			take: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a single chapter overview by chapter number.
		 * Get api/Chapter/{chapterNumber}
		 * @param {number} chapterNumber Chapter overview with the chapter number specified
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ErskineMayChapterOverview} Success
		 */
		ApiChapter_chapterNumberGet(chapterNumber: number, headersHandler?: () => HttpHeaders): Observable<ErskineMayChapterOverview> {
			return this.http.get<ErskineMayChapterOverview>(this.baseUri + 'api/Chapter/' + chapterNumber, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of index terms by start letter.
		 * Get api/IndexTerm/browse
		 * @param {string} startLetter Index terms by start letter
		 * @param {number} skip The number of records to skip from the first, default is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} take The number of records to return, default is 20, maximum is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ErskineMayIndexTermSearchResultErskineMaySearch} Success
		 */
		ApiIndexTermBrowseGetByStartLetterAndSkipAndTake(startLetter: string | null | undefined, skip: number | null | undefined, take: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ErskineMayIndexTermSearchResultErskineMaySearch> {
			return this.http.get<ErskineMayIndexTermSearchResultErskineMaySearch>(this.baseUri + 'api/IndexTerm/browse?startLetter=' + (startLetter == null ? '' : encodeURIComponent(startLetter)) + '&skip=' + skip + '&take=' + take, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an index term by id.
		 * Get api/IndexTerm/{indexTermId}
		 * @param {number} indexTermId Index term by if
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ErskineMayIndexTerm} Success
		 */
		ApiIndexTerm_indexTermIdGet(indexTermId: number, headersHandler?: () => HttpHeaders): Observable<ErskineMayIndexTerm> {
			return this.http.get<ErskineMayIndexTerm>(this.baseUri + 'api/IndexTerm/' + indexTermId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of all parts.
		 * Get api/Part
		 * @return {Array<ErskineMayPart>} Success
		 */
		ApiPartGet(headersHandler?: () => HttpHeaders): Observable<Array<ErskineMayPart>> {
			return this.http.get<Array<ErskineMayPart>>(this.baseUri + 'api/Part', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a part by part number.
		 * Get api/Part/{partNumber}
		 * @param {number} partNumber Part by part number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ErskineMayPart} Success
		 */
		ApiPart_partNumberGet(partNumber: number, headersHandler?: () => HttpHeaders): Observable<ErskineMayPart> {
			return this.http.get<ErskineMayPart>(this.baseUri + 'api/Part/' + partNumber, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of index terms which contain the search term.
		 * Get api/Search/IndexTermSearchResults/{searchTerm}
		 * @param {string} searchTerm Index terms which contain search term.
		 * @param {number} skip The number of records to skip from the first, default is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} take The number of records to return, default is 20, maximum is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ErskineMayIndexTermSearchResultErskineMaySearch} Success
		 */
		ApiSearchIndexTermSearchResults_searchTermGetBySkipAndTake(searchTerm: string, skip: number | null | undefined, take: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ErskineMayIndexTermSearchResultErskineMaySearch> {
			return this.http.get<ErskineMayIndexTermSearchResultErskineMaySearch>(this.baseUri + 'api/Search/IndexTermSearchResults/' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&skip=' + skip + '&take=' + take, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a section overview by reference.
		 * Get api/Search/Paragraph/{reference}
		 * @param {string} reference Section overview by reference.
		 * @return {ErskineMaySectionOverview} Success
		 */
		ApiSearchParagraph_referenceGet(reference: string, headersHandler?: () => HttpHeaders): Observable<ErskineMaySectionOverview> {
			return this.http.get<ErskineMaySectionOverview>(this.baseUri + 'api/Search/Paragraph/' + (reference == null ? '' : encodeURIComponent(reference)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of paragraphs which contain the search term.
		 * Get api/Search/ParagraphSearchResults/{searchTerm}
		 * @param {string} searchTerm Paragraphs which contain search term in their content.
		 * @param {number} skip The number of records to skip from the first, default is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} take The number of records to return, default is 20, maximum is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ErskineMayParagraphSearchResultErskineMaySearch} Success
		 */
		ApiSearchParagraphSearchResults_searchTermGetBySkipAndTake(searchTerm: string, skip: number | null | undefined, take: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ErskineMayParagraphSearchResultErskineMaySearch> {
			return this.http.get<ErskineMayParagraphSearchResultErskineMaySearch>(this.baseUri + 'api/Search/ParagraphSearchResults/' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&skip=' + skip + '&take=' + take, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of sections which contain the search term.
		 * Get api/Search/SectionSearchResults/{searchTerm}
		 * @param {string} searchTerm Sections which contain search term in their title.
		 * @param {number} skip The number of records to skip from the first, default is 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} take The number of records to return, default is 20, maximum is 20.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ErskineMaySectionSearchResultErskineMaySearch} Success
		 */
		ApiSearchSectionSearchResults_searchTermGetBySkipAndTake(searchTerm: string, skip: number | null | undefined, take: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ErskineMaySectionSearchResultErskineMaySearch> {
			return this.http.get<ErskineMaySectionSearchResultErskineMaySearch>(this.baseUri + 'api/Search/SectionSearchResults/' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&skip=' + skip + '&take=' + take, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a section by section id.
		 * Get api/Section/{sectionId}
		 * @param {number} sectionId Section by id.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ErskineMaySectionDetail} Success
		 */
		ApiSection_sectionIdGet(sectionId: number, headersHandler?: () => HttpHeaders): Observable<ErskineMaySectionDetail> {
			return this.http.get<ErskineMaySectionDetail>(this.baseUri + 'api/Section/' + sectionId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a section overview by section id and step.
		 * Get api/Section/{sectionId},{step}
		 * @param {number} sectionId Section by id.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} step Number of sections to step over from given section.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {ErskineMaySectionOverview} Success
		 */
		ApiSection_sectionId__stepGet(sectionId: number, step: number, headersHandler?: () => HttpHeaders): Observable<ErskineMaySectionOverview> {
			return this.http.get<ErskineMaySectionOverview>(this.baseUri + 'api/Section/' + sectionId + ',' + step, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

