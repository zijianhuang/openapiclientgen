import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The comment analysis request message. Next ID: 11 */
	export interface AnalyzeCommentRequest {

		/** Opaque token that is echoed from the request to the response. */
		clientToken?: string | null;

		/** Represents a body of text. */
		comment?: TextEntry;

		/** Optional identifier associating this AnalyzeCommentRequest with a particular client's community. Different communities may have different norms and rules. Specifying this value enables us to explore building community-specific models for clients. */
		communityId?: string | null;

		/** Context is typically something that a Comment is referencing or replying to (such as an article, or previous comment). Note: Populate only ONE OF the following fields. The oneof syntax cannot be used because that would require nesting entries inside another message and breaking backwards compatibility. The server will return an error if more than one of the following fields is present. */
		context?: Context;

		/** Do not store the comment or context sent in this request. By default, the service may store comments/context for debugging purposes. */
		doNotStore?: boolean | null;

		/** If specified, any requested attribute that is requested but not supported for the language detected will be dropped from the returned scores instead of returning an error. */
		dropUnsupportedAttributes?: boolean | null;

		/** The language(s) of the comment and context. If none are specified, we attempt to automatically detect the language. Specifying multiple languages means the text contains multiple lanugages. Both ISO and BCP-47 language codes are accepted. The server returns an error if no language was specified and language detection fails. The server also returns an error if the languages (either specified by the caller, or auto-detected) are not *all* supported by the service. */
		languages?: Array<string>;

		/** Specification of requested attributes. The AttributeParameters serve as configuration for each associated attribute. The map keys are attribute names. The available attributes may be different on each RFE installation, and can be seen by calling ListAttributes (see above). For the prod installation, known as Perspective API, see https://developers.perspectiveapi.com/s/about-the-api-model-cards. */
		requestedAttributes?: {[id: string]: AttributeParameters };

		/** Session ID. Used to join related RPCs into a single session. For example, an interactive tool that calls both the AnalyzeComment and SuggestCommentScore RPCs should set all invocations of both RPCs to the same Session ID, typically a random 64-bit integer. */
		sessionId?: string | null;

		/** An advisory parameter that will return span annotations if the model is capable of providing scores with sub-comment resolution. This will likely increase the size of the returned message. */
		spanAnnotations?: boolean | null;
	}

	/** The comment analysis request message. Next ID: 11 */
	export interface AnalyzeCommentRequestFormProperties {

		/** Opaque token that is echoed from the request to the response. */
		clientToken: FormControl<string | null | undefined>,

		/** Optional identifier associating this AnalyzeCommentRequest with a particular client's community. Different communities may have different norms and rules. Specifying this value enables us to explore building community-specific models for clients. */
		communityId: FormControl<string | null | undefined>,

		/** Do not store the comment or context sent in this request. By default, the service may store comments/context for debugging purposes. */
		doNotStore: FormControl<boolean | null | undefined>,

		/** If specified, any requested attribute that is requested but not supported for the language detected will be dropped from the returned scores instead of returning an error. */
		dropUnsupportedAttributes: FormControl<boolean | null | undefined>,

		/** Specification of requested attributes. The AttributeParameters serve as configuration for each associated attribute. The map keys are attribute names. The available attributes may be different on each RFE installation, and can be seen by calling ListAttributes (see above). For the prod installation, known as Perspective API, see https://developers.perspectiveapi.com/s/about-the-api-model-cards. */
		requestedAttributes: FormControl<{[id: string]: AttributeParameters } | null | undefined>,

		/** Session ID. Used to join related RPCs into a single session. For example, an interactive tool that calls both the AnalyzeComment and SuggestCommentScore RPCs should set all invocations of both RPCs to the same Session ID, typically a random 64-bit integer. */
		sessionId: FormControl<string | null | undefined>,

		/** An advisory parameter that will return span annotations if the model is capable of providing scores with sub-comment resolution. This will likely increase the size of the returned message. */
		spanAnnotations: FormControl<boolean | null | undefined>,
	}
	export function CreateAnalyzeCommentRequestFormGroup() {
		return new FormGroup<AnalyzeCommentRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			communityId: new FormControl<string | null | undefined>(undefined),
			doNotStore: new FormControl<boolean | null | undefined>(undefined),
			dropUnsupportedAttributes: new FormControl<boolean | null | undefined>(undefined),
			requestedAttributes: new FormControl<{[id: string]: AttributeParameters } | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			spanAnnotations: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a body of text. */
	export interface TextEntry {

		/** UTF-8 encoded text. */
		text?: string | null;

		/** Type of the text field. */
		type?: TextEntryType | null;
	}

	/** Represents a body of text. */
	export interface TextEntryFormProperties {

		/** UTF-8 encoded text. */
		text: FormControl<string | null | undefined>,

		/** Type of the text field. */
		type: FormControl<TextEntryType | null | undefined>,
	}
	export function CreateTextEntryFormGroup() {
		return new FormGroup<TextEntryFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TextEntryType | null | undefined>(undefined),
		});

	}

	export enum TextEntryType { TEXT_TYPE_UNSPECIFIED = 'TEXT_TYPE_UNSPECIFIED', PLAIN_TEXT = 'PLAIN_TEXT', HTML = 'HTML' }


	/** Context is typically something that a Comment is referencing or replying to (such as an article, or previous comment). Note: Populate only ONE OF the following fields. The oneof syntax cannot be used because that would require nesting entries inside another message and breaking backwards compatibility. The server will return an error if more than one of the following fields is present. */
	export interface Context {

		/** A type of context specific to a comment left on a single-threaded comment message board, where comments are either a top level comment or the child of a top level comment. */
		articleAndParentComment?: ArticleAndParentComment;

		/** A list of messages. For example, a linear comments section or forum thread. */
		entries?: Array<TextEntry>;
	}

	/** Context is typically something that a Comment is referencing or replying to (such as an article, or previous comment). Note: Populate only ONE OF the following fields. The oneof syntax cannot be used because that would require nesting entries inside another message and breaking backwards compatibility. The server will return an error if more than one of the following fields is present. */
	export interface ContextFormProperties {
	}
	export function CreateContextFormGroup() {
		return new FormGroup<ContextFormProperties>({
		});

	}


	/** A type of context specific to a comment left on a single-threaded comment message board, where comments are either a top level comment or the child of a top level comment. */
	export interface ArticleAndParentComment {

		/** Represents a body of text. */
		article?: TextEntry;

		/** Represents a body of text. */
		parentComment?: TextEntry;
	}

	/** A type of context specific to a comment left on a single-threaded comment message board, where comments are either a top level comment or the child of a top level comment. */
	export interface ArticleAndParentCommentFormProperties {
	}
	export function CreateArticleAndParentCommentFormGroup() {
		return new FormGroup<ArticleAndParentCommentFormProperties>({
		});

	}


	/** Configurable parameters for attribute scoring. */
	export interface AttributeParameters {

		/** Don't return scores for this attribute that are below this threshold. If unset, a default threshold will be applied. A FloatValue wrapper is used to distinguish between 0 vs. default/unset. */
		scoreThreshold?: number | null;

		/** What type of scores to return. If unset, defaults to probability scores. */
		scoreType?: AttributeParametersScoreType | null;
	}

	/** Configurable parameters for attribute scoring. */
	export interface AttributeParametersFormProperties {

		/** Don't return scores for this attribute that are below this threshold. If unset, a default threshold will be applied. A FloatValue wrapper is used to distinguish between 0 vs. default/unset. */
		scoreThreshold: FormControl<number | null | undefined>,

		/** What type of scores to return. If unset, defaults to probability scores. */
		scoreType: FormControl<AttributeParametersScoreType | null | undefined>,
	}
	export function CreateAttributeParametersFormGroup() {
		return new FormGroup<AttributeParametersFormProperties>({
			scoreThreshold: new FormControl<number | null | undefined>(undefined),
			scoreType: new FormControl<AttributeParametersScoreType | null | undefined>(undefined),
		});

	}

	export enum AttributeParametersScoreType { SCORE_TYPE_UNSPECIFIED = 'SCORE_TYPE_UNSPECIFIED', PROBABILITY = 'PROBABILITY', STD_DEV_SCORE = 'STD_DEV_SCORE', PERCENTILE = 'PERCENTILE', RAW = 'RAW' }


	/** The comment analysis response message. */
	export interface AnalyzeCommentResponse {

		/** Scores for the requested attributes. The map keys are attribute names (same as the requested_attribute field in AnalyzeCommentRequest, for example "ATTACK_ON_AUTHOR", "INFLAMMATORY", etc). */
		attributeScores?: {[id: string]: AttributeScores };

		/** Same token from the original AnalyzeCommentRequest. */
		clientToken?: string | null;

		/** Contains the languages detected from the text content, sorted in order of likelihood. */
		detectedLanguages?: Array<string>;

		/** The language(s) used by CommentAnalyzer service to choose which Model to use when analyzing the comment. Might better be called "effective_languages". The logic used to make the choice is as follows: if !Request.languages.empty() effective_languages = Request.languages else effective_languages = detected_languages[0] */
		languages?: Array<string>;
	}

	/** The comment analysis response message. */
	export interface AnalyzeCommentResponseFormProperties {

		/** Scores for the requested attributes. The map keys are attribute names (same as the requested_attribute field in AnalyzeCommentRequest, for example "ATTACK_ON_AUTHOR", "INFLAMMATORY", etc). */
		attributeScores: FormControl<{[id: string]: AttributeScores } | null | undefined>,

		/** Same token from the original AnalyzeCommentRequest. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeCommentResponseFormGroup() {
		return new FormGroup<AnalyzeCommentResponseFormProperties>({
			attributeScores: new FormControl<{[id: string]: AttributeScores } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This holds score values for a single attribute. It contains both per-span scores as well as an overall summary score.. */
	export interface AttributeScores {

		/** Per-span scores. */
		spanScores?: Array<SpanScore>;

		/** Analysis scores are described by a value and a ScoreType. */
		summaryScore?: Score;
	}

	/** This holds score values for a single attribute. It contains both per-span scores as well as an overall summary score.. */
	export interface AttributeScoresFormProperties {
	}
	export function CreateAttributeScoresFormGroup() {
		return new FormGroup<AttributeScoresFormProperties>({
		});

	}


	/** This is a single score for a given span of text. */
	export interface SpanScore {

		/** "begin" and "end" describe the span of the original text that the attribute score applies to. The values are the UTF-16 codepoint range. "end" is exclusive. For example, with the text "Hi there", the begin/end pair (0,2) describes the text "Hi". If "begin" and "end" are unset, the score applies to the full text. */
		begin?: number | null;
		end?: number | null;

		/** Analysis scores are described by a value and a ScoreType. */
		score?: Score;
	}

	/** This is a single score for a given span of text. */
	export interface SpanScoreFormProperties {

		/** "begin" and "end" describe the span of the original text that the attribute score applies to. The values are the UTF-16 codepoint range. "end" is exclusive. For example, with the text "Hi there", the begin/end pair (0,2) describes the text "Hi". If "begin" and "end" are unset, the score applies to the full text. */
		begin: FormControl<number | null | undefined>,
		end: FormControl<number | null | undefined>,
	}
	export function CreateSpanScoreFormGroup() {
		return new FormGroup<SpanScoreFormProperties>({
			begin: new FormControl<number | null | undefined>(undefined),
			end: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Analysis scores are described by a value and a ScoreType. */
	export interface Score {

		/** The type of the above value. */
		type?: AttributeParametersScoreType | null;

		/** Score value. Semantics described by type below. */
		value?: number | null;
	}

	/** Analysis scores are described by a value and a ScoreType. */
	export interface ScoreFormProperties {

		/** The type of the above value. */
		type: FormControl<AttributeParametersScoreType | null | undefined>,

		/** Score value. Semantics described by type below. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateScoreFormGroup() {
		return new FormGroup<ScoreFormProperties>({
			type: new FormControl<AttributeParametersScoreType | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The comment score suggestion request message. */
	export interface SuggestCommentScoreRequest {

		/** Attribute scores for the comment. The map keys are attribute names, same as the requested_attribute field in AnalyzeCommentRequest (for example "ATTACK_ON_AUTHOR", "INFLAMMATORY", etc.). This field has the same type as the `attribute_scores` field in AnalyzeCommentResponse. To specify an overall attribute score for the entire comment as a whole, use the `summary_score` field of the mapped AttributeScores object. To specify scores on specific subparts of the comment, use the `span_scores` field. All SpanScore objects must have begin and end fields set. All Score objects must be explicitly set (for binary classification, use the score values 0 and 1). If Score objects don't include a ScoreType, `PROBABILITY` is assumed. `attribute_scores` must not be empty. The mapped AttributeScores objects also must not be empty. An `INVALID_ARGUMENT` error is returned for all malformed requests. */
		attributeScores?: {[id: string]: AttributeScores };

		/** Opaque token that is echoed from the request to the response. */
		clientToken?: string | null;

		/** Represents a body of text. */
		comment?: TextEntry;

		/** Optional identifier associating this comment score suggestion with a particular sub-community. Different communities may have different norms and rules. Specifying this value enables training community-specific models. */
		communityId?: string | null;

		/** Context is typically something that a Comment is referencing or replying to (such as an article, or previous comment). Note: Populate only ONE OF the following fields. The oneof syntax cannot be used because that would require nesting entries inside another message and breaking backwards compatibility. The server will return an error if more than one of the following fields is present. */
		context?: Context;

		/** The language(s) of the comment and context. If none are specified, we attempt to automatically detect the language. Both ISO and BCP-47 language codes are accepted. */
		languages?: Array<string>;

		/** Session ID. Used to join related RPCs into a single session. For example, an interactive tool that calls both the AnalyzeComment and SuggestCommentScore RPCs should set all invocations of both RPCs to the same Session ID, typically a random 64-bit integer. */
		sessionId?: string | null;
	}

	/** The comment score suggestion request message. */
	export interface SuggestCommentScoreRequestFormProperties {

		/** Attribute scores for the comment. The map keys are attribute names, same as the requested_attribute field in AnalyzeCommentRequest (for example "ATTACK_ON_AUTHOR", "INFLAMMATORY", etc.). This field has the same type as the `attribute_scores` field in AnalyzeCommentResponse. To specify an overall attribute score for the entire comment as a whole, use the `summary_score` field of the mapped AttributeScores object. To specify scores on specific subparts of the comment, use the `span_scores` field. All SpanScore objects must have begin and end fields set. All Score objects must be explicitly set (for binary classification, use the score values 0 and 1). If Score objects don't include a ScoreType, `PROBABILITY` is assumed. `attribute_scores` must not be empty. The mapped AttributeScores objects also must not be empty. An `INVALID_ARGUMENT` error is returned for all malformed requests. */
		attributeScores: FormControl<{[id: string]: AttributeScores } | null | undefined>,

		/** Opaque token that is echoed from the request to the response. */
		clientToken: FormControl<string | null | undefined>,

		/** Optional identifier associating this comment score suggestion with a particular sub-community. Different communities may have different norms and rules. Specifying this value enables training community-specific models. */
		communityId: FormControl<string | null | undefined>,

		/** Session ID. Used to join related RPCs into a single session. For example, an interactive tool that calls both the AnalyzeComment and SuggestCommentScore RPCs should set all invocations of both RPCs to the same Session ID, typically a random 64-bit integer. */
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreateSuggestCommentScoreRequestFormGroup() {
		return new FormGroup<SuggestCommentScoreRequestFormProperties>({
			attributeScores: new FormControl<{[id: string]: AttributeScores } | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			communityId: new FormControl<string | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The comment score suggestion response message. */
	export interface SuggestCommentScoreResponse {

		/** Same token from the original SuggestCommentScoreRequest. */
		clientToken?: string | null;

		/** The list of languages detected from the comment text. */
		detectedLanguages?: Array<string>;

		/** The list of languages provided in the request. */
		requestedLanguages?: Array<string>;
	}

	/** The comment score suggestion response message. */
	export interface SuggestCommentScoreResponseFormProperties {

		/** Same token from the original SuggestCommentScoreRequest. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateSuggestCommentScoreResponseFormGroup() {
		return new FormGroup<SuggestCommentScoreResponseFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Analyzes the provided text and returns scores for requested attributes.
		 * Post v1alpha1/comments:analyze
		 * @return {AnalyzeCommentResponse} Successful response
		 */
		Commentanalyzer_comments_analyze(requestBody: AnalyzeCommentRequest): Observable<AnalyzeCommentResponse> {
			return this.http.post<AnalyzeCommentResponse>(this.baseUri + 'v1alpha1/comments:analyze', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Suggest comment scores as training data.
		 * Post v1alpha1/comments:suggestscore
		 * @return {SuggestCommentScoreResponse} Successful response
		 */
		Commentanalyzer_comments_suggestscore(requestBody: SuggestCommentScoreRequest): Observable<SuggestCommentScoreResponse> {
			return this.http.post<SuggestCommentScoreResponse>(this.baseUri + 'v1alpha1/comments:suggestscore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

