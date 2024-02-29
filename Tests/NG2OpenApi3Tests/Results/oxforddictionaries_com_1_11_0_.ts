import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ArrayOfRelatedEntriesElement {
		domains?: Array<string>;

		/**
		 * The identifier of the word
		 * Required
		 */
		id: string;

		/** IANA language code specifying the language of the word */
		language?: string | null;
		regions?: Array<string>;
		registers?: Array<string>;

		/** Required */
		text: string;
	}
	export interface ArrayOfRelatedEntriesElementFormProperties {

		/**
		 * The identifier of the word
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** IANA language code specifying the language of the word */
		language: FormControl<string | null | undefined>,

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateArrayOfRelatedEntriesElementFormGroup() {
		return new FormGroup<ArrayOfRelatedEntriesElementFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CategorizedTextListElement {

		/** The identifier of the word */
		id?: string | null;

		/**
		 * A note text
		 * Required
		 */
		text: string;

		/**
		 * The descriptive category of the text
		 * Required
		 */
		type: string;
	}
	export interface CategorizedTextListElementFormProperties {

		/** The identifier of the word */
		id: FormControl<string | null | undefined>,

		/**
		 * A note text
		 * Required
		 */
		text: FormControl<string | null | undefined>,

		/**
		 * The descriptive category of the text
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCategorizedTextListElementFormGroup() {
		return new FormGroup<CategorizedTextListElementFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** cross references of a sense */
	export interface CrossReferencesListElement {

		/**
		 * The word id of cooccurrence
		 * Required
		 */
		id: string;

		/**
		 * The word of cooccurrence
		 * Required
		 */
		text: string;

		/**
		 * The type of relation between the two words. Possible values are 'close match', 'related', 'see also', 'variant spelling', and 'abbreviation' in case of crossreferences, or 'pre', 'post' in case of collocates.
		 * Required
		 */
		type: string;
	}

	/** cross references of a sense */
	export interface CrossReferencesListElementFormProperties {

		/**
		 * The word id of cooccurrence
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The word of cooccurrence
		 * Required
		 */
		text: FormControl<string | null | undefined>,

		/**
		 * The type of relation between the two words. Possible values are 'close match', 'related', 'see also', 'variant spelling', and 'abbreviation' in case of crossreferences, or 'pre', 'post' in case of collocates.
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCrossReferencesListElementFormGroup() {
		return new FormGroup<CrossReferencesListElementFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Entry {
		etymologies?: Array<string>;

		/**
		 * The different forms are correlated with meanings or functions which we text as 'features'
		 * Minimum items: 1
		 */
		EntryGrammaticalFeatures?: Array<EntryGrammaticalFeatures>;

		/** Identifies the homograph grouping. The last two digits identify different entries of the same homograph. The first one/two digits identify the homograph number. */
		homographNumber?: string | null;

		/**
		 * various types of notes that appear
		 * Minimum items: 1
		 */
		notes?: Array<CategorizedTextListElement>;

		/**
		 * A list of possible pronunciations of a word
		 * Minimum items: 1
		 */
		EntryPronunciations?: Array<EntryPronunciations>;

		/**
		 * Complete list of senses
		 * Minimum items: 1
		 */
		senses?: Array<Sense>;

		/**
		 * Various words that are used interchangeably depending on the context, e.g 'aluminium' and 'aluminum'
		 * Minimum items: 1
		 */
		EntryVariantForms?: Array<EntryVariantForms>;
	}
	export interface EntryFormProperties {

		/** Identifies the homograph grouping. The last two digits identify different entries of the same homograph. The first one/two digits identify the homograph number. */
		homographNumber: FormControl<string | null | undefined>,
	}
	export function CreateEntryFormGroup() {
		return new FormGroup<EntryFormProperties>({
			homographNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EntryGrammaticalFeatures {

		/** Required */
		text: string;

		/** Required */
		type: string;
	}
	export interface EntryGrammaticalFeaturesFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEntryGrammaticalFeaturesFormGroup() {
		return new FormGroup<EntryGrammaticalFeaturesFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EntryPronunciations {

		/** The URL of the sound file */
		audioFile?: string | null;
		dialects?: Array<string>;

		/** The alphabetic system used to display the phonetic spelling */
		phoneticNotation?: string | null;

		/** Phonetic spelling is the representation of vocal sounds which express pronunciations of words. It is a system of spelling in which each letter represents invariably the same spoken sound */
		phoneticSpelling?: string | null;
		regions?: Array<string>;
	}
	export interface EntryPronunciationsFormProperties {

		/** The URL of the sound file */
		audioFile: FormControl<string | null | undefined>,

		/** The alphabetic system used to display the phonetic spelling */
		phoneticNotation: FormControl<string | null | undefined>,

		/** Phonetic spelling is the representation of vocal sounds which express pronunciations of words. It is a system of spelling in which each letter represents invariably the same spoken sound */
		phoneticSpelling: FormControl<string | null | undefined>,
	}
	export function CreateEntryPronunciationsFormGroup() {
		return new FormGroup<EntryPronunciationsFormProperties>({
			audioFile: new FormControl<string | null | undefined>(undefined),
			phoneticNotation: new FormControl<string | null | undefined>(undefined),
			phoneticSpelling: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A lexical sense represents the lexical meaning of a lexical entry when interpreted as referring to the corresponding ontology element */
	export interface Sense {
		crossReferenceMarkers?: Array<string>;

		/**
		 * A reference to another word that is closely related, might provide additional information about the subject, has a variant spelling or is an abbreviated form of it.
		 * Minimum items: 1
		 */
		crossReferences?: Array<CrossReferencesListElement>;
		definitions?: Array<string>;
		domains?: Array<string>;

		/**
		 * A list of written or spoken rendering of examples of use of a word or text
		 * Minimum items: 1
		 */
		SenseExamples?: Array<SenseExamples>;

		/** The id of the sense that is required for the delete procedure */
		id?: string | null;

		/**
		 * various types of notes that appear
		 * Minimum items: 1
		 */
		notes?: Array<CategorizedTextListElement>;

		/**
		 * A list of possible pronunciations of a word
		 * Minimum items: 1
		 */
		SensePronunciations?: Array<SensePronunciations>;
		regions?: Array<string>;
		registers?: Array<string>;
		short_definitions?: Array<string>;

		/**
		 * Ordered list of subsenses of a sense
		 * Minimum items: 1
		 */
		subsenses?: Array<Sense>;

		/**
		 * Ordered list of links to the Thesaurus Dictionary
		 * Minimum items: 1
		 */
		thesaurusLinks?: Array<ThesaurusLink>;

		/**
		 * A list of written or spoken rendering of the meaning of a word or text in another language(s)
		 * Minimum items: 1
		 */
		SenseTranslations?: Array<SenseTranslations>;

		/**
		 * Various words that are used interchangeably depending on the context, e.g 'aluminium' and 'aluminum'
		 * Minimum items: 1
		 */
		SenseVariantForms?: Array<SenseVariantForms>;
	}

	/** A lexical sense represents the lexical meaning of a lexical entry when interpreted as referring to the corresponding ontology element */
	export interface SenseFormProperties {

		/** The id of the sense that is required for the delete procedure */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSenseFormGroup() {
		return new FormGroup<SenseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SenseExamples {
		definitions?: Array<string>;
		domains?: Array<string>;

		/**
		 * various types of notes that appear
		 * Minimum items: 1
		 */
		notes?: Array<CategorizedTextListElement>;
		regions?: Array<string>;
		registers?: Array<string>;
		senseIds?: Array<string>;

		/** Required */
		text: string;

		/**
		 * A list of written or spoken rendering of the meaning of a word or text in another language(s)
		 * Minimum items: 1
		 */
		SenseExamplesTranslations?: Array<SenseExamplesTranslations>;
	}
	export interface SenseExamplesFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateSenseExamplesFormGroup() {
		return new FormGroup<SenseExamplesFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SenseExamplesTranslations {
		domains?: Array<string>;

		/**
		 * The different forms are correlated with meanings or functions which we text as 'features'
		 * Minimum items: 1
		 */
		SenseExamplesTranslationsGrammaticalFeatures?: Array<SenseExamplesTranslationsGrammaticalFeatures>;

		/**
		 * IANA language code specifying the language of the translation
		 * Required
		 */
		language: string;

		/**
		 * various types of notes that appear
		 * Minimum items: 1
		 */
		notes?: Array<CategorizedTextListElement>;
		regions?: Array<string>;
		registers?: Array<string>;

		/** Required */
		text: string;
	}
	export interface SenseExamplesTranslationsFormProperties {

		/**
		 * IANA language code specifying the language of the translation
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateSenseExamplesTranslationsFormGroup() {
		return new FormGroup<SenseExamplesTranslationsFormProperties>({
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SenseExamplesTranslationsGrammaticalFeatures {

		/** Required */
		text: string;

		/** Required */
		type: string;
	}
	export interface SenseExamplesTranslationsGrammaticalFeaturesFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSenseExamplesTranslationsGrammaticalFeaturesFormGroup() {
		return new FormGroup<SenseExamplesTranslationsGrammaticalFeaturesFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SensePronunciations {

		/** The URL of the sound file */
		audioFile?: string | null;
		dialects?: Array<string>;

		/** The alphabetic system used to display the phonetic spelling */
		phoneticNotation?: string | null;

		/** Phonetic spelling is the representation of vocal sounds which express pronunciations of words. It is a system of spelling in which each letter represents invariably the same spoken sound */
		phoneticSpelling?: string | null;
		regions?: Array<string>;
	}
	export interface SensePronunciationsFormProperties {

		/** The URL of the sound file */
		audioFile: FormControl<string | null | undefined>,

		/** The alphabetic system used to display the phonetic spelling */
		phoneticNotation: FormControl<string | null | undefined>,

		/** Phonetic spelling is the representation of vocal sounds which express pronunciations of words. It is a system of spelling in which each letter represents invariably the same spoken sound */
		phoneticSpelling: FormControl<string | null | undefined>,
	}
	export function CreateSensePronunciationsFormGroup() {
		return new FormGroup<SensePronunciationsFormProperties>({
			audioFile: new FormControl<string | null | undefined>(undefined),
			phoneticNotation: new FormControl<string | null | undefined>(undefined),
			phoneticSpelling: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Link to a sense of a specific entry in the thesaurus Dictionary */
	export interface ThesaurusLink {

		/**
		 * identifier of a word
		 * Required
		 */
		entry_id: string;

		/**
		 * identifier of a sense
		 * Required
		 */
		sense_id: string;
	}

	/** Link to a sense of a specific entry in the thesaurus Dictionary */
	export interface ThesaurusLinkFormProperties {

		/**
		 * identifier of a word
		 * Required
		 */
		entry_id: FormControl<string | null | undefined>,

		/**
		 * identifier of a sense
		 * Required
		 */
		sense_id: FormControl<string | null | undefined>,
	}
	export function CreateThesaurusLinkFormGroup() {
		return new FormGroup<ThesaurusLinkFormProperties>({
			entry_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sense_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SenseTranslations {
		domains?: Array<string>;

		/**
		 * The different forms are correlated with meanings or functions which we text as 'features'
		 * Minimum items: 1
		 */
		SenseTranslationsGrammaticalFeatures?: Array<SenseTranslationsGrammaticalFeatures>;

		/**
		 * IANA language code specifying the language of the translation
		 * Required
		 */
		language: string;

		/**
		 * various types of notes that appear
		 * Minimum items: 1
		 */
		notes?: Array<CategorizedTextListElement>;
		regions?: Array<string>;
		registers?: Array<string>;

		/** Required */
		text: string;
	}
	export interface SenseTranslationsFormProperties {

		/**
		 * IANA language code specifying the language of the translation
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateSenseTranslationsFormGroup() {
		return new FormGroup<SenseTranslationsFormProperties>({
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SenseTranslationsGrammaticalFeatures {

		/** Required */
		text: string;

		/** Required */
		type: string;
	}
	export interface SenseTranslationsGrammaticalFeaturesFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSenseTranslationsGrammaticalFeaturesFormGroup() {
		return new FormGroup<SenseTranslationsGrammaticalFeaturesFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SenseVariantForms {
		regions?: Array<string>;

		/** Required */
		text: string;
	}
	export interface SenseVariantFormsFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateSenseVariantFormsFormGroup() {
		return new FormGroup<SenseVariantFormsFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EntryVariantForms {
		regions?: Array<string>;

		/** Required */
		text: string;
	}
	export interface EntryVariantFormsFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateEntryVariantFormsFormGroup() {
		return new FormGroup<EntryVariantFormsFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExamplesListElement {
		definitions?: Array<string>;
		domains?: Array<string>;

		/**
		 * various types of notes that appear
		 * Minimum items: 1
		 */
		notes?: Array<CategorizedTextListElement>;
		regions?: Array<string>;
		registers?: Array<string>;
		senseIds?: Array<string>;

		/** Required */
		text: string;

		/**
		 * A list of written or spoken rendering of the meaning of a word or text in another language(s)
		 * Minimum items: 1
		 */
		ExamplesListElementTranslations?: Array<ExamplesListElementTranslations>;
	}
	export interface ExamplesListElementFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateExamplesListElementFormGroup() {
		return new FormGroup<ExamplesListElementFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExamplesListElementTranslations {
		domains?: Array<string>;

		/**
		 * The different forms are correlated with meanings or functions which we text as 'features'
		 * Minimum items: 1
		 */
		ExamplesListElementTranslationsGrammaticalFeatures?: Array<ExamplesListElementTranslationsGrammaticalFeatures>;

		/**
		 * IANA language code specifying the language of the translation
		 * Required
		 */
		language: string;

		/**
		 * various types of notes that appear
		 * Minimum items: 1
		 */
		notes?: Array<CategorizedTextListElement>;
		regions?: Array<string>;
		registers?: Array<string>;

		/** Required */
		text: string;
	}
	export interface ExamplesListElementTranslationsFormProperties {

		/**
		 * IANA language code specifying the language of the translation
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateExamplesListElementTranslationsFormGroup() {
		return new FormGroup<ExamplesListElementTranslationsFormProperties>({
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExamplesListElementTranslationsGrammaticalFeatures {

		/** Required */
		text: string;

		/** Required */
		type: string;
	}
	export interface ExamplesListElementTranslationsGrammaticalFeaturesFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateExamplesListElementTranslationsGrammaticalFeaturesFormGroup() {
		return new FormGroup<ExamplesListElementTranslationsGrammaticalFeaturesFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Schema for the Filters endpoint. */
	export interface Filters {

		/** Additional Information provided by OUP */
		metadata?: string | null;

		/** A mapping of filters available per endpoints. */
		results?: FiltersResults;
	}

	/** Schema for the Filters endpoint. */
	export interface FiltersFormProperties {

		/** Additional Information provided by OUP */
		metadata: FormControl<string | null | undefined>,
	}
	export function CreateFiltersFormGroup() {
		return new FormGroup<FiltersFormProperties>({
			metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FiltersResults {
		entries?: Array<string>;
		inflections?: Array<string>;
		translations?: Array<string>;
		wordlist?: Array<string>;
	}
	export interface FiltersResultsFormProperties {
	}
	export function CreateFiltersResultsFormGroup() {
		return new FormGroup<FiltersResultsFormProperties>({
		});

	}

	export interface GrammaticalFeaturesListElement {

		/** Required */
		text: string;

		/** Required */
		type: string;
	}
	export interface GrammaticalFeaturesListElementFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGrammaticalFeaturesListElementFormGroup() {
		return new FormGroup<GrammaticalFeaturesListElementFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Description of a word */
	export interface HeadwordEntry {

		/**
		 * The identifier of a word
		 * Required
		 */
		id: string;

		/**
		 * IANA language code
		 * Required
		 */
		language: string;

		/**
		 * A grouping of various senses in a specific language, and a lexical category that relates to a word
		 * Required
		 * Minimum items: 1
		 */
		lexicalEntries: Array<LexicalEntry>;

		/**
		 * A list of possible pronunciations of a word
		 * Minimum items: 1
		 */
		HeadwordEntryPronunciations?: Array<HeadwordEntryPronunciations>;

		/** The json object type. Could be 'headword', 'inflection' or 'phrase' */
		type?: string | null;

		/**
		 * A given written or spoken realisation of a an entry, lowercased.
		 * Required
		 */
		word: string;
	}

	/** Description of a word */
	export interface HeadwordEntryFormProperties {

		/**
		 * The identifier of a word
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * IANA language code
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/** The json object type. Could be 'headword', 'inflection' or 'phrase' */
		type: FormControl<string | null | undefined>,

		/**
		 * A given written or spoken realisation of a an entry, lowercased.
		 * Required
		 */
		word: FormControl<string | null | undefined>,
	}
	export function CreateHeadwordEntryFormGroup() {
		return new FormGroup<HeadwordEntryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Description of an entry for a particular part of speech */
	export interface LexicalEntry {

		/**
		 * A list of written or spoken words
		 * Minimum items: 1
		 */
		derivativeOf?: Array<ArrayOfRelatedEntriesElement>;

		/**
		 * A list of written or spoken words
		 * Minimum items: 1
		 */
		derivatives?: Array<ArrayOfRelatedEntriesElement>;

		/** Minimum items: 1 */
		entries?: Array<Entry>;

		/**
		 * The different forms are correlated with meanings or functions which we text as 'features'
		 * Minimum items: 1
		 */
		grammaticalFeatures?: Array<GrammaticalFeaturesListElement>;

		/**
		 * IANA language code
		 * Required
		 */
		language: string;

		/**
		 * A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb
		 * Required
		 */
		lexicalCategory: string;

		/**
		 * various types of notes that appear
		 * Minimum items: 1
		 */
		notes?: Array<CategorizedTextListElement>;

		/**
		 * A list of possible pronunciations of a word
		 * Minimum items: 1
		 */
		LexicalEntryPronunciations?: Array<LexicalEntryPronunciations>;

		/**
		 * A given written or spoken realisation of a an entry.
		 * Required
		 */
		text: string;

		/**
		 * Various words that are used interchangeably depending on the context, e.g 'aluminium' and 'aluminum'
		 * Minimum items: 1
		 */
		LexicalEntryVariantForms?: Array<LexicalEntryVariantForms>;
	}

	/** Description of an entry for a particular part of speech */
	export interface LexicalEntryFormProperties {

		/**
		 * IANA language code
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/**
		 * A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb
		 * Required
		 */
		lexicalCategory: FormControl<string | null | undefined>,

		/**
		 * A given written or spoken realisation of a an entry.
		 * Required
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateLexicalEntryFormGroup() {
		return new FormGroup<LexicalEntryFormProperties>({
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lexicalCategory: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LexicalEntryPronunciations {

		/** The URL of the sound file */
		audioFile?: string | null;
		dialects?: Array<string>;

		/** The alphabetic system used to display the phonetic spelling */
		phoneticNotation?: string | null;

		/** Phonetic spelling is the representation of vocal sounds which express pronunciations of words. It is a system of spelling in which each letter represents invariably the same spoken sound */
		phoneticSpelling?: string | null;
		regions?: Array<string>;
	}
	export interface LexicalEntryPronunciationsFormProperties {

		/** The URL of the sound file */
		audioFile: FormControl<string | null | undefined>,

		/** The alphabetic system used to display the phonetic spelling */
		phoneticNotation: FormControl<string | null | undefined>,

		/** Phonetic spelling is the representation of vocal sounds which express pronunciations of words. It is a system of spelling in which each letter represents invariably the same spoken sound */
		phoneticSpelling: FormControl<string | null | undefined>,
	}
	export function CreateLexicalEntryPronunciationsFormGroup() {
		return new FormGroup<LexicalEntryPronunciationsFormProperties>({
			audioFile: new FormControl<string | null | undefined>(undefined),
			phoneticNotation: new FormControl<string | null | undefined>(undefined),
			phoneticSpelling: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LexicalEntryVariantForms {
		regions?: Array<string>;

		/** Required */
		text: string;
	}
	export interface LexicalEntryVariantFormsFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateLexicalEntryVariantFormsFormGroup() {
		return new FormGroup<LexicalEntryVariantFormsFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HeadwordEntryPronunciations {

		/** The URL of the sound file */
		audioFile?: string | null;
		dialects?: Array<string>;

		/** The alphabetic system used to display the phonetic spelling */
		phoneticNotation?: string | null;

		/** Phonetic spelling is the representation of vocal sounds which express pronunciations of words. It is a system of spelling in which each letter represents invariably the same spoken sound */
		phoneticSpelling?: string | null;
		regions?: Array<string>;
	}
	export interface HeadwordEntryPronunciationsFormProperties {

		/** The URL of the sound file */
		audioFile: FormControl<string | null | undefined>,

		/** The alphabetic system used to display the phonetic spelling */
		phoneticNotation: FormControl<string | null | undefined>,

		/** Phonetic spelling is the representation of vocal sounds which express pronunciations of words. It is a system of spelling in which each letter represents invariably the same spoken sound */
		phoneticSpelling: FormControl<string | null | undefined>,
	}
	export function CreateHeadwordEntryPronunciationsFormGroup() {
		return new FormGroup<HeadwordEntryPronunciationsFormProperties>({
			audioFile: new FormControl<string | null | undefined>(undefined),
			phoneticNotation: new FormControl<string | null | undefined>(undefined),
			phoneticSpelling: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of an inflected form of a word */
	export interface HeadwordLemmatron {

		/**
		 * The identifier of a word
		 * Required
		 */
		id: string;

		/**
		 * IANA language code
		 * Required
		 */
		language: string;

		/**
		 * A grouping of various senses in a specific language, and a lexical category that relates to a word
		 * Required
		 * Minimum items: 1
		 */
		lexicalEntries: Array<LemmatronLexicalEntry>;

		/** The json object type. Could be 'headword', 'inflection' or 'phrase' */
		type?: string | null;

		/**
		 * A given written or spoken realisation of a an entry, lowercased.
		 * Required
		 */
		word: string;
	}

	/** Description of an inflected form of a word */
	export interface HeadwordLemmatronFormProperties {

		/**
		 * The identifier of a word
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * IANA language code
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/** The json object type. Could be 'headword', 'inflection' or 'phrase' */
		type: FormControl<string | null | undefined>,

		/**
		 * A given written or spoken realisation of a an entry, lowercased.
		 * Required
		 */
		word: FormControl<string | null | undefined>,
	}
	export function CreateHeadwordLemmatronFormGroup() {
		return new FormGroup<HeadwordLemmatronFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Description of an entry for a particular part of speech and grammatical features */
	export interface LemmatronLexicalEntry {

		/**
		 * The different forms are correlated with meanings or functions which we text as 'features'
		 * Minimum items: 1
		 */
		grammaticalFeatures?: Array<GrammaticalFeaturesListElement>;

		/**
		 * A grouping of the modifications of a word to express different grammatical categories
		 * Required
		 * Minimum items: 1
		 */
		LemmatronLexicalEntryInflectionOf: Array<LemmatronLexicalEntryInflectionOf>;

		/**
		 * IANA language code
		 * Required
		 */
		language: string;

		/**
		 * A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb
		 * Required
		 */
		lexicalCategory: string;

		/**
		 * A given written or spoken realisation of a an entry.
		 * Required
		 */
		text: string;
	}

	/** Description of an entry for a particular part of speech and grammatical features */
	export interface LemmatronLexicalEntryFormProperties {

		/**
		 * IANA language code
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/**
		 * A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb
		 * Required
		 */
		lexicalCategory: FormControl<string | null | undefined>,

		/**
		 * A given written or spoken realisation of a an entry.
		 * Required
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateLemmatronLexicalEntryFormGroup() {
		return new FormGroup<LemmatronLexicalEntryFormProperties>({
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lexicalCategory: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LemmatronLexicalEntryInflectionOf {

		/**
		 * The identifier of the word
		 * Required
		 */
		id: string;

		/** Required */
		text: string;
	}
	export interface LemmatronLexicalEntryInflectionOfFormProperties {

		/**
		 * The identifier of the word
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateLemmatronLexicalEntryInflectionOfFormGroup() {
		return new FormGroup<LemmatronLexicalEntryInflectionOfFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** description of thesaurus information of a word */
	export interface HeadwordThesaurus {

		/**
		 * The identifier of a word
		 * Required
		 */
		id: string;

		/**
		 * IANA language code
		 * Required
		 */
		language: string;

		/**
		 * A grouping of various senses in a specific language, and a lexical category that relates to a word
		 * Required
		 * Minimum items: 1
		 */
		lexicalEntries: Array<ThesaurusLexicalEntry>;

		/** The json object type. Could be 'headword', 'inflection' or 'phrase' */
		type?: string | null;

		/**
		 * A given written or spoken realisation of a an entry, lowercased.
		 * Required
		 */
		word: string;
	}

	/** description of thesaurus information of a word */
	export interface HeadwordThesaurusFormProperties {

		/**
		 * The identifier of a word
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * IANA language code
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/** The json object type. Could be 'headword', 'inflection' or 'phrase' */
		type: FormControl<string | null | undefined>,

		/**
		 * A given written or spoken realisation of a an entry, lowercased.
		 * Required
		 */
		word: FormControl<string | null | undefined>,
	}
	export function CreateHeadwordThesaurusFormGroup() {
		return new FormGroup<HeadwordThesaurusFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Description of an entry for a particular part of speech */
	export interface ThesaurusLexicalEntry {

		/** Minimum items: 1 */
		entries?: Array<ThesaurusEntry>;

		/**
		 * IANA language code
		 * Required
		 */
		language: string;

		/**
		 * A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb
		 * Required
		 */
		lexicalCategory: string;

		/**
		 * A given written or spoken realisation of a an entry.
		 * Required
		 */
		text: string;

		/**
		 * Various words that are used interchangeably depending on the context, e.g 'aluminium' and 'aluminum'
		 * Minimum items: 1
		 */
		ThesaurusLexicalEntryVariantForms?: Array<ThesaurusLexicalEntryVariantForms>;
	}

	/** Description of an entry for a particular part of speech */
	export interface ThesaurusLexicalEntryFormProperties {

		/**
		 * IANA language code
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/**
		 * A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb
		 * Required
		 */
		lexicalCategory: FormControl<string | null | undefined>,

		/**
		 * A given written or spoken realisation of a an entry.
		 * Required
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateThesaurusLexicalEntryFormGroup() {
		return new FormGroup<ThesaurusLexicalEntryFormProperties>({
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lexicalCategory: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ThesaurusEntry {

		/** Identifies the homograph grouping. The last two digits identify different entries of the same homograph. The first one/two digits identify the homograph number. */
		homographNumber?: string | null;

		/**
		 * Complete list of senses
		 * Minimum items: 1
		 */
		senses?: Array<ThesaurusSense>;

		/**
		 * Various words that are used interchangeably depending on the context, e.g 'aluminium' and 'aluminum'
		 * Minimum items: 1
		 */
		ThesaurusEntryVariantForms?: Array<ThesaurusEntryVariantForms>;
	}
	export interface ThesaurusEntryFormProperties {

		/** Identifies the homograph grouping. The last two digits identify different entries of the same homograph. The first one/two digits identify the homograph number. */
		homographNumber: FormControl<string | null | undefined>,
	}
	export function CreateThesaurusEntryFormGroup() {
		return new FormGroup<ThesaurusEntryFormProperties>({
			homographNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A lexical sense represents the lexical meaning of a lexical entry when interpreted as referring to the corresponding ontology element */
	export interface ThesaurusSense {

		/** Minimum items: 1 */
		ThesaurusSenseAntonyms?: Array<ThesaurusSenseAntonyms>;
		domains?: Array<string>;

		/**
		 * A list of written or spoken rendering of examples of use of a word or text
		 * Minimum items: 1
		 */
		examples?: Array<ExamplesListElement>;

		/** The id of the sense that is required for the delete procedure */
		id?: string | null;
		regions?: Array<string>;
		registers?: Array<string>;

		/**
		 * subsenses of word
		 * Minimum items: 1
		 */
		subsenses?: Array<ThesaurusSense>;

		/** Minimum items: 1 */
		ThesaurusSenseSynonyms?: Array<ThesaurusSenseSynonyms>;
	}

	/** A lexical sense represents the lexical meaning of a lexical entry when interpreted as referring to the corresponding ontology element */
	export interface ThesaurusSenseFormProperties {

		/** The id of the sense that is required for the delete procedure */
		id: FormControl<string | null | undefined>,
	}
	export function CreateThesaurusSenseFormGroup() {
		return new FormGroup<ThesaurusSenseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThesaurusSenseAntonyms {
		domains?: Array<string>;

		/** Required */
		id: string;
		language?: string | null;
		regions?: Array<string>;
		registers?: Array<string>;

		/** Required */
		text: string;
	}
	export interface ThesaurusSenseAntonymsFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateThesaurusSenseAntonymsFormGroup() {
		return new FormGroup<ThesaurusSenseAntonymsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ThesaurusSenseSynonyms {
		domains?: Array<string>;

		/** Required */
		id: string;
		language?: string | null;
		regions?: Array<string>;
		registers?: Array<string>;

		/** Required */
		text: string;
	}
	export interface ThesaurusSenseSynonymsFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateThesaurusSenseSynonymsFormGroup() {
		return new FormGroup<ThesaurusSenseSynonymsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ThesaurusEntryVariantForms {
		regions?: Array<string>;

		/** Required */
		text: string;
	}
	export interface ThesaurusEntryVariantFormsFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateThesaurusEntryVariantFormsFormGroup() {
		return new FormGroup<ThesaurusEntryVariantFormsFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ThesaurusLexicalEntryVariantForms {
		regions?: Array<string>;

		/** Required */
		text: string;
	}
	export interface ThesaurusLexicalEntryVariantFormsFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateThesaurusLexicalEntryVariantFormsFormGroup() {
		return new FormGroup<ThesaurusLexicalEntryVariantFormsFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InflectionsListElement {

		/**
		 * The identifier of the word
		 * Required
		 */
		id: string;

		/** Required */
		text: string;
	}
	export interface InflectionsListElementFormProperties {

		/**
		 * The identifier of the word
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateInflectionsListElementFormGroup() {
		return new FormGroup<InflectionsListElementFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Schema for the languages endpoint. */
	export interface Languages {

		/** Additional Information provided by OUP */
		metadata?: string | null;

		/**
		 * A list of languages available.
		 * Minimum items: 1
		 */
		LanguagesResults?: Array<LanguagesResults>;
	}

	/** Schema for the languages endpoint. */
	export interface LanguagesFormProperties {

		/** Additional Information provided by OUP */
		metadata: FormControl<string | null | undefined>,
	}
	export function CreateLanguagesFormGroup() {
		return new FormGroup<LanguagesFormProperties>({
			metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LanguagesResults {

		/** Name of region. */
		region?: string | null;

		/** Name of source dictionary. */
		source?: string | null;

		/** Source language of the results */
		sourceLanguage?: LanguagesResultsSourceLanguage;

		/** Translation language of the results */
		targetLanguage?: LanguagesResultsTargetLanguage;

		/** whether monolingual or bilingual. */
		type?: LanguagesResultsType | null;
	}
	export interface LanguagesResultsFormProperties {

		/** Name of region. */
		region: FormControl<string | null | undefined>,

		/** Name of source dictionary. */
		source: FormControl<string | null | undefined>,

		/** whether monolingual or bilingual. */
		type: FormControl<LanguagesResultsType | null | undefined>,
	}
	export function CreateLanguagesResultsFormGroup() {
		return new FormGroup<LanguagesResultsFormProperties>({
			region: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<LanguagesResultsType | null | undefined>(undefined),
		});

	}

	export interface LanguagesResultsSourceLanguage {

		/** IANA language code */
		id?: string | null;

		/** Language label. */
		language?: string | null;
	}
	export interface LanguagesResultsSourceLanguageFormProperties {

		/** IANA language code */
		id: FormControl<string | null | undefined>,

		/** Language label. */
		language: FormControl<string | null | undefined>,
	}
	export function CreateLanguagesResultsSourceLanguageFormGroup() {
		return new FormGroup<LanguagesResultsSourceLanguageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LanguagesResultsTargetLanguage {

		/** IANA language code */
		id?: string | null;

		/** Language label. */
		language?: string | null;
	}
	export interface LanguagesResultsTargetLanguageFormProperties {

		/** IANA language code */
		id: FormControl<string | null | undefined>,

		/** Language label. */
		language: FormControl<string | null | undefined>,
	}
	export function CreateLanguagesResultsTargetLanguageFormGroup() {
		return new FormGroup<LanguagesResultsTargetLanguageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LanguagesResultsType { monolingual = 'monolingual', bilingual = 'bilingual' }


	/** Schema for the inflections endpoint. */
	export interface Lemmatron {

		/** Additional Information provided by OUP */
		metadata?: string | null;

		/**
		 * A list of inflections matching a given word
		 * Minimum items: 1
		 */
		results?: Array<HeadwordLemmatron>;
	}

	/** Schema for the inflections endpoint. */
	export interface LemmatronFormProperties {

		/** Additional Information provided by OUP */
		metadata: FormControl<string | null | undefined>,
	}
	export function CreateLemmatronFormGroup() {
		return new FormGroup<LemmatronFormProperties>({
			metadata: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema for corpus ngrams. */
	export interface NgramsResult {

		/** Additional Information provided by OUP */
		metadata?: string | null;

		/**
		 * A list of found ngrams along with their frequencies
		 * Minimum items: 0
		 */
		NgramsResultResults?: Array<NgramsResultResults>;
	}

	/** Schema for corpus ngrams. */
	export interface NgramsResultFormProperties {

		/** Additional Information provided by OUP */
		metadata: FormControl<string | null | undefined>,
	}
	export function CreateNgramsResultFormGroup() {
		return new FormGroup<NgramsResultFormProperties>({
			metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NgramsResultResults {

		/**
		 * The number of times the ngram (a sequence of n words) appears in the corpus
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frequency: number;

		/**
		 * A list of tokens
		 * Required
		 * Minimum items: 1
		 */
		tokens: Array<string>;
	}
	export interface NgramsResultResultsFormProperties {

		/**
		 * The number of times the ngram (a sequence of n words) appears in the corpus
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frequency: FormControl<number | null | undefined>,
	}
	export function CreateNgramsResultResultsFormGroup() {
		return new FormGroup<NgramsResultResultsFormProperties>({
			frequency: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A grouping of pronunciation information */
	export interface PronunciationsListElement {

		/** The URL of the sound file */
		audioFile?: string | null;
		dialects?: Array<string>;

		/** The alphabetic system used to display the phonetic spelling */
		phoneticNotation?: string | null;

		/** Phonetic spelling is the representation of vocal sounds which express pronunciations of words. It is a system of spelling in which each letter represents invariably the same spoken sound */
		phoneticSpelling?: string | null;
		regions?: Array<string>;
	}

	/** A grouping of pronunciation information */
	export interface PronunciationsListElementFormProperties {

		/** The URL of the sound file */
		audioFile: FormControl<string | null | undefined>,

		/** The alphabetic system used to display the phonetic spelling */
		phoneticNotation: FormControl<string | null | undefined>,

		/** Phonetic spelling is the representation of vocal sounds which express pronunciations of words. It is a system of spelling in which each letter represents invariably the same spoken sound */
		phoneticSpelling: FormControl<string | null | undefined>,
	}
	export function CreatePronunciationsListElementFormGroup() {
		return new FormGroup<PronunciationsListElementFormProperties>({
			audioFile: new FormControl<string | null | undefined>(undefined),
			phoneticNotation: new FormControl<string | null | undefined>(undefined),
			phoneticSpelling: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema for region endpoint. */
	export interface Regions {

		/** Additional Information provided by OUP */
		metadata?: string | null;

		/** A mapping of regions available. */
		results?: {[id: string]: Array<string> };
	}

	/** Schema for region endpoint. */
	export interface RegionsFormProperties {

		/** Additional Information provided by OUP */
		metadata: FormControl<string | null | undefined>,

		/** A mapping of regions available. */
		results: FormControl<{[id: string]: Array<string> } | null | undefined>,
	}
	export function CreateRegionsFormGroup() {
		return new FormGroup<RegionsFormProperties>({
			metadata: new FormControl<string | null | undefined>(undefined),
			results: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
		});

	}


	/** Schema for the 'entries' endpoints */
	export interface RetrieveEntry {

		/** Additional Information provided by OUP */
		metadata?: string | null;

		/**
		 * A list of entries and all the data related to them
		 * Minimum items: 1
		 */
		results?: Array<HeadwordEntry>;
	}

	/** Schema for the 'entries' endpoints */
	export interface RetrieveEntryFormProperties {

		/** Additional Information provided by OUP */
		metadata: FormControl<string | null | undefined>,
	}
	export function CreateRetrieveEntryFormGroup() {
		return new FormGroup<RetrieveEntryFormProperties>({
			metadata: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of a word */
	export interface SentencesEntry {

		/**
		 * The identifier of a word
		 * Required
		 */
		id: string;

		/**
		 * IANA language code
		 * Required
		 */
		language: string;

		/**
		 * A grouping of various senses in a specific language, and a lexical category that relates to a word
		 * Required
		 * Minimum items: 1
		 */
		lexicalEntries: Array<SentencesLexicalEntry>;

		/** The json object type. Could be 'headword', 'inflection' or 'phrase' */
		type?: string | null;

		/**
		 * A given written or spoken realisation of a an entry, lowercased.
		 * Required
		 */
		word: string;
	}

	/** Description of a word */
	export interface SentencesEntryFormProperties {

		/**
		 * The identifier of a word
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * IANA language code
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/** The json object type. Could be 'headword', 'inflection' or 'phrase' */
		type: FormControl<string | null | undefined>,

		/**
		 * A given written or spoken realisation of a an entry, lowercased.
		 * Required
		 */
		word: FormControl<string | null | undefined>,
	}
	export function CreateSentencesEntryFormGroup() {
		return new FormGroup<SentencesEntryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Description of an entry for a particular part of speech */
	export interface SentencesLexicalEntry {

		/**
		 * The different forms are correlated with meanings or functions which we text as 'features'
		 * Minimum items: 1
		 */
		grammaticalFeatures?: Array<GrammaticalFeaturesListElement>;

		/**
		 * IANA language code
		 * Required
		 */
		language: string;

		/** A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb */
		lexicalCategory?: string | null;

		/**
		 * A list of written or spoken rendering of examples of use of a word or text
		 * Required
		 * Minimum items: 1
		 */
		sentences: Array<ExamplesListElement>;

		/**
		 * A given written or spoken realisation of a an entry.
		 * Required
		 */
		text: string;
	}

	/** Description of an entry for a particular part of speech */
	export interface SentencesLexicalEntryFormProperties {

		/**
		 * IANA language code
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/** A linguistic category of words (or more precisely lexical items), generally defined by the syntactic or morphological behaviour of the lexical item in question, such as noun or verb */
		lexicalCategory: FormControl<string | null | undefined>,

		/**
		 * A given written or spoken realisation of a an entry.
		 * Required
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateSentencesLexicalEntryFormGroup() {
		return new FormGroup<SentencesLexicalEntryFormProperties>({
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lexicalCategory: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Schema for the 'sentences' endpoint */
	export interface SentencesResults {

		/** Additional Information provided by OUP */
		metadata?: string | null;

		/**
		 * A list of entries and all the data related to them
		 * Minimum items: 1
		 */
		results?: Array<SentencesEntry>;
	}

	/** Schema for the 'sentences' endpoint */
	export interface SentencesResultsFormProperties {

		/** Additional Information provided by OUP */
		metadata: FormControl<string | null | undefined>,
	}
	export function CreateSentencesResultsFormGroup() {
		return new FormGroup<SentencesResultsFormProperties>({
			metadata: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema for lexi-stats results for a word/trueCase/lemma/lexicalCategory returned as a frequency */
	export interface StatsWordResult {

		/** Additional Information provided by OUP */
		metadata?: string | null;

		/** Frequency information for a given entity */
		result?: StatsWordResultResult;
	}

	/** Schema for lexi-stats results for a word/trueCase/lemma/lexicalCategory returned as a frequency */
	export interface StatsWordResultFormProperties {

		/** Additional Information provided by OUP */
		metadata: FormControl<string | null | undefined>,
	}
	export function CreateStatsWordResultFormGroup() {
		return new FormGroup<StatsWordResultFormProperties>({
			metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StatsWordResultResult {

		/**
		 * The number of times a word appears in the entire corpus
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frequency: number;

		/** A lemma of the word (e.g., wordforms "lay", "laid" and "laying" have all lemma "lay") */
		lemma?: string | null;

		/** A lexical category such as 'verb' or 'noun' */
		lexicalCategory?: string | null;

		/**
		 * The number of database records that matched the query params (stated frequency is the sum of the individual frequencies)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		matchCount: number;

		/**
		 * The number of times a word appears on average in 1 million words
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		normalizedFrequency: number;

		/** A given written realisation of a an entry (e.g., "lay") usually lower case */
		trueCase?: string | null;

		/** A given written realisation of a an entry (e.g., "Lay") preserving case */
		wordform?: string | null;
	}
	export interface StatsWordResultResultFormProperties {

		/**
		 * The number of times a word appears in the entire corpus
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frequency: FormControl<number | null | undefined>,

		/** A lemma of the word (e.g., wordforms "lay", "laid" and "laying" have all lemma "lay") */
		lemma: FormControl<string | null | undefined>,

		/** A lexical category such as 'verb' or 'noun' */
		lexicalCategory: FormControl<string | null | undefined>,

		/**
		 * The number of database records that matched the query params (stated frequency is the sum of the individual frequencies)
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		matchCount: FormControl<number | null | undefined>,

		/**
		 * The number of times a word appears on average in 1 million words
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		normalizedFrequency: FormControl<number | null | undefined>,

		/** A given written realisation of a an entry (e.g., "lay") usually lower case */
		trueCase: FormControl<string | null | undefined>,

		/** A given written realisation of a an entry (e.g., "Lay") preserving case */
		wordform: FormControl<string | null | undefined>,
	}
	export function CreateStatsWordResultResultFormGroup() {
		return new FormGroup<StatsWordResultResultFormProperties>({
			frequency: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lemma: new FormControl<string | null | undefined>(undefined),
			lexicalCategory: new FormControl<string | null | undefined>(undefined),
			matchCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			normalizedFrequency: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			trueCase: new FormControl<string | null | undefined>(undefined),
			wordform: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema for lexi-stats results for a word/trueCase/lemma/lexicalCategory returned as a list of frequencies per wordform-trueCase-lemma-lexicalCategory entry. */
	export interface StatsWordResultList {

		/** Additional Information provided by OUP */
		metadata?: string | null;

		/**
		 * A list of found words along with their frequencies
		 * Minimum items: 0
		 */
		StatsWordResultListResults?: Array<StatsWordResultListResults>;
	}

	/** Schema for lexi-stats results for a word/trueCase/lemma/lexicalCategory returned as a list of frequencies per wordform-trueCase-lemma-lexicalCategory entry. */
	export interface StatsWordResultListFormProperties {

		/** Additional Information provided by OUP */
		metadata: FormControl<string | null | undefined>,
	}
	export function CreateStatsWordResultListFormGroup() {
		return new FormGroup<StatsWordResultListFormProperties>({
			metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StatsWordResultListResults {

		/**
		 * The number of times a word appears in the entire corpus
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frequency: number;

		/**
		 * A lemma of the word.
		 * Required
		 */
		lemma: string;

		/**
		 * A lexical category such as 'verb' or 'noun'
		 * Required
		 */
		lexicalCategory: string;

		/**
		 * The number of times a word appears on average in 1 million words
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		normalizedFrequency: number;

		/**
		 * A given written realisation of a an entry (e.g., "lay") usually lower case
		 * Required
		 */
		trueCase: string;

		/**
		 * A given written realisation of a an entry (e.g., "lay") preserving case
		 * Required
		 */
		wordform: string;
	}
	export interface StatsWordResultListResultsFormProperties {

		/**
		 * The number of times a word appears in the entire corpus
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frequency: FormControl<number | null | undefined>,

		/**
		 * A lemma of the word.
		 * Required
		 */
		lemma: FormControl<string | null | undefined>,

		/**
		 * A lexical category such as 'verb' or 'noun'
		 * Required
		 */
		lexicalCategory: FormControl<string | null | undefined>,

		/**
		 * The number of times a word appears on average in 1 million words
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		normalizedFrequency: FormControl<number | null | undefined>,

		/**
		 * A given written realisation of a an entry (e.g., "lay") usually lower case
		 * Required
		 */
		trueCase: FormControl<string | null | undefined>,

		/**
		 * A given written realisation of a an entry (e.g., "lay") preserving case
		 * Required
		 */
		wordform: FormControl<string | null | undefined>,
	}
	export function CreateStatsWordResultListResultsFormGroup() {
		return new FormGroup<StatsWordResultListResultsFormProperties>({
			frequency: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lemma: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lexicalCategory: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			normalizedFrequency: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			trueCase: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wordform: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SynonymsAntonymsElement {
		domains?: Array<string>;

		/** Required */
		id: string;
		language?: string | null;
		regions?: Array<string>;
		registers?: Array<string>;

		/** Required */
		text: string;
	}
	export interface SynonymsAntonymsElementFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateSynonymsAntonymsElementFormGroup() {
		return new FormGroup<SynonymsAntonymsElementFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Schema for thesaurus endpoint */
	export interface Thesaurus {

		/** Additional Information provided by OUP */
		metadata?: string | null;

		/**
		 * A list of found synonyms or antonyms
		 * Minimum items: 1
		 */
		results?: Array<HeadwordThesaurus>;
	}

	/** Schema for thesaurus endpoint */
	export interface ThesaurusFormProperties {

		/** Additional Information provided by OUP */
		metadata: FormControl<string | null | undefined>,
	}
	export function CreateThesaurusFormGroup() {
		return new FormGroup<ThesaurusFormProperties>({
			metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TranslationsListElement {
		domains?: Array<string>;

		/**
		 * The different forms are correlated with meanings or functions which we text as 'features'
		 * Minimum items: 1
		 */
		grammaticalFeatures?: Array<GrammaticalFeaturesListElement>;

		/**
		 * IANA language code specifying the language of the translation
		 * Required
		 */
		language: string;

		/**
		 * various types of notes that appear
		 * Minimum items: 1
		 */
		notes?: Array<CategorizedTextListElement>;
		regions?: Array<string>;
		registers?: Array<string>;

		/** Required */
		text: string;
	}
	export interface TranslationsListElementFormProperties {

		/**
		 * IANA language code specifying the language of the translation
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateTranslationsListElementFormGroup() {
		return new FormGroup<TranslationsListElementFormProperties>({
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Schema for lexicalcategories, registers utility endpoints. */
	export interface UtilityLabels {

		/** Additional Information provided by OUP */
		metadata?: string | null;

		/** Mapping of labels available. */
		results?: {[id: string]: UtilityLabelsResults };
	}

	/** Schema for lexicalcategories, registers utility endpoints. */
	export interface UtilityLabelsFormProperties {

		/** Additional Information provided by OUP */
		metadata: FormControl<string | null | undefined>,

		/** Mapping of labels available. */
		results: FormControl<{[id: string]: UtilityLabelsResults } | null | undefined>,
	}
	export function CreateUtilityLabelsFormGroup() {
		return new FormGroup<UtilityLabelsFormProperties>({
			metadata: new FormControl<string | null | undefined>(undefined),
			results: new FormControl<{[id: string]: UtilityLabelsResults } | null | undefined>(undefined),
		});

	}

	export interface UtilityLabelsResults {

		/** Label in English */
		en?: string | null;
	}
	export interface UtilityLabelsResultsFormProperties {

		/** Label in English */
		en: FormControl<string | null | undefined>,
	}
	export function CreateUtilityLabelsResultsFormGroup() {
		return new FormGroup<UtilityLabelsResultsFormProperties>({
			en: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VariantFormsListElement {
		regions?: Array<string>;

		/** Required */
		text: string;
	}
	export interface VariantFormsListElementFormProperties {

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateVariantFormsListElementFormGroup() {
		return new FormGroup<VariantFormsListElementFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Schema for wordlist endpoint. */
	export interface Wordlist {

		/** Additional Information provided by OUP */
		metadata?: string | null;

		/**
		 * A list of found words
		 * Minimum items: 0
		 */
		WordlistResults?: Array<WordlistResults>;
	}

	/** Schema for wordlist endpoint. */
	export interface WordlistFormProperties {

		/** Additional Information provided by OUP */
		metadata: FormControl<string | null | undefined>,
	}
	export function CreateWordlistFormGroup() {
		return new FormGroup<WordlistFormProperties>({
			metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WordlistResults {

		/**
		 * The identifier of a word
		 * Required
		 */
		id: string;
		matchString?: string | null;
		matchType?: string | null;

		/** Name of region. */
		region?: string | null;

		/**
		 * A given written or spoken realisation of a an entry, lowercased.
		 * Required
		 */
		word: string;
	}
	export interface WordlistResultsFormProperties {

		/**
		 * The identifier of a word
		 * Required
		 */
		id: FormControl<string | null | undefined>,
		matchString: FormControl<string | null | undefined>,
		matchType: FormControl<string | null | undefined>,

		/** Name of region. */
		region: FormControl<string | null | undefined>,

		/**
		 * A given written or spoken realisation of a an entry, lowercased.
		 * Required
		 */
		word: FormControl<string | null | undefined>,
	}
	export function CreateWordlistResultsFormGroup() {
		return new FormGroup<WordlistResultsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			matchString: new FormControl<string | null | undefined>(undefined),
			matchType: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists available domains in a bilingual dataset
		 * Returns a list of the available [domains](documentation/glossary?term=domain) for a given bilingual language dataset.
		 * Get domains/{source_domains_language}/{target_domains_language}
		 * @param {Domains_source_domains_language_target_domains_languageGetSource_domains_language} source_domains_language IANA language code
		 * @param {Domains_source_domains_language_target_domains_languageGetTarget_domains_language} target_domains_language IANA language code
		 * @return {UtilityLabels} Successful response.
		 */
		Domains_source_domains_language_target_domains_languageGet(source_domains_language: Domains_source_domains_language_target_domains_languageGetSource_domains_language, target_domains_language: Domains_source_domains_language_target_domains_languageGetTarget_domains_language, headersHandler?: () => HttpHeaders): Observable<UtilityLabels> {
			return this.http.get<UtilityLabels>(this.baseUri + 'domains/' + source_domains_language + '/' + target_domains_language, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists available domains in a monolingual dataset
		 * Returns a list of the available [domains](documentation/glossary?term=domain) for a given monolingual language dataset.
		 * Get domains/{source_language}
		 * @param {Domains_source_languageGetSource_language} source_language IANA language code
		 * @return {UtilityLabels} Successful response.
		 */
		Domains_source_languageGet(source_language: Domains_source_languageGetSource_language, headersHandler?: () => HttpHeaders): Observable<UtilityLabels> {
			return this.http.get<UtilityLabels>(this.baseUri + 'domains/' + source_language, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve corpus sentences for a given word
		 * Use this to retrieve sentences extracted from  corpora which show how a word is used in the language. This is available for English and Spanish. For English, the sentences are linked to the correct [sense](documentation/glossary?term=sense) of the word in the dictionary. In Spanish, they are linked at the [headword](documentation/glossary?term=headword) level.
		 * <div id="sentences"></div>
		 * Get entries/{source_language}/{word_id}/sentences
		 * @param {Entries_source_language_word_idSentencesGetSource_language} source_language IANA language code
		 * @param {string} word_id An Entry identifier. Case-sensitive.
		 * @return {SentencesResults} Successful response.
		 */
		Entries_source_language_word_idSentencesGet(source_language: Entries_source_language_word_idSentencesGetSource_language, word_id: string, headersHandler?: () => HttpHeaders): Observable<SentencesResults> {
			return this.http.get<SentencesResults>(this.baseUri + 'entries/' + source_language + '/' + (word_id == null ? '' : encodeURIComponent(word_id)) + '/sentences', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve dictionary information for a given word
		 * Use this to retrieve definitions, [pronunciations](documentation/glossary?term=pronunciation), example sentences, [grammatical information](documentation/glossary?term=grammaticalfeatures) and [word origins](documentation/glossary?term=etymology). It only works for dictionary [headwords](documentation/glossary?term=headword), so you may need to use the [Lemmatron](documentation/glossary?term=lemma) first if your input is likely to be an [inflected](documentation/glossary?term=inflection) form (e.g., 'swimming'). This would return the linked [headword](documentation/glossary?term=headword) (e.g., 'swim') which you can then use in the Entries endpoint. Unless specified using a region filter, the default lookup will be the Oxford Dictionary of English (GB).
		 * <div id="dictionary_entries"></div>
		 * Get entries/{source_lang}/{word_id}
		 * @param {Entries_source_lang_word_idGetSource_lang} source_lang IANA language code
		 * @param {string} word_id An Entry identifier. Case-sensitive.
		 * @return {RetrieveEntry} Successful response.
		 */
		Entries_source_lang_word_idGet(source_lang: Entries_source_lang_word_idGetSource_lang, word_id: string, headersHandler?: () => HttpHeaders): Observable<RetrieveEntry> {
			return this.http.get<RetrieveEntry>(this.baseUri + 'entries/' + source_lang + '/' + (word_id == null ? '' : encodeURIComponent(word_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve words that mean the opposite
		 * Retrieve words that are opposite in meaning to the input word ([antonym](documentation/glossary?term=thesaurus)).
		 * <div id="antonyms"></div>
		 * Get entries/{source_lang}/{word_id}/antonyms
		 * @param {Entries_source_lang_word_idAntonymsGetSource_lang} source_lang IANA language code
		 * @param {string} word_id An Entry identifier. Case-sensitive.
		 * @return {Thesaurus} Successful response.
		 */
		Entries_source_lang_word_idAntonymsGet(source_lang: Entries_source_lang_word_idAntonymsGetSource_lang, word_id: string, headersHandler?: () => HttpHeaders): Observable<Thesaurus> {
			return this.http.get<Thesaurus>(this.baseUri + 'entries/' + source_lang + '/' + (word_id == null ? '' : encodeURIComponent(word_id)) + '/antonyms', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Specify GB or US dictionary for English entry search
		 * USe this filter to restrict the lookup to either our Oxford Dictionary of English (GB) or New Oxford American Dictionary (US).
		 * Get entries/{source_lang}/{word_id}/regions={region}
		 * @param {Entries_source_lang_word_idAntonymsGetSource_lang} source_lang IANA language code
		 * @param {string} word_id An Entry identifier. Case-sensitive.
		 * @param {Entries_source_lang_word_idRegions__regionGetRegion} region Region filter parameter. gb = Oxford Dictionary of English. us = New Oxford American Dictionary.
		 * @return {RetrieveEntry} Successful response.
		 */
		Entries_source_lang_word_idRegions__regionGet(source_lang: Entries_source_lang_word_idAntonymsGetSource_lang, word_id: string, region: Entries_source_lang_word_idRegions__regionGetRegion, headersHandler?: () => HttpHeaders): Observable<RetrieveEntry> {
			return this.http.get<RetrieveEntry>(this.baseUri + 'entries/' + source_lang + '/' + (word_id == null ? '' : encodeURIComponent(word_id)) + '/regions=' + region, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve words that are similar
		 * Use this to retrieve words that are similar in meaning to the input word ([synonym](documentation/glossary?term=synonym)).
		 * <div id="synonyms"></div>
		 * Get entries/{source_lang}/{word_id}/synonyms
		 * @param {Entries_source_lang_word_idAntonymsGetSource_lang} source_lang IANA language code
		 * @param {string} word_id An Entry identifier. Case-sensitive.
		 * @return {Thesaurus} Successful response.
		 */
		Entries_source_lang_word_idSynonymsGet(source_lang: Entries_source_lang_word_idAntonymsGetSource_lang, word_id: string, headersHandler?: () => HttpHeaders): Observable<Thesaurus> {
			return this.http.get<Thesaurus>(this.baseUri + 'entries/' + source_lang + '/' + (word_id == null ? '' : encodeURIComponent(word_id)) + '/synonyms', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve synonyms and antonyms for a given word
		 * Retrieve available [synonyms](documentation/glossary?term=thesaurus) and [antonyms](documentation/glossary?term=thesaurus) for a given word and language.
		 * <div id="synonyms_and_antonyms"></div>
		 * Get entries/{source_lang}/{word_id}/synonyms;antonyms
		 * @param {Entries_source_lang_word_idAntonymsGetSource_lang} source_lang IANA language code
		 * @param {string} word_id An Entry identifier. Case-sensitive.
		 * @return {Thesaurus} Successful response.
		 */
		Entries_source_lang_word_idSynonyms_antonymsGet(source_lang: Entries_source_lang_word_idAntonymsGetSource_lang, word_id: string, headersHandler?: () => HttpHeaders): Observable<Thesaurus> {
			return this.http.get<Thesaurus>(this.baseUri + 'entries/' + source_lang + '/' + (word_id == null ? '' : encodeURIComponent(word_id)) + '/synonyms;antonyms', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Apply filters to response
		 * Use filters to limit the [entry](documentation/glossary?term=entry) information that is returned. For example, you may only require definitions and not everything else, or just [pronunciations](documentation/glossary?term=pronunciation). The full list of filters can be retrieved from the filters Utility endpoint. You can also specify values within the filter using '='. For example 'grammaticalFeatures=singular'. Filters can also be combined using a semicolon.
		 * <div id="dictionary_entries_filters"></div>
		 * Get entries/{source_lang}/{word_id}/{filters}
		 * @param {Entries_source_lang_word_idGetSource_lang} source_lang IANA language code
		 * @param {string} word_id An Entry identifier. Case-sensitive.
		 * @param {string} filters Separate filtering conditions using a semicolon. Conditions take values grammaticalFeatures and/or lexicalCategory and are case-sensitive. To list multiple values in single condition divide them with comma.
		 * @return {RetrieveEntry} Successful response.
		 */
		Entries_source_lang_word_id_filtersGet(source_lang: Entries_source_lang_word_idGetSource_lang, word_id: string, filters: string, headersHandler?: () => HttpHeaders): Observable<RetrieveEntry> {
			return this.http.get<RetrieveEntry>(this.baseUri + 'entries/' + source_lang + '/' + (word_id == null ? '' : encodeURIComponent(word_id)) + '/' + (filters == null ? '' : encodeURIComponent(filters)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve translation for a given word
		 * Use this to return translations for a given word. In the event that a word in the dataset does not have a direct translation, the response will be a [definition](documentation/glossary?term=entry) in the target language.
		 * <div id="translation"></div>
		 * Get entries/{source_translation_language}/{word_id}/translations={target_translation_language}
		 * @param {Entries_source_translation_language_word_idTranslations__target_translation_languageGetSource_translation_language} source_translation_language IANA language code
		 * @param {string} word_id The source word
		 * @param {Domains_source_domains_language_target_domains_languageGetTarget_domains_language} target_translation_language IANA language code
		 * @return {RetrieveEntry} Successful response. In case word doesn't have a direct translation a response would be definitions.
		 */
		Entries_source_translation_language_word_idTranslations__target_translation_languageGet(source_translation_language: Entries_source_translation_language_word_idTranslations__target_translation_languageGetSource_translation_language, word_id: string, target_translation_language: Domains_source_domains_language_target_domains_languageGetTarget_domains_language, headersHandler?: () => HttpHeaders): Observable<RetrieveEntry> {
			return this.http.get<RetrieveEntry>(this.baseUri + 'entries/' + source_translation_language + '/' + (word_id == null ? '' : encodeURIComponent(word_id)) + '/translations=' + target_translation_language, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists available filters
		 * Returns a list of all the valid filters to construct API calls.
		 * Get filters
		 * @return {Filters} Successful response.
		 */
		FiltersGet(headersHandler?: () => HttpHeaders): Observable<Filters> {
			return this.http.get<Filters>(this.baseUri + 'filters', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists available filters for specific endpoint
		 * Returns a list of all the valid filters for a given endpoint to construct API calls.
		 * Get filters/{endpoint}
		 * @param {Filters_endpointGetEndpoint} endpoint Name of the endpoint.
		 * @return {Filters} Successful response.
		 */
		Filters_endpointGet(endpoint: Filters_endpointGetEndpoint, headersHandler?: () => HttpHeaders): Observable<Filters> {
			return this.http.get<Filters>(this.baseUri + 'filters/' + endpoint, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists available grammatical features in a dataset
		 * Returns a list of the available [grammatical features](documentation/glossary?term=grammaticalfeatures) for a given language dataset.
		 * Get grammaticalFeatures/{source_language}
		 * @param {GrammaticalFeatures_source_languageGetSource_language} source_language IANA language code. If provided output will be filtered by sourceLanguage.
		 * @return {UtilityLabels} Successful response.
		 */
		GrammaticalFeatures_source_languageGet(source_language: GrammaticalFeatures_source_languageGetSource_language, headersHandler?: () => HttpHeaders): Observable<UtilityLabels> {
			return this.http.get<UtilityLabels>(this.baseUri + 'grammaticalFeatures/' + source_language, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Check a word exists in the dictionary and retrieve its root form
		 * Use this to check if a word exists in the dictionary, or what 'root' form it links to (e.g., swimming > swim). The response tells you the possible [lemmas](documentation/glossary?term=lemma) for a given [inflected](documentation/glossary?term=inflection) word. This can then be combined with other endpoints to retrieve more information.
		 * <div id="lemmatron"></div>
		 * Get inflections/{source_lang}/{word_id}/{filters}
		 * @param {Inflections_source_lang_word_id_filtersGetSource_lang} source_lang IANA language code
		 * @param {string} filters Separate filtering conditions using a semicolon. Conditions take values grammaticalFeatures and/or lexicalCategory and are case-sensitive. To list multiple values in single condition divide them with comma.
		 * @param {string} word_id The input word
		 * @return {Lemmatron} Successful response.
		 */
		Inflections_source_lang_word_id_filtersGet(source_lang: Inflections_source_lang_word_id_filtersGetSource_lang, filters: string, word_id: string, headersHandler?: () => HttpHeaders): Observable<Lemmatron> {
			return this.http.get<Lemmatron>(this.baseUri + 'inflections/' + source_lang + '/' + (word_id == null ? '' : encodeURIComponent(word_id)) + '/' + (filters == null ? '' : encodeURIComponent(filters)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists available dictionaries
		 * Returns a list of monolingual and bilingual language datasets available in the API
		 * Get languages
		 * @param {LanguagesGetBySourceLanguageAndTargetLanguageSourceLanguage} sourceLanguage IANA language code. If provided output will be filtered by sourceLanguage.
		 * @param {LanguagesGetBySourceLanguageAndTargetLanguageTargetLanguage} targetLanguage IANA language code. If provided output will be filtered by sourceLanguage.
		 * @return {Languages} Successful response.
		 */
		LanguagesGetBySourceLanguageAndTargetLanguage(sourceLanguage: LanguagesGetBySourceLanguageAndTargetLanguageSourceLanguage | null | undefined, targetLanguage: LanguagesGetBySourceLanguageAndTargetLanguageTargetLanguage | null | undefined, headersHandler?: () => HttpHeaders): Observable<Languages> {
			return this.http.get<Languages>(this.baseUri + 'languages?sourceLanguage=' + sourceLanguage + '&targetLanguage=' + targetLanguage, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists available lexical categories in a dataset
		 * Returns a list of available [lexical categories](documentation/glossary?term=lexicalcategory) for a given language dataset.
		 * Get lexicalcategories/{language}
		 * @param {LanguagesGetBySourceLanguageAndTargetLanguageSourceLanguage} language IANA language code
		 * @return {UtilityLabels} Successful response.
		 */
		Lexicalcategories_languageGet(language: LanguagesGetBySourceLanguageAndTargetLanguageSourceLanguage, headersHandler?: () => HttpHeaders): Observable<UtilityLabels> {
			return this.http.get<UtilityLabels>(this.baseUri + 'lexicalcategories/' + language, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists available regions in a monolingual dataset
		 * Returns a list of the available [regions](documentation/glossary?term=regions) for a given monolingual language dataset.
		 * Get regions/{source_language}
		 * @param {Entries_source_lang_word_idAntonymsGetSource_lang} source_language IANA language code
		 * @return {Regions} Successful response.
		 */
		Regions_source_languageGet(source_language: Entries_source_lang_word_idAntonymsGetSource_lang, headersHandler?: () => HttpHeaders): Observable<Regions> {
			return this.http.get<Regions>(this.baseUri + 'regions/' + source_language, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists available registers in a  monolingual dataset
		 * Returns a list of the available [registers](documentation/glossary?term=registers) for a given monolingual language dataset.
		 * Get registers/{source_language}
		 * @param {Registers_source_languageGetSource_language} source_language IANA language code
		 * @return {UtilityLabels} Successful response.
		 */
		Registers_source_languageGet(source_language: Registers_source_languageGetSource_language, headersHandler?: () => HttpHeaders): Observable<UtilityLabels> {
			return this.http.get<UtilityLabels>(this.baseUri + 'registers/' + source_language, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists available registers in a bilingual dataset
		 * Returns a list of the available [registers](documentation/glossary?term=registers) for a given bilingual language dataset.
		 * Get registers/{source_register_language}/{target_register_language}
		 * @param {Registers_source_register_language_target_register_languageGetSource_register_language} source_register_language IANA language code
		 * @param {Registers_source_register_language_target_register_languageGetTarget_register_language} target_register_language IANA language code
		 * @return {UtilityLabels} Successful response.
		 */
		Registers_source_register_language_target_register_languageGet(source_register_language: Registers_source_register_language_target_register_languageGetSource_register_language, target_register_language: Registers_source_register_language_target_register_languageGetTarget_register_language, headersHandler?: () => HttpHeaders): Observable<UtilityLabels> {
			return this.http.get<UtilityLabels>(this.baseUri + 'registers/' + source_register_language + '/' + target_register_language, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve possible matches to input
		 * Use this to retrieve possible [headword](documentation/glossary?term=headword) matches for a given string of text. The results are culculated using headword matching, fuzzy matching, and [lemmatization](documentation/glossary?term=lemma)
		 * <div id="search"></div>
		 * Get search/{source_lang}
		 * @param {Search_source_langGetByQAndPrefixAndRegionsAndLimitAndOffsetSource_lang} source_lang IANA language code
		 * @param {string} q Search string
		 * @param {Search_source_langGetByQAndPrefixAndRegionsAndLimitAndOffsetPrefix} prefix Set prefix to true if you'd like to get results only starting with search string.
		 * @param {string} regions If searching in English, filter words with specific region(s) either 'us' or 'gb'.
		 * @param {string} limit Limit the number of results per response. Default and maximum limit is 5000.
		 * @param {string} offset Offset the start number of the result.
		 * @return {Wordlist} Successful response.
		 */
		Search_source_langGetByQAndPrefixAndRegionsAndLimitAndOffset(source_lang: Search_source_langGetByQAndPrefixAndRegionsAndLimitAndOffsetSource_lang, q: string | null | undefined, prefix: Search_source_langGetByQAndPrefixAndRegionsAndLimitAndOffsetPrefix | null | undefined, regions: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Wordlist> {
			return this.http.get<Wordlist>(this.baseUri + 'search/' + source_lang + '?q=' + (q == null ? '' : encodeURIComponent(q)) + '&prefix=' + prefix + '&regions=' + (regions == null ? '' : encodeURIComponent(regions)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve possible translation matches to input
		 * Use this to find matches in our translation dictionaries.
		 * <div id="search_translation"></div>
		 * Get search/{source_search_language}/translations={target_search_language}
		 * @param {Entries_source_translation_language_word_idTranslations__target_translation_languageGetSource_translation_language} source_search_language IANA language code
		 * @param {Domains_source_domains_language_target_domains_languageGetTarget_domains_language} target_search_language IANA language code
		 * @param {string} q Search string.
		 * @param {Search_source_search_languageTranslations__target_search_languageGetByQAndPrefixAndRegionsAndLimitAndOffsetPrefix} prefix Set prefix to true if you'd like to get results only starting with search string.
		 * @param {string} regions Filter words with specific region(s) E.g., regions=us. For now gb, us are available for en language.
		 * @param {string} limit Limit the number of results per response. Default and maximum limit is 5000.
		 * @param {string} offset Offset the start number of the result.
		 * @return {Wordlist} Successful response.
		 */
		Search_source_search_languageTranslations__target_search_languageGetByQAndPrefixAndRegionsAndLimitAndOffset(source_search_language: Entries_source_translation_language_word_idTranslations__target_translation_languageGetSource_translation_language, target_search_language: Domains_source_domains_language_target_domains_languageGetTarget_domains_language, q: string | null | undefined, prefix: Search_source_search_languageTranslations__target_search_languageGetByQAndPrefixAndRegionsAndLimitAndOffsetPrefix | null | undefined, regions: string | null | undefined, limit: string | null | undefined, offset: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Wordlist> {
			return this.http.get<Wordlist>(this.baseUri + 'search/' + source_search_language + '/translations=' + target_search_language + '?q=' + (q == null ? '' : encodeURIComponent(q)) + '&prefix=' + prefix + '&regions=' + (regions == null ? '' : encodeURIComponent(regions)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve the frequency of ngrams (1-4) derived from a corpus
		 * This endpoint returns frequencies of ngrams of size 1-4. That is the number of times a word (ngram size = 1) or words (ngram size > 1) appear in the corpus. Ngrams are case sensitive ("I AM" and "I am" will have different frequency) and frequencies are calculated per word (true case) so "the book" and "the books" are two different ngrams. The results can be filtered based on query parameters. <br> <br> Parameters can be provided in PATH, GET or POST (form or json). The parameters in PATH are overridden by parameters in GET, POST and json (in that order). In PATH, individual options are separated by semicolon and values are separated by commas (where multiple values can be used). <br> <br> Example for bigrams (ngram of size 2):
		 * * PATH: /tokens=a word,another word
		 * * GET: /?tokens=a word&tokens=another word
		 * * POST (json):
		 * ```javascript
		 * {
		 * "tokens": ["a word", "another word"]
		 * }
		 * ```
		 * Either "tokens" or "contains" has to be provided. <br> <br> Some queries with "contains" or "sort" can exceed the 30s timeout, in which case the API will return an error message with status code 503. You mitigate this by providing additional restrictions such as "minFrequency" and "maxFrequency". <br> <br> You can use the parameters "offset" and "limit" to paginate through large result sets. For convenience, the HTTP header "Link" is set on the response to provide links to "first", "self", "next", "prev" and "last" pages of results (depending on the context). For example, if the result set contains 50 results and the parameter "limit" is set to 25, the Links header will contain an URL for the first 25 results and the next 25 results. <br> <br> Some libraries such as python's `requests` can parse the header automatically and offer a convenient way of iterating through the results. For example:
		 * ```python def get_all_results(url):
		 * while url:
		 * r = requests.get(url)
		 * r.raise_for_status()
		 * for item in r.json()['results']:
		 * yield item
		 * url = r.links.get('next', {}).get('url')
		 * ```
		 * Get stats/frequency/ngrams/{source_lang}/{corpus}/{ngram_size}/
		 * @param {string} source_lang IANA language code
		 * @param {string} corpus For corpora other than 'nmc' (New Monitor Corpus) please contact api@oxforddictionaries.com
		 * @param {string} ngram_size the size of ngrams requested (1-4)
		 * @param {string} tokens List of tokens to filter. The tokens are separated by spaces, the list items are separated by comma (e.g., for bigrams (n=2) tokens=this is,this was, this will)
		 * @param {string} contains Find ngrams containing the given token(s). Use comma or space as token separators; the order of tokens is irrelevant.
		 * @param {string} punctuation Flag specifying whether to lookup ngrams that include punctuation or not (possible values are "true" and "false"; default is "false")
		 * @param {string} format Option specifying whether tokens should be returned as a single string (option "google") or as a list of strings (option "oup")
		 * @param {string} minFrequency Restrict the query to entries with frequency of at least `minFrequency`
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} maxFrequency Restrict the query to entries with frequency of at most `maxFrequency`
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} minDocumentFrequency Restrict the query to entries that appear in at least `minDocumentFrequency` documents
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} maxDocumentFrequency Restrict the query to entries that appera in at most `maxDocumentFrequency` documents
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} collate collate the results by wordform, trueCase, lemma, lexicalCategory. Multiple values can be separated by commas (e.g., collate=trueCase,lemma,lexicalCategory).
		 * @param {string} sort sort the resulting list by wordform, trueCase, lemma, lexicalCategory, frequency, normalizedFrequency. Descending order is achieved by prepending the value with the minus sign ('-'). Multiple values can be separated by commas (e.g., sort=lexicalCategory,-frequency)
		 * @param {string} offset pagination - results offset
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} limit pagination - results limit
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {NgramsResult} Successful response.
		 */
		StatsFrequencyNgrams_source_lang_corpus_ngram_sizeGetByTokensAndContainsAndPunctuationAndFormatAndMinFrequencyAndMaxFrequencyAndMinDocumentFrequencyAndMaxDocumentFrequencyAndCollateAndSortAndOffsetAndLimit(source_lang: string, corpus: string, ngram_size: string, tokens: string | null | undefined, contains: string | null | undefined, punctuation: string | null | undefined, format: string | null | undefined, minFrequency: string | null | undefined, maxFrequency: string | null | undefined, minDocumentFrequency: string | null | undefined, maxDocumentFrequency: string | null | undefined, collate: string | null | undefined, sort: string | null | undefined, offset: string | null | undefined, limit: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<NgramsResult> {
			return this.http.get<NgramsResult>(this.baseUri + 'stats/frequency/ngrams/' + (source_lang == null ? '' : encodeURIComponent(source_lang)) + '/' + (corpus == null ? '' : encodeURIComponent(corpus)) + '/{ngram_size}/&tokens=' + (tokens == null ? '' : encodeURIComponent(tokens)) + '&contains=' + (contains == null ? '' : encodeURIComponent(contains)) + '&punctuation=' + (punctuation == null ? '' : encodeURIComponent(punctuation)) + '&format=' + (format == null ? '' : encodeURIComponent(format)) + '&minFrequency=' + minFrequency + '&maxFrequency=' + maxFrequency + '&minDocumentFrequency=' + minDocumentFrequency + '&maxDocumentFrequency=' + maxDocumentFrequency + '&collate=' + (collate == null ? '' : encodeURIComponent(collate)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve the frequency of a word derived from a corpus.
		 * This endpoint provides the frequency of a given word. When multiple database records match the query parameters, the returned frequency is the sum of the individual frequencies. For example, if the query parameters are lemma=test, the returned frequency will include the verb "test", the noun "test" and the adjective "test" in all forms (Test, tested, testing, etc.) <br> <br> If you are interested in the frequency of the word "test" but want to exclude other forms (e.g., tested) use the option trueCase=test. Normally, the word "test" will be spelt with a capital letter at the beginning of a sentence. The option trueCase will ignore this and it will count "Test" and "test" as the same token. If you are interested in frequencies of "Test" and "test", use the option wordform=test or wordform=Test. Note that trueCase is not just a lower case of the word as some words are genuinely spelt with a capital letter such as the word "press" in Oxford University Press. <br> <br> Parameters can be provided in PATH, GET or POST (form or json). The parameters in PATH are overriden by parameters in GET, POST and json (in that order). In PATH, individual options are separated by semicolon and values are separated by commas (where multiple values can be used). Examples:
		 * * PATH: /lemma=test;lexicalCategory=noun
		 * * GET: /?lemma=test&lexicalCategory=noun
		 * * POST (json):
		 * ```javascript
		 * {
		 * "lemma": "test",
		 * "lexicalCategory": "noun"
		 * }
		 * ```
		 * <br> One of the options wordform/trueCase/lemma/lexicalCategory has to be provided.
		 * Get stats/frequency/word/{source_lang}/
		 * @param {string} source_lang IANA language code
		 * @param {string} corpus For corpora other than 'nmc' (New Monitor Corpus) please contact api@oxforddictionaries.com
		 * @param {string} wordform The written form of the word to look up (preserving case e.g., Books vs books)
		 * @param {string} trueCase The written form of the word to look up with normalised case (Books --> books)
		 * @param {string} lemma The lemma of the word to look up (e.g., Book, booked, books all have the lemma "book")
		 * @param {string} lexicalCategory The lexical category of the word(s) to look up (e.g., noun or verb)
		 * @return {StatsWordResult} Successful response.
		 */
		StatsFrequencyWord_source_langGetByCorpusAndWordformAndTrueCaseAndLemmaAndLexicalCategory(source_lang: string, corpus: string | null | undefined, wordform: string | null | undefined, trueCase: string | null | undefined, lemma: string | null | undefined, lexicalCategory: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<StatsWordResult> {
			return this.http.get<StatsWordResult>(this.baseUri + 'stats/frequency/word/' + (source_lang == null ? '' : encodeURIComponent(source_lang)) + '/&corpus=' + (corpus == null ? '' : encodeURIComponent(corpus)) + '&wordform=' + (wordform == null ? '' : encodeURIComponent(wordform)) + '&trueCase=' + (trueCase == null ? '' : encodeURIComponent(trueCase)) + '&lemma=' + (lemma == null ? '' : encodeURIComponent(lemma)) + '&lexicalCategory=' + (lexicalCategory == null ? '' : encodeURIComponent(lexicalCategory)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a list of frequencies of a word/words derived from a corpus.
		 * This endpoint provides a list of frequencies for a given word or words. Unlike the /word/ endpoint, the results are split into the smallest units. <br> <br> To exclude a specific value, prepend it with the minus sign ('-'). For example, to get frequencies of the lemma 'happy' but exclude superlative forms (i.e., happiest) you could use options 'lemma=happy;grammaticalFeatures=-degreeType:superlative'. <br> <br> Parameters can be provided in PATH, GET or POST (form or json). The parameters in PATH are overridden by parameters in GET, POST and json (in that order). In PATH, individual options are separated by semicolon and values are separated by commas (where multiple values can be used). <br> <br> The parameters wordform/trueCase/lemma/lexicalCategory also exist in a plural form, taking a lists of items. Examples:
		 * * PATH: /wordforms=happy,happier,happiest
		 * * GET: /?wordforms=happy&wordforms=happier&wordforms=happiest
		 * * POST (json):
		 * ```javascript
		 * {
		 * "wordforms": ["happy", "happier", "happiest"]
		 * }
		 * ```
		 * A mor complex example of retrieving frequencies of multiple lemmas:
		 * ```
		 * {
		 * "lemmas": ["happy", "content", "cheerful", "cheery", "merry", "joyful", "ecstatic"],
		 * "grammaticalFeatures": {
		 * "adjectiveFunctionType": "predicative"
		 * },
		 * "lexicalCategory": "adjective",
		 * "sort": ["lemma", "-frequency"]
		 * }
		 * ```
		 * Some queries with "collate" or "sort" can exceed the 30s timeout, in which case the API will return an error message with status code 503. You mitigate this by providing additional restrictions such as "minFrequency" and "maxFrequency". <br> <br> You can use the parameters "offset" and "limit" to paginate through large result sets. For convenience, the HTTP header "Link" is set on the response to provide links to "first", "self", "next", "prev" and "last" pages of results (depending on the context). For example, if the result set contains 50 results and the parameter "limit" is set to 25, the Links header will contain an URL for the first 25 results and the next 25 results. <br> <br> Some libraries such as python's `requests` can parse the header automatically and offer a convenient way of iterating through the results. For example:
		 * ```python def get_all_results(url):
		 * while url:
		 * r = requests.get(url)
		 * r.raise_for_status()
		 * for item in r.json()['results']:
		 * yield item
		 * url = r.links.get('next', {}).get('url')
		 * ```
		 * Get stats/frequency/words/{source_lang}/
		 * @param {string} source_lang IANA language code
		 * @param {string} corpus For corpora other than 'nmc' (New Monitor Corpus) please contact api@oxforddictionaries.com
		 * @param {string} wordform The written form of the word to look up (preserving case e.g., Book vs book)
		 * @param {string} trueCase The written form of the word to look up with normalised case (Books --> books)
		 * @param {string} lemma The lemma of the word to look up (e.g., Book, booked, books all have the lemma "book")
		 * @param {string} lexicalCategory The lexical category of the word(s) to look up (e.g., adjective or noun)
		 * @param {string} grammaticalFeatures The grammatical features of the word(s) to look up entered as a list of k:v (e.g., degree_type:comparative)
		 * @param {string} sort sort the resulting list by wordform, trueCase, lemma, lexicalCategory, frequency, normalizedFrequency. Descending order is achieved by prepending the value with the minus sign ('-'). Multiple values can be separated by commas (e.g., sort=lexicalCategory,-frequency)
		 * @param {string} collate collate the results by wordform, trueCase, lemma, lexicalCategory. Multiple values can be separated by commas (e.g., collate=trueCase,lemma,lexicalCategory).
		 * @param {string} minFrequency Restrict the query to entries with frequency of at least `minFrequency`
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} maxFrequency Restrict the query to entries with frequency of at most `maxFrequency`
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {number} minNormalizedFrequency Restrict the query to entries with frequency of at least `minNormalizedFrequency`
		 *     Type: float
		 * @param {number} maxNormalizedFrequency Restrict the query to entries with frequency of at most `maxNormalizedFrequency`
		 *     Type: float
		 * @param {string} offset pagination - results offset
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} limit pagination - results limit
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {StatsWordResultList} Successful response.
		 */
		StatsFrequencyWords_source_langGetByCorpusAndWordformAndTrueCaseAndLemmaAndLexicalCategoryAndGrammaticalFeaturesAndSortAndCollateAndMinFrequencyAndMaxFrequencyAndMinNormalizedFrequencyAndMaxNormalizedFrequencyAndOffsetAndLimit(source_lang: string, corpus: string | null | undefined, wordform: string | null | undefined, trueCase: string | null | undefined, lemma: string | null | undefined, lexicalCategory: string | null | undefined, grammaticalFeatures: string | null | undefined, sort: string | null | undefined, collate: string | null | undefined, minFrequency: string | null | undefined, maxFrequency: string | null | undefined, minNormalizedFrequency: number | null | undefined, maxNormalizedFrequency: number | null | undefined, offset: string | null | undefined, limit: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<StatsWordResultList> {
			return this.http.get<StatsWordResultList>(this.baseUri + 'stats/frequency/words/' + (source_lang == null ? '' : encodeURIComponent(source_lang)) + '/&corpus=' + (corpus == null ? '' : encodeURIComponent(corpus)) + '&wordform=' + (wordform == null ? '' : encodeURIComponent(wordform)) + '&trueCase=' + (trueCase == null ? '' : encodeURIComponent(trueCase)) + '&lemma=' + (lemma == null ? '' : encodeURIComponent(lemma)) + '&lexicalCategory=' + (lexicalCategory == null ? '' : encodeURIComponent(lexicalCategory)) + '&grammaticalFeatures=' + (grammaticalFeatures == null ? '' : encodeURIComponent(grammaticalFeatures)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)) + '&collate=' + (collate == null ? '' : encodeURIComponent(collate)) + '&minFrequency=' + minFrequency + '&maxFrequency=' + maxFrequency + '&minNormalizedFrequency=' + minNormalizedFrequency + '&maxNormalizedFrequency=' + maxNormalizedFrequency + '&offset=' + offset + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve list of words for category with advanced options
		 * Use this to apply more complex filters to the [list of words](documentation/glossary?term=wordlist). For example, you may only want to filter out words for which all [senses](documentation/glossary?term=sense) match the filter, or only its 'prime sense'. You can also filter by word length or match by substring (prefix).
		 * <div id="wordlist_advanced"></div>
		 * Get wordlist/{source_lang}/{filters_advanced}
		 * @param {Search_source_langGetByQAndPrefixAndRegionsAndLimitAndOffsetSource_lang} source_lang IANA language code
		 * @param {string} filters_advanced Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory=noun,adjective;domains=sport. Number of values limited to 5.
		 * @param {string} exclude Semicolon separated list of parameters-value pairs (same as filters). Excludes headwords that have any senses in specified exclusion attributes (lexical categories, domains, etc.) from results.
		 * @param {string} exclude_senses Semicolon separated list of parameters-value pairs (same as filters). Excludes only those senses of a particular headword that match specified exclusion attributes (lexical categories, domains, etc.) from results but includes the headword if it has other permitted senses.
		 * @param {string} exclude_prime_senses Semicolon separated list of parameters-value pairs (same as filters). Excludes a headword only if the primary sense matches the specified exclusion attributes (registers, domains only).
		 * @param {string} word_length Parameter to speficy the minimum (>), exact or maximum (<) length of the words required. E.g., >5 - more than 5 chars; <4 - less than 4 chars; >5<10 - from 5 to 10 chars; 3 - exactly 3 chars.
		 * @param {string} prefix Filter words that start with prefix parameter
		 * @param {Wordlist_source_lang_filters_advancedGetByExcludeAndExclude_sensesAndExclude_prime_sensesAndWord_lengthAndPrefixAndExactAndLimitAndOffsetExact} exact If exact=true wordlist returns a list of entries that exactly matches the search string. Otherwise wordlist lists entries that start with prefix string.
		 * @param {string} limit Limit the number of results per response. Default and maximum limit is 5000.
		 * @param {string} offset Offset the start number of the result.
		 * @return {Wordlist} Successful response.
		 */
		Wordlist_source_lang_filters_advancedGetByExcludeAndExclude_sensesAndExclude_prime_sensesAndWord_lengthAndPrefixAndExactAndLimitAndOffset(source_lang: Search_source_langGetByQAndPrefixAndRegionsAndLimitAndOffsetSource_lang, filters_advanced: string, exclude: string | null | undefined, exclude_senses: string | null | undefined, exclude_prime_senses: string | null | undefined, word_length: string | null | undefined, prefix: string | null | undefined, exact: Wordlist_source_lang_filters_advancedGetByExcludeAndExclude_sensesAndExclude_prime_sensesAndWord_lengthAndPrefixAndExactAndLimitAndOffsetExact | null | undefined, limit: string | null | undefined, offset: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Wordlist> {
			return this.http.get<Wordlist>(this.baseUri + 'wordlist/' + source_lang + '/' + (filters_advanced == null ? '' : encodeURIComponent(filters_advanced)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&exclude_senses=' + (exclude_senses == null ? '' : encodeURIComponent(exclude_senses)) + '&exclude_prime_senses=' + (exclude_prime_senses == null ? '' : encodeURIComponent(exclude_prime_senses)) + '&word_length=' + (word_length == null ? '' : encodeURIComponent(word_length)) + '&prefix=' + (prefix == null ? '' : encodeURIComponent(prefix)) + '&exact=' + exact + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve a list of words in a category
		 * Use this to retrieve a [list of words](documentation/glossary?term=wordlist) for particular [domain](documentation/glossary?term=domain), [lexical category](documentation/glossary?term=lexicalcategory), [register](documentation/glossary?term=registers) and/or [region](documentation/glossary?term=regions). View the full list of possible filters using the filters Utility endpoint.  The response only includes [headwords](documentation/glossary?term=headword), not all their possible [inflections](documentation/glossary?term=inflection). If you require a full [wordlist](documentation/glossary?term=wordlist) including [inflected forms](documentation/glossary?term=inflection), contact us and we can help.
		 * <div id="wordlist"></div>
		 * Get wordlist/{source_lang}/{filters_basic}
		 * @param {Search_source_langGetByQAndPrefixAndRegionsAndLimitAndOffsetSource_lang} source_lang IANA language code
		 * @param {string} filters_basic Semicolon separated list of wordlist parameters, presented as value pairs: LexicalCategory, domains, regions, registers. Parameters can take comma separated list of values. E.g., lexicalCategory=noun,adjective;domains=sport. Number of values limited to 5.
		 * @param {string} limit Limit the number of results per response. Default and maximum limit is 5000.
		 * @param {string} offset Offset the start number of the result
		 * @return {Wordlist} Successful response.
		 */
		Wordlist_source_lang_filters_basicGetByLimitAndOffset(source_lang: Search_source_langGetByQAndPrefixAndRegionsAndLimitAndOffsetSource_lang, filters_basic: string, limit: string | null | undefined, offset: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Wordlist> {
			return this.http.get<Wordlist>(this.baseUri + 'wordlist/' + source_lang + '/' + (filters_basic == null ? '' : encodeURIComponent(filters_basic)) + '&limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export enum Domains_source_domains_language_target_domains_languageGetSource_domains_language { en = 'en', es = 'es', nso = 'nso', zu = 'zu', ur = 'ur', de = 'de', pt = 'pt' }

	export enum Domains_source_domains_language_target_domains_languageGetTarget_domains_language { es = 'es', nso = 'nso', zu = 'zu', ms = 'ms', id = 'id', tn = 'tn', ro = 'ro', de = 'de', pt = 'pt' }

	export enum Domains_source_languageGetSource_language { en = 'en', es = 'es', nso = 'nso', zu = 'zu', hi = 'hi', sw = 'sw', ur = 'ur', de = 'de', pt = 'pt', ta = 'ta', gu = 'gu' }

	export enum Entries_source_language_word_idSentencesGetSource_language { en = 'en', es = 'es' }

	export enum Entries_source_lang_word_idGetSource_lang { en = 'en', es = 'es', lv = 'lv', hi = 'hi', sw = 'sw', ta = 'ta', gu = 'gu', fr = 'fr' }

	export enum Entries_source_lang_word_idAntonymsGetSource_lang { en = 'en' }

	export enum Entries_source_lang_word_idRegions__regionGetRegion { gb = 'gb', us = 'us' }

	export enum Entries_source_translation_language_word_idTranslations__target_translation_languageGetSource_translation_language { en = 'en', es = 'es', nso = 'nso', zu = 'zu', ms = 'ms', id = 'id', tn = 'tn', ur = 'ur', de = 'de', pt = 'pt' }

	export enum Filters_endpointGetEndpoint { entries = 'entries', inflections = 'inflections', translations = 'translations' }

	export enum GrammaticalFeatures_source_languageGetSource_language { en = 'en', es = 'es', lv = 'lv', nso = 'nso', zu = 'zu', ms = 'ms', tn = 'tn', ur = 'ur', hi = 'hi', sw = 'sw', de = 'de', pt = 'pt', ta = 'ta', gu = 'gu' }

	export enum Inflections_source_lang_word_id_filtersGetSource_lang { en = 'en', es = 'es', hi = 'hi', nso = 'nso', tn = 'tn', zu = 'zu', de = 'de', pt = 'pt' }

	export enum LanguagesGetBySourceLanguageAndTargetLanguageSourceLanguage { es = 'es', en = 'en', lv = 'lv', nso = 'nso', zu = 'zu', ms = 'ms', id = 'id', tn = 'tn', ur = 'ur', hi = 'hi', sw = 'sw', ro = 'ro', de = 'de', pt = 'pt', ta = 'ta', gu = 'gu' }

	export enum LanguagesGetBySourceLanguageAndTargetLanguageTargetLanguage { es = 'es', en = 'en', lv = 'lv', nso = 'nso', zu = 'zu', ms = 'ms', id = 'id', tn = 'tn', ur = 'ur', hi = 'hi', sw = 'sw', ro = 'ro' }

	export enum Registers_source_languageGetSource_language { en = 'en', es = 'es', hi = 'hi', id = 'id', lv = 'lv', ms = 'ms', sw = 'sw', ur = 'ur', de = 'de', pt = 'pt', ta = 'ta', gu = 'gu' }

	export enum Registers_source_register_language_target_register_languageGetSource_register_language { en = 'en', es = 'es', ms = 'ms', id = 'id', ur = 'ur', de = 'de', pt = 'pt' }

	export enum Registers_source_register_language_target_register_languageGetTarget_register_language { es = 'es', en = 'en', nso = 'nso', zu = 'zu', ms = 'ms', id = 'id', tn = 'tn', ro = 'ro', de = 'de', pt = 'pt' }

	export enum Search_source_langGetByQAndPrefixAndRegionsAndLimitAndOffsetSource_lang { en = 'en', es = 'es', hi = 'hi', lv = 'lv', sw = 'sw', ta = 'ta', gu = 'gu' }

	export enum Search_source_langGetByQAndPrefixAndRegionsAndLimitAndOffsetPrefix { false = 'false', true = 'true' }

	export enum Search_source_search_languageTranslations__target_search_languageGetByQAndPrefixAndRegionsAndLimitAndOffsetPrefix { false = 'false', true = 'true' }

	export enum Wordlist_source_lang_filters_advancedGetByExcludeAndExclude_sensesAndExclude_prime_sensesAndWord_lengthAndPrefixAndExactAndLimitAndOffsetExact { false = 'false', true = 'true' }

}

