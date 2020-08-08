import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * The comment analysis request message.
	 * LINT.IfChange
	 */
	export interface AnalyzeCommentRequest {

		/** Opaque token that is echoed from the request to the response. */
		clientToken?: string;

		/** Represents a body of text. */
		comment?: TextEntry;

		/**
		 * Optional identifier associating this AnalyzeCommentRequest with a
		 * particular client's community. Different communities may have different
		 * norms and rules. Specifying this value enables us to explore building
		 * community-specific models for clients.
		 */
		communityId?: string;

		/**
		 * Context is typically something that a Comment is referencing or replying to
		 * (such as an article, or previous comment).
		 * Note: Populate only ONE OF the following fields. The oneof syntax cannot be
		 * used because that would require nesting entries inside another message and
		 * breaking backwards compatibility. The server will return an error if more
		 * than one of the following fields is present.
		 */
		context?: Context;

		/**
		 * Do not store the comment or context sent in this request. By default, the
		 * service may store comments/context for debugging purposes.
		 */
		doNotStore?: boolean;

		/**
		 * The language(s) of the comment and context. If none are specified, we
		 * attempt to automatically detect the language. Specifying multiple languages
		 * means the text contains multiple lanugages. Both ISO and BCP-47 language
		 * codes are accepted.
		 * The server returns an error if no language was specified and language
		 * detection fails. The server also returns an error if the languages (either
		 * specified by the caller, or auto-detected) are not *all* supported by the
		 * service.
		 */
		languages?: Array<string>;

		/**
		 * Specification of requested attributes. The AttributeParameters serve as
		 * configuration for each associated attribute. The map keys are attribute
		 * names. The available attributes may be different on each RFE installation,
		 * and can be seen by calling ListAttributes (see above).
		 * For the prod installation, known as Perspective API, at
		 * blade:commentanalyzer-esf and commentanalyzer.googleapis.com, see
		 * go/checker-models (internal) and
		 * https://github.com/conversationai/perspectiveapi/blob/master/2-api/models.md#all-attribute-types.
		 */
		requestedAttributes?: {[id: string]: AttributeParameters };

		/**
		 * Session ID. Used to join related RPCs into a single session. For example,
		 * an interactive tool that calls both the AnalyzeComment and
		 * SuggestCommentScore RPCs should set all invocations of both RPCs to the
		 * same Session ID, typically a random 64-bit integer.
		 */
		sessionId?: string;

		/**
		 * An advisory parameter that will return span annotations if the model
		 * is capable of providing scores with sub-comment resolution. This will
		 * likely increase the size of the returned message.
		 */
		spanAnnotations?: boolean;
	}


	/** Represents a body of text. */
	export interface TextEntry {

		/** UTF-8 encoded text. */
		text?: string;

		/** Type of the text field. */
		type?: TextEntryType;
	}

	export enum TextEntryType { TEXT_TYPE_UNSPECIFIED = 0, PLAIN_TEXT = 1, HTML = 2 }


	/**
	 * Context is typically something that a Comment is referencing or replying to
	 * (such as an article, or previous comment).
	 * Note: Populate only ONE OF the following fields. The oneof syntax cannot be
	 * used because that would require nesting entries inside another message and
	 * breaking backwards compatibility. The server will return an error if more
	 * than one of the following fields is present.
	 */
	export interface Context {

		/**
		 * A type of context specific to a comment left on a single-threaded comment
		 * message board, where comments are either a top level comment or the child of
		 * a top level comment.
		 */
		articleAndParentComment?: ArticleAndParentComment;

		/** A list of messages. For example, a linear comments section or forum thread. */
		entries?: Array<TextEntry>;
	}


	/**
	 * A type of context specific to a comment left on a single-threaded comment
	 * message board, where comments are either a top level comment or the child of
	 * a top level comment.
	 */
	export interface ArticleAndParentComment {

		/** Represents a body of text. */
		article?: TextEntry;

		/** Represents a body of text. */
		parentComment?: TextEntry;
	}


	/** Configurable parameters for attribute scoring. */
	export interface AttributeParameters {

		/**
		 * Don't return scores for this attribute that are below this threshold. If
		 * unset, a default threshold will be applied. A FloatValue wrapper is used to
		 * distinguish between 0 vs. default/unset.
		 */
		scoreThreshold?: number;

		/** What type of scores to return. If unset, defaults to probability scores. */
		scoreType?: AttributeParametersScoreType;
	}

	export enum AttributeParametersScoreType { SCORE_TYPE_UNSPECIFIED = 0, PROBABILITY = 1, STD_DEV_SCORE = 2, PERCENTILE = 3, RAW = 4 }


	/** The comment analysis response message. */
	export interface AnalyzeCommentResponse {

		/**
		 * Scores for the requested attributes. The map keys are attribute names (same
		 * as the requested_attribute field in AnalyzeCommentRequest, for example
		 * "ATTACK_ON_AUTHOR", "INFLAMMATORY", etc).
		 */
		attributeScores?: {[id: string]: AttributeScores };

		/** Same token from the original AnalyzeCommentRequest. */
		clientToken?: string;

		/**
		 * Contains the languages detected from the text content, sorted in order of
		 * likelihood.
		 */
		detectedLanguages?: Array<string>;

		/**
		 * The language(s) used by CommentAnalyzer service to choose which Model to
		 * use when analyzing the comment. Might better be called
		 * "effective_languages". The logic used to make the choice is as follows:
		 * if !Request.languages.empty()
		 * effective_languages = Request.languages
		 * else
		 * effective_languages = detected_languages[0]
		 */
		languages?: Array<string>;
	}


	/**
	 * This holds score values for a single attribute. It contains both per-span
	 * scores as well as an overall summary score..
	 */
	export interface AttributeScores {

		/** Per-span scores. */
		spanScores?: Array<SpanScore>;

		/** Analysis scores are described by a value and a ScoreType. */
		summaryScore?: Score;
	}


	/** This is a single score for a given span of text. */
	export interface SpanScore {

		/**
		 * "begin" and "end" describe the span of the original text that the attribute
		 * score applies to. The values are the UTF-16 codepoint range. "end" is
		 * exclusive. For example, with the text "Hi there", the begin/end pair (0,2)
		 * describes the text "Hi".
		 * If "begin" and "end" are unset, the score applies to the full text.
		 */
		begin?: number;
		end?: number;

		/** Analysis scores are described by a value and a ScoreType. */
		score?: Score;
	}


	/** Analysis scores are described by a value and a ScoreType. */
	export interface Score {

		/** The type of the above value. */
		type?: AttributeParametersScoreType;

		/** Score value. Semantics described by type below. */
		value?: number;
	}


	/** The comment score suggestion request message. */
	export interface SuggestCommentScoreRequest {

		/**
		 * Attribute scores for the comment. The map keys are attribute names, same as
		 * the requested_attribute field in AnalyzeCommentRequest (for example
		 * "ATTACK_ON_AUTHOR", "INFLAMMATORY", etc.). This field has the same type as
		 * the `attribute_scores` field in AnalyzeCommentResponse.
		 * To specify an overall attribute score for the entire comment as a whole,
		 * use the `summary_score` field of the mapped AttributeScores object. To
		 * specify scores on specific subparts of the comment, use the `span_scores`
		 * field. All SpanScore objects must have begin and end fields set.
		 * All Score objects must be explicitly set (for binary classification, use
		 * the score values 0 and 1). If Score objects don't include a ScoreType,
		 * `PROBABILITY` is assumed.
		 * `attribute_scores` must not be empty. The mapped AttributeScores objects
		 * also must not be empty. An `INVALID_ARGUMENT` error is returned for all
		 * malformed requests.
		 */
		attributeScores?: {[id: string]: AttributeScores };

		/** Opaque token that is echoed from the request to the response. */
		clientToken?: string;

		/** Represents a body of text. */
		comment?: TextEntry;

		/**
		 * Optional identifier associating this comment score suggestion with a
		 * particular sub-community. Different communities may have different norms
		 * and rules. Specifying this value enables training community-specific
		 * models.
		 */
		communityId?: string;

		/**
		 * Context is typically something that a Comment is referencing or replying to
		 * (such as an article, or previous comment).
		 * Note: Populate only ONE OF the following fields. The oneof syntax cannot be
		 * used because that would require nesting entries inside another message and
		 * breaking backwards compatibility. The server will return an error if more
		 * than one of the following fields is present.
		 */
		context?: Context;

		/**
		 * The language(s) of the comment and context. If none are specified, we
		 * attempt to automatically detect the language. Both ISO and BCP-47 language
		 * codes are accepted.
		 */
		languages?: Array<string>;

		/**
		 * Session ID. Used to join related RPCs into a single session. For example,
		 * an interactive tool that calls both the AnalyzeComment and
		 * SuggestCommentScore RPCs should set all invocations of both RPCs to the
		 * same Session ID, typically a random 64-bit integer.
		 */
		sessionId?: string;
	}


	/** The comment score suggestion response message. */
	export interface SuggestCommentScoreResponse {

		/** Same token from the original SuggestCommentScoreRequest. */
		clientToken?: string;

		/** The list of languages detected from the comment text. */
		detectedLanguages?: Array<string>;

		/** The list of languages provided in the request. */
		requestedLanguages?: Array<string>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Analyzes the provided text and returns scores for requested attributes.
		 * Post v1alpha1/comments:analyze
		 * @return {void} Successful response
		 */
		Commentanalyzer_comments_analyze(requestBody: AnalyzeCommentRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1alpha1/comments:analyze', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Suggest comment scores as training data.
		 * Post v1alpha1/comments:suggestscore
		 * @return {void} Successful response
		 */
		Commentanalyzer_comments_suggestscore(requestBody: SuggestCommentScoreRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1alpha1/comments:suggestscore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

