import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AdverbsElement {
		end?: number | null;
		start?: number | null;
		text?: string | null;
	}
	export interface AdverbsElementFormProperties {
		end: FormControl<number | null | undefined>,
		start: FormControl<number | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateAdverbsElementFormGroup() {
		return new FormGroup<AdverbsElementFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Analysis {
		stats?: Stats;
		title?: string | null;
	}
	export interface AnalysisFormProperties {
		title: FormControl<string | null | undefined>,
	}
	export function CreateAnalysisFormGroup() {
		return new FormGroup<AnalysisFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Stats {
		avgSentenceLength?: number | null;
		fleschKincaidGradeLevel?: number | null;
		fleschReadingLevel?: number | null;
		longSentenceCount?: number | null;
		passiveSentenceCount?: number | null;
		sentenceCount?: number | null;
		wordCount?: number | null;
	}
	export interface StatsFormProperties {
		avgSentenceLength: FormControl<number | null | undefined>,
		fleschKincaidGradeLevel: FormControl<number | null | undefined>,
		fleschReadingLevel: FormControl<number | null | undefined>,
		longSentenceCount: FormControl<number | null | undefined>,
		passiveSentenceCount: FormControl<number | null | undefined>,
		sentenceCount: FormControl<number | null | undefined>,
		wordCount: FormControl<number | null | undefined>,
	}
	export function CreateStatsFormGroup() {
		return new FormGroup<StatsFormProperties>({
			avgSentenceLength: new FormControl<number | null | undefined>(undefined),
			fleschKincaidGradeLevel: new FormControl<number | null | undefined>(undefined),
			fleschReadingLevel: new FormControl<number | null | undefined>(undefined),
			longSentenceCount: new FormControl<number | null | undefined>(undefined),
			passiveSentenceCount: new FormControl<number | null | undefined>(undefined),
			sentenceCount: new FormControl<number | null | undefined>(undefined),
			wordCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DocumentListSummary {
		id?: number | null;
		name?: string | null;
	}
	export interface DocumentListSummaryFormProperties {
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateDocumentListSummaryFormGroup() {
		return new FormGroup<DocumentListSummaryFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentResponseDetailed {
		completed?: Date | null;
		eta?: Date | null;
		id?: number | null;
		DocumentResponseDetailedParagraphs?: Array<DocumentResponseDetailedParagraphs>;
		scanSettings?: DocumentResponseDetailedScanSettings;
		started?: Date | null;
		stats?: Stats;
		title?: string | null;
	}
	export interface DocumentResponseDetailedFormProperties {
		completed: FormControl<Date | null | undefined>,
		eta: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		started: FormControl<Date | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateDocumentResponseDetailedFormGroup() {
		return new FormGroup<DocumentResponseDetailedFormProperties>({
			completed: new FormControl<Date | null | undefined>(undefined),
			eta: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentResponseDetailedParagraphs {
		paragraphCounter?: number | null;
		paragraphIndex?: number | null;
		stats?: DocumentResponseDetailedParagraphsStats;
		text?: string | null;
	}
	export interface DocumentResponseDetailedParagraphsFormProperties {
		paragraphCounter: FormControl<number | null | undefined>,
		paragraphIndex: FormControl<number | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateDocumentResponseDetailedParagraphsFormGroup() {
		return new FormGroup<DocumentResponseDetailedParagraphsFormProperties>({
			paragraphCounter: new FormControl<number | null | undefined>(undefined),
			paragraphIndex: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentResponseDetailedParagraphsStats {
		adverbs?: Array<Array<AdverbsElement>>;
		hiddenVerbs?: Array<Array<HiddenVerbsElement>>;
		longSentences?: Array<Array<LongSentencesElement>>;
		passives?: Array<Array<PassivesElement>>;
		veryLongSentences?: Array<Array<VeryLongSentencesElement>>;
	}
	export interface DocumentResponseDetailedParagraphsStatsFormProperties {
	}
	export function CreateDocumentResponseDetailedParagraphsStatsFormGroup() {
		return new FormGroup<DocumentResponseDetailedParagraphsStatsFormProperties>({
		});

	}

	export interface HiddenVerbsElement {
		end?: number | null;
		noun?: string | null;
		start?: number | null;
		text?: string | null;
	}
	export interface HiddenVerbsElementFormProperties {
		end: FormControl<number | null | undefined>,
		noun: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateHiddenVerbsElementFormGroup() {
		return new FormGroup<HiddenVerbsElementFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			noun: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LongSentencesElement {
		end?: number | null;
		start?: number | null;
		wordCount?: number | null;
	}
	export interface LongSentencesElementFormProperties {
		end: FormControl<number | null | undefined>,
		start: FormControl<number | null | undefined>,
		wordCount: FormControl<number | null | undefined>,
	}
	export function CreateLongSentencesElementFormGroup() {
		return new FormGroup<LongSentencesElementFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			wordCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PassivesElement {
		end?: number | null;
		passivePiece?: string | null;
		start?: number | null;
		verb?: string | null;
	}
	export interface PassivesElementFormProperties {
		end: FormControl<number | null | undefined>,
		passivePiece: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
		verb: FormControl<string | null | undefined>,
	}
	export function CreatePassivesElementFormGroup() {
		return new FormGroup<PassivesElementFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			passivePiece: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			verb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VeryLongSentencesElement {
		end?: number | null;
		start?: number | null;
		wordCount?: number | null;
	}
	export interface VeryLongSentencesElementFormProperties {
		end: FormControl<number | null | undefined>,
		start: FormControl<number | null | undefined>,
		wordCount: FormControl<number | null | undefined>,
	}
	export function CreateVeryLongSentencesElementFormGroup() {
		return new FormGroup<VeryLongSentencesElementFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
			wordCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DocumentResponseDetailedScanSettings {
		longSentenceWordCount?: number | null;
		veryLongSentenceWordCount?: number | null;
	}
	export interface DocumentResponseDetailedScanSettingsFormProperties {
		longSentenceWordCount: FormControl<number | null | undefined>,
		veryLongSentenceWordCount: FormControl<number | null | undefined>,
	}
	export function CreateDocumentResponseDetailedScanSettingsFormGroup() {
		return new FormGroup<DocumentResponseDetailedScanSettingsFormProperties>({
			longSentenceWordCount: new FormControl<number | null | undefined>(undefined),
			veryLongSentenceWordCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DocumentResponseNotReady {
		eta?: Date | null;
		id?: number | null;
		started?: Date | null;
	}
	export interface DocumentResponseNotReadyFormProperties {
		eta: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		started: FormControl<Date | null | undefined>,
	}
	export function CreateDocumentResponseNotReadyFormGroup() {
		return new FormGroup<DocumentResponseNotReadyFormProperties>({
			eta: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface NewDocumentResponse {

		/** Required */
		docId: number;

		/** Required */
		scanSettings: NewDocumentResponseScanSettings;

		/** Required */
		task: string;
	}
	export interface NewDocumentResponseFormProperties {

		/** Required */
		docId: FormControl<number | null | undefined>,

		/** Required */
		task: FormControl<string | null | undefined>,
	}
	export function CreateNewDocumentResponseFormGroup() {
		return new FormGroup<NewDocumentResponseFormProperties>({
			docId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			task: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NewDocumentResponseScanSettings {
		longSentenceWordCount?: number | null;
		veryLongSentenceWordCount?: number | null;
	}
	export interface NewDocumentResponseScanSettingsFormProperties {
		longSentenceWordCount: FormControl<number | null | undefined>,
		veryLongSentenceWordCount: FormControl<number | null | undefined>,
	}
	export function CreateNewDocumentResponseScanSettingsFormGroup() {
		return new FormGroup<NewDocumentResponseScanSettingsFormProperties>({
			longSentenceWordCount: new FormControl<number | null | undefined>(undefined),
			veryLongSentenceWordCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface NewScan {
		scanSettings?: NewScanScanSettings;

		/** Required */
		title: string;

		/** Required */
		NewScanWebUrls: Array<NewScanWebUrls>;
	}
	export interface NewScanFormProperties {

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateNewScanFormGroup() {
		return new FormGroup<NewScanFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NewScanScanSettings {
		longSentenceWordCount?: number | null;
		veryLongSentenceWordCount?: number | null;
	}
	export interface NewScanScanSettingsFormProperties {
		longSentenceWordCount: FormControl<number | null | undefined>,
		veryLongSentenceWordCount: FormControl<number | null | undefined>,
	}
	export function CreateNewScanScanSettingsFormGroup() {
		return new FormGroup<NewScanScanSettingsFormProperties>({
			longSentenceWordCount: new FormControl<number | null | undefined>(undefined),
			veryLongSentenceWordCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface NewScanWebUrls {

		/** Required */
		url: string;
	}
	export interface NewScanWebUrlsFormProperties {

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateNewScanWebUrlsFormGroup() {
		return new FormGroup<NewScanWebUrlsFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NewScanResponse {

		/** Required */
		id: number;

		/** Required */
		title: string;

		/** Required */
		NewScanResponseWebUrls: Array<NewScanResponseWebUrls>;
	}
	export interface NewScanResponseFormProperties {

		/** Required */
		id: FormControl<number | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateNewScanResponseFormGroup() {
		return new FormGroup<NewScanResponseFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NewScanResponseWebUrls {

		/** Required */
		id: number;

		/** Required */
		url: string;
	}
	export interface NewScanResponseWebUrlsFormProperties {

		/** Required */
		id: FormControl<number | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateNewScanResponseWebUrlsFormGroup() {
		return new FormGroup<NewScanResponseWebUrlsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ScanDetailed {

		/** Required */
		stats: Stats;

		/** Required */
		title: string;

		/** Required */
		webUrls: Array<WebUrl>;
	}
	export interface ScanDetailedFormProperties {

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateScanDetailedFormGroup() {
		return new FormGroup<ScanDetailedFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebUrl extends WebUrlHeader {

		/** Required */
		analysis: Analysis;
	}
	export interface WebUrlFormProperties extends WebUrlHeaderFormProperties {
	}
	export function CreateWebUrlFormGroup() {
		return new FormGroup<WebUrlFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ScanResponseDetailed {
		completed?: Date | null;
		eta?: Date | null;
		id?: number | null;
		scan?: ScanDetailed;
		started?: Date | null;
	}
	export interface ScanResponseDetailedFormProperties {
		completed: FormControl<Date | null | undefined>,
		eta: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		started: FormControl<Date | null | undefined>,
	}
	export function CreateScanResponseDetailedFormGroup() {
		return new FormGroup<ScanResponseDetailedFormProperties>({
			completed: new FormControl<Date | null | undefined>(undefined),
			eta: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ScanResponseSummary {
		completed?: Date | null;
		eta?: Date | null;
		id?: number | null;
		scan?: ScanSummary;
		started?: Date | null;
	}
	export interface ScanResponseSummaryFormProperties {
		completed: FormControl<Date | null | undefined>,
		eta: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		started: FormControl<Date | null | undefined>,
	}
	export function CreateScanResponseSummaryFormGroup() {
		return new FormGroup<ScanResponseSummaryFormProperties>({
			completed: new FormControl<Date | null | undefined>(undefined),
			eta: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ScanSummary {

		/** Required */
		title: string;

		/** Required */
		webUrls: Array<WebUrlHeader>;
	}
	export interface ScanSummaryFormProperties {

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateScanSummaryFormGroup() {
		return new FormGroup<ScanSummaryFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebUrlHeader {

		/** Required */
		id: number;

		/** Required */
		url: string;
	}
	export interface WebUrlHeaderFormProperties {

		/** Required */
		id: FormControl<number | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebUrlHeaderFormGroup() {
		return new FormGroup<WebUrlHeaderFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Search {

		/** Required */
		dictId: number;

		/** Required */
		docId: number;
	}
	export interface SearchFormProperties {

		/** Required */
		dictId: FormControl<number | null | undefined>,

		/** Required */
		docId: FormControl<number | null | undefined>,
	}
	export function CreateSearchFormGroup() {
		return new FormGroup<SearchFormProperties>({
			dictId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			docId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebResponseNotReady {
		eta?: Date | null;
		id?: number | null;
		started?: Date | null;
	}
	export interface WebResponseNotReadyFormProperties {
		eta: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		started: FormControl<Date | null | undefined>,
	}
	export function CreateWebResponseNotReadyFormGroup() {
		return new FormGroup<WebResponseNotReadyFormProperties>({
			eta: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface WebUrlDetail {
		WebUrlDetailParagraphs?: Array<WebUrlDetailParagraphs>;

		/** Required */
		stats: Stats;

		/** Required */
		title: string;

		/** Required */
		url: string;
	}
	export interface WebUrlDetailFormProperties {

		/** Required */
		title: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebUrlDetailFormGroup() {
		return new FormGroup<WebUrlDetailFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebUrlDetailParagraphs {
		paragraphCounter?: number | null;
		paragraphIndex?: number | null;
		stats?: WebUrlDetailParagraphsStats;
		text?: string | null;
	}
	export interface WebUrlDetailParagraphsFormProperties {
		paragraphCounter: FormControl<number | null | undefined>,
		paragraphIndex: FormControl<number | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateWebUrlDetailParagraphsFormGroup() {
		return new FormGroup<WebUrlDetailParagraphsFormProperties>({
			paragraphCounter: new FormControl<number | null | undefined>(undefined),
			paragraphIndex: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WebUrlDetailParagraphsStats {
		adverbs?: Array<Array<AdverbsElement>>;
		hiddenVerbs?: Array<Array<HiddenVerbsElement>>;
		longSentences?: Array<Array<LongSentencesElement>>;
		passives?: Array<Array<PassivesElement>>;
		veryLongSentences?: Array<Array<VeryLongSentencesElement>>;
	}
	export interface WebUrlDetailParagraphsStatsFormProperties {
	}
	export function CreateWebUrlDetailParagraphsStatsFormGroup() {
		return new FormGroup<WebUrlDetailParagraphsStatsFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get your list of dictionaries
		 * Get your list of dictionaries
		 * Get dictionaries
		 * @return {void} Successful response
		 */
		DictionariesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'dictionaries', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get your list of documents
		 * Get your list of documents
		 * Get documents
		 * @return {Array<DocumentListSummary>} Successful response
		 */
		DocumentsGet(headersHandler?: () => HttpHeaders): Observable<Array<DocumentListSummary>> {
			return this.http.get<Array<DocumentListSummary>>(this.baseUri + 'documents', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get data from a previously submitted document
		 * Get data from a previously submitted document identified by ***docId***
		 * Get documents/{docId}
		 * @param {number} docId Id of document to fetch
		 * @return {DocumentResponseDetailed} document response contained readability details for the document
		 */
		Documents_docIdGet(docId: number, headersHandler?: () => HttpHeaders): Observable<DocumentResponseDetailed> {
			return this.http.get<DocumentResponseDetailed>(this.baseUri + 'documents/' + docId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get your list of searches
		 * Get your list of searches
		 * Get searches
		 * @return {void} Successful response
		 */
		SearchesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'searches', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Run a search
		 * Run a search on document **docId** using dictionary **dictId**
		 * Post searches
		 * @param {Search} requestBody Run a search on document **docId** using dictionary**dictId**
		 * @return {string} Successful response
		 */
		SearchesPost(requestBody: Search, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'searches', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * Gets search results for a particular document/dictionary
		 * Get detailed results for a scan/url (readability, long sentence and passive language instances), identified by **scanId** & **urlId**
		 * Get searches/{docId}/{dictionaryId}
		 * @param {number} docId Id of document
		 * @param {number} dictionaryId Id of dictionary
		 * @param {boolean} matchingOnly Only returning paragraphs containing a match
		 * @return {void} scan response
		 */
		Searches_docId_dictionaryIdGetByMatchingOnly(docId: number, dictionaryId: number, matchingOnly: boolean, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'searches/' + docId + '/' + dictionaryId + '?matchingOnly=' + matchingOnly, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get your list of scans
		 * Get your list of scans
		 * Get webscans
		 * @return {Array<ScanResponseSummary>} Successful response
		 */
		WebscansGet(headersHandler?: () => HttpHeaders): Observable<Array<ScanResponseSummary>> {
			return this.http.get<Array<ScanResponseSummary>>(this.baseUri + 'webscans', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Run a new scan
		 * The scan runs in the background but returns immediately with a JSON response containing an "id" that represents your scan.
		 * You can use this id in other requests to retrieve your scan result.
		 * Also, an "id" is returned for each url which can be used to retrieve detailed results for individual scan urls.
		 * Post webscans
		 * @param {NewScan} requestBody Scan title and webUrls to analyze
		 * @return {NewScanResponse} Successful response
		 */
		WebscansPost(requestBody: NewScan, headersHandler?: () => HttpHeaders): Observable<NewScanResponse> {
			return this.http.post<NewScanResponse>(this.baseUri + 'webscans', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get data from a previously run scan
		 * Get data from a previously run scan, identified by **scanId**
		 * Get webscans/{scanId}
		 * @param {number} scanId Id of scan to fetch
		 * @return {ScanResponseDetailed} scan response
		 */
		Webscans_scanIdGet(scanId: number, headersHandler?: () => HttpHeaders): Observable<ScanResponseDetailed> {
			return this.http.get<ScanResponseDetailed>(this.baseUri + 'webscans/' + scanId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets data for a particular scan/webUrl
		 * Get detailed results for a scan/url (readability, long sentence and passive language instances), identified by **scanId** & **urlId**
		 * Get webscans/{scanId}/webUrls/{urlId}
		 * @param {number} scanId Id of scan
		 * @param {number} urlId Id of url to fetch
		 * @return {WebUrlDetail} scan response
		 */
		Webscans_scanIdWebUrls_urlIdGet(scanId: number, urlId: number, headersHandler?: () => HttpHeaders): Observable<WebUrlDetail> {
			return this.http.get<WebUrlDetail>(this.baseUri + 'webscans/' + scanId + '/webUrls/' + urlId, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

