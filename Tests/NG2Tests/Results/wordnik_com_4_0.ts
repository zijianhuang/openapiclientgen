import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ApiTokenStatus {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		expiresInMillis?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		remainingCalls?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		resetsInMillis?: string | null;
		token?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		totalRequests?: string | null;
		valid?: boolean | null;
	}
	export interface ApiTokenStatusFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		expiresInMillis: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		remainingCalls: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		resetsInMillis: FormControl<string | null | undefined>,
		token: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		totalRequests: FormControl<string | null | undefined>,
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreateApiTokenStatusFormGroup() {
		return new FormGroup<ApiTokenStatusFormProperties>({
			expiresInMillis: new FormControl<string | null | undefined>(undefined),
			remainingCalls: new FormControl<string | null | undefined>(undefined),
			resetsInMillis: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			totalRequests: new FormControl<string | null | undefined>(undefined),
			valid: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AudioFile {
		attributionText?: string | null;
		attributionUrl?: string | null;
		audioType?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		commentCount?: number | null;

		/** Type: DateOnly */
		createdAt?: Date | null;
		createdBy?: string | null;
		description?: string | null;

		/** Type: double */
		duration?: number | null;
		fileUrl?: string | null;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/** Type: float */
		voteAverage?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		voteCount?: number | null;

		/** Type: float */
		voteWeightedAverage?: number | null;
		word?: string | null;
	}
	export interface AudioFileFormProperties {
		attributionText: FormControl<string | null | undefined>,
		attributionUrl: FormControl<string | null | undefined>,
		audioType: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		commentCount: FormControl<number | null | undefined>,

		/** Type: DateOnly */
		createdAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Type: double */
		duration: FormControl<number | null | undefined>,
		fileUrl: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Type: float */
		voteAverage: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		voteCount: FormControl<number | null | undefined>,

		/** Type: float */
		voteWeightedAverage: FormControl<number | null | undefined>,
		word: FormControl<string | null | undefined>,
	}
	export function CreateAudioFileFormGroup() {
		return new FormGroup<AudioFileFormProperties>({
			attributionText: new FormControl<string | null | undefined>(undefined),
			attributionUrl: new FormControl<string | null | undefined>(undefined),
			audioType: new FormControl<string | null | undefined>(undefined),
			commentCount: new FormControl<number | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<number | null | undefined>(undefined),
			fileUrl: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			voteAverage: new FormControl<number | null | undefined>(undefined),
			voteCount: new FormControl<number | null | undefined>(undefined),
			voteWeightedAverage: new FormControl<number | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AudioType {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
	}
	export interface AudioTypeFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateAudioTypeFormGroup() {
		return new FormGroup<AudioTypeFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthenticationToken {
		token?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId?: string | null;
		userSignature?: string | null;
	}
	export interface AuthenticationTokenFormProperties {
		token: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId: FormControl<string | null | undefined>,
		userSignature: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticationTokenFormGroup() {
		return new FormGroup<AuthenticationTokenFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			userSignature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Bigram {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		count?: string | null;
		gram1?: string | null;
		gram2?: string | null;

		/** Type: double */
		mi?: number | null;

		/** Type: double */
		wlmi?: number | null;
	}
	export interface BigramFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		count: FormControl<string | null | undefined>,
		gram1: FormControl<string | null | undefined>,
		gram2: FormControl<string | null | undefined>,

		/** Type: double */
		mi: FormControl<number | null | undefined>,

		/** Type: double */
		wlmi: FormControl<number | null | undefined>,
	}
	export function CreateBigramFormGroup() {
		return new FormGroup<BigramFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			gram1: new FormControl<string | null | undefined>(undefined),
			gram2: new FormControl<string | null | undefined>(undefined),
			mi: new FormControl<number | null | undefined>(undefined),
			wlmi: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Category {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;
		name?: string | null;
	}
	export interface CategoryFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Citation {
		cite?: string | null;
		source?: string | null;
	}
	export interface CitationFormProperties {
		cite: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
	}
	export function CreateCitationFormGroup() {
		return new FormGroup<CitationFormProperties>({
			cite: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContentProvider {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id?: number | null;
		name?: string | null;
	}
	export interface ContentProviderFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateContentProviderFormGroup() {
		return new FormGroup<ContentProviderFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Definition {
		attributionText?: string | null;
		attributionUrl?: string | null;
		citations?: Array<Citation>;
		exampleUses?: Array<ExampleUsage>;
		extendedText?: string | null;
		labels?: Array<Label>;
		notes?: Array<Note>;
		partOfSpeech?: string | null;
		relatedWords?: Array<Related>;

		/** Type: float */
		score?: number | null;
		seqString?: string | null;
		sequence?: string | null;
		sourceDictionary?: string | null;
		text?: string | null;
		textProns?: Array<TextPron>;
		word?: string | null;
	}
	export interface DefinitionFormProperties {
		attributionText: FormControl<string | null | undefined>,
		attributionUrl: FormControl<string | null | undefined>,
		extendedText: FormControl<string | null | undefined>,
		partOfSpeech: FormControl<string | null | undefined>,

		/** Type: float */
		score: FormControl<number | null | undefined>,
		seqString: FormControl<string | null | undefined>,
		sequence: FormControl<string | null | undefined>,
		sourceDictionary: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
		word: FormControl<string | null | undefined>,
	}
	export function CreateDefinitionFormGroup() {
		return new FormGroup<DefinitionFormProperties>({
			attributionText: new FormControl<string | null | undefined>(undefined),
			attributionUrl: new FormControl<string | null | undefined>(undefined),
			extendedText: new FormControl<string | null | undefined>(undefined),
			partOfSpeech: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			seqString: new FormControl<string | null | undefined>(undefined),
			sequence: new FormControl<string | null | undefined>(undefined),
			sourceDictionary: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExampleUsage {
		text?: string | null;
	}
	export interface ExampleUsageFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateExampleUsageFormGroup() {
		return new FormGroup<ExampleUsageFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Label {
		text?: string | null;
		type?: string | null;
	}
	export interface LabelFormProperties {
		text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateLabelFormGroup() {
		return new FormGroup<LabelFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Note {
		appliesTo?: Array<string>;
		noteType?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pos?: number | null;
		value?: string | null;
	}
	export interface NoteFormProperties {
		noteType: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		pos: FormControl<number | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateNoteFormGroup() {
		return new FormGroup<NoteFormProperties>({
			noteType: new FormControl<string | null | undefined>(undefined),
			pos: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Related {
		gram?: string | null;
		label1?: string | null;
		label2?: string | null;
		label3?: string | null;
		label4?: string | null;
		relationshipType?: string | null;
		words?: Array<string>;
	}
	export interface RelatedFormProperties {
		gram: FormControl<string | null | undefined>,
		label1: FormControl<string | null | undefined>,
		label2: FormControl<string | null | undefined>,
		label3: FormControl<string | null | undefined>,
		label4: FormControl<string | null | undefined>,
		relationshipType: FormControl<string | null | undefined>,
	}
	export function CreateRelatedFormGroup() {
		return new FormGroup<RelatedFormProperties>({
			gram: new FormControl<string | null | undefined>(undefined),
			label1: new FormControl<string | null | undefined>(undefined),
			label2: new FormControl<string | null | undefined>(undefined),
			label3: new FormControl<string | null | undefined>(undefined),
			label4: new FormControl<string | null | undefined>(undefined),
			relationshipType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TextPron {
		raw?: string | null;
		rawType?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		seq?: number | null;
	}
	export interface TextPronFormProperties {
		raw: FormControl<string | null | undefined>,
		rawType: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		seq: FormControl<number | null | undefined>,
	}
	export function CreateTextPronFormGroup() {
		return new FormGroup<TextPronFormProperties>({
			raw: new FormControl<string | null | undefined>(undefined),
			rawType: new FormControl<string | null | undefined>(undefined),
			seq: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DefinitionSearchResults {
		results?: Array<Definition>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults?: number | null;
	}
	export interface DefinitionSearchResultsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateDefinitionSearchResultsFormGroup() {
		return new FormGroup<DefinitionSearchResultsFormProperties>({
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Example {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		documentId?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		exampleId?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		provider?: ContentProvider;

		/** Type: float */
		rating?: number | null;
		score?: ScoredWord;
		sentence?: Sentence;
		text?: string | null;
		title?: string | null;
		url?: string | null;
		word?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year?: number | null;
	}
	export interface ExampleFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		documentId: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		exampleId: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,

		/** Type: float */
		rating: FormControl<number | null | undefined>,
		text: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
		word: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateExampleFormGroup() {
		return new FormGroup<ExampleFormProperties>({
			documentId: new FormControl<string | null | undefined>(undefined),
			exampleId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ExampleSearchResults {
		examples?: Array<Example>;
		facets?: Array<Facet>;
	}
	export interface ExampleSearchResultsFormProperties {
	}
	export function CreateExampleSearchResultsFormGroup() {
		return new FormGroup<ExampleSearchResultsFormProperties>({
		});

	}

	export interface Facet {
		facetValues?: Array<FacetValue>;
		name?: string | null;
	}
	export interface FacetFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateFacetFormGroup() {
		return new FormGroup<FacetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FacetValue {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		count?: string | null;
		value?: string | null;
	}
	export interface FacetValueFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		count: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateFacetValueFormGroup() {
		return new FormGroup<FacetValueFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Frequency {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		count?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year?: number | null;
	}
	export interface FrequencyFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		count: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateFrequencyFormGroup() {
		return new FormGroup<FrequencyFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FrequencySummary {
		frequency?: Array<Frequency>;
		frequencyString?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		totalCount?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		unknownYearCount?: number | null;
		word?: string | null;
	}
	export interface FrequencySummaryFormProperties {
		frequencyString: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		totalCount: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		unknownYearCount: FormControl<number | null | undefined>,
		word: FormControl<string | null | undefined>,
	}
	export function CreateFrequencySummaryFormGroup() {
		return new FormGroup<FrequencySummaryFormProperties>({
			frequencyString: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<string | null | undefined>(undefined),
			unknownYearCount: new FormControl<number | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PartOfSpeech {
		allCategories?: Array<Category>;
		roots?: Array<Root>;
		storageAbbr?: Array<string>;
	}
	export interface PartOfSpeechFormProperties {
	}
	export function CreatePartOfSpeechFormGroup() {
		return new FormGroup<PartOfSpeechFormProperties>({
		});

	}

	export interface Root {
		categories?: Array<Category>;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;
		name?: string | null;
	}
	export interface RootFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateRootFormGroup() {
		return new FormGroup<RootFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScoredWord {

		/** Type: double */
		baseWordScore?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		docTermCount?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		lemma?: string | null;
		partOfSpeech?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position?: number | null;

		/** Type: float */
		score?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		sentenceId?: string | null;
		stopword?: boolean | null;
		word?: string | null;
		wordType?: string | null;
	}
	export interface ScoredWordFormProperties {

		/** Type: double */
		baseWordScore: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		docTermCount: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		lemma: FormControl<string | null | undefined>,
		partOfSpeech: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		position: FormControl<number | null | undefined>,

		/** Type: float */
		score: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		sentenceId: FormControl<string | null | undefined>,
		stopword: FormControl<boolean | null | undefined>,
		word: FormControl<string | null | undefined>,
		wordType: FormControl<string | null | undefined>,
	}
	export function CreateScoredWordFormGroup() {
		return new FormGroup<ScoredWordFormProperties>({
			baseWordScore: new FormControl<number | null | undefined>(undefined),
			docTermCount: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lemma: new FormControl<string | null | undefined>(undefined),
			partOfSpeech: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			sentenceId: new FormControl<string | null | undefined>(undefined),
			stopword: new FormControl<boolean | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
			wordType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sentence {
		display?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		documentMetadataId?: string | null;
		hasScoredWords?: boolean | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rating?: number | null;
		scoredWords?: Array<ScoredWord>;
	}
	export interface SentenceFormProperties {
		display: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		documentMetadataId: FormControl<string | null | undefined>,
		hasScoredWords: FormControl<boolean | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rating: FormControl<number | null | undefined>,
	}
	export function CreateSentenceFormGroup() {
		return new FormGroup<SentenceFormProperties>({
			display: new FormControl<string | null | undefined>(undefined),
			documentMetadataId: new FormControl<string | null | undefined>(undefined),
			hasScoredWords: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SimpleDefinition {
		note?: string | null;
		partOfSpeech?: string | null;
		source?: string | null;
		text?: string | null;
	}
	export interface SimpleDefinitionFormProperties {
		note: FormControl<string | null | undefined>,
		partOfSpeech: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateSimpleDefinitionFormGroup() {
		return new FormGroup<SimpleDefinitionFormProperties>({
			note: new FormControl<string | null | undefined>(undefined),
			partOfSpeech: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SimpleExample {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		text?: string | null;
		title?: string | null;
		url?: string | null;
	}
	export interface SimpleExampleFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateSimpleExampleFormGroup() {
		return new FormGroup<SimpleExampleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StringValue {
		word?: string | null;
	}
	export interface StringValueFormProperties {
		word: FormControl<string | null | undefined>,
	}
	export function CreateStringValueFormGroup() {
		return new FormGroup<StringValueFormProperties>({
			word: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Syllable {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		seq?: number | null;
		text?: string | null;
		type?: string | null;
	}
	export interface SyllableFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		seq: FormControl<number | null | undefined>,
		text: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateSyllableFormGroup() {
		return new FormGroup<SyllableFormProperties>({
			seq: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User {
		displayName?: string | null;
		email?: string | null;
		faceBookId?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		password?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status?: number | null;
		userName?: string | null;
		username?: string | null;
	}
	export interface UserFormProperties {
		displayName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		faceBookId: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status: FormControl<number | null | undefined>,
		userName: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			faceBookId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WordList {

		/** Type: DateOnly */
		createdAt?: Date | null;
		description?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;

		/** Type: DateOnly */
		lastActivityAt?: Date | null;
		name?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		numberWordsInList?: string | null;
		permalink?: string | null;
		type?: string | null;

		/** Type: DateOnly */
		updatedAt?: Date | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId?: string | null;
		username?: string | null;
	}
	export interface WordListFormProperties {

		/** Type: DateOnly */
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,

		/** Type: DateOnly */
		lastActivityAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		numberWordsInList: FormControl<string | null | undefined>,
		permalink: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,

		/** Type: DateOnly */
		updatedAt: FormControl<Date | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateWordListFormGroup() {
		return new FormGroup<WordListFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastActivityAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			numberWordsInList: new FormControl<string | null | undefined>(undefined),
			permalink: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WordListWord {

		/** Type: DateOnly */
		createdAt?: Date | null;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		numberCommentsOnWord?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		numberLists?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId?: string | null;
		username?: string | null;
		word?: string | null;
	}
	export interface WordListWordFormProperties {

		/** Type: DateOnly */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		numberCommentsOnWord: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		numberLists: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
		word: FormControl<string | null | undefined>,
	}
	export function CreateWordListWordFormGroup() {
		return new FormGroup<WordListWordFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			numberCommentsOnWord: new FormControl<string | null | undefined>(undefined),
			numberLists: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WordObject {
		canonicalForm?: string | null;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;
		originalWord?: string | null;
		suggestions?: Array<string>;
		vulgar?: string | null;
		word?: string | null;
	}
	export interface WordObjectFormProperties {
		canonicalForm: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,
		originalWord: FormControl<string | null | undefined>,
		vulgar: FormControl<string | null | undefined>,
		word: FormControl<string | null | undefined>,
	}
	export function CreateWordObjectFormGroup() {
		return new FormGroup<WordObjectFormProperties>({
			canonicalForm: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			originalWord: new FormControl<string | null | undefined>(undefined),
			vulgar: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WordOfTheDay {
		category?: string | null;
		contentProvider?: ContentProvider;

		/** Type: DateOnly */
		createdAt?: Date | null;
		createdBy?: string | null;
		definitions?: Array<SimpleDefinition>;
		examples?: Array<SimpleExample>;
		htmlExtra?: string | null;

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: string;
		note?: string | null;
		parentId?: string | null;

		/** Type: DateOnly */
		publishDate?: Date | null;
		word?: string | null;
	}
	export interface WordOfTheDayFormProperties {
		category: FormControl<string | null | undefined>,

		/** Type: DateOnly */
		createdAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		htmlExtra: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,
		note: FormControl<string | null | undefined>,
		parentId: FormControl<string | null | undefined>,

		/** Type: DateOnly */
		publishDate: FormControl<Date | null | undefined>,
		word: FormControl<string | null | undefined>,
	}
	export function CreateWordOfTheDayFormGroup() {
		return new FormGroup<WordOfTheDayFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			htmlExtra: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			note: new FormControl<string | null | undefined>(undefined),
			parentId: new FormControl<string | null | undefined>(undefined),
			publishDate: new FormControl<Date | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WordSearchResult {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		count?: string | null;

		/** Type: double */
		lexicality?: number | null;
		word?: string | null;
	}
	export interface WordSearchResultFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		count: FormControl<string | null | undefined>,

		/** Type: double */
		lexicality: FormControl<number | null | undefined>,
		word: FormControl<string | null | undefined>,
	}
	export function CreateWordSearchResultFormGroup() {
		return new FormGroup<WordSearchResultFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			lexicality: new FormControl<number | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WordSearchResults {
		searchResults?: Array<WordSearchResult>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults?: number | null;
	}
	export interface WordSearchResultsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateWordSearchResultsFormGroup() {
		return new FormGroup<WordSearchResultsFormProperties>({
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns usage statistics for the API account.
		 * Get account.json/apiTokenStatus
		 * @return {void} No response was specified
		 */
		GetApiTokenStatus(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'account.json/apiTokenStatus', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Authenticates a User
		 * Get account.json/authenticate/{username}
		 * @param {string} username A confirmed Wordnik username
		 * @param {string} password The user's password
		 * @return {void} No response was specified
		 */
		Authenticate(username: string, password: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'account.json/authenticate/' + (username == null ? '' : encodeURIComponent(username)) + '&password=' + (password == null ? '' : encodeURIComponent(password)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Authenticates a user
		 * Post account.json/authenticate/{username}
		 * @param {string} username A confirmed Wordnik username
		 * @param {string} requestBody The user's password
		 * @return {void} No response was specified
		 */
		AuthenticatePost(username: string, requestBody: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account.json/authenticate/' + (username == null ? '' : encodeURIComponent(username)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the logged-in User
		 * Requires a valid auth_token to be set.
		 * Get account.json/user
		 * @return {void} No response was specified
		 */
		GetLoggedInUser(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'account.json/user', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches WordList objects for the logged-in user.
		 * Get account.json/wordLists
		 * @param {number} skip Results to skip
		 * @param {number} limit Maximum number of results to return
		 * @return {void} No response was specified
		 */
		GetWordListsForLoggedInUser(skip: number | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'account.json/wordLists?skip=' + skip + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Given a word as a string, returns the WordObject that represents it
		 * Get word.json/{word}
		 * @param {string} word String value of WordObject to return
		 * @param {string} useCanonical If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @param {string} includeSuggestions Return suggestions (for correct spelling, case variants, etc.)
		 * @return {void} No response was specified
		 */
		GetWord(word: string, useCanonical: string | null | undefined, includeSuggestions: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '&useCanonical=' + (useCanonical == null ? '' : encodeURIComponent(useCanonical)) + '&includeSuggestions=' + (includeSuggestions == null ? '' : encodeURIComponent(includeSuggestions)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches audio metadata for a word.
		 * The metadata includes a time-expiring fileUrl which allows reading the audio file directly from the API.  Currently only audio pronunciations from the American Heritage Dictionary in mp3 format are supported.
		 * Get word.json/{word}/audio
		 * @param {string} word Word to get audio for.
		 * @param {string} useCanonical Use the canonical form of the word
		 * @param {number} limit Maximum number of results to return
		 * @return {void} No response was specified
		 */
		GetAudio(word: string, useCanonical: string | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/audio&useCanonical=' + (useCanonical == null ? '' : encodeURIComponent(useCanonical)) + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return definitions for a word
		 * Get word.json/{word}/definitions
		 * @param {string} word Word to return definitions for
		 * @param {number} limit Maximum number of results to return
		 * @param {string} partOfSpeech CSV list of part-of-speech types
		 * @param {string} includeRelated Return related words with definitions
		 * @param {Array<string>} sourceDictionaries Source dictionary to return definitions from.  If 'all' is received, results are returned from all sources. If multiple values are received (e.g. 'century,wiktionary'), results are returned from the first specified dictionary that has definitions. If left blank, results are returned from the first dictionary that has definitions. By default, dictionaries are searched in this order: ahd, wiktionary, webster, century, wordnet
		 * @param {string} useCanonical If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @param {string} includeTags Return a closed set of XML tags in response
		 * @return {void} No response was specified
		 */
		GetDefinitions(word: string, limit: number | null | undefined, partOfSpeech: string | null | undefined, includeRelated: string | null | undefined, sourceDictionaries: Array<string> | null | undefined, useCanonical: string | null | undefined, includeTags: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/definitions&limit=' + limit + '&partOfSpeech=' + (partOfSpeech == null ? '' : encodeURIComponent(partOfSpeech)) + '&includeRelated=' + (includeRelated == null ? '' : encodeURIComponent(includeRelated)) + '&' + sourceDictionaries?.map(z => `sourceDictionaries=${encodeURIComponent(z)}`).join('&') + '&useCanonical=' + (useCanonical == null ? '' : encodeURIComponent(useCanonical)) + '&includeTags=' + (includeTags == null ? '' : encodeURIComponent(includeTags)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches etymology data
		 * Get word.json/{word}/etymologies
		 * @param {string} word Word to return
		 * @param {string} useCanonical If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @return {void} No response was specified
		 */
		GetEtymologies(word: string, useCanonical: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/etymologies&useCanonical=' + (useCanonical == null ? '' : encodeURIComponent(useCanonical)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns examples for a word
		 * Get word.json/{word}/examples
		 * @param {string} word Word to return examples for
		 * @param {string} includeDuplicates Show duplicate examples from different sources
		 * @param {string} useCanonical If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @param {number} skip Results to skip
		 * @param {number} limit Maximum number of results to return
		 * @return {void} No response was specified
		 */
		GetExamples(word: string, includeDuplicates: string | null | undefined, useCanonical: string | null | undefined, skip: number | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/examples&includeDuplicates=' + (includeDuplicates == null ? '' : encodeURIComponent(includeDuplicates)) + '&useCanonical=' + (useCanonical == null ? '' : encodeURIComponent(useCanonical)) + '&skip=' + skip + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns word usage over time
		 * Get word.json/{word}/frequency
		 * @param {string} word Word to return
		 * @param {string} useCanonical If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @param {number} startYear Starting Year
		 * @param {number} endYear Ending Year
		 * @return {void} No response was specified
		 */
		GetWordFrequency(word: string, useCanonical: string | null | undefined, startYear: number | null | undefined, endYear: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/frequency&useCanonical=' + (useCanonical == null ? '' : encodeURIComponent(useCanonical)) + '&startYear=' + startYear + '&endYear=' + endYear, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns syllable information for a word
		 * Get word.json/{word}/hyphenation
		 * @param {string} word Word to get syllables for
		 * @param {string} useCanonical If true will try to return a correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @param {string} sourceDictionary Get from a single dictionary. Valid options: ahd, century, wiktionary, webster, and wordnet.
		 * @param {number} limit Maximum number of results to return
		 * @return {void} No response was specified
		 */
		GetHyphenation(word: string, useCanonical: string | null | undefined, sourceDictionary: string | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/hyphenation&useCanonical=' + (useCanonical == null ? '' : encodeURIComponent(useCanonical)) + '&sourceDictionary=' + (sourceDictionary == null ? '' : encodeURIComponent(sourceDictionary)) + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches bi-gram phrases for a word
		 * Get word.json/{word}/phrases
		 * @param {string} word Word to fetch phrases for
		 * @param {number} limit Maximum number of results to return
		 * @param {number} wlmi Minimum WLMI for the phrase
		 * @param {string} useCanonical If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @return {void} No response was specified
		 */
		GetPhrases(word: string, limit: number | null | undefined, wlmi: number | null | undefined, useCanonical: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/phrases&limit=' + limit + '&wlmi=' + wlmi + '&useCanonical=' + (useCanonical == null ? '' : encodeURIComponent(useCanonical)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns text pronunciations for a given word
		 * Get word.json/{word}/pronunciations
		 * @param {string} word Word to get pronunciations for
		 * @param {string} useCanonical If true will try to return a correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @param {string} sourceDictionary Get from a single dictionary
		 * @param {string} typeFormat Text pronunciation type
		 * @param {number} limit Maximum number of results to return
		 * @return {void} No response was specified
		 */
		GetTextPronunciations(word: string, useCanonical: string | null | undefined, sourceDictionary: string | null | undefined, typeFormat: string | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/pronunciations&useCanonical=' + (useCanonical == null ? '' : encodeURIComponent(useCanonical)) + '&sourceDictionary=' + (sourceDictionary == null ? '' : encodeURIComponent(sourceDictionary)) + '&typeFormat=' + (typeFormat == null ? '' : encodeURIComponent(typeFormat)) + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Given a word as a string, returns relationships from the Word Graph
		 * Get word.json/{word}/relatedWords
		 * @param {string} word Word to fetch relationships for
		 * @param {string} useCanonical If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @param {string} relationshipTypes Limits the total results per type of relationship type
		 * @param {number} limitPerRelationshipType Restrict to the supplied relationship types
		 * @return {void} No response was specified
		 */
		GetRelatedWords(word: string, useCanonical: string | null | undefined, relationshipTypes: string | null | undefined, limitPerRelationshipType: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/relatedWords&useCanonical=' + (useCanonical == null ? '' : encodeURIComponent(useCanonical)) + '&relationshipTypes=' + (relationshipTypes == null ? '' : encodeURIComponent(relationshipTypes)) + '&limitPerRelationshipType=' + limitPerRelationshipType, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a top example for a word
		 * Get word.json/{word}/topExample
		 * @param {string} word Word to fetch examples for
		 * @param {string} useCanonical If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @return {void} No response was specified
		 */
		GetTopExample(word: string, useCanonical: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/topExample&useCanonical=' + (useCanonical == null ? '' : encodeURIComponent(useCanonical)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches a WordList by ID
		 * Get wordList.json/{permalink}
		 * @param {string} permalink permalink of WordList to fetch
		 * @return {void} No response was specified
		 */
		GetWordListByPermalink(permalink: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'wordList.json/' + (permalink == null ? '' : encodeURIComponent(permalink)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing WordList
		 * Put wordList.json/{permalink}
		 * @param {string} permalink permalink of WordList to update
		 * @param {WordList} requestBody Updated WordList
		 * @return {void} No response was specified
		 */
		UpdateWordList(permalink: string, requestBody: WordList): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'wordList.json/' + (permalink == null ? '' : encodeURIComponent(permalink)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an existing WordList
		 * Delete wordList.json/{permalink}
		 * @param {string} permalink ID of WordList to delete
		 * @return {void} No response was specified
		 */
		DeleteWordList(permalink: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'wordList.json/' + (permalink == null ? '' : encodeURIComponent(permalink)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes words from a WordList
		 * Post wordList.json/{permalink}/deleteWords
		 * @param {string} permalink permalink of WordList to use
		 * @param {Array<StringValue>} requestBody Words to remove from WordList
		 * @return {void} No response was specified
		 */
		DeleteWordsFromWordList(permalink: string, requestBody: Array<StringValue>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'wordList.json/' + (permalink == null ? '' : encodeURIComponent(permalink)) + '/deleteWords', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches words in a WordList
		 * Get wordList.json/{permalink}/words
		 * @param {string} permalink ID of WordList to use
		 * @param {string} sortBy Field to sort by
		 * @param {string} sortOrder Direction to sort
		 * @param {number} skip Results to skip
		 * @param {number} limit Maximum number of results to return
		 * @return {void} No response was specified
		 */
		GetWordListWords(permalink: string, sortBy: string | null | undefined, sortOrder: string | null | undefined, skip: number | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'wordList.json/' + (permalink == null ? '' : encodeURIComponent(permalink)) + '/words&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&sortOrder=' + (sortOrder == null ? '' : encodeURIComponent(sortOrder)) + '&skip=' + skip + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds words to a WordList
		 * Post wordList.json/{permalink}/words
		 * @param {string} permalink permalink of WordList to user
		 * @param {Array<StringValue>} requestBody Array of words to add to WordList
		 * @return {void} No response was specified
		 */
		AddWordsToWordList(permalink: string, requestBody: Array<StringValue>): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'wordList.json/' + (permalink == null ? '' : encodeURIComponent(permalink)) + '/words', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a WordList.
		 * Post wordLists.json
		 * @param {WordList} requestBody WordList to create
		 * @return {void} No response was specified
		 */
		CreateWordList(requestBody: WordList): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'wordLists.json', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single random WordObject
		 * Get words.json/randomWord
		 * @param {string} hasDictionaryDef Only return words with dictionary definitions
		 * @param {string} includePartOfSpeech CSV part-of-speech values to include
		 * @param {string} excludePartOfSpeech CSV part-of-speech values to exclude
		 * @param {number} minCorpusCount Minimum corpus frequency for terms
		 * @param {number} maxCorpusCount Maximum corpus frequency for terms
		 * @param {number} minDictionaryCount Minimum dictionary count
		 * @param {number} maxDictionaryCount Maximum dictionary count
		 * @param {number} minLength Minimum word length
		 * @param {number} maxLength Maximum word length
		 * @return {void} No response was specified
		 */
		GetRandomWord(hasDictionaryDef: string | null | undefined, includePartOfSpeech: string | null | undefined, excludePartOfSpeech: string | null | undefined, minCorpusCount: number | null | undefined, maxCorpusCount: number | null | undefined, minDictionaryCount: number | null | undefined, maxDictionaryCount: number | null | undefined, minLength: number | null | undefined, maxLength: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'words.json/randomWord?hasDictionaryDef=' + (hasDictionaryDef == null ? '' : encodeURIComponent(hasDictionaryDef)) + '&includePartOfSpeech=' + (includePartOfSpeech == null ? '' : encodeURIComponent(includePartOfSpeech)) + '&excludePartOfSpeech=' + (excludePartOfSpeech == null ? '' : encodeURIComponent(excludePartOfSpeech)) + '&minCorpusCount=' + minCorpusCount + '&maxCorpusCount=' + maxCorpusCount + '&minDictionaryCount=' + minDictionaryCount + '&maxDictionaryCount=' + maxDictionaryCount + '&minLength=' + minLength + '&maxLength=' + maxLength, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an array of random WordObjects
		 * Get words.json/randomWords
		 * @param {string} hasDictionaryDef Only return words with dictionary definitions
		 * @param {string} includePartOfSpeech CSV part-of-speech values to include
		 * @param {string} excludePartOfSpeech CSV part-of-speech values to exclude
		 * @param {number} minCorpusCount Minimum corpus frequency for terms
		 * @param {number} maxCorpusCount Maximum corpus frequency for terms
		 * @param {number} minDictionaryCount Minimum dictionary count
		 * @param {number} maxDictionaryCount Maximum dictionary count
		 * @param {number} minLength Minimum word length
		 * @param {number} maxLength Maximum word length
		 * @param {string} sortBy Attribute to sort by
		 * @param {string} sortOrder Sort direction
		 * @param {number} limit Maximum number of results to return
		 * @return {void} No response was specified
		 */
		GetRandomWords(hasDictionaryDef: string | null | undefined, includePartOfSpeech: string | null | undefined, excludePartOfSpeech: string | null | undefined, minCorpusCount: number | null | undefined, maxCorpusCount: number | null | undefined, minDictionaryCount: number | null | undefined, maxDictionaryCount: number | null | undefined, minLength: number | null | undefined, maxLength: number | null | undefined, sortBy: string | null | undefined, sortOrder: string | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'words.json/randomWords?hasDictionaryDef=' + (hasDictionaryDef == null ? '' : encodeURIComponent(hasDictionaryDef)) + '&includePartOfSpeech=' + (includePartOfSpeech == null ? '' : encodeURIComponent(includePartOfSpeech)) + '&excludePartOfSpeech=' + (excludePartOfSpeech == null ? '' : encodeURIComponent(excludePartOfSpeech)) + '&minCorpusCount=' + minCorpusCount + '&maxCorpusCount=' + maxCorpusCount + '&minDictionaryCount=' + minDictionaryCount + '&maxDictionaryCount=' + maxDictionaryCount + '&minLength=' + minLength + '&maxLength=' + maxLength + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&sortOrder=' + (sortOrder == null ? '' : encodeURIComponent(sortOrder)) + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reverse dictionary search
		 * Get words.json/reverseDictionary
		 * @param {string} query Search term
		 * @param {string} findSenseForWord Restricts words and finds closest sense
		 * @param {string} includeSourceDictionaries Only include these comma-delimited source dictionaries
		 * @param {string} excludeSourceDictionaries Exclude these comma-delimited source dictionaries
		 * @param {string} includePartOfSpeech Only include these comma-delimited parts of speech
		 * @param {string} excludePartOfSpeech Exclude these comma-delimited parts of speech
		 * @param {number} minCorpusCount Minimum corpus frequency for terms
		 * @param {number} maxCorpusCount Maximum corpus frequency for terms
		 * @param {number} minLength Minimum word length
		 * @param {number} maxLength Maximum word length
		 * @param {string} expandTerms Expand terms
		 * @param {string} includeTags Return a closed set of XML tags in response
		 * @param {string} sortBy Attribute to sort by
		 * @param {string} sortOrder Sort direction
		 * @param {string} skip Results to skip
		 * @param {number} limit Maximum number of results to return
		 * @return {void} No response was specified
		 */
		ReverseDictionary(query: string, findSenseForWord: string | null | undefined, includeSourceDictionaries: string | null | undefined, excludeSourceDictionaries: string | null | undefined, includePartOfSpeech: string | null | undefined, excludePartOfSpeech: string | null | undefined, minCorpusCount: number | null | undefined, maxCorpusCount: number | null | undefined, minLength: number | null | undefined, maxLength: number | null | undefined, expandTerms: string | null | undefined, includeTags: string | null | undefined, sortBy: string | null | undefined, sortOrder: string | null | undefined, skip: string | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'words.json/reverseDictionary?query=' + (query == null ? '' : encodeURIComponent(query)) + '&findSenseForWord=' + (findSenseForWord == null ? '' : encodeURIComponent(findSenseForWord)) + '&includeSourceDictionaries=' + (includeSourceDictionaries == null ? '' : encodeURIComponent(includeSourceDictionaries)) + '&excludeSourceDictionaries=' + (excludeSourceDictionaries == null ? '' : encodeURIComponent(excludeSourceDictionaries)) + '&includePartOfSpeech=' + (includePartOfSpeech == null ? '' : encodeURIComponent(includePartOfSpeech)) + '&excludePartOfSpeech=' + (excludePartOfSpeech == null ? '' : encodeURIComponent(excludePartOfSpeech)) + '&minCorpusCount=' + minCorpusCount + '&maxCorpusCount=' + maxCorpusCount + '&minLength=' + minLength + '&maxLength=' + maxLength + '&expandTerms=' + (expandTerms == null ? '' : encodeURIComponent(expandTerms)) + '&includeTags=' + (includeTags == null ? '' : encodeURIComponent(includeTags)) + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&sortOrder=' + (sortOrder == null ? '' : encodeURIComponent(sortOrder)) + '&skip=' + (skip == null ? '' : encodeURIComponent(skip)) + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Searches words
		 * Get words.json/search/{query}
		 * @param {string} query Search query
		 * @param {string} caseSensitive Search case sensitive
		 * @param {string} includePartOfSpeech Only include these comma-delimited parts of speech
		 * @param {string} excludePartOfSpeech Exclude these comma-delimited parts of speech
		 * @param {number} minCorpusCount Minimum corpus frequency for terms
		 * @param {number} maxCorpusCount Maximum corpus frequency for terms
		 * @param {number} minDictionaryCount Minimum number of dictionary entries for words returned
		 * @param {number} maxDictionaryCount Maximum dictionary definition count
		 * @param {number} minLength Minimum word length
		 * @param {number} maxLength Maximum word length
		 * @param {number} skip Results to skip
		 * @param {number} limit Maximum number of results to return
		 * @return {void} No response was specified
		 */
		SearchWords(query: string, caseSensitive: string | null | undefined, includePartOfSpeech: string | null | undefined, excludePartOfSpeech: string | null | undefined, minCorpusCount: number | null | undefined, maxCorpusCount: number | null | undefined, minDictionaryCount: number | null | undefined, maxDictionaryCount: number | null | undefined, minLength: number | null | undefined, maxLength: number | null | undefined, skip: number | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'words.json/search/' + (query == null ? '' : encodeURIComponent(query)) + '&caseSensitive=' + (caseSensitive == null ? '' : encodeURIComponent(caseSensitive)) + '&includePartOfSpeech=' + (includePartOfSpeech == null ? '' : encodeURIComponent(includePartOfSpeech)) + '&excludePartOfSpeech=' + (excludePartOfSpeech == null ? '' : encodeURIComponent(excludePartOfSpeech)) + '&minCorpusCount=' + minCorpusCount + '&maxCorpusCount=' + maxCorpusCount + '&minDictionaryCount=' + minDictionaryCount + '&maxDictionaryCount=' + maxDictionaryCount + '&minLength=' + minLength + '&maxLength=' + maxLength + '&skip=' + skip + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a specific WordOfTheDay
		 * Get words.json/wordOfTheDay
		 * @param {string} date Fetches by date in yyyy-MM-dd
		 * @return {void} No response was specified
		 */
		GetWordOfTheDay(date: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'words.json/wordOfTheDay?date=' + (date == null ? '' : encodeURIComponent(date)), { observe: 'response', responseType: 'text' });
		}
	}

}

