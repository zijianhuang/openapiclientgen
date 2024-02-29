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

		/** The content of the input in string format. Cloud audit logging exempt since it is based on user data. */
		content?: string | null;

		/** The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported. */
		gcsContentUri?: string | null;

		/** Optional. The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. [Language Support](https://cloud.google.com/natural-language/docs/languages) lists currently supported languages for each API method. If the language (either specified by the caller or automatically detected) is not supported by the called API method, an `INVALID_ARGUMENT` error is returned. */
		languageCode?: string | null;

		/** Required. If the type is not set or is `TYPE_UNSPECIFIED`, returns an `INVALID_ARGUMENT` error. */
		type?: DocumentType | null;
	}

	/** Represents the input to API methods. */
	export interface DocumentFormProperties {

		/** The content of the input in string format. Cloud audit logging exempt since it is based on user data. */
		content: FormControl<string | null | undefined>,

		/** The Google Cloud Storage URI where the file content is located. This URI must be of the form: gs://bucket_name/object_name. For more details, see https://cloud.google.com/storage/docs/reference-uris. NOTE: Cloud Storage object versioning is not supported. */
		gcsContentUri: FormControl<string | null | undefined>,

		/** Optional. The language of the document (if not specified, the language is automatically detected). Both ISO and BCP-47 language codes are accepted. [Language Support](https://cloud.google.com/natural-language/docs/languages) lists currently supported languages for each API method. If the language (either specified by the caller or automatically detected) is not supported by the called API method, an `INVALID_ARGUMENT` error is returned. */
		languageCode: FormControl<string | null | undefined>,

		/** Required. If the type is not set or is `TYPE_UNSPECIFIED`, returns an `INVALID_ARGUMENT` error. */
		type: FormControl<DocumentType | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			gcsContentUri: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DocumentType | null | undefined>(undefined),
		});

	}

	export enum DocumentType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', PLAIN_TEXT = 'PLAIN_TEXT', HTML = 'HTML' }

	export enum AnalyzeEntitiesRequestEncodingType { NONE = 'NONE', UTF8 = 'UTF8', UTF16 = 'UTF16', UTF32 = 'UTF32' }


	/** The entity analysis response message. */
	export interface AnalyzeEntitiesResponse {

		/** The recognized entities in the input document. */
		entities?: Array<Entity>;

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		languageCode?: string | null;

		/** Whether the language is officially supported. The API may still return a response when the language is not supported, but it is on a best effort basis. */
		languageSupported?: boolean | null;
	}

	/** The entity analysis response message. */
	export interface AnalyzeEntitiesResponseFormProperties {

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		languageCode: FormControl<string | null | undefined>,

		/** Whether the language is officially supported. The API may still return a response when the language is not supported, but it is on a best effort basis. */
		languageSupported: FormControl<boolean | null | undefined>,
	}
	export function CreateAnalyzeEntitiesResponseFormGroup() {
		return new FormGroup<AnalyzeEntitiesResponseFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			languageSupported: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a phrase in the text that is a known entity, such as a person, an organization, or location. The API associates information, such as probability and mentions, with entities. */
	export interface Entity {

		/** The mentions of this entity in the input document. The API currently supports proper noun mentions. */
		mentions?: Array<EntityMention>;

		/** Metadata associated with the entity. For the metadata associated with other entity types, see the Type table below. */
		metadata?: {[id: string]: string };

		/** The representative name for the entity. */
		name?: string | null;

		/** Represents the feeling associated with the entire text or entities in the text. */
		sentiment?: Sentiment;

		/** The entity type. */
		type?: EntityType | null;
	}

	/** Represents a phrase in the text that is a known entity, such as a person, an organization, or location. The API associates information, such as probability and mentions, with entities. */
	export interface EntityFormProperties {

		/** Metadata associated with the entity. For the metadata associated with other entity types, see the Type table below. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The representative name for the entity. */
		name: FormControl<string | null | undefined>,

		/** The entity type. */
		type: FormControl<EntityType | null | undefined>,
	}
	export function CreateEntityFormGroup() {
		return new FormGroup<EntityFormProperties>({
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EntityType | null | undefined>(undefined),
		});

	}


	/** Represents a mention for an entity in the text. Currently, proper noun mentions are supported. */
	export interface EntityMention {

		/**
		 * Probability score associated with the entity. The score shows the probability of the entity mention being the entity type. The score is in (0, 1] range.
		 * Type: float
		 */
		probability?: number | null;

		/** Represents the feeling associated with the entire text or entities in the text. */
		sentiment?: Sentiment;

		/** Represents a text span in the input document. */
		text?: TextSpan;

		/** The type of the entity mention. */
		type?: EntityMentionType | null;
	}

	/** Represents a mention for an entity in the text. Currently, proper noun mentions are supported. */
	export interface EntityMentionFormProperties {

		/**
		 * Probability score associated with the entity. The score shows the probability of the entity mention being the entity type. The score is in (0, 1] range.
		 * Type: float
		 */
		probability: FormControl<number | null | undefined>,

		/** The type of the entity mention. */
		type: FormControl<EntityMentionType | null | undefined>,
	}
	export function CreateEntityMentionFormGroup() {
		return new FormGroup<EntityMentionFormProperties>({
			probability: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<EntityMentionType | null | undefined>(undefined),
		});

	}


	/** Represents the feeling associated with the entire text or entities in the text. */
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

	/** Represents the feeling associated with the entire text or entities in the text. */
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


	/** The sentiment analysis request message. */
	export interface AnalyzeSentimentRequest {

		/** Represents the input to API methods. */
		document?: Document;

		/** The encoding type used by the API to calculate sentence offsets. */
		encodingType?: AnalyzeEntitiesRequestEncodingType | null;
	}

	/** The sentiment analysis request message. */
	export interface AnalyzeSentimentRequestFormProperties {

		/** The encoding type used by the API to calculate sentence offsets. */
		encodingType: FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>,
	}
	export function CreateAnalyzeSentimentRequestFormGroup() {
		return new FormGroup<AnalyzeSentimentRequestFormProperties>({
			encodingType: new FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>(undefined),
		});

	}


	/** The sentiment analysis response message. */
	export interface AnalyzeSentimentResponse {

		/** Represents the feeling associated with the entire text or entities in the text. */
		documentSentiment?: Sentiment;

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		languageCode?: string | null;

		/** Whether the language is officially supported. The API may still return a response when the language is not supported, but it is on a best effort basis. */
		languageSupported?: boolean | null;

		/** The sentiment for all the sentences in the document. */
		sentences?: Array<Sentence>;
	}

	/** The sentiment analysis response message. */
	export interface AnalyzeSentimentResponseFormProperties {

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		languageCode: FormControl<string | null | undefined>,

		/** Whether the language is officially supported. The API may still return a response when the language is not supported, but it is on a best effort basis. */
		languageSupported: FormControl<boolean | null | undefined>,
	}
	export function CreateAnalyzeSentimentResponseFormGroup() {
		return new FormGroup<AnalyzeSentimentResponseFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			languageSupported: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a sentence in the input document. */
	export interface Sentence {

		/** Represents the feeling associated with the entire text or entities in the text. */
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


	/** The request message for the text annotation API, which can perform multiple analysis types in one call. */
	export interface AnnotateTextRequest {

		/** Represents the input to API methods. */
		document?: Document;

		/** The encoding type used by the API to calculate offsets. */
		encodingType?: AnalyzeEntitiesRequestEncodingType | null;

		/** All available features. Setting each one to true will enable that specific analysis for the input. */
		features?: Features;
	}

	/** The request message for the text annotation API, which can perform multiple analysis types in one call. */
	export interface AnnotateTextRequestFormProperties {

		/** The encoding type used by the API to calculate offsets. */
		encodingType: FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>,
	}
	export function CreateAnnotateTextRequestFormGroup() {
		return new FormGroup<AnnotateTextRequestFormProperties>({
			encodingType: new FormControl<AnalyzeEntitiesRequestEncodingType | null | undefined>(undefined),
		});

	}


	/** All available features. Setting each one to true will enable that specific analysis for the input. */
	export interface Features {

		/** Optional. Classify the full document into categories. */
		classifyText?: boolean | null;

		/** Optional. Extract document-level sentiment. */
		extractDocumentSentiment?: boolean | null;

		/** Optional. Extract entities. */
		extractEntities?: boolean | null;

		/** Optional. Moderate the document for harmful and sensitive categories. */
		moderateText?: boolean | null;
	}

	/** All available features. Setting each one to true will enable that specific analysis for the input. */
	export interface FeaturesFormProperties {

		/** Optional. Classify the full document into categories. */
		classifyText: FormControl<boolean | null | undefined>,

		/** Optional. Extract document-level sentiment. */
		extractDocumentSentiment: FormControl<boolean | null | undefined>,

		/** Optional. Extract entities. */
		extractEntities: FormControl<boolean | null | undefined>,

		/** Optional. Moderate the document for harmful and sensitive categories. */
		moderateText: FormControl<boolean | null | undefined>,
	}
	export function CreateFeaturesFormGroup() {
		return new FormGroup<FeaturesFormProperties>({
			classifyText: new FormControl<boolean | null | undefined>(undefined),
			extractDocumentSentiment: new FormControl<boolean | null | undefined>(undefined),
			extractEntities: new FormControl<boolean | null | undefined>(undefined),
			moderateText: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The text annotations response message. */
	export interface AnnotateTextResponse {

		/** Categories identified in the input document. */
		categories?: Array<ClassificationCategory>;

		/** Represents the feeling associated with the entire text or entities in the text. */
		documentSentiment?: Sentiment;

		/** Entities, along with their semantic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_entities or AnnotateTextRequest.Features.extract_entity_sentiment. */
		entities?: Array<Entity>;

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		languageCode?: string | null;

		/** Whether the language is officially supported by all requested features. The API may still return a response when the language is not supported, but it is on a best effort basis. */
		languageSupported?: boolean | null;

		/** Harmful and sensitive categories identified in the input document. */
		moderationCategories?: Array<ClassificationCategory>;

		/** Sentences in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_document_sentiment. */
		sentences?: Array<Sentence>;
	}

	/** The text annotations response message. */
	export interface AnnotateTextResponseFormProperties {

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		languageCode: FormControl<string | null | undefined>,

		/** Whether the language is officially supported by all requested features. The API may still return a response when the language is not supported, but it is on a best effort basis. */
		languageSupported: FormControl<boolean | null | undefined>,
	}
	export function CreateAnnotateTextResponseFormGroup() {
		return new FormGroup<AnnotateTextResponseFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			languageSupported: new FormControl<boolean | null | undefined>(undefined),
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

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		languageCode?: string | null;

		/** Whether the language is officially supported. The API may still return a response when the language is not supported, but it is on a best effort basis. */
		languageSupported?: boolean | null;
	}

	/** The document classification response message. */
	export interface ClassifyTextResponseFormProperties {

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		languageCode: FormControl<string | null | undefined>,

		/** Whether the language is officially supported. The API may still return a response when the language is not supported, but it is on a best effort basis. */
		languageSupported: FormControl<boolean | null | undefined>,
	}
	export function CreateClassifyTextResponseFormGroup() {
		return new FormGroup<ClassifyTextResponseFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			languageSupported: new FormControl<boolean | null | undefined>(undefined),
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

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		languageCode?: string | null;

		/** Whether the language is officially supported. The API may still return a response when the language is not supported, but it is on a best effort basis. */
		languageSupported?: boolean | null;

		/** Harmful and sensitive categories representing the input document. */
		moderationCategories?: Array<ClassificationCategory>;
	}

	/** The document moderation response message. */
	export interface ModerateTextResponseFormProperties {

		/** The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details. */
		languageCode: FormControl<string | null | undefined>,

		/** Whether the language is officially supported. The API may still return a response when the language is not supported, but it is on a best effort basis. */
		languageSupported: FormControl<boolean | null | undefined>,
	}
	export function CreateModerateTextResponseFormGroup() {
		return new FormGroup<ModerateTextResponseFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			languageSupported: new FormControl<boolean | null | undefined>(undefined),
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
		 * Finds named entities (currently proper names and common nouns) in the text along with entity types, probability, mentions for each entity, and other properties.
		 * Post v2/documents:analyzeEntities
		 * @return {AnalyzeEntitiesResponse} Successful response
		 */
		Language_documents_analyzeEntities(requestBody: AnalyzeEntitiesRequest): Observable<AnalyzeEntitiesResponse> {
			return this.http.post<AnalyzeEntitiesResponse>(this.baseUri + 'v2/documents:analyzeEntities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Analyzes the sentiment of the provided text.
		 * Post v2/documents:analyzeSentiment
		 * @return {AnalyzeSentimentResponse} Successful response
		 */
		Language_documents_analyzeSentiment(requestBody: AnalyzeSentimentRequest): Observable<AnalyzeSentimentResponse> {
			return this.http.post<AnalyzeSentimentResponse>(this.baseUri + 'v2/documents:analyzeSentiment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A convenience method that provides all features in one call.
		 * Post v2/documents:annotateText
		 * @return {AnnotateTextResponse} Successful response
		 */
		Language_documents_annotateText(requestBody: AnnotateTextRequest): Observable<AnnotateTextResponse> {
			return this.http.post<AnnotateTextResponse>(this.baseUri + 'v2/documents:annotateText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Classifies a document into categories.
		 * Post v2/documents:classifyText
		 * @return {ClassifyTextResponse} Successful response
		 */
		Language_documents_classifyText(requestBody: ClassifyTextRequest): Observable<ClassifyTextResponse> {
			return this.http.post<ClassifyTextResponse>(this.baseUri + 'v2/documents:classifyText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Moderates a document for harmful and sensitive categories.
		 * Post v2/documents:moderateText
		 * @return {ModerateTextResponse} Successful response
		 */
		Language_documents_moderateText(requestBody: ModerateTextRequest): Observable<ModerateTextResponse> {
			return this.http.post<ModerateTextResponse>(this.baseUri + 'v2/documents:moderateText', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

