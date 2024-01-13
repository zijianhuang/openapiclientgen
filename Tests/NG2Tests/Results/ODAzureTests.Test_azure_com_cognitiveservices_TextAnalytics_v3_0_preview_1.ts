import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface DetectedLanguage {

		/**
		 * A two letter representation of the detected language according to the ISO 639-1 standard (e.g. en, fr).
		 * Required
		 */
		iso6391Name: string;

		/**
		 * Long name of a detected language (e.g. English, French).
		 * Required
		 */
		name: string;

		/**
		 * A confidence score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true.
		 * Required
		 */
		score: number;
	}
	export interface DetectedLanguageFormProperties {

		/**
		 * A two letter representation of the detected language according to the ISO 639-1 standard (e.g. en, fr).
		 * Required
		 */
		iso6391Name: FormControl<string | null | undefined>,

		/**
		 * Long name of a detected language (e.g. English, French).
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A confidence score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true.
		 * Required
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateDetectedLanguageFormGroup() {
		return new FormGroup<DetectedLanguageFormProperties>({
			iso6391Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DocumentEntities {

		/**
		 * Recognized entities in the document.
		 * Required
		 */
		entities: Array<Entity>;

		/**
		 * Unique, non-empty document identifier.
		 * Required
		 */
		id: string;

		/** if showStats=true was specified in the request this field will contain information about the document payload. */
		statistics?: DocumentStatistics;
	}
	export interface DocumentEntitiesFormProperties {

		/**
		 * Unique, non-empty document identifier.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDocumentEntitiesFormGroup() {
		return new FormGroup<DocumentEntitiesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Entity {

		/**
		 * Length (in Unicode characters) for the entity text.
		 * Required
		 */
		length: number;

		/**
		 * Start position (in Unicode characters) for the entity text.
		 * Required
		 */
		offset: number;

		/**
		 * Confidence score between 0 and 1 of the extracted entity.
		 * Required
		 */
		score: number;

		/** Entity sub type, such as Age/Year/TimeRange etc */
		subtype?: string | null;

		/**
		 * Entity text as appears in the request.
		 * Required
		 */
		text: string;

		/**
		 * Entity type, such as Person/Location/Org/SSN etc
		 * Required
		 */
		type: string;
	}
	export interface EntityFormProperties {

		/**
		 * Length (in Unicode characters) for the entity text.
		 * Required
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Start position (in Unicode characters) for the entity text.
		 * Required
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * Confidence score between 0 and 1 of the extracted entity.
		 * Required
		 */
		score: FormControl<number | null | undefined>,

		/** Entity sub type, such as Age/Year/TimeRange etc */
		subtype: FormControl<string | null | undefined>,

		/**
		 * Entity text as appears in the request.
		 * Required
		 */
		text: FormControl<string | null | undefined>,

		/**
		 * Entity type, such as Person/Location/Org/SSN etc
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEntityFormGroup() {
		return new FormGroup<EntityFormProperties>({
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			subtype: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** if showStats=true was specified in the request this field will contain information about the document payload. */
	export interface DocumentStatistics {

		/**
		 * Number of text elements recognized in the document.
		 * Required
		 */
		charactersCount: number;

		/**
		 * Number of transactions for the document.
		 * Required
		 */
		transactionsCount: number;
	}

	/** if showStats=true was specified in the request this field will contain information about the document payload. */
	export interface DocumentStatisticsFormProperties {

		/**
		 * Number of text elements recognized in the document.
		 * Required
		 */
		charactersCount: FormControl<number | null | undefined>,

		/**
		 * Number of transactions for the document.
		 * Required
		 */
		transactionsCount: FormControl<number | null | undefined>,
	}
	export function CreateDocumentStatisticsFormGroup() {
		return new FormGroup<DocumentStatisticsFormProperties>({
			charactersCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			transactionsCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DocumentError {

		/** Required */
		error: TextAnalyticsError;

		/**
		 * Document Id.
		 * Required
		 */
		id: string;
	}
	export interface DocumentErrorFormProperties {

		/**
		 * Document Id.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDocumentErrorFormGroup() {
		return new FormGroup<DocumentErrorFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TextAnalyticsError {

		/**
		 * Error code.
		 * Required
		 */
		code: TextAnalyticsErrorCode;

		/** Details about specific errors that led to this reported error. */
		details?: Array<TextAnalyticsError>;
		innerError?: InnerError;

		/**
		 * Error message.
		 * Required
		 */
		message: string;

		/** Error target. */
		target?: string | null;
	}
	export interface TextAnalyticsErrorFormProperties {

		/**
		 * Error code.
		 * Required
		 */
		code: FormControl<TextAnalyticsErrorCode | null | undefined>,

		/**
		 * Error message.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** Error target. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateTextAnalyticsErrorFormGroup() {
		return new FormGroup<TextAnalyticsErrorFormProperties>({
			code: new FormControl<TextAnalyticsErrorCode | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TextAnalyticsErrorCode { invalidRequest = 0, invalidArgument = 1, internalServerError = 2, serviceUnavailable = 3 }

	export interface InnerError {

		/**
		 * Error code.
		 * Required
		 */
		code: InnerErrorCode;

		/** Error details. */
		details?: {[id: string]: string };
		innerError?: InnerError;

		/**
		 * Error message.
		 * Required
		 */
		message: string;

		/** Error target. */
		target?: string | null;
	}
	export interface InnerErrorFormProperties {

		/**
		 * Error code.
		 * Required
		 */
		code: FormControl<InnerErrorCode | null | undefined>,

		/** Error details. */
		details: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Error message.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** Error target. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateInnerErrorFormGroup() {
		return new FormGroup<InnerErrorFormProperties>({
			code: new FormControl<InnerErrorCode | null | undefined>(undefined, [Validators.required]),
			details: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InnerErrorCode { invalidParameterValue = 0, invalidRequestBodyFormat = 1, emptyRequest = 2, missingInputRecords = 3, invalidDocument = 4, modelVersionIncorrect = 5, invalidDocumentBatch = 6, unsupportedLanguageCode = 7, invalidCountryHint = 8 }

	export interface DocumentKeyPhrases {

		/**
		 * Unique, non-empty document identifier.
		 * Required
		 */
		id: string;

		/**
		 * A list of representative words or phrases. The number of key phrases returned is proportional to the number of words in the input document.
		 * Required
		 */
		keyPhrases: Array<string>;

		/** if showStats=true was specified in the request this field will contain information about the document payload. */
		statistics?: DocumentStatistics;
	}
	export interface DocumentKeyPhrasesFormProperties {

		/**
		 * Unique, non-empty document identifier.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDocumentKeyPhrasesFormGroup() {
		return new FormGroup<DocumentKeyPhrasesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DocumentLanguage {

		/**
		 * A list of extracted languages.
		 * Required
		 */
		detectedLanguages: Array<DetectedLanguage>;

		/**
		 * Unique, non-empty document identifier.
		 * Required
		 */
		id: string;

		/** if showStats=true was specified in the request this field will contain information about the document payload. */
		statistics?: DocumentStatistics;
	}
	export interface DocumentLanguageFormProperties {

		/**
		 * Unique, non-empty document identifier.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDocumentLanguageFormGroup() {
		return new FormGroup<DocumentLanguageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DocumentLinkedEntities {

		/**
		 * Recognized well-known entities in the document.
		 * Required
		 */
		entities: Array<LinkedEntity>;

		/**
		 * Unique, non-empty document identifier.
		 * Required
		 */
		id: string;

		/** if showStats=true was specified in the request this field will contain information about the document payload. */
		statistics?: DocumentStatistics;
	}
	export interface DocumentLinkedEntitiesFormProperties {

		/**
		 * Unique, non-empty document identifier.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDocumentLinkedEntitiesFormGroup() {
		return new FormGroup<DocumentLinkedEntitiesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LinkedEntity {

		/**
		 * Data source used to extract entity linking, such as Wiki/Bing etc.
		 * Required
		 */
		dataSource: string;

		/** Unique identifier of the recognized entity from the data source. */
		id?: string | null;

		/**
		 * Language used in the data source.
		 * Required
		 */
		language: string;

		/**
		 * List of instances this entity appears in the text.
		 * Required
		 */
		matches: Array<Match>;

		/**
		 * Entity Linking formal name.
		 * Required
		 */
		name: string;

		/**
		 * URL for the entity's page from the data source.
		 * Required
		 */
		url: string;
	}
	export interface LinkedEntityFormProperties {

		/**
		 * Data source used to extract entity linking, such as Wiki/Bing etc.
		 * Required
		 */
		dataSource: FormControl<string | null | undefined>,

		/** Unique identifier of the recognized entity from the data source. */
		id: FormControl<string | null | undefined>,

		/**
		 * Language used in the data source.
		 * Required
		 */
		language: FormControl<string | null | undefined>,

		/**
		 * Entity Linking formal name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * URL for the entity's page from the data source.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateLinkedEntityFormGroup() {
		return new FormGroup<LinkedEntityFormProperties>({
			dataSource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Match {

		/**
		 * Length (in Unicode characters) for the entity match text.
		 * Required
		 */
		length: number;

		/**
		 * Start position (in Unicode characters) for the entity match text.
		 * Required
		 */
		offset: number;

		/**
		 * If a well-known item is recognized, a decimal number denoting the confidence level between 0 and 1 will be returned.
		 * Required
		 */
		score: number;

		/**
		 * Entity text as appears in the request.
		 * Required
		 */
		text: string;
	}
	export interface MatchFormProperties {

		/**
		 * Length (in Unicode characters) for the entity match text.
		 * Required
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * Start position (in Unicode characters) for the entity match text.
		 * Required
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * If a well-known item is recognized, a decimal number denoting the confidence level between 0 and 1 will be returned.
		 * Required
		 */
		score: FormControl<number | null | undefined>,

		/**
		 * Entity text as appears in the request.
		 * Required
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateMatchFormGroup() {
		return new FormGroup<MatchFormProperties>({
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			score: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DocumentSentiment {

		/**
		 * Represents the confidence scores between 0 and 1 across all sentiment classes: positive, neutral, negative.
		 * Required
		 */
		documentScores: SentimentConfidenceScorePerLabel;

		/**
		 * Unique, non-empty document identifier.
		 * Required
		 */
		id: string;

		/**
		 * Sentence level sentiment analysis.
		 * Required
		 */
		sentences: Array<SentenceSentiment>;

		/**
		 * Predicted sentiment for document (Negative, Neutral, Positive, or Mixed).
		 * Required
		 */
		sentiment: DocumentSentimentSentiment;

		/** if showStats=true was specified in the request this field will contain information about the document payload. */
		statistics?: DocumentStatistics;
	}
	export interface DocumentSentimentFormProperties {

		/**
		 * Unique, non-empty document identifier.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Predicted sentiment for document (Negative, Neutral, Positive, or Mixed).
		 * Required
		 */
		sentiment: FormControl<DocumentSentimentSentiment | null | undefined>,
	}
	export function CreateDocumentSentimentFormGroup() {
		return new FormGroup<DocumentSentimentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sentiment: new FormControl<DocumentSentimentSentiment | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the confidence scores between 0 and 1 across all sentiment classes: positive, neutral, negative. */
	export interface SentimentConfidenceScorePerLabel {

		/** Required */
		negative: number;

		/** Required */
		neutral: number;

		/** Required */
		positive: number;
	}

	/** Represents the confidence scores between 0 and 1 across all sentiment classes: positive, neutral, negative. */
	export interface SentimentConfidenceScorePerLabelFormProperties {

		/** Required */
		negative: FormControl<number | null | undefined>,

		/** Required */
		neutral: FormControl<number | null | undefined>,

		/** Required */
		positive: FormControl<number | null | undefined>,
	}
	export function CreateSentimentConfidenceScorePerLabelFormGroup() {
		return new FormGroup<SentimentConfidenceScorePerLabelFormProperties>({
			negative: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			neutral: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			positive: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SentenceSentiment {

		/**
		 * The length of the sentence by Unicode standard.
		 * Required
		 */
		length: number;

		/**
		 * The sentence offset from the start of the document.
		 * Required
		 */
		offset: number;

		/**
		 * Represents the confidence scores between 0 and 1 across all sentiment classes: positive, neutral, negative.
		 * Required
		 */
		sentenceScores: SentimentConfidenceScorePerLabel;

		/**
		 * The predicted Sentiment for the sentence.
		 * Required
		 */
		sentiment: SentenceSentimentSentiment;

		/** The warnings generated for the sentence. */
		warnings?: Array<string>;
	}
	export interface SentenceSentimentFormProperties {

		/**
		 * The length of the sentence by Unicode standard.
		 * Required
		 */
		length: FormControl<number | null | undefined>,

		/**
		 * The sentence offset from the start of the document.
		 * Required
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * The predicted Sentiment for the sentence.
		 * Required
		 */
		sentiment: FormControl<SentenceSentimentSentiment | null | undefined>,
	}
	export function CreateSentenceSentimentFormGroup() {
		return new FormGroup<SentenceSentimentFormProperties>({
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			sentiment: new FormControl<SentenceSentimentSentiment | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SentenceSentimentSentiment { positive = 0, neutral = 1, negative = 2 }

	export enum DocumentSentimentSentiment { positive = 0, neutral = 1, negative = 2, mixed = 3 }

	export interface EntitiesResult {

		/**
		 * Response by document
		 * Required
		 */
		documents: Array<DocumentEntities>;

		/**
		 * Errors by document id.
		 * Required
		 */
		errors: Array<DocumentError>;

		/**
		 * This field indicates which model is used for scoring.
		 * Required
		 */
		modelVersion: string;

		/** if showStats=true was specified in the request this field will contain information about the request payload. */
		statistics?: RequestStatistics;
	}
	export interface EntitiesResultFormProperties {

		/**
		 * This field indicates which model is used for scoring.
		 * Required
		 */
		modelVersion: FormControl<string | null | undefined>,
	}
	export function CreateEntitiesResultFormGroup() {
		return new FormGroup<EntitiesResultFormProperties>({
			modelVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** if showStats=true was specified in the request this field will contain information about the request payload. */
	export interface RequestStatistics {

		/**
		 * Number of documents submitted in the request.
		 * Required
		 */
		documentsCount: number;

		/**
		 * Number of invalid documents. This includes empty, over-size limit or non-supported languages documents.
		 * Required
		 */
		erroneousDocumentsCount: number;

		/**
		 * Number of transactions for the request.
		 * Required
		 */
		transactionsCount: number;

		/**
		 * Number of valid documents. This excludes empty, over-size limit or non-supported languages documents.
		 * Required
		 */
		validDocumentsCount: number;
	}

	/** if showStats=true was specified in the request this field will contain information about the request payload. */
	export interface RequestStatisticsFormProperties {

		/**
		 * Number of documents submitted in the request.
		 * Required
		 */
		documentsCount: FormControl<number | null | undefined>,

		/**
		 * Number of invalid documents. This includes empty, over-size limit or non-supported languages documents.
		 * Required
		 */
		erroneousDocumentsCount: FormControl<number | null | undefined>,

		/**
		 * Number of transactions for the request.
		 * Required
		 */
		transactionsCount: FormControl<number | null | undefined>,

		/**
		 * Number of valid documents. This excludes empty, over-size limit or non-supported languages documents.
		 * Required
		 */
		validDocumentsCount: FormControl<number | null | undefined>,
	}
	export function CreateRequestStatisticsFormGroup() {
		return new FormGroup<RequestStatisticsFormProperties>({
			documentsCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			erroneousDocumentsCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			transactionsCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			validDocumentsCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EntityLinkingResult {

		/**
		 * Response by document
		 * Required
		 */
		documents: Array<DocumentLinkedEntities>;

		/**
		 * Errors by document id.
		 * Required
		 */
		errors: Array<DocumentError>;

		/**
		 * This field indicates which model is used for scoring.
		 * Required
		 */
		modelVersion: string;

		/** if showStats=true was specified in the request this field will contain information about the request payload. */
		statistics?: RequestStatistics;
	}
	export interface EntityLinkingResultFormProperties {

		/**
		 * This field indicates which model is used for scoring.
		 * Required
		 */
		modelVersion: FormControl<string | null | undefined>,
	}
	export function CreateEntityLinkingResultFormGroup() {
		return new FormGroup<EntityLinkingResultFormProperties>({
			modelVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface KeyPhraseResult {

		/**
		 * Response by document
		 * Required
		 */
		documents: Array<DocumentKeyPhrases>;

		/**
		 * Errors by document id.
		 * Required
		 */
		errors: Array<DocumentError>;

		/**
		 * This field indicates which model is used for scoring.
		 * Required
		 */
		modelVersion: string;

		/** if showStats=true was specified in the request this field will contain information about the request payload. */
		statistics?: RequestStatistics;
	}
	export interface KeyPhraseResultFormProperties {

		/**
		 * This field indicates which model is used for scoring.
		 * Required
		 */
		modelVersion: FormControl<string | null | undefined>,
	}
	export function CreateKeyPhraseResultFormGroup() {
		return new FormGroup<KeyPhraseResultFormProperties>({
			modelVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LanguageBatchInput {

		/** Required */
		documents: Array<LanguageInput>;
	}
	export interface LanguageBatchInputFormProperties {
	}
	export function CreateLanguageBatchInputFormGroup() {
		return new FormGroup<LanguageBatchInputFormProperties>({
		});

	}

	export interface LanguageInput {
		countryHint?: string | null;

		/**
		 * Unique, non-empty document identifier.
		 * Required
		 */
		id: string;

		/** Required */
		text: string;
	}
	export interface LanguageInputFormProperties {
		countryHint: FormControl<string | null | undefined>,

		/**
		 * Unique, non-empty document identifier.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Required */
		text: FormControl<string | null | undefined>,
	}
	export function CreateLanguageInputFormGroup() {
		return new FormGroup<LanguageInputFormProperties>({
			countryHint: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LanguageResult {

		/**
		 * Response by document
		 * Required
		 */
		documents: Array<DocumentLanguage>;

		/**
		 * Errors by document id.
		 * Required
		 */
		errors: Array<DocumentError>;

		/**
		 * This field indicates which model is used for scoring.
		 * Required
		 */
		modelVersion: string;

		/** if showStats=true was specified in the request this field will contain information about the request payload. */
		statistics?: RequestStatistics;
	}
	export interface LanguageResultFormProperties {

		/**
		 * This field indicates which model is used for scoring.
		 * Required
		 */
		modelVersion: FormControl<string | null | undefined>,
	}
	export function CreateLanguageResultFormGroup() {
		return new FormGroup<LanguageResultFormProperties>({
			modelVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains a set of input documents to be analyzed by the service. */
	export interface MultiLanguageBatchInput {

		/**
		 * The set of documents to process as part of this batch.
		 * Required
		 */
		documents: Array<MultiLanguageInput>;
	}

	/** Contains a set of input documents to be analyzed by the service. */
	export interface MultiLanguageBatchInputFormProperties {
	}
	export function CreateMultiLanguageBatchInputFormGroup() {
		return new FormGroup<MultiLanguageBatchInputFormProperties>({
		});

	}


	/** Contains an input document to be analyzed by the service. */
	export interface MultiLanguageInput {

		/**
		 * A unique, non-empty document identifier.
		 * Required
		 */
		id: string;

		/** (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. */
		language?: string | null;

		/**
		 * The input text to process.
		 * Required
		 */
		text: string;
	}

	/** Contains an input document to be analyzed by the service. */
	export interface MultiLanguageInputFormProperties {

		/**
		 * A unique, non-empty document identifier.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** (Optional) This is the 2 letter ISO 639-1 representation of a language. For example, use "en" for English; "es" for Spanish etc. If not set, use "en" for English as default. */
		language: FormControl<string | null | undefined>,

		/**
		 * The input text to process.
		 * Required
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateMultiLanguageInputFormGroup() {
		return new FormGroup<MultiLanguageInputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SentimentResponse {

		/**
		 * Sentiment analysis per document.
		 * Required
		 */
		documents: Array<DocumentSentiment>;

		/**
		 * Errors by document id.
		 * Required
		 */
		errors: Array<DocumentError>;

		/**
		 * This field indicates which model is used for scoring.
		 * Required
		 */
		modelVersion: string;

		/** if showStats=true was specified in the request this field will contain information about the request payload. */
		statistics?: RequestStatistics;
	}
	export interface SentimentResponseFormProperties {

		/**
		 * This field indicates which model is used for scoring.
		 * Required
		 */
		modelVersion: FormControl<string | null | undefined>,
	}
	export function CreateSentimentResponseFormGroup() {
		return new FormGroup<SentimentResponseFormProperties>({
			modelVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Linked entities from a well-known knowledge base
		 * The API returns a list of recognized entities with links to a well-known knowledge base. See the <a href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list of enabled languages.
		 * Post entities/linking
		 * @param {string} model_version (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. 
		 * @param {boolean} showStats (Optional) if set to true, response will contain input and document level statistics.
		 * @param {MultiLanguageBatchInput} requestBody Collection of documents to analyze.
		 * @return {EntityLinkingResult} A successful call results in a list of recognized entities with links to a well-known knowledge base returned for each valid document
		 */
		EntitiesLinking(model_version: string | null | undefined, showStats: boolean | null | undefined, requestBody: MultiLanguageBatchInput): Observable<EntityLinkingResult> {
			return this.http.post<EntityLinkingResult>(this.baseUri + 'entities/linking?model_version=' + (model_version == null ? '' : encodeURIComponent(model_version)) + '&showStats=' + showStats, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Named Entity Recognition
		 * The API returns a list of general named entities in a given document. For the list of supported entity types, check <a href="https://aka.ms/taner">Supported Entity Types in Text Analytics API</a>. See the <a href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list of enabled languages.
		 * Post entities/recognition/general
		 * @param {string} model_version (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. 
		 * @param {boolean} showStats (Optional) if set to true, response will contain input and document level statistics.
		 * @param {MultiLanguageBatchInput} requestBody Collection of documents to analyze.
		 * @return {EntitiesResult} A successful call results in a list of recognized entities returned for each valid document.
		 */
		EntitiesRecognitionGeneral(model_version: string | null | undefined, showStats: boolean | null | undefined, requestBody: MultiLanguageBatchInput): Observable<EntitiesResult> {
			return this.http.post<EntitiesResult>(this.baseUri + 'entities/recognition/general?model_version=' + (model_version == null ? '' : encodeURIComponent(model_version)) + '&showStats=' + showStats, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Entities containing personal information
		 * The API returns a list of entities with personal information (\"SSN\", \"Bank Account\" etc) in the document. For the list of supported entity types, check <a href="https://aka.ms/tanerpii">Supported Entity Types in Text Analytics API</a>. See the <a href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list of enabled languages.
		 * Post entities/recognition/pii
		 * @param {string} model_version (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. 
		 * @param {boolean} showStats (Optional) if set to true, response will contain input and document level statistics.
		 * @param {MultiLanguageBatchInput} requestBody Collection of documents to analyze.
		 * @return {EntitiesResult} A successful call results in a list of entities containing personal information returned for each valid document
		 */
		EntitiesRecognitionPii(model_version: string | null | undefined, showStats: boolean | null | undefined, requestBody: MultiLanguageBatchInput): Observable<EntitiesResult> {
			return this.http.post<EntitiesResult>(this.baseUri + 'entities/recognition/pii?model_version=' + (model_version == null ? '' : encodeURIComponent(model_version)) + '&showStats=' + showStats, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Key Phrases
		 * The API returns a list of strings denoting the key phrases in the input text. See the <a href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list of enabled languages.
		 * Post keyPhrases
		 * @param {string} model_version (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. 
		 * @param {boolean} showStats (Optional) if set to true, response will contain input and document level statistics.
		 * @param {MultiLanguageBatchInput} requestBody Collection of documents to analyze. Documents can now contain a language field to indicate the text language
		 * @return {KeyPhraseResult} A successful response results in 0 or more key phrases identified in each valid document
		 */
		KeyPhrases(model_version: string | null | undefined, showStats: boolean | null | undefined, requestBody: MultiLanguageBatchInput): Observable<KeyPhraseResult> {
			return this.http.post<KeyPhraseResult>(this.baseUri + 'keyPhrases?model_version=' + (model_version == null ? '' : encodeURIComponent(model_version)) + '&showStats=' + showStats, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detect Language
		 * The API returns the detected language and a numeric score between 0 and 1. Scores close to 1 indicate 100% certainty that the identified language is true. See the <a href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list of enabled languages.
		 * Post languages
		 * @param {string} model_version (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. 
		 * @param {boolean} showStats (Optional) if set to true, response will contain input and document level statistics.
		 * @param {LanguageBatchInput} requestBody Collection of documents to analyze.
		 * @return {LanguageResult} A successful call results in the detected language with the highest probability for each valid document
		 */
		Languages(model_version: string | null | undefined, showStats: boolean | null | undefined, requestBody: LanguageBatchInput): Observable<LanguageResult> {
			return this.http.post<LanguageResult>(this.baseUri + 'languages?model_version=' + (model_version == null ? '' : encodeURIComponent(model_version)) + '&showStats=' + showStats, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sentiment
		 * The API returns a sentiment prediction, as well as sentiment scores for each sentiment class (Positive, Negative, and Neutral) for the document and each sentence within it. See the <a href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list of enabled languages.
		 * Post sentiment
		 * @param {string} model_version (Optional) This value indicates which model will be used for scoring. If a model-version is not specified, the API should default to the latest, non-preview version. 
		 * @param {boolean} showStats (Optional) if set to true, response will contain input and document level statistics.
		 * @param {MultiLanguageBatchInput} requestBody Collection of documents to analyze.
		 * @return {SentimentResponse} A successful call results in a document sentiment prediction, as well as sentiment scores for each sentiment class (Positive, Negative, and Neutral)
		 */
		Sentiment(model_version: string | null | undefined, showStats: boolean | null | undefined, requestBody: MultiLanguageBatchInput): Observable<SentimentResponse> {
			return this.http.post<SentimentResponse>(this.baseUri + 'sentiment?model_version=' + (model_version == null ? '' : encodeURIComponent(model_version)) + '&showStats=' + showStats, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

