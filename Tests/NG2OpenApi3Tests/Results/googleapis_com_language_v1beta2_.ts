import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The entity analysis request message. */
	export interface AnalyzeEntitiesRequest {

		/** Represents the input to API methods. */
		document?: Document;

		/** The encoding type used by the API to calculate offsets. */
		encodingType?: AnalyzeEntitiesRequestEncodingType | null;
	}

	/** The entity analysis request message. */
	export interface AnalyzeEntitiesRequestFormProperties {

		/** The encoding type used by the API to calculate offsets. */
		encodingType: FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>,
	}
	export function CreateAnalyzeEntitiesRequestFormGroup() {
		return new FormGroup<AnalyzeEntitiesRequestFormProperties>({
			encodingType: new FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>(undefined),
		});

	}


	/** Represents the input to API methods. */
	export interface Document {

		/** Indicates how detected boilerplate(e.g. advertisements, copyright declarations, banners) should be handled for this document. If not specified, boilerplate will be treated the same as content. */
		boilerplateHandling?: DocumentBoilerplateHandling | null;

		/** The content of the input in string format. Cloud audit logging exempt since it is based on user data. */
		content?: string | null;

		/** The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported. */
		gcsContentUri?: string | null;

		/** The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. [Language Support](https://cloud.google.com/natural-language/docs/languages) lists currently supported languages for each API method. If the language (either specified by the caller or automatically detected) is not supported by the called API method, an `INVALID_ARGUMENT` error is returned. */
		language?: string | null;

		/** The web URI where the document comes from. This URI is not used for fetching the content, but as a hint for analyzing the document. */
		referenceWebUri?: string | null;

		/** Required. If the type is not set or is `TYPE_UNSPECIFIED`, returns an `INVALID_ARGUMENT` error. */
		type?: DocumentType | null;
	}

	/** Represents the input to API methods. */
	export interface DocumentFormProperties {

		/** Indicates how detected boilerplate(e.g. advertisements, copyright declarations, banners) should be handled for this document. If not specified, boilerplate will be treated the same as content. */
		boilerplateHandling: FormControl<DocumentBoilerplateHandling | null | undefined>,

		/** The content of the input in string format. Cloud audit logging exempt since it is based on user data. */
		content: FormControl<string | null | undefined>,

		/** The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported. */
		gcsContentUri: FormControl<string | null | undefined>,

		/** The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. [Language Support](https://cloud.google.com/natural-language/docs/languages) lists currently supported languages for each API method. If the language (either specified by the caller or automatically detected) is not supported by the called API method, an `INVALID_ARGUMENT` error is returned. */
		language: FormControl<string | null | undefined>,

		/** The web URI where the document comes from. This URI is not used for fetching the content, but as a hint for analyzing the document. */
		referenceWebUri: FormControl<string | null | undefined>,

		/** Required. If the type is not set or is `TYPE_UNSPECIFIED`, returns an `INVALID_ARGUMENT` error. */
		type: FormControl<DocumentType | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			boilerplateHandling: new FormControl<DocumentBoilerplateHandling | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			gcsContentUri: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			referenceWebUri: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DocumentType | null | undefined>(undefined),
		});

	}

	export enum DocumentBoilerplateHandling { BOILERPLATE_HANDLING_UNSPECIFIED = 'BOILERPLATE_HANDLING_UNSPECIFIED', SKIP_BOILERPLATE = 'SKIP_BOILERPLATE', KEEP_BOILERPLATE = 'KEEP_BOILERPLATE' }

	export enum DocumentType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', PLAIN_TEXT = 'PLAIN_TEXT', HTML = 'HTML' }

	export enum AnalyzeEntitiesRequestEncodingType { NONE = 'NONE', UTF8 = 'UTF8', UTF16 = 'UTF16', UTF32 = 'UTF32' }


	/** The entity analysis response message. */
	export interface AnalyzeEntitiesResponse {

		/** The recognized entities in the input document. */
		entities?: Array<Entity>;

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		language?: string | null;
	}

	/** The entity analysis response message. */
	export interface AnalyzeEntitiesResponseFormProperties {

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		language: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeEntitiesResponseFormGroup() {
		return new FormGroup<AnalyzeEntitiesResponseFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a phrase in the text that is a known entity, such as a person, an organization, or location. The API associates information, such as salience and mentions, with entities. */
	export interface Entity {

		/** The mentions of this entity in the input document. The API currently supports proper noun mentions. */
		mentions?: Array<EntityMention>;

		/** Metadata associated with the entity. For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`) and Knowledge Graph MID (`mid`), if they are available. For the metadata associated with other entity types, see the Type table below. */
		metadata?: {[id: string]: string };

		/** The representative name for the entity. */
		name?: string | null;

		/**
		 * The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient.
		 * Type: float
		 */
		salience?: number | null;

		/** Represents the feeling associated with the entire text or entities in the text. Next ID: 6 */
		sentiment?: Sentiment;

		/** The entity type. */
		type?: EntityType | null;
	}

	/** Represents a phrase in the text that is a known entity, such as a person, an organization, or location. The API associates information, such as salience and mentions, with entities. */
	export interface EntityFormProperties {

		/** Metadata associated with the entity. For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`) and Knowledge Graph MID (`mid`), if they are available. For the metadata associated with other entity types, see the Type table below. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The representative name for the entity. */
		name: FormControl<string | null | undefined>,

		/**
		 * The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient.
		 * Type: float
		 */
		salience: FormControl<number | null | undefined>,

		/** The entity type. */
		type: FormControl<EntityType | null | undefined>,
	}
	export function CreateEntityFormGroup() {
		return new FormGroup<EntityFormProperties>({
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			salience: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<EntityType | null | undefined>(undefined),
		});

	}


	/** Represents a mention for an entity in the text. Currently, proper noun mentions are supported. */
	export interface EntityMention {

		/** Represents the feeling associated with the entire text or entities in the text. Next ID: 6 */
		sentiment?: Sentiment;

		/** Represents a text span in the input document. */
		text?: TextSpan;

		/** The type of the entity mention. */
		type?: EntityMentionType | null;
	}

	/** Represents a mention for an entity in the text. Currently, proper noun mentions are supported. */
	export interface EntityMentionFormProperties {

		/** The type of the entity mention. */
		type: FormControl<EntityMentionType | null | undefined>,
	}
	export function CreateEntityMentionFormGroup() {
		return new FormGroup<EntityMentionFormProperties>({
			type: new FormControl<EntityMentionType | null | undefined>(undefined),
		});

	}


	/** Represents the feeling associated with the entire text or entities in the text. Next ID: 6 */
	export interface Sentiment {

		/**
		 * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment regardless of score (positive or negative).
		 * Type: float
		 */
		magnitude?: number | null;

		/**
		 * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
		 * Type: float
		 */
		score?: number | null;
	}

	/** Represents the feeling associated with the entire text or entities in the text. Next ID: 6 */
	export interface SentimentFormProperties {

		/**
		 * A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment regardless of score (positive or negative).
		 * Type: float
		 */
		magnitude: FormControl<number | null | undefined>,

		/**
		 * Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment).
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateSentimentFormGroup() {
		return new FormGroup<SentimentFormProperties>({
			magnitude: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a text span in the input document. */
	export interface TextSpan {

		/**
		 * The API calculates the beginning offset of the content in the original document according to the EncodingType specified in the API request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		beginOffset?: number | null;

		/** The content of the text span, which is a substring of the document. */
		content?: string | null;
	}

	/** Represents a text span in the input document. */
	export interface TextSpanFormProperties {

		/**
		 * The API calculates the beginning offset of the content in the original document according to the EncodingType specified in the API request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		beginOffset: FormControl<number | null | undefined>,

		/** The content of the text span, which is a substring of the document. */
		content: FormControl<string | null | undefined>,
	}
	export function CreateTextSpanFormGroup() {
		return new FormGroup<TextSpanFormProperties>({
			beginOffset: new FormControl<number | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EntityMentionType { TYPE_UNKNOWN = 'TYPE_UNKNOWN', PROPER = 'PROPER', COMMON = 'COMMON' }

	export enum EntityType { UNKNOWN = 'UNKNOWN', PERSON = 'PERSON', LOCATION = 'LOCATION', ORGANIZATION = 'ORGANIZATION', EVENT = 'EVENT', WORK_OF_ART = 'WORK_OF_ART', CONSUMER_GOOD = 'CONSUMER_GOOD', OTHER = 'OTHER', PHONE_NUMBER = 'PHONE_NUMBER', ADDRESS = 'ADDRESS', DATE = 'DATE', NUMBER = 'NUMBER', PRICE = 'PRICE' }


	/** The entity-level sentiment analysis request message. */
	export interface AnalyzeEntitySentimentRequest {

		/** Represents the input to API methods. */
		document?: Document;

		/** The encoding type used by the API to calculate offsets. */
		encodingType?: AnalyzeEntitiesRequestEncodingType | null;
	}

	/** The entity-level sentiment analysis request message. */
	export interface AnalyzeEntitySentimentRequestFormProperties {

		/** The encoding type used by the API to calculate offsets. */
		encodingType: FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>,
	}
	export function CreateAnalyzeEntitySentimentRequestFormGroup() {
		return new FormGroup<AnalyzeEntitySentimentRequestFormProperties>({
			encodingType: new FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>(undefined),
		});

	}


	/** The entity-level sentiment analysis response message. */
	export interface AnalyzeEntitySentimentResponse {

		/** The recognized entities in the input document with associated sentiments. */
		entities?: Array<Entity>;

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		language?: string | null;
	}

	/** The entity-level sentiment analysis response message. */
	export interface AnalyzeEntitySentimentResponseFormProperties {

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		language: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeEntitySentimentResponseFormGroup() {
		return new FormGroup<AnalyzeEntitySentimentResponseFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The sentiment analysis request message. */
	export interface AnalyzeSentimentRequest {

		/** Represents the input to API methods. */
		document?: Document;

		/** The encoding type used by the API to calculate sentence offsets for the sentence sentiment. */
		encodingType?: AnalyzeEntitiesRequestEncodingType | null;
	}

	/** The sentiment analysis request message. */
	export interface AnalyzeSentimentRequestFormProperties {

		/** The encoding type used by the API to calculate sentence offsets for the sentence sentiment. */
		encodingType: FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>,
	}
	export function CreateAnalyzeSentimentRequestFormGroup() {
		return new FormGroup<AnalyzeSentimentRequestFormProperties>({
			encodingType: new FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>(undefined),
		});

	}


	/** The sentiment analysis response message. */
	export interface AnalyzeSentimentResponse {

		/** Represents the feeling associated with the entire text or entities in the text. Next ID: 6 */
		documentSentiment?: Sentiment;

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		language?: string | null;

		/** The sentiment for all the sentences in the document. */
		sentences?: Array<Sentence>;
	}

	/** The sentiment analysis response message. */
	export interface AnalyzeSentimentResponseFormProperties {

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		language: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeSentimentResponseFormGroup() {
		return new FormGroup<AnalyzeSentimentResponseFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a sentence in the input document. */
	export interface Sentence {

		/** Represents the feeling associated with the entire text or entities in the text. Next ID: 6 */
		sentiment?: Sentiment;

		/** Represents a text span in the input document. */
		text?: TextSpan;
	}

	/** Represents a sentence in the input document. */
	export interface SentenceFormProperties {
	}
	export function CreateSentenceFormGroup() {
		return new FormGroup<SentenceFormProperties>({
		});

	}


	/** The syntax analysis request message. */
	export interface AnalyzeSyntaxRequest {

		/** Represents the input to API methods. */
		document?: Document;

		/** The encoding type used by the API to calculate offsets. */
		encodingType?: AnalyzeEntitiesRequestEncodingType | null;
	}

	/** The syntax analysis request message. */
	export interface AnalyzeSyntaxRequestFormProperties {

		/** The encoding type used by the API to calculate offsets. */
		encodingType: FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>,
	}
	export function CreateAnalyzeSyntaxRequestFormGroup() {
		return new FormGroup<AnalyzeSyntaxRequestFormProperties>({
			encodingType: new FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>(undefined),
		});

	}


	/** The syntax analysis response message. */
	export interface AnalyzeSyntaxResponse {

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		language?: string | null;

		/** Sentences in the input document. */
		sentences?: Array<Sentence>;

		/** Tokens, along with their syntactic information, in the input document. */
		tokens?: Array<Token>;
	}

	/** The syntax analysis response message. */
	export interface AnalyzeSyntaxResponseFormProperties {

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		language: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeSyntaxResponseFormGroup() {
		return new FormGroup<AnalyzeSyntaxResponseFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the smallest syntactic building block of the text. */
	export interface Token {

		/** Represents dependency parse tree information for a token. */
		dependencyEdge?: DependencyEdge;

		/** [Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token. */
		lemma?: string | null;

		/** Represents part of speech information for a token. */
		partOfSpeech?: PartOfSpeech;

		/** Represents a text span in the input document. */
		text?: TextSpan;
	}

	/** Represents the smallest syntactic building block of the text. */
	export interface TokenFormProperties {

		/** [Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token. */
		lemma: FormControl<string | null | undefined>,
	}
	export function CreateTokenFormGroup() {
		return new FormGroup<TokenFormProperties>({
			lemma: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents dependency parse tree information for a token. */
	export interface DependencyEdge {

		/**
		 * Represents the head of this token in the dependency tree. This is the index of the token which has an arc going to this token. The index is the position of the token in the array of tokens returned by the API method. If this token is a root token, then the `head_token_index` is its own index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		headTokenIndex?: number | null;

		/** The parse label for the token. */
		label?: DependencyEdgeLabel | null;
	}

	/** Represents dependency parse tree information for a token. */
	export interface DependencyEdgeFormProperties {

		/**
		 * Represents the head of this token in the dependency tree. This is the index of the token which has an arc going to this token. The index is the position of the token in the array of tokens returned by the API method. If this token is a root token, then the `head_token_index` is its own index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		headTokenIndex: FormControl<number | null | undefined>,

		/** The parse label for the token. */
		label: FormControl<DependencyEdgeLabel | null | undefined>,
	}
	export function CreateDependencyEdgeFormGroup() {
		return new FormGroup<DependencyEdgeFormProperties>({
			headTokenIndex: new FormControl<number | null | undefined>(undefined),
			label: new FormControl<DependencyEdgeLabel | null | undefined>(undefined),
		});

	}

	export enum DependencyEdgeLabel { UNKNOWN = 'UNKNOWN', ABBREV = 'ABBREV', ACOMP = 'ACOMP', ADVCL = 'ADVCL', ADVMOD = 'ADVMOD', AMOD = 'AMOD', APPOS = 'APPOS', ATTR = 'ATTR', AUX = 'AUX', AUXPASS = 'AUXPASS', CC = 'CC', CCOMP = 'CCOMP', CONJ = 'CONJ', CSUBJ = 'CSUBJ', CSUBJPASS = 'CSUBJPASS', DEP = 'DEP', DET = 'DET', DISCOURSE = 'DISCOURSE', DOBJ = 'DOBJ', EXPL = 'EXPL', GOESWITH = 'GOESWITH', IOBJ = 'IOBJ', MARK = 'MARK', MWE = 'MWE', MWV = 'MWV', NEG = 'NEG', NN = 'NN', NPADVMOD = 'NPADVMOD', NSUBJ = 'NSUBJ', NSUBJPASS = 'NSUBJPASS', NUM = 'NUM', NUMBER = 'NUMBER', P = 'P', PARATAXIS = 'PARATAXIS', PARTMOD = 'PARTMOD', PCOMP = 'PCOMP', POBJ = 'POBJ', POSS = 'POSS', POSTNEG = 'POSTNEG', PRECOMP = 'PRECOMP', PRECONJ = 'PRECONJ', PREDET = 'PREDET', PREF = 'PREF', PREP = 'PREP', PRONL = 'PRONL', PRT = 'PRT', PS = 'PS', QUANTMOD = 'QUANTMOD', RCMOD = 'RCMOD', RCMODREL = 'RCMODREL', RDROP = 'RDROP', REF = 'REF', REMNANT = 'REMNANT', REPARANDUM = 'REPARANDUM', ROOT = 'ROOT', SNUM = 'SNUM', SUFF = 'SUFF', TMOD = 'TMOD', TOPIC = 'TOPIC', VMOD = 'VMOD', VOCATIVE = 'VOCATIVE', XCOMP = 'XCOMP', SUFFIX = 'SUFFIX', TITLE = 'TITLE', ADVPHMOD = 'ADVPHMOD', AUXCAUS = 'AUXCAUS', AUXVV = 'AUXVV', DTMOD = 'DTMOD', FOREIGN = 'FOREIGN', KW = 'KW', LIST = 'LIST', NOMC = 'NOMC', NOMCSUBJ = 'NOMCSUBJ', NOMCSUBJPASS = 'NOMCSUBJPASS', NUMC = 'NUMC', COP = 'COP', DISLOCATED = 'DISLOCATED', ASP = 'ASP', GMOD = 'GMOD', GOBJ = 'GOBJ', INFMOD = 'INFMOD', MES = 'MES', NCOMP = 'NCOMP' }


	/** Represents part of speech information for a token. */
	export interface PartOfSpeech {

		/** The grammatical aspect. */
		aspect?: PartOfSpeechAspect | null;

		/** The grammatical case. */
		case?: PartOfSpeechCase | null;

		/** The grammatical form. */
		form?: PartOfSpeechForm | null;

		/** The grammatical gender. */
		gender?: PartOfSpeechGender | null;

		/** The grammatical mood. */
		mood?: PartOfSpeechMood | null;

		/** The grammatical number. */
		number?: PartOfSpeechNumber | null;

		/** The grammatical person. */
		person?: PartOfSpeechPerson | null;

		/** The grammatical properness. */
		proper?: PartOfSpeechProper | null;

		/** The grammatical reciprocity. */
		reciprocity?: PartOfSpeechReciprocity | null;

		/** The part of speech tag. */
		tag?: PartOfSpeechTag | null;

		/** The grammatical tense. */
		tense?: PartOfSpeechTense | null;

		/** The grammatical voice. */
		voice?: PartOfSpeechVoice | null;
	}

	/** Represents part of speech information for a token. */
	export interface PartOfSpeechFormProperties {

		/** The grammatical aspect. */
		aspect: FormControl<PartOfSpeechAspect | null | undefined>,

		/** The grammatical case. */
		case: FormControl<PartOfSpeechCase | null | undefined>,

		/** The grammatical form. */
		form: FormControl<PartOfSpeechForm | null | undefined>,

		/** The grammatical gender. */
		gender: FormControl<PartOfSpeechGender | null | undefined>,

		/** The grammatical mood. */
		mood: FormControl<PartOfSpeechMood | null | undefined>,

		/** The grammatical number. */
		number: FormControl<PartOfSpeechNumber | null | undefined>,

		/** The grammatical person. */
		person: FormControl<PartOfSpeechPerson | null | undefined>,

		/** The grammatical properness. */
		proper: FormControl<PartOfSpeechProper | null | undefined>,

		/** The grammatical reciprocity. */
		reciprocity: FormControl<PartOfSpeechReciprocity | null | undefined>,

		/** The part of speech tag. */
		tag: FormControl<PartOfSpeechTag | null | undefined>,

		/** The grammatical tense. */
		tense: FormControl<PartOfSpeechTense | null | undefined>,

		/** The grammatical voice. */
		voice: FormControl<PartOfSpeechVoice | null | undefined>,
	}
	export function CreatePartOfSpeechFormGroup() {
		return new FormGroup<PartOfSpeechFormProperties>({
			aspect: new FormControl<PartOfSpeechAspect | null | undefined>(undefined),
			case: new FormControl<PartOfSpeechCase | null | undefined>(undefined),
			form: new FormControl<PartOfSpeechForm | null | undefined>(undefined),
			gender: new FormControl<PartOfSpeechGender | null | undefined>(undefined),
			mood: new FormControl<PartOfSpeechMood | null | undefined>(undefined),
			number: new FormControl<PartOfSpeechNumber | null | undefined>(undefined),
			person: new FormControl<PartOfSpeechPerson | null | undefined>(undefined),
			proper: new FormControl<PartOfSpeechProper | null | undefined>(undefined),
			reciprocity: new FormControl<PartOfSpeechReciprocity | null | undefined>(undefined),
			tag: new FormControl<PartOfSpeechTag | null | undefined>(undefined),
			tense: new FormControl<PartOfSpeechTense | null | undefined>(undefined),
			voice: new FormControl<PartOfSpeechVoice | null | undefined>(undefined),
		});

	}

	export enum PartOfSpeechAspect { ASPECT_UNKNOWN = 'ASPECT_UNKNOWN', PERFECTIVE = 'PERFECTIVE', IMPERFECTIVE = 'IMPERFECTIVE', PROGRESSIVE = 'PROGRESSIVE' }

	export enum PartOfSpeechCase { CASE_UNKNOWN = 'CASE_UNKNOWN', ACCUSATIVE = 'ACCUSATIVE', ADVERBIAL = 'ADVERBIAL', COMPLEMENTIVE = 'COMPLEMENTIVE', DATIVE = 'DATIVE', GENITIVE = 'GENITIVE', INSTRUMENTAL = 'INSTRUMENTAL', LOCATIVE = 'LOCATIVE', NOMINATIVE = 'NOMINATIVE', OBLIQUE = 'OBLIQUE', PARTITIVE = 'PARTITIVE', PREPOSITIONAL = 'PREPOSITIONAL', REFLEXIVE_CASE = 'REFLEXIVE_CASE', RELATIVE_CASE = 'RELATIVE_CASE', VOCATIVE = 'VOCATIVE' }

	export enum PartOfSpeechForm { FORM_UNKNOWN = 'FORM_UNKNOWN', ADNOMIAL = 'ADNOMIAL', AUXILIARY = 'AUXILIARY', COMPLEMENTIZER = 'COMPLEMENTIZER', FINAL_ENDING = 'FINAL_ENDING', GERUND = 'GERUND', REALIS = 'REALIS', IRREALIS = 'IRREALIS', SHORT = 'SHORT', LONG = 'LONG', ORDER = 'ORDER', SPECIFIC = 'SPECIFIC' }

	export enum PartOfSpeechGender { GENDER_UNKNOWN = 'GENDER_UNKNOWN', FEMININE = 'FEMININE', MASCULINE = 'MASCULINE', NEUTER = 'NEUTER' }

	export enum PartOfSpeechMood { MOOD_UNKNOWN = 'MOOD_UNKNOWN', CONDITIONAL_MOOD = 'CONDITIONAL_MOOD', IMPERATIVE = 'IMPERATIVE', INDICATIVE = 'INDICATIVE', INTERROGATIVE = 'INTERROGATIVE', JUSSIVE = 'JUSSIVE', SUBJUNCTIVE = 'SUBJUNCTIVE' }

	export enum PartOfSpeechNumber { NUMBER_UNKNOWN = 'NUMBER_UNKNOWN', SINGULAR = 'SINGULAR', PLURAL = 'PLURAL', DUAL = 'DUAL' }

	export enum PartOfSpeechPerson { PERSON_UNKNOWN = 'PERSON_UNKNOWN', FIRST = 'FIRST', SECOND = 'SECOND', THIRD = 'THIRD', REFLEXIVE_PERSON = 'REFLEXIVE_PERSON' }

	export enum PartOfSpeechProper { PROPER_UNKNOWN = 'PROPER_UNKNOWN', PROPER = 'PROPER', NOT_PROPER = 'NOT_PROPER' }

	export enum PartOfSpeechReciprocity { RECIPROCITY_UNKNOWN = 'RECIPROCITY_UNKNOWN', RECIPROCAL = 'RECIPROCAL', NON_RECIPROCAL = 'NON_RECIPROCAL' }

	export enum PartOfSpeechTag { UNKNOWN = 'UNKNOWN', ADJ = 'ADJ', ADP = 'ADP', ADV = 'ADV', CONJ = 'CONJ', DET = 'DET', NOUN = 'NOUN', NUM = 'NUM', PRON = 'PRON', PRT = 'PRT', PUNCT = 'PUNCT', VERB = 'VERB', X = 'X', AFFIX = 'AFFIX' }

	export enum PartOfSpeechTense { TENSE_UNKNOWN = 'TENSE_UNKNOWN', CONDITIONAL_TENSE = 'CONDITIONAL_TENSE', FUTURE = 'FUTURE', PAST = 'PAST', PRESENT = 'PRESENT', IMPERFECT = 'IMPERFECT', PLUPERFECT = 'PLUPERFECT' }

	export enum PartOfSpeechVoice { VOICE_UNKNOWN = 'VOICE_UNKNOWN', ACTIVE = 'ACTIVE', CAUSATIVE = 'CAUSATIVE', PASSIVE = 'PASSIVE' }


	/** The request message for the text annotation API, which can perform multiple analysis types (sentiment, entities, and syntax) in one call. */
	export interface AnnotateTextRequest {

		/** Represents the input to API methods. */
		document?: Document;

		/** The encoding type used by the API to calculate offsets. */
		encodingType?: AnalyzeEntitiesRequestEncodingType | null;

		/** All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input. Next ID: 12 */
		features?: Features;
	}

	/** The request message for the text annotation API, which can perform multiple analysis types (sentiment, entities, and syntax) in one call. */
	export interface AnnotateTextRequestFormProperties {

		/** The encoding type used by the API to calculate offsets. */
		encodingType: FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>,
	}
	export function CreateAnnotateTextRequestFormGroup() {
		return new FormGroup<AnnotateTextRequestFormProperties>({
			encodingType: new FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>(undefined),
		});

	}


	/** All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input. Next ID: 12 */
	export interface Features {

		/** Model options available for classification requests. */
		classificationModelOptions?: ClassificationModelOptions;

		/** Classify the full document into categories. If this is true, the API will use the default model which classifies into a [predefined taxonomy](https://cloud.google.com/natural-language/docs/categories). */
		classifyText?: boolean | null;

		/** Extract document-level sentiment. */
		extractDocumentSentiment?: boolean | null;

		/** Extract entities. */
		extractEntities?: boolean | null;

		/** Extract entities and their associated sentiment. */
		extractEntitySentiment?: boolean | null;

		/** Extract syntax information. */
		extractSyntax?: boolean | null;

		/** Moderate the document for harmful and sensitive categories. */
		moderateText?: boolean | null;
	}

	/** All available features for sentiment, syntax, and semantic analysis. Setting each one to true will enable that specific analysis for the input. Next ID: 12 */
	export interface FeaturesFormProperties {

		/** Classify the full document into categories. If this is true, the API will use the default model which classifies into a [predefined taxonomy](https://cloud.google.com/natural-language/docs/categories). */
		classifyText: FormControl<boolean | null | undefined>,

		/** Extract document-level sentiment. */
		extractDocumentSentiment: FormControl<boolean | null | undefined>,

		/** Extract entities. */
		extractEntities: FormControl<boolean | null | undefined>,

		/** Extract entities and their associated sentiment. */
		extractEntitySentiment: FormControl<boolean | null | undefined>,

		/** Extract syntax information. */
		extractSyntax: FormControl<boolean | null | undefined>,

		/** Moderate the document for harmful and sensitive categories. */
		moderateText: FormControl<boolean | null | undefined>,
	}
	export function CreateFeaturesFormGroup() {
		return new FormGroup<FeaturesFormProperties>({
			classifyText: new FormControl<boolean | null | undefined>(undefined),
			extractDocumentSentiment: new FormControl<boolean | null | undefined>(undefined),
			extractEntities: new FormControl<boolean | null | undefined>(undefined),
			extractEntitySentiment: new FormControl<boolean | null | undefined>(undefined),
			extractSyntax: new FormControl<boolean | null | undefined>(undefined),
			moderateText: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Model options available for classification requests. */
	export interface ClassificationModelOptions {

		/** Options for the V1 model. */
		v1Model?: V1Model;

		/** Options for the V2 model. */
		v2Model?: V2Model;
	}

	/** Model options available for classification requests. */
	export interface ClassificationModelOptionsFormProperties {
	}
	export function CreateClassificationModelOptionsFormGroup() {
		return new FormGroup<ClassificationModelOptionsFormProperties>({
		});

	}


	/** Options for the V1 model. */
	export interface V1Model {
	}

	/** Options for the V1 model. */
	export interface V1ModelFormProperties {
	}
	export function CreateV1ModelFormGroup() {
		return new FormGroup<V1ModelFormProperties>({
		});

	}


	/** Options for the V2 model. */
	export interface V2Model {

		/** The content categories used for classification. */
		contentCategoriesVersion?: V2ModelContentCategoriesVersion | null;
	}

	/** Options for the V2 model. */
	export interface V2ModelFormProperties {

		/** The content categories used for classification. */
		contentCategoriesVersion: FormControl<V2ModelContentCategoriesVersion | null | undefined>,
	}
	export function CreateV2ModelFormGroup() {
		return new FormGroup<V2ModelFormProperties>({
			contentCategoriesVersion: new FormControl<V2ModelContentCategoriesVersion | null | undefined>(undefined),
		});

	}

	export enum V2ModelContentCategoriesVersion { CONTENT_CATEGORIES_VERSION_UNSPECIFIED = 'CONTENT_CATEGORIES_VERSION_UNSPECIFIED', V1 = 'V1', V2 = 'V2' }


	/** The text annotations response message. */
	export interface AnnotateTextResponse {

		/** Categories identified in the input document. */
		categories?: Array<ClassificationCategory>;

		/** Represents the feeling associated with the entire text or entities in the text. Next ID: 6 */
		documentSentiment?: Sentiment;

		/** Entities, along with their semantic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_entities. */
		entities?: Array<Entity>;

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		language?: string | null;

		/** Harmful and sensitive categories identified in the input document. */
		moderationCategories?: Array<ClassificationCategory>;

		/** Sentences in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_syntax. */
		sentences?: Array<Sentence>;

		/** Tokens, along with their syntactic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_syntax. */
		tokens?: Array<Token>;
	}

	/** The text annotations response message. */
	export interface AnnotateTextResponseFormProperties {

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		language: FormControl<string | null | undefined>,
	}
	export function CreateAnnotateTextResponseFormGroup() {
		return new FormGroup<AnnotateTextResponseFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a category returned from the text classifier. */
	export interface ClassificationCategory {

		/**
		 * The classifier's confidence of the category. Number represents how certain the classifier is that this category represents the given text.
		 * Type: float
		 */
		confidence?: number | null;

		/** The name of the category representing the document. */
		name?: string | null;
	}

	/** Represents a category returned from the text classifier. */
	export interface ClassificationCategoryFormProperties {

		/**
		 * The classifier's confidence of the category. Number represents how certain the classifier is that this category represents the given text.
		 * Type: float
		 */
		confidence: FormControl<number | null | undefined>,

		/** The name of the category representing the document. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateClassificationCategoryFormGroup() {
		return new FormGroup<ClassificationCategoryFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The document classification request message. */
	export interface ClassifyTextRequest {

		/** Model options available for classification requests. */
		classificationModelOptions?: ClassificationModelOptions;

		/** Represents the input to API methods. */
		document?: Document;
	}

	/** The document classification request message. */
	export interface ClassifyTextRequestFormProperties {
	}
	export function CreateClassifyTextRequestFormGroup() {
		return new FormGroup<ClassifyTextRequestFormProperties>({
		});

	}


	/** The document classification response message. */
	export interface ClassifyTextResponse {

		/** Categories representing the input document. */
		categories?: Array<ClassificationCategory>;
	}

	/** The document classification response message. */
	export interface ClassifyTextResponseFormProperties {
	}
	export function CreateClassifyTextResponseFormGroup() {
		return new FormGroup<ClassifyTextResponseFormProperties>({
		});

	}


	/** The document moderation request message. */
	export interface ModerateTextRequest {

		/** Represents the input to API methods. */
		document?: Document;
	}

	/** The document moderation request message. */
	export interface ModerateTextRequestFormProperties {
	}
	export function CreateModerateTextRequestFormGroup() {
		return new FormGroup<ModerateTextRequestFormProperties>({
		});

	}


	/** The document moderation response message. */
	export interface ModerateTextResponse {

		/** Harmful and sensitive categories representing the input document. */
		moderationCategories?: Array<ClassificationCategory>;
	}

	/** The document moderation response message. */
	export interface ModerateTextResponseFormProperties {
	}
	export function CreateModerateTextResponseFormGroup() {
		return new FormGroup<ModerateTextResponseFormProperties>({
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
		 * Post v1beta2/documents:analyzeEntities
		 * @return {AnalyzeEntitiesResponse} Successful response
		 */
		Language_documents_analyzeEntities(requestBody: AnalyzeEntitiesRequest): Observable<AnalyzeEntitiesResponse> {
			return this.http.post<AnalyzeEntitiesResponse>(this.baseUri + 'v1beta2/documents:analyzeEntities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.
		 * Post v1beta2/documents:analyzeEntitySentiment
		 * @return {AnalyzeEntitySentimentResponse} Successful response
		 */
		Language_documents_analyzeEntitySentiment(requestBody: AnalyzeEntitySentimentRequest): Observable<AnalyzeEntitySentimentResponse> {
			return this.http.post<AnalyzeEntitySentimentResponse>(this.baseUri + 'v1beta2/documents:analyzeEntitySentiment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Analyzes the sentiment of the provided text.
		 * Post v1beta2/documents:analyzeSentiment
		 * @return {AnalyzeSentimentResponse} Successful response
		 */
		Language_documents_analyzeSentiment(requestBody: AnalyzeSentimentRequest): Observable<AnalyzeSentimentResponse> {
			return this.http.post<AnalyzeSentimentResponse>(this.baseUri + 'v1beta2/documents:analyzeSentiment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
		 * Post v1beta2/documents:analyzeSyntax
		 * @return {AnalyzeSyntaxResponse} Successful response
		 */
		Language_documents_analyzeSyntax(requestBody: AnalyzeSyntaxRequest): Observable<AnalyzeSyntaxResponse> {
			return this.http.post<AnalyzeSyntaxResponse>(this.baseUri + 'v1beta2/documents:analyzeSyntax', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A convenience method that provides all syntax, sentiment, entity, and classification features in one call.
		 * Post v1beta2/documents:annotateText
		 * @return {AnnotateTextResponse} Successful response
		 */
		Language_documents_annotateText(requestBody: AnnotateTextRequest): Observable<AnnotateTextResponse> {
			return this.http.post<AnnotateTextResponse>(this.baseUri + 'v1beta2/documents:annotateText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Classifies a document into categories.
		 * Post v1beta2/documents:classifyText
		 * @return {ClassifyTextResponse} Successful response
		 */
		Language_documents_classifyText(requestBody: ClassifyTextRequest): Observable<ClassifyTextResponse> {
			return this.http.post<ClassifyTextResponse>(this.baseUri + 'v1beta2/documents:classifyText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Moderates a document for harmful and sensitive categories.
		 * Post v1beta2/documents:moderateText
		 * @return {ModerateTextResponse} Successful response
		 */
		Language_documents_moderateText(requestBody: ModerateTextRequest): Observable<ModerateTextResponse> {
			return this.http.post<ModerateTextResponse>(this.baseUri + 'v1beta2/documents:moderateText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

