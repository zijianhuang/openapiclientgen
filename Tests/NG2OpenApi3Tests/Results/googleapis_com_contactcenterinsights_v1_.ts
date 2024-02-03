import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The analysis resource. */
	export interface GoogleCloudContactcenterinsightsV1Analysis {

		/** The result of an analysis. */
		analysisResult?: GoogleCloudContactcenterinsightsV1AnalysisResult;

		/** Selector of all available annotators and phrase matchers to run. */
		annotatorSelector?: GoogleCloudContactcenterinsightsV1AnnotatorSelector;

		/** Output only. The time at which the analysis was created, which occurs when the long-running operation completes. */
		createTime?: string | null;

		/** Immutable. The resource name of the analysis. Format: projects/{project}/locations/{location}/conversations/{conversation}/analyses/{analysis} */
		name?: string | null;

		/** Output only. The time at which the analysis was requested. */
		requestTime?: string | null;
	}

	/** The analysis resource. */
	export interface GoogleCloudContactcenterinsightsV1AnalysisFormProperties {

		/** Output only. The time at which the analysis was created, which occurs when the long-running operation completes. */
		createTime: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the analysis. Format: projects/{project}/locations/{location}/conversations/{conversation}/analyses/{analysis} */
		name: FormControl<string | null | undefined>,

		/** Output only. The time at which the analysis was requested. */
		requestTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1AnalysisFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1AnalysisFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			requestTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of an analysis. */
	export interface GoogleCloudContactcenterinsightsV1AnalysisResult {

		/** Call-specific metadata created during analysis. */
		callAnalysisMetadata?: GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata;

		/** The time at which the analysis ended. */
		endTime?: string | null;
	}

	/** The result of an analysis. */
	export interface GoogleCloudContactcenterinsightsV1AnalysisResultFormProperties {

		/** The time at which the analysis ended. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1AnalysisResultFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1AnalysisResultFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Call-specific metadata created during analysis. */
	export interface GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata {

		/** A list of call annotations that apply to this call. */
		annotations?: Array<GoogleCloudContactcenterinsightsV1CallAnnotation>;

		/** All the entities in the call. */
		entities?: {[id: string]: GoogleCloudContactcenterinsightsV1Entity };

		/** All the matched intents in the call. */
		intents?: {[id: string]: GoogleCloudContactcenterinsightsV1Intent };

		/** Issue Modeling result on a conversation. */
		issueModelResult?: GoogleCloudContactcenterinsightsV1IssueModelResult;

		/** All the matched phrase matchers in the call. */
		phraseMatchers?: {[id: string]: GoogleCloudContactcenterinsightsV1PhraseMatchData };

		/** Overall conversation-level sentiment for each channel of the call. */
		sentiments?: Array<GoogleCloudContactcenterinsightsV1ConversationLevelSentiment>;
	}

	/** Call-specific metadata created during analysis. */
	export interface GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadataFormProperties {

		/** All the entities in the call. */
		entities: FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1Entity } | null | undefined>,

		/** All the matched intents in the call. */
		intents: FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1Intent } | null | undefined>,

		/** All the matched phrase matchers in the call. */
		phraseMatchers: FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1PhraseMatchData } | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadataFormProperties>({
			entities: new FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1Entity } | null | undefined>(undefined),
			intents: new FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1Intent } | null | undefined>(undefined),
			phraseMatchers: new FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1PhraseMatchData } | null | undefined>(undefined),
		});

	}


	/** A piece of metadata that applies to a window of a call. */
	export interface GoogleCloudContactcenterinsightsV1CallAnnotation {

		/** A point in a conversation that marks the start or the end of an annotation. */
		annotationEndBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;

		/** A point in a conversation that marks the start or the end of an annotation. */
		annotationStartBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;

		/** The channel of the audio where the annotation occurs. For single-channel audio, this field is not populated. */
		channelTag?: number | null;

		/** The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation. */
		entityMentionData?: GoogleCloudContactcenterinsightsV1EntityMentionData;

		/** The data for a hold annotation. */
		holdData?: GoogleCloudContactcenterinsightsV1HoldData;

		/** The data for an intent match. Represents an intent match for a text segment in the conversation. A text segment can be part of a sentence, a complete sentence, or an utterance with multiple sentences. */
		intentMatchData?: GoogleCloudContactcenterinsightsV1IntentMatchData;

		/** The data for an interruption annotation. */
		interruptionData?: GoogleCloudContactcenterinsightsV1InterruptionData;

		/** The data for an issue match annotation. */
		issueMatchData?: GoogleCloudContactcenterinsightsV1IssueMatchData;

		/** The data for a matched phrase matcher. Represents information identifying a phrase matcher for a given match. */
		phraseMatchData?: GoogleCloudContactcenterinsightsV1PhraseMatchData;

		/** The data for a sentiment annotation. */
		sentimentData?: GoogleCloudContactcenterinsightsV1SentimentData;

		/** The data for a silence annotation. */
		silenceData?: GoogleCloudContactcenterinsightsV1SilenceData;
	}

	/** A piece of metadata that applies to a window of a call. */
	export interface GoogleCloudContactcenterinsightsV1CallAnnotationFormProperties {

		/** The channel of the audio where the annotation occurs. For single-channel audio, this field is not populated. */
		channelTag: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1CallAnnotationFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1CallAnnotationFormProperties>({
			channelTag: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A point in a conversation that marks the start or the end of an annotation. */
	export interface GoogleCloudContactcenterinsightsV1AnnotationBoundary {

		/** The index in the sequence of transcribed pieces of the conversation where the boundary is located. This index starts at zero. */
		transcriptIndex?: number | null;

		/** The word index of this boundary with respect to the first word in the transcript piece. This index starts at zero. */
		wordIndex?: number | null;
	}

	/** A point in a conversation that marks the start or the end of an annotation. */
	export interface GoogleCloudContactcenterinsightsV1AnnotationBoundaryFormProperties {

		/** The index in the sequence of transcribed pieces of the conversation where the boundary is located. This index starts at zero. */
		transcriptIndex: FormControl<number | null | undefined>,

		/** The word index of this boundary with respect to the first word in the transcript piece. This index starts at zero. */
		wordIndex: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1AnnotationBoundaryFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1AnnotationBoundaryFormProperties>({
			transcriptIndex: new FormControl<number | null | undefined>(undefined),
			wordIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation. */
	export interface GoogleCloudContactcenterinsightsV1EntityMentionData {

		/** The key of this entity in conversation entities. Can be used to retrieve the exact `Entity` this mention is attached to. */
		entityUniqueId?: string | null;

		/** The data for a sentiment annotation. */
		sentiment?: GoogleCloudContactcenterinsightsV1SentimentData;

		/** The type of the entity mention. */
		type?: GoogleCloudContactcenterinsightsV1EntityMentionDataType | null;
	}

	/** The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation. */
	export interface GoogleCloudContactcenterinsightsV1EntityMentionDataFormProperties {

		/** The key of this entity in conversation entities. Can be used to retrieve the exact `Entity` this mention is attached to. */
		entityUniqueId: FormControl<string | null | undefined>,

		/** The type of the entity mention. */
		type: FormControl<GoogleCloudContactcenterinsightsV1EntityMentionDataType | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1EntityMentionDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1EntityMentionDataFormProperties>({
			entityUniqueId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudContactcenterinsightsV1EntityMentionDataType | null | undefined>(undefined),
		});

	}


	/** The data for a sentiment annotation. */
	export interface GoogleCloudContactcenterinsightsV1SentimentData {

		/** A non-negative number from 0 to infinity which represents the abolute magnitude of sentiment regardless of score. */
		magnitude?: number | null;

		/** The sentiment score between -1.0 (negative) and 1.0 (positive). */
		score?: number | null;
	}

	/** The data for a sentiment annotation. */
	export interface GoogleCloudContactcenterinsightsV1SentimentDataFormProperties {

		/** A non-negative number from 0 to infinity which represents the abolute magnitude of sentiment regardless of score. */
		magnitude: FormControl<number | null | undefined>,

		/** The sentiment score between -1.0 (negative) and 1.0 (positive). */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1SentimentDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1SentimentDataFormProperties>({
			magnitude: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudContactcenterinsightsV1EntityMentionDataType { MENTION_TYPE_UNSPECIFIED = 'MENTION_TYPE_UNSPECIFIED', PROPER = 'PROPER', COMMON = 'COMMON' }


	/** The data for a hold annotation. */
	export interface GoogleCloudContactcenterinsightsV1HoldData {
	}

	/** The data for a hold annotation. */
	export interface GoogleCloudContactcenterinsightsV1HoldDataFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1HoldDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1HoldDataFormProperties>({
		});

	}


	/** The data for an intent match. Represents an intent match for a text segment in the conversation. A text segment can be part of a sentence, a complete sentence, or an utterance with multiple sentences. */
	export interface GoogleCloudContactcenterinsightsV1IntentMatchData {

		/** The id of the matched intent. Can be used to retrieve the corresponding intent information. */
		intentUniqueId?: string | null;
	}

	/** The data for an intent match. Represents an intent match for a text segment in the conversation. A text segment can be part of a sentence, a complete sentence, or an utterance with multiple sentences. */
	export interface GoogleCloudContactcenterinsightsV1IntentMatchDataFormProperties {

		/** The id of the matched intent. Can be used to retrieve the corresponding intent information. */
		intentUniqueId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1IntentMatchDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1IntentMatchDataFormProperties>({
			intentUniqueId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data for an interruption annotation. */
	export interface GoogleCloudContactcenterinsightsV1InterruptionData {
	}

	/** The data for an interruption annotation. */
	export interface GoogleCloudContactcenterinsightsV1InterruptionDataFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1InterruptionDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1InterruptionDataFormProperties>({
		});

	}


	/** The data for an issue match annotation. */
	export interface GoogleCloudContactcenterinsightsV1IssueMatchData {

		/** Information about the issue. */
		issueAssignment?: GoogleCloudContactcenterinsightsV1IssueAssignment;
	}

	/** The data for an issue match annotation. */
	export interface GoogleCloudContactcenterinsightsV1IssueMatchDataFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1IssueMatchDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1IssueMatchDataFormProperties>({
		});

	}


	/** Information about the issue. */
	export interface GoogleCloudContactcenterinsightsV1IssueAssignment {

		/** Immutable. Display name of the assigned issue. This field is set at time of analyis and immutable since then. */
		displayName?: string | null;

		/** Resource name of the assigned issue. */
		issue?: string | null;

		/** Score indicating the likelihood of the issue assignment. currently bounded on [0,1]. */
		score?: number | null;
	}

	/** Information about the issue. */
	export interface GoogleCloudContactcenterinsightsV1IssueAssignmentFormProperties {

		/** Immutable. Display name of the assigned issue. This field is set at time of analyis and immutable since then. */
		displayName: FormControl<string | null | undefined>,

		/** Resource name of the assigned issue. */
		issue: FormControl<string | null | undefined>,

		/** Score indicating the likelihood of the issue assignment. currently bounded on [0,1]. */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1IssueAssignmentFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1IssueAssignmentFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			issue: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The data for a matched phrase matcher. Represents information identifying a phrase matcher for a given match. */
	export interface GoogleCloudContactcenterinsightsV1PhraseMatchData {

		/** The human-readable name of the phrase matcher. */
		displayName?: string | null;

		/** The unique identifier (the resource name) of the phrase matcher. */
		phraseMatcher?: string | null;
	}

	/** The data for a matched phrase matcher. Represents information identifying a phrase matcher for a given match. */
	export interface GoogleCloudContactcenterinsightsV1PhraseMatchDataFormProperties {

		/** The human-readable name of the phrase matcher. */
		displayName: FormControl<string | null | undefined>,

		/** The unique identifier (the resource name) of the phrase matcher. */
		phraseMatcher: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1PhraseMatchDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1PhraseMatchDataFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			phraseMatcher: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data for a silence annotation. */
	export interface GoogleCloudContactcenterinsightsV1SilenceData {
	}

	/** The data for a silence annotation. */
	export interface GoogleCloudContactcenterinsightsV1SilenceDataFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1SilenceDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1SilenceDataFormProperties>({
		});

	}


	/** The data for an entity annotation. Represents a phrase in the conversation that is a known entity, such as a person, an organization, or location. */
	export interface GoogleCloudContactcenterinsightsV1Entity {

		/** The representative name for the entity. */
		displayName?: string | null;

		/** Metadata associated with the entity. For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`) and Knowledge Graph MID (`mid`), if they are available. For the metadata associated with other entity types, see the Type table below. */
		metadata?: {[id: string]: string };

		/** The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient. */
		salience?: number | null;

		/** The data for a sentiment annotation. */
		sentiment?: GoogleCloudContactcenterinsightsV1SentimentData;

		/** The entity type. */
		type?: GoogleCloudContactcenterinsightsV1EntityType | null;
	}

	/** The data for an entity annotation. Represents a phrase in the conversation that is a known entity, such as a person, an organization, or location. */
	export interface GoogleCloudContactcenterinsightsV1EntityFormProperties {

		/** The representative name for the entity. */
		displayName: FormControl<string | null | undefined>,

		/** Metadata associated with the entity. For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`) and Knowledge Graph MID (`mid`), if they are available. For the metadata associated with other entity types, see the Type table below. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient. */
		salience: FormControl<number | null | undefined>,

		/** The entity type. */
		type: FormControl<GoogleCloudContactcenterinsightsV1EntityType | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1EntityFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1EntityFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			salience: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<GoogleCloudContactcenterinsightsV1EntityType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudContactcenterinsightsV1EntityType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', PERSON = 'PERSON', LOCATION = 'LOCATION', ORGANIZATION = 'ORGANIZATION', EVENT = 'EVENT', WORK_OF_ART = 'WORK_OF_ART', CONSUMER_GOOD = 'CONSUMER_GOOD', OTHER = 'OTHER', PHONE_NUMBER = 'PHONE_NUMBER', ADDRESS = 'ADDRESS', DATE = 'DATE', NUMBER = 'NUMBER', PRICE = 'PRICE' }


	/** The data for an intent. Represents a detected intent in the conversation, for example MAKES_PROMISE. */
	export interface GoogleCloudContactcenterinsightsV1Intent {

		/** The human-readable name of the intent. */
		displayName?: string | null;

		/** The unique identifier of the intent. */
		id?: string | null;
	}

	/** The data for an intent. Represents a detected intent in the conversation, for example MAKES_PROMISE. */
	export interface GoogleCloudContactcenterinsightsV1IntentFormProperties {

		/** The human-readable name of the intent. */
		displayName: FormControl<string | null | undefined>,

		/** The unique identifier of the intent. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1IntentFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1IntentFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Issue Modeling result on a conversation. */
	export interface GoogleCloudContactcenterinsightsV1IssueModelResult {

		/** Issue model that generates the result. Format: projects/{project}/locations/{location}/issueModels/{issue_model} */
		issueModel?: string | null;

		/** All the matched issues. */
		issues?: Array<GoogleCloudContactcenterinsightsV1IssueAssignment>;
	}

	/** Issue Modeling result on a conversation. */
	export interface GoogleCloudContactcenterinsightsV1IssueModelResultFormProperties {

		/** Issue model that generates the result. Format: projects/{project}/locations/{location}/issueModels/{issue_model} */
		issueModel: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1IssueModelResultFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1IssueModelResultFormProperties>({
			issueModel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One channel of conversation-level sentiment data. */
	export interface GoogleCloudContactcenterinsightsV1ConversationLevelSentiment {

		/** The channel of the audio that the data applies to. */
		channelTag?: number | null;

		/** The data for a sentiment annotation. */
		sentimentData?: GoogleCloudContactcenterinsightsV1SentimentData;
	}

	/** One channel of conversation-level sentiment data. */
	export interface GoogleCloudContactcenterinsightsV1ConversationLevelSentimentFormProperties {

		/** The channel of the audio that the data applies to. */
		channelTag: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ConversationLevelSentimentFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ConversationLevelSentimentFormProperties>({
			channelTag: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Selector of all available annotators and phrase matchers to run. */
	export interface GoogleCloudContactcenterinsightsV1AnnotatorSelector {

		/** The issue model to run. If not provided, the most recently deployed topic model will be used. The provided issue model will only be used for inference if the issue model is deployed and if run_issue_model_annotator is set to true. If more than one issue model is provided, only the first provided issue model will be used for inference. */
		issueModels?: Array<string>;

		/** The list of phrase matchers to run. If not provided, all active phrase matchers will be used. If inactive phrase matchers are provided, they will not be used. Phrase matchers will be run only if run_phrase_matcher_annotator is set to true. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher} */
		phraseMatchers?: Array<string>;

		/** Whether to run the entity annotator. */
		runEntityAnnotator?: boolean | null;

		/** Whether to run the intent annotator. */
		runIntentAnnotator?: boolean | null;

		/** Whether to run the interruption annotator. */
		runInterruptionAnnotator?: boolean | null;

		/** Whether to run the issue model annotator. A model should have already been deployed for this to take effect. */
		runIssueModelAnnotator?: boolean | null;

		/** Whether to run the active phrase matcher annotator(s). */
		runPhraseMatcherAnnotator?: boolean | null;

		/** Whether to run the sentiment annotator. */
		runSentimentAnnotator?: boolean | null;

		/** Whether to run the silence annotator. */
		runSilenceAnnotator?: boolean | null;

		/** Whether to run the summarization annotator. */
		runSummarizationAnnotator?: boolean | null;

		/** Configuration for summarization. */
		summarizationConfig?: GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfig;
	}

	/** Selector of all available annotators and phrase matchers to run. */
	export interface GoogleCloudContactcenterinsightsV1AnnotatorSelectorFormProperties {

		/** Whether to run the entity annotator. */
		runEntityAnnotator: FormControl<boolean | null | undefined>,

		/** Whether to run the intent annotator. */
		runIntentAnnotator: FormControl<boolean | null | undefined>,

		/** Whether to run the interruption annotator. */
		runInterruptionAnnotator: FormControl<boolean | null | undefined>,

		/** Whether to run the issue model annotator. A model should have already been deployed for this to take effect. */
		runIssueModelAnnotator: FormControl<boolean | null | undefined>,

		/** Whether to run the active phrase matcher annotator(s). */
		runPhraseMatcherAnnotator: FormControl<boolean | null | undefined>,

		/** Whether to run the sentiment annotator. */
		runSentimentAnnotator: FormControl<boolean | null | undefined>,

		/** Whether to run the silence annotator. */
		runSilenceAnnotator: FormControl<boolean | null | undefined>,

		/** Whether to run the summarization annotator. */
		runSummarizationAnnotator: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1AnnotatorSelectorFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1AnnotatorSelectorFormProperties>({
			runEntityAnnotator: new FormControl<boolean | null | undefined>(undefined),
			runIntentAnnotator: new FormControl<boolean | null | undefined>(undefined),
			runInterruptionAnnotator: new FormControl<boolean | null | undefined>(undefined),
			runIssueModelAnnotator: new FormControl<boolean | null | undefined>(undefined),
			runPhraseMatcherAnnotator: new FormControl<boolean | null | undefined>(undefined),
			runSentimentAnnotator: new FormControl<boolean | null | undefined>(undefined),
			runSilenceAnnotator: new FormControl<boolean | null | undefined>(undefined),
			runSummarizationAnnotator: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for summarization. */
	export interface GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfig {

		/** Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile} */
		conversationProfile?: string | null;

		/** Default summarization model to be used. */
		summarizationModel?: GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModel | null;
	}

	/** Configuration for summarization. */
	export interface GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigFormProperties {

		/** Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile} */
		conversationProfile: FormControl<string | null | undefined>,

		/** Default summarization model to be used. */
		summarizationModel: FormControl<GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModel | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigFormProperties>({
			conversationProfile: new FormControl<string | null | undefined>(undefined),
			summarizationModel: new FormControl<GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModel | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModel { SUMMARIZATION_MODEL_UNSPECIFIED = 'SUMMARIZATION_MODEL_UNSPECIFIED', BASELINE_MODEL = 'BASELINE_MODEL' }


	/** The feedback that the customer has about a certain answer in the conversation. */
	export interface GoogleCloudContactcenterinsightsV1AnswerFeedback {

		/** Indicates whether an answer or item was clicked by the human agent. */
		clicked?: boolean | null;

		/** The correctness level of an answer. */
		correctnessLevel?: GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevel | null;

		/** Indicates whether an answer or item was displayed to the human agent in the agent desktop UI. */
		displayed?: boolean | null;
	}

	/** The feedback that the customer has about a certain answer in the conversation. */
	export interface GoogleCloudContactcenterinsightsV1AnswerFeedbackFormProperties {

		/** Indicates whether an answer or item was clicked by the human agent. */
		clicked: FormControl<boolean | null | undefined>,

		/** The correctness level of an answer. */
		correctnessLevel: FormControl<GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevel | null | undefined>,

		/** Indicates whether an answer or item was displayed to the human agent in the agent desktop UI. */
		displayed: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1AnswerFeedbackFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1AnswerFeedbackFormProperties>({
			clicked: new FormControl<boolean | null | undefined>(undefined),
			correctnessLevel: new FormControl<GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevel | null | undefined>(undefined),
			displayed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevel { CORRECTNESS_LEVEL_UNSPECIFIED = 'CORRECTNESS_LEVEL_UNSPECIFIED', NOT_CORRECT = 'NOT_CORRECT', PARTIALLY_CORRECT = 'PARTIALLY_CORRECT', FULLY_CORRECT = 'FULLY_CORRECT' }


	/** Agent Assist Article Suggestion data. */
	export interface GoogleCloudContactcenterinsightsV1ArticleSuggestionData {

		/** The system's confidence score that this article is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidenceScore?: number | null;

		/** Map that contains metadata about the Article Suggestion and the document that it originates from. */
		metadata?: {[id: string]: string };

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		queryRecord?: string | null;

		/** The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document} */
		source?: string | null;

		/** Article title. */
		title?: string | null;

		/** Article URI. */
		uri?: string | null;
	}

	/** Agent Assist Article Suggestion data. */
	export interface GoogleCloudContactcenterinsightsV1ArticleSuggestionDataFormProperties {

		/** The system's confidence score that this article is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidenceScore: FormControl<number | null | undefined>,

		/** Map that contains metadata about the Article Suggestion and the document that it originates from. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		queryRecord: FormControl<string | null | undefined>,

		/** The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document} */
		source: FormControl<string | null | undefined>,

		/** Article title. */
		title: FormControl<string | null | undefined>,

		/** Article URI. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ArticleSuggestionDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ArticleSuggestionDataFormProperties>({
			confidenceScore: new FormControl<number | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			queryRecord: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata for a bulk analyze conversations operation. */
	export interface GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsMetadata {

		/** The number of requested analyses that have completed successfully so far. */
		completedAnalysesCount?: number | null;

		/** The time the operation was created. */
		createTime?: string | null;

		/** The time the operation finished running. */
		endTime?: string | null;

		/** The number of requested analyses that have failed so far. */
		failedAnalysesCount?: number | null;

		/** Output only. Partial errors during bulk analyze operation that might cause the operation output to be incomplete. */
		partialErrors?: Array<GoogleRpcStatus>;

		/** The request to analyze conversations in bulk. */
		request?: GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest;

		/** Total number of analyses requested. Computed by the number of conversations returned by `filter` multiplied by `analysis_percentage` in the request. */
		totalRequestedAnalysesCount?: number | null;
	}

	/** The metadata for a bulk analyze conversations operation. */
	export interface GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsMetadataFormProperties {

		/** The number of requested analyses that have completed successfully so far. */
		completedAnalysesCount: FormControl<number | null | undefined>,

		/** The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** The number of requested analyses that have failed so far. */
		failedAnalysesCount: FormControl<number | null | undefined>,

		/** Total number of analyses requested. Computed by the number of conversations returned by `filter` multiplied by `analysis_percentage` in the request. */
		totalRequestedAnalysesCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsMetadataFormProperties>({
			completedAnalysesCount: new FormControl<number | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			failedAnalysesCount: new FormControl<number | null | undefined>(undefined),
			totalRequestedAnalysesCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatus {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface GoogleRpcStatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcStatusFormGroup() {
		return new FormGroup<GoogleRpcStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to analyze conversations in bulk. */
	export interface GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest {

		/** Required. Percentage of selected conversation to analyze, between [0, 100]. */
		analysisPercentage?: number | null;

		/** Selector of all available annotators and phrase matchers to run. */
		annotatorSelector?: GoogleCloudContactcenterinsightsV1AnnotatorSelector;

		/** Required. Filter used to select the subset of conversations to analyze. */
		filter?: string | null;

		/** Required. The parent resource to create analyses in. */
		parent?: string | null;
	}

	/** The request to analyze conversations in bulk. */
	export interface GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequestFormProperties {

		/** Required. Percentage of selected conversation to analyze, between [0, 100]. */
		analysisPercentage: FormControl<number | null | undefined>,

		/** Required. Filter used to select the subset of conversations to analyze. */
		filter: FormControl<string | null | undefined>,

		/** Required. The parent resource to create analyses in. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequestFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequestFormProperties>({
			analysisPercentage: new FormControl<number | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for a bulk analyze conversations operation. */
	export interface GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsResponse {

		/** Count of failed analyses. */
		failedAnalysisCount?: number | null;

		/** Count of successful analyses. */
		successfulAnalysisCount?: number | null;
	}

	/** The response for a bulk analyze conversations operation. */
	export interface GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsResponseFormProperties {

		/** Count of failed analyses. */
		failedAnalysisCount: FormControl<number | null | undefined>,

		/** Count of successful analyses. */
		successfulAnalysisCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsResponseFormProperties>({
			failedAnalysisCount: new FormControl<number | null | undefined>(undefined),
			successfulAnalysisCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The metadata for a bulk delete conversations operation. */
	export interface GoogleCloudContactcenterinsightsV1BulkDeleteConversationsMetadata {

		/** The time the operation was created. */
		createTime?: string | null;

		/** The time the operation finished running. */
		endTime?: string | null;

		/** Partial errors during bulk delete conversations operation that might cause the operation output to be incomplete. */
		partialErrors?: Array<GoogleRpcStatus>;

		/** The request to delete conversations in bulk. */
		request?: GoogleCloudContactcenterinsightsV1BulkDeleteConversationsRequest;
	}

	/** The metadata for a bulk delete conversations operation. */
	export interface GoogleCloudContactcenterinsightsV1BulkDeleteConversationsMetadataFormProperties {

		/** The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1BulkDeleteConversationsMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1BulkDeleteConversationsMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to delete conversations in bulk. */
	export interface GoogleCloudContactcenterinsightsV1BulkDeleteConversationsRequest {

		/** Filter used to select the subset of conversations to delete. */
		filter?: string | null;

		/** If set to true, all of this conversation's analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses. */
		force?: boolean | null;

		/** Maximum number of conversations to delete. */
		maxDeleteCount?: number | null;

		/** Required. The parent resource to delete conversations from. Format: projects/{project}/locations/{location} */
		parent?: string | null;
	}

	/** The request to delete conversations in bulk. */
	export interface GoogleCloudContactcenterinsightsV1BulkDeleteConversationsRequestFormProperties {

		/** Filter used to select the subset of conversations to delete. */
		filter: FormControl<string | null | undefined>,

		/** If set to true, all of this conversation's analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses. */
		force: FormControl<boolean | null | undefined>,

		/** Maximum number of conversations to delete. */
		maxDeleteCount: FormControl<number | null | undefined>,

		/** Required. The parent resource to delete conversations from. Format: projects/{project}/locations/{location} */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1BulkDeleteConversationsRequestFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1BulkDeleteConversationsRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			force: new FormControl<boolean | null | undefined>(undefined),
			maxDeleteCount: new FormControl<number | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for a bulk delete conversations operation. */
	export interface GoogleCloudContactcenterinsightsV1BulkDeleteConversationsResponse {
	}

	/** The response for a bulk delete conversations operation. */
	export interface GoogleCloudContactcenterinsightsV1BulkDeleteConversationsResponseFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1BulkDeleteConversationsResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1BulkDeleteConversationsResponseFormProperties>({
		});

	}


	/** Response of querying an issue model's statistics. */
	export interface GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse {

		/** Aggregated statistics about an issue model. */
		currentStats?: GoogleCloudContactcenterinsightsV1IssueModelLabelStats;
	}

	/** Response of querying an issue model's statistics. */
	export interface GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponseFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponseFormProperties>({
		});

	}


	/** Aggregated statistics about an issue model. */
	export interface GoogleCloudContactcenterinsightsV1IssueModelLabelStats {

		/** Number of conversations the issue model has analyzed at this point in time. */
		analyzedConversationsCount?: string | null;

		/** Statistics on each issue. Key is the issue's resource name. */
		issueStats?: {[id: string]: GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats };

		/** Number of analyzed conversations for which no issue was applicable at this point in time. */
		unclassifiedConversationsCount?: string | null;
	}

	/** Aggregated statistics about an issue model. */
	export interface GoogleCloudContactcenterinsightsV1IssueModelLabelStatsFormProperties {

		/** Number of conversations the issue model has analyzed at this point in time. */
		analyzedConversationsCount: FormControl<string | null | undefined>,

		/** Statistics on each issue. Key is the issue's resource name. */
		issueStats: FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats } | null | undefined>,

		/** Number of analyzed conversations for which no issue was applicable at this point in time. */
		unclassifiedConversationsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1IssueModelLabelStatsFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1IssueModelLabelStatsFormProperties>({
			analyzedConversationsCount: new FormControl<string | null | undefined>(undefined),
			issueStats: new FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats } | null | undefined>(undefined),
			unclassifiedConversationsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Aggregated statistics about an issue. */
	export interface GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats {

		/** Display name of the issue. */
		displayName?: string | null;

		/** Issue resource. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue} */
		issue?: string | null;

		/** Number of conversations attached to the issue at this point in time. */
		labeledConversationsCount?: string | null;
	}

	/** Aggregated statistics about an issue. */
	export interface GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStatsFormProperties {

		/** Display name of the issue. */
		displayName: FormControl<string | null | undefined>,

		/** Issue resource. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue} */
		issue: FormControl<string | null | undefined>,

		/** Number of conversations attached to the issue at this point in time. */
		labeledConversationsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStatsFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStatsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			issue: new FormControl<string | null | undefined>(undefined),
			labeledConversationsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for calculating conversation statistics. */
	export interface GoogleCloudContactcenterinsightsV1CalculateStatsResponse {

		/** The average duration of all conversations. The average is calculated using only conversations that have a time duration. */
		averageDuration?: string | null;

		/** The average number of turns per conversation. */
		averageTurnCount?: number | null;

		/** The total number of conversations. */
		conversationCount?: number | null;

		/** A time series representing conversations over time. */
		conversationCountTimeSeries?: GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries;

		/** A map associating each custom highlighter resource name with its respective number of matches in the set of conversations. */
		customHighlighterMatches?: {[id: string]: number };

		/** A map associating each issue resource name with its respective number of matches in the set of conversations. Key has the format: `projects//locations//issueModels//issues/` Deprecated, use `issue_matches_stats` field instead. */
		issueMatches?: {[id: string]: number };

		/** A map associating each issue resource name with its respective number of matches in the set of conversations. Key has the format: `projects//locations//issueModels//issues/` */
		issueMatchesStats?: {[id: string]: GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats };

		/** A map associating each smart highlighter display name with its respective number of matches in the set of conversations. */
		smartHighlighterMatches?: {[id: string]: number };
	}

	/** The response for calculating conversation statistics. */
	export interface GoogleCloudContactcenterinsightsV1CalculateStatsResponseFormProperties {

		/** The average duration of all conversations. The average is calculated using only conversations that have a time duration. */
		averageDuration: FormControl<string | null | undefined>,

		/** The average number of turns per conversation. */
		averageTurnCount: FormControl<number | null | undefined>,

		/** The total number of conversations. */
		conversationCount: FormControl<number | null | undefined>,

		/** A map associating each custom highlighter resource name with its respective number of matches in the set of conversations. */
		customHighlighterMatches: FormControl<{[id: string]: number } | null | undefined>,

		/** A map associating each issue resource name with its respective number of matches in the set of conversations. Key has the format: `projects//locations//issueModels//issues/` Deprecated, use `issue_matches_stats` field instead. */
		issueMatches: FormControl<{[id: string]: number } | null | undefined>,

		/** A map associating each issue resource name with its respective number of matches in the set of conversations. Key has the format: `projects//locations//issueModels//issues/` */
		issueMatchesStats: FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats } | null | undefined>,

		/** A map associating each smart highlighter display name with its respective number of matches in the set of conversations. */
		smartHighlighterMatches: FormControl<{[id: string]: number } | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1CalculateStatsResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1CalculateStatsResponseFormProperties>({
			averageDuration: new FormControl<string | null | undefined>(undefined),
			averageTurnCount: new FormControl<number | null | undefined>(undefined),
			conversationCount: new FormControl<number | null | undefined>(undefined),
			customHighlighterMatches: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			issueMatches: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			issueMatchesStats: new FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats } | null | undefined>(undefined),
			smartHighlighterMatches: new FormControl<{[id: string]: number } | null | undefined>(undefined),
		});

	}


	/** A time series representing conversations over time. */
	export interface GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries {

		/** The duration of each interval. */
		intervalDuration?: string | null;

		/** An ordered list of intervals from earliest to latest, where each interval represents the number of conversations that transpired during the time window. */
		points?: Array<GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval>;
	}

	/** A time series representing conversations over time. */
	export interface GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesFormProperties {

		/** The duration of each interval. */
		intervalDuration: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesFormProperties>({
			intervalDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single interval in a time series. */
	export interface GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval {

		/** The number of conversations created in this interval. */
		conversationCount?: number | null;

		/** The start time of this interval. */
		startTime?: string | null;
	}

	/** A single interval in a time series. */
	export interface GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesIntervalFormProperties {

		/** The number of conversations created in this interval. */
		conversationCount: FormControl<number | null | undefined>,

		/** The start time of this interval. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesIntervalFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesIntervalFormProperties>({
			conversationCount: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The conversation resource. */
	export interface GoogleCloudContactcenterinsightsV1Conversation {

		/** An opaque, user-specified string representing the human agent who handled the conversation. */
		agentId?: string | null;

		/** Call-specific metadata. */
		callMetadata?: GoogleCloudContactcenterinsightsV1ConversationCallMetadata;

		/** Output only. The time at which the conversation was created. */
		createTime?: string | null;

		/** The conversation source, which is a combination of transcript and audio. */
		dataSource?: GoogleCloudContactcenterinsightsV1ConversationDataSource;

		/** Output only. All the matched Dialogflow intents in the call. The key corresponds to a Dialogflow intent, format: projects/{project}/agent/{agent}/intents/{intent} */
		dialogflowIntents?: {[id: string]: GoogleCloudContactcenterinsightsV1DialogflowIntent };

		/** Output only. The duration of the conversation. */
		duration?: string | null;

		/** The time at which this conversation should expire. After this time, the conversation data and any associated analyses will be deleted. */
		expireTime?: string | null;

		/** A map for the user to specify any custom fields. A maximum of 20 labels per conversation is allowed, with a maximum of 256 characters per entry. */
		labels?: {[id: string]: string };

		/** A user-specified language code for the conversation. */
		languageCode?: string | null;

		/** The analysis resource. */
		latestAnalysis?: GoogleCloudContactcenterinsightsV1Analysis;

		/** Conversation summarization suggestion data. */
		latestSummary?: GoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionData;

		/** Immutable. The conversation medium, if unspecified will default to PHONE_CALL. */
		medium?: GoogleCloudContactcenterinsightsV1ConversationMedium | null;

		/** Immutable. The resource name of the conversation. Format: projects/{project}/locations/{location}/conversations/{conversation} */
		name?: string | null;

		/** Obfuscated user ID which the customer sent to us. */
		obfuscatedUserId?: string | null;

		/** Conversation metadata related to quality management. */
		qualityMetadata?: GoogleCloudContactcenterinsightsV1ConversationQualityMetadata;

		/** Output only. The annotations that were generated during the customer and agent interaction. */
		runtimeAnnotations?: Array<GoogleCloudContactcenterinsightsV1RuntimeAnnotation>;

		/** The time at which the conversation started. */
		startTime?: string | null;

		/** A message representing the transcript of a conversation. */
		transcript?: GoogleCloudContactcenterinsightsV1ConversationTranscript;

		/** Input only. The TTL for this resource. If specified, then this TTL will be used to calculate the expire time. */
		ttl?: string | null;

		/** Output only. The number of turns in the conversation. */
		turnCount?: number | null;

		/** Output only. The most recent time at which the conversation was updated. */
		updateTime?: string | null;
	}

	/** The conversation resource. */
	export interface GoogleCloudContactcenterinsightsV1ConversationFormProperties {

		/** An opaque, user-specified string representing the human agent who handled the conversation. */
		agentId: FormControl<string | null | undefined>,

		/** Output only. The time at which the conversation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. All the matched Dialogflow intents in the call. The key corresponds to a Dialogflow intent, format: projects/{project}/agent/{agent}/intents/{intent} */
		dialogflowIntents: FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1DialogflowIntent } | null | undefined>,

		/** Output only. The duration of the conversation. */
		duration: FormControl<string | null | undefined>,

		/** The time at which this conversation should expire. After this time, the conversation data and any associated analyses will be deleted. */
		expireTime: FormControl<string | null | undefined>,

		/** A map for the user to specify any custom fields. A maximum of 20 labels per conversation is allowed, with a maximum of 256 characters per entry. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** A user-specified language code for the conversation. */
		languageCode: FormControl<string | null | undefined>,

		/** Immutable. The conversation medium, if unspecified will default to PHONE_CALL. */
		medium: FormControl<GoogleCloudContactcenterinsightsV1ConversationMedium | null | undefined>,

		/** Immutable. The resource name of the conversation. Format: projects/{project}/locations/{location}/conversations/{conversation} */
		name: FormControl<string | null | undefined>,

		/** Obfuscated user ID which the customer sent to us. */
		obfuscatedUserId: FormControl<string | null | undefined>,

		/** The time at which the conversation started. */
		startTime: FormControl<string | null | undefined>,

		/** Input only. The TTL for this resource. If specified, then this TTL will be used to calculate the expire time. */
		ttl: FormControl<string | null | undefined>,

		/** Output only. The number of turns in the conversation. */
		turnCount: FormControl<number | null | undefined>,

		/** Output only. The most recent time at which the conversation was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ConversationFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ConversationFormProperties>({
			agentId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			dialogflowIntents: new FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1DialogflowIntent } | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			medium: new FormControl<GoogleCloudContactcenterinsightsV1ConversationMedium | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			obfuscatedUserId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
			turnCount: new FormControl<number | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Call-specific metadata. */
	export interface GoogleCloudContactcenterinsightsV1ConversationCallMetadata {

		/** The audio channel that contains the agent. */
		agentChannel?: number | null;

		/** The audio channel that contains the customer. */
		customerChannel?: number | null;
	}

	/** Call-specific metadata. */
	export interface GoogleCloudContactcenterinsightsV1ConversationCallMetadataFormProperties {

		/** The audio channel that contains the agent. */
		agentChannel: FormControl<number | null | undefined>,

		/** The audio channel that contains the customer. */
		customerChannel: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ConversationCallMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ConversationCallMetadataFormProperties>({
			agentChannel: new FormControl<number | null | undefined>(undefined),
			customerChannel: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The conversation source, which is a combination of transcript and audio. */
	export interface GoogleCloudContactcenterinsightsV1ConversationDataSource {

		/** A Dialogflow source of conversation data. */
		dialogflowSource?: GoogleCloudContactcenterinsightsV1DialogflowSource;

		/** A Cloud Storage source of conversation data. */
		gcsSource?: GoogleCloudContactcenterinsightsV1GcsSource;
	}

	/** The conversation source, which is a combination of transcript and audio. */
	export interface GoogleCloudContactcenterinsightsV1ConversationDataSourceFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1ConversationDataSourceFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ConversationDataSourceFormProperties>({
		});

	}


	/** A Dialogflow source of conversation data. */
	export interface GoogleCloudContactcenterinsightsV1DialogflowSource {

		/** Cloud Storage URI that points to a file that contains the conversation audio. */
		audioUri?: string | null;

		/** Output only. The name of the Dialogflow conversation that this conversation resource is derived from. Format: projects/{project}/locations/{location}/conversations/{conversation} */
		dialogflowConversation?: string | null;
	}

	/** A Dialogflow source of conversation data. */
	export interface GoogleCloudContactcenterinsightsV1DialogflowSourceFormProperties {

		/** Cloud Storage URI that points to a file that contains the conversation audio. */
		audioUri: FormControl<string | null | undefined>,

		/** Output only. The name of the Dialogflow conversation that this conversation resource is derived from. Format: projects/{project}/locations/{location}/conversations/{conversation} */
		dialogflowConversation: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1DialogflowSourceFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1DialogflowSourceFormProperties>({
			audioUri: new FormControl<string | null | undefined>(undefined),
			dialogflowConversation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Cloud Storage source of conversation data. */
	export interface GoogleCloudContactcenterinsightsV1GcsSource {

		/** Cloud Storage URI that points to a file that contains the conversation audio. */
		audioUri?: string | null;

		/** Immutable. Cloud Storage URI that points to a file that contains the conversation transcript. */
		transcriptUri?: string | null;
	}

	/** A Cloud Storage source of conversation data. */
	export interface GoogleCloudContactcenterinsightsV1GcsSourceFormProperties {

		/** Cloud Storage URI that points to a file that contains the conversation audio. */
		audioUri: FormControl<string | null | undefined>,

		/** Immutable. Cloud Storage URI that points to a file that contains the conversation transcript. */
		transcriptUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1GcsSourceFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1GcsSourceFormProperties>({
			audioUri: new FormControl<string | null | undefined>(undefined),
			transcriptUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data for a Dialogflow intent. Represents a detected intent in the conversation, e.g. MAKES_PROMISE. */
	export interface GoogleCloudContactcenterinsightsV1DialogflowIntent {

		/** The human-readable name of the intent. */
		displayName?: string | null;
	}

	/** The data for a Dialogflow intent. Represents a detected intent in the conversation, e.g. MAKES_PROMISE. */
	export interface GoogleCloudContactcenterinsightsV1DialogflowIntentFormProperties {

		/** The human-readable name of the intent. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1DialogflowIntentFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1DialogflowIntentFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Conversation summarization suggestion data. */
	export interface GoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionData {

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		answerRecord?: string | null;

		/** The confidence score of the summarization. */
		confidence?: number | null;

		/** The name of the model that generates this summary. Format: projects/{project}/locations/{location}/conversationModels/{conversation_model} */
		conversationModel?: string | null;

		/** A map that contains metadata about the summarization and the document from which it originates. */
		metadata?: {[id: string]: string };

		/** The summarization content that is concatenated into one string. */
		text?: string | null;

		/** The summarization content that is divided into sections. The key is the section's name and the value is the section's content. There is no specific format for the key or value. */
		textSections?: {[id: string]: string };
	}

	/** Conversation summarization suggestion data. */
	export interface GoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionDataFormProperties {

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		answerRecord: FormControl<string | null | undefined>,

		/** The confidence score of the summarization. */
		confidence: FormControl<number | null | undefined>,

		/** The name of the model that generates this summary. Format: projects/{project}/locations/{location}/conversationModels/{conversation_model} */
		conversationModel: FormControl<string | null | undefined>,

		/** A map that contains metadata about the summarization and the document from which it originates. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The summarization content that is concatenated into one string. */
		text: FormControl<string | null | undefined>,

		/** The summarization content that is divided into sections. The key is the section's name and the value is the section's content. There is no specific format for the key or value. */
		textSections: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionDataFormProperties>({
			answerRecord: new FormControl<string | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
			conversationModel: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			textSections: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudContactcenterinsightsV1ConversationMedium { MEDIUM_UNSPECIFIED = 'MEDIUM_UNSPECIFIED', PHONE_CALL = 'PHONE_CALL', CHAT = 'CHAT' }


	/** Conversation metadata related to quality management. */
	export interface GoogleCloudContactcenterinsightsV1ConversationQualityMetadata {

		/** Information about agents involved in the call. */
		agentInfo?: Array<GoogleCloudContactcenterinsightsV1ConversationQualityMetadataAgentInfo>;

		/** An arbitrary integer value indicating the customer's satisfaction rating. */
		customerSatisfactionRating?: number | null;

		/** An arbitrary string value specifying the menu path the customer took. */
		menuPath?: string | null;

		/** The amount of time the customer waited to connect with an agent. */
		waitDuration?: string | null;
	}

	/** Conversation metadata related to quality management. */
	export interface GoogleCloudContactcenterinsightsV1ConversationQualityMetadataFormProperties {

		/** An arbitrary integer value indicating the customer's satisfaction rating. */
		customerSatisfactionRating: FormControl<number | null | undefined>,

		/** An arbitrary string value specifying the menu path the customer took. */
		menuPath: FormControl<string | null | undefined>,

		/** The amount of time the customer waited to connect with an agent. */
		waitDuration: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ConversationQualityMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ConversationQualityMetadataFormProperties>({
			customerSatisfactionRating: new FormControl<number | null | undefined>(undefined),
			menuPath: new FormControl<string | null | undefined>(undefined),
			waitDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an agent involved in the conversation. */
	export interface GoogleCloudContactcenterinsightsV1ConversationQualityMetadataAgentInfo {

		/** A user-specified string representing the agent. */
		agentId?: string | null;

		/** The agent's name. */
		displayName?: string | null;

		/** A user-provided string indicating the outcome of the agent's segment of the call. */
		dispositionCode?: string | null;

		/** A user-specified string representing the agent's team. */
		team?: string | null;
	}

	/** Information about an agent involved in the conversation. */
	export interface GoogleCloudContactcenterinsightsV1ConversationQualityMetadataAgentInfoFormProperties {

		/** A user-specified string representing the agent. */
		agentId: FormControl<string | null | undefined>,

		/** The agent's name. */
		displayName: FormControl<string | null | undefined>,

		/** A user-provided string indicating the outcome of the agent's segment of the call. */
		dispositionCode: FormControl<string | null | undefined>,

		/** A user-specified string representing the agent's team. */
		team: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ConversationQualityMetadataAgentInfoFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ConversationQualityMetadataAgentInfoFormProperties>({
			agentId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			dispositionCode: new FormControl<string | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An annotation that was generated during the customer and agent interaction. */
	export interface GoogleCloudContactcenterinsightsV1RuntimeAnnotation {

		/** The unique identifier of the annotation. Format: projects/{project}/locations/{location}/conversationDatasets/{dataset}/conversationDataItems/{data_item}/conversationAnnotations/{annotation} */
		annotationId?: string | null;

		/** The feedback that the customer has about a certain answer in the conversation. */
		answerFeedback?: GoogleCloudContactcenterinsightsV1AnswerFeedback;

		/** Agent Assist Article Suggestion data. */
		articleSuggestion?: GoogleCloudContactcenterinsightsV1ArticleSuggestionData;

		/** Conversation summarization suggestion data. */
		conversationSummarizationSuggestion?: GoogleCloudContactcenterinsightsV1ConversationSummarizationSuggestionData;

		/** The time at which this annotation was created. */
		createTime?: string | null;

		/** Dialogflow interaction data. */
		dialogflowInteraction?: GoogleCloudContactcenterinsightsV1DialogflowInteractionData;

		/** A point in a conversation that marks the start or the end of an annotation. */
		endBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;

		/** Agent Assist frequently-asked-question answer data. */
		faqAnswer?: GoogleCloudContactcenterinsightsV1FaqAnswerData;

		/** Agent Assist Smart Compose suggestion data. */
		smartComposeSuggestion?: GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData;

		/** Agent Assist Smart Reply data. */
		smartReply?: GoogleCloudContactcenterinsightsV1SmartReplyData;

		/** A point in a conversation that marks the start or the end of an annotation. */
		startBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary;
	}

	/** An annotation that was generated during the customer and agent interaction. */
	export interface GoogleCloudContactcenterinsightsV1RuntimeAnnotationFormProperties {

		/** The unique identifier of the annotation. Format: projects/{project}/locations/{location}/conversationDatasets/{dataset}/conversationDataItems/{data_item}/conversationAnnotations/{annotation} */
		annotationId: FormControl<string | null | undefined>,

		/** The time at which this annotation was created. */
		createTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1RuntimeAnnotationFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1RuntimeAnnotationFormProperties>({
			annotationId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dialogflow interaction data. */
	export interface GoogleCloudContactcenterinsightsV1DialogflowInteractionData {

		/** The confidence of the match ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidence?: number | null;

		/** The Dialogflow intent resource path. Format: projects/{project}/agent/{agent}/intents/{intent} */
		dialogflowIntentId?: string | null;
	}

	/** Dialogflow interaction data. */
	export interface GoogleCloudContactcenterinsightsV1DialogflowInteractionDataFormProperties {

		/** The confidence of the match ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidence: FormControl<number | null | undefined>,

		/** The Dialogflow intent resource path. Format: projects/{project}/agent/{agent}/intents/{intent} */
		dialogflowIntentId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1DialogflowInteractionDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1DialogflowInteractionDataFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			dialogflowIntentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Agent Assist frequently-asked-question answer data. */
	export interface GoogleCloudContactcenterinsightsV1FaqAnswerData {

		/** The piece of text from the `source` knowledge base document. */
		answer?: string | null;

		/** The system's confidence score that this answer is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidenceScore?: number | null;

		/** Map that contains metadata about the FAQ answer and the document that it originates from. */
		metadata?: {[id: string]: string };

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		queryRecord?: string | null;

		/** The corresponding FAQ question. */
		question?: string | null;

		/** The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document}. */
		source?: string | null;
	}

	/** Agent Assist frequently-asked-question answer data. */
	export interface GoogleCloudContactcenterinsightsV1FaqAnswerDataFormProperties {

		/** The piece of text from the `source` knowledge base document. */
		answer: FormControl<string | null | undefined>,

		/** The system's confidence score that this answer is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidenceScore: FormControl<number | null | undefined>,

		/** Map that contains metadata about the FAQ answer and the document that it originates from. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		queryRecord: FormControl<string | null | undefined>,

		/** The corresponding FAQ question. */
		question: FormControl<string | null | undefined>,

		/** The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document}. */
		source: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1FaqAnswerDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1FaqAnswerDataFormProperties>({
			answer: new FormControl<string | null | undefined>(undefined),
			confidenceScore: new FormControl<number | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			queryRecord: new FormControl<string | null | undefined>(undefined),
			question: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Agent Assist Smart Compose suggestion data. */
	export interface GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData {

		/** The system's confidence score that this suggestion is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidenceScore?: number | null;

		/** Map that contains metadata about the Smart Compose suggestion and the document from which it originates. */
		metadata?: {[id: string]: string };

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		queryRecord?: string | null;

		/** The content of the suggestion. */
		suggestion?: string | null;
	}

	/** Agent Assist Smart Compose suggestion data. */
	export interface GoogleCloudContactcenterinsightsV1SmartComposeSuggestionDataFormProperties {

		/** The system's confidence score that this suggestion is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidenceScore: FormControl<number | null | undefined>,

		/** Map that contains metadata about the Smart Compose suggestion and the document from which it originates. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		queryRecord: FormControl<string | null | undefined>,

		/** The content of the suggestion. */
		suggestion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1SmartComposeSuggestionDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1SmartComposeSuggestionDataFormProperties>({
			confidenceScore: new FormControl<number | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			queryRecord: new FormControl<string | null | undefined>(undefined),
			suggestion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Agent Assist Smart Reply data. */
	export interface GoogleCloudContactcenterinsightsV1SmartReplyData {

		/** The system's confidence score that this reply is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidenceScore?: number | null;

		/** Map that contains metadata about the Smart Reply and the document from which it originates. */
		metadata?: {[id: string]: string };

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		queryRecord?: string | null;

		/** The content of the reply. */
		reply?: string | null;
	}

	/** Agent Assist Smart Reply data. */
	export interface GoogleCloudContactcenterinsightsV1SmartReplyDataFormProperties {

		/** The system's confidence score that this reply is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidenceScore: FormControl<number | null | undefined>,

		/** Map that contains metadata about the Smart Reply and the document from which it originates. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		queryRecord: FormControl<string | null | undefined>,

		/** The content of the reply. */
		reply: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1SmartReplyDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1SmartReplyDataFormProperties>({
			confidenceScore: new FormControl<number | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			queryRecord: new FormControl<string | null | undefined>(undefined),
			reply: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A message representing the transcript of a conversation. */
	export interface GoogleCloudContactcenterinsightsV1ConversationTranscript {

		/** A list of sequential transcript segments that comprise the conversation. */
		transcriptSegments?: Array<GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment>;
	}

	/** A message representing the transcript of a conversation. */
	export interface GoogleCloudContactcenterinsightsV1ConversationTranscriptFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1ConversationTranscriptFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ConversationTranscriptFormProperties>({
		});

	}


	/** A segment of a full transcript. */
	export interface GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment {

		/** For conversations derived from multi-channel audio, this is the channel number corresponding to the audio from that channel. For audioChannelCount = N, its output values can range from '1' to 'N'. A channel tag of 0 indicates that the audio is mono. */
		channelTag?: number | null;

		/** A confidence estimate between 0.0 and 1.0 of the fidelity of this segment. A default value of 0.0 indicates that the value is unset. */
		confidence?: number | null;

		/** Metadata from Dialogflow relating to the current transcript segment. */
		dialogflowSegmentMetadata?: GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata;

		/** The language code of this segment as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". */
		languageCode?: string | null;

		/** The time that the message occurred, if provided. */
		messageTime?: string | null;

		/** The call participant speaking for a given utterance. */
		segmentParticipant?: GoogleCloudContactcenterinsightsV1ConversationParticipant;

		/** The data for a sentiment annotation. */
		sentiment?: GoogleCloudContactcenterinsightsV1SentimentData;

		/** The text of this segment. */
		text?: string | null;

		/** A list of the word-specific information for each word in the segment. */
		words?: Array<GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo>;
	}

	/** A segment of a full transcript. */
	export interface GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentFormProperties {

		/** For conversations derived from multi-channel audio, this is the channel number corresponding to the audio from that channel. For audioChannelCount = N, its output values can range from '1' to 'N'. A channel tag of 0 indicates that the audio is mono. */
		channelTag: FormControl<number | null | undefined>,

		/** A confidence estimate between 0.0 and 1.0 of the fidelity of this segment. A default value of 0.0 indicates that the value is unset. */
		confidence: FormControl<number | null | undefined>,

		/** The language code of this segment as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". */
		languageCode: FormControl<string | null | undefined>,

		/** The time that the message occurred, if provided. */
		messageTime: FormControl<string | null | undefined>,

		/** The text of this segment. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentFormProperties>({
			channelTag: new FormControl<number | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			messageTime: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata from Dialogflow relating to the current transcript segment. */
	export interface GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata {

		/** Whether the transcript segment was covered under the configured smart reply allowlist in Agent Assist. */
		smartReplyAllowlistCovered?: boolean | null;
	}

	/** Metadata from Dialogflow relating to the current transcript segment. */
	export interface GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadataFormProperties {

		/** Whether the transcript segment was covered under the configured smart reply allowlist in Agent Assist. */
		smartReplyAllowlistCovered: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadataFormProperties>({
			smartReplyAllowlistCovered: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The call participant speaking for a given utterance. */
	export interface GoogleCloudContactcenterinsightsV1ConversationParticipant {

		/** Deprecated. Use `dialogflow_participant_name` instead. The name of the Dialogflow participant. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant} */
		dialogflowParticipant?: string | null;

		/** The name of the participant provided by Dialogflow. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant} */
		dialogflowParticipantName?: string | null;

		/** Obfuscated user ID from Dialogflow. */
		obfuscatedExternalUserId?: string | null;

		/** The role of the participant. */
		role?: GoogleCloudContactcenterinsightsV1ConversationParticipantRole | null;

		/** A user-specified ID representing the participant. */
		userId?: string | null;
	}

	/** The call participant speaking for a given utterance. */
	export interface GoogleCloudContactcenterinsightsV1ConversationParticipantFormProperties {

		/** Deprecated. Use `dialogflow_participant_name` instead. The name of the Dialogflow participant. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant} */
		dialogflowParticipant: FormControl<string | null | undefined>,

		/** The name of the participant provided by Dialogflow. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant} */
		dialogflowParticipantName: FormControl<string | null | undefined>,

		/** Obfuscated user ID from Dialogflow. */
		obfuscatedExternalUserId: FormControl<string | null | undefined>,

		/** The role of the participant. */
		role: FormControl<GoogleCloudContactcenterinsightsV1ConversationParticipantRole | null | undefined>,

		/** A user-specified ID representing the participant. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ConversationParticipantFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ConversationParticipantFormProperties>({
			dialogflowParticipant: new FormControl<string | null | undefined>(undefined),
			dialogflowParticipantName: new FormControl<string | null | undefined>(undefined),
			obfuscatedExternalUserId: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<GoogleCloudContactcenterinsightsV1ConversationParticipantRole | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudContactcenterinsightsV1ConversationParticipantRole { ROLE_UNSPECIFIED = 'ROLE_UNSPECIFIED', HUMAN_AGENT = 'HUMAN_AGENT', AUTOMATED_AGENT = 'AUTOMATED_AGENT', END_USER = 'END_USER', ANY_AGENT = 'ANY_AGENT' }


	/** Word-level info for words in a transcript. */
	export interface GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo {

		/** A confidence estimate between 0.0 and 1.0 of the fidelity of this word. A default value of 0.0 indicates that the value is unset. */
		confidence?: number | null;

		/** Time offset of the end of this word relative to the beginning of the total conversation. */
		endOffset?: string | null;

		/** Time offset of the start of this word relative to the beginning of the total conversation. */
		startOffset?: string | null;

		/** The word itself. Includes punctuation marks that surround the word. */
		word?: string | null;
	}

	/** Word-level info for words in a transcript. */
	export interface GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfoFormProperties {

		/** A confidence estimate between 0.0 and 1.0 of the fidelity of this word. A default value of 0.0 indicates that the value is unset. */
		confidence: FormControl<number | null | undefined>,

		/** Time offset of the end of this word relative to the beginning of the total conversation. */
		endOffset: FormControl<string | null | undefined>,

		/** Time offset of the start of this word relative to the beginning of the total conversation. */
		startOffset: FormControl<string | null | undefined>,

		/** The word itself. Includes punctuation marks that surround the word. */
		word: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfoFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfoFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			endOffset: new FormControl<string | null | undefined>(undefined),
			startOffset: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for a create analysis operation. */
	export interface GoogleCloudContactcenterinsightsV1CreateAnalysisOperationMetadata {

		/** Selector of all available annotators and phrase matchers to run. */
		annotatorSelector?: GoogleCloudContactcenterinsightsV1AnnotatorSelector;

		/** Output only. The Conversation that this Analysis Operation belongs to. */
		conversation?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;
	}

	/** Metadata for a create analysis operation. */
	export interface GoogleCloudContactcenterinsightsV1CreateAnalysisOperationMetadataFormProperties {

		/** Output only. The Conversation that this Analysis Operation belongs to. */
		conversation: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1CreateAnalysisOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1CreateAnalysisOperationMetadataFormProperties>({
			conversation: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for creating an issue model. */
	export interface GoogleCloudContactcenterinsightsV1CreateIssueModelMetadata {

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** The request to create an issue model. */
		request?: GoogleCloudContactcenterinsightsV1CreateIssueModelRequest;
	}

	/** Metadata for creating an issue model. */
	export interface GoogleCloudContactcenterinsightsV1CreateIssueModelMetadataFormProperties {

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1CreateIssueModelMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1CreateIssueModelMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to create an issue model. */
	export interface GoogleCloudContactcenterinsightsV1CreateIssueModelRequest {

		/** The issue model resource. */
		issueModel?: GoogleCloudContactcenterinsightsV1IssueModel;

		/** Required. The parent resource of the issue model. */
		parent?: string | null;
	}

	/** The request to create an issue model. */
	export interface GoogleCloudContactcenterinsightsV1CreateIssueModelRequestFormProperties {

		/** Required. The parent resource of the issue model. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1CreateIssueModelRequestFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1CreateIssueModelRequestFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The issue model resource. */
	export interface GoogleCloudContactcenterinsightsV1IssueModel {

		/** Output only. The time at which this issue model was created. */
		createTime?: string | null;

		/** The representative name for the issue model. */
		displayName?: string | null;

		/** Configs for the input data used to create the issue model. */
		inputDataConfig?: GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig;

		/** Output only. Number of issues in this issue model. */
		issueCount?: string | null;

		/** Language of the model. */
		languageCode?: string | null;

		/** Type of the model. */
		modelType?: GoogleCloudContactcenterinsightsV1IssueModelModelType | null;

		/** Immutable. The resource name of the issue model. Format: projects/{project}/locations/{location}/issueModels/{issue_model} */
		name?: string | null;

		/** Output only. State of the model. */
		state?: GoogleCloudContactcenterinsightsV1IssueModelState | null;

		/** Aggregated statistics about an issue model. */
		trainingStats?: GoogleCloudContactcenterinsightsV1IssueModelLabelStats;

		/** Output only. The most recent time at which the issue model was updated. */
		updateTime?: string | null;
	}

	/** The issue model resource. */
	export interface GoogleCloudContactcenterinsightsV1IssueModelFormProperties {

		/** Output only. The time at which this issue model was created. */
		createTime: FormControl<string | null | undefined>,

		/** The representative name for the issue model. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Number of issues in this issue model. */
		issueCount: FormControl<string | null | undefined>,

		/** Language of the model. */
		languageCode: FormControl<string | null | undefined>,

		/** Type of the model. */
		modelType: FormControl<GoogleCloudContactcenterinsightsV1IssueModelModelType | null | undefined>,

		/** Immutable. The resource name of the issue model. Format: projects/{project}/locations/{location}/issueModels/{issue_model} */
		name: FormControl<string | null | undefined>,

		/** Output only. State of the model. */
		state: FormControl<GoogleCloudContactcenterinsightsV1IssueModelState | null | undefined>,

		/** Output only. The most recent time at which the issue model was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1IssueModelFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1IssueModelFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			issueCount: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			modelType: new FormControl<GoogleCloudContactcenterinsightsV1IssueModelModelType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudContactcenterinsightsV1IssueModelState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configs for the input data used to create the issue model. */
	export interface GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig {

		/** A filter to reduce the conversations used for training the model to a specific subset. */
		filter?: string | null;

		/** Medium of conversations used in training data. This field is being deprecated. To specify the medium to be used in training a new issue model, set the `medium` field on `filter`. */
		medium?: GoogleCloudContactcenterinsightsV1ConversationMedium | null;

		/** Output only. Number of conversations used in training. Output only. */
		trainingConversationsCount?: string | null;
	}

	/** Configs for the input data used to create the issue model. */
	export interface GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigFormProperties {

		/** A filter to reduce the conversations used for training the model to a specific subset. */
		filter: FormControl<string | null | undefined>,

		/** Medium of conversations used in training data. This field is being deprecated. To specify the medium to be used in training a new issue model, set the `medium` field on `filter`. */
		medium: FormControl<GoogleCloudContactcenterinsightsV1ConversationMedium | null | undefined>,

		/** Output only. Number of conversations used in training. Output only. */
		trainingConversationsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1IssueModelInputDataConfigFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			medium: new FormControl<GoogleCloudContactcenterinsightsV1ConversationMedium | null | undefined>(undefined),
			trainingConversationsCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudContactcenterinsightsV1IssueModelModelType { MODEL_TYPE_UNSPECIFIED = 'MODEL_TYPE_UNSPECIFIED', TYPE_V1 = 'TYPE_V1', TYPE_V2 = 'TYPE_V2' }

	export enum GoogleCloudContactcenterinsightsV1IssueModelState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', UNDEPLOYED = 'UNDEPLOYED', DEPLOYING = 'DEPLOYING', DEPLOYED = 'DEPLOYED', UNDEPLOYING = 'UNDEPLOYING', DELETING = 'DELETING' }


	/** Metadata for deleting an issue model. */
	export interface GoogleCloudContactcenterinsightsV1DeleteIssueModelMetadata {

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** The request to delete an issue model. */
		request?: GoogleCloudContactcenterinsightsV1DeleteIssueModelRequest;
	}

	/** Metadata for deleting an issue model. */
	export interface GoogleCloudContactcenterinsightsV1DeleteIssueModelMetadataFormProperties {

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1DeleteIssueModelMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1DeleteIssueModelMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to delete an issue model. */
	export interface GoogleCloudContactcenterinsightsV1DeleteIssueModelRequest {

		/** Required. The name of the issue model to delete. */
		name?: string | null;
	}

	/** The request to delete an issue model. */
	export interface GoogleCloudContactcenterinsightsV1DeleteIssueModelRequestFormProperties {

		/** Required. The name of the issue model to delete. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1DeleteIssueModelRequestFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1DeleteIssueModelRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for deploying an issue model. */
	export interface GoogleCloudContactcenterinsightsV1DeployIssueModelMetadata {

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** The request to deploy an issue model. */
		request?: GoogleCloudContactcenterinsightsV1DeployIssueModelRequest;
	}

	/** Metadata for deploying an issue model. */
	export interface GoogleCloudContactcenterinsightsV1DeployIssueModelMetadataFormProperties {

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1DeployIssueModelMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1DeployIssueModelMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to deploy an issue model. */
	export interface GoogleCloudContactcenterinsightsV1DeployIssueModelRequest {

		/** Required. The issue model to deploy. */
		name?: string | null;
	}

	/** The request to deploy an issue model. */
	export interface GoogleCloudContactcenterinsightsV1DeployIssueModelRequestFormProperties {

		/** Required. The issue model to deploy. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1DeployIssueModelRequestFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1DeployIssueModelRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to deploy an issue model. */
	export interface GoogleCloudContactcenterinsightsV1DeployIssueModelResponse {
	}

	/** The response to deploy an issue model. */
	export interface GoogleCloudContactcenterinsightsV1DeployIssueModelResponseFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1DeployIssueModelResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1DeployIssueModelResponseFormProperties>({
		});

	}


	/** Exact match configuration. */
	export interface GoogleCloudContactcenterinsightsV1ExactMatchConfig {

		/** Whether to consider case sensitivity when performing an exact match. */
		caseSensitive?: boolean | null;
	}

	/** Exact match configuration. */
	export interface GoogleCloudContactcenterinsightsV1ExactMatchConfigFormProperties {

		/** Whether to consider case sensitivity when performing an exact match. */
		caseSensitive: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ExactMatchConfigFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ExactMatchConfigFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Metadata for an export insights operation. */
	export interface GoogleCloudContactcenterinsightsV1ExportInsightsDataMetadata {

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Partial errors during export operation that might cause the operation output to be incomplete. */
		partialErrors?: Array<GoogleRpcStatus>;

		/** The request to export insights. */
		request?: GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest;
	}

	/** Metadata for an export insights operation. */
	export interface GoogleCloudContactcenterinsightsV1ExportInsightsDataMetadataFormProperties {

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ExportInsightsDataMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ExportInsightsDataMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to export insights. */
	export interface GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest {

		/** A BigQuery Table Reference. */
		bigQueryDestination?: GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination;

		/** A filter to reduce results to a specific subset. Useful for exporting conversations with specific properties. */
		filter?: string | null;

		/** A fully qualified KMS key name for BigQuery tables protected by CMEK. Format: projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}/cryptoKeyVersions/{version} */
		kmsKey?: string | null;

		/** Required. The parent resource to export data from. */
		parent?: string | null;

		/** Options for what to do if the destination table already exists. */
		writeDisposition?: GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDisposition | null;
	}

	/** The request to export insights. */
	export interface GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestFormProperties {

		/** A filter to reduce results to a specific subset. Useful for exporting conversations with specific properties. */
		filter: FormControl<string | null | undefined>,

		/** A fully qualified KMS key name for BigQuery tables protected by CMEK. Format: projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}/cryptoKeyVersions/{version} */
		kmsKey: FormControl<string | null | undefined>,

		/** Required. The parent resource to export data from. */
		parent: FormControl<string | null | undefined>,

		/** Options for what to do if the destination table already exists. */
		writeDisposition: FormControl<GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDisposition | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ExportInsightsDataRequestFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			kmsKey: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			writeDisposition: new FormControl<GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDisposition | null | undefined>(undefined),
		});

	}


	/** A BigQuery Table Reference. */
	export interface GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination {

		/** Required. The name of the BigQuery dataset that the snapshot result should be exported to. If this dataset does not exist, the export call returns an INVALID_ARGUMENT error. */
		dataset?: string | null;

		/** A project ID or number. If specified, then export will attempt to write data to this project instead of the resource project. Otherwise, the resource project will be used. */
		projectId?: string | null;

		/** The BigQuery table name to which the insights data should be written. If this table does not exist, the export call returns an INVALID_ARGUMENT error. */
		table?: string | null;
	}

	/** A BigQuery Table Reference. */
	export interface GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestinationFormProperties {

		/** Required. The name of the BigQuery dataset that the snapshot result should be exported to. If this dataset does not exist, the export call returns an INVALID_ARGUMENT error. */
		dataset: FormControl<string | null | undefined>,

		/** A project ID or number. If specified, then export will attempt to write data to this project instead of the resource project. Otherwise, the resource project will be used. */
		projectId: FormControl<string | null | undefined>,

		/** The BigQuery table name to which the insights data should be written. If this table does not exist, the export call returns an INVALID_ARGUMENT error. */
		table: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestinationFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestinationFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDisposition { WRITE_DISPOSITION_UNSPECIFIED = 'WRITE_DISPOSITION_UNSPECIFIED', WRITE_TRUNCATE = 'WRITE_TRUNCATE', WRITE_APPEND = 'WRITE_APPEND' }


	/** Response for an export insights operation. */
	export interface GoogleCloudContactcenterinsightsV1ExportInsightsDataResponse {
	}

	/** Response for an export insights operation. */
	export interface GoogleCloudContactcenterinsightsV1ExportInsightsDataResponseFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1ExportInsightsDataResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ExportInsightsDataResponseFormProperties>({
		});

	}


	/** The metadata for an IngestConversations operation. */
	export interface GoogleCloudContactcenterinsightsV1IngestConversationsMetadata {

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Statistics for IngestConversations operation. */
		ingestConversationsStats?: GoogleCloudContactcenterinsightsV1IngestConversationsMetadataIngestConversationsStats;

		/** Output only. Partial errors during ingest operation that might cause the operation output to be incomplete. */
		partialErrors?: Array<GoogleRpcStatus>;

		/** The request to ingest conversations. */
		request?: GoogleCloudContactcenterinsightsV1IngestConversationsRequest;
	}

	/** The metadata for an IngestConversations operation. */
	export interface GoogleCloudContactcenterinsightsV1IngestConversationsMetadataFormProperties {

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1IngestConversationsMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1IngestConversationsMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Statistics for IngestConversations operation. */
	export interface GoogleCloudContactcenterinsightsV1IngestConversationsMetadataIngestConversationsStats {

		/** Output only. The number of objects skipped because another conversation with the same transcript uri had already been ingested. */
		duplicatesSkippedCount?: number | null;

		/** Output only. The number of objects which were unable to be ingested due to errors. The errors are populated in the partial_errors field. */
		failedIngestCount?: number | null;

		/** Output only. The number of objects processed during the ingest operation. */
		processedObjectCount?: number | null;

		/** Output only. The number of new conversations added during this ingest operation. */
		successfulIngestCount?: number | null;
	}

	/** Statistics for IngestConversations operation. */
	export interface GoogleCloudContactcenterinsightsV1IngestConversationsMetadataIngestConversationsStatsFormProperties {

		/** Output only. The number of objects skipped because another conversation with the same transcript uri had already been ingested. */
		duplicatesSkippedCount: FormControl<number | null | undefined>,

		/** Output only. The number of objects which were unable to be ingested due to errors. The errors are populated in the partial_errors field. */
		failedIngestCount: FormControl<number | null | undefined>,

		/** Output only. The number of objects processed during the ingest operation. */
		processedObjectCount: FormControl<number | null | undefined>,

		/** Output only. The number of new conversations added during this ingest operation. */
		successfulIngestCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1IngestConversationsMetadataIngestConversationsStatsFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1IngestConversationsMetadataIngestConversationsStatsFormProperties>({
			duplicatesSkippedCount: new FormControl<number | null | undefined>(undefined),
			failedIngestCount: new FormControl<number | null | undefined>(undefined),
			processedObjectCount: new FormControl<number | null | undefined>(undefined),
			successfulIngestCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request to ingest conversations. */
	export interface GoogleCloudContactcenterinsightsV1IngestConversationsRequest {

		/** Configuration that applies to all conversations. */
		conversationConfig?: GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig;

		/** Configuration for Cloud Storage bucket sources. */
		gcsSource?: GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource;

		/** Required. The parent resource for new conversations. */
		parent?: string | null;

		/** DLP resources used for redaction while ingesting conversations. */
		redactionConfig?: GoogleCloudContactcenterinsightsV1RedactionConfig;

		/** Speech-to-Text configuration. */
		speechConfig?: GoogleCloudContactcenterinsightsV1SpeechConfig;

		/** Configuration for processing transcript objects. */
		transcriptObjectConfig?: GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig;
	}

	/** The request to ingest conversations. */
	export interface GoogleCloudContactcenterinsightsV1IngestConversationsRequestFormProperties {

		/** Required. The parent resource for new conversations. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1IngestConversationsRequestFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1IngestConversationsRequestFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration that applies to all conversations. */
	export interface GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig {

		/** Optional. For audio conversations, this field indicates which of the channels, 1 or 2, contains the agent. Note that this must be set for audio conversations to be properly displayed and analyzed. */
		agentChannel?: number | null;

		/** An opaque, user-specified string representing the human agent who handled the conversations. */
		agentId?: string | null;

		/** Optional. For audio conversations, this field indicates which of the channels, 1 or 2, contains the customer. Note that this must be set for audio conversations to be properly displayed and analyzed. */
		customerChannel?: number | null;
	}

	/** Configuration that applies to all conversations. */
	export interface GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfigFormProperties {

		/** Optional. For audio conversations, this field indicates which of the channels, 1 or 2, contains the agent. Note that this must be set for audio conversations to be properly displayed and analyzed. */
		agentChannel: FormControl<number | null | undefined>,

		/** An opaque, user-specified string representing the human agent who handled the conversations. */
		agentId: FormControl<string | null | undefined>,

		/** Optional. For audio conversations, this field indicates which of the channels, 1 or 2, contains the customer. Note that this must be set for audio conversations to be properly displayed and analyzed. */
		customerChannel: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfigFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfigFormProperties>({
			agentChannel: new FormControl<number | null | undefined>(undefined),
			agentId: new FormControl<string | null | undefined>(undefined),
			customerChannel: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration for Cloud Storage bucket sources. */
	export interface GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource {

		/** Optional. Specifies the type of the objects in `bucket_uri`. */
		bucketObjectType?: GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSourceBucketObjectType | null;

		/** Required. The Cloud Storage bucket containing source objects. */
		bucketUri?: string | null;
	}

	/** Configuration for Cloud Storage bucket sources. */
	export interface GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSourceFormProperties {

		/** Optional. Specifies the type of the objects in `bucket_uri`. */
		bucketObjectType: FormControl<GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSourceBucketObjectType | null | undefined>,

		/** Required. The Cloud Storage bucket containing source objects. */
		bucketUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSourceFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSourceFormProperties>({
			bucketObjectType: new FormControl<GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSourceBucketObjectType | null | undefined>(undefined),
			bucketUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSourceBucketObjectType { BUCKET_OBJECT_TYPE_UNSPECIFIED = 'BUCKET_OBJECT_TYPE_UNSPECIFIED', TRANSCRIPT = 'TRANSCRIPT', AUDIO = 'AUDIO' }


	/** DLP resources used for redaction while ingesting conversations. */
	export interface GoogleCloudContactcenterinsightsV1RedactionConfig {

		/** The fully-qualified DLP deidentify template resource name. Format: `projects/{project}/deidentifyTemplates/{template}` */
		deidentifyTemplate?: string | null;

		/** The fully-qualified DLP inspect template resource name. Format: `projects/{project}/locations/{location}/inspectTemplates/{template}` */
		inspectTemplate?: string | null;
	}

	/** DLP resources used for redaction while ingesting conversations. */
	export interface GoogleCloudContactcenterinsightsV1RedactionConfigFormProperties {

		/** The fully-qualified DLP deidentify template resource name. Format: `projects/{project}/deidentifyTemplates/{template}` */
		deidentifyTemplate: FormControl<string | null | undefined>,

		/** The fully-qualified DLP inspect template resource name. Format: `projects/{project}/locations/{location}/inspectTemplates/{template}` */
		inspectTemplate: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1RedactionConfigFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1RedactionConfigFormProperties>({
			deidentifyTemplate: new FormControl<string | null | undefined>(undefined),
			inspectTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Speech-to-Text configuration. */
	export interface GoogleCloudContactcenterinsightsV1SpeechConfig {

		/** The fully-qualified Speech Recognizer resource name. Format: `projects/{project_id}/locations/{location}/recognizer/{recognizer}` */
		speechRecognizer?: string | null;
	}

	/** Speech-to-Text configuration. */
	export interface GoogleCloudContactcenterinsightsV1SpeechConfigFormProperties {

		/** The fully-qualified Speech Recognizer resource name. Format: `projects/{project_id}/locations/{location}/recognizer/{recognizer}` */
		speechRecognizer: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1SpeechConfigFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1SpeechConfigFormProperties>({
			speechRecognizer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for processing transcript objects. */
	export interface GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig {

		/** Required. The medium transcript objects represent. */
		medium?: GoogleCloudContactcenterinsightsV1ConversationMedium | null;
	}

	/** Configuration for processing transcript objects. */
	export interface GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigFormProperties {

		/** Required. The medium transcript objects represent. */
		medium: FormControl<GoogleCloudContactcenterinsightsV1ConversationMedium | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigFormProperties>({
			medium: new FormControl<GoogleCloudContactcenterinsightsV1ConversationMedium | null | undefined>(undefined),
		});

	}


	/** The response to an IngestConversations operation. */
	export interface GoogleCloudContactcenterinsightsV1IngestConversationsResponse {
	}

	/** The response to an IngestConversations operation. */
	export interface GoogleCloudContactcenterinsightsV1IngestConversationsResponseFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1IngestConversationsResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1IngestConversationsResponseFormProperties>({
		});

	}


	/** The issue resource. */
	export interface GoogleCloudContactcenterinsightsV1Issue {

		/** Output only. The time at which this issue was created. */
		createTime?: string | null;

		/** The representative name for the issue. */
		displayName?: string | null;

		/** Immutable. The resource name of the issue. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue} */
		name?: string | null;

		/** Output only. Resource names of the sample representative utterances that match to this issue. */
		sampleUtterances?: Array<string>;

		/** Output only. The most recent time that this issue was updated. */
		updateTime?: string | null;
	}

	/** The issue resource. */
	export interface GoogleCloudContactcenterinsightsV1IssueFormProperties {

		/** Output only. The time at which this issue was created. */
		createTime: FormControl<string | null | undefined>,

		/** The representative name for the issue. */
		displayName: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the issue. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue} */
		name: FormControl<string | null | undefined>,

		/** Output only. The most recent time that this issue was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1IssueFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1IssueFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to list analyses. */
	export interface GoogleCloudContactcenterinsightsV1ListAnalysesResponse {

		/** The analyses that match the request. */
		analyses?: Array<GoogleCloudContactcenterinsightsV1Analysis>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** The response to list analyses. */
	export interface GoogleCloudContactcenterinsightsV1ListAnalysesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ListAnalysesResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ListAnalysesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of listing conversations. */
	export interface GoogleCloudContactcenterinsightsV1ListConversationsResponse {

		/** The conversations that match the request. */
		conversations?: Array<GoogleCloudContactcenterinsightsV1Conversation>;

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is set, it means there is another page available. If it is not set, it means no other pages are available. */
		nextPageToken?: string | null;
	}

	/** The response of listing conversations. */
	export interface GoogleCloudContactcenterinsightsV1ListConversationsResponseFormProperties {

		/** A token which can be sent as `page_token` to retrieve the next page. If this field is set, it means there is another page available. If it is not set, it means no other pages are available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ListConversationsResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ListConversationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of listing issue models. */
	export interface GoogleCloudContactcenterinsightsV1ListIssueModelsResponse {

		/** The issue models that match the request. */
		issueModels?: Array<GoogleCloudContactcenterinsightsV1IssueModel>;
	}

	/** The response of listing issue models. */
	export interface GoogleCloudContactcenterinsightsV1ListIssueModelsResponseFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1ListIssueModelsResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ListIssueModelsResponseFormProperties>({
		});

	}


	/** The response of listing issues. */
	export interface GoogleCloudContactcenterinsightsV1ListIssuesResponse {

		/** The issues that match the request. */
		issues?: Array<GoogleCloudContactcenterinsightsV1Issue>;
	}

	/** The response of listing issues. */
	export interface GoogleCloudContactcenterinsightsV1ListIssuesResponseFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1ListIssuesResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ListIssuesResponseFormProperties>({
		});

	}


	/** The response of listing phrase matchers. */
	export interface GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The phrase matchers that match the request. */
		phraseMatchers?: Array<GoogleCloudContactcenterinsightsV1PhraseMatcher>;
	}

	/** The response of listing phrase matchers. */
	export interface GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ListPhraseMatchersResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The phrase matcher resource. */
	export interface GoogleCloudContactcenterinsightsV1PhraseMatcher {

		/** Output only. The most recent time at which the activation status was updated. */
		activationUpdateTime?: string | null;

		/** Applies the phrase matcher only when it is active. */
		active?: boolean | null;

		/** The human-readable name of the phrase matcher. */
		displayName?: string | null;

		/** The resource name of the phrase matcher. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher} */
		name?: string | null;

		/** A list of phase match rule groups that are included in this matcher. */
		phraseMatchRuleGroups?: Array<GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup>;

		/** Output only. The timestamp of when the revision was created. It is also the create time when a new matcher is added. */
		revisionCreateTime?: string | null;

		/** Output only. Immutable. The revision ID of the phrase matcher. A new revision is committed whenever the matcher is changed, except when it is activated or deactivated. A server generated random ID will be used. Example: locations/global/phraseMatchers/my-first-matcher@1234567 */
		revisionId?: string | null;

		/** The role whose utterances the phrase matcher should be matched against. If the role is ROLE_UNSPECIFIED it will be matched against any utterances in the transcript. */
		roleMatch?: GoogleCloudContactcenterinsightsV1ConversationParticipantRole | null;

		/** Required. The type of this phrase matcher. */
		type?: GoogleCloudContactcenterinsightsV1PhraseMatcherType | null;

		/** Output only. The most recent time at which the phrase matcher was updated. */
		updateTime?: string | null;

		/** The customized version tag to use for the phrase matcher. If not specified, it will default to `revision_id`. */
		versionTag?: string | null;
	}

	/** The phrase matcher resource. */
	export interface GoogleCloudContactcenterinsightsV1PhraseMatcherFormProperties {

		/** Output only. The most recent time at which the activation status was updated. */
		activationUpdateTime: FormControl<string | null | undefined>,

		/** Applies the phrase matcher only when it is active. */
		active: FormControl<boolean | null | undefined>,

		/** The human-readable name of the phrase matcher. */
		displayName: FormControl<string | null | undefined>,

		/** The resource name of the phrase matcher. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher} */
		name: FormControl<string | null | undefined>,

		/** Output only. The timestamp of when the revision was created. It is also the create time when a new matcher is added. */
		revisionCreateTime: FormControl<string | null | undefined>,

		/** Output only. Immutable. The revision ID of the phrase matcher. A new revision is committed whenever the matcher is changed, except when it is activated or deactivated. A server generated random ID will be used. Example: locations/global/phraseMatchers/my-first-matcher@1234567 */
		revisionId: FormControl<string | null | undefined>,

		/** The role whose utterances the phrase matcher should be matched against. If the role is ROLE_UNSPECIFIED it will be matched against any utterances in the transcript. */
		roleMatch: FormControl<GoogleCloudContactcenterinsightsV1ConversationParticipantRole | null | undefined>,

		/** Required. The type of this phrase matcher. */
		type: FormControl<GoogleCloudContactcenterinsightsV1PhraseMatcherType | null | undefined>,

		/** Output only. The most recent time at which the phrase matcher was updated. */
		updateTime: FormControl<string | null | undefined>,

		/** The customized version tag to use for the phrase matcher. If not specified, it will default to `revision_id`. */
		versionTag: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1PhraseMatcherFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1PhraseMatcherFormProperties>({
			activationUpdateTime: new FormControl<string | null | undefined>(undefined),
			active: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			revisionCreateTime: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			roleMatch: new FormControl<GoogleCloudContactcenterinsightsV1ConversationParticipantRole | null | undefined>(undefined),
			type: new FormControl<GoogleCloudContactcenterinsightsV1PhraseMatcherType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			versionTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A message representing a rule in the phrase matcher. */
	export interface GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup {

		/** A list of phrase match rules that are included in this group. */
		phraseMatchRules?: Array<GoogleCloudContactcenterinsightsV1PhraseMatchRule>;

		/** Required. The type of this phrase match rule group. */
		type?: GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupType | null;
	}

	/** A message representing a rule in the phrase matcher. */
	export interface GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupFormProperties {

		/** Required. The type of this phrase match rule group. */
		type: FormControl<GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupType | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupFormProperties>({
			type: new FormControl<GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupType | null | undefined>(undefined),
		});

	}


	/** The data for a phrase match rule. */
	export interface GoogleCloudContactcenterinsightsV1PhraseMatchRule {

		/** Configuration information of a phrase match rule. */
		config?: GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig;

		/** Specifies whether the phrase must be missing from the transcript segment or present in the transcript segment. */
		negated?: boolean | null;

		/** Required. The phrase to be matched. */
		query?: string | null;
	}

	/** The data for a phrase match rule. */
	export interface GoogleCloudContactcenterinsightsV1PhraseMatchRuleFormProperties {

		/** Specifies whether the phrase must be missing from the transcript segment or present in the transcript segment. */
		negated: FormControl<boolean | null | undefined>,

		/** Required. The phrase to be matched. */
		query: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1PhraseMatchRuleFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1PhraseMatchRuleFormProperties>({
			negated: new FormControl<boolean | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration information of a phrase match rule. */
	export interface GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig {

		/** Exact match configuration. */
		exactMatchConfig?: GoogleCloudContactcenterinsightsV1ExactMatchConfig;
	}

	/** Configuration information of a phrase match rule. */
	export interface GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfigFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1PhraseMatchRuleConfigFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfigFormProperties>({
		});

	}

	export enum GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupType { PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED = 'PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED', ALL_OF = 'ALL_OF', ANY_OF = 'ANY_OF' }

	export enum GoogleCloudContactcenterinsightsV1PhraseMatcherType { PHRASE_MATCHER_TYPE_UNSPECIFIED = 'PHRASE_MATCHER_TYPE_UNSPECIFIED', ALL_OF = 'ALL_OF', ANY_OF = 'ANY_OF' }


	/** The response of listing views. */
	export interface GoogleCloudContactcenterinsightsV1ListViewsResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The views that match the request. */
		views?: Array<GoogleCloudContactcenterinsightsV1View>;
	}

	/** The response of listing views. */
	export interface GoogleCloudContactcenterinsightsV1ListViewsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ListViewsResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ListViewsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The View resource. */
	export interface GoogleCloudContactcenterinsightsV1View {

		/** Output only. The time at which this view was created. */
		createTime?: string | null;

		/** The human-readable display name of the view. */
		displayName?: string | null;

		/** Immutable. The resource name of the view. Format: projects/{project}/locations/{location}/views/{view} */
		name?: string | null;

		/** Output only. The most recent time at which the view was updated. */
		updateTime?: string | null;

		/** String with specific view properties, must be non-empty. */
		value?: string | null;
	}

	/** The View resource. */
	export interface GoogleCloudContactcenterinsightsV1ViewFormProperties {

		/** Output only. The time at which this view was created. */
		createTime: FormControl<string | null | undefined>,

		/** The human-readable display name of the view. */
		displayName: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the view. Format: projects/{project}/locations/{location}/views/{view} */
		name: FormControl<string | null | undefined>,

		/** Output only. The most recent time at which the view was updated. */
		updateTime: FormControl<string | null | undefined>,

		/** String with specific view properties, must be non-empty. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1ViewFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1ViewFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings resource. */
	export interface GoogleCloudContactcenterinsightsV1Settings {

		/** Default configuration when creating Analyses in Insights. */
		analysisConfig?: GoogleCloudContactcenterinsightsV1SettingsAnalysisConfig;

		/** The default TTL for newly-created conversations. If a conversation has a specified expiration, that value will be used instead. Changing this value will not change the expiration of existing conversations. Conversations with no expire time persist until they are deleted. */
		conversationTtl?: string | null;

		/** Output only. The time at which the settings was created. */
		createTime?: string | null;

		/** A language code to be applied to each transcript segment unless the segment already specifies a language code. Language code defaults to "en-US" if it is neither specified on the segment nor here. */
		languageCode?: string | null;

		/** Immutable. The resource name of the settings resource. Format: projects/{project}/locations/{location}/settings */
		name?: string | null;

		/** A map that maps a notification trigger to a Pub/Sub topic. Each time a specified trigger occurs, Insights will notify the corresponding Pub/Sub topic. Keys are notification triggers. Supported keys are: * "all-triggers": Notify each time any of the supported triggers occurs. * "create-analysis": Notify each time an analysis is created. * "create-conversation": Notify each time a conversation is created. * "export-insights-data": Notify each time an export is complete. * "update-conversation": Notify each time a conversation is updated via UpdateConversation. Values are Pub/Sub topics. The format of each Pub/Sub topic is: projects/{project}/topics/{topic} */
		pubsubNotificationSettings?: {[id: string]: string };

		/** DLP resources used for redaction while ingesting conversations. */
		redactionConfig?: GoogleCloudContactcenterinsightsV1RedactionConfig;

		/** Speech-to-Text configuration. */
		speechConfig?: GoogleCloudContactcenterinsightsV1SpeechConfig;

		/** Output only. The time at which the settings were last updated. */
		updateTime?: string | null;
	}

	/** The settings resource. */
	export interface GoogleCloudContactcenterinsightsV1SettingsFormProperties {

		/** The default TTL for newly-created conversations. If a conversation has a specified expiration, that value will be used instead. Changing this value will not change the expiration of existing conversations. Conversations with no expire time persist until they are deleted. */
		conversationTtl: FormControl<string | null | undefined>,

		/** Output only. The time at which the settings was created. */
		createTime: FormControl<string | null | undefined>,

		/** A language code to be applied to each transcript segment unless the segment already specifies a language code. Language code defaults to "en-US" if it is neither specified on the segment nor here. */
		languageCode: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the settings resource. Format: projects/{project}/locations/{location}/settings */
		name: FormControl<string | null | undefined>,

		/** A map that maps a notification trigger to a Pub/Sub topic. Each time a specified trigger occurs, Insights will notify the corresponding Pub/Sub topic. Keys are notification triggers. Supported keys are: * "all-triggers": Notify each time any of the supported triggers occurs. * "create-analysis": Notify each time an analysis is created. * "create-conversation": Notify each time a conversation is created. * "export-insights-data": Notify each time an export is complete. * "update-conversation": Notify each time a conversation is updated via UpdateConversation. Values are Pub/Sub topics. The format of each Pub/Sub topic is: projects/{project}/topics/{topic} */
		pubsubNotificationSettings: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The time at which the settings were last updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1SettingsFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1SettingsFormProperties>({
			conversationTtl: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pubsubNotificationSettings: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Default configuration when creating Analyses in Insights. */
	export interface GoogleCloudContactcenterinsightsV1SettingsAnalysisConfig {

		/** Selector of all available annotators and phrase matchers to run. */
		annotatorSelector?: GoogleCloudContactcenterinsightsV1AnnotatorSelector;

		/** Percentage of conversations created using Dialogflow runtime integration to analyze automatically, between [0, 100]. */
		runtimeIntegrationAnalysisPercentage?: number | null;

		/** Percentage of conversations created using the UploadConversation endpoint to analyze automatically, between [0, 100]. */
		uploadConversationAnalysisPercentage?: number | null;
	}

	/** Default configuration when creating Analyses in Insights. */
	export interface GoogleCloudContactcenterinsightsV1SettingsAnalysisConfigFormProperties {

		/** Percentage of conversations created using Dialogflow runtime integration to analyze automatically, between [0, 100]. */
		runtimeIntegrationAnalysisPercentage: FormControl<number | null | undefined>,

		/** Percentage of conversations created using the UploadConversation endpoint to analyze automatically, between [0, 100]. */
		uploadConversationAnalysisPercentage: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1SettingsAnalysisConfigFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1SettingsAnalysisConfigFormProperties>({
			runtimeIntegrationAnalysisPercentage: new FormControl<number | null | undefined>(undefined),
			uploadConversationAnalysisPercentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metadata for undeploying an issue model. */
	export interface GoogleCloudContactcenterinsightsV1UndeployIssueModelMetadata {

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** The request to undeploy an issue model. */
		request?: GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest;
	}

	/** Metadata for undeploying an issue model. */
	export interface GoogleCloudContactcenterinsightsV1UndeployIssueModelMetadataFormProperties {

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1UndeployIssueModelMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1UndeployIssueModelMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to undeploy an issue model. */
	export interface GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest {

		/** Required. The issue model to undeploy. */
		name?: string | null;
	}

	/** The request to undeploy an issue model. */
	export interface GoogleCloudContactcenterinsightsV1UndeployIssueModelRequestFormProperties {

		/** Required. The issue model to undeploy. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1UndeployIssueModelRequestFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1UndeployIssueModelRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to undeploy an issue model. */
	export interface GoogleCloudContactcenterinsightsV1UndeployIssueModelResponse {
	}

	/** The response to undeploy an issue model. */
	export interface GoogleCloudContactcenterinsightsV1UndeployIssueModelResponseFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1UndeployIssueModelResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1UndeployIssueModelResponseFormProperties>({
		});

	}


	/** The metadata for an UploadConversation operation. */
	export interface GoogleCloudContactcenterinsightsV1UploadConversationMetadata {

		/** Output only. The operation name for a successfully created analysis operation, if any. */
		analysisOperation?: string | null;

		/** DLP resources used for redaction while ingesting conversations. */
		appliedRedactionConfig?: GoogleCloudContactcenterinsightsV1RedactionConfig;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Request to upload a conversation. */
		request?: GoogleCloudContactcenterinsightsV1UploadConversationRequest;
	}

	/** The metadata for an UploadConversation operation. */
	export interface GoogleCloudContactcenterinsightsV1UploadConversationMetadataFormProperties {

		/** Output only. The operation name for a successfully created analysis operation, if any. */
		analysisOperation: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1UploadConversationMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1UploadConversationMetadataFormProperties>({
			analysisOperation: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to upload a conversation. */
	export interface GoogleCloudContactcenterinsightsV1UploadConversationRequest {

		/** The conversation resource. */
		conversation?: GoogleCloudContactcenterinsightsV1Conversation;

		/** Optional. A unique ID for the new conversation. This ID will become the final component of the conversation's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-` */
		conversationId?: string | null;

		/** Required. The parent resource of the conversation. */
		parent?: string | null;

		/** DLP resources used for redaction while ingesting conversations. */
		redactionConfig?: GoogleCloudContactcenterinsightsV1RedactionConfig;

		/** Speech-to-Text configuration. */
		speechConfig?: GoogleCloudContactcenterinsightsV1SpeechConfig;
	}

	/** Request to upload a conversation. */
	export interface GoogleCloudContactcenterinsightsV1UploadConversationRequestFormProperties {

		/** Optional. A unique ID for the new conversation. This ID will become the final component of the conversation's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-` */
		conversationId: FormControl<string | null | undefined>,

		/** Required. The parent resource of the conversation. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1UploadConversationRequestFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1UploadConversationRequestFormProperties>({
			conversationId: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The analysis resource. */
	export interface GoogleCloudContactcenterinsightsV1alpha1Analysis {

		/** The result of an analysis. */
		analysisResult?: GoogleCloudContactcenterinsightsV1alpha1AnalysisResult;

		/** Selector of all available annotators and phrase matchers to run. */
		annotatorSelector?: GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector;

		/** Output only. The time at which the analysis was created, which occurs when the long-running operation completes. */
		createTime?: string | null;

		/** Immutable. The resource name of the analysis. Format: projects/{project}/locations/{location}/conversations/{conversation}/analyses/{analysis} */
		name?: string | null;

		/** Output only. The time at which the analysis was requested. */
		requestTime?: string | null;
	}

	/** The analysis resource. */
	export interface GoogleCloudContactcenterinsightsV1alpha1AnalysisFormProperties {

		/** Output only. The time at which the analysis was created, which occurs when the long-running operation completes. */
		createTime: FormControl<string | null | undefined>,

		/** Immutable. The resource name of the analysis. Format: projects/{project}/locations/{location}/conversations/{conversation}/analyses/{analysis} */
		name: FormControl<string | null | undefined>,

		/** Output only. The time at which the analysis was requested. */
		requestTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1AnalysisFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1AnalysisFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			requestTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of an analysis. */
	export interface GoogleCloudContactcenterinsightsV1alpha1AnalysisResult {

		/** Call-specific metadata created during analysis. */
		callAnalysisMetadata?: GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadata;

		/** The time at which the analysis ended. */
		endTime?: string | null;
	}

	/** The result of an analysis. */
	export interface GoogleCloudContactcenterinsightsV1alpha1AnalysisResultFormProperties {

		/** The time at which the analysis ended. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1AnalysisResultFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1AnalysisResultFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Call-specific metadata created during analysis. */
	export interface GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadata {

		/** A list of call annotations that apply to this call. */
		annotations?: Array<GoogleCloudContactcenterinsightsV1alpha1CallAnnotation>;

		/** All the entities in the call. */
		entities?: {[id: string]: GoogleCloudContactcenterinsightsV1alpha1Entity };

		/** All the matched intents in the call. */
		intents?: {[id: string]: GoogleCloudContactcenterinsightsV1alpha1Intent };

		/** Issue Modeling result on a conversation. */
		issueModelResult?: GoogleCloudContactcenterinsightsV1alpha1IssueModelResult;

		/** All the matched phrase matchers in the call. */
		phraseMatchers?: {[id: string]: GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData };

		/** Overall conversation-level sentiment for each channel of the call. */
		sentiments?: Array<GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentiment>;
	}

	/** Call-specific metadata created during analysis. */
	export interface GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadataFormProperties {

		/** All the entities in the call. */
		entities: FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1alpha1Entity } | null | undefined>,

		/** All the matched intents in the call. */
		intents: FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1alpha1Intent } | null | undefined>,

		/** All the matched phrase matchers in the call. */
		phraseMatchers: FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData } | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadataFormProperties>({
			entities: new FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1alpha1Entity } | null | undefined>(undefined),
			intents: new FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1alpha1Intent } | null | undefined>(undefined),
			phraseMatchers: new FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData } | null | undefined>(undefined),
		});

	}


	/** A piece of metadata that applies to a window of a call. */
	export interface GoogleCloudContactcenterinsightsV1alpha1CallAnnotation {

		/** A point in a conversation that marks the start or the end of an annotation. */
		annotationEndBoundary?: GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary;

		/** A point in a conversation that marks the start or the end of an annotation. */
		annotationStartBoundary?: GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary;

		/** The channel of the audio where the annotation occurs. For single-channel audio, this field is not populated. */
		channelTag?: number | null;

		/** The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation. */
		entityMentionData?: GoogleCloudContactcenterinsightsV1alpha1EntityMentionData;

		/** The data for a hold annotation. */
		holdData?: GoogleCloudContactcenterinsightsV1alpha1HoldData;

		/** The data for an intent match. Represents an intent match for a text segment in the conversation. A text segment can be part of a sentence, a complete sentence, or an utterance with multiple sentences. */
		intentMatchData?: GoogleCloudContactcenterinsightsV1alpha1IntentMatchData;

		/** The data for an interruption annotation. */
		interruptionData?: GoogleCloudContactcenterinsightsV1alpha1InterruptionData;

		/** The data for an issue match annotation. */
		issueMatchData?: GoogleCloudContactcenterinsightsV1alpha1IssueMatchData;

		/** The data for a matched phrase matcher. Represents information identifying a phrase matcher for a given match. */
		phraseMatchData?: GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData;

		/** The data for a sentiment annotation. */
		sentimentData?: GoogleCloudContactcenterinsightsV1alpha1SentimentData;

		/** The data for a silence annotation. */
		silenceData?: GoogleCloudContactcenterinsightsV1alpha1SilenceData;
	}

	/** A piece of metadata that applies to a window of a call. */
	export interface GoogleCloudContactcenterinsightsV1alpha1CallAnnotationFormProperties {

		/** The channel of the audio where the annotation occurs. For single-channel audio, this field is not populated. */
		channelTag: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1CallAnnotationFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1CallAnnotationFormProperties>({
			channelTag: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A point in a conversation that marks the start or the end of an annotation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary {

		/** The index in the sequence of transcribed pieces of the conversation where the boundary is located. This index starts at zero. */
		transcriptIndex?: number | null;

		/** The word index of this boundary with respect to the first word in the transcript piece. This index starts at zero. */
		wordIndex?: number | null;
	}

	/** A point in a conversation that marks the start or the end of an annotation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundaryFormProperties {

		/** The index in the sequence of transcribed pieces of the conversation where the boundary is located. This index starts at zero. */
		transcriptIndex: FormControl<number | null | undefined>,

		/** The word index of this boundary with respect to the first word in the transcript piece. This index starts at zero. */
		wordIndex: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1AnnotationBoundaryFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundaryFormProperties>({
			transcriptIndex: new FormControl<number | null | undefined>(undefined),
			wordIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1EntityMentionData {

		/** The key of this entity in conversation entities. Can be used to retrieve the exact `Entity` this mention is attached to. */
		entityUniqueId?: string | null;

		/** The data for a sentiment annotation. */
		sentiment?: GoogleCloudContactcenterinsightsV1alpha1SentimentData;

		/** The type of the entity mention. */
		type?: GoogleCloudContactcenterinsightsV1EntityMentionDataType | null;
	}

	/** The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1EntityMentionDataFormProperties {

		/** The key of this entity in conversation entities. Can be used to retrieve the exact `Entity` this mention is attached to. */
		entityUniqueId: FormControl<string | null | undefined>,

		/** The type of the entity mention. */
		type: FormControl<GoogleCloudContactcenterinsightsV1EntityMentionDataType | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1EntityMentionDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1EntityMentionDataFormProperties>({
			entityUniqueId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudContactcenterinsightsV1EntityMentionDataType | null | undefined>(undefined),
		});

	}


	/** The data for a sentiment annotation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1SentimentData {

		/** A non-negative number from 0 to infinity which represents the abolute magnitude of sentiment regardless of score. */
		magnitude?: number | null;

		/** The sentiment score between -1.0 (negative) and 1.0 (positive). */
		score?: number | null;
	}

	/** The data for a sentiment annotation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1SentimentDataFormProperties {

		/** A non-negative number from 0 to infinity which represents the abolute magnitude of sentiment regardless of score. */
		magnitude: FormControl<number | null | undefined>,

		/** The sentiment score between -1.0 (negative) and 1.0 (positive). */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1SentimentDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1SentimentDataFormProperties>({
			magnitude: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The data for a hold annotation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1HoldData {
	}

	/** The data for a hold annotation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1HoldDataFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1HoldDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1HoldDataFormProperties>({
		});

	}


	/** The data for an intent match. Represents an intent match for a text segment in the conversation. A text segment can be part of a sentence, a complete sentence, or an utterance with multiple sentences. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IntentMatchData {

		/** The id of the matched intent. Can be used to retrieve the corresponding intent information. */
		intentUniqueId?: string | null;
	}

	/** The data for an intent match. Represents an intent match for a text segment in the conversation. A text segment can be part of a sentence, a complete sentence, or an utterance with multiple sentences. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IntentMatchDataFormProperties {

		/** The id of the matched intent. Can be used to retrieve the corresponding intent information. */
		intentUniqueId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1IntentMatchDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1IntentMatchDataFormProperties>({
			intentUniqueId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data for an interruption annotation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1InterruptionData {
	}

	/** The data for an interruption annotation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1InterruptionDataFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1InterruptionDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1InterruptionDataFormProperties>({
		});

	}


	/** The data for an issue match annotation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IssueMatchData {

		/** Information about the issue. */
		issueAssignment?: GoogleCloudContactcenterinsightsV1alpha1IssueAssignment;
	}

	/** The data for an issue match annotation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IssueMatchDataFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1IssueMatchDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1IssueMatchDataFormProperties>({
		});

	}


	/** Information about the issue. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IssueAssignment {

		/** Immutable. Display name of the assigned issue. This field is set at time of analyis and immutable since then. */
		displayName?: string | null;

		/** Resource name of the assigned issue. */
		issue?: string | null;

		/** Score indicating the likelihood of the issue assignment. currently bounded on [0,1]. */
		score?: number | null;
	}

	/** Information about the issue. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IssueAssignmentFormProperties {

		/** Immutable. Display name of the assigned issue. This field is set at time of analyis and immutable since then. */
		displayName: FormControl<string | null | undefined>,

		/** Resource name of the assigned issue. */
		issue: FormControl<string | null | undefined>,

		/** Score indicating the likelihood of the issue assignment. currently bounded on [0,1]. */
		score: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1IssueAssignmentFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1IssueAssignmentFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			issue: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The data for a matched phrase matcher. Represents information identifying a phrase matcher for a given match. */
	export interface GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData {

		/** The human-readable name of the phrase matcher. */
		displayName?: string | null;

		/** The unique identifier (the resource name) of the phrase matcher. */
		phraseMatcher?: string | null;
	}

	/** The data for a matched phrase matcher. Represents information identifying a phrase matcher for a given match. */
	export interface GoogleCloudContactcenterinsightsV1alpha1PhraseMatchDataFormProperties {

		/** The human-readable name of the phrase matcher. */
		displayName: FormControl<string | null | undefined>,

		/** The unique identifier (the resource name) of the phrase matcher. */
		phraseMatcher: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1PhraseMatchDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1PhraseMatchDataFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			phraseMatcher: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data for a silence annotation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1SilenceData {
	}

	/** The data for a silence annotation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1SilenceDataFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1SilenceDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1SilenceDataFormProperties>({
		});

	}


	/** The data for an entity annotation. Represents a phrase in the conversation that is a known entity, such as a person, an organization, or location. */
	export interface GoogleCloudContactcenterinsightsV1alpha1Entity {

		/** The representative name for the entity. */
		displayName?: string | null;

		/** Metadata associated with the entity. For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`) and Knowledge Graph MID (`mid`), if they are available. For the metadata associated with other entity types, see the Type table below. */
		metadata?: {[id: string]: string };

		/** The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient. */
		salience?: number | null;

		/** The data for a sentiment annotation. */
		sentiment?: GoogleCloudContactcenterinsightsV1alpha1SentimentData;

		/** The entity type. */
		type?: GoogleCloudContactcenterinsightsV1EntityType | null;
	}

	/** The data for an entity annotation. Represents a phrase in the conversation that is a known entity, such as a person, an organization, or location. */
	export interface GoogleCloudContactcenterinsightsV1alpha1EntityFormProperties {

		/** The representative name for the entity. */
		displayName: FormControl<string | null | undefined>,

		/** Metadata associated with the entity. For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`) and Knowledge Graph MID (`mid`), if they are available. For the metadata associated with other entity types, see the Type table below. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient. */
		salience: FormControl<number | null | undefined>,

		/** The entity type. */
		type: FormControl<GoogleCloudContactcenterinsightsV1EntityType | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1EntityFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1EntityFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			salience: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<GoogleCloudContactcenterinsightsV1EntityType | null | undefined>(undefined),
		});

	}


	/** The data for an intent. Represents a detected intent in the conversation, for example MAKES_PROMISE. */
	export interface GoogleCloudContactcenterinsightsV1alpha1Intent {

		/** The human-readable name of the intent. */
		displayName?: string | null;

		/** The unique identifier of the intent. */
		id?: string | null;
	}

	/** The data for an intent. Represents a detected intent in the conversation, for example MAKES_PROMISE. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IntentFormProperties {

		/** The human-readable name of the intent. */
		displayName: FormControl<string | null | undefined>,

		/** The unique identifier of the intent. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1IntentFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1IntentFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Issue Modeling result on a conversation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IssueModelResult {

		/** Issue model that generates the result. Format: projects/{project}/locations/{location}/issueModels/{issue_model} */
		issueModel?: string | null;

		/** All the matched issues. */
		issues?: Array<GoogleCloudContactcenterinsightsV1alpha1IssueAssignment>;
	}

	/** Issue Modeling result on a conversation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IssueModelResultFormProperties {

		/** Issue model that generates the result. Format: projects/{project}/locations/{location}/issueModels/{issue_model} */
		issueModel: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1IssueModelResultFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1IssueModelResultFormProperties>({
			issueModel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** One channel of conversation-level sentiment data. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentiment {

		/** The channel of the audio that the data applies to. */
		channelTag?: number | null;

		/** The data for a sentiment annotation. */
		sentimentData?: GoogleCloudContactcenterinsightsV1alpha1SentimentData;
	}

	/** One channel of conversation-level sentiment data. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentimentFormProperties {

		/** The channel of the audio that the data applies to. */
		channelTag: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentimentFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentimentFormProperties>({
			channelTag: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Selector of all available annotators and phrase matchers to run. */
	export interface GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector {

		/** The issue model to run. If not provided, the most recently deployed topic model will be used. The provided issue model will only be used for inference if the issue model is deployed and if run_issue_model_annotator is set to true. If more than one issue model is provided, only the first provided issue model will be used for inference. */
		issueModels?: Array<string>;

		/** The list of phrase matchers to run. If not provided, all active phrase matchers will be used. If inactive phrase matchers are provided, they will not be used. Phrase matchers will be run only if run_phrase_matcher_annotator is set to true. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher} */
		phraseMatchers?: Array<string>;

		/** Whether to run the entity annotator. */
		runEntityAnnotator?: boolean | null;

		/** Whether to run the intent annotator. */
		runIntentAnnotator?: boolean | null;

		/** Whether to run the interruption annotator. */
		runInterruptionAnnotator?: boolean | null;

		/** Whether to run the issue model annotator. A model should have already been deployed for this to take effect. */
		runIssueModelAnnotator?: boolean | null;

		/** Whether to run the active phrase matcher annotator(s). */
		runPhraseMatcherAnnotator?: boolean | null;

		/** Whether to run the sentiment annotator. */
		runSentimentAnnotator?: boolean | null;

		/** Whether to run the silence annotator. */
		runSilenceAnnotator?: boolean | null;

		/** Whether to run the summarization annotator. */
		runSummarizationAnnotator?: boolean | null;

		/** Configuration for summarization. */
		summarizationConfig?: GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSummarizationConfig;
	}

	/** Selector of all available annotators and phrase matchers to run. */
	export interface GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorFormProperties {

		/** Whether to run the entity annotator. */
		runEntityAnnotator: FormControl<boolean | null | undefined>,

		/** Whether to run the intent annotator. */
		runIntentAnnotator: FormControl<boolean | null | undefined>,

		/** Whether to run the interruption annotator. */
		runInterruptionAnnotator: FormControl<boolean | null | undefined>,

		/** Whether to run the issue model annotator. A model should have already been deployed for this to take effect. */
		runIssueModelAnnotator: FormControl<boolean | null | undefined>,

		/** Whether to run the active phrase matcher annotator(s). */
		runPhraseMatcherAnnotator: FormControl<boolean | null | undefined>,

		/** Whether to run the sentiment annotator. */
		runSentimentAnnotator: FormControl<boolean | null | undefined>,

		/** Whether to run the silence annotator. */
		runSilenceAnnotator: FormControl<boolean | null | undefined>,

		/** Whether to run the summarization annotator. */
		runSummarizationAnnotator: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorFormProperties>({
			runEntityAnnotator: new FormControl<boolean | null | undefined>(undefined),
			runIntentAnnotator: new FormControl<boolean | null | undefined>(undefined),
			runInterruptionAnnotator: new FormControl<boolean | null | undefined>(undefined),
			runIssueModelAnnotator: new FormControl<boolean | null | undefined>(undefined),
			runPhraseMatcherAnnotator: new FormControl<boolean | null | undefined>(undefined),
			runSentimentAnnotator: new FormControl<boolean | null | undefined>(undefined),
			runSilenceAnnotator: new FormControl<boolean | null | undefined>(undefined),
			runSummarizationAnnotator: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Configuration for summarization. */
	export interface GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSummarizationConfig {

		/** Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile} */
		conversationProfile?: string | null;

		/** Default summarization model to be used. */
		summarizationModel?: GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModel | null;
	}

	/** Configuration for summarization. */
	export interface GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSummarizationConfigFormProperties {

		/** Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile} */
		conversationProfile: FormControl<string | null | undefined>,

		/** Default summarization model to be used. */
		summarizationModel: FormControl<GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModel | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSummarizationConfigFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSummarizationConfigFormProperties>({
			conversationProfile: new FormControl<string | null | undefined>(undefined),
			summarizationModel: new FormControl<GoogleCloudContactcenterinsightsV1AnnotatorSelectorSummarizationConfigSummarizationModel | null | undefined>(undefined),
		});

	}


	/** The feedback that the customer has about a certain answer in the conversation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1AnswerFeedback {

		/** Indicates whether an answer or item was clicked by the human agent. */
		clicked?: boolean | null;

		/** The correctness level of an answer. */
		correctnessLevel?: GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevel | null;

		/** Indicates whether an answer or item was displayed to the human agent in the agent desktop UI. */
		displayed?: boolean | null;
	}

	/** The feedback that the customer has about a certain answer in the conversation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1AnswerFeedbackFormProperties {

		/** Indicates whether an answer or item was clicked by the human agent. */
		clicked: FormControl<boolean | null | undefined>,

		/** The correctness level of an answer. */
		correctnessLevel: FormControl<GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevel | null | undefined>,

		/** Indicates whether an answer or item was displayed to the human agent in the agent desktop UI. */
		displayed: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1AnswerFeedbackFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1AnswerFeedbackFormProperties>({
			clicked: new FormControl<boolean | null | undefined>(undefined),
			correctnessLevel: new FormControl<GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevel | null | undefined>(undefined),
			displayed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Agent Assist Article Suggestion data. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionData {

		/** The system's confidence score that this article is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidenceScore?: number | null;

		/** Map that contains metadata about the Article Suggestion and the document that it originates from. */
		metadata?: {[id: string]: string };

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		queryRecord?: string | null;

		/** The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document} */
		source?: string | null;

		/** Article title. */
		title?: string | null;

		/** Article URI. */
		uri?: string | null;
	}

	/** Agent Assist Article Suggestion data. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionDataFormProperties {

		/** The system's confidence score that this article is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidenceScore: FormControl<number | null | undefined>,

		/** Map that contains metadata about the Article Suggestion and the document that it originates from. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		queryRecord: FormControl<string | null | undefined>,

		/** The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document} */
		source: FormControl<string | null | undefined>,

		/** Article title. */
		title: FormControl<string | null | undefined>,

		/** Article URI. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionDataFormProperties>({
			confidenceScore: new FormControl<number | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			queryRecord: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata for a bulk analyze conversations operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsMetadata {

		/** The number of requested analyses that have completed successfully so far. */
		completedAnalysesCount?: number | null;

		/** The time the operation was created. */
		createTime?: string | null;

		/** The time the operation finished running. */
		endTime?: string | null;

		/** The number of requested analyses that have failed so far. */
		failedAnalysesCount?: number | null;

		/** Output only. Partial errors during bulk analyze operation that might cause the operation output to be incomplete. */
		partialErrors?: Array<GoogleRpcStatus>;

		/** The request to analyze conversations in bulk. */
		request?: GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequest;

		/** Total number of analyses requested. Computed by the number of conversations returned by `filter` multiplied by `analysis_percentage` in the request. */
		totalRequestedAnalysesCount?: number | null;
	}

	/** The metadata for a bulk analyze conversations operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsMetadataFormProperties {

		/** The number of requested analyses that have completed successfully so far. */
		completedAnalysesCount: FormControl<number | null | undefined>,

		/** The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,

		/** The number of requested analyses that have failed so far. */
		failedAnalysesCount: FormControl<number | null | undefined>,

		/** Total number of analyses requested. Computed by the number of conversations returned by `filter` multiplied by `analysis_percentage` in the request. */
		totalRequestedAnalysesCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsMetadataFormProperties>({
			completedAnalysesCount: new FormControl<number | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			failedAnalysesCount: new FormControl<number | null | undefined>(undefined),
			totalRequestedAnalysesCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request to analyze conversations in bulk. */
	export interface GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequest {

		/** Required. Percentage of selected conversation to analyze, between [0, 100]. */
		analysisPercentage?: number | null;

		/** Selector of all available annotators and phrase matchers to run. */
		annotatorSelector?: GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector;

		/** Required. Filter used to select the subset of conversations to analyze. */
		filter?: string | null;

		/** Required. The parent resource to create analyses in. */
		parent?: string | null;
	}

	/** The request to analyze conversations in bulk. */
	export interface GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequestFormProperties {

		/** Required. Percentage of selected conversation to analyze, between [0, 100]. */
		analysisPercentage: FormControl<number | null | undefined>,

		/** Required. Filter used to select the subset of conversations to analyze. */
		filter: FormControl<string | null | undefined>,

		/** Required. The parent resource to create analyses in. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequestFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequestFormProperties>({
			analysisPercentage: new FormControl<number | null | undefined>(undefined),
			filter: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for a bulk analyze conversations operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsResponse {

		/** Count of failed analyses. */
		failedAnalysisCount?: number | null;

		/** Count of successful analyses. */
		successfulAnalysisCount?: number | null;
	}

	/** The response for a bulk analyze conversations operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsResponseFormProperties {

		/** Count of failed analyses. */
		failedAnalysisCount: FormControl<number | null | undefined>,

		/** Count of successful analyses. */
		successfulAnalysisCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsResponseFormProperties>({
			failedAnalysisCount: new FormControl<number | null | undefined>(undefined),
			successfulAnalysisCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The metadata for a bulk delete conversations operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1BulkDeleteConversationsMetadata {

		/** The time the operation was created. */
		createTime?: string | null;

		/** The time the operation finished running. */
		endTime?: string | null;

		/** Partial errors during bulk delete conversations operation that might cause the operation output to be incomplete. */
		partialErrors?: Array<GoogleRpcStatus>;

		/** The request to delete conversations in bulk. */
		request?: GoogleCloudContactcenterinsightsV1alpha1BulkDeleteConversationsRequest;
	}

	/** The metadata for a bulk delete conversations operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1BulkDeleteConversationsMetadataFormProperties {

		/** The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1BulkDeleteConversationsMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1BulkDeleteConversationsMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to delete conversations in bulk. */
	export interface GoogleCloudContactcenterinsightsV1alpha1BulkDeleteConversationsRequest {

		/** Filter used to select the subset of conversations to delete. */
		filter?: string | null;

		/** If set to true, all of this conversation's analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses. */
		force?: boolean | null;

		/** Maximum number of conversations to delete. */
		maxDeleteCount?: number | null;

		/** Required. The parent resource to delete conversations from. Format: projects/{project}/locations/{location} */
		parent?: string | null;
	}

	/** The request to delete conversations in bulk. */
	export interface GoogleCloudContactcenterinsightsV1alpha1BulkDeleteConversationsRequestFormProperties {

		/** Filter used to select the subset of conversations to delete. */
		filter: FormControl<string | null | undefined>,

		/** If set to true, all of this conversation's analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses. */
		force: FormControl<boolean | null | undefined>,

		/** Maximum number of conversations to delete. */
		maxDeleteCount: FormControl<number | null | undefined>,

		/** Required. The parent resource to delete conversations from. Format: projects/{project}/locations/{location} */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1BulkDeleteConversationsRequestFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1BulkDeleteConversationsRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			force: new FormControl<boolean | null | undefined>(undefined),
			maxDeleteCount: new FormControl<number | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for a bulk delete conversations operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1BulkDeleteConversationsResponse {
	}

	/** The response for a bulk delete conversations operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1BulkDeleteConversationsResponseFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1BulkDeleteConversationsResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1BulkDeleteConversationsResponseFormProperties>({
		});

	}


	/** The conversation resource. */
	export interface GoogleCloudContactcenterinsightsV1alpha1Conversation {

		/** An opaque, user-specified string representing the human agent who handled the conversation. */
		agentId?: string | null;

		/** Call-specific metadata. */
		callMetadata?: GoogleCloudContactcenterinsightsV1alpha1ConversationCallMetadata;

		/** Output only. The time at which the conversation was created. */
		createTime?: string | null;

		/** The conversation source, which is a combination of transcript and audio. */
		dataSource?: GoogleCloudContactcenterinsightsV1alpha1ConversationDataSource;

		/** Output only. All the matched Dialogflow intents in the call. The key corresponds to a Dialogflow intent, format: projects/{project}/agent/{agent}/intents/{intent} */
		dialogflowIntents?: {[id: string]: GoogleCloudContactcenterinsightsV1alpha1DialogflowIntent };

		/** Output only. The duration of the conversation. */
		duration?: string | null;

		/** The time at which this conversation should expire. After this time, the conversation data and any associated analyses will be deleted. */
		expireTime?: string | null;

		/** A map for the user to specify any custom fields. A maximum of 20 labels per conversation is allowed, with a maximum of 256 characters per entry. */
		labels?: {[id: string]: string };

		/** A user-specified language code for the conversation. */
		languageCode?: string | null;

		/** The analysis resource. */
		latestAnalysis?: GoogleCloudContactcenterinsightsV1alpha1Analysis;

		/** Conversation summarization suggestion data. */
		latestSummary?: GoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionData;

		/** Immutable. The conversation medium, if unspecified will default to PHONE_CALL. */
		medium?: GoogleCloudContactcenterinsightsV1ConversationMedium | null;

		/** Immutable. The resource name of the conversation. Format: projects/{project}/locations/{location}/conversations/{conversation} */
		name?: string | null;

		/** Obfuscated user ID which the customer sent to us. */
		obfuscatedUserId?: string | null;

		/** Conversation metadata related to quality management. */
		qualityMetadata?: GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadata;

		/** Output only. The annotations that were generated during the customer and agent interaction. */
		runtimeAnnotations?: Array<GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotation>;

		/** The time at which the conversation started. */
		startTime?: string | null;

		/** A message representing the transcript of a conversation. */
		transcript?: GoogleCloudContactcenterinsightsV1alpha1ConversationTranscript;

		/** Input only. The TTL for this resource. If specified, then this TTL will be used to calculate the expire time. */
		ttl?: string | null;

		/** Output only. The number of turns in the conversation. */
		turnCount?: number | null;

		/** Output only. The most recent time at which the conversation was updated. */
		updateTime?: string | null;
	}

	/** The conversation resource. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationFormProperties {

		/** An opaque, user-specified string representing the human agent who handled the conversation. */
		agentId: FormControl<string | null | undefined>,

		/** Output only. The time at which the conversation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. All the matched Dialogflow intents in the call. The key corresponds to a Dialogflow intent, format: projects/{project}/agent/{agent}/intents/{intent} */
		dialogflowIntents: FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1alpha1DialogflowIntent } | null | undefined>,

		/** Output only. The duration of the conversation. */
		duration: FormControl<string | null | undefined>,

		/** The time at which this conversation should expire. After this time, the conversation data and any associated analyses will be deleted. */
		expireTime: FormControl<string | null | undefined>,

		/** A map for the user to specify any custom fields. A maximum of 20 labels per conversation is allowed, with a maximum of 256 characters per entry. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** A user-specified language code for the conversation. */
		languageCode: FormControl<string | null | undefined>,

		/** Immutable. The conversation medium, if unspecified will default to PHONE_CALL. */
		medium: FormControl<GoogleCloudContactcenterinsightsV1ConversationMedium | null | undefined>,

		/** Immutable. The resource name of the conversation. Format: projects/{project}/locations/{location}/conversations/{conversation} */
		name: FormControl<string | null | undefined>,

		/** Obfuscated user ID which the customer sent to us. */
		obfuscatedUserId: FormControl<string | null | undefined>,

		/** The time at which the conversation started. */
		startTime: FormControl<string | null | undefined>,

		/** Input only. The TTL for this resource. If specified, then this TTL will be used to calculate the expire time. */
		ttl: FormControl<string | null | undefined>,

		/** Output only. The number of turns in the conversation. */
		turnCount: FormControl<number | null | undefined>,

		/** Output only. The most recent time at which the conversation was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1ConversationFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1ConversationFormProperties>({
			agentId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			dialogflowIntents: new FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1alpha1DialogflowIntent } | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			medium: new FormControl<GoogleCloudContactcenterinsightsV1ConversationMedium | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			obfuscatedUserId: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<string | null | undefined>(undefined),
			turnCount: new FormControl<number | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Call-specific metadata. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationCallMetadata {

		/** The audio channel that contains the agent. */
		agentChannel?: number | null;

		/** The audio channel that contains the customer. */
		customerChannel?: number | null;
	}

	/** Call-specific metadata. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationCallMetadataFormProperties {

		/** The audio channel that contains the agent. */
		agentChannel: FormControl<number | null | undefined>,

		/** The audio channel that contains the customer. */
		customerChannel: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1ConversationCallMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1ConversationCallMetadataFormProperties>({
			agentChannel: new FormControl<number | null | undefined>(undefined),
			customerChannel: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The conversation source, which is a combination of transcript and audio. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationDataSource {

		/** A Dialogflow source of conversation data. */
		dialogflowSource?: GoogleCloudContactcenterinsightsV1alpha1DialogflowSource;

		/** A Cloud Storage source of conversation data. */
		gcsSource?: GoogleCloudContactcenterinsightsV1alpha1GcsSource;
	}

	/** The conversation source, which is a combination of transcript and audio. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationDataSourceFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1ConversationDataSourceFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1ConversationDataSourceFormProperties>({
		});

	}


	/** A Dialogflow source of conversation data. */
	export interface GoogleCloudContactcenterinsightsV1alpha1DialogflowSource {

		/** Cloud Storage URI that points to a file that contains the conversation audio. */
		audioUri?: string | null;

		/** Output only. The name of the Dialogflow conversation that this conversation resource is derived from. Format: projects/{project}/locations/{location}/conversations/{conversation} */
		dialogflowConversation?: string | null;
	}

	/** A Dialogflow source of conversation data. */
	export interface GoogleCloudContactcenterinsightsV1alpha1DialogflowSourceFormProperties {

		/** Cloud Storage URI that points to a file that contains the conversation audio. */
		audioUri: FormControl<string | null | undefined>,

		/** Output only. The name of the Dialogflow conversation that this conversation resource is derived from. Format: projects/{project}/locations/{location}/conversations/{conversation} */
		dialogflowConversation: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1DialogflowSourceFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1DialogflowSourceFormProperties>({
			audioUri: new FormControl<string | null | undefined>(undefined),
			dialogflowConversation: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Cloud Storage source of conversation data. */
	export interface GoogleCloudContactcenterinsightsV1alpha1GcsSource {

		/** Cloud Storage URI that points to a file that contains the conversation audio. */
		audioUri?: string | null;

		/** Immutable. Cloud Storage URI that points to a file that contains the conversation transcript. */
		transcriptUri?: string | null;
	}

	/** A Cloud Storage source of conversation data. */
	export interface GoogleCloudContactcenterinsightsV1alpha1GcsSourceFormProperties {

		/** Cloud Storage URI that points to a file that contains the conversation audio. */
		audioUri: FormControl<string | null | undefined>,

		/** Immutable. Cloud Storage URI that points to a file that contains the conversation transcript. */
		transcriptUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1GcsSourceFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1GcsSourceFormProperties>({
			audioUri: new FormControl<string | null | undefined>(undefined),
			transcriptUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data for a Dialogflow intent. Represents a detected intent in the conversation, e.g. MAKES_PROMISE. */
	export interface GoogleCloudContactcenterinsightsV1alpha1DialogflowIntent {

		/** The human-readable name of the intent. */
		displayName?: string | null;
	}

	/** The data for a Dialogflow intent. Represents a detected intent in the conversation, e.g. MAKES_PROMISE. */
	export interface GoogleCloudContactcenterinsightsV1alpha1DialogflowIntentFormProperties {

		/** The human-readable name of the intent. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1DialogflowIntentFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1DialogflowIntentFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Conversation summarization suggestion data. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionData {

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		answerRecord?: string | null;

		/** The confidence score of the summarization. */
		confidence?: number | null;

		/** The name of the model that generates this summary. Format: projects/{project}/locations/{location}/conversationModels/{conversation_model} */
		conversationModel?: string | null;

		/** A map that contains metadata about the summarization and the document from which it originates. */
		metadata?: {[id: string]: string };

		/** The summarization content that is concatenated into one string. */
		text?: string | null;

		/** The summarization content that is divided into sections. The key is the section's name and the value is the section's content. There is no specific format for the key or value. */
		textSections?: {[id: string]: string };
	}

	/** Conversation summarization suggestion data. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionDataFormProperties {

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		answerRecord: FormControl<string | null | undefined>,

		/** The confidence score of the summarization. */
		confidence: FormControl<number | null | undefined>,

		/** The name of the model that generates this summary. Format: projects/{project}/locations/{location}/conversationModels/{conversation_model} */
		conversationModel: FormControl<string | null | undefined>,

		/** A map that contains metadata about the summarization and the document from which it originates. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The summarization content that is concatenated into one string. */
		text: FormControl<string | null | undefined>,

		/** The summarization content that is divided into sections. The key is the section's name and the value is the section's content. There is no specific format for the key or value. */
		textSections: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionDataFormProperties>({
			answerRecord: new FormControl<string | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
			conversationModel: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			textSections: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Conversation metadata related to quality management. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadata {

		/** Information about agents involved in the call. */
		agentInfo?: Array<GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadataAgentInfo>;

		/** An arbitrary integer value indicating the customer's satisfaction rating. */
		customerSatisfactionRating?: number | null;

		/** An arbitrary string value specifying the menu path the customer took. */
		menuPath?: string | null;

		/** The amount of time the customer waited to connect with an agent. */
		waitDuration?: string | null;
	}

	/** Conversation metadata related to quality management. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadataFormProperties {

		/** An arbitrary integer value indicating the customer's satisfaction rating. */
		customerSatisfactionRating: FormControl<number | null | undefined>,

		/** An arbitrary string value specifying the menu path the customer took. */
		menuPath: FormControl<string | null | undefined>,

		/** The amount of time the customer waited to connect with an agent. */
		waitDuration: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadataFormProperties>({
			customerSatisfactionRating: new FormControl<number | null | undefined>(undefined),
			menuPath: new FormControl<string | null | undefined>(undefined),
			waitDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an agent involved in the conversation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadataAgentInfo {

		/** A user-specified string representing the agent. */
		agentId?: string | null;

		/** The agent's name. */
		displayName?: string | null;

		/** A user-provided string indicating the outcome of the agent's segment of the call. */
		dispositionCode?: string | null;

		/** A user-specified string representing the agent's team. */
		team?: string | null;
	}

	/** Information about an agent involved in the conversation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadataAgentInfoFormProperties {

		/** A user-specified string representing the agent. */
		agentId: FormControl<string | null | undefined>,

		/** The agent's name. */
		displayName: FormControl<string | null | undefined>,

		/** A user-provided string indicating the outcome of the agent's segment of the call. */
		dispositionCode: FormControl<string | null | undefined>,

		/** A user-specified string representing the agent's team. */
		team: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadataAgentInfoFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1ConversationQualityMetadataAgentInfoFormProperties>({
			agentId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			dispositionCode: new FormControl<string | null | undefined>(undefined),
			team: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An annotation that was generated during the customer and agent interaction. */
	export interface GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotation {

		/** The unique identifier of the annotation. Format: projects/{project}/locations/{location}/conversationDatasets/{dataset}/conversationDataItems/{data_item}/conversationAnnotations/{annotation} */
		annotationId?: string | null;

		/** The feedback that the customer has about a certain answer in the conversation. */
		answerFeedback?: GoogleCloudContactcenterinsightsV1alpha1AnswerFeedback;

		/** Agent Assist Article Suggestion data. */
		articleSuggestion?: GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionData;

		/** Conversation summarization suggestion data. */
		conversationSummarizationSuggestion?: GoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionData;

		/** The time at which this annotation was created. */
		createTime?: string | null;

		/** Dialogflow interaction data. */
		dialogflowInteraction?: GoogleCloudContactcenterinsightsV1alpha1DialogflowInteractionData;

		/** A point in a conversation that marks the start or the end of an annotation. */
		endBoundary?: GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary;

		/** Agent Assist frequently-asked-question answer data. */
		faqAnswer?: GoogleCloudContactcenterinsightsV1alpha1FaqAnswerData;

		/** Agent Assist Smart Compose suggestion data. */
		smartComposeSuggestion?: GoogleCloudContactcenterinsightsV1alpha1SmartComposeSuggestionData;

		/** Agent Assist Smart Reply data. */
		smartReply?: GoogleCloudContactcenterinsightsV1alpha1SmartReplyData;

		/** A point in a conversation that marks the start or the end of an annotation. */
		startBoundary?: GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary;
	}

	/** An annotation that was generated during the customer and agent interaction. */
	export interface GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotationFormProperties {

		/** The unique identifier of the annotation. Format: projects/{project}/locations/{location}/conversationDatasets/{dataset}/conversationDataItems/{data_item}/conversationAnnotations/{annotation} */
		annotationId: FormControl<string | null | undefined>,

		/** The time at which this annotation was created. */
		createTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotationFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotationFormProperties>({
			annotationId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dialogflow interaction data. */
	export interface GoogleCloudContactcenterinsightsV1alpha1DialogflowInteractionData {

		/** The confidence of the match ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidence?: number | null;

		/** The Dialogflow intent resource path. Format: projects/{project}/agent/{agent}/intents/{intent} */
		dialogflowIntentId?: string | null;
	}

	/** Dialogflow interaction data. */
	export interface GoogleCloudContactcenterinsightsV1alpha1DialogflowInteractionDataFormProperties {

		/** The confidence of the match ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidence: FormControl<number | null | undefined>,

		/** The Dialogflow intent resource path. Format: projects/{project}/agent/{agent}/intents/{intent} */
		dialogflowIntentId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1DialogflowInteractionDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1DialogflowInteractionDataFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			dialogflowIntentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Agent Assist frequently-asked-question answer data. */
	export interface GoogleCloudContactcenterinsightsV1alpha1FaqAnswerData {

		/** The piece of text from the `source` knowledge base document. */
		answer?: string | null;

		/** The system's confidence score that this answer is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidenceScore?: number | null;

		/** Map that contains metadata about the FAQ answer and the document that it originates from. */
		metadata?: {[id: string]: string };

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		queryRecord?: string | null;

		/** The corresponding FAQ question. */
		question?: string | null;

		/** The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document}. */
		source?: string | null;
	}

	/** Agent Assist frequently-asked-question answer data. */
	export interface GoogleCloudContactcenterinsightsV1alpha1FaqAnswerDataFormProperties {

		/** The piece of text from the `source` knowledge base document. */
		answer: FormControl<string | null | undefined>,

		/** The system's confidence score that this answer is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidenceScore: FormControl<number | null | undefined>,

		/** Map that contains metadata about the FAQ answer and the document that it originates from. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		queryRecord: FormControl<string | null | undefined>,

		/** The corresponding FAQ question. */
		question: FormControl<string | null | undefined>,

		/** The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document}. */
		source: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1FaqAnswerDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1FaqAnswerDataFormProperties>({
			answer: new FormControl<string | null | undefined>(undefined),
			confidenceScore: new FormControl<number | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			queryRecord: new FormControl<string | null | undefined>(undefined),
			question: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Agent Assist Smart Compose suggestion data. */
	export interface GoogleCloudContactcenterinsightsV1alpha1SmartComposeSuggestionData {

		/** The system's confidence score that this suggestion is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidenceScore?: number | null;

		/** Map that contains metadata about the Smart Compose suggestion and the document from which it originates. */
		metadata?: {[id: string]: string };

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		queryRecord?: string | null;

		/** The content of the suggestion. */
		suggestion?: string | null;
	}

	/** Agent Assist Smart Compose suggestion data. */
	export interface GoogleCloudContactcenterinsightsV1alpha1SmartComposeSuggestionDataFormProperties {

		/** The system's confidence score that this suggestion is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidenceScore: FormControl<number | null | undefined>,

		/** Map that contains metadata about the Smart Compose suggestion and the document from which it originates. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		queryRecord: FormControl<string | null | undefined>,

		/** The content of the suggestion. */
		suggestion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1SmartComposeSuggestionDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1SmartComposeSuggestionDataFormProperties>({
			confidenceScore: new FormControl<number | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			queryRecord: new FormControl<string | null | undefined>(undefined),
			suggestion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Agent Assist Smart Reply data. */
	export interface GoogleCloudContactcenterinsightsV1alpha1SmartReplyData {

		/** The system's confidence score that this reply is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidenceScore?: number | null;

		/** Map that contains metadata about the Smart Reply and the document from which it originates. */
		metadata?: {[id: string]: string };

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		queryRecord?: string | null;

		/** The content of the reply. */
		reply?: string | null;
	}

	/** Agent Assist Smart Reply data. */
	export interface GoogleCloudContactcenterinsightsV1alpha1SmartReplyDataFormProperties {

		/** The system's confidence score that this reply is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain). */
		confidenceScore: FormControl<number | null | undefined>,

		/** Map that contains metadata about the Smart Reply and the document from which it originates. */
		metadata: FormControl<{[id: string]: string } | null | undefined>,

		/** The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} */
		queryRecord: FormControl<string | null | undefined>,

		/** The content of the reply. */
		reply: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1SmartReplyDataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1SmartReplyDataFormProperties>({
			confidenceScore: new FormControl<number | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			queryRecord: new FormControl<string | null | undefined>(undefined),
			reply: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A message representing the transcript of a conversation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationTranscript {

		/** A list of sequential transcript segments that comprise the conversation. */
		transcriptSegments?: Array<GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegment>;
	}

	/** A message representing the transcript of a conversation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptFormProperties>({
		});

	}


	/** A segment of a full transcript. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegment {

		/** For conversations derived from multi-channel audio, this is the channel number corresponding to the audio from that channel. For audioChannelCount = N, its output values can range from '1' to 'N'. A channel tag of 0 indicates that the audio is mono. */
		channelTag?: number | null;

		/** A confidence estimate between 0.0 and 1.0 of the fidelity of this segment. A default value of 0.0 indicates that the value is unset. */
		confidence?: number | null;

		/** Metadata from Dialogflow relating to the current transcript segment. */
		dialogflowSegmentMetadata?: GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata;

		/** The language code of this segment as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". */
		languageCode?: string | null;

		/** The time that the message occurred, if provided. */
		messageTime?: string | null;

		/** The call participant speaking for a given utterance. */
		segmentParticipant?: GoogleCloudContactcenterinsightsV1alpha1ConversationParticipant;

		/** The data for a sentiment annotation. */
		sentiment?: GoogleCloudContactcenterinsightsV1alpha1SentimentData;

		/** The text of this segment. */
		text?: string | null;

		/** A list of the word-specific information for each word in the segment. */
		words?: Array<GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentWordInfo>;
	}

	/** A segment of a full transcript. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentFormProperties {

		/** For conversations derived from multi-channel audio, this is the channel number corresponding to the audio from that channel. For audioChannelCount = N, its output values can range from '1' to 'N'. A channel tag of 0 indicates that the audio is mono. */
		channelTag: FormControl<number | null | undefined>,

		/** A confidence estimate between 0.0 and 1.0 of the fidelity of this segment. A default value of 0.0 indicates that the value is unset. */
		confidence: FormControl<number | null | undefined>,

		/** The language code of this segment as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". */
		languageCode: FormControl<string | null | undefined>,

		/** The time that the message occurred, if provided. */
		messageTime: FormControl<string | null | undefined>,

		/** The text of this segment. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentFormProperties>({
			channelTag: new FormControl<number | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			messageTime: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata from Dialogflow relating to the current transcript segment. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata {

		/** Whether the transcript segment was covered under the configured smart reply allowlist in Agent Assist. */
		smartReplyAllowlistCovered?: boolean | null;
	}

	/** Metadata from Dialogflow relating to the current transcript segment. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadataFormProperties {

		/** Whether the transcript segment was covered under the configured smart reply allowlist in Agent Assist. */
		smartReplyAllowlistCovered: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadataFormProperties>({
			smartReplyAllowlistCovered: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The call participant speaking for a given utterance. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationParticipant {

		/** Deprecated. Use `dialogflow_participant_name` instead. The name of the Dialogflow participant. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant} */
		dialogflowParticipant?: string | null;

		/** The name of the participant provided by Dialogflow. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant} */
		dialogflowParticipantName?: string | null;

		/** Obfuscated user ID from Dialogflow. */
		obfuscatedExternalUserId?: string | null;

		/** The role of the participant. */
		role?: GoogleCloudContactcenterinsightsV1ConversationParticipantRole | null;

		/** A user-specified ID representing the participant. */
		userId?: string | null;
	}

	/** The call participant speaking for a given utterance. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationParticipantFormProperties {

		/** Deprecated. Use `dialogflow_participant_name` instead. The name of the Dialogflow participant. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant} */
		dialogflowParticipant: FormControl<string | null | undefined>,

		/** The name of the participant provided by Dialogflow. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant} */
		dialogflowParticipantName: FormControl<string | null | undefined>,

		/** Obfuscated user ID from Dialogflow. */
		obfuscatedExternalUserId: FormControl<string | null | undefined>,

		/** The role of the participant. */
		role: FormControl<GoogleCloudContactcenterinsightsV1ConversationParticipantRole | null | undefined>,

		/** A user-specified ID representing the participant. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1ConversationParticipantFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1ConversationParticipantFormProperties>({
			dialogflowParticipant: new FormControl<string | null | undefined>(undefined),
			dialogflowParticipantName: new FormControl<string | null | undefined>(undefined),
			obfuscatedExternalUserId: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<GoogleCloudContactcenterinsightsV1ConversationParticipantRole | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Word-level info for words in a transcript. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentWordInfo {

		/** A confidence estimate between 0.0 and 1.0 of the fidelity of this word. A default value of 0.0 indicates that the value is unset. */
		confidence?: number | null;

		/** Time offset of the end of this word relative to the beginning of the total conversation. */
		endOffset?: string | null;

		/** Time offset of the start of this word relative to the beginning of the total conversation. */
		startOffset?: string | null;

		/** The word itself. Includes punctuation marks that surround the word. */
		word?: string | null;
	}

	/** Word-level info for words in a transcript. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentWordInfoFormProperties {

		/** A confidence estimate between 0.0 and 1.0 of the fidelity of this word. A default value of 0.0 indicates that the value is unset. */
		confidence: FormControl<number | null | undefined>,

		/** Time offset of the end of this word relative to the beginning of the total conversation. */
		endOffset: FormControl<string | null | undefined>,

		/** Time offset of the start of this word relative to the beginning of the total conversation. */
		startOffset: FormControl<string | null | undefined>,

		/** The word itself. Includes punctuation marks that surround the word. */
		word: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentWordInfoFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentWordInfoFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			endOffset: new FormControl<string | null | undefined>(undefined),
			startOffset: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for a create analysis operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1CreateAnalysisOperationMetadata {

		/** Selector of all available annotators and phrase matchers to run. */
		annotatorSelector?: GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector;

		/** Output only. The Conversation that this Analysis Operation belongs to. */
		conversation?: string | null;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;
	}

	/** Metadata for a create analysis operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1CreateAnalysisOperationMetadataFormProperties {

		/** Output only. The Conversation that this Analysis Operation belongs to. */
		conversation: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1CreateAnalysisOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1CreateAnalysisOperationMetadataFormProperties>({
			conversation: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for creating an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelMetadata {

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** The request to create an issue model. */
		request?: GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequest;
	}

	/** Metadata for creating an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelMetadataFormProperties {

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1CreateIssueModelMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to create an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequest {

		/** The issue model resource. */
		issueModel?: GoogleCloudContactcenterinsightsV1alpha1IssueModel;

		/** Required. The parent resource of the issue model. */
		parent?: string | null;
	}

	/** The request to create an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequestFormProperties {

		/** Required. The parent resource of the issue model. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequestFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequestFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The issue model resource. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IssueModel {

		/** Output only. The time at which this issue model was created. */
		createTime?: string | null;

		/** The representative name for the issue model. */
		displayName?: string | null;

		/** Configs for the input data used to create the issue model. */
		inputDataConfig?: GoogleCloudContactcenterinsightsV1alpha1IssueModelInputDataConfig;

		/** Output only. Number of issues in this issue model. */
		issueCount?: string | null;

		/** Language of the model. */
		languageCode?: string | null;

		/** Type of the model. */
		modelType?: GoogleCloudContactcenterinsightsV1IssueModelModelType | null;

		/** Immutable. The resource name of the issue model. Format: projects/{project}/locations/{location}/issueModels/{issue_model} */
		name?: string | null;

		/** Output only. State of the model. */
		state?: GoogleCloudContactcenterinsightsV1IssueModelState | null;

		/** Aggregated statistics about an issue model. */
		trainingStats?: GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStats;

		/** Output only. The most recent time at which the issue model was updated. */
		updateTime?: string | null;
	}

	/** The issue model resource. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IssueModelFormProperties {

		/** Output only. The time at which this issue model was created. */
		createTime: FormControl<string | null | undefined>,

		/** The representative name for the issue model. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Number of issues in this issue model. */
		issueCount: FormControl<string | null | undefined>,

		/** Language of the model. */
		languageCode: FormControl<string | null | undefined>,

		/** Type of the model. */
		modelType: FormControl<GoogleCloudContactcenterinsightsV1IssueModelModelType | null | undefined>,

		/** Immutable. The resource name of the issue model. Format: projects/{project}/locations/{location}/issueModels/{issue_model} */
		name: FormControl<string | null | undefined>,

		/** Output only. State of the model. */
		state: FormControl<GoogleCloudContactcenterinsightsV1IssueModelState | null | undefined>,

		/** Output only. The most recent time at which the issue model was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1IssueModelFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1IssueModelFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			issueCount: new FormControl<string | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			modelType: new FormControl<GoogleCloudContactcenterinsightsV1IssueModelModelType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudContactcenterinsightsV1IssueModelState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configs for the input data used to create the issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IssueModelInputDataConfig {

		/** A filter to reduce the conversations used for training the model to a specific subset. */
		filter?: string | null;

		/** Medium of conversations used in training data. This field is being deprecated. To specify the medium to be used in training a new issue model, set the `medium` field on `filter`. */
		medium?: GoogleCloudContactcenterinsightsV1ConversationMedium | null;

		/** Output only. Number of conversations used in training. Output only. */
		trainingConversationsCount?: string | null;
	}

	/** Configs for the input data used to create the issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IssueModelInputDataConfigFormProperties {

		/** A filter to reduce the conversations used for training the model to a specific subset. */
		filter: FormControl<string | null | undefined>,

		/** Medium of conversations used in training data. This field is being deprecated. To specify the medium to be used in training a new issue model, set the `medium` field on `filter`. */
		medium: FormControl<GoogleCloudContactcenterinsightsV1ConversationMedium | null | undefined>,

		/** Output only. Number of conversations used in training. Output only. */
		trainingConversationsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1IssueModelInputDataConfigFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1IssueModelInputDataConfigFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			medium: new FormControl<GoogleCloudContactcenterinsightsV1ConversationMedium | null | undefined>(undefined),
			trainingConversationsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Aggregated statistics about an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStats {

		/** Number of conversations the issue model has analyzed at this point in time. */
		analyzedConversationsCount?: string | null;

		/** Statistics on each issue. Key is the issue's resource name. */
		issueStats?: {[id: string]: GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStats };

		/** Number of analyzed conversations for which no issue was applicable at this point in time. */
		unclassifiedConversationsCount?: string | null;
	}

	/** Aggregated statistics about an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsFormProperties {

		/** Number of conversations the issue model has analyzed at this point in time. */
		analyzedConversationsCount: FormControl<string | null | undefined>,

		/** Statistics on each issue. Key is the issue's resource name. */
		issueStats: FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStats } | null | undefined>,

		/** Number of analyzed conversations for which no issue was applicable at this point in time. */
		unclassifiedConversationsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsFormProperties>({
			analyzedConversationsCount: new FormControl<string | null | undefined>(undefined),
			issueStats: new FormControl<{[id: string]: GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStats } | null | undefined>(undefined),
			unclassifiedConversationsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Aggregated statistics about an issue. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStats {

		/** Display name of the issue. */
		displayName?: string | null;

		/** Issue resource. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue} */
		issue?: string | null;

		/** Number of conversations attached to the issue at this point in time. */
		labeledConversationsCount?: string | null;
	}

	/** Aggregated statistics about an issue. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStatsFormProperties {

		/** Display name of the issue. */
		displayName: FormControl<string | null | undefined>,

		/** Issue resource. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue} */
		issue: FormControl<string | null | undefined>,

		/** Number of conversations attached to the issue at this point in time. */
		labeledConversationsCount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStatsFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStatsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			issue: new FormControl<string | null | undefined>(undefined),
			labeledConversationsCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for deleting an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelMetadata {

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** The request to delete an issue model. */
		request?: GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequest;
	}

	/** Metadata for deleting an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelMetadataFormProperties {

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to delete an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequest {

		/** Required. The name of the issue model to delete. */
		name?: string | null;
	}

	/** The request to delete an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequestFormProperties {

		/** Required. The name of the issue model to delete. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequestFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for deploying an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelMetadata {

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** The request to deploy an issue model. */
		request?: GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelRequest;
	}

	/** Metadata for deploying an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelMetadataFormProperties {

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1DeployIssueModelMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to deploy an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelRequest {

		/** Required. The issue model to deploy. */
		name?: string | null;
	}

	/** The request to deploy an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelRequestFormProperties {

		/** Required. The issue model to deploy. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1DeployIssueModelRequestFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to deploy an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelResponse {
	}

	/** The response to deploy an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelResponseFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1DeployIssueModelResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelResponseFormProperties>({
		});

	}


	/** Metadata for an export insights operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataMetadata {

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Partial errors during export operation that might cause the operation output to be incomplete. */
		partialErrors?: Array<GoogleRpcStatus>;

		/** The request to export insights. */
		request?: GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequest;
	}

	/** Metadata for an export insights operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataMetadataFormProperties {

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to export insights. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequest {

		/** A BigQuery Table Reference. */
		bigQueryDestination?: GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequestBigQueryDestination;

		/** A filter to reduce results to a specific subset. Useful for exporting conversations with specific properties. */
		filter?: string | null;

		/** A fully qualified KMS key name for BigQuery tables protected by CMEK. Format: projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}/cryptoKeyVersions/{version} */
		kmsKey?: string | null;

		/** Required. The parent resource to export data from. */
		parent?: string | null;

		/** Options for what to do if the destination table already exists. */
		writeDisposition?: GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDisposition | null;
	}

	/** The request to export insights. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequestFormProperties {

		/** A filter to reduce results to a specific subset. Useful for exporting conversations with specific properties. */
		filter: FormControl<string | null | undefined>,

		/** A fully qualified KMS key name for BigQuery tables protected by CMEK. Format: projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}/cryptoKeyVersions/{version} */
		kmsKey: FormControl<string | null | undefined>,

		/** Required. The parent resource to export data from. */
		parent: FormControl<string | null | undefined>,

		/** Options for what to do if the destination table already exists. */
		writeDisposition: FormControl<GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDisposition | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequestFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			kmsKey: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
			writeDisposition: new FormControl<GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestWriteDisposition | null | undefined>(undefined),
		});

	}


	/** A BigQuery Table Reference. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequestBigQueryDestination {

		/** Required. The name of the BigQuery dataset that the snapshot result should be exported to. If this dataset does not exist, the export call returns an INVALID_ARGUMENT error. */
		dataset?: string | null;

		/** A project ID or number. If specified, then export will attempt to write data to this project instead of the resource project. Otherwise, the resource project will be used. */
		projectId?: string | null;

		/** The BigQuery table name to which the insights data should be written. If this table does not exist, the export call returns an INVALID_ARGUMENT error. */
		table?: string | null;
	}

	/** A BigQuery Table Reference. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequestBigQueryDestinationFormProperties {

		/** Required. The name of the BigQuery dataset that the snapshot result should be exported to. If this dataset does not exist, the export call returns an INVALID_ARGUMENT error. */
		dataset: FormControl<string | null | undefined>,

		/** A project ID or number. If specified, then export will attempt to write data to this project instead of the resource project. Otherwise, the resource project will be used. */
		projectId: FormControl<string | null | undefined>,

		/** The BigQuery table name to which the insights data should be written. If this table does not exist, the export call returns an INVALID_ARGUMENT error. */
		table: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequestBigQueryDestinationFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequestBigQueryDestinationFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for an export insights operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataResponse {
	}

	/** Response for an export insights operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataResponseFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataResponseFormProperties>({
		});

	}


	/** The metadata for an IngestConversations operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadata {

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Statistics for IngestConversations operation. */
		ingestConversationsStats?: GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStats;

		/** Output only. Partial errors during ingest operation that might cause the operation output to be incomplete. */
		partialErrors?: Array<GoogleRpcStatus>;

		/** The request to ingest conversations. */
		request?: GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequest;
	}

	/** The metadata for an IngestConversations operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataFormProperties {

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Statistics for IngestConversations operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStats {

		/** Output only. The number of objects skipped because another conversation with the same transcript uri had already been ingested. */
		duplicatesSkippedCount?: number | null;

		/** Output only. The number of objects which were unable to be ingested due to errors. The errors are populated in the partial_errors field. */
		failedIngestCount?: number | null;

		/** Output only. The number of objects processed during the ingest operation. */
		processedObjectCount?: number | null;

		/** Output only. The number of new conversations added during this ingest operation. */
		successfulIngestCount?: number | null;
	}

	/** Statistics for IngestConversations operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStatsFormProperties {

		/** Output only. The number of objects skipped because another conversation with the same transcript uri had already been ingested. */
		duplicatesSkippedCount: FormControl<number | null | undefined>,

		/** Output only. The number of objects which were unable to be ingested due to errors. The errors are populated in the partial_errors field. */
		failedIngestCount: FormControl<number | null | undefined>,

		/** Output only. The number of objects processed during the ingest operation. */
		processedObjectCount: FormControl<number | null | undefined>,

		/** Output only. The number of new conversations added during this ingest operation. */
		successfulIngestCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStatsFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStatsFormProperties>({
			duplicatesSkippedCount: new FormControl<number | null | undefined>(undefined),
			failedIngestCount: new FormControl<number | null | undefined>(undefined),
			processedObjectCount: new FormControl<number | null | undefined>(undefined),
			successfulIngestCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request to ingest conversations. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequest {

		/** Configuration that applies to all conversations. */
		conversationConfig?: GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfig;

		/** Configuration for Cloud Storage bucket sources. */
		gcsSource?: GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestGcsSource;

		/** Required. The parent resource for new conversations. */
		parent?: string | null;

		/** DLP resources used for redaction while ingesting conversations. */
		redactionConfig?: GoogleCloudContactcenterinsightsV1alpha1RedactionConfig;

		/** Speech-to-Text configuration. */
		speechConfig?: GoogleCloudContactcenterinsightsV1alpha1SpeechConfig;

		/** Configuration for processing transcript objects. */
		transcriptObjectConfig?: GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestTranscriptObjectConfig;
	}

	/** The request to ingest conversations. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestFormProperties {

		/** Required. The parent resource for new conversations. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration that applies to all conversations. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfig {

		/** Optional. For audio conversations, this field indicates which of the channels, 1 or 2, contains the agent. Note that this must be set for audio conversations to be properly displayed and analyzed. */
		agentChannel?: number | null;

		/** An opaque, user-specified string representing the human agent who handled the conversations. */
		agentId?: string | null;

		/** Optional. For audio conversations, this field indicates which of the channels, 1 or 2, contains the customer. Note that this must be set for audio conversations to be properly displayed and analyzed. */
		customerChannel?: number | null;
	}

	/** Configuration that applies to all conversations. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfigFormProperties {

		/** Optional. For audio conversations, this field indicates which of the channels, 1 or 2, contains the agent. Note that this must be set for audio conversations to be properly displayed and analyzed. */
		agentChannel: FormControl<number | null | undefined>,

		/** An opaque, user-specified string representing the human agent who handled the conversations. */
		agentId: FormControl<string | null | undefined>,

		/** Optional. For audio conversations, this field indicates which of the channels, 1 or 2, contains the customer. Note that this must be set for audio conversations to be properly displayed and analyzed. */
		customerChannel: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfigFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfigFormProperties>({
			agentChannel: new FormControl<number | null | undefined>(undefined),
			agentId: new FormControl<string | null | undefined>(undefined),
			customerChannel: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Configuration for Cloud Storage bucket sources. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestGcsSource {

		/** Optional. Specifies the type of the objects in `bucket_uri`. */
		bucketObjectType?: GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSourceBucketObjectType | null;

		/** Required. The Cloud Storage bucket containing source objects. */
		bucketUri?: string | null;
	}

	/** Configuration for Cloud Storage bucket sources. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestGcsSourceFormProperties {

		/** Optional. Specifies the type of the objects in `bucket_uri`. */
		bucketObjectType: FormControl<GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSourceBucketObjectType | null | undefined>,

		/** Required. The Cloud Storage bucket containing source objects. */
		bucketUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestGcsSourceFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestGcsSourceFormProperties>({
			bucketObjectType: new FormControl<GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSourceBucketObjectType | null | undefined>(undefined),
			bucketUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** DLP resources used for redaction while ingesting conversations. */
	export interface GoogleCloudContactcenterinsightsV1alpha1RedactionConfig {

		/** The fully-qualified DLP deidentify template resource name. Format: `projects/{project}/deidentifyTemplates/{template}` */
		deidentifyTemplate?: string | null;

		/** The fully-qualified DLP inspect template resource name. Format: `projects/{project}/locations/{location}/inspectTemplates/{template}` */
		inspectTemplate?: string | null;
	}

	/** DLP resources used for redaction while ingesting conversations. */
	export interface GoogleCloudContactcenterinsightsV1alpha1RedactionConfigFormProperties {

		/** The fully-qualified DLP deidentify template resource name. Format: `projects/{project}/deidentifyTemplates/{template}` */
		deidentifyTemplate: FormControl<string | null | undefined>,

		/** The fully-qualified DLP inspect template resource name. Format: `projects/{project}/locations/{location}/inspectTemplates/{template}` */
		inspectTemplate: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1RedactionConfigFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1RedactionConfigFormProperties>({
			deidentifyTemplate: new FormControl<string | null | undefined>(undefined),
			inspectTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Speech-to-Text configuration. */
	export interface GoogleCloudContactcenterinsightsV1alpha1SpeechConfig {

		/** The fully-qualified Speech Recognizer resource name. Format: `projects/{project_id}/locations/{location}/recognizer/{recognizer}` */
		speechRecognizer?: string | null;
	}

	/** Speech-to-Text configuration. */
	export interface GoogleCloudContactcenterinsightsV1alpha1SpeechConfigFormProperties {

		/** The fully-qualified Speech Recognizer resource name. Format: `projects/{project_id}/locations/{location}/recognizer/{recognizer}` */
		speechRecognizer: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1SpeechConfigFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1SpeechConfigFormProperties>({
			speechRecognizer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for processing transcript objects. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestTranscriptObjectConfig {

		/** Required. The medium transcript objects represent. */
		medium?: GoogleCloudContactcenterinsightsV1ConversationMedium | null;
	}

	/** Configuration for processing transcript objects. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestTranscriptObjectConfigFormProperties {

		/** Required. The medium transcript objects represent. */
		medium: FormControl<GoogleCloudContactcenterinsightsV1ConversationMedium | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestTranscriptObjectConfigFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestTranscriptObjectConfigFormProperties>({
			medium: new FormControl<GoogleCloudContactcenterinsightsV1ConversationMedium | null | undefined>(undefined),
		});

	}


	/** The response to an IngestConversations operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IngestConversationsResponse {
	}

	/** The response to an IngestConversations operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1IngestConversationsResponseFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1IngestConversationsResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1IngestConversationsResponseFormProperties>({
		});

	}


	/** Metadata for undeploying an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelMetadata {

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** The request to undeploy an issue model. */
		request?: GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelRequest;
	}

	/** Metadata for undeploying an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelMetadataFormProperties {

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelMetadataFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to undeploy an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelRequest {

		/** Required. The issue model to undeploy. */
		name?: string | null;
	}

	/** The request to undeploy an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelRequestFormProperties {

		/** Required. The issue model to undeploy. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelRequestFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response to undeploy an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelResponse {
	}

	/** The response to undeploy an issue model. */
	export interface GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelResponseFormProperties {
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelResponseFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelResponseFormProperties>({
		});

	}


	/** The metadata for an UploadConversation operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1UploadConversationMetadata {

		/** Output only. The operation name for a successfully created analysis operation, if any. */
		analysisOperation?: string | null;

		/** DLP resources used for redaction while ingesting conversations. */
		appliedRedactionConfig?: GoogleCloudContactcenterinsightsV1alpha1RedactionConfig;

		/** Output only. The time the operation was created. */
		createTime?: string | null;

		/** Output only. The time the operation finished running. */
		endTime?: string | null;

		/** Request to upload a conversation. */
		request?: GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequest;
	}

	/** The metadata for an UploadConversation operation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1UploadConversationMetadataFormProperties {

		/** Output only. The operation name for a successfully created analysis operation, if any. */
		analysisOperation: FormControl<string | null | undefined>,

		/** Output only. The time the operation was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time the operation finished running. */
		endTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1UploadConversationMetadataFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1UploadConversationMetadataFormProperties>({
			analysisOperation: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to upload a conversation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequest {

		/** The conversation resource. */
		conversation?: GoogleCloudContactcenterinsightsV1alpha1Conversation;

		/** Optional. A unique ID for the new conversation. This ID will become the final component of the conversation's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-` */
		conversationId?: string | null;

		/** Required. The parent resource of the conversation. */
		parent?: string | null;

		/** DLP resources used for redaction while ingesting conversations. */
		redactionConfig?: GoogleCloudContactcenterinsightsV1alpha1RedactionConfig;

		/** Speech-to-Text configuration. */
		speechConfig?: GoogleCloudContactcenterinsightsV1alpha1SpeechConfig;
	}

	/** Request to upload a conversation. */
	export interface GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequestFormProperties {

		/** Optional. A unique ID for the new conversation. This ID will become the final component of the conversation's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-` */
		conversationId: FormControl<string | null | undefined>,

		/** Required. The parent resource of the conversation. */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudContactcenterinsightsV1alpha1UploadConversationRequestFormGroup() {
		return new FormGroup<GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequestFormProperties>({
			conversationId: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<GoogleLongrunningOperation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunningListOperationsResponseFormGroup() {
		return new FormGroup<GoogleLongrunningListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: GoogleRpcStatus;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleLongrunningOperationFormGroup() {
		return new FormGroup<GoogleLongrunningOperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets an issue model's statistics.
		 * Get v1/{issueModel}:calculateIssueModelStats
		 * @param {string} issueModel Required. The resource name of the issue model to query against.
		 * @return {GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse} Successful response
		 */
		Contactcenterinsights_projects_locations_issueModels_calculateIssueModelStats(issueModel: string): Observable<GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse> {
			return this.http.get<GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse>(this.baseUri + 'v1/' + (issueModel == null ? '' : encodeURIComponent(issueModel)) + ':calculateIssueModelStats', {});
		}

		/**
		 * Gets conversation statistics.
		 * Get v1/{location}/conversations:calculateStats
		 * @param {string} location Required. The location of the conversations.
		 * @param {string} filter A filter to reduce results to a specific subset. This field is useful for getting statistics about conversations with specific properties.
		 * @return {GoogleCloudContactcenterinsightsV1CalculateStatsResponse} Successful response
		 */
		Contactcenterinsights_projects_locations_conversations_calculateStats(location: string, filter: string | null | undefined): Observable<GoogleCloudContactcenterinsightsV1CalculateStatsResponse> {
			return this.http.get<GoogleCloudContactcenterinsightsV1CalculateStatsResponse>(this.baseUri + 'v1/' + (location == null ? '' : encodeURIComponent(location)) + '/conversations:calculateStats&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Deletes a view.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the view to delete.
		 * @param {boolean} force If set to true, all of this conversation's analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Contactcenterinsights_projects_locations_views_delete(name: string, force: boolean | null | undefined): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&force=' + force, {});
		}

		/**
		 * Gets a view.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the view to get.
		 * @param {Contactcenterinsights_projects_locations_views_getView} view The level of details of the conversation. Default is `FULL`.
		 * @return {GoogleCloudContactcenterinsightsV1View} Successful response
		 */
		Contactcenterinsights_projects_locations_views_get(name: string, view: Contactcenterinsights_projects_locations_views_getView | null | undefined): Observable<GoogleCloudContactcenterinsightsV1View> {
			return this.http.get<GoogleCloudContactcenterinsightsV1View>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, {});
		}

		/**
		 * Updates a view.
		 * Patch v1/{name}
		 * @param {string} name Immutable. The resource name of the view. Format: projects/{project}/locations/{location}/views/{view}
		 * @param {string} updateMask The list of fields to be updated.
		 * @return {GoogleCloudContactcenterinsightsV1View} Successful response
		 */
		Contactcenterinsights_projects_locations_views_patch(name: string, updateMask: string | null | undefined, requestBody: GoogleCloudContactcenterinsightsV1View): Observable<GoogleCloudContactcenterinsightsV1View> {
			return this.http.patch<GoogleCloudContactcenterinsightsV1View>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Contactcenterinsights_projects_locations_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Contactcenterinsights_projects_locations_operations_cancel(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', null, {});
		}

		/**
		 * Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.
		 * Post v1/{name}:deploy
		 * @param {string} name Required. The issue model to deploy.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Contactcenterinsights_projects_locations_issueModels_deploy(name: string, requestBody: GoogleCloudContactcenterinsightsV1DeployIssueModelRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':deploy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.
		 * Post v1/{name}:undeploy
		 * @param {string} name Required. The issue model to undeploy.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Contactcenterinsights_projects_locations_issueModels_undeploy(name: string, requestBody: GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':undeploy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists analyses.
		 * Get v1/{parent}/analyses
		 * @param {string} parent Required. The parent resource of the analyses.
		 * @param {string} filter A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.
		 * @param {number} pageSize The maximum number of analyses to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
		 * @param {string} pageToken The value returned by the last `ListAnalysesResponse`; indicates that this is a continuation of a prior `ListAnalyses` call and the system should return the next page of data.
		 * @return {GoogleCloudContactcenterinsightsV1ListAnalysesResponse} Successful response
		 */
		Contactcenterinsights_projects_locations_conversations_analyses_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudContactcenterinsightsV1ListAnalysesResponse> {
			return this.http.get<GoogleCloudContactcenterinsightsV1ListAnalysesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/analyses&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an analysis. The long running operation is done when the analysis has completed.
		 * Post v1/{parent}/analyses
		 * @param {string} parent Required. The parent resource of the analysis.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Contactcenterinsights_projects_locations_conversations_analyses_create(parent: string, requestBody: GoogleCloudContactcenterinsightsV1Analysis): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/analyses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists conversations.
		 * Get v1/{parent}/conversations
		 * @param {string} parent Required. The parent resource of the conversation.
		 * @param {string} filter A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.
		 * @param {number} pageSize The maximum number of conversations to return in the response. A valid page size ranges from 0 to 1,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.
		 * @param {string} pageToken The value returned by the last `ListConversationsResponse`. This value indicates that this is a continuation of a prior `ListConversations` call and that the system should return the next page of data.
		 * @param {Contactcenterinsights_projects_locations_views_getView} view The level of details of the conversation. Default is `BASIC`.
		 * @return {GoogleCloudContactcenterinsightsV1ListConversationsResponse} Successful response
		 */
		Contactcenterinsights_projects_locations_conversations_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Contactcenterinsights_projects_locations_views_getView | null | undefined): Observable<GoogleCloudContactcenterinsightsV1ListConversationsResponse> {
			return this.http.get<GoogleCloudContactcenterinsightsV1ListConversationsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/conversations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Creates a conversation.
		 * Post v1/{parent}/conversations
		 * @param {string} parent Required. The parent resource of the conversation.
		 * @param {string} conversationId A unique ID for the new conversation. This ID will become the final component of the conversation's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`
		 * @return {GoogleCloudContactcenterinsightsV1Conversation} Successful response
		 */
		Contactcenterinsights_projects_locations_conversations_create(parent: string, conversationId: string | null | undefined, requestBody: GoogleCloudContactcenterinsightsV1Conversation): Observable<GoogleCloudContactcenterinsightsV1Conversation> {
			return this.http.post<GoogleCloudContactcenterinsightsV1Conversation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/conversations&conversationId=' + (conversationId == null ? '' : encodeURIComponent(conversationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Analyzes multiple conversations in a single request.
		 * Post v1/{parent}/conversations:bulkAnalyze
		 * @param {string} parent Required. The parent resource to create analyses in.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Contactcenterinsights_projects_locations_conversations_bulkAnalyze(parent: string, requestBody: GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/conversations:bulkAnalyze', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes multiple conversations in a single request.
		 * Post v1/{parent}/conversations:bulkDelete
		 * @param {string} parent Required. The parent resource to delete conversations from. Format: projects/{project}/locations/{location}
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Contactcenterinsights_projects_locations_conversations_bulkDelete(parent: string, requestBody: GoogleCloudContactcenterinsightsV1BulkDeleteConversationsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/conversations:bulkDelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports conversations and processes them according to the user's configuration.
		 * Post v1/{parent}/conversations:ingest
		 * @param {string} parent Required. The parent resource for new conversations.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Contactcenterinsights_projects_locations_conversations_ingest(parent: string, requestBody: GoogleCloudContactcenterinsightsV1IngestConversationsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/conversations:ingest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a longrunning conversation upload operation. This method differs from CreateConversation by allowing audio transcription and optional DLP redaction.
		 * Post v1/{parent}/conversations:upload
		 * @param {string} parent Required. The parent resource of the conversation.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Contactcenterinsights_projects_locations_conversations_upload(parent: string, requestBody: GoogleCloudContactcenterinsightsV1UploadConversationRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/conversations:upload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Export insights data to a destination defined in the request body.
		 * Post v1/{parent}/insightsdata:export
		 * @param {string} parent Required. The parent resource to export data from.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Contactcenterinsights_projects_locations_insightsdata_export(parent: string, requestBody: GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/insightsdata:export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists issue models.
		 * Get v1/{parent}/issueModels
		 * @param {string} parent Required. The parent resource of the issue model.
		 * @return {GoogleCloudContactcenterinsightsV1ListIssueModelsResponse} Successful response
		 */
		Contactcenterinsights_projects_locations_issueModels_list(parent: string): Observable<GoogleCloudContactcenterinsightsV1ListIssueModelsResponse> {
			return this.http.get<GoogleCloudContactcenterinsightsV1ListIssueModelsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/issueModels', {});
		}

		/**
		 * Creates an issue model.
		 * Post v1/{parent}/issueModels
		 * @param {string} parent Required. The parent resource of the issue model.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Contactcenterinsights_projects_locations_issueModels_create(parent: string, requestBody: GoogleCloudContactcenterinsightsV1IssueModel): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/issueModels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists issues.
		 * Get v1/{parent}/issues
		 * @param {string} parent Required. The parent resource of the issue.
		 * @return {GoogleCloudContactcenterinsightsV1ListIssuesResponse} Successful response
		 */
		Contactcenterinsights_projects_locations_issueModels_issues_list(parent: string): Observable<GoogleCloudContactcenterinsightsV1ListIssuesResponse> {
			return this.http.get<GoogleCloudContactcenterinsightsV1ListIssuesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/issues', {});
		}

		/**
		 * Lists phrase matchers.
		 * Get v1/{parent}/phraseMatchers
		 * @param {string} parent Required. The parent resource of the phrase matcher.
		 * @param {string} filter A filter to reduce results to a specific subset. Useful for querying phrase matchers with specific properties.
		 * @param {number} pageSize The maximum number of phrase matchers to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
		 * @param {string} pageToken The value returned by the last `ListPhraseMatchersResponse`. This value indicates that this is a continuation of a prior `ListPhraseMatchers` call and that the system should return the next page of data.
		 * @return {GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse} Successful response
		 */
		Contactcenterinsights_projects_locations_phraseMatchers_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse> {
			return this.http.get<GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/phraseMatchers&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a phrase matcher.
		 * Post v1/{parent}/phraseMatchers
		 * @param {string} parent Required. The parent resource of the phrase matcher. Required. The location to create a phrase matcher for. Format: `projects//locations/` or `projects//locations/`
		 * @return {GoogleCloudContactcenterinsightsV1PhraseMatcher} Successful response
		 */
		Contactcenterinsights_projects_locations_phraseMatchers_create(parent: string, requestBody: GoogleCloudContactcenterinsightsV1PhraseMatcher): Observable<GoogleCloudContactcenterinsightsV1PhraseMatcher> {
			return this.http.post<GoogleCloudContactcenterinsightsV1PhraseMatcher>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/phraseMatchers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists views.
		 * Get v1/{parent}/views
		 * @param {string} parent Required. The parent resource of the views.
		 * @param {number} pageSize The maximum number of views to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
		 * @param {string} pageToken The value returned by the last `ListViewsResponse`; indicates that this is a continuation of a prior `ListViews` call and the system should return the next page of data.
		 * @return {GoogleCloudContactcenterinsightsV1ListViewsResponse} Successful response
		 */
		Contactcenterinsights_projects_locations_views_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudContactcenterinsightsV1ListViewsResponse> {
			return this.http.get<GoogleCloudContactcenterinsightsV1ListViewsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/views&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a view.
		 * Post v1/{parent}/views
		 * @param {string} parent Required. The parent resource of the view. Required. The location to create a view for. Format: `projects//locations/` or `projects//locations/`
		 * @return {GoogleCloudContactcenterinsightsV1View} Successful response
		 */
		Contactcenterinsights_projects_locations_views_create(parent: string, requestBody: GoogleCloudContactcenterinsightsV1View): Observable<GoogleCloudContactcenterinsightsV1View> {
			return this.http.post<GoogleCloudContactcenterinsightsV1View>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/views', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Contactcenterinsights_projects_locations_views_getView { CONVERSATION_VIEW_UNSPECIFIED = 'CONVERSATION_VIEW_UNSPECIFIED', FULL = 'FULL', BASIC = 'BASIC' }

}

