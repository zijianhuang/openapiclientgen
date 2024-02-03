import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ApiTokenStatus {
		expiresInMillis?: number | null;
		remainingCalls?: number | null;
		resetsInMillis?: number | null;
		token?: string | null;
		totalRequests?: number | null;
		valid?: boolean | null;
	}
	export interface ApiTokenStatusFormProperties {
		expiresInMillis: FormControl<number | null | undefined>,
		remainingCalls: FormControl<number | null | undefined>,
		resetsInMillis: FormControl<number | null | undefined>,
		token: FormControl<string | null | undefined>,
		totalRequests: FormControl<number | null | undefined>,
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreateApiTokenStatusFormGroup() {
		return new FormGroup<ApiTokenStatusFormProperties>({
			expiresInMillis: new FormControl<number | null | undefined>(undefined),
			remainingCalls: new FormControl<number | null | undefined>(undefined),
			resetsInMillis: new FormControl<number | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			totalRequests: new FormControl<number | null | undefined>(undefined),
			valid: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AudioFile {
		attributionText?: string | null;
		attributionUrl?: string | null;
		audioType?: string | null;
		commentCount?: number | null;
		createdAt?: Date | null;
		createdBy?: string | null;
		description?: string | null;
		duration?: number | null;
		fileUrl?: string | null;

		/** Required */
		id: number;
		voteAverage?: number | null;
		voteCount?: number | null;
		voteWeightedAverage?: number | null;
		word?: string | null;
	}
	export interface AudioFileFormProperties {
		attributionText: FormControl<string | null | undefined>,
		attributionUrl: FormControl<string | null | undefined>,
		audioType: FormControl<string | null | undefined>,
		commentCount: FormControl<number | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		duration: FormControl<number | null | undefined>,
		fileUrl: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<number | null | undefined>,
		voteAverage: FormControl<number | null | undefined>,
		voteCount: FormControl<number | null | undefined>,
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
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			voteAverage: new FormControl<number | null | undefined>(undefined),
			voteCount: new FormControl<number | null | undefined>(undefined),
			voteWeightedAverage: new FormControl<number | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AudioType {
		id?: number | null;
		name?: string | null;
	}
	export interface AudioTypeFormProperties {
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
		userId?: number | null;
		userSignature?: string | null;
	}
	export interface AuthenticationTokenFormProperties {
		token: FormControl<string | null | undefined>,
		userId: FormControl<number | null | undefined>,
		userSignature: FormControl<string | null | undefined>,
	}
	export function CreateAuthenticationTokenFormGroup() {
		return new FormGroup<AuthenticationTokenFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<number | null | undefined>(undefined),
			userSignature: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Bigram {
		count?: number | null;
		gram1?: string | null;
		gram2?: string | null;
		mi?: number | null;
		wlmi?: number | null;
	}
	export interface BigramFormProperties {
		count: FormControl<number | null | undefined>,
		gram1: FormControl<string | null | undefined>,
		gram2: FormControl<string | null | undefined>,
		mi: FormControl<number | null | undefined>,
		wlmi: FormControl<number | null | undefined>,
	}
	export function CreateBigramFormGroup() {
		return new FormGroup<BigramFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			gram1: new FormControl<string | null | undefined>(undefined),
			gram2: new FormControl<string | null | undefined>(undefined),
			mi: new FormControl<number | null | undefined>(undefined),
			wlmi: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Category {

		/** Required */
		id: number;
		name?: string | null;
	}
	export interface CategoryFormProperties {

		/** Required */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
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
		id?: number | null;
		name?: string | null;
	}
	export interface ContentProviderFormProperties {
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
		citations?: Array<string>;
		exampleUses?: Array<string>;
		extendedText?: string | null;
		labels?: Array<string>;
		notes?: Array<string>;
		partOfSpeech?: string | null;
		relatedWords?: Array<string>;
		score?: number | null;
		seqString?: string | null;
		sequence?: string | null;
		sourceDictionary?: string | null;
		text?: string | null;
		textProns?: Array<string>;
		word?: string | null;
	}
	export interface DefinitionFormProperties {
		attributionText: FormControl<string | null | undefined>,
		attributionUrl: FormControl<string | null | undefined>,
		extendedText: FormControl<string | null | undefined>,
		partOfSpeech: FormControl<string | null | undefined>,
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

	export interface DefinitionSearchResults {
		results?: Array<string>;
		totalResults?: number | null;
	}
	export interface DefinitionSearchResultsFormProperties {
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateDefinitionSearchResultsFormGroup() {
		return new FormGroup<DefinitionSearchResultsFormProperties>({
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Example {
		documentId?: number | null;
		exampleId?: number | null;
		id?: number | null;
		provider?: ContentProvider;
		rating?: number | null;
		score?: ScoredWord;
		sentence?: Sentence;
		text?: string | null;
		title?: string | null;
		url?: string | null;
		word?: string | null;
		year?: number | null;
	}
	export interface ExampleFormProperties {
		documentId: FormControl<number | null | undefined>,
		exampleId: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		rating: FormControl<number | null | undefined>,
		text: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
		word: FormControl<string | null | undefined>,
		year: FormControl<number | null | undefined>,
	}
	export function CreateExampleFormGroup() {
		return new FormGroup<ExampleFormProperties>({
			documentId: new FormControl<number | null | undefined>(undefined),
			exampleId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			rating: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ExampleSearchResults {
		examples?: Array<string>;
		facets?: Array<string>;
	}
	export interface ExampleSearchResultsFormProperties {
	}
	export function CreateExampleSearchResultsFormGroup() {
		return new FormGroup<ExampleSearchResultsFormProperties>({
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

	export interface Facet {
		facetValues?: Array<string>;
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
		count?: number | null;
		value?: string | null;
	}
	export interface FacetValueFormProperties {
		count: FormControl<number | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateFacetValueFormGroup() {
		return new FormGroup<FacetValueFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Frequency {
		count?: number | null;
		year?: number | null;
	}
	export interface FrequencyFormProperties {
		count: FormControl<number | null | undefined>,
		year: FormControl<number | null | undefined>,
	}
	export function CreateFrequencyFormGroup() {
		return new FormGroup<FrequencyFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FrequencySummary {
		frequency?: Array<string>;
		frequencyString?: string | null;
		totalCount?: number | null;
		unknownYearCount?: number | null;
		word?: string | null;
	}
	export interface FrequencySummaryFormProperties {
		frequencyString: FormControl<string | null | undefined>,
		totalCount: FormControl<number | null | undefined>,
		unknownYearCount: FormControl<number | null | undefined>,
		word: FormControl<string | null | undefined>,
	}
	export function CreateFrequencySummaryFormGroup() {
		return new FormGroup<FrequencySummaryFormProperties>({
			frequencyString: new FormControl<string | null | undefined>(undefined),
			totalCount: new FormControl<number | null | undefined>(undefined),
			unknownYearCount: new FormControl<number | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
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

	export interface Long {
		value?: number | null;
	}
	export interface LongFormProperties {
		value: FormControl<number | null | undefined>,
	}
	export function CreateLongFormGroup() {
		return new FormGroup<LongFormProperties>({
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Note {
		appliesTo?: Array<string>;
		noteType?: string | null;
		pos?: number | null;
		value?: string | null;
	}
	export interface NoteFormProperties {
		noteType: FormControl<string | null | undefined>,
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

	export interface PartOfSpeech {
		allCategories?: Array<string>;
		roots?: Array<string>;
		storageAbbr?: Array<string>;
	}
	export interface PartOfSpeechFormProperties {
	}
	export function CreatePartOfSpeechFormGroup() {
		return new FormGroup<PartOfSpeechFormProperties>({
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

	export interface Root {
		categories?: Array<string>;

		/** Required */
		id: number;
		name?: string | null;
	}
	export interface RootFormProperties {

		/** Required */
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateRootFormGroup() {
		return new FormGroup<RootFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScoredWord {
		baseWordScore?: number | null;
		docTermCount?: number | null;
		id?: number | null;
		lemma?: string | null;
		partOfSpeech?: string | null;
		position?: number | null;
		score?: number | null;
		sentenceId?: number | null;
		stopword?: boolean | null;
		word?: string | null;
		wordType?: string | null;
	}
	export interface ScoredWordFormProperties {
		baseWordScore: FormControl<number | null | undefined>,
		docTermCount: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		lemma: FormControl<string | null | undefined>,
		partOfSpeech: FormControl<string | null | undefined>,
		position: FormControl<number | null | undefined>,
		score: FormControl<number | null | undefined>,
		sentenceId: FormControl<number | null | undefined>,
		stopword: FormControl<boolean | null | undefined>,
		word: FormControl<string | null | undefined>,
		wordType: FormControl<string | null | undefined>,
	}
	export function CreateScoredWordFormGroup() {
		return new FormGroup<ScoredWordFormProperties>({
			baseWordScore: new FormControl<number | null | undefined>(undefined),
			docTermCount: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lemma: new FormControl<string | null | undefined>(undefined),
			partOfSpeech: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			sentenceId: new FormControl<number | null | undefined>(undefined),
			stopword: new FormControl<boolean | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
			wordType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sentence {
		display?: string | null;
		documentMetadataId?: number | null;
		hasScoredWords?: boolean | null;
		id?: number | null;
		rating?: number | null;
		scoredWords?: Array<string>;
	}
	export interface SentenceFormProperties {
		display: FormControl<string | null | undefined>,
		documentMetadataId: FormControl<number | null | undefined>,
		hasScoredWords: FormControl<boolean | null | undefined>,
		id: FormControl<number | null | undefined>,
		rating: FormControl<number | null | undefined>,
	}
	export function CreateSentenceFormGroup() {
		return new FormGroup<SentenceFormProperties>({
			display: new FormControl<string | null | undefined>(undefined),
			documentMetadataId: new FormControl<number | null | undefined>(undefined),
			hasScoredWords: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
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
		id?: number | null;
		text?: string | null;
		title?: string | null;
		url?: string | null;
	}
	export interface SimpleExampleFormProperties {
		id: FormControl<number | null | undefined>,
		text: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateSimpleExampleFormGroup() {
		return new FormGroup<SimpleExampleFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
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
		seq?: number | null;
		text?: string | null;
		type?: string | null;
	}
	export interface SyllableFormProperties {
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

	export interface TextPron {
		raw?: string | null;
		rawType?: string | null;
		seq?: number | null;
	}
	export interface TextPronFormProperties {
		raw: FormControl<string | null | undefined>,
		rawType: FormControl<string | null | undefined>,
		seq: FormControl<number | null | undefined>,
	}
	export function CreateTextPronFormGroup() {
		return new FormGroup<TextPronFormProperties>({
			raw: new FormControl<string | null | undefined>(undefined),
			rawType: new FormControl<string | null | undefined>(undefined),
			seq: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface User {
		displayName?: string | null;
		email?: string | null;
		faceBookId?: string | null;
		id?: number | null;
		password?: string | null;
		status?: number | null;
		userName?: string | null;
		username?: string | null;
	}
	export interface UserFormProperties {
		displayName: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		faceBookId: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		password: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,
		userName: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			faceBookId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WordList {
		createdAt?: Date | null;
		description?: string | null;

		/** Required */
		id: number;
		lastActivityAt?: Date | null;
		name?: string | null;
		numberWordsInList?: number | null;
		permalink?: string | null;
		type?: string | null;
		updatedAt?: Date | null;
		userId?: number | null;
		username?: string | null;
	}
	export interface WordListFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<number | null | undefined>,
		lastActivityAt: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		numberWordsInList: FormControl<number | null | undefined>,
		permalink: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		userId: FormControl<number | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateWordListFormGroup() {
		return new FormGroup<WordListFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lastActivityAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			numberWordsInList: new FormControl<number | null | undefined>(undefined),
			permalink: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			userId: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WordListWord {
		createdAt?: Date | null;

		/** Required */
		id: number;
		numberCommentsOnWord?: number | null;
		numberLists?: number | null;
		userId?: number | null;
		username?: string | null;
		word?: string | null;
	}
	export interface WordListWordFormProperties {
		createdAt: FormControl<Date | null | undefined>,

		/** Required */
		id: FormControl<number | null | undefined>,
		numberCommentsOnWord: FormControl<number | null | undefined>,
		numberLists: FormControl<number | null | undefined>,
		userId: FormControl<number | null | undefined>,
		username: FormControl<string | null | undefined>,
		word: FormControl<string | null | undefined>,
	}
	export function CreateWordListWordFormGroup() {
		return new FormGroup<WordListWordFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			numberCommentsOnWord: new FormControl<number | null | undefined>(undefined),
			numberLists: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<number | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WordObject {
		canonicalForm?: string | null;

		/** Required */
		id: number;
		originalWord?: string | null;
		suggestions?: Array<string>;
		vulgar?: string | null;
		word?: string | null;
	}
	export interface WordObjectFormProperties {
		canonicalForm: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<number | null | undefined>,
		originalWord: FormControl<string | null | undefined>,
		vulgar: FormControl<string | null | undefined>,
		word: FormControl<string | null | undefined>,
	}
	export function CreateWordObjectFormGroup() {
		return new FormGroup<WordObjectFormProperties>({
			canonicalForm: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			originalWord: new FormControl<string | null | undefined>(undefined),
			vulgar: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WordOfTheDay {
		category?: string | null;
		contentProvider?: ContentProvider;
		createdAt?: Date | null;
		createdBy?: string | null;
		definitions?: Array<string>;
		examples?: Array<string>;
		htmlExtra?: string | null;

		/** Required */
		id: number;
		note?: string | null;
		parentId?: string | null;
		publishDate?: Date | null;
		word?: string | null;
	}
	export interface WordOfTheDayFormProperties {
		category: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		createdBy: FormControl<string | null | undefined>,
		htmlExtra: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<number | null | undefined>,
		note: FormControl<string | null | undefined>,
		parentId: FormControl<string | null | undefined>,
		publishDate: FormControl<Date | null | undefined>,
		word: FormControl<string | null | undefined>,
	}
	export function CreateWordOfTheDayFormGroup() {
		return new FormGroup<WordOfTheDayFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined),
			htmlExtra: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			note: new FormControl<string | null | undefined>(undefined),
			parentId: new FormControl<string | null | undefined>(undefined),
			publishDate: new FormControl<Date | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WordSearchResult {
		count?: number | null;
		lexicality?: number | null;
		word?: string | null;
	}
	export interface WordSearchResultFormProperties {
		count: FormControl<number | null | undefined>,
		lexicality: FormControl<number | null | undefined>,
		word: FormControl<string | null | undefined>,
	}
	export function CreateWordSearchResultFormGroup() {
		return new FormGroup<WordSearchResultFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			lexicality: new FormControl<number | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WordSearchResults {
		searchResults?: Array<string>;
		totalResults?: number | null;
	}
	export interface WordSearchResultsFormProperties {
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
		 * Fetches audio metadata for a word.
		 * The metadata includes a time-expiring fileUrl which allows reading the audio file directly from the API.  Currently only audio pronunciations from the American Heritage Dictionary in mp3 format are supported.
		 * Get word.json/{word}/audio
		 * @param {string} word Word to get audio for.
		 * @param {GetAudioUseCanonical} useCanonical If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @param {number} limit Maximum number of results to return
		 * @return {void} No response was specified
		 */
		GetAudio(word: string, useCanonical: GetAudioUseCanonical | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/audio&useCanonical=' + useCanonical + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return definitions for a word
		 * Get word.json/{word}/definitions
		 * @param {string} word Word to return definitions for
		 * @param {number} limit Maximum number of results to return
		 * @param {GetDefinitionsPartOfSpeech} partOfSpeech CSV list of part-of-speech types
		 * @param {string} includeRelated Return related words with definitions
		 * @param {Array<string>} sourceDictionaries Source dictionary to return definitions from.  If 'all' is received, results are returned from all sources. If multiple values are received (e.g. 'century,wiktionary'), results are returned from the first specified dictionary that has definitions. If left blank, results are returned from the first dictionary that has definitions. By default, dictionaries are searched in this order: ahd-5, wiktionary, webster, century, wordnet
		 * @param {GetAudioUseCanonical} useCanonical If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @param {GetAudioUseCanonical} includeTags Return a closed set of XML tags in response
		 * @return {void} No response was specified
		 */
		GetDefinitions(word: string, limit: number | null | undefined, partOfSpeech: GetDefinitionsPartOfSpeech | null | undefined, includeRelated: string | null | undefined, sourceDictionaries: Array<string> | null | undefined, useCanonical: GetAudioUseCanonical | null | undefined, includeTags: GetAudioUseCanonical | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/definitions&limit=' + limit + '&partOfSpeech=' + partOfSpeech + '&includeRelated=' + (includeRelated == null ? '' : encodeURIComponent(includeRelated)) + '&' + sourceDictionaries?.map(z => `sourceDictionaries=${encodeURIComponent(z)}`).join('&') + '&useCanonical=' + useCanonical + '&includeTags=' + includeTags, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches etymology data
		 * Get word.json/{word}/etymologies
		 * @param {string} word Word to return
		 * @param {GetAudioUseCanonical} useCanonical If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @return {void} No response was specified
		 */
		GetEtymologies(word: string, useCanonical: GetAudioUseCanonical | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/etymologies&useCanonical=' + useCanonical, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns examples for a word
		 * Get word.json/{word}/examples
		 * @param {string} word Word to return examples for
		 * @param {GetAudioUseCanonical} includeDuplicates Show duplicate examples from different sources
		 * @param {GetAudioUseCanonical} useCanonical If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @param {number} skip Results to skip
		 * @param {number} limit Maximum number of results to return
		 * @return {void} No response was specified
		 */
		GetExamples(word: string, includeDuplicates: GetAudioUseCanonical | null | undefined, useCanonical: GetAudioUseCanonical | null | undefined, skip: number | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/examples&includeDuplicates=' + includeDuplicates + '&useCanonical=' + useCanonical + '&skip=' + skip + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns word usage over time
		 * Get word.json/{word}/frequency
		 * @param {string} word Word to return
		 * @param {GetAudioUseCanonical} useCanonical If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @param {number} startYear Starting Year
		 * @param {number} endYear Ending Year
		 * @return {void} No response was specified
		 */
		GetWordFrequency(word: string, useCanonical: GetAudioUseCanonical | null | undefined, startYear: number | null | undefined, endYear: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/frequency&useCanonical=' + useCanonical + '&startYear=' + startYear + '&endYear=' + endYear, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns syllable information for a word
		 * Get word.json/{word}/hyphenation
		 * @param {string} word Word to get syllables for
		 * @param {GetAudioUseCanonical} useCanonical If true will try to return a correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @param {GetHyphenationSourceDictionary} sourceDictionary Get from a single dictionary. Valid options: ahd-5, century, wiktionary, webster, and wordnet.
		 * @param {number} limit Maximum number of results to return
		 * @return {void} No response was specified
		 */
		GetHyphenation(word: string, useCanonical: GetAudioUseCanonical | null | undefined, sourceDictionary: GetHyphenationSourceDictionary | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/hyphenation&useCanonical=' + useCanonical + '&sourceDictionary=' + sourceDictionary + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches bi-gram phrases for a word
		 * Get word.json/{word}/phrases
		 * @param {string} word Word to fetch phrases for
		 * @param {number} limit Maximum number of results to return
		 * @param {number} wlmi Minimum WLMI for the phrase
		 * @param {GetAudioUseCanonical} useCanonical If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @return {void} No response was specified
		 */
		GetPhrases(word: string, limit: number | null | undefined, wlmi: number | null | undefined, useCanonical: GetAudioUseCanonical | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/phrases&limit=' + limit + '&wlmi=' + wlmi + '&useCanonical=' + useCanonical, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns text pronunciations for a given word
		 * Get word.json/{word}/pronunciations
		 * @param {string} word Word to get pronunciations for
		 * @param {GetAudioUseCanonical} useCanonical If true will try to return a correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @param {GetTextPronunciationsSourceDictionary} sourceDictionary Get from a single dictionary
		 * @param {GetTextPronunciationsTypeFormat} typeFormat Text pronunciation type
		 * @param {number} limit Maximum number of results to return
		 * @return {void} No response was specified
		 */
		GetTextPronunciations(word: string, useCanonical: GetAudioUseCanonical | null | undefined, sourceDictionary: GetTextPronunciationsSourceDictionary | null | undefined, typeFormat: GetTextPronunciationsTypeFormat | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/pronunciations&useCanonical=' + useCanonical + '&sourceDictionary=' + sourceDictionary + '&typeFormat=' + typeFormat + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Given a word as a string, returns relationships from the Word Graph
		 * Get word.json/{word}/relatedWords
		 * @param {string} word Word to fetch relationships for
		 * @param {GetAudioUseCanonical} useCanonical If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @param {GetRelatedWordsRelationshipTypes} relationshipTypes Limits the total results per type of relationship type
		 * @param {number} limitPerRelationshipType Restrict to the supplied relationship types
		 * @return {void} No response was specified
		 */
		GetRelatedWords(word: string, useCanonical: GetAudioUseCanonical | null | undefined, relationshipTypes: GetRelatedWordsRelationshipTypes | null | undefined, limitPerRelationshipType: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/relatedWords&useCanonical=' + useCanonical + '&relationshipTypes=' + relationshipTypes + '&limitPerRelationshipType=' + limitPerRelationshipType, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the Scrabble score for a word
		 * Get word.json/{word}/scrabbleScore
		 * @param {string} word Word to get scrabble score for.
		 * @return {void} No response was specified
		 */
		GetScrabbleScore(word: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/scrabbleScore', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a top example for a word
		 * Get word.json/{word}/topExample
		 * @param {string} word Word to fetch examples for
		 * @param {GetAudioUseCanonical} useCanonical If true will try to return the correct word root ('cats' -> 'cat'). If false returns exactly what was requested.
		 * @return {void} No response was specified
		 */
		GetTopExample(word: string, useCanonical: GetAudioUseCanonical | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'word.json/' + (word == null ? '' : encodeURIComponent(word)) + '/topExample&useCanonical=' + useCanonical, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single random WordObject
		 * Get words.json/randomWord
		 * @param {string} hasDictionaryDef Only return words with dictionary definitions
		 * @param {string} includePartOfSpeech CSV part-of-speech values to include (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)
		 * @param {string} excludePartOfSpeech CSV part-of-speech values to exclude (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)
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
		 * @param {string} includePartOfSpeech CSV part-of-speech values to include (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)
		 * @param {string} excludePartOfSpeech CSV part-of-speech values to exclude (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)
		 * @param {number} minCorpusCount Minimum corpus frequency for terms
		 * @param {number} maxCorpusCount Maximum corpus frequency for terms
		 * @param {number} minDictionaryCount Minimum dictionary count
		 * @param {number} maxDictionaryCount Maximum dictionary count
		 * @param {number} minLength Minimum word length
		 * @param {number} maxLength Maximum word length
		 * @param {GetRandomWordsSortBy} sortBy Attribute to sort by
		 * @param {GetRandomWordsSortOrder} sortOrder Sort direction
		 * @param {number} limit Maximum number of results to return
		 * @return {void} No response was specified
		 */
		GetRandomWords(hasDictionaryDef: string | null | undefined, includePartOfSpeech: string | null | undefined, excludePartOfSpeech: string | null | undefined, minCorpusCount: number | null | undefined, maxCorpusCount: number | null | undefined, minDictionaryCount: number | null | undefined, maxDictionaryCount: number | null | undefined, minLength: number | null | undefined, maxLength: number | null | undefined, sortBy: GetRandomWordsSortBy | null | undefined, sortOrder: GetRandomWordsSortOrder | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'words.json/randomWords?hasDictionaryDef=' + (hasDictionaryDef == null ? '' : encodeURIComponent(hasDictionaryDef)) + '&includePartOfSpeech=' + (includePartOfSpeech == null ? '' : encodeURIComponent(includePartOfSpeech)) + '&excludePartOfSpeech=' + (excludePartOfSpeech == null ? '' : encodeURIComponent(excludePartOfSpeech)) + '&minCorpusCount=' + minCorpusCount + '&maxCorpusCount=' + maxCorpusCount + '&minDictionaryCount=' + minDictionaryCount + '&maxDictionaryCount=' + maxDictionaryCount + '&minLength=' + minLength + '&maxLength=' + maxLength + '&sortBy=' + sortBy + '&sortOrder=' + sortOrder + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reverse dictionary search
		 * Get words.json/reverseDictionary
		 * @param {string} query Search term
		 * @param {string} findSenseForWord Restricts words and finds closest sense
		 * @param {GetTextPronunciationsSourceDictionary} includeSourceDictionaries Only include these comma-delimited source dictionaries
		 * @param {GetTextPronunciationsSourceDictionary} excludeSourceDictionaries Exclude these comma-delimited source dictionaries
		 * @param {string} includePartOfSpeech Only include these comma-delimited parts of speech (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)
		 * @param {string} excludePartOfSpeech Exclude these comma-delimited parts of speech (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)
		 * @param {number} minCorpusCount Minimum corpus frequency for terms
		 * @param {number} maxCorpusCount Maximum corpus frequency for terms
		 * @param {number} minLength Minimum word length
		 * @param {number} maxLength Maximum word length
		 * @param {string} expandTerms Expand terms
		 * @param {GetAudioUseCanonical} includeTags Return a closed set of XML tags in response
		 * @param {GetRandomWordsSortBy} sortBy Attribute to sort by
		 * @param {GetRandomWordsSortOrder} sortOrder Sort direction
		 * @param {string} skip Results to skip
		 * @param {number} limit Maximum number of results to return
		 * @return {void} No response was specified
		 */
		ReverseDictionary(query: string, findSenseForWord: string | null | undefined, includeSourceDictionaries: GetTextPronunciationsSourceDictionary | null | undefined, excludeSourceDictionaries: GetTextPronunciationsSourceDictionary | null | undefined, includePartOfSpeech: string | null | undefined, excludePartOfSpeech: string | null | undefined, minCorpusCount: number | null | undefined, maxCorpusCount: number | null | undefined, minLength: number | null | undefined, maxLength: number | null | undefined, expandTerms: string | null | undefined, includeTags: GetAudioUseCanonical | null | undefined, sortBy: GetRandomWordsSortBy | null | undefined, sortOrder: GetRandomWordsSortOrder | null | undefined, skip: string | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'words.json/reverseDictionary?query=' + (query == null ? '' : encodeURIComponent(query)) + '&findSenseForWord=' + (findSenseForWord == null ? '' : encodeURIComponent(findSenseForWord)) + '&includeSourceDictionaries=' + includeSourceDictionaries + '&excludeSourceDictionaries=' + excludeSourceDictionaries + '&includePartOfSpeech=' + (includePartOfSpeech == null ? '' : encodeURIComponent(includePartOfSpeech)) + '&excludePartOfSpeech=' + (excludePartOfSpeech == null ? '' : encodeURIComponent(excludePartOfSpeech)) + '&minCorpusCount=' + minCorpusCount + '&maxCorpusCount=' + maxCorpusCount + '&minLength=' + minLength + '&maxLength=' + maxLength + '&expandTerms=' + (expandTerms == null ? '' : encodeURIComponent(expandTerms)) + '&includeTags=' + includeTags + '&sortBy=' + sortBy + '&sortOrder=' + sortOrder + '&skip=' + (skip == null ? '' : encodeURIComponent(skip)) + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Searches words
		 * Get words.json/search/{query}
		 * @param {string} allowRegex Search term is a Regular Expression
		 * @param {string} query Search query
		 * @param {string} caseSensitive Search case sensitive
		 * @param {string} includePartOfSpeech Only include these comma-delimited parts of speech (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)
		 * @param {string} excludePartOfSpeech Exclude these comma-delimited parts of speech (allowable values are noun, adjective, verb, adverb, interjection, pronoun, preposition, abbreviation, affix, article, auxiliary-verb, conjunction, definite-article, family-name, given-name, idiom, imperative, noun-plural, noun-posessive, past-participle, phrasal-prefix, proper-noun, proper-noun-plural, proper-noun-posessive, suffix, verb-intransitive, verb-transitive)
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
		SearchWords(allowRegex: string | null | undefined, query: string, caseSensitive: string | null | undefined, includePartOfSpeech: string | null | undefined, excludePartOfSpeech: string | null | undefined, minCorpusCount: number | null | undefined, maxCorpusCount: number | null | undefined, minDictionaryCount: number | null | undefined, maxDictionaryCount: number | null | undefined, minLength: number | null | undefined, maxLength: number | null | undefined, skip: number | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'words.json/search/' + (query == null ? '' : encodeURIComponent(query)) + '?allowRegex=' + (allowRegex == null ? '' : encodeURIComponent(allowRegex)) + '&caseSensitive=' + (caseSensitive == null ? '' : encodeURIComponent(caseSensitive)) + '&includePartOfSpeech=' + (includePartOfSpeech == null ? '' : encodeURIComponent(includePartOfSpeech)) + '&excludePartOfSpeech=' + (excludePartOfSpeech == null ? '' : encodeURIComponent(excludePartOfSpeech)) + '&minCorpusCount=' + minCorpusCount + '&maxCorpusCount=' + maxCorpusCount + '&minDictionaryCount=' + minDictionaryCount + '&maxDictionaryCount=' + maxDictionaryCount + '&minLength=' + minLength + '&maxLength=' + maxLength + '&skip=' + skip + '&limit=' + limit, { observe: 'response', responseType: 'text' });
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

	export enum GetAudioUseCanonical { false = 'false', true = 'true' }

	export enum GetDefinitionsPartOfSpeech { noun = 'noun', adjective = 'adjective', verb = 'verb', adverb = 'adverb', interjection = 'interjection', pronoun = 'pronoun', preposition = 'preposition', abbreviation = 'abbreviation', affix = 'affix', article = 'article', 'auxiliary-verb' = 'auxiliary-verb', conjunction = 'conjunction', 'definite-article' = 'definite-article', 'family-name' = 'family-name', 'given-name' = 'given-name', idiom = 'idiom', imperative = 'imperative', 'noun-plural' = 'noun-plural', 'noun-posessive' = 'noun-posessive', 'past-participle' = 'past-participle', 'phrasal-prefix' = 'phrasal-prefix', 'proper-noun' = 'proper-noun', 'proper-noun-plural' = 'proper-noun-plural', 'proper-noun-posessive' = 'proper-noun-posessive', suffix = 'suffix', 'verb-intransitive' = 'verb-intransitive', 'verb-transitive' = 'verb-transitive' }

	export enum GetHyphenationSourceDictionary { 'ahd-5' = 'ahd-5', century = 'century', wiktionary = 'wiktionary', webster = 'webster', wordnet = 'wordnet' }

	export enum GetTextPronunciationsSourceDictionary { 'ahd-5' = 'ahd-5', century = 'century', cmu = 'cmu', macmillan = 'macmillan', wiktionary = 'wiktionary', webster = 'webster', wordnet = 'wordnet' }

	export enum GetTextPronunciationsTypeFormat { 'ahd-5' = 'ahd-5', arpabet = 'arpabet', 'gcide-diacritical' = 'gcide-diacritical', IPA = 'IPA' }

	export enum GetRelatedWordsRelationshipTypes { synonym = 'synonym', antonym = 'antonym', variant = 'variant', equivalent = 'equivalent', 'cross-reference' = 'cross-reference', 'related-word' = 'related-word', rhyme = 'rhyme', form = 'form', 'etymologically-related-term' = 'etymologically-related-term', hypernym = 'hypernym', hyponym = 'hyponym', 'inflected-form' = 'inflected-form', primary = 'primary', 'same-context' = 'same-context', 'verb-form' = 'verb-form', 'verb-stem' = 'verb-stem', has_topic = 'has_topic' }

	export enum GetRandomWordsSortBy { alpha = 'alpha', count = 'count' }

	export enum GetRandomWordsSortOrder { asc = 'asc', desc = 'desc' }

}

