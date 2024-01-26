import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchDetectDominantLanguageResponse {

		/** Required */
		ResultList: Array<BatchDetectDominantLanguageItemResult>;

		/** Required */
		ErrorList: Array<BatchItemError>;
	}
	export interface BatchDetectDominantLanguageResponseFormProperties {
	}
	export function CreateBatchDetectDominantLanguageResponseFormGroup() {
		return new FormGroup<BatchDetectDominantLanguageResponseFormProperties>({
		});

	}


	/** The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation. */
	export interface BatchDetectDominantLanguageItemResult {
		Index?: number | null;
		Languages?: Array<DominantLanguage>;
	}

	/** The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation. */
	export interface BatchDetectDominantLanguageItemResultFormProperties {
		Index: FormControl<number | null | undefined>,
	}
	export function CreateBatchDetectDominantLanguageItemResultFormGroup() {
		return new FormGroup<BatchDetectDominantLanguageItemResultFormProperties>({
			Index: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Returns the code for the dominant language in the input text and the level of confidence that Amazon Comprehend has in the accuracy of the detection. */
	export interface DominantLanguage {
		LanguageCode?: string;
		Score?: number;
	}

	/** Returns the code for the dominant language in the input text and the level of confidence that Amazon Comprehend has in the accuracy of the detection. */
	export interface DominantLanguageFormProperties {
		LanguageCode: FormControl<string | null | undefined>,
		Score: FormControl<number | null | undefined>,
	}
	export function CreateDominantLanguageFormGroup() {
		return new FormGroup<DominantLanguageFormProperties>({
			LanguageCode: new FormControl<string | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes an error that occurred while processing a document in a batch. The operation returns on <code>BatchItemError</code> object for each document that contained an error. */
	export interface BatchItemError {
		Index?: number | null;
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** Describes an error that occurred while processing a document in a batch. The operation returns on <code>BatchItemError</code> object for each document that contained an error. */
	export interface BatchItemErrorFormProperties {
		Index: FormControl<number | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchItemErrorFormGroup() {
		return new FormGroup<BatchItemErrorFormProperties>({
			Index: new FormControl<number | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchDetectDominantLanguageRequest {

		/** Required */
		TextList: Array<string>;
	}
	export interface BatchDetectDominantLanguageRequestFormProperties {
	}
	export function CreateBatchDetectDominantLanguageRequestFormGroup() {
		return new FormGroup<BatchDetectDominantLanguageRequestFormProperties>({
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface TextSizeLimitExceededException {
	}
	export interface TextSizeLimitExceededExceptionFormProperties {
	}
	export function CreateTextSizeLimitExceededExceptionFormGroup() {
		return new FormGroup<TextSizeLimitExceededExceptionFormProperties>({
		});

	}

	export interface BatchSizeLimitExceededException {
	}
	export interface BatchSizeLimitExceededExceptionFormProperties {
	}
	export function CreateBatchSizeLimitExceededExceptionFormGroup() {
		return new FormGroup<BatchSizeLimitExceededExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface BatchDetectEntitiesResponse {

		/** Required */
		ResultList: Array<BatchDetectEntitiesItemResult>;

		/** Required */
		ErrorList: Array<BatchItemError>;
	}
	export interface BatchDetectEntitiesResponseFormProperties {
	}
	export function CreateBatchDetectEntitiesResponseFormGroup() {
		return new FormGroup<BatchDetectEntitiesResponseFormProperties>({
		});

	}


	/** The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation. */
	export interface BatchDetectEntitiesItemResult {
		Index?: number | null;
		Entities?: Array<Entity>;
	}

	/** The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation. */
	export interface BatchDetectEntitiesItemResultFormProperties {
		Index: FormControl<number | null | undefined>,
	}
	export function CreateBatchDetectEntitiesItemResultFormGroup() {
		return new FormGroup<BatchDetectEntitiesItemResultFormProperties>({
			Index: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Provides information about an entity. </p> <p> </p> */
	export interface Entity {
		Score?: number;
		Type?: EntityType;
		Text?: string;
		BeginOffset?: number | null;
		EndOffset?: number | null;
		BlockReferences?: Array<BlockReference>;
	}

	/** <p>Provides information about an entity. </p> <p> </p> */
	export interface EntityFormProperties {
		Score: FormControl<number | null | undefined>,
		Type: FormControl<EntityType | null | undefined>,
		Text: FormControl<string | null | undefined>,
		BeginOffset: FormControl<number | null | undefined>,
		EndOffset: FormControl<number | null | undefined>,
	}
	export function CreateEntityFormGroup() {
		return new FormGroup<EntityFormProperties>({
			Score: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<EntityType | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			BeginOffset: new FormControl<number | null | undefined>(undefined),
			EndOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EntityType { PERSON = 0, LOCATION = 1, ORGANIZATION = 2, COMMERCIAL_ITEM = 3, EVENT = 4, DATE = 5, QUANTITY = 6, TITLE = 7, OTHER = 8 }


	/** A reference to a block.  */
	export interface BlockReference {
		BlockId?: string;
		BeginOffset?: number | null;
		EndOffset?: number | null;
		ChildBlocks?: Array<ChildBlock>;
	}

	/** A reference to a block.  */
	export interface BlockReferenceFormProperties {
		BlockId: FormControl<string | null | undefined>,
		BeginOffset: FormControl<number | null | undefined>,
		EndOffset: FormControl<number | null | undefined>,
	}
	export function CreateBlockReferenceFormGroup() {
		return new FormGroup<BlockReferenceFormProperties>({
			BlockId: new FormControl<string | null | undefined>(undefined),
			BeginOffset: new FormControl<number | null | undefined>(undefined),
			EndOffset: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Nested block contained within a block. */
	export interface ChildBlock {
		ChildBlockId?: string;
		BeginOffset?: number | null;
		EndOffset?: number | null;
	}

	/** Nested block contained within a block. */
	export interface ChildBlockFormProperties {
		ChildBlockId: FormControl<string | null | undefined>,
		BeginOffset: FormControl<number | null | undefined>,
		EndOffset: FormControl<number | null | undefined>,
	}
	export function CreateChildBlockFormGroup() {
		return new FormGroup<ChildBlockFormProperties>({
			ChildBlockId: new FormControl<string | null | undefined>(undefined),
			BeginOffset: new FormControl<number | null | undefined>(undefined),
			EndOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BatchDetectEntitiesRequest {

		/** Required */
		TextList: Array<string>;

		/** Required */
		LanguageCode: LanguageCode;
	}
	export interface BatchDetectEntitiesRequestFormProperties {

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
	}
	export function CreateBatchDetectEntitiesRequestFormGroup() {
		return new FormGroup<BatchDetectEntitiesRequestFormProperties>({
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5, ar = 6, hi = 7, ja = 8, ko = 9, zh = 10, 'zh-TW' = 11 }

	export interface UnsupportedLanguageException {
	}
	export interface UnsupportedLanguageExceptionFormProperties {
	}
	export function CreateUnsupportedLanguageExceptionFormGroup() {
		return new FormGroup<UnsupportedLanguageExceptionFormProperties>({
		});

	}

	export interface BatchDetectKeyPhrasesResponse {

		/** Required */
		ResultList: Array<BatchDetectKeyPhrasesItemResult>;

		/** Required */
		ErrorList: Array<BatchItemError>;
	}
	export interface BatchDetectKeyPhrasesResponseFormProperties {
	}
	export function CreateBatchDetectKeyPhrasesResponseFormGroup() {
		return new FormGroup<BatchDetectKeyPhrasesResponseFormProperties>({
		});

	}


	/** The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation. */
	export interface BatchDetectKeyPhrasesItemResult {
		Index?: number | null;
		KeyPhrases?: Array<KeyPhrase>;
	}

	/** The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation. */
	export interface BatchDetectKeyPhrasesItemResultFormProperties {
		Index: FormControl<number | null | undefined>,
	}
	export function CreateBatchDetectKeyPhrasesItemResultFormGroup() {
		return new FormGroup<BatchDetectKeyPhrasesItemResultFormProperties>({
			Index: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes a key noun phrase. */
	export interface KeyPhrase {
		Score?: number;
		Text?: string;
		BeginOffset?: number | null;
		EndOffset?: number | null;
	}

	/** Describes a key noun phrase. */
	export interface KeyPhraseFormProperties {
		Score: FormControl<number | null | undefined>,
		Text: FormControl<string | null | undefined>,
		BeginOffset: FormControl<number | null | undefined>,
		EndOffset: FormControl<number | null | undefined>,
	}
	export function CreateKeyPhraseFormGroup() {
		return new FormGroup<KeyPhraseFormProperties>({
			Score: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			BeginOffset: new FormControl<number | null | undefined>(undefined),
			EndOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BatchDetectKeyPhrasesRequest {

		/** Required */
		TextList: Array<string>;

		/** Required */
		LanguageCode: LanguageCode;
	}
	export interface BatchDetectKeyPhrasesRequestFormProperties {

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
	}
	export function CreateBatchDetectKeyPhrasesRequestFormGroup() {
		return new FormGroup<BatchDetectKeyPhrasesRequestFormProperties>({
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchDetectSentimentResponse {

		/** Required */
		ResultList: Array<BatchDetectSentimentItemResult>;

		/** Required */
		ErrorList: Array<BatchItemError>;
	}
	export interface BatchDetectSentimentResponseFormProperties {
	}
	export function CreateBatchDetectSentimentResponseFormGroup() {
		return new FormGroup<BatchDetectSentimentResponseFormProperties>({
		});

	}


	/** The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation. */
	export interface BatchDetectSentimentItemResult {
		Index?: number | null;
		Sentiment?: SentimentType;
		SentimentScore?: SentimentScore;
	}

	/** The result of calling the operation. The operation returns one object for each document that is successfully processed by the operation. */
	export interface BatchDetectSentimentItemResultFormProperties {
		Index: FormControl<number | null | undefined>,
		Sentiment: FormControl<SentimentType | null | undefined>,
	}
	export function CreateBatchDetectSentimentItemResultFormGroup() {
		return new FormGroup<BatchDetectSentimentItemResultFormProperties>({
			Index: new FormControl<number | null | undefined>(undefined),
			Sentiment: new FormControl<SentimentType | null | undefined>(undefined),
		});

	}

	export enum SentimentType { POSITIVE = 0, NEGATIVE = 1, NEUTRAL = 2, MIXED = 3 }


	/** Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments. */
	export interface SentimentScore {
		Positive?: number;
		Negative?: number;
		Neutral?: number;
		Mixed?: number;
	}

	/** Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments. */
	export interface SentimentScoreFormProperties {
		Positive: FormControl<number | null | undefined>,
		Negative: FormControl<number | null | undefined>,
		Neutral: FormControl<number | null | undefined>,
		Mixed: FormControl<number | null | undefined>,
	}
	export function CreateSentimentScoreFormGroup() {
		return new FormGroup<SentimentScoreFormProperties>({
			Positive: new FormControl<number | null | undefined>(undefined),
			Negative: new FormControl<number | null | undefined>(undefined),
			Neutral: new FormControl<number | null | undefined>(undefined),
			Mixed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BatchDetectSentimentRequest {

		/** Required */
		TextList: Array<string>;

		/** Required */
		LanguageCode: LanguageCode;
	}
	export interface BatchDetectSentimentRequestFormProperties {

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
	}
	export function CreateBatchDetectSentimentRequestFormGroup() {
		return new FormGroup<BatchDetectSentimentRequestFormProperties>({
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchDetectSyntaxResponse {

		/** Required */
		ResultList: Array<BatchDetectSyntaxItemResult>;

		/** Required */
		ErrorList: Array<BatchItemError>;
	}
	export interface BatchDetectSyntaxResponseFormProperties {
	}
	export function CreateBatchDetectSyntaxResponseFormGroup() {
		return new FormGroup<BatchDetectSyntaxResponseFormProperties>({
		});

	}


	/** The result of calling the operation. The operation returns one object that is successfully processed by the operation. */
	export interface BatchDetectSyntaxItemResult {
		Index?: number | null;
		SyntaxTokens?: Array<SyntaxToken>;
	}

	/** The result of calling the operation. The operation returns one object that is successfully processed by the operation. */
	export interface BatchDetectSyntaxItemResultFormProperties {
		Index: FormControl<number | null | undefined>,
	}
	export function CreateBatchDetectSyntaxItemResultFormGroup() {
		return new FormGroup<BatchDetectSyntaxItemResultFormProperties>({
			Index: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a work in the input text that was recognized and assigned a part of speech. There is one syntax token record for each word in the source text. */
	export interface SyntaxToken {
		TokenId?: number | null;
		Text?: string;
		BeginOffset?: number | null;
		EndOffset?: number | null;
		PartOfSpeech?: PartOfSpeechTag;
	}

	/** Represents a work in the input text that was recognized and assigned a part of speech. There is one syntax token record for each word in the source text. */
	export interface SyntaxTokenFormProperties {
		TokenId: FormControl<number | null | undefined>,
		Text: FormControl<string | null | undefined>,
		BeginOffset: FormControl<number | null | undefined>,
		EndOffset: FormControl<number | null | undefined>,
	}
	export function CreateSyntaxTokenFormGroup() {
		return new FormGroup<SyntaxTokenFormProperties>({
			TokenId: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			BeginOffset: new FormControl<number | null | undefined>(undefined),
			EndOffset: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Identifies the part of speech represented by the token and gives the confidence that Amazon Comprehend has that the part of speech was correctly identified. For more information about the parts of speech that Amazon Comprehend can identify, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide.  */
	export interface PartOfSpeechTag {
		Tag?: PartOfSpeechTagType;
		Score?: number;
	}

	/** Identifies the part of speech represented by the token and gives the confidence that Amazon Comprehend has that the part of speech was correctly identified. For more information about the parts of speech that Amazon Comprehend can identify, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide.  */
	export interface PartOfSpeechTagFormProperties {
		Tag: FormControl<PartOfSpeechTagType | null | undefined>,
		Score: FormControl<number | null | undefined>,
	}
	export function CreatePartOfSpeechTagFormGroup() {
		return new FormGroup<PartOfSpeechTagFormProperties>({
			Tag: new FormControl<PartOfSpeechTagType | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PartOfSpeechTagType { ADJ = 0, ADP = 1, ADV = 2, AUX = 3, CONJ = 4, CCONJ = 5, DET = 6, INTJ = 7, NOUN = 8, NUM = 9, O = 10, PART = 11, PRON = 12, PROPN = 13, PUNCT = 14, SCONJ = 15, SYM = 16, VERB = 17 }

	export interface BatchDetectSyntaxRequest {

		/** Required */
		TextList: Array<string>;

		/** Required */
		LanguageCode: SyntaxLanguageCode;
	}
	export interface BatchDetectSyntaxRequestFormProperties {

		/** Required */
		LanguageCode: FormControl<SyntaxLanguageCode | null | undefined>,
	}
	export function CreateBatchDetectSyntaxRequestFormGroup() {
		return new FormGroup<BatchDetectSyntaxRequestFormProperties>({
			LanguageCode: new FormControl<SyntaxLanguageCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SyntaxLanguageCode { en = 0, es = 1, fr = 2, de = 3, it = 4, pt = 5 }

	export interface BatchDetectTargetedSentimentResponse {

		/** Required */
		ResultList: Array<BatchDetectTargetedSentimentItemResult>;

		/** Required */
		ErrorList: Array<BatchItemError>;
	}
	export interface BatchDetectTargetedSentimentResponseFormProperties {
	}
	export function CreateBatchDetectTargetedSentimentResponseFormGroup() {
		return new FormGroup<BatchDetectTargetedSentimentResponseFormProperties>({
		});

	}


	/** Analysis results for one of the documents in the batch. */
	export interface BatchDetectTargetedSentimentItemResult {
		Index?: number | null;
		Entities?: Array<TargetedSentimentEntity>;
	}

	/** Analysis results for one of the documents in the batch. */
	export interface BatchDetectTargetedSentimentItemResultFormProperties {
		Index: FormControl<number | null | undefined>,
	}
	export function CreateBatchDetectTargetedSentimentItemResultFormGroup() {
		return new FormGroup<BatchDetectTargetedSentimentItemResultFormProperties>({
			Index: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Information about one of the entities found by targeted sentiment analysis.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p> */
	export interface TargetedSentimentEntity {
		DescriptiveMentionIndex?: Array<number> | null;
		Mentions?: Array<TargetedSentimentMention>;
	}

	/** <p>Information about one of the entities found by targeted sentiment analysis.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p> */
	export interface TargetedSentimentEntityFormProperties {
	}
	export function CreateTargetedSentimentEntityFormGroup() {
		return new FormGroup<TargetedSentimentEntityFormProperties>({
		});

	}


	/** <p>Information about one mention of an entity. The mention information includes the location of the mention in the text and the sentiment of the mention.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p> */
	export interface TargetedSentimentMention {
		Score?: number;
		GroupScore?: number;
		Text?: string;
		Type?: TargetedSentimentEntityType;
		MentionSentiment?: MentionSentiment;
		BeginOffset?: number | null;
		EndOffset?: number | null;
	}

	/** <p>Information about one mention of an entity. The mention information includes the location of the mention in the text and the sentiment of the mention.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p> */
	export interface TargetedSentimentMentionFormProperties {
		Score: FormControl<number | null | undefined>,
		GroupScore: FormControl<number | null | undefined>,
		Text: FormControl<string | null | undefined>,
		Type: FormControl<TargetedSentimentEntityType | null | undefined>,
		BeginOffset: FormControl<number | null | undefined>,
		EndOffset: FormControl<number | null | undefined>,
	}
	export function CreateTargetedSentimentMentionFormGroup() {
		return new FormGroup<TargetedSentimentMentionFormProperties>({
			Score: new FormControl<number | null | undefined>(undefined),
			GroupScore: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<TargetedSentimentEntityType | null | undefined>(undefined),
			BeginOffset: new FormControl<number | null | undefined>(undefined),
			EndOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum TargetedSentimentEntityType { PERSON = 0, LOCATION = 1, ORGANIZATION = 2, FACILITY = 3, BRAND = 4, COMMERCIAL_ITEM = 5, MOVIE = 6, MUSIC = 7, BOOK = 8, SOFTWARE = 9, GAME = 10, PERSONAL_TITLE = 11, EVENT = 12, DATE = 13, QUANTITY = 14, ATTRIBUTE = 15, OTHER = 16 }


	/** <p>Contains the sentiment and sentiment score for one mention of an entity.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p> */
	export interface MentionSentiment {
		Sentiment?: SentimentType;

		/** Describes the level of confidence that Amazon Comprehend has in the accuracy of its detection of sentiments. */
		SentimentScore?: SentimentScore;
	}

	/** <p>Contains the sentiment and sentiment score for one mention of an entity.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p> */
	export interface MentionSentimentFormProperties {
		Sentiment: FormControl<SentimentType | null | undefined>,
	}
	export function CreateMentionSentimentFormGroup() {
		return new FormGroup<MentionSentimentFormProperties>({
			Sentiment: new FormControl<SentimentType | null | undefined>(undefined),
		});

	}

	export interface BatchDetectTargetedSentimentRequest {

		/** Required */
		TextList: Array<string>;

		/** Required */
		LanguageCode: LanguageCode;
	}
	export interface BatchDetectTargetedSentimentRequestFormProperties {

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
	}
	export function CreateBatchDetectTargetedSentimentRequestFormGroup() {
		return new FormGroup<BatchDetectTargetedSentimentRequestFormProperties>({
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClassifyDocumentResponse {
		Classes?: Array<DocumentClass>;
		Labels?: Array<DocumentLabel>;
		DocumentMetadata?: DocumentMetadata;
		DocumentType?: Array<DocumentTypeListItem>;
		Errors?: Array<ErrorsListItem>;
		Warnings?: Array<WarningsListItem>;
	}
	export interface ClassifyDocumentResponseFormProperties {
	}
	export function CreateClassifyDocumentResponseFormGroup() {
		return new FormGroup<ClassifyDocumentResponseFormProperties>({
		});

	}


	/** Specifies the class that categorizes the document being analyzed */
	export interface DocumentClass {
		Name?: string;
		Score?: number;
		Page?: number | null;
	}

	/** Specifies the class that categorizes the document being analyzed */
	export interface DocumentClassFormProperties {
		Name: FormControl<string | null | undefined>,
		Score: FormControl<number | null | undefined>,
		Page: FormControl<number | null | undefined>,
	}
	export function CreateDocumentClassFormGroup() {
		return new FormGroup<DocumentClassFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			Page: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies one of the label or labels that categorize the document being analyzed. */
	export interface DocumentLabel {
		Name?: string;
		Score?: number;
		Page?: number | null;
	}

	/** Specifies one of the label or labels that categorize the document being analyzed. */
	export interface DocumentLabelFormProperties {
		Name: FormControl<string | null | undefined>,
		Score: FormControl<number | null | undefined>,
		Page: FormControl<number | null | undefined>,
	}
	export function CreateDocumentLabelFormGroup() {
		return new FormGroup<DocumentLabelFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
			Page: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the document, discovered during text extraction. */
	export interface DocumentMetadata {
		Pages?: number | null;
		ExtractedCharacters?: Array<ExtractedCharactersListItem>;
	}

	/** Information about the document, discovered during text extraction. */
	export interface DocumentMetadataFormProperties {
		Pages: FormControl<number | null | undefined>,
	}
	export function CreateDocumentMetadataFormGroup() {
		return new FormGroup<DocumentMetadataFormProperties>({
			Pages: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Array of the number of characters extracted from each page. */
	export interface ExtractedCharactersListItem {
		Page?: number | null;
		Count?: number | null;
	}

	/** Array of the number of characters extracted from each page. */
	export interface ExtractedCharactersListItemFormProperties {
		Page: FormControl<number | null | undefined>,
		Count: FormControl<number | null | undefined>,
	}
	export function CreateExtractedCharactersListItemFormGroup() {
		return new FormGroup<ExtractedCharactersListItemFormProperties>({
			Page: new FormControl<number | null | undefined>(undefined),
			Count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Document type for each page in the document. */
	export interface DocumentTypeListItem {
		Page?: number | null;
		Type?: DocumentType;
	}

	/** Document type for each page in the document. */
	export interface DocumentTypeListItemFormProperties {
		Page: FormControl<number | null | undefined>,
		Type: FormControl<DocumentType | null | undefined>,
	}
	export function CreateDocumentTypeListItemFormGroup() {
		return new FormGroup<DocumentTypeListItemFormProperties>({
			Page: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<DocumentType | null | undefined>(undefined),
		});

	}

	export enum DocumentType { NATIVE_PDF = 0, SCANNED_PDF = 1, MS_WORD = 2, IMAGE = 3, PLAIN_TEXT = 4, TEXTRACT_DETECT_DOCUMENT_TEXT_JSON = 5, TEXTRACT_ANALYZE_DOCUMENT_JSON = 6 }


	/** <p>Text extraction encountered one or more page-level errors in the input document.</p> <p>The <code>ErrorCode</code> contains one of the following values:</p> <ul> <li> <p>TEXTRACT_BAD_PAGE - Amazon Textract cannot read the page. For more information about page limits in Amazon Textract, see <a href="https://docs.aws.amazon.com/textract/latest/dg/limits-document.html"> Page Quotas in Amazon Textract</a>.</p> </li> <li> <p>TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED - The number of requests exceeded your throughput limit. For more information about throughput quotas in Amazon Textract, see <a href="https://docs.aws.amazon.com/textract/latest/dg/limits-quotas-explained.html"> Default quotas in Amazon Textract</a>.</p> </li> <li> <p>PAGE_CHARACTERS_EXCEEDED - Too many text characters on the page (10,000 characters maximum).</p> </li> <li> <p>PAGE_SIZE_EXCEEDED - The maximum page size is 10 MB.</p> </li> <li> <p>INTERNAL_SERVER_ERROR - The request encountered a service issue. Try the API request again.</p> </li> </ul> */
	export interface ErrorsListItem {
		Page?: number | null;
		ErrorCode?: PageBasedErrorCode;
		ErrorMessage?: string;
	}

	/** <p>Text extraction encountered one or more page-level errors in the input document.</p> <p>The <code>ErrorCode</code> contains one of the following values:</p> <ul> <li> <p>TEXTRACT_BAD_PAGE - Amazon Textract cannot read the page. For more information about page limits in Amazon Textract, see <a href="https://docs.aws.amazon.com/textract/latest/dg/limits-document.html"> Page Quotas in Amazon Textract</a>.</p> </li> <li> <p>TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED - The number of requests exceeded your throughput limit. For more information about throughput quotas in Amazon Textract, see <a href="https://docs.aws.amazon.com/textract/latest/dg/limits-quotas-explained.html"> Default quotas in Amazon Textract</a>.</p> </li> <li> <p>PAGE_CHARACTERS_EXCEEDED - Too many text characters on the page (10,000 characters maximum).</p> </li> <li> <p>PAGE_SIZE_EXCEEDED - The maximum page size is 10 MB.</p> </li> <li> <p>INTERNAL_SERVER_ERROR - The request encountered a service issue. Try the API request again.</p> </li> </ul> */
	export interface ErrorsListItemFormProperties {
		Page: FormControl<number | null | undefined>,
		ErrorCode: FormControl<PageBasedErrorCode | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorsListItemFormGroup() {
		return new FormGroup<ErrorsListItemFormProperties>({
			Page: new FormControl<number | null | undefined>(undefined),
			ErrorCode: new FormControl<PageBasedErrorCode | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PageBasedErrorCode { TEXTRACT_BAD_PAGE = 0, TEXTRACT_PROVISIONED_THROUGHPUT_EXCEEDED = 1, PAGE_CHARACTERS_EXCEEDED = 2, PAGE_SIZE_EXCEEDED = 3, INTERNAL_SERVER_ERROR = 4 }


	/** <p>The system identified one of the following warnings while processing the input document:</p> <ul> <li> <p>The document to classify is plain text, but the classifier is a native model.</p> </li> <li> <p>The document to classify is semi-structured, but the classifier is a plain-text model.</p> </li> </ul> */
	export interface WarningsListItem {
		Page?: number | null;
		WarnCode?: PageBasedWarningCode;
		WarnMessage?: string;
	}

	/** <p>The system identified one of the following warnings while processing the input document:</p> <ul> <li> <p>The document to classify is plain text, but the classifier is a native model.</p> </li> <li> <p>The document to classify is semi-structured, but the classifier is a plain-text model.</p> </li> </ul> */
	export interface WarningsListItemFormProperties {
		Page: FormControl<number | null | undefined>,
		WarnCode: FormControl<PageBasedWarningCode | null | undefined>,
		WarnMessage: FormControl<string | null | undefined>,
	}
	export function CreateWarningsListItemFormGroup() {
		return new FormGroup<WarningsListItemFormProperties>({
			Page: new FormControl<number | null | undefined>(undefined),
			WarnCode: new FormControl<PageBasedWarningCode | null | undefined>(undefined),
			WarnMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PageBasedWarningCode { INFERENCING_PLAINTEXT_WITH_NATIVE_TRAINED_MODEL = 0, INFERENCING_NATIVE_DOCUMENT_WITH_PLAINTEXT_TRAINED_MODEL = 1 }

	export interface ClassifyDocumentRequest {
		Text?: string;

		/** Required */
		EndpointArn: string;
		Bytes?: string;
		DocumentReaderConfig?: DocumentReaderConfig;
	}
	export interface ClassifyDocumentRequestFormProperties {
		Text: FormControl<string | null | undefined>,

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,
		Bytes: FormControl<string | null | undefined>,
	}
	export function CreateClassifyDocumentRequestFormGroup() {
		return new FormGroup<ClassifyDocumentRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined),
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Bytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Provides configuration parameters to override the default actions for extracting text from PDF documents and image files. </p> <p> By default, Amazon Comprehend performs the following actions to extract text from files, based on the input file type: </p> <ul> <li> <p> <b>Word files</b> - Amazon Comprehend parser extracts the text. </p> </li> <li> <p> <b>Digital PDF files</b> - Amazon Comprehend parser extracts the text. </p> </li> <li> <p> <b>Image files and scanned PDF files</b> - Amazon Comprehend uses the Amazon Textract <code>DetectDocumentText</code> API to extract the text. </p> </li> </ul> <p> <code>DocumentReaderConfig</code> does not apply to plain text files or Word files.</p> <p> For image files and PDF documents, you can override these default actions using the fields listed below. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-set-textract-options.html"> Setting text extraction options</a> in the Comprehend Developer Guide. </p> */
	export interface DocumentReaderConfig {

		/** Required */
		DocumentReadAction: DocumentReadAction;
		DocumentReadMode?: DocumentReadMode;
		FeatureTypes?: Array<DocumentReadFeatureTypes>;
	}

	/** <p>Provides configuration parameters to override the default actions for extracting text from PDF documents and image files. </p> <p> By default, Amazon Comprehend performs the following actions to extract text from files, based on the input file type: </p> <ul> <li> <p> <b>Word files</b> - Amazon Comprehend parser extracts the text. </p> </li> <li> <p> <b>Digital PDF files</b> - Amazon Comprehend parser extracts the text. </p> </li> <li> <p> <b>Image files and scanned PDF files</b> - Amazon Comprehend uses the Amazon Textract <code>DetectDocumentText</code> API to extract the text. </p> </li> </ul> <p> <code>DocumentReaderConfig</code> does not apply to plain text files or Word files.</p> <p> For image files and PDF documents, you can override these default actions using the fields listed below. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-set-textract-options.html"> Setting text extraction options</a> in the Comprehend Developer Guide. </p> */
	export interface DocumentReaderConfigFormProperties {

		/** Required */
		DocumentReadAction: FormControl<DocumentReadAction | null | undefined>,
		DocumentReadMode: FormControl<DocumentReadMode | null | undefined>,
	}
	export function CreateDocumentReaderConfigFormGroup() {
		return new FormGroup<DocumentReaderConfigFormProperties>({
			DocumentReadAction: new FormControl<DocumentReadAction | null | undefined>(undefined, [Validators.required]),
			DocumentReadMode: new FormControl<DocumentReadMode | null | undefined>(undefined),
		});

	}

	export enum DocumentReadAction { TEXTRACT_DETECT_DOCUMENT_TEXT = 0, TEXTRACT_ANALYZE_DOCUMENT = 1 }

	export enum DocumentReadMode { SERVICE_DEFAULT = 0, FORCE_DOCUMENT_READ_ACTION = 1 }


	/** <p>Specifies the type of Amazon Textract features to apply. If you chose <code>TEXTRACT_ANALYZE_DOCUMENT</code> as the read action, you must specify one or both of the following values:</p> <ul> <li> <p> <code>TABLES</code> - Returns additional information about any tables that are detected in the input document. </p> </li> <li> <p> <code>FORMS</code> - Returns additional information about any forms that are detected in the input document. </p> </li> </ul> */
	export enum DocumentReadFeatureTypes { TABLES = 0, FORMS = 1 }

	export interface ResourceUnavailableException {
	}
	export interface ResourceUnavailableExceptionFormProperties {
	}
	export function CreateResourceUnavailableExceptionFormGroup() {
		return new FormGroup<ResourceUnavailableExceptionFormProperties>({
		});

	}

	export interface ContainsPiiEntitiesResponse {
		Labels?: Array<EntityLabel>;
	}
	export interface ContainsPiiEntitiesResponseFormProperties {
	}
	export function CreateContainsPiiEntitiesResponseFormGroup() {
		return new FormGroup<ContainsPiiEntitiesResponseFormProperties>({
		});

	}


	/** Specifies one of the label or labels that categorize the personally identifiable information (PII) entity being analyzed. */
	export interface EntityLabel {
		Name?: PiiEntityType;
		Score?: number;
	}

	/** Specifies one of the label or labels that categorize the personally identifiable information (PII) entity being analyzed. */
	export interface EntityLabelFormProperties {
		Name: FormControl<PiiEntityType | null | undefined>,
		Score: FormControl<number | null | undefined>,
	}
	export function CreateEntityLabelFormGroup() {
		return new FormGroup<EntityLabelFormProperties>({
			Name: new FormControl<PiiEntityType | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PiiEntityType { BANK_ACCOUNT_NUMBER = 0, BANK_ROUTING = 1, CREDIT_DEBIT_NUMBER = 2, CREDIT_DEBIT_CVV = 3, CREDIT_DEBIT_EXPIRY = 4, PIN = 5, EMAIL = 6, ADDRESS = 7, NAME = 8, PHONE = 9, SSN = 10, DATE_TIME = 11, PASSPORT_NUMBER = 12, DRIVER_ID = 13, URL = 14, AGE = 15, USERNAME = 16, PASSWORD = 17, AWS_ACCESS_KEY = 18, AWS_SECRET_KEY = 19, IP_ADDRESS = 20, MAC_ADDRESS = 21, ALL = 22, LICENSE_PLATE = 23, VEHICLE_IDENTIFICATION_NUMBER = 24, UK_NATIONAL_INSURANCE_NUMBER = 25, CA_SOCIAL_INSURANCE_NUMBER = 26, US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER = 27, UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER = 28, IN_PERMANENT_ACCOUNT_NUMBER = 29, IN_NREGA = 30, INTERNATIONAL_BANK_ACCOUNT_NUMBER = 31, SWIFT_CODE = 32, UK_NATIONAL_HEALTH_SERVICE_NUMBER = 33, CA_HEALTH_NUMBER = 34, IN_AADHAAR = 35, IN_VOTER_NUMBER = 36 }

	export interface ContainsPiiEntitiesRequest {

		/** Required */
		Text: string;

		/** Required */
		LanguageCode: LanguageCode;
	}
	export interface ContainsPiiEntitiesRequestFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
	}
	export function CreateContainsPiiEntitiesRequestFormGroup() {
		return new FormGroup<ContainsPiiEntitiesRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDatasetResponse {
		DatasetArn?: string;
	}
	export interface CreateDatasetResponseFormProperties {
		DatasetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetResponseFormGroup() {
		return new FormGroup<CreateDatasetResponseFormProperties>({
			DatasetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDatasetRequest {

		/** Required */
		FlywheelArn: string;

		/** Required */
		DatasetName: string;
		DatasetType?: DatasetType;
		Description?: string;

		/** Required */
		InputDataConfig: DatasetInputDataConfig;
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateDatasetRequestFormProperties {

		/** Required */
		FlywheelArn: FormControl<string | null | undefined>,

		/** Required */
		DatasetName: FormControl<string | null | undefined>,
		DatasetType: FormControl<DatasetType | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetRequestFormGroup() {
		return new FormGroup<CreateDatasetRequestFormProperties>({
			FlywheelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatasetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatasetType: new FormControl<DatasetType | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DatasetType { TRAIN = 0, TEST = 1 }


	/** Specifies the format and location of the input data for the dataset. */
	export interface DatasetInputDataConfig {
		AugmentedManifests?: Array<DatasetAugmentedManifestsListItem>;
		DataFormat?: DatasetDataFormat;
		DocumentClassifierInputDataConfig?: DatasetDocumentClassifierInputDataConfig;
		EntityRecognizerInputDataConfig?: DatasetEntityRecognizerInputDataConfig;
	}

	/** Specifies the format and location of the input data for the dataset. */
	export interface DatasetInputDataConfigFormProperties {
		DataFormat: FormControl<DatasetDataFormat | null | undefined>,
	}
	export function CreateDatasetInputDataConfigFormGroup() {
		return new FormGroup<DatasetInputDataConfigFormProperties>({
			DataFormat: new FormControl<DatasetDataFormat | null | undefined>(undefined),
		});

	}


	/** An augmented manifest file that provides training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth. */
	export interface DatasetAugmentedManifestsListItem {

		/** Required */
		AttributeNames: Array<string>;

		/** Required */
		S3Uri: string;
		AnnotationDataS3Uri?: string;
		SourceDocumentsS3Uri?: string;
		DocumentType?: AugmentedManifestsDocumentTypeFormat;
	}

	/** An augmented manifest file that provides training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth. */
	export interface DatasetAugmentedManifestsListItemFormProperties {

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
		AnnotationDataS3Uri: FormControl<string | null | undefined>,
		SourceDocumentsS3Uri: FormControl<string | null | undefined>,
		DocumentType: FormControl<AugmentedManifestsDocumentTypeFormat | null | undefined>,
	}
	export function CreateDatasetAugmentedManifestsListItemFormGroup() {
		return new FormGroup<DatasetAugmentedManifestsListItemFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AnnotationDataS3Uri: new FormControl<string | null | undefined>(undefined),
			SourceDocumentsS3Uri: new FormControl<string | null | undefined>(undefined),
			DocumentType: new FormControl<AugmentedManifestsDocumentTypeFormat | null | undefined>(undefined),
		});

	}

	export enum AugmentedManifestsDocumentTypeFormat { PLAIN_TEXT_DOCUMENT = 0, SEMI_STRUCTURED_DOCUMENT = 1 }

	export enum DatasetDataFormat { COMPREHEND_CSV = 0, AUGMENTED_MANIFEST = 1 }


	/** <p>Describes the dataset input data configuration for a document classifier model.</p> <p>For more information on how the input file is formatted, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html">Preparing training data</a> in the Comprehend Developer Guide. </p> */
	export interface DatasetDocumentClassifierInputDataConfig {

		/** Required */
		S3Uri: string;
		LabelDelimiter?: string;
	}

	/** <p>Describes the dataset input data configuration for a document classifier model.</p> <p>For more information on how the input file is formatted, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html">Preparing training data</a> in the Comprehend Developer Guide. </p> */
	export interface DatasetDocumentClassifierInputDataConfigFormProperties {

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
		LabelDelimiter: FormControl<string | null | undefined>,
	}
	export function CreateDatasetDocumentClassifierInputDataConfigFormGroup() {
		return new FormGroup<DatasetDocumentClassifierInputDataConfigFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LabelDelimiter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the format and location of the input data. You must provide either the <code>Annotations</code> parameter or the <code>EntityList</code> parameter. */
	export interface DatasetEntityRecognizerInputDataConfig {
		Annotations?: DatasetEntityRecognizerAnnotations;

		/** Required */
		Documents: DatasetEntityRecognizerDocuments;
		EntityList?: DatasetEntityRecognizerEntityList;
	}

	/** Specifies the format and location of the input data. You must provide either the <code>Annotations</code> parameter or the <code>EntityList</code> parameter. */
	export interface DatasetEntityRecognizerInputDataConfigFormProperties {
	}
	export function CreateDatasetEntityRecognizerInputDataConfigFormGroup() {
		return new FormGroup<DatasetEntityRecognizerInputDataConfigFormProperties>({
		});

	}


	/** Describes the annotations associated with a entity recognizer. */
	export interface DatasetEntityRecognizerAnnotations {

		/** Required */
		S3Uri: string;
	}

	/** Describes the annotations associated with a entity recognizer. */
	export interface DatasetEntityRecognizerAnnotationsFormProperties {

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
	}
	export function CreateDatasetEntityRecognizerAnnotationsFormGroup() {
		return new FormGroup<DatasetEntityRecognizerAnnotationsFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the documents submitted with a dataset for an entity recognizer model. */
	export interface DatasetEntityRecognizerDocuments {

		/** Required */
		S3Uri: string;
		InputFormat?: InputFormat;
	}

	/** Describes the documents submitted with a dataset for an entity recognizer model. */
	export interface DatasetEntityRecognizerDocumentsFormProperties {

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
		InputFormat: FormControl<InputFormat | null | undefined>,
	}
	export function CreateDatasetEntityRecognizerDocumentsFormGroup() {
		return new FormGroup<DatasetEntityRecognizerDocumentsFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InputFormat: new FormControl<InputFormat | null | undefined>(undefined),
		});

	}

	export enum InputFormat { ONE_DOC_PER_FILE = 0, ONE_DOC_PER_LINE = 1 }


	/** <p>Describes the dataset entity list for an entity recognizer model.</p> <p>For more information on how the input file is formatted, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-training-data-cer.html">Preparing training data</a> in the Comprehend Developer Guide. </p> */
	export interface DatasetEntityRecognizerEntityList {

		/** Required */
		S3Uri: string;
	}

	/** <p>Describes the dataset entity list for an entity recognizer model.</p> <p>For more information on how the input file is formatted, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-training-data-cer.html">Preparing training data</a> in the Comprehend Developer Guide. </p> */
	export interface DatasetEntityRecognizerEntityListFormProperties {

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
	}
	export function CreateDatasetEntityRecognizerEntityListFormGroup() {
		return new FormGroup<DatasetEntityRecognizerEntityListFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with the key-value pair ‘Department’:’Sales’ might be added to a resource to indicate its use by a particular department.  */
	export interface Tag {

		/** Required */
		Key: string;
		Value?: string;
	}

	/** A key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with the key-value pair ‘Department’:’Sales’ might be added to a resource to indicate its use by a particular department.  */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
		});

	}

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface ResourceLimitExceededException {
	}
	export interface ResourceLimitExceededExceptionFormProperties {
	}
	export function CreateResourceLimitExceededExceptionFormGroup() {
		return new FormGroup<ResourceLimitExceededExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface CreateDocumentClassifierResponse {
		DocumentClassifierArn?: string;
	}
	export interface CreateDocumentClassifierResponseFormProperties {
		DocumentClassifierArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDocumentClassifierResponseFormGroup() {
		return new FormGroup<CreateDocumentClassifierResponseFormProperties>({
			DocumentClassifierArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDocumentClassifierRequest {

		/** Required */
		DocumentClassifierName: string;
		VersionName?: string;

		/** Required */
		DataAccessRoleArn: string;
		Tags?: Array<Tag>;

		/** Required */
		InputDataConfig: DocumentClassifierInputDataConfig;
		OutputDataConfig?: DocumentClassifierOutputDataConfig;
		ClientRequestToken?: string;

		/** Required */
		LanguageCode: LanguageCode;
		VolumeKmsKeyId?: string;
		VpcConfig?: VpcConfig;
		Mode?: DocumentClassifierMode;
		ModelKmsKeyId?: string;
		ModelPolicy?: string;
	}
	export interface CreateDocumentClassifierRequestFormProperties {

		/** Required */
		DocumentClassifierName: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
		Mode: FormControl<DocumentClassifierMode | null | undefined>,
		ModelKmsKeyId: FormControl<string | null | undefined>,
		ModelPolicy: FormControl<string | null | undefined>,
	}
	export function CreateCreateDocumentClassifierRequestFormGroup() {
		return new FormGroup<CreateDocumentClassifierRequestFormProperties>({
			DocumentClassifierName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VersionName: new FormControl<string | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
			Mode: new FormControl<DocumentClassifierMode | null | undefined>(undefined),
			ModelKmsKeyId: new FormControl<string | null | undefined>(undefined),
			ModelPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>The input properties for training a document classifier. </p> <p>For more information on how the input file is formatted, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html">Preparing training data</a> in the Comprehend Developer Guide. </p> */
	export interface DocumentClassifierInputDataConfig {
		DataFormat?: DatasetDataFormat;
		S3Uri?: string;
		TestS3Uri?: string;
		LabelDelimiter?: string;
		AugmentedManifests?: Array<AugmentedManifestsListItem>;
		DocumentType?: AugmentedManifestsDocumentTypeFormat;
		Documents?: DocumentClassifierDocuments;

		/** <p>Provides configuration parameters to override the default actions for extracting text from PDF documents and image files. </p> <p> By default, Amazon Comprehend performs the following actions to extract text from files, based on the input file type: </p> <ul> <li> <p> <b>Word files</b> - Amazon Comprehend parser extracts the text. </p> </li> <li> <p> <b>Digital PDF files</b> - Amazon Comprehend parser extracts the text. </p> </li> <li> <p> <b>Image files and scanned PDF files</b> - Amazon Comprehend uses the Amazon Textract <code>DetectDocumentText</code> API to extract the text. </p> </li> </ul> <p> <code>DocumentReaderConfig</code> does not apply to plain text files or Word files.</p> <p> For image files and PDF documents, you can override these default actions using the fields listed below. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-set-textract-options.html"> Setting text extraction options</a> in the Comprehend Developer Guide. </p> */
		DocumentReaderConfig?: DocumentReaderConfig;
	}

	/** <p>The input properties for training a document classifier. </p> <p>For more information on how the input file is formatted, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/prep-classifier-data.html">Preparing training data</a> in the Comprehend Developer Guide. </p> */
	export interface DocumentClassifierInputDataConfigFormProperties {
		DataFormat: FormControl<DatasetDataFormat | null | undefined>,
		S3Uri: FormControl<string | null | undefined>,
		TestS3Uri: FormControl<string | null | undefined>,
		LabelDelimiter: FormControl<string | null | undefined>,
		DocumentType: FormControl<AugmentedManifestsDocumentTypeFormat | null | undefined>,
	}
	export function CreateDocumentClassifierInputDataConfigFormGroup() {
		return new FormGroup<DocumentClassifierInputDataConfigFormProperties>({
			DataFormat: new FormControl<DatasetDataFormat | null | undefined>(undefined),
			S3Uri: new FormControl<string | null | undefined>(undefined),
			TestS3Uri: new FormControl<string | null | undefined>(undefined),
			LabelDelimiter: new FormControl<string | null | undefined>(undefined),
			DocumentType: new FormControl<AugmentedManifestsDocumentTypeFormat | null | undefined>(undefined),
		});

	}


	/** An augmented manifest file that provides training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth. */
	export interface AugmentedManifestsListItem {

		/** Required */
		S3Uri: string;
		Split?: DatasetType;

		/** Required */
		AttributeNames: Array<string>;
		AnnotationDataS3Uri?: string;
		SourceDocumentsS3Uri?: string;
		DocumentType?: AugmentedManifestsDocumentTypeFormat;
	}

	/** An augmented manifest file that provides training data for your custom model. An augmented manifest file is a labeled dataset that is produced by Amazon SageMaker Ground Truth. */
	export interface AugmentedManifestsListItemFormProperties {

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
		Split: FormControl<DatasetType | null | undefined>,
		AnnotationDataS3Uri: FormControl<string | null | undefined>,
		SourceDocumentsS3Uri: FormControl<string | null | undefined>,
		DocumentType: FormControl<AugmentedManifestsDocumentTypeFormat | null | undefined>,
	}
	export function CreateAugmentedManifestsListItemFormGroup() {
		return new FormGroup<AugmentedManifestsListItemFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Split: new FormControl<DatasetType | null | undefined>(undefined),
			AnnotationDataS3Uri: new FormControl<string | null | undefined>(undefined),
			SourceDocumentsS3Uri: new FormControl<string | null | undefined>(undefined),
			DocumentType: new FormControl<AugmentedManifestsDocumentTypeFormat | null | undefined>(undefined),
		});

	}


	/** The location of the training documents. This parameter is required in a request to create a native classifier model. */
	export interface DocumentClassifierDocuments {

		/** Required */
		S3Uri: string;
		TestS3Uri?: string;
	}

	/** The location of the training documents. This parameter is required in a request to create a native classifier model. */
	export interface DocumentClassifierDocumentsFormProperties {

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
		TestS3Uri: FormControl<string | null | undefined>,
	}
	export function CreateDocumentClassifierDocumentsFormGroup() {
		return new FormGroup<DocumentClassifierDocumentsFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TestS3Uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provide the location for output data from a custom classifier job. This field is mandatory if you are training a native classifier model. */
	export interface DocumentClassifierOutputDataConfig {
		S3Uri?: string;
		KmsKeyId?: string;
		FlywheelStatsS3Prefix?: string;
	}

	/** Provide the location for output data from a custom classifier job. This field is mandatory if you are training a native classifier model. */
	export interface DocumentClassifierOutputDataConfigFormProperties {
		S3Uri: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
		FlywheelStatsS3Prefix: FormControl<string | null | undefined>,
	}
	export function CreateDocumentClassifierOutputDataConfigFormGroup() {
		return new FormGroup<DocumentClassifierOutputDataConfigFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
			FlywheelStatsS3Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>.  */
	export interface VpcConfig {

		/** Required */
		SecurityGroupIds: Array<string>;

		/** Required */
		Subnets: Array<string>;
	}

	/**  Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>.  */
	export interface VpcConfigFormProperties {
	}
	export function CreateVpcConfigFormGroup() {
		return new FormGroup<VpcConfigFormProperties>({
		});

	}

	export enum DocumentClassifierMode { MULTI_CLASS = 0, MULTI_LABEL = 1 }

	export interface KmsKeyValidationException {
	}
	export interface KmsKeyValidationExceptionFormProperties {
	}
	export function CreateKmsKeyValidationExceptionFormGroup() {
		return new FormGroup<KmsKeyValidationExceptionFormProperties>({
		});

	}

	export interface CreateEndpointResponse {
		EndpointArn?: string;
		ModelArn?: string;
	}
	export interface CreateEndpointResponseFormProperties {
		EndpointArn: FormControl<string | null | undefined>,
		ModelArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateEndpointResponseFormGroup() {
		return new FormGroup<CreateEndpointResponseFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined),
			ModelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEndpointRequest {

		/** Required */
		EndpointName: string;
		ModelArn?: string;

		/** Required */
		DesiredInferenceUnits: number;
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
		DataAccessRoleArn?: string;
		FlywheelArn?: string;
	}
	export interface CreateEndpointRequestFormProperties {

		/** Required */
		EndpointName: FormControl<string | null | undefined>,
		ModelArn: FormControl<string | null | undefined>,

		/** Required */
		DesiredInferenceUnits: FormControl<number | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		FlywheelArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateEndpointRequestFormGroup() {
		return new FormGroup<CreateEndpointRequestFormProperties>({
			EndpointName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ModelArn: new FormControl<string | null | undefined>(undefined),
			DesiredInferenceUnits: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			FlywheelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEntityRecognizerResponse {
		EntityRecognizerArn?: string;
	}
	export interface CreateEntityRecognizerResponseFormProperties {
		EntityRecognizerArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateEntityRecognizerResponseFormGroup() {
		return new FormGroup<CreateEntityRecognizerResponseFormProperties>({
			EntityRecognizerArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEntityRecognizerRequest {

		/** Required */
		RecognizerName: string;
		VersionName?: string;

		/** Required */
		DataAccessRoleArn: string;
		Tags?: Array<Tag>;

		/** Required */
		InputDataConfig: EntityRecognizerInputDataConfig;
		ClientRequestToken?: string;

		/** Required */
		LanguageCode: LanguageCode;
		VolumeKmsKeyId?: string;
		VpcConfig?: VpcConfig;
		ModelKmsKeyId?: string;
		ModelPolicy?: string;
	}
	export interface CreateEntityRecognizerRequestFormProperties {

		/** Required */
		RecognizerName: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
		ModelKmsKeyId: FormControl<string | null | undefined>,
		ModelPolicy: FormControl<string | null | undefined>,
	}
	export function CreateCreateEntityRecognizerRequestFormGroup() {
		return new FormGroup<CreateEntityRecognizerRequestFormProperties>({
			RecognizerName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VersionName: new FormControl<string | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
			ModelKmsKeyId: new FormControl<string | null | undefined>(undefined),
			ModelPolicy: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the format and location of the input data. */
	export interface EntityRecognizerInputDataConfig {
		DataFormat?: DatasetDataFormat;

		/** Required */
		EntityTypes: Array<EntityTypesListItem>;
		Documents?: EntityRecognizerDocuments;
		Annotations?: EntityRecognizerAnnotations;
		EntityList?: EntityRecognizerEntityList;
		AugmentedManifests?: Array<AugmentedManifestsListItem>;
	}

	/** Specifies the format and location of the input data. */
	export interface EntityRecognizerInputDataConfigFormProperties {
		DataFormat: FormControl<DatasetDataFormat | null | undefined>,
	}
	export function CreateEntityRecognizerInputDataConfigFormGroup() {
		return new FormGroup<EntityRecognizerInputDataConfigFormProperties>({
			DataFormat: new FormControl<DatasetDataFormat | null | undefined>(undefined),
		});

	}


	/** An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom entity recognizer. */
	export interface EntityTypesListItem {

		/** Required */
		Type: string;
	}

	/** An entity type within a labeled training dataset that Amazon Comprehend uses to train a custom entity recognizer. */
	export interface EntityTypesListItemFormProperties {

		/** Required */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateEntityTypesListItemFormGroup() {
		return new FormGroup<EntityTypesListItemFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the training documents submitted with an entity recognizer. */
	export interface EntityRecognizerDocuments {

		/** Required */
		S3Uri: string;
		TestS3Uri?: string;
		InputFormat?: InputFormat;
	}

	/** Describes the training documents submitted with an entity recognizer. */
	export interface EntityRecognizerDocumentsFormProperties {

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
		TestS3Uri: FormControl<string | null | undefined>,
		InputFormat: FormControl<InputFormat | null | undefined>,
	}
	export function CreateEntityRecognizerDocumentsFormGroup() {
		return new FormGroup<EntityRecognizerDocumentsFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TestS3Uri: new FormControl<string | null | undefined>(undefined),
			InputFormat: new FormControl<InputFormat | null | undefined>(undefined),
		});

	}


	/** Describes the annotations associated with a entity recognizer. */
	export interface EntityRecognizerAnnotations {

		/** Required */
		S3Uri: string;
		TestS3Uri?: string;
	}

	/** Describes the annotations associated with a entity recognizer. */
	export interface EntityRecognizerAnnotationsFormProperties {

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
		TestS3Uri: FormControl<string | null | undefined>,
	}
	export function CreateEntityRecognizerAnnotationsFormGroup() {
		return new FormGroup<EntityRecognizerAnnotationsFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TestS3Uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the entity list submitted with an entity recognizer. */
	export interface EntityRecognizerEntityList {

		/** Required */
		S3Uri: string;
	}

	/** Describes the entity list submitted with an entity recognizer. */
	export interface EntityRecognizerEntityListFormProperties {

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
	}
	export function CreateEntityRecognizerEntityListFormGroup() {
		return new FormGroup<EntityRecognizerEntityListFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateFlywheelResponse {
		FlywheelArn?: string;
		ActiveModelArn?: string;
	}
	export interface CreateFlywheelResponseFormProperties {
		FlywheelArn: FormControl<string | null | undefined>,
		ActiveModelArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateFlywheelResponseFormGroup() {
		return new FormGroup<CreateFlywheelResponseFormProperties>({
			FlywheelArn: new FormControl<string | null | undefined>(undefined),
			ActiveModelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFlywheelRequest {

		/** Required */
		FlywheelName: string;
		ActiveModelArn?: string;

		/** Required */
		DataAccessRoleArn: string;
		TaskConfig?: TaskConfig;
		ModelType?: ModelType;

		/** Required */
		DataLakeS3Uri: string;
		DataSecurityConfig?: DataSecurityConfig;
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
	}
	export interface CreateFlywheelRequestFormProperties {

		/** Required */
		FlywheelName: FormControl<string | null | undefined>,
		ActiveModelArn: FormControl<string | null | undefined>,

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,
		ModelType: FormControl<ModelType | null | undefined>,

		/** Required */
		DataLakeS3Uri: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateFlywheelRequestFormGroup() {
		return new FormGroup<CreateFlywheelRequestFormProperties>({
			FlywheelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ActiveModelArn: new FormControl<string | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ModelType: new FormControl<ModelType | null | undefined>(undefined),
			DataLakeS3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration about the custom classifier associated with the flywheel. */
	export interface TaskConfig {

		/** Required */
		LanguageCode: LanguageCode;
		DocumentClassificationConfig?: DocumentClassificationConfig;
		EntityRecognitionConfig?: EntityRecognitionConfig;
	}

	/** Configuration about the custom classifier associated with the flywheel. */
	export interface TaskConfigFormProperties {

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
	}
	export function CreateTaskConfigFormGroup() {
		return new FormGroup<TaskConfigFormProperties>({
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration required for a custom classification model. */
	export interface DocumentClassificationConfig {

		/** Required */
		Mode: DocumentClassifierMode;
		Labels?: Array<string>;
	}

	/** Configuration required for a custom classification model. */
	export interface DocumentClassificationConfigFormProperties {

		/** Required */
		Mode: FormControl<DocumentClassifierMode | null | undefined>,
	}
	export function CreateDocumentClassificationConfigFormGroup() {
		return new FormGroup<DocumentClassificationConfigFormProperties>({
			Mode: new FormControl<DocumentClassifierMode | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration required for an entity recognition model. */
	export interface EntityRecognitionConfig {

		/** Required */
		EntityTypes: Array<EntityTypesListItem>;
	}

	/** Configuration required for an entity recognition model. */
	export interface EntityRecognitionConfigFormProperties {
	}
	export function CreateEntityRecognitionConfigFormGroup() {
		return new FormGroup<EntityRecognitionConfigFormProperties>({
		});

	}

	export enum ModelType { DOCUMENT_CLASSIFIER = 0, ENTITY_RECOGNIZER = 1 }


	/** Data security configuration. */
	export interface DataSecurityConfig {
		ModelKmsKeyId?: string;
		VolumeKmsKeyId?: string;
		DataLakeKmsKeyId?: string;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
	}

	/** Data security configuration. */
	export interface DataSecurityConfigFormProperties {
		ModelKmsKeyId: FormControl<string | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
		DataLakeKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateDataSecurityConfigFormGroup() {
		return new FormGroup<DataSecurityConfigFormProperties>({
			ModelKmsKeyId: new FormControl<string | null | undefined>(undefined),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
			DataLakeKmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDocumentClassifierResponse {
	}
	export interface DeleteDocumentClassifierResponseFormProperties {
	}
	export function CreateDeleteDocumentClassifierResponseFormGroup() {
		return new FormGroup<DeleteDocumentClassifierResponseFormProperties>({
		});

	}

	export interface DeleteDocumentClassifierRequest {

		/** Required */
		DocumentClassifierArn: string;
	}
	export interface DeleteDocumentClassifierRequestFormProperties {

		/** Required */
		DocumentClassifierArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDocumentClassifierRequestFormGroup() {
		return new FormGroup<DeleteDocumentClassifierRequestFormProperties>({
			DocumentClassifierArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEndpointResponse {
	}
	export interface DeleteEndpointResponseFormProperties {
	}
	export function CreateDeleteEndpointResponseFormGroup() {
		return new FormGroup<DeleteEndpointResponseFormProperties>({
		});

	}

	export interface DeleteEndpointRequest {

		/** Required */
		EndpointArn: string;
	}
	export interface DeleteEndpointRequestFormProperties {

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEndpointRequestFormGroup() {
		return new FormGroup<DeleteEndpointRequestFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteEntityRecognizerResponse {
	}
	export interface DeleteEntityRecognizerResponseFormProperties {
	}
	export function CreateDeleteEntityRecognizerResponseFormGroup() {
		return new FormGroup<DeleteEntityRecognizerResponseFormProperties>({
		});

	}

	export interface DeleteEntityRecognizerRequest {

		/** Required */
		EntityRecognizerArn: string;
	}
	export interface DeleteEntityRecognizerRequestFormProperties {

		/** Required */
		EntityRecognizerArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEntityRecognizerRequestFormGroup() {
		return new FormGroup<DeleteEntityRecognizerRequestFormProperties>({
			EntityRecognizerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteFlywheelResponse {
	}
	export interface DeleteFlywheelResponseFormProperties {
	}
	export function CreateDeleteFlywheelResponseFormGroup() {
		return new FormGroup<DeleteFlywheelResponseFormProperties>({
		});

	}

	export interface DeleteFlywheelRequest {

		/** Required */
		FlywheelArn: string;
	}
	export interface DeleteFlywheelRequestFormProperties {

		/** Required */
		FlywheelArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteFlywheelRequestFormGroup() {
		return new FormGroup<DeleteFlywheelRequestFormProperties>({
			FlywheelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteResourcePolicyResponse {
	}
	export interface DeleteResourcePolicyResponseFormProperties {
	}
	export function CreateDeleteResourcePolicyResponseFormGroup() {
		return new FormGroup<DeleteResourcePolicyResponseFormProperties>({
		});

	}

	export interface DeleteResourcePolicyRequest {

		/** Required */
		ResourceArn: string;
		PolicyRevisionId?: string;
	}
	export interface DeleteResourcePolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		PolicyRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePolicyRequestFormGroup() {
		return new FormGroup<DeleteResourcePolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyRevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDatasetResponse {
		DatasetProperties?: DatasetProperties;
	}
	export interface DescribeDatasetResponseFormProperties {
	}
	export function CreateDescribeDatasetResponseFormGroup() {
		return new FormGroup<DescribeDatasetResponseFormProperties>({
		});

	}


	/** Properties associated with the dataset. */
	export interface DatasetProperties {
		DatasetArn?: string;
		DatasetName?: string;
		DatasetType?: DatasetType;
		DatasetS3Uri?: string;
		Description?: string;
		Status?: DatasetStatus;
		Message?: string;
		NumberOfDocuments?: number | null;
		CreationTime?: Date;
		EndTime?: Date;
	}

	/** Properties associated with the dataset. */
	export interface DatasetPropertiesFormProperties {
		DatasetArn: FormControl<string | null | undefined>,
		DatasetName: FormControl<string | null | undefined>,
		DatasetType: FormControl<DatasetType | null | undefined>,
		DatasetS3Uri: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		Status: FormControl<DatasetStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
		NumberOfDocuments: FormControl<number | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateDatasetPropertiesFormGroup() {
		return new FormGroup<DatasetPropertiesFormProperties>({
			DatasetArn: new FormControl<string | null | undefined>(undefined),
			DatasetName: new FormControl<string | null | undefined>(undefined),
			DatasetType: new FormControl<DatasetType | null | undefined>(undefined),
			DatasetS3Uri: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<DatasetStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			NumberOfDocuments: new FormControl<number | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DatasetStatus { CREATING = 0, COMPLETED = 1, FAILED = 2 }

	export interface DescribeDatasetRequest {

		/** Required */
		DatasetArn: string;
	}
	export interface DescribeDatasetRequestFormProperties {

		/** Required */
		DatasetArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDatasetRequestFormGroup() {
		return new FormGroup<DescribeDatasetRequestFormProperties>({
			DatasetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDocumentClassificationJobResponse {
		DocumentClassificationJobProperties?: DocumentClassificationJobProperties;
	}
	export interface DescribeDocumentClassificationJobResponseFormProperties {
	}
	export function CreateDescribeDocumentClassificationJobResponseFormGroup() {
		return new FormGroup<DescribeDocumentClassificationJobResponseFormProperties>({
		});

	}


	/** Provides information about a document classification job. */
	export interface DocumentClassificationJobProperties {
		JobId?: string;
		JobArn?: string;
		JobName?: string;
		JobStatus?: JobStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;
		DocumentClassifierArn?: string;
		InputDataConfig?: InputDataConfig;
		OutputDataConfig?: OutputDataConfig;
		DataAccessRoleArn?: string;
		VolumeKmsKeyId?: string;
		VpcConfig?: VpcConfig;
		FlywheelArn?: string;
	}

	/** Provides information about a document classification job. */
	export interface DocumentClassificationJobPropertiesFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
		SubmitTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		DocumentClassifierArn: FormControl<string | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
		FlywheelArn: FormControl<string | null | undefined>,
	}
	export function CreateDocumentClassificationJobPropertiesFormGroup() {
		return new FormGroup<DocumentClassificationJobPropertiesFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobArn: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			SubmitTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			DocumentClassifierArn: new FormControl<string | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
			FlywheelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JobStatus { SUBMITTED = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }


	/** The input properties for an inference job. The document reader config field applies only to non-text inputs for custom analysis. */
	export interface InputDataConfig {

		/** Required */
		S3Uri: string;
		InputFormat?: InputFormat;
		DocumentReaderConfig?: DocumentReaderConfig;
	}

	/** The input properties for an inference job. The document reader config field applies only to non-text inputs for custom analysis. */
	export interface InputDataConfigFormProperties {

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
		InputFormat: FormControl<InputFormat | null | undefined>,
	}
	export function CreateInputDataConfigFormGroup() {
		return new FormGroup<InputDataConfigFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InputFormat: new FormControl<InputFormat | null | undefined>(undefined),
		});

	}


	/** <p>Provides configuration parameters for the output of inference jobs.</p> <p/> */
	export interface OutputDataConfig {

		/** Required */
		S3Uri: string;
		KmsKeyId?: string;
	}

	/** <p>Provides configuration parameters for the output of inference jobs.</p> <p/> */
	export interface OutputDataConfigFormProperties {

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateOutputDataConfigFormGroup() {
		return new FormGroup<OutputDataConfigFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDocumentClassificationJobRequest {

		/** Required */
		JobId: string;
	}
	export interface DescribeDocumentClassificationJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDocumentClassificationJobRequestFormGroup() {
		return new FormGroup<DescribeDocumentClassificationJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface JobNotFoundException {
	}
	export interface JobNotFoundExceptionFormProperties {
	}
	export function CreateJobNotFoundExceptionFormGroup() {
		return new FormGroup<JobNotFoundExceptionFormProperties>({
		});

	}

	export interface DescribeDocumentClassifierResponse {
		DocumentClassifierProperties?: DocumentClassifierProperties;
	}
	export interface DescribeDocumentClassifierResponseFormProperties {
	}
	export function CreateDescribeDocumentClassifierResponseFormGroup() {
		return new FormGroup<DescribeDocumentClassifierResponseFormProperties>({
		});

	}


	/** Provides information about a document classifier. */
	export interface DocumentClassifierProperties {
		DocumentClassifierArn?: string;
		LanguageCode?: LanguageCode;
		Status?: ModelStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;
		TrainingStartTime?: Date;
		TrainingEndTime?: Date;
		InputDataConfig?: DocumentClassifierInputDataConfig;
		OutputDataConfig?: DocumentClassifierOutputDataConfig;
		ClassifierMetadata?: ClassifierMetadata;
		DataAccessRoleArn?: string;
		VolumeKmsKeyId?: string;
		VpcConfig?: VpcConfig;
		Mode?: DocumentClassifierMode;
		ModelKmsKeyId?: string;
		VersionName?: string;
		SourceModelArn?: string;
		FlywheelArn?: string;
	}

	/** Provides information about a document classifier. */
	export interface DocumentClassifierPropertiesFormProperties {
		DocumentClassifierArn: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		Status: FormControl<ModelStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
		SubmitTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		TrainingStartTime: FormControl<Date | null | undefined>,
		TrainingEndTime: FormControl<Date | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
		Mode: FormControl<DocumentClassifierMode | null | undefined>,
		ModelKmsKeyId: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
		SourceModelArn: FormControl<string | null | undefined>,
		FlywheelArn: FormControl<string | null | undefined>,
	}
	export function CreateDocumentClassifierPropertiesFormGroup() {
		return new FormGroup<DocumentClassifierPropertiesFormProperties>({
			DocumentClassifierArn: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			Status: new FormControl<ModelStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			SubmitTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			TrainingStartTime: new FormControl<Date | null | undefined>(undefined),
			TrainingEndTime: new FormControl<Date | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
			Mode: new FormControl<DocumentClassifierMode | null | undefined>(undefined),
			ModelKmsKeyId: new FormControl<string | null | undefined>(undefined),
			VersionName: new FormControl<string | null | undefined>(undefined),
			SourceModelArn: new FormControl<string | null | undefined>(undefined),
			FlywheelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ModelStatus { SUBMITTED = 0, TRAINING = 1, DELETING = 2, STOP_REQUESTED = 3, STOPPED = 4, IN_ERROR = 5, TRAINED = 6, TRAINED_WITH_WARNING = 7 }


	/** Provides information about a document classifier. */
	export interface ClassifierMetadata {
		NumberOfLabels?: number | null;
		NumberOfTrainedDocuments?: number | null;
		NumberOfTestDocuments?: number | null;
		EvaluationMetrics?: ClassifierEvaluationMetrics;
	}

	/** Provides information about a document classifier. */
	export interface ClassifierMetadataFormProperties {
		NumberOfLabels: FormControl<number | null | undefined>,
		NumberOfTrainedDocuments: FormControl<number | null | undefined>,
		NumberOfTestDocuments: FormControl<number | null | undefined>,
	}
	export function CreateClassifierMetadataFormGroup() {
		return new FormGroup<ClassifierMetadataFormProperties>({
			NumberOfLabels: new FormControl<number | null | undefined>(undefined),
			NumberOfTrainedDocuments: new FormControl<number | null | undefined>(undefined),
			NumberOfTestDocuments: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes the result metrics for the test data associated with an documentation classifier. */
	export interface ClassifierEvaluationMetrics {
		Accuracy?: number | null;
		Precision?: number | null;
		Recall?: number | null;
		F1Score?: number | null;
		MicroPrecision?: number | null;
		MicroRecall?: number | null;
		MicroF1Score?: number | null;
		HammingLoss?: number | null;
	}

	/** Describes the result metrics for the test data associated with an documentation classifier. */
	export interface ClassifierEvaluationMetricsFormProperties {
		Accuracy: FormControl<number | null | undefined>,
		Precision: FormControl<number | null | undefined>,
		Recall: FormControl<number | null | undefined>,
		F1Score: FormControl<number | null | undefined>,
		MicroPrecision: FormControl<number | null | undefined>,
		MicroRecall: FormControl<number | null | undefined>,
		MicroF1Score: FormControl<number | null | undefined>,
		HammingLoss: FormControl<number | null | undefined>,
	}
	export function CreateClassifierEvaluationMetricsFormGroup() {
		return new FormGroup<ClassifierEvaluationMetricsFormProperties>({
			Accuracy: new FormControl<number | null | undefined>(undefined),
			Precision: new FormControl<number | null | undefined>(undefined),
			Recall: new FormControl<number | null | undefined>(undefined),
			F1Score: new FormControl<number | null | undefined>(undefined),
			MicroPrecision: new FormControl<number | null | undefined>(undefined),
			MicroRecall: new FormControl<number | null | undefined>(undefined),
			MicroF1Score: new FormControl<number | null | undefined>(undefined),
			HammingLoss: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeDocumentClassifierRequest {

		/** Required */
		DocumentClassifierArn: string;
	}
	export interface DescribeDocumentClassifierRequestFormProperties {

		/** Required */
		DocumentClassifierArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDocumentClassifierRequestFormGroup() {
		return new FormGroup<DescribeDocumentClassifierRequestFormProperties>({
			DocumentClassifierArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDominantLanguageDetectionJobResponse {
		DominantLanguageDetectionJobProperties?: DominantLanguageDetectionJobProperties;
	}
	export interface DescribeDominantLanguageDetectionJobResponseFormProperties {
	}
	export function CreateDescribeDominantLanguageDetectionJobResponseFormGroup() {
		return new FormGroup<DescribeDominantLanguageDetectionJobResponseFormProperties>({
		});

	}


	/** Provides information about a dominant language detection job. */
	export interface DominantLanguageDetectionJobProperties {
		JobId?: string;
		JobArn?: string;
		JobName?: string;
		JobStatus?: JobStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;
		InputDataConfig?: InputDataConfig;
		OutputDataConfig?: OutputDataConfig;
		DataAccessRoleArn?: string;
		VolumeKmsKeyId?: string;
		VpcConfig?: VpcConfig;
	}

	/** Provides information about a dominant language detection job. */
	export interface DominantLanguageDetectionJobPropertiesFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
		SubmitTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateDominantLanguageDetectionJobPropertiesFormGroup() {
		return new FormGroup<DominantLanguageDetectionJobPropertiesFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobArn: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			SubmitTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDominantLanguageDetectionJobRequest {

		/** Required */
		JobId: string;
	}
	export interface DescribeDominantLanguageDetectionJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDominantLanguageDetectionJobRequestFormGroup() {
		return new FormGroup<DescribeDominantLanguageDetectionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeEndpointResponse {
		EndpointProperties?: EndpointProperties;
	}
	export interface DescribeEndpointResponseFormProperties {
	}
	export function CreateDescribeEndpointResponseFormGroup() {
		return new FormGroup<DescribeEndpointResponseFormProperties>({
		});

	}


	/** Specifies information about the specified endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>. */
	export interface EndpointProperties {
		EndpointArn?: string;
		Status?: EndpointStatus;
		Message?: string;
		ModelArn?: string;
		DesiredModelArn?: string;
		DesiredInferenceUnits?: number | null;
		CurrentInferenceUnits?: number | null;
		CreationTime?: Date;
		LastModifiedTime?: Date;
		DataAccessRoleArn?: string;
		DesiredDataAccessRoleArn?: string;
		FlywheelArn?: string;
	}

	/** Specifies information about the specified endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>. */
	export interface EndpointPropertiesFormProperties {
		EndpointArn: FormControl<string | null | undefined>,
		Status: FormControl<EndpointStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
		ModelArn: FormControl<string | null | undefined>,
		DesiredModelArn: FormControl<string | null | undefined>,
		DesiredInferenceUnits: FormControl<number | null | undefined>,
		CurrentInferenceUnits: FormControl<number | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		DesiredDataAccessRoleArn: FormControl<string | null | undefined>,
		FlywheelArn: FormControl<string | null | undefined>,
	}
	export function CreateEndpointPropertiesFormGroup() {
		return new FormGroup<EndpointPropertiesFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EndpointStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			ModelArn: new FormControl<string | null | undefined>(undefined),
			DesiredModelArn: new FormControl<string | null | undefined>(undefined),
			DesiredInferenceUnits: new FormControl<number | null | undefined>(undefined),
			CurrentInferenceUnits: new FormControl<number | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			DesiredDataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			FlywheelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EndpointStatus { CREATING = 0, DELETING = 1, FAILED = 2, IN_SERVICE = 3, UPDATING = 4 }

	export interface DescribeEndpointRequest {

		/** Required */
		EndpointArn: string;
	}
	export interface DescribeEndpointRequestFormProperties {

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEndpointRequestFormGroup() {
		return new FormGroup<DescribeEndpointRequestFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeEntitiesDetectionJobResponse {
		EntitiesDetectionJobProperties?: EntitiesDetectionJobProperties;
	}
	export interface DescribeEntitiesDetectionJobResponseFormProperties {
	}
	export function CreateDescribeEntitiesDetectionJobResponseFormGroup() {
		return new FormGroup<DescribeEntitiesDetectionJobResponseFormProperties>({
		});

	}


	/** Provides information about an entities detection job. */
	export interface EntitiesDetectionJobProperties {
		JobId?: string;
		JobArn?: string;
		JobName?: string;
		JobStatus?: JobStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;
		EntityRecognizerArn?: string;
		InputDataConfig?: InputDataConfig;
		OutputDataConfig?: OutputDataConfig;
		LanguageCode?: LanguageCode;
		DataAccessRoleArn?: string;
		VolumeKmsKeyId?: string;
		VpcConfig?: VpcConfig;
		FlywheelArn?: string;
	}

	/** Provides information about an entities detection job. */
	export interface EntitiesDetectionJobPropertiesFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
		SubmitTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		EntityRecognizerArn: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
		FlywheelArn: FormControl<string | null | undefined>,
	}
	export function CreateEntitiesDetectionJobPropertiesFormGroup() {
		return new FormGroup<EntitiesDetectionJobPropertiesFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobArn: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			SubmitTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			EntityRecognizerArn: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
			FlywheelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEntitiesDetectionJobRequest {

		/** Required */
		JobId: string;
	}
	export interface DescribeEntitiesDetectionJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEntitiesDetectionJobRequestFormGroup() {
		return new FormGroup<DescribeEntitiesDetectionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeEntityRecognizerResponse {
		EntityRecognizerProperties?: EntityRecognizerProperties;
	}
	export interface DescribeEntityRecognizerResponseFormProperties {
	}
	export function CreateDescribeEntityRecognizerResponseFormGroup() {
		return new FormGroup<DescribeEntityRecognizerResponseFormProperties>({
		});

	}


	/** Describes information about an entity recognizer. */
	export interface EntityRecognizerProperties {
		EntityRecognizerArn?: string;
		LanguageCode?: LanguageCode;
		Status?: ModelStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;
		TrainingStartTime?: Date;
		TrainingEndTime?: Date;
		InputDataConfig?: EntityRecognizerInputDataConfig;
		RecognizerMetadata?: EntityRecognizerMetadata;
		DataAccessRoleArn?: string;
		VolumeKmsKeyId?: string;
		VpcConfig?: VpcConfig;
		ModelKmsKeyId?: string;
		VersionName?: string;
		SourceModelArn?: string;
		FlywheelArn?: string;
		OutputDataConfig?: EntityRecognizerOutputDataConfig;
	}

	/** Describes information about an entity recognizer. */
	export interface EntityRecognizerPropertiesFormProperties {
		EntityRecognizerArn: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		Status: FormControl<ModelStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
		SubmitTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		TrainingStartTime: FormControl<Date | null | undefined>,
		TrainingEndTime: FormControl<Date | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
		ModelKmsKeyId: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
		SourceModelArn: FormControl<string | null | undefined>,
		FlywheelArn: FormControl<string | null | undefined>,
	}
	export function CreateEntityRecognizerPropertiesFormGroup() {
		return new FormGroup<EntityRecognizerPropertiesFormProperties>({
			EntityRecognizerArn: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			Status: new FormControl<ModelStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			SubmitTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			TrainingStartTime: new FormControl<Date | null | undefined>(undefined),
			TrainingEndTime: new FormControl<Date | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
			ModelKmsKeyId: new FormControl<string | null | undefined>(undefined),
			VersionName: new FormControl<string | null | undefined>(undefined),
			SourceModelArn: new FormControl<string | null | undefined>(undefined),
			FlywheelArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Detailed information about an entity recognizer. */
	export interface EntityRecognizerMetadata {
		NumberOfTrainedDocuments?: number | null;
		NumberOfTestDocuments?: number | null;
		EvaluationMetrics?: EntityRecognizerEvaluationMetrics;
		EntityTypes?: Array<EntityRecognizerMetadataEntityTypesListItem>;
	}

	/** Detailed information about an entity recognizer. */
	export interface EntityRecognizerMetadataFormProperties {
		NumberOfTrainedDocuments: FormControl<number | null | undefined>,
		NumberOfTestDocuments: FormControl<number | null | undefined>,
	}
	export function CreateEntityRecognizerMetadataFormGroup() {
		return new FormGroup<EntityRecognizerMetadataFormProperties>({
			NumberOfTrainedDocuments: new FormControl<number | null | undefined>(undefined),
			NumberOfTestDocuments: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Detailed information about the accuracy of an entity recognizer.  */
	export interface EntityRecognizerEvaluationMetrics {
		Precision?: number | null;
		Recall?: number | null;
		F1Score?: number | null;
	}

	/** Detailed information about the accuracy of an entity recognizer.  */
	export interface EntityRecognizerEvaluationMetricsFormProperties {
		Precision: FormControl<number | null | undefined>,
		Recall: FormControl<number | null | undefined>,
		F1Score: FormControl<number | null | undefined>,
	}
	export function CreateEntityRecognizerEvaluationMetricsFormGroup() {
		return new FormGroup<EntityRecognizerEvaluationMetricsFormProperties>({
			Precision: new FormControl<number | null | undefined>(undefined),
			Recall: new FormControl<number | null | undefined>(undefined),
			F1Score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Individual item from the list of entity types in the metadata of an entity recognizer. */
	export interface EntityRecognizerMetadataEntityTypesListItem {
		Type?: string;
		EvaluationMetrics?: EntityTypesEvaluationMetrics;
		NumberOfTrainMentions?: number | null;
	}

	/** Individual item from the list of entity types in the metadata of an entity recognizer. */
	export interface EntityRecognizerMetadataEntityTypesListItemFormProperties {
		Type: FormControl<string | null | undefined>,
		NumberOfTrainMentions: FormControl<number | null | undefined>,
	}
	export function CreateEntityRecognizerMetadataEntityTypesListItemFormGroup() {
		return new FormGroup<EntityRecognizerMetadataEntityTypesListItemFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined),
			NumberOfTrainMentions: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Detailed information about the accuracy of an entity recognizer for a specific entity type.  */
	export interface EntityTypesEvaluationMetrics {
		Precision?: number | null;
		Recall?: number | null;
		F1Score?: number | null;
	}

	/** Detailed information about the accuracy of an entity recognizer for a specific entity type.  */
	export interface EntityTypesEvaluationMetricsFormProperties {
		Precision: FormControl<number | null | undefined>,
		Recall: FormControl<number | null | undefined>,
		F1Score: FormControl<number | null | undefined>,
	}
	export function CreateEntityTypesEvaluationMetricsFormGroup() {
		return new FormGroup<EntityTypesEvaluationMetricsFormProperties>({
			Precision: new FormControl<number | null | undefined>(undefined),
			Recall: new FormControl<number | null | undefined>(undefined),
			F1Score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Output data configuration. */
	export interface EntityRecognizerOutputDataConfig {
		FlywheelStatsS3Prefix?: string;
	}

	/** Output data configuration. */
	export interface EntityRecognizerOutputDataConfigFormProperties {
		FlywheelStatsS3Prefix: FormControl<string | null | undefined>,
	}
	export function CreateEntityRecognizerOutputDataConfigFormGroup() {
		return new FormGroup<EntityRecognizerOutputDataConfigFormProperties>({
			FlywheelStatsS3Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEntityRecognizerRequest {

		/** Required */
		EntityRecognizerArn: string;
	}
	export interface DescribeEntityRecognizerRequestFormProperties {

		/** Required */
		EntityRecognizerArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEntityRecognizerRequestFormGroup() {
		return new FormGroup<DescribeEntityRecognizerRequestFormProperties>({
			EntityRecognizerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeEventsDetectionJobResponse {
		EventsDetectionJobProperties?: EventsDetectionJobProperties;
	}
	export interface DescribeEventsDetectionJobResponseFormProperties {
	}
	export function CreateDescribeEventsDetectionJobResponseFormGroup() {
		return new FormGroup<DescribeEventsDetectionJobResponseFormProperties>({
		});

	}


	/** Provides information about an events detection job. */
	export interface EventsDetectionJobProperties {
		JobId?: string;
		JobArn?: string;
		JobName?: string;
		JobStatus?: JobStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;
		InputDataConfig?: InputDataConfig;
		OutputDataConfig?: OutputDataConfig;
		LanguageCode?: LanguageCode;
		DataAccessRoleArn?: string;
		TargetEventTypes?: Array<string>;
	}

	/** Provides information about an events detection job. */
	export interface EventsDetectionJobPropertiesFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
		SubmitTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateEventsDetectionJobPropertiesFormGroup() {
		return new FormGroup<EventsDetectionJobPropertiesFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobArn: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			SubmitTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEventsDetectionJobRequest {

		/** Required */
		JobId: string;
	}
	export interface DescribeEventsDetectionJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventsDetectionJobRequestFormGroup() {
		return new FormGroup<DescribeEventsDetectionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeFlywheelResponse {
		FlywheelProperties?: FlywheelProperties;
	}
	export interface DescribeFlywheelResponseFormProperties {
	}
	export function CreateDescribeFlywheelResponseFormGroup() {
		return new FormGroup<DescribeFlywheelResponseFormProperties>({
		});

	}


	/** The flywheel properties. */
	export interface FlywheelProperties {
		FlywheelArn?: string;
		ActiveModelArn?: string;
		DataAccessRoleArn?: string;
		TaskConfig?: TaskConfig;
		DataLakeS3Uri?: string;
		DataSecurityConfig?: DataSecurityConfig;
		Status?: FlywheelStatus;
		ModelType?: ModelType;
		Message?: string;
		CreationTime?: Date;
		LastModifiedTime?: Date;
		LatestFlywheelIteration?: string;
	}

	/** The flywheel properties. */
	export interface FlywheelPropertiesFormProperties {
		FlywheelArn: FormControl<string | null | undefined>,
		ActiveModelArn: FormControl<string | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		DataLakeS3Uri: FormControl<string | null | undefined>,
		Status: FormControl<FlywheelStatus | null | undefined>,
		ModelType: FormControl<ModelType | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		LatestFlywheelIteration: FormControl<string | null | undefined>,
	}
	export function CreateFlywheelPropertiesFormGroup() {
		return new FormGroup<FlywheelPropertiesFormProperties>({
			FlywheelArn: new FormControl<string | null | undefined>(undefined),
			ActiveModelArn: new FormControl<string | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			DataLakeS3Uri: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<FlywheelStatus | null | undefined>(undefined),
			ModelType: new FormControl<ModelType | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			LatestFlywheelIteration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FlywheelStatus { CREATING = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3, FAILED = 4 }

	export interface DescribeFlywheelRequest {

		/** Required */
		FlywheelArn: string;
	}
	export interface DescribeFlywheelRequestFormProperties {

		/** Required */
		FlywheelArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFlywheelRequestFormGroup() {
		return new FormGroup<DescribeFlywheelRequestFormProperties>({
			FlywheelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeFlywheelIterationResponse {
		FlywheelIterationProperties?: FlywheelIterationProperties;
	}
	export interface DescribeFlywheelIterationResponseFormProperties {
	}
	export function CreateDescribeFlywheelIterationResponseFormGroup() {
		return new FormGroup<DescribeFlywheelIterationResponseFormProperties>({
		});

	}


	/** The configuration properties of a flywheel iteration. */
	export interface FlywheelIterationProperties {
		FlywheelArn?: string;
		FlywheelIterationId?: string;
		CreationTime?: Date;
		EndTime?: Date;
		Status?: FlywheelIterationStatus;
		Message?: string;
		EvaluatedModelArn?: string;

		/** The evaluation metrics associated with the evaluated model. */
		EvaluatedModelMetrics?: FlywheelModelEvaluationMetrics;
		TrainedModelArn?: string;
		TrainedModelMetrics?: FlywheelModelEvaluationMetrics;
		EvaluationManifestS3Prefix?: string;
	}

	/** The configuration properties of a flywheel iteration. */
	export interface FlywheelIterationPropertiesFormProperties {
		FlywheelArn: FormControl<string | null | undefined>,
		FlywheelIterationId: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Status: FormControl<FlywheelIterationStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
		EvaluatedModelArn: FormControl<string | null | undefined>,
		TrainedModelArn: FormControl<string | null | undefined>,
		EvaluationManifestS3Prefix: FormControl<string | null | undefined>,
	}
	export function CreateFlywheelIterationPropertiesFormGroup() {
		return new FormGroup<FlywheelIterationPropertiesFormProperties>({
			FlywheelArn: new FormControl<string | null | undefined>(undefined),
			FlywheelIterationId: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<FlywheelIterationStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			EvaluatedModelArn: new FormControl<string | null | undefined>(undefined),
			TrainedModelArn: new FormControl<string | null | undefined>(undefined),
			EvaluationManifestS3Prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FlywheelIterationStatus { TRAINING = 0, EVALUATING = 1, COMPLETED = 2, FAILED = 3, STOP_REQUESTED = 4, STOPPED = 5 }


	/** The evaluation metrics associated with the evaluated model. */
	export interface FlywheelModelEvaluationMetrics {
		AverageF1Score?: number | null;
		AveragePrecision?: number | null;
		AverageRecall?: number | null;
		AverageAccuracy?: number | null;
	}

	/** The evaluation metrics associated with the evaluated model. */
	export interface FlywheelModelEvaluationMetricsFormProperties {
		AverageF1Score: FormControl<number | null | undefined>,
		AveragePrecision: FormControl<number | null | undefined>,
		AverageRecall: FormControl<number | null | undefined>,
		AverageAccuracy: FormControl<number | null | undefined>,
	}
	export function CreateFlywheelModelEvaluationMetricsFormGroup() {
		return new FormGroup<FlywheelModelEvaluationMetricsFormProperties>({
			AverageF1Score: new FormControl<number | null | undefined>(undefined),
			AveragePrecision: new FormControl<number | null | undefined>(undefined),
			AverageRecall: new FormControl<number | null | undefined>(undefined),
			AverageAccuracy: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeFlywheelIterationRequest {

		/** Required */
		FlywheelArn: string;

		/** Required */
		FlywheelIterationId: string;
	}
	export interface DescribeFlywheelIterationRequestFormProperties {

		/** Required */
		FlywheelArn: FormControl<string | null | undefined>,

		/** Required */
		FlywheelIterationId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeFlywheelIterationRequestFormGroup() {
		return new FormGroup<DescribeFlywheelIterationRequestFormProperties>({
			FlywheelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FlywheelIterationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeKeyPhrasesDetectionJobResponse {
		KeyPhrasesDetectionJobProperties?: KeyPhrasesDetectionJobProperties;
	}
	export interface DescribeKeyPhrasesDetectionJobResponseFormProperties {
	}
	export function CreateDescribeKeyPhrasesDetectionJobResponseFormGroup() {
		return new FormGroup<DescribeKeyPhrasesDetectionJobResponseFormProperties>({
		});

	}


	/** Provides information about a key phrases detection job. */
	export interface KeyPhrasesDetectionJobProperties {
		JobId?: string;
		JobArn?: string;
		JobName?: string;
		JobStatus?: JobStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;
		InputDataConfig?: InputDataConfig;
		OutputDataConfig?: OutputDataConfig;
		LanguageCode?: LanguageCode;
		DataAccessRoleArn?: string;
		VolumeKmsKeyId?: string;
		VpcConfig?: VpcConfig;
	}

	/** Provides information about a key phrases detection job. */
	export interface KeyPhrasesDetectionJobPropertiesFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
		SubmitTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateKeyPhrasesDetectionJobPropertiesFormGroup() {
		return new FormGroup<KeyPhrasesDetectionJobPropertiesFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobArn: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			SubmitTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeKeyPhrasesDetectionJobRequest {

		/** Required */
		JobId: string;
	}
	export interface DescribeKeyPhrasesDetectionJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeKeyPhrasesDetectionJobRequestFormGroup() {
		return new FormGroup<DescribeKeyPhrasesDetectionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribePiiEntitiesDetectionJobResponse {

		/** Provides information about a PII entities detection job. */
		PiiEntitiesDetectionJobProperties?: PiiEntitiesDetectionJobProperties;
	}
	export interface DescribePiiEntitiesDetectionJobResponseFormProperties {
	}
	export function CreateDescribePiiEntitiesDetectionJobResponseFormGroup() {
		return new FormGroup<DescribePiiEntitiesDetectionJobResponseFormProperties>({
		});

	}


	/** Provides information about a PII entities detection job. */
	export interface PiiEntitiesDetectionJobProperties {
		JobId?: string;
		JobArn?: string;
		JobName?: string;
		JobStatus?: JobStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;
		InputDataConfig?: InputDataConfig;
		OutputDataConfig?: PiiOutputDataConfig;
		RedactionConfig?: RedactionConfig;
		LanguageCode?: LanguageCode;
		DataAccessRoleArn?: string;
		Mode?: PiiEntitiesDetectionMode;
	}

	/** Provides information about a PII entities detection job. */
	export interface PiiEntitiesDetectionJobPropertiesFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
		SubmitTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		Mode: FormControl<PiiEntitiesDetectionMode | null | undefined>,
	}
	export function CreatePiiEntitiesDetectionJobPropertiesFormGroup() {
		return new FormGroup<PiiEntitiesDetectionJobPropertiesFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobArn: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			SubmitTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			Mode: new FormControl<PiiEntitiesDetectionMode | null | undefined>(undefined),
		});

	}


	/** Provides configuration parameters for the output of PII entity detection jobs. */
	export interface PiiOutputDataConfig {

		/** Required */
		S3Uri: string;
		KmsKeyId?: string;
	}

	/** Provides configuration parameters for the output of PII entity detection jobs. */
	export interface PiiOutputDataConfigFormProperties {

		/** Required */
		S3Uri: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreatePiiOutputDataConfigFormGroup() {
		return new FormGroup<PiiOutputDataConfigFormProperties>({
			S3Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides configuration parameters for PII entity redaction. */
	export interface RedactionConfig {
		PiiEntityTypes?: Array<PiiEntityType>;
		MaskMode?: PiiEntitiesDetectionMaskMode;
		MaskCharacter?: string;
	}

	/** Provides configuration parameters for PII entity redaction. */
	export interface RedactionConfigFormProperties {
		MaskMode: FormControl<PiiEntitiesDetectionMaskMode | null | undefined>,
		MaskCharacter: FormControl<string | null | undefined>,
	}
	export function CreateRedactionConfigFormGroup() {
		return new FormGroup<RedactionConfigFormProperties>({
			MaskMode: new FormControl<PiiEntitiesDetectionMaskMode | null | undefined>(undefined),
			MaskCharacter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PiiEntitiesDetectionMaskMode { MASK = 0, REPLACE_WITH_PII_ENTITY_TYPE = 1 }

	export enum PiiEntitiesDetectionMode { ONLY_REDACTION = 0, ONLY_OFFSETS = 1 }

	export interface DescribePiiEntitiesDetectionJobRequest {

		/** Required */
		JobId: string;
	}
	export interface DescribePiiEntitiesDetectionJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribePiiEntitiesDetectionJobRequestFormGroup() {
		return new FormGroup<DescribePiiEntitiesDetectionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeResourcePolicyResponse {
		ResourcePolicy?: string;
		CreationTime?: Date;
		LastModifiedTime?: Date;
		PolicyRevisionId?: string;
	}
	export interface DescribeResourcePolicyResponseFormProperties {
		ResourcePolicy: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		PolicyRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResourcePolicyResponseFormGroup() {
		return new FormGroup<DescribeResourcePolicyResponseFormProperties>({
			ResourcePolicy: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			PolicyRevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeResourcePolicyRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface DescribeResourcePolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResourcePolicyRequestFormGroup() {
		return new FormGroup<DescribeResourcePolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeSentimentDetectionJobResponse {
		SentimentDetectionJobProperties?: SentimentDetectionJobProperties;
	}
	export interface DescribeSentimentDetectionJobResponseFormProperties {
	}
	export function CreateDescribeSentimentDetectionJobResponseFormGroup() {
		return new FormGroup<DescribeSentimentDetectionJobResponseFormProperties>({
		});

	}


	/** Provides information about a sentiment detection job. */
	export interface SentimentDetectionJobProperties {
		JobId?: string;
		JobArn?: string;
		JobName?: string;
		JobStatus?: JobStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;
		InputDataConfig?: InputDataConfig;
		OutputDataConfig?: OutputDataConfig;
		LanguageCode?: LanguageCode;
		DataAccessRoleArn?: string;
		VolumeKmsKeyId?: string;
		VpcConfig?: VpcConfig;
	}

	/** Provides information about a sentiment detection job. */
	export interface SentimentDetectionJobPropertiesFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
		SubmitTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateSentimentDetectionJobPropertiesFormGroup() {
		return new FormGroup<SentimentDetectionJobPropertiesFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobArn: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			SubmitTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeSentimentDetectionJobRequest {

		/** Required */
		JobId: string;
	}
	export interface DescribeSentimentDetectionJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeSentimentDetectionJobRequestFormGroup() {
		return new FormGroup<DescribeSentimentDetectionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeTargetedSentimentDetectionJobResponse {
		TargetedSentimentDetectionJobProperties?: TargetedSentimentDetectionJobProperties;
	}
	export interface DescribeTargetedSentimentDetectionJobResponseFormProperties {
	}
	export function CreateDescribeTargetedSentimentDetectionJobResponseFormGroup() {
		return new FormGroup<DescribeTargetedSentimentDetectionJobResponseFormProperties>({
		});

	}


	/** Provides information about a targeted sentiment detection job. */
	export interface TargetedSentimentDetectionJobProperties {
		JobId?: string;
		JobArn?: string;
		JobName?: string;
		JobStatus?: JobStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;

		/** The input properties for an inference job. The document reader config field applies only to non-text inputs for custom analysis. */
		InputDataConfig?: InputDataConfig;

		/** <p>Provides configuration parameters for the output of inference jobs.</p> <p/> */
		OutputDataConfig?: OutputDataConfig;
		LanguageCode?: LanguageCode;
		DataAccessRoleArn?: string;
		VolumeKmsKeyId?: string;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
	}

	/** Provides information about a targeted sentiment detection job. */
	export interface TargetedSentimentDetectionJobPropertiesFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
		SubmitTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateTargetedSentimentDetectionJobPropertiesFormGroup() {
		return new FormGroup<TargetedSentimentDetectionJobPropertiesFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobArn: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			SubmitTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeTargetedSentimentDetectionJobRequest {

		/** Required */
		JobId: string;
	}
	export interface DescribeTargetedSentimentDetectionJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTargetedSentimentDetectionJobRequestFormGroup() {
		return new FormGroup<DescribeTargetedSentimentDetectionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeTopicsDetectionJobResponse {
		TopicsDetectionJobProperties?: TopicsDetectionJobProperties;
	}
	export interface DescribeTopicsDetectionJobResponseFormProperties {
	}
	export function CreateDescribeTopicsDetectionJobResponseFormGroup() {
		return new FormGroup<DescribeTopicsDetectionJobResponseFormProperties>({
		});

	}


	/** Provides information about a topic detection job. */
	export interface TopicsDetectionJobProperties {
		JobId?: string;
		JobArn?: string;
		JobName?: string;
		JobStatus?: JobStatus;
		Message?: string;
		SubmitTime?: Date;
		EndTime?: Date;
		InputDataConfig?: InputDataConfig;
		OutputDataConfig?: OutputDataConfig;
		NumberOfTopics?: number | null;
		DataAccessRoleArn?: string;
		VolumeKmsKeyId?: string;
		VpcConfig?: VpcConfig;
	}

	/** Provides information about a topic detection job. */
	export interface TopicsDetectionJobPropertiesFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		Message: FormControl<string | null | undefined>,
		SubmitTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		NumberOfTopics: FormControl<number | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateTopicsDetectionJobPropertiesFormGroup() {
		return new FormGroup<TopicsDetectionJobPropertiesFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobArn: new FormControl<string | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			SubmitTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			NumberOfTopics: new FormControl<number | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeTopicsDetectionJobRequest {

		/** Required */
		JobId: string;
	}
	export interface DescribeTopicsDetectionJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTopicsDetectionJobRequestFormGroup() {
		return new FormGroup<DescribeTopicsDetectionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetectDominantLanguageResponse {
		Languages?: Array<DominantLanguage>;
	}
	export interface DetectDominantLanguageResponseFormProperties {
	}
	export function CreateDetectDominantLanguageResponseFormGroup() {
		return new FormGroup<DetectDominantLanguageResponseFormProperties>({
		});

	}

	export interface DetectDominantLanguageRequest {

		/** Required */
		Text: string;
	}
	export interface DetectDominantLanguageRequestFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,
	}
	export function CreateDetectDominantLanguageRequestFormGroup() {
		return new FormGroup<DetectDominantLanguageRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetectEntitiesResponse {
		Entities?: Array<Entity>;
		DocumentMetadata?: DocumentMetadata;
		DocumentType?: Array<DocumentTypeListItem>;
		Blocks?: Array<Block>;
		Errors?: Array<ErrorsListItem>;
	}
	export interface DetectEntitiesResponseFormProperties {
	}
	export function CreateDetectEntitiesResponseFormGroup() {
		return new FormGroup<DetectEntitiesResponseFormProperties>({
		});

	}


	/** <p>Information about each word or line of text in the input document.</p> <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Block.html">Block</a> in the Amazon Textract API reference.</p> */
	export interface Block {
		Id?: string;
		BlockType?: BlockType;
		Text?: string;
		Page?: number | null;
		Geometry?: Geometry;
		Relationships?: Array<RelationshipsListItem>;
	}

	/** <p>Information about each word or line of text in the input document.</p> <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Block.html">Block</a> in the Amazon Textract API reference.</p> */
	export interface BlockFormProperties {
		Id: FormControl<string | null | undefined>,
		BlockType: FormControl<BlockType | null | undefined>,
		Text: FormControl<string | null | undefined>,
		Page: FormControl<number | null | undefined>,
	}
	export function CreateBlockFormGroup() {
		return new FormGroup<BlockFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			BlockType: new FormControl<BlockType | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
			Page: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BlockType { LINE = 0, WORD = 1 }


	/** <p>Information about the location of items on a document page.</p> <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Geometry.html">Geometry</a> in the Amazon Textract API reference.</p> */
	export interface Geometry {
		BoundingBox?: BoundingBox;
		Polygon?: Array<Point>;
	}

	/** <p>Information about the location of items on a document page.</p> <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Geometry.html">Geometry</a> in the Amazon Textract API reference.</p> */
	export interface GeometryFormProperties {
	}
	export function CreateGeometryFormGroup() {
		return new FormGroup<GeometryFormProperties>({
		});

	}


	/** <p>The bounding box around the detected page or around an element on a document page. The left (x-coordinate) and top (y-coordinate) are coordinates that represent the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_BoundingBox.html">BoundingBox</a> in the Amazon Textract API reference.</p> */
	export interface BoundingBox {
		Height?: number;
		Left?: number;
		Top?: number;
		Width?: number;
	}

	/** <p>The bounding box around the detected page or around an element on a document page. The left (x-coordinate) and top (y-coordinate) are coordinates that represent the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). </p> <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_BoundingBox.html">BoundingBox</a> in the Amazon Textract API reference.</p> */
	export interface BoundingBoxFormProperties {
		Height: FormControl<number | null | undefined>,
		Left: FormControl<number | null | undefined>,
		Top: FormControl<number | null | undefined>,
		Width: FormControl<number | null | undefined>,
	}
	export function CreateBoundingBoxFormGroup() {
		return new FormGroup<BoundingBoxFormProperties>({
			Height: new FormControl<number | null | undefined>(undefined),
			Left: new FormControl<number | null | undefined>(undefined),
			Top: new FormControl<number | null | undefined>(undefined),
			Width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>The X and Y coordinates of a point on a document page.</p> <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Point.html">Point</a> in the Amazon Textract API reference.</p> */
	export interface Point {
		X?: number;
		Y?: number;
	}

	/** <p>The X and Y coordinates of a point on a document page.</p> <p>For additional information, see <a href="https://docs.aws.amazon.com/textract/latest/dg/API_Point.html">Point</a> in the Amazon Textract API reference.</p> */
	export interface PointFormProperties {
		X: FormControl<number | null | undefined>,
		Y: FormControl<number | null | undefined>,
	}
	export function CreatePointFormGroup() {
		return new FormGroup<PointFormProperties>({
			X: new FormControl<number | null | undefined>(undefined),
			Y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List of child blocks for the current block. */
	export interface RelationshipsListItem {
		Ids?: Array<string>;
		Type?: RelationshipType;
	}

	/** List of child blocks for the current block. */
	export interface RelationshipsListItemFormProperties {
		Type: FormControl<RelationshipType | null | undefined>,
	}
	export function CreateRelationshipsListItemFormGroup() {
		return new FormGroup<RelationshipsListItemFormProperties>({
			Type: new FormControl<RelationshipType | null | undefined>(undefined),
		});

	}

	export enum RelationshipType { CHILD = 0 }

	export interface DetectEntitiesRequest {
		Text?: string;
		LanguageCode?: LanguageCode;
		EndpointArn?: string;
		Bytes?: string;
		DocumentReaderConfig?: DocumentReaderConfig;
	}
	export interface DetectEntitiesRequestFormProperties {
		Text: FormControl<string | null | undefined>,
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		EndpointArn: FormControl<string | null | undefined>,
		Bytes: FormControl<string | null | undefined>,
	}
	export function CreateDetectEntitiesRequestFormGroup() {
		return new FormGroup<DetectEntitiesRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined),
			EndpointArn: new FormControl<string | null | undefined>(undefined),
			Bytes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DetectKeyPhrasesResponse {
		KeyPhrases?: Array<KeyPhrase>;
	}
	export interface DetectKeyPhrasesResponseFormProperties {
	}
	export function CreateDetectKeyPhrasesResponseFormGroup() {
		return new FormGroup<DetectKeyPhrasesResponseFormProperties>({
		});

	}

	export interface DetectKeyPhrasesRequest {

		/** Required */
		Text: string;

		/** Required */
		LanguageCode: LanguageCode;
	}
	export interface DetectKeyPhrasesRequestFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
	}
	export function CreateDetectKeyPhrasesRequestFormGroup() {
		return new FormGroup<DetectKeyPhrasesRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetectPiiEntitiesResponse {
		Entities?: Array<PiiEntity>;
	}
	export interface DetectPiiEntitiesResponseFormProperties {
	}
	export function CreateDetectPiiEntitiesResponseFormGroup() {
		return new FormGroup<DetectPiiEntitiesResponseFormProperties>({
		});

	}


	/** Provides information about a PII entity. */
	export interface PiiEntity {
		Score?: number;
		Type?: PiiEntityType;
		BeginOffset?: number | null;
		EndOffset?: number | null;
	}

	/** Provides information about a PII entity. */
	export interface PiiEntityFormProperties {
		Score: FormControl<number | null | undefined>,
		Type: FormControl<PiiEntityType | null | undefined>,
		BeginOffset: FormControl<number | null | undefined>,
		EndOffset: FormControl<number | null | undefined>,
	}
	export function CreatePiiEntityFormGroup() {
		return new FormGroup<PiiEntityFormProperties>({
			Score: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<PiiEntityType | null | undefined>(undefined),
			BeginOffset: new FormControl<number | null | undefined>(undefined),
			EndOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DetectPiiEntitiesRequest {

		/** Required */
		Text: string;

		/** Required */
		LanguageCode: LanguageCode;
	}
	export interface DetectPiiEntitiesRequestFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
	}
	export function CreateDetectPiiEntitiesRequestFormGroup() {
		return new FormGroup<DetectPiiEntitiesRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetectSentimentResponse {
		Sentiment?: SentimentType;
		SentimentScore?: SentimentScore;
	}
	export interface DetectSentimentResponseFormProperties {
		Sentiment: FormControl<SentimentType | null | undefined>,
	}
	export function CreateDetectSentimentResponseFormGroup() {
		return new FormGroup<DetectSentimentResponseFormProperties>({
			Sentiment: new FormControl<SentimentType | null | undefined>(undefined),
		});

	}

	export interface DetectSentimentRequest {

		/** Required */
		Text: string;

		/** Required */
		LanguageCode: LanguageCode;
	}
	export interface DetectSentimentRequestFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
	}
	export function CreateDetectSentimentRequestFormGroup() {
		return new FormGroup<DetectSentimentRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetectSyntaxResponse {
		SyntaxTokens?: Array<SyntaxToken>;
	}
	export interface DetectSyntaxResponseFormProperties {
	}
	export function CreateDetectSyntaxResponseFormGroup() {
		return new FormGroup<DetectSyntaxResponseFormProperties>({
		});

	}

	export interface DetectSyntaxRequest {

		/** Required */
		Text: string;

		/** Required */
		LanguageCode: SyntaxLanguageCode;
	}
	export interface DetectSyntaxRequestFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<SyntaxLanguageCode | null | undefined>,
	}
	export function CreateDetectSyntaxRequestFormGroup() {
		return new FormGroup<DetectSyntaxRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<SyntaxLanguageCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DetectTargetedSentimentResponse {
		Entities?: Array<TargetedSentimentEntity>;
	}
	export interface DetectTargetedSentimentResponseFormProperties {
	}
	export function CreateDetectTargetedSentimentResponseFormGroup() {
		return new FormGroup<DetectTargetedSentimentResponseFormProperties>({
		});

	}

	export interface DetectTargetedSentimentRequest {

		/** Required */
		Text: string;

		/** Required */
		LanguageCode: LanguageCode;
	}
	export interface DetectTargetedSentimentRequestFormProperties {

		/** Required */
		Text: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
	}
	export function CreateDetectTargetedSentimentRequestFormGroup() {
		return new FormGroup<DetectTargetedSentimentRequestFormProperties>({
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportModelResponse {
		ModelArn?: string;
	}
	export interface ImportModelResponseFormProperties {
		ModelArn: FormControl<string | null | undefined>,
	}
	export function CreateImportModelResponseFormGroup() {
		return new FormGroup<ImportModelResponseFormProperties>({
			ModelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportModelRequest {

		/** Required */
		SourceModelArn: string;
		ModelName?: string;
		VersionName?: string;
		ModelKmsKeyId?: string;
		DataAccessRoleArn?: string;
		Tags?: Array<Tag>;
	}
	export interface ImportModelRequestFormProperties {

		/** Required */
		SourceModelArn: FormControl<string | null | undefined>,
		ModelName: FormControl<string | null | undefined>,
		VersionName: FormControl<string | null | undefined>,
		ModelKmsKeyId: FormControl<string | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateImportModelRequestFormGroup() {
		return new FormGroup<ImportModelRequestFormProperties>({
			SourceModelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ModelName: new FormControl<string | null | undefined>(undefined),
			VersionName: new FormControl<string | null | undefined>(undefined),
			ModelKmsKeyId: new FormControl<string | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDatasetsResponse {
		DatasetPropertiesList?: Array<DatasetProperties>;
		NextToken?: string;
	}
	export interface ListDatasetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetsResponseFormGroup() {
		return new FormGroup<ListDatasetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDatasetsRequest {
		FlywheelArn?: string;
		Filter?: DatasetFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDatasetsRequestFormProperties {
		FlywheelArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDatasetsRequestFormGroup() {
		return new FormGroup<ListDatasetsRequestFormProperties>({
			FlywheelArn: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Filter the datasets based on creation time or dataset status. */
	export interface DatasetFilter {
		Status?: DatasetStatus;
		DatasetType?: DatasetType;
		CreationTimeAfter?: Date;
		CreationTimeBefore?: Date;
	}

	/** Filter the datasets based on creation time or dataset status. */
	export interface DatasetFilterFormProperties {
		Status: FormControl<DatasetStatus | null | undefined>,
		DatasetType: FormControl<DatasetType | null | undefined>,
		CreationTimeAfter: FormControl<Date | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
	}
	export function CreateDatasetFilterFormGroup() {
		return new FormGroup<DatasetFilterFormProperties>({
			Status: new FormControl<DatasetStatus | null | undefined>(undefined),
			DatasetType: new FormControl<DatasetType | null | undefined>(undefined),
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface InvalidFilterException {
	}
	export interface InvalidFilterExceptionFormProperties {
	}
	export function CreateInvalidFilterExceptionFormGroup() {
		return new FormGroup<InvalidFilterExceptionFormProperties>({
		});

	}

	export interface ListDocumentClassificationJobsResponse {
		DocumentClassificationJobPropertiesList?: Array<DocumentClassificationJobProperties>;
		NextToken?: string;
	}
	export interface ListDocumentClassificationJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDocumentClassificationJobsResponseFormGroup() {
		return new FormGroup<ListDocumentClassificationJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDocumentClassificationJobsRequest {
		Filter?: DocumentClassificationJobFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDocumentClassificationJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDocumentClassificationJobsRequestFormGroup() {
		return new FormGroup<ListDocumentClassificationJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information for filtering a list of document classification jobs. For more information, see the operation. You can provide only one filter parameter in each request. */
	export interface DocumentClassificationJobFilter {
		JobName?: string;
		JobStatus?: JobStatus;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	/** Provides information for filtering a list of document classification jobs. For more information, see the operation. You can provide only one filter parameter in each request. */
	export interface DocumentClassificationJobFilterFormProperties {
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		SubmitTimeBefore: FormControl<Date | null | undefined>,
		SubmitTimeAfter: FormControl<Date | null | undefined>,
	}
	export function CreateDocumentClassificationJobFilterFormGroup() {
		return new FormGroup<DocumentClassificationJobFilterFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			SubmitTimeBefore: new FormControl<Date | null | undefined>(undefined),
			SubmitTimeAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDocumentClassifierSummariesResponse {
		DocumentClassifierSummariesList?: Array<DocumentClassifierSummary>;
		NextToken?: string;
	}
	export interface ListDocumentClassifierSummariesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDocumentClassifierSummariesResponseFormGroup() {
		return new FormGroup<ListDocumentClassifierSummariesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes information about a document classifier and its versions. */
	export interface DocumentClassifierSummary {
		DocumentClassifierName?: string;
		NumberOfVersions?: number | null;
		LatestVersionCreatedAt?: Date;
		LatestVersionName?: string;
		LatestVersionStatus?: ModelStatus;
	}

	/** Describes information about a document classifier and its versions. */
	export interface DocumentClassifierSummaryFormProperties {
		DocumentClassifierName: FormControl<string | null | undefined>,
		NumberOfVersions: FormControl<number | null | undefined>,
		LatestVersionCreatedAt: FormControl<Date | null | undefined>,
		LatestVersionName: FormControl<string | null | undefined>,
		LatestVersionStatus: FormControl<ModelStatus | null | undefined>,
	}
	export function CreateDocumentClassifierSummaryFormGroup() {
		return new FormGroup<DocumentClassifierSummaryFormProperties>({
			DocumentClassifierName: new FormControl<string | null | undefined>(undefined),
			NumberOfVersions: new FormControl<number | null | undefined>(undefined),
			LatestVersionCreatedAt: new FormControl<Date | null | undefined>(undefined),
			LatestVersionName: new FormControl<string | null | undefined>(undefined),
			LatestVersionStatus: new FormControl<ModelStatus | null | undefined>(undefined),
		});

	}

	export interface ListDocumentClassifierSummariesRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDocumentClassifierSummariesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDocumentClassifierSummariesRequestFormGroup() {
		return new FormGroup<ListDocumentClassifierSummariesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDocumentClassifiersResponse {
		DocumentClassifierPropertiesList?: Array<DocumentClassifierProperties>;
		NextToken?: string;
	}
	export interface ListDocumentClassifiersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDocumentClassifiersResponseFormGroup() {
		return new FormGroup<ListDocumentClassifiersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDocumentClassifiersRequest {
		Filter?: DocumentClassifierFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDocumentClassifiersRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDocumentClassifiersRequestFormGroup() {
		return new FormGroup<ListDocumentClassifiersRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information for filtering a list of document classifiers. You can only specify one filtering parameter in a request. For more information, see the <code>ListDocumentClassifiers</code> operation. */
	export interface DocumentClassifierFilter {
		Status?: ModelStatus;
		DocumentClassifierName?: string;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	/** Provides information for filtering a list of document classifiers. You can only specify one filtering parameter in a request. For more information, see the <code>ListDocumentClassifiers</code> operation. */
	export interface DocumentClassifierFilterFormProperties {
		Status: FormControl<ModelStatus | null | undefined>,
		DocumentClassifierName: FormControl<string | null | undefined>,
		SubmitTimeBefore: FormControl<Date | null | undefined>,
		SubmitTimeAfter: FormControl<Date | null | undefined>,
	}
	export function CreateDocumentClassifierFilterFormGroup() {
		return new FormGroup<DocumentClassifierFilterFormProperties>({
			Status: new FormControl<ModelStatus | null | undefined>(undefined),
			DocumentClassifierName: new FormControl<string | null | undefined>(undefined),
			SubmitTimeBefore: new FormControl<Date | null | undefined>(undefined),
			SubmitTimeAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDominantLanguageDetectionJobsResponse {
		DominantLanguageDetectionJobPropertiesList?: Array<DominantLanguageDetectionJobProperties>;
		NextToken?: string;
	}
	export interface ListDominantLanguageDetectionJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDominantLanguageDetectionJobsResponseFormGroup() {
		return new FormGroup<ListDominantLanguageDetectionJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDominantLanguageDetectionJobsRequest {
		Filter?: DominantLanguageDetectionJobFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDominantLanguageDetectionJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDominantLanguageDetectionJobsRequestFormGroup() {
		return new FormGroup<ListDominantLanguageDetectionJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
	export interface DominantLanguageDetectionJobFilter {
		JobName?: string;
		JobStatus?: JobStatus;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	/** Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
	export interface DominantLanguageDetectionJobFilterFormProperties {
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		SubmitTimeBefore: FormControl<Date | null | undefined>,
		SubmitTimeAfter: FormControl<Date | null | undefined>,
	}
	export function CreateDominantLanguageDetectionJobFilterFormGroup() {
		return new FormGroup<DominantLanguageDetectionJobFilterFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			SubmitTimeBefore: new FormControl<Date | null | undefined>(undefined),
			SubmitTimeAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListEndpointsResponse {
		EndpointPropertiesList?: Array<EndpointProperties>;
		NextToken?: string;
	}
	export interface ListEndpointsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEndpointsResponseFormGroup() {
		return new FormGroup<ListEndpointsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEndpointsRequest {
		Filter?: EndpointFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListEndpointsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEndpointsRequestFormGroup() {
		return new FormGroup<ListEndpointsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The filter used to determine which endpoints are returned. You can filter jobs on their name, model, status, or the date and time that they were created. You can only set one filter at a time.  */
	export interface EndpointFilter {
		ModelArn?: string;
		Status?: EndpointStatus;
		CreationTimeBefore?: Date;
		CreationTimeAfter?: Date;
	}

	/** The filter used to determine which endpoints are returned. You can filter jobs on their name, model, status, or the date and time that they were created. You can only set one filter at a time.  */
	export interface EndpointFilterFormProperties {
		ModelArn: FormControl<string | null | undefined>,
		Status: FormControl<EndpointStatus | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
		CreationTimeAfter: FormControl<Date | null | undefined>,
	}
	export function CreateEndpointFilterFormGroup() {
		return new FormGroup<EndpointFilterFormProperties>({
			ModelArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EndpointStatus | null | undefined>(undefined),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListEntitiesDetectionJobsResponse {
		EntitiesDetectionJobPropertiesList?: Array<EntitiesDetectionJobProperties>;
		NextToken?: string;
	}
	export interface ListEntitiesDetectionJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEntitiesDetectionJobsResponseFormGroup() {
		return new FormGroup<ListEntitiesDetectionJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEntitiesDetectionJobsRequest {
		Filter?: EntitiesDetectionJobFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListEntitiesDetectionJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEntitiesDetectionJobsRequestFormGroup() {
		return new FormGroup<ListEntitiesDetectionJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
	export interface EntitiesDetectionJobFilter {
		JobName?: string;
		JobStatus?: JobStatus;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	/** Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
	export interface EntitiesDetectionJobFilterFormProperties {
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		SubmitTimeBefore: FormControl<Date | null | undefined>,
		SubmitTimeAfter: FormControl<Date | null | undefined>,
	}
	export function CreateEntitiesDetectionJobFilterFormGroup() {
		return new FormGroup<EntitiesDetectionJobFilterFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			SubmitTimeBefore: new FormControl<Date | null | undefined>(undefined),
			SubmitTimeAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListEntityRecognizerSummariesResponse {
		EntityRecognizerSummariesList?: Array<EntityRecognizerSummary>;
		NextToken?: string;
	}
	export interface ListEntityRecognizerSummariesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEntityRecognizerSummariesResponseFormGroup() {
		return new FormGroup<ListEntityRecognizerSummariesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Describes the information about an entity recognizer and its versions. */
	export interface EntityRecognizerSummary {
		RecognizerName?: string;
		NumberOfVersions?: number | null;
		LatestVersionCreatedAt?: Date;
		LatestVersionName?: string;
		LatestVersionStatus?: ModelStatus;
	}

	/**  Describes the information about an entity recognizer and its versions. */
	export interface EntityRecognizerSummaryFormProperties {
		RecognizerName: FormControl<string | null | undefined>,
		NumberOfVersions: FormControl<number | null | undefined>,
		LatestVersionCreatedAt: FormControl<Date | null | undefined>,
		LatestVersionName: FormControl<string | null | undefined>,
		LatestVersionStatus: FormControl<ModelStatus | null | undefined>,
	}
	export function CreateEntityRecognizerSummaryFormGroup() {
		return new FormGroup<EntityRecognizerSummaryFormProperties>({
			RecognizerName: new FormControl<string | null | undefined>(undefined),
			NumberOfVersions: new FormControl<number | null | undefined>(undefined),
			LatestVersionCreatedAt: new FormControl<Date | null | undefined>(undefined),
			LatestVersionName: new FormControl<string | null | undefined>(undefined),
			LatestVersionStatus: new FormControl<ModelStatus | null | undefined>(undefined),
		});

	}

	export interface ListEntityRecognizerSummariesRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListEntityRecognizerSummariesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEntityRecognizerSummariesRequestFormGroup() {
		return new FormGroup<ListEntityRecognizerSummariesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListEntityRecognizersResponse {
		EntityRecognizerPropertiesList?: Array<EntityRecognizerProperties>;
		NextToken?: string;
	}
	export interface ListEntityRecognizersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEntityRecognizersResponseFormGroup() {
		return new FormGroup<ListEntityRecognizersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEntityRecognizersRequest {
		Filter?: EntityRecognizerFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListEntityRecognizersRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEntityRecognizersRequestFormGroup() {
		return new FormGroup<ListEntityRecognizersRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information for filtering a list of entity recognizers. You can only specify one filtering parameter in a request. For more information, see the <code>ListEntityRecognizers</code> operation./&gt; */
	export interface EntityRecognizerFilter {
		Status?: ModelStatus;
		RecognizerName?: string;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	/** Provides information for filtering a list of entity recognizers. You can only specify one filtering parameter in a request. For more information, see the <code>ListEntityRecognizers</code> operation./&gt; */
	export interface EntityRecognizerFilterFormProperties {
		Status: FormControl<ModelStatus | null | undefined>,
		RecognizerName: FormControl<string | null | undefined>,
		SubmitTimeBefore: FormControl<Date | null | undefined>,
		SubmitTimeAfter: FormControl<Date | null | undefined>,
	}
	export function CreateEntityRecognizerFilterFormGroup() {
		return new FormGroup<EntityRecognizerFilterFormProperties>({
			Status: new FormControl<ModelStatus | null | undefined>(undefined),
			RecognizerName: new FormControl<string | null | undefined>(undefined),
			SubmitTimeBefore: new FormControl<Date | null | undefined>(undefined),
			SubmitTimeAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListEventsDetectionJobsResponse {
		EventsDetectionJobPropertiesList?: Array<EventsDetectionJobProperties>;
		NextToken?: string;
	}
	export interface ListEventsDetectionJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventsDetectionJobsResponseFormGroup() {
		return new FormGroup<ListEventsDetectionJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEventsDetectionJobsRequest {
		Filter?: EventsDetectionJobFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListEventsDetectionJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListEventsDetectionJobsRequestFormGroup() {
		return new FormGroup<ListEventsDetectionJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information for filtering a list of event detection jobs. */
	export interface EventsDetectionJobFilter {
		JobName?: string;
		JobStatus?: JobStatus;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	/** Provides information for filtering a list of event detection jobs. */
	export interface EventsDetectionJobFilterFormProperties {
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		SubmitTimeBefore: FormControl<Date | null | undefined>,
		SubmitTimeAfter: FormControl<Date | null | undefined>,
	}
	export function CreateEventsDetectionJobFilterFormGroup() {
		return new FormGroup<EventsDetectionJobFilterFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			SubmitTimeBefore: new FormControl<Date | null | undefined>(undefined),
			SubmitTimeAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListFlywheelIterationHistoryResponse {
		FlywheelIterationPropertiesList?: Array<FlywheelIterationProperties>;
		NextToken?: string;
	}
	export interface ListFlywheelIterationHistoryResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFlywheelIterationHistoryResponseFormGroup() {
		return new FormGroup<ListFlywheelIterationHistoryResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFlywheelIterationHistoryRequest {

		/** Required */
		FlywheelArn: string;
		Filter?: FlywheelIterationFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListFlywheelIterationHistoryRequestFormProperties {

		/** Required */
		FlywheelArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFlywheelIterationHistoryRequestFormGroup() {
		return new FormGroup<ListFlywheelIterationHistoryRequestFormProperties>({
			FlywheelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Filter the flywheel iterations based on creation time. */
	export interface FlywheelIterationFilter {
		CreationTimeAfter?: Date;
		CreationTimeBefore?: Date;
	}

	/** Filter the flywheel iterations based on creation time. */
	export interface FlywheelIterationFilterFormProperties {
		CreationTimeAfter: FormControl<Date | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
	}
	export function CreateFlywheelIterationFilterFormGroup() {
		return new FormGroup<FlywheelIterationFilterFormProperties>({
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListFlywheelsResponse {
		FlywheelSummaryList?: Array<FlywheelSummary>;
		NextToken?: string;
	}
	export interface ListFlywheelsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFlywheelsResponseFormGroup() {
		return new FormGroup<ListFlywheelsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Flywheel summary information. */
	export interface FlywheelSummary {
		FlywheelArn?: string;
		ActiveModelArn?: string;
		DataLakeS3Uri?: string;
		Status?: FlywheelStatus;
		ModelType?: ModelType;
		Message?: string;
		CreationTime?: Date;
		LastModifiedTime?: Date;
		LatestFlywheelIteration?: string;
	}

	/** Flywheel summary information. */
	export interface FlywheelSummaryFormProperties {
		FlywheelArn: FormControl<string | null | undefined>,
		ActiveModelArn: FormControl<string | null | undefined>,
		DataLakeS3Uri: FormControl<string | null | undefined>,
		Status: FormControl<FlywheelStatus | null | undefined>,
		ModelType: FormControl<ModelType | null | undefined>,
		Message: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		LastModifiedTime: FormControl<Date | null | undefined>,
		LatestFlywheelIteration: FormControl<string | null | undefined>,
	}
	export function CreateFlywheelSummaryFormGroup() {
		return new FormGroup<FlywheelSummaryFormProperties>({
			FlywheelArn: new FormControl<string | null | undefined>(undefined),
			ActiveModelArn: new FormControl<string | null | undefined>(undefined),
			DataLakeS3Uri: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<FlywheelStatus | null | undefined>(undefined),
			ModelType: new FormControl<ModelType | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			LastModifiedTime: new FormControl<Date | null | undefined>(undefined),
			LatestFlywheelIteration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFlywheelsRequest {
		Filter?: FlywheelFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListFlywheelsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListFlywheelsRequestFormGroup() {
		return new FormGroup<ListFlywheelsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Filter the flywheels based on creation time or flywheel status. */
	export interface FlywheelFilter {
		Status?: FlywheelStatus;
		CreationTimeAfter?: Date;
		CreationTimeBefore?: Date;
	}

	/** Filter the flywheels based on creation time or flywheel status. */
	export interface FlywheelFilterFormProperties {
		Status: FormControl<FlywheelStatus | null | undefined>,
		CreationTimeAfter: FormControl<Date | null | undefined>,
		CreationTimeBefore: FormControl<Date | null | undefined>,
	}
	export function CreateFlywheelFilterFormGroup() {
		return new FormGroup<FlywheelFilterFormProperties>({
			Status: new FormControl<FlywheelStatus | null | undefined>(undefined),
			CreationTimeAfter: new FormControl<Date | null | undefined>(undefined),
			CreationTimeBefore: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListKeyPhrasesDetectionJobsResponse {
		KeyPhrasesDetectionJobPropertiesList?: Array<KeyPhrasesDetectionJobProperties>;
		NextToken?: string;
	}
	export interface ListKeyPhrasesDetectionJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListKeyPhrasesDetectionJobsResponseFormGroup() {
		return new FormGroup<ListKeyPhrasesDetectionJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListKeyPhrasesDetectionJobsRequest {
		Filter?: KeyPhrasesDetectionJobFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListKeyPhrasesDetectionJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListKeyPhrasesDetectionJobsRequestFormGroup() {
		return new FormGroup<ListKeyPhrasesDetectionJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
	export interface KeyPhrasesDetectionJobFilter {
		JobName?: string;
		JobStatus?: JobStatus;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	/** Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
	export interface KeyPhrasesDetectionJobFilterFormProperties {
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		SubmitTimeBefore: FormControl<Date | null | undefined>,
		SubmitTimeAfter: FormControl<Date | null | undefined>,
	}
	export function CreateKeyPhrasesDetectionJobFilterFormGroup() {
		return new FormGroup<KeyPhrasesDetectionJobFilterFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			SubmitTimeBefore: new FormControl<Date | null | undefined>(undefined),
			SubmitTimeAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListPiiEntitiesDetectionJobsResponse {
		PiiEntitiesDetectionJobPropertiesList?: Array<PiiEntitiesDetectionJobProperties>;
		NextToken?: string;
	}
	export interface ListPiiEntitiesDetectionJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPiiEntitiesDetectionJobsResponseFormGroup() {
		return new FormGroup<ListPiiEntitiesDetectionJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPiiEntitiesDetectionJobsRequest {
		Filter?: PiiEntitiesDetectionJobFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListPiiEntitiesDetectionJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPiiEntitiesDetectionJobsRequestFormGroup() {
		return new FormGroup<ListPiiEntitiesDetectionJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information for filtering a list of PII entity detection jobs. */
	export interface PiiEntitiesDetectionJobFilter {
		JobName?: string;
		JobStatus?: JobStatus;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	/** Provides information for filtering a list of PII entity detection jobs. */
	export interface PiiEntitiesDetectionJobFilterFormProperties {
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		SubmitTimeBefore: FormControl<Date | null | undefined>,
		SubmitTimeAfter: FormControl<Date | null | undefined>,
	}
	export function CreatePiiEntitiesDetectionJobFilterFormGroup() {
		return new FormGroup<PiiEntitiesDetectionJobFilterFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			SubmitTimeBefore: new FormControl<Date | null | undefined>(undefined),
			SubmitTimeAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListSentimentDetectionJobsResponse {
		SentimentDetectionJobPropertiesList?: Array<SentimentDetectionJobProperties>;
		NextToken?: string;
	}
	export interface ListSentimentDetectionJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSentimentDetectionJobsResponseFormGroup() {
		return new FormGroup<ListSentimentDetectionJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSentimentDetectionJobsRequest {
		Filter?: SentimentDetectionJobFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListSentimentDetectionJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListSentimentDetectionJobsRequestFormGroup() {
		return new FormGroup<ListSentimentDetectionJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
	export interface SentimentDetectionJobFilter {
		JobName?: string;
		JobStatus?: JobStatus;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	/** Provides information for filtering a list of dominant language detection jobs. For more information, see the operation. */
	export interface SentimentDetectionJobFilterFormProperties {
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		SubmitTimeBefore: FormControl<Date | null | undefined>,
		SubmitTimeAfter: FormControl<Date | null | undefined>,
	}
	export function CreateSentimentDetectionJobFilterFormGroup() {
		return new FormGroup<SentimentDetectionJobFilterFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			SubmitTimeBefore: new FormControl<Date | null | undefined>(undefined),
			SubmitTimeAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		ResourceArn?: string;
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTargetedSentimentDetectionJobsResponse {
		TargetedSentimentDetectionJobPropertiesList?: Array<TargetedSentimentDetectionJobProperties>;
		NextToken?: string;
	}
	export interface ListTargetedSentimentDetectionJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTargetedSentimentDetectionJobsResponseFormGroup() {
		return new FormGroup<ListTargetedSentimentDetectionJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTargetedSentimentDetectionJobsRequest {
		Filter?: TargetedSentimentDetectionJobFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListTargetedSentimentDetectionJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTargetedSentimentDetectionJobsRequestFormGroup() {
		return new FormGroup<ListTargetedSentimentDetectionJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information for filtering a list of dominant language detection jobs. For more information, see the <code>ListTargetedSentimentDetectionJobs</code> operation. */
	export interface TargetedSentimentDetectionJobFilter {
		JobName?: string;
		JobStatus?: JobStatus;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	/** Provides information for filtering a list of dominant language detection jobs. For more information, see the <code>ListTargetedSentimentDetectionJobs</code> operation. */
	export interface TargetedSentimentDetectionJobFilterFormProperties {
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		SubmitTimeBefore: FormControl<Date | null | undefined>,
		SubmitTimeAfter: FormControl<Date | null | undefined>,
	}
	export function CreateTargetedSentimentDetectionJobFilterFormGroup() {
		return new FormGroup<TargetedSentimentDetectionJobFilterFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			SubmitTimeBefore: new FormControl<Date | null | undefined>(undefined),
			SubmitTimeAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTopicsDetectionJobsResponse {
		TopicsDetectionJobPropertiesList?: Array<TopicsDetectionJobProperties>;
		NextToken?: string;
	}
	export interface ListTopicsDetectionJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTopicsDetectionJobsResponseFormGroup() {
		return new FormGroup<ListTopicsDetectionJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTopicsDetectionJobsRequest {
		Filter?: TopicsDetectionJobFilter;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListTopicsDetectionJobsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListTopicsDetectionJobsRequestFormGroup() {
		return new FormGroup<ListTopicsDetectionJobsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information for filtering topic detection jobs. For more information, see . */
	export interface TopicsDetectionJobFilter {
		JobName?: string;
		JobStatus?: JobStatus;
		SubmitTimeBefore?: Date;
		SubmitTimeAfter?: Date;
	}

	/** Provides information for filtering topic detection jobs. For more information, see . */
	export interface TopicsDetectionJobFilterFormProperties {
		JobName: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		SubmitTimeBefore: FormControl<Date | null | undefined>,
		SubmitTimeAfter: FormControl<Date | null | undefined>,
	}
	export function CreateTopicsDetectionJobFilterFormGroup() {
		return new FormGroup<TopicsDetectionJobFilterFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			SubmitTimeBefore: new FormControl<Date | null | undefined>(undefined),
			SubmitTimeAfter: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PutResourcePolicyResponse {
		PolicyRevisionId?: string;
	}
	export interface PutResourcePolicyResponseFormProperties {
		PolicyRevisionId: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyResponseFormGroup() {
		return new FormGroup<PutResourcePolicyResponseFormProperties>({
			PolicyRevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutResourcePolicyRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		ResourcePolicy: string;
		PolicyRevisionId?: string;
	}
	export interface PutResourcePolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,

		/** Required */
		ResourcePolicy: FormControl<string | null | undefined>,
		PolicyRevisionId: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyRequestFormGroup() {
		return new FormGroup<PutResourcePolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourcePolicy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyRevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartDocumentClassificationJobResponse {
		JobId?: string;
		JobArn?: string;
		JobStatus?: JobStatus;
		DocumentClassifierArn?: string;
	}
	export interface StartDocumentClassificationJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobArn: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		DocumentClassifierArn: FormControl<string | null | undefined>,
	}
	export function CreateStartDocumentClassificationJobResponseFormGroup() {
		return new FormGroup<StartDocumentClassificationJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobArn: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			DocumentClassifierArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartDocumentClassificationJobRequest {
		JobName?: string;
		DocumentClassifierArn?: string;

		/** Required */
		InputDataConfig: InputDataConfig;

		/** Required */
		OutputDataConfig: OutputDataConfig;

		/** Required */
		DataAccessRoleArn: string;
		ClientRequestToken?: string;
		VolumeKmsKeyId?: string;
		VpcConfig?: VpcConfig;
		Tags?: Array<Tag>;
		FlywheelArn?: string;
	}
	export interface StartDocumentClassificationJobRequestFormProperties {
		JobName: FormControl<string | null | undefined>,
		DocumentClassifierArn: FormControl<string | null | undefined>,

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
		FlywheelArn: FormControl<string | null | undefined>,
	}
	export function CreateStartDocumentClassificationJobRequestFormGroup() {
		return new FormGroup<StartDocumentClassificationJobRequestFormProperties>({
			JobName: new FormControl<string | null | undefined>(undefined),
			DocumentClassifierArn: new FormControl<string | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
			FlywheelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartDominantLanguageDetectionJobResponse {
		JobId?: string;
		JobArn?: string;
		JobStatus?: JobStatus;
	}
	export interface StartDominantLanguageDetectionJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobArn: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateStartDominantLanguageDetectionJobResponseFormGroup() {
		return new FormGroup<StartDominantLanguageDetectionJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobArn: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
		});

	}

	export interface StartDominantLanguageDetectionJobRequest {

		/** Required */
		InputDataConfig: InputDataConfig;

		/** Required */
		OutputDataConfig: OutputDataConfig;

		/** Required */
		DataAccessRoleArn: string;
		JobName?: string;
		ClientRequestToken?: string;
		VolumeKmsKeyId?: string;
		VpcConfig?: VpcConfig;
		Tags?: Array<Tag>;
	}
	export interface StartDominantLanguageDetectionJobRequestFormProperties {

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateStartDominantLanguageDetectionJobRequestFormGroup() {
		return new FormGroup<StartDominantLanguageDetectionJobRequestFormProperties>({
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartEntitiesDetectionJobResponse {
		JobId?: string;
		JobArn?: string;
		JobStatus?: JobStatus;
		EntityRecognizerArn?: string;
	}
	export interface StartEntitiesDetectionJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobArn: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
		EntityRecognizerArn: FormControl<string | null | undefined>,
	}
	export function CreateStartEntitiesDetectionJobResponseFormGroup() {
		return new FormGroup<StartEntitiesDetectionJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobArn: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
			EntityRecognizerArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartEntitiesDetectionJobRequest {

		/** Required */
		InputDataConfig: InputDataConfig;

		/** Required */
		OutputDataConfig: OutputDataConfig;

		/** Required */
		DataAccessRoleArn: string;
		JobName?: string;
		EntityRecognizerArn?: string;

		/** Required */
		LanguageCode: LanguageCode;
		ClientRequestToken?: string;
		VolumeKmsKeyId?: string;
		VpcConfig?: VpcConfig;
		Tags?: Array<Tag>;
		FlywheelArn?: string;
	}
	export interface StartEntitiesDetectionJobRequestFormProperties {

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		EntityRecognizerArn: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
		FlywheelArn: FormControl<string | null | undefined>,
	}
	export function CreateStartEntitiesDetectionJobRequestFormGroup() {
		return new FormGroup<StartEntitiesDetectionJobRequestFormProperties>({
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined),
			EntityRecognizerArn: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
			FlywheelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartEventsDetectionJobResponse {
		JobId?: string;
		JobArn?: string;
		JobStatus?: JobStatus;
	}
	export interface StartEventsDetectionJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobArn: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateStartEventsDetectionJobResponseFormGroup() {
		return new FormGroup<StartEventsDetectionJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobArn: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
		});

	}

	export interface StartEventsDetectionJobRequest {

		/** Required */
		InputDataConfig: InputDataConfig;

		/** Required */
		OutputDataConfig: OutputDataConfig;

		/** Required */
		DataAccessRoleArn: string;
		JobName?: string;

		/** Required */
		LanguageCode: LanguageCode;
		ClientRequestToken?: string;

		/** Required */
		TargetEventTypes: Array<string>;
		Tags?: Array<Tag>;
	}
	export interface StartEventsDetectionJobRequestFormProperties {

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartEventsDetectionJobRequestFormGroup() {
		return new FormGroup<StartEventsDetectionJobRequestFormProperties>({
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartFlywheelIterationResponse {
		FlywheelArn?: string;
		FlywheelIterationId?: string;
	}
	export interface StartFlywheelIterationResponseFormProperties {
		FlywheelArn: FormControl<string | null | undefined>,
		FlywheelIterationId: FormControl<string | null | undefined>,
	}
	export function CreateStartFlywheelIterationResponseFormGroup() {
		return new FormGroup<StartFlywheelIterationResponseFormProperties>({
			FlywheelArn: new FormControl<string | null | undefined>(undefined),
			FlywheelIterationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartFlywheelIterationRequest {

		/** Required */
		FlywheelArn: string;
		ClientRequestToken?: string;
	}
	export interface StartFlywheelIterationRequestFormProperties {

		/** Required */
		FlywheelArn: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartFlywheelIterationRequestFormGroup() {
		return new FormGroup<StartFlywheelIterationRequestFormProperties>({
			FlywheelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartKeyPhrasesDetectionJobResponse {
		JobId?: string;
		JobArn?: string;
		JobStatus?: JobStatus;
	}
	export interface StartKeyPhrasesDetectionJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobArn: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateStartKeyPhrasesDetectionJobResponseFormGroup() {
		return new FormGroup<StartKeyPhrasesDetectionJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobArn: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
		});

	}

	export interface StartKeyPhrasesDetectionJobRequest {

		/** Required */
		InputDataConfig: InputDataConfig;

		/** Required */
		OutputDataConfig: OutputDataConfig;

		/** Required */
		DataAccessRoleArn: string;
		JobName?: string;

		/** Required */
		LanguageCode: LanguageCode;
		ClientRequestToken?: string;
		VolumeKmsKeyId?: string;
		VpcConfig?: VpcConfig;
		Tags?: Array<Tag>;
	}
	export interface StartKeyPhrasesDetectionJobRequestFormProperties {

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateStartKeyPhrasesDetectionJobRequestFormGroup() {
		return new FormGroup<StartKeyPhrasesDetectionJobRequestFormProperties>({
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartPiiEntitiesDetectionJobResponse {
		JobId?: string;
		JobArn?: string;
		JobStatus?: JobStatus;
	}
	export interface StartPiiEntitiesDetectionJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobArn: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateStartPiiEntitiesDetectionJobResponseFormGroup() {
		return new FormGroup<StartPiiEntitiesDetectionJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobArn: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
		});

	}

	export interface StartPiiEntitiesDetectionJobRequest {

		/** Required */
		InputDataConfig: InputDataConfig;

		/** Required */
		OutputDataConfig: OutputDataConfig;

		/** Required */
		Mode: PiiEntitiesDetectionMode;
		RedactionConfig?: RedactionConfig;

		/** Required */
		DataAccessRoleArn: string;
		JobName?: string;

		/** Required */
		LanguageCode: LanguageCode;
		ClientRequestToken?: string;
		Tags?: Array<Tag>;
	}
	export interface StartPiiEntitiesDetectionJobRequestFormProperties {

		/** Required */
		Mode: FormControl<PiiEntitiesDetectionMode | null | undefined>,

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartPiiEntitiesDetectionJobRequestFormGroup() {
		return new FormGroup<StartPiiEntitiesDetectionJobRequestFormProperties>({
			Mode: new FormControl<PiiEntitiesDetectionMode | null | undefined>(undefined, [Validators.required]),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartSentimentDetectionJobResponse {
		JobId?: string;
		JobArn?: string;
		JobStatus?: JobStatus;
	}
	export interface StartSentimentDetectionJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobArn: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateStartSentimentDetectionJobResponseFormGroup() {
		return new FormGroup<StartSentimentDetectionJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobArn: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
		});

	}

	export interface StartSentimentDetectionJobRequest {

		/** Required */
		InputDataConfig: InputDataConfig;

		/** Required */
		OutputDataConfig: OutputDataConfig;

		/** Required */
		DataAccessRoleArn: string;
		JobName?: string;

		/** Required */
		LanguageCode: LanguageCode;
		ClientRequestToken?: string;
		VolumeKmsKeyId?: string;
		VpcConfig?: VpcConfig;
		Tags?: Array<Tag>;
	}
	export interface StartSentimentDetectionJobRequestFormProperties {

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateStartSentimentDetectionJobRequestFormGroup() {
		return new FormGroup<StartSentimentDetectionJobRequestFormProperties>({
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartTargetedSentimentDetectionJobResponse {
		JobId?: string;
		JobArn?: string;
		JobStatus?: JobStatus;
	}
	export interface StartTargetedSentimentDetectionJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobArn: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateStartTargetedSentimentDetectionJobResponseFormGroup() {
		return new FormGroup<StartTargetedSentimentDetectionJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobArn: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
		});

	}

	export interface StartTargetedSentimentDetectionJobRequest {

		/**
		 * The input properties for an inference job. The document reader config field applies only to non-text inputs for custom analysis.
		 * Required
		 */
		InputDataConfig: InputDataConfig;

		/** Required */
		OutputDataConfig: OutputDataConfig;

		/** Required */
		DataAccessRoleArn: string;
		JobName?: string;

		/** Required */
		LanguageCode: LanguageCode;
		ClientRequestToken?: string;
		VolumeKmsKeyId?: string;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
		Tags?: Array<Tag>;
	}
	export interface StartTargetedSentimentDetectionJobRequestFormProperties {

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,

		/** Required */
		LanguageCode: FormControl<LanguageCode | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateStartTargetedSentimentDetectionJobRequestFormGroup() {
		return new FormGroup<StartTargetedSentimentDetectionJobRequestFormProperties>({
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<LanguageCode | null | undefined>(undefined, [Validators.required]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartTopicsDetectionJobResponse {
		JobId?: string;
		JobArn?: string;
		JobStatus?: JobStatus;
	}
	export interface StartTopicsDetectionJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobArn: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateStartTopicsDetectionJobResponseFormGroup() {
		return new FormGroup<StartTopicsDetectionJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobArn: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
		});

	}

	export interface StartTopicsDetectionJobRequest {

		/** Required */
		InputDataConfig: InputDataConfig;

		/** Required */
		OutputDataConfig: OutputDataConfig;

		/** Required */
		DataAccessRoleArn: string;
		JobName?: string;
		NumberOfTopics?: number | null;
		ClientRequestToken?: string;
		VolumeKmsKeyId?: string;
		VpcConfig?: VpcConfig;
		Tags?: Array<Tag>;
	}
	export interface StartTopicsDetectionJobRequestFormProperties {

		/** Required */
		DataAccessRoleArn: FormControl<string | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		NumberOfTopics: FormControl<number | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateStartTopicsDetectionJobRequestFormGroup() {
		return new FormGroup<StartTopicsDetectionJobRequestFormProperties>({
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined),
			NumberOfTopics: new FormControl<number | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopDominantLanguageDetectionJobResponse {
		JobId?: string;
		JobStatus?: JobStatus;
	}
	export interface StopDominantLanguageDetectionJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateStopDominantLanguageDetectionJobResponseFormGroup() {
		return new FormGroup<StopDominantLanguageDetectionJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
		});

	}

	export interface StopDominantLanguageDetectionJobRequest {

		/** Required */
		JobId: string;
	}
	export interface StopDominantLanguageDetectionJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopDominantLanguageDetectionJobRequestFormGroup() {
		return new FormGroup<StopDominantLanguageDetectionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopEntitiesDetectionJobResponse {
		JobId?: string;
		JobStatus?: JobStatus;
	}
	export interface StopEntitiesDetectionJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateStopEntitiesDetectionJobResponseFormGroup() {
		return new FormGroup<StopEntitiesDetectionJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
		});

	}

	export interface StopEntitiesDetectionJobRequest {

		/** Required */
		JobId: string;
	}
	export interface StopEntitiesDetectionJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopEntitiesDetectionJobRequestFormGroup() {
		return new FormGroup<StopEntitiesDetectionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopEventsDetectionJobResponse {
		JobId?: string;
		JobStatus?: JobStatus;
	}
	export interface StopEventsDetectionJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateStopEventsDetectionJobResponseFormGroup() {
		return new FormGroup<StopEventsDetectionJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
		});

	}

	export interface StopEventsDetectionJobRequest {

		/** Required */
		JobId: string;
	}
	export interface StopEventsDetectionJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopEventsDetectionJobRequestFormGroup() {
		return new FormGroup<StopEventsDetectionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopKeyPhrasesDetectionJobResponse {
		JobId?: string;
		JobStatus?: JobStatus;
	}
	export interface StopKeyPhrasesDetectionJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateStopKeyPhrasesDetectionJobResponseFormGroup() {
		return new FormGroup<StopKeyPhrasesDetectionJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
		});

	}

	export interface StopKeyPhrasesDetectionJobRequest {

		/** Required */
		JobId: string;
	}
	export interface StopKeyPhrasesDetectionJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopKeyPhrasesDetectionJobRequestFormGroup() {
		return new FormGroup<StopKeyPhrasesDetectionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopPiiEntitiesDetectionJobResponse {
		JobId?: string;
		JobStatus?: JobStatus;
	}
	export interface StopPiiEntitiesDetectionJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateStopPiiEntitiesDetectionJobResponseFormGroup() {
		return new FormGroup<StopPiiEntitiesDetectionJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
		});

	}

	export interface StopPiiEntitiesDetectionJobRequest {

		/** Required */
		JobId: string;
	}
	export interface StopPiiEntitiesDetectionJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopPiiEntitiesDetectionJobRequestFormGroup() {
		return new FormGroup<StopPiiEntitiesDetectionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopSentimentDetectionJobResponse {
		JobId?: string;
		JobStatus?: JobStatus;
	}
	export interface StopSentimentDetectionJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateStopSentimentDetectionJobResponseFormGroup() {
		return new FormGroup<StopSentimentDetectionJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
		});

	}

	export interface StopSentimentDetectionJobRequest {

		/** Required */
		JobId: string;
	}
	export interface StopSentimentDetectionJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopSentimentDetectionJobRequestFormGroup() {
		return new FormGroup<StopSentimentDetectionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopTargetedSentimentDetectionJobResponse {
		JobId?: string;
		JobStatus?: JobStatus;
	}
	export interface StopTargetedSentimentDetectionJobResponseFormProperties {
		JobId: FormControl<string | null | undefined>,
		JobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateStopTargetedSentimentDetectionJobResponseFormGroup() {
		return new FormGroup<StopTargetedSentimentDetectionJobResponseFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined),
		});

	}

	export interface StopTargetedSentimentDetectionJobRequest {

		/** Required */
		JobId: string;
	}
	export interface StopTargetedSentimentDetectionJobRequestFormProperties {

		/** Required */
		JobId: FormControl<string | null | undefined>,
	}
	export function CreateStopTargetedSentimentDetectionJobRequestFormGroup() {
		return new FormGroup<StopTargetedSentimentDetectionJobRequestFormProperties>({
			JobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopTrainingDocumentClassifierResponse {
	}
	export interface StopTrainingDocumentClassifierResponseFormProperties {
	}
	export function CreateStopTrainingDocumentClassifierResponseFormGroup() {
		return new FormGroup<StopTrainingDocumentClassifierResponseFormProperties>({
		});

	}

	export interface StopTrainingDocumentClassifierRequest {

		/** Required */
		DocumentClassifierArn: string;
	}
	export interface StopTrainingDocumentClassifierRequestFormProperties {

		/** Required */
		DocumentClassifierArn: FormControl<string | null | undefined>,
	}
	export function CreateStopTrainingDocumentClassifierRequestFormGroup() {
		return new FormGroup<StopTrainingDocumentClassifierRequestFormProperties>({
			DocumentClassifierArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopTrainingEntityRecognizerResponse {
	}
	export interface StopTrainingEntityRecognizerResponseFormProperties {
	}
	export function CreateStopTrainingEntityRecognizerResponseFormGroup() {
		return new FormGroup<StopTrainingEntityRecognizerResponseFormProperties>({
		});

	}

	export interface StopTrainingEntityRecognizerRequest {

		/** Required */
		EntityRecognizerArn: string;
	}
	export interface StopTrainingEntityRecognizerRequestFormProperties {

		/** Required */
		EntityRecognizerArn: FormControl<string | null | undefined>,
	}
	export function CreateStopTrainingEntityRecognizerRequestFormGroup() {
		return new FormGroup<StopTrainingEntityRecognizerRequestFormProperties>({
			EntityRecognizerArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TooManyTagKeysException {
	}
	export interface TooManyTagKeysExceptionFormProperties {
	}
	export function CreateTooManyTagKeysExceptionFormGroup() {
		return new FormGroup<TooManyTagKeysExceptionFormProperties>({
		});

	}

	export interface UpdateEndpointResponse {
		DesiredModelArn?: string;
	}
	export interface UpdateEndpointResponseFormProperties {
		DesiredModelArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEndpointResponseFormGroup() {
		return new FormGroup<UpdateEndpointResponseFormProperties>({
			DesiredModelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEndpointRequest {

		/** Required */
		EndpointArn: string;
		DesiredModelArn?: string;
		DesiredInferenceUnits?: number | null;
		DesiredDataAccessRoleArn?: string;
		FlywheelArn?: string;
	}
	export interface UpdateEndpointRequestFormProperties {

		/** Required */
		EndpointArn: FormControl<string | null | undefined>,
		DesiredModelArn: FormControl<string | null | undefined>,
		DesiredInferenceUnits: FormControl<number | null | undefined>,
		DesiredDataAccessRoleArn: FormControl<string | null | undefined>,
		FlywheelArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEndpointRequestFormGroup() {
		return new FormGroup<UpdateEndpointRequestFormProperties>({
			EndpointArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DesiredModelArn: new FormControl<string | null | undefined>(undefined),
			DesiredInferenceUnits: new FormControl<number | null | undefined>(undefined),
			DesiredDataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
			FlywheelArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFlywheelResponse {
		FlywheelProperties?: FlywheelProperties;
	}
	export interface UpdateFlywheelResponseFormProperties {
	}
	export function CreateUpdateFlywheelResponseFormGroup() {
		return new FormGroup<UpdateFlywheelResponseFormProperties>({
		});

	}

	export interface UpdateFlywheelRequest {

		/** Required */
		FlywheelArn: string;
		ActiveModelArn?: string;
		DataAccessRoleArn?: string;
		DataSecurityConfig?: UpdateDataSecurityConfig;
	}
	export interface UpdateFlywheelRequestFormProperties {

		/** Required */
		FlywheelArn: FormControl<string | null | undefined>,
		ActiveModelArn: FormControl<string | null | undefined>,
		DataAccessRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFlywheelRequestFormGroup() {
		return new FormGroup<UpdateFlywheelRequestFormProperties>({
			FlywheelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ActiveModelArn: new FormControl<string | null | undefined>(undefined),
			DataAccessRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data security configuration. */
	export interface UpdateDataSecurityConfig {
		ModelKmsKeyId?: string;
		VolumeKmsKeyId?: string;

		/** Configuration parameters for an optional private Virtual Private Cloud (VPC) containing the resources you are using for the job. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html">Amazon VPC</a>. */
		VpcConfig?: VpcConfig;
	}

	/** Data security configuration. */
	export interface UpdateDataSecurityConfigFormProperties {
		ModelKmsKeyId: FormControl<string | null | undefined>,
		VolumeKmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSecurityConfigFormGroup() {
		return new FormGroup<UpdateDataSecurityConfigFormProperties>({
			ModelKmsKeyId: new FormControl<string | null | undefined>(undefined),
			VolumeKmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Split { TRAIN = 0, TEST = 1 }

	export enum DocumentClassifierDataFormat { COMPREHEND_CSV = 0, AUGMENTED_MANIFEST = 1 }

	export enum DocumentClassifierDocumentTypeFormat { PLAIN_TEXT_DOCUMENT = 0, SEMI_STRUCTURED_DOCUMENT = 1 }

	export enum EntityRecognizerDataFormat { COMPREHEND_CSV = 0, AUGMENTED_MANIFEST = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>.
		 * Post #X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage
		 * @return {BatchDetectDominantLanguageResponse} Success
		 */
		BatchDetectDominantLanguage(requestBody: BatchDetectDominantLanguageRequest): Observable<BatchDetectDominantLanguageResponse> {
			return this.http.post<BatchDetectDominantLanguageResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.BatchDetectDominantLanguage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide.
		 * Post #X-Amz-Target=Comprehend_20171127.BatchDetectEntities
		 * @return {BatchDetectEntitiesResponse} Success
		 */
		BatchDetectEntities(requestBody: BatchDetectEntitiesRequest): Observable<BatchDetectEntitiesResponse> {
			return this.http.post<BatchDetectEntitiesResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.BatchDetectEntities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detects the key noun phrases found in a batch of documents.
		 * Post #X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases
		 * @return {BatchDetectKeyPhrasesResponse} Success
		 */
		BatchDetectKeyPhrases(requestBody: BatchDetectKeyPhrasesRequest): Observable<BatchDetectKeyPhrasesResponse> {
			return this.http.post<BatchDetectKeyPhrasesResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.BatchDetectKeyPhrases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inspects a batch of documents and returns an inference of the prevailing sentiment, <code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>, in each one.
		 * Post #X-Amz-Target=Comprehend_20171127.BatchDetectSentiment
		 * @return {BatchDetectSentimentResponse} Success
		 */
		BatchDetectSentiment(requestBody: BatchDetectSentimentRequest): Observable<BatchDetectSentimentResponse> {
			return this.http.post<BatchDetectSentimentResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.BatchDetectSentiment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide.
		 * Post #X-Amz-Target=Comprehend_20171127.BatchDetectSyntax
		 * @return {BatchDetectSyntaxResponse} Success
		 */
		BatchDetectSyntax(requestBody: BatchDetectSyntaxRequest): Observable<BatchDetectSyntaxResponse> {
			return this.http.post<BatchDetectSyntaxResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.BatchDetectSyntax', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Inspects a batch of documents and returns a sentiment analysis for each entity identified in the documents.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment
		 * @return {BatchDetectTargetedSentimentResponse} Success
		 */
		BatchDetectTargetedSentiment(requestBody: BatchDetectTargetedSentimentRequest): Observable<BatchDetectTargetedSentimentResponse> {
			return this.http.post<BatchDetectTargetedSentimentResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.BatchDetectTargetedSentiment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint.</p> <p>You can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> that describes the errors.</p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>
		 * Post #X-Amz-Target=Comprehend_20171127.ClassifyDocument
		 * @return {ClassifyDocumentResponse} Success
		 */
		ClassifyDocument(requestBody: ClassifyDocumentRequest): Observable<ClassifyDocumentResponse> {
			return this.http.post<ClassifyDocumentResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ClassifyDocument', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.
		 * Post #X-Amz-Target=Comprehend_20171127.ContainsPiiEntities
		 * @return {ContainsPiiEntitiesResponse} Success
		 */
		ContainsPiiEntities(requestBody: ContainsPiiEntitiesRequest): Observable<ContainsPiiEntitiesResponse> {
			return this.http.post<ContainsPiiEntitiesResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ContainsPiiEntities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a dataset to upload training or test data for a model associated with a flywheel. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
		 * Post #X-Amz-Target=Comprehend_20171127.CreateDataset
		 * @return {CreateDatasetResponse} Success
		 */
		CreateDataset(requestBody: CreateDatasetRequest): Observable<CreateDatasetResponse> {
			return this.http.post<CreateDatasetResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.CreateDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new document classifier that you can use to categorize documents. To create a classifier, you provide a set of training documents that are labeled with the categories that you want to use. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/training-classifier-model.html">Training classifier models</a> in the Comprehend Developer Guide.
		 * Post #X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier
		 * @return {CreateDocumentClassifierResponse} Success
		 */
		CreateDocumentClassifier(requestBody: CreateDocumentClassifierRequest): Observable<CreateDocumentClassifierResponse> {
			return this.http.post<CreateDocumentClassifierResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.CreateDocumentClassifier', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a model-specific endpoint for synchronous inference for a previously trained custom model For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
		 * Post #X-Amz-Target=Comprehend_20171127.CreateEndpoint
		 * @return {CreateEndpointResponse} Success
		 */
		CreateEndpoint(requestBody: CreateEndpointRequest): Observable<CreateEndpointResponse> {
			return this.http.post<CreateEndpointResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.CreateEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an entity recognizer using submitted files. After your <code>CreateEntityRecognizer</code> request is submitted, you can check job status using the <code>DescribeEntityRecognizer</code> API.
		 * Post #X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer
		 * @return {CreateEntityRecognizerResponse} Success
		 */
		CreateEntityRecognizer(requestBody: CreateEntityRecognizerRequest): Observable<CreateEntityRecognizerResponse> {
			return this.http.post<CreateEntityRecognizerResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.CreateEntityRecognizer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom classification or custom entity recognition. You can create a flywheel to start with an existing trained model, or Comprehend can create and train a new model.</p> <p>When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training data and test data for all versions of the model.</p> <p>To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's training data and test data into the flywheel's data lake.</p> <p>To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data) when you create the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.CreateFlywheel
		 * @return {CreateFlywheelResponse} Success
		 */
		CreateFlywheel(requestBody: CreateFlywheelRequest): Observable<CreateFlywheelResponse> {
			return this.http.post<CreateFlywheelResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.CreateFlywheel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a previously created document classifier</p> <p>Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use. </p>
		 * Post #X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier
		 * @return {DeleteDocumentClassifierResponse} Success
		 */
		DeleteDocumentClassifier(requestBody: DeleteDocumentClassifierRequest): Observable<DeleteDocumentClassifierResponse> {
			return this.http.post<DeleteDocumentClassifierResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DeleteDocumentClassifier', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
		 * Post #X-Amz-Target=Comprehend_20171127.DeleteEndpoint
		 * @return {DeleteEndpointResponse} Success
		 */
		DeleteEndpoint(requestBody: DeleteEndpointRequest): Observable<DeleteEndpointResponse> {
			return this.http.post<DeleteEndpointResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DeleteEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an entity recognizer.</p> <p>Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use. </p>
		 * Post #X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer
		 * @return {DeleteEntityRecognizerResponse} Success
		 */
		DeleteEntityRecognizer(requestBody: DeleteEntityRecognizerRequest): Observable<DeleteEntityRecognizerResponse> {
			return this.http.post<DeleteEntityRecognizerResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DeleteEntityRecognizer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a flywheel. When you delete the flywheel, Amazon Comprehend does not delete the data lake or the model associated with the flywheel.</p> <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.DeleteFlywheel
		 * @return {DeleteFlywheelResponse} Success
		 */
		DeleteFlywheel(requestBody: DeleteFlywheelRequest): Observable<DeleteFlywheelResponse> {
			return this.http.post<DeleteFlywheelResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DeleteFlywheel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a resource-based policy that is attached to a custom model.
		 * Post #X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy
		 * @return {DeleteResourcePolicyResponse} Success
		 */
		DeleteResourcePolicy(requestBody: DeleteResourcePolicyRequest): Observable<DeleteResourcePolicyResponse> {
			return this.http.post<DeleteResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DeleteResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns information about the dataset that you specify. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeDataset
		 * @return {DescribeDatasetResponse} Success
		 */
		DescribeDataset(requestBody: DescribeDatasetRequest): Observable<DescribeDatasetResponse> {
			return this.http.post<DescribeDatasetResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeDataset', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob
		 * @return {DescribeDocumentClassificationJobResponse} Success
		 */
		DescribeDocumentClassificationJob(requestBody: DescribeDocumentClassificationJobRequest): Observable<DescribeDocumentClassificationJobResponse> {
			return this.http.post<DescribeDocumentClassificationJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassificationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with a document classifier.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier
		 * @return {DescribeDocumentClassifierResponse} Success
		 */
		DescribeDocumentClassifier(requestBody: DescribeDocumentClassifierRequest): Observable<DescribeDocumentClassifierResponse> {
			return this.http.post<DescribeDocumentClassifierResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeDocumentClassifier', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob
		 * @return {DescribeDominantLanguageDetectionJobResponse} Success
		 */
		DescribeDominantLanguageDetectionJob(requestBody: DescribeDominantLanguageDetectionJobRequest): Observable<DescribeDominantLanguageDetectionJobResponse> {
			return this.http.post<DescribeDominantLanguageDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeDominantLanguageDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeEndpoint
		 * @return {DescribeEndpointResponse} Success
		 */
		DescribeEndpoint(requestBody: DescribeEndpointRequest): Observable<DescribeEndpointResponse> {
			return this.http.post<DescribeEndpointResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob
		 * @return {DescribeEntitiesDetectionJobResponse} Success
		 */
		DescribeEntitiesDetectionJob(requestBody: DescribeEntitiesDetectionJobRequest): Observable<DescribeEntitiesDetectionJobResponse> {
			return this.http.post<DescribeEntitiesDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeEntitiesDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer
		 * @return {DescribeEntityRecognizerResponse} Success
		 */
		DescribeEntityRecognizer(requestBody: DescribeEntityRecognizerRequest): Observable<DescribeEntityRecognizerResponse> {
			return this.http.post<DescribeEntityRecognizerResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeEntityRecognizer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the status and details of an events detection job.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob
		 * @return {DescribeEventsDetectionJobResponse} Success
		 */
		DescribeEventsDetectionJob(requestBody: DescribeEventsDetectionJobRequest): Observable<DescribeEventsDetectionJobResponse> {
			return this.http.post<DescribeEventsDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeEventsDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides configuration information about the flywheel. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeFlywheel
		 * @return {DescribeFlywheelResponse} Success
		 */
		DescribeFlywheel(requestBody: DescribeFlywheelRequest): Observable<DescribeFlywheelResponse> {
			return this.http.post<DescribeFlywheelResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeFlywheel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration
		 * @return {DescribeFlywheelIterationResponse} Success
		 */
		DescribeFlywheelIteration(requestBody: DescribeFlywheelIterationRequest): Observable<DescribeFlywheelIterationResponse> {
			return this.http.post<DescribeFlywheelIterationResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeFlywheelIteration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob
		 * @return {DescribeKeyPhrasesDetectionJobResponse} Success
		 */
		DescribeKeyPhrasesDetectionJob(requestBody: DescribeKeyPhrasesDetectionJobRequest): Observable<DescribeKeyPhrasesDetectionJobResponse> {
			return this.http.post<DescribeKeyPhrasesDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeKeyPhrasesDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with a PII entities detection job. For example, you can use this operation to get the job status.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob
		 * @return {DescribePiiEntitiesDetectionJobResponse} Success
		 */
		DescribePiiEntitiesDetectionJob(requestBody: DescribePiiEntitiesDetectionJobRequest): Observable<DescribePiiEntitiesDetectionJobResponse> {
			return this.http.post<DescribePiiEntitiesDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribePiiEntitiesDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the details of a resource-based policy that is attached to a custom model, including the JSON body of the policy.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy
		 * @return {DescribeResourcePolicyResponse} Success
		 */
		DescribeResourcePolicy(requestBody: DescribeResourcePolicyRequest): Observable<DescribeResourcePolicyResponse> {
			return this.http.post<DescribeResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob
		 * @return {DescribeSentimentDetectionJobResponse} Success
		 */
		DescribeSentimentDetectionJob(requestBody: DescribeSentimentDetectionJobRequest): Observable<DescribeSentimentDetectionJobResponse> {
			return this.http.post<DescribeSentimentDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeSentimentDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with a targeted sentiment detection job. Use this operation to get the status of the job.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob
		 * @return {DescribeTargetedSentimentDetectionJobResponse} Success
		 */
		DescribeTargetedSentimentDetectionJob(requestBody: DescribeTargetedSentimentDetectionJobRequest): Observable<DescribeTargetedSentimentDetectionJobResponse> {
			return this.http.post<DescribeTargetedSentimentDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeTargetedSentimentDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.
		 * Post #X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob
		 * @return {DescribeTopicsDetectionJobResponse} Success
		 */
		DescribeTopicsDetectionJob(requestBody: DescribeTopicsDetectionJobRequest): Observable<DescribeTopicsDetectionJobResponse> {
			return this.http.post<DescribeTopicsDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DescribeTopicsDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>.
		 * Post #X-Amz-Target=Comprehend_20171127.DetectDominantLanguage
		 * @return {DetectDominantLanguageResponse} Success
		 */
		DetectDominantLanguage(requestBody: DetectDominantLanguageRequest): Observable<DetectDominantLanguageResponse> {
			return this.http.post<DetectDominantLanguageResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DetectDominantLanguage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Detects named entities in input text when you use the pre-trained model. Detects custom entities if you have a custom entity recognition model. </p> <p> When detecting named entities using the pre-trained model, use plain text as the input. For more information about named entities, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-entities.html">Entities</a> in the Comprehend Developer Guide.</p> <p>When you use a custom entity recognition model, you can input plain text or you can upload a single-page input document (text, PDF, Word, or image). </p> <p>If the system detects errors while processing a page in the input document, the API response includes an entry in <code>Errors</code> for each error. </p> <p>If the system detects a document-level error in your input document, the API returns an <code>InvalidRequestException</code> error response. For details about this exception, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/idp-inputs-sync-err.html"> Errors in semi-structured documents</a> in the Comprehend Developer Guide. </p>
		 * Post #X-Amz-Target=Comprehend_20171127.DetectEntities
		 * @return {DetectEntitiesResponse} Success
		 */
		DetectEntities(requestBody: DetectEntitiesRequest): Observable<DetectEntitiesResponse> {
			return this.http.post<DetectEntitiesResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DetectEntities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Detects the key noun phrases found in the text.
		 * Post #X-Amz-Target=Comprehend_20171127.DetectKeyPhrases
		 * @return {DetectKeyPhrasesResponse} Success
		 */
		DetectKeyPhrases(requestBody: DetectKeyPhrasesRequest): Observable<DetectKeyPhrasesResponse> {
			return this.http.post<DetectKeyPhrasesResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DetectKeyPhrases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.
		 * Post #X-Amz-Target=Comprehend_20171127.DetectPiiEntities
		 * @return {DetectPiiEntitiesResponse} Success
		 */
		DetectPiiEntities(requestBody: DetectPiiEntitiesRequest): Observable<DetectPiiEntitiesResponse> {
			return this.http.post<DetectPiiEntitiesResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DetectPiiEntities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inspects text and returns an inference of the prevailing sentiment (<code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>).
		 * Post #X-Amz-Target=Comprehend_20171127.DetectSentiment
		 * @return {DetectSentimentResponse} Success
		 */
		DetectSentiment(requestBody: DetectSentimentRequest): Observable<DetectSentimentResponse> {
			return this.http.post<DetectSentimentResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DetectSentiment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Inspects text for syntax and the part of speech of words in the document. For more information, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-syntax.html">Syntax</a> in the Comprehend Developer Guide.
		 * Post #X-Amz-Target=Comprehend_20171127.DetectSyntax
		 * @return {DetectSyntaxResponse} Success
		 */
		DetectSyntax(requestBody: DetectSyntaxRequest): Observable<DetectSyntaxResponse> {
			return this.http.post<DetectSyntaxResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DetectSyntax', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Inspects the input text and returns a sentiment analysis for each entity identified in the text.</p> <p>For more information about targeted sentiment, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-targeted-sentiment.html">Targeted sentiment</a>.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment
		 * @return {DetectTargetedSentimentResponse} Success
		 */
		DetectTargetedSentiment(requestBody: DetectTargetedSentimentRequest): Observable<DetectTargetedSentimentResponse> {
			return this.http.post<DetectTargetedSentimentResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.DetectTargetedSentiment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a new custom model that replicates a source custom model that you import. The source model can be in your Amazon Web Services account or another one.</p> <p>If the source model is in another Amazon Web Services account, then it must have a resource-based policy that authorizes you to import it.</p> <p>The source model must be in the same Amazon Web Services Region that you're using when you import. You can't import a model that's in a different Region.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.ImportModel
		 * @return {ImportModelResponse} Success
		 */
		ImportModel(requestBody: ImportModelRequest): Observable<ImportModelResponse> {
			return this.http.post<ImportModelResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ImportModel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the datasets that you have configured in this Region. For more information about datasets, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
		 * Post #X-Amz-Target=Comprehend_20171127.ListDatasets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDatasetsResponse} Success
		 */
		ListDatasets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDatasetsRequest): Observable<ListDatasetsResponse> {
			return this.http.post<ListDatasetsResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListDatasets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the documentation classification jobs that you have submitted.
		 * Post #X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDocumentClassificationJobsResponse} Success
		 */
		ListDocumentClassificationJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDocumentClassificationJobsRequest): Observable<ListDocumentClassificationJobsResponse> {
			return this.http.post<ListDocumentClassificationJobsResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListDocumentClassificationJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of summaries of the document classifiers that you have created
		 * Post #X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDocumentClassifierSummariesResponse} Success
		 */
		ListDocumentClassifierSummaries(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDocumentClassifierSummariesRequest): Observable<ListDocumentClassifierSummariesResponse> {
			return this.http.post<ListDocumentClassifierSummariesResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListDocumentClassifierSummaries?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the document classifiers that you have created.
		 * Post #X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDocumentClassifiersResponse} Success
		 */
		ListDocumentClassifiers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDocumentClassifiersRequest): Observable<ListDocumentClassifiersResponse> {
			return this.http.post<ListDocumentClassifiersResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListDocumentClassifiers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the dominant language detection jobs that you have submitted.
		 * Post #X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDominantLanguageDetectionJobsResponse} Success
		 */
		ListDominantLanguageDetectionJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDominantLanguageDetectionJobsRequest): Observable<ListDominantLanguageDetectionJobsResponse> {
			return this.http.post<ListDominantLanguageDetectionJobsResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListDominantLanguageDetectionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of all existing endpoints that you've created. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
		 * Post #X-Amz-Target=Comprehend_20171127.ListEndpoints
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEndpointsResponse} Success
		 */
		ListEndpoints(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListEndpointsRequest): Observable<ListEndpointsResponse> {
			return this.http.post<ListEndpointsResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListEndpoints?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the entity detection jobs that you have submitted.
		 * Post #X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEntitiesDetectionJobsResponse} Success
		 */
		ListEntitiesDetectionJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListEntitiesDetectionJobsRequest): Observable<ListEntitiesDetectionJobsResponse> {
			return this.http.post<ListEntitiesDetectionJobsResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListEntitiesDetectionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of summaries for the entity recognizers that you have created.
		 * Post #X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEntityRecognizerSummariesResponse} Success
		 */
		ListEntityRecognizerSummaries(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListEntityRecognizerSummariesRequest): Observable<ListEntityRecognizerSummariesResponse> {
			return this.http.post<ListEntityRecognizerSummariesResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListEntityRecognizerSummaries?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list.</p> <p>The results of this list are not in any particular order. Please get the list and sort locally if needed.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.ListEntityRecognizers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEntityRecognizersResponse} Success
		 */
		ListEntityRecognizers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListEntityRecognizersRequest): Observable<ListEntityRecognizersResponse> {
			return this.http.post<ListEntityRecognizersResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListEntityRecognizers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the events detection jobs that you have submitted.
		 * Post #X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEventsDetectionJobsResponse} Success
		 */
		ListEventsDetectionJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListEventsDetectionJobsRequest): Observable<ListEventsDetectionJobsResponse> {
			return this.http.post<ListEventsDetectionJobsResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListEventsDetectionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Information about the history of a flywheel iteration. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
		 * Post #X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFlywheelIterationHistoryResponse} Success
		 */
		ListFlywheelIterationHistory(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFlywheelIterationHistoryRequest): Observable<ListFlywheelIterationHistoryResponse> {
			return this.http.post<ListFlywheelIterationHistoryResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListFlywheelIterationHistory?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the flywheels that you have created.
		 * Post #X-Amz-Target=Comprehend_20171127.ListFlywheels
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListFlywheelsResponse} Success
		 */
		ListFlywheels(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListFlywheelsRequest): Observable<ListFlywheelsResponse> {
			return this.http.post<ListFlywheelsResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListFlywheels?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of key phrase detection jobs that you have submitted.
		 * Post #X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListKeyPhrasesDetectionJobsResponse} Success
		 */
		ListKeyPhrasesDetectionJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListKeyPhrasesDetectionJobsRequest): Observable<ListKeyPhrasesDetectionJobsResponse> {
			return this.http.post<ListKeyPhrasesDetectionJobsResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListKeyPhrasesDetectionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the PII entity detection jobs that you have submitted.
		 * Post #X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPiiEntitiesDetectionJobsResponse} Success
		 */
		ListPiiEntitiesDetectionJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPiiEntitiesDetectionJobsRequest): Observable<ListPiiEntitiesDetectionJobsResponse> {
			return this.http.post<ListPiiEntitiesDetectionJobsResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListPiiEntitiesDetectionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of sentiment detection jobs that you have submitted.
		 * Post #X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSentimentDetectionJobsResponse} Success
		 */
		ListSentimentDetectionJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSentimentDetectionJobsRequest): Observable<ListSentimentDetectionJobsResponse> {
			return this.http.post<ListSentimentDetectionJobsResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListSentimentDetectionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags associated with a given Amazon Comprehend resource.
		 * Post #X-Amz-Target=Comprehend_20171127.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of targeted sentiment detection jobs that you have submitted.
		 * Post #X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTargetedSentimentDetectionJobsResponse} Success
		 */
		ListTargetedSentimentDetectionJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTargetedSentimentDetectionJobsRequest): Observable<ListTargetedSentimentDetectionJobsResponse> {
			return this.http.post<ListTargetedSentimentDetectionJobsResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListTargetedSentimentDetectionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of the topic detection jobs that you have submitted.
		 * Post #X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTopicsDetectionJobsResponse} Success
		 */
		ListTopicsDetectionJobs(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTopicsDetectionJobsRequest): Observable<ListTopicsDetectionJobsResponse> {
			return this.http.post<ListTopicsDetectionJobsResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.ListTopicsDetectionJobs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attaches a resource-based policy to a custom model. You can use this policy to authorize an entity in another Amazon Web Services account to import the custom model, which replicates it in Amazon Comprehend in their account.
		 * Post #X-Amz-Target=Comprehend_20171127.PutResourcePolicy
		 * @return {PutResourcePolicyResponse} Success
		 */
		PutResourcePolicy(requestBody: PutResourcePolicyRequest): Observable<PutResourcePolicyResponse> {
			return this.http.post<PutResourcePolicyResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.PutResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous document classification job. Use the <code>DescribeDocumentClassificationJob</code> operation to track the progress of the job.
		 * Post #X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob
		 * @return {StartDocumentClassificationJobResponse} Success
		 */
		StartDocumentClassificationJob(requestBody: StartDocumentClassificationJobRequest): Observable<StartDocumentClassificationJobResponse> {
			return this.http.post<StartDocumentClassificationJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StartDocumentClassificationJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.
		 * Post #X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob
		 * @return {StartDominantLanguageDetectionJobResponse} Success
		 */
		StartDominantLanguageDetectionJob(requestBody: StartDominantLanguageDetectionJobRequest): Observable<StartDominantLanguageDetectionJobResponse> {
			return this.http.post<StartDominantLanguageDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StartDominantLanguageDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.</p> <p>This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional <code>EntityRecognizerArn</code> must be used in order to provide access to the recognizer being used to detect the custom entity.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob
		 * @return {StartEntitiesDetectionJobResponse} Success
		 */
		StartEntitiesDetectionJob(requestBody: StartEntitiesDetectionJobRequest): Observable<StartEntitiesDetectionJobResponse> {
			return this.http.post<StartEntitiesDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StartEntitiesDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous event detection job for a collection of documents.
		 * Post #X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob
		 * @return {StartEventsDetectionJobResponse} Success
		 */
		StartEventsDetectionJob(requestBody: StartEventsDetectionJobRequest): Observable<StartEventsDetectionJobResponse> {
			return this.http.post<StartEventsDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StartEventsDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Start the flywheel iteration.This operation uses any new datasets to train a new model version. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html"> Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.
		 * Post #X-Amz-Target=Comprehend_20171127.StartFlywheelIteration
		 * @return {StartFlywheelIterationResponse} Success
		 */
		StartFlywheelIteration(requestBody: StartFlywheelIterationRequest): Observable<StartFlywheelIterationResponse> {
			return this.http.post<StartFlywheelIterationResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StartFlywheelIteration', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.
		 * Post #X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob
		 * @return {StartKeyPhrasesDetectionJobResponse} Success
		 */
		StartKeyPhrasesDetectionJob(requestBody: StartKeyPhrasesDetectionJobRequest): Observable<StartKeyPhrasesDetectionJobResponse> {
			return this.http.post<StartKeyPhrasesDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StartKeyPhrasesDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous PII entity detection job for a collection of documents.
		 * Post #X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob
		 * @return {StartPiiEntitiesDetectionJobResponse} Success
		 */
		StartPiiEntitiesDetectionJob(requestBody: StartPiiEntitiesDetectionJobRequest): Observable<StartPiiEntitiesDetectionJobResponse> {
			return this.http.post<StartPiiEntitiesDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StartPiiEntitiesDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous sentiment detection job for a collection of documents. Use the operation to track the status of a job.
		 * Post #X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob
		 * @return {StartSentimentDetectionJobResponse} Success
		 */
		StartSentimentDetectionJob(requestBody: StartSentimentDetectionJobRequest): Observable<StartSentimentDetectionJobResponse> {
			return this.http.post<StartSentimentDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StartSentimentDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous targeted sentiment detection job for a collection of documents. Use the <code>DescribeTargetedSentimentDetectionJob</code> operation to track the status of a job.
		 * Post #X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob
		 * @return {StartTargetedSentimentDetectionJobResponse} Success
		 */
		StartTargetedSentimentDetectionJob(requestBody: StartTargetedSentimentDetectionJobRequest): Observable<StartTargetedSentimentDetectionJobResponse> {
			return this.http.post<StartTargetedSentimentDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StartTargetedSentimentDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an asynchronous topic detection job. Use the <code>DescribeTopicDetectionJob</code> operation to track the status of a job.
		 * Post #X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob
		 * @return {StartTopicsDetectionJobResponse} Success
		 */
		StartTopicsDetectionJob(requestBody: StartTopicsDetectionJobRequest): Observable<StartTopicsDetectionJobResponse> {
			return this.http.post<StartTopicsDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StartTopicsDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a dominant language detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob
		 * @return {StopDominantLanguageDetectionJobResponse} Success
		 */
		StopDominantLanguageDetectionJob(requestBody: StopDominantLanguageDetectionJobRequest): Observable<StopDominantLanguageDetectionJobResponse> {
			return this.http.post<StopDominantLanguageDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StopDominantLanguageDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops an entities detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob
		 * @return {StopEntitiesDetectionJobResponse} Success
		 */
		StopEntitiesDetectionJob(requestBody: StopEntitiesDetectionJobRequest): Observable<StopEntitiesDetectionJobResponse> {
			return this.http.post<StopEntitiesDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StopEntitiesDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops an events detection job in progress.
		 * Post #X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob
		 * @return {StopEventsDetectionJobResponse} Success
		 */
		StopEventsDetectionJob(requestBody: StopEventsDetectionJobRequest): Observable<StopEventsDetectionJobResponse> {
			return this.http.post<StopEventsDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StopEventsDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a key phrases detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob
		 * @return {StopKeyPhrasesDetectionJobResponse} Success
		 */
		StopKeyPhrasesDetectionJob(requestBody: StopKeyPhrasesDetectionJobRequest): Observable<StopKeyPhrasesDetectionJobResponse> {
			return this.http.post<StopKeyPhrasesDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StopKeyPhrasesDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a PII entities detection job in progress.
		 * Post #X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob
		 * @return {StopPiiEntitiesDetectionJobResponse} Success
		 */
		StopPiiEntitiesDetectionJob(requestBody: StopPiiEntitiesDetectionJobRequest): Observable<StopPiiEntitiesDetectionJobResponse> {
			return this.http.post<StopPiiEntitiesDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StopPiiEntitiesDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob
		 * @return {StopSentimentDetectionJobResponse} Success
		 */
		StopSentimentDetectionJob(requestBody: StopSentimentDetectionJobRequest): Observable<StopSentimentDetectionJobResponse> {
			return this.http.post<StopSentimentDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StopSentimentDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a targeted sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob
		 * @return {StopTargetedSentimentDetectionJobResponse} Success
		 */
		StopTargetedSentimentDetectionJob(requestBody: StopTargetedSentimentDetectionJobRequest): Observable<StopTargetedSentimentDetectionJobResponse> {
			return this.http.post<StopTargetedSentimentDetectionJobResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StopTargetedSentimentDetectionJob', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a document classifier training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and put into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body. </p>
		 * Post #X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier
		 * @return {StopTrainingDocumentClassifierResponse} Success
		 */
		StopTrainingDocumentClassifier(requestBody: StopTrainingDocumentClassifierRequest): Observable<StopTrainingDocumentClassifierResponse> {
			return this.http.post<StopTrainingDocumentClassifierResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StopTrainingDocumentClassifier', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops an entity recognizer training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and putted into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body.</p>
		 * Post #X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer
		 * @return {StopTrainingEntityRecognizerResponse} Success
		 */
		StopTrainingEntityRecognizer(requestBody: StopTrainingEntityRecognizerRequest): Observable<StopTrainingEntityRecognizerResponse> {
			return this.http.post<StopTrainingEntityRecognizerResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.StopTrainingEntityRecognizer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
		 * Post #X-Amz-Target=Comprehend_20171127.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a specific tag associated with an Amazon Comprehend resource.
		 * Post #X-Amz-Target=Comprehend_20171127.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates information about the specified endpoint. For information about endpoints, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/manage-endpoints.html">Managing endpoints</a>.
		 * Post #X-Amz-Target=Comprehend_20171127.UpdateEndpoint
		 * @return {UpdateEndpointResponse} Success
		 */
		UpdateEndpoint(requestBody: UpdateEndpointRequest): Observable<UpdateEndpointResponse> {
			return this.http.post<UpdateEndpointResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.UpdateEndpoint', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update the configuration information for an existing flywheel.
		 * Post #X-Amz-Target=Comprehend_20171127.UpdateFlywheel
		 * @return {UpdateFlywheelResponse} Success
		 */
		UpdateFlywheel(requestBody: UpdateFlywheelRequest): Observable<UpdateFlywheelResponse> {
			return this.http.post<UpdateFlywheelResponse>(this.baseUri + '#X-Amz-Target=Comprehend_20171127.UpdateFlywheel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BatchDetectDominantLanguageX_Amz_Target { 'Comprehend_20171127.BatchDetectDominantLanguage' = 0 }

	export enum BatchDetectEntitiesX_Amz_Target { 'Comprehend_20171127.BatchDetectEntities' = 0 }

	export enum BatchDetectKeyPhrasesX_Amz_Target { 'Comprehend_20171127.BatchDetectKeyPhrases' = 0 }

	export enum BatchDetectSentimentX_Amz_Target { 'Comprehend_20171127.BatchDetectSentiment' = 0 }

	export enum BatchDetectSyntaxX_Amz_Target { 'Comprehend_20171127.BatchDetectSyntax' = 0 }

	export enum BatchDetectTargetedSentimentX_Amz_Target { 'Comprehend_20171127.BatchDetectTargetedSentiment' = 0 }

	export enum ClassifyDocumentX_Amz_Target { 'Comprehend_20171127.ClassifyDocument' = 0 }

	export enum ContainsPiiEntitiesX_Amz_Target { 'Comprehend_20171127.ContainsPiiEntities' = 0 }

	export enum CreateDatasetX_Amz_Target { 'Comprehend_20171127.CreateDataset' = 0 }

	export enum CreateDocumentClassifierX_Amz_Target { 'Comprehend_20171127.CreateDocumentClassifier' = 0 }

	export enum CreateEndpointX_Amz_Target { 'Comprehend_20171127.CreateEndpoint' = 0 }

	export enum CreateEntityRecognizerX_Amz_Target { 'Comprehend_20171127.CreateEntityRecognizer' = 0 }

	export enum CreateFlywheelX_Amz_Target { 'Comprehend_20171127.CreateFlywheel' = 0 }

	export enum DeleteDocumentClassifierX_Amz_Target { 'Comprehend_20171127.DeleteDocumentClassifier' = 0 }

	export enum DeleteEndpointX_Amz_Target { 'Comprehend_20171127.DeleteEndpoint' = 0 }

	export enum DeleteEntityRecognizerX_Amz_Target { 'Comprehend_20171127.DeleteEntityRecognizer' = 0 }

	export enum DeleteFlywheelX_Amz_Target { 'Comprehend_20171127.DeleteFlywheel' = 0 }

	export enum DeleteResourcePolicyX_Amz_Target { 'Comprehend_20171127.DeleteResourcePolicy' = 0 }

	export enum DescribeDatasetX_Amz_Target { 'Comprehend_20171127.DescribeDataset' = 0 }

	export enum DescribeDocumentClassificationJobX_Amz_Target { 'Comprehend_20171127.DescribeDocumentClassificationJob' = 0 }

	export enum DescribeDocumentClassifierX_Amz_Target { 'Comprehend_20171127.DescribeDocumentClassifier' = 0 }

	export enum DescribeDominantLanguageDetectionJobX_Amz_Target { 'Comprehend_20171127.DescribeDominantLanguageDetectionJob' = 0 }

	export enum DescribeEndpointX_Amz_Target { 'Comprehend_20171127.DescribeEndpoint' = 0 }

	export enum DescribeEntitiesDetectionJobX_Amz_Target { 'Comprehend_20171127.DescribeEntitiesDetectionJob' = 0 }

	export enum DescribeEntityRecognizerX_Amz_Target { 'Comprehend_20171127.DescribeEntityRecognizer' = 0 }

	export enum DescribeEventsDetectionJobX_Amz_Target { 'Comprehend_20171127.DescribeEventsDetectionJob' = 0 }

	export enum DescribeFlywheelX_Amz_Target { 'Comprehend_20171127.DescribeFlywheel' = 0 }

	export enum DescribeFlywheelIterationX_Amz_Target { 'Comprehend_20171127.DescribeFlywheelIteration' = 0 }

	export enum DescribeKeyPhrasesDetectionJobX_Amz_Target { 'Comprehend_20171127.DescribeKeyPhrasesDetectionJob' = 0 }

	export enum DescribePiiEntitiesDetectionJobX_Amz_Target { 'Comprehend_20171127.DescribePiiEntitiesDetectionJob' = 0 }

	export enum DescribeResourcePolicyX_Amz_Target { 'Comprehend_20171127.DescribeResourcePolicy' = 0 }

	export enum DescribeSentimentDetectionJobX_Amz_Target { 'Comprehend_20171127.DescribeSentimentDetectionJob' = 0 }

	export enum DescribeTargetedSentimentDetectionJobX_Amz_Target { 'Comprehend_20171127.DescribeTargetedSentimentDetectionJob' = 0 }

	export enum DescribeTopicsDetectionJobX_Amz_Target { 'Comprehend_20171127.DescribeTopicsDetectionJob' = 0 }

	export enum DetectDominantLanguageX_Amz_Target { 'Comprehend_20171127.DetectDominantLanguage' = 0 }

	export enum DetectEntitiesX_Amz_Target { 'Comprehend_20171127.DetectEntities' = 0 }

	export enum DetectKeyPhrasesX_Amz_Target { 'Comprehend_20171127.DetectKeyPhrases' = 0 }

	export enum DetectPiiEntitiesX_Amz_Target { 'Comprehend_20171127.DetectPiiEntities' = 0 }

	export enum DetectSentimentX_Amz_Target { 'Comprehend_20171127.DetectSentiment' = 0 }

	export enum DetectSyntaxX_Amz_Target { 'Comprehend_20171127.DetectSyntax' = 0 }

	export enum DetectTargetedSentimentX_Amz_Target { 'Comprehend_20171127.DetectTargetedSentiment' = 0 }

	export enum ImportModelX_Amz_Target { 'Comprehend_20171127.ImportModel' = 0 }

	export enum ListDatasetsX_Amz_Target { 'Comprehend_20171127.ListDatasets' = 0 }

	export enum ListDocumentClassificationJobsX_Amz_Target { 'Comprehend_20171127.ListDocumentClassificationJobs' = 0 }

	export enum ListDocumentClassifierSummariesX_Amz_Target { 'Comprehend_20171127.ListDocumentClassifierSummaries' = 0 }

	export enum ListDocumentClassifiersX_Amz_Target { 'Comprehend_20171127.ListDocumentClassifiers' = 0 }

	export enum ListDominantLanguageDetectionJobsX_Amz_Target { 'Comprehend_20171127.ListDominantLanguageDetectionJobs' = 0 }

	export enum ListEndpointsX_Amz_Target { 'Comprehend_20171127.ListEndpoints' = 0 }

	export enum ListEntitiesDetectionJobsX_Amz_Target { 'Comprehend_20171127.ListEntitiesDetectionJobs' = 0 }

	export enum ListEntityRecognizerSummariesX_Amz_Target { 'Comprehend_20171127.ListEntityRecognizerSummaries' = 0 }

	export enum ListEntityRecognizersX_Amz_Target { 'Comprehend_20171127.ListEntityRecognizers' = 0 }

	export enum ListEventsDetectionJobsX_Amz_Target { 'Comprehend_20171127.ListEventsDetectionJobs' = 0 }

	export enum ListFlywheelIterationHistoryX_Amz_Target { 'Comprehend_20171127.ListFlywheelIterationHistory' = 0 }

	export enum ListFlywheelsX_Amz_Target { 'Comprehend_20171127.ListFlywheels' = 0 }

	export enum ListKeyPhrasesDetectionJobsX_Amz_Target { 'Comprehend_20171127.ListKeyPhrasesDetectionJobs' = 0 }

	export enum ListPiiEntitiesDetectionJobsX_Amz_Target { 'Comprehend_20171127.ListPiiEntitiesDetectionJobs' = 0 }

	export enum ListSentimentDetectionJobsX_Amz_Target { 'Comprehend_20171127.ListSentimentDetectionJobs' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'Comprehend_20171127.ListTagsForResource' = 0 }

	export enum ListTargetedSentimentDetectionJobsX_Amz_Target { 'Comprehend_20171127.ListTargetedSentimentDetectionJobs' = 0 }

	export enum ListTopicsDetectionJobsX_Amz_Target { 'Comprehend_20171127.ListTopicsDetectionJobs' = 0 }

	export enum PutResourcePolicyX_Amz_Target { 'Comprehend_20171127.PutResourcePolicy' = 0 }

	export enum StartDocumentClassificationJobX_Amz_Target { 'Comprehend_20171127.StartDocumentClassificationJob' = 0 }

	export enum StartDominantLanguageDetectionJobX_Amz_Target { 'Comprehend_20171127.StartDominantLanguageDetectionJob' = 0 }

	export enum StartEntitiesDetectionJobX_Amz_Target { 'Comprehend_20171127.StartEntitiesDetectionJob' = 0 }

	export enum StartEventsDetectionJobX_Amz_Target { 'Comprehend_20171127.StartEventsDetectionJob' = 0 }

	export enum StartFlywheelIterationX_Amz_Target { 'Comprehend_20171127.StartFlywheelIteration' = 0 }

	export enum StartKeyPhrasesDetectionJobX_Amz_Target { 'Comprehend_20171127.StartKeyPhrasesDetectionJob' = 0 }

	export enum StartPiiEntitiesDetectionJobX_Amz_Target { 'Comprehend_20171127.StartPiiEntitiesDetectionJob' = 0 }

	export enum StartSentimentDetectionJobX_Amz_Target { 'Comprehend_20171127.StartSentimentDetectionJob' = 0 }

	export enum StartTargetedSentimentDetectionJobX_Amz_Target { 'Comprehend_20171127.StartTargetedSentimentDetectionJob' = 0 }

	export enum StartTopicsDetectionJobX_Amz_Target { 'Comprehend_20171127.StartTopicsDetectionJob' = 0 }

	export enum StopDominantLanguageDetectionJobX_Amz_Target { 'Comprehend_20171127.StopDominantLanguageDetectionJob' = 0 }

	export enum StopEntitiesDetectionJobX_Amz_Target { 'Comprehend_20171127.StopEntitiesDetectionJob' = 0 }

	export enum StopEventsDetectionJobX_Amz_Target { 'Comprehend_20171127.StopEventsDetectionJob' = 0 }

	export enum StopKeyPhrasesDetectionJobX_Amz_Target { 'Comprehend_20171127.StopKeyPhrasesDetectionJob' = 0 }

	export enum StopPiiEntitiesDetectionJobX_Amz_Target { 'Comprehend_20171127.StopPiiEntitiesDetectionJob' = 0 }

	export enum StopSentimentDetectionJobX_Amz_Target { 'Comprehend_20171127.StopSentimentDetectionJob' = 0 }

	export enum StopTargetedSentimentDetectionJobX_Amz_Target { 'Comprehend_20171127.StopTargetedSentimentDetectionJob' = 0 }

	export enum StopTrainingDocumentClassifierX_Amz_Target { 'Comprehend_20171127.StopTrainingDocumentClassifier' = 0 }

	export enum StopTrainingEntityRecognizerX_Amz_Target { 'Comprehend_20171127.StopTrainingEntityRecognizer' = 0 }

	export enum TagResourceX_Amz_Target { 'Comprehend_20171127.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'Comprehend_20171127.UntagResource' = 0 }

	export enum UpdateEndpointX_Amz_Target { 'Comprehend_20171127.UpdateEndpoint' = 0 }

	export enum UpdateFlywheelX_Amz_Target { 'Comprehend_20171127.UpdateFlywheel' = 0 }

}

