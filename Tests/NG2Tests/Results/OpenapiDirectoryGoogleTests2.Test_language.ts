import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** The entity analysis request message. */
	export interface AnalyzeEntitiesRequest {

		/**
		 * ################################################################ #
		 * Represents the input to API methods.
		 */
		document?: Document;

		/** The encoding type used by the API to calculate offsets. */
		encodingType?: AnalyzeEntitiesRequestEncodingType;
	}


	/**
	 * ################################################################ #
	 * Represents the input to API methods.
	 */
	export interface Document {

		/**
		 * The content of the input in string format.
		 * Cloud audit logging exempt since it is based on user data.
		 */
		content?: string;

		/**
		 * The Google Cloud Storage URI where the file content is located.
		 * This URI must be of the form: gs://bucket_name/object_name. For more
		 * details, see https://cloud.google.com/storage/docs/reference-uris.
		 * NOTE: Cloud Storage object versioning is not supported.
		 */
		gcsContentUri?: string;

		/**
		 * The language of the document (if not specified, the language is
		 * automatically detected). Both ISO and BCP-47 language codes are
		 * accepted.<br>
		 * [Language
		 * Support](https://cloud.google.com/natural-language/docs/languages) lists
		 * currently supported languages for each API method. If the language (either
		 * specified by the caller or automatically detected) is not supported by the
		 * called API method, an `INVALID_ARGUMENT` error is returned.
		 */
		language?: string;

		/**
		 * Required. If the type is not set or is `TYPE_UNSPECIFIED`,
		 * returns an `INVALID_ARGUMENT` error.
		 */
		type?: DocumentType;
	}

	export enum DocumentType { TYPE_UNSPECIFIED = 0, PLAIN_TEXT = 1, HTML = 2 }

	export enum AnalyzeEntitiesRequestEncodingType { NONE = 0, UTF8 = 1, UTF16 = 2, UTF32 = 3 }


	/** The entity analysis response message. */
	export interface AnalyzeEntitiesResponse {

		/** The recognized entities in the input document. */
		entities?: Array<Entity>;

		/**
		 * The language of the text, which will be the same as the language specified
		 * in the request or, if not specified, the automatically-detected language.
		 * See Document.language field for more details.
		 */
		language?: string;
	}


	/**
	 * Represents a phrase in the text that is a known entity, such as
	 * a person, an organization, or location. The API associates information, such
	 * as salience and mentions, with entities.
	 */
	export interface Entity {

		/**
		 * The mentions of this entity in the input document. The API currently
		 * supports proper noun mentions.
		 */
		mentions?: Array<EntityMention>;

		/**
		 * Metadata associated with the entity.
		 * For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`)
		 * and Knowledge Graph MID (`mid`), if they are available. For the metadata
		 * associated with other entity types, see the Type table below.
		 */
		metadata?: {[id: string]: any };

		/** The representative name for the entity. */
		name?: string;

		/**
		 * The salience score associated with the entity in the [0, 1.0] range.
		 * The salience score for an entity provides information about the
		 * importance or centrality of that entity to the entire document text.
		 * Scores closer to 0 are less salient, while scores closer to 1.0 are highly
		 * salient.
		 */
		salience?: number;

		/**
		 * Represents the feeling associated with the entire text or entities in
		 * the text.
		 */
		sentiment?: Sentiment;

		/** The entity type. */
		type?: EntityType;
	}


	/**
	 * Represents a mention for an entity in the text. Currently, proper noun
	 * mentions are supported.
	 */
	export interface EntityMention {

		/**
		 * Represents the feeling associated with the entire text or entities in
		 * the text.
		 */
		sentiment?: Sentiment;

		/** Represents an output piece of text. */
		text?: TextSpan;

		/** The type of the entity mention. */
		type?: EntityMentionType;
	}


	/**
	 * Represents the feeling associated with the entire text or entities in
	 * the text.
	 */
	export interface Sentiment {

		/**
		 * A non-negative number in the [0, +inf) range, which represents
		 * the absolute magnitude of sentiment regardless of score (positive or
		 * negative).
		 */
		magnitude?: number;

		/**
		 * Sentiment score between -1.0 (negative sentiment) and 1.0
		 * (positive sentiment).
		 */
		score?: number;
	}


	/** Represents an output piece of text. */
	export interface TextSpan {

		/**
		 * The API calculates the beginning offset of the content in the original
		 * document according to the EncodingType specified in the API request.
		 */
		beginOffset?: number;

		/** The content of the output text. */
		content?: string;
	}

	export enum EntityMentionType { TYPE_UNKNOWN = 0, PROPER = 1, COMMON = 2 }

	export enum EntityType { UNKNOWN = 0, PERSON = 1, LOCATION = 2, ORGANIZATION = 3, EVENT = 4, WORK_OF_ART = 5, CONSUMER_GOOD = 6, OTHER = 7, PHONE_NUMBER = 8, ADDRESS = 9, DATE = 10, NUMBER = 11, PRICE = 12 }


	/** The entity-level sentiment analysis request message. */
	export interface AnalyzeEntitySentimentRequest {

		/**
		 * ################################################################ #
		 * Represents the input to API methods.
		 */
		document?: Document;

		/** The encoding type used by the API to calculate offsets. */
		encodingType?: AnalyzeEntitiesRequestEncodingType;
	}


	/** The entity-level sentiment analysis response message. */
	export interface AnalyzeEntitySentimentResponse {

		/** The recognized entities in the input document with associated sentiments. */
		entities?: Array<Entity>;

		/**
		 * The language of the text, which will be the same as the language specified
		 * in the request or, if not specified, the automatically-detected language.
		 * See Document.language field for more details.
		 */
		language?: string;
	}


	/** The sentiment analysis request message. */
	export interface AnalyzeSentimentRequest {

		/**
		 * ################################################################ #
		 * Represents the input to API methods.
		 */
		document?: Document;

		/** The encoding type used by the API to calculate sentence offsets. */
		encodingType?: AnalyzeEntitiesRequestEncodingType;
	}


	/** The sentiment analysis response message. */
	export interface AnalyzeSentimentResponse {

		/**
		 * Represents the feeling associated with the entire text or entities in
		 * the text.
		 */
		documentSentiment?: Sentiment;

		/**
		 * The language of the text, which will be the same as the language specified
		 * in the request or, if not specified, the automatically-detected language.
		 * See Document.language field for more details.
		 */
		language?: string;

		/** The sentiment for all the sentences in the document. */
		sentences?: Array<Sentence>;
	}


	/** Represents a sentence in the input document. */
	export interface Sentence {

		/**
		 * Represents the feeling associated with the entire text or entities in
		 * the text.
		 */
		sentiment?: Sentiment;

		/** Represents an output piece of text. */
		text?: TextSpan;
	}


	/** The syntax analysis request message. */
	export interface AnalyzeSyntaxRequest {

		/**
		 * ################################################################ #
		 * Represents the input to API methods.
		 */
		document?: Document;

		/** The encoding type used by the API to calculate offsets. */
		encodingType?: AnalyzeEntitiesRequestEncodingType;
	}


	/** The syntax analysis response message. */
	export interface AnalyzeSyntaxResponse {

		/**
		 * The language of the text, which will be the same as the language specified
		 * in the request or, if not specified, the automatically-detected language.
		 * See Document.language field for more details.
		 */
		language?: string;

		/** Sentences in the input document. */
		sentences?: Array<Sentence>;

		/** Tokens, along with their syntactic information, in the input document. */
		tokens?: Array<Token>;
	}


	/** Represents the smallest syntactic building block of the text. */
	export interface Token {

		/**
		 * Represents dependency parse tree information for a token. (For more
		 * information on dependency labels, see
		 * http://www.aclweb.org/anthology/P13-2017
		 */
		dependencyEdge?: DependencyEdge;

		/** [Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token. */
		lemma?: string;

		/**
		 * Represents part of speech information for a token. Parts of speech
		 * are as defined in
		 * http://www.lrec-conf.org/proceedings/lrec2012/pdf/274_Paper.pdf
		 */
		partOfSpeech?: PartOfSpeech;

		/** Represents an output piece of text. */
		text?: TextSpan;
	}


	/**
	 * Represents dependency parse tree information for a token. (For more
	 * information on dependency labels, see
	 * http://www.aclweb.org/anthology/P13-2017
	 */
	export interface DependencyEdge {

		/**
		 * Represents the head of this token in the dependency tree.
		 * This is the index of the token which has an arc going to this token.
		 * The index is the position of the token in the array of tokens returned
		 * by the API method. If this token is a root token, then the
		 * `head_token_index` is its own index.
		 */
		headTokenIndex?: number;

		/** The parse label for the token. */
		label?: DependencyEdgeLabel;
	}

	export enum DependencyEdgeLabel { UNKNOWN = 0, ABBREV = 1, ACOMP = 2, ADVCL = 3, ADVMOD = 4, AMOD = 5, APPOS = 6, ATTR = 7, AUX = 8, AUXPASS = 9, CC = 10, CCOMP = 11, CONJ = 12, CSUBJ = 13, CSUBJPASS = 14, DEP = 15, DET = 16, DISCOURSE = 17, DOBJ = 18, EXPL = 19, GOESWITH = 20, IOBJ = 21, MARK = 22, MWE = 23, MWV = 24, NEG = 25, NN = 26, NPADVMOD = 27, NSUBJ = 28, NSUBJPASS = 29, NUM = 30, NUMBER = 31, P = 32, PARATAXIS = 33, PARTMOD = 34, PCOMP = 35, POBJ = 36, POSS = 37, POSTNEG = 38, PRECOMP = 39, PRECONJ = 40, PREDET = 41, PREF = 42, PREP = 43, PRONL = 44, PRT = 45, PS = 46, QUANTMOD = 47, RCMOD = 48, RCMODREL = 49, RDROP = 50, REF = 51, REMNANT = 52, REPARANDUM = 53, ROOT = 54, SNUM = 55, SUFF = 56, TMOD = 57, TOPIC = 58, VMOD = 59, VOCATIVE = 60, XCOMP = 61, SUFFIX = 62, TITLE = 63, ADVPHMOD = 64, AUXCAUS = 65, AUXVV = 66, DTMOD = 67, FOREIGN = 68, KW = 69, LIST = 70, NOMC = 71, NOMCSUBJ = 72, NOMCSUBJPASS = 73, NUMC = 74, COP = 75, DISLOCATED = 76, ASP = 77, GMOD = 78, GOBJ = 79, INFMOD = 80, MES = 81, NCOMP = 82 }


	/**
	 * Represents part of speech information for a token. Parts of speech
	 * are as defined in
	 * http://www.lrec-conf.org/proceedings/lrec2012/pdf/274_Paper.pdf
	 */
	export interface PartOfSpeech {

		/** The grammatical aspect. */
		aspect?: PartOfSpeechAspect;

		/** The grammatical case. */
		case?: PartOfSpeechCase;

		/** The grammatical form. */
		form?: PartOfSpeechForm;

		/** The grammatical gender. */
		gender?: PartOfSpeechGender;

		/** The grammatical mood. */
		mood?: PartOfSpeechMood;

		/** The grammatical number. */
		number?: PartOfSpeechNumber;

		/** The grammatical person. */
		person?: PartOfSpeechPerson;

		/** The grammatical properness. */
		proper?: PartOfSpeechProper;

		/** The grammatical reciprocity. */
		reciprocity?: PartOfSpeechReciprocity;

		/** The part of speech tag. */
		tag?: PartOfSpeechTag;

		/** The grammatical tense. */
		tense?: PartOfSpeechTense;

		/** The grammatical voice. */
		voice?: PartOfSpeechVoice;
	}

	export enum PartOfSpeechAspect { ASPECT_UNKNOWN = 0, PERFECTIVE = 1, IMPERFECTIVE = 2, PROGRESSIVE = 3 }

	export enum PartOfSpeechCase { CASE_UNKNOWN = 0, ACCUSATIVE = 1, ADVERBIAL = 2, COMPLEMENTIVE = 3, DATIVE = 4, GENITIVE = 5, INSTRUMENTAL = 6, LOCATIVE = 7, NOMINATIVE = 8, OBLIQUE = 9, PARTITIVE = 10, PREPOSITIONAL = 11, REFLEXIVE_CASE = 12, RELATIVE_CASE = 13, VOCATIVE = 14 }

	export enum PartOfSpeechForm { FORM_UNKNOWN = 0, ADNOMIAL = 1, AUXILIARY = 2, COMPLEMENTIZER = 3, FINAL_ENDING = 4, GERUND = 5, REALIS = 6, IRREALIS = 7, SHORT = 8, LONG = 9, ORDER = 10, SPECIFIC = 11 }

	export enum PartOfSpeechGender { GENDER_UNKNOWN = 0, FEMININE = 1, MASCULINE = 2, NEUTER = 3 }

	export enum PartOfSpeechMood { MOOD_UNKNOWN = 0, CONDITIONAL_MOOD = 1, IMPERATIVE = 2, INDICATIVE = 3, INTERROGATIVE = 4, JUSSIVE = 5, SUBJUNCTIVE = 6 }

	export enum PartOfSpeechNumber { NUMBER_UNKNOWN = 0, SINGULAR = 1, PLURAL = 2, DUAL = 3 }

	export enum PartOfSpeechPerson { PERSON_UNKNOWN = 0, FIRST = 1, SECOND = 2, THIRD = 3, REFLEXIVE_PERSON = 4 }

	export enum PartOfSpeechProper { PROPER_UNKNOWN = 0, PROPER = 1, NOT_PROPER = 2 }

	export enum PartOfSpeechReciprocity { RECIPROCITY_UNKNOWN = 0, RECIPROCAL = 1, NON_RECIPROCAL = 2 }

	export enum PartOfSpeechTag { UNKNOWN = 0, ADJ = 1, ADP = 2, ADV = 3, CONJ = 4, DET = 5, NOUN = 6, NUM = 7, PRON = 8, PRT = 9, PUNCT = 10, VERB = 11, X = 12, AFFIX = 13 }

	export enum PartOfSpeechTense { TENSE_UNKNOWN = 0, CONDITIONAL_TENSE = 1, FUTURE = 2, PAST = 3, PRESENT = 4, IMPERFECT = 5, PLUPERFECT = 6 }

	export enum PartOfSpeechVoice { VOICE_UNKNOWN = 0, ACTIVE = 1, CAUSATIVE = 2, PASSIVE = 3 }


	/**
	 * The request message for the text annotation API, which can perform multiple
	 * analysis types (sentiment, entities, and syntax) in one call.
	 */
	export interface AnnotateTextRequest {

		/**
		 * ################################################################ #
		 * Represents the input to API methods.
		 */
		document?: Document;

		/** The encoding type used by the API to calculate offsets. */
		encodingType?: AnalyzeEntitiesRequestEncodingType;

		/**
		 * All available features for sentiment, syntax, and semantic analysis.
		 * Setting each one to true will enable that specific analysis for the input.
		 */
		features?: Features;
	}


	/**
	 * All available features for sentiment, syntax, and semantic analysis.
	 * Setting each one to true will enable that specific analysis for the input.
	 */
	export interface Features {

		/** Classify the full document into categories. */
		classifyText?: boolean;

		/** Extract document-level sentiment. */
		extractDocumentSentiment?: boolean;

		/** Extract entities. */
		extractEntities?: boolean;

		/** Extract entities and their associated sentiment. */
		extractEntitySentiment?: boolean;

		/** Extract syntax information. */
		extractSyntax?: boolean;
	}


	/** The text annotations response message. */
	export interface AnnotateTextResponse {

		/** Categories identified in the input document. */
		categories?: Array<ClassificationCategory>;

		/**
		 * Represents the feeling associated with the entire text or entities in
		 * the text.
		 */
		documentSentiment?: Sentiment;

		/**
		 * Entities, along with their semantic information, in the input document.
		 * Populated if the user enables
		 * AnnotateTextRequest.Features.extract_entities.
		 */
		entities?: Array<Entity>;

		/**
		 * The language of the text, which will be the same as the language specified
		 * in the request or, if not specified, the automatically-detected language.
		 * See Document.language field for more details.
		 */
		language?: string;

		/**
		 * Sentences in the input document. Populated if the user enables
		 * AnnotateTextRequest.Features.extract_syntax.
		 */
		sentences?: Array<Sentence>;

		/**
		 * Tokens, along with their syntactic information, in the input document.
		 * Populated if the user enables
		 * AnnotateTextRequest.Features.extract_syntax.
		 */
		tokens?: Array<Token>;
	}


	/** Represents a category returned from the text classifier. */
	export interface ClassificationCategory {

		/**
		 * The classifier's confidence of the category. Number represents how certain
		 * the classifier is that this category represents the given text.
		 */
		confidence?: number;

		/**
		 * The name of the category representing the document, from the [predefined
		 * taxonomy](https://cloud.google.com/natural-language/docs/categories).
		 */
		name?: string;
	}


	/** The document classification request message. */
	export interface ClassifyTextRequest {

		/**
		 * ################################################################ #
		 * Represents the input to API methods.
		 */
		document?: Document;
	}


	/** The document classification response message. */
	export interface ClassifyTextResponse {

		/** Categories representing the input document. */
		categories?: Array<ClassificationCategory>;
	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Finds named entities (currently proper names and common nouns) in the text
		 * along with entity types, salience, mentions for each entity, and
		 * other properties.
		 * Post v1/documents:analyzeEntities
		 * @return {void} Successful response
		 */
		Language_documents_analyzeEntities(requestBody: AnalyzeEntitiesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/documents:analyzeEntities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Finds entities, similar to AnalyzeEntities in the text and analyzes
		 * sentiment associated with each entity and its mentions.
		 * Post v1/documents:analyzeEntitySentiment
		 * @return {void} Successful response
		 */
		Language_documents_analyzeEntitySentiment(requestBody: AnalyzeEntitySentimentRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/documents:analyzeEntitySentiment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Analyzes the sentiment of the provided text.
		 * Post v1/documents:analyzeSentiment
		 * @return {void} Successful response
		 */
		Language_documents_analyzeSentiment(requestBody: AnalyzeSentimentRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/documents:analyzeSentiment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Analyzes the syntax of the text and provides sentence boundaries and
		 * tokenization along with part of speech tags, dependency trees, and other
		 * properties.
		 * Post v1/documents:analyzeSyntax
		 * @return {void} Successful response
		 */
		Language_documents_analyzeSyntax(requestBody: AnalyzeSyntaxRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/documents:analyzeSyntax', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * A convenience method that provides all the features that analyzeSentiment,
		 * analyzeEntities, and analyzeSyntax provide in one call.
		 * Post v1/documents:annotateText
		 * @return {void} Successful response
		 */
		Language_documents_annotateText(requestBody: AnnotateTextRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/documents:annotateText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Classifies a document into categories.
		 * Post v1/documents:classifyText
		 * @return {void} Successful response
		 */
		Language_documents_classifyText(requestBody: ClassifyTextRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/documents:classifyText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

