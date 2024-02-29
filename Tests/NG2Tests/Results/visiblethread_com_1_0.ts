import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AdverbsElement {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start?: number | null;
		text?: string | null;
	}
	export interface AdverbsElementFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		avgSentenceLength?: number | null;

		/** Type: float */
		fleschKincaidGradeLevel?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		fleschReadingLevel?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		longSentenceCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		passiveSentenceCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sentenceCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		wordCount?: number | null;
	}
	export interface StatsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		avgSentenceLength: FormControl<number | null | undefined>,

		/** Type: float */
		fleschKincaidGradeLevel: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		fleschReadingLevel: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		longSentenceCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		passiveSentenceCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sentenceCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		name?: string | null;
	}
	export interface DocumentListSummaryFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateDocumentListSummaryFormGroup() {
		return new FormGroup<DocumentListSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentResponseDetailed {
		completed?: Date | null;
		eta?: Date | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		DocumentResponseDetailedParagraphs?: Array<DocumentResponseDetailedParagraphs>;
		scanSettings?: DocumentResponseDetailedScanSettings;
		started?: Date | null;
		stats?: Stats;
		title?: string | null;
	}
	export interface DocumentResponseDetailedFormProperties {
		completed: FormControl<Date | null | undefined>,
		eta: FormControl<Date | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		started: FormControl<Date | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateDocumentResponseDetailedFormGroup() {
		return new FormGroup<DocumentResponseDetailedFormProperties>({
			completed: new FormControl<Date | null | undefined>(undefined),
			eta: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentResponseDetailedParagraphs {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		paragraphCounter?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		paragraphIndex?: number | null;
		stats?: DocumentResponseDetailedParagraphsStats;
		text?: string | null;
	}
	export interface DocumentResponseDetailedParagraphsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		paragraphCounter: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end?: number | null;
		noun?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start?: number | null;
		text?: string | null;
	}
	export interface HiddenVerbsElementFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end: FormControl<number | null | undefined>,
		noun: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		wordCount?: number | null;
	}
	export interface LongSentencesElementFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end?: number | null;
		passivePiece?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start?: number | null;
		verb?: string | null;
	}
	export interface PassivesElementFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end: FormControl<number | null | undefined>,
		passivePiece: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		wordCount?: number | null;
	}
	export interface VeryLongSentencesElementFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		end: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		start: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		longSentenceWordCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		veryLongSentenceWordCount?: number | null;
	}
	export interface DocumentResponseDetailedScanSettingsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		longSentenceWordCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		started?: Date | null;
	}
	export interface DocumentResponseNotReadyFormProperties {
		eta: FormControl<Date | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		started: FormControl<Date | null | undefined>,
	}
	export function CreateDocumentResponseNotReadyFormGroup() {
		return new FormGroup<DocumentResponseNotReadyFormProperties>({
			eta: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface NewDocumentResponse {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		docId: string;

		/** Required */
		scanSettings: NewDocumentResponseScanSettings;

		/** Required */
		task: string;
	}
	export interface NewDocumentResponseFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		docId: FormControl<string | null | undefined>,

		/** Required */
		task: FormControl<string | null | undefined>,
	}
	export function CreateNewDocumentResponseFormGroup() {
		return new FormGroup<NewDocumentResponseFormProperties>({
			docId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			task: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NewDocumentResponseScanSettings {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		longSentenceWordCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		veryLongSentenceWordCount?: number | null;
	}
	export interface NewDocumentResponseScanSettingsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		longSentenceWordCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		longSentenceWordCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		veryLongSentenceWordCount?: number | null;
	}
	export interface NewScanScanSettingsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		longSentenceWordCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/** Required */
		title: string;

		/** Required */
		NewScanResponseWebUrls: Array<NewScanResponseWebUrls>;
	}
	export interface NewScanResponseFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreateNewScanResponseFormGroup() {
		return new FormGroup<NewScanResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NewScanResponseWebUrls {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/** Required */
		url: string;
	}
	export interface NewScanResponseWebUrlsFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateNewScanResponseWebUrlsFormGroup() {
		return new FormGroup<NewScanResponseWebUrlsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ScanResponseDetailed {
		completed?: Date | null;
		eta?: Date | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		scan?: ScanDetailed;
		started?: Date | null;
	}
	export interface ScanResponseDetailedFormProperties {
		completed: FormControl<Date | null | undefined>,
		eta: FormControl<Date | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		started: FormControl<Date | null | undefined>,
	}
	export function CreateScanResponseDetailedFormGroup() {
		return new FormGroup<ScanResponseDetailedFormProperties>({
			completed: new FormControl<Date | null | undefined>(undefined),
			eta: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ScanResponseSummary {
		completed?: Date | null;
		eta?: Date | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		scan?: ScanSummary;
		started?: Date | null;
	}
	export interface ScanResponseSummaryFormProperties {
		completed: FormControl<Date | null | undefined>,
		eta: FormControl<Date | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		started: FormControl<Date | null | undefined>,
	}
	export function CreateScanResponseSummaryFormGroup() {
		return new FormGroup<ScanResponseSummaryFormProperties>({
			completed: new FormControl<Date | null | undefined>(undefined),
			eta: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
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

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/** Required */
		url: string;
	}
	export interface WebUrlHeaderFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebUrlHeaderFormGroup() {
		return new FormGroup<WebUrlHeaderFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Search {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		dictId: string;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		docId: string;
	}
	export interface SearchFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		dictId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		docId: FormControl<string | null | undefined>,
	}
	export function CreateSearchFormGroup() {
		return new FormGroup<SearchFormProperties>({
			dictId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			docId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WebResponseNotReady {
		eta?: Date | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		started?: Date | null;
	}
	export interface WebResponseNotReadyFormProperties {
		eta: FormControl<Date | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		started: FormControl<Date | null | undefined>,
	}
	export function CreateWebResponseNotReadyFormGroup() {
		return new FormGroup<WebResponseNotReadyFormProperties>({
			eta: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
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

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		paragraphCounter?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		paragraphIndex?: number | null;
		stats?: WebUrlDetailParagraphsStats;
		text?: string | null;
	}
	export interface WebUrlDetailParagraphsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		paragraphCounter: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
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
		 * @param {string} docId Id of document to fetch
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {DocumentResponseDetailed} document response contained readability details for the document
		 */
		Documents_docIdGet(docId: string, headersHandler?: () => HttpHeaders): Observable<DocumentResponseDetailed> {
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
		 * @param {string} docId Id of document
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} dictionaryId Id of dictionary
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {boolean} matchingOnly Only returning paragraphs containing a match
		 * @return {void} scan response
		 */
		Searches_docId_dictionaryIdGetByMatchingOnly(docId: string, dictionaryId: string, matchingOnly: boolean, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
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
		 * @param {string} scanId Id of scan to fetch
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ScanResponseDetailed} scan response
		 */
		Webscans_scanIdGet(scanId: string, headersHandler?: () => HttpHeaders): Observable<ScanResponseDetailed> {
			return this.http.get<ScanResponseDetailed>(this.baseUri + 'webscans/' + scanId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets data for a particular scan/webUrl
		 * Get detailed results for a scan/url (readability, long sentence and passive language instances), identified by **scanId** & **urlId**
		 * Get webscans/{scanId}/webUrls/{urlId}
		 * @param {string} scanId Id of scan
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} urlId Id of url to fetch
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {WebUrlDetail} scan response
		 */
		Webscans_scanIdWebUrls_urlIdGet(scanId: string, urlId: string, headersHandler?: () => HttpHeaders): Observable<WebUrlDetail> {
			return this.http.get<WebUrlDetail>(this.baseUri + 'webscans/' + scanId + '/webUrls/' + urlId, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

